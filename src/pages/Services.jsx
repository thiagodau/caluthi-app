import { Link } from 'react-router-dom'

export default function Services() {
  return (
    <>
      <h1>Services here.</h1>
      <div>
        <Link to={'/dashboard/services/new'}>Adicionar Seviços</Link>
      </div>
      <br />
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Serviço</th>
              <th>Descrição</th>
              <th>Quantidade de Tempo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Titulo do servico</td>
              <td>Descricao do servico.</td>
              <td>X horas</td>
              <td>
                <button>Editar</button>
                <button>Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
