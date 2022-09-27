import axios from 'axios';

const PIXABAY_KYE = '29634841-061e0c7ab4009b86045ba35d0';

async function getItems(count, inputValue) {
  try {
    const response = await axios.get(`https://pixabay.com/api/?q=${inputValue}&page=${count}&key=${PIXABAY_KYE}&image_type=photo&orientation=horizontal&per_page=12`);
      return response
  } catch (error) {
    console.error(error);
    }

}

// const getItems = (count, inputValue) => {
//     console.log(count);
//     console.log(inputValue);
//   const result = axios.get(
//       `https://pixabay.com/api/?q=${inputValue}&page=${count}&key=${PIXABAY_KYE}&image_type=photo&orientation=horizontal&per_page=12`
//     )
//     .then(res => res.json())
//     .then(res => console.log(res))
//     .catch(error => {console.log('error', error)});
//   return result;
// };

export default getItems;
