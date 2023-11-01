import { GetQueryInterface } from 'interfaces';

export interface PerformanceMetricInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PerformanceMetricGetQueryInterface extends GetQueryInterface {
  id?: string;
}
