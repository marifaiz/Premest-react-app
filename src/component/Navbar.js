import React from 'react';
import "../styles/Navbar.css";


function Navbar (){
    return(
         <table className="navbar">
             <tbody>
                 <tr>
                     <td>
                         <img src="books.png"  alt="logo"></img>
                     </td>
                     <td>
                        <h2><b>My Blog</b></h2> 
                     </td>
                     <td className="list">
                     <ul>
                         <li>Login</li>
                         <li>Blog</li>
                         <li>Contact us</li>
                     </ul>
                     </td>
                 </tr>
             </tbody>
         </table>
    );
}
export default Navbar
