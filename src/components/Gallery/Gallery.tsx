import { Gallery } from "react-grid-gallery";
import { imagesArray } from "./item";

const GalleryPage = () => {
  const sizeScreen = window.screen.width;

  const widthImage = () => {
    switch (true) {
      case sizeScreen < 1000:
        return 200;
      case sizeScreen >= 1000 && sizeScreen < 1440:
        return 230;
      case sizeScreen >= 1440 && sizeScreen < 1600:
        return 250;
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
    <Gallery
      images={imagesArray}
      defaultContainerwidth={widthImage}
    />
  );
};

export default GalleryPage;
