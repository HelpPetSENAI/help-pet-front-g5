import React from "react";
import * as S from "../../components/g5/styles.js";

export default function CategoryButtons({ options, onSelect }) {
  return (
    <S.ButtonGroup>
      {options.map((opt) => (
        <S.CategoryButton
          key={opt.label}
          color={opt.color}
          onClick={() => onSelect(opt.label)}
        >
          {opt.label}
        </S.CategoryButton>
      ))}
    </S.ButtonGroup>
  );
}
