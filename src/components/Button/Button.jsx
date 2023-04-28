import { Load } from "./Button.styled";

export const Button = ({ loadsMore }) => {
    return (
        <Load type="button" onClick={loadsMore} >Load more</Load>
    );
};