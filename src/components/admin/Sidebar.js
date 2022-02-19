import React from "react";
import "../../styles/admin/Sidebar.css"
import { Link } from "react-router-dom";
const Sidebar = () =>{
    return(
        <div className="sidebar-container">
            <li className="sidebar-item">Notizie</li>
            <li className="sidebar-item">Crypto</li>
            <Link to="/admin-messages"style={{textDecoration:"none"}}>
            <li className="sidebar-item">Messaggi</li>
            </Link>
        </div>
    )
}

export default Sidebar