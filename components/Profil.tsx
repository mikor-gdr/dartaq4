import { cn } from "@/lib/utils";

export default function Profile() {
  return (
    <section
      id="profil"
      className={cn("py-20 md:py-24 scroll-mt-20 relative overflow-hidden")}
    >
      {/* Background - hitam murni untuk konsistensi, transisi halus dari Hero */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Subtle gradient untuk depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-[#0a0a0a]"></div>

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
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#009966]/5 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full bg-[#009966]/20 border border-[#009966]/30 mb-4 md:mb-6 animate-scale-in">
            <span className="text-sm font-semibold text-[#009966]">
              Tentang Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 md:mb-6 text-white animate-fade-in-up animate-delay-200">
            Profil Yayasan Darut Taqwa IV
          </h2>
          <div className="w-24 md:w-32 h-1 md:h-1.5 bg-[#009966] mx-auto mb-4 md:mb-6 animate-fade-in-up animate-delay-300"></div>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto animate-fade-in-up animate-delay-400">
            Yayasan Darut Taqwa didirikan pada tahun 1998 di Desa Modopuro,
            Kecamatan Mojosari, Kabupaten Mojokerto. Mengelola empat lembaga
            pendidikan: Pondok, Madin, TPQ, dan Tahfidz.
          </p>
        </div>

        {/* Sejarah - Full Width di Atas */}
        <div className="mb-8 md:mb-12">
          <div className="group relative bg-gradient-to-br from-black to-[#0a0a0a] p-6 md:p-8 rounded-2xl border-2 border-[#009966]/30 hover:border-[#009966] transition-all transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,153,102,0.4)] animate-fade-in-up animate-delay-200 hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#009966]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#009966] flex items-center justify-center mb-4 md:mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-scale-in">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
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
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-white group-hover:text-[#009966] transition-colors">
                Sejarah Berdiri
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed group-hover:text-white transition-colors">
                Yayasan Darut Taqwa didirikan pada tahun 1998 sebagai wujud
                komitmen untuk membina generasi Islam yang berakhlak mulia dan
                berpengetahuan agama yang kuat. Sejak awal berdirinya, yayasan
                ini menjadi pusat kegiatan pendidikan keagamaan bagi masyarakat
                Desa Modopuro dan sekitarnya. Yayasan ini diasuh dan dibimbing
                langsung oleh{" "}
                <span className="text-[#009966] font-bold bg-[#009966]/10 px-2 py-1 rounded">
                  Romo KH. Dhofir Bahruddin
                </span>
                , seorang alim yang dikenal memiliki dedikasi tinggi dalam
                pengajaran Al-Qur’an, pendidikan diniyah, serta pembinaan
                karakter santri.
              </p>
            </div>
          </div>
        </div>

        {/* Visi dan Misi - 2 Kolom di Bawah */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Visi */}
          <div className="group relative bg-gradient-to-br from-black to-[#0a0a0a] p-6 md:p-8 rounded-2xl border-2 border-[#009966]/30 hover:border-[#009966] transition-all transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,153,102,0.4)] animate-fade-in-up animate-delay-300 hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#009966]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#009966] flex items-center justify-center mb-4 md:mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-scale-in">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-white group-hover:text-[#009966] transition-colors">
                Visi
              </h3>
              <p className="text-sm md:text-base text-white/80 leading-relaxed group-hover:text-white transition-colors">
                Mencetak generasi muslim yang berilmu, berakhlak mulia,
                berwawasan Qur’ani, serta bermanfaat bagi agama, masyarakat, dan
                negara.
              </p>
            </div>
          </div>

          {/* Misi */}
          <div className="group relative bg-gradient-to-br from-black to-[#0a0a0a] p-6 md:p-8 rounded-2xl border-2 border-[#009966]/30 hover:border-[#009966] transition-all transform hover:-translate-y-2 hover:scale-105 shadow-2xl hover:shadow-[0_0_40px_rgba(0,153,102,0.4)] animate-fade-in-up animate-delay-400 hover-lift">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#009966]/10 rounded-full blur-3xl animate-pulse animate-delay-200"></div>
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-[#009966] flex items-center justify-center mb-4 md:mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 animate-scale-in animate-delay-100">
                <svg
                  className="w-8 h-8 md:w-10 md:h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 text-white group-hover:text-[#009966] transition-colors">
                Misi
              </h3>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-white/80 group-hover:text-white transition-colors">
                <li className="flex items-start animate-fade-in-left animate-delay-400">
                  <span className="text-[#009966] mr-2 md:mr-3 font-bold animate-pulse">
                    ✓
                  </span>
                  <span>
                    Menyelenggarakan pendidikan Islam yang berkualitas
                  </span>
                </li>
                <li className="flex items-start animate-fade-in-left animate-delay-500">
                  <span className="text-[#009966] mr-2 md:mr-3 font-bold animate-pulse">
                    ✓
                  </span>
                  <span>Menguatkan pembelajaran Al-Qur’an dan diniyah</span>
                </li>
                <li className="flex items-start animate-fade-in-left animate-delay-600">
                  <span className="text-[#009966] mr-2 md:mr-3 font-bold animate-pulse">
                    ✓
                  </span>
                  <span>
                    Membangun karakter santri melalui pembinaan disiplin dan
                    ibadah
                  </span>
                </li>
                <li className="flex items-start animate-fade-in-left animate-delay-700">
                  <span className="text-[#009966] mr-2 md:mr-3 font-bold animate-pulse">
                    ✓
                  </span>
                  <span>
                    Mengembangkan lembaga menjadi pusat dakwah dan pendidikan
                    masyarakat
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
