/* دار العود · متجر تجريبي (Demo) · صُنع بواسطة بدر */
const WA="971561083891", FEE=20, FREE_OVER=300;
const CATS=[["all","الكل"],["offers","العروض والخصومات"],["perf","عطور"],["allover","اولوفر سبري"],["mist","مرشات ومثبت بخور"],["bakh","بخور"],["burn","مباخر"]];
// sizes: [label, price, oldPrice|null]
const PRODUCTS=[
 {id:1,cat:"perf",img:"p1-set",n:"طقم ليل الذهب | عطر + اولوفر سبري",r:4.7,c:365,sold:1240,d:"مجموعة تجمع عطر ليل الذهب 100 مل مع اولوفر سبري 150 مل بنفس الرائحة، لتجربة عطرية متكاملة تدوم طول اليوم. افتتاحية زعفران دافية، وقلب ورد وعود، وقاعدة فانيلا وعنبر.",notes:"زعفران · ورد · عود · فانيلا · عنبر",s:[["الطقم الكامل",300,333]]},
 {id:2,cat:"perf",img:"p2-musk",n:"عطر مسك الصباح",r:4.6,c:212,sold:860,d:"مسك أبيض نظيف ومنعش بلمسة زهور ناعمة، يناسب الدوام والطلعات اليومية.",notes:"مسك أبيض · ياسمين · بودرة",s:[["50 مل",180,null],["100 مل",260,null]]},
 {id:3,cat:"perf",img:"p3-rose",n:"عطر ورد الطائف",r:4.8,c:298,sold:1015,d:"ورد طائفي فاخر مع برغموت ومسك، رائحة أنثوية راقية وثبات ممتاز.",notes:"ورد طائفي · برغموت · مسك",s:[["100 مل",270,300]]},
 {id:4,cat:"allover",img:"p4-amber-allover",n:"اولوفر سبري عنبر وعود",r:4.5,c:176,sold:640,d:"سبري للجسم والشعر والملابس برائحة العنبر والعود، خفيف ومنعش وتقدر تستخدمه أكثر من مرة باليوم.",notes:"عنبر · عود · صندل",s:[["150 مل",95,105]]},
 {id:5,cat:"allover",img:"p5-musk-allover",n:"اولوفر سبري مسك أبيض",r:4.4,c:143,sold:520,d:"سبري مسك أبيض ناعم للجسم والشعر والملابس، يعطيك إحساس النظافة طول اليوم.",notes:"مسك أبيض · قطن · زهور",s:[["150 مل",95,null]]},
 {id:6,cat:"mist",img:"p6-mist",n:"مرش عود للمفارش والملابس",r:4.6,c:120,sold:410,d:"مرش برائحة العود الفاخر للمفارش والكنب والملابس، يعطر البيت والمجلس بسرعة.",notes:"عود · ورد · مسك",s:[["250 مل",75,null]]},
 {id:7,cat:"mist",img:"p7-fixer",n:"مثبت بخور",r:4.3,c:98,sold:350,d:"رشة وحدة على الملابس قبل التبخير تخلي رائحة البخور تثبت لساعات أطول.",notes:"مثبت · بدون رائحة قوية",s:[["100 مل",60,66]]},
 {id:8,cat:"bakh",img:"p8-bakhoor",n:"بخور معمول ملكي",r:4.7,c:254,sold:930,d:"معمول بخور فاخر معجون بدهن العود والورد، يعطر البيت والمجلس لساعات.",notes:"عود · ورد · عنبر",s:[["100 جرام",120,null],["250 جرام",260,null]]},
 {id:9,cat:"bakh",img:"p9-oudchips",n:"عود كلمنتان طبيعي",r:4.9,c:187,sold:470,d:"قطع عود طبيعي مختارة للتبخير، دخانها نظيف ورائحتها راقية.",notes:"عود طبيعي 100٪",s:[["25 جرام",350,390],["50 جرام",650,null]]},
 {id:10,cat:"burn",img:"p10-burner",n:"مبخرة ذهبية بنقوش عربية",r:4.6,c:88,sold:260,d:"مبخرة معدنية ذهبية بنقوش عربية، تجي مع علبة هدية.",notes:"هدية مثالية",s:[["قطعة واحدة",220,null]]},
 {id:11,cat:"burn",img:"p11-eburner",n:"مبخرة كهربائية بمؤقت",r:4.5,c:132,sold:390,d:"مبخرة كهربائية بدون فحم، فيها مؤقت وتشحن بالـ USB. مناسبة للبيت والسيارة والمكتب.",notes:"بدون فحم · مؤقت · شحن USB",s:[["قطعة واحدة",190,210]]}
];
const REVIEWS=[["أم سعيد","طقم ليل الذهب","الريحة فخمة والثبات طول اليوم، والتوصيل وصلني بنفس اليوم في عجمان.",5,"قبل يومين"],["خالد","بخور معمول ملكي","البخور ريحته تعبي المجلس، والتغليف مرتب.",5,"قبل أسبوع"],["نورة","عطر ورد الطائف","ورد ناعم وراقي، بس تمنيت يكون فيه حجم 50 مل.",4,"قبل أسبوعين"]];
const BARS=[[5,82],[4,12],[3,4],[2,1],[1,1]];
const FAQ=[["ما المنتجات المتوفرة لدى دار العود؟","عطور، اولوفر سبري، مرشات عود ومثبت بخور، بخور ومعمول، ومباخر عادية وكهربائية."],
 ["كيف أختار المنتج المناسب لي؟","إذا تحب الروائح الخفيفة جرب المسك والورد، وإذا تحب الثقيلة جرب العود والعنبر. وتقدر تراسلنا على الواتساب ونساعدك."],
 ["ما الفرق بين البخور والاولوفر سبري؟","البخور يتبخر على الفحم أو المبخرة الكهربائية للبيت والملابس، والاولوفر سبري يترش مباشرة على الجسم والشعر والملابس."],
 ["كم مدة التوصيل؟","داخل الإمارات بنفس اليوم أو اليوم اللي بعده، والتوصيل مجاني للطلبات فوق 300 د.إ."],
 ["هل أقدر أطلب المنتجات كهدايا؟","أكيد، كل الطلبات تتغلف مجانًا وتقدر تكتب ملاحظة الإهداء في السلة."],
 ["كيف أدفع؟","كاش عند الاستلام، أو أونلاين (Apple Pay، بطاقة، تابي وتمارا) بعد تفعيل بوابة الدفع."],
 ["كيف أحافظ على العطر بعد فتحه؟","احفظه بعيد عن الشمس والحرارة، وسكّر الغطاء زين بعد كل استخدام."]];
