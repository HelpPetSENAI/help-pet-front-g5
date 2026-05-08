import * as S from "./styles.js";
import * as Icons from "../../assets/icons/g5-icons/export.jsx";
import HelpPetLogo from "./Logo.jsx";
import {useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
    return (
        <S.PetHeader>
            <S.LogoContainer>
                <HelpPetLogo/>
            </S.LogoContainer>
            <Icons.BackArrow onClick={goBack} />
        </S.PetHeader>
    )
}