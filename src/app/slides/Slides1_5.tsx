"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X, Sparkles, AlertCircle, Headphones } from "lucide-react";

// === STOCK IMAGE URLS (Unsplash - free to use) ===
const STOCK_IMAGES = {
  // Dramatic dark cityscape at night — keynote opening mood
  heroCity: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80&auto=format",
  // Sunrise over mountains — new beginning / reset
  sunrise: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80&auto=format",
  // Abstract tangled wires — AirPods metaphor
  tangled: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80&auto=format",
  // Dark moody meeting room — brutal truth
  boardroom: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&auto=format",
  // Team strategy / hands together — identity
  strategy: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format",
};

// PAGE 1: Keynote Welcome
export function Slide1() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-black overflow-y-auto no-scrollbar">
      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.heroCity}
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
      </div>

      {/* Subtle purple radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top logo spacer */}
      <div className="z-10" />

      {/* Center Logo & Title */}
      <div className="my-auto flex flex-col items-center justify-center gap-8 z-10 text-center select-none pb-12">
        <div className="relative group gsap-scale-in">
          <Image
            src="/logo/flat_logo.png"
            alt="MergeX Logo"
            width={80}
            height={80}
            className="h-16 lg:h-20 w-auto object-contain brightness-110 mx-auto"
            priority
          />
          {/* Neon Purple Line underneath */}
          <div className="w-48 h-[2px] bg-violet-500 shadow-[0_0_12px_#8b5cf6] mx-auto mt-6 animate-pulse" />
        </div>

        <div className="space-y-4 max-w-2xl mt-4 gsap-fade-up">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-widest uppercase text-white font-sans drop-shadow-lg">
            MERGEX 2.0
          </h1>
          <p className="text-zinc-400 font-serif italic text-lg lg:text-xl font-light drop-shadow-md">
            From a Service Company to a Business Growth Partner
          </p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="flex justify-between items-end z-10 text-xs font-mono tracking-widest text-zinc-600 uppercase gsap-fade-up">
        <div className="flex flex-col gap-1 items-start">
          <span className="text-[10px] text-zinc-700">Presented by</span>
          <span className="text-zinc-400 font-semibold">Manikandan • Founder & CEO</span>
        </div>
        <div className="text-right flex flex-col gap-1 items-end">
          <span className="text-[10px] text-zinc-700">Event</span>
          <span className="text-zinc-400 font-semibold">Founder Keynote • Page 1</span>
        </div>
      </div>
    </div>
  );
}

