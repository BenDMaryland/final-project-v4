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
        <div>
            <input onChange={e => searchHandler(e)} value={FilteredSearch} type="search"></input>
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
        </div>
    )
}

export default AllKbas

const CardContainer = styled.div`
display: grid;

grid-template-columns:repeat(2, 1fr );


.card{
        border: 2px solid #292d3e;
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
color: white;
background-color:#323232;
padding:1em;

height: 220px;
overflow: hidden;
padding: 1px;
text-align: center;
width:90%;

margin:10px;
    box-shadow: rgb(38 57 77) 0px 20px 30px -10px;
a{
color: black;
   text-shadow: 2px 2px 4px rgb(38 57 77);
 text-decoration: none;}
   
a:hover,a:focus {
text-decoration:none;
background:#5fa2db;
color: #ffffff;
   text-shadow: 2px 2px 4px #000000;
}


`