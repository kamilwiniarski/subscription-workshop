import React, {useCallback} from "react"
import {Subscription} from "../types/subscription"
import {Link} from "react-router-dom"
import {apiClient} from "../apiClient"
import {useSubscriptionsContext} from "../contexts/subscriptionsContext/subscriptionsContext"
import {Paragraph} from "./Paragraph"
import {Button} from "./Button"


export const SubscriptionItem: React.FC<Subscription> = ({
  id,
  name,
  amount,
  currency,
  period,
}) => {
  const { setSubscriptionsList } = useSubscriptionsContext()

  const deleteSubscription = useCallback(async () => {
    try {
      const { data } = await apiClient.delete<Subscription[]>(`/${id}`)
      setSubscriptionsList(data)
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <div className="subscription-item">
      <div className="styled-image"></div>
      <div className="subscription-content">
        <h3>{name}</h3>
        <Paragraph>
          The amount of your subscription: {amount} {currency}
        </Paragraph>
        <Paragraph>Paid: {period}</Paragraph>
      </div>
      <div className="action-row">
        <Button>
          <Link to={`/subscription/${id}`}>Details</Link>
        </Button>

        <Button isError={true} onClick={deleteSubscription}>
          Delete
        </Button>
      </div>
    </div>
  )
}
