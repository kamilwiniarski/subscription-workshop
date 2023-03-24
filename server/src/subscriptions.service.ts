import { Injectable } from "@nestjs/common"
import { Subscription, SubscriptionDTO } from "./subscription.model"
import SubscriptionsList from "./SubscriptionsList"

@Injectable()
export class SubscriptionsService {
  listSubscriptions(): Subscription[] {
    return SubscriptionsList.all()
  }

  getSubscription(id: string): Subscription {
    return SubscriptionsList.get(id)
  }

  createSubscription(subscriptionDTO: SubscriptionDTO): Subscription[] {
    return SubscriptionsList.add(subscriptionDTO)
  }

  updateSubscription(
    id: string,
    subscriptionDTO: SubscriptionDTO,
  ): Subscription[] {
    return SubscriptionsList.update(id, subscriptionDTO)
  }

  deleteSubscription(id: string): Subscription[] {
    return SubscriptionsList.delete(id)
  }
}
