import React from 'react';
import '../homeStyle.css';
import {Link} from 'react-router-dom';

const Home = (props) => {
  return (
    <div>
      <header className="primary body header ">
        <div className="textbox">
        <h1>
          <span className="stuff">Mustral General Traders Limited</span> 
        </h1>
         <Link to='/ProductList'>
            
        <button className="thing">Discover Our products >
                 
                </button> </Link>
        </div>
      </header>

    </div>
  )
}

export default Home;