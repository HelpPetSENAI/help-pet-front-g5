import * as S from "./styles.js";
import * as Icons from "../../assets/icons/g5-icons/export.jsx";
import { HPLogo, HPLogoLabel } from "../../assets/icons/g5-icons/export.jsx";

export default function Header() {
  return (
    <S.PetHeader>
      <S.LogoContainer>
        <HPLogo />
        <span className="logo-text">HelpPet</span>
      </S.LogoContainer>
      <a href="/"><Icons.BackArrow /></a>
    </S.PetHeader>
  );
}
