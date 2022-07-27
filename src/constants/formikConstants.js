import * as yup from 'yup';

export const initialValues = {
    name: '',
    number: ''
  };
  
export const schema = yup.object({
    name: yup.string().required(),
    number: yup.string().required().test({
      test: (value) => (/^[\d+][\d()-]{4,14}\d$/i).test(value),
    }),
  });