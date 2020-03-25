import React, { Component } from 'react';
import { Card } from '@shopify/polaris';

class APQ extends Component {

    constructor(){
        super();
        this.state = {
            apq: 0 
        }
    }

    componentDidMount(){
        fetch('/api/v1/apq')
            .then(res => res.json())
            .then(apq => this.setState({apq}));
    }
    
    render() {
        return (
            <div>
                <Card title="Average product quantity" sectioned>
                    <p>How many products your customers put into the basket.</p>
                    <b>{this.state.apq}</b>
                </Card>            
            </div>
        );
    }
}

export default APQ;