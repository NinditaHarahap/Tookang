import { AiMessage } from "./types";

export const buildClaudeMessages = (
  systemPrompt: string,
  userPrompt: string
): AiMessage[] => [
  { role: "system", content: systemPrompt },
  { role: "user", content: userPrompt },
];

export type ClaudeMessageRequest = {
  model: string;
  max_tokens: number;
  messages: AiMessage[];
  temperature?: number;
};

export const buildClaudeRequest = (
  model: string,
  messages: AiMessage[],
  maxTokens = 512,
  temperature = 0.2
): ClaudeMessageRequest => ({
  model,
  max_tokens: maxTokens,
  messages,
  temperature,
});
