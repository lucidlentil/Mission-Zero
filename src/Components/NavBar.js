import React from 'react'; 

import '../Styles/NavBar.css'

export default function Navbar() {
    return (
        <div className="nav">
            <div className="nav-left">
                <img id="navbar-image" src="" alt="company logo"></img>
                Company name
            </div>
            <div className="nav-right">
                <div className="nav-links">
                    <ul>
                        <li>
                            Item 1
                        </li>
                        <li>
                            Item 2
                        </li>
                        <li>
                            Item 3
                        </li>
                    </ul>
                </div>
                    <button>
                        Login
                    </button>
            </div>
        </div>
    )
}