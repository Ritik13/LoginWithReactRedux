import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <Link to="/"> <p>Sign IN </p></Link>
            <Link to="/page1"> <p>Page 1</p> </Link>
            <Link to="page2"> <p>Page 2 </p></Link>

        </div>
    )
}

export default NavBar
