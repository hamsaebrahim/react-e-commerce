import{ Link } from 'react-router-dom'



export default function Ctgrlink(props){
return(
    <h6 >
        <Link className='w-200 mb-3 green-hover' to={`/${props.ctgrsinfo.tittle}`}>  {props.ctgrsinfo.tittle}</Link>
      </h6>
)
}