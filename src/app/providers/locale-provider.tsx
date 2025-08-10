import { cookies } from 'next/headers'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ReactNode } from 'react'

import { NEXT_LOCALE } from '@/constants/cookie.constants'

const LocaleProvider = async ({ children }: { children: ReactNode }) => {
  const cookieStore = cookies()
  const localeCookie = cookieStore.get(NEXT_LOCALE)?.value
  const locale = localeCookie || 'uz'
  const messages = await getMessages()

  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  )
}

export default LocaleProvider
