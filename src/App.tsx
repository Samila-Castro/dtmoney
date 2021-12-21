import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';


Modal.setAppElement('#root');

export function App() {
const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

function handleOPenNewTransactionModal() {
  setIsNewTransactionModalOpen(true);
}

function handleCloseNewTransactionModal() {
  setIsNewTransactionModalOpen(false);
}

return (
<TransactionsContext.Provider value={[]}>  <Header onOPenNewTransactionModal={handleOPenNewTransactionModal}/>
  <Dashboard />
  <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
  <GlobalStyle />
</TransactionsContext.Provider>


);
}