// PAGE 2: Why Are We Here
export function Slide2() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Sunrise background — new beginning */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.sunrise}
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
      </div>

      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          The Purpose
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 2 / 20</span>
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 my-auto z-10 items-center pb-12">
        <div className="lg:col-span-6 space-y-8">
          <div className="space-y-3 gsap-fade-up">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              WHY ARE WE HERE?
            </h1>
            <p className="text-lg text-violet-300 font-medium">
              We Are Not Here To Celebrate. We Are Here To Reset.
            </p>
          </div>

          <div className="space-y-3.5">
            {[
              "Learn from our mistakes",
              "Understand our purpose",
              "Build MergeX Version 2",
              "Align everyone under one vision",
              "Start Day One together",
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3.5 group select-text gsap-stagger-item">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span className="text-zinc-300 font-light text-base lg:text-lg">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-6 gsap-scale-in">
          <div className="relative p-8 lg:p-10 bg-zinc-900/30 border border-zinc-900 rounded-3xl backdrop-blur-md shadow-xl select-text">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />
            <span className="text-4xl text-violet-400/30 font-serif absolute top-4 left-6">“</span>
            <blockquote className="text-xl lg:text-2xl font-serif italic text-zinc-200 leading-relaxed pl-4 relative z-10">
              Today is not the continuation of MergeX. <br /><br />
              <span className="text-white font-bold not-italic bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                Today is the rebirth of MergeX.
              </span>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>The Beginning of a New MergeX</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 3: The AirPods Story
export function Slide3() {
  const [untangled, setUntangled] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Operational Metaphor
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 3 / 20</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE AIRPODS STORY
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            The Problem Isn't The Wire. The Problem Is... We Keep Trying To Untangle It.
          </p>
        </div>

        {/* Interactive Comparison boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 select-none">
          {/* Tangled Wired Earphones */}
          <div 
            onClick={() => setUntangled(false)}
            className={`cursor-pointer group p-6 lg:p-8 rounded-3xl border transition-all duration-300 gsap-scale-in ${
              !untangled 
                ? "bg-zinc-900/50 border-rose-500/30 shadow-lg shadow-rose-500/5" 
                : "bg-zinc-950 border-zinc-900 opacity-50 hover:opacity-75"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Wired Earphones
              </span>
              <Headphones className="w-5 h-5 text-rose-400 animate-bounce" />
            </div>

            <div className="space-y-4">
              {/* Tangled Image */}
              <div className="h-52 w-full bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden relative">
                <Image
                  src="/tangled_earphones.png"
                  alt="Tangled state (V1)"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center z-10">
                  <span className="text-[10px] text-zinc-300 font-mono font-bold bg-black/60 px-2 py-0.5 rounded-full border border-rose-500/20">Tangled state (V1)</span>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-sm font-semibold text-zinc-200">Hours Spent Fixing</h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                  Every day, untangling the same knots. Fixing symptoms repeatedly.
                </p>
              </div>
            </div>
          </div>

          {/* AirPods */}
          <div 
            onClick={() => setUntangled(true)}
            className={`cursor-pointer group p-6 lg:p-8 rounded-3xl border transition-all duration-300 gsap-scale-in ${
              untangled 
                ? "bg-zinc-900/50 border-violet-500/40 shadow-lg shadow-violet-500/5" 
                : "bg-zinc-950 border-zinc-900 opacity-50 hover:opacity-75"
            }`}
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400">
                Wireless AirPods
              </span>
              <Sparkles className="w-5 h-5 text-violet-400 animate-pulse" />
            </div>

            <div className="space-y-4">
              {/* Sleek Wireless AirPods Image */}
              <div className="h-52 w-full bg-zinc-950 rounded-2xl border border-zinc-900 overflow-hidden relative">
                <Image
                  src="/wireless_airpods.png"
                  alt="Streamlined state (V2)"
                  fill
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-0 right-0 text-center z-10">
                  <span className="text-[10px] text-zinc-300 font-mono font-bold bg-black/60 px-2 py-0.5 rounded-full border border-violet-500/20">Streamlined state (V2)</span>
                </div>
              </div>

              <div className="text-center">
                <h4 className="text-sm font-semibold text-zinc-200">Simple • Reliable • Modern</h4>
                <p className="text-xs text-zinc-500 mt-1 max-w-xs mx-auto">
                  A system designed to work instantly. Eliminating structural flaws.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center bg-zinc-900/20 border border-zinc-900 rounded-2xl p-4.5 max-w-3xl mx-auto mt-2 gsap-fade-up">
          <p className="text-sm lg:text-base font-serif italic text-zinc-300">
            "Sometimes the smartest decision isn't fixing the old system. <span className="text-violet-400 font-semibold not-italic">It's building the right one.</span>"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Click either system to compare</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 4: The Brutal Truth
export function Slide4() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-black overflow-y-auto no-scrollbar slide-bg">
      {/* Moody boardroom background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.boardroom}
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-400 font-roboto">
          Reality Check
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 4 / 20</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE BRUTAL TRUTH
          </h2>
          <p className="text-rose-300 font-medium text-base lg:text-lg">
            Before We Build... We Must Accept Reality.
          </p>
        </div>

        {/* Audit Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
          {[
            { title: "Task-Oriented Focus", desc: "We focused on tasks instead of outcomes.", error: true },
            { title: "Passive Waiting", desc: "People waited instead of taking initiative.", error: true },
            { title: "Siloed Divisions", desc: "Departments became isolated silos.", error: true },
            { title: "Unsolved Problems", desc: "Problems were identified but not solved.", error: true },
            { title: "Vanishing Systems", desc: "Systems started then slowly disappeared.", error: true },
            { title: "Founder Bottleneck", desc: "Founders carried too much responsibility.", error: true },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-rose-900/40 rounded-2xl transition-all duration-300 backdrop-blur-sm group gsap-stagger-item"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  {item.title}
                </h4>
                <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-[10px] text-rose-400 font-bold font-mono">
                  ✕
                </div>
              </div>
              <p className="text-xs text-zinc-500 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="border-t border-zinc-900/80 pt-6 gsap-scale-in">
          <blockquote className="text-sm lg:text-base font-serif italic text-zinc-400 text-center max-w-3xl mx-auto leading-relaxed">
            "A company doesn't fail because people make mistakes. <br />
            <span className="text-white font-bold not-italic">It fails when the same mistakes repeat without improving the system.</span>"
          </blockquote>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>MergeX v1 Restrospective</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 5: Who is MergeX?
export function Slide5() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Team strategy background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.strategy}
          alt=""
          fill
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 via-zinc-950/95 to-zinc-950/80" />
      </div>

      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Core Identity
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 5 / 20</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 select-text font-sans pb-12">
        
        {/* Left: What we are NOT */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-3 gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              WHO IS MERGEX?
            </h2>
            <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider font-roboto">
              This is the most important question.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 space-y-4 gsap-scale-in backdrop-blur-sm">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block font-mono">
              MergeX is NOT
            </span>
            <div className="space-y-2.5">
              {[
                "A Website Company",
                "A Marketing Agency",
                "A Branding Studio",
                "A Software Development Company",
                "An AI Automation Company"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-500 line-through decoration-rose-500/50 gsap-stagger-item">
                  <X className="w-3.5 h-3.5 text-rose-500/70" />
                  <span className="text-sm font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: What we ARE */}
        <div className="lg:col-span-7 flex flex-col justify-center gsap-scale-in">
          <div className="relative group p-8 lg:p-10 bg-gradient-to-b from-zinc-900/50 to-zinc-950 border border-violet-500/20 rounded-3xl backdrop-blur-md shadow-2xl overflow-hidden">
            <div className="absolute -right-20 -top-20 w-44 h-44 bg-violet-600/10 rounded-full blur-3xl pointer-events-none group-hover:bg-violet-600/15 transition-all" />
            
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block mb-4 font-mono">
              MergeX IS...
            </span>

            <h3 className="text-xl lg:text-2xl font-medium text-white leading-relaxed font-sans font-semibold">
              A Management Consulting Company that identifies the constraint preventing a business from growing, designs the right strategy, and implements measurable solutions to help businesses scale sustainably.
            </h3>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Everything else is a tool.</span>
              <span className="text-violet-400 font-bold">Not our identity.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Understanding our true purpose</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}
