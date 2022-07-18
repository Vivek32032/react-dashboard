import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="home">
           <h1 className="m-5 mb-7 text-3xl">🚀 Welcome to Homepage!</h1>
           <div className="flex justify-evenly">
           <Link to="/articles">
              ARTICLE PAGE
           </Link>
           <Link to="/books">
              BOOKS PAGE
           </Link>
           <Link to="/pelple">
              PEOPLE PAGE
           </Link>
           </div>
        </div>   

    )
}

export default Home;