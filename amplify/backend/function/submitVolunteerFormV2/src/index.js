/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	STORAGE_VOLUNTEERFORMSUBMISSIONS_ARN
	STORAGE_VOLUNTEERFORMSUBMISSIONS_NAME
	STORAGE_VOLUNTEERFORMSUBMISSIONS_STREAMARN
Amplify Params - DO NOT EDIT */

const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, PutCommand } = require('@aws-sdk/lib-dynamodb');
const dynamodb = DynamoDBDocumentClient.from(new DynamoDBClient({}));

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