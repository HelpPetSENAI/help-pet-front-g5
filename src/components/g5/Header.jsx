import * as S from "./styles.js";
import * as Icons from "../../assets/icons/g5-icons/export.jsx";
import HelpPetLogo from "./Logo.jsx";

export default function Header() {

    return (
        <S.PetHeader>
            <HelpPetLogo />
            <a href="/"><Icons.BackArrow/></a>
        </S.PetHeader>
    );
}