import React, { useState, useEffect } from 'react';
import './Todolist.css';

const Todolist = (props) => {
    const newArray = [...props.Task];
    const builtArray = [...newArray];
    const [inputValue, updateInput] = useState('');
    const changingInputvalue = (event) => {
        updateInput(event.target.value);
    }
//     useEffect(()=>{
// console.log(builtArray);
//     },[builtArray])
const [index,setIndex] = useState(2);
// console.log(index);
    const formSubmitted = (event) => {
        event.preventDefault();
        setIndex(index+1);
        if (inputValue.trim() !== '') {
            if (builtArray[props.Index]) {
                console.log(inputValue);
                // props.titleChanged(inputValue);
                builtArray[props.Index].title = inputValue;
            } else {
                const obj = {
                    id: index,
                    title: inputValue
                }

                props.addingData(obj);
                updateInput('');
            }

        }
    }
  
   
    useEffect(() => {
        const title = props.titleforUpdation;
        const updateTitle = () => {
            updateInput(title);
        };
        updateTitle();

        
    }, [props.titleforUpdation]);

    return (
        <>
            <form className='todo_inputs' onSubmit={formSubmitted}>
                <input className='text_input' type="text" onChange={changingInputvalue} placeholder='Add your task...' value={inputValue} />
                <input className='btn_input' type="submit" value='Add' />
            </form>
        </>
    );
}
export default Todolist;
