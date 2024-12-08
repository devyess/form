import React from 'react';
import { calculatePasswordStrength, getPasswordStrengthColor } from '../utils/password';

interface PasswordStrengthProps {
  password: string;
}

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  const strength = calculatePasswordStrength(password);
  const color = getPasswordStrengthColor(strength);
  
  return (
    <div className="mt-2">
      <div className="text-sm text-gray-600 mb-1">Password Strength</div>
      <div className="h-2 w-full bg-gray-200 rounded-full">
        <div
          className={`h-full ${color} rounded-full transition-all duration-300`}
          style={{ width: `${(strength / 5) * 100}%` }}
          role="progressbar"
          aria-valuenow={strength}
          aria-valuemin={0}
          aria-valuemax={5}
        />
      </div>
    </div>
  );
};