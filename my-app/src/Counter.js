
                        //INFORMATION FROM freeCodeCamp (https://www.freecodecamp.org/news/usestate-hook-3-different-examples/)

// One of the most well-known React hooks is the useState() hook. 
        //It lets you add a state variable to your component. 
        //The useState() hook can conveniently hold strings, arrays, numbers, objects and much more.
import {useState} from "react"


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







/**/       
function Counter() {
    const [value, setValue] = useState(0) /*- useState(0) initializes a state variable.
                                            - value is the state variable that holds the current counter value, which starts at 0.
                                            - setValue is a function that you can use to update the value of value.
                                            - The initial state is 0, so when the component first renders, value will be 0.*/ 


/* Handling the incrementing feature for the Counter component. */

/*onIncrement() is a function that will help us increase the value. This function will be called when the "Increment button is clicked."*/ 
    const onIncrement = () => {
        setValue(value + 1) //setValue(value + 1) updates the value state by increasing it by 1.
    } //After the state is updated, the component re-renders, and the new counter value is displayed.
    

/* Handling the decrementing feature for the Counter component. */

/*onDecrement() is a function that will help us decrease the value. This function will be called when the "Decrement button is clicked."*/ 

    const onDecrement = () => {
        setValue(value - 1)

    } //Just like with incrementing, after the state is updated, the component re-renders, and the new counter value is displayed.


// Rendering the Component

    return ( /*The return statement defines what the UI will look like when this component is rendered.*/
        <div>
            {/* <h1>Counter: {value}</h1> displays the current counter value inside an <h1> heading. */}
            <h1>Counter: {value}</h1> 

            {/* <button onClick={onIncrement}>Increment</button> creates a button that, when clicked, will trigger the onIncrement function to increase the counter. */}
            <button onClick={onIncrement}>Increment</button>

            {/* <button onClick={onDecrement}>Decrement</button> creates a button that, when clicked, will trigger the onDecrement function to decrease the counter. */}
            <button onClick={onDecrement}>Decrement</button>
        </div>
    );

}

export default Counter; /* This line allows other parts of your React application (such as the App.js file) to import and use the Counter component.*/


/* IMPORTANT NOTE:

The reason the `event` object isn’t passed into the `onIncrement` or `onDecrement` functions is because these functions don’t need any information about the event that triggered them. Let's break this down.

### 1. **What Do `onIncrement` and `onDecrement` Do?**
const onIncrement = () => {
    setValue(value + 1);
}

const onDecrement = () => {
    setValue(value - 1);
}

- **Purpose:** Both of these functions simply update the state (`value`) by either increasing or decreasing it by 1. 
- **No Need for `event`:** The functions only need to know the current state (`value`) to perform the increment or decrement. They don't need to know anything about which button was clicked or any details about the click event itself.

### 2. **Why Isn't `event` Needed?**
- **No Use of Event Details:** Unlike the `onChangeHandler` function (in Input.js) where you need to get the value from the input field (`event.target.value`), the `onIncrement` and `onDecrement` functions don’t need any information from the event object. They simply perform an operation on the state.
- **Simplicity:** Since the operations are straightforward and don’t rely on details of the event, you don’t pass `event` into these functions. Passing `event` would be unnecessary because the functions would not use it for anything.

### 3. **When Do You Need to Use `event`?**
You typically need to pass and use the `event` object in your functions when:
- **You Need to Access the Element that Triggered the Event:** For example, when you want to know which input field was changed or which button was clicked.
- **You Need to Get Data from the Event:** Like the text in an input field, or the coordinates of a mouse click.
- **You Need to Prevent Default Behavior:** Sometimes, you need to prevent the browser's default action in response to an event (e.g., preventing a form from submitting), and for this, you use `event.preventDefault()`.

### Summary
- **`onChangeHandler` (in the Input.js file):** Needs the `event` object to access the value of the input field that triggered the event.
- **`onIncrement` and `onDecrement`:** Do not need the `event` object because they only manipulate the state and do not rely on any event-specific information.

In short, if a function doesn’t need to interact with the details of the event itself, there’s no need to pass the `event` object to it.*/ 