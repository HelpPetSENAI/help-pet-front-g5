import SignUpFroms from "../../components/Forms/SingUpForms";
import ButtonSignUp from "../../components/Forms/SingUpForms"
import SocialLogin from "../../components/buttonSocial/SocialLogin";

export default function SignUp() {
    return (
        <div className="container-login">
            <div className="left-side">
                <SignUp userType="SignUP" />

                <ButtonSignUp />

                <SocialLogin />
            </div>
        </div>
    )
}