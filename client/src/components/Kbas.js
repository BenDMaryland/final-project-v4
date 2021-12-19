import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from "styled-components";

function Kbas() {

    let location = useLocation()
    const [KbaData, setKbaData] = useState(null)


    useEffect(() => {
        fetch(`${location.pathname}`)
            .then((r) => r.json())
            .then((data) => setKbaData(data))
    }, [location.pathname]);


   






    if (!KbaData) return null
    const contentState = convertFromRaw(JSON.parse(KbaData.kbatext))
    const editorState = EditorState.createWithContent(contentState)


    return (
        <Card>
            <h2>{KbaData.kba_title}</h2>
            <p>category</p>
            <Editor
                toolbarClassName="demo-toolbar-custom"
                wrapperClassName="demo-wrapper"
                editorState={editorState}
                readOnly={true}
            />
        </Card>
    )
}

export default Kbas

const Card = styled.div`
h2{
    text-align:center;
}

color: #e3e4e6;
   height: 70vh;
    width: 80vw;
    background-color: #323232;
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 55%;
   opacity: 1;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.1);
    box-shadow: 0 0 40px rgba(8,7,16,0.6);
    padding: 50px 35px;
    padding-top:1em;
    border-radius: 20px;


`