import { GetQueryInterface } from 'interfaces';

export interface BonusAllocationInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface BonusAllocationGetQueryInterface extends GetQueryInterface {
  id?: string;
}
