export const calculateReviewScore = (
  onTime: boolean | null,
  priceAccuracy: boolean | null,
  wouldRehire: boolean | null
) => {
  const values = [onTime, priceAccuracy, wouldRehire].filter(
    (value): value is boolean => typeof value === "boolean"
  );

  if (values.length === 0) {
    return null;
  }

  const avg = values.reduce((sum, value) => sum + (value ? 1 : 0), 0) / values.length;
  return avg * 5;
};

export const calculateNextAverage = (currentAvg: number, currentCount: number, nextValue: number) =>
  (currentAvg * currentCount + nextValue) / (currentCount + 1);
