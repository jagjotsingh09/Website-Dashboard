import React from 'react'
import './styles.css'
import img from '/Users/jagjotsingh/Desktop/CGI Project Docs/Dashboard-CGI/dashboard/my-dashboard/src/img/CGI-logo.jpg'
export const Navbar = () => {
    return (
            <nav class="bar-color1 navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3">
                <div class="flex-row d-flex">
                    <img style={{height: '40px'}} class="navbar-brand" src={img} alt=""/>
                    <a class="navbar-brand" href="#" >Confederation of Global Innovators</a>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse" id="collapsingNavbar">
                    {/* <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">Home</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="//www.codeply.com">Link</a>
                        </li>
                    </ul> */}
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a style={{color:'white'}} class="nav-link" href="#myAlert" data-toggle="collapse">Services</a>
                        </li>
                        <li class="nav-item">
                            <a style={{color:'white'}} class="nav-link" href="" data-target="#myModal" data-toggle="modal">Home</a>
                        </li>
                        {/* <li class="nav-item">
                  <a class="nav-link waves-effect waves-light text-white">
                    <i class="fab fa-google-plus-g"></i>
                  </a>
                </li> */}
                <li class="nav-item">
                    <a class="nav-link waves-effect waves-light text-white">
                        <i class="fas fa-envelope-open-text"></i>
                    </a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link waves-effect waves-light text-white">
                          <i class="fas fa-align-justify"></i>
                      </a>
                    </li>
                    </ul>
                </div>
       </nav>
    )
}
export default Navbar;