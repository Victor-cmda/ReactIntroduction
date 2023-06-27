import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = props => (
    <div className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Sobre</Link>
                </li>
            </ul>
        </nav>
    </div>
)

export default Menu