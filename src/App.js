import React, { createContext, useState } from "react";
import './App.css';
import Home from './components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Dashboard from "./components/Home/Dashboard/Dashboard";
import Order from "./components/Home/Dashboard/Order/Order";
import Orderlist from "./components/Home/Dashboard/Orderlist/Orderlist";
import Reviews from "./components/Home/Dashboard/Reviews/Reviews";
import MakeAdmin from "./components/Home/Dashboard/MakeAdmin/MakeAdmin";
import AddService from "./components/Home/Dashboard/AddService/AddService";
import ManageService from "./components/Home/Dashboard/ManageService/ManageService";
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AddServices from "./components/Home/Dashboard/AddServices/AddServices";
import DeleteServices from "./components/Home/Dashboard/DeleteServices/DeleteServices";
import AddRiview from "./components/Home/Dashboard/AddReview/AddRiview";
import CustomerReviews from "./components/Home/CustomerReviews/CustomerReviews";
import Service from "./components/Home/Service/Service";
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      <div>
      <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"> <span>Car Repair Company</span> </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav ml-auto justify-content-end">
          <li className="nav-item">
              <Link className="nav-link" to="/"><span>Home</span> </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/dashboard"> <span>Dashboard</span> </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/login"> <span>Log in</span> </Link>
              </li>
            </ul>
            </div>
          </div>
        </nav>
      <Switch>
       <PrivateRoute path="/dashboard">
         <Dashboard/>
       </PrivateRoute>
        <PrivateRoute path="/order/:name">
          <Order/>
        </PrivateRoute>
        <Route path="/orderlist">
          <Orderlist/>
        </Route>
        <Route path="/reviews">
          <Reviews></Reviews>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/addservice">
          <AddService></AddService>
        </Route>
        <Route path="/manageservice">
          <ManageService></ManageService>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </div>
  </Router>
    </UserContext.Provider>
);
}

export default App;
