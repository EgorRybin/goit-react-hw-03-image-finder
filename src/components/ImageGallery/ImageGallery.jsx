import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({array}) => {
  return (
    <ul className={s.ImageGallery}>
          <ImageGalleryItem array={array} />
    </ul>
  );
};
export default ImageGallery;
