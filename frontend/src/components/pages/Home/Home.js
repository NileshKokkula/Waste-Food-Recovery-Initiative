import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Header from '../../inc/Header';
import HomeSlider from '../../inc/HomeSlider';
import {Link} from "react-router-dom";
import NgoStreet from "../../images/NgoStreet.jpg"
function Home(props) {
    let loc=useLocation();
    let [msg,setMsg]=useState();
    // useEffect(()=>
    // {
    //      setMsg(loc.state.fname);
    // //     console.log(loc);
    //      console.log("--"+loc.state.fname);
    // })
    
    return (
        <div  style={{backgroundColor:"#E0FFFF",paddingBottom:"100px"}}>
            <h1 style={{color:"black"}} className='justify-content-center text-center p-4'>Waste Food Recovery Initiative</h1>
            <HomeSlider></HomeSlider>
            <div className='container-fluid'>
                <div className='row justify-content-evenly bg-secondary'>
                    <div className='col-5 text-center align-self-center'>
                        <h1>Feed the Hungry Homeless People in India</h1>
                    </div>
                    <div className='col-5'>
                        <img src={NgoStreet} className='img-fluid'></img>
                    </div>
                </div>
            </div>
            {/* <Link to="/about"><h1>Go</h1></Link> */}
        </div>
    );
}

export default Home;