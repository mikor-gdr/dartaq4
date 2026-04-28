import Link from "next/link";
import Image from "next/image";
import Datagambar from "@/public/assets/data";
import Yayasan from "@/components/Yayasan";
import Profile from "@/components/Profil";
import Lembaga from "@/components/Lembaga";
import Programs from "@/components/Program";
import { SiTraefikmesh } from "react-icons/si";
import NewsList from "@/components/NewsList";
import Stats from "@/components/Trafike";

export default function Home() {
  return (
    <>
      <main>
        {/*yayasab*/}
        <Yayasan />
        {/*profil*/}
        <Profile />
        {/*Lembaga*/}
        <Lembaga />
        {/*Program*/}
        <Programs />
        <Stats />
        <section
          id="berita"
          className="py-20 md:py-24 scroll-mt-20 relative overflow-hidden"
        >
          {/* Background - transisi kembali ke hitam, konsisten dengan Stats */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a14] via-[#0a0a0a] to-black"></div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          {/* Decorative gradient overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#009966]/5 via-transparent to-[#009966]/5"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
              <div className="inline-block px-4 py-2 rounded-full bg-[#009966]/20 border border-[#009966]/30 mb-4 md:mb-6 animate-scale-in">
                <span className="text-sm font-semibold text-[#009966]">
                  Berita & Update
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 md:mb-6 animate-fade-in-up animate-delay-200">
                Berita Terbaru
              </h2>
              <div className="w-24 md:w-32 h-1 md:h-1.5 bg-[#009966] mx-auto mb-4 md:mb-6 animate-fade-in-up animate-delay-300"></div>
              <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-400">
                Dapatkan informasi terbaru tentang kegiatan dan program Yayasan
                Darut Taqwa IV
              </p>
            </div>

            {/* <NewsList items={news.slice(0, 6)} /> */}

            {/* Button Lihat Semua Berita */}
            <div className="mt-12 text-center animate-fade-in-up animate-delay-500">
              <Link
                href="/berita"
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-[#009966] text-white font-bold hover:bg-[#006644] transition-all transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(0,153,102,0.6)]"
              >
                Lihat Semua Berita
                <svg
                  className="w-5 h-5 ml-2"
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
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
