function subfiltersMarkup(array) {
  return array
    .map(
      ({
        filter,
        name,
        imgURL,
      }) => `<li class="exercises-item">
      <a data-subfilter="${name}" class="exercises-item-container" href="">
        <img class="exercises-item-image" src="${imgURL}" alt="${name}" />
        <div class="exercises-proprties-container">
          <h3 class="exercises-item-name">${name}</h3>
          <p class="exercises-item-type">${filter}</p>
        </div>
      </a>
    </li>`
    )
    .join('');
}

export default subfiltersMarkup;
