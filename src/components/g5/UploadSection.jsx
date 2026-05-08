import React from "react";
import * as S from "../../components/g5/styles.js";

export default function UploadSection({ label, minFiles, type = "image" }) {
  return (
    <S.UploadWrapper>
      <S.UploadLabel>
        {label} (mínimo {minFiles})
      </S.UploadLabel>

      <S.UploadGrid>
        {[...Array(minFiles)].map((_, index) => (
          <S.UploadBox key={index}>
            {type === "document" ? (
              <S.DocumentIcon>📄</S.DocumentIcon>
            ) : (
              <S.PlusIcon>+</S.PlusIcon>
            )}
          </S.UploadBox>
        ))}

        
        <S.UploadBox>
          <S.PlusIcon>+</S.PlusIcon>
        </S.UploadBox>
      </S.UploadGrid>
    </S.UploadWrapper>
  );
}
