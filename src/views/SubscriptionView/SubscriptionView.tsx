import {Heading} from "../../components/Heading"
import {Button} from "../../components/Button"
import {StyledHeaderRow} from "../SubscriptionAdd/SubscriptionAdd"
import {SubscriptionsContext} from "../../contexts/subscriptionsContext/subscriptionsContext"
import React from "react"
import { Subscription } from "../../types/subscription"
import {withRouter} from "./withRouter";
import { apiClient } from "../../apiClient"

class SubscriptionView extends React.Component {
    static contextType = SubscriptionsContext;
    state: any = {
        currentSubscription: [] // this.context.subscriptionsList.find(({ id: subId }: any) => subId === id)
    }

    constructor(props: any) {
        super(props);
        // comment line below and check this keyword in edit methods
        this.handleBackClick = this.handleBackClick.bind(this);
    }

    fetchSubscription = async (id: string) => {
        try {
            const { data } = await apiClient.get<Subscription>(`/${id}`)
            this.setState(() => ({
                currentSubscription: data
            }))
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount() {
        this.fetchSubscription(this.props.params.id as string)
        // this.setState(() => ({
        //     currentSubscription: this.context.subscriptionsList.find(({ id: subId }: any) => subId === this.props.params.id)
        // }))
    }

    handleEdit = () => {
        // check this value
        console.log(this)
        this.props.navigate("./edit")
    }

    handleBackClick(){
        // check this value
        console.log(this)
        this.props.navigate("/")
    }


    render() {
        const { name, amount, currency, period } = this.state.currentSubscription as Subscription

        return (
            <>
                <StyledHeaderRow>
                    <Button onClick={this.handleBackClick}>Go back</Button>
                    <Heading message={`Subscription Details`} />
                </StyledHeaderRow>
            {name && (
                <>
                {" "}
                <p>
                    <strong>Id:</strong> {this.props.params.id}
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
                <Button onClick={this.handleEdit}>Update</Button>
            </>
        )
    }
}

export default withRouter(SubscriptionView)
