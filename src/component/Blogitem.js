import React from 'react';
import "../styles/Blogitem.css";


function Blogitem(){
        return(
             <table className="main-item">
                 <tbody>
                     <tr>
                        <td className="blog-image">
                            <img src="books.png" alt="blogpic"></img>
                        </td>
                        <td>
                        
                            <h2>Blog feed</h2>
                            <p>Nesciunt voluptatem magnam cupiditate eipsum praesentium non non. Sunt ullam voluptas<p>et praesentium rem. Non id molestiaeVoluptas voluptatum tempora voluptas.</p><p> Blanditiis ut accusantium qui nam. Quas omnis reprehenderit quasi est. 
                            </p><p>Distinctio commodi qui sit dolore modi maxime.Sequi suntillo fugit ea facilis voluptas ea fugit.</p> <p>Suntvoluptatum laboriosam quis et. Doloremque aliquid iusto cupiditate quo qui...<a href="#read more">read more</a></p> </p>
                             <p class="blog-footer">
                             <span class="blog-date"><i>update by Lukman</i> <i> On Monday, 07 september, 2020</i></span>
                             <span class="blog-like"><i><button>like</button></i> 10K likes</span>
                             </p>
                        </td> 
                     </tr>
                       
                 </tbody>
             </table>
        );
}
export default Blogitem