import React, { Component } from 'react';
import LoginPage from './loginPage';
import Dashboard from './Dashboard'
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
             {/*<Route exact path="/musteriler" component={wrapperCustomers} />
            <Route exact path="/siparisler" component={wrapperOrders} />
            <Route exact path="/raporlar" component={wrapperReports} />
            <Route
              exact      
              path="/entegrasyonlar"
              component={wrapperIntegrations}
            /> */}
          </Switch>
        </BrowserRouter>
   
    );
  }
}
export default App;
