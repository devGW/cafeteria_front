import React, { Component } from "react";
import LoginFormPresenter from "./LoginFormPresenter";
import PropTypes from "prop-types";

class LoginFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  static propTypes = {
    usernameLogin: PropTypes.func.isRequired
  };

  _handleInputChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = e => {
    const { usernameLogin } = this.props;
    const { username, password } = this.state;
    e.preventDefault();
    usernameLogin(username, password);
  };
  render() {
    const { username, password } = this.state;
    const { _handleInputChange, _handleSubmit } = this;
    return (
      <LoginFormPresenter
        username={username}
        password={password}
        handleInputChange={_handleInputChange}
        handleSubmit={_handleSubmit}
      />
    );
  }
}

export default LoginFormContainer;
