import * as yup from 'yup';

import { AuthErrors } from '@/common/errors/index';

export const LoginSchema = yup
  .object({
    email: yup.string().email(AuthErrors.InvalidEmail).required(AuthErrors.RequiredField),
    password: yup
      .string()
      .min(8, AuthErrors.minLength)
      .required(AuthErrors.RequiredField)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,30}$/,
        AuthErrors.InvalidPassword
      ),
  })
  .required();

export const AdminSchema = yup
  .object({
    name: yup.string().required(AuthErrors.RequiredField),
    password: yup.string().min(4, AuthErrors.minLength).required(AuthErrors.RequiredField),
  })
  .required();

export const RegisterSchema = yup
  .object({
    firstName: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(2, AuthErrors.minLengthName)
      .max(30, AuthErrors.maxLengthName),
    lastName: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(2, AuthErrors.minLengthName)
      .max(20, AuthErrors.maxLengthName),
    phone: yup
      .string()
      .required(AuthErrors.RequiredField)
      .matches(
        /^(\+38)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
        AuthErrors.InvalidPhone
      ),
    email: yup.string().email(AuthErrors.InvalidEmail).required(AuthErrors.RequiredField),
    password: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(8, AuthErrors.minLength)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,20}$/,
        AuthErrors.InvalidPassword
      ),
    confirmPassword: yup
      .string()
      .required(AuthErrors.RequiredField)
      .min(8, AuthErrors.minLength)
      .matches(
        /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{8,20}$/,
        AuthErrors.InvalidPassword
      ),
  })
  .required();
