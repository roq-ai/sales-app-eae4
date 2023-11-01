import { GetQueryInterface } from 'interfaces';

export interface IncentiveSchemeInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface IncentiveSchemeGetQueryInterface extends GetQueryInterface {
  id?: string;
}
