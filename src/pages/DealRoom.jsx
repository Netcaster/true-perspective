import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  DoorOpen,
  Hotel,
  LockKeyhole,
  Network,
  Plane,
  RadioTower,
  ShieldCheck,
  Smartphone,
  Ticket,
  Wallet,
  Zap,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const metrics = [
  { label: "Endpoint Categories", value: "5", detail: "Devices, hotels, events, airports, wearables", icon: Network },
  { label: "Pipeline Value", value: "$100M+", detail: "Targeted initial capitalization framework", icon: CircleDollarSign },
  { label: "Event Cycle", value: "2026–2027", detail: "ACTGT, AR, Resort World, ARIA anchor path", icon: Ticket },
  { label: "Economic Loop", value: "Closed", detail: "Access → engagement → token → transaction", icon: Wallet },
];

const pipeline = [
  {
    name: "ARIA 2027 Anchor",
    stage: "Anchor Deployment",
    value: "High",
    icon: Hotel,
    summary: "Hospitality, event access, in-room integration, wearable identity, and investor demonstration environment.",
  },
  {
    name: "Device + MVNO Rollout",
    stage: "Endpoint Capture",
    value: "Strategic",
    icon: Smartphone,
    summary: "Preloaded phone ecosystem with VIPTIO, VIBE, Focus Mode, wallet, content, and partner offers.",
  },
  {
    name: "Airport / Kiosk Footprint",
    stage: "Distribution Channel",
    value: "Global",
    icon: Plane,
    summary: "High-traffic placement for consumer acquisition, partner activations, and recurring campaign deployment.",
  },
  {
    name: "R.I.S.E. Housing Pathway",
    stage: "Social Infrastructure",
    value: "Impact + Yield",
    icon: Building2,
    summary: "Token-enabled resident access, essential goods, housing transition, and community-level economic participation.",
  },
];

const tiers = [
  {
    tier: "Strategic Observer",
    range: "$250K+",
    unlocks: ["Investor updates", "Deal room access", "Priority pilot visibility"],
  },
  {
    tier: "Platform Participant",
    range: "$1M+",
    unlocks: ["Allocation review", "Pilot participation", "Sponsor / endpoint integration path"],
  },
  {
    tier: "Anchor Capital Partner",
    range: "$5M+",
    unlocks: ["Deployment rights review", "Joint venture economics", "Market / vertical priority"],
  },
];

const useOfFunds = [
  { label: "Endpoint Deployment", percent: 35, icon: Smartphone },
  { label: "Platform + Wallet", percent: 25, icon: Wallet },
  { label: "Events + Hospitality", percent: 20, icon: Hotel },
  { label: "Marketing + Acquisition", percent: 12, icon: RadioTower },
  { label: "Legal + Compliance", percent: 8, icon: ShieldCheck },
];

function MetricCard({ item }) {
  const Icon = item.icon;
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/[0.045] text-white shadow-xl shadow-black/20">
      <CardContent className="p-6">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
          <Icon className="h-5 w-5" />
        </div>
        <p className="mb-2 text-sm text-white/45">{item.label}</p>
        <h3 className="mb-2 text-3xl font-bold">{item.value}</h3>
        <p className="text-sm leading-relaxed text-white/55">{item.detail}</p>
      </CardContent>
    </Card>
  );
}

function PipelineCard({ item, active, onClick }) {
  const Icon = item.icon;
  return (
    <button onClick={onClick} className="w-full text-left">
      <Card className={`rounded-3xl border text-white transition-all ${active ? "border-white/40 bg-white/[0.11]" : "border-white/10 bg-white/[0.045] hover:bg-white/[0.07]"}`}>
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-black/40">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">{item.stage}</p>
              <h4 className="mt-1 text-lg font-bold">{item.name}</h4>
              <p className="mt-2 text-sm text-white/55">{item.summary}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </button>
  );
}

function UseOfFundsBar({ item }) {
  const Icon = item.icon;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-white/75">
          <Icon className="h-4 w-4" />
          <span>{item.label}</span>
        </div>
        <span className="font-semibold">{item.percent}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.percent}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-white"
        />
      </div>
    </div>
  );
}

