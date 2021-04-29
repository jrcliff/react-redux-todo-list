import React from 'react'
import CheckBox from '@material-ui/core/CheckBox'
import './ToDoItem.css'

import {useDispatch} from 'react-redux'
import setCheck from '../features/toDoSlice'

const ToDoItem = ({name, done, id}) => {
    const dispatch = useDispatch()
    const handleCheck = () => {
        dispatch(setCheck(id))
    }
    return (
        <div className='toDoItem'>
        <CheckBox
            checked={done}
            color='primary'
            onChange={handleCheck}
            inputProps={{'aria-label': 'secondary checkbox'}}
         />
            <div className={done && 'toDoItem--done'}>{name}</div>
        </div>
    )
}

export default ToDoItem
