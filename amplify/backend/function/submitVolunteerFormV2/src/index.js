/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_VOLUNTEERFORMSUBMISSIONS_ARN
	STORAGE_VOLUNTEERFORMSUBMISSIONS_NAME
	STORAGE_VOLUNTEERFORMSUBMISSIONS_STREAMARN
Amplify Params - DO NOT EDIT */

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');
const dynamodb = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const sns = new SNSClient({});

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "POST,OPTIONS"
    };

    // Handle CORS preflight
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const body = JSON.parse(event.body);

        const item = {
            id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
            firstName: body.firstName || '',
            lastName: body.lastName || '',
            email: body.email || '',
            phone: body.phone || '',
            comments: body.comments || '',
            interests: JSON.stringify(body.interests || {}),
            submittedAt: new Date().toISOString()
        };

        await dynamodb.send(new PutCommand({
            TableName: process.env.STORAGE_VOLUNTEERFORMSUBMISSIONS_NAME,
            Item: item
        }));

        if (process.env.NOTIFICATION_TOPIC_ARN) {
            const interestsList = Object.entries(body.interests || {})
                .filter(([, checked]) => checked)
                .map(([interest]) => interest)
                .join(', ') || 'None selected';

            try {
                await sns.send(new PublishCommand({
                    TopicArn: process.env.NOTIFICATION_TOPIC_ARN,
                    Subject: `New volunteer form submission from ${item.firstName} ${item.lastName}`,
                    Message: [
                        `Name: ${item.firstName} ${item.lastName}`,
                        `Email: ${item.email}`,
                        `Phone: ${item.phone}`,
                        `Interests: ${interestsList}`,
                        `Comments: ${item.comments}`,
                        `Submitted: ${item.submittedAt}`
                    ].join('\n')
                }));
            } catch (notifyErr) {
                console.error('Error publishing notification:', notifyErr);
            }
        }

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify({ success: true, id: item.id })
        };
    } catch (err) {
        console.error('Error saving submission:', err);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({ success: false, error: err.message })
        };
    }
};