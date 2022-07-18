import React from "react";
import { NavLink } from "react-router-dom"

class Dashboard extends React.Component {

    
    render(){
        return (
            <>
            <aside className="w-1/6 bg-white h-screen">
            <ul className="">
                 <NavLink activeclassname="active" exact="true" to="/">
                    <li className="px-5 py-4">
                    <i className=" mr-1 fa-solid fa-house"></i>Home
                    </li>
                 </NavLink>

                 <NavLink activeclassname="active" to="/articles">
                    <li className="px-5 py-4">
                    <i className=" mr-1 fa-solid fa-a"></i>Articles
                    </li>
                 </NavLink>

                 <NavLink activeclassname="active" to="/people">
                    <li className="px-5 py-4">
                    <i className=" mr-1 fa-solid fa-user-group"></i>People
                    </li>
                 </NavLink>
            
                 <NavLink activeclassname="active" to="/books">
                     <li className="px-5 py-4">
                        <i className=" mr-1 fa-solid fa-book"></i>Books
                     </li>
                 </NavLink>
  
                 <NavLink activeclassname="active" to="/help">
                     <li className="px-5 py-4">
                     <i className=" mr-1 fa-solid fa-circle-info"></i>Help & Support
                     </li>
                 </NavLink>
            </ul> 
            </aside>
            </>

        )
    }
}

export default Dashboard;