import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

function AllKbas() {
    const [FetchedKbas, setFetchedKbas] = useState(null)
    const [FilteredSearch, setFilteredSearch] = useState("")
    useEffect(() => {
        fetch(`/kbas`)
            .then((r) => r.json())
            .then((data) => setFetchedKbas(data))
    }, []);

    function searchHandler(e) {
        setFilteredSearch(e.target.value)
    }
    if (!FetchedKbas) return null

    return (
        <WholeContainer>
            <input placeholder="search" onChange={e => searchHandler(e)} value={FilteredSearch} type="search"></input>
            <CardContainer>
                {FetchedKbas.filter((kba) => kba.kba_title.toLowerCase().includes(FilteredSearch.toLowerCase()) || kba.kbatext.toLowerCase().includes(FilteredSearch.toLowerCase()) || kba.category.toLowerCase().includes(FilteredSearch.toLowerCase())).map((kba) => {

                    const contentState = convertFromRaw(JSON.parse(kba.kbatext))
                    const editorState = EditorState.createWithContent(contentState)
                    return (

                        <div className="card" key={kba.id}>
                            <Link className="nav-link" to={`./${kba.id}`}   >  <h2>{kba.kba_title}</h2>     </Link>
                            <Editor
                                toolbarClassName="demo-toolbar-custom"
                                wrapperClassName="demo-wrapper"
                                editorState={editorState}
                                readOnly={true}
                            />
                        </div>
                    )
                })}
            </CardContainer>
        </WholeContainer>
    )
}

export default AllKbas

const WholeContainer =styled.div`

      input{
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
    background-color:#ffffff;
  padding: 12px;
  border-radius: 3px;
  width: 600px;
  border:solid;
  height:4em;
  font-size: 14px;
  margin-top: 1em;
margin-right: 50vw;
margin-left: 25vw;}


`

const CardContainer = styled.div`
display: grid;
grid-template-columns:repeat(2, 1fr );
padding-top:2px;
.card{
        /* border: 2px solid #292d3e; */
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
color: black;
background-color:#ffffff;
padding:1em;
height: 29px;
overflow: hidden;
padding-top:2px;
text-align: center;
width:90%;
margin:10px;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;}
a{
    color: black;

 text-decoration: none;}
   
a:hover,a:focus {
text-decoration:none;
background:#5fa2db;
color: #258be0;
   text-shadow: 2px 2px 4px rgb(38 57 77);
}

h2{
    margin-top:2px;
}

`