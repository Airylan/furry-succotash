/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTag = /* GraphQL */ `
  mutation CreateTag(
    $input: CreateTagInput!
    $condition: ModelTagConditionInput
  ) {
    createTag(input: $input, condition: $condition) {
      id
      label
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTag = /* GraphQL */ `
  mutation UpdateTag(
    $input: UpdateTagInput!
    $condition: ModelTagConditionInput
  ) {
    updateTag(input: $input, condition: $condition) {
      id
      label
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTag = /* GraphQL */ `
  mutation DeleteTag(
    $input: DeleteTagInput!
    $condition: ModelTagConditionInput
  ) {
    deleteTag(input: $input, condition: $condition) {
      id
      label
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
      content
      createdDate {
        ooc
        ic
      }
      gmInfo {
        content
      }
      playerInfo {
        content
        revealed
      }
      campaignId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      campaign {
        id
        title
        description
        gm
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
      content
      createdDate {
        ooc
        ic
      }
      gmInfo {
        content
      }
      playerInfo {
        content
        revealed
      }
      campaignId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      campaign {
        id
        title
        description
        gm
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
      content
      createdDate {
        ooc
        ic
      }
      gmInfo {
        content
      }
      playerInfo {
        content
        revealed
      }
      campaignId
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      campaign {
        id
        title
        description
        gm
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      articles {
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      articles {
        nextToken
        startedAt
      }
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      articles {
        nextToken
        startedAt
      }
    }
  }
`;
