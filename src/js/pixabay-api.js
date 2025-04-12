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
  try {
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
    createMarkup(responce.data.hits);

    if (responce.data.totalHits <= gallery.children.length + 15) {
      hideLoadMoreButton();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
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
