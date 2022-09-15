import { DefaultTheme } from 'styled-components';

export const light: DefaultTheme = {
  name: 'light',
  colors: {
    background: 'var(--white-100)',
    title: 'var(--black-800)',
    subtitle: 'var(--gray-900)',
    notifications: {
      background: 'rgba(57, 91, 252, 0.2)',
      color: 'var(--blue)',
    },
    input: {
      background: 'var(--white-200)',
      border: 'var(--gray-200)',
      color: 'var(--gray-700)',
    },
    tasks: {
      background: 'var(--white-200)',
      color: 'var(--black-800)',
    },
  },
};

export const dark: DefaultTheme = {
  name: 'dark',
  colors: {
    background: 'var(--black-900)',
    title: 'var(--white-100)',
    subtitle: 'var(--white-100)',
    notifications: {
      background: 'var(--blue)',
      color: 'var(--white-100)',
    },
    input: {
      background: 'var(--black-800)',
      border: 'var(--gray-800)',
      color: 'var(--gray-700)',
    },
    tasks: {
      background: 'var(--gray-800)',
      color: 'var(--gray-200)',
    },
  },
};
