import CloseIcon from "../../Icons/Close";
import { Todo } from "../../types/todo";
import StatusIcon from "./StatusIcon";

import styles from "./styles.module.css";

type ItemProps = {
  id: string;
  isDone: boolean;
  description: string;
  markItemDone: (todo: Todo) => void;
  deleteItem: (id: string) => void;
};

function Item({
  id,
  isDone,
  description,
  markItemDone,
  deleteItem,
}: ItemProps) {
  return (
    <div className={styles.container}>
      <span>
        <span onClick={() => markItemDone({ isDone: true, description, id })}>
          <StatusIcon isDone={isDone} />
        </span>
        <span className={styles.description}>{description}</span>
      </span>

      <span className={styles.closeIcon} onClick={() => deleteItem(id)}>
        <CloseIcon />
      </span>
    </div>
  );
}

export default Item;
