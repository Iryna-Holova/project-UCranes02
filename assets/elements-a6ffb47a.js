(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();function a(o,s){return o.map(({_id:c,bodyPart:i,name:e,target:t,rating:r,burnedCalories:n,time:l})=>`
         <li class="main-item_card-exercises">
      <a class="link-exercise-card" href="" data-id="${c}">
        <!-- Top place card -->
        <div class="card-cont-content">
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            ${s==="favorites"?`
                <button class="btn-delete-card" type="button">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="/img/icons.svg#icon-remove"></use>
                </svg>
                </button>
                
              `:`
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${r}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                    <use href="img/icons.svg#icon-star"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="img/icons.svg#icon-arrow"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="img/icons.svg#icon-run-man"></use>
            </svg>
            <p class="text-name-exercises-card">${e}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${n}/${l}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer medium">Body part:</p>
              <p class="text-info-exer size-body">${i}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer small">Target:</p>
              <p class="text-info-exer size-target">${t}</p>
            </li>
          </ul>
        </div>
      </a>
    </li>`).join("")}const d={burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),subscribe_form:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote")};export{a,d as e};
//# sourceMappingURL=elements-a6ffb47a.js.map