const REELS=[["reel1","كيف تختار عطرك؟"],["reel2","طريقة التبخير الصح"],["reel3","وين ترش الأولوفر؟"]];
const PAYS=[{id:"apple",lg:"Apple Pay",nm:"آبل باي",s:"أونلاين",on:1},{id:"card",lg:"VISA · MC",nm:"بطاقة",s:"فيزا / ماستركارد",on:1},{id:"bnpl",lg:"tabby · tamara",nm:"تابي / تمارا",s:"قسّطها على 4 دفعات",on:1},{id:"cash",lg:"💵",nm:"كاش عند الاستلام",s:"ادفع لما يوصلك",on:0}];
const EMS=["عجمان","الشارقة","دبي","أبوظبي","العين","أم القيوين","رأس الخيمة","الفجيرة"];

let cat="all",recv="delivery",pay="cash",cur={id:1,size:0,qty:1};
let cart=JSON.parse(localStorage.getItem("dao2_cart")||"[]");
const $=s=>document.querySelector(s), P=id=>PRODUCTS.find(p=>p.id===id);
const aed=n=>`${n.toLocaleString("en-US")} د.إ`;
const pct=s=>s[2]?Math.round((1-s[1]/s[2])*100):0;
const stars=r=>"★".repeat(Math.round(r))+"☆".repeat(5-Math.round(r));
const save=()=>localStorage.setItem("dao2_cart",JSON.stringify(cart));
function toast(m){const e=$("#toast");e.textContent=m;e.classList.add("show");clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove("show"),1500)}
const waHello=`https://wa.me/${WA}?text=${encodeURIComponent("السلام عليكم، عندي استفسار عن منتجات دار العود 🌿")}`;

function card(p){const s=p.s[0],d=pct(s);
 return `<article class="card" data-open="${p.id}"><div class="im"><img src="img/${p.img}.svg" alt="${p.n}" loading="lazy"><button class="plus" data-quick="${p.id}" aria-label="أضف">+</button></div>
 <div class="in"><div class="pr"><b>${aed(s[1])}</b>${d?`<span class="save">وفر ${d}٪</span>`:""}</div><div class="nm">${p.n}</div>
 <div class="rt"><span class="stars">${stars(p.r)}</span><span>${p.r.toFixed(1)}</span></div></div></article>`}
