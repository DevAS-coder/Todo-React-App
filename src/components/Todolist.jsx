import Todo from "./Todo";

export default function Todolist({todos,d,c,e}) {
  return (
    <ul className="list-reset">
        {todos.map((todo,index) => <Todo key={index} todo={todo} d={d} change={c} edit={e}/>)}
    </ul>
  );
}
