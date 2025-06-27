import React, { useState } from "react";

const FestividadCard = ({ titulo, img, resumen, contexto }) => {
  const [verResumen, setVerResumen] = useState(true);

  return (
    <div style={styles.card}>
      <h2>{titulo}</h2>
      <img src={img} alt={titulo} style={styles.img} />
      <div>
        <h3>{verResumen ? "Resumen" : "Contexto"}</h3>
        <p>{verResumen ? resumen : contexto}</p>
        <button onClick={() => setVerResumen(!verResumen)} style={styles.btn}>
          Ver {verResumen ? "contexto" : "resumen"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    background: "#009ee8",
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    textAlign: "center"
  },
  img: {
    width: "300px",
    borderRadius: "10px"
  },
  btn: {
    marginTop: "10px",
    padding: "10px 15px",
    border: "none",
    backgroundColor: "#3f51b5",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default FestividadCard;