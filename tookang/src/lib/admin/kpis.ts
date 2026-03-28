import { createSupabaseAdminClient } from "../supabase/admin";

import { AdminKpis } from "./types";

const sumField = (rows: Record<string, number>[], field: string) =>
  rows.reduce((sum, row) => sum + (row[field] ?? 0), 0);

export const getAdminKpis = async (): Promise<AdminKpis> => {
  const supabase = createSupabaseAdminClient();

  const [{ data: jobs }, { data: transactions }, { data: disputes }] = await Promise.all([
    supabase.from("jobs").select("id,status,hired_type"),
    supabase.from("transactions").select("id,total_amount,status"),
    supabase.from("transactions").select("id").eq("status", "disputed"),
  ]);

  const jobRows = jobs ?? [];
  const transactionRows = transactions ?? [];
  const disputeRows = disputes ?? [];

  return {
    total_jobs: jobRows.length,
    active_jobs: jobRows.filter((job) => job.status === "active").length,
    completed_jobs: jobRows.filter((job) => job.status === "completed").length,
    disputed_jobs: jobRows.filter((job) => job.status === "disputed").length,
    solo_jobs: jobRows.filter((job) => job.hired_type === "solo").length,
    crew_jobs: jobRows.filter((job) => job.hired_type === "crew").length,
    total_transactions: transactionRows.length,
    escrow_volume_idr: sumField(transactionRows, "total_amount"),
    disputes_count: disputeRows.length,
  };
};
