import { showSuccess, showError } from '../helpers/toaster';
import { exercisesApi } from '../services/exercises-api';
import { exerciseDetailsMarkup } from '../templates';
import handleFavorites from './add-favorites-handler';

const popUpState = {
  detailsPopup: false,
  ratingPopup: false,
};

const stopPropagation = (e) => e.stopPropagation();

const handleRatingPopup = (ratingPopup, {closeCallback, submitCallback}) => {
  const closeButton = ratingPopup.querySelector('.modal__close-btn');
  const ratingForm = ratingPopup.querySelector('.give_a_rating');

  closeButton.addEventListener('click', () => {
    closeCallback();
  });
  ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitCallback(e);
  });
};

const handleListeners = (detailsPopupHtml, data) => {
  const container = document.createElement('div');
  container.innerHTML = detailsPopupHtml;

  const backdrop = container.querySelector('.exercise-modal-backdrop');
  const detailsPopup = container.querySelector('.exercise-modal');
  const detailsCloseButton = container.querySelector('.exercise-card-close-btn');
  const ratingButton = container.querySelector('.add-rating-btn');
  const favoriteButton = container.querySelector('.add-favorites-btn');

  const ratingPopup = document.querySelector('#modal-template').content.firstElementChild.cloneNode(true);

  const closeDetailsPopup = () => {
    popUpState.detailsPopup = false;
    popUpState.ratingPopup = false;
    backdrop?.remove();
  };

  const closeRatingPopup = () => {
    ratingPopup.remove();
    backdrop.innerHTML = '';
    popUpState.ratingPopup = false;
    backdrop.append(detailsPopup);
  };

  const handleBackdropClickAndEsc = () => {
    switch (true) {
      case popUpState.detailsPopup && !popUpState.ratingPopup:
        closeDetailsPopup();
        return;
      case popUpState.detailsPopup && popUpState.ratingPopup:
        closeRatingPopup();
        return;
      default:
        closeDetailsPopup();
        return;
    }
  }

  window.addEventListener('keydown', (e) => {
    if (e.code !== 'Escape') return;
    handleBackdropClickAndEsc();
  });

  detailsPopup.addEventListener('click', stopPropagation);
  ratingPopup.addEventListener('click', stopPropagation);

  backdrop.addEventListener('click', () => {
    handleBackdropClickAndEsc();
  });
  
  detailsCloseButton.addEventListener('click', () => {
    backdrop.remove();
  });

  ratingButton.addEventListener('click', () => {
    popUpState.ratingPopup = true;
    backdrop.innerHTML = '';
    backdrop.append(ratingPopup);
  });

  favoriteButton.addEventListener('click', (e) => {
    handleFavorites(data);
  });

  handleRatingPopup(ratingPopup, {
    closeCallback: closeRatingPopup,
    submitCallback: () => {},
  });

  popUpState.detailsPopup = true;
  document.body.append(backdrop);
}

async function handleExercise(e, ratingPopupCallback) {
  e.preventDefault();
  if (!e.target.closest('[data-id]')) return;

  try {
    const exerciseId = e.target.closest('[data-id]').dataset.id;

    const data = await exercisesApi.getExerciseById(exerciseId);

    const detailsPopup = exerciseDetailsMarkup(data);
    const modalElement = handleListeners(detailsPopup, data);
  
  } catch (err) {
    console.error(err);
    showError("Something went wrong. Please try again later.");
  }
}

export default handleExercise;
