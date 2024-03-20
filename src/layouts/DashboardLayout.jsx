import { Outlet } from "react-router-dom";

import Menu from "../components/Menu";

export default function DashboardLayout() {
  return (
    <>
      <main style={{display: 'flex'}}>
        <Menu />

        <div style={{padding: '2em'}}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
