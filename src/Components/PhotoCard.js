import React from 'react'

export default function PhotoCard(props) {
    return (
        <>
            <h4>DATE: {props.date}</h4>
            <h4>HD: {props.hd}</h4>
            <h4>API KEY: {props.api_key}</h4>
        </>
    )
}

