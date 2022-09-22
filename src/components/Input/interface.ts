import { FieldError } from 'react-hook-form';

export interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  error?: FieldError;
}
