/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGif = /* GraphQL */ `
  query GetGif($id: ID!) {
    getGif(id: $id) {
      id
      altText
      url
      createdAt
      updatedAt
    }
  }
`;
export const listGifs = /* GraphQL */ `
  query ListGifs(
    $filter: ModelGifFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGifs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        altText
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
