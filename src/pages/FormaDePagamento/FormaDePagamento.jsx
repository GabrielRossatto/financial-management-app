// pages/FormaDePagamento/FormaDePagamento.jsx
import styles from './FormaDePagamento.module.css'
import { Form } from '../../components/Forms/Form'
import { formaDePagamentoFields } from './formConfig'



export function FormaDePagamento() {


  function handleSubmit(data) {
    console.log(data)

    }
  
  return (
    <div className={styles.container}>

      <div className={styles.wrapperTitle}>
        <h1>Cadastro de Forma de Pagamento</h1>

      </div>

      
      <Form
        fields={formaDePagamentoFields}
        onSubmit={handleSubmit}
      />
    </div>
   ) 
}