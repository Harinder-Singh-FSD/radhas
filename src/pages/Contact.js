import React from "react";
import "./Contact.css"

const Contact = () => {
    return (
        <section id="contact" style={{marginTop:"5%"}}>
       <div class="container" >
           <h3 class="text-center text-uppercase" style={{color:"gray"}}>GET IN TOUCH WITH US</h3>
         
           <div class="row">
             <div class="col-sm-12 col-md-6 col-lg-4 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true" style={{color:"#E986F2"}}></i>
                    <h4 class="text-uppercase mb-5" style={{color:"gray"}}>call us</h4>
                  
                  <div style={{display:"flex",flexDirection:"column",justifyContent:"center"}} >
                  <p>Mrs. Aradhana (RadhaRupa) Taank</p>
                  <a href="+4407973179833">+44 07973 179833</a>
                  <a href="+4407308468019">+44 07308 648019</a>
                  </div>
                  </div>
                </div>
             </div>
             <div class="col-sm-12 col-md-6 col-lg-4 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-map-marker fa-5x mb-3" aria-hidden="true" style={{color:"#57CDEE"}}></i>
                    <h4 class="text-uppercase mb-5" style={{color:"gray"}}>location</h4>
                   <address>Stanmore, UK</address>
                  </div>
                </div>
             </div>
  
             <div class="col-sm-12 col-md-6 col-lg-4 my-5">
               <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true" style={{color:"#E986F2"}}></i>
                  <h4 class="text-uppercase mb-5" style={{ color: "gray" }}>
                    email
                    </h4>
                    <a href="ataank108@gmail.com">Ataank108@gmail.com</a>
                  </div>
                </div>
             </div>
           </div>
       </div>
    </section>
    )
}

export default Contact