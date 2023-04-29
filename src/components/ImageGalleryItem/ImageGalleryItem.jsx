import { Component } from "react";
import { Item } from "./ImageGalleryItem.styled";
import { ImageModal } from "components/Modal/Modal";
export class ImageGalleryItem extends Component {
    state = {
        selectedImg: null,
    };

    setSelectedImg = () => {
        this.setState({selectedImg: this.props.item.largeImageURL});
    };

    closeModal = () => {
        this.setState({ selectedImg: null });
    };

    render() {  
        const { selectedImg } = this.state;
        const { webformatURL, tags, largeImageURL } = this.props.item;
        return (
        <Item>
                <img src={webformatURL} alt={tags} onClick={this.setSelectedImg} />
                <ImageModal
                    isOpen={selectedImg !== null}
                    img={largeImageURL}
                    tags={tags}
                    onClose={this.closeModal}
                />
        </Item>
    );
    };
};