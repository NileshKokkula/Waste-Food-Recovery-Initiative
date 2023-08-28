import React from 'react';
import Ngo1 from "../images/ngo1.jpeg"
import Ngochild from "../images/ngochild1.jpg"
import Ngodog from "../images/ngodog.jpg"
import Ssi from "../images/ssi.jpg"
import dogeating from "../images/dogeating.jpg";
import kidseating from "../images/kidseating.jpg";
function  HomeSlider() {
    return (
        <>
        <center>
        <div id="carouselExampleCaptions" class="carousel slide" style={{height:"100ex",width:"70rem"}}>
   <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={Ngochild} class="d-block w-100" alt="..." style={{height:"45rem"}}/>  
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={Ngo1} class="d-block w-100 " alt="..." style={{height:"45rem"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={dogeating} class="d-block w-100" alt="..." style={{height:"45rem"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={kidseating} class="d-block w-100" alt="..." style={{height:"45rem"}}/>
      <div class="carousel-caption d-none d-md-block">
        <h5></h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</center>
<div class="container-fluid">
<div class="row justify-content-center align-items-center">
<div class="col-1">
</div>
<div class="col-9">
<p>An impactful food donation initiative that unites the heart of the community to combat hunger. Join us in making a difference by supporting this powerful partnership.
  We recognize the strength of unity in addressing pressing social issues. This food donation drive aims to bridge the gap between surplus food from small-scale industries and the essential 
  needs of NGOs dedicated to supporting underprivileged communities. Together, we can minimize food waste and maximize the impact of donations.</p>
  <p><b>NGO Collaboration:</b> We have teamed up with local NGOs that have a deep understanding of the needs in our community. Your donations will be directly channeled to those who need it most.<br></br>   
  <b>Small-Scale Industry Support:</b>Small-scale industries play a crucial role by contributing surplus, quality food items. By redirecting excess resources, we can make a significant difference.</p> 
</div>
<div class="col-1"></div> 
</div>
  
</div>
</>

    );
}

export default  HomeSlider;