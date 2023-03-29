import { Heading } from "../../components/Heading"
import { useCallback } from "react"
import { apiClient } from "../../apiClient"
import { useSubscriptionsContext } from "../../contexts/subscriptionsContext/subscriptionsContext"
import { Subscription, SubscriptionFormValues } from "../../types/subscription"
import { useNavigate } from "react-router-dom"
import { SubscriptionForm } from "../../components/SubscriptionForm"
import { Button } from "../../components/Button"
import styled from "styled-components"

export const StyledHeaderRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > h1 {
    margin-left: 16px;
  }

  & > button {
    max-height: 40px;
  }
`

export const SubscriptionAdd = () => {
  const { setSubscriptionsList } = useSubscriptionsContext()
  const navigate = useNavigate()

  const addSubscription = useCallback(
    async (
      { name, amount, currency, period }: SubscriptionFormValues,
      setSubmitting: any,
    ) => {
      try {
        const { data } = await apiClient.post<Subscription[]>("", {
          name,
          amount,
          currency,
          period,
        })
        setSubscriptionsList(data)
        setSubmitting(false)
        navigate("/")
      } catch (error) {
        console.log(error)
      }
    },
    [],
  )

  const handleBackClick = () => {
    navigate("/")
  }

  return (
    <>
      <StyledHeaderRow>
        <Button onClick={handleBackClick}>Go back</Button>
        <Heading message={"Add new subscription"} />
      </StyledHeaderRow>
      <SubscriptionForm
        initialValues={{
          name: "",
          amount: 0,
          currency: "PLN",
          period: "monthly",
        }}
        handleSubmit={addSubscription}
        type="add"
      />
    </>
  )
}
