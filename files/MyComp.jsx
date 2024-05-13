import React, { useState } from 'react';

function MyComp() {
    const [count, setCount] = useState(0);
    const [exporter, setExport] = useState("");
    
    const [car, setCar] = useState({year: 2025, 
                                    make: "Ford",
                                    model: "Mustang"});

    function handleYearChange(event){
        setCar(c => ({...c, year: event.target.value}));
    }

    
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
    }

    
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    function increment() {
        setCount(count + 1);
    };

    function decrement(){
        setCount(ab => ab - 1);
    };

    function reset(){
        setCount(0);
    }

    function handleName(event){
        setExport(event.target.value);
    }

    return (
        <div>
            <p>count: {count}</p>
            <button onClick={decrement}>Decrement </button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment </button><br/><br/>

            <input value={exporter} placeholder='Name It' onChange={handleName}/>
            <p>Your Name: {exporter}</p>

            <p>Your favrite car is: {car.year} {car.make} {car.model}</p>

            <input type='number' value={car.year} onChange={handleYearChange}/><br/>
            <input type='text' value={car.make} onChange={handleMakeChange}/><br/>
            <input type='text' value={car.model} onChange={handleModelChange}/><br/>
        </div>
    )
}



export default MyComp