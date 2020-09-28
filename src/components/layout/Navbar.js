import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import SearchModal from './SearchModal'

class Navbar extends Component {
    render() {
        return (
            <nav id="mainNav" className="navbar navbar-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Кінопошук
                    </NavLink>
                    <SearchModal />
                </div>
            </nav>
        )
    }
}



export default Navbar
