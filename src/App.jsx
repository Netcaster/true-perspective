import React from 'react'
import { Routes, Route } from 'react-router-dom'
import TruePerspective from './pages/TruePerspective'
import InvestorGate from './pages/InvestorGate'
import PeaceProtocol from './pages/PeaceProtocol'
import LiveDemo from './pages/LiveDemo'
import DealRoom from './pages/DealRoom'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TruePerspective />} />
      <Route path="/investor" element={<InvestorGate />} />
      <Route path="/peace-protocol" element={<PeaceProtocol />} />
      <Route path="/live-demo" element={<LiveDemo />} />
      <Route path="/deal-room" element={<DealRoom />} />
      <Route path="*" element={<TruePerspective />} />
    </Routes>
  )
}
