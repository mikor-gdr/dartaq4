import { colorClasses } from "@/lib/colors";
import { cn } from "@/lib/utils";

export default function Programs() {
  const programs = [
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
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
      title: "Pembelajaran Kitab",
      description:
        "Kajian kitab kuning dan pembelajaran ilmu agama untuk mendukung program Madin.",
      color: "from-[#009966] to-[#006644]",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
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
      title: "Murajaah & Setoran",
      description:
        "Program pengulangan hafalan dan setoran untuk mendukung program Tahfidz.",
      color: "from-[#006644] to-black",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
      title: "Bimbingan Individual",
      description:
        "Pembinaan personal untuk setiap santri di ketiga lembaga (TPQ, Madin, Tahfidz).",
      color: "from-black to-[#009966]",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 md:w-8 md:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Kegiatan Pendukung",
      description:
        "Aktivitas ekstra yang mendukung pembelajaran di TPQ, Madin, dan Tahfidz.",
      color: "from-[#009966] to-black",
    },
  ];

  return (
    <section
      id="program"
      className={cn("py-20 md:py-24 scroll-mt-20 relative overflow-hidden")}
    >
      {/* Background - transisi halus dari hitam ke hijau zamrud gelap yang sangat subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0f0d] to-[#0d1a14]"></div>

      {/* Subtle green tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#009966]/5 to-[#009966]/10"></div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Decorative radial gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#009966]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#006644]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-[#009966]/20 border border-[#009966]/30 mb-4 md:mb-6 animate-scale-in">
            <span className="text-sm font-semibold text-[#009966]">
              Program Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-white animate-fade-in-up animate-delay-200">
            Program Lembaga
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-[#009966] mx-auto mb-4 md:mb-6 animate-fade-in-up animate-delay-300"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-400">
            Program pendukung untuk ketiga lembaga: TPQ, Madin, dan Tahfidz
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black to-[#0a0a0a] p-6 md:p-8 rounded-2xl border-2 border-[#009966]/30 hover:border-[#009966] transition-all transform hover:-translate-y-3 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,153,102,0.5)] hover-lift animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              ></div>

              <div className="relative z-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-[#009966] flex items-center justify-center mb-4 md:mb-6 text-white group-hover:bg-white group-hover:text-[#009966] transition-all transform group-hover:scale-125 group-hover:rotate-12 duration-500 animate-scale-in">
                  {program.icon}
                </div>
                <h3 className="text-lg md:text-xl font-black mb-2 md:mb-3 text-white group-hover:text-white transition-colors">
                  {program.title}
                </h3>
                <p className="text-sm md:text-base text-white/80 group-hover:text-white/90 leading-relaxed transition-colors">
                  {program.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-[#009966]/0 group-hover:border-[#009966] rounded-tr-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
