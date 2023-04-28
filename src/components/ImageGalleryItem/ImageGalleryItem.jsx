import { Item } from "./ImageGalleryItem.styled";
export const ImageGalleryItem = ({ item}) => {
    return (
        <Item>
            <img src={item.webformatURL} alt={item.tags} />
        </Item>
    );
};