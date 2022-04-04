import React,{useState} from 'react'
import styled from 'styled-components';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Footer from './Footer';
import TopBar from "./TopBar"
import Intro  from './Intro';

function Home() {
const [wheelLocation, setwheelLocation] = useState("intro")
    function scrollHander(loc){
        setwheelLocation(loc)
      
    }


// window.addEventListener("scroll",scrollInfo )


    return (
        <Portfol onScroll={() => console.log("hi")}  >
            <TopBar wheelLocation={wheelLocation} scrollHander={scrollHander} />
            <Intro scrollHander={scrollHander}  />
            <Portfolio scrollHander={scrollHander}  />
            <Resume  scrollHander={scrollHander}  />
            <Footer scrollHander={scrollHander}    />
        </Portfol>


    )
}

export default Home

const Portfol = styled.div`

   font-family: 'Montserrat', sans-serif, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #eaecec;
    font-weight: bolder
 width: 100%;
 right:0
 position: absolute;

body{
    background-image: url(../javascript/assets/images/overlay.png);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f5fafa;
    margin: 0px;
}


 a{
text-align: center;
    padding: 6px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    display: block; }

    main{
    text-align: center;
     width: 90%;
     right:90%;
    background-color: #f5fafa;
}



 `