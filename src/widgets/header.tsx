'use client'

import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { useLocale } from 'next-intl'

import { useThemeMode } from '@/app/providers/theme-provider'
import Select from '@/components/ui/select'
import Switch from '@/components/ui/switch'
import { locales } from '@/constants/locales'
import { Link, usePathname, useRouter } from '@/i18n/navigation'

export default function Header() {
  const { mode, toggle } = useThemeMode()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const changeLanguage = (value: string) => {
    const rawPath = pathname.replace(/^\/(en|ru|uz)(\/|$)/, '/')
    router.replace(rawPath, { locale: value })
    router.refresh()
  }

  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="container mx-auto flex min-h-16 items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold dark:text-white">
          I.Z
        </Link>

        <div className="flex items-center space-x-4">
          <Switch
            checked={mode === 'dark'}
            onChange={toggle}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />

          <Select
            value={locale}
            onChange={changeLanguage}
            options={locales}
            style={{ width: 100 }}
          />
        </div>
      </div>
    </header>
  )
}
