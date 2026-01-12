import { useForm, Controller } from "react-hook-form";
import styles from "./Form.module.css";

import { formatCurrency } from "../utils/Currency/formatCurrency";
import { parseCurrency } from "../utils/Currency/parseCurrency";
import { greaterThanZero } from "../utils/Validators/greaterThanZero";
import { CancelButton } from "../Buttons/CancelButton";
import { SaveButton } from "../Buttons/SaveButton";

function getFieldKind(field) {
  // suporte legado: field.format (você usava isso antes)
  const t = field.type ?? field.format ?? "text";
  return t;
}

function buildRules(field) {
  const rules = {};
  if (field.required) rules.required = "Campo obrigatório";
  if (field.format === "currency") rules.validate = greaterThanZero;
  return rules;
}

function TextLikeField({ field, control, defaultValues }) {
  const isDate = getFieldKind(field) === "date";
  const isCurrency = field.format === "currency";

  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={defaultValues?.[field.name] ?? ""}
      rules={buildRules(field)}
      render={({ field: rhf }) => (
        <input
          type={isDate ? "date" : "text"}
          placeholder={field.placeholder}
          value={isCurrency ? formatCurrency(rhf.value) : rhf.value || ""}
          onChange={(e) => {
            const raw = e.target.value;
            rhf.onChange(isCurrency ? parseCurrency(raw) : raw);
          }}
        />
      )}
    />
  );
}

function SelectField({ field, control, defaultValues }) {
  return (
    <Controller
      name={field.name}
      control={control}
      defaultValue={defaultValues?.[field.name] ?? ""}
      rules={buildRules(field)}
      render={({ field: rhf }) => (
        <select value={rhf.value ?? ""} onChange={(e) => rhf.onChange(e.target.value)}>
          <option value="" disabled>
            Selecione...
          </option>
          {(field.options ?? []).map((opt) => (
            <option key={String(opt.value)} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      )}
    />
  );
}

function RadioField({ field, register }) {
  return (
    <div className={styles.radioGroup}>
      {(field.options ?? []).map((opt) => (
        <label key={String(opt.value)} className={styles.radioItem}>
          <input
            type="radio"
            value={opt.value}
            {...register(field.name, buildRules(field))}
          />
          {opt.label}
        </label>
      ))}
    </div>
  );
}

function CheckboxField({ field, register, defaultValues }) {
  return (
    <div className={styles.inlineCheck}>
      <input
        type="checkbox"
        {...register(field.name, buildRules(field))}
        defaultChecked={Boolean(defaultValues?.[field.name])}
      />
      <span>{field.label}</span>
    </div>
  );
}

function FieldRenderer({ field, register, control, defaultValues }) {
  const kind = getFieldKind(field);

  if (kind === "radio") return <RadioField field={field} register={register} />;
  if (kind === "select") return <SelectField field={field} control={control} defaultValues={defaultValues} />;
  if (kind === "checkbox") return <CheckboxField field={field} register={register} defaultValues={defaultValues} />;

  return <TextLikeField field={field} control={control} defaultValues={defaultValues} />;
}

export function Form({
  fields,
  onSubmit,
  onCancel,
  submitLabel = "Salvar",
  submitLabelCancel = "Cancelar",
  showCancel = true,
  variant,
  defaultValues = {},
}) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ defaultValues });

  const bodyFields = fields.filter((f) => !f.position);
  const footerFields = fields.filter((f) => f.position === "footer");

  const valorDebitado = watch("valorDebitado");
  const valorDebitadoArr = Array.isArray(valorDebitado) ? valorDebitado : [];

  return (
    <form
      className={`${styles.formContainer} ${variant === "modal" ? styles.formInModal : ""}`}
      onSubmit={handleSubmit(onSubmit)}
    >
   
      {bodyFields.map((field) => {
        const kind = getFieldKind(field);
        const showLabel = kind !== "checkbox"; 

        return (
          <div key={field.name} className={styles.formGroup}>
            {showLabel && <label>{field.label}</label>}

            <FieldRenderer
              field={field}
              register={register}
              control={control}
              defaultValues={defaultValues}
            />

            {errors[field.name] && (
              <span className={styles.error}>{errors[field.name].message}</span>
            )}
          </div>
        );
      })}

      {footerFields.map((field) => (
        <div key={field.name} className={styles.formGroup}>
          <label>{field.label}</label>

          <div className={styles.checkboxGroup}>
            {(field.options ?? []).map((opt) => (
              <label key={String(opt.value)} className={styles.checkItem}>
                <input type="checkbox" value={opt.value} {...register(field.name)} />
                {opt.label}
              </label>
            ))}
          </div>

          {valorDebitadoArr.includes("percentual") && (
            <div className={styles.formGroup}>
              <label>Taxa em %</label>
              <input
                type="text"
                placeholder="%"
                {...register("taxaPercentual", {
                  required: "Campo obrigatório",
                  validate: greaterThanZero,
                })}
              />
              {errors.taxaPercentual && (
                <span className={styles.error}>{errors.taxaPercentual.message}</span>
              )}
            </div>
          )}

          {valorDebitadoArr.includes("reais") && (
            <div className={styles.formGroup}>
              <label>Taxa em R$</label>

              <Controller
                name="taxaReais"
                control={control}
                defaultValue=""
                rules={{ required: "Campo obrigatório", validate: greaterThanZero }}
                render={({ field: rhf }) => (
                  <input
                    type="text"
                    placeholder="R$"
                    value={formatCurrency(rhf.value)}
                    onChange={(e) => rhf.onChange(parseCurrency(e.target.value))}
                  />
                )}
              />

              {errors.taxaReais && (
                <span className={styles.error}>{errors.taxaReais.message}</span>
              )}
            </div>
          )}
        </div>
      ))}

      <div className={styles.actions}>
        <SaveButton type="submit">{submitLabel}</SaveButton>

        {showCancel && (
          <CancelButton
            onClick={(e) => {
              e.preventDefault();
              onCancel?.();
            }}
          >
            {submitLabelCancel}
          </CancelButton>
        )}
      </div>
    </form>
  );
}
