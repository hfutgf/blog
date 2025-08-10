import { ReactNode } from 'react'

import Header from '@/widgets/header'

const RootLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen w-full bg-light dark:bg-dark">
    <Header />
    <div className="container mx-auto min-h-[calc(100vh-64px)]">{children}</div>
  </div>
)

export default RootLayout
