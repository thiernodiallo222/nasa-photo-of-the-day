import React from 'react'
import styled from 'styled-components';

const Title = styled.h1`
display: flex;
color: blue;
line-height: 2rem;
justify-content: center;

`;

const Wrapper = styled.div`
display: flex;
flex-direction: column;
margin-left
background: rgb(222,222,222);
justify-content: space-around;
align-items: center;
width: 640px;
margin-left: 320px;
margin-right: 320px;
box-sizing: border-box;
flex-direction: column;
background-color: rgb(211, 212, 213);
 position: absolute;
`;

const Image = styled.img`
  height: 400px;
  width:90%;
  margin: 1px;
  margin-left: 5%;
  margin-right: 5%;
  box-sizing: border-box;
  box-shadow: inset;
  border-radius: 1px;
`;

  

const CardItems = styled.div`
  width: 90%;
  height: fit-content;
  background-color: rgb(255, 255, 255);
  margin: 1px;
  margin-left: 5%;
  margin-right: 5%;
  box-sizing: border-box;
  box-shadow: inset;
  align-self: flex-start;
  color: black;
  text-align: left;
  padding: 10px;
  line-height: 1.5rem;
`;
  



export default function PhotoCard(props) {
    return (
        
        <Wrapper>
            <Title>{props.title}</Title>
            <Image alt = "not available"src = {props.hdurl} />
            <CardItems> Date: {props.date}</CardItems>
            <CardItems > Copyright: {props.copyright}</CardItems>
            <CardItems > Explanation: {props.explanation}</CardItems>
            <CardItems > Url: {props.url}</CardItems>
            
            </Wrapper>
        
    )
}

