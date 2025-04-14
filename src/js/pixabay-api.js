import axios from 'axios';
import createMarkup, {
  hideLoadMoreButton,
  showLoadMoreButton,
} from './render-functions';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');

export default async function getImagesByQuery(query, page) {
  const responce = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '49632762-ccb8ac978f5dd2d4af8186ee2',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  try {
    createMarkup(responce.data.hits);
    const loadMoreBtn = document.querySelector('.non-active');
    const totalPages = Math.ceil(responce.data.totalHits / 15);
    if (page < totalPages) {
      loadMoreBtn.classList.add('is-active');
    } else {
      loadMoreBtn.classList.remove('is-active');
    }
  } catch (error) {
    console.log(error.message);
    iziToast.error({
      message: 'Request error',
      position: 'topRight',
      timeout: 2000,
      imageWidth: 50,
      maxWidth: 432,
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
    });
  }
}
