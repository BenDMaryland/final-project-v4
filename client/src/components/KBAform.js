import React, { useState, useContext } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styled from 'styled-components'
import { CurrentUserContext } from '../custom/CurrentUser';


function KBAform() {
    const { CurrentUser, setCurrentUser } = useContext(CurrentUserContext);


    const [editorState, setEditorState] = useState(() =>
        EditorState.createEmpty()
    );
    // useEffect(() => {
    //     console.log(editorState);
    // }, [editorState]);

    const [kbaFormData, setkbaFormData] = useState({
        category: "",
        kba_title: "",
        kbatext: editorState
    })

    function NewKbaChangleHandler(e) {

        setkbaFormData(data => data = { ...data, [e.target.name]: e.target.value })

    }



    async function kbaSubmitHandler(e) {
        e.preventDefault();
        const data = editorState.getCurrentContent();
        await submitPage(data);
    }
    // const content = JSON.stringify(convertToRaw(editorState))


    const submitPage = async (data) => {
        const content = JSON.stringify(convertToRaw(data));
        const response = await fetch(`/kbas/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "user_id": CurrentUser.id,
                    "kba_title": kbaFormData.kba_title,
                    "category": kbaFormData.category,
                    'kbatext': content
                }
            )
        });


        if (response.ok) {
            console.log("ok")
        } else {
            alert(data.error)
        }
    }


    return (
        <EditContainer onSubmit={kbaSubmitHandler} >
            <input name='kba_title' placeholder="Title" value={kbaFormData.kba_title} onChange={NewKbaChangleHandler}   ></input>
            <input name='category' placeholder="Category" value={kbaFormData.category} onChange={NewKbaChangleHandler}   ></input>

            <Editor
                toolbarClassName="demo-toolbar-custom"
                wrapperClassName="demo-wrapper"
                editorState={editorState}
                onEditorStateChange={setEditorState}
            />

            <button type="submit">Submit</button>

        </EditContainer>
    )
}

export default KBAform

const EditContainer = styled.form`
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

.demo-toolbar-custom{
background-color: #36393F;
    color: black;
}
`