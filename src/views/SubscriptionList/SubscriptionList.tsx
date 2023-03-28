import { SubscriptionItem } from "../../components/SubscriptionItem"
import { Heading } from "../../components/Heading"
import { Subscription } from "../../types/subscription"
import { Link } from "react-router-dom"
import { Pages, routes } from "../../routes"
import { useCallback, useEffect } from "react"
import { apiClient } from "../../apiClient"
import { useSubscriptionsContext } from "../../contexts/subscriptionsContext/subscriptionsContext"
import { Button } from "../../components/Button"
import styled from "styled-components"
import { useSubscriptionStore } from "../../stores/useSubscriptionStore"

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  row-gap: 32px;
  column-gap: 32px;
  margin: 64px 32px;
`

export const SubscriptionList = () => {
  // const { subscriptionsList, setSubscriptionsList } = useSubscriptionsContext()
  const subscriptionsList = useSubscriptionStore(
    state => state.subscriptionsList,
  )

  const fetchSubscriptionsList = useSubscriptionStore(
    state => state.fetchSubscriptionsList,
  )

  // const fetchSubscriptionsList = useCallback(async () => {
  //   try {
  //     const { data } = await apiClient.get<Subscription[]>("")
  //     setSubscriptionsList(data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }, [])

  useEffect(() => {
    fetchSubscriptionsList()
  }, [])

  return (
    <>
      <Heading message={"List of your subscriptions"} />
      <Button>
        <Link to={routes[Pages.ADD_SUBSCRIPTION]}>Add new subscription</Link>
      </Button>
      <StyledGrid>
        {subscriptionsList.map(({ id, name, amount, currency, period }) => (
          <SubscriptionItem
            key={id}
            id={id}
            name={name}
            amount={amount}
            currency={currency}
            period={period}
          />
        ))}
      </StyledGrid>
    </>
  )
}
