import React from "react";
import "../styles/Header.css";

function Header() {
	return (
		<header className="header">
			<div className="logo">SmartAgriTrade</div>
			<nav className="nav-links">
				<a href="#home">Home</a>
				<a href="#services">Services</a>
				<a href="#predict">Predict</a>
				<a href="#about">About Us</a>
				<a href="#signup">Sign Up</a>
			</nav>
		</header>
	);
}

export default Header;
