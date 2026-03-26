
import type { ReactNode } from 'react';
import { AuthProvider } from './AuthProvider';
import { CustomMantineProvider } from './MantineProviders';

export function AppProvider({ children }: { children: ReactNode }) {
  return (
    <CustomMantineProvider>
      <AuthProvider>
        {children}
      </AuthProvider>
    </CustomMantineProvider>
  );
}