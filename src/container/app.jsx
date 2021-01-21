import React, { Component } from 'react';
import LoginPage from './loginPage';
import Dashboard from './Dashboard'
import DashBoardDetails from './Dashboard/dashBoardDetails'
import RouterDetails from './RouterDetails'
import { BrowserRouter, Route, Switch } from "react-router-dom";
class App extends Component {
  render() {
    return (
     
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboardDetails" component={DashBoardDetails} />
            <Route exact path="/routerdetails" component={RouterDetails} />
             {/* <Route exact path="/raporlar" component={wrapperReports} />
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
