import PropTypes from 'prop-types';
import { Load } from "./Button.styled";

export const Button = ({ loadsMore }) => {
    return (
        <Load type="button" onClick={loadsMore} >Load more</Load>
    );
};

Button.propTypes = {
    loadsMore: PropTypes.func.isRequired,
};