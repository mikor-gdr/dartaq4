import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { colorClasses } from "@/lib/colors";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <>
      <Header />
      <main
        className={cn(
          "min-h-screen flex items-center justify-center px-4",
          colorClasses.bg.light,
        )}
      >
        <div className="text-center">
          <h1
            className={cn("text-6xl font-bold mb-4", colorClasses.text.primary)}
          >
            404
          </h1>
          <h2
            className={cn(
              "text-2xl font-semibold mb-4",
              colorClasses.text.secondary,
            )}
          >
            Berita Tidak Ditemukan
          </h2>
          <p className={cn("mb-8", colorClasses.text.light)}>
            Maaf, berita yang Anda cari tidak ditemukan atau telah dihapus.
          </p>
          <Link
            href="/#berita"
            className={cn(
              "inline-block px-6 py-3 rounded-lg transition-colors font-semibold",
              colorClasses.bg.primary,
              "text-white",
              colorClasses.hover.primary,
            )}
          >
            Kembali ke Daftar Berita
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
