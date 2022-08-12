import React from 'react'
// import "./app.css"   - need import for styling
import Home from "./Home";

 // Using class component for login details

export default class LoginDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password : "",
      isAuth : false,
    };
  }

  // User name

  handleUser = (e) => {
    this.setState({
      user : e.target.value
    })
  }

  // User Pass

  handlePass = (e) => {
    this.setState({
      password : e.target.value
    })
  };

  // Trigger if user/pass are correct, turn auth to true

  handleLogin = (e) => {
    e.preventDefault(); // prevent default action from reloading page etc.
    if(this.state.user == "admin"  && this.state.password == "admin"){
      this.state.isAuth = true;
    }
  }



  // Login form

  render() {
    return (
      <div className='loginPage'>
      {this.state.isAuth ? <Home/> :
      (<div className='outline'>
        <form onSubmit={(e) => this.handleLogin(e)} >
        <h1 className='h1'>User Login</h1>
        <input className='input' type="text" placeholder = "Login Name" value={this.state.user} onChange={this.handleUser}></input>
        <input className='input' type="password" placeholder = "Password" value={this.state.password} onChange={this.handlePass}></input>
        <button className='loginButton'>Login</button>
        </form>
      </div>)}
      </div>
    )
  }
}
