import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { colorClasses } from "@/lib/colors";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

export default function NewsCard({
  title,
  date,
  excerpt,
  image,
  slug,
}: NewsCardProps) {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: id });

  return (
    <article className="group bg-gradient-to-br from-black to-[#0a0a0a] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-2 border-[#009966]/30 hover:border-[#009966] hover-lift animate-fade-in-up">
      <Link href={`/berita/${slug}`} className="block h-full">
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#009966] to-black">
          {image && image.trim() !== "" ? (
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover group-hover:scale-125 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-80">
              <svg
                className="w-16 h-16 animate-pulse"
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
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/50 transition-all duration-500"></div>
          {/* Date Badge */}
          <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-[#009966] text-white text-xs font-semibold backdrop-blur-sm transform group-hover:scale-110 transition-transform animate-pulse-glow">
            {formattedDate}
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-black mb-3 line-clamp-2 text-white group-hover:text-[#009966] transition-colors duration-300">
            {title}
          </h3>
          <p className="text-white/80 mb-4 line-clamp-3 leading-relaxed group-hover:text-white transition-colors">
            {excerpt}
          </p>
          <span className="inline-flex items-center font-bold text-[#009966] group-hover:text-[#00CC88] transition-all duration-300">
            Baca Selengkapnya
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
