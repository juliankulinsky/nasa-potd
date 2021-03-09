import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Link className="landing" to="/nasaphoto">See into the stars &rarr;</Link>
        </div>
    );
}