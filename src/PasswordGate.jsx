import { useState } from 'react'
import { Input, Button, CircularProgress } from '@heroui/react'
import { useAuth } from './AuthContext'
import './App.css'

function PasswordGate({ children }) {
    const { isAuthenticated, isLoading, login } = useAuth()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setIsSubmitting(true)

        const success = await login(password)

        if (!success) {
            setError('Incorrect password. Please try again.')
            setPassword('')
        }
        setIsSubmitting(false)
    }

    if (isLoading) {
        return (
            <div className="password-gate">
                <div className="password-container">
                    <div className="flex justify-center items-center py-12">
                        <div className="loading-spinner"></div>
                    </div>
                </div>
            </div>
        )
    }

    if (isAuthenticated) {
        return children
    }

    return (
        <div className="password-gate">
            <div className="password-container">
                <div className="password-header">
                    <div className="decorative-border top"></div>
                    <div className="password-content">
                        <div className="gate-om-symbol">॥ श्री गणेशाय नमः ॥</div>
                        <div className="decorative-divider">
                            <span className="divider-ornament">✦</span>
                        </div>
                        <h1 className="gate-title">Pranjal Gupta</h1>
                        <p className="gate-subtitle">Marriage Biodata</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="password-form">
                    <div className="form-group">
                        <label htmlFor="password-input">Enter Access Code</label>
                        <input
                            id="password-input"
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isSubmitting}
                            autoFocus
                            className={`password-input ${error ? 'error' : ''}`}
                        />
                        {error && <p className="error-message">{error}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={!password || isSubmitting}
                        className="submit-btn"
                    >
                        {isSubmitting ? 'Verifying...' : 'View Biodata'}
                    </button>

                    <p className="gate-note">
                        This biodata is password protected for privacy.
                        <br />Please contact the family for access.
                    </p>
                </form>

                <div className="decorative-border bottom"></div>
            </div>
        </div>
    )
}

export default PasswordGate
