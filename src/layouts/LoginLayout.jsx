import { Outlet } from "react-router-dom";

export default function LoginLayout() {
  return (
    <>
      <main
        style={{
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyItems: "center",
          textAlign: "center",
        }}
      >
        <div style={{ border: "1px solid #fff", padding: "1rem", borderRadius: '.3rem' }}>
          <Outlet />
        </div>
      </main>
    </>
  );
}
