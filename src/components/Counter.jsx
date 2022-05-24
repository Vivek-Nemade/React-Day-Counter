import React, { useState } from "react";

const Counter =()=>{
    const [count, setcount] = useState(0);


    const countColor =() =>{
        if(count%2===0){
            return true
        }else if(count%2===1){
            return false;
        }
    }
    return (

        <div className={countColor()? 'even':'odd'}>
            <h1 className="Count">Counter App: {count}</h1>
            <button onClick={() => setcount(count + 1)}>Increment</button>
            <button onClick={() => setcount(count - 1)}>Decrement</button>
            <button onClick={() => setcount(count * 2)}>Double</button>
        </div>
    );
};

export default Counter;