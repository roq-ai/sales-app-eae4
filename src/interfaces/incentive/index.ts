import { EmployeeInterface } from 'interfaces/employee';
import { SalesInterface } from 'interfaces/sales';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface IncentiveInterface {
  id?: string;
  incentive_date: any;
  incentive_amount: number;
  incentive_type: string;
  employee_id: string;
  sales_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  sales?: SalesInterface;
  company?: CompanyInterface;
  _count?: {};
}

export interface IncentiveGetQueryInterface extends GetQueryInterface {
  id?: string;
  incentive_type?: string;
  employee_id?: string;
  sales_id?: string;
  company_id?: string;
}