export default function DealRoom() {
  const [activePipeline, setActivePipeline] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', range: '' });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const active = pipeline[activePipeline];
  const ActiveIcon = active.icon;

  const whyNow = useMemo(() => [
    "Consumers are overstimulated and reachable only through controlled endpoints.",
    "Hospitality, events, telecom, and token economics are converging into one commercial layer.",
    "TPG has positioned doctrine, distribution, and behavior loops inside a single investor-visible system.",
  ], []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative overflow-hidden px-6 py-8 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-0 h-[680px] w-[680px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-white/5 blur-3xl" />
        </div>

        <nav className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/45">True Perspective Global</p>
            <h1 className="text-xl font-bold">Investor Deal Room</h1>
          </div>
          <div className="hidden items-center gap-3 md:flex">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60">Restricted</span>
            <Button
              onClick={() => document.getElementById('allocation-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="rounded-2xl bg-white text-black hover:bg-white/90"
            >
              Request Allocation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <LockKeyhole className="h-4 w-4" /> Verified Investor Environment
            </div>
            <h2 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
              Capital Enters Where Control Already Exists.
            </h2>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-white/60">
              The TPG Deal Room converts doctrine into investable infrastructure: controlled endpoints,
              closed-loop economics, and deployment pathways across hospitality, events, telecom,
              housing, and tokenized engagement.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={() => document.getElementById('allocation-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-2xl bg-white px-6 py-6 text-black hover:bg-white/90"
              >
                Request Allocation <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/live-demo')}
                className="rounded-2xl border-white/15 bg-white/5 px-6 py-6 text-white hover:bg-white/10"
              >
                View Live Demo
              </Button>
            </div>
          </div>

          <Card className="rounded-[2rem] border border-white/10 bg-white/[0.045] text-white shadow-2xl shadow-white/5">
            <CardContent className="p-8">
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">Deal Room Snapshot</p>
              <div className="mb-8 grid grid-cols-2 gap-4">
                {[
                  ["Doctrine", "Locked"],
                  ["Demo", "Live"],
                  ["Pipeline", "Active"],
                  ["Capital", "Opening"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-3xl border border-white/10 bg-black/35 p-5">
                    <p className="text-sm text-white/45">{label}</p>
                    <p className="mt-2 text-2xl font-bold">{value}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-3xl border border-white/10 bg-black/35 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  <p className="font-semibold">Closing Logic</p>
                </div>
                <p className="text-sm leading-relaxed text-white/55">
                  Investors are not being asked to fund a concept. They are being invited into a controlled
                  ecosystem where endpoints, behavior, and economics are already designed to compound.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
          {metrics.map((item) => <MetricCard key={item.label} item={item} />)}
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/40">Deployment Pipeline</p>
              <h3 className="text-4xl font-bold">Capital Follows the System.</h3>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-white/55">
              The pipeline is organized around endpoint capture, behavior activation, and recurring economics — not isolated projects.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-4">
              {pipeline.map((item, index) => (
                <PipelineCard
                  key={item.name}
                  item={item}
                  active={index === activePipeline}
                  onClick={() => setActivePipeline(index)}
                />
              ))}
            </div>

            <Card className="rounded-[2rem] border border-white/10 bg-white/[0.045] text-white">
              <CardContent className="p-8 lg:p-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.name}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.24 }}
                  >
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-[1.75rem] border border-white/10 bg-black/40">
                      <ActiveIcon className="h-9 w-9" />
                    </div>
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-white/40">{active.stage}</p>
                    <h4 className="mb-4 text-4xl font-bold">{active.name}</h4>
                    <p className="mb-8 text-lg leading-relaxed text-white/60">{active.summary}</p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      {[
                        ["Value", active.value],
                        ["Control", "Endpoint"],
                        ["Model", "Recurring"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-3xl border border-white/10 bg-black/35 p-5">
                          <p className="text-sm text-white/45">{label}</p>
                          <p className="mt-2 text-xl font-bold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Card className="rounded-[2rem] border border-white/10 bg-white/[0.045] text-white">
            <CardContent className="p-8 lg:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/40">Use of Funds</p>
              <h3 className="mb-8 text-4xl font-bold">Capital Unlocks Deployment.</h3>
              <div className="grid gap-6">
                {useOfFunds.map((item) => <UseOfFundsBar key={item.label} item={item} />)}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[2rem] border border-white/10 bg-white/[0.045] text-white">
            <CardContent className="p-8 lg:p-10">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/40">Allocation Tiers</p>
              <h3 className="mb-8 text-4xl font-bold">Three Ways to Enter.</h3>
              <div className="grid gap-4">
                {tiers.map((tier) => (
                  <div key={tier.tier} className="rounded-3xl border border-white/10 bg-black/35 p-5">
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <p className="text-sm text-white/45">{tier.range}</p>
                        <h4 className="text-2xl font-bold">{tier.tier}</h4>
                      </div>
                      <Button
                        variant="outline"
                        onClick={() => document.getElementById('allocation-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10"
                      >
                        Review
                      </Button>
                    </div>
                    <div className="grid gap-2 sm:grid-cols-3">
                      {tier.unlocks.map((unlock) => (
                        <div key={unlock} className="flex items-center gap-2 text-sm text-white/60">
                          <CheckCircle2 className="h-4 w-4 shrink-0" /> {unlock}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-white/40">Why Now</p>
              <h3 className="text-4xl font-bold">The Market Has Converged.</h3>
            </div>
            <div className="grid gap-4">
              {whyNow.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl border border-white/10 bg-black/35 p-5">
                  <DoorOpen className="mt-0.5 h-5 w-5 shrink-0" />
                  <p className="text-sm leading-relaxed text-white/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="allocation-form" className="px-6 pb-24 pt-8 lg:px-12">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white text-black p-8 lg:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-black/50">Commit</p>
              <h3 className="mb-4 text-4xl font-bold md:text-5xl">Request Allocation</h3>
              <p className="max-w-2xl text-lg leading-relaxed text-black/60">
                Enter the allocation review flow and identify strategic interest across endpoint deployment,
                platform economics, hospitality activations, or social infrastructure.
              </p>
            </div>
            <div className="rounded-3xl bg-black p-5 text-white">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-8 text-center gap-4">
                  <CheckCircle2 className="h-12 w-12 text-white/70" />
                  <p className="text-xl font-bold">Request Received</p>
                  <p className="text-sm text-white/55">The TPG team will be in touch within 48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-3">
                  <input
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-white/30"
                    placeholder="Name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-white/35 focus:outline-none focus:border-white/30"
                    placeholder="Email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    required
                  />
                  <select
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:outline-none focus:border-white/30"
                    value={formState.range}
                    onChange={(e) => setFormState({ ...formState, range: e.target.value })}
                    required
                  >
                    <option value="">Investment Range</option>
                    <option value="250k-1m">$250K – $1M</option>
                    <option value="1m-5m">$1M – $5M</option>
                    <option value="5m+">$5M+</option>
                  </select>
                  <Button type="submit" className="rounded-2xl bg-white py-6 text-black hover:bg-white/90">
                    Submit Allocation Request <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
