const popupButton = document.getElementById('popup-button');
const closeButton = document.getElementById('close-button');
const imagePopup = document.getElementById('image-popup');
const popupImage = document.getElementById('popup-image');

popupButton.addEventListener('click', () => {
  imagePopup.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  imagePopup.style.display = 'none';
  popupImage.classList.remove('zoomed'); // Reset zoom
});

popupImage.addEventListener('click', () => {
  popupImage.classList.toggle('zoomed'); // Toggle zoom class
});