import styled from "styled-components";
import decor from "../../assets/images/decor.svg";

const Decor = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 60%;  
  height: 100%;

  background: url(${decor}) no-repeat center;
  background-size: cover;

  opacity: 0.25;
  pointer-events: none;
`;

export default function BackgroundImages() {
  return <Decor />;
}