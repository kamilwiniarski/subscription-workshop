import { create } from "zustand"
import { apiClient } from "../apiClient"
import { Subscription } from "../types/subscription"
import { SubscriptionStore } from "../types/subscriptionStore"

export const useSubscriptionStore = create<SubscriptionStore>(set => ({
  subscriptionsList: [],
  fetchSubscriptionsList: async () => {
    try {
      const { data } = await apiClient.get<Subscription[]>("")
      set({ subscriptionsList: data })
    } catch (error) {
      console.log(error)
    }
  },
}))
