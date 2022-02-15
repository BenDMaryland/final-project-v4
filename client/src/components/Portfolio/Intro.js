import React from 'react'
import styled from 'styled-components'
import background from "../assets/images/background.jpg"
function Intro({ scrollHander }) {
    return (
        <IntroPage id="intro" onMouseEnter={() => scrollHander("intro")}   >
            <h1> Hi I'm Ben, A Fullstack Developer  </h1>
            <div className='introlinks' >
                <a className='introlinks'  ><i className="fas fa-mobile"></i><span> 443-546-6043</span></a>
                <a className='introlinks' href="mailto: ben.d.maryland@gmail.com"   ><i className="fas fa-envelope"></i><span> ben.d.maryland@gmail.com</span></a>
                <a className='introlinks' href="https://www.linkedin.com/in/ben-darago/"  ><i className="fab fa-linkedin"></i><span> LinkedIn</span></a>
                <a className='introlinks' href="https://github.com/BenDMaryland"  ><span><i id="git" className="fab fa-github"></i> GitHub</span></a>
                <a className='introlinks' href="https://a-blog-on-rails.herokuapp.com/blogs" ><span> <i className="fas fa-blog"></i> Blog</span></a>
                <a className='introlinks' href="https://twitter.com/BenjaminDarago" ><span><i className="fab fa-twitter"></i> Twitter</span></a>
            </div>
        </IntroPage>
    )
}

export default Intro

const IntroPage = styled.div`
width: 100%;
background-image: url(${background});
height: 100vh;
background-size: cover;
color: #ffffff;
border: 0ch;
padding: 0ch;

.introlinks{
    text-align:center;
   
    margin:20px;
    margin-top:20vh;
 color: #ffffff;
border: 0ch;
padding: 0ch;
display: revert;

}

h1{
    text-align: center;
    margin-bottom: 20vh;
    padding-top: 40vh;
    padding-left: 50px;
    font-family: 'Montserrat', sans-serif;

}

h2{
    padding-top: 50px;
padding-left: 20%;
padding-right: 20%;
text-align: center;
font-family: 'Montserrat', sans-serif;

}

`
