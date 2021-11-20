import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOPenNewTransactionModal: () => void;
}
export function Header({onOPenNewTransactionModal}: HeaderProps) {
    
return (
<Container>
    <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOPenNewTransactionModal}>Nova transação</button>
    </Content>

</Container>
)
}