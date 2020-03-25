import React, {Component} from 'react';
import { Card } from '@shopify/polaris';

class BasketSize extends Component{

    constructor(){
        super();
        this.state = {
            basket_size: 0
        }
    }

    componentDidMount(){
        fetch('/api/v1/basket_size')
            .then(res => res.json())
            .then(basket_size => this.setState({ basket_size }, () => console.log('basket_size: ', basket_size)));
    }

    render() {

        return (
            <Card title="Basket Size" sectioned>
                <p>How many more products your customers spend.</p>
                <b>{this.state.basket_size}</b>
            </Card>
        );
      }

}

export default BasketSize