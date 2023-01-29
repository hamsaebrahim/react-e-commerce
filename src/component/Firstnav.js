import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Firstnav(){

    return(
        <nav className="firstNav">
           <div>
          <FontAwesomeIcon icon="envelope" />
          <span>info@company.com</span>
          <FontAwesomeIcon icon="phone" />
          <span>010-010-010</span>
           </div>

          <ul> 
            <li> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
            <li><a rel="noopener noreferrer" target="_blank" href="https://instagram.com"> <FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
          </ul>
    
        </nav>
    )
}