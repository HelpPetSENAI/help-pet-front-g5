import {ConversationIcon} from "../../assets/icons/g5-icons/export.jsx";
import PrimaryButton from "../../components/g5/PrimaryButton.jsx";
import Header from "../../components/g5/Header.jsx";
import Image from "../../assets/images/g5-placeholder-img.png";
import * as S from "./styles.js";
import {useDonation} from "../../helpers/g5/donationApi.js";

export default function PetPage() {
    const {pet, loading, err} = useDonation(1)
    if (loading) return <p>Carregando</p>
    if (err) return <p>Erro</p>;
    // aqui eu pego de outra pãgina sla como
    return (
        <S.PageContainer>
            <Header/>
            <S.PageContent>
                {/*aguardando documentação do grupo g2*/}
                <S.PetName>{pet.name}</S.PetName>
                <S.ImageWrapper>
                    <S.PetImage src={Image} alt="img-1"/>
                    <S.PetImage src={Image} alt="img-2"/>
                    <S.PetImage src={Image} alt="img-3"/>
                    <S.PetImage src={Image} alt="img-4"/>
                </S.ImageWrapper>
                <S.PetInfo>
                    <p>{pet.description}</p>
                    <S.PetInfoTitle>Informações</S.PetInfoTitle>
                    <p>{pet.species}</p>
                    <p>{pet.breed}</p>
                    <p>{pet.ageMouths}</p>
                    <p>{pet.gender}</p>
                    <p>{pet.size}</p>
                    <p>{pet.weight}</p>
                    <p>{pet.cep}</p>
                </S.PetInfo>
                <PrimaryButton label="Converse com o doador" icon={<ConversationIcon/>}/>
            </S.PageContent>
        </S.PageContainer>
    )
}