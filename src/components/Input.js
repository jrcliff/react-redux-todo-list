import React, { useState } from 'react'
import './Input.css'

import { useDispatch } from 'react-redux'
import { saveToDo } from '../features/toDoSlice'

const Input = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addToDo = () => {
        // console.log(toDoList);

        dispatch(saveToDo({
            item: input,
            done: false,
            id: Date.now() 
        }))
    }


    return (
            
        <div className='input'>
            
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button type='submit' onClick={addToDo}>Add!</button>
        </div>
    )
}

export default Input
