import {Component} from 'react'
import {toast} from 'react-toastify'

import './index.css'
import CartContext from '../../context/CartContext'

class Register extends Component {
  state = {
    user: {
      username: '',
      email: '',
      phone: '',
      password: '',
    },
  }

  handleInput = e => {
    console.log(e)
    const {name, value} = e.target

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [name]: value,
      },
    }))
  }

  handleSubmit = async (e, storeTokenInLS) => {
    e.preventDefault()
    const {user} = this.state
    const {history} = this.props
    console.log(user)
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      console.log('response data : ', response)

      const responseData = await response.json()
      console.log('error from server', responseData.extraDetails)
      if (response.ok) {
        storeTokenInLS(responseData.token)
        toast.success('Registration successful')
        this.setState({
          user: {username: '', email: '', phone: '', password: ''},
        })
        history.push('/')
      } else {
        // alert(responseData.extraDetails ? responseData.extraDetails : responseData.message )
        toast.error(
          responseData.extraDetails
            ? responseData.extraDetails
            : responseData.message,
        )
      }
    } catch (error) {
      console.error('register', error)
    }
  }

  render() {
    const {user} = this.state
    const {username, email, phone, password} = user
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
              src="https://res.cloudinary.com/dfuaxymq1/image/upload/v1735665363/left-img_ugqnzc.webp"
              className="login-img"
              alt="website login"
            />
            <form
              onSubmit={e => this.handleSubmit(e, storeTokenInLS)}
              className="form-container"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                className="login-website-logo-desktop-img"
                alt="website logo"
              />
              <div className="input-container">
                <>
                  <label className="input-label" htmlFor="username">
                    USERNAME
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="username-input-field"
                    value={username}
                    onChange={this.handleInput}
                    placeholder="Enter username"
                  />
                </>
              </div>
              <div className="input-container">
                <label className="input-label" htmlFor="mail">
                  MAIL
                </label>
                <input
                  type="text"
                  id="mail"
                  name="email"
                  className="username-input-field"
                  value={email}
                  onChange={this.handleInput}
                  placeholder="Enter mail"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="number">
                  PHONE NUMBER
                </label>
                <input
                  type="number"
                  id="number"
                  name="phone"
                  className="password-input-field"
                  value={phone}
                  onChange={this.handleInput}
                  placeholder="Phone Number"
                />
              </div>

              <div className="input-container">
                <label className="input-label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="password-input-field"
                  value={password}
                  onChange={this.handleInput}
                  placeholder="Password"
                />
              </div>

              <button type="submit" className="login-button">
                Register
              </button>
            </form>
          </div>
        )}
      </CartContext.Consumer>
    )
  }
}

export default Register
