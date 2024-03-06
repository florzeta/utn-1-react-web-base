import React from "react";
import "../styles/components/layout/Header.css"
const Header = (props) => {
    return (
        <div className="holder">
            <img src=".\ReactApp-logo-nb.png" width="250" alt='ReactApp' />
            <h1>Bienvenidos!</h1>
        </div>
    );
}

export default Header;
