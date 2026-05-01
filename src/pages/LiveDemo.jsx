import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Smartphone,
  Hotel,
  Ticket,
  Wallet,
  Radio,
  LockKeyhole,
  BarChart3,
  CheckCircle2,
  Play,
  ShieldCheck,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const steps = [
  {
    id: "device",
    label: "Device",
    icon: Smartphone,
    headline: "Endpoint Captured",
    sub: "User enters through a TPG-controlled device or wearable.",
    proof: "Phone preloaded with VIPTIO, wallet, VIBE content, event access, and partner offers.",
    phoneTitle: "VIPTIO Home",
    phoneMetric: "Endpoint Active",
    phoneValue: "1 User",
  },
  {
    id: "wallet",
    label: "Wallet",
    icon: Wallet,
    headline: "Economics Activated",
    sub: "EXIAL / RISE wallet turns access into transaction readiness.",
    proof: "User receives token value, stored benefits, sponsor credits, loyalty, and redemption pathways.",
    phoneTitle: "EXIAL Wallet",
    phoneMetric: "Available Value",
    phoneValue: "$125.00",
  },
  {
    id: "event",
    label: "Event",
    icon: Ticket,
    headline: "Experience Entered",
    sub: "User checks into an HTES / VIBE activation without friction.",
    proof: "Ticketing, identity, offer redemption, and sponsor interaction move through one access layer.",
    phoneTitle: "VIBE Access Pass",
    phoneMetric: "Check-In Status",
    phoneValue: "Verified",
  },
  {
    id: "hotel",
    label: "Hotel",
    icon: Hotel,
    headline: "Hospitality Monetized",
    sub: "Room inventory becomes a controlled commerce environment.",
    proof: "In-room product placement, sponsor offers, room-block arbitrage, and concierge upsells activate post-check-in.",
    phoneTitle: "Hotel Access",
    phoneMetric: "Room Key",
    phoneValue: "Unlocked",
  },
  {
    id: "loop",
    label: "Loop",
    icon: Radio,
    headline: "Value Recirculates",
    sub: "Every interaction feeds retention, data, and repeat economic activity.",
    proof: "Earn → Spend → Redeem → Return creates the closed-loop ecosystem investors need to see.",
    phoneTitle: "Reward Loop",
    phoneMetric: "Cycle Status",
    phoneValue: "Compounding",
  },
];

const metrics = [
  { label: "Endpoint Control", value: "Direct" },
  { label: "CAC Pressure", value: "Reduced" },
  { label: "Revenue Model", value: "Recurring" },
  { label: "System Leakage", value: "Contained" },
];

