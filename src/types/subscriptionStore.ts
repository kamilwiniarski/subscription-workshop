import { Subscription } from "./subscription"

export interface SubscriptionStore {
  subscriptionsList: Subscription[]
  fetchSubscriptionsList(): Promise<void>
}
