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
          <Header />
            <Switch>
              <Route path="/" component={HomePage} exact></Route>
              <Route path="/project" component={ProjectPage}></Route>
              <Route path="/method" component={MethodPage}></Route>
              <Route path="/result" component={ResultPage}></Route>            
              <Route path="/contact" component={ContactPage}></Route>            
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
