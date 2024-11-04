import styled, { createGlobalStyle } from "styled-components";

// pra usar o reset precisamos importar essa funcionalidade createGlobalStyle

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}

body{
display:flex;
justify-content:center;
align-items:center;
height:100vh;

main{
display:flex;
flex-direction:column;
margin: 0 0 30%;
text-align:center;
}
section{
display:flex;
justify-content:space-around;
margin:10px 0 15px;
button{
width:30px;
height:30px;
}
}


input{
text-align:center;
margin:5px;
border-radius:25px;
padding:8px 15px;
font-size:1.2rem;
}
h3{
text-align:center;
font-size:1.6rem;
} 
}
`;
