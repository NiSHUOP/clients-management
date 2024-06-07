import { useEffect, useState } from "react"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
    const [activeTab, setActiveTab] = useState("Home");
    const location = useLocation();

    useEffect(() => {
        if(location.pathname === "/"){
            setActiveTab("Home")
        }else if(location.pathname === "/about"){
            setActiveTab("About")
        }
        else if(location.pathname === "/add"){
            setActiveTab("Add")
        }
    },[location]);
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container">
                    <p className="navbar-brand"><Link className="navbar-brand" to="/">Client Manage</Link></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/"><p className={`${activeTab === "Home" ? "active" : ""}`}
                                    onClick={() => setActiveTab("Home")}>Home</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><p className={`${activeTab === "About" ? "active" : ""}`}
                                    onClick={() => setActiveTab("About")}>About</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " to="/add">
                                    <button className={`${activeTab === "Add" ? "active" : ""}`}
                                        onClick={() => setActiveTab("Add")} id="add">Add Data</button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header