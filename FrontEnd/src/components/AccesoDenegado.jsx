import React from "react";
import { Link } from "react-router-dom";

export const AccessDenied = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Access Denied</h1>
      <p style={styles.message}>
        You do not have permission to view this page.
      </p>
      <Link to="/" style={styles.link}>Return to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: "2.5rem",
    color: "#ff4d4f",
  },
  message: {
    fontSize: "1.5rem",
    color: "#333",
  },
  link: {
    marginTop: "20px",
    fontSize: "1.2rem",
    color: "#1890ff",
    textDecoration: "none",
  },
};

export default AccessDenied;
