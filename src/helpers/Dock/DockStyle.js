import styled from 'styled-components'

export const DockWrapper = styled.div`
  display: flex;
  flex-direction: ${({ isOpen }) => (isOpen ? 'column' : 'row')};
  align-items: center;
  position: fixed;
  bottom: 30px;
  gap: 30px;
  width: 79.9%;
  padding: 15px 30px;
  background: var(--clr-green-500);
  border-radius: 40px;
  box-shadow: var(--gShadow-min);
  border: 2px solid var(--clr-green-1000);
  transition: all 0.24s ease;
`

export const DockCompact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 30px;
`

export const DockMenu = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

export const DockButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  border: none;
  background: ${({ compact }) => (compact ? 'none' : 'var(--clr-green-500)')};
  color: var(--clr-green-1000);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }

  &.active {
    border-radius: 10px;
  }
`
