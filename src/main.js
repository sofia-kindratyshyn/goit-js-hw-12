import getImagesByQuery from './js/pixabay-api';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
const form = document.querySelector('form');
import { clearGallery, showLoader, hideLoader } from './js/render-functions';

form.addEventListener('submit', onHandleSubmit);

async function onHandleSubmit(event) {
  event.preventDefault();
  clearGallery();
  const inputedValue = form.elements[0].value;
  let page = 1;

  showLoader();
  await getImagesByQuery(inputedValue, page);
  try {
    const loadMoreBtn = document.querySelector('.is-active');
    loadMoreBtn.addEventListener('click', onHandleClick);
    function onHandleClick() {
      page += 1;
      getImagesByQuery(inputedValue, page);
    }
  } catch (error) {
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
