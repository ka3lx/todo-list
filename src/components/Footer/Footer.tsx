import styles from "./styles.module.css";

type FooterProps = {
  remaining: number;
  clearCompleted: () => void;
};

function Footer({ remaining, clearCompleted }: FooterProps) {
  return (
    <div className={styles.footer}>
      <span>{remaining} items left</span>
      <span className={styles.clear} onClick={clearCompleted}>
        Clear completed
      </span>
    </div>
  );
}

export default Footer;
