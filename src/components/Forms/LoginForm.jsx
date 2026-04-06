import {
  containerStyle,
  titleStyle,
  labelInputRow,
  labelStyle,
  inputStyle,
  forgotStyle,
} from "../../styles/FormStyles.js";

export default function LoginForm({ userType }) {
  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>
        {userType === "cliente"
          ? "Deseja adotar um pet? Faça login na sua conta!"
          : "Bem-vindo! Faça login na sua conta de doador!"}
      </h2>

      {/* Email */}
      <div style={labelInputRow}>
        <label style={labelStyle}>SEU EMAIL</label>
    
      </div>
      <input type="email" placeholder="Digite seu email" style={inputStyle} />

      {/* Senha */}
      <div style={labelInputRow}>
        <label style={labelStyle}>DIGITE SUA SENHA</label>
        <a href="#" style={forgotStyle}>esqueceu sua senha?</a>
        {/* pode deixar vazio ou adicionar outro link se quiser */}
      </div>
      <input type="password" placeholder="Digite sua senha" style={inputStyle} />
    </div>
  );
}