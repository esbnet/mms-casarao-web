"use client"
import { createContext } from "react"

import { signIn, SessionProvider } from "next-auth/react"

type AuthContextType = {
  isAuthenticated: boolean
}

type SingInDada = {
  email: string
  password: string
}

const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }: any) {
  const isAuthenticated = false

  async function signInUser({ email, password }: SingInDada) {
    const res = await signIn("credentiosl", {
      email,
      password,
      redirect: false,
    })
    // console.log(res)
  }

  return (
      <AuthContext.Provider value={{ isAuthenticated }}>
        {children}
      </AuthContext.Provider>
  )
}
