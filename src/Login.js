

import React,{useState} from "react";
import { Route, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import Register from "./Register";
// import "./login.css";
//import Home from "./Home";



const Form =()=> {
  const [login,setLogin]=useState({ 
    user_email:"",
    
    user_password:"",
});
const [date,setDate]=useState('')

const handleInputChange=(e)=>{
//    console.log(e.target.value)
//    console.log(e.target.name)
   setLogin({...login,[e.target.name]: e.target.value})
//    console.log(login);
}

const onSubmitForm =async(e)=>{
  console.log("submit called")
 e.preventDefault();
try {
   const body=login
   console.log(body)
const res = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
    
  });
  const data =await res.json();
  console.log(data.message)
  toast(data.message)
//   const Value1 =  res.json(result[0]);
//   setDate(Value1);

console.log("called post")

} catch (error) {
   console.log(error.message)
}

   
}


    return (
      <div>
        <form action="" onSubmit={onSubmitForm}>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            
              <div>
                  <label>Username</label>
                <input
                  type="text"
                  id="login12"
                  className="fadeIn second"
                  name="user_email"
                  placeholder="UserId or EmailId"
                  
                  noValidate
                  onChange={handleInputChange}
                />
               
              </div>
              <div>
              <label>Password</label>
                <input
                  type="text"
                  id="login12"
                  className="fadeIn third"
                  name="user_password"
                  placeholder="password"
                  onChange={handleInputChange}
                  noValidate
                />
                
              </div>
              <div>
                {/* <NavLink class="nav-link" to="/home"> */}
                  <input
                    type="submit"
                    className="fadeIn fourth"
                    value="Log In"
                   
                  />
                {/* </NavLink> */}
              </div>
             
              {/* <NavLink class="nav-link" to="/register">
                <button className="btn btn-danger">Register</button>{" "}
              </NavLink> */}
          </div>
        </div>
        {/* <Route path="/register" component={Register}></Route>
        <Route path="/home" component={Home}></Route> */}
        </form>
       <h1>{setDate}</h1> 

      </div>
    );
  }

export default Form;
