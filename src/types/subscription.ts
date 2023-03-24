export type Currency = "PLN" | "USD" | "EUR"
export type Period = "monthly" | "annually" | "daily"

export interface Subscription {
  id: string
  name: string
  amount: number
  period: Period
  currency: Currency
}
