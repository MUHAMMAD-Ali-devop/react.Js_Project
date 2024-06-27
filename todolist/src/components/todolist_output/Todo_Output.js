import React, { useState, useEffect } from 'react';
import './Todo_Output.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPen } from '@fortawesome/free-solid-svg-icons';

const Todo_Output = (props) => {
    
    const [items, setItems] = useState([]);
  
    const [isEditable, setIsEditable] = useState(null);
    
    useEffect(() => {
        setItems([...props.Data]);
    }, [props.Data]);

    const deleteTask = (index) => {
        const updatedItems = items.filter((_, i) => i !== index);
        setItems(updatedItems);
        props.deleting(updatedItems);
    };

    const updateTask = (index) => {
        setIsEditable(index);
    };

    const changeHandler = (event, index) => {
        
        const newValue = event.target.value;
        const updatedItems = [...items];
        if (updatedItems[index].title !== newValue) {
            updatedItems[index].title = newValue;
            setItems(updatedItems);
        }
    };
    const formSubmitted = (event)=>{
        event.preventDefault();
        props. OnUpdatingTitle(items);
        setIsEditable(false);
    }
    
    return (
        <div className='addedMain'>
            <div className='addedTasksContainer'>
                {
                    items?.map((element, index) =>
                        <div className='task' key={index}>
                            <form onSubmit={formSubmitted}>
                            <input
                                className='taskTitle'
                                type="text"
                                onChange={(e) => changeHandler(e, index)}
                                value={element.title}
                                disabled={isEditable !== index}
                            />
                            </form>
                            <div className='taskBtn'>
                                <button className='updateBtn' onClick={() => updateTask(index)}>
                                    <FontAwesomeIcon icon={faPen} />
                                </button>
                                <button className='deleteBtn' onClick={() => deleteTask(index)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

export default Todo_Output;

 // useEffect(()=>{
    //     let arr = JSON.parse(localStorage.getItem('myArray'));
    //    console.log(arr);
    //     for(let arr1 in arr){
            
    //     }
    // },[])