function renderChips(){$("#chips").innerHTML=CATS.map(([id,n])=>`<button class="${id===cat?"on":""}" data-c="${id}">${n}</button>`).join("")}
function renderGrid(){const l=PRODUCTS.filter(p=>cat==="all"||(cat==="offers"?p.s.some(x=>x[2]):p.cat===cat));$("#grid").innerHTML=l.map(card).join("")}
function renderStatic(){
 $("#reels").innerHTML=REELS.map(([f,t],i)=>`<div class="reel" data-reel="${i}"><video src="video/${f}.mp4" poster="video/poster${i+1}.jpg" muted loop playsinline autoplay preload="metadata"></video><div class="play">▶</div><span>${t}</span></div>`).join("");
 $("#bars").innerHTML=BARS.map(([n,p])=>`<div class="bar"><span>${n}</span><i style="--p:${p}%"></i><span>${p}٪</span></div>`).join("");
 $("#revs").innerHTML=REVIEWS.map(([n,pr,t,r,w])=>`<div class="rev"><div class="rh"><b>${n}<span class="vb">مشتري</span></b><small>${w}</small></div><div class="stars">${stars(r)}</div><div class="mut" style="font-size:11.5px">${pr}</div><p>${t}</p></div>`).join("");
 renderFaq("");
 const em=$("#cEm");em.innerHTML=EMS.map((e,i)=>`<option value="${i}">${e}</option>`).join("");
 ["#menuWa","#footWa","#navWa"].forEach(s=>$(s).href=waHello);
}
function renderFaq(q){$("#faqList").innerHTML=FAQ.filter(([a,b])=>!q||(a+b).includes(q)).map(([a,b])=>`<details><summary><span class="qi">💬</span>${a}<span class="ch">⌄</span></summary><p>${b}</p></details>`).join("")||`<p class="mut" style="font-size:13px;padding:10px 0">ما لقينا سؤال مطابق، راسلنا على الواتساب.</p>`}

