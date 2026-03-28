import { createSupabaseAdminClient } from "../supabase/admin";

import { VerificationQueueItem } from "./types";

export const getSoloVerificationQueue = async () => {
  const supabase = createSupabaseAdminClient();
  return supabase
    .from("tukang_profiles")
    .select("id,created_at,user_id")
    .eq("ktp_verified", false)
    .returns<Array<{ id: string; created_at: string; user_id: string }>>();
};

export const getAgencyVerificationQueue = async () => {
  const supabase = createSupabaseAdminClient();
  return supabase
    .from("agencies")
    .select("id,created_at,agency_name,nib_verified")
    .eq("nib_verified", false)
    .returns<Array<{ id: string; created_at: string; agency_name: string | null }>>();
};

export const mapSoloQueue = (
  rows: Array<{ id: string; created_at: string; user_id: string }>
): VerificationQueueItem[] =>
  rows.map((row) => ({
    id: row.id,
    entity_type: "solo",
    name: row.user_id,
    created_at: row.created_at,
  }));

export const mapAgencyQueue = (
  rows: Array<{ id: string; created_at: string; agency_name: string | null }>
): VerificationQueueItem[] =>
  rows.map((row) => ({
    id: row.id,
    entity_type: "agency",
    name: row.agency_name,
    created_at: row.created_at,
  }));
