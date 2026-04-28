"use client";

import { useEffect, useState, useRef } from "react";
import { colorClasses } from "@/lib/colors";
import { cn } from "@/lib/utils";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  duration?: number;
}

const stats: StatItem[] = [
  { value: 80, suffix: "+", label: "Santri Pondok", duration: 2000 },
  { value: 100, suffix: "+", label: "Santri Madin", duration: 2000 },
  { value: 150, suffix: "+", label: "Santri TPQ", duration: 2000 },
  { value: 30, suffix: "+", label: "Santri Tahfidz", duration: 2000 },
];

function useCountUp(
  end: number,
  duration: number,
  isVisible: boolean,
  resetKey: number,
) {
  const [count, setCount] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset counter when visibility changes or resetKey changes
    setCount(0);

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (!isVisible) {
      return;
    }

    // Start animation when visible
    const startTime = Date.now();
    startTimeRef.current = startTime;

    const animate = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(end * easeOut);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [end, duration, isVisible, resetKey]);

  return count;
}

function StatCard({ stat, index }: { stat: StatItem; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const wasVisibleRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const isCurrentlyVisible = entry.isIntersecting;

          if (isCurrentlyVisible && !wasVisibleRef.current) {
            // First time entering viewport
            setIsVisible(true);
            wasVisibleRef.current = true;
          } else if (isCurrentlyVisible && wasVisibleRef.current) {
            // Re-entering viewport - reset animation
            setIsVisible(false);
            setResetKey((prev) => prev + 1);
            setTimeout(() => {
              setIsVisible(true);
            }, 50);
          } else if (!isCurrentlyVisible) {
            // Leaving viewport
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const count = useCountUp(
    stat.value,
    stat.duration || 2000,
    isVisible,
    resetKey,
  );

  return (
    <div
      ref={cardRef}
      className="group relative bg-gradient-to-br from-black to-[#0a0a0a] p-6 md:p-8 rounded-2xl border-2 border-[#009966]/30 hover:border-[#009966] transition-all transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,153,102,0.4)] hover-lift animate-fade-in-up"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      {/* Decorative glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#009966]/10 rounded-full blur-3xl group-hover:bg-[#009966]/20 transition-all"></div>

      <div className="relative z-10 text-center">
        <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#009966] mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
          {count}
          <span className="text-3xl sm:text-4xl md:text-5xl">
            {stat.suffix}
          </span>
        </div>
        <div className="text-base sm:text-lg font-semibold text-white/90 group-hover:text-white transition-colors">
          {stat.label}
        </div>
      </div>

      {/* Animated border on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[#009966] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className={cn("py-20 md:py-24 scroll-mt-20 relative overflow-hidden")}
    >
      {/* Background - puncak hijau zamrud, transisi halus dari Programs */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a14] via-[#0f1f18] to-[#0d1a14]"></div>

      {/* Radial gradient untuk depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#009966]/8 to-transparent"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#009966]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-[#009966]/20 border border-[#009966]/30 mb-4 md:mb-6 animate-scale-in">
            <span className="text-sm font-semibold text-[#009966]">
              Prestasi & Pencapaian
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-white animate-fade-in-up animate-delay-200">
            Statistik Lembaga
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-[#009966] mx-auto mb-4 md:mb-6 animate-fade-in-up animate-delay-300"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-400">
            Data santri aktif di empat lembaga: Pondok, Madin, TPQ, dan Tahfidz
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
