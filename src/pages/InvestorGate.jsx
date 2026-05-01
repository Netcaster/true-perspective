import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const ACCESS_CODE = 'TPG2026'

export default function InvestorGate() {
  const [code, setCode] = useState('')
  const [error, setError] = useState(false)
  const [shake, setShake] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (code.trim() === ACCESS_CODE) {
      navigate('/peace-protocol')
    } else {
      setError(true)
      setShake(true)
      setCode('')
      setTimeout(() => setShake(false), 400)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-6 relative">

      {/* Back link */}
      <Link
        to="/"
        className="absolute top-6 left-10 text-white/40 hover:text-white text-sm transition-colors"
      >
        ← True Perspective
      </Link>

      {/* Lock icon */}
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      </div>

      <p className="text-xs uppercase tracking-[0.35em] text-white/40 mb-3">True Perspective Global</p>
      <h1 className="text-5xl font-bold mb-4">Restricted Access</h1>
      <p className="text-white/50 mb-10 text-lg">Verified investors only</p>

      <form
        onSubmit={handleSubmit}
        className={`flex flex-col items-center gap-4 w-full max-w-sm transition-transform ${shake ? 'animate-shake' : ''}`}
      >
        <input
          type="password"
          value={code}
          onChange={(e) => { setCode(e.target.value); setError(false) }}
          placeholder="Enter Access Code"
          className="w-full px-4 py-3 text-black rounded-lg bg-white text-center tracking-widest font-semibold focus:outline-none focus:ring-2 focus:ring-white/40"
          autoFocus
          autoComplete="off"
        />
        {error && (
          <p className="text-red-400 text-sm">Invalid access code. Please try again.</p>
        )}
        <button
          type="submit"
          className="w-full bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-colors"
        >
          Enter Deal Room
        </button>
      </form>

    </div>
  )
}
