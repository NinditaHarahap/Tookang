export type AdminKpis = {
  total_jobs: number;
  active_jobs: number;
  completed_jobs: number;
  disputed_jobs: number;
  solo_jobs: number;
  crew_jobs: number;
  total_transactions: number;
  escrow_volume_idr: number;
  disputes_count: number;
};

export type VerificationQueueItem = {
  id: string;
  entity_type: "solo" | "agency";
  name: string | null;
  created_at: string;
};
