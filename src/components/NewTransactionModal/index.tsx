import Modal from 'react-modal';


interface NewTansactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose}: NewTansactionModalProps) {
    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Cadastrar transação</h2>
  </Modal>
    )
}