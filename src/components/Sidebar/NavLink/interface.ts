import { ReactNode } from 'react';

export interface NavLinkProps {
  title: string;
  notifications: number;
  href: string;
  children?: ReactNode;
}
