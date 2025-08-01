import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

const AuthContext = createContext<any>({})

interface AuthProvider {
  children: ReactNode
}

export const useAuth = () => {
  return useContext<{
    user: any
    workspace: any
    role: any
    setUser: (v: any) => void
    setWorkspace: (v: any) => void
    setRole: (v: any) => void
    isAuthenticated: boolean
    setIsAuthenticated: (v: boolean) => void
    setStoredUser: (v: any) => void
    setStoredToken: (v: any) => void
    updateProfile: (v: any) => void
    clearAuth: () => void
  }>(AuthContext)
}

export const AuthProvider = ({ children }: AuthProvider) => {
  const [user, setUser] = useState<any>({})
  const [role, setRole] = useState<any>({})
  const [workspace, setWorkspace] = useState<any>({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setStoredUser = (data: any) => {
    localStorage.setItem(' ', JSON.stringify(data))
  }
  const setStoredToken = (data: any) => {
    localStorage.setItem('STORAGE_KEYS.TOKEN_DATA', JSON.stringify(data))
  }
  const updateProfile = (data: any) => {
    setUser((prev: any) => ({ ...prev, ...data }))
    setStoredUser({ ...user, ...data })
  }
  const clearAuth = () => {
    setUser(null)
    setIsAuthenticated(false)
  }
  const authHooks = {
    user,
    workspace,
    role,
    setWorkspace,
    setUser,
    setRole,
    isAuthenticated,
    setIsAuthenticated,
    setStoredUser,
    setStoredToken,
    updateProfile,
    clearAuth,
  }
  return (
    <AuthContext.Provider value={authHooks}>{children}</AuthContext.Provider>
  )
}
