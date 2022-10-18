import {TodoListItem} from "./TodoListItem";

export function TodoList({todos, onRemove, onToggle}){
    return (
      <div className="TodoList">
        {todos.map((item)=> <TodoListItem todo={item} key={item.id} onRemove={onRemove} onToggle={onToggle}/>)}
      </div>
    );
}

