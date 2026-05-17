import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NewsBrief() {
  return (
    <div className="flex flex-col h-screen bg-black">
      <nav className="flex items-center justify-between px-8 py-4 bg-black/90 backdrop-blur border-b border-white/8 z-10 shrink-0">
        <Link
          to="/"
          className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" /> TPG
        </Link>
        <div className="text-sm font-semibold tracking-wide text-white/80">
          TPG Global Neutral News Brief
        </div>
        <div className="text-xs text-white/30 uppercase tracking-widest">Live Intelligence</div>
      </nav>
      <iframe
        src="https://tpg-news-brief.pages.dev"
        title="TPG Global Neutral News Brief"
        className="flex-1 w-full border-0"
        allow="autoplay"
      />
    </div>
  )
}
