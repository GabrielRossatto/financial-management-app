import styles from "./Filters.module.css";

export function Filters({
  schema = [],
  value = {},
  onChange = () => {},
}) {
  const setField = (name, nextValue) => {
    onChange({ ...value, [name]: nextValue });
  };

  return (
    <div className={styles.bar}>
      <div className={styles.left}>
        <span className={styles.badge}>Filtros</span>
      </div>

      <div className={styles.fields}>
        {schema.map((f) => (
          <div className={styles.field} key={f.name}>
            {f.type === "text" && (
              <input
                className={styles.input}
                type="text"
                placeholder={f.placeholder || f.label}
                value={value[f.name] ?? ""}
                onChange={(e) => setField(f.name, e.target.value)}
              />
            )}

            {f.type === "date" && (
              <input
                className={styles.input}
                type="date"
                value={value[f.name] ?? ""}
                onChange={(e) => setField(f.name, e.target.value)}
              />
            )}

            {f.type === "number" && (
              <input
                className={styles.input}
                type="number"
                placeholder={f.placeholder || f.label}
                value={value[f.name] ?? ""}
                onChange={(e) => setField(f.name, e.target.value)}
              />
            )}

            {f.type === "select" && (
              <select
                className={styles.input}
                value={value[f.name] ?? ""}
                onChange={(e) => setField(f.name, e.target.value)}
              >
                {(f.options || []).map((opt) => (
                  <option key={String(opt.value)} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.btnGhost}>
          Limpar
        </button>
        <button type="button" className={styles.btn}>
          Aplicar
        </button>
      </div>
    </div>
  );
}
