# React Authentication Forms

A modern, responsive authentication system built with React, TypeScript, and Formik.

## Features

- Clean, modern UI with Tailwind CSS
- Form validation using Formik and Yup
- Password strength indicator
- "Remember Me" functionality
- Responsive design
- Accessibility features
- TypeScript support
- Clean code architecture

## How to Run the Project

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to the local server URL

## Design Choices

1. **Architecture**
   - Separate components for reusability
   - Utility functions in dedicated files
   - Type definitions for better maintainability
   - Clean folder structure

2. **UI/UX**
   - Minimalist design with subtle gradients
   - Clear feedback for user actions
   - Smooth transitions and animations
   - Responsive layout for all devices

3. **Form Handling**
   - Formik for form management
   - Yup for validation
   - Real-time password strength indicator
   - Proper error messaging

4. **Security**
   - Password strength requirements
   - Secure password confirmation
   - Email validation

## Assumptions and Limitations

1. **Authentication**
   - This is a frontend-only implementation
   - Actual API integration needs to be implemented
   - Token management is not included

2. **Storage**
   - Uses localStorage for "Remember Me" feature
   - In a production environment, consider more secure options

3. **Validation**
   - Basic validation rules implemented
   - Additional rules may be needed based on requirements

4. **Security**
   - Password hashing should be implemented on the backend
   - CSRF protection needs to be added
   - Rate limiting should be implemented