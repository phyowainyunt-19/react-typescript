import React from 'react'
import { useReducer } from "react"
import { CounterState, CounterAction } from '../types/Counter.types'

const initialState = { count: 0 }

function reducer(state: CounterState, action: CounterAction) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + action.payload }
        case 'decrement':
            return { count: state.count - action.payload }
        case 'reset':
            return initialState
        default:
            return state
    }
}
//! (action.payload || 0) is also fine.

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            {/* {state.count < 0 ? (<>
                STOP
            </>) : (<>Count = {state.count}</>)} */}
            Count = {state.count}
            <br />
            <button onClick={() => dispatch({ type: 'increment', payload: 10 })}>
                Increment (+)
            </button>
            <button onClick={() => dispatch({ type: 'decrement', payload: 10 })}>
                Decrement (-)
            </button>
            <button onClick={() => dispatch({ type: 'reset' })}>
                Reset
            </button>
        </>
    )
}

export default Counter