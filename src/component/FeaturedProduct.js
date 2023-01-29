
import Rating from '@mui/material/Rating';


export default function FeaturedProduct(props){
  

    return(
        <div className="card mb-5 m-lg-5">
        <img className="card-img-top" src= {`/homeCard/${props.productsinfo.img}`}  alt="C"/>
        <div className="card-body">
        <div><span>
              <Rating name="read-only" value={props.productsinfo.stars} readOnly />
              <span className='gray-text float-end'>${props.productsinfo.price}</span>
            </span>
            </div>
          <h5 className="card-title">{props.productsinfo.tittle} </h5>
          <p className="card-text">{props.productsinfo.desc}</p>
          <p className='gray-text' >Reviews ({props.productsinfo.reviews})</p>
        </div>
      </div>
    )
}