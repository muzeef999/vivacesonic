import Image from "next/image";
import logo from "@/asserts/logo.png"

const NavbarComponent = () => {
  return (
    <nav className="navbar navbar-expand-lg  py-3" >
      <div className="container">
        <div style={{width:'5%'}}>
          <Image src ={logo} alt="logo" layout="responsive" priority />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#solutions">Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clients">Clients</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;