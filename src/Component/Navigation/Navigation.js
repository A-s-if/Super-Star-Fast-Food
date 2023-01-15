import React from 'react';
import styled from 'styled-components';
import Logo from '../../Images/Company Logo.png.gif';

const Navigation = () => {
    return (
        /* Container */

        <Container>

            <LeftDiv>
                <img src={Logo} alt="" />
            </LeftDiv>

        {/* Middle Div */}

            <MiddleDiv>
                <h3>Home</h3>
                <h3>About us</h3>
                <h3>Menu</h3>
                <h3>Terms of Use</h3>
            </MiddleDiv>

            <RightDiv>
                <h3>Login</h3>
            </RightDiv>

        </Container>
    );
};

export default Navigation;

/* Container */

const Container=styled.div`
background-color:rgb(43,42,42);
height:50px;
display:flex;
align-items:center;
justify-content:space-between;
@media(max-width:1023px){
    background-color:red;
}
@media(max-width:767px){
    background-color:green;
}
`

/* Left Div */

const LeftDiv=styled.div`
padding:0 0 0 20px;
img{
    width:40px;
    cursor:pointer;
}
@media(max-width:767px){
    padding:0 0 0 10px;
    img{
        width:5vw;
    }
}
`

/* Middle Nav */

const MiddleDiv=styled.div`
display:flex;
color:white;
height:100px;
justify-content:space-evenly;
align-items:center;
h3{
    margin:0 20px;
    cursor:pointer;
    padding:10px 10px;
    :hover{
        background-color:white;
        color:rgb(43,42,42);
    }
}

@media(max-width:767px){
    h3{
        margin:0 10px;
        padding:2px 5px;
        font-size:3vw;
    } 
}
`

/* Right Div */

const RightDiv=styled.div`
height:100px;
display:flex;
align-items:center;
padding:0 20px 0 0;
h3{
    color:white;
    font-weight:bold;
    cursor:pointer;
    padding:10px 10px;
    :hover{
        color:rgb(43,42,42);
        background-color:white;
    }
}

@media(max-width:767px){
    padding:10px;
    h3{
        padding:2px 5px;
        font-size:3vw;
    }
}
`