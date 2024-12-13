import { useState } from "react";
import Todolist from "./Todolist";

export default function Todos(){

    const  [todos, settodos] = useState([
        {
            id:1,
            title:'Sample Task : Add Task With Enter',
            status:false
        },
    ])

    function deleteTodo(deltodo){
        settodos(todos.filter((todo) => todo.id !== deltodo.id))
    }

    function onkeydownhandler(e){
        if (e.key === "Enter" &&  inpvalue !== '') {
            let newid
            todos[0] ? newid = todos.length + 1 :newid = 1
            settodos([...todos,{title:inpvalue,status:false,id:newid}])
            setinpvalue('')
        }
    }

    function todoOnChange(changetodo){
        let newtodos = todos.map((todo) =>{
            if(changetodo.id === todo.id){
                todo.status = !todo.status
            }
            return todo
        })
        settodos(newtodos)
        
    }

    function todotitleChange(changetodo, newtiltevalue){
        let newtodos = todos.map((todo) =>{
            if(changetodo.id === todo.id){
                todo.title = newtiltevalue
            }
            return todo
        })
        settodos(newtodos)
        
    }

    const [inpvalue, setinpvalue] = useState('')

    return(
        <div className="w-full flex items-center justify-center h-screen">
			<div className="w-10/12 px-8 py-8 mx-auto shadow lg:w-1/3 rounded-3xl bg-white">
			<div className="flex items-center mb-6">
				<h1 className="text-4xl font-bold text-green-600"> TO DO APP</h1>
			</div>
			<div className="w-full">
				<input
				className="w-full border rounded-3xl border-gray-500 pl-5 p-2"
				type="text"
				placeholder="Add a New Task"
                value={inpvalue}
                onChange={(e)=>{setinpvalue(e.target.value)}}
                onKeyDown={(e) => {onkeydownhandler(e)}}
				></input>
			</div>
			<Todolist todos={todos} d={deleteTodo} c={todoOnChange} e={todotitleChange}/>

		</div>
		</div>
    )
}