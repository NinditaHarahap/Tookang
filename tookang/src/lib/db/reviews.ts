import { createSupabaseServerClient } from "../supabase/server";

import { ReviewRecord } from "./types";

export const getReviewsForJob = async (jobId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("reviews").select("*").eq("job_id", jobId).returns<ReviewRecord[]>();
};

export const getReviewsForSoloTukang = async (tukangId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("reviews").select("*").eq("tukang_id", tukangId).returns<ReviewRecord[]>();
};

export const getReviewsForAgency = async (agencyId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("reviews").select("*").eq("agency_id", agencyId).returns<ReviewRecord[]>();
};
