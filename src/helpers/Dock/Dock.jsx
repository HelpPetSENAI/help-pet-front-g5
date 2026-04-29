import { useState } from 'react'
import { StyledDock } from './DockStyle'
import { useNavigate } from 'react-router-dom'
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

  const toggleSettings = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  // regra: se o menu está aberto, só o settings fica ativo
  const activeIcon = isOpen ? 'settings' : page

  return (
    <StyledDock isOpen={isOpen}>
      {isOpen ? (
        <nav className="dock-menu" aria-label="Menu principal">
          <button
            type="button"
            className={activeIcon === 'settings' ? 'menu-item active' : 'menu-item'}
            onClick={toggleSettings}
          >
            <ConfigurationIcon active={activeIcon === 'settings'} />
            <span>Configurações</span>
          </button>

          <button
            type="button"
            className={activeIcon === 'donate' ? 'menu-item active' : 'menu-item'}
            onClick={closeMenu}
          >
            <DonatePetIcon active={activeIcon === 'donate'} />
            <span>Doar Pet</span>
          </button>

          <button
            type="button"
            className={activeIcon === 'mine' ? 'menu-item active' : 'menu-item'}
            onClick={closeMenu}
          >
            <MyDonateIcon active={activeIcon === 'mine'} />
            <span>Minhas Doações</span>
          </button>

          <button
            type="button"
            className={activeIcon === 'search' ? 'menu-item active' : 'menu-item'}
            onClick={closeMenu}
          >
            <SearchIcon active={activeIcon === 'search'} />
            <span>Pesquisar</span>
          </button>
        </nav>
      ) : null}

      <div className="dock-compact">
        {/* HOME */}
        <button
          type="button"
          className={activeIcon === 'home' ? 'compact-item active' : 'compact-item'}
          onClick={() => {
            closeMenu()
            navigate('/') // navega para Home
          }}
        >
          <HomeIcon active={activeIcon === 'home'} />
        </button>

        {/* SETTINGS */}
        <button
          type="button"
          className={activeIcon === 'settings' ? 'compact-item active' : 'compact-item'}
          onClick={toggleSettings}
        >
          <MoreSettingsIcon active={activeIcon === 'settings'} />
        </button>

        {/* MESSAGE */}
        <button
          type="button"
          className={activeIcon === 'message' ? 'compact-item active' : 'compact-item'}
          onClick={() => {
            closeMenu()
            navigate('/message') // navega para Mensagens
          }}
        >
          <MessageIcon active={activeIcon === 'message'} />
        </button>
      </div>
    </StyledDock>
  )
}
