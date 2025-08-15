export const metadata = {
  title: "MediClinic Portal",
  description: "Internal staff portal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Inter",
        margin: 0,
        background: "#f0f2f5",
        color: "#111"
      }}>
        <header style={{
          padding: "16px 20px",
          borderBottom: "1px solid #ddd",
          background: "#4f46e5",
          color: "#fff",
          fontWeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
        }}>
          <strong>MediClinic Portal</strong>
          <nav>
            <a href="/" style={{color: "#fff", marginRight: 16, textDecoration: "none"}}>Accueil</a>
            <a href="/login" style={{color: "#fff", textDecoration: "none"}}>Connexion</a>
          </nav>
        </header>
        <main style={{
          padding: "32px 24px",
          maxWidth: 960,
          margin: "0 auto",
        }}>
          {children}
        </main>
        <footer style={{
          padding: "16px 20px",
          borderTop: "1px solid #ddd",
          textAlign: "center",
          fontSize: 14,
          color: "#555"
        }}>
          © 2025 MediClinic | Made by Next JS 13.5.8
        </footer>
      </body>
    </html>
  );
}
