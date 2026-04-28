import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Lembaga() {
  const lembaga = [
    {
      id: "pondok",
      title: "Pondok Pesantren",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
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
      ),
      description:
        "Tempat tinggal sekaligus pusat pendidikan karakter Islami bagi para santri. Kurikulum mencakup:",
      features: [
        "Kajian kitab kuning",
        "Fiqih, Tafsir, Hadits",
        "Pendidikan akhlak",
        "Pembinaan ibadah harian",
        "Rutinan Dzikru Dzakirin",
        "Solawat Al Banjari",
        "Muhadoroh pendidikan mental",
        "Program peningkatan kedisiplinan dan kemandirian santri",
      ],
      color: "from-[#009966] to-[#006644]",
    },
    {
      id: "madin",
      title: "Madin (Madrasah Diniyah)",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      description:
        "Pendidikan formal diniyah sore/malam hari yang berfokus pada:",
      features: [
        "Aqidah Akhlak",
        "Fiqih",
        "Bahasa Arab",
        "Al-Qur'an Hadits",
        "Sejarah Kebudayaan Islam",
      ],
      color: "from-[#006644] to-[#004d33]",
    },
    {
      id: "tpq",
      title: "TPQ (Taman Pendidikan Al-Quran)",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      description: "Program dasar untuk anak-anak usia sekolah yang meliputi:",
      features: [
        "Belajar metode Yanbu'a",
        "Tahsin dan tartil Al-Qur'an",
        "Hafalan doa sehari-hari",
        "Pembiasaan ibadah",
        "Pembinaan akhlak",
      ],
      color: "from-[#004d33] to-[#003322]",
    },
    {
      id: "tahfidz",
      title: "Tahfidz Al-Quran",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
          />
        </svg>
      ),
      description:
        "Program khusus untuk santri yang ingin menghafal Al-Qur’an, dengan target:",
      features: [
        "Hafalan Juz 30 untuk pemula",
        "Program tahfidz bertahap sampai 5–10 juz",
        "Pembinaan muraja'ah harian",
        "Bimbingan tajwid dan makhraj yang benar",
      ],
      color: "from-[#003322] to-black",
    },
  ];

  return (
    <section
      id="lembaga"
      className={cn("py-20 md:py-24 scroll-mt-20 relative overflow-hidden")}
    >
      {/* Background - konsisten dengan tema */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1a14] via-[#0a0f0d] to-[#0a0a0a]"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#009966]/5 to-[#009966]/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-[#009966]/20 border border-[#009966]/30 mb-4 md:mb-6 animate-scale-in">
            <span className="text-sm font-semibold text-[#009966]">
              Lembaga Pendidikan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-white animate-fade-in-up animate-delay-200">
            Lembaga Yayasan Darut Taqwa IV
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-[#009966] mx-auto mb-4 md:mb-6 animate-fade-in-up animate-delay-300"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-400">
            Empat lembaga pendidikan yang saling melengkapi untuk membentuk
            generasi yang berakhlak mulia dan berilmu
          </p>
        </div>

        {/* Grid dengan 4 lembaga - 2x2 layout untuk laptop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {lembaga.map((item, index) => (
            <LembagaCard key={item.id} lembaga={item} index={index} />
          ))}
        </div>

        {/* Info tambahan */}
        <div className="text-center mt-12 animate-fade-in-up animate-delay-600">
          <p className="text-white/70 text-sm mb-4">
            Yayasan Darut Taqwa IV mengelola empat lembaga: Pondok, Madin, TPQ,
            dan Tahfidz
          </p>
          <Link
            href="#kontak"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-[#009966] text-white font-bold hover:bg-[#006644] transition-all transform hover:scale-105 shadow-lg"
          >
            Informasi Pendaftaran
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
  );
}

interface LembagaType {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  color: string;
}

function LembagaCard({
  lembaga,
  index,
}: {
  lembaga: LembagaType;
  index: number;
}) {
  return (
    <div
      className={cn(
        "group relative bg-gradient-to-br from-black to-[#0a0a0a] rounded-2xl border-2 border-[#009966]/30 hover:border-[#009966] transition-all transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,153,102,0.5)] hover-lift animate-fade-in-up h-full p-6 md:p-8",
      )}
      style={{ animationDelay: `${(index + 1) * 100}ms` }}
    >
      {/* Gradient Background on Hover */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
          lembaga.color,
        )}
      ></div>

      <div className="relative z-10">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#009966] flex items-center justify-center mb-4 md:mb-6 text-white group-hover:bg-white group-hover:text-[#009966] transition-all transform group-hover:scale-125 group-hover:rotate-12 duration-500 animate-scale-in">
          {lembaga.icon}
        </div>
        <h3 className="text-lg md:text-xl font-black mb-3 text-white group-hover:text-white transition-colors">
          {lembaga.title}
        </h3>
        <p className="text-sm md:text-base text-white/80 group-hover:text-white/90 leading-relaxed transition-colors mb-4">
          {lembaga.description}
        </p>
        <ul className="space-y-2 text-sm text-white/70 group-hover:text-white/80">
          {lembaga.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-[#009966] mr-2 font-bold mt-1">•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#009966]/0 group-hover:border-[#009966] rounded-tr-2xl transition-all duration-300"></div>
    </div>
  );
}
