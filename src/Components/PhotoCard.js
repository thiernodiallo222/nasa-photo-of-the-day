import React from 'react'

export default function PhotoCard(props) {
    return (
        <div className ='photoCard'>
            <h1 className='cardItem'>{props.title}</h1>
            <img  className = "image"alt ="not available"src = {props.hdurl}/>
            {/* // <img className='cardItem' {src = "props.hdurl"}/> */}
            <p className = 'cardItem'>Date: {props.date}</p>
            <p className = 'cardItem'> Copyright: {props.copyright}</p>
            <p className = 'cardItem'>Explanation: {props.explanation}</p>
            <p className = 'cardItem'>Url: {props.url}</p>
            <p className = 'cardItem'>Service version: {props.service_version}</p>
            < p className = 'cardItem'>Media Type: {props.media_type}</p>
        </div>
    )
}

