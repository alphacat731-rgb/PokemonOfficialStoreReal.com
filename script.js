const translations={
  es:{
    regionLabel:"Región",
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
    statsKicker:"INFORMACIÓN DE FLORAL",
    statsTitle:"Estadísticas de combate",
    statAttack:"Ataque",
    statDefense:"Defensa",
    statSpeed:"Velocidad",
    statSentiment:"Valor sentimental",
    infinite:"INFINITO",
    reviewsKicker:"OPINIONES",
    reviewsTitle:"Clientes que claramente saben lo que hacen",
    verified:"Compra verificada",
    reviewsMore:"MOSTRAR MÁS COMENTARIOS",
    reviewsLess:"OCULTAR COMENTARIOS",
    review1:"“La compré porque la ilustración me gustó muchísimo, la verdad. Luego vi los 450 PS y pensé: bueno, pues perfecto.”",
    review2:"“La carta llegó perfecta. Pensaba que la impresión iba a verse un poco cutre, pero en persona queda bastante bien.”",
    review3:"“Lo de los 999 de velocidad me hace bastante gracia. No sé por qué tiene tanto, pero yo no me quejo.”",
    review4:"“La metí en el archivador con mis cartas de tipo planta y fue directamente la que más miro jajaja.”",
    review5:"“No tenía pensado comprar otra carta esta semana. Vi Floral, cambié de idea. Fin de la historia.”",
    review6:"“Los ataques están completamente pasados de vueltas, pero precisamente por eso me gusta. Parece una carta hecha a las 2 de la mañana.”",
    jokeTitle:"¿Por qué cuesta tanto?",
    jokeText:"Porque el número 449,99 parecía suficientemente caro y suficientemente estúpido.",
    footer:"© 2026 Floral™ Store.",
    modalTitle:"Pedido recibido",
    modalText:"Gracias por tu compra. Tu pedido Floral está preparado para continuar hacia el siguiente paso.",
    modalOk:"CONTINUAR"
  },
  en:{
    regionLabel:"Region",
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
    statsKicker:"FLORAL INFORMATION",
    statsTitle:"Combat statistics",
    statAttack:"Attack",
    statDefense:"Defense",
    statSpeed:"Speed",
    statSentiment:"Sentimental value",
    infinite:"INFINITE",
    reviewsKicker:"REVIEWS",
    reviewsTitle:"Customers who clearly know what they are doing",
    verified:"Verified purchase",
    reviewsMore:"SHOW MORE REVIEWS",
    reviewsLess:"HIDE REVIEWS",
    review1:"“Honestly, I only bought it because the artwork looked really nice. Then I noticed the 450 HP and thought… yep, fair enough.”",
    review2:"“The card arrived in perfect condition. I was expecting the print to look a bit cheap, but it actually looks great in person.”",
    review3:"“My favourite part is the ridiculous 999 speed. No idea why it has that much, but I'm not complaining.”",
    review4:"“I put it in a binder with the rest of my grass cards and it immediately became the one I keep looking at lol.”",
    review5:"“Wasn't planning on buying another card this week. Saw Floral, changed my mind. That's basically the whole story.”",
    review6:"“The attacks are completely over the top, but that's kind of why I like it. Feels like a card someone would make at 2am.”",
    jokeTitle:"Why does it cost so much?",
    jokeText:"Because 449.99 looked enough expensive and enough stupid.",
    footer:"© 2026 Floral™ Store.",
    modalTitle:"Order received",
    modalText:"Thanks for your purchase. Your Floral order is prepared for the next step.",
    modalOk:"CONTINUE"
  },
  zh:{
    regionLabel:"地区",
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
    statsKicker:"花草信息",
    statsTitle:"战斗统计",
    statAttack:"攻击",
    statDefense:"防御",
    statSpeed:"速度",
    statSentiment:"情感价值",
    infinite:"无限",
    reviewsKicker:"评价",
    reviewsTitle:"这些顾客显然知道自己在做什么",
    verified:"已验证购买",
    reviewsMore:"显示更多评论",
    reviewsLess:"隐藏评论",
    review1:"“花了449欧元买的，当晚我就锁上了门。我的尊严直到星期二才回来。”",
    review2:"“保护套一开始只是配件，后来不知怎么成了共犯。细节拒绝透露。10/10。”",
    review3:"“我给朋友看Floral，他问我为什么在出汗。然后这场谈话就结束了。”",
    review4:"“OnlyFloralFans不是开玩笑。只能说，Floral从我的桌面去了一个更加私人的地方。”",
    review5:"“我是PajeroBotanico，买完Floral后的搜索记录大概应该列为机密。”",
    review6:"“魔法鞭子有255攻击力，看来还有255点毁掉我尊严的能力。购买已验证。”",
    jokeTitle:"为什么这么贵?",
    jokeText:"因为449.99看起来够贵，也够没有理由。",
    footer:"© 2026 Floral™ Store.",
    modalTitle:"订单已收到",
    modalText:"感谢您的购买。您的 Floral 订单已准备进入下一步。",
    modalOk:"继续"
  }
};

const prices={
  es:{value:"449,99 €"},
  us:{value:"$499.99"},
  jp:{value:"¥69,800"},
  cn:{value:"¥3,499"}
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
  localStorage.setItem("floral-lang-v2",lang);
};

const setRegion=(region)=>{
  const selected=prices[region]?region:"es";
  document.getElementById("productPrice").textContent=prices[selected].value;
  document.getElementById("regionSelect").value=selected;
  localStorage.setItem("floral-region",selected);
};

document.querySelectorAll(".lang").forEach(btn=>{
  btn.addEventListener("click",()=>setLanguage(btn.dataset.lang));
});
document.getElementById("regionSelect").addEventListener("change",(e)=>setRegion(e.target.value));

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

const savedLang=localStorage.getItem("floral-lang-v2")||"en";
localStorage.setItem("floral-lang-v2",savedLang);
const savedRegion=localStorage.getItem("floral-region")||"es";
setLanguage(savedLang);
setRegion(savedRegion);

const showMoreReviews=document.getElementById("showMoreReviews");
if(showMoreReviews){
  let reviewsOpen=false;
  showMoreReviews.addEventListener("click",()=>{
    reviewsOpen=!reviewsOpen;
    document.querySelectorAll(".review-extra").forEach(card=>{
      card.classList.toggle("is-visible",reviewsOpen);
    });
    const dict=translations[document.documentElement.lang]||translations.es;
    showMoreReviews.textContent=reviewsOpen?(dict.reviewsLess||"OCULTAR COMENTARIOS"):(dict.reviewsMore||"MOSTRAR MÁS COMENTARIOS");
  });
}
