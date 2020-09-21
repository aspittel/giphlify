/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGif = /* GraphQL */ `
  mutation CreateGif(
    $input: CreateGifInput!
    $condition: ModelGifConditionInput
  ) {
    createGif(input: $input, condition: $condition) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
export const updateGif = /* GraphQL */ `
  mutation UpdateGif(
    $input: UpdateGifInput!
    $condition: ModelGifConditionInput
  ) {
    updateGif(input: $input, condition: $condition) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
export const deleteGif = /* GraphQL */ `
  mutation DeleteGif(
    $input: DeleteGifInput!
    $condition: ModelGifConditionInput
  ) {
    deleteGif(input: $input, condition: $condition) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
