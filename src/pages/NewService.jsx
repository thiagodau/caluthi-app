import { Link } from 'react-router-dom'

export default function NewService() {
  return(
    <>
      <h1>Add new service</h1>
      <Link to={'/dashboard/services'}>Voltar.</Link>
      <div>
        <h1>Adicionar</h1>
      </div>
    </>
  )
}