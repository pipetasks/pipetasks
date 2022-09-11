import { InputHTMLAttributes, ReactElement } from 'react';

export interface InputCompProps {
  name: string;
  type: string;
  placeholder: string;
  children: ReactElement;
}
