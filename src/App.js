import { useState, useRef, useCallback } from "react";
import { TodoTemplate } from "./components/TodoTemplate";
import { TodoInsert } from "./components/TodoInsert";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "일번",
      checked: false,
    },
    {
      id: 2,
      text: "이번",
      checked: false,
    },
    {
      id: 3,
      text: "삼번",
      checked: false,
    },
  ]);
  
  const nextId = useRef(4);

  const onInsert = useCallback(
  (text)=>{
    const todo={
      id: nextId.current,
      text,
      checked: false,
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

  const onToggle = useCallback(
    (id)=>{
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo
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
