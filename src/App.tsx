import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pages, routes } from "./routes"
import { SubscriptionList } from "./views/SubscriptionList/SubscriptionList"
import { SubscriptionView } from "./views/SubscriptionView/SubscriptionView"
import { SubscriptionAdd } from "./views/SubscriptionAdd/SubscriptionAdd"
import { SubscriptionsContextProvider } from "./contexts/subscriptionsContext/subscriptionsContext"
import { SubscriptionEdit } from "./views/SubscriptionEdit/SubscriptionEdit"

function App() {
  return (
    <SubscriptionsContextProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={routes[Pages.SUBSCRIPTIONS_LIST]}
            element={<SubscriptionList />}
          />
          <Route
            path={routes[Pages.SUBSCRIPTION_VIEW]}
            element={<SubscriptionView />}
          />
          <Route
            path={routes[Pages.SUBSCRIPTION_EDIT]}
            element={<SubscriptionEdit />}
          />
          <Route
            path={routes[Pages.ADD_SUBSCRIPTION]}
            element={<SubscriptionAdd />}
          />
        </Routes>
      </BrowserRouter>
    </SubscriptionsContextProvider>
  )
}

export default App
