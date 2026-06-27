"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Minimize2,
  FileText,
  Clock,
  Sparkles
} from "lucide-react";

interface SlideData {
  id: number;
  component: React.ReactNode;
  title: string;
  notes: string;
}

interface SlideContainerProps {
  slides: SlideData[];
}

export default function SlideContainer({ slides }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  // Timer States
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  // Simple Index navigation
  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch((err) => {
        console.error("Error attempting to enable full-screen mode:", err);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  }, []);

  // Listen to keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "Space") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      } else if (e.key.toLowerCase() === "f") {
        e.preventDefault();
        toggleFullscreen();
      } else if (e.key.toLowerCase() === "n") {
        e.preventDefault();
        setShowNotes((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFsChange);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("fullscreenchange", handleFsChange);
    };
  }, [nextSlide, prevSlide, toggleFullscreen]);

  // Presentation Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);

  const scrollLockedRef = useRef(false);

  // Wheel listener to change slides with scroll lock + internal scroll check
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 15) return;

      const activeSlideEl = document.getElementById(`slide-${currentSlide}`);
      if (!activeSlideEl) return;

      const scrollableContainer = activeSlideEl.firstElementChild as HTMLElement;
      if (!scrollableContainer) return;

      const overflowY = window.getComputedStyle(scrollableContainer).overflowY;
      const isScrollable = scrollableContainer.scrollHeight > scrollableContainer.clientHeight && 
                           overflowY !== "hidden";

      if (e.deltaY > 0) {
        // Scroll Down
        if (isScrollable) {
          const atBottom = scrollableContainer.scrollTop + scrollableContainer.clientHeight >= scrollableContainer.scrollHeight - 15;
          if (!atBottom) return; // Let container scroll internally
        }

        e.preventDefault();
        if (!scrollLockedRef.current) {
          nextSlide();
          scrollLockedRef.current = true;
          setTimeout(() => {
            scrollLockedRef.current = false;
          }, 900);
        }
      } else {
        // Scroll Up
        if (isScrollable) {
          const atTop = scrollableContainer.scrollTop <= 15;
          if (!atTop) return; // Let container scroll internally
        }

        e.preventDefault();
        if (!scrollLockedRef.current) {
          prevSlide();
          scrollLockedRef.current = true;
          setTimeout(() => {
            scrollLockedRef.current = false;
          }, 900);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSlide, nextSlide, prevSlide]);

  // GSAP Animations on Active Slide Change
  useEffect(() => {
    const activeSlideEl = document.getElementById(`slide-${currentSlide}`);
    if (!activeSlideEl) return;

    // Reset previous animations by clearing styles
    const allAnimatedElements = document.querySelectorAll(".gsap-fade-up, .gsap-scale-in, .gsap-stagger-item");
    gsap.set(allAnimatedElements, { clearProps: "all" });

    // Target elements inside the active slide
    const fadeUpElements = activeSlideEl.querySelectorAll(".gsap-fade-up");
    const scaleElements = activeSlideEl.querySelectorAll(".gsap-scale-in");
    const staggerItems = activeSlideEl.querySelectorAll(".gsap-stagger-item");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    if (fadeUpElements.length > 0) {
      tl.fromTo(
        fadeUpElements,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1 },
        0
      );
    }

    if (scaleElements.length > 0) {
      tl.fromTo(
        scaleElements,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 },
        0.2
      );
    }

    if (staggerItems.length > 0) {
      tl.fromTo(
        staggerItems,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
        0.1
      );
    }
  }, [currentSlide]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  const activeSlideData = slides[currentSlide];

  return (
    <div className="relative w-screen h-screen flex bg-zinc-950 text-zinc-100 overflow-hidden font-sans select-none">
      
      {/* Main presentation area */}
      <div className="flex-1 flex flex-col relative h-full">
        
        {/* Top Progress bar */}
        <div className="w-full h-1 bg-zinc-900 absolute top-0 left-0 z-50">
          <div 
            className="h-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        {/* Slide view container (Static Overlay) */}
        <div className="flex-1 w-full relative z-10 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              id={`slide-${index}`}
              className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 scale-100 pointer-events-auto z-20" 
                  : "opacity-0 scale-95 pointer-events-none z-10"
              }`}
            >
              {slide.component}
            </div>
          ))}
        </div>

        {/* Bottom controls panel */}
        <div className="h-16 border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-md grid grid-cols-3 items-center px-6 z-40">
          {/* Left Controls: Title / Slide Index */}
          <div className="flex items-center gap-4 justify-self-start">
            <div className="flex items-center gap-2.5">
              <Image 
                src="/logo/flat_logo.png" 
                alt="MergeX logo mark" 
                width={20} 
                height={20} 
                className="w-5 h-5 object-contain brightness-125 opacity-80"
              />
              <span className="text-sm font-medium text-zinc-400 font-mono">
                Slide {currentSlide + 1} of {slides.length}
              </span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] font-bold tracking-wider uppercase font-roboto text-zinc-400 font-semibold">
              <Sparkles className="w-3 h-3 text-violet-400" />
              <span className="truncate max-w-[150px]">{activeSlideData?.title || "Presentation"}</span>
            </div>
          </div>

          {/* Center Navigation Buttons */}
          <div className="flex items-center gap-3 justify-self-center">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white transition-all transform active:scale-95"
              title="Previous Slide (←)"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="hidden lg:flex gap-1.5">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentSlide 
                      ? "bg-violet-500 w-5" 
                      : "bg-zinc-800 hover:bg-zinc-700"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 disabled:opacity-40 disabled:cursor-not-allowed hover:text-white transition-all transform active:scale-95"
              title="Next Slide (Space / →)"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right Controls: Timer / Actions */}
          <div className="flex items-center gap-3 justify-self-end">
            {/* Presentation timer */}
            <div className="hidden sm:flex items-center gap-2.5 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-xl text-xs text-zinc-400 font-mono">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>{formatTime(timeElapsed)}</span>
              <button 
                onClick={() => setTimerActive(!timerActive)}
                className="hover:text-white transition-colors"
              >
                {timerActive ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              </button>
              <button 
                onClick={() => setTimeElapsed(0)}
                className="hover:text-white transition-colors"
                title="Reset Timer"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>

            {/* Presenter Notes Button */}
            <button
              onClick={() => setShowNotes(!showNotes)}
              className={`p-2 rounded-xl border transition-all ${
                showNotes 
                  ? "bg-violet-500/10 border-violet-500 text-violet-400" 
                  : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200"
              }`}
              title="Toggle Presenter Notes (N)"
            >
              <FileText className="w-5 h-5" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-all"
              title="Toggle Fullscreen (F)"
            >
              {isFullscreen ? <Minimize2 className="w-5 h-5" /> : <Maximize2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Presenter Notes sidebar */}
      <div 
        className={`border-l border-zinc-900 bg-zinc-950/95 backdrop-blur h-full transition-all duration-300 flex flex-col justify-between z-40 ${
          showNotes ? "w-80 md:w-96 px-6 py-8 opacity-100" : "w-0 p-0 opacity-0 pointer-events-none border-l-0"
        }`}
      >
        <div className="flex flex-col gap-6 h-full overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-900">
            <h3 className="font-bold text-lg text-zinc-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-violet-400" />
              Presenter Notes
            </h3>
            <button 
              onClick={() => setShowNotes(false)}
              className="text-xs text-zinc-500 hover:text-zinc-300"
            >
              Close
            </button>
          </div>

          <div className="space-y-4">
            <div className="text-xs font-semibold text-violet-400 uppercase tracking-wide">
              Active Slide Focus
            </div>
            <div className="text-xl font-bold text-white leading-tight">
              {activeSlideData?.title}
            </div>
          </div>

          <div className="flex-1 bg-zinc-900/30 border border-zinc-900/60 rounded-2xl p-4.5 text-zinc-300 text-sm leading-relaxed whitespace-pre-line no-scrollbar overflow-y-auto font-light">
            {activeSlideData?.notes || "No presenter notes provided for this slide. Edit notes in the layout mappings."}
          </div>
        </div>

        {/* Presenter footer previewing next slide */}
        {currentSlide < slides.length - 1 && (
          <div className="pt-6 border-t border-zinc-900 mt-6">
            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-2">
              Next Slide
            </div>
            <div className="p-3 bg-zinc-900/60 border border-zinc-800/80 rounded-xl flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-300 truncate">
                {slides[currentSlide + 1].title}
              </span>
              <ChevronRight className="w-4 h-4 text-zinc-500 flex-shrink-0" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
