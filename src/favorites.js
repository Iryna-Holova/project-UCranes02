import 'modern-normalize';
import throttle from 'lodash.throttle';
import { favorites } from './js/services/favorites-page';
import { elements } from './js/elements';
import { handleScrollTop, handleScrollTopBtnShow, handlerOpenMenu } from './js/handlers';
import { resizeObserver } from './js/helpers/screen-resolution';

window.addEventListener('scroll', throttle(handleScrollTopBtnShow, 500))
elements.btnOpenBurger.addEventListener('click', handlerOpenMenu);
elements.btnCloseBurger.addEventListener('click', handlerOpenMenu);
elements.scrollTopBtn.addEventListener('click', handleScrollTop);

resizeObserver.observe(document.querySelector('html'));
favorites.load();
