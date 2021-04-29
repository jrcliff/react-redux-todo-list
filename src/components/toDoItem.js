import React from 'react'

const toDoItem = ({name, done, id}) => {
    return (
        <div className='toDoItem'>
            {/* checkbox */}
            {/* name */}
            <p className={done && 'toDoItem--done'}>{name}</p>
        </div>
    )
}

export default toDoItem
