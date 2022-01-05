import React from 'react'
import {  useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'

import { EcomerceAppBar } from '../components/app-bar/AppBar'
import { CartPage } from '../pages/cart-page/CartPage'
import { CheckoutPage } from '../pages/checkout-page/CheckoutPage'
import { HomePage } from '../pages/home-page/HomePage'
import { ProductDetailsPage } from '../pages/product-details-page/ProductDetailsPage'
import { PrivateRoute } from './PrivateRoute'


export const CommonRoutes = () => {

  const {uid} = useSelector(state => state.auth)
  
  return (
    <>
      <EcomerceAppBar/>

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="product/:id" element={ <ProductDetailsPage /> } />
        <Route path="cart" element={ <CartPage /> } />
        <Route
          path="/checkout"
          element={
            <PrivateRoute isAuthenticated={ !!uid }>
              <CheckoutPage/>
            </PrivateRoute>
          }
        />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
      
    </>
  )
}
