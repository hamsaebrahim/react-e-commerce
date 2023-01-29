import brand1 from "../img/brand_01.png"
import brand2 from "../img/brand_02.png"
import brand3 from "../img/brand_03.png"
import brand4 from "../img/brand_04.png"


export default function Brand(){
    return(
        <div className='container-fluid our-brands p-5'>
        <div className='container'>
        <h1 className='black-h1'>Our brands</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod Lorem ipsum dolor sit amet</p>

            <img src={brand1} alt="." className='brand' />
            <img src={brand2} alt="." className='brand' />
            <img src={brand3} alt="." className='brand' />
            <img src={brand4} alt="." className='brand' />
        </div>
        </div>
    )
}