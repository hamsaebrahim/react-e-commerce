import React from "react"
export default function Contact(){

    const [formData,setFormData] = React.useState({
       email : "" , 
       name :"" , 
       subject : "" , 
       message : ""
    })

    const [formError , setformError] = React.useState("")
    const [isvalidation , setisvalidation] = React.useState(false)


    function handleChange(event){
   
     
       setFormData({...formData , [event.target.name]: event.target.value})
       handleValidation()

       
    }

  


    function handleValidation(){
        let err = ""

        if (formData.email === ""){
            err = "e-mail is required"
        }else{
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            if(!regex.test(formData.email) ){
                err = "e-mail is invalid"
            }
        }

      

        setformError(err)
        if (Object.keys(err).length < 1){
            setisvalidation(true)
            alert(`thanks: ${formData.name}`) 
         }
         console.log(Object.keys(err))
        return false
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleValidation()
        console.log(formData)
      }
    return(
    <>
    <div className="container-fluid our-brands p-5">
        <h1 className='black-h1'>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod Lorem ipsum dolor sit amet</p> 
    </div>
     <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d110446.32175262956!2d31.303827470864732!3d30.11000432187584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x14581668f3a8f0d1%3A0x7a13524c7c458906!2s496F%2B2G5%2C%20El-Nasr%20Rd%2C%20Sheraton%20Al%20Matar%2C%20El%20Nozha%2C%20Cairo%20Governorate%204475001!3m2!1d30.110022899999997!2d31.373867699999998!5e0!3m2!1sen!2seg!4v1674994186819!5m2!1sen!2seg" width="100%"  height="200px" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="1"></iframe>
    <div >
    <form className="container p-5 text-start"  onSubmit={handleSubmit}>
    <div className="row ">
     <div className="col-1"></div>   
     <div className="mb-3 col-sm-5 ">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input 
     type="email"
     name="email"
     className="form-control" 
     id="exampleInputEmail1"
     aria-describedby="emailHelp"
     onChange={handleChange}

     placeholder="Email"/>
     <h6>{formError}</h6>
    </div>

     <div className="mb-3 col-sm-5">
    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
    <input type="text"
     className="form-control"  
     placeholder="Name"
    name="name"
    onChange={handleChange}

     id="exampleInputPassword1"/>
  
    </div>
    <div className="col-1"></div>   

    </div>
     
     <div className="row">
     <div className="col-1"></div>
     <div className="col-sm-10 mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
    <input type="text"
    placeholder="Subject"
     className="form-control" 
     name="subject"
     onChange={handleChange}

     id="exampleInputPassword1"/>
     
     </div>
     <div className="col-1"></div>   
     </div>
     <div className="row">
     <div className="col-1"></div>
     <div className="col-sm-10 mb-3">
     <label htmlFor="exampleInputPassword1" className="form-label ">Message</label>
    
      <textarea cols="30" rows="7"   
      placeholder="Message"
      className="form-control" 
      name="message"
      onChange={handleChange}
      id="exampleInputPassword1" ></textarea>
     </div>
     <div className="col-1"></div>   
     </div>
     
   <div className="row">
    <div className="col-9"></div>
     <button className="green-button float-end col-sm-2 ">Let's talk</button>
     </div>
   </form>
    </div>
    </>
    )
}


