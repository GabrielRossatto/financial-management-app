// pages/FormaDePagamento/FormaDePagamento.jsx
import styles from './FormaDePagamento.module.css'
import { Form } from '../../components/Forms/Form'
import { formaDePagamentoFields } from './formConfig'
import { useNavigate } from 'react-router-dom'


export function FormaDePagamento() {

  const navigate = useNavigate()
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
        defaultValues={{valorDebitado: []}}
        submitLabel="Salvar"
        submitLabelCancel="Voltar"
        onCancel={() => navigate('/meioDepagamento')}
        onSubmit={handleSubmit}
      />
    </div>
   ) 
}