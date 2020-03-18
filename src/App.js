import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Page from "./components/Page/Page";
import data from "./assets/data/data.json";
import "./App.css";

class App extends Component {
  state = {
    data
  };
  render() {
    return (
      <Router>
        <Fragment>
          <Layout />
          <Switch>
            <Route exact path="/frontend-design-challenge" component={Page} />
            <Route
              path="/frontend-design-challenge/industries"
              render={() => <Page data={this.state.data.pages[0].blocks[0]} />}
            />
            <Route
              path="/frontend-design-challenge/services"
              render={() => <Page data={this.state.data.pages[1].blocks[0]} />}
            />
            <Route
              path="/frontend-design-challenge/about"
              render={() => <Page data={this.state.data.pages[2].blocks[0]} />}
            />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;
