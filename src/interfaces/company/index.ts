import { EmployeeInterface } from 'interfaces/employee';
import { IncentiveInterface } from 'interfaces/incentive';
import { SalesInterface } from 'interfaces/sales';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  location?: string;
  established_date?: any;
  industry?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  employee?: EmployeeInterface[];
  incentive?: IncentiveInterface[];
  sales?: SalesInterface[];

  _count?: {
    employee?: number;
    incentive?: number;
    sales?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  industry?: string;
  name?: string;
  tenant_id?: string;
}
