import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        /* Container */

        <Container>

        {/* FirstDiv */}

            <FirstDiv style={{
                backgroundImage:"url('data:image/jpeg;base64,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')"
            }
            }>
                <h1><pre>W E L L C O M E</pre></h1>
                <h2><pre>S e e  M e n u</pre></h2>
            </FirstDiv>

            {/* Our Story Div */}

            <OurStoryDiv>

            {/* Our Story Left Div */}

                <OurStoryLeftDiv>
                    <h1>Our story</h1>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.Est alias corrupti voluptate delectus vel iste maiores libero deleniti sint similique nam quidem aperiam debitis maxime inventore ab, velit ipsa qui nesciunt natus corporis pariatur soluta obcaecati nulla! Iusto eum mollitia, quibusdam omnis vel at earum molestiae adipisci nihil tenetur repudiandae dolore. Vel delectus velit eum voluptatem quaerat cum reprehenderit amet vitae voluptatum omnis, ipsam molestias nulla alias, iste dolore quae dolores ratione eligendi. Omnis quidem excepturi assumenda distinctio delectus. Temporibus quam voluptatum distinctio cupiditate saepe repudiandae minus molestiae facere soluta accusantium tempora ea odit illo, deserunt suscipit commodi impedit veritatis!
                    </p>
                </OurStoryLeftDiv>

                {/* Our Story Right Div */}

                <OurStoryRightDiv>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSuXlOTtI2ahZmjl1G1uHSM3x9LOB5amVv9A&usqp=CAU" alt="" />
                </OurStoryRightDiv>

            </OurStoryDiv>

            {/* Footer */}

            <Footer></Footer>

        </Container>
    );
};

export default Home;
/* Container */

const Container=styled.div``

/* First Div */

const FirstDiv=styled.div`
height:100vh;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    font-size:40px;
    color:white;
}
h2{
    color:white;
    font-size:30px;
    border:3px solid white;
    height:50px;
    cursor:pointer;
    display:flex;
    align-items:center;
    padding:0 20px;
    transition:0.5s;
    :hover{
        background-color:white;
        color:rgb(19, 19, 19);
    }
}
`

/* Our Story Div */

const OurStoryDiv=styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
margin:40px 0;
`

/* Our Story Left Div */

const OurStoryLeftDiv=styled.div`
width:500px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
align-items:center;
border:2px solid rgb(88, 88, 88);
border-radius:10px;
padding:0 10px;
p{
    font-size:20px;
}
`

/* Our Story Right Div */

const OurStoryRightDiv=styled.div`
img{
    width:450px;
    height:400px;
}
`