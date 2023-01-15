import React from 'react';
import styled from 'styled-components';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramLogo from '@mui/icons-material/Instagram';
import TwitterLogo from '@mui/icons-material/Twitter';
import TelegramLogo from '@mui/icons-material/Telegram';
import {Link} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Footer = () => {
    return (
        /* Container */

        <Container>

        {/* MainFooterDiv */}

            <MainFooterDiv>

                {/* Footer Top Div */}

                <FooterTopDiv>

                {/* Icon Div */}

                    <IconDiv>

               {/* Facebook Icon */}
                
                    <Link><FacebookIcon sx={{
                        fontSize:"63px",
                    }}></FacebookIcon></Link>

                {/* Instagram Icon */}

                    <Link><InstagramIcon sx={{
                        fontSize:"50px",
                    }}></InstagramIcon></Link>

                    {/* TwitterIcon */}

                    <Link><TwitterIcon sx={{
                        fontSize:"50px",
                    }}></TwitterIcon></Link>

                    {/* Telegram Icon */}

                    <Link><TelegramIcon sx={{
                        fontSize:"50px",
                    }}></TelegramIcon></Link>

                    </IconDiv>

                    {/* Footer Top Text Div */}

                    <FooterTopTextDiv>
                        <div>
                        <p><Link>Home</Link></p> 
                        <p><Link>About Us</Link></p> 
                        <p><Link>Menu</Link></p> 
                        <p><Link>Terms of Use</Link></p>
                        </div>
                        
                        
                        <div>
                        <p><Link>Contact</Link></p>
                        <p><Link>Blog</Link></p>
                        <p><Link>Catering</Link></p>
                        <p><Link>Delivery</Link></p>
                        </div>
                        
                    </FooterTopTextDiv>

            </FooterTopDiv>

            {/* Footer Bottom Div */}

            <FooterBottomDiv>
                <h3>
                    HEALTHY FAST.CASUAL FOOD.CRAFTED WITH <FavoriteIcon sx={{
                        marginBottom:'-5px'
                    }}></FavoriteIcon> IN MINNEAPOLIS
                </h3>
                <h4>DESIGN BY MUHAMMAD ASIF</h4>
            </FooterBottomDiv>

            </MainFooterDiv>
            
        </Container>
    );
};

export default Footer;

/* Container */

const Container=styled.div``

/* Main Footer Div */

const MainFooterDiv=styled.div``

/* Footer Top Div */

const FooterTopDiv=styled.div`
background-color:rgb(22, 22, 22);
display:flex;
flex-direction:column;
fustify-content:center;
align-items:center;
padding:50px 0;
`

/* Icon Div */

const IconDiv=styled.div`
width:400px;
text-align:center;
`

/* Facebook Icon */

const FacebookIcon=styled(FacebookRoundedIcon)`
color:green;
margin:0 20px 0 0;
`

/* Instagram Icon */

const InstagramIcon=styled(InstagramLogo)`
color:rgb(22, 22, 22);
background-color:green;
border-radius:50%;
padding:3px;
margin:0 20px 0 0;
`

/* Twitter Icon */

const TwitterIcon=styled(TwitterLogo)`
color:rgb(22, 22, 22);
background-color:green;
border-radius:50%;
padding:3px;
margin:0 20px 0 0;
`

/* Telegram Icon */

const TelegramIcon=styled(TelegramLogo)`
color:rgb(22, 22, 22);
background-color:green;
border-radius:50%;
padding:3px;
`

/* Footer Top Text Div */

const FooterTopTextDiv=styled.div`
div{
    width:600px;
    display:flex;
    justify-content:space-evenly;
    a{
        font-size:25px;
        text-decoration:none;
        color:white;
    }
}

`

/* Footer Bottom Div */

const FooterBottomDiv=styled.div`
background-color:green;
color:white;
text-align:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h4{
    margin-top:-20px;
}
`
