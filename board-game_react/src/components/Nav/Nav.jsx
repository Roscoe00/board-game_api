import "./Nav.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Home } from "../../assets/images/home-icon.svg"
import { ReactComponent as List } from "../../assets/images/list-icon.svg"
import { ReactComponent as Plus } from "../../assets/images/plus-icon.svg"

const Nav = () => {
   return (
      <div className="nav">
         <Link to="/">
            <Home className="nav-menu__icon" />
         </Link>

         <Link to="/boardgames">
            <List className="nav-menu__icon" />
         </Link>

         <Link to="/new-boardgame">
            <Plus className="nav-menu__icon" />
         </Link>
      </div>
   )
}

export default Nav