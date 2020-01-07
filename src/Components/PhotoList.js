import React, { useState, useEffect } from 'react'
import axios from 'axios'
import PhotoCard from './PhotoCard'

export default function PhotoList() {


    const [photo, setPhoto] = useState([]);

    // defining setPhoto function

    // function setPhoto(arg) {
    //     photo = arg;
    // }

    // using useEffect

    useEffect(() => {
        // using axios to fetch data 
        axios
            .get(`https://api.nasa.gov/planetary/apod`)
// using API url to fetch data
            .then(response => {
                console.log(response); // displaying data to check its structure

                setPhoto(response.data);

                // set the state of the photo
    
            })
            .catch(err => {
                console.log(`The data was not returned !`, err);
            });
        //  console.log("Photo2", photo);
            
    },[]);

    return (
        <div>
            {
                photo.map(x => {
                    return (
                <PhotoCard
                DATE = {x.date}
                HD = {x.hd}
                API KEY = {x.api_key}
                />
                    )
                })
            }     
        </div>
    )
}


// export default PhotoList;