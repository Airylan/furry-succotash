// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ArticleDetails, Article, Campaign, GMInfo, PlayerInfo } = initSchema(schema);

export {
  ArticleDetails,
  Article,
  Campaign,
  GMInfo,
  PlayerInfo
};