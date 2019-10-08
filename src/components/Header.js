import React from 'react'
import {Link} from 'react-router-dom'
import SearchHeader from './SearchHeader'

function Header(){
    return(
        <div className="row mb-2">
            <div className="col">
                <nav className="navbar navbar-dark bg-primary navbar-expand">
                    <span className="navbar-brand mb-0 h1">Cocktail App</span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/list/a" className="nav-link">Liste</Link>
                            </li>
                        </ul>
                        <SearchHeader />
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;