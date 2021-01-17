import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <div>
            <Link to="/"> Sign IN </Link>
            <Link to="/page1"> Page 1 </Link>
            <Link to="page2"> pahge 2 </Link>

        </div>
    )
}

export default NavBar
