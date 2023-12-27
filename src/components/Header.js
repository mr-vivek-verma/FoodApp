import {LOGO_URL} from "../utils/constants";
import {CART_LOGO} from "../utils/constants";

const Header = () => {
    return (
        <div className='header'>
        <div className='logo-container'>
            <img className='logo' src={LOGO_URL}/>
        </div>
        <div className='nav-items'>
          <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><img className='cart-logo' src={CART_LOGO}/></li>
          </ul>
        </div>
        </div>
    )
}

export default Header;