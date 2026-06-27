"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowRightLeft, Users, ShieldAlert, CheckCircle2, BookmarkCheck, GitPullRequest, X } from "lucide-react";

// PAGE 11: Scale Ourselves First
export function Slide11() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Internal Transformation
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 12 / 21</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 items-center select-text pb-12">
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2 gsap-fade-up">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              BEFORE WE SCALE OTHERS...
            </h2>
            <h2 className="text-3xl lg:text-5xl font-extrabold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent tracking-tight">
              WE MUST SCALE OURSELVES.
            </h2>
          </div>

          <div className="p-6 bg-violet-600/[0.02] border border-violet-500/10 rounded-2xl gsap-fade-up">
            <blockquote className="text-lg lg:text-xl font-serif italic text-zinc-300">
              "The first client of the SCALE methodology is MergeX itself."
            </blockquote>
          </div>

          <p className="text-sm font-light text-zinc-400 leading-relaxed max-w-md gsap-fade-up">
            Tomorrow, MergeX becomes our own growth consulting client. Every week we will identify, diagnose, and remove our own biggest constraints.
          </p>
        </div>

        {/* Visual Workflow column */}
        <div className="lg:col-span-6 flex flex-col justify-center gsap-scale-in">
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 backdrop-blur shadow-xl space-y-6 relative overflow-hidden select-none">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl" />
            
            {/* Version 1 box */}
            <div className="flex justify-between items-center bg-zinc-950 p-4 border border-zinc-900 rounded-2xl">
              <div>
                <h4 className="text-sm font-extrabold text-zinc-400">MergeX v1</h4>
                <p className="text-[10px] text-zinc-500 font-medium tracking-wider uppercase font-mono mt-0.5">Services & Individual effort</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-zinc-900 border border-zinc-800 text-zinc-500 rounded-full font-bold">Deprecated</span>
            </div>

            {/* Transition steps */}
            <div className="flex justify-around items-center px-4">
              {["Learning", "Mistakes", "Challenges"].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1.5 text-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-violet-500/50" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{step}</span>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex justify-center text-violet-500">
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>

            {/* Version 2 box */}
            <div className="flex justify-between items-center bg-violet-500/5 p-4 border border-violet-500/20 rounded-2xl shadow-lg shadow-violet-500/5">
              <div>
                <h4 className="text-sm font-extrabold text-white">MergeX 2.0</h4>
                <p className="text-[10px] text-violet-400 font-bold tracking-wider uppercase font-mono mt-0.5">Systematic • Scalable • Outcomes</p>
              </div>
              <span className="text-xs px-2.5 py-1 bg-violet-500/10 border border-violet-500/30 text-violet-400 rounded-full font-bold animate-pulse">Active</span>
            </div>

          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Restructuring our own framework</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 12: Why MergeX v1 Failed
export function Slide12() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-400 font-roboto">
          Post-Mortem Audit
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 13 / 21</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 select-text pb-12">
        <div className="lg:col-span-5 flex flex-col justify-between gap-6">
          <div className="space-y-3 gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              WHY MERGEX V1 FAILED
            </h2>
            <p className="text-sm text-rose-300 font-bold uppercase tracking-wider font-mono">
              Not Because We Lacked Talent. Because We Lacked Systems.
            </p>
          </div>

          <div className="bg-zinc-900/20 border border-zinc-900 rounded-3xl p-6 space-y-4 gsap-scale-in">
            <div className="space-y-3">
              {[
                "People waited for instructions.",
                "Identical problems repeated daily.",
                "Departments became isolated.",
                "Founders carried everything.",
                "Execution depended on individuals."
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-400 font-light gsap-stagger-item">
                  <X className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="text-sm">{bullet}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right side: Diagrams comparing workflows */}
        <div className="lg:col-span-7 flex flex-col gap-6 justify-center select-none gsap-scale-in">
          {/* Box A: Old Way */}
          <div className="bg-zinc-900/30 border border-zinc-900 rounded-2xl p-6 relative">
            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-widest block mb-4 font-mono">
              ❌ V1 Dependency Flow
            </span>
            <div className="flex items-center justify-center gap-3 text-center text-xs font-semibold">
              <div className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-500">Founder</div>
              <span className="text-zinc-700">→</span>
              <div className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-500">People</div>
              <span className="text-zinc-700">→</span>
              <div className="px-3 py-1.5 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg">Temporary Results</div>
            </div>
          </div>

          {/* Box B: New Way */}
          <div className="bg-zinc-900/30 border border-violet-500/20 rounded-2xl p-6 relative shadow-lg shadow-violet-500/5">
            <div className="absolute top-0 right-0 w-24 h-24 bg-violet-600/5 rounded-full blur-xl" />
            <span className="text-[10px] font-bold text-violet-400 uppercase tracking-widest block mb-4 font-mono">
              ✓ V2 System Flow
            </span>
            <div className="flex items-center justify-center gap-3 text-center text-xs font-semibold">
              <div className="px-5 py-2.5 bg-violet-600/10 border border-violet-500/30 text-violet-400 rounded-xl">Repeatable System</div>
              <span className="text-violet-500 font-bold">→</span>
              <div className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl">Predictable Results</div>
            </div>
          </div>

          <p className="text-xs text-zinc-500 text-center font-serif italic gsap-fade-up">
            "People can build success once. Systems build success repeatedly."
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Systems vs Individuals</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 13: The New MergeX Operating Principle
export function Slide13() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Operational Standards
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 14 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE NEW OPERATING PRINCIPLES
          </h2>
          <p className="text-violet-300 font-medium text-base lg:text-lg">
            We Don't Wait. We Improve.
          </p>
        </div>

        {/* 5 Rules grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-2 select-none">
          {[
            { num: "01", title: "Take Initiative", desc: "If you see a problem, take the first step to address it." },
            { num: "02", title: "Bring Solutions", desc: "Never bring only a complaint. Bring a recommendation." },
            { num: "03", title: "Improve Systems", desc: "Every mistake must improve a documented system." },
            { num: "04", title: "All Hands", desc: "If MergeX struggles, we all respond without boundaries." },
            { num: "05", title: "Everyone's Job", desc: "Progress is everyone's responsibility, not just leadership's." },
          ].map((rule, idx) => (
            <div 
              key={idx} 
              className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-violet-500/30 rounded-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur-sm group gsap-stagger-item"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-zinc-600 font-bold">{rule.num}</span>
                <CheckCircle2 className="w-4 h-4 text-violet-500/40 group-hover:text-violet-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors">{rule.title}</h4>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">{rule.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center mt-2 gsap-fade-up">
          <span className="px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-extrabold uppercase tracking-widest text-violet-400 font-mono">
            “ See it. Own it. Improve it. ”
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>The New Rules of Engagement</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 14: From I to We
export function Slide14() {
  const [toggleWe, setToggleWe] = useState(false);

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Cultural Alignment
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 15 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            FROM "I" TO "WE"
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            This Is Our New Culture.
          </p>
        </div>

        {/* Interactive toggle compare */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2 select-none">
          {/* Old Thinking */}
          <div 
            onClick={() => setToggleWe(false)}
            className={`cursor-pointer p-6 lg:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between gsap-scale-in ${
              !toggleWe 
                ? "bg-zinc-900/40 border-rose-500/20 shadow-md shadow-rose-500/5 scale-[1.01]" 
                : "bg-zinc-950 border-zinc-900 opacity-50"
            }`}
          >
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block font-mono mb-4">
              Old Thinking
            </span>
            <div className="space-y-3.5 my-auto py-4">
              {["My task.", "My department.", "My responsibility.", "My problem."].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-500 text-sm font-light line-through decoration-rose-500/20 gsap-stagger-item">
                  <X className="w-3.5 h-3.5 text-rose-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-zinc-600 font-mono border-t border-zinc-900 pt-3 mt-4">
              Siloed individual mindset
            </div>
          </div>

          {/* New Thinking */}
          <div 
            onClick={() => setToggleWe(true)}
            className={`cursor-pointer p-6 lg:p-8 rounded-3xl border transition-all duration-300 flex flex-col justify-between gsap-scale-in ${
              toggleWe 
                ? "bg-zinc-900/40 border-violet-500/30 shadow-lg shadow-violet-500/5 scale-[1.01]" 
                : "bg-zinc-950 border-zinc-900 opacity-50"
            }`}
          >
            <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block font-mono mb-4">
              New Thinking
            </span>
            <div className="space-y-3.5 my-auto py-4">
              {["Our client.", "Our company.", "Our mission.", "Our success."].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-200 text-sm font-medium gsap-stagger-item">
                  <CheckCircle2 className="w-4 h-4 text-violet-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="text-[10px] text-violet-400 font-bold font-mono border-t border-zinc-900/80 pt-3 mt-4">
              Collaborative mission ownership
            </div>
          </div>
        </div>

        {/* Large Quote */}
        <div className="text-center p-6 bg-zinc-900/20 border border-zinc-900 rounded-2xl max-w-4xl mx-auto mt-2 gsap-fade-up">
          <blockquote className="text-base lg:text-lg font-serif italic text-zinc-300 leading-relaxed pl-4">
            "People don't work for Manikandan. People don't work for Yaashwanth. <br />
            <span className="text-white font-bold not-italic bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              People work for MergeX.
            </span>"
          </blockquote>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Click cards to switch perspective</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 15: The MergeX 2.0 Commitment
export function Slide15() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Our Pledge
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 16 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE MERGEX 2.0 COMMITMENT
          </h2>
          <p className="text-violet-300 font-medium text-base lg:text-lg">
            Starting Today...
          </p>
        </div>

        {/* Commitment Blocks split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 select-text">
          {/* Founder Commitment */}
          <div className="p-6 lg:p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl relative backdrop-blur-sm shadow-xl flex flex-col justify-between gsap-scale-in">
            <div className="space-y-4">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block font-mono">
                Founder Commitment
              </span>
              <p className="text-zinc-200 font-light text-sm lg:text-base leading-relaxed italic">
                "As your Founder, I promise to build systems instead of depending on people, create opportunities instead of excuses, lead with transparency, and never ask you to uphold a standard that I am unwilling to uphold myself."
              </p>
            </div>
            <div className="mt-8 border-t border-zinc-800 pt-4 flex items-center gap-2.5 text-xs text-zinc-500">
              <BookmarkCheck className="w-4 h-4 text-violet-400" />
              <span>Manikandan • CEO</span>
            </div>
          </div>

          {/* Team Commitment */}
          <div className="p-6 lg:p-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl relative backdrop-blur-sm shadow-xl flex flex-col justify-between gsap-scale-in">
            <div className="space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest block font-mono">
                Team Commitment
              </span>
              <p className="text-zinc-200 font-light text-sm lg:text-base leading-relaxed italic">
                "As members of MergeX, we commit to taking ownership, solving constraints, supporting one another, and building a company that our clients can trust and our future selves can be proud of."
              </p>
            </div>
            <div className="mt-8 border-t border-zinc-800 pt-4 flex items-center gap-2.5 text-xs text-zinc-500">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>The MergeX Team</span>
            </div>
          </div>
        </div>

        {/* Commitment Checklist */}
        <div className="flex flex-wrap justify-center gap-4 bg-zinc-900/10 border border-zinc-900 rounded-2xl p-4.5 text-xs text-zinc-400 gsap-fade-up">
          {["Problem solver mindset", "Client outcomes first", "Continuous system upgrades", "Unconditional support"].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg">
              <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Founder & Team pledges</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 13.5: The Decision Filter
export function SlideDecisionFilter() {
  const filters = [
    { q: "Will this help the client grow?", desc: "Every project or strategy must directly move client outcomes." },
    { q: "Will this improve MergeX's systems?", desc: "Every shortcut breaks the system. Choose structure." },
    { q: "Will this scale the system?", desc: "Ensure the solution is repeatable, not a one-off patch." },
    { q: "Will this build long-term trust?", desc: "Integrity over quick gains, every single time." },
    { q: "Will this create measurable value?", desc: "If you cannot measure it, you cannot manage it." }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Operational Boundaries
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 15 / 26</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text font-sans pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE DECISION FILTER
          </h2>
          <p className="text-violet-300 font-medium text-base lg:text-lg">
            Five Questions. One Answer. If not all 'Yes'... don't do it.
          </p>
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 mt-2 select-none">
          {filters.map((filter, idx) => (
            <div 
              key={idx} 
              className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-violet-500/20 rounded-2xl transition-all duration-300 flex flex-col justify-between backdrop-blur shadow-md gsap-stagger-item group"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-mono text-zinc-600 font-bold">Question 0{idx + 1}</span>
                <CheckCircle2 className="w-4 h-4 text-violet-500/40 group-hover:text-violet-400 transition-colors" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-zinc-200 mb-2 group-hover:text-white transition-colors leading-snug">{filter.q}</h4>
                <p className="text-[10px] text-zinc-500 leading-relaxed font-light">{filter.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center mt-2 gsap-fade-up font-sans">
          <span className="px-5 py-2.5 bg-rose-500/5 border border-rose-500/10 rounded-full text-xs font-bold uppercase tracking-widest text-rose-400 font-mono">
            "If it is not a clear Yes, it is a No."
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Sovereign alignment parameters</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}
