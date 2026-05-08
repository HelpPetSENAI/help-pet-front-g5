import {CardContainer, CardDescription, CardDescriptionWrapper, TagWrapper} from "./styles.js";
import TagPet from "./TagPet.jsx";

export default function DonationCard({isActive, name, size, breed, species, donationLink}) {

    return (
        <CardContainer
            tabIndex={isActive ? 0 : -1}
            isActive={isActive}
            href={isActive ? donationLink : undefined}
        >
            <TagWrapper>
                <TagPet text={species} species={species}/>
            </TagWrapper>
            <CardDescription>
                <h2>{name}</h2>
                <CardDescriptionWrapper>
                    <p>{size}</p>
                    <p>{breed}</p>
                </CardDescriptionWrapper>
            </CardDescription>
        </CardContainer>
    );
}

