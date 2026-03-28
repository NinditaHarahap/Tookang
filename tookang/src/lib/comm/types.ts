export type MessageRecord = {
  id: string;
  thread_id: string;
  job_id: string | null;
  sender_id: string | null;
  sender_type: "user" | "tukang" | "mandor" | "system" | null;
  body: string | null;
  media_urls: string[] | null;
  translated_body: string | null;
  created_at: string;
};

export type NotificationRecord = {
  id: string;
  user_id: string;
  channel: "push" | "in_app" | "whatsapp" | "email" | "sms";
  event_type: string;
  payload_json: unknown | null;
  read_at: string | null;
  created_at: string;
};
