import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import Header from './Header';
import ProjectPage from './ProjectPage';
import MethodPage from './MethodPage';
import ResultPage from './ResultPage';
import ContactPage from './ContactPage';

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          {/* <div className="row"> */}
            <Header />
          {/* </div> */}
          <div className="row">
            <div className="col"></div>
            <div className="col-xs-11 col-md-8">
              <Switch>
                <Route path="/" component={HomePage} exact></Route>
                <Route path="/project" component={ProjectPage}></Route>
                <Route path="/method" component={MethodPage}></Route>
                <Route path="/result" component={ResultPage}></Route>            
                <Route path="/contact" component={ContactPage}></Route>            
              </Switch>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;