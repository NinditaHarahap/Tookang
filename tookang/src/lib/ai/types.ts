export type AiMessage = {
  role: "system" | "user" | "assistant";
  content: string;
};

export type JobIntelligenceOutput = {
  category: string | null;
  title: string | null;
  budget_range: string | null;
  urgency: string | null;
  requires_inspection: boolean | null;
  missing_fields: string[];
  recommended_tier: "solo" | "crew" | "both";
};

export type PriceEstimateOutput = {
  solo_estimate_idr: number | null;
  crew_estimate_idr: number | null;
  confidence: number | null;
  notes: string | null;
};

export type PhotoAnalysisOutput = {
  relevance_score: number | null;
  severity_score: number | null;
  tags: string[];
  notes: string | null;
};

export type TranslationOutput = {
  source_language: "id" | "en" | "unknown";
  translated_text: string;
};
