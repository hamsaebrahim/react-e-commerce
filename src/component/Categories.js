import React from "react";


export default function Categories(props){
 

    return(
    
        <>
         <div className="col-3  m-auto">
            <div className="redius-img">
                <img src={`/categories/${props.ctgrsinfo.img}`}  alt=">" />
            </div>
            <h6 className="mb-4 mt-4 d-md-2">{props.ctgrsinfo.tittle}</h6>
            <button className="green-button">Go Shop</button>
           </div>
        </>
    )
}