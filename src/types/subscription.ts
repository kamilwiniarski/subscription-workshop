export type Currency = "PLN" | "USD" | "EUR"
export type Period = "monthly" | "annually" | "daily"

export interface SubscriptionFormValues {
  name: string
  amount: number
  period: Period
  currency: Currency
}

export interface Subscription extends SubscriptionFormValues {
  id: string
}
