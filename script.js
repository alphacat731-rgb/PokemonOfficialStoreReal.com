const translations={
  es:{
    fakeBadge:"COMPRA FALSA",
    evolution:"Evolucionando de sprigatito",
    title:"Floral",
    tagline:"Una carta absolutamente necesaria.",
    tax:"impuesto de nada incluido",
    buy:"COMPRAR (NO REAL)",
    fakeNote:"Es una tienda de mentira. No se cobra dinero. La cartera puede respirar.",
    attack1Label:"Ataque",
    attack1:"Bomba explosiva de semillas — 150",
    attack2Label:"Ataque",
    attack2:"Látigo-mágico — 255",
    rarityLabel:"Rareza",
    rarity:"Muy probablemente rara",
    jokeTitle:"¿Por qué cuesta tanto?",
    jokeText:"Porque el número 449,99 parecía suficientemente caro y suficientemente estúpido.",
    footer:"© 2026 Tienda dudosa. No afiliada con ninguna tienda Pokémon real.",
    modalTitle:"Compra procesada imaginariamente",
    modalText:"Gracias por intentar gastar 449,99 €. Tu dinero sigue exactamente donde estaba.",
    modalOk:"OK, supongo"
  },
  en:{
    fakeBadge:"FAKE PURCHASE",
    evolution:"Evolving from sprigatito",
    title:"Floral",
    tagline:"An absolutely needed card.",
    tax:"nothing tax included",
    buy:"BUY (NOT REAL)",
    fakeNote:"This is a fake shop. No money gets charged. The wallet can breathing.",
    attack1Label:"Attack",
    attack1:"Explosive seed bomb — 150",
    attack2Label:"Attack",
    attack2:"Magic whip — 255",
    rarityLabel:"Rarity",
    rarity:"Very probably rare",
    jokeTitle:"Why it costs so much?",
    jokeText:"Because 449.99 looked enough expensive and enough stupid.",
    footer:"© 2026 Suspicious Shop. Not affiliated with any real Pokémon shop.",
    modalTitle:"Purchase imaginary processed",
    modalText:"Thanks for trying to spend 449.99 €. Your money is still exactly where was.",
    modalOk:"OK, I guess"
  },
  zh:{
    fakeBadge:"假买",
    evolution:"从喵喵进化的那种东西",
    title:"花草",
    tagline:"一个完全需要的卡片。",
    tax:"没有税也没有东西",
    buy:"购买（假的真的）",
    fakeNote:"这是假的商店。不会拿你的钱。钱包可以呼吸。",
    attack1Label:"攻击",
    attack1:"爆炸种子炸弹 — 150",
    attack2Label:"攻击",
    attack2:"魔法鞭子 — 255",
    rarityLabel:"稀有",
    rarity:"非常可能稀有吧",
    jokeTitle:"为什么这么贵?",
    jokeText:"因为449.99看起来够贵，也够没有理由。",
    footer:"© 2026 可疑商店。不和真实宝可梦商店有关系。",
    modalTitle:"幻想购买已经处理",
    modalText:"谢谢你尝试花449.99欧元。你的钱现在还在原来的地方。",
    modalOk:"好吧"
  }
};

const setLanguage=(lang)=>{
  const dict=translations[lang]||translations.es;
  document.documentElement.lang=lang==="zh"?"zh":lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(dict[key]) el.textContent=dict[key];
  });
  document.querySelectorAll(".lang").forEach(btn=>{
    btn.classList.toggle("active",btn.dataset.lang===lang);
  });
  localStorage.setItem("floral-lang",lang);
};

document.querySelectorAll(".lang").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});

const modal=document.getElementById("modal");
const closeModal=()=>{
  modal.hidden=true;
  document.body.style.overflow="";
};
document.getElementById("buyButton").addEventListener("click",()=>{
  modal.hidden=false;
  document.body.style.overflow="hidden";
});
document.getElementById("closeModal").addEventListener("click",closeModal);
document.getElementById("okModal").addEventListener("click",closeModal);
modal.addEventListener("click",(e)=>{if(e.target===modal) closeModal();});
document.addEventListener("keydown",(e)=>{if(e.key==="Escape") closeModal();});

setLanguage(localStorage.getItem("floral-lang")||"es");
