'use client';

import { type ReactNode } from 'react';
import { ThemeProvider } from '@toss/tds-mobile';

interface AppProvidersProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
