import styles from './Button.module.css';

export function SaveButton({ children = 'Salvar', onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
}