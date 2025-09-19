import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScroll = (id) => {
        const target = document.querySelector(id);
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth",
            });
        }
        setMenuOpen(false); // close menu after clicking
    };

    return (
        <header className="navbar">
            <div className="logo">
                <img src="logo-dark-bg.png" alt="Teqade Logo" style={{ height: "30px", marginRight: "10px" }} />
                <div className="teqade-logo"><i>TEQADE</i></div>
                <p><i> Delivering the future </i></p>
            </div>

            {/* Mobile menu button */}
            <div className="mobile-menu-btn">
                <i className="fas fa-bars"></i>
            </div>

            {/* Navigation menu */}
            <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <ul className="menu">
                    <li><a onClick={() => handleScroll("#home")}>Home</a></li>
                    <li><a onClick={() => handleScroll("#expertise")}>Our Expertise</a></li>
                    <li><a onClick={() => handleScroll("#about")}>About</a></li>
                    <li><a onClick={() => handleScroll("#contact")}>Contact Us</a></li>
                </ul>
            </nav>
        </header>
    );
}
