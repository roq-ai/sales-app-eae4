import { IncentiveInterface } from 'interfaces/incentive';
import { EmployeeInterface } from 'interfaces/employee';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface SalesInterface {
  id?: string;
  sales_date: any;
  sales_amount: number;
  sales_region: string;
  employee_id: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  incentive?: IncentiveInterface[];
  employee?: EmployeeInterface;
  company?: CompanyInterface;
  _count?: {
    incentive?: number;
  };
}

export interface SalesGetQueryInterface extends GetQueryInterface {
  id?: string;
  sales_region?: string;
  employee_id?: string;
  company_id?: string;
}
