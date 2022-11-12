import { useState, useRef, useCallback, useEffect } from "react";
import { TodoTemplate } from "./components/TodoTemplate";
import { TodoInsert } from "./components/TodoInsert";
import { TodoList } from "./components/TodoList";

function App() {
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "",
  //     checked: false,
  //     doneTime: "",
  //   },
  // ]);
  // const [todo, setTodo] = useState();
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const localTodoList = localStorage.getItem('todoList');
    console.log(localTodoList);
    if (localTodoList) {
      setTodos(localTodoList);
    }
  },[todos]);

  const nextId = useRef(4);

  const onInsert = (text) => {
    const tempTodo = {
      id: nextId.current,
      text,
      checked: false,
      doneTime: "",
    };
    // setTodos((todos) => todos.concat(todo));
    localStorage.setItem(tempTodo.id, tempTodo);
    setTodos(localStorage.getItem("todoList"));

    nextId.current += 1;
  };

  const onRemove = (id) => {
    localStorage.removeItem(id);
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));
    // localStorage.removeItem(todos);
    setTodos(localStorage.getItem("todoList"));
  };

  const getDate = (todo) => {
    if (!todo.checked && todo.doneTime === "") {
      const date = new Date();
      const dateContent = `  ( ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()} 완료 )`;
      return todo.text + dateContent;
    } else return todo.text;
  };

  const onToggle = useCallback((id) => {
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
  }, []);

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
}

export default App;
