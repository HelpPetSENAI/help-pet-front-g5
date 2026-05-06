import React from "react";
import * as S from "../../components/g5/styles.js";
import UploadSection from "../../components/g5/UploadSection.jsx";
import Header from "../../components/g5/Header.jsx";

export default function DonatePage() {
  return (
    <S.PageContainer>
      <Header />

      <S.PageContent>
        <S.Title>Cadastrar uma nova doação!</S.Title>

        {/* Nome do animal */}
        <label>Como o bicho se chama?</label>
        <S.Input type="text" placeholder="Digite aqui" />

        {/* Categoria do animal */}
        <label>Selecione o tipo de animal:</label>
        <S.ButtonGroup>
          <S.CategoryButton color="#39C442">Cachorro</S.CategoryButton>
          <S.CategoryButton color="#FF9800">Gato</S.CategoryButton>
          <S.CategoryButton color="#2196F3">Pássaro</S.CategoryButton>
          <S.CategoryButton color="#9C27B0">Filhote</S.CategoryButton>
        </S.ButtonGroup>

        {/* Raça */}
        <label>Qual a raça (se souber)?</label>
        <S.Input type="text" placeholder="Digite aqui" />

        {/* Fotos do animal */}
        <UploadSection label="Adicione fotos do animal" minFiles={5} type="image" />

        {/* Documentos do animal */}
        <UploadSection label="Documentos do Animal" minFiles={3} type="document" />

        {/* Botão principal */}
        <S.PrimaryButtonStyled>Cadastrar</S.PrimaryButtonStyled>
      </S.PageContent>
    </S.PageContainer>
  );
}
