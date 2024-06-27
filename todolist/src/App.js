import React, { useState, useEffect } from 'react';
import './App.css';
import Todolist from './components/todolist/Todolist';
import Todo_Output from './components/todolist_output/Todo_Output';

function App() {
  const [task, setTask] = useState([{ id: 1, title: 'hello todo' }]);
  const [index, setindex] = useState(null);
  const [newtitle, setnewTitle] = useState('');

  function onAddingdata(param) {
    setTask([...task, param])
  }
  function ondeletingTask(param) {
    setTask(param);
  }
  function onupdatingTask(param1) {
    setindex(param1);
    setnewTitle(task[param1].title);
  }
  function onUpdatingTitle(param1) {
    setTask(param1);
  }

  useEffect(() => {
    if (task.length > 1) {
      let arr = [...task];
      localStorage.setItem('myArray', JSON.stringify(arr));
    }
  }, [task]);

  useEffect(() => {
    const myArray = localStorage.getItem('myArray');
    if (myArray) {
      let arr = JSON.parse(myArray);
      setTask(arr);
    }
  }, []);
  return (
    <>
      <div className='main'>
        <h1>Todo_List_App</h1>
        <div className='todoContainer'>
          <Todolist
            addingData={onAddingdata}
            titleforUpdation={newtitle}
            // titleChanged={changingTitle}
            Task={task}
            Index={index}
          />
          <Todo_Output
            Data={task}
            deleting={ondeletingTask}
            Task={task}
            updatingTask={onupdatingTask}
            OnUpdatingTitle={onUpdatingTitle}
          />
        </div>

      </div>
    </>
  );
}

export default App;
