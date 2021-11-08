import React from 'react';
import styled,{css, 
    keyframes,
    ThemeProvider,
    createGlobalStyle} from 'styled-components';
    // los estylos globales hay que mandarlos a llamar desde el archivo principal

export default function ComponentesEstilizados(){
    let mainColor ="#db7093",
    mainAlphaColor= "#db709390";
    const setTransitionTime =(time)=>`all ${time} ease-in-out`;
    const fadeIn= keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }`
    ;
    const MyH3 = styled.h3`
    padding:2rem;
    text-aling:center;
    color:${(props)=> props.color};
    {//lo mismo pero desestructurando}
    color:${({color})=>color };
    color:${({color})=>color || "#000"};
    background-color:${mainColor};
    transition:${setTransitionTime('1s')};
    animation:${fadeIn} 4s ease-out;
    ${({isButton})=>isButton && css`
    margin:auto;
    max-width:49%;
    border-radius:0.27rem;
    cursor:pointer;`}
    &:hover{
        background-color:${mainAlphaColor};
    }
    `;
// significa el mismo h3 en el momento hover

const ligth={
    color:"#222",
    bgColor:"#DDD",

}

const dark={
    color:"#ddd",
    bgColor:"#222",

}

const Box=styled.div`
      padding:1rem;
      margin:1rem;
      color:${({theme})=>theme.color};
      background-color:${({theme})=>theme.bgColor};
      `;

    //   hago que herede los estylos de box y ademas le agrego algo
const BoxRounded = styled(Box)`
      border-radius:1rem;
`
// es como un reseteo de stylos
// esto es un componente que tengo que renderizar
const GlobalStyle = createGlobalStyle`
     h2{
         padding:2rem;
         background-color: #fff;
         color: #71dafb;
         text-transform: uppercase;
     }
`;
    return(
        <>
        <GlobalStyle/>
        <h2>Styled components</h2>
        <MyH3>Hola, soy un h3 estilizado con styled-component</MyH3>
        <MyH3 color="#71afb">Hola, soy un h3 estilizado con styled-component</MyH3>
        <MyH3 isButton>Soy un h3 hecho boton</MyH3>
        {/* theme pide de donde va a obtener todos los estilos */}
        <ThemeProvider theme={ligth}>
            {/* es un container de variables */}
            <Box>Soy una caja light</Box>
            <BoxRounded>Soy una caja redondeada ligth</BoxRounded>
        </ThemeProvider>
        <ThemeProvider theme={dark}>
            {/* es un container de variables */}
            <Box>Soy una caja dark</Box>
            <BoxRounded>Soy una caja redondeada dark</BoxRounded>
        </ThemeProvider>
        </>
    )
}