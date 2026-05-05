import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useCareers() {
  return useQuery({
    queryKey: ["careers"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("careers")
        .select("*")
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      return data;
    },
  });
}