import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  const imgTesDelSur = "https://github.com/MarianoTalavera/React-Preentrega-1-Talavera/blob/main/public/logo0112.png?raw=true";
  return (
    <header>
        <Link to={"/"}>
          <img className="imgTesDelSur" src={imgTesDelSur} alt="" />
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to={"/categoria/2"}> Tés oscuros </NavLink>
                </li>

                <li>
                  <NavLink to={"/categoria/3"}> Tés claros </NavLink>
                </li>
            </ul>
        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar