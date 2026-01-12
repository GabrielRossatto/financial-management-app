import styles from "./Button.module.css";

export function CancelButton({
  children = "Cancelar",
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles.cancelar} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
