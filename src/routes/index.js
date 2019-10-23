import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/Homepage';
import Content from '../pages/Content';

import SignIn from '../pages/Login';

import NewPost from '../pages/NewPost';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/content" component={Content} />

      <Route path="/login" component={SignIn} />

      <Route path="/posts/create" component={NewPost} />
    </Switch>
  );
}
