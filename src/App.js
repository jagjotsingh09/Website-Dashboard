import React from 'react';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
 
function App(){
 
        return (
            <div>
              <h1>Hello World</h1>
                <Navbar/>
                <div class="container-fluid" id="main">
                  <div class="row row-offcanvas row-offcanvas-left">
                    <Sidebar/>
                    <Dashboard/>   
                  </div>
                </div>  
            </div>  
        );
    }
  
export default App;