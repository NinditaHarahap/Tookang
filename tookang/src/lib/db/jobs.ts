import { createSupabaseServerClient } from "../supabase/server";

import { JobRecord } from "./types";

export const getActiveJobs = async () => {
  const supabase = createSupabaseServerClient();
  return supabase.from("active_jobs").select("*").returns<JobRecord[]>();
};

export const getActiveSoloJobs = async () => {
  const supabase = createSupabaseServerClient();
  return supabase.from("active_solo_jobs").select("*").returns<JobRecord[]>();
};

export const getActiveAgencyJobs = async () => {
  const supabase = createSupabaseServerClient();
  return supabase.from("active_agency_jobs").select("*").returns<JobRecord[]>();
};

export const getJobById = async (jobId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("jobs").select("*").eq("id", jobId).maybeSingle();
};

export const getUserJobs = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase.from("jobs").select("*").eq("user_id", userId).returns<JobRecord[]>();
};

export const getHiredJobsForTukang = async (tukangId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("jobs")
    .select("*")
    .eq("hired_tukang_id", tukangId)
    .returns<JobRecord[]>();
};

export const getHiredJobsForAgency = async (agencyId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("jobs")
    .select("*")
    .eq("hired_agency_id", agencyId)
    .returns<JobRecord[]>();
};
