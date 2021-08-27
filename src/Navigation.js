import React from "react";
import { NavLink, Route } from "react-router-dom";
import DisplayImage from "./DisplayImage";
import ImageTest from "./ImageTest";
import DeveloperPage from "./Developerpage";
import Login from "./Login";
import Register from "./Register" ;

class Navigation extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          {/* <NavLink className="navbar-brand" to="/image">
    <img src="bird.jpg" alt="logo" style="width:40px;">
  </NavLink> */}

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/ImageUpload">
                ImageUpload
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/DisplayData">
                DisplayImage
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink className="nav-link" to="/DeveloperPage">
                DeveloperView
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Register">
                Register
              </NavLink>
            </li>
           {/* <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                ContactUS
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                Products
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/validation">
                React-Hook-Form
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/new registration">
                /new registration
              </NavLink>
            </li> */}
            {/* <li className="nav-item">
              <NavLink className="nav-link" to="/CopyTest">
                CopyTest
              </NavLink>
            </li> */}
          </ul>
        </nav>
        <Route path="/ImageUpload" component={ImageTest}></Route>
        <Route path="/DisplayData" component={DisplayImage}></Route>
        <Route path="/DeveloperPage" component={DeveloperPage}></Route>
        <Route path="/Login" component={Login}></Route>
        <Route path="/Register" component={Register}></Route>



       
      </div>
    );
  }
}
export default Navigation;
