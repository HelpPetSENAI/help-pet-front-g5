import { Link } from "react-router-dom";
import {
  SocialLoginButton,
  SocialLoginContainer,
  SocialLoginText,
  SocialLoginLink,
  SocialWrapper
} from "../../styles/SocialLoginStyles";

export default function SocialLogin({ type }) {
  return (
    <SocialWrapper>
      <SocialLoginContainer>
        <SocialLoginButton>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
            width="24"
            alt="google"
          />
          Sign in with Google
        </SocialLoginButton>

        <SocialLoginButton>
          <img
            src="https://cdn-icons-png.flaticon.com/512/0/747.png"
            width="24"
            alt="apple"
          />
          Sign in with Apple
        </SocialLoginButton>
      </SocialLoginContainer>

      <SocialLoginText>
        {type === "login" && (
          <>
            Não tem conta?{" "}
            <SocialLoginLink as={Link} to="/signup">
              Faça seu cadastro
            </SocialLoginLink>
          </>
        )}

        {type === "signup" && (
          <>
            Já tem uma conta?{" "}
            <SocialLoginLink as={Link} to="/login">
              Faça seu login
            </SocialLoginLink>
          </>
        )}
      </SocialLoginText>
    </SocialWrapper>
  );
}