import { ImageGallery } from "react-image-grid-gallery";
import { imagesArray } from "./item";

const Gallery = () => {
  const sizeScreen = window.screen.width;

  const widthImage = () => {
    switch (true) {
      case sizeScreen < 1000:
        return 200;
      case sizeScreen >= 1000 && sizeScreen < 1600:
        return 20;
      case sizeScreen >= 1600 && sizeScreen < 1800:
        return 400;
      case sizeScreen >= 1800 && sizeScreen < 1920:
        return 500;
      case sizeScreen >= 1920:
        return 600;
      default:
        return 200;
    }
  };

  return (
    <ImageGallery
      imagesInfoArray={imagesArray}
      columnWidth={widthImage()}
      gapSize={25}
    />
  );
};

export default Gallery;
