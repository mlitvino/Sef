import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

export type CurrencyCode = 'EUR' | 'USD';

type SettingsProviderProps = {
  children: ReactNode;
};

type SettingsDispatch = {
  setCurrency: (currency: CurrencyCode) => void;
};

const initialCurrency: CurrencyCode = 'EUR';
const SettingsCurrencyContext = createContext<CurrencyCode | undefined>(undefined);
const SettingsDispatchContext = createContext<SettingsDispatch | undefined>(undefined);

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [currency, setCurrency] = useState<CurrencyCode>(initialCurrency);

  return (
    <SettingsCurrencyContext.Provider value={currency}>
      <SettingsDispatchContext.Provider value={{ setCurrency }}>
        {children}
      </SettingsDispatchContext.Provider>
    </SettingsCurrencyContext.Provider>
  );
}

export function useCurrency() {
  const ctx = useContext(SettingsCurrencyContext);
  if (ctx === undefined) {
    throw new Error('Error: useCurrency must be used within SettingsProvider');
  }
  return ctx;
}

export function useSetCurrency() {
  const ctx = useContext(SettingsDispatchContext);
  if (ctx === undefined) {
    throw new Error('Error: useSetCurrency must be used within SettingsProvider');
  }
  return ctx.setCurrency;
}
