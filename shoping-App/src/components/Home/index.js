import {Link} from 'react-router-dom'
import Header from '../Header'

import './index.css'
import Footer from '../Footer/footer'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-mobile-img"
        />
        <p className="home-description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="home-desktop-img"
      />
    </div>
    <div className="home-container">
      <img
        src="https://res.cloudinary.com/dfuaxymq1/image/upload/v1735464294/ecomm_irwplv.webp"
        alt="essentials"
        className="home-desktop-img-1"
      />
      <div className="home-content">
        <h1 className="home-heading-2">
          Transform Your Space, Define Your Style Accessories That Inspire!
        </h1>
        <img
          src="https://res.cloudinary.com/dfuaxymq1/image/upload/v1735464294/ecomm_irwplv.webp"
          alt="essentials"
          className="home-mobile-img"
        />
        <p className="home-description">
          Elevate your home with carefully curated décor that speaks to your
          unique taste. From stylish accents to functional essentials, our
          collection adds life and charm to every corner. Whether you're looking
          to refresh a room or create a whole new vibe, find the perfect pieces
          to express your personality. Shop now and let your space tell your
          story!
        </p>
        <Link to="/products">
          <button type="button" className="shop-now-button">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
    <Footer />
  </>
)

export default Home
