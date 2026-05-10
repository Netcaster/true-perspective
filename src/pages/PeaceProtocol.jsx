import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  ShieldCheck,
  Smartphone,
  Wallet,
  Radio,
  PlayCircle,
  LockKeyhole,
  BarChart3,
  CheckCircle2,
  Zap,
  EyeOff,
  TimerReset,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const slides = [
  {
    eyebrow: "True Perspective Global",
    title: "Peace Protocol",
    subtitle: "Control the signal. Ignore the noise. Produce the outcome.",
    type: "cover",
    bullets: ["Content becomes product", "Product becomes behavior", "Behavior becomes economics"],
  },
  {
    eyebrow: "Episode 1",
    title: "Ignore to Win",
    subtitle: "Most people don't lose because they lack talent. They lose because they give energy to everything.",
    type: "script",
    bullets: [
      "Peace is chosen through attention control.",
      "Every trigger is asking for control.",
      "Emotion is information. Execution is a decision.",
      "Never sacrifice permanent things for temporary feelings.",
    ],
  },
  {
    eyebrow: "Tenant #1 Applied",
    title: "Control the Frame",
    subtitle: "The decision layer behind Peace Protocol.",
    type: "principles",
    bullets: [
      "Ignore what doesn't matter.",
      "Refuse what doesn't align.",
      "Express emotion — never execute from it.",
      "Protect the permanent over the temporary.",
    ],
  },
  {
    eyebrow: "Product Layer",
    title: "VIPTIO Focus Mode",
    subtitle: "A behavioral control layer inside the TPG ecosystem.",
    type: "phone",
    bullets: [
      "Blocks low-value distractions.",
      "Delays emotionally reactive responses.",
      "Prioritizes business, family, health, and purpose.",
      "Rewards discipline with tokenized value.",
    ],
  },
  {
    eyebrow: "User Flow",
    title: "Permanent vs Temporary Check",
    subtitle: "A decision checkpoint before users act from emotional urgency.",
    type: "decision",
    bullets: [
      "Will this protect or compromise trust?",
      "Will this protect or compromise reputation?",
      "Will this protect or compromise equity?",
      "Will this protect or compromise opportunity?",
    ],
  },
  {
    eyebrow: "Economic Layer",
    title: "Discipline Becomes Value",
    subtitle: "Focus, restraint, and better decisions become measurable economic behavior.",
    type: "economics",
    bullets: [
      "Users earn for completing focus sessions.",
      "Users earn for delaying reactive responses.",
      "Users earn for completing Peace Protocol episodes.",
      "Engagement feeds retention, data, and recurring value.",
    ],
  },
  {
    eyebrow: "Investor Thesis",
    title: "Behavioral Infrastructure",
    subtitle: "TPG is not simply distributing content. TPG is productizing decision quality.",
    type: "investor",
    bullets: [
      "Modern users are overstimulated, reactive, and distracted.",
      "Poor attention lowers relationship and transaction quality.",
      "Peace Protocol improves discipline, retention, and ecosystem engagement.",
      "This creates monetizable behavior loops across content, device, token, and events.",
    ],
  },
  {
    eyebrow: "Close",
    title: "The Future Is Produced",
    subtitle: "TPG does not chase attention. TPG teaches users how to control it — then monetizes the behavior loop.",
    type: "close",
    bullets: ["Control the Frame", "Control the Endpoint", "Control the Economics"],
  },
];

const focusScreens = [
  {
    title: "Focus Dashboard",
    icon: Brain,
    value: "87",
    label: "Focus Score",
    detail: "3 energy leaks blocked today",
  },
  {
    title: "Attention Filters",
    icon: EyeOff,
    value: "ON",
    label: "Low-Value Content Blocked",
    detail: "Business, family, health prioritized",
  },
  {
    title: "Emotional Delay",
    icon: TimerReset,
    value: "10m",
    label: "Reflection Delay Active",
    detail: "Respond with clarity, not reaction",
  },
  {
    title: "Reward Loop",
    icon: Wallet,
    value: "+12",
    label: "EXIAL Credits Earned",
    detail: "Discipline converted into value",
  },
];

