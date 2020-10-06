import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import Blog from './Components/Blog/Blog';
import Donation from './Components/Donation/Donation';
import Event from './Components/Events/Event';
import Home from "./Components/Home/Home";
import LogSignIn from './Components/LogSignIn/LogSignIn';
import Registration from './Components/Registration/Registration';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SpecificUser from './Components/SpecificUser/SpecificUser';

export const UserContext = createContext();

// import './App.css';

function App(props) {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/events">
            <Event></Event>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/logSignIn">
            <LogSignIn></LogSignIn>
          </Route>
          <PrivateRoute path="/registration">
            <Registration></Registration>
          </PrivateRoute>
          <Route path="/specUser">
            <SpecificUser></SpecificUser>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/*">
            <Home></Home>
          </Route>
        </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
