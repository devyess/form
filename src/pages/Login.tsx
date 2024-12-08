import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { AuthLayout } from '../components/AuthLayout';
import { LoginFormValues } from '../types/auth';
import { saveToStorage, getFromStorage } from '../utils/storage';

const loginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  rememberMe: Yup.boolean(),
});

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const savedEmail = getFromStorage('rememberedEmail');

  const initialValues: LoginFormValues = {
    email: savedEmail || '',
    password: '',
    rememberMe: !!savedEmail,
  };

  return (
    <AuthLayout title="Welcome Back">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          if (values.rememberMe) {
            saveToStorage('rememberedEmail', values.email);
          }
          // Simulate API call
          setTimeout(() => {
            alert('Login Successful!');
            setSubmitting(false);
          }, 1000);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <Field
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                aria-label="Email address"
              />
              {errors.email && touched.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <Field
                id="password"
                name="password"
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                aria-label="Password"
              />
              {errors.password && touched.password && (
                <div className="text-red-500 text-sm mt-1">{errors.password}</div>
              )}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <Field
                  type="checkbox"
                  name="rememberMe"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
              aria-label="Sign in"
            >
              {isSubmitting ? 'Signing in...' : 'Sign in'}
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                Sign up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};