import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {toast} from 'react-toastify'

import './index.css'
import CartContext from '../../context/CartContext'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSignUp = () => {
    const {history} = this.props
    history.push('/register')
  }

  onChangeMail = event => {
    this.setState({email: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async (event, storeTokenInLS) => {
    event.preventDefault()
    const {email, password} = this.state
    const user = {email, password}
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })

      console.log('login form', response)

      const resData = await response.json()

      if (response.ok) {
        // alert("Login Successful");
        storeTokenInLS(resData.token)
        this.setState({
          email: '',
          password: '',
        })
        toast.success('Login successful')
        ;<Redirect to="/" />
      } else {
        toast.error(
          resData.extraDetails ? resData.extraDetails : resData.message,
        )
        console.log('invalid credential')
      }
    } catch (error) {
      console.log(error)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderMailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="email">
          MAIL
        </label>
        <input
          type="text"
          id="email"
          className="email-input-field"
          value={email}
          onChange={this.onChangeMail}
          placeholder="Mail"
        />
      </>
    )
  }

  render() {
    // if (jwtToken !== undefined) {
    //  return <Redirect to="/" />
    // }

    return (
      <CartContext.Consumer>
        {({storeTokenInLS}) => (
          <div className="login-form-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="login-website-logo-mobile-img"
              alt="website logo"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              className="login-img"
              alt="website login"
            />
            <form
              className="form-container"
              onSubmit={e => this.submitForm(e, storeTokenInLS)}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="login-website-logo-desktop-img"
                alt="website logo"
              />
              <div className="input-container">{this.renderMailField()}</div>
              <div className="input-container">
                {this.renderPasswordField()}
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
              <button
                type="button"
                onClick={this.handleSignUp}
                className="sign-button"
              >
                Sign Up
              </button>
            </form>
          </div>
        )}
      </CartContext.Consumer>
    )
  }
}

export default LoginForm
