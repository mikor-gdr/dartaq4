import Link from "next/link";
import { colorClasses } from "@/lib/colors";
import { cn } from "@/lib/utils";
import { PONDOK_INFO } from "@/constant";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("relative overflow-hidden", colorClasses.bg.dark)}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23009966' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-black mb-4 text-white">
              {PONDOK_INFO.shortName}
            </h3>
            <p className="text-white/70 leading-relaxed mb-6">
              Yayasan Darut Taqwa IV Modopuro Mojokerto - Membentuk generasi
              yang berakhlak mulia dan berilmu.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-lg bg-[#009966]/20 hover:bg-[#009966] flex items-center justify-center transition-all transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-lg bg-[#009966]/20 hover:bg-[#009966] flex items-center justify-center transition-all transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="w-10 h-10 rounded-lg bg-[#009966]/20 hover:bg-[#009966] flex items-center justify-center transition-all transform hover:scale-110"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white">Tautan Cepat</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "#profil", label: "Profil" },
                { href: "#program", label: "Program" },
                { href: "#berita", label: "Berita" },
                { href: "#kontak", label: "Kontak" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#009966] transition-colors font-medium inline-block hover:translate-x-1 transform transition-transform"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 mr-3 mt-1 text-[#009966] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-white/70 leading-relaxed">
                  Modopuro, Mojokerto
                  <br />
                  Jawa Timur, Indonesia
                </span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-[#009966] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href="tel:+6281234567890"
                  className="text-white/70 hover:text-[#009966] transition-colors font-medium"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-3 text-[#009966] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:info@dartaq4.ac.id"
                  className="text-white/70 hover:text-[#009966] transition-colors font-medium"
                >
                  info@dartaq4.ac.id
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-black text-lg mb-6 text-white">
              Jam Kunjungan
            </h4>
            <div className="space-y-3 text-white/70">
              <div className="flex items-start">
                <span className="text-[#009966] font-bold mr-2">•</span>
                <div>
                  <div className="font-semibold">Senin - Jumat</div>
                  <div className="text-sm">08:00 - 16:00</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#009966] font-bold mr-2">•</span>
                <div>
                  <div className="font-semibold">Sabtu</div>
                  <div className="text-sm">08:00 - 12:00</div>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-[#009966] font-bold mr-2">•</span>
                <div>
                  <div className="font-semibold">Minggu</div>
                  <div className="text-sm">Tutup</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#009966]/30 pt-8 mt-12 text-center">
          <p className="text-white/70">
            &copy; {currentYear} {PONDOK_INFO.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
