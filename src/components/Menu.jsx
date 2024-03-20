import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div
      style={{ padding: "2rem", border: "1px solid #f2f2f2", height: "100vh" }}
    >
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/schedules">Agendamentos</Link>
        </li>
        <li>
          <Link to="/dashboard/services">Serviços</Link>
        </li>
        <li>
          <Link to="/">Sair.</Link>
        </li>
      </ul>
    </div>
  );
}
