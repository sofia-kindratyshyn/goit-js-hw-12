import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
import {
  clearGallery,
  showLoader,
  hideLoader,
  loadMoreFunc,
  hideLoadMoreButton,
} from './js/render-functions';

form.addEventListener('submit', onHandleSubmit);

async function onHandleSubmit(event) {
  let page = 1;
  event.preventDefault();
  clearGallery();
  const inputedValue = form.elements[0].value.trim();
  showLoader();
  if (inputedValue === '' || inputedValue === ' ') {
    hideLoader();
    hideLoadMoreButton();
    iziToast.error({
      message: 'You should type not empty value!',
      position: 'topRight',
      timeout: 2000,
      icon: '',
      imageWidth: 50,
      maxWidth: 432,
      messageSize: '16px',
      messageLineHeight: '24px',
      messageColor: '#FAFAFB',
      backgroundColor: '#EF4040',
    });
    return;
  } else {
    await getImagesByQuery(inputedValue, page);
    try {
      loadMoreFunc(inputedValue);
    } catch (error) {
      console.log(error.message);
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        timeout: 2000,
        imageWidth: 50,
        maxWidth: 432,
        messageSize: '16px',
        messageLineHeight: '24px',
        messageColor: '#FAFAFB',
        backgroundColor: '#EF4040',
      });
    } finally {
      hideLoader();
    }
  }
}
