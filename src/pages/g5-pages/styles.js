import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--clr-green-500);
  min-height: 100vh;
`;

export const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 700px;
  padding: 30px 16px;
  border-radius: 30px 30px 0 0;
  border: 2px solid var(--clr-green-1000);
  background: var(--clr-neutral-100);
`;

export const Title = styled.h1`
  color: var(--clr-green-1000);
  font-family: var(--main-font);
  font-size: 32px;
  font-weight: 700;
  line-height: 100%;
  margin-bottom: 20px;
`;
