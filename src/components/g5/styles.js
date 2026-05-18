import styled from 'styled-components';

export const PetHeader = styled.header`
    width: 100%;
    height: 75px;
    background-color: var(--clr-green-500);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
`;

export const LogoContainer = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
`;

export const PButton = styled.button`
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: 2px solid var(--clr-green-1000);
    background: var(--clr-green-500);
    box-shadow: 2px 2px 0 0 var(--clr-green-1000);
    color: var(--clr-green-1000);
    font-family: var(--main-font), serif;
    font-size: 16px;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
`

// CategoryCard

export const CategoryCardContainer = styled.a`
    display: flex;
    gap: 6px;
    flex-direction: column;


    color: var(--clr-red-900,);
    text-align: center;
    font-family: Archivo;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: capitalize;
    width: 46px;
    height: 56px;
    margin: 16px 0;

`
export const CategoryCardEmoji = styled.div`
    display: flex;
    padding: 12px 8px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 1px solid var(--clr-green-1000);
    background: var(--clr-neutral-100);
    box-shadow: 2px 2px 0 0 var(--clr-green-1000);

`
export const CategoryCardSpan = styled.span`
    font-size: 30px;
`

export const CategoryCardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 17px;

`

//TagPet

export const variants = {
    amphibian: `
        background: var(--clr-green-500);
        `,
    arachnid: `
        background: var(--clr-yellow-500);
    `,
    bird: `
        background: var(--clr-cyan-500);
    `,
    cat: `
        background: var(--clr-blue-500);
    `,
    cnidaria: `
         background: #00B89F;
    `,
    dog: `
     background: var(--clr-red-500);
    `,
    fish: `
      background: #FF6B35;
    `,
    reptiles: `
      background: #7ED321;
    `,
    rodents: `
      background: var(--clr-magenta-500)
    `
}

export const Tagspecies = styled.div`
    display: inline-flex;
    padding: 8px;
    align-items: center;
    gap: 8px;

    font-family: var(--main-font), sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 51%;
    border-radius: 50px;

    ${({variant}) => variants[variant]}
    
`;

// DonationCard

export const CardContainer = styled.a`
    position: relative;
    display: flex;
    opacity: ${(props) => props.isActive ? 1 : 0.35};
    text-decoration: none;
    color: #000;
    width: 315px;
    cursor: ${props => (props.isActive ? 'pointer' : 'not-allowed')};
    padding: 16px;
    flex-direction: column;
    align-items: flex-end;
    gap: 16px;
    font-family: var(--main-font), sans-serif;

    border-radius: 20px;
    border: 2px solid var(--crl-red-1000, #160404);
    background: var(--crl-neutral-100, #FFF);

    box-shadow: 2px 2px 0 0 var(--crl-red-1000, #160404);
`;

export const CardDescription = styled.div`
    display: flex;
    padding: 0 8px;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    align-self: stretch;
`;

export const CardDescriptionWrapper = styled.div`
    display: flex;
    gap: 8px;
`;

export const TagWrapper = styled.div`
    position: absolute;
    right: 22px;
    top: -12px;
`;

