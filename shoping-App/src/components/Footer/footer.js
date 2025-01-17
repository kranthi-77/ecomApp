import './footer.css'
import {FaFacebook, FaYoutube, FaLinkedin, FaShopify} from 'react-icons/fa'
import {IoMdHome} from 'react-icons/io'
import {IoPersonCircleSharp, IoLocationOutline} from 'react-icons/io5'

const Footer = () => {
  const img1 = 'img.jpg'
  return (
    <div className="container">
      <div className="flex">
        <div className="box1">
          <div className="logo">
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="logo"
            />
          </div>
          <div className="content">
            <p>
              Welcome to Your Store Name, your one-stop destination for quality
              products at unbeatable prices. Enjoy seamless shopping. Unlock
              exclusive Prime deals and benefits available only to our valued
              Prime subscribers.
              <br />
              Shop smarter, live better!
            </p>
          </div>
          <div className="social">
            <div>
              <FaFacebook className="icons" />
            </div>
            <div>
              <FaLinkedin className="icons" />
            </div>
            <div>
              <FaYoutube className="icons" />
            </div>
          </div>
        </div>
        <div className="box2">
          <div className="links">
            <h3>Quick Links</h3>
            <p>
              <IoMdHome className="link-icon" />
              <span>Home</span>
            </p>
            <p>
              <FaShopify className="link-icon" />
              <span>Shop</span>
            </p>
            <p>
              <IoPersonCircleSharp className="link-icon" />
              <span>Login</span>
            </p>
          </div>
          <div className="others">
            <h3>Others</h3>
            <p>
              <span>FAQ</span>
            </p>
            <p>
              <span>Terms of use</span>
            </p>
            <p>
              <span>Privacy Policy</span>
            </p>
          </div>
          <div className="locate">
            <h3>Locate Us</h3>
            <p>
              <IoLocationOutline style={{color: 'rgba(0, 0, 128, 0.856)'}} />
              <span>
                A55. Phase 1, Pakora Stop, near Jamia Masjid Ahel Hadith,
                Qasimabad, Hyderabad.
              </span>
            </p>
            <p style={{color: 'rgba(0, 128, 0, 0.781)'}}>
              <i
                className="bx bxl-whatsapp"
                style={{color: 'rgba(0, 128, 0, 0.781)'}}
              ></i>
              <span>+92-344-342-1902</span>
            </p>
            <p>
              <span className="blue">We are always around the corner!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
