import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './component/Navbar';
import Search from './component/Search';

 


function Rootcomponent(){
    return(
        <div>
           <Navbar />
           <Search />
        </div>
    );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Rootcomponent/>, rootElement);