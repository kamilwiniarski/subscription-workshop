/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, ReactNode, useContext, useState } from "react"
import { Subscription } from "../../types/subscription"
import { SubscriptionsContextValue } from "../../types/subscriptionsContext"

const SubscriptionsContext = createContext<SubscriptionsContextValue>({
  subscriptionsList: [],
  setSubscriptionsList: () => {},
})

export const SubscriptionsContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [subscriptionsList, setSubscriptionsList] = useState<Subscription[]>([])

  return (
    <SubscriptionsContext.Provider
      value={{ subscriptionsList, setSubscriptionsList }}
    >
      {children}
    </SubscriptionsContext.Provider>
  )
}

export const useSubscriptionsContext = () => {
  const ctx = useContext(SubscriptionsContext)

  if (!ctx) {
    throw new Error(`Outside of context's scope`)
  }

  return ctx
}
