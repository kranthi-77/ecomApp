import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import CartContext from './context/CartContext'
import Footer from './components/Footer/footer'
import './App.css'
import Register from './components/RegisterForm'

class App extends Component {
  state = {
    cartList: [],
    isLoggedIn: false,
    token: localStorage.getItem('token'),
  }

  // tackling the logout functionality
  LogoutUser = () => {
    this.setState({token: ''})
    return localStorage.removeItem('token')
  }

  storeTokenInLS = serverToken => {
    this.setState({token: serverToken})
    return localStorage.setItem('token', serverToken)
  }

  isLoggedIn = () => {
    const {token} = this.state
    return !!token // Returns true if the token exists, otherwise false
  }

  userAuthentication = async () => {
    const {token} = this.state
    try {
      // setIsLoading(true);
      const response = await fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        console.log('user data ', data.userData)
        // setUser(data.userData);
        // setIsLoading(false);
      } else {
        console.error('Error fetching user data')
        // setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching user data')
    }
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
    toast.info('All items removed from cart!')
  }

  incrementCartItemQuantity = id => {
    this.setState(prevState => ({
      cartList: prevState.cartList.map(eachCartItem => {
        if (id === eachCartItem.id) {
          const updatedQuantity = eachCartItem.quantity + 1
          return {...eachCartItem, quantity: updatedQuantity}
        }
        return eachCartItem
      }),
    }))
  }

  decrementCartItemQuantity = id => {
    const {cartList} = this.state
    const productObject = cartList.find(eachCartItem => eachCartItem.id === id)
    if (productObject.quantity > 1) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity - 1
            return {...eachCartItem, quantity: updatedQuantity}
          }
          return eachCartItem
        }),
      }))
    } else {
      this.removeCartItem(id)
    }
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )

    this.setState({cartList: updatedCartList})
    toast.info('Item removed from cart!')
  }

  addCartItem = product => {
    const {cartList} = this.state
    const productObject = cartList.find(
      eachCartItem => eachCartItem.id === product.id,
    )

    if (productObject) {
      this.setState(prevState => ({
        cartList: prevState.cartList.map(eachCartItem => {
          if (productObject.id === eachCartItem.id) {
            const updatedQuantity = eachCartItem.quantity + product.quantity

            return {...eachCartItem, quantity: updatedQuantity}
          }

          return eachCartItem
        }),
      }))
      toast.success('Item quantity updated in cart!')
    } else {
      const updatedCartList = [...cartList, product]

      this.setState({cartList: updatedCartList})
      toast.success('Item added to cart!')
    }
  }

  render() {
    const {cartList, token} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          token,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          incrementCartItemQuantity: this.incrementCartItemQuantity,
          decrementCartItemQuantity: this.decrementCartItemQuantity,
          removeAllCartItems: this.removeAllCartItems,
          userAuthentication: this.userAuthentication,
          storeTokenInLS: this.storeTokenInLS,
          isLoggedIn: this.isLoggedIn,
          LogoutUser: this.LogoutUser,
        }}
      >
        <div>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            bodyClassName="toastBody"
          />
          <Switch>
            <Route
              exact
              path="/login"
              render={props =>
                this.isLoggedIn() ? (
                  <Redirect to="/" />
                ) : (
                  <LoginForm {...props} />
                )
              }
            />
            <Route
              exact
              path="/register"
              render={props =>
                this.isLoggedIn() ? (
                  <Redirect to="/" />
                ) : (
                  <Register {...props} />
                )
              }
            />
            <ProtectedRoute
              exact
              path="/"
              component={Home}
              isLoggedIn={this.isLoggedIn}
            />
            <ProtectedRoute
              exact
              path="/products"
              component={Products}
              isLoggedIn={this.isLoggedIn}
            />
            <ProtectedRoute
              exact
              path="/products/:id"
              component={ProductItemDetails}
              isLoggedIn={this.isLoggedIn}
            />
            <ProtectedRoute
              exact
              path="/footer"
              component={Footer}
              isLoggedIn={this.isLoggedIn}
            />
            <ProtectedRoute
              exact
              path="/cart"
              component={Cart}
              isLoggedIn={this.isLoggedIn}
            />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </div>
      </CartContext.Provider>
    )
  }
}

export default App
