import { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

export function TodoInsert({onInsert}) {
  const [value, setValue] = useState("");

  const onSubmit = useCallback(
    (e)=>{ 
        onInsert(value);
        setValue('');

        e.preventDefault();
  }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할일을 입력하새오" value={value} 
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button type="submit" onSubmit={onSubmit}>
        <MdAdd />
      </button>
    </form>
  );
}
