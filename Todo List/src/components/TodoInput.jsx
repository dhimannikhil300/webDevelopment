import React, { useState } from 'react'

const TodoInput = (props) => {
    const [inputText, setInputText] = useState("");
    const handleEnterPress = (e) =>{
        if(e.keyCode===13){
            props.addList(inputText);
            setInputText("");
        }
    }
  return (
    <div className='flex jc mb-3 mt-8 w-full mx-auto'>
        <input 
            type="text" 
            placeholder='Enter Your Todo'
            className='ml-3 w-[85%] h-10 rounded-full border-2 hover:border-[#000000]
                pl-3 text-lg pr-3'
            value={inputText}
            onChange={e=>{
                setInputText(e.target.value)
            }}
            onKeyDown={handleEnterPress}
            />
        <button 
            className='w-10 h-10 rounded-full bg-[#316fc1] text-white text-5xl
                ml-5 cursor-pointer duration-300 hover:scale-110 text-center hover:bg-white hover:text-[#316fc1]'
            onClick={()=>{
                props.addList(inputText)
                setInputText("");
            }}>
                <div className='-translate-y-[18%] text-center'>
                    +
                </div>
            </button>
        
    </div>
  )
}

export default TodoInput