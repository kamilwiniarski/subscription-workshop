import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common"
import { SubscriptionsService } from "./subscriptions.service"
import { Subscription, SubscriptionDTO } from "./subscription.model"

@Controller("subscriptions")
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  listSubscriptions(): Subscription[] {
    return this.subscriptionsService.listSubscriptions()
  }

  @Post()
  createSubscription(@Body() subscriptionDTO: SubscriptionDTO): Subscription[] {
    return this.subscriptionsService.createSubscription(subscriptionDTO)
  }

  @Get(":id")
  getSubscription(@Param("id") id: string): Subscription {
    return this.subscriptionsService.getSubscription(id)
  }

  @Put(":id")
  updateSubscription(
    @Param("id") id: string,
    @Body() subscriptionDTO: SubscriptionDTO,
  ): Subscription[] {
    return this.subscriptionsService.updateSubscription(id, subscriptionDTO)
  }

  @Delete(":id")
  deleteSubscription(@Param("id") id: string): Subscription[] {
    return this.subscriptionsService.deleteSubscription(id)
  }
}
