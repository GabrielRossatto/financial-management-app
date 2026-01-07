import styles from './Login.module.css'
import { Form } from '../../components/Forms/Form'
import { fieldsLogin } from './fieldsLogin'
import { Link } from 'react-router-dom'

export function Login() {
    return <>

    <div className={styles.wrapper_container}>
      <div className={styles.login_card}>
        <h1 className={styles.title}>Login</h1>


        <Form 
            fields={fieldsLogin}
            submitLabel="Entrar"
            showCancel={false}
            onSubmit={(data) => console.log(data)}
        />

        <p className={styles.registerText}>
        Não tem uma conta?{' '}
        <Link to="/cadastroUser">Criar agora</Link>
        </p>
      </div>
    </div>
    </>
}