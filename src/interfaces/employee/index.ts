import { IncentiveInterface } from 'interfaces/incentive';
import { SalesInterface } from 'interfaces/sales';
import { UserInterface } from 'interfaces/user';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface EmployeeInterface {
  id?: string;
  job_title: string;
  hire_date: any;
  salary: number;
  commission_pct?: number;
  user_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  incentive?: IncentiveInterface[];
  sales?: SalesInterface[];
  user?: UserInterface;
  company?: CompanyInterface;
  _count?: {
    incentive?: number;
    sales?: number;
  };
}

export interface EmployeeGetQueryInterface extends GetQueryInterface {
  id?: string;
  job_title?: string;
  user_id?: string;
  company_id?: string;
}
