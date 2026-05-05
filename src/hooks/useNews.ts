import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Tables } from "@/integrations/supabase/types";

export type News = Tables<"News">;

export function useLatestNews(limit = 3) {
  return useQuery({
    queryKey: ["news", "latest", limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("status", "published")
        .order("publish_date", { ascending: false })
        .limit(limit);
      if (error) throw error;
      return data as News[];
    },
  });
}

export function useNewsList(category: string, page: number, perPage = 6) {
  return useQuery({
    queryKey: ["news", "list", category, page, perPage],
    queryFn: async () => {
      let query = supabase
        .from("News")
        .select("*", { count: "exact" })
        .eq("status", "published")
        .order("publish_date", { ascending: false });

      if (category !== "all") {
        query = query.eq("category", category);
      }

      const from = (page - 1) * perPage;
      const to = from + perPage - 1;
      query = query.range(from, to);

      const { data, error, count } = await query;
      if (error) throw error;
      return { data: data as News[], total: count ?? 0 };
    },
  });
}

export function useNewsDetail(slug: string) {
  return useQuery({
    queryKey: ["news", "detail", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();
      if (error) throw error;
      return data as News;
    },
    enabled: !!slug,
  });
}

export function useRelatedNews(currentSlug: string, category: string, limit = 3) {
  return useQuery({
    queryKey: ["news", "related", currentSlug, category],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("News")
        .select("*")
        .eq("status", "published")
        .eq("category", category)
        .neq("slug", currentSlug)
        .order("publish_date", { ascending: false })
        .limit(limit);
      if (error) throw error;
      return data as News[];
    },
    enabled: !!currentSlug && !!category,
  });
}
