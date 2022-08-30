// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImageContainer = document.querySelector('.gallery');
const markup = creareImageElement(galleryItems);
galleryImageContainer.insertAdjacentHTML('beforeend', markup);

function creareImageElement(params) {
  return params
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
    })
    .join('');
}

let gallery = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  overlayOpacity: 0.4,
  captionDelay: 250,
  captionPosition: 'bottom',
});

console.log(galleryItems);
