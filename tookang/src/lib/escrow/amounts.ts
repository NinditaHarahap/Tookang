export const calculatePlatformFeeAmount = (totalAmount: number, feeRate: number) =>
  Math.max(0, (totalAmount * feeRate) / 100);

export const calculateNetAmount = (totalAmount: number, feeAmount: number) =>
  Math.max(0, totalAmount - feeAmount);

export const clampMaterialReleaseAmount = (totalAmount: number, releaseAmount: number) =>
  Math.min(Math.max(0, releaseAmount), totalAmount);
