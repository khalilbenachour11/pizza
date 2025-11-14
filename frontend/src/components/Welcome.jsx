import React from "react";
import { Link } from "react-router-dom";

export default function Welcome() {
  const user = JSON.parse(localStorage.getItem("user") || "null");

  return (
    <div className="hero">
      <div
        className="wrap"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        {/* Texte */}
        <div style={{ maxWidth: "500px" }}>
          <div className="badges" style={{ marginBottom: "10px" }}>
            <span className="badge red" style={{ marginRight: 5 }}>
              Nouveau
            </span>
            <span className="badge">Livraison express</span>
          </div>

          <h1
            style={{
              fontSize: "2.4rem",
              marginBottom: "15px",
              fontWeight: "800",
            }}
          >
            Votre pizza, chaude et croustillante, en quelques clics 🍕
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              marginBottom: "20px",
              opacity: 0.9,
            }}
          >
            Composez, personnalisez et recommandez votre favorite.
            Simple, rapide et délicieux.
          </p>

          <div className="cta">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="btn btn-primary"
                  style={{ marginRight: 10 }}
                >
                  Commencer
                </Link>
                <Link to="/register" className="btn btn-muted">
                  Créer un compte
                </Link>
              </>
            ) : (
              <Link
                to="/pizza"
                className="btn btn-primary"
                style={{
                  fontWeight: "bold",
                  padding: "10px 20px",
                  borderRadius: "8px",
                }}
              >
                🍕 Mes commandes de pizza
              </Link>
            )}
          </div>
        </div>

        {/* Image Pizza avec animation */}
        <div
          className="hero-visual"
          style={{
            maxWidth: "400px",
            flex: "1 1 280px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <img
            src="/images/pizza-hero.png"
            alt="Pizza"
            className="pizza-img"
            onError={(e) => {
              e.currentTarget.replaceWith(
                Object.assign(document.createElement("div"), {
                  className: "pizza-fallback",
                  innerText: "🍕",
                  style: "font-size:80px; text-align:center;",
                })
              );
            }}
          />
        </div>
      </div>
    </div>
  );
}
