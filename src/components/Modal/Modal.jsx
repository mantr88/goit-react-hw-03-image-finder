import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-40%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImageModal = ({img, tags, isOpen, onClose}) => {
    return (
         <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            style={customStyles}
        >
            <img src={img} alt={tags} />
        </Modal>
    );
};