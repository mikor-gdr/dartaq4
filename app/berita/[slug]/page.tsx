import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import NewsDetail from "@/components/NewsDetail";

async function getNewsItem(slug: string) {
  try {
    // Import news data langsung dari file data
    const { newsData } = await import("@/data/news");
    return newsData.find((item) => item.slug === slug) || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    return {
      title: "Berita Tidak Ditemukan",
    };
  }

  return {
    title: `${newsItem.title} | Darut Taqwa 4`,
    description: newsItem.excerpt,
    openGraph: {
      title: newsItem.title,
      description: newsItem.excerpt,
      images: newsItem.image ? [newsItem.image] : [],
    },
  };
}

export default async function BeritaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const newsItem = await getNewsItem(slug);

  if (!newsItem) {
    notFound();
  }

  return (
    <>
      <main className="min-h-screen bg-black">
        <NewsDetail {...newsItem} />
      </main>
      <Footer />
    </>
  );
}
