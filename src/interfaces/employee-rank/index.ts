import { GetQueryInterface } from 'interfaces';

export interface EmployeeRankInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface EmployeeRankGetQueryInterface extends GetQueryInterface {
  id?: string;
}
