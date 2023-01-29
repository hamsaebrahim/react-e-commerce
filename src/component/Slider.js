import React from "react";
import banner1 from '../img/banner_img_01.jpg'
import banner2 from '../img/banner_img_02.jpg'
import banner3 from '../img/banner_img_03.jpg'
import logo from '../img/apple-icon.png'

export default function Slider(){
 return(
<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={banner1} className="d-block img-slider" alt="..."/>
    <div className="content-slider">
      <h1 className="green-h1"> <img src={logo} alt="" /> eCommerce</h1>
      <h2 className="black-h2">Tiny and Perfect eCommerce Template</h2>
      <p>Zay Shop is an eCommerce HTML5 CSS template with latest version of Bootstrap 5 (beta 1). This template is 100% free provided by TemplateMo website. Image credits go to Freepik Stories, Unsplash and Icons 8</p>
    </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block img-slider" alt="..."/>
      <div className="content-slider">
      <h1 className="black-h1">Proident occaecat </h1>
      <h2 className="black-h2">Aliquip ex ea commodo consequat</h2>
      <p>You are permitted to use this Zay CSS template for your commercial websites. You are <strong> not permitted</strong> to re-distribute the template ZIP file in any kind of template collection websites.</p>
    </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block img-slider" alt="..."/>
      <div className="content-slider">
      <h1 className="black-h1"> Repr in voluptate</h1>
      <h2 className="black-h2">Ullamco laboris nisi ut</h2>
      <p>We bring you 100% free CSS templates for your websites. If you wish to support TemplateMo, please make a small contribution via PayPal or tell your friends about our website. Thank you.</p>
    </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}