import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Sidebarmenu.css"
const SidebarMenu = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="bg-dark col-auto col-md-2 min-vh-100 d flex justify-content-between flex-column">
          <hr/>
          <ul class="nav nav-pills flex-column">
            <li class="nav-item text-white fs-4 my-1">
              <a href="/" className="nav-link text-white fs-5" aria-current="page">
              <i className="bi bi-arrows-move"></i>
              <span  className="ms-3 d-none d-sm-inline">
                Profile</span>
              </a>
              <hr/>
            </li> 
            <li class="nav-item text-white fs-4 my-1">
              <a href='/analytics' className="nav-link text-white fs-5" aria-current="page">
              <i className="bi bi-bar-chart-fill"></i>
              <span className="ms-3 d-none d-sm-inline">
                Analytics</span>
              </a>
              <hr/>
            </li> 
            <li class="nav-item text-white fs-4 my-1">
              <a href='/repoort' className="nav-link text-white fs-5" aria-current="page">
              <i className="bi bi-pie-chart"></i>
              <span className="ms-3 d-none d-sm-inline">
              Report</span>
              </a>
              <hr/>
            </li> 
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
