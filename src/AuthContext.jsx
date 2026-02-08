import { createContext, useContext, useState, useEffect } from 'react'

// SHA-256 hash of password "biodata2026"
// To change password: generate new hash at https://emn178.github.io/online-tools/sha256.html
const PASSWORD_HASH = '83f90e303e63908cffac5e979fc46c3d02448546bb325019f2349a0daf6d5fc8'

const AuthContext = createContext(null)

// Simple SHA-256 hash function using Web Crypto API
async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message)
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
    const hashArray = Array.from(new Uint8Array(hashBuffer))
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex
}

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if already authenticated
        const auth = localStorage.getItem('biodata_auth')
        if (auth === 'true') {
            setIsAuthenticated(true)
        }
        setIsLoading(false)
    }, [])

    const login = async (password) => {
        const hash = await sha256(password)
        if (hash === PASSWORD_HASH) {
            setIsAuthenticated(true)
            localStorage.setItem('biodata_auth', 'true')
            return true
        }
        return false
    }

    const logout = () => {
        setIsAuthenticated(false)
        localStorage.removeItem('biodata_auth')
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}
