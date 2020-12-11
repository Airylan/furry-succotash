/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateArticleDetails = /* GraphQL */ `
  subscription OnCreateArticleDetails {
    onCreateArticleDetails {
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
export const onUpdateArticleDetails = /* GraphQL */ `
  subscription OnUpdateArticleDetails {
    onUpdateArticleDetails {
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
export const onDeleteArticleDetails = /* GraphQL */ `
  subscription OnDeleteArticleDetails {
    onDeleteArticleDetails {
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
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
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
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
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
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
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
export const onCreateCampaign = /* GraphQL */ `
  subscription OnCreateCampaign {
    onCreateCampaign {
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
export const onUpdateCampaign = /* GraphQL */ `
  subscription OnUpdateCampaign {
    onUpdateCampaign {
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
export const onDeleteCampaign = /* GraphQL */ `
  subscription OnDeleteCampaign {
    onDeleteCampaign {
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
