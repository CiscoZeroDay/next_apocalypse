"use client";
import { useState } from "react";

export default function Login() {
  const [u, setU] = useState(""); 
  const [p, setP] = useState("");

  async function onSubmit(e: any) { 
    e.preventDefault();
    // Intentionally weak login: any user/pass accepted
    document.cookie = "session=ok; Path=/; SameSite=Lax";
    window.location.href = "/admin";
  }

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f0f2f5",
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      <form onSubmit={onSubmit} style={{
        maxWidth: 360,
        width: "100%",
        display: "grid",
        gap: 16,
        padding: 24,
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{textAlign: "center", marginBottom: 16}}>Connexion</h2>
        <label style={{display: "flex", flexDirection: "column", fontWeight: 500}}>
          Utilisateur
          <input 
            value={u} 
            onChange={e => setU(e.target.value)} 
            required 
            style={{
              padding: 10,
              marginTop: 4,
              borderRadius: 6,
              border: "1px solid #ccc",
              outline: "none",
              transition: "border-color 0.2s"
            }}
          />
        </label>
        <label style={{display: "flex", flexDirection: "column", fontWeight: 500}}>
          Mot de passe
          <input 
            type="password" 
            value={p} 
            onChange={e => setP(e.target.value)} 
            required 
            style={{
              padding: 10,
              marginTop: 4,
              borderRadius: 6,
              border: "1px solid #ccc",
              outline: "none",
              transition: "border-color 0.2s"
            }}
          />
        </label>
        <button type="submit" style={{
          padding: 12,
          borderRadius: 6,
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.2s"
        }} onMouseOver={e => (e.currentTarget.style.background = "#4338ca")}
           onMouseOut={e => (e.currentTarget.style.background = "#4f46e5")}
        >
          Se connecter
        </button>
        <a href="/api/logout" style={{
          textAlign: "center",
          color: "#4f46e5",
          textDecoration: "none",
          fontSize: 14,
          marginTop: 8
        }}>Se déconnecter</a>
      </form>
    </div>
  );
}
