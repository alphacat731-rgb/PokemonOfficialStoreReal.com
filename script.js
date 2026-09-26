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
    review1:"“La compré por 449€ y tuve que cerrar la puerta con llave. Digamos que Floral me dio un momento muy... privado.”",
    review2:"“Me pasé 20 minutos frotando la funda y acabé sudando. Esta carta tiene efectos secundarios que no aparecen en la descripción.”",
    review3:"“Le enseñé la carta a mi primo y se quedó mirando demasiado tiempo. Yo hice exactamente lo mismo. No pregunten.”",
    review4:"“La ilustración tiene una energía peligrosamente sugerente. Cerré la puerta, bajé la persiana y me quedé a solas con mis pensamientos.”",
    review5:"“Dicen que las cartas no tienen aroma. Esta me huele a sudor, plástico y una noche que probablemente debería olvidar.”",
    review6:"“No voy a explicar por qué mi historial de búsqueda empeoró después de comprarla. Solo diré que ‘Floral’ aparece demasiadas veces.”",
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
    review1:"“Bought it for €449 and then had to lock the door. Let’s just say Floral gave me a very... private moment.”",
    review2:"“I spent 20 minutes rubbing the sleeve and ended up sweating. This card has side effects not listed in the description.”",
    review3:"“I showed the card to my cousin and he stared for way too long. I did the same. No questions.”",
    review4:"“The artwork has dangerously suggestive energy. Closed the door, lowered the blinds and stayed alone with my thoughts.”",
    review5:"“They say cards have no smell. This one smells like sweat, plastic and a night I probably should forget.”",
    review6:"“I will not explain why my search history got worse after buying this. Let’s just say the word ‘Floral’ appears too many times.”",
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
    review1:"“花了449欧元买的，然后我锁上了门。只能说，Floral让我有了一个非常……私人的时刻。”",
    review2:"“我擦保护套擦了20分钟，最后都出汗了。这张卡有一些说明书没写的副作用。”",
    review3:"“我给表哥看这张卡，他盯着看了太久。我也一样。不接受提问。”",
    review4:"“画面的能量危险地有暗示性。我关上门，拉下窗帘，独自和我的想法待了一会儿。”",
    review5:"“他们说卡片没有味道。这张闻起来像汗水、塑料和一个我应该忘记的夜晚。”",
    review6:"“我不会解释为什么买完以后我的搜索记录变糟了。只能说‘Floral’出现得太多了。”",
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

const savedLang=localStorage.getItem("floral-lang")||"es";
const savedRegion=localStorage.getItem("floral-region")||"es";
setLanguage(savedLang);
setRegion(savedRegion);