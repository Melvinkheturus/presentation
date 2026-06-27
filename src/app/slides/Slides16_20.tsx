"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { Calendar, TrendingUp, Heart, Sparkles, Award, CheckCircle2, Bookmark } from "lucide-react";

// === STOCK IMAGE URLS (Unsplash - free to use) ===
const STOCK_IMAGES = {
  // Road / path stretching ahead — roadmap
  roadmap: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&auto=format",
  // City skyline at golden hour — success
  skyline: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1920&q=80&auto=format",
  // Dramatic sunset / legacy
  legacy: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1920&q=80&auto=format",
  // Leader walking into light
  leader: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80&auto=format",
  // Celebration / confetti moment
  celebration: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80&auto=format",
  // Dramatic spotlight / stage — closing
  spotlight: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80&auto=format",
};

// PAGE 16: The Next 90 Days
export function Slide16() {
  const [activePhase, setActivePhase] = useState<0 | 1 | 2>(0);

  const phases = [
    {
      title: "Phase 1 — Foundation (Week 1–2)",
      tasks: [
        "Finalize MergeX 2.0 structure",
        "Define every member's ownership",
        "Launch MergeX OS internally",
        "Document all core processes (SOPs)",
        "Standardize communication layers",
      ],
      accent: "violet"
    },
    {
      title: "Phase 2 — Execution (Week 3–6)",
      tasks: [
        "Build a predictable sales pipeline",
        "Improve consulting quality deliverables",
        "Standardize project delivery loops",
        "Build repeatable tech systems",
        "Create measurable department KPIs",
      ],
      accent: "cyan"
    },
    {
      title: "Phase 3 — Growth (Week 7–12)",
      tasks: [
        "Acquire high-quality enterprise clients",
        "Deliver measurable business results",
        "Build deep customer case studies",
        "Strengthen the MergeX growth brand",
        "Improve operations continuously",
      ],
      accent: "emerald"
    }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Mountain road background — roadmap */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.roadmap}
          alt=""
          fill
          className="object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
      </div>
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Execution Roadmap
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 17 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE NEXT 90 DAYS
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            The Launch of MergeX 2.0
          </p>
        </div>

        {/* Phase navigation tabs */}
        <div className="flex flex-wrap p-1 bg-zinc-900 border border-zinc-800 rounded-2xl max-w-2xl select-none gsap-fade-up">
          {phases.map((phase, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhase(idx as 0 | 1 | 2)}
              className={`flex-1 py-3 text-xs font-bold rounded-xl transition-all ${
                idx === activePhase
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/10"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Phase 0{idx + 1}
            </button>
          ))}
        </div>

        {/* Phase detail container */}
        <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 lg:p-8 backdrop-blur shadow-xl relative overflow-hidden min-h-[260px] flex flex-col justify-between select-text gsap-scale-in">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-violet-400" />
              <h3 className="text-lg lg:text-xl font-extrabold text-white">
                {phases[activePhase].title}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {phases[activePhase].tasks.map((task, idx) => (
                <div key={idx} className="flex items-start gap-3 gsap-stagger-item">
                  <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-[10px] text-violet-400 font-bold mt-0.5 flex-shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-zinc-300 font-light text-sm">{task}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-xs text-zinc-500 border-t border-zinc-800 pt-4 mt-6">
            Focusing on one execution block at a time.
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Click tabs to review phase timelines</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 17: What Success Looks Like
export function Slide17() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* City skyline background — success */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.skyline}
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/60" />
      </div>
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Future Outlook
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 18 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHAT SUCCESS LOOKS LIKE
          </h2>
          <p className="text-violet-300 font-medium text-base lg:text-lg">
            Three Years From Today
          </p>
        </div>

        {/* Quotes list */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 select-text">
          {[
            { tag: "The Market Brand", quote: "Who is MergeX?", highlight: "They're the company that businesses call when growth stops." },
            { tag: "Client Word of Mouth", quote: "Don't waste money trying random things.", highlight: "Call MergeX first." },
            { tag: "Client Deliverables", quote: "MergeX didn't just complete our project.", highlight: "They changed how our company operates." },
            { tag: "Team Culture", quote: "I didn't just get a job.", highlight: "I built something meaningful." },
            { tag: "Our Competitors", quote: "We can't replicate their engagement.", highlight: "MergeX plays a completely different game." }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`p-6 bg-zinc-900/30 border border-zinc-900 rounded-3xl backdrop-blur flex flex-col justify-between shadow-lg relative gsap-stagger-item ${
                idx === 2 ? "md:col-span-2" : ""
              }`}
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block font-mono">{item.tag}</span>
                <blockquote className="text-xs text-zinc-400 italic">
                  "{item.quote}"
                </blockquote>
                <p className="text-sm font-semibold text-white leading-relaxed">
                  {item.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center mt-2 border-t border-zinc-900/60 pt-6 gsap-fade-up">
          <p className="text-base font-serif italic text-zinc-300">
            "We are not building projects. <span className="text-violet-400 font-bold not-italic">We are building trust.</span>"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Visionary landmarks for 2029</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 18: The Legacy We Want to Leave
export function Slide18() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Sunset / legacy background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.legacy}
          alt=""
          fill
          className="object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/90 to-zinc-950/70" />
      </div>
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Impact Statement
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 19 / 21</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 items-center select-text pb-12">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight gsap-fade-up">
            THE LEGACY WE WANT TO LEAVE
          </h2>

          <div className="p-6 bg-zinc-900/20 border border-zinc-900 rounded-2xl gsap-fade-up">
            <blockquote className="text-base lg:text-lg font-serif italic text-zinc-200">
              "Success is not measured by how many projects we complete. Success is measured by how many businesses become stronger because MergeX existed."
            </blockquote>
          </div>

          <p className="text-xs lg:text-sm font-light text-zinc-400 leading-relaxed gsap-fade-up">
            Every business we improve supports families, creates jobs, builds economies, and changes lives. When businesses grow, people grow, and society grows.
          </p>
        </div>

        {/* Pillars of Legacy */}
        <div className="lg:col-span-6 gsap-scale-in">
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 backdrop-blur shadow-xl space-y-4 select-none">
            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block font-mono">
              Our Legacy Pillars
            </span>

            <div className="space-y-2.5">
              {[
                "Better Businesses",
                "Better Systems",
                "Better Leaders",
                "Better Teams",
                "Better Communities"
              ].map((pillar, idx) => (
                <div key={idx} className="flex items-center gap-3.5 px-4 py-2.5 bg-zinc-950 border border-zinc-900 hover:border-violet-500/20 rounded-xl transition-all gsap-stagger-item">
                  <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-[10px] text-violet-400 font-bold">
                    ✓
                  </div>
                  <span className="text-sm font-semibold text-zinc-200">{pillar}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Leaving a lasting footprint</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 19: My Promise to You
export function Slide19() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Leader / personal promise background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.leader}
          alt=""
          fill
          className="object-cover opacity-8"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/95 to-zinc-950/80" />
      </div>
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Leadership Statement
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 20 / 21</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 items-center select-text pb-12">
        <div className="lg:col-span-6 space-y-5">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight gsap-fade-up">
            MY PROMISE TO YOU
          </h2>

          <div className="space-y-4 bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl gsap-fade-up">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block font-mono">I cannot promise...</span>
            <ul className="space-y-2 text-xs font-light text-zinc-400 leading-relaxed list-disc list-inside">
              <li>That everything will always be easy.</li>
              <li>That we will never fail.</li>
              <li>That every decision will be perfect.</li>
            </ul>
          </div>

          <div className="space-y-4 bg-zinc-900/20 border border-zinc-900 p-6 rounded-2xl gsap-fade-up">
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block font-mono">But I can promise...</span>
            <ul className="space-y-2 text-xs font-light text-zinc-300 leading-relaxed list-disc list-inside">
              <li>I will always choose honesty over comfort.</li>
              <li>I will always protect MergeX before my ego.</li>
              <li>I will continue learning, building, and listening.</li>
              <li>I will never stop fighting for the vision we believe in.</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-6 gsap-scale-in">
          <div className="p-8 lg:p-10 bg-zinc-900/30 border border-zinc-900 rounded-3xl backdrop-blur relative shadow-xl text-center select-text">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl" />
            <Bookmark className="w-8 h-8 text-violet-400 mx-auto mb-4 animate-pulse" />
            <blockquote className="text-xl lg:text-2xl font-serif italic text-zinc-200 leading-relaxed pl-4">
              "Leadership is not standing in front. <br /><br />
              <span className="text-white font-bold not-italic bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Leadership is walking first.
              </span>"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Founder's personal commitment</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 20: Day One (Climax Slide)
export function Slide20() {
  const [committed, setCommitted] = useState(false);

  const handleCommit = () => {
    setCommitted(true);
    // Fire double confetti
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 }
    });
    
    // Delayed burst
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.7 }
      });
    }, 250);
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Celebration background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.celebration}
          alt=""
          fill
          className="object-cover opacity-12"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/70" />
      </div>
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          The Launch Day
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 21 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 text-center select-text pb-12">
        <div className="space-y-4 max-w-3xl mx-auto gsap-fade-up">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-violet-500/10 border border-violet-500/20 rounded-full text-xs font-semibold text-violet-300 select-none animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Summit Climax</span>
          </span>

          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            TOMORROW IS DAY ONE
          </h2>
          <p className="text-lg lg:text-2xl text-violet-400 font-bold uppercase tracking-wider font-mono">
            MergeX 2.0 Begins.
          </p>
        </div>

        {/* Commitment box */}
        <div className="max-w-4xl mx-auto w-full select-none mt-2 gsap-scale-in">
          {committed ? (
            <div className="p-8 lg:p-10 bg-emerald-500/[0.03] border border-emerald-500/30 rounded-3xl backdrop-blur-md shadow-2xl shadow-emerald-500/5 transition-all duration-700 animate-scale-up">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-4 font-mono">Pledge Acknowledged</span>
              <p className="text-base lg:text-lg font-serif italic text-zinc-200 leading-relaxed max-w-2xl mx-auto">
                "I commit to building MergeX with integrity, ownership, excellence, and purpose. I will solve problems, not create excuses. I will protect our clients, support my team, and continuously improve myself. From today, I am not just working at MergeX—I am building MergeX."
              </p>
              <div className="mt-6 flex justify-center items-center gap-2 text-xs font-bold text-emerald-400 font-mono">
                <CheckCircle2 className="w-5 h-5 animate-pulse" />
                <span>ALL 18 MEMBERS COMMITTED</span>
              </div>
            </div>
          ) : (
            <div className="p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl backdrop-blur-md flex flex-col items-center gap-6">
              <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-xl">
                If you believe in this vision—not because Manikandan said it, but because you choose it—commit to building MergeX 2.0 together.
              </p>
              <button
                onClick={handleCommit}
                className="px-8 py-4 bg-violet-600 hover:bg-violet-500 text-white text-base font-bold rounded-2xl shadow-lg shadow-violet-600/20 hover:shadow-violet-600/30 transition-all duration-300 transform active:scale-95"
              >
                I Commit to MergeX 2.0
              </button>
            </div>
          )}
        </div>

        {/* Day One dialogue snippet */}
        <div className="max-w-3xl mx-auto text-xs text-zinc-500 italic mt-2 gsap-fade-up">
          "Every great company has a Day One. Today is ours. Let's build MergeX."
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Click the button to commit & fire celebration</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 21: The Final Question
export function SlideTheQuestion() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-black overflow-y-auto no-scrollbar">
      {/* Dramatic spotlight / stage background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={STOCK_IMAGES.spotlight}
          alt=""
          fill
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
      </div>
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          The Decisive Moment
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 26 / 26</span>
      </div>

      {/* Main Content */}
      <div className="my-auto flex flex-col items-center justify-center gap-12 z-10 text-center select-text font-sans pb-16">
        <div className="max-w-4xl space-y-8 gsap-scale-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-zinc-200 tracking-tight leading-relaxed italic font-serif">
            "Five years from today... when someone asks, 'Were you there when MergeX started becoming the company it is today?'... <br />
            what will your answer be?"
          </h2>
        </div>

        <div className="h-[2px] w-24 bg-zinc-800 gsap-fade-up" />

        <div className="gsap-fade-up">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-widest uppercase text-white font-sans animate-pulse">
            LET'S BUILD IT.
          </h1>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-700 gsap-fade-up">
        <span>Curated closure block</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}
