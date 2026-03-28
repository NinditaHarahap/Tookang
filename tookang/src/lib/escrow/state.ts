import { TransactionStatus } from "../db/types";

export type EscrowEvent =
  | "fund_inspection"
  | "fund_full"
  | "submit_finish"
  | "confirm_completion"
  | "open_dispute"
  | "resolve_dispute";

const transitionTable: Record<TransactionStatus, Partial<Record<EscrowEvent, TransactionStatus>>> =
  {
    inspection_escrowed: {
      fund_full: "full_escrow_funded",
      open_dispute: "disputed",
    },
    full_escrow_funded: {
      submit_finish: "pending_confirmation",
      open_dispute: "disputed",
    },
    pending_confirmation: {
      confirm_completion: "completed",
      open_dispute: "disputed",
    },
    completed: {},
    disputed: {
      resolve_dispute: "completed",
    },
  };

export const getNextTransactionStatus = (
  current: TransactionStatus,
  event: EscrowEvent
) => transitionTable[current]?.[event] ?? null;
