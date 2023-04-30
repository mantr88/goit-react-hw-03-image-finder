import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { Wrap , Image, Overlay} from './Modal.styled';

Modal.setAppElement('#root');

export const ImageModal = ({img, tags, isOpen, onClose}) => {
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
      >
        <Overlay>
          <Wrap>
            <Image src={img} alt={tags} />
          </Wrap>
        </Overlay>  
      </Modal>
      
    );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  img: PropTypes.string,
  tags: PropTypes.string,
  onClose: PropTypes.func
};