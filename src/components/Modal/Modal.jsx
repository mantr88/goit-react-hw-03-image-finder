import Modal from 'react-modal';
// import PropTypes from 'prop-types';
import { Image } from './Modal.styled';

const customStyles = {
  content: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: '1200',
    // top: '50%',
    // left: '50%',
    // width: '90vw',
    // height: '90vh',
    // right: 'auto',
    // bottom: 'auto',
    // // marginRight: '-40%',
    // transform: 'translate(-50%, -50%)',
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
            <Image src={img} alt={tags} />
        </Modal>
    );
};

// Modal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   img: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClose: PropTypes.func.isRequired
// };