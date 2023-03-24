import { Dispatch, SetStateAction } from "react"
import { Subscription } from "./subscription"

export interface SubscriptionsContextValue {
  subscriptionsList: Subscription[]
  setSubscriptionsList: Dispatch<SetStateAction<Subscription[]>>
}
