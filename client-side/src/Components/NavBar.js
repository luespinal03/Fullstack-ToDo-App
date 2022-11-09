import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/todo-form">ToDo Form</Link>
        </div>
    )
}

export default NavBar