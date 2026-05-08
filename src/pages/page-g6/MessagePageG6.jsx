import Dock from '../../helpers/Dock/Dock.jsx'
import { MessagePageG6Styled } from './MessageStyled.js'

export default function MessagePageG6() {
  return (
    <MessagePageG6Styled>
      <div className="page-content">
        <h1>Página G6</h1>
        <p>Essa é a página G6. A dock está fixada no centro da tela para você ver o estado aberto/fechado.</p>
      </div>
      <Dock page='message'/>
    </MessagePageG6Styled>
  )
}
