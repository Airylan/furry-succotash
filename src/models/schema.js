export const schema = {
    "models": {
        "Tag": {
            "name": "Tag",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "label": {
                    "name": "label",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TagArticles": {
                    "name": "TagArticles",
                    "isArray": true,
                    "type": {
                        "model": "TagArticle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "tag"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Tags",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "TagArticle": {
            "name": "TagArticle",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "tag": {
                    "name": "tag",
                    "isArray": false,
                    "type": {
                        "model": "Tag"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "tagID"
                    }
                },
                "article": {
                    "name": "article",
                    "isArray": false,
                    "type": {
                        "model": "Article"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "articleID"
                    }
                }
            },
            "syncable": true,
            "pluralName": "TagArticles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {
                        "queries": null
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTag",
                        "fields": [
                            "tagID",
                            "articleID"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byArticle",
                        "fields": [
                            "articleID",
                            "tagID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            },
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Article": {
            "name": "Article",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdDate": {
                    "name": "createdDate",
                    "isArray": false,
                    "type": {
                        "nonModel": "CreatedDates"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "gmInfo": {
                    "name": "gmInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "GMInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "playerInfo": {
                    "name": "playerInfo",
                    "isArray": false,
                    "type": {
                        "nonModel": "PlayerInfo"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "campaign": {
                    "name": "campaign",
                    "isArray": false,
                    "type": {
                        "model": "Campaign"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetName": "campaignId"
                    }
                },
                "tags": {
                    "name": "tags",
                    "isArray": true,
                    "type": {
                        "model": "TagArticle"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "article"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Articles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCampaign",
                        "fields": [
                            "campaignId",
                            "title"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Campaign": {
            "name": "Campaign",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "gm": {
                    "name": "gm",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": true,
                    "attributes": []
                },
                "articles": {
                    "name": "articles",
                    "isArray": true,
                    "type": {
                        "model": "Article"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": "campaign"
                    }
                }
            },
            "syncable": true,
            "pluralName": "Campaigns",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "GMInfo": {
            "name": "GMInfo",
            "fields": {
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PlayerInfo": {
            "name": "PlayerInfo",
            "fields": {
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "revealed": {
                    "name": "revealed",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CreatedDates": {
            "name": "CreatedDates",
            "fields": {
                "ooc": {
                    "name": "ooc",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "ic": {
                    "name": "ic",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "843d7bf6455498f2265f1aad7bbda91c"
};