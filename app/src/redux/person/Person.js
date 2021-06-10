import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectCount, increment} from "../counter/counterSlice";
import {useEffect} from "react";
import {selectName, selectAge, setName, setAge} from './PersonSlice';

export function Person() {
    const count = useSelector(selectCount);
    const name = useSelector(selectName);
    const age = useSelector(selectAge);
    const dispatch = useDispatch();

    useEffect(function () {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(data => {
                    dispatch(setName(data[0]["name"]))
                    dispatch(setAge(data[0]["age"]))
                }
            )
    })
    return (
        <div>
            <button
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >Click
            </button>
            <h1>{count}</h1>
            <input onChange={(e) => dispatch(setName(e.target.value))}/>
            <h1>{name}, {age}</h1>
        </div>
    );
}
