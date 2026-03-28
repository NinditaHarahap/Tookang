import { createSupabaseServerClient } from "../supabase/server";

export const getServerUser = async () => {
  const supabase = createSupabaseServerClient();
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    return null;
  }

  return data.user ?? null;
};

export const getServerUserId = async () => {
  const user = await getServerUser();
  return user?.id ?? null;
};
