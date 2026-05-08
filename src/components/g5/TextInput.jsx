import React from "react";

export default function TextInput({ label, placeholder, maxLength }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", width: "100%" }}>
      <label style={{ fontWeight: "bold", color: "var(--clr-green-1000)" }}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        maxLength={maxLength}
        style={{
          padding: "10px",
          border: "2px solid var(--clr-green-1000)",
          borderRadius: "8px",
          fontSize: "16px",
        }}
      />
    </div>
  );
}
  