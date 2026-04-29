import styled from 'styled-components'

export const StyledDock = styled.div`
  @media (min-width:300px){

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
    transition: width 0.24s ease, padding 0.24s ease, bottom 0.24s ease;
    border: 2px solid var(--clr-green-1000);

      .dock-compact{
        display:flex;
        align-items:center;
        justify-content: center;
        width: 100%;
        gap: 30px
        }
      .dock-compact > button > img {
        width: 30px;
        height:30px;
      }
        .dock-menu {
          display: flex;
          flex-direction: column;
          gap: 15px;
          width: 100%;
          }
          
          .compact-item,
          .menu-item {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            border: none;
            background: var(--clr-green-500);
            color: var(--clr-green-1000);
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;
            }
            
            .compact-item {
              background: none;
              width: 100%;
              }
              
              .compact-item img,
              .menu-item img {
                width: 25px;
                height: 25px;
                }
                
                .menu-item span {
                  font-size: 20px;
                  font-weight: 500;
              }

  .compact-item:hover,
  .menu-item:hover {
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.18);
  }
}
`
