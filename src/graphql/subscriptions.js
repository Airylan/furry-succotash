/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTag = /* GraphQL */ `
  subscription OnCreateTag {
    onCreateTag {
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
export const onUpdateTag = /* GraphQL */ `
  subscription OnUpdateTag {
    onUpdateTag {
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
export const onDeleteTag = /* GraphQL */ `
  subscription OnDeleteTag {
    onDeleteTag {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
