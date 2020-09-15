import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Switch>
          <PrivateRoute path='/' exact>
            <Dashboard />
          </PrivateRoute>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/*'>
            <Error />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthWrapper>
  );
}

export default App;
