import { Heading } from "../../components/Heading"
import { useCallback } from "react"
import { apiClient } from "../../apiClient"
import { useSubscriptionsContext } from "../../contexts/subscriptionsContext/subscriptionsContext"
import { Subscription, SubscriptionFormValues } from "../../types/subscription"
import { useNavigate, useParams } from "react-router-dom"
import { SubscriptionForm } from "../../components/SubscriptionForm"

export const SubscriptionEdit = () => {
  const { subscriptionsList, setSubscriptionsList } = useSubscriptionsContext()
  const navigate = useNavigate()
  const { id } = useParams()

  const updateSubscription = useCallback(
    async (
      { name, amount, currency, period }: SubscriptionFormValues,
      setSubmitting: any,
    ) => {
      try {
        const { data } = await apiClient.put<Subscription[]>(`/${id}`, {
          name,
          amount,
          currency,
          period,
        })
        setSubscriptionsList(data)
        setSubmitting(false)
        navigate("../")
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  const { name, amount, currency, period } = subscriptionsList.find(
    ({ id: subId }: Subscription) => subId === id,
  ) as Subscription

  return (
    <>
      <Heading message={"Update subscription"} />
      <SubscriptionForm
        initialValues={{ name, amount, currency, period }}
        handleSubmit={updateSubscription}
        type="edit"
      />
    </>
  )
}
