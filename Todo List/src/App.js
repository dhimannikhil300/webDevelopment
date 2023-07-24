import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import {AiFillDelete} from 'react-icons/ai'

function App() {
  const [listTodo, setListTodo] = useState([]);
  const [listCompleteTodo, setListCompleteTodo] = useState([]);
  const addList = (inputText) => {
    if(inputText!=""){
      setListTodo([...listTodo, inputText]);
    }
  }

  const deleteListItem1 = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  }

  const deleteListItem2 = (key) => {
    let newListTodo = [...listCompleteTodo];
    newListTodo.splice(key, 1);
    setListCompleteTodo([...newListTodo]);
  }

  const complete = (key) => {
    setListCompleteTodo([...listCompleteTodo, listTodo[key]]);
  }

  const unComplete = (key) => {
    setListTodo([...listTodo, listCompleteTodo[key]])
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-[#1e1e1e] bg-gradient-to-r from-[#0bacf790] to-[#4c4db180] relative '>
      <div className='w-[700px] mb-6'>
          {/* input area  */}
        <TodoInput addList={addList}/>


        {/* heading of list  */}
        <div className='flex justify-between items-baseline'>
          <h1 className='p-[4px] text-white uppercase text-4xl font-bold tracking-[5px] text-center'>ToDo List</h1>
          <AiFillDelete
              className='text-4xl cursor-pointer duration-200 hover:scale-125 text-white
                      hover:text-red-600 group-hover:-translate-x-3 bg-[#ff0e0e44] backdrop-blur-[3px] rounded-full p-1 
                      hover:bg-white'
              onClick={()=>{
                setListTodo([]);
              }}
          />
        </div>
        <hr />
        {/* Print List  */}
        {
          listTodo.length===0 ? (<div className='p-[4px] text-white uppercase text-2xl tracking-[2px] text-center'> 
            You have No ToDo Now</div>):
          (
            listTodo.map((item, index)=>{
            return (
              <TodoList key={index} index={index} item={item} deleteListItem={deleteListItem1} complete={complete} check={true}/>
            )
          })
          )
          
        }

        {/* Complete Todo  */}
        <div className='flex justify-between items-baseline'>
          <h1 className='p-[4px] text-white uppercase text-4xl font-bold tracking-[5px] text-center mt-10'>ToDo Complete List</h1>
          <AiFillDelete
              className='text-4xl cursor-pointer duration-200 hover:scale-125 text-white
                      hover:text-red-600 group-hover:-translate-x-3 bg-[#ff0e0e44] backdrop-blur-[3px] rounded-full p-1 
                      hover:bg-white'
              onClick={()=>{
                setListCompleteTodo([]);
              }}
          />
        </div>
        <hr />
        {
          listCompleteTodo.length===0 ? (<div className='p-[4px] text-white uppercase text-2xl tracking-[2px] text-center'> 
            You have No Complete ToDo Now</div>):
          (
            listCompleteTodo.map((item, index)=>{
            return (
              <TodoList key={index} index={index} item={item} deleteListItem={deleteListItem2} check={false} unComplete={unComplete}/>
            )
          })
          )
          
        }
      </div>

    </div>
  );
}

export default App;
