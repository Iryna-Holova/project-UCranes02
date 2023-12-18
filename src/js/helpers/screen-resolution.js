import { elements } from '../elements';
import { favorites } from '../services/favorites-page';
import { gallery } from '../services/gallery';

const cardsQuantity = {
  mobile: { subfilters: 9, exercises: 8, favorites: 8 },
  tablet: { subfilters: 12, exercises: 10, favorites: 10 },
  desktop: { subfilters: 12, exercises: 10, favorites: 999 },
};

let initialDevice = convertSizeToType(window.screen.width);

const resizeObserver = new ResizeObserver(entry => {
  const containers = {
    'home': gallery,
    'favorites': favorites,
  };

  let currentDevice = convertSizeToType(
    entry[0].devicePixelContentBoxSize[0].inlineSize
  );

  if (initialDevice !== currentDevice) {
    initialDevice = currentDevice;
    const pageType = elements.body.dataset.page;    
    containers[pageType].refreshLimits(cardsQuantity[currentDevice]);    
  }
});

function getDeviseType() {
  let key = 'desktop';
  if (window.screen.width < 768) {
    key = 'mobile';
  }
  if (window.screen.width >= 768 && window.screen.width < 1440) {
    key = 'tablet';
  }
  return cardsQuantity[key];
}

function convertSizeToType(size) {
  let key = 'desktop';
  if (size < 768) {
    key = 'mobile';
  }
  if (size >= 768 && size < 1440) {
    key = 'tablet';
  }
  return key;
}

export { cardsQuantity, getDeviseType, resizeObserver };
