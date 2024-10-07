                    //INFORMATION FROM freeCodeCamp (https://www.freecodecamp.org/news/usestate-hook-3-different-examples/)

// One of the most well-known React hooks is the useState() hook. 
        //It lets you add a state variable to your component. 
        //The useState() hook can conveniently hold strings, arrays, numbers, objects and much more.

import { useState } from "react"

 // How Does useState() Work?

//The useState() hook works by handling and managing state in your applications.

//The useState() hook takes the first (initial) value of the state variable as its argument. (EXAPMLE: how the initial value 0 is passed below as useState(0))
// The second value (a function) then sets your state, which is why it's always initiated as setState.

//In other words:
        //useState accepts an initial state and returns two values:
                    // -The current state (Indicated by some variable passed as the first argument).
                    // -A function that updates the state (the second argument).

// [NOTE]: The name of the state variable doesn't have to always be 'state' it can also be any other name as shown below.
// Additionally, the second variable (set function) is normally given the name starting with 'set' and then the name of the state variable with a capital letter as shown below.


//So how does this work?

// EXAMPLES:
        //1) const [state, setState] = useState(initial values goes here)
                                //(OR)
        //2) const [calories, setCalories] = useState(initial value of calories)

        //In the case of the first example (a.k.a: the first render), it returns the initial state and updates to a different value during the re-render using the set function.


//INFORMATION ABOUT FUNCTIONAL COMPONENTS FROM freeCodeCamp AND W3Schools (https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/) & (https://www.w3schools.com/react/react_components.asp)

//Explanation of the code below from ChatGPT 

function Input(){ //This line defines a functional component called Input. In React, components are the building blocks of the user interface. Functional components are simply JavaScript functions that return React elements.

    const [text, setText] = useState("Module 1") // useState("Module 1") initializes a state variable.

                                                    //text is the variable that holds the current state (initially set to "Module 1").
                                                    //setText is a function that you can use to update the value of text.
                                                    //The initial state is "Module 1", so when the component (called Input as defined above as function Input(){} ) first renders, text will have this value.


/*Let's dive into what the `event` object is and why it's passed into the `onChangeHandler` function.

### What is `event`?

- **The `event` Object:** In JavaScript, when an event occurs (like a user typing into an input field, clicking a button, etc.), the browser generates an `event` object. This object contains a lot of information about the event that just happened.

- **Properties of `event`:** The `event` object includes details like:
  - **`type`**: The type of event (e.g., "click", "change", "submit").
  - **`target`**: The element that triggered the event (e.g., the specific `<input>` field that was changed).
  - **`timeStamp`**: The time at which the event was created.
  - **And many more...**

### Purpose of Passing `event` into `onChangeHandler`

When you define a function like `onChangeHandler`, the `event` object is automatically passed to the function when an event occurs. Here’s why:

1. **Accessing the Source Element (`event.target`)**:
   - The `event.target` property refers to the HTML element that triggered the event. For example, if the event is a change in an input field, `event.target` is that specific input field.

2. **Getting the Input Value (`event.target.value`)**:
   - `event.target.value` gets the current value of the input field. This is essential when you want to capture what the user typed in.
   - In your `onChangeHandler` function, `event.target.value` allows you to know what text is currently in the input field.

3. **Dynamic Event Handling**:
   - By passing `event`, your function can handle different elements or actions dynamically. For example, if you had multiple input fields, the same function could handle changes for all of them, with the `event` object telling you which input was changed.

### How It Works in the code below:

const onChangeHandler = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
};
        - **`event.target.value`:** This retrieves the current text in the input field that the user is typing into.
        - **`console.log(event.target.value)`:** This prints that value to the console (helpful for debugging).
        - **`setText(event.target.value)`:** This updates the `text` state with the new input value, causing the component to re-render with the updated value.

### Example in Context

Let’s say a user types "Hello" into an input field:

- As the user types each letter, the `onChangeHandler` function is called.
- The `event` object is passed to `onChangeHandler`.
- `event.target.value` gives you the current text in the input field (e.g., "Hello").
- `setText(event.target.value)` updates the state with "Hello".
- The component re-renders, displaying "Hello" wherever `text` is used.

In summary, the `event` object gives you all the information you need about what happened during an event, and it's passed into your event handler functions so that you can use this information to update the UI or perform other actions.*/


    const onChangeHandler = (event) => {
        console.log(event.target.value)
        setText(event.target.value)
    }

/*Rendering the Component*/

/*The return statement specifies what the UI should look like.*/
    return(
        <div>
            {/* <h1>{text}</h1> renders a heading (<h1>) that displays the current value of text. */}
            <h1>{text}</h1> 
            <input 
            value = {text} //The value={text} attribute binds the input field's value to the text state variable, so whatever is in text will be shown in the input field.
            onChange = {onChangeHandler} //onChange={onChangeHandler} tells the input field to call onChangeHandler every time the user types something in it.
            />
        </div>
    );
}

export default Input; /* This line allows other parts of your React application (such as the App.js file) to import and use the Input component.*/