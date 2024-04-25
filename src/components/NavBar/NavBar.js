import "./NavBar.css"
import House from '../../assets/house.png';
import { Link } from "react-router-dom"

export default function NavBar(){
    return (
    <Link to="/" >
        <nav>
            <img className="logo-house" src={House} alt="house icon" />
            <h1>Housemate Hunter</h1>
        </nav>
    </Link>
    )
}
