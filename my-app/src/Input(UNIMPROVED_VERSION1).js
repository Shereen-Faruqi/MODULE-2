import { useState } from "react"

function Input(){

    const [text, setText] = useState("Module 1")

    return(

//It won't let us change the value (Module 1) in the input field since we used const.
//So, to go about this, we use the onChange attribute [REFER TO VERSION 2 JS FILE TO SEE THE CORRECTION] 
//that helps us call a function that will in turn help us assign a new value to the input field.  

//That function will be: const onChangeHandler = (event) => {
                                // console.log(event.target.value)} 

   

        <div>
            <h1>{text}</h1>
            <input 
            value = {text}
            />
        </div>
    );
}

export default Input;