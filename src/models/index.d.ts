import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class GMInfo {
  readonly NewField?: string;
  readonly content?: string;
  constructor(init: ModelInit<GMInfo>);
}

export declare class PlayerInfo {
  readonly NewField?: string;
  readonly content?: string;
  readonly revealed?: boolean;
  constructor(init: ModelInit<PlayerInfo>);
}

export declare class ArticleDetails {
  readonly id: string;
  readonly content?: string;
  readonly oocCreatedDate?: string;
  readonly icCreatedDate?: string;
  readonly gmInfo?: GMInfo;
  readonly playerInfo?: PlayerInfo;
  constructor(init: ModelInit<ArticleDetails>);
  static copyOf(source: ArticleDetails, mutator: (draft: MutableModel<ArticleDetails>) => MutableModel<ArticleDetails> | void): ArticleDetails;
}

export declare class Article {
  readonly id: string;
  readonly title: string;
  readonly tags?: (string | null)[];
  readonly ArticleDetails?: ArticleDetails;
  constructor(init: ModelInit<Article>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

export declare class Campaign {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly gm: string;
  readonly tags?: (string | null)[];
  constructor(init: ModelInit<Campaign>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}