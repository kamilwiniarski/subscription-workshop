export enum Pages {
  SUBSCRIPTIONS_LIST,
  SUBSCRIPTION_VIEW,
  SUBSCRIPTION_EDIT,
  ADD_SUBSCRIPTION,
  ERROR,
  NOT_FOUND,
}

export const routes: { [key in Pages]: string } = {
  [Pages.SUBSCRIPTIONS_LIST]: "/",
  [Pages.SUBSCRIPTION_VIEW]: "/subscription/:id",
  [Pages.SUBSCRIPTION_EDIT]: "/subscription/:id/edit",
  [Pages.ADD_SUBSCRIPTION]: "/subscriptionAdd",
  [Pages.ERROR]: "/error",
  [Pages.NOT_FOUND]: "*",
}
