import 'modern-normalize';

import { elements } from './js/elements';
import removeFavorites from './js/helpers/favorites/remove-favorites';
import handleExercise from './js/handlers/exercise-handler';
import { renderFavorites } from './js/renderers';
import handleFavoritePagination from './js/handlers/favorites-pagination-handler';

elements.pagination.addEventListener('click', handleFavoritePagination);
elements.gallery.addEventListener('click', favoritesRemoveHandler);
elements.gallery.addEventListener('click', handleExercise);

function favoritesRemoveHandler(e) {
  if (!e.target.closest('[data-delete]')) return;
  const cardId = e.target.closest('.link-exercise-card').dataset.id;
  removeFavorites(cardId);
  renderFavorites();
}

renderFavorites();
