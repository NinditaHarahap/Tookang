import { createSupabaseServerClient } from "../supabase/server";

import { BidRecord } from "./types";

export const getBidsForJob = async (jobId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("bids").select("*").eq("job_id", jobId).returns<BidRecord[]>();
};

export const getSoloBidsForTukang = async (tukangId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("bids").select("*").eq("tukang_id", tukangId).returns<BidRecord[]>();
};

export const getAgencyBidsForMandor = async (agencyId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("bids").select("*").eq("agency_id", agencyId).returns<BidRecord[]>();
};
