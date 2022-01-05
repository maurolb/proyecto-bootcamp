import React from 'react'
import { Provider } from 'react-redux'
import { AppRuter } from './router/AppRuter'
import { store } from './store/store'

export const Ecomerce = () => {
  return (
    <Provider store={store}>
      <AppRuter />
    </Provider>
  )
}
