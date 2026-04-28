"use client";

import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface NewsDetailProps {
  id: string;
  title: string;
  date: string;
  content: string;
  image: string;
  slug: string;
}

function ShareButton({ title, content }: { title: string; content: string }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: content.substring(0, 100) + "...",
          url: url,
        });
      } catch (err) {
        // User cancelled or error occurred
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className="px-4 py-2 rounded-lg bg-[#009966]/20 border border-[#009966]/30 text-[#009966] hover:bg-[#009966]/30 transition-colors font-semibold"
    >
      {copied ? "✓ Link Disalin!" : "Bagikan"}
    </button>
  );
}

export default function NewsDetail({
  title,
  date,
  content,
  image,
}: NewsDetailProps) {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: id });

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <article className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            href="/berita"
            className={cn(
              "inline-flex items-center font-semibold text-white hover:text-[#009966] transition-colors group",
            )}
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Kembali ke Semua Berita
          </Link>
          <Link
            href="/#berita"
            className={cn(
              "inline-flex items-center font-semibold text-white/70 hover:text-[#009966] transition-colors group",
            )}
          >
            <svg
              className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Kembali ke Beranda
          </Link>
        </div>

        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-white">
            {title}
          </h1>
          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full bg-[#009966]/20 border border-[#009966]/30">
              <p className="text-sm font-semibold text-[#009966]">
                {formattedDate}
              </p>
            </div>
          </div>
        </header>

        {image && image.trim() !== "" ? (
          <div className="relative h-64 sm:h-80 md:h-96 w-full mb-8 md:mb-12 rounded-2xl overflow-hidden border-2 border-[#009966]/30 shadow-2xl">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              priority
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        ) : (
          <div className="relative h-64 sm:h-80 md:h-96 w-full mb-8 md:mb-12 rounded-2xl overflow-hidden border-2 border-[#009966]/30 bg-gradient-to-br from-black to-[#0a0a0a] flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-16 h-16 md:w-20 md:h-20 text-[#009966]/50 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-white/50 text-sm">Tidak ada gambar</p>
            </div>
          </div>
        )}

        <div className="prose prose-lg max-w-none prose-invert">
          <div className="text-base sm:text-lg leading-relaxed whitespace-pre-line text-white/90 space-y-4">
            {content.split("\n").map((paragraph, index) => {
              // Skip empty paragraphs
              if (!paragraph.trim()) return null;

              // Check if it's a list item
              if (paragraph.trim().startsWith("-")) {
                return (
                  <div key={index} className="flex items-start">
                    <span className="text-[#009966] mr-3 font-bold mt-1">
                      •
                    </span>
                    <span className="flex-1">
                      {paragraph.trim().substring(1).trim()}
                    </span>
                  </div>
                );
              }

              return (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-[#009966]/30">
          <p className="text-white/70 mb-4 font-semibold">
            Bagikan berita ini:
          </p>
          <div className="flex gap-4">
            <ShareButton title={title} content={content} />
          </div>
        </div>
      </article>
    </section>
  );
}
