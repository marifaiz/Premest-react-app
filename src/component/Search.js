import React from 'react';
import BlogPost from './BlogPost';
import "../styles/Search.css";



class Search extends React.Component{
    render(){
        return(
            <div className="search">
                <input type="text"  placeholder="search for a post"></input>
                <button className="btn">Search</button>
                <BlogPost />
            </div>

        );
    }
}
export default Search;