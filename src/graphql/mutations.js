/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVolunteerSubmission = /* GraphQL */ `
  mutation CreateVolunteerSubmission(
    $input: CreateVolunteerSubmissionInput!
    $condition: ModelVolunteerSubmissionConditionInput
  ) {
    createVolunteerSubmission(input: $input, condition: $condition) {
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
export const updateVolunteerSubmission = /* GraphQL */ `
  mutation UpdateVolunteerSubmission(
    $input: UpdateVolunteerSubmissionInput!
    $condition: ModelVolunteerSubmissionConditionInput
  ) {
    updateVolunteerSubmission(input: $input, condition: $condition) {
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
export const deleteVolunteerSubmission = /* GraphQL */ `
  mutation DeleteVolunteerSubmission(
    $input: DeleteVolunteerSubmissionInput!
    $condition: ModelVolunteerSubmissionConditionInput
  ) {
    deleteVolunteerSubmission(input: $input, condition: $condition) {
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
