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

export const LogoContainer = styled.a `
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;

    svg:first-child path {
        fill: var(--clr-green-900);
        filter: drop-shadow(5px 5px 0 var(--clr-green-1000));
    }
`;

export const PButton = styled.a`
    display: flex;
    padding: 12px 20px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: 2px solid var(--clr-green-1000);
    background: var(--clr-green-500);
    box-shadow: 2px 2px 0 0 var(--clr-green-1000);
    color: var(--clr-green-1000);
    font-family: var(--main-font),serif;
    font-size: 16px;
    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 16px */
`