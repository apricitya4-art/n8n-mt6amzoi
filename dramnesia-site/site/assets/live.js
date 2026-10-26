// يحمّل المحتوى من Supabase ويطبّقه، ويدير الوضع الليلي
const themeBtn=document.getElementById('themeBtn');
const syncTheme=()=>themeBtn.textContent=document.documentElement.dataset.theme==='dark'?'☀️':'🌙';
themeBtn.onclick=()=>{const d=document.documentElement,n=d.dataset.theme==='dark'?'light':'dark';d.dataset.theme=n;try{localStorage.theme=n}catch(e){}syncTheme()};
syncTheme();
document.querySelectorAll('nav.tabs button').forEach(b=>b.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'})));
(async()=>{try{
  if(/YOUR/.test(SB.url))return;
  const r=await fetch(SB.url+'/rest/v1/site_content?id=eq.1&select=data',{headers:{apikey:SB.key}});
  const C=((await r.json())[0]||{}).data; if(!C)return;
  const put=(a,b)=>{if(b)a.splice(0,a.length,...b)};
  put(PRODUCTS,C.products);put(BOOKS,C.books);put(SOCIALS,C.socials);put(PROMO_CODES,C.promos);put(TESTIMONIALS,C.testimonials);
  put(WILAYAS,C.wilayas&&C.wilayas.map(w=>[w.name,+w.price]));
  if(C.summaries)Object.assign(SUMMARIES,C.summaries);
  if(C.i18n)for(const l in C.i18n)Object.assign(I18N[l],C.i18n[l]);
  CATEGORIES.splice(0,CATEGORIES.length,'all',...new Set(PRODUCTS.map(p=>p.category)));
  const s=C.site||{};window.SITE_WA=s.whatsapp;
  if(s.logo){document.querySelectorAll('img[src="assets/logo.png"]').forEach(i=>i.src=s.logo);document.querySelector('link[rel=icon]').href=s.logo}
  if(s.name){document.title=s.name;document.querySelector('.brand .name').firstChild.textContent=s.name}
  if(C.theme){const o=x=>Object.entries(x||{}).map(([k,v])=>`--${k}:${v};`).join('');
    const st=document.createElement('style');st.textContent=`:root{${o(C.theme.light)}}html[data-theme=dark]{${o(C.theme.dark)}}`;document.head.appendChild(st)}
  applyLang(currentLang);
}catch(e){console.warn('live content failed',e)}})();
