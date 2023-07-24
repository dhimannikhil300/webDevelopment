import React from 'react'
import {AiFillDelete, AiOutlineCheck, AiOutlineArrowUp} from 'react-icons/ai'

const TodoList = (props) => {
  return (
    <div className='flex items-center mt-2'>
        {/* List render  */}
        <li className=' list-none border-2 border-[#9f9f9f11] hover:border-[#9f9f9f44] hover:scale-105 text-white p-1 rounded-[10px]
            w-full flex items-center relative mt-3 bg-[#33333328] backdrop-blur-[3px] duration-300 text-3xl group overflow-auto'>
            {props.item}    

            {/* Check icon  */}
            {
                props.check===true ? (
                    <div >
                        <AiOutlineCheck
                            className=' absolute right-12 -translate-y-4 text-3xl cursor-pointer duration-200 hover:scale-125
                                hover:text-green-500 group-hover:-translate-x-3 bg-[#1cff1444] backdrop-blur-[3px] rounded-full p-1 
                                hover:bg-white'
                            onClick={e=>{
                                props.complete(props.index)
                                props.deleteListItem(props.index)
                        }}
                        />
                    </div>
                ):(<div>
                    <AiOutlineArrowUp
                            className=' absolute right-12 -translate-y-4 text-3xl cursor-pointer duration-200 hover:scale-125
                                hover:text-green-500 group-hover:-translate-x-3 bg-[#1cff1444] backdrop-blur-[3px] rounded-full p-1 
                                hover:bg-white'
                            onClick={e=>{
                                props.unComplete(props.index)
                                props.deleteListItem(props.index)
                        }}
                        />
                </div>)
            }
                    
            
            

            {/* Delete icon  */}
            <AiFillDelete 
                className=' absolute right-2 text-3xl cursor-pointer duration-200 hover:scale-125
                    hover:text-red-600 group-hover:-translate-x-3 bg-[#ff0e0e44] backdrop-blur-[3px] rounded-full p-1 
                    hover:bg-white'
                onClick={e=>{
                    props.deleteListItem(props.index)
                }}
            />
        </li>
    </div>
  )
}

export default TodoList