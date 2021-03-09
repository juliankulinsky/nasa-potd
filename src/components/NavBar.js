import React from "react";
import { Link } from "react-router-dom";


export default function NavBar(){
    return (
        <div className="content-nav">
            <p>
                <h1 className="nav-link">
                    NASA - Picture Of The Day
                </h1>
                <h3 className="nav-link nav-link-h3">
                    API Service connected by ku11e
                </h3>
                
                <Link to="/" className="nav-link link button">Take Me Home</Link>
            </p>
        </div>
    )
}