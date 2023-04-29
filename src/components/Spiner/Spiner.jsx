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
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']} />
        </SpinerWrap>
    );
};

Spiner.propTypes = {
    visible: PropTypes.bool.isRequired,
};