import React from 'react'

export default function PhotoCard(props) {
    return (
        <div>
            <h4>DATE: {props.date}</h4>
            <h4>HD: {props.hd}</h4>
            <h4>API KEY: {props.api_key}</h4>
        </div>
    )
}

// export default PhotoCard;