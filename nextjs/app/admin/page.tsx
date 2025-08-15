export const dynamic = "force-dynamic";

export default async function Admin() {
  // Le flag est stocké côté serveur
  const flag = process.env.FLAG || "CTF{next_middleware_should_not_be_your_only_guard}";

  return (
    <div style={{
      maxWidth: 800,
      margin: "0 auto",
      padding: "32px 24px",
      background: "#fff",
      borderRadius: 12,
      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      color: "#111"
    }}>
      <h2 style={{color: "#4f46e5", marginBottom: 16}}>Admin Dashboard</h2>
      <p style={{marginBottom: 24}}>Bienvenue, docteur.</p>
      <div style={{
        background: "#f0f2f5",
        padding: 16,
        borderRadius: 8,
        border: "1px solid #ddd",
        fontFamily: "monospace",
        fontSize: 16
      }}>
        {flag}
      </div>
    </div>
  );
}
