// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, TagArticle, Article, Campaign, GMInfo, PlayerInfo, CreatedDates } = initSchema(schema);

export {
  Tag,
  TagArticle,
  Article,
  Campaign,
  GMInfo,
  PlayerInfo,
  CreatedDates
};