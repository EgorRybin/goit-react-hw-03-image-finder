import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ array }) => {
    return (
        array.map(({id, webformatURL}) => 
           <li className={s.ImageGalleryItem} key={id}>
      <img src={webformatURL} alt="" className={s.ImageGalleryItemImage} />
    </li>
      )
   
  )
};

export default ImageGalleryItem;