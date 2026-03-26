
import { MantineProvider, createTheme, rem, type MantineTheme } from '@mantine/core';

import type { ReactNode } from 'react';
import '@mantine/notifications/styles.css';

export const theme = createTheme({
  colors: {
    'principal-red': [
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
      '#E23829',
    ],
    
    'ice-white': [
      '#F2F2F2',
      '#FFFFFF',
      '#F2F2F2',
      '#F2F2F2',
      '#F2F2F2',
      '#F2F2F2',
      '#F2F2F2',
      '#F2F2F2',
      '#F2F2F2',
      '#F2F2F2',
    ],
    'silver-gray': [
      '#D1D1D1',
      '#ABABAB',
      '#8A8A8A',
      '#B3B3B3',
      '#E9E9E9',
      '#9F9F9F',
      '#959595',
      '#8B8B8B',
      '#818181',
      '#777777',
    ],
    'dark-gray': [
      '#1B1B1B',
      '#131313',
      '#333333',
      '#2B2B2B',
      '#353535',
      '#4A4A4A',
      '#5A5A5A',
      '#4F4F4F',
      '#818181',
      '#A3A3A3',
    ],
    'gray-dark': [
      '#818181',
      '#5A5A5A',
      '#353535',
      '#4A4A4A',
      '#4F4F4F',
      '#A3A3A3',
      '#353535',
      '#4A4A4A',
      '#5A5A5A',
      '#4F4F4F',
    ],
    
  },

  fontFamily: `'Inter', sans-serif`,

  headings: {
    fontFamily: `'Inter', sans-serif`,
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },

  components: {
    Button: {
      styles: (theme: MantineTheme, params: { variant?: string }) => ({
        root: {
          fontWeight: 400,
          fontFamily: params.variant === 'dropdown' ? `'Inter', sans-serif` : `'Unbounded', sans-serif`,
          minWidth: rem(190),
          width: '100%',
          maxWidth: '100%',

          fontSize: ['azul-ardosia-branco-gelo-cadastro', 'cinza-prata-branco-gelo-cadastro'].includes(
            params.variant || '',
          )
            ? rem(10)
            : rem(14),
          justifyContent: 'space-between',
        },
      }),
    },
  },
});

type CustomMantineProviderProps = {
  children: ReactNode;
};

export function CustomMantineProvider({ children }: CustomMantineProviderProps) {
  return (
    <MantineProvider theme={{ ...theme }} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}