import { Provider } from 'react-redux'
import { Main } from './scenes/Main'
import store from './store/Store'

export const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}
