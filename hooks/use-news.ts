import { useQuery } from "@tanstack/react-query";
import api from "@/lib/axios";
import { NewsItem } from "@/data/news";

export function useNews() {
  return useQuery({
    queryKey: ["news"],
    queryFn: async () => {
      const response = await api.get<NewsItem[]>("/news");
      return response.data;
    },
  });
}

export function useNewsItem(slug: string) {
  return useQuery({
    queryKey: ["news", slug],
    queryFn: async () => {
      const response = await api.get<NewsItem[]>("/news");
      return response.data.find((item) => item.slug === slug) || null;
    },
    enabled: !!slug,
  });
}

