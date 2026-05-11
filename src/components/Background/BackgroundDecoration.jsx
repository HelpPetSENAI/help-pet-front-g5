import styed, { styled } from "styled-components"
import decor from "../../assets/icons/decor.svg"

const Decor = styled.div`

  position: absolute;
  inset: 0;

  background: url(${decor}) no-repeat right center;
  background-size: 50%;
  opacity: 0.25;

  pointer-events: none; 
`;

export default function BackgroundImages() {
  return <Decor />;
}