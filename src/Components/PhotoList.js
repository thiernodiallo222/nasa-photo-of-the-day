import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './PhotoCard';

export default function PhotoList() {

     const [photos, setPhotos] = useState([]);

]

    // using useEffect

    useEffect(() => {
        // using aphotosios to fetch data 
        axios
            // .get(`https://api.nasa.gov/planetary/apod?api_key=zzE2GH1fbwJ09BkEKYwhstc5kSdKphotosKDcPKErHOKk`)
            // .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
           .get(`https://api.github.com/users/thiernodiallo222/followers`)

            // using API url to fetch data
            
            .then(response => {

                console.log(response); // displaying data to check its structure

                // setPhotos(response.data => {
                //     useState(response.data);
                // });
                console.log(`Photos before: ${photos}`)

                setPhotos(response.data);

                console.log(`Photos after: ${photos}`)

                // set the state of the photo
    
            })
            .catch(err => {
                console.log(`Sorry, data was not returned !`, err);
            });
        
            
    }, []);
     console.log("My photo object:", photos);

    return (
        // <div className="photos">
            
                
                        <PhotoCard
                            Title={photos.title}
                            Image={photos.hdurl}
                            Date={photos.date}
                            Copyright={photos.Copyright}
                            Ephotosplanation={photos.Explanation}
                            Url={photos.url}
                        />
        // </div>
    );
}

