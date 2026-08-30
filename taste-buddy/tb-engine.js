/* Taste Buddy — pure logic: matching, parsing, scoring, amounts, portrait, generation */
(function(){
const D=()=>window.TB_DATA;
const IRREG={leaves:'leaf',loaves:'loaf',tomatoes:'tomato',potatoes:'potato',berries:'berry',cherries:'cherry',anchovies:'anchovy',chilies:'chili',chillies:'chili',olives:'olive',noodles:'noodle',dates:'date'};
function singular(w){w=w.toLowerCase();if(IRREG[w])return IRREG[w];if(/[a-z]ies$/.test(w))return w.slice(0,-3)+'y';if(/(ses|xes|zes|ches|shes)$/.test(w))return w.slice(0,-2);if(/s$/.test(w)&&!/ss$/.test(w))return w.slice(0,-1);return w}
const ALIAS={scallion:'green onion','spring onion':'green onion',capsicum:'bell pepper',aubergine:'eggplant',courgette:'zucchini',prawn:'shrimp',prawns:'shrimp',coriander:'cilantro','coriander leaves':'cilantro',chilli:'chili',mince:'ground beef','minced beef':'ground beef',scallions:'green onion'};
function norm(s){s=(s||'').toLowerCase().trim().replace(/\(.*?\)/g,'').replace(/,.*$/,'').replace(/\s+/g,' ').trim();return ALIAS[s]||s}
function headNoun(phrase){const p=norm(phrase);const ws=p.split(' ');return singular(ws[ws.length-1]||'')}
const SPECIALTY_OIL=['sesame oil','chili oil','truffle oil','coconut oil'];
function isAssumed(name){const p=norm(name),h=headNoun(p);if(h==='oil')return !SPECIALTY_OIL.includes(p);return ['salt','pepper','water','sugar','flour'].includes(h)&&(p===h||p==='black pepper'||p==='sea salt'||p==='all-purpose flour')}
// match if exact, OR heads equal AND one side is the bare head noun ("jasmine rice" ⇄ "rice", never "rice vinegar" → "rice", never "black beans" → "green beans")
function owned(recipeIng,pantry){const a=norm(recipeIng);if(isAssumed(a))return true;const ha=headNoun(a);for(const p of pantry){const b=norm(p.name||p);if(a===b)return true;const hb=headNoun(b);const bs=b.split(' ').map(singular).join(' ');if(bs===a.split(' ').map(singular).join(' '))return true;if(ha===hb&&(a===ha||b===ha||bs===ha))return true}return false}
function matchInfo(recipe,pantry){const have=[],missing=[];for(const ing of recipe.ingredients){if(isAssumed(ing))continue;(owned(ing,pantry)?have:missing).push(ing)}
 const total=have.length+missing.length;const pct=total===0?100:Math.round(have.length/total*100);return{have,missing,pct,total}}
function pantryActive(pantry){return pantry.length>=3}
// ---- hard filters
function blockedTerms(rules){const B=D().BLOCKED;let terms=[];rules.forEach(r=>{if(B[r])terms=terms.concat(B[r])});return terms}
function recipeBlocked(recipe,terms){for(const ing of recipe.ingredients){const n=norm(ing);for(const t of terms){if(n.includes(t))return t}}return null}
function dislikeHit(recipe,dislikes){for(const ing of recipe.ingredients){const n=norm(ing);for(const d of dislikes){const dn=norm(d);if(dn&&(n.includes(dn)||headNoun(n)===headNoun(dn)))return d}}return null}
// ---- free-text parsing
const NUMWORDS={a:1,an:1,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11,twelve:12,dozen:12,couple:2,few:3,several:3,half:.5,quarter:.25,some:0,handful:1};
const UNITS=/^(g|kg|grams?|ml|l|liters?|litres?|lbs?|pounds?|oz|ounces?|cups?|tbsp|tsp|tablespoons?|teaspoons?|cans?|tins?|jars?|cloves?|bunch(es)?|heads?|loa(f|ves)|bags?|boxes?|sticks?|pieces?|slices?|fillets?|packs?|packets?|bottles?|cartons?|of)$/;
const FILLERS=/^(i|ive|i've|we|we've|have|has|got|get|there's|theres|is|are|my|our|the|in|on|fridge|freezer|pantry|shelf|kitchen|also|plus|just|like|think|maybe|probably|left|leftover|fresh|big|small|little|really|and|with|to|so|then|umm?|uhh?|yeah|ok|okay)$/;
function fuzzyCatalog(phrase){const cat=D().CATALOG;const p=norm(phrase);if(!p)return null;
 let hit=cat.find(c=>c.name===p);if(hit)return hit;
 const ps=p.split(' ').map(singular).join(' ');hit=cat.find(c=>c.name===ps);if(hit)return hit;
 hit=cat.find(c=>singular(c.name)===singular(p)||c.name.split(' ').map(singular).join(' ')===ps);if(hit)return hit;
 const hp=headNoun(p);const cands=cat.filter(c=>headNoun(c.name)===hp);
 if(cands.length){const exactMod=cands.find(c=>norm(c.name)===p||c.name===hp);return exactMod||cands[0]}
 hit=cat.find(c=>c.name.includes(p)||p.includes(c.name));if(hit)return hit;
 if(p.length>=5){let best=null,bd=3;for(const c of cat){const d=lev(p,c.name,2);if(d<bd){bd=d;best=c}}if(best)return best}
 return null}
function lev(a,b,max){if(Math.abs(a.length-b.length)>max)return max+1;const m=[];for(let i=0;i<=a.length;i++)m[i]=[i];for(let j=0;j<=b.length;j++)m[0][j]=j;
 for(let i=1;i<=a.length;i++){let rowMin=1e9;for(let j=1;j<=b.length;j++){m[i][j]=Math.min(m[i-1][j]+1,m[i][j-1]+1,m[i-1][j-1]+(a[i-1]===b[j-1]?0:1));rowMin=Math.min(rowMin,m[i][j])}if(rowMin>max)return max+1}
 return m[a.length][b.length]}
function parseFreeText(text){
 const chunks=(text||'').toLowerCase().replace(/[.!?]/g,',').split(/,|;| and | plus | also | then |\bwith\b/).map(s=>s.trim()).filter(Boolean);
 const out=[],seen=new Set();
 for(const chunk of chunks){
  const words=chunk.split(/\s+/).filter(w=>{if(/^[\d\/.½¼¾]+$/.test(w))return false;if(NUMWORDS[w]!=null)return false;if(UNITS.test(w))return false;if(FILLERS.test(w))return false;return true});
  if(!words.length)continue;
  // try longest n-gram first
  let matched=false;
  for(let len=Math.min(3,words.length);len>=1&&!matched;len--){
   for(let i=0;i+len<=words.length&&!matched;i++){
    const hit=fuzzyCatalog(words.slice(i,i+len).join(' '));
    if(hit&&!seen.has(hit.name)){seen.add(hit.name);out.push(hit);matched=true}
   }}
  if(!matched){const guess=words.join(' ');if(guess.length>2&&!seen.has(guess)){seen.add(guess);out.push({name:guess,emoji:'🛒',cat:'Drinks & Extras',unknown:true})}}
 }
 return out}
function searchCatalog(q){q=norm(q);if(!q)return[];const cat=D().CATALOG;const starts=[],incl=[];for(const c of cat){if(c.name.startsWith(q))starts.push(c);else if(c.name.includes(q)||headNoun(c.name)===singular(q))incl.push(c)}return starts.concat(incl).slice(0,14)}
// ---- amounts
const FR={0.125:'⅛',0.25:'¼',0.33:'⅓',0.34:'⅓',0.5:'½',0.66:'⅔',0.67:'⅔',0.75:'¾'};
function fmtQty(q){if(q<=0)return'';const whole=Math.floor(q+1e-6);let frac=q-whole;let fs='';
 if(frac>0.05){const keys=Object.keys(FR).map(Number);let best=keys[0],bd=9;for(const k of keys){if(Math.abs(k-frac)<bd){bd=Math.abs(k-frac);best=k}}if(bd<0.09)fs=FR[best];else return String(Math.round(q*10)/10)}
 if(whole===0)return fs||String(Math.round(q*100)/100);return fs?whole+fs:String(whole)}
function amountFor(name,servings){const n=norm(name);let row=null;for(const r of D().AMOUNTS){if(new RegExp(r[0]).test(n)){row=r;break}}
 if(!row)return{qty:String(servings),unit:'',prep:''};
 let q=row[1]*servings;const unit=row[2];
 if(unit==='g'||unit==='ml')q=Math.round(q/5)*5;else q=Math.round(q*8)/8;
 let u=unit;if(u&&!['g','ml','tsp','tbsp'].includes(u)&&q>1){if(u==='leaf')u='leaves';else if(u==='pinch')u='pinches';else if(!/s$/.test(u)&&u!=='slices')u+='s'}
 return{qty:fmtQty(q),unit:u,prep:row[3]}}
// ---- portrait
const AXES=['Spicy','Sweet','Savory','Sour','Umami','Herby'];
function baseAxes(flavors){const g=k=>((flavors&&flavors[k])||3);return{Spicy:g('Spicy heat'),Sweet:g('Sweet'),Savory:(g('Savory')+g('Salty'))/2,Sour:(g('Tangy / sour')+g('Citrusy'))/2,Umami:(g('Umami')+g('Cheesy'))/2,Herby:g('Herby')}}
function recipeAxes(r){const a={Spicy:0,Sweet:0,Savory:0,Sour:0,Umami:0,Herby:0};const ing=r.ingredients.map(norm).join(' ')+' '+(r.tags||[]).join(' ');
 if(/spicy|chili|gochujang|sriracha|jalape|cayenne|harissa|curry/.test(ing))a.Spicy=1;
 if(r.category==='Desserts'||/sweet|honey|maple|sugar|chocolate|banana/.test(ing))a.Sweet=1;
 if(/lemon|lime|vinegar|tamarind|yogurt|pickle/.test(ing))a.Sour=1;
 if(/soy sauce|miso|parmesan|mushroom|fish sauce|tomato|anchov|kimchi|oyster/.test(ing))a.Umami=1;
 if(/basil|cilantro|parsley|mint|dill|thyme|rosemary|oregano|herb/.test(ing))a.Herby=1;
 if(r.category!=='Desserts')a.Savory=1;return a}
function portrait(flavors,cookLog,byId){const base=baseAxes(flavors);const v={};AXES.forEach(k=>v[k]=(base[k]-1)/4);
 (cookLog||[]).forEach(c=>{const r=byId[c.recipeId];if(!r)return;const ax=recipeAxes(r);const w=(c.rating-3)*0.035;AXES.forEach(k=>{if(ax[k])v[k]=Math.max(0.05,Math.min(1,v[k]+w))})});
 return v}
// ---- streak
function streak(cookLog){if(!cookLog||!cookLog.length)return 0;const days=new Set(cookLog.map(c=>new Date(c.date).toDateString()));let d=new Date();let s=0;
 if(!days.has(d.toDateString())){d.setDate(d.getDate()-1);if(!days.has(d.toDateString()))return 0}
 while(days.has(d.toDateString())){s++;d.setDate(d.getDate()-1)}return s}
// ---- photo candidates (no real vision — plausible spot list the user confirms)
function photoCandidates(seed){const pool=['milk','eggs','butter','cheddar','yogurt','lettuce','tomato','carrot','onion','garlic','lemon','bell pepper','green onion','ketchup','mustard','mayonnaise','pickles','soy sauce','sriracha','orange juice','spinach','cucumber','frozen peas','bread','parmesan','white wine','apple','celery','sour cream','salsa'];
 let h=0;for(const ch of String(seed))h=(h*31+ch.charCodeAt(0))>>>0;
 const picks=[];const used=new Set();for(let i=0;i<9;i++){h=(h*1103515245+12345)>>>0;const idx=h%pool.length;if(used.has(idx)){i--;continue}used.add(idx);picks.push(pool[idx])}
 const cat=D().CATALOG;return picks.map(n=>cat.find(c=>c.name===n)).filter(Boolean)}
// ---- generation
function genPrompt(profile,pantry,filters){const q=profile.quiz||{};
 return `You are a recipe writer for a warm, friendly cooking app. Create exactly 3 recipes as a strict JSON array, no prose, no markdown fences.
Each: {"title":str,"emoji":one food emoji,"category":one of ["Mains","Sides","Breakfast","Desserts","Quick & Easy","Comfort Food","Healthy"],"cuisine":str,"time":minutes int,"difficulty":"Easy"|"Medium"|"Hard","calories":int per serving,"tags":array from ["fast","healthy","cheap","comfort","high-protein","impress","one-pan","vegetarian","vegan","spicy","soup","salad","sweet"],"ingredients":array of 5-10 short lowercase ingredient names (no amounts),"steps":array of 4-6 imperative sentences,"note":one friendly tip,"pcf":[protein g,carbs g,fat g]}
Build recipes AROUND these pantry items (use several in each): ${pantry.map(p=>p.name).join(', ')||'anything common'}.
Only use appliances: ${(q.appliances||[]).join(', ')||'stovetop, oven'}. Cookware: ${(q.cookware||[]).join(', ')||'basic pans'}.
Never include: ${[...(q.allergies||[]),...(q.rules||[]),...(q.dislikes||[])].filter(x=>!/nothing|none|no restrictions/i.test(x)).join(', ')||'nothing specific'}.
Diet: ${(q.diet||[]).join(', ')||'none'}. Heat tolerance: ${q.heat||'medium'}. Loves: ${(q.cuisines||[]).slice(0,6).join(', ')||'anything'}. Max time: ${filters&&filters.time?filters.time+' min':'45 min'}.
Titles must be specific and appetizing, not generic.`}
function validateGen(text,existing){let arr;try{const m=text.match(/\[[\s\S]*\]/);arr=JSON.parse(m?m[0]:text)}catch(e){return[]}
 if(!Array.isArray(arr))return[];const titles=new Set(existing.map(r=>norm(r.title)));const out=[];
 for(const r of arr){if(!r||typeof r.title!=='string'||!Array.isArray(r.ingredients)||!Array.isArray(r.steps)||r.steps.length<3)continue;
  if(titles.has(norm(r.title)))continue;titles.add(norm(r.title));
  const cat=D().CATALOG;out.push({id:'ai'+Date.now()+Math.random().toString(36).slice(2,6),title:String(r.title).slice(0,60),emoji:(r.emoji&&String(r.emoji).length<=4)?r.emoji:'🍲',category:['Mains','Sides','Breakfast','Desserts','Quick & Easy','Comfort Food','Healthy'].includes(r.category)?r.category:'Mains',cuisine:typeof r.cuisine==='string'?r.cuisine.slice(0,20):'Fusion',time:Math.max(10,Math.min(120,parseInt(r.time)||30)),difficulty:['Easy','Medium','Hard'].includes(r.difficulty)?r.difficulty:'Easy',calories:Math.max(120,Math.min(1200,parseInt(r.calories)||450)),tags:(Array.isArray(r.tags)?r.tags:[]).slice(0,5),ingredients:r.ingredients.map(i=>norm(String(i))).filter(Boolean).slice(0,12),steps:r.steps.map(s=>String(s)).slice(0,7),note:typeof r.note==='string'?r.note.slice(0,120):'Made for your pantry.',pcf:Array.isArray(r.pcf)&&r.pcf.length===3?r.pcf.map(n=>parseInt(n)||10):[20,40,15],ai:true,tone:['warm','fresh','heat','earth'][out.length%4]})}
 return out.slice(0,3)}
function localGen(pantry,quiz,existing){const names=pantry.map(p=>norm(p.name));const has=h=>names.some(n=>headNoun(n)===h||n===h);
 const protein=has('chicken')||has('breast')?'chicken breast':has('salmon')?'salmon':has('shrimp')?'shrimp':has('tofu')?'tofu':has('egg')?'eggs':has('bean')?'black beans':'chickpeas';
 const carb=has('rice')?'rice':has('pasta')||has('spaghetti')?'pasta':has('noodle')?'egg noodles':has('potato')?'potato':has('tortilla')?'tortillas':'rice';
 const veg=names.find(n=>['spinach','broccoli','kale','zucchini','bell pepper','mushrooms','carrot','green beans','cauliflower'].includes(n))||'spinach';
 const titles=new Set(existing.map(r=>norm(r.title)));const mk=(title,emoji,cuisine,time,tags,ing,steps,note,pcf,tone)=>titles.has(norm(title))?null:{id:'ai'+Date.now()+Math.random().toString(36).slice(2,6),title,emoji,category:'Mains',cuisine,time,difficulty:'Easy',calories:480,tags,ingredients:ing,steps,note,pcf,ai:true,tone};
 const out=[
 mk(`Golden ${protein} & ${veg} skillet`,'🍳','Fusion',25,['fast','one-pan','high-protein'],[protein,veg,'garlic','olive oil','lemon','chili flakes',carb],['Season the '+protein+' and get a skillet properly hot.','Sear until golden and nearly cooked through.','Add garlic and the '+veg+'; toss 2–3 minutes.','Finish with lemon and chili flakes. Serve over '+carb+'.'],'Built from your shelf — no shopping needed.',[34,42,18],'warm'),
 mk(`Lazy ${carb} bowl with crispy ${protein}`,'🥣','Fusion',20,['fast','cheap','one-pan'],[protein,carb,'soy sauce','garlic','green onion','sesame oil'],['Cook the '+carb+' as usual.','Crisp the '+protein+' in a hot pan with a little oil.','Add garlic and soy; let it sizzle into a glaze.','Bowl it up; green onion and sesame oil over.'],'Weeknight autopilot, in the best way.',[30,54,14],'earth'),
 mk(`One-pot ${veg} & ${protein} comfort pot`,'🍲','Fusion',35,['comfort','soup'],[protein,veg,'onion','garlic','vegetable broth','canned tomatoes'],['Soften onion and garlic in olive oil.','Add the '+protein+' and let it take some color.','Pour in broth and tomatoes; simmer 15 minutes.','Stir in the '+veg+' until just tender. Season and serve.'],'A hug from things you already had.',[28,32,12],'fresh')].filter(Boolean);
 return out}
window.TB_ENGINE={norm,singular,headNoun,isAssumed,owned,matchInfo,pantryActive,blockedTerms,recipeBlocked,dislikeHit,parseFreeText,searchCatalog,amountFor,fmtQty,portrait,baseAxes,recipeAxes,AXES,streak,photoCandidates,genPrompt,validateGen,localGen,lev};
})();
