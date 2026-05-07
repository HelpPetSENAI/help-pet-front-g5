import {ConversationIcon} from "../../assets/icons/g5-icons/export.jsx";
import PrimaryButton from "../../components/g5/PrimaryButton.jsx";
import Header from "../../components/g5/Header.jsx";
import Image from "../../assets/images/g5-placeholder-img.png";
import * as S from "./styles.js";


export default function PetPage() {
    return (
        <S.PageContainer>
            <Header/>
            <S.PageContent>
                <S.PetName>Nome do Pet</S.PetName>
                <S.ImageWrapper>
                    <S.PetImage src={Image} alt="img-1"/>
                    <S.PetImage src={Image} alt="img-2"/>
                    <S.PetImage src={Image} alt="img-3"/>
                    <S.PetImage src={Image} alt="img-4"/>
                </S.ImageWrapper>
                <S.PetInfo>
                    <p>location</p>
                    <p>description</p>
                    <S.PetInfoTitle>Informações</S.PetInfoTitle>
                    <p>species</p>
                    <p>breed</p>
                    <p>age(mouths)</p>
                    <p>weight</p>
                    <p>gender</p>
                </S.PetInfo>
                <PrimaryButton label="Converse com o doador" icon={<ConversationIcon/>} ref="/"/>
            </S.PageContent>
        </S.PageContainer>
    )
}