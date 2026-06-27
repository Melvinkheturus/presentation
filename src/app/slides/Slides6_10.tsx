"use client";

import React, { useState } from "react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Target, ShieldCheck, Activity, Award, Briefcase, Zap, Database, Cpu, PieChart, X, Check, ArrowRight } from "lucide-react";

// PAGE 6: The Real Problem (Constraint Diagnosis)
export function Slide6() {
  const [activeTab, setActiveTab] = useState<"wrong" | "right">("right");

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Problem Solving
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 6 / 20</span>
      </div>

      {/* Main content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE REAL PROBLEM
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            Businesses Don't Have a Service Problem. They Have a Growth Constraint.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-xl max-w-sm gsap-fade-up">
          <button 
            onClick={() => setActiveTab("wrong")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "wrong" 
                ? "bg-rose-600 text-white shadow-md shadow-rose-500/10" 
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            ❌ Traditional View
          </button>
          <button 
            onClick={() => setActiveTab("right")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeTab === "right" 
                ? "bg-violet-600 text-white shadow-md shadow-violet-500/10" 
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            ✓ MergeX Approach
          </button>
        </div>

        {/* Diagram Flows */}
        <div className="h-64 flex flex-col justify-center items-center bg-zinc-950/40 border border-zinc-900 rounded-3xl p-6 relative gsap-scale-in">
          
          {activeTab === "wrong" ? (
            <div className="flex flex-col items-center gap-4 text-center animate-fade-in">
              <div className="px-5 py-3.5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <span className="text-sm font-semibold text-zinc-300">Revenue Stopped Growing</span>
              </div>
              
              <div className="h-8 w-[2px] bg-rose-500/40 relative">
                <div className="absolute bottom-0 -left-1 text-xs text-rose-500">▼</div>
              </div>

              <div className="px-5 py-3.5 bg-rose-500/10 border border-rose-500/20 rounded-2xl shadow-lg shadow-rose-500/5">
                <span className="text-sm font-semibold text-rose-400">"We Need More Marketing"</span>
              </div>

              <div className="h-8 w-[2px] bg-rose-500/40 relative">
                <div className="absolute bottom-0 -left-1 text-xs text-rose-500">▼</div>
              </div>

              <span className="text-base font-bold text-rose-500 tracking-wider uppercase font-mono">
                ❌ Wrong Diagnosis
              </span>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center gap-2 lg:gap-4 text-center w-full max-w-4xl select-none">
              
              <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl">
                <span className="text-xs font-semibold text-zinc-300">Revenue Stopped</span>
              </div>
              
              <span className="text-violet-500 font-bold">→</span>

              <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-violet-500/30 transition-colors">
                <span className="text-xs font-semibold text-zinc-300">Business Diagnosis</span>
              </div>

              <span className="text-violet-500 font-bold">→</span>

              <div className="px-4 py-2.5 bg-violet-600/10 border border-violet-500/30 rounded-xl shadow-lg shadow-violet-500/5">
                <span className="text-xs font-bold text-violet-400">Constraint ID</span>
              </div>

              <span className="text-violet-500 font-bold">→</span>

              <div className="px-4 py-2.5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-violet-500/30 transition-colors">
                <span className="text-xs font-semibold text-zinc-300">Root Cause</span>
              </div>

              <span className="text-violet-500 font-bold">→</span>

              <div className="px-4 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 shadow-md">
                <span className="text-xs font-bold">Right Solution</span>
              </div>
              
            </div>
          )}

          <div className="absolute bottom-3 text-[10px] text-zinc-500 font-mono">
            {activeTab === "right" ? "Focusing on diagnosis over blind services" : "Blindly guessing the growth block"}
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Click tabs to toggle diagnostic model</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 7: Why Most Agencies Fail
export function Slide7() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Competitive Positioning
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 7 / 20</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            WHY MOST AGENCIES FAIL
          </h2>
          <p className="text-violet-300 font-medium text-base lg:text-lg">
            They Sell Services. We Solve Business Problems.
          </p>
        </div>

        {/* Comparison Matrix Table */}
        <div className="border border-zinc-900 bg-zinc-900/10 rounded-2xl overflow-hidden backdrop-blur shadow-xl mt-2 select-text gsap-scale-in">
          <div className="grid grid-cols-2 border-b border-zinc-900 bg-zinc-900/30 text-xs font-bold uppercase tracking-wider text-zinc-400">
            <div className="p-4 border-r border-zinc-900 text-center text-rose-400">Traditional Agency</div>
            <div className="p-4 text-center text-violet-400 bg-violet-500/5">MergeX</div>
          </div>

          <div className="divide-y divide-zinc-900/60">
            {[
              { wrong: "What do you need?", right: "What is stopping your growth?" },
              { wrong: "Deliver a Website", right: "Business Diagnosis first" },
              { wrong: "Marketing Campaign (guessing)", right: "Constraint Analysis" },
              { wrong: "Focus on Deliverables", right: "Focus on Business Outcomes" },
              { wrong: "Project Completion & Close", right: "Business Transformation" },
              { wrong: "Invoice Closed (done)", right: "Continuous Improvement & Support" },
            ].map((row, idx) => (
              <div key={idx} className="grid grid-cols-2 text-sm text-zinc-300 font-light hover:bg-zinc-900/20 transition-colors gsap-stagger-item">
                <div className="p-4 border-r border-zinc-900 text-center text-zinc-500 line-through decoration-rose-500/20">{row.wrong}</div>
                <div className="p-4 text-center font-medium text-zinc-200 bg-violet-500/5">{row.right}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center mt-2 gsap-fade-up">
          <p className="text-sm lg:text-base font-serif italic text-zinc-300">
            "Services are what we deliver. <span className="text-violet-400 font-semibold not-italic">Outcomes are what clients remember.</span>"
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>The Consulting Difference</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 8: The Depth of MergeX
export function Slide8() {
  const [activeStep, setActiveStep] = useState(0);

  const engagementModel = [
    { name: "Business Discovery", desc: "Understand history, goals, structures, and business context." },
    { name: "Diagnosis", desc: "Examine departments, interview stakeholders, audit files." },
    { name: "Constraint Identification", desc: "Locate the primary bottleneck slowing down overall growth." },
    { name: "Root Cause Analysis", desc: "Uncover why the constraint exists structurally." },
    { name: "Growth Strategy", desc: "Formulate concrete, tailored methodologies to bypass constraints." },
    { name: "Solution Design", desc: "Draft SOPs, create software, or outline required tech templates." },
    { name: "Execution", desc: "Build systems, deploy websites, or launch automation routines." },
    { name: "Measurement", desc: "Establish metrics, verify database metrics, audit conversions." },
    { name: "Optimization", desc: "Iterate and polish the execution based on concrete data logs." },
    { name: "Continuous Growth", desc: "Scale the system sustainably for long-term expansion." }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Engagement Model
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 9 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE DEPTH OF MERGEX
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            We Don't Stop at Recommendations. We Stay Until Results.
          </p>
        </div>

        {/* Scrollable / Clickable Step Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-2 select-none">
          {/* Steps List */}
          <div className="lg:col-span-5 h-[280px] overflow-y-auto pr-2 no-scrollbar border-r border-zinc-900/60 flex flex-col gap-1.5">
            {engagementModel.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`w-full text-left px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between gsap-stagger-item ${
                  idx === activeStep 
                    ? "bg-violet-600/10 border-violet-500 text-violet-400 shadow-md shadow-violet-500/5 scale-[1.02]" 
                    : "bg-zinc-900/20 border-zinc-900 text-zinc-400 hover:text-zinc-200"
                }`}
              >
                <span>{idx + 1}. {step.name}</span>
                <span className="text-[10px] font-mono opacity-50">Step 0{idx + 1}</span>
              </button>
            ))}
          </div>

          {/* Expanded Step Detail Box */}
          <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-900 rounded-3xl p-8 min-h-[220px] flex flex-col justify-between backdrop-blur shadow-xl relative overflow-hidden gsap-scale-in">
            <div className="absolute -right-20 -bottom-20 w-44 h-44 bg-violet-600/5 rounded-full blur-3xl" />
            
            <div className="space-y-4">
              <span className="text-xs font-bold text-violet-400 uppercase tracking-widest block font-mono">
                Engagement Step 0{activeStep + 1}
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                {engagementModel[activeStep].name}
              </h3>
              <p className="text-zinc-400 font-light text-base leading-relaxed">
                {engagementModel[activeStep].desc}
              </p>
            </div>

            <div className="text-xs text-zinc-500 font-medium italic border-t border-zinc-800 pt-4 mt-6">
              "We stay with the client until results are measured."
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Click steps on the left to review details</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 9: The MergeX Ecosystem
export function Slide9() {
  const pillars = [
    { title: "Business Consulting", icon: <Briefcase className="w-5 h-5 text-violet-400" /> },
    { title: "Sales Strategy", icon: <TrendingUp className="w-5 h-5 text-emerald-400" /> },
    { title: "Brand Strategy", icon: <Target className="w-5 h-5 text-rose-400" /> },
    { title: "Technology", icon: <Database className="w-5 h-5 text-cyan-400" /> },
    { title: "AI & Automation", icon: <Cpu className="w-5 h-5 text-fuchsia-400" /> },
    { title: "Operations", icon: <ShieldCheck className="w-5 h-5 text-amber-400" /> },
    { title: "Data & Insights", icon: <PieChart className="w-5 h-5 text-indigo-400" /> }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Operational Architecture
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 10 / 21</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE MERGEX ECOSYSTEM
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            Every Capability Exists for One Purpose: To Remove Business Constraints.
          </p>
        </div>

        {/* Pillars Connected grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-4 select-none">
          {pillars.map((pillar, idx) => (
            <div 
              key={idx} 
              className="p-5 bg-zinc-900/30 border border-zinc-900 hover:border-violet-500/30 rounded-2xl flex flex-col items-center justify-between text-center transition-all duration-300 group shadow-md gsap-stagger-item"
            >
              <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-xl mb-4 group-hover:bg-zinc-900 transition-colors">
                {pillar.icon}
              </div>
              <h4 className="text-xs font-bold text-zinc-300 leading-snug">
                {pillar.title}
              </h4>
            </div>
          ))}
        </div>

        {/* Ecosystem Connection Box */}
        <div className="text-center p-6 bg-violet-600/[0.03] border border-violet-500/10 rounded-2xl max-w-4xl mx-auto mt-2 gsap-scale-in">
          <h4 className="text-sm font-semibold text-white tracking-wider uppercase font-mono">
            One Company • One Methodology • One Mission: Business Growth.
          </h4>
          <p className="text-xs text-zinc-500 mt-2">
            Pillars are not isolated services; they are synchronized engines designed to systematically eradicate business blockages.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Connected core capabilities</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 10: Why MergeX Exists
export function Slide10() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Mission & Vision
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 11 / 21</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 items-center select-text pb-12">
        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight gsap-fade-up">
            WHY MERGEX EXISTS
          </h2>
          
          <div className="space-y-4 border-l-2 border-violet-500 pl-5 gsap-fade-up">
            <p className="text-xl font-medium text-zinc-100">
              Every business has the potential to grow.
            </p>
            <p className="text-xl font-medium text-zinc-400">
              Most businesses never discover what is actually stopping them.
            </p>
          </div>

          <div className="space-y-4 gsap-fade-up">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-violet-400 font-mono">Our Mission</span>
              <p className="text-sm font-light text-zinc-300 leading-relaxed">
                MergeX exists to help founders identify the constraints limiting their business, design the right strategy, implement practical solutions, and build sustainable systems that enable long-term growth.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono">Our Vision</span>
              <p className="text-sm font-light text-zinc-300 leading-relaxed">
                To become the world's most trusted business growth consulting company by solving the right problems—not just delivering more services.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 gsap-scale-in">
          <div className="p-8 lg:p-10 bg-zinc-900/30 border border-zinc-900 rounded-3xl backdrop-blur relative shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/5 rounded-full blur-2xl" />
            <blockquote className="text-lg lg:text-xl font-serif italic text-zinc-300 leading-relaxed pl-4 border-l border-violet-500/30">
              "We don't sell hours. <br />
              We don't sell software. <br />
              We don't sell websites. <br /><br />
              <span className="text-white font-bold not-italic bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                We solve business growth.
              </span>"
            </blockquote>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Our True Calling</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 7.5: The Revenue & Value Trajectory
const chartData = [
  { name: "Year 1", Agency: 120, MergeX: 180 },
  { name: "Year 2", Agency: 220, MergeX: 420 },
  { name: "Year 3", Agency: 310, MergeX: 890 },
  { name: "Year 4", Agency: 400, MergeX: 1650 },
  { name: "Year 5", Agency: 480, MergeX: 2800 },
];

export function Slide7_5() {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Growth Projection
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 8 / 21</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 items-center select-text pb-12">
        <div className="lg:col-span-4 space-y-6">
          <div className="space-y-2 gsap-fade-up">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              THE VALUE TRAJECTORY
            </h2>
            <p className="text-sm text-zinc-400 font-light leading-relaxed">
              Comparing compounding growth vs. linear service model delivery.
            </p>
          </div>

          <div className="space-y-4 gsap-stagger-item">
            <div className="p-4 bg-rose-500/[0.02] border border-rose-500/10 rounded-xl">
              <span className="text-xs font-bold text-rose-400 block mb-1">Traditional Agency (Linear)</span>
              <p className="text-xs text-zinc-500 font-light">
                Revenue is tied directly to hours and headcount. Capped growth, low LTV.
              </p>
            </div>

            <div className="p-4 bg-violet-500/[0.02] border border-violet-500/15 rounded-xl">
              <span className="text-xs font-bold text-violet-400 block mb-1">MergeX 2.0 Partner (Exponential)</span>
              <p className="text-xs text-zinc-400 font-light">
                Leveraging repeatable systems and outcome value. Compounding retainer expansion.
              </p>
            </div>
          </div>
        </div>

        {/* Chart Visualizer */}
        <div className="lg:col-span-8 bg-zinc-900/30 border border-zinc-900 rounded-3xl p-6 h-[320px] lg:h-[380px] w-full backdrop-blur shadow-2xl relative gsap-scale-in">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorAgency" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="#f43f5e" stopOpacity={0.0}/>
                </linearGradient>
                <linearGradient id="colorMergeX" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f23" vertical={false} />
              <XAxis dataKey="name" stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} />
              <YAxis stroke="#52525b" fontSize={11} tickLine={false} axisLine={false} tickFormatter={(val) => `₹${val}k`} />
              <Tooltip 
                content={({ active, payload, label }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-zinc-950/95 border border-zinc-800 p-4 rounded-xl shadow-2xl backdrop-blur-md font-sans">
                        <p className="text-xs text-zinc-500 font-mono mb-2">{label}</p>
                        <p className="text-xs font-bold text-rose-400">Traditional Agency: ₹{payload[0].value}k</p>
                        <p className="text-xs font-bold text-violet-400 mt-1">MergeX 2.0 Partner: ₹{payload[1].value}k</p>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area type="monotone" dataKey="Agency" stroke="#f43f5e" strokeWidth={2} fillOpacity={1} fill="url(#colorAgency)" />
              <Area type="monotone" dataKey="MergeX" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorMergeX)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Outcome retention trajectory</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 5.5: What We Say NO To
export function SlideNo() {
  const rejections = [
    "Chase every client (we only work with the right fit)",
    "Build websites without business purpose",
    "Promise unrealistic vanity results",
    "Compete on low prices (we compete on value)",
    "Compromise quality for quick shortcuts",
    "Say yes to everything (focus is our strength)"
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-black overflow-y-auto no-scrollbar">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-rose-500 font-roboto">
          Operational Boundaries
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 6 / 26</span>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto z-10 items-center select-text font-sans pb-12">
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3 gsap-fade-up">
            <span className="p-1 px-2.5 bg-rose-500/10 border border-rose-500/20 rounded-full text-[10px] font-bold tracking-widest text-rose-400 font-mono uppercase">
              Our Boundaries
            </span>
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
              WHAT WE SAY <br />
              <span className="text-rose-500 bg-rose-500/10 px-2 rounded-xl">NO</span> TO
            </h2>
          </div>
          <p className="text-zinc-500 font-light text-sm lg:text-base leading-relaxed">
            Great companies are defined not just by what they build, but by what they refuse to do. Knowing what we reject is the core of our identity.
          </p>
        </div>

        <div className="lg:col-span-7 bg-zinc-900/10 border border-zinc-900 rounded-3xl p-6 lg:p-8 backdrop-blur shadow-2xl relative overflow-hidden gsap-scale-in">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/[0.02] rounded-full blur-2xl" />
          <div className="space-y-4">
            {rejections.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-3 bg-zinc-950/40 border border-zinc-900/60 rounded-xl gsap-stagger-item">
                <div className="w-5 h-5 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 mt-0.5 flex-shrink-0">
                  <X className="w-3 h-3" />
                </div>
                <span className="text-zinc-300 font-light text-sm lg:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Defining our rules of refusal</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 5.6: The Perfect Client
export function SlidePerfectClient() {
  const perfect = [
    "Wants to grow and scale",
    "Open to structural change",
    "Values long-term partnership",
    "Takes action and implements",
    "Respects data and expertise"
  ];

  const bad = [
    "Only wants cheap execution",
    "Doesn't implement advice",
    "Wants instant vanity results",
    "Doesn't trust the systems process"
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Client Strategy
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 7 / 26</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text font-sans pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            THE PERFECT CLIENT PROFILE
          </h2>
          <p className="text-zinc-400 font-light text-base lg:text-lg">
            We Do Not Chase Anyone. We Only Partner With Ambitious Growth Mindsets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-2 select-text">
          {/* Right fit */}
          <div className="p-6 lg:p-8 bg-zinc-900/30 border border-emerald-500/20 rounded-3xl relative backdrop-blur shadow-xl flex flex-col justify-between gsap-scale-in">
            <div className="space-y-5">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block font-mono">
                ✓ THE PERFECT FIT
              </span>
              <div className="space-y-3">
                {perfect.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-200 text-sm font-medium gsap-stagger-item font-sans">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-zinc-500 font-mono border-t border-zinc-800 pt-3 mt-6">
              Mutual growth, scalable relationships
            </div>
          </div>

          {/* Wrong fit */}
          <div className="p-6 lg:p-8 bg-zinc-900/30 border border-rose-500/20 rounded-3xl relative backdrop-blur shadow-xl flex flex-col justify-between gsap-scale-in">
            <div className="space-y-5">
              <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block font-mono">
                ❌ THE WRONG FIT
              </span>
              <div className="space-y-3">
                {bad.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-zinc-400 text-sm font-light line-through decoration-rose-500/10 gsap-stagger-item font-sans">
                    <X className="w-4 h-4 text-rose-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[10px] text-zinc-500 font-mono border-t border-zinc-800 pt-3 mt-6">
              Low margins, high overhead, client churn
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Target audience alignment</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

// PAGE 9.5: MergeX is a Product
export function SlideProduct() {
  const steps = [
    { title: "MergeX", subtitle: "Core Identity", desc: "The growth consulting company." },
    { title: "SCALE", subtitle: "Methodology", desc: "Our diagnostic business growth engine." },
    { title: "MergeX OS", subtitle: "Operating System", desc: "The templates, SOPs, and metrics dashboard." },
    { title: "Execution Framework", subtitle: "Strategy Deployment", desc: "Synchronized steps to resolve constraint loops." },
    { title: "Business Growth", subtitle: "Measurable Outcome", desc: "Sustainable scaling and high LTV partners." }
  ];

  return (
    <div className="relative w-full h-full flex flex-col justify-between p-12 lg:p-20 bg-zinc-950 overflow-y-auto no-scrollbar slide-bg">
      {/* Top Header */}
      <div className="flex justify-between items-center z-10 gsap-fade-up">
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-violet-400 font-roboto">
          Productized Framework
        </span>
        <span className="text-xs text-zinc-500 font-mono">Page 11 / 26</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-6 lg:gap-8 my-auto z-10 select-text font-sans pb-12">
        <div className="space-y-2 gsap-fade-up">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white tracking-tight">
            MERGEX IS A PRODUCT
          </h2>
          <p className="text-violet-300 font-medium text-base lg:text-lg">
            We Don't Sell Hours. We Sell a Repeatable Growth Engine.
          </p>
        </div>

        {/* Product Flow diagram */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-2 select-none relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col justify-between p-5 bg-zinc-900/30 border border-zinc-900 hover:border-violet-500/20 rounded-2xl transition-all duration-300 backdrop-blur shadow-md gsap-stagger-item group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-violet-400 font-bold">Step 0{idx + 1}</span>
                  {idx < 4 && <ArrowRight className="hidden md:block w-4 h-4 text-zinc-700 group-hover:text-violet-500 transition-colors absolute -right-3.5 top-1/2 -translate-y-1/2 z-30" />}
                </div>
                <h4 className="text-sm font-bold text-white tracking-tight">{step.title}</h4>
                <span className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest block font-mono">{step.subtitle}</span>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-light">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center p-4 bg-violet-600/[0.02] border border-violet-500/10 rounded-xl max-w-3xl mx-auto mt-2 gsap-scale-in font-sans">
          <span className="text-xs font-mono text-zinc-400">
            "By productizing our consulting, we scale our delivery quality and eliminate human-error dependencies."
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-900 pt-6 flex justify-between items-center text-xs text-zinc-600 gsap-fade-up">
        <span>Productizing our service offering</span>
        <span>MergeX 2.0 Summit</span>
      </div>
    </div>
  );
}

