import {cadastroFields} from './CadastroFields'
import { Form } from '../../components/Forms/Form'
import styles from './CadastroUser.module.css'
import { useNavigate } from 'react-router-dom'

export function CadastroUser() {

    const navigate = useNavigate()
    return <>


    <div className={styles.wrapper_container}>
      <div className={styles.login_card}>
        <h1 className={styles.title}>Cadastro</h1>


        <Form 
            fields={cadastroFields}
            submitLabel="Cadastrar"
            submitLabelCancel="Voltar"
            onCancel={() => navigate('/login')}
            
            onSubmit={(data) => console.log(data)}

           
        />
      </div>
    </div>

    
    </>
}