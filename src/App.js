import React from 'react';
import './App.css';
import Input from './components/Input'
import toDoItem from './components/toDoItem'
const toDoList = [{
  item: 'todo',
  done: false,
  id: Date.now()
}]
function App() {
  return (
    <div className="App">
      <div className='app__container'>
        <div className='app__toDoContainer'>
        {toDoList.map(item => (
            <toDoItem
              name={item.item}
              done={item.done}
              id={item.id}
             />
        ))}

        </div>
        <Input/>
      </div>
 
      
    </div>
  );
}

export default App;
