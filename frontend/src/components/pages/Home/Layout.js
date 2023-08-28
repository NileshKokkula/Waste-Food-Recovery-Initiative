import React from 'react';
import { Outlet } from 'react-router';
import Header from '../../inc/Header';
import Footer from '../../inc/Footer';
function Layout() {
    return (
        <div>
            {/* <a href='#aboutus'>Click</a> */}
            <Header></Header>
            
            <div>
                <Outlet></Outlet>
    
    {/* <div id="aboutus" style={{backgroundColor:"pink"}}><h2 style={{color:"blue"}}>About Us<br/></h2>
   <h6>Food waste management is the process through which food and other agricultural products are 
      recovered or redirected for human consumption, animal feed, 
      industrial uses, or environmental benefits.</h6>
      </div> */}
            </div>
            <Footer></Footer> 
            
        </div>
    );
}

export default Layout;