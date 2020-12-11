/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createArticleDetails = /* GraphQL */ `
  mutation CreateArticleDetails(
    $input: CreateArticleDetailsInput!
    $condition: ModelArticleDetailsConditionInput
  ) {
    createArticleDetails(input: $input, condition: $condition) {
      id
      content
      oocCreatedDate
      icCreatedDate
      gmInfo {
        NewField
        content
      }
      playerInfo {
        NewField
        content
        revealed
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateArticleDetails = /* GraphQL */ `
  mutation UpdateArticleDetails(
    $input: UpdateArticleDetailsInput!
    $condition: ModelArticleDetailsConditionInput
  ) {
    updateArticleDetails(input: $input, condition: $condition) {
      id
      content
      oocCreatedDate
      icCreatedDate
      gmInfo {
        NewField
        content
      }
      playerInfo {
        NewField
        content
        revealed
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteArticleDetails = /* GraphQL */ `
  mutation DeleteArticleDetails(
    $input: DeleteArticleDetailsInput!
    $condition: ModelArticleDetailsConditionInput
  ) {
    deleteArticleDetails(input: $input, condition: $condition) {
      id
      content
      oocCreatedDate
      icCreatedDate
      gmInfo {
        NewField
        content
      }
      playerInfo {
        NewField
        content
        revealed
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createArticle = /* GraphQL */ `
  mutation CreateArticle(
    $input: CreateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    createArticle(input: $input, condition: $condition) {
      id
      title
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArticleDetails {
        id
        content
        oocCreatedDate
        icCreatedDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateArticle = /* GraphQL */ `
  mutation UpdateArticle(
    $input: UpdateArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    updateArticle(input: $input, condition: $condition) {
      id
      title
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArticleDetails {
        id
        content
        oocCreatedDate
        icCreatedDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteArticle = /* GraphQL */ `
  mutation DeleteArticle(
    $input: DeleteArticleInput!
    $condition: ModelArticleConditionInput
  ) {
    deleteArticle(input: $input, condition: $condition) {
      id
      title
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArticleDetails {
        id
        content
        oocCreatedDate
        icCreatedDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createCampaign = /* GraphQL */ `
  mutation CreateCampaign(
    $input: CreateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    createCampaign(input: $input, condition: $condition) {
      id
      title
      description
      gm
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateCampaign = /* GraphQL */ `
  mutation UpdateCampaign(
    $input: UpdateCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    updateCampaign(input: $input, condition: $condition) {
      id
      title
      description
      gm
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteCampaign = /* GraphQL */ `
  mutation DeleteCampaign(
    $input: DeleteCampaignInput!
    $condition: ModelCampaignConditionInput
  ) {
    deleteCampaign(input: $input, condition: $condition) {
      id
      title
      description
      gm
      tags
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
