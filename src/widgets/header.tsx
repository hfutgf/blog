'use client'

import { MoonOutlined, SunOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import Link from 'next/link'

import { useThemeMode } from '@/app/providers/theme-provider'

export default function Header() {
  const { mode, toggle } = useThemeMode()

  return (
    <header className="w-full bg-white dark:bg-black">
      <div className="container mx-auto flex min-h-16 items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold dark:text-white">Logo</span>
        </Link>

        <div className="flex items-center space-x-4">
          <Switch
            checked={mode === 'dark'}
            onChange={toggle}
            checkedChildren={<MoonOutlined />}
            unCheckedChildren={<SunOutlined />}
          />
        </div>
      </div>
    </header>
  )
}
