import * as yup from 'yup';

export const salesValidationSchema = yup.object().shape({
  sales_date: yup.date().required(),
  sales_amount: yup.number().integer().required(),
  sales_region: yup.string().required(),
  employee_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
