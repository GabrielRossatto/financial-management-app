import { useForm, Controller } from 'react-hook-form'
import styles from './Form.module.css'

import { formatCurrency } from '../utils/Currency/formatCurrency'
import { parseCurrency } from '../utils/Currency/parseCurrency'
import { greaterThanZero } from '../utils/Validators/greaterThanZero'
import { CancelButton } from '../Buttons/CancelButton'
import { SaveButton } from '../Buttons/SaveButton'


export function Form({ fields, onSubmit, onCancel, submitLabel, submitLabelCancel, showCancel = true, variant, defaultValues = {}  }) {
  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  
  } = useForm( defaultValues )

  const bodyFields = fields.filter(f => !f.position)
  const footerFields = fields.filter(f => f.position === 'footer')

  const valorDebitado = Array.isArray(watch('valorDebitado'))
    ? watch('valorDebitado')
    : []
    
  return (
    <form
        className={`
          ${styles.formContainer}
          ${variant === 'modal' ? styles.formInModal : ''}
        `}
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* ======================
         INPUTS PRINCIPAIS
      ====================== */}
      {bodyFields.map(field => (
        <div key={field.name} className={styles.formGroup}>
          <label>{field.label}</label>

          <Controller
            name={field.name}
            control={control}
            defaultValue=""
            rules={{
              required: 'Campo obrigatório',
              ...(field.format === 'currency' && {
                validate: greaterThanZero
              })
            }}
            render={({ field: rhfField }) => (
              <input
                type={field.format === 'date' ? 'date' : 'text'}
                placeholder={field.placeholder}
                value={
                  field.format === 'currency'
                    ? formatCurrency(rhfField.value)
                    : rhfField.value || ''
                }
                onChange={e => {
                  let value = e.target.value

                  if (field.format === 'currency') {
                    value = parseCurrency(value)
                  }

                  // ⚠️ date fica crua (yyyy-mm-dd)
                  rhfField.onChange(value)
                }}
              />
            )}
          />

          {errors[field.name] && (
            <span className={styles.error}>
              {errors[field.name].message}
            </span>
          )}
        </div>
      ))}

      {/* ======================
         CHECKBOXES
      ====================== */}
      {footerFields.map(field => (
        <div key={field.name} className={styles.formGroup}>
          <label>{field.label}</label>

          <div className={styles.checkboxGroup}>
            {field.options.map(option => (
              <label key={option.value}>
                <input
                  type="checkbox"
                  value={option.value}
                  {...register(field.name)}
                />
                {option.label}
              </label>
            ))}
          </div>

          {/* ======================
             TAXA PERCENTUAL
          ====================== */}
          {valorDebitado?.includes('percentual') && (
            <div className={styles.formGroup}>
              <label>Taxa em %</label>
              <input
                type="text"
                placeholder="%"
                {...register('taxaPercentual', {
                  required: 'Campo obrigatório',
                  validate: greaterThanZero
                })}
              />

              {errors.taxaPercentual && (
                <span className={styles.error}>
                  {errors.taxaPercentual.message}
                </span>
              )}
            </div>
          )}

          {/* ======================
             TAXA EM REAIS
          ====================== */}
          {valorDebitado?.includes('reais') && (
            <div className={styles.formGroup}>
              <label>Taxa em R$</label>

              <Controller
                name="taxaReais"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Campo obrigatório',
                  validate: greaterThanZero
                }}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="R$"
                    value={formatCurrency(field.value)}
                    onChange={e =>
                      field.onChange(parseCurrency(e.target.value))
                    }
                  />
                )}
              />

              {errors.taxaReais && (
                <span className={styles.error}>
                  {errors.taxaReais.message}
                </span>
              )}
            </div>
          )}
        </div>
      ))}

      {/* ======================
         AÇÕES
      ====================== */}
      <div className={styles.actions}>
        <SaveButton type="submit">  {submitLabel} </SaveButton> 


        {showCancel && (
        <CancelButton onClick={onCancel}>
          
          {submitLabelCancel}
        
         </CancelButton> )}

      </div>
    </form>
  )
}