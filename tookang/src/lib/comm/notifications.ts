import { createSupabaseServerClient } from "../supabase/server";

import { NotificationRecord } from "./types";

export const getNotificationsForUser = async (userId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("notifications")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .returns<NotificationRecord[]>();
};
