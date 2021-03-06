import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleUsername(e) {
    this.setState({ username: e.target.value });
  }

  handlePassword(e) {
    this.setState({ password: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === "admin" && password === "admin") {
      this.props.history.push("/home");
    } else {
      console.log("fail");
    }
  }

  render() {
    return (
      <div className="landing-container">
        <div className="login-container">
          <form className="form" onSubmit={this.onSubmit}>
            <h1>Welcome Back</h1>
            <p>Please enter your login credentials</p>
            <div className="input-container">
              <FontAwesomeIcon className="icon" icon={faUser} />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.handleUsername}
                value={this.state.username}
                required
              />
            </div>
            <div className="input-container">
              <FontAwesomeIcon icon={faKey} className="icon" />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.handlePassword}
                value={this.state.password}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Landing;
