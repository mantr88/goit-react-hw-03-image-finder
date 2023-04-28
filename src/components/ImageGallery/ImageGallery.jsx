import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";

export const ImageGalery = ({items}) => {
    return (
        <ul>
            {items.map(item => (<ImageGalleryItem key={item.id} item={item} />))};
        </ul>
    );
};