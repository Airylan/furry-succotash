import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class GMInfo {
  readonly content?: string;
  constructor(init: ModelInit<GMInfo>);
}

export declare class PlayerInfo {
  readonly content?: string;
  readonly revealed?: boolean;
  constructor(init: ModelInit<PlayerInfo>);
}

export declare class CreatedDates {
  readonly ooc?: string;
  readonly ic?: string;
  constructor(init: ModelInit<CreatedDates>);
}

export declare class Tag {
  readonly id: string;
  readonly label: string;
  constructor(init: ModelInit<Tag>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag>) => MutableModel<Tag> | void): Tag;
}

export declare class Article {
  readonly id: string;
  readonly title: string;
  readonly content?: string;
  readonly createdDate?: CreatedDates;
  readonly gmInfo?: GMInfo;
  readonly playerInfo?: PlayerInfo;
  readonly campaign?: Campaign;
  constructor(init: ModelInit<Article>);
  static copyOf(source: Article, mutator: (draft: MutableModel<Article>) => MutableModel<Article> | void): Article;
}

export declare class Campaign {
  readonly id: string;
  readonly title: string;
  readonly description?: string;
  readonly gm: string;
  readonly articles?: (Article | null)[];
  constructor(init: ModelInit<Campaign>);
  static copyOf(source: Campaign, mutator: (draft: MutableModel<Campaign>) => MutableModel<Campaign> | void): Campaign;
}