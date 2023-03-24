import { Heading } from "../../components/Heading"
import { useNavigate, useParams } from "react-router-dom"
import { Button } from "../../components/Button"
import { StyledHeaderRow } from "../SubscriptionAdd/SubscriptionAdd"
import { useSubscriptionsContext } from "../../contexts/subscriptionsContext/subscriptionsContext"
import { useEffect, useState } from "react"

export const SubscriptionView = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { subscriptionsList } = useSubscriptionsContext()
  const [currentSubscription, setCurrentSubscription] = useState(
    subscriptionsList.find(({ id: subId }) => subId === id),
  )

  const handleEdit = () => {
    navigate("./edit")
  }

  const handleBackClick = () => {
    navigate("/")
  }

  useEffect(() => {
    setCurrentSubscription(
      subscriptionsList.find(({ id: subId }) => subId === id),
    )
  }, [subscriptionsList])

  return (
    <>
      <StyledHeaderRow>
        <Button onClick={handleBackClick}>Go back</Button>
        <Heading message={`Subscription Details`} />
      </StyledHeaderRow>

      <p>
        <strong>Id:</strong> {id}
      </p>
      <p>
        <strong>Name:</strong> {currentSubscription?.name}
      </p>
      <p>
        <strong>Amount:</strong> {currentSubscription?.amount}
      </p>
      <p>
        <strong>Currency:</strong> {currentSubscription?.currency}
      </p>
      <p>
        <strong>Period:</strong> {currentSubscription?.period}
      </p>
      <Button onClick={handleEdit}>Update</Button>
    </>
  )
}
