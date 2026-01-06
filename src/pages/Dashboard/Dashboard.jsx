import { lancamentos } from './Dashconfig'
import styles from './Dashboard.module.css'

export function Dashboard( ) {
    return (


        <div className={styles.container}>

            <div className={styles.wrapper_title}>
                <h1>Dashboard</h1>

            </div>

            <table>


                <thead>

                    <tr>
                    
                        <th>ID</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Descrição</th>
                        <th>Conta</th>
                    </tr>
                </thead>

                <tbody>

                    

                    {lancamentos.map(i => (

                        <tr key={i.id}>
                            <td>{i.id}</td>
                            <td>{i.tipo}</td>
                            <td>{i.valor}</td>
                            <td>{i.data}</td>
                            <td>{i.descricao}</td>
                            <td>{i.conta}</td>
                        </tr>
                    )) }

                    

                </tbody>
            </table>





        </div>
    )
}