import  React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import{ Link } from 'react-router-dom'
import CtgrsData from "../CtgrsData"
import Ctgrlink from "./Ctgrlink";





export default function Footer(props){



    let categories = CtgrsData.map((ctgrsinfo)=>{
        return(
            <Ctgrlink  key={ctgrsinfo.id} ctgrsinfo={ctgrsinfo} />
        )
      })

      const [formData, setFormData] = React.useState("")
      const [formError , setformError] = React.useState("")
      const [isvalidation , setisvalidation] = React.useState(false)


      const  handlevalidation = () =>{
        let err = ""

        if (formData === ""){
            err = "e-mail is required"
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData) ){
                err = "e-mail is invalid"
            }
        }
      

        setformError(err)
        if (Object.keys(err).length < 1){
            setisvalidation(true)
            alert(`The mail you entered was: ${formData}`) 
         }
         console.log(Object.keys(err))
        return false
      }
   
      const handleSubmit = (event) => {
        event.preventDefault();
        handlevalidation()
      }

    return(
<>
<div className="first-footer container-fluid">
    <div className="container ">
        <div className="row text-start border-bottom border-light ">
            <div className="col-md-4 p-5">
                <h2 className="border-bottom border-light h-logo pb-4 pt-4 mb-3">Zay Shop</h2> 
        <h6 className="w-200 mb-3"><FontAwesomeIcon icon="map-pin" className="footer-icon" />  123 Consectetur at ligula 10660</h6>    
        
        <h6 className="w-200 mb-3"><FontAwesomeIcon icon="phone" className="footer-icon" />
        <a href="/" className="green-hover">010-020-0340</a>
        </h6>  

         <h6 className="w-200 mb-3"><FontAwesomeIcon icon="envelope" className="footer-icon"/>
         <a href="/" className="green-hover">info@company.com</a>
        </h6> 
           
            </div>
            <div className="col-md-4 p-5">
                <h2 className="border-bottom border-light pb-4 pt-4 mb-3 w-200">Products</h2> 
                     { categories}
            </div>

            <div className="col-md-4 p-5">
                <h2 className="border-bottom border-light pb-4 pt-4 mb-3 w-200">Further Info</h2> 
                 <h6> <Link className='w-200 mb-3 green-hover' to="/">Home</Link> </h6>
                 <h6> <Link className='w-200 mb-3 green-hover' to="/">About</Link> </h6>
                  <h6><Link className='w-200 mb-3 green-hover' to="/">Shop</Link> </h6>
                  <h6> <Link className='w-200 mb-3 green-hover' to="/">contact</Link> </h6>
            </div>
        </div>
     
       <div className="row">

          <ul className="d-flex mt-3 col-lg-3  ">
            <li><div className="rounded-circle border border-light m-2 pt-1 pb-1 rounded-icon"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']}  /></a></div></li>
            <li><div className="rounded-circle border border-light m-2 pt-1 pb-1 rounded-icon "><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'facebook-f']}  /></a></div></li>
            <li><div className="rounded-circle border border-light m-2 pt-1 pb-1 rounded-icon"><a rel="noopener noreferrer" target="_blank" href="https://instagram.com"> <FontAwesomeIcon icon={['fab', 'instagram']} /></a></div></li>
        </ul>

        <div className="col-4"></div>
        <div className="col-lg-5 mt-4">
            <form>
                <input   
                type="email"
                placeholder="Email"
                onChange={(e)=>{setFormData(e.target.value)}}
                name="email"
                className="mail-input"
                value={formData.email} />
                <button onClick={handleSubmit}  className="submit-input">submit</button>

            </form>
            <h6 className="scs-msg">{formError}</h6>

        </div>
       </div>
    </div>
</div>
<div className="second-footer">
   <h5 className="w-200">copy right  © 2023 by Hamsa</h5>
</div>
</>
)}   