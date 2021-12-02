import React from 'react'

function Form ({formChangeHandler,formHanlder,FormOBJ:{task,category,priority}}) {
    return (
        <form  onSubmit={formHanlder}>
            <label>Category</label>
                <select name="category" onChange={formChangeHandler}>
                <option value="bugs">Bugs</option>
                <option value="features">Features</option>
                <option value="sprints">Sprints</option>
            </select>



            <label>    Priority</label>
        <select name="priority" onChange={formChangeHandler}>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>





            <label>                  Task:</label>
                <textarea   onChange={formChangeHandler}  placeholder= "task" name ="task" value={task}></textarea>
         

         
            <label>  urgency    </label>
            <select name="urgency" onChange={formChangeHandler}>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>

            

             {/* Here we will grab various teams from a data base.  */}





            <button type="submit">x</button>    
       
       
       
       
       
       
        </form>
    )
}

export default Form