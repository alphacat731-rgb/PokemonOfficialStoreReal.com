const translations={
  es:{
    badge:"EDICIÓN ESPECIAL",
    evolution:"Evolucionando de sprigatito",
    title:"Floral",
    tagline:"Una carta absolutamente necesaria.",
    tax:"impuesto de nada incluido",
    buy:"COMPRAR AHORA",
    note:"Envío premium, experiencia premium y una cantidad premium de decisiones cuestionables.",
    attack1Label:"Ataque",
    attack1:"Bomba explosiva de semillas — 150",
    attack2Label:"Ataque",
    attack2:"Látigo-mágico — 255",
    rarityLabel:"Rareza",
    rarity:"Muy probablemente rara",
    jokeTitle:"¿Por qué cuesta tanto?",
    jokeText:"Porque el número 449,99 parecía suficientemente caro y suficientemente estúpido.",
    footer:"© 2026 Floral™ Store.",
    modalTitle:"Pedido recibido",
    modalText:"Gracias por tu compra. Tu pedido Floral está preparado para continuar hacia el siguiente paso.",
    modalOk:"CONTINUAR"
  },
  en:{
    badge:"SPECIAL EDITION",
    evolution:"Evolving from sprigatito",
    title:"Floral",
    tagline:"An absolutely needed card.",
    tax:"nothing tax included",
    buy:"BUY NOW",
    note:"Premium shipping, premium experience, and a premium amount of questionable decisions.",
    attack1Label:"Attack",
    attack1:"Explosive seed bomb — 150",
    attack2Label:"Attack",
    attack2:"Magic whip — 255",
    rarityLabel:"Rarity",
    rarity:"Very probably rare",
    jokeTitle:"Why does it cost so much?",
    jokeText:"Because 449.99 looked enough expensive and enough stupid.",
    footer:"© 2026 Floral™ Store.",
    modalTitle:"Order received",
    modalText:"Thanks for your purchase. Your Floral order is prepared for the next step.",
    modalOk:"CONTINUE"
  },
  zh:{
    badge:"特别版",
    evolution:"从新叶喵进化",
    title:"花草",
    tagline:"一个完全需要的卡片。",
    tax:"没有税也没有东西",
    buy:"立即购买",
    note:"高级配送、高级体验，以及高级数量的可疑决定。",
    attack1Label:"攻击",
    attack1:"爆炸种子炸弹 — 150",
    attack2Label:"攻击",
    attack2:"魔法鞭子 — 255",
    rarityLabel:"稀有",
    rarity:"非常可能稀有吧",
    jokeTitle:"为什么这么贵?",
    jokeText:"因为449.99看起来够贵，也够没有理由。",
    footer:"© 2026 Floral™ Store.",
    modalTitle:"订单已收到",
    modalText:"感谢您的购买。您的 Floral 订单已准备进入下一步。",
    modalOk:"继续"
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
