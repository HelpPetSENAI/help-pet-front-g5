import LoginForm from "../../components/Forms/LoginForm";

export default function LoginDoador() {
  return (
    <div className="container-login">
      <div className="left-side">
        <LoginForm userType="doador" />
      </div>
      <div className="right-side">{/* imagem ou decoração */}</div>
    </div>
  );
}