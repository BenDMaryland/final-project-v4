import React, { useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

function AllKbas() {
    const [FetchedKbas, setFetchedKbas] = useState(null)

    useEffect(() => {
        fetch(`/kbas`)
            .then((r) => r.json())
            .then((data) => setFetchedKbas(data))
    }, []);



    if (!FetchedKbas) return null

    return (

        <CardContainer>

            {FetchedKbas.map((kba) => {

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
    )



}

export default AllKbas

const CardContainer = styled.div`
display: grid;

grid-template-columns:repeat(3, 1fr );


.card{
        border: 2px solid #292d3e;
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
color: white;
background-color:#323232;
padding:1em;
border: solid;
height: 220px;
overflow: hidden;
padding: 1px;
text-align: center;
`