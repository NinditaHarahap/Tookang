import {
  JobIntelligenceOutput,
  PhotoAnalysisOutput,
  PriceEstimateOutput,
  TranslationOutput,
} from "./types";

export const normalizeJobIntelligence = (
  input: Partial<JobIntelligenceOutput>
): JobIntelligenceOutput => ({
  category: input.category ?? null,
  title: input.title ?? null,
  budget_range: input.budget_range ?? null,
  urgency: input.urgency ?? null,
  requires_inspection: input.requires_inspection ?? null,
  missing_fields: input.missing_fields ?? [],
  recommended_tier: input.recommended_tier ?? "solo",
});

export const normalizePriceEstimate = (
  input: Partial<PriceEstimateOutput>
): PriceEstimateOutput => ({
  solo_estimate_idr: input.solo_estimate_idr ?? null,
  crew_estimate_idr: input.crew_estimate_idr ?? null,
  confidence: input.confidence ?? null,
  notes: input.notes ?? null,
});

export const normalizePhotoAnalysis = (
  input: Partial<PhotoAnalysisOutput>
): PhotoAnalysisOutput => ({
  relevance_score: input.relevance_score ?? null,
  severity_score: input.severity_score ?? null,
  tags: input.tags ?? [],
  notes: input.notes ?? null,
});

export const normalizeTranslation = (
  input: Partial<TranslationOutput>
): TranslationOutput => ({
  source_language: input.source_language ?? "unknown",
  translated_text: input.translated_text ?? "",
});
