import { ReactNode } from 'react';

import { BalanceProvider } from './BalanceContext';
import { TransactionProvider } from './TranscationContext';

type AppProvidersProps = {
  children: ReactNode;
};

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <TransactionProvider>
      <BalanceProvider>
        {children}
      </BalanceProvider>
    </TransactionProvider>
  );
}
