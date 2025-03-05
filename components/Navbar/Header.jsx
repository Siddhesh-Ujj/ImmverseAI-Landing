import React, { useEffect, useState } from "react";
import styles from "./navbar.module.css"
const Header = () => {
  const [selected, setSelected] = useState(1);
  useEffect(() => {
    console.log(selected, "selected")

    return () => {
    }
  }, [selected])

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">ImmverseAI</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className={`nav-link fs-6 pt-2 ${selected === 1 ? `${styles.activeNav} active` : ""}`} href="#" onClick={() => { setSelected(1) }}>Home</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-6 pt-2 ${selected === 2 ? `${styles.activeNav} active` : ""}`} href="#" onClick={() => { setSelected(2) }}>Company</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link fs-6 pt-2 ${selected === 3 ? `${styles.activeNav} active` : ""}`} href="#" onClick={() => { setSelected(3) }}>Features</a>
            </li>
          </ul>
          {/* <a className="btn btn-primary ms-3" href="#">Sign Up</a> */}
          <button className="get-button ms-2">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
