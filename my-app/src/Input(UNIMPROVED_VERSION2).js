import { useState } from "react"

function Input(){

    const [text, setText] = useState("Module 1")
    const onChangeHandler = (event) => {
        console.log(event.target.value)
    }
 //Here, we've added the onChangeHandler function above and called it via the onChange attribute of the input tag
 
 //BUT: When we go back to the react project page, we'll see that when we type any new character (in the input field)
// to change the value, the value of the input field doesn't change, but the change is only reflected in the console, but even that isn't correct since it shows the previous value (Module 1) along with the new value we type in.

//So, to counteract that, we need to use setText that we defined above and use that to set the event value (the event being the value change that is indicated when we type a character in the field.)
//as the current state. (Replacing the previous initial state: "Module 1")
// [REFER TO Input.js FILE TO SEE THE CORRECTION AND FINAL IMPROVED VERSION OF THIS INPUT COMPONENT]
    return(
        <div>
            <h1>{text}</h1>
            <input 
            value = {text}
            onChange = {onChangeHandler}
            />
        </div>
    );
}

export default Input;