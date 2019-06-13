import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

import ShowUsers from './containers/show_users';
import Settings from './containers/setting';

class Routes extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/" component={ShowUsers} />
          <Route exact path="/setting" component={Settings} />
        </Switch>
      </Fragment>
    )
  }
}

export default Routes;
