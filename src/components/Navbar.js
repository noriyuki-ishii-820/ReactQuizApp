import React from "react";

const Navbar = () => {
    return ( 

        <div className="header">
            <nav className="bg-gray-800">
                 <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <h1 className="appTitle">Quiz App</h1>
                    </div>
                        <button className="github-btn">
                           <a href="https://github.com/noriyuki-ishii-820">GitHub</a>
                        </button>  
                    </div>
                  </div>
            </nav>
        </div> 




    )
}

export default Navbar;