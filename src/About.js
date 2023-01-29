import vector from './img/about-hero.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Brand from './component/brand'



export default function About(){
    return(
        <>
        <div className="container-fluid about-section p-5">
            <div className='container' > 
            <div className="row">
                <div className="col-md-7 text-start pt-5 mt-5 ps-5 ">
                     <h1 className='pt-5'>About us</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                </div>
                <div className="col-md-5"><img src={vector} alt="." /></div>
            </div>
            </div>
        </div>
        
        <div className='services container p-5'>
            <h1 className='black-h1'>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod Lorem ipsum dolor sit amet</p>

            <div className='row mt-5 mb-5'>
                <div className='col-lg-2 col-md-6  about-card pt-5 pb-4'>
                    <FontAwesomeIcon  icon="fa-truck" size='2x'/>
                    <h4>Delivery Services</h4>
                </div>
                <div className='col-lg-2 col-md-6  about-card pt-5 pb-4'>
                    <FontAwesomeIcon  icon="fa-right-left"  size='2x'/>
                    <h4>Shipping & Return</h4>
                </div>
                <div className='col-lg-2 col-md-6 about-card pt-5 pb-4'>
                    <FontAwesomeIcon  icon="fa-percent" size='2x' />
                    <h4>propmotion</h4>
                </div>
                <div className='col-lg-2 col-md-6 about-card pt-5 pb-4'>
                    <FontAwesomeIcon  icon="fa-user" size='2x'/>
                    <h4>24 Hours Service</h4>
                </div>
            </div>
        </div>
        
        

        <Brand/>

       </>
    )
}