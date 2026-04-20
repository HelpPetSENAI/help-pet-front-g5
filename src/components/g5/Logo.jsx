import * as S from "./styles.js";
import * as Icons from "../../assets/icons/g5-icons/export.jsx";

export default function HelpPetLogo() {
    return (
        <>
            <S.LogoContainer href="/">
                <Icons.HPLogo />
                <Icons.HPLogoLabel />
            </S.LogoContainer>
        </>
    )
}