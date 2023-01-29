
// import { Route, Routes } from 'react-router-dom'

import Slider from './component/Slider';
import Categories from './component/Categories';
import CtgrsData from "./CtgrsData"
import FeaturedProduct from './component/FeaturedProduct';
import HomeCardsData from './HomeCardsData'

function Home() {

    let categories = CtgrsData.map((ctgrsinfo)=>{
        return(
            <Categories  key={ctgrsinfo.id} ctgrsinfo={ctgrsinfo} />
        )
    })
 
    let Products =  HomeCardsData.map((productsinfo,key)=>{
        return(
           <FeaturedProduct key={key}  productsinfo={productsinfo}  />
        )
    })

    
  return (
    <div>
      <Slider/>
      <div className="container pt-5 pb-5">
          <h1 className="black-h1 mt-5">Categories of The Month</h1>
          <p className="lead mb-5">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt <br/> mollit anim id est laborum.</p>
          <div className="row">
          {categories}
          </div>
      </div>
      <div className="container-fluid pt-5 pb-5 cards-home-section">
          <h1 className="black-h1 mt-5">Featured Product</h1>
          <p className="lead mb-5">Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br/> Excepteur sint occaecat cupidatat non proident.</p>
       
       <div className='container'>
          <div className="row">
           {Products}
          </div>
        </div>
      </div>


   
    </div>
  );
}

export default Home;
