import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = ({component: Component, isLoggedIn, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

export default ProtectedRoute
