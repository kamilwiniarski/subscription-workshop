import { Heading } from "../../components/Heading"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { StyledHeaderRow } from "../SubscriptionAdd/SubscriptionAdd"
import { useCallback, useEffect, useState } from "react"
import { Subscription } from "../../types/subscription"
import { apiClient } from "../../apiClient"

export const SubscriptionView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [subscription, setSubscription] = useState<
    Subscription | Record<never, never>
  >({})

  const handleEdit = () => {
    navigate("./edit")
  }

  const handleBackClick = () => {
    navigate("/")
  }

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

  const { name, amount, currency, period } = subscription as Subscription

  return (
    <>
      <StyledHeaderRow>
        <Button onClick={handleBackClick}>Go back</Button>
        <Heading message={`Subscription Details`} />
      </StyledHeaderRow>

      {name && (
        <>
          {" "}
          <p>
            <strong>Id:</strong> {id}
          </p>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Amount:</strong> {amount}
          </p>
          <p>
            <strong>Currency:</strong> {currency}
          </p>
          <p>
            <strong>Period:</strong> {period}
          </p>
        </>
      )}
      <Button onClick={handleEdit}>Update</Button>
    </>
  )
}
