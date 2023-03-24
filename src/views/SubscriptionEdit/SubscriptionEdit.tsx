import { Heading } from "../../components/Heading"
import { useCallback } from "react"
import { apiClient } from "../../apiClient"
import { useSubscriptionsContext } from "../../contexts/subscriptionsContext/subscriptionsContext"
import { Subscription } from "../../types/subscription"
import { useNavigate, useParams } from "react-router-dom"
import { SubscriptionForm } from "../../components/SubscriptionForm"

export const SubscriptionEdit = () => {
  const { subscriptionsList, setSubscriptionsList } = useSubscriptionsContext()
  const navigate = useNavigate()
  const { id } = useParams()

  const updateSubscription = useCallback(
    async (values: any, setSubmitting: any) => {
      try {
        const { data } = await apiClient.put<Subscription[]>(`/${id}`, {
          name: values.name,
          amount: values.amount,
          currency: "PLN",
          period: "monthly",
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

  const { name, amount } = subscriptionsList.find(
    (sub: Subscription) => sub.id === id,
  ) as Subscription

  return (
    <>
      <Heading message={"Update subscription"} />
      <SubscriptionForm
        initialValues={{ name, amount }}
        handleSubmit={updateSubscription}
        type="edit"
      />
    </>
  )
}
