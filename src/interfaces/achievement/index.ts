import { GetQueryInterface } from 'interfaces';

export interface AchievementInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AchievementGetQueryInterface extends GetQueryInterface {
  id?: string;
}
