import { useSelector } from 'react-redux'

import { Public } from './Layout/Public'
import { Private } from './Layout/Private'

export const Main = () => {
  const { isAuth } = useSelector((state: any) => state.auth)

  return isAuth ? <Private /> : <Public />
}
