import { SpinerWrap } from "./Spiner.styled";
import { ColorRing } from "react-loader-spinner";
import PropTypes from 'prop-types';

export const Spiner = ({ visible }) => {
    return (
        <SpinerWrap>
        <ColorRing   visible={visible}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#9ee15b', '#60f4a0', '#081c43', '#324ce1', '#3f51b5']} />
        </SpinerWrap>
    );
};

Spiner.propTypes = {
    visible: PropTypes.bool.isRequired,
};