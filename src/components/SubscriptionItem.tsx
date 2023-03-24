import styled from "styled-components"
import React, { useCallback } from "react"
import { Subscription } from "../types/subscription"
import { Link } from "react-router-dom"
import { apiClient } from "../apiClient"
import { useSubscriptionsContext } from "../contexts/subscriptionsContext/subscriptionsContext"
import { Paragraph } from "./Paragraph"
import { Heading } from "./Heading"
import { Button } from "./Button"

const StyledSubscriptionItemContainer = styled.div`
  background-color: rgb(18, 18, 18);
  color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow: hidden;
  max-width: 345px;
`

const StyledImage = styled.div`
  background-image: url(https://dummyimage.com/640x360/);
  display: block;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 140px;
`

const CardTitle = styled.h3`
  margin: 0 0 8px 8px;
  font-family: Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.334;
  letter-spacing: 0;
`

const StyledSubscriptionContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: rgb(18, 18, 18);
  color: rgb(255, 255, 255);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px;
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.05)
  );
  overflow: hidden;
  max-width: 345px;
`

const StyledActionRow = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`

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
    <StyledSubscriptionItemContainer>
      <StyledImage />
      <StyledSubscriptionContent>
        <CardTitle>{name}</CardTitle>
        <Paragraph>
          The amount of your subscription: {amount} {currency}
        </Paragraph>
        <Paragraph>Paid: {period}</Paragraph>
      </StyledSubscriptionContent>
      <StyledActionRow>
        <Button>
          <Link to={`/subscription/${id}`}>Details</Link>
        </Button>

        <Button isError={true} onClick={deleteSubscription}>
          Delete
        </Button>
      </StyledActionRow>
    </StyledSubscriptionItemContainer>
  )
}
