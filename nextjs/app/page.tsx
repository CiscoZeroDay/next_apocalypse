import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
      textAlign: "center",
      padding: "0 16px",
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      color: "#111",
    }}>
      <h1 style={{fontSize: "2.2rem", marginBottom: 16, color: "#4f46e5"}}>
        Bienvenue sur le portail MediClinic
      </h1>
      <p style={{fontSize: "1.1rem", marginBottom: 12}}>
        Veuillez vous <Link href="/login" style={{color: "#4f46e5", textDecoration: "underline"}}>connecter</Link> pour accéder au tableau de bord.
      </p>
      <p style={{fontSize: "1rem"}}>
        Zone admin: <Link href="/admin" style={{color: "#4f46e5", textDecoration: "underline"}}>/admin</Link>
      </p>
    </div>
  );
}
