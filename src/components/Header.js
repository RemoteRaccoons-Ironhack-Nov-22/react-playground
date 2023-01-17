import { useState } from "react";

function Header(props) {

    const [counter, setCounter] = useState(0);

    //define className for bg color
    let classString = "";
    if(counter >= 10){
        classString = "dark";
    } else {
        classString = "light";
    }


    const increaseCounter = () => {      
        
        //updating state directly -never do that ;)
        // counter++; 

        //passing the new value directly
        // setCounter(counter + 1); 

        //functional update (when the new value depends on the previous value)
        setCounter( (prevCounter) => {
            const newValue = prevCounter + 1;
            return newValue;
        });

    }

    const decreaseCounter = () => {
        // setCounter(counter - 1); // whenever the new state depends on the previous state, we should use a "functional update" instead

        setCounter((prevCounter) => {
            if(prevCounter === 0){
                return 0;
            } else {
                return prevCounter - 1;
            }
        });

    }


    // console.log("returning new JSX....");

    return (
        <header className={classString}>
            <h1>This is the header component</h1>
            {props.children}

            <hr />

            <h2>Number of likes: {counter}</h2>

            <button onClick={decreaseCounter}>Decrease Counter</button>
            <button onClick={increaseCounter}>Increase Counter</button>

            <hr />



        </header>
    );
}

export default Header;