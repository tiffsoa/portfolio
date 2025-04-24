import "./Navbar.css";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a id="logo" href="#" className="logo">
          Tiffany Soa A.
        </a>
        <HashLink smooth to="#about">
          about
        </HashLink>
        {/* <a href="#about">about</a> */}
        <HashLink smooth to="#experience">
          experience
        </HashLink>
        {/* <a href="#experience">experience</a> */}
        <HashLink smooth to="#projects">
          projects
        </HashLink>
        {/* <a href="#projects">projects</a> */}
      </div>
      <div className="navbar-right">
        <HashLink smooth to="#contact">
          contact
        </HashLink>
        {/* <a href="#contact">contact</a> */}
      </div>
    </nav>
  );
}

export default Navbar;
