import React,{useEffect, useState} from 'react'

function SubSprint({DOMHandler,Fetchedcomments,id}) {

const [NewComment, setNewcomment] = useState("")
const [CommentArray, setCommentArray] = useState(Fetchedcomments)
const[DomChange,setDomChange]= useState(0)


useEffect(() => {
 console.log("this Ran ")
 setCommentArray(Fetchedcomments)

 if (typeof CommentArray === "number") setDomChange(DomChange+1)

}, [DomChange])


function commentHandler(e){
e.preventDefault(e)

if(!Fetchedcomments){ 
setCommentArray([].push(NewComment))


    fetch(`http://localhost:3000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            comments:[NewComment]
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        DOMHandler()

     }
else     {

console.log("i ran")


setCommentArray(CommentArray.push(NewComment))


    fetch(`http://localhost:3000/tasks/${id}`,{
        method:"PATCH",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify({
            comments:CommentArray
        })})
        .then(response => response.json())
        .then(json => console.log(json))
        DOMHandler()
        setDomChange(DomChange+1)
    }
     
}





    return (
        <div>

    {Fetchedcomments? Fetchedcomments.map(comment=> <p key={Math.random()} >{comment}</p>):<p></p>  }



    
     
        <form onSubmit={commentHandler}>
        <label>Please add SubSprint: </label>
        <textarea name="comment" value={NewComment} onChange={(e)=>setNewcomment(e.target.value) }></textarea>
        <button type="submit" ></button>
        </form>
        </div>
    )
}

export default SubSprint
