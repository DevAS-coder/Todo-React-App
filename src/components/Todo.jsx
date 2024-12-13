import Edit from "./Edit";
import Delete from "./Delete";
import { useState } from "react";

export default function Todo({ todo, d, change , edit}) {
  const [editmode, setEditmode] = useState(false);

  function GetEnter(e){
    if(e.key === 'Enter'){
      edit(todo, e.target.value)
      setEditmode(false)
    }
    
  }

  return (
    <li className="">
      {editmode ? (
        <div className="w-full flex items-center mt-5">
          <input
            defaultValue={todo.title}
            type="text"
            className="w-full px-4 py-2 border rounded border-gray-400"
            onKeyDown={GetEnter}
          ></input>
          <Delete onClick={() => setEditmode(false)} />
        </div>
      ) : (
        <div className="relative flex items-center justify-between px-2 py-6 border-b">
          <div>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => {
                change(todo);
              }}
            />
            <p
              className={`inline-block mt-1 ml-2 text-gray-600 ${
                todo.status ? "line-through" : ""
              }`}
            >
              {todo?.title}
            </p>
          </div>
          <button className="flex items-center space-x-1">
            <Edit onClick={() => setEditmode(true)}/>
            <Delete onClick={() => d(todo)} />
          </button>
        </div>
      )}
    </li>
  );
}
