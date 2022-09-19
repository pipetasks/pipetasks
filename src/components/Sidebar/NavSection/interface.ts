import { ReactNode } from 'react';

export interface NavSectionProps {
  title: string;
  children: ReactNode;
  open: boolean;
}
