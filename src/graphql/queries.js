/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVolunteerSubmission = /* GraphQL */ `
  query GetVolunteerSubmission($id: ID!) {
    getVolunteerSubmission(id: $id) {
      id
      firstName
      lastName
      email
      phone
      comments
      knockOnDoors
      meetSteve
      walkWithLiterature
      write
      yardSign
      mailingList
      notifyNextEvent
      submittedAt
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listVolunteerSubmissions = /* GraphQL */ `
  query ListVolunteerSubmissions(
    $filter: ModelVolunteerSubmissionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVolunteerSubmissions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        firstName
        lastName
        email
        phone
        comments
        knockOnDoors
        meetSteve
        walkWithLiterature
        write
        yardSign
        mailingList
        notifyNextEvent
        submittedAt
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
