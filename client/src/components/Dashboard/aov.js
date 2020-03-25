import React, { Component } from 'react';
import { Card } from '@shopify/polaris';

class AOV extends Component {

    constructor(){
        super();
        this.state = {
            aov: 0
        }
    }

    componentDidMount(){
        fetch('/api/v1/aov')
            .then(res => res.json())
            .then(aov => this.setState({aov}) );
    }

    render() {
        return (
            <Card title="Average Order Value" sectioned>
                <p>How much more your customers spend.</p>
                <b>{this.state.aov}</b>
            </Card>
        );
    }
}

export default AOV;