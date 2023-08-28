import React from 'react';

function Footer(props) {
    return (
        <>
        <div style={{marginTop:"-10px"}}>
<footer class="bg-dark text-center text-white">
  <div class="container p-4">
   {/* <a href='/contact'>Contact Us</a> */}
   <div>
           {/* <h1>Contact Us</h1> */}
        <div className='container'>
          <div className='row justify-content-evenly m-2 mb-5'>
           <div className='col' id="contact"  >
            <div class="container-fluid bg-grey">
  <h2 className="text-center pb-4" >CONTACT US</h2>
  <div class="row ">
    <div class="col">
      <h6>Contact us and we'll get back to you within 24 hours.</h6>
      <h6><span class="glyphicon glyphicon-map-marker"></span> Patna ,INDIA</h6>
      <h6><span class="glyphicon glyphicon-phone"></span>+9199999999</h6>
      <h6><span class="glyphicon glyphicon-envelope"></span> cdacpatn@fwms.com</h6>
    </div>
     </div>
</div> 
        </div>
        <div className='col'>
        <div id="aboutus" ><h2 className='pb-4'>About Us<br/></h2>
   <h6>Food waste management is the process through which food and other agricultural products are 
      recovered or redirected for human consumption, animal feed, 
      industrial uses, or environmental benefits.</h6>
      </div>
        </div>
        </div>
        </div>
        </div>
    <section class="mb-4">
      <p>
      Food waste management is the process through which food and other agricultural products are 
      recovered or redirected for human consumption, animal feed, 
      industrial uses, or environmental benefits.
      </p>
    </section>
  </div>
  
  <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
    © WFRI:
    <a class="text-white" href="https://mdbootstrap.com/">WFRI.com</a>
  </div>
  
</footer>
            
        </div>
        </>
    );
}

export default Footer;