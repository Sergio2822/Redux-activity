import React from 'react';
import './App.css';
import About from './views/About';
import Loging from './views/Login';
import Posts from './views/Posts';
import PostById from './views/PostById';
import NotFoundScreen from './views/NotFound';
import { ProtectedRoute } from './components/PrivateRoute';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <div className="App">
      
        <Switch>
          <Route path="/" exact component = {About} />
          <Route path="/about" exact component = {About} />
          <Route path="/login" exact component = {Loging} />
          <ProtectedRoute path="/posts" exact>
            <Posts />
          </ProtectedRoute>
          <ProtectedRoute path="/posts/:id" exact>
            <PostById />
          </ProtectedRoute>
          {/* <Route path="/posts/:id" exact component = {PostById } /> */}
          <Route component={NotFoundScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
