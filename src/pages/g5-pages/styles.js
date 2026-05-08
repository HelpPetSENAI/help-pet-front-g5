import styled from "styled-components";

// PetPage

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--clr-green-500);
`

export const PageContent = styled.div`
    display: flex;
    padding: 30px 16px;
    height: -webkit-fill-available;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    width: 100%;
    border-radius: 30px 30px 0 0;
    border: 2px solid var(--clr-green-1000);
    background: var(--clr-neutral-100);
`
export const PetName = styled.h1`
    color: var(--green-1000, #061407);
    font-family: var(--main-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
`

export const ImageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 8px;
    overflow: scroll;
    width: 100%;
    max-width: 750px;
    min-width: 315px;
`
export const PetImage = styled.img`
    width: 230px;
    height: 230px;
    object-fit: cover;
    border: 2px solid var(--clr-neutral-1000);
    background: var(--clr-neutral-200);
`

export const PetInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: 100%;
    max-width: 750px;
    p:first-child{
        font-size: 32px;
    }
    p {
        color: var(--clr-green-1000);
        font-family: var(--main-font);
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 100%;
    }
`

export const PetInfoTitle = styled.h2`
    color: var(--green-1000, #061407);
    font-family: var(--main-font);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
`

// DonationPage

export const Filter = styled.div`
    display: flex;
    padding: 0 30px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    gap: 17px;
`

export const Title = styled.h1`
    color: var(--green-1000, #061407);
    font-family: var(--main-font);
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;`

export const DonationsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 750px;
    gap: 20px;
`