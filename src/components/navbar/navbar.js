import React, {Component} from 'react';
import './navbar.css';



 class navbar extends Component{
 render(){
     return(
         
         <div >

        <ul className="nav-bar" >

        <li><a>HOME</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>OCCASIONS</a></li>
        <li><a>ORDER</a></li>

        </ul>
         </div>
     )
 }
}


export default navbar;