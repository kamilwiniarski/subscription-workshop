export type Currency = "PLN" | "USD" | "EUR"
export type Period = "monthly" | "annually" | "daily"

export interface SubscriptionDTO {
  name: string
  amount: number
  period: Period
  currency: Currency
}

export interface Subscription extends SubscriptionDTO {
  id: string
}
