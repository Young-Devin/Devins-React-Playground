import React from 'react'
import { Link } from 'react-router-dom'

function NavigationMenu(props){
    return(
        <div>
            <div className="font-bold py-3">
                Devin's React Project
            </div>
            <ul>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        Gallery
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/student" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Students
                    </Link>
                </li>
{/*                 <li>
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        Products
                    </Link>
                </li> */}
            </ul>
        </div>
    )
}

export default NavigationMenu