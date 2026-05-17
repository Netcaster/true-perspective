import React from 'react'
import { Link } from 'react-router-dom'
import {
  Brain,
  EyeOff,
  Zap,
  Smartphone,
  Radio,
  Globe,
  Wallet,
  Ticket,
  Hotel,
  BarChart3,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

const tenants = [
  {
    id: 'frame',
    number: '01',
    title: 'Control the Frame',
    subtitle: "Ignore what doesn't matter. Refuse what doesn't align. Execute without emotion.",
    cards: [
      { icon: Brain, label: 'Attention Discipline', body: 'Every decision passes through a filter. Low-value inputs are blocked before they cost time or trust.' },
      { icon: EyeOff, label: 'Emotional Restraint', body: 'Emotion is information. Execution is a choice. The frame separates the two.' },
      { icon: ShieldCheck, label: 'Standards Enforcement', body: 'Permanent value is never traded for temporary feelings. The frame makes that automatic.' },
    ],
  },
  {
    id: 'endpoint',
    number: '02',
    title: 'Control the Endpoint',
    subtitle: 'Own the access point. Control distribution. Design the experience.',
    cards: [
      { icon: Smartphone, label: 'Device Ownership', body: "Preloaded hardware puts VIPTIO, wallet, content, and access directly in the user's hand." },
      { icon: Radio, label: 'Distribution Control', body: 'MVNO, kiosk, and airport placement creates high-traffic acquisition without ad dependency.' },
      { icon: Globe, label: 'Experience Design', body: 'Every touchpoint — check-in, room key, event pass, wallet — moves through one controlled layer.' },
    ],
  },
  {
    id: 'economics',
    number: '03',
    title: 'Control the Economics',
    subtitle: 'Incentivize behavior. Capture value. Close the loop.',
    cards: [
      { icon: Wallet, label: 'Token Incentives', body: 'EXIAL wallet turns focus, discipline, and engagement into spendable, trackable value.' },
      { icon: BarChart3, label: 'Behavior Monetization', body: 'Earn → Spend → Redeem → Return. Each cycle adds data, retention, and compounding revenue.' },
      { icon: Zap, label: 'Loop Closure', body: "Capital doesn't leak. Every interaction feeds back into the system as measurable economic activity." },
    ],
  },
]

const ecosystem = [
  { icon: Smartphone, label: 'VIPTIO', desc: 'Controlled device endpoint' },
  { icon: Wallet, label: 'EXIAL', desc: 'Token wallet & economics' },
  { icon: Radio, label: 'VIBE', desc: 'Content & media layer' },
  { icon: Ticket, label: 'HTES', desc: 'Events & ticketing' },
  { icon: Hotel, label: 'ARIA', desc: 'Hospitality anchor' },
  { icon: ShieldCheck, label: 'R.I.S.E.', desc: 'Social infrastructure' },
]

const stats = [
  { value: '5', label: 'Endpoint Categories' },
  { value: '$100M+', label: 'Pipeline Value' },
  { value: '2026–27', label: 'Deployment Cycle' },
  { value: 'Closed', label: 'Economic Loop' },
]

export default function TruePerspective() {
  return (
    <div className="font-sans bg-black text-white min-h-screen">

      {/* NAV */}
      <nav className="fixed w-full top-0 flex justify-between items-center px-8 lg:px-12 py-5 bg-black/80 backdrop-blur z-50 border-b border-white/5">
        <div className="font-bold text-lg tracking-tight">TPG</div>
        <div className="hidden md:flex items-center space-x-7 text-sm text-white/50">
          <a href="#frame" className="hover:text-white transition-colors">Frame</a>
          <a href="#endpoint" className="hover:text-white transition-colors">Endpoint</a>
          <a href="#economics" className="hover:text-white transition-colors">Economics</a>
          <a href="#system" className="hover:text-white transition-colors">System</a>
          <Link to="/news" className="hover:text-white transition-colors">Intelligence</Link>
        </div>
        <Link
          to="/investor"
          className="flex items-center gap-2 bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-white/90 transition-colors"
        >
          Investor Access <ArrowRight className="h-4 w-4" />
        </Link>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/50 mb-8">
            True Perspective Global
          </div>
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-8 tracking-tight"
            style={{ textShadow: '0 0 60px rgba(255,255,255,0.15)' }}
          >
            Control Everything That Matters
          </h1>
          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Decision. Distribution. Economics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/investor"
              className="flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-2xl hover:bg-white/90 transition-colors"
            >
              Enter Investor Access <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#frame"
              className="flex items-center gap-2 border border-white/15 text-white/60 px-8 py-4 rounded-2xl hover:bg-white/5 hover:text-white transition-all text-sm"
            >
              Explore the Doctrine
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/8 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`px-8 py-6 text-center ${i < stats.length - 1 ? 'border-r border-white/8' : ''}`}>
              <p className="text-2xl font-bold">{s.value}</p>
              <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THREE TENANTS */}
      {tenants.map((tenant, ti) => (
        <section
          key={tenant.id}
          id={tenant.id}
          className={`py-28 lg:py-36 px-6 lg:px-12 ${ti % 2 === 1 ? 'bg-white/[0.02]' : ''}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-12 lg:gap-20 items-start">
              {/* Left label */}
              <div className="lg:pt-2">
                <p className="text-[80px] lg:text-[120px] font-bold leading-none text-white/5 select-none mb-4">
                  {tenant.number}
                </p>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                  {tenant.title}
                </h2>
                <p className="text-white/50 text-lg leading-relaxed">
                  {tenant.subtitle}
                </p>
                <Link
                  to="/investor"
                  className="inline-flex items-center gap-2 mt-8 text-sm text-white/40 hover:text-white transition-colors group"
                >
                  See it in the system <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Right cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                {tenant.cards.map((card) => {
                  const Icon = card.icon
                  return (
                    <div
                      key={card.label}
                      className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 hover:bg-white/[0.06] hover:border-white/15 transition-all"
                    >
                      <div className="h-10 w-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-5">
                        <Icon className="h-5 w-5 text-white/70" />
                      </div>
                      <p className="font-semibold text-white mb-2">{card.label}</p>
                      <p className="text-sm text-white/45 leading-relaxed">{card.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* THE SYSTEM */}
      <section id="system" className="py-28 lg:py-36 px-6 lg:px-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35 mb-4">The System</p>
            <h2 className="text-5xl lg:text-6xl font-bold mb-6">One Closed Loop.</h2>
            <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed">
              Devices, tokens, platforms, and experiences integrated into a single ecosystem
              where every layer feeds the next.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {ecosystem.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="rounded-3xl border border-white/8 bg-white/[0.03] p-6 text-center hover:bg-white/[0.07] hover:border-white/15 transition-all"
                >
                  <div className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center mb-4 mx-auto">
                    <Icon className="h-5 w-5 text-white/60" />
                  </div>
                  <p className="font-bold text-sm mb-1">{item.label}</p>
                  <p className="text-xs text-white/35 leading-snug">{item.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Loop visual */}
          <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-8 lg:p-12">
            <div className="grid md:grid-cols-4 gap-0">
              {[
                { step: 'Access', desc: 'User enters through a controlled endpoint — device, event, hotel, or kiosk.' },
                { step: 'Engage', desc: 'Content, identity, and commerce activate through a single access layer.' },
                { step: 'Earn', desc: 'Discipline, participation, and behavior convert into token value.' },
                { step: 'Return', desc: 'Value reinvests into the ecosystem, compounding retention and revenue.' },
              ].map((item, i) => (
                <div key={item.step} className="relative flex flex-col items-center text-center px-6 py-4">
                  {i < 3 && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 text-white/15 text-xl">→</div>
                  )}
                  <div className="h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-sm font-bold mb-4">
                    {i + 1}
                  </div>
                  <p className="font-bold text-lg mb-2">{item.step}</p>
                  <p className="text-sm text-white/45 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY TPG */}
      <section className="py-28 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-white/35 mb-4">The Thesis</p>
              <h2 className="text-5xl font-bold leading-tight mb-6">
                The Market Has Already Converged.
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                Hospitality, events, telecom, and token economics are collapsing into one commercial
                layer. TPG has positioned doctrine, distribution, and behavior loops inside a single
                investor-visible system — before the window closes.
              </p>
              <Link
                to="/investor"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-7 py-4 rounded-2xl hover:bg-white/90 transition-colors"
              >
                Enter the Deal Room <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid gap-4">
              {[
                ['Consumers are unreachable through traditional channels.', 'Only controlled endpoints break through the noise.'],
                ['Behavior is the new currency.', 'Focus, discipline, and engagement create measurable economic loops.'],
                ['Infrastructure converges once.', 'The window to own the endpoint is open now — and closes fast.'],
              ].map(([headline, body]) => (
                <div key={headline} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5 text-white/60" />
                  <div>
                    <p className="font-semibold text-white mb-1">{headline}</p>
                    <p className="text-sm text-white/45">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="py-28 px-6 lg:px-12 border-t border-white/8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-white/35 mb-6">True Perspective Global</p>
          <h2 className="text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            The Future Is Produced.
          </h2>
          <p className="text-white/45 text-xl mb-12 max-w-xl mx-auto leading-relaxed">
            Doctrine. Distribution. Economics. Three tenants. One system. One outcome.
          </p>
          <Link
            to="/investor"
            className="inline-flex items-center gap-3 bg-white text-black font-bold px-10 py-5 rounded-2xl hover:bg-white/90 transition-colors text-lg"
          >
            Enter Investor Access <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  )
}
