import{c as o,e as n,a as c,r as l}from"./assets/common-23f5d9b1.js";import"./assets/vendor-80510813.js";let t=9;function r(a=1){const e=JSON.parse(localStorage.getItem(o.LS_KEY_FAVORITES))??[],i=Math.ceil(e.length/t),s=e.splice((a-1)*t,t);n.gallery.innerHTML=c(s,"favorites"),l(a,i)}function g({target:a}){if(!a.hasAttribute("data-page"))return;const e=parseInt(a.dataset.page);r(e)}n.pagination.addEventListener("click",g);r();
//# sourceMappingURL=commonHelpers.js.map
