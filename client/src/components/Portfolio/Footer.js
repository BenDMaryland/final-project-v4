import React from 'react'
import styled from 'styled-components'

function Footer({ scrollHander}) {
    return (
        <Foot id="footer"  onMouseEnter={() => scrollHander("footer")} >
            <br />
            <br />
            <div className="tagline" >
                <h3>Ben Darago</h3>
                <p> Always stay Hungry </p>
                <p className="bar">____</p>
            </div>

            <div className="links">

                <a className="footer_links" href="mailto: ben.d.maryland@gmail.com"  ><i className="fas fa-envelope"></i></a>
                <a className="footer_links" href="https://www.linkedin.com/in/ben-darago/"  ><i className="fab fa-linkedin"></i></a>
                <a className="footer_links" href="https://github.com/BenDMaryland"  ><i id="git" className="fab fa-github"></i></a>
                <a className="footer_links" href="https://a-blog-on-rails.herokuapp.com/blogs" ><i className="fas fa-blog"></i></a>
                <a className="footer_links" href="https://twitter.com/BenjaminDarago" ><i className="fab fa-twitter"></i></a>
            </div>


            <div>
                <br />
               
                <p className="bar">____</p>
                <br />

            </div>

        </Foot>
    )
}

export default Footer

const Foot = styled.footer`
background-color: #b26baf;
text-align: center;
bottom: 50px;
width: auto;
padding: 0%;
color: white;
z-index: 2;
 position: relative;
bottom: 0px;
.links{
display: inline-flex;
text-align: center;
color: white;
}
.footer_links{
border-radius: 60px/60px;
border: solid;
color: white;
text-align: center;
padding:8px 10px 8px 10px;
margin: 15px;
}
h3{
    color:#f5f5f5 ;
}
p{
    color:#f5f5f5 ;
}
.bar{
   
    width: 100%;
}
a:hover{
       color: #c093eb ;
    background: linear-gradient(0deg, rgba(0, 0, 0, .5) 40%, rgba(255, 255 ,255 , 0) 100%);;
}

`