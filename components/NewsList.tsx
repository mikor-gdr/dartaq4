import NewsCard from "./NewsCard";
interface NewsItem {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  slug: string;
}

interface NewsListProps {
  items: NewsItem[];
}

export default function NewsList({ items }: NewsListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">Belum ada berita tersedia.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
