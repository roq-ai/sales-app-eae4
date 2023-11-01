interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'HR Manager', 'Sales Manager', 'Finance Manager', 'Employee'],
  tenantName: 'Company',
  applicationName: 'sales-app',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: ['Manage sales targets', 'Manage bonus allocations', 'Manage achievements', 'Manage employee ranks'],
  getQuoteUrl: 'https://app.roq.ai/proposal/c1f79845-9fba-4b11-8310-42c5e8926c02',
};
