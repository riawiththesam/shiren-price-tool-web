export const purchaseTypeList = ["buy", "sell"] as const;

export type PurchaseType = (typeof purchaseTypeList)[number];
