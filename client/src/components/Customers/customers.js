import React, {Component} from 'react';
import { Card, ResourceList, ResourceItem, Avatar, TextContainer, Heading } from '@shopify/polaris';

class Customers extends Component{

    constructor(){
        super();
        this.state = {
            customers: []
        }
    }

    componentDidMount(){
        fetch('/api/v1/customers')
            .then(res => res.json())
            .then(customers => this.setState({ customers }, () => console.log('Customers: ', customers)));
    }

    render() {
        
        return (
            <Card>
            <ResourceList
                resourceName={{singular: 'customer segment', plural: 'customer segments'}}
                items={this.state.customers}
                renderItem={(item) => {
                const {id, name, APQ, LTV, TOTAL} = item;
                const avatarSource = 'https://burst.shopifycdn.com/photos/freelance-designer-working-on-laptop.jpg?width=746';
                const latestOrderUrl = '/customersegments/'+id;
                const shortcutActions = latestOrderUrl
                    ? [{content: 'View latest order', url: latestOrderUrl}]
                    : null;

                return (
                    <ResourceItem
                    id={id}
                    url={latestOrderUrl}
                    media={
                        <Avatar customer size="medium" name={name} source={avatarSource} />
                    }
                    shortcutActions={shortcutActions}
                    accessibilityLabel={`View details`}
                    name={name}
                    >

                    <TextContainer>
                        <Heading>{name}</Heading>
                        <p>{TOTAL} with LTV {LTV} and Avg. Product Quantity {APQ} </p>
                        </TextContainer>
                    </ResourceItem>
                );
                }}
            />
            </Card>
        );
    }
}

export default Customers