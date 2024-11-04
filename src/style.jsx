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
background-color: #dadaed;
 background-color: ${({ temaEscuro }) => (temaEscuro ? "#202222" : "#dadaed")};
  color: ${({ temaEscuro }) => (temaEscuro ? "#01fbfb" : "black")};
transition: background-color 0.5s ease, color 0.5s ease;

main{
display:flex;
flex-direction:column;
text-align:center;
padding:15px;
 background-color: ${({ temaEscuro }) => (temaEscuro ? "#202222" : "#dadaed")};
border-radius:15px;
box-shadow: ${({ temaEscuro }) =>
    temaEscuro
      ? `rgba(1, 251, 251, 0.25) 0px 50px 100px -20px, 
         rgba(1, 251, 251, 0.3) 0px 30px 60px -30px, 
         rgba(1, 251, 251, 0.35) 0px -2px 6px 0px inset`
      : `rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
         rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, 
         rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset`};
         
 transition: background-color 0.5s ease, box-shadow 0.5s ease;

.btn-tema{
font-weight:500;
border:none;
background: none;
cursor:pointer;
font-size:1.2rem;
color: ${({ temaEscuro }) => (temaEscuro ? "#01fbfb" : "black")};
transition: background-color 0.5s ease, color 0.5s ease;
}

}
section{
display:flex;
justify-content:space-around;
margin:10px 0 15px;

button{
width:30px;
height:30px;
font-size:1.2rem;
cursor:pointer;
border-radius:5px;
 background-color: ${({ temaEscuro }) => (temaEscuro ? "##202222" : "#dadaed")};
 background-color: ${({ temaEscuro }) => (temaEscuro ? "#202222" : "#dadaed")};
color: ${({ temaEscuro }) => (temaEscuro ? "#01fbfb" : "black")};
border-color:${({ temaEscuro }) => (temaEscuro ? "#01fbfb" : "black")};
transition: filter 0.3s ease;
}
button:hover {
  filter: ${({ temaEscuro }) => (temaEscuro ? "brightness(180%)" : "brightness(80%)")}; 
}

}


input{
text-align:center;
margin:5px;
border-radius:25px;
padding:8px 15px;
font-size:1.2rem;
background-color: ${({ temaEscuro }) => (temaEscuro ? "#121212" : "#dadaed")};
color: ${({ temaEscuro }) => (temaEscuro ? "#01fbfb" : "black")};
border-color:${({ temaEscuro }) => (temaEscuro ? "#01fbfb" : "black")};
 transition: background-color 0.5s ease, color 0.5s ease;
}
h3{
text-align:center;
font-size:1.6rem;
} 
}
`;
