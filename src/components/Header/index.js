import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import './index.css'

const Header = props => {
  const displayLogin = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <div className="desktop-header-elements">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
          />
        </Link>
        <ul className="list-element-header-container">
          <li className="list-element">
            <Link to="/" className="link-element">
              Home
            </Link>
          </li>
          <li className="list-element">
            <Link to="/jobs" className="link-element">
              Jobs
            </Link>
          </li>
        </ul>
        <button type="button" className="logout-button" onClick={displayLogin}>
          Logout
        </button>
      </div>
      {/* Mobile Header */}
      <div className="mobile-header">
        <div className="logo-container-for-mobile">
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              alt="website logo"
              className="logo-for-mobile"
            />
          </Link>
        </div>
        <div className="right-mobile-elements">
          <ul className="list-element-header-container">
            <li className="list-element">
              <Link to="/" className="link-element">
                <AiFillHome size={25} />
              </Link>
            </li>
            <li className="list-element">
              <Link to="/jobs" className="link-element">
                <BsFillBriefcaseFill size={25} />
              </Link>
            </li>
          </ul>
          <button type="button" className="logout-icon" onClick={displayLogin}>
            <FiLogOut size={25} />
          </button>
        </div>
      </div>
    </div>
  )
}
export default withRouter(Header)
