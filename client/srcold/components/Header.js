import React,{useState} from 'react'
import Form from "./Form"
import { NavLink } from "react-router-dom";
import styled  from "styled-components";

function Header({formChangeHandler,FormOBJ,formHanlder,sortHandler,sorted}) {
const [displayForm, setdisplayForm] = useState(false)

    return (
<HeaderContainer>
        <div >
          <h1>
           Rose's Productivity App is here!
        </h1>  
        <img src= "https://i.etsystatic.com/7867651/r/il/611e5e/1234111316/il_794xN.1234111316_lob9.jpg"/> 
          <br />
          <br />
          <br />
          <br />
          <br />

      <br />
        <br />
          <br />
          <br /> 
      <button type="button" onClick = {()=>setdisplayForm(!displayForm)} value="x">+</button>
      <br />
          <br />
          <br />
          
     {displayForm?<p></p> : <Form formChangeHandler={formChangeHandler} FormOBJ={FormOBJ} formHanlder={formHanlder}/>}
        </div>
        <br />
          
        <label>Sort by Priority:</label>
        <input type="checkbox" onChange={()=>sortHandler()} checked={sorted}  ></input>
        <div className="line"></div>
        <br />
        <br />
        
        </HeaderContainer>
    )
}

export default Header


const HeaderContainer = styled.div `
display:Inline;
button {
  display:Inline;
background-color: grey;
color:white;
padding: 1px 4px
}
h1{
  text-align:center;
  display:inline;
}
.line{
  border: solid 1px black ;
}
nav{
  display:inline;
}

img {
  height: 50%;
display:block;

}
*{
  text-align:center;
}
img{
  display:inline;
  height:100px;
}


`