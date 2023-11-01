import * as yup from 'yup';

export const incentiveValidationSchema = yup.object().shape({
  incentive_date: yup.date().required(),
  incentive_amount: yup.number().integer().required(),
  incentive_type: yup.string().required(),
  employee_id: yup.string().nullable().required(),
  sales_id: yup.string().nullable().required(),
  company_id: yup.string().nullable().required(),
});
