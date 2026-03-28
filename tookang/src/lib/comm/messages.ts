import { createSupabaseServerClient } from "../supabase/server";

import { MessageRecord } from "./types";

export const getThreadMessages = async (threadId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("messages")
    .select("*")
    .eq("thread_id", threadId)
    .order("created_at", { ascending: true })
    .returns<MessageRecord[]>();
};

export const getJobMessages = async (jobId: string) => {
  const supabase = createSupabaseServerClient();
  return supabase
    .from("messages")
    .select("*")
    .eq("job_id", jobId)
    .order("created_at", { ascending: true })
    .returns<MessageRecord[]>();
};
