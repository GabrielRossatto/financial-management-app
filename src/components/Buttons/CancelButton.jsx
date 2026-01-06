import styles from './Button.module.css';

export function CancelButton({ children = 'Cancelar', onClick, type = 'button' }) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles.cancelar}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}