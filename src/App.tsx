import { Provider } from 'react-redux'
import { Dashboard } from './scenes/Dashboard/Dashboard'
import store from './store/Store'

export const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  )
}
