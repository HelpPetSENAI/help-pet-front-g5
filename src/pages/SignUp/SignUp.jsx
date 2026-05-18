import SignUpForms from "../../components/Forms/SignUpForms";
import ButtonSignUp from "../../components/Button/ButtonSignUp";
import SocialLogin from "../../components/buttonSocial/SocialLogin";
import Background from "../../components/Background/Background"

export default function SignUp() {
  return (
    
    <Background>
    <div className="container-login">
      <div className="left-side">
        <SignUpForms userType="signup" />

        <ButtonSignUp />

        <SocialLogin type="signup" />
      </div>
    </div>
    </Background>
  );
}