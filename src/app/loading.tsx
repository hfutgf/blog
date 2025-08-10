import { LoadingOutlined } from '@ant-design/icons'

import Spin from '@/components/ui/spin'

const LoadingPage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <Spin indicator={<LoadingOutlined spin />} />
  </div>
)

export default LoadingPage
