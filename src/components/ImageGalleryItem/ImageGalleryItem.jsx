import PropTypes from 'prop-types';

import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ array, toogleModal, findeId }) => {
    return (
        array.map(({id, webformatURL, largeImageURL}) => 
          <li className={s.ImageGalleryItem} key={id} onClick={toogleModal}>
            <img src={webformatURL} alt={largeImageURL} className={s.ImageGalleryItemImage} onClick={findeId} />
    </li>
      )
   
  )
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  toogleModal: PropTypes.func.isRequired,
  findeId: PropTypes.func.isRequired,
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }))
}
