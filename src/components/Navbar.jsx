function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="#hero" className="logo">Tiffany Soa A.</a>
                <a href="#about">about</a>
                <a href="#experience">experience</a>
                <a href="#projects">projects</a>
            </div>
            <div className="navbar-right">
                <a href="#contact">contact</a>
            </div>
        </nav>
    );
}

export default Navbar;