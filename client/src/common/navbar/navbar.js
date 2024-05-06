import {Link} from "react-router-dom"

function Navbar(){
    return (
        <div className="navbar-container">
            <Link to="/">Homepage</Link>
            <Link to="/history">History</Link>
            <Link to="/image-generator">ImageGenerator</Link >
        </div>
    );
}

export default Navbar;  