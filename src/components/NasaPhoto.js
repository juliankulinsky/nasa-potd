import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

// const apiKey = process.env.REACT_APP_NASA_KEY

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=0ss5s5PdUNx64CqZfcghVKc60626HTlfnljrR6nQ`
            );
            const data = await res.json();
            setPhotoData(data);
            console.log(data);
        }
    }, []);

    if (!photoData) return <div />;


    return (
        <div>
        <NavBar />
        <div className="content">
            <div className="non-img">
                <h1 className="header">{photoData.title}</h1>
                <p className="header date">{photoData.date}</p>
                <p className="header textarea">{photoData.explanation}</p>
            </div>

            <div className="header image">
            {photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title}/>
            ) : (
                <iframe 
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encrypted-media"
                allowFullScreen
                className="photo"
                />
            )
            }
            </div>
        </div>
        </div>
    )
}