import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { DockWrapper, DockCompact, DockMenu, DockButton } from './DockStyle'
import HomeIcon from '../../assets/icons/HomeIcon'
import MessageIcon from '../../assets/icons/MessageIcon'
import MoreSettingsIcon from '../../assets/icons/MoreSettingsIcon'
import ConfigurationIcon from '../../assets/icons/ConfigIcon'
import DonatePetIcon from '../../assets/icons/DonatePetIcon'
import MyDonateIcon from '../../assets/icons/MyDonateIcon'
import SearchIcon from '../../assets/icons/SearchIcon'

export default function Dock({ page = 'home' }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSettings = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // regra: se o menu está aberto, só o settings fica ativo
  const activeIcon = isOpen ? 'settings' : page

  return (
    <DockWrapper isOpen={isOpen}>
      {isOpen && (
        <DockMenu aria-label="Menu principal">
          {/* dps mudar as rotas '/coming-soon' para a sua rota de destino*/}
          <DockButton onClick={() => { closeMenu(); navigate('/coming-soon') }}>
            <ConfigurationIcon />
            <span>Configurações</span>
          </DockButton>
          {/* dps mudar as rotas '/coming-soon' para a sua rota de destino*/}
          <DockButton onClick={() => { closeMenu(); navigate('/coming-soon') }}>
            <DonatePetIcon />
            <span>Doar Pet</span>
          </DockButton>
          {/* dps mudar as rotas '/coming-soon' para a sua rota de destino*/}
          <DockButton onClick={() => { closeMenu(); navigate('/coming-soon') }}>
            <MyDonateIcon />
            <span>Minhas Doações</span>
          </DockButton>
          {/* dps mudar as rotas '/coming-soon' para a sua rota de destino*/}
          <DockButton onClick={() => { closeMenu(); navigate('/coming-soon') }}>
            <SearchIcon />
            <span>Pesquisar</span>
          </DockButton>
        </DockMenu>
      )}

      <DockCompact>
        <DockButton
          compact
          className={activeIcon === 'home' ? 'active' : ''}
          onClick={() => {
            closeMenu()
            navigate('/') // rota Home
          }}
        >
          <HomeIcon active={activeIcon === 'home'} />
        </DockButton>

        <DockButton
          compact
          className={activeIcon === 'settings' ? 'active' : ''}
          onClick={toggleSettings}
        >
          <MoreSettingsIcon active={activeIcon === 'settings'} />
        </DockButton>

        <DockButton
          compact
          className={activeIcon === 'message' ? 'active' : ''}
          onClick={() => {
            closeMenu()
            navigate('/message') // rota Mensagens
          }}
        >
          <MessageIcon active={activeIcon === 'message'} />
        </DockButton>
      </DockCompact>
    </DockWrapper>
  )
}
