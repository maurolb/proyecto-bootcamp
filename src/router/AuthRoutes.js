import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/auth/login-page/LoginPage'
import { RegisterPage } from '../pages/auth/register-page/RegisterPage'


export const AuthRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="login" element={ <LoginPage /> } />
        <Route path="register" element={ <RegisterPage /> } />
        <Route path="*" element={ <Navigate to="login" /> } />
      </Routes>
    </div>
  )
}
