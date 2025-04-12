// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
export const galBox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
});

export default function createMarkup(images) {
  const markup = images
    .map(
      image =>
        `<li class="gallery-item">
        <a href="${image.largeImageURL}">
          <img alt="${image.tags}" src="${image.webformatURL}" class="gallery-img" />
        </a>
        <ul class="gallery-text-list">
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Likes</h2>
            <p class="gallery-text-parag">${image.likes}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Views</h2>
            <p class="gallery-text-parag">${image.views}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Comments</h2>
            <p class="gallery-text-parag">${image.comments}</p>
          </li>
          <li class="gallery-text-items">
            <h2 class="gallery-text-title">Downloads</h2>
            <p class="gallery-text-parag">${image.downloads}</p>
          </li>
        </ul>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  galBox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  document.querySelector('.loader').classList.add('open');
}

export function hideLoader() {
  document.querySelector('.loader').classList.remove('open');
}

const button = document.querySelector('.non-active');

export function showLoadMoreButton() {
  button.classList.add('is-active');
}

export function hideLoadMoreButton() {
  button.classList.remove('is-active');
}