function PhoneWireframe() {
  const [screen, setScreen] = useState(0);
  const active = focusScreens[screen];
  const Icon = active.icon;

  return (
    <div className="mx-auto w-[280px] rounded-[2.5rem] border border-white/20 bg-zinc-950 p-3 shadow-2xl shadow-white/10">
      <div className="min-h-[520px] overflow-hidden rounded-[2rem] border border-white/10 bg-black">
        <div className="flex items-center justify-between px-5 py-4 text-xs text-white/50">
          <span>VIPTIO</span>
          <span>Focus Mode</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.22 }}
            className="px-5"
          >
            <div className="mb-4 rounded-3xl bg-white p-5 text-black">
              <Icon className="mb-8 h-7 w-7" />
              <p className="text-xs uppercase tracking-[0.25em] text-black/50">{active.title}</p>
              <h3 className="mt-3 text-5xl font-bold">{active.value}</h3>
              <p className="mt-1 text-sm text-black/60">{active.label}</p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="mb-3 text-sm font-semibold text-white">Decision Prompt</p>
              <p className="text-sm leading-relaxed text-white/60">{active.detail}</p>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              {["Protect", "Delay", "Rewrite", "Proceed"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-3 text-center text-xs text-white/65">
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 flex justify-center gap-2">
          {focusScreens.map((item, index) => (
            <button
              key={item.title}
              onClick={() => setScreen(index)}
              className={`h-2 rounded-full transition-all ${screen === index ? "w-7 bg-white" : "w-2 bg-white/25"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SlideVisual({ type }) {
  if (type === "phone") return <PhoneWireframe />;

  const visualMap = {
    cover: [PlayCircle, "Online Presentation", "Peace Protocol becomes a guided investor and operator experience."],
    script: [Radio, "Viral Episode Engine", "Short-form content with platform-ready doctrine and CTA structure."],
    principles: [ShieldCheck, "Decision Control", "A framework for attention, emotion, standards, and execution."],
    decision: [LockKeyhole, "Decision Gate", "Pause before temporary emotion compromises permanent value."],
    economics: [Wallet, "Tokenized Behavior", "Focus, restraint, and completion become measurable rewards."],
    investor: [BarChart3, "Investor Logic", "Behavioral infrastructure creates retention and recurring economics."],
    close: [Zap, "Outcome Produced", "Control the frame, endpoint, and economics."],
  };

  const [Icon, label, text] = visualMap[type] || visualMap.cover;

  return (
    <div className="relative mx-auto flex min-h-[420px] w-full max-w-md items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-white/5">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_60%)]" />
      <div className="relative text-center">
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[2rem] border border-white/15 bg-black/50">
          <Icon className="h-10 w-10" />
        </div>
        <h3 className="mb-3 text-2xl font-bold">{label}</h3>
        <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/55">{text}</p>
      </div>
    </div>
  );
}

export default function PeaceProtocol() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const navigate = useNavigate();
  const isLast = index === slides.length - 1;

  const progress = useMemo(() => ((index + 1) / slides.length) * 100, [index]);

  const next = () => {
    if (isLast) {
      navigate('/live-demo');
    } else {
      setIndex((current) => Math.min(current + 1, slides.length - 1));
    }
  };
  const prev = () => setIndex((current) => Math.max(current - 1, 0));

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="fixed left-0 top-0 z-50 h-1 bg-white transition-all duration-300" style={{ width: `${progress}%` }} />

      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 lg:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.32em] text-white/45">TPG / True Perspective</p>
          <h1 className="text-lg font-bold">Peace Protocol Presentation</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            {slides.map((item, slideIndex) => (
              <button
                key={item.title}
                onClick={() => setIndex(slideIndex)}
                className={`h-2 rounded-full transition-all ${slideIndex === index ? "w-8 bg-white" : "w-2 bg-white/25 hover:bg-white/50"}`}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
          <a
            href="https://nalu-enterprise.pages.dev/client-portal?client=tpg"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <span>📂</span> Document Portal
          </a>
        </div>
      </nav>

      <section className="mx-auto grid min-h-[calc(100vh-88px)] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.title}
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.28 }}
          >
            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-white/45">{slide.eyebrow}</p>
            <h2 className="mb-6 text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">{slide.title}</h2>
            <p className="mb-8 max-w-2xl text-xl leading-relaxed text-white/62">{slide.subtitle}</p>

            <div className="mb-10 grid gap-3">
              {slide.bullets.map((bullet) => (
                <Card key={bullet} className="rounded-2xl border border-white/10 bg-white/[0.04] text-white">
                  <CardContent className="flex items-start gap-3 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <p className="text-sm text-white/70">{bullet}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={prev}
                disabled={index === 0}
                variant="outline"
                className="rounded-2xl border-white/15 bg-white/5 px-5 py-6 text-white hover:bg-white/10 disabled:opacity-30"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Previous
              </Button>
              <Button
                onClick={next}
                className="rounded-2xl bg-white px-5 py-6 text-black hover:bg-white/90"
              >
                {isLast ? (
                  <>Enter Live Demo <ArrowRight className="ml-2 h-4 w-4" /></>
                ) : (
                  <>Next <ArrowRight className="ml-2 h-4 w-4" /></>
                )}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={`${slide.title}-visual`}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.28 }}
          >
            <SlideVisual type={slide.type} />
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}
