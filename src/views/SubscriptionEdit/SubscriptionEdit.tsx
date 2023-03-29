import { Heading } from "../../components/Heading"
import { useCallback, useEffect, useState } from "react"
import { apiClient } from "../../apiClient"
import { useSubscriptionsContext } from "../../contexts/subscriptionsContext/subscriptionsContext"
import { Subscription, SubscriptionFormValues } from "../../types/subscription"
import { useNavigate, useParams } from "react-router-dom"
import { SubscriptionForm } from "../../components/SubscriptionForm"

export const SubscriptionEdit = () => {
  const { setSubscriptionsList } = useSubscriptionsContext()
  const navigate = useNavigate()
  const { id } = useParams()
  const [subscription, setSubscription] = useState<
    Subscription | Record<never, never>
  >({})

  const fetchSubscription = useCallback(async (id: string) => {
    try {
      const { data } = await apiClient.get<Subscription>(`/${id}`)
      setSubscription(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchSubscription(id as string)
  }, [])

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

  const { name, amount, currency, period } = subscription as Subscription

  return (
    <>
      <Heading message={"Update subscription"} />
      {name && (
        <SubscriptionForm
          initialValues={{ name, amount, currency, period }}
          handleSubmit={updateSubscription}
          type="edit"
        />
      )}
    </>
  )
}
