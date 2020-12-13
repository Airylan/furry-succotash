// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Tag, Article, Campaign, GMInfo, PlayerInfo, CreatedDates } = initSchema(schema);

export {
  Tag,
  Article,
  Campaign,
  GMInfo,
  PlayerInfo,
  CreatedDates
};