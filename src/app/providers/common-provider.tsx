import React, { ReactNode } from 'react'

import LocaleProvider from '@/app/providers/locale-provider'
import ThemeProvider from '@/app/providers/theme-provider'

const CommonProvider = ({ children }: { children: ReactNode }) => (
  <LocaleProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </LocaleProvider>
)

export default CommonProvider
