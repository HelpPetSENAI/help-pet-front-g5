import React from "react";
import * as S from "./styles.js";
import {useState} from "react";
import Header from "../../components/g5/Header.jsx";
import {Filter} from "./styles.js";
import CategoryCard from "../../components/g5/CategoryCard.jsx";
import DonationCard from "../../components/g5/DonationCard.jsx";
import {useAllDonations} from "../../helpers/g5/donationApi.js";

export default function DonationsPage() {
    const [selectedSpecies, setSelectedSpecies] = useState("");
    const [selectedFilter, setSelectedFilter] = useState("");
    const filters = [

        {emoji: "🐈", label: "Gatos", value: "cat", type: "species"},
        {emoji: "🦮", label: "Cachorros", value: "dog", type: "species"},
        {emoji: "🐒", label: "macacos", value: "monkey", type: "species"},
        {emoji: "🐾", label: "Filhotes", value: "filhote", type: "age"},
        {emoji: "📍", label: "+Proximos", value: "proximos", type: "location"}
        //como mudaram umas coisas, capaz que essa função não exista mais

    ];

    const donations = useAllDonations();
    const safeDonations = Array.isArray(donations) ? donations : [];

    const filteredDonations = safeDonations.filter((donation) => {
        const matchesSpecies = selectedSpecies ? donation.species === selectedSpecies : true;

        let matchesAdditional = true;
        if (selectedFilter === "filhote") {
            matchesAdditional = donation.age === "filhote";
        }

        return matchesSpecies && matchesAdditional;
    });

    return (
        <S.PageContainer>
            <Header/>
            <S.PageContent>
                <Filter>
                    {filters.map((filter) => (
                        <CategoryCard
                            emoji={filter.emoji}
                            label={filter.label}
                            key={filter.value}
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                if (filter.type === "species") {
                                    setSelectedSpecies(selectedSpecies === filter.value ? " " : filter.value);
                                } else {
                                    setSelectedFilter(selectedFilter === filter.value ? " " : filter.value);
                                }
                            }}
                            $status={status}
                        />

                    ))}
                </Filter>
                <S.Title>Minhas Doações</S.Title>
                <S.DonationsWrapper>

                    {filteredDonations.length > 0 ? (
                        filteredDonations.map((donation) => (
                            <DonationCard
                                id={donation.id}
                                //      isAvailable={donation.isAvailable}
                                name={donation.name || "Sem nome"}
                                size={donation.size || "Não informado"}
                                species={donation.species}
                                breed={donation.breed || "Sem raça definida"}
                            />
                        ))
                    ) : (
                        <p>Carregando pets...</p>
                    )}
                </S.DonationsWrapper>
                {/*<S.Title>Ativas</S.Title>*/}
                {/*/!*estou colocando o boolean aqui pra facilitar na hora da integração*/}
                {/*    depois adicionar o esse wrapper e map em outro componente, na integração*/}
                {/**!/*/}
                {/*<S.DonationsWrapper>*/}
                {/*    <DonationCard isActive={false} donationLink="/petPage" name={"noem"} size={"3"} species={"cat"}*/}
                {/*                  breed={"batata"}/>*/}
                {/*    <DonationCard isActive={false} donationLink="/petPage" name={"noem"} size={"3"} species={"cat"}*/}
                {/*                  breed={"batata"}/>*/}
                {/*    <DonationCard isActive={false} donationLink="/petPage" name={"noem"} size={"3"} species={"cat"}*/}
                {/*                  breed={"batata"}/>*/}
                {/*    <DonationCard isActive={false} donationLink="/petPage" name={"noem"} size={"3"} species={"cat"}*/}
                {/*                  breed={"batata"}/>*/}
                {/*</S.DonationsWrapper>*/}
            </S.PageContent>
        </S.PageContainer>
    );
}
