import styled from "styled-components";

/* ===== Header ===== */
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

  .logo-text {
    font-size: 20px;
    font-weight: bold;
    color: var(--clr-green-1000);
  }

  @media (max-width: 480px) {
    .logo-text {
      display: none; /* esconde o texto em mobile */
    }
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
  font-family: var(--main-font), serif;
  font-size: 16px;
  text-decoration: none;
  font-weight: 400;
  line-height: 100%;
`;

/* ===== DonatePage ===== */
export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--clr-green-500);
`;

export const PageContent = styled.div`
  flex: 1; /* ocupa todo o espaço disponível */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  padding: 40px;
  border-radius: 30px 30px 0 0;
  border: 2px solid var(--clr-green-1000);
  background: var(--clr-neutral-100);

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 20px 20px 0 0;
  }
`;

export const Title = styled.h1`
  color: var(--clr-green-1000);
  font-family: var(--main-font);
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
`;

/* ===== Inputs ===== */
export const Input = styled.input`
  width: 100%; /* ocupa toda a largura */
  padding: 12px;
  border: 2px solid var(--clr-green-1000);
  border-radius: 8px;
  font-size: 16px;
  font-family: var(--main-font);
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 2px solid var(--clr-green-1000);
  border-radius: 8px;
  font-size: 16px;
  font-family: var(--main-font);
`;

/* ===== CategoryButtons ===== */
export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;

export const CategoryButton = styled.button`
  flex: 1; /* ocupa espaço proporcional */
  min-width: 120px;
  padding: 12px;
  border: 2px solid var(--clr-green-1000);
  border-radius: 8px;
  background-color: ${(props) => props.color || "var(--clr-green-500)"};
  color: #fff;
  font-family: var(--main-font);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

/* ===== PrimaryButton ===== */
export const PrimaryButtonStyled = styled.button`
  width: 100%; /* botão ocupa toda a largura */
  padding: 14px;
  border: 2px solid var(--clr-green-1000);
  border-radius: 8px;
  background: var(--clr-green-500);
  color: var(--clr-green-1000);
  font-family: var(--main-font);
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 2px 2px 0 0 var(--clr-green-1000);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

/* ===== UploadSection ===== */
export const UploadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UploadLabel = styled.label`
  font-weight: bold;
  color: var(--clr-green-1000);
`;

export const UploadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 12px;
  width: 100%;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`;

export const UploadBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 2px dashed var(--clr-green-1000);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--clr-neutral-200);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: var(--clr-neutral-300);
  }
`;

export const PlusIcon = styled.span`
  font-size: 32px;
  color: var(--clr-green-1000);
  font-weight: bold;
`;

export const DocumentIcon = styled.span`
  font-size: 28px;
  color: var(--clr-green-1000);
`;
