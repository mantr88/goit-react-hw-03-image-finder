import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { List } from "./ImageGallery.styled";

export const ImageGalery = ({items}) => {
    return (
        <List>
            {items.map(item => (
                <li key={item.id}>
                    <ImageGalleryItem item={item} />
                </li>))}
        </List>
    );
};