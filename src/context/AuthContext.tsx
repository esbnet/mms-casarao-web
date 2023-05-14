"use client"
import { createContext } from "react"

type AuthContextType = {
  isAuthenticated: boolean
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const isAuthenticated = false
  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}
