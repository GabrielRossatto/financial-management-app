import styles from './ContasBancarias.module.css'
import { contasBancariasFields } from './formConfig'
import { Form } from '../../components/Forms/Form'

export function ContasBancarias() {

    function handleSubmit(data) {
        console.log('Forma de pagamento:', data)
  }



    return (
        <div>

            <div className={styles.wrapper_title}>
                <h1>Cadastro de Contas Financeiras</h1>
            </div>

            <Form
                fields={contasBancariasFields}
                onSubmit={handleSubmit}
            
            />


                
        </div>
    )
}