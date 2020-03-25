import React, { Component } from 'react';
import { Page, Layout } from '@shopify/polaris';
import BasketSize from './components/Dashboard/basketsize';
import AOV from './components/Dashboard/aov';
import APQ from './components/Dashboard/apq';
import Customers from './components/Customers/customers';

class App extends Component {

  render(){
    return (
      <Page
        title="Polaris page example"
        subtitle="Use to build the outer wrapper of a page, including the page title and associated actions"
      >
          <Layout>
            <Layout.Section secondary oneThird>
              <BasketSize />
            </Layout.Section>
            <Layout.Section secondary oneThird>
              <AOV />
            </Layout.Section>
            <Layout.Section secondary oneThird>
              <APQ />
            </Layout.Section>
            <Layout.Section oneHalf>
            <Customers />
          </Layout.Section>
          </Layout>
      </Page>
      )
  }
}

export default App;
