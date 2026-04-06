import LoginForm from "../../components/Forms/LoginForm";

export default function LoginCliente() {
  return (
    <div className="container-login">
      <div className="left-side">
        <LoginForm userType="cliente" />
      </div>
      <div className="right-side">{/* imagem ou decoração */}</div>
    </div>
  );
}