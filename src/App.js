import { useState, useRef, useCallback } from "react";
import { TodoTemplate } from "./components/TodoTemplate";
import { TodoInsert } from "./components/TodoInsert";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "☀️굿모닝~! 오늘도 감사하고 활기찬 하루 시작~!",
      checked: false,
      doneTime :""
    },
  ]);
  
  const nextId = useRef(4);

  const onInsert = useCallback(
  (text)=>{
    const todo={
      id: nextId.current,
      text,
      checked: false,
      doneTime:"",
    };
    setTodos((todos)=>todos.concat(todo));
    nextId.current += 1;
    }, []
  );

  const onRemove = useCallback(
    (id)=>{
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }, []
  );
  
  const getDate = (todo) => {
    if(!todo.checked && todo.doneTime===""){
      const date = new Date();
      const dateContent = `  ( ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} 완료 )`;
      return todo.text + dateContent;
    } else return todo.text;
  };

  const onToggle = useCallback(
    (id)=>{
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id
            ? {
                ...todo,
                checked: !todo.checked,
                text: getDate(todo),
                doneTime: getDate(todo),
              }
            : todo
        )
      );
    },[]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
    </TodoTemplate>
  );
}

export default App;
