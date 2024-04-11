import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const isHigh = count > 10
    const handleIncrementClick = () => {
        setCount((v) => v + 1);
    }
     const handleDecrementClick = () => {
        setCount((v) => v - 1);
    }
    return (
        <div>
            <div>
                Count is {count}
            </div>
            {isHigh && <div>Counter is too high!!!</div>}
            <button onClick={handleIncrementClick}>
                Increment
            </button>
            <button onClick={handleDecrementClick}>
                Decrement
            </button>
        </div>
    )
}