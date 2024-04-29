import {
  FaInstagram,
  FaFacebookSquare,
  FaTwitter,
  FaPinterestSquare,
} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <>
    <div className="footer-section">
      <div className="footer-logo-heading-section">
        <img
          src="https://res.cloudinary.com/tastykitchen/image/upload/v1633609791/Vectorfooter_1_ihgzvz.png"
          alt="website-footer-logo"
          className="footer-website-logo"
        />
        <h1 className="footer-heading">Tasty Kitchens</h1>
      </div>
      <p className="footer-description">
        The only thing we are serious about is food. <br /> Contact us on
      </p>

      <div className="footer-social-media-icons">
        <FaPinterestSquare
          className="footer-pinterest"
          testid="pintrest-social-icon"
        />
        <FaInstagram
          className="footer-instagram"
          testid="instagram-social-icon"
        />
        <FaTwitter className="footer-twitter" testid="twitter-social-icon" />
        <FaFacebookSquare
          className="footer-facebook"
          testid="facebook-social-icon"
        />
      </div>
    </div>
  </>
)
export default Footer
