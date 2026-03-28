export type JobRecord = {
  id: string;
  user_id: string;
  title: string | null;
  description: string | null;
  category: string | null;
  photos: string[];
  budget_min: number | null;
  budget_max: number | null;
  urgency: string | null;
  status: string | null;
  location: string | null;
  requires_inspection: boolean;
  inspection_fee_idr: number | null;
  hired_type: "solo" | "crew" | null;
  hired_tukang_id: string | null;
  hired_agency_id: string | null;
  crew_member_ids: string[] | null;
  start_photo_url: string | null;
  finish_photo_url: string | null;
  ai_price_estimate_json: unknown | null;
  photo_analysis_json: unknown | null;
  voice_transcript: string | null;
  certificate_url: string | null;
  crew_welcome: boolean;
  recommended_tier: "solo" | "crew" | "both" | null;
  created_at: string;
};

export type BidRecord = {
  id: string;
  job_id: string;
  bid_from_type: "solo" | "crew";
  tukang_id: string | null;
  agency_id: string | null;
  assigned_member_ids: string[] | null;
  amount: number | null;
  message: string | null;
  duration_estimate: string | null;
  status: string | null;
  expires_at: string | null;
  bid_type: "inspection_only" | "direct_quote" | null;
  final_quote_amount: number | null;
  created_at: string;
};

export type TransactionRecord = {
  id: string;
  job_id: string;
  user_id: string;
  payee_type: "solo" | "crew";
  tukang_id: string | null;
  agency_id: string | null;
  total_amount: number;
  platform_fee_rate: number;
  platform_fee_amount: number;
  material_release_amount: number | null;
  status: TransactionStatus;
  midtrans_order_id: string | null;
  created_at: string;
};

export type TransactionStatus =
  | "inspection_escrowed"
  | "full_escrow_funded"
  | "pending_confirmation"
  | "completed"
  | "disputed";

export type ReviewRecord = {
  id: string;
  job_id: string;
  reviewer_id: string | null;
  review_target_type: "solo" | "crew";
  tukang_id: string | null;
  agency_id: string | null;
  on_time: boolean | null;
  price_accuracy: boolean | null;
  would_rehire: boolean | null;
  comment: string | null;
  ai_authenticity_score: number | null;
  created_at: string;
};
