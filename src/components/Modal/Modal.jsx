import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: 1200,
  },
  content: {
    maxWidth: '100vh',
    maxHeight: '100vh',
    inset: 0,
    padding: 0,
    position: 'relative',
    border: 'none'
  },
};

export const ImageModal = ({img, tags, isOpen, onClose}) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
      >
        {/* <Overlay>
          <Wrap> */}
            <img src={img} alt={tags} />
          {/* </Wrap>
        </Overlay>   */}
      </Modal>
      
    );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  img: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func
};