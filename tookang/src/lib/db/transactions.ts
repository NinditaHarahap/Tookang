import { createSupabaseServerClient } from "../supabase/server";

import { TransactionRecord } from "./types";

export const getTransactionsForJob = async (jobId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("transactions")
    .select("*")
    .eq("job_id", jobId)
    .returns<TransactionRecord[]>();
};

export const getTransactionsForUser = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("transactions")
    .select("*")
    .eq("user_id", userId)
    .returns<TransactionRecord[]>();
};

export const getTransactionsForTukang = async (tukangId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("transactions")
    .select("*")
    .eq("tukang_id", tukangId)
    .returns<TransactionRecord[]>();
};

export const getTransactionsForAgency = async (agencyId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("transactions")
    .select("*")
    .eq("agency_id", agencyId)
    .returns<TransactionRecord[]>();
};
