import * as React from "react"

const BottomNav = () => (
  <nav className="fixed-bottom d-md-none bg-white border-top shadow-lg px-3 py-2">
    <ul className="nav nav-pills nav-fill mb-0">
      <li className="nav-item">
        <a className="nav-link" href="#near">
          <i className="bi bi-geo-alt fs-4"></i>
          <span className="d-block small">Near Me</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#profile">
          <i className="bi bi-person fs-4"></i>
          <span className="d-block small">Profile</span>
        </a>
      </li>
       <li className="nav-item">
        <a className="nav-link" href="#register">
          <i className="bi bi-plus-circle fs-4"></i>
          <span className="d-block small">Register Shoot</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default BottomNav;