function openP(id){cur={id,size:0,qty:1};drawP();$("#pOv").hidden=false;$("#pOv .sbody").scrollTop=0}
function drawP(){const p=P(cur.id),s=p.s[cur.size],d=pct(s);
 const rel=PRODUCTS.filter(x=>x.cat===p.cat&&x.id!==p.id).concat(PRODUCTS.filter(x=>x.cat!==p.cat&&x.id!==p.id)).slice(0,5);
 $("#pBody").innerHTML=`<div class="pimg"><img src="img/${p.img}.svg" alt=""></div>
 <div class="thumbs"><img src="img/${p.img}.svg" alt=""></div>
 <div class="pname">${p.n}</div>
 <div class="prow"><span class="p">${aed(s[1])}</span>${s[2]?`<s>${aed(s[2])}</s><span class="pct">${d}٪ خصم</span>`:""}</div>
 <div class="prt"><span><span class="stars">${stars(p.r)}</span> ${p.r} (${p.c} تقييم)</span><span>${p.sold.toLocaleString("en-US")} بيعت حتى الآن*</span></div>
 ${p.s.length>1?`<div class="sec"><h4>الحجم</h4><div class="sizes">${p.s.map((z,i)=>`<button class="${i===cur.size?"on":""}" data-size="${i}">${z[0]}</button>`).join("")}</div></div>`:""}
 <div class="sec" style="display:flex;align-items:center;justify-content:space-between"><h4 style="margin:0">الكمية</h4><div class="qty"><button data-q="1">+</button><span>${cur.qty}</span><button data-q="-1">−</button></div></div>
 <div class="sec"><h4>الوصف</h4><p>${p.d}</p><div class="notes">${p.notes}</div></div>
 <div class="sec"><h4>المنتجات ذات صلة</h4></div><div class="rel">${rel.map(card).join("")}</div>
 <p class="mut" style="font-size:10.5px;padding:8px 14px">* أرقام توضيحية للمتجر التجريبي</p>`;
 $("#addBtn").textContent=`⊕ أضف · ${aed(s[1]*cur.qty)}`;
}
function add(id,size,qty){const f=cart.find(c=>c.id===id&&c.size===size);f?f.qty+=qty:cart.push({id,size,qty});save();renderCart();toast("انضاف للسلة ✓")}
function totals(){const sub=cart.reduce((a,c)=>a+P(c.id).s[c.size][1]*c.qty,0);const fee=recv==="pickup"||!sub||sub>=FREE_OVER?0:FEE;return{sub,fee,total:sub+fee}}
function renderCart(){
 const n=cart.reduce((a,c)=>a+c.qty,0);["#cnt1","#cnt2"].forEach(s=>{$(s).textContent=n;$(s).dataset.z=n?0:1});
 if(!cart.length){$("#items").innerHTML=`<p class="empty">السلة فاضية، اختار منتجك 🌿</p>`;$("#co").style.display="none";return}
 $("#co").style.display="";
 $("#items").innerHTML=cart.map((c,i)=>{const p=P(c.id),s=p.s[c.size];return `<div class="ci"><img src="img/${p.img}.svg" alt=""><div class="t">${p.n}<small>${s[0]}</small><b>${aed(s[1]*c.qty)}</b></div><div class="qty"><button data-ci="${i}" data-d="1">+</button><span>${c.qty}</span><button data-ci="${i}" data-d="-1">−</button></div></div>`}).join("");
 const{sub,fee,total}=totals();
 $("#tot").innerHTML=`<div><span>المجموع</span><span>${aed(sub)}</span></div><div><span>التوصيل</span><span>${fee?aed(fee):"مجاني"}</span></div><div class="gt"><span>الإجمالي</span><span>${aed(total)}</span></div>${recv==="delivery"&&sub<FREE_OVER?`<small class="mut">توصيل مجاني للطلبات فوق 300 د.إ</small>`:""}`;
 $("#cArea").style.display=recv==="pickup"?"none":"";
 $("#sendBtn").textContent=`🔒 اطلب الآن · ${aed(total)}`;
}
function renderPay(){$("#pay").innerHTML=PAYS.map(p=>`<button class="${p.id===pay?"on":""}" data-pay="${p.id}"><span class="lg">${p.lg}</span>${p.nm}<small>${p.s}</small></button>`).join("");$("#pnote").hidden=!PAYS.find(p=>p.id===pay).on}
function msg(){const{sub,fee,total}=totals(),L=[];
 L.push("🛍️ طلب جديد من متجر دار العود (تجريبي)","","الطلبات:");
 cart.forEach((c,i)=>{const p=P(c.id),s=p.s[c.size];L.push(`${i+1}. ${p.n} | ${s[0]} | الكمية: ${c.qty} | ${aed(s[1]*c.qty)}`)});
 L.push("",`المجموع: ${aed(sub)}`,`التوصيل: ${fee?aed(fee):"مجاني"}`,`الإجمالي: ${aed(total)}`,"");
 L.push(`الاستلام: ${recv==="delivery"?"توصيل":"استلام من المحل"}`,`الاسم: ${$("#cName").value.trim()}`,`الإمارة: ${EMS[+$("#cEm").value||0]}`);
 if(recv==="delivery")L.push(`العنوان: ${$("#cArea").value.trim()}`);
 L.push(`الجوال: ${$("#cPhone").value.trim()}`);
 const nt=$("#cNote").value.trim();if(nt)L.push(`ملاحظة: ${nt}`);
 const pm=PAYS.find(p=>p.id===pay);L.push(`الدفع: ${pm.nm}${pm.on?" (أرسلوا لي رابط الدفع)":""}`);
 return L.join("\n")}
const waUrl=()=>`https://wa.me/${WA}?text=${encodeURIComponent(msg())}`;
function validate(){if(!cart.length)return"السلة فاضية";if(!$("#cName").value.trim())return"اكتب اسمك";if(recv==="delivery"&&!$("#cArea").value.trim())return"اكتب المنطقة أو العنوان";
 const ph=$("#cPhone").value.replace(/[\s-]/g,"").replace(/[٠-٩]/g,d=>"٠١٢٣٤٥٦٧٨٩".indexOf(d));if(!/^(\+?971|0)?5\d{8}$/.test(ph))return"اكتب رقم جوال إماراتي صحيح";return""}
function openCart(){renderCart();$("#cOv").hidden=false}

/* reel player */
let ri=0;const rv=()=>$("#rpV");
function openReel(i){ri=(i+REELS.length)%REELS.length;const v=rv();$("#rpBars").innerHTML=REELS.map((_,k)=>`<i><b style="width:${k<ri?100:0}%"></b></i>`).join("");
 $("#rpTitle").textContent=REELS[ri][1];v.poster=`video/poster${ri+1}.jpg`;v.src=`video/${REELS[ri][0]}.mp4`;v.currentTime=0;$("#rp").hidden=false;$("#rpPlay").hidden=true;
 document.querySelectorAll(".reel video").forEach(x=>x.pause());const pr=v.play();if(pr)pr.catch(()=>{$("#rpPlay").hidden=false})}
