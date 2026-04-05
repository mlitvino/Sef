import { ReactNode } from 'react';

import { BalanceProvider } from './BalanceContext';
import { SettingsProvider } from './SettingsContext';
import { TransactionProvider } from './TranscationContext';
import { ThemeProvider } from './ThemeContext';

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <SettingsProvider>
      <ThemeProvider>
        <TransactionProvider>
          <BalanceProvider>
            {children}
          </BalanceProvider>
        </TransactionProvider>
      </ThemeProvider>
    </SettingsProvider>
  );
}
