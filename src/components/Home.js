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

        <a href="/productlist" className="thing">Discover Our products </a>
        </div>
      </header>

    </div>
  )
}

export default Home;