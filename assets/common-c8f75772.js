import{a as n,i as l}from"./vendor-80510813.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const e of s)if(e.type==="childList")for(const c of e.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const e={};return s.integrity&&(e.integrity=s.integrity),s.referrerpolicy&&(e.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?e.credentials="include":s.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(s){if(s.ep)return;s.ep=!0;const e=o(s);fetch(s.href,e)}})();const p={body:document.querySelector("body"),burger:document.querySelector(".js-burger"),filter:document.querySelector(".js-filter"),gallery:document.querySelector(".js-gallery"),gallerySubtitle:document.querySelector(".js-subtitle"),pagination:document.querySelector(".js-pagination"),searchForm:document.querySelector(".js-search-form"),backBtn:document.querySelector(".js-back-button"),subscribeForm:document.querySelector(".js-subscribe-form"),quote:document.querySelector(".js-quote"),policyBtn:document.querySelector(".js-policy-modal-open"),termsBtn:document.querySelector(".js-terms-modal-open"),scrollTopBtn:document.querySelector(".js-scroll-top-button")},m="/project-UCranes02/assets/icons-0389f68f.svg#icon-remove",g="/project-UCranes02/assets/icons-0389f68f.svg#icon-star",h="/project-UCranes02/assets/icons-0389f68f.svg#icon-arrow",f="/project-UCranes02/assets/icons-0389f68f.svg#icon-run-man";function $(i,t){return i.map(({_id:o,bodyPart:r,name:s,target:e,rating:c,burnedCalories:u,time:d})=>`
         <li class="main-item_card-exercises">
      <a class="link-exercise-card" href="" data-id="${o}">
        <!-- Top place card -->
        <div class="card-cont-content">
          <div class="cont-rating-btn-title">
            <div class="const-text-exer">
              <p class="text-card-exer">WORKOUT</p>
            </div>
            ${t==="favorites"?`
                <button class="btn-delete-card" type="button" data-delete="${o}">
                <svg class="icon-delete-favorite" width="16" height="16">
                  <use href="${m}"></use>
                </svg>
                </button>
                
              `:`
                <div class="cont-card-rating">
                  <p class="card-rating-exer">${c}</p>
                  <svg class="icon-card-exer" width="18" height="18">
                    <use href="${g}"></use>
                  </svg>
                </div>
              `}
            <div class="block-btn-icon-exer">
              <button class="btn-card-exer">Start</button>
              <svg class="icon-card-btn" width="16" height="16">
                <use href="${h}"></use>
              </svg>
            </div>
          </div>
          <!-- Middle place card -->
          <div class="cont-icon-name-text">
            <svg class="icon-people-card" width="24" height="24">
              <use href="${f}"></use>
            </svg>
            <p class="text-name-exercises-card">${s}</p>
          </div>
          <!-- End place card -->
          <ul class="list-info-exer">
            <li class="item-card-exer">
              <p class="text-title-item-exer big">Burned calories:</p>
              <p class="text-info-exer size-time">${u}/${d}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer medium">Body part:</p>
              <p class="text-info-exer size-body">${r}</p>
            </li>
            <li class="item-card-exer">
              <p class="text-title-item-exer small">Target:</p>
              <p class="text-info-exer size-target">${e}</p>
            </li>
          </ul>
        </div>
      </a>
    </li>`).join("")}function y(i,t){let o=[];if(t<=5)for(let r=1;r<=t;r+=1)o.push(`<li class="elm"><button type="button" class="pagination-el ${r===i?"active":"unactive"}" data-page="${r}" >${r}</button></li>`);else{const r=Math.max(Math.min(i-2,t-4),1),s=Math.min(r+4,t);for(let e=1;e<=t;e+=1)e>=r&&e<=s?o.push(`<li class="elm"><button type="button" class="pagination-el ${e===i?"active":"unactive"}" data-page="${e}" >${e}</button></li>`):o.push(`<li class="elm" style="display: none;"><button type="button" class="pagination-el ${e===i?"active":"unactive"}" data-page="${e}" >${e}</button></li>`)}return o.join("")}function S(i,t){p.pagination.innerHTML=y(i,t)}const a="https://your-energy.b.goit.study/api/",b={bodypart:"Body parts",muscles:"Muscles",equipment:"Equipment"};class v{constructor({filter:t="muscles",subFilter:o="",keyword:r="",page:s=1,limit:e=8}){this.filter=t,this.subFilter=o,this.keyword=r,this.page=s,this.limit=e,this.id=""}async getFilters(){return(await n.get(`${a}filters`,{params:{filter:b[this.filter],page:this.page,limit:this.limit}})).data}async getExercises(){return(await n.get(`${a}exercises`,{params:{[this.filter]:this.subFilter,keyword:this.keyword,page:this.page,limit:this.limit}})).data}async getExerciseById(t){const o=await n.get(`${a}exercises/${t}`);return this.id=t,o.data}async updateExerciseRating({rate:t,email:o,review:r}){return(await n.patch(`${a}exercises/${this.id}/rating`,{rate:t,email:o,review:r})).data}async getQuote(){return(await n.get(`${a}quote`)).data}async subscribe({email:t}){return(await n.post(`${a}subscription`,{email:t})).data}}const w=new v({});l.settings({timeout:5e3,resetOnHover:!0,position:"bottomCenter",transitionIn:"flipInX",transitionOut:"flipOutX",theme:"dark",backgroundColor:"#242424"});function q(i){l.show({overlay:!0,overlayClose:!0,progressBarColor:"#BF5858",message:i})}function E(i){l.show({progressBarColor:"#4FAC40",message:i})}const j={SS_KEY_FILTERS:"user filters",LS_KEY_FAVORITES:"favorites",LS_KEY_QUOTE:"quote",BASE_QUOTE:{author:"Tom Brady",quote:"A lot of times I find that people who are blessed with the most talent don't ever develop that attitude, and the ones who aren't blessed in that way are the most competitive and have the biggest heart."},ERROR_MESSAGE:"Something goes wrong!"};export{$ as a,m as b,j as c,w as d,p as e,E as f,S as r,q as s};
//# sourceMappingURL=common-c8f75772.js.map
