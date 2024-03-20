import { getUser } from "../hooks/useGetUser";

export default function Dashboard() {
  return (
    <>
      <h1>Seja bem vindo, { getUser().username }. 😎</h1>

      <br />
      
      <div>
        <h3>Seus dados:</h3>
        <ul>
          <li>E-mail: { getUser().email }</li>
        </ul>
      </div>
    </>
  );
}
