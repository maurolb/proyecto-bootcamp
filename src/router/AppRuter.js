import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AuthRoutes } from './AuthRoutes'
import { PublicRoute } from './PublicRoute'
import { CommonRoutes } from './CommonRoutes'
import { useSelector } from 'react-redux'


export const AppRuter = () => {

  const {uid} = useSelector(state => state.auth)

  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/*"
          element={
            <CommonRoutes />
          }
        />
        
        <Route
          path="/auth/*"
          element={
            <PublicRoute isAuthenticated={ !!uid }>
              <AuthRoutes />
            </PublicRoute>
          }
        />
        
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
    </BrowserRouter>
  )
}
