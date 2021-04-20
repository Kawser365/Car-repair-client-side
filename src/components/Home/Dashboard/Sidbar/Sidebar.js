import React, { useContext, useEffect, useState } from "react";
import "./Sidebar.css";
import ReactDOM, { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGripHorizontal,
  faSortAlphaDown,
  faSignOutAlt,
  faPlus,
  faShoppingCart,
  faStickyNote,
  faUserPlus,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../../../../App";

const Sidebar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    const url = `https://thawing-meadow-08220.herokuapp.com/isAdmin`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((result) => setIsAdmin(result));
  }, []);
  return (
    <div
      className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
      style={{ height: "100vh" }}
    >
        <ul className="list-unstyled">
      {
          ! isAdmin && <div>
              
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
          </Link>
        </li>
        
        <li>
          <Link to="/orderlist">
            <FontAwesomeIcon icon={faSortAlphaDown} /> <span>Order list</span>
          </Link>
        </li>
        <li>
          <Link to="/reviews">
            <FontAwesomeIcon icon={faStickyNote} /> <span>Review</span>
          </Link>
        </li>
          </div>
      }
        { isAdmin && <div>

        <li>
          <Link to="/addservice">
            <FontAwesomeIcon icon={faPlus} />
            <span>Add service</span>
          </Link>
        </li>
        <li>
          <Link to="/makeadmin">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Make Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/manageservice">
            <FontAwesomeIcon icon={faServer} /> <span>Manage Service</span>
          </Link>
        </li>
        </div>}
      </ul>
    </div>
  );
};

export default Sidebar;
