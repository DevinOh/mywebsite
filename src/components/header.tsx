// src/components/header.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
    return( 
        <header className="header">
            <nav className="navbar">
                <ul className="menu">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li> 
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul> 
            </nav>
        <header/>
    );
};