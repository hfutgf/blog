import { LoadingOutlined } from '@ant-design/icons'
import { Spin } from 'antd'

const LoadingPage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <Spin indicator={<LoadingOutlined spin />} />
  </div>
)

export default LoadingPage
