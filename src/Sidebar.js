import React from 'react'
import './styles.css'

const Sidebar = () => {
    return (
         <div class="col-md-3 col-lg-2 sidebar sidebar-offcanvas pl-0 bar-color2" id="sidebar" role="navigation">
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link sidebar-color" href="#"><h5>Confederation of Global Innovators</h5></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-user font-weight-bold"></i> <span className="sidebar-color ml-3">Overview</span></a></li>
                <li class="nav-item mb-2">
                {/* <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="sidebar-color ml-3"> Reports</span></a> */}
                </li>
                {/* <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="sidebar-color ml-3">Analytics</span></a></li> */}
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold"></i><span className="sidebar-color ml-3">Export</span></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-tablet-alt font-weight-bold"></i><span className="sidebar-color ml-3">Snippets</span></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="fas fa-atom font-weight-bold"></i> <span className="sidebar-color ml-3">Gallery</span></a></li>
                <li class="nav-item mb-2 "><a class="nav-link text-secondary" href="#"><i class="far fa-folder font-weight-bold"></i> <span className="sidebar-color ml-3">Certificates</span></a></li>
                <li class="nav-item mb-2 "><a class="nav-link sidebar-color" href="#">Company</a></li>
                <li class="nav-item mb-2 "><a class="nav-link sidebar-color" href="#">Management</a></li>
            </ul>
       </div>
    )
}
 
export default Sidebar;