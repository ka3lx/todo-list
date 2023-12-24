import { ChangeEvent, useState } from "react";

import styles from "./styles.module.css";

type AddTodoProps = {
  handleAdd: (description: string) => void;
};

function AddTodo({ handleAdd }: AddTodoProps) {
  const [desc, setDesc] = useState<string>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setDesc(value);
  }

  function handleClick() {
    if (desc) {
      handleAdd(desc);
      setDesc("");
    }
  }

  return (
    <div className={styles.container}>
      <input
        type='text'
        placeholder='Start typing...'
        value={desc}
        onChange={handleChange}
      />
      <button onClick={handleClick} className={styles.createBtn}>
        Create
      </button>
    </div>
  );
}

export default AddTodo;
