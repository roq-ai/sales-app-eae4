import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { useRoqClient } from 'lib/roq';
import * as RoqTypes from 'lib/roq/types';

import { incentiveValidationSchema } from 'validationSchema/incentives';
import { EmployeeInterface } from 'interfaces/employee';
import { SalesInterface } from 'interfaces/sales';
import { CompanyInterface } from 'interfaces/company';
import { IncentiveInterface } from 'interfaces/incentive';

function IncentiveCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const roqClient = useRoqClient();
  const handleSubmit = async (values: IncentiveInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await roqClient.incentive.create({ data: values as RoqTypes.incentive });
      resetForm();
      router.push('/incentives');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<IncentiveInterface>({
    initialValues: {
      incentive_date: new Date(new Date().toDateString()),
      incentive_amount: 0,
      incentive_type: '',
      employee_id: (router.query.employee_id as string) ?? null,
      sales_id: (router.query.sales_id as string) ?? null,
      company_id: (router.query.company_id as string) ?? null,
    },
    validationSchema: incentiveValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Incentives',
              link: '/incentives',
            },
            {
              label: 'Create Incentive',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Incentive
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="incentive_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Incentive Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.incentive_date ? new Date(formik.values?.incentive_date) : null}
              onChange={(value: Date) => formik.setFieldValue('incentive_date', value)}
            />
          </FormControl>

          <NumberInput
            label="Incentive Amount"
            formControlProps={{
              id: 'incentive_amount',
              isInvalid: !!formik.errors?.incentive_amount,
            }}
            name="incentive_amount"
            error={formik.errors?.incentive_amount}
            value={formik.values?.incentive_amount}
            onChange={(valueString, valueNumber) =>
              formik.setFieldValue('incentive_amount', Number.isNaN(valueNumber) ? 0 : valueNumber)
            }
          />

          <TextInput
            error={formik.errors.incentive_type}
            label={'Incentive Type'}
            props={{
              name: 'incentive_type',
              placeholder: 'Incentive Type',
              value: formik.values?.incentive_type,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<EmployeeInterface>
            formik={formik}
            name={'employee_id'}
            label={'Select Employee'}
            placeholder={'Select Employee'}
            fetcher={() => roqClient.employee.findManyWithCount({})}
            labelField={'job_title'}
          />
          <AsyncSelect<SalesInterface>
            formik={formik}
            name={'sales_id'}
            label={'Select Sales'}
            placeholder={'Select Sales'}
            fetcher={() => roqClient.sales.findManyWithCount({})}
            labelField={'sales_region'}
          />
          <AsyncSelect<CompanyInterface>
            formik={formik}
            name={'company_id'}
            label={'Select Company'}
            placeholder={'Select Company'}
            fetcher={() => roqClient.company.findManyWithCount({})}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/incentives')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'incentive',
    operation: AccessOperationEnum.CREATE,
  }),
)(IncentiveCreatePage);