function closeReel(){const v=rv();v.pause();$("#rp").hidden=true;document.querySelectorAll(".reel video").forEach(x=>x.play().catch(()=>{}))}
rv().addEventListener("timeupdate",()=>{const v=rv(),b=$("#rpBars").children[ri];if(b&&v.duration)b.firstChild.style.width=(v.currentTime/v.duration*100)+"%"});
rv().addEventListener("ended",()=>{ri<REELS.length-1?openReel(ri+1):closeReel()});
rv().addEventListener("click",()=>{const v=rv();if(v.paused){v.play();$("#rpPlay").hidden=true}else{v.pause();$("#rpPlay").hidden=false}});
let tx=null;$("#rp").addEventListener("touchstart",e=>{tx=e.touches[0].clientX},{passive:true});
$("#rp").addEventListener("touchend",e=>{if(tx===null)return;const dx=e.changedTouches[0].clientX-tx;tx=null;if(Math.abs(dx)>50)openReel(ri+(dx>0?1:-1))});
document.addEventListener("keydown",e=>{if($("#rp").hidden)return;if(e.key==="Escape")closeReel();if(e.key==="ArrowLeft")openReel(ri+1);if(e.key==="ArrowRight")openReel(ri-1)});

document.addEventListener("click",e=>{
 const rl=e.target.closest(".reel");if(rl){openReel(+rl.dataset.reel);return}
 if(e.target.closest("#rpClose")){closeReel();return}
 if(e.target.closest("#rpNext")){openReel(ri+1);return}
 if(e.target.closest("#rpPrev")){openReel(ri-1);return}
 if(e.target.closest("#rpShop")){closeReel();document.getElementById("products").scrollIntoView({behavior:"smooth"});return}
 const ov=e.target.classList&&e.target.classList.contains("ov");if(ov){e.target.hidden=true;return}
 const el=e.target.closest("button,[data-open],a");if(!el)return;
 if(el.id!=="menuBtn"&&!el.closest("#menu"))$("#menu").hidden=true;
 if(el.dataset.quick){e.stopPropagation();add(+el.dataset.quick,0,1);return}
 if(el.dataset.c){cat=el.dataset.c;renderChips();renderGrid();return}
 if(el.dataset.open){openP(+el.dataset.open);return}
 if(el.dataset.size!==undefined){cur.size=+el.dataset.size;drawP();return}
 if(el.dataset.q){cur.qty=Math.max(1,cur.qty+ +el.dataset.q);drawP();return}
 if(el.id==="addBtn"){add(cur.id,cur.size,cur.qty);$("#pOv").hidden=true;return}
 if(el.dataset.ci!==undefined){const i=+el.dataset.ci;cart[i].qty+= +el.dataset.d;if(cart[i].qty<1)cart.splice(i,1);save();renderCart();return}
 if(el.dataset.close!==undefined){el.closest(".ov").hidden=true;return}
 if(el.id==="cartTop"||el.id==="navCart"){e.preventDefault();openCart();return}
 if(el.id==="navHome"){e.preventDefault();scrollTo({top:0,behavior:"smooth"});return}
 if(el.id==="menuBtn"){$("#menu").hidden=!$("#menu").hidden;return}
 if(el.closest("#menu")){$("#menu").hidden=true;return}
 if(el.dataset.v){recv=el.dataset.v;document.querySelectorAll("#recv button").forEach(b=>b.classList.toggle("on",b===el));renderCart();return}
 if(el.dataset.pay){pay=el.dataset.pay;renderPay();return}
 if(el.id==="sendBtn"){const er=validate(),b=$("#err");if(er){b.textContent=er;b.hidden=false;b.scrollIntoView({block:"center"});return}b.hidden=true;window.open(waUrl(),"_blank");return}
});
$("#faqQ").addEventListener("input",e=>renderFaq(e.target.value.trim()));
renderChips();renderGrid();renderStatic();renderPay();renderCart();

/* local preview helper for screenshots: ?shot=product | ?shot=cart */
(function(){const q=new URLSearchParams(location.search).get("shot");if(!q)return;
 if(q==="product")openP(1);
 if(q==="reel")openReel(+(new URLSearchParams(location.search).get("i")||0));
 if(q==="cart"){cart=[{id:1,size:0,qty:1},{id:8,size:0,qty:2},{id:4,size:0,qty:1}];$("#cName").value="محمد أحمد";$("#cArea").value="النعيمية، شارع الشيخ خليفة";$("#cPhone").value="0501234567";$("#cNote").value="تغليف هدية لو سمحتوا";pay="apple";renderPay();openCart();
  document.body.dataset.wa=waUrl();document.body.dataset.valid=validate()||"ok"}})();
