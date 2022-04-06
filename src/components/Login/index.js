import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: '', showSubmitError: false}

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login-container">
        <form onSubmit={this.submitForm} className="form-element-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
          <div className="input-element-container">
            <label
              htmlFor="username"
              value={username}
              className="label-element"
            >
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              onChange={this.changeUsername}
              className="input-element"
            />
          </div>
          <div className="input-element-container">
            <label
              htmlFor="password"
              value={password}
              className="label-element"
            >
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              onChange={this.changePassword}
              className="input-element"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          {showSubmitError ? <p className="error-message">{errorMsg}</p> : ''}
        </form>
      </div>
    )
  }
}
export default Login
