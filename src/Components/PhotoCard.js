import React from 'react'

export default function PhotoCard(props) {
    return (
        <>
            <h1>Title: {props.title}</h1>
            <div>{props.hdurl}</div>
            <h4>Date: {props.date}</h4>
            <h4> Copyright: {props.copyright}</h4>
            <h4>Explanation: {props.explantion}</h4>
            <h4>Url: {props.url}</h4>
        </>
    )
}

