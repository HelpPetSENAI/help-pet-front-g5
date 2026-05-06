import SignUpForms from "../../components/Forms/SignUpForms";
import ButtonSignUp from "../../components/Button/ButtonSignUp";
import SocialLogin from "../../components/buttonSocial/SocialLogin";

export default function SignUp() {
  return (
    <div className="container-login">
      <div className="left-side">
        <SignUpForms userType="signup" />

        <ButtonSignUp />

        <SocialLogin type="signup" />
      </div>
    </div>
  );
}