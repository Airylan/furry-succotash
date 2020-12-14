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
      TagArticles {
        nextToken
        startedAt
      }
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
      TagArticles {
        nextToken
        startedAt
      }
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
      TagArticles {
        nextToken
        startedAt
      }
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
      tags {
        nextToken
        startedAt
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
      tags {
        nextToken
        startedAt
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
      tags {
        nextToken
        startedAt
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
export const onCreateTagArticle = /* GraphQL */ `
  subscription OnCreateTagArticle {
    onCreateTagArticle {
      id
      tagID
      articleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        label
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      article {
        id
        title
        content
        campaignId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onUpdateTagArticle = /* GraphQL */ `
  subscription OnUpdateTagArticle {
    onUpdateTagArticle {
      id
      tagID
      articleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        label
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      article {
        id
        title
        content
        campaignId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const onDeleteTagArticle = /* GraphQL */ `
  subscription OnDeleteTagArticle {
    onDeleteTagArticle {
      id
      tagID
      articleID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      tag {
        id
        label
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      article {
        id
        title
        content
        campaignId
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
