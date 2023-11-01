import * as yup from 'yup';

export const companyValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  location: yup.string().nullable(),
  established_date: yup.date().nullable(),
  industry: yup.string().nullable(),
  name: yup.string().required(),
});