function ProgressLine({ activeIndex }) {
  return (
    <div className="hidden lg:flex items-center justify-center gap-3 w-full max-w-5xl mx-auto mt-10">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const active = index <= activeIndex;
        return (
          <React.Fragment key={step.id}>
            <motion.div
              animate={{ opacity: active ? 1 : 0.35, scale: index === activeIndex ? 1.08 : 1 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="h-12 w-12 rounded-2xl border border-white/15 bg-white/5 flex items-center justify-center shadow-lg shadow-white/5">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs text-white/60">{step.label}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <div className="h-px w-20 bg-white/15 relative overflow-hidden">
                <motion.div
                  initial={false}
                  animate={{ width: index < activeIndex ? "100%" : "0%" }}
                  className="absolute left-0 top-0 h-full bg-white"
                />
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function PhoneMock({ step }) {
  return (
    <div className="relative mx-auto w-[290px] rounded-[2.5rem] border border-white/20 bg-zinc-950 p-3 shadow-2xl shadow-white/10">
      <div className="rounded-[2rem] overflow-hidden border border-white/10 bg-black min-h-[560px]">
        <div className="flex justify-between items-center px-5 py-4 text-xs text-white/60">
          <span>TPG</span>
          <span>5G</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="px-5"
          >
            <div className="rounded-3xl bg-white text-black p-5 mb-4">
              <p className="text-xs uppercase tracking-[0.25em] text-black/50">{step.phoneTitle}</p>
              <h3 className="text-3xl font-bold mt-3">{step.phoneValue}</h3>
              <p className="text-sm text-black/60 mt-1">{step.phoneMetric}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                [Wallet, "Wallet"],
                [Ticket, "Access"],
                [Hotel, "Room"],
                [BarChart3, "Rewards"],
              ].map(([Icon, label]) => (
                <div key={label} className="rounded-2xl bg-white/5 border border-white/10 p-4">
                  <Icon className="h-5 w-5 mb-3" />
                  <p className="text-sm text-white/75">{label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 p-4">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="h-4 w-4" />
                <p className="text-sm font-semibold">Verified System Event</p>
              </div>
              <p className="text-sm text-white/55 leading-relaxed">{step.proof}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function LiveDemo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const navigate = useNavigate();

  const nextStep = () => setActiveIndex((current) => (current + 1) % steps.length);

  const doctrine = useMemo(() => [
    "Control the Frame",
    "Control the Endpoint",
    "Control the Economics",
  ], []);

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative px-6 py-8 lg:px-12">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
        </div>

        <nav className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">True Perspective Global</p>
            <h1 className="text-xl font-bold">Investor Live Demo</h1>
          </div>
          <div className="hidden md:flex items-center gap-3 text-sm text-white/60">
            {doctrine.map((item) => <span key={item}>{item}</span>)}
          </div>
        </nav>

        <div className="relative z-10 mx-auto max-w-7xl pt-16 lg:pt-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 mb-6">
                <LockKeyhole className="h-4 w-4" /> Restricted Investor Simulation
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-sm uppercase tracking-[0.35em] text-white/45 mb-4">
                    Step {activeIndex + 1} / {steps.length}
                  </p>
                  <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-6">
                    {activeStep.headline}
                  </h2>
                  <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-8">
                    {activeStep.sub}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap gap-3 mb-10">
                {steps.map((step, index) => {
                  const Icon = step.icon;
                  const active = index === activeIndex;
                  return (
                    <Button
                      key={step.id}
                      onClick={() => setActiveIndex(index)}
                      variant="outline"
                      className={`rounded-2xl border-white/10 px-4 py-6 ${active ? "bg-white text-black hover:bg-white" : "bg-white/5 text-white hover:bg-white/10"}`}
                    >
                      <Icon className="h-4 w-4 mr-2" /> {step.label}
                    </Button>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={nextStep} className="rounded-2xl bg-white text-black hover:bg-white/90 px-6 py-6">
                  Run Next System Event <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => navigate('/deal-room')}
                  className="rounded-2xl border-white/15 bg-white/5 text-white hover:bg-white/10 px-6 py-6"
                >
                  <Play className="mr-2 h-4 w-4" /> Enter Deal Room
                </Button>
              </div>
            </div>

            <PhoneMock step={activeStep} />
          </div>

          <ProgressLine activeIndex={activeIndex} />
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16">
        <div className="mx-auto max-w-7xl grid md:grid-cols-4 gap-4">
          {metrics.map((metric) => (
            <Card key={metric.label} className="rounded-3xl border border-white/10 bg-white/[0.04] text-white">
              <CardContent className="p-6">
                <p className="text-sm text-white/45 mb-3">{metric.label}</p>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-2xl font-bold">{metric.value}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-24">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 lg:p-12">
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/45 mb-4">Investor Close</p>
              <h3 className="text-4xl font-bold mb-4">The Future Is Produced.</h3>
              <p className="text-white/60 leading-relaxed">
                This demo translates TPG doctrine into a visible operating loop: endpoint control creates access,
                token economics create behavior, and experience design creates recurring value.
              </p>
              <Button
                onClick={() => navigate('/deal-room')}
                className="mt-6 rounded-2xl bg-white text-black hover:bg-white/90 px-6 py-4"
              >
                Enter Deal Room <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                ["Frame", "Decision discipline"],
                ["Endpoint", "Distribution control"],
                ["Economics", "Behavior incentives"],
              ].map(([title, body]) => (
                <div key={title} className="rounded-3xl bg-black/40 border border-white/10 p-6">
                  <p className="text-2xl font-bold mb-2">{title}</p>
                  <p className="text-sm text-white/55">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
