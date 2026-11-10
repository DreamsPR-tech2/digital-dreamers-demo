function applyKidA11y(k){if(!UI._own)UI._own={size:UI.size,contrast:UI.contrast,motion:UI.motion,big:UI.big,speak:UI.speak};const a=k.a11y||{};UI.size=a.size||'md';UI.contrast=!!a.contrast;UI.motion=!!a.motion;UI.big=!!a.big;UI.speak=!!a.speak;applyUI();if(a11yList(k).length)toast(t('a_applied').replace('{n}',k.name))}
function restoreA11y(){if(!UI._own)return;Object.assign(UI,UI._own);delete UI._own;applyUI()}

function bi(es,en){const A=ADAPT[S.learner.kid];const first=A.first==='en'?[en,es]:[es,en];return `<div class="prompt">${first[0]}</div><div class="bi">${first[1]}</div>`}
function sayBtn(txt){const A=ADAPT[S.learner.kid];return `<button class="speak" data-act="say" data-v="${esc(txt)}" data-l="${A.first}" data-force="1">🔊 ${UI.lang==='es'?'Escuchar':'Listen'}</button>`}

function whyBox(txt){return `<div class="whybox">💡<div><b>${t('why_lbl')}:</b> ${txt}</div></div>`}

function choiceTask(cfg){/* cfg: {prompt es/en, visual, opts, item, why, aacLabel} */const ln=S.learner,A=ADAPT[ln.kid];let opts=cfg.opts;if(A.opts===2)opts=[opts.find(o=>o.ok),opts.find(o=>!o.ok)];
 const seedR=rng(hash(ln.kid+cfg.item));opts=[...opts].sort(()=>seedR()-.5);
 const cls=o=>ln.fb==='ok'&&o.ok?'ok':ln.fb==='no'&&o===ln.lastWrong?'no':(ln.hint||ln.model)&&o.ok?'hint':'';
 const grid=A.aac?`<div class="aac"><div class="t">📱 ${UI.lang==='es'?'Tablero de Mateo':'Mateo’s board'} · ${cfg.aacLabel||''}</div><div class="aacgrid" style="grid-template-columns:repeat(${opts.length},1fr)">${opts.map((o,i)=>`<button class="aacbtn ${cls(o)==='ok'?'sel':''} ${cls(o)==='hint'?'sel':''}" data-act="choose" data-ok="${o.ok?1:0}" data-i="${i}" style="min-height:120px"><span style="font-size:2.6em">${o.p}</span>${L(o.l)}</button>`).join('')}</div></div>`
  :`<div class="opts" style="--n:${opts.length}">${opts.map((o,i)=>`<button class="opt ${cls(o)}" data-act="choose" data-ok="${o.ok?1:0}" data-i="${i}">${o.p}<span class="lbl">${L(o.l)}</span></button>`).join('')}</div>`;
 const fb=ln.fb==='ok'?`<div class="fb" style="color:var(--ok)">${ln.tries>1||ln.hint||ln.model?t('l_withhelp'):t('l_good')} 🎉</div>`:ln.fb==='no'?`<div class="fb" style="color:var(--gold)">${t('l_try')}</div>`:'<div class="fb"></div>';
 const help=ln.fb==='ok'?`<div class="helprow"><button class="btn big teal" data-act="lnext">${t('next_step')}</button></div>`:`<div class="helprow">${A.model?`<button class="btn ${ln.model?'ghost':'plum'}" data-act="model">👀 ${UI.lang==='es'?'Muéstrame primero':'Show me first'}</button>`:''}<button class="btn ghost" data-act="hint">💡 ${t('l_hint')}</button><button class="btn ghost" data-act="lskip">${t('l_skip')}</button></div>`;
 return `<div class="task">${cfg.visual?`<div class="visual">${cfg.visual}</div>`:''}${bi(cfg.es,cfg.en)}${sayBtn(A.first==='en'?cfg.en:cfg.es)}${A.timer&&ln.fb!=='ok'?`<div class="timer"><i id="tbar"></i></div>`:''}<div style="height:12px"></div>${grid}${fb}${help}</div>`}

function speakForce(txt,lang){try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(String(txt).replace(/<[^>]+>/g,''));u.lang=lang==='en'?'en-US':'es-PR';u.rate=.92;speechSynthesis.speak(u)}catch(e){}}
