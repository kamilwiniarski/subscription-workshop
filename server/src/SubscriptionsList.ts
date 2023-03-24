import { v4 as uuid } from 'uuid';
import { Subscription, SubscriptionDTO } from './subscription.model';

class Subscriptions {
  private _subscriptions: Subscription[] = [
    {
      id: uuid(),
      name: 'netflix',
      amount: 123,
      currency: 'USD',
      period: 'annually',
    },
    {
      id: uuid(),
      name: 'adobe',
      amount: 432,
      currency: 'PLN',
      period: 'annually',
    },
    {
      id: uuid(),
      name: 'jetbrains',
      amount: 38,
      currency: 'PLN',
      period: 'monthly',
    },
    {
      id: uuid(),
      name: 'office',
      amount: 29,
      currency: 'PLN',
      period: 'monthly',
    },
    {
      id: uuid(),
      name: 'allegro smart',
      amount: 40,
      currency: 'PLN',
      period: 'monthly',
    },
    {
      id: uuid(),
      name: 'amazon',
      amount: 50,
      currency: 'USD',
      period: 'annually',
    },
  ];

  constructor() {}

  all(): Subscription[] {
    return this._subscriptions;
  }

  get(id: string): Subscription {
    return this._subscriptions.find(
      (subscription: Subscription) => subscription.id === id,
    );
  }

  add(subscriptionDTO: SubscriptionDTO): Subscription[] {
    this._subscriptions.push({ ...subscriptionDTO, id: uuid() });
    return this._subscriptions;
  }

  update(id: string, subscriptionDTO: SubscriptionDTO): Subscription[] {
    const updatedList = this._subscriptions.map(
      (subscription: Subscription) => {
        return subscription.id === id
          ? { ...subscriptionDTO, id }
          : subscription;
      },
    );
    this._subscriptions = updatedList;
    return this._subscriptions;
  }

  delete(id: string): Subscription[] {
    const updatedList = this._subscriptions.filter(
      (subscription: Subscription) => subscription.id !== id,
    );
    this._subscriptions = updatedList;
    return this._subscriptions;
  }
}

const SubscriptionsList = new Subscriptions();

export default SubscriptionsList;
