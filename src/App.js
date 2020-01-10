import React from "react";
import "./App.css";
import PhotoList from "./Components/PhotoList";
import styled from "styled-components";


const Body = styled.div`
display: flex;
background-color: black;
width: 100%;

`;

function App() {
  return (
    <Body>
       
 <PhotoList />
    
    </Body>
  );
}

export default App;



