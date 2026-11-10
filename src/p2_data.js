<script>
/* =============== DATA · all children are fictional (demo data) =============== */
const LOGO_SRC="__LOGO__";
const UI={lang:'es',size:'md',contrast:false,motion:false,big:false,speak:false};
const L=o=>o?(o[UI.lang]||o.es||o.en||''):'';
const T={
 es:{sub:'Inclusive Early Learning Framework™',badge:'Datos ficticios · Demo Nov 10',restart:'Reiniciar demo',
  home_eyebrow:'Experiencia docente · We Are Friends / Somos amigos',home_title:'Vive la lección <span>desde una silla</span> del salón',
  home_lead:'Un mismo bloque de 20 minutos, visto desde la maestra y desde cinco niños que participan de maneras distintas. Lo que respondas como niño llega al tablero de la maestra; lo que registre la maestra decide qué enseñar mañana.',
  teacher:'Maestra / Maestro',teacher_d:'Revisa tu salón, guía la lección paso a paso, registra las respuestas de todo el grupo y recibe el plan de mañana.',
  child_d:'Haz la lección como',enter:'Entrar →',persp:'Elige tu perspectiva',kids_lbl:'…o vive la lección como uno de estos niños',
  reg:'Regular',con:'Conectar',move:'Mover · Comunicar',reg_s:'Cuerpo y emociones listos',con_s:'Palabras, sonidos y cuento',move_s:'Ready Your Wings · turnos · una palabra',
  tab_class:'Mi salón',tab_plan:'Plan de hoy',tab_live:'Lección en vivo',tab_results:'Resultados',tab_tomorrow:'¿Qué enseño mañana?',
  kids:'niños',demo_tag:'Todos los nombres y datos son ficticios.',class_title:'Pre-K/K bilingüe · Salón Soñadores',class_lead:'Perfil de cada aprendiz: idioma, modo de comunicación y apoyos se guardan por separado del desempeño.',
  tile_kids:'Niños en el salón',tile_modes:'Modos de respuesta distintos',tile_sup:'Con apoyos individuales',tile_today:'Lección de hoy',persp_star:'perspectiva disponible',
  last:'Última verificación',none_yet:'Sin registrar aún',open_record:'Abrir expediente',
  plan_title:'We Are Friends · Somos amigos — Bloque II',plan_lead:'20 minutos en tres pasos. Cada actividad abre su contenido instructivo; los menús desplegables son solo para la maestra.',
  start:'Comenzar la lección',open:'Abrir',teacher_only:'Solo maestra · diferenciación y acceso',levels:'Tres niveles',access:'Reglas de acceso',materials:'Materiales',
  live_lead:'Guía el paso a la izquierda; registra a la derecha. Toca el nombre de cada niño para cambiar su respuesta: ✓ sin apoyo · ◐ con apoyo · ○ aún no.',
  k_ok:'Sin apoyo',k_sup:'Con apoyo',k_no:'Aún no',k_blank:'Sin registrar',fill:'Cargar respuestas de ejemplo',fill_done:'Respuestas de ejemplo cargadas. Toca cualquier nombre para cambiarla.',
  next_step:'Siguiente paso →',prev:'← Anterior',finish:'Terminar la lección y ver resultados',of:'de',
  res_title:'Resultados de hoy',res_lead:'Exactitud y apoyo se reportan por separado, siempre con el número de niños evaluados.',
  t_assessed:'Niños evaluados',t_words:'Palabras que la mayoría identificó sin apoyo',t_move:'Participaron en Ready Your Wings',t_modes:'Respondieron con gesto, seña o CAA',
  by_item:'Por actividad',by_child:'Por niño · toca una celda para abrir el expediente',patterns:'Patrones identificados',
  cta_t:'¿Qué enseño mañana?',cta_p:'El plan de mañana se genera con estas respuestas. Puedes editarlo antes de guardarlo.',gen:'Generar el plan de mañana →',
  tom_title:'Plan de mañana',tom_lead:'Lo que cambió respecto a hoy aparece resaltado, con el dato que lo justifica. Toca «Editar» para ajustar cualquier línea.',
  today:'Hoy',tomorrow:'Mañana',edit:'Editar',done_edit:'Listo',save:'Guardar plan',saved:'Plan guardado en este iPad.',changes:'cambios',groups:'Grupos para mañana',
  g_beg:'Comenzando',g_pro:'Progresando',g_adv:'Avanzado · lideran',
  rec_profile:'Perfil y comunicación',rec_sup:'Apoyos y acomodos',rec_today:'Respuestas de hoy',rec_prog:'Progreso',rec_tom:'Para mañana',rec_fam:'Nota para la familia',
  age:'Edad',home:'Idioma del hogar',es_perf:'Español',en_perf:'Inglés',mode:'Modo de comunicación',part:'Participación hoy',assist:'Asistencia',
  did:'¿Lo hizo?',support:'Apoyo',yes:'Sí',no:'Aún no',sup_none:'Ninguno',sup_some:'Modelo o pista',start_year:'Inicio (sept.)',now:'Hoy',
  back:'← Volver',back_class:'← Mi salón',see_teacher:'Ver cómo lo vio la maestra →',
  l_intro:'Vas a hacer la lección como',l_how:'Cómo la vive',l_go:'Empezar',l_feel:'¿Cómo te sientes hoy?',l_feel_s:'Toca una carita. Todas las respuestas valen.',
  l_body:'Cuerpo listo',l_body_s:'Respira conmigo tres veces. Toca el círculo cuando entre el aire.',l_body_help:'Necesito ayuda',l_body_quiet:'Rincón tranquilo primero',
  l_touch:'Toca',l_hint:'Muéstrame',l_skip:'Hoy no',l_again:'Otra vez',l_good:'¡Eso es!',l_try:'Mira otra vez…',l_withhelp:'¡Lo lograste con ayuda!',
  l_sound:'¿Con qué letra empieza',l_book:'Leemos el cuento',l_echo:'¡Somos amigos! We are friends!',l_next_q:'¿Qué viene luego? What comes NEXT?',l_turnpage:'Pasar la página →',
  l_wings:'Ready Your Wings',l_wings_s:'Toca en orden: Ready → Move → Stop. Sentado o de pie, los dos valen.',seated:'Sentado/a',standing:'De pie',
  l_turn:'¿Quién sigue? Who is NEXT?',l_turn_s:'Mira el tablero First / Next.',l_word:'Dime o muéstrame una palabra del cuento',l_word_s:'Elige cómo quieres responder.',
  m_say:'La digo',m_sign:'La hago con las manos',m_aac:'La toco en mi tablero',m_point:'La señalo',
  l_done:'¡Lo logramos — juntos!',l_done_s:'Así quedó tu participación en el tablero de la maestra.',
  why_lbl:'Por qué se ve así',
  a_title:'Accesibilidad',a_size:'Tamaño del texto',a_contrast:'Alto contraste',a_motion:'Reducir movimiento',a_big:'Botones grandes',a_speak:'Leer en voz alta',a_speak_s:'Usa la voz del iPad para los enunciados del niño',a_profile:'Perfil activo',a_profile_s:'Ajustes guardados en el perfil del niño; se aplican al entrar en su perspectiva y vuelven a los tuyos al salir.',a_applied:'Ajustes de accesibilidad de {n} aplicados',a_restored:'Ajustes de accesibilidad restablecidos',
  sim:'ejemplo',learner:'respuesta real',
  tab_screen:'Cernimiento Big 5',b5_title:'Cernimiento Big 5',b5_lead:'Lista de cotejo alineada a los Big 5 for All de Head Start y al ELOF. Cernimiento instruccional, no diagnóstico: observacional, basado en fortalezas, oral primero. Se registra lo observado y el idioma de la respuesta; no se califica el idioma, el volumen ni la postura.',
  b5_class:'Salón · nivel por dominio',b5_tap:'Toca un niño para ver o ajustar su lista de cotejo',b5_cp:'Punto de cotejo',cp_i:'Inicial (sept.)',cp_m:'Intermedio (ene.)',cp_e:'Fin de año (mayo)',
  s_obs:'Observado',s_emg:'Emergente',s_not:'Aún no',s_nop:'Sin oportunidad',lang_resp:'Idioma de la respuesta',l_es:'Español',l_en:'Inglés',l_both:'Ambos',l_nv:'No verbal / gesto',l_aac:'CAA',
  lv1:'Comenzando',lv2:'Desarrollando',lv3:'Competente',lv4:'Avanzado',b5_of:'indicadores observados',by_domain:'Por dominio Big 5 · evidencia de la lección de hoy',rec_b5:'Big 5 · cernimiento y evidencia',b5_focus:'Enfoque Big 5 de mañana',b5_base:'Cernimiento inicial',b5_today:'Evidencia de hoy',b5_none:'Sin evidencia en esta lección',b5_simnote:'Cernimiento de ejemplo cargado (ficticio). Toca cualquier indicador para cambiarlo.',ef_sel:'Función ejecutiva · SEL (fuera de los Big 5)',
  foot:'DREAMS Inclusive Early Learning Framework™ · All Access Academics, LLC · Demo de producto con datos ficticios. Ningún dato de niños reales.'
 },
 en:{sub:'Inclusive Early Learning Framework™',badge:'Fictional data · Nov 10 demo',restart:'Restart demo',
  home_eyebrow:'Teacher experience · We Are Friends / Somos amigos',home_title:'Experience the lesson <span>from a seat</span> in the room',
  home_lead:'One 20-minute block, seen from the teacher and from five children who join in different ways. What you answer as a child reaches the teacher’s dashboard; what the teacher records decides what to teach tomorrow.',
  teacher:'Teacher',teacher_d:'Review your class, guide the lesson step by step, record every child’s responses and get tomorrow’s plan.',
  child_d:'Do the lesson as',enter:'Enter →',persp:'Choose your perspective',kids_lbl:'…or live the lesson as one of these children',
  reg:'Regulate',con:'Connect',move:'Move · Communicate',reg_s:'Body and feelings ready',con_s:'Words, sounds and the story',move_s:'Ready Your Wings · turns · one word',
  tab_class:'My class',tab_plan:'Today’s plan',tab_live:'Live lesson',tab_results:'Results',tab_tomorrow:'What do I teach tomorrow?',
  kids:'children',demo_tag:'All names and data are fictional.',class_title:'Bilingual Pre-K/K · Dreamers room',class_lead:'Each learner’s profile: language, communication mode and supports are kept separate from performance.',
  tile_kids:'Children in the room',tile_modes:'Different response modes',tile_sup:'With individual supports',tile_today:'Today’s lesson',persp_star:'perspective available',
  last:'Last check',none_yet:'Not recorded yet',open_record:'Open record',
  plan_title:'We Are Friends · Somos amigos — Block II',plan_lead:'20 minutes in three steps. Every activity opens its instructional content; the drop-downs are teacher-only.',
  start:'Start the lesson',open:'Open',teacher_only:'Teacher only · differentiation and access',levels:'Three levels',access:'Access rules',materials:'Materials',
  live_lead:'Guide the step on the left; record on the right. Tap a child’s name to change the response: ✓ independent · ◐ with support · ○ not yet.',
  k_ok:'Independent',k_sup:'With support',k_no:'Not yet',k_blank:'Not recorded',fill:'Load sample responses',fill_done:'Sample responses loaded. Tap any name to change it.',
  next_step:'Next step →',prev:'← Back',finish:'Finish the lesson and see results',of:'of',
  res_title:'Today’s results',res_lead:'Accuracy and support are reported separately, always with the number of children assessed.',
  t_assessed:'Children assessed',t_words:'Words most children identified independently',t_move:'Joined Ready Your Wings',t_modes:'Responded by gesture, sign or AAC',
  by_item:'By activity',by_child:'By child · tap a cell to open the record',patterns:'Patterns identified',
  cta_t:'What do I teach tomorrow?',cta_p:'Tomorrow’s plan is generated from these responses. You can edit it before saving.',gen:'Generate tomorrow’s plan →',
  tom_title:'Tomorrow’s plan',tom_lead:'What changed from today is highlighted, with the data point behind it. Tap “Edit” to adjust any line.',
  today:'Today',tomorrow:'Tomorrow',edit:'Edit',done_edit:'Done',save:'Save plan',saved:'Plan saved on this iPad.',changes:'changes',groups:'Groups for tomorrow',
  g_beg:'Beginning',g_pro:'Progressing',g_adv:'Advanced · they lead',
  rec_profile:'Profile & communication',rec_sup:'Supports & accommodations',rec_today:'Today’s responses',rec_prog:'Progress',rec_tom:'For tomorrow',rec_fam:'Family note',
  age:'Age',home:'Home language',es_perf:'Spanish',en_perf:'English',mode:'Communication mode',part:'Participation today',assist:'Assistance',
  did:'Did it?',support:'Support',yes:'Yes',no:'Not yet',sup_none:'None',sup_some:'Model or cue',start_year:'Start (Sept.)',now:'Today',
  back:'← Back',back_class:'← My class',see_teacher:'See how the teacher saw it →',
  l_intro:'You are doing the lesson as',l_how:'How they experience it',l_go:'Start',l_feel:'How do you feel today?',l_feel_s:'Touch a face. Every answer counts.',
  l_body:'Ready body',l_body_s:'Breathe with me three times. Tap the circle as the air comes in.',l_body_help:'I need help',l_body_quiet:'Quiet corner first',
  l_touch:'Touch',l_hint:'Show me',l_skip:'Not today',l_again:'Again',l_good:'That’s it!',l_try:'Look again…',l_withhelp:'You did it with help!',
  l_sound:'Which letter starts',l_book:'We read the story',l_echo:'We are friends! ¡Somos amigos!',l_next_q:'What comes NEXT? ¿Qué viene luego?',l_turnpage:'Turn the page →',
  l_wings:'Ready Your Wings',l_wings_s:'Tap in order: Ready → Move → Stop. Seated or standing, both count.',seated:'Seated',standing:'Standing',
  l_turn:'Who is NEXT? ¿Quién sigue?',l_turn_s:'Look at the First / Next board.',l_word:'Tell me or show me a word from the story',l_word_s:'Choose how you want to answer.',
  m_say:'I say it',m_sign:'I sign it',m_aac:'I tap it on my board',m_point:'I point to it',
  l_done:'We did it — together!',l_done_s:'This is how your participation looks on the teacher’s dashboard.',
  why_lbl:'Why it looks this way',
  a_title:'Accessibility',a_size:'Text size',a_contrast:'High contrast',a_motion:'Reduce motion',a_big:'Large buttons',a_speak:'Read aloud',a_speak_s:'Uses the iPad voice for the child’s prompts',a_profile:'Active profile',a_profile_s:'Settings saved on the child’s profile; applied when entering their perspective and restored to yours on exit.',a_applied:'{n}’s accessibility settings applied',a_restored:'Accessibility settings restored',
  sim:'sample',learner:'real answer',
  tab_screen:'Big 5 screening',b5_title:'Big 5 screening',b5_lead:'Checklist aligned to Head Start’s Big 5 for All and the ELOF. Instructional screening, not diagnostic: observational, strengths-based, oral-first. What was observed and the language of the response are recorded; language, volume and posture are never scored.',
  b5_class:'Class · level by domain',b5_tap:'Tap a child to see or adjust their checklist',b5_cp:'Checkpoint',cp_i:'Initial (Sept.)',cp_m:'Midpoint (Jan.)',cp_e:'End of year (May)',
  s_obs:'Observed',s_emg:'Emerging',s_not:'Not yet',s_nop:'No chance to observe',lang_resp:'Language of response',l_es:'Spanish',l_en:'English',l_both:'Both',l_nv:'Nonverbal / gesture',l_aac:'AAC',
  lv1:'Beginning',lv2:'Developing',lv3:'Proficient',lv4:'Advanced',b5_of:'indicators observed',by_domain:'By Big 5 domain · evidence from today’s lesson',rec_b5:'Big 5 · screening and evidence',b5_focus:'Tomorrow’s Big 5 focus',b5_base:'Initial screening',b5_today:'Today’s evidence',b5_none:'No evidence in this lesson',b5_simnote:'Sample (fictional) screening loaded. Tap any indicator to change it.',ef_sel:'Executive function · SEL (outside the Big 5)',
  foot:'DREAMS Inclusive Early Learning Framework™ · All Access Academics, LLC · Product demo with fictional data. No real children’s data.'
 }
};
const t=k=>T[UI.lang][k]??T.es[k]??k;

const COLORS=['#0F5DB8','#C13540','#A36500','#047869','#4b3f9e','#B4571A','#1C7F57','#6A2FA0','#1B3A8C','#C93A6B','#0B7377','#5B6B8C'];
const STEPS=[{id:'reg',n:1,icon:'🌈',min:3},{id:'con',n:2,icon:'📖',min:10},{id:'move',n:3,icon:'🦋',min:7}];

/* five target words · gestures and sounds from the Nov 10 lesson */
const WORDS=[
 {id:'we',img:'img/pep/we.svg',en:'WE',es:'nosotros',pic:'🙌',color:'#2A4FC7',gesture:{es:'agita los dos brazos',en:'wave both arms'},cue:{en:'WE means all of us together.',es:'WE: todos nosotros juntos.'},sound:null,
  opts:[{p:'🙌',l:{es:'nosotros',en:'we'},ok:true},{p:'🧍',l:{es:'solo/a',en:'alone'}},{p:'🐕',l:{es:'perro',en:'dog'}}]},
 {id:'friend',img:'img/pep/friend.svg',en:'FRIEND',es:'amigo/a',pic:'🧑‍🤝‍🧑',color:'#6A45C8',gesture:{es:'saluda a un amigo',en:'wave to a friend'},cue:{en:'Touch the soft part. A FRIEND is kind.',es:'Toca la parte suave. Un FRIEND es amable.'},sound:'F',
  opts:[{p:'🧑‍🤝‍🧑',l:{es:'amigos',en:'friends'},ok:true},{p:'🚗',l:{es:'carro',en:'car'}},{p:'🍕',l:{es:'pizza',en:'pizza'}}]},
 {id:'next',img:'img/pep/next.svg',en:'NEXT',es:'luego',pic:'👉',color:'#C9850A',gesture:{es:'señala hacia adelante',en:'point forward'},cue:{en:'What comes NEXT?',es:'¿Qué viene NEXT (luego)?'},sound:'N',
  opts:[{p:'👉',l:{es:'luego / next',en:'next'},ok:true},{p:'✋',l:{es:'stop',en:'stop'}},{p:'🔙',l:{es:'antes',en:'before'}}]},
 {id:'kind',img:'img/pep/kind.svg',en:'KIND',es:'amable',pic:'💛',color:'#C93A6B',gesture:{es:'las manos hacen un corazón',en:'hands make a heart'},cue:{en:'KIND starts with /K/. Pep is KIND.',es:'KIND empieza con /K/. Pep es KIND.'},sound:'K',
  opts:[{p:'🤝',l:{es:'compartir',en:'sharing'},ok:true},{p:'😤',l:{es:'quitar',en:'grabbing'}},{p:'🙈',l:{es:'esconderse',en:'hiding'}}]},
 {id:'turn',img:'img/pep/turn.svg',en:'TURN',es:'turno',pic:'🔄',color:'#1C7F57',gesture:{es:'gira un dedo',en:'spin a finger'},cue:{en:'TURN starts with /T/. My turn, your turn.',es:'TURN empieza con /T/. Mi turno, tu turno.'},sound:'T',
  opts:[{p:'👂',l:{es:'escucho y espero',en:'listen and wait'},ok:true},{p:'📢',l:{es:'hablo encima',en:'talk over'}},{p:'🏃',l:{es:'me voy',en:'walk away'}}]}
];
const SOUNDS={K:{cue:{es:'toca la parte de atrás de la garganta',en:'tap the back of the throat'},move:'K-kick',obj:'kit',img:'img/pep/kit.svg',c:'#2E86D1'},T:{cue:{es:'toca la nariz, ta-ta',en:'nose tap, ta-ta'},move:'T-tap',obj:'table',img:'img/pep/table.svg',c:'#E63946'},F:{cue:{es:'pluma en la barbilla, siente el aire',en:'feather breath on the chin'},move:'F-fan',obj:'feather',img:'img/pep/feather.svg',c:'#F2B300'},N:{cue:{es:'tararea nnnn',en:'hum nnnn'},move:'N-nod',obj:'napkin',img:'img/pep/napkin.svg',c:'#3FA35B'}};
/* the four sound pictures and five words exactly as the live board shows them */
function sndPic(k,sz){const s=SOUNDS[k];return `<img src="${s.img}" alt="" style="width:${sz||22}px;height:${sz||22}px;vertical-align:middle">`}

/* Big Book · Pep, Bella and Lily at the park */
const BOOK=[
 {pg:{es:'Portada',en:'Cover'},img:'img/book/cover-thumb.jpg',scene:'🔵🔴🔺',en:'<b>We</b> Are <b>Friends</b>. Pep, Bella and Lily at the park.',es:'<b>Somos amigos</b>. Pep, Bella y Lily en el parque.',cue:{es:'Vista previa: «¿A quién ves? ¿Son amigos?» Nombra a los tres amigos. Señala WE y FRIEND en la pared de palabras. ECO. Luego NEXT? y abre el libro.',en:'Preview: “Who do you see? Are they friends?” Name the three friends. Point to WE and FRIEND on the Word Wall. ECHO. Then NEXT? and open the book.'}},
 {pg:{es:'Página 1 · ¡Hola, amigos!',en:'Page 1 · Hello, friends!'},img:'img/book/p03a.jpg',scene:'👋🔵🔴🔺',en:'Hello, friends! This is Pep. This is Bella. This is Lily. They are best <b>FRIENDS</b>.',es:'¡Hola, amigos! Este es Pep. Esta es Bella. Esta es Lily. Son mejores <b>amigos</b>.',cue:{es:'Devuelve el saludo. ECO con los gestos de WE y FRIEND. SONIDO /F/: «F-F-FRIENDS, siente el aire en la barbilla». NEXT?',en:'Wave back. ECHO with the WE and FRIEND gestures. SOUND /F/: “F-F-FRIENDS — feel the air on your chin.” NEXT?'}},
 {pg:{es:'Página 2 · Pep trae una bola',en:'Page 2 · Pep brings a ball'},img:'img/book/p04a.jpg',scene:'🔴⚽🔺📚',en:'Pep brings a ball to the park. Lily asks, “Can I play, please?” Pep says, “Yes! We can share. Let’s play!” Bella puts down her books. “I want to play too!”',es:'Pep trae una bola al parque. Lily pregunta, «¿Puedo jugar, por favor?» Pep dice, «¡Sí! Podemos compartir. ¡Vamos a jugar!» Bella deja sus libros. «¡Yo quiero jugar también!»',cue:{es:'Lily pidió con amabilidad: modela «Can I play? ¿Puedo jugar?» y «Can I have a turn? ¿Me das un turno?». SONIDO /K/: «K-K-KICK». NEXT?',en:'Lily asked nicely — model “Can I play? ¿Puedo jugar?” and “Can I have a turn? ¿Me das un turno?” SOUND /K/: “K-K-KICK”. NEXT?'}},
 {pg:{es:'Página 3 · ¡El turno de Pep!',en:'Page 3 · Pep’s turn!'},img:'img/book/p05a.jpg',scene:'🔴⚽👉🔺🔵',en:'Pep’s <b>TURN</b>! Pep kicks first. “I’m <b>NEXT</b>,” says Lily. “Then me!” says Bella. Bella waits. Bella watches. Bella cheers!',es:'¡El <b>turno</b> de Pep! Pep patea primero. «Yo soy la <b>siguiente</b>», dice Lily. «¡Luego yo!», dice Bella. Bella espera. Bella mira. ¡Bella anima!',cue:{es:'Señala el póster Take Turns: «WAIT · WATCH · CHEER. Espera · Mira · Anima». SONIDO /T/ «T-T-TURN» (nariz, gira el dedo). SONIDO /N/ «N-N-NEXT» (tararea, señala adelante). Pregunta: «¿Quién sigue?» — Lily. NEXT?',en:'Point to the Take Turns poster: “WAIT · WATCH · CHEER. Espera · Mira · Anima.” SOUND /T/ “T-T-TURN” nose tap, spin a finger. SOUND /N/ “N-N-NEXT” hum, point forward. Ask: “Who is NEXT?” — Lily. NEXT?'}},
 {pg:{es:'Página 4 · ¡El turno de Lily!',en:'Page 4 · Lily’s turn!'},img:'img/book/p06a.jpg',scene:'🔺⚽⬆️🔴',en:'Lily’s <b>TURN</b>! Up, up, up! “You can do it, Lily!” Lily is proud. <b>WE</b> are <b>FRIENDS</b>!',es:'¡El <b>turno</b> de Lily! Lily patea la bola. ¡Sube, sube, sube! «¡Tú puedes, Lily!» Lily está orgullosa. ¡<b>Somos amigos</b>!',cue:{es:'Brazos arriba en «up, up, up», sentados o de pie. Todos animan a Lily: «You can do it! ¡Tú puedes!». Caritas: «¿Cómo se siente Lily?» — orgullosa. ECO. NEXT?',en:'Arms go up on “up, up, up” — seated or standing. Everyone cheers Lily: “You can do it! ¡Tú puedes!” Feelings faces: “How does Lily feel?” — proud. ECHO. NEXT?'}},
 {pg:{es:'Página 5 · ¿Dónde está la bola?',en:'Page 5 · Where is the ball?'},img:'img/book/p07a.jpg',scene:'🔵❓🌳⚽',en:'<b>NEXT</b> is Bella’s <b>TURN</b>. But the ball rolls away — into the bushes! Where is it? Bella feels sad.',es:'<b>Luego</b> es el <b>turno</b> de Bella. Pero la bola rueda lejos… ¡hasta los arbustos! ¿Dónde está? Bella se siente triste.',cue:{es:'Caritas: «¿Cómo se siente Bella?» — triste. Luego: «¿Qué puede hacer un amigo?» Acepta cualquier respuesta en cualquier modo. Quien pueda, señala dónde se esconde la bola. NEXT?',en:'Feelings faces: “How does Bella feel?” — point to sad. Then: “What can a FRIEND do?” Accept any answer in any mode. Children who can, point to where the ball is hiding. NEXT?'}},
 {pg:{es:'Página 6 · Son muy amables',en:'Page 6 · They are kind'},img:'img/book/p08a.jpg',scene:'🔺🔍🔴⚽💛',en:'They are <b>KIND</b>. Lily brings her magnifying glass. “Let’s look together!” Pep looks too. They find the ball! “Thank you,” says Bella.',es:'Son muy <b>amables</b>. Lily trae su lupa. «¡Vamos a buscar juntos!» Pep busca también. ¡Encuentran la bola! «Gracias», dice Bella.',cue:{es:'KIND: las manos hacen un corazón. SONIDO /K/ «K-K-KIND». SONIDO /F/ «F-F-FIND». Pregunta: «¿Quiénes fueron amables?» — Lily y Pep. Ayudar a un amigo es ser amable. NEXT?',en:'KIND — hands make a heart. SOUND /K/ “K-K-KIND.” SOUND /F/ “F-F-FIND.” Ask: “Who was KIND?” — Lily and Pep. Helping a friend is being kind. NEXT?'}},
 {pg:{es:'Página 7 · Juntos',en:'Page 7 · Together'},img:'img/book/p09a.jpg',scene:'🔴⚽🔺⚽🔵',en:'Now the three <b>FRIENDS</b> play together. Pep kicks. Lily kicks. Bella kicks. Sharing is fun. Taking <b>TURNS</b> is fun. <b>WE</b> are <b>FRIENDS</b>!',es:'Ahora los tres <b>amigos</b> juegan juntos. Pep patea. Lily patea. Bella patea. Compartir es divertido. Tomar <b>turnos</b> es divertido. ¡<b>Somos amigos</b>!',cue:{es:'ECO grande: todos hacen WE y FRIEND. SONIDO /T/ «T-T-TOGETHER». NEXT?',en:'Big ECHO — everyone does WE and FRIEND. SOUND /T/ “T-T-TOGETHER.” NEXT?'}},
 {pg:{es:'Página 8 · Fin',en:'Page 8 · The End'},img:'img/book/p10a.jpg',scene:'🌳📚🔵🔴🧸🔺',en:'After the game, they rest under the tree. Bella reads. Pep reads. Lily hugs her bear. <b>WE</b> are <b>FRIENDS</b>. <b>WE</b> are <b>KIND</b>. <b>WE</b> take <b>TURNS</b>.',es:'Después del juego, descansan bajo el árbol. Bella lee. Pep lee. Lily abraza a su osito. <b>Somos amigos</b>. <b>Somos amables</b>. <b>Tomamos turnos</b>.',cue:{es:'Las últimas tres líneas son la promesa de cierre: señala la tarjeta de la promesa para que la escuchen dos veces hoy. Termina con «Somos Parte. We Belong.»',en:'The last three lines are the closing pledge — point to the pledge card so students hear them twice today. The page ends with “Somos Parte. We Belong.”'}}
];

/* Ready Your Wings · exercise challenge · the four moves on the live board (standing or seated choice, three frames each) */
const WINGS=[
 {id:'lunge',n:1,ic:'🦵',name:{es:'Zancada al frente',en:'Forward Lunge'},time:'4× / lado',ef:{es:'Atención e inicio',en:'Attention & initiation'},ready:{es:'Párate derecho (sentado: siéntate derecho)',en:'Stand tall (seated: sit tall)'},move:{es:'Paso al frente y vuelve arriba',en:'Step forward, then stand up'},stop:{es:'Pies juntos · STOP',en:'Feet together · STOP'},words:'ready · next · stop',phrase:'Hi, friend! · ¡Hola, amigo!',seated:{es:'Siéntate derecho · pie al frente · regresa',en:'Sit tall · foot forward · return'},prompt:{es:'«Ready… step! Stand up. Stop.»',en:'“Ready… step! Stand up. Stop.”'},
  st:[{en:'Stand',es:'De pie'},{en:'Step forward',es:'Paso al frente'},{en:'Stand up',es:'Arriba'}],se:[{en:'Sit tall',es:'Siéntate derecho'},{en:'Foot forward',es:'Pie al frente'},{en:'Return',es:'Regresa'}]},
 {id:'reach',n:2,ic:'🦋',name:{es:'Alas afuera · alcance lateral',en:'Wings-Out Side Reach'},time:'4× / lado',ef:{es:'Flexibilidad (cambiar de lado)',en:'Flexibility (switch sides)'},ready:{es:'Alas afuera',en:'Wings out'},move:{es:'Paso al lado y alcanza',en:'Step to the side and reach'},stop:{es:'Pies juntos',en:'Feet together'},words:'switch · turn',phrase:'Your turn. · Tu turno. / My turn. · Mi turno.',seated:{es:'Siéntate derecho · alcanza al lado · regresa',en:'Sit tall · reach side · return'},prompt:{es:'«Wings out… reach! Switch.»',en:'“Wings out… reach! Switch.”'},
  st:[{en:'Wings out',es:'Alas afuera'},{en:'Step side',es:'Paso al lado'},{en:'Feet together',es:'Pies juntos'}],se:[{en:'Sit tall',es:'Siéntate derecho'},{en:'Reach side',es:'Alcanza al lado'},{en:'Return',es:'Regresa'}]},
 {id:'squat',n:3,ic:'🪑',name:{es:'Sentadilla con apoyo',en:'Supported Squat'},time:'4×',ef:{es:'Memoria de trabajo (contar)',en:'Working memory (counting)'},ready:{es:'Agarra la silla',en:'Hold the chair'},move:{es:'Dobla las rodillas despacio',en:'Bend the knees slowly'},stop:{es:'Párate alto',en:'Stand tall'},words:'first · next · last',phrase:'Help, please. · Ayuda, por favor. / I can help. · Yo puedo ayudar.',seated:{es:'Siéntate derecho · inclínate al frente · siéntate derecho',en:'Sit tall · lean forward · sit tall'},prompt:{es:'«First… next… last. ¿Cuántos llevamos?»',en:'“First… next… last. How many so far?”'},
  st:[{en:'Hold chair',es:'Agarra la silla'},{en:'Bend knees',es:'Dobla las rodillas'},{en:'Stand tall',es:'Párate alto'}],se:[{en:'Sit tall',es:'Siéntate derecho'},{en:'Lean forward',es:'Inclínate al frente'},{en:'Sit tall',es:'Siéntate derecho'}]},
 {id:'march',n:4,ic:'🚶',name:{es:'Marcha o rodilla arriba',en:'March or Knee Lift'},time:'4× / lado',ef:{es:'Control inhibitorio (STOP)',en:'Inhibitory control (STOP)'},ready:{es:'Párate alto (sentado: siéntate derecho)',en:'Stand tall (seated: sit tall)'},move:{es:'Sube una rodilla, baja y cambia',en:'Lift a knee, lower and switch'},stop:{es:'Congélate en STOP',en:'Freeze on STOP'},words:'ready · go · stop',phrase:'You can do it! · ¡Tú puedes!',seated:{es:'Siéntate derecho · sube la rodilla · baja y cambia',en:'Sit tall · lift knee · lower & switch'},prompt:{es:'«Ready… go! Knee up. Stop.»',en:'“Ready… go! Knee up. Stop.”'},
  st:[{en:'Stand tall',es:'Párate alto'},{en:'Lift knee',es:'Sube la rodilla'},{en:'Lower & switch',es:'Baja y cambia'}],se:[{en:'Sit tall',es:'Siéntate derecho'},{en:'Lift knee',es:'Sube la rodilla'},{en:'Lower & switch',es:'Baja y cambia'}]}
];
const exImg=(n,pos,k)=>`img/ex-${n}-${pos}-${k}.png`;
function bookScene(p){return p.img?`<img class="scimg" src="${p.img}" alt="">`:p.scene}

/* whole-class check items · 3 levels each (independent / with support / not yet) */
const ITEMS=[
 {id:'reg_body',step:'reg',b5:null,ic:'🫁',lab:{es:'Cuerpo listo · respiración de 3 tiempos',en:'Ready body · 3-count breathing'},lv:{ok:{es:'Se calma solo/a con la señal visual',en:'Settles on the visual cue'},sup:{es:'Con modelado o apoyo',en:'With modeling or support'},no:{es:'Aún no',en:'Not yet'}}},
 ...WORDS.map(w=>({id:'w_'+w.id,step:'con',b5:'ol',word:w.id,ic:w.pic,lab:{es:w.en+' · '+w.es,en:w.en+' · '+w.es},lv:{ok:{es:'Dice, señala, hace la seña o selecciona sin modelo',en:'Says, points, signs or selects without a model'},sup:{es:'Con modelo o mano bajo mano',en:'With a model or hand-under-hand'},no:{es:'Aún no',en:'Not yet'}}})),
 {id:'snd',step:'con',b5:'pa',ic:'👂',lab:{es:'Sonido inicial con pista táctil (/K/ /T/ /F/ /N/)',en:'Initial sound with tactile cue (/K/ /T/ /F/ /N/)'},lv:{ok:{es:'Produce el sonido',en:'Produces the sound'},sup:{es:'Con la pista táctil',en:'With the tactile cue'},no:{es:'Aún no',en:'Not yet'}}},
 {id:'retell',step:'con',b5:'cp',ic:'📖',lab:{es:'Cuento · recuenta Primero · Luego · Último',en:'Story · retells First · Next · Last'},lv:{ok:{es:'Ordena o cuenta las tres escenas (cualquier modo)',en:'Orders or tells the three scenes (any mode)'},sup:{es:'Con una pista o señalando con ayuda',en:'With one prompt or guided pointing'},no:{es:'Aún no',en:'Not yet'}}},
 {id:'bk',step:'con',b5:'bk',ic:'🏫',lab:{es:'Conexión · ¿quién es un amigo o ayudante en nuestra escuela?',en:'Connection · who is a friend or helper in our school?'},lv:{ok:{es:'Nombra, señala o muestra a alguien real',en:'Names, points to or shows a real person'},sup:{es:'Elige entre dos imágenes',en:'Chooses between two pictures'},no:{es:'Aún no',en:'Not yet'}}},
 {id:'wings',step:'move',b5:null,ic:'🦋',lab:{es:'Ready Your Wings · Ready → Move → Stop',en:'Ready Your Wings · Ready → Move → Stop'},lv:{ok:{es:'Sigue la secuencia (sentado o de pie)',en:'Follows the sequence (seated or standing)'},sup:{es:'Con modelado o apoyo físico',en:'With modeling or physical support'},no:{es:'Aún no participa',en:'Not yet participating'}}},
 {id:'turn',step:'move',b5:null,ic:'🔄',lab:{es:'First / Next · espera su turno',en:'First / Next · waits for the turn'},lv:{ok:{es:'Sin recordatorio',en:'No prompt'},sup:{es:'Con un recordatorio',en:'With one reminder'},no:{es:'Con traspaso del adulto',en:'Adult hand-off'}}},
 {id:'word',step:'move',b5:'ol',ic:'🗣️',lab:{es:'Usa una palabra clave (habla, seña, gesto o CAA)',en:'Uses a key word (speech, sign, gesture or AAC)'},lv:{ok:{es:'Palabra o frase, en cualquier modo',en:'A word or phrase, any mode'},sup:{es:'Con modelo o elección de dos',en:'With a model or a choice of two'},no:{es:'Aún no',en:'Not yet'}}}
];
const ITEM=Object.fromEntries(ITEMS.map(i=>[i.id,i]));

/* the roster · 12 fictional children */
const KIDS=[
 {id:'valentina',a11y:{speak:true},name:'Valentina',age:5,home:'es',persp:true,tag:{es:'Dominio del español',en:'Spanish-dominant'},mode:{es:'Habla',en:'Speech'},modes:['speech'],
  perf:{es:{es:'Fuerte',en:'Strong'},en:{es:'Emergente',en:'Emerging'}},sup:[{es:'Modelo en español primero, luego inglés',en:'Model in Spanish first, then English'},{es:'Pareja bilingüe en el cuento',en:'Bilingual partner for the story'}],
  p:{reg:[.9,.1],w:[.55,.35],snd:[.6,.3],wings:[.9,.1],turn:[.8,.2],word:[.7,.25]},feel:0,base:1},
 {id:'liam',a11y:{},name:'Liam',age:5,home:'en',persp:true,tag:{es:'Dominio del inglés',en:'English-dominant'},mode:{es:'Habla',en:'Speech'},modes:['speech'],
  perf:{es:{es:'Emergente',en:'Emerging'},en:{es:'Fuerte',en:'Strong'}},sup:[{es:'Instrucciones en inglés, eco en español',en:'Directions in English, echo in Spanish'},{es:'Tarjetas de palabras con la versión en español visible',en:'Word cards with the Spanish visible'}],
  p:{reg:[.8,.2],w:[.85,.1],snd:[.8,.15],wings:[.9,.1],turn:[.6,.3],word:[.9,.1]},feel:4,base:3},
 {id:'sofia',a11y:{size:'lg',big:true,speak:true,motion:true},name:'Sofía',age:5,home:'es',persp:true,tag:{es:'Síndrome de Down',en:'Down syndrome'},mode:{es:'Palabras + señas',en:'Words + signs'},modes:['speech','sign'],
  perf:{es:{es:'En desarrollo',en:'Developing'},en:{es:'Emergente',en:'Emerging'}},sup:[{es:'Tiempo de espera extra (10 s)',en:'Extra wait time (10 s)'},{es:'Visuales grandes y tarjetas táctiles',en:'Large visuals and tactile cards'},{es:'Opción sentada nombrada en voz alta',en:'Seated option named aloud'},{es:'Modelo primero, luego elige',en:'Model first, then choose'}],
  p:{reg:[.7,.3],w:[.35,.5],snd:[.3,.5],wings:[.6,.4],turn:[.5,.4],word:[.5,.4]},feel:0,base:0},
 {id:'mateo',a11y:{big:true,speak:true},name:'Mateo',age:5,home:'es',persp:true,tag:{es:'Comunicador CAA / gestos',en:'AAC / gesture communicator'},mode:{es:'Tablero CAA + gestos',en:'AAC board + gestures'},modes:['aac','gesture'],
  perf:{es:{es:'Receptivo fuerte',en:'Receptive strong'},en:{es:'Receptivo emergente',en:'Receptive emerging'}},sup:[{es:'CAA precargado: 5 palabras, 3 frases, promesa',en:'AAC pre-loaded: 5 words, 3 frames, pledge'},{es:'Modelar en el dispositivo',en:'Model on the device'},{es:'Aceptar señalar y gesto como respuesta completa',en:'Pointing and gesture count as full responses'}],
  p:{reg:[.8,.2],w:[.6,.3],snd:[.2,.4],wings:[.7,.3],turn:[.7,.2],word:[.75,.2]},feel:1,base:1},
 {id:'lucas',a11y:{motion:true,contrast:true},name:'Lucas',age:4,home:'bi',persp:true,tag:{es:'Autista · apoyos de regulación',en:'Autistic · regulation supports'},mode:{es:'Habla + agenda visual',en:'Speech + visual schedule'},modes:['speech','point'],
  perf:{es:{es:'En desarrollo',en:'Developing'},en:{es:'En desarrollo',en:'Developing'}},sup:[{es:'Agenda visual Primero · Luego · Último siempre a la vista',en:'First · Next · Last visual schedule always visible'},{es:'Rincón tranquilo y Five-Finger Breathing',en:'Quiet corner and Five-Finger Breathing'},{es:'Dos opciones en vez de tres; menos estímulos',en:'Two choices instead of three; fewer stimuli'},{es:'Secuencia predecible; avisar antes de cada cambio',en:'Predictable sequence; warn before each change'}],
  p:{reg:[.4,.4],w:[.7,.2],snd:[.7,.2],wings:[.4,.4],turn:[.4,.4],word:[.6,.3]},feel:3,base:2},
 {id:'camila',a11y:{},name:'Camila',age:5,home:'es',tag:{es:'Dominio del español',en:'Spanish-dominant'},mode:{es:'Habla',en:'Speech'},modes:['speech'],perf:{es:{es:'Fuerte',en:'Strong'},en:{es:'En desarrollo',en:'Developing'}},sup:[],p:{reg:[.9,.1],w:[.75,.2],snd:[.8,.15],wings:[.95,.05],turn:[.9,.1],word:[.85,.1]},feel:0,base:2},
 {id:'sebastian',a11y:{speak:true},name:'Sebastián',age:5,home:'es',tag:{es:'Dominio del español',en:'Spanish-dominant'},mode:{es:'Habla',en:'Speech'},modes:['speech'],perf:{es:{es:'Fuerte',en:'Strong'},en:{es:'Emergente',en:'Emerging'}},sup:[{es:'Pistas táctiles para los sonidos',en:'Tactile cues for sounds'}],p:{reg:[.6,.3],w:[.5,.35],snd:[.3,.5],wings:[.8,.2],turn:[.5,.4],word:[.6,.3]},feel:3,base:1},
 {id:'amaya',a11y:{},name:'Amaya',age:5,home:'bi',tag:{es:'Bilingüe equilibrada',en:'Balanced bilingual'},mode:{es:'Habla',en:'Speech'},modes:['speech'],perf:{es:{es:'Fuerte',en:'Strong'},en:{es:'Fuerte',en:'Strong'}},sup:[],p:{reg:[.95,.05],w:[.95,.05],snd:[.9,.1],wings:[.95,.05],turn:[.9,.1],word:[.95,.05]},feel:0,base:4},
 {id:'diego',a11y:{big:true,size:'lg'},name:'Diego',age:4,home:'es',tag:{es:'Usa silla de ruedas · señala',en:'Wheelchair user · points'},mode:{es:'Señalar + gestos',en:'Pointing + gestures'},modes:['point','gesture'],perf:{es:{es:'Receptivo fuerte',en:'Receptive strong'},en:{es:'Emergente',en:'Emerging'}},sup:[{es:'Opción sentada en cada movimiento',en:'Seated option for every move'},{es:'Tarjetas al alcance de la mano',en:'Cards within reach'}],p:{reg:[.8,.2],w:[.6,.3],snd:[.3,.4],wings:[.7,.3],turn:[.7,.3],word:[.6,.3]},feel:1,base:1},
 {id:'isabella',a11y:{},name:'Isabella',age:5,home:'en',tag:{es:'Dominio del inglés · tímida',en:'English-dominant · shy'},mode:{es:'Señalar, poca voz',en:'Points, little voice'},modes:['point','speech'],perf:{es:{es:'Emergente',en:'Emerging'},en:{es:'Fuerte',en:'Strong'}},sup:[{es:'Respuesta en pareja antes que al grupo',en:'Answer to a partner before the group'}],p:{reg:[.9,.1],w:[.7,.25],snd:[.6,.3],wings:[.6,.3],turn:[.8,.2],word:[.4,.4]},feel:1,base:2},
 {id:'noah',a11y:{motion:true},name:'Noah',age:5,home:'es',tag:{es:'Mucha energía',en:'High energy'},mode:{es:'Habla',en:'Speech'},modes:['speech'],perf:{es:{es:'Fuerte',en:'Strong'},en:{es:'En desarrollo',en:'Developing'}},sup:[{es:'March in Place antes de sentarse',en:'March in Place before sitting'}],p:{reg:[.4,.5],w:[.7,.2],snd:[.7,.2],wings:[.9,.1],turn:[.3,.5],word:[.8,.15]},feel:0,base:2},
 {id:'emma',a11y:{size:'lg',contrast:true,speak:false},name:'Emma',age:5,home:'es',tag:{es:'Usa audífonos · señas',en:'Hearing aids · signs'},mode:{es:'Habla + señas',en:'Speech + signs'},modes:['speech','sign'],perf:{es:{es:'En desarrollo',en:'Developing'},en:{es:'Emergente',en:'Emerging'}},sup:[{es:'Asiento frente a la maestra; pistas visuales',en:'Seat facing the teacher; visual cues'},{es:'Gesto con cada palabra',en:'Gesture with every word'}],p:{reg:[.9,.1],w:[.65,.3],snd:[.4,.4],wings:[.9,.1],turn:[.8,.2],word:[.7,.25]},feel:0,base:2}
].map((k,i)=>({...k,color:COLORS[i]}));
const KID=Object.fromEntries(KIDS.map(k=>[k.id,k]));
const FEELIMG=['img/feel-happy.png','img/feel-calm.png','img/feel-sad.png','img/feel-mad.png','img/feel-excited.png'];
const FEELS=[{l:'😊',es:'feliz',en:'happy'},{l:'😌',es:'tranquilo/a',en:'calm'},{l:'😢',es:'triste',en:'sad'},{l:'😠',es:'enojado/a',en:'mad'},{l:'🤩',es:'emocionado/a',en:'excited'}];

/* ---- inline SVG icon set (no emojis) ---- */
const ICO_PATHS={
 people:'<circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><circle cx="12" cy="6" r="3"/><path d="M2 20c0-3 2.5-5 5-5M22 20c0-3-2.5-5-5-5M7 21c0-3.5 2.2-6 5-6s5 2.5 5 6"/>',
 checklist:'<path d="M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17M11 6h9M11 12h9M11 18h9"/>',
 trend:'<path d="M3 18l5-7 4 5 6-10"/><path d="M14 6h4v4"/>',
 books:'<rect x="4" y="15" width="16" height="4" rx="1"/><rect x="6" y="10" width="13" height="4" rx="1"/><rect x="5" y="5" width="11" height="4" rx="1"/>',
 teacher:'<circle cx="9" cy="7" r="3"/><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/><rect x="15" y="4" width="6" height="7" rx="1"/><path d="M18 11v3"/>',
 child:'<circle cx="12" cy="7" r="3.5"/><path d="M6 20c0-3.5 2.7-6 6-6s6 2.5 6 6"/>',
 home:'<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
 print:'<path d="M6 9V3h12v6"/><rect x="3" y="9" width="18" height="8" rx="2"/><rect x="6" y="14" width="12" height="7"/>',
 sparkle:'<path d="M12 2l2 7 7 3-7 3-2 7-2-7-7-3 7-3z"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>',
 speech:'<path d="M4 5h16v10H9l-5 4z"/>',
 hand:'<path d="M8 12V5a1.5 1.5 0 013 0v6M11 10V4a1.5 1.5 0 013 0v7M14 10V6a1.5 1.5 0 013 0v8M8 12l-2-2a1.5 1.5 0 00-2 2l4 6c1 2 3 3 5 3h2a5 5 0 005-5v-6"/>',
 tablet:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M11 18h2"/>',
 point:'<path d="M9 11V4a1.5 1.5 0 013 0v7M12 10V7a1.5 1.5 0 013 0v4M15 11V9a1.5 1.5 0 013 0v6a5 5 0 01-5 5h-2c-2 0-3-1-4-3l-3-5a1.5 1.5 0 012.5-1.5L9 13"/>',
 sign:'<path d="M6 11V5a1.5 1.5 0 013 0v6M9 9V4a1.5 1.5 0 013 0v6M3 12l2 6c1 2 3 3 5 3h1a5 5 0 005-5v-4M15 12l3-3a1.5 1.5 0 012 2l-4 5"/>',
 puzzle:'<path d="M9 3h4v3a2 2 0 104 0V3h4v4h-3a2 2 0 100 4h3v4h-4v3a2 2 0 11-4 0v-3H9v-4h3a2 2 0 100-4H9z"/>',
 book:'<path d="M4 5a2 2 0 012-2h14v16H6a2 2 0 00-2 2z"/><path d="M4 19a2 2 0 012-2h14"/>',
 turn:'<path d="M20 11a8 8 0 00-14-5"/><path d="M6 3v4h4"/><path d="M4 13a8 8 0 0014 5"/><path d="M18 21v-4h-4"/>',
 text:'<path d="M4 7V4h16v3M9 20h6M12 4v16"/>',
 pointer:'<path d="M6 3l12 9-5 1 3 6-2 1-3-6-4 4z"/>',
 speaker:'<path d="M4 9v6h4l5 4V5L8 9z"/><path d="M16 9a4 4 0 010 6M18.5 6.5a8 8 0 010 11"/>',
 wave:'<path d="M2 12c3-6 6-6 9 0s6 6 9 0"/>',
 contrast:'<circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 000-18z" fill="currentColor"/>',
 check:'<path d="M5 12l5 5L20 7"/>',
 board:'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4M3 10h18M11 4v13"/>',
 play:'<path d="M7 4l12 8-12 8z" fill="currentColor"/>',
 edit:'<path d="M4 20h4l11-11-4-4L4 16z"/>',
 person:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7"/>',
 warn:'<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.5"/>',
 star:'<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'
};
function ico(n,size,color){return `<svg class="ico" width="${size||18}" height="${size||18}" viewBox="0 0 24 24" fill="none" stroke="${color||'currentColor'}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICO_PATHS[n]||''}</svg>`}
const MODE_ICON={speech:ico('speech',15),sign:ico('sign',15),aac:ico('tablet',15),gesture:ico('hand',15),point:ico('point',15)};

/* learner adaptations · what each perspective changes on screen */
const ADAPT={
 valentina:{first:'es',opts:3,why:{es:'Valentina entiende todo en español; el inglés está emergiendo. La maestra dice cada enunciado en español y luego en inglés, y Valentina puede responder en el idioma que prefiera: el desempeño en cada idioma se registra por separado.',en:'Valentina understands everything in Spanish; English is emerging. The teacher says every prompt in Spanish, then English, and Valentina may answer in either — performance in each language is recorded separately.'}},
 liam:{first:'en',opts:3,why:{es:'Liam llegó de Florida con inglés fuerte. Escucha el inglés primero y el eco en español; las tarjetas muestran la palabra en español para que la asocie.',en:'Liam arrived from Florida with strong English. He hears English first and the Spanish echo; the cards show the Spanish word so he can link the two.'}},
 sofia:{first:'es',opts:3,big:true,model:true,wait:10,seated:true,why:{es:'Sofía necesita más tiempo (10 s) y visuales grandes. La maestra modela primero («Mira: así») y luego Sofía elige. La opción sentada se nombra en voz alta: sentada o de pie, las dos valen.',en:'Sofía needs more time (10 s) and large visuals. The teacher models first (“Look: like this”), then Sofía chooses. The seated option is named aloud: seated or standing, both count.'}},
 mateo:{first:'es',opts:3,aac:true,why:{es:'Mateo responde con su tablero CAA y con gestos. El tablero trae las cinco palabras, tres frases y la promesa precargadas. Señalar o tocar un símbolo es una respuesta completa, no un apoyo.',en:'Mateo answers with his AAC board and gestures. The board comes pre-loaded with the five words, three frames and the pledge. Pointing or tapping a symbol is a full response, not a support.'}},
 lucas:{first:'es',opts:2,schedule:true,quiet:true,timer:true,seated:true,why:{es:'Lucas sabe siempre qué viene: la agenda Primero · Luego · Último está a la vista. Ve dos opciones en vez de tres, una barra de tiempo y menos color. Si lo necesita, va primero al rincón tranquilo y eso también es participar.',en:'Lucas always knows what comes next: the First · Next · Last schedule stays on screen. He sees two choices instead of three, a time bar and less color. If he needs to, he goes to the quiet corner first — that is participating too.'}}
};

/* Big 5 for All (Head Start) · LVBD Screening Checklist, Tier I · ELOF-aligned */
const BIG5=[
 {id:'bk',n:{es:'Conocimiento previo',en:'Background Knowledge'},ic:'🏫',elof:'P-ATL 1 · P-SE 3 · P-LC 1',ind:[
  {id:'bk1',es:'Responde a su nombre y al saludo del día',en:'Responds to their name and the daily greeting'},
  {id:'bk2',es:'Nombra o señala a dos o más amigos o ayudantes de la escuela',en:'Names or points to two or more friends or helpers at school'},
  {id:'bk3',es:'Conecta el cuento con su vida («yo también», señala algo propio)',en:'Connects the story to their life (“me too”, points to something of theirs)'},
  {id:'bk4',es:'Sigue la rutina del día con la agenda visual',en:'Follows the daily routine with the visual schedule'}]},
 {id:'ol',n:{es:'Lenguaje oral y vocabulario',en:'Oral Language & Vocabulary'},ic:'🗣️',elof:'P-LC 1 · P-LC 2 · P-LC 5 · P-LC 6',ind:[
  {id:'ol1',es:'Entiende una indicación de dos pasos',en:'Understands a two-step direction'},
  {id:'ol2',es:'Usa frases de 2–3 palabras en cualquier idioma o modo',en:'Uses 2–3 word phrases in any language or mode'},
  {id:'ol3',es:'Muestra o nombra palabras clave de la semana (WE, FRIEND, KIND…)',en:'Shows or names the week’s key words (WE, FRIEND, KIND…)'},
  {id:'ol4',es:'Hace o responde una pregunta sobre el cuento',en:'Asks or answers a question about the story'}]},
 {id:'pa',n:{es:'Conciencia fonológica',en:'Phonological Awareness'},ic:'👏',elof:'P-LIT 1',ind:[
  {id:'pa1',es:'Aplaude las sílabas de su nombre o de a-mi-gos',en:'Claps the syllables of their name or a-mi-gos'},
  {id:'pa2',es:'Reconoce dos palabras que riman',en:'Recognises two rhyming words'},
  {id:'pa3',es:'Aísla el sonido inicial con la pista táctil (/K/ /T/ /F/ /N/)',en:'Isolates the initial sound with the tactile cue (/K/ /T/ /F/ /N/)'},
  {id:'pa4',es:'Participa en el desfile de sonidos (K-kick, T-tap…)',en:'Joins the sound parade (K-kick, T-tap…)'}]},
 {id:'ak',n:{es:'Conocimiento del alfabeto y escritura temprana',en:'Alphabet Knowledge & Early Writing'},ic:'🔤',elof:'P-LIT 3 · P-LIT 6',ind:[
  {id:'ak1',es:'Reconoce la primera letra de su nombre',en:'Recognises the first letter of their name'},
  {id:'ak2',es:'Nombra o señala tres o más letras',en:'Names or points to three or more letters'},
  {id:'ak3',es:'Relaciona una letra con su sonido (K, T, F, N)',en:'Links a letter to its sound (K, T, F, N)'},
  {id:'ak4',es:'Hace marcas, trazos o letras con intención de escribir',en:'Makes marks, strokes or letters to write'}]},
 {id:'cp',n:{es:'Comprensión y conceptos de lo impreso',en:'Comprehension & Print Concepts'},ic:'📖',elof:'P-LIT 2 · P-LIT 4 · P-LIT 5',ind:[
  {id:'cp1',es:'Sostiene el libro y pasa las páginas de adelante hacia atrás',en:'Holds the book and turns pages front to back'},
  {id:'cp2',es:'Señala dónde se lee (texto, no imagen)',en:'Points to where to read (text, not picture)'},
  {id:'cp3',es:'Responde quién o qué sobre el cuento (cualquier modo)',en:'Answers who or what about the story (any mode)'},
  {id:'cp4',es:'Recuenta Primero · Luego · Último con imágenes',en:'Retells First · Next · Last with pictures'}]}
];
const B5=Object.fromEntries(BIG5.map(d=>[d.id,d]));
const B5COLOR={bk:'#2E86D1',ol:'#E63946',pa:'#E0A800',ak:'#1FA594',cp:'#7A4FBF'};
const sw=d=>`<i class="sw" style="background:${B5COLOR[typeof d==='string'?d:d.id]}"></i>`;
const MONTHS=[{k:'aug',en:'Aug',es:'ago'},{k:'sep',en:'Sep',es:'sep'},{k:'oct',en:'Oct',es:'oct'},{k:'nov',en:'Nov',es:'nov'},{k:'dec',en:'Dec',es:'dic'},{k:'jan',en:'Jan',es:'ene'},{k:'feb',en:'Feb',es:'feb'},{k:'mar',en:'Mar',es:'mar'},{k:'apr',en:'Apr',es:'abr'},{k:'may',en:'May',es:'may'}];
const NOW_M=3; /* Nov */
const B5STATES=['obs','emg','not','nop'];const B5ICON={obs:'✓',emg:'◐',not:'○',nop:'—'};
const B5LANGS=['es','en','both','nv','aac'];
/* seeded fictional baseline per child: probability of "observed" by domain */
const SALT={lucas:3,noah:87,sebastian:1,emma:4,sofia:21,mateo:8};
const B5P={valentina:{bk:.85,ol:.8,pa:.7,ak:.65,cp:.75},liam:{bk:.7,ol:.85,pa:.7,ak:.75,cp:.7},sofia:{bk:.6,ol:.35,pa:.25,ak:.3,cp:.45},mateo:{bk:.5,ol:.4,pa:.2,ak:.35,cp:.4},lucas:{bk:.5,ol:.6,pa:.7,ak:.8,cp:.5},camila:{bk:.9,ol:.8,pa:.7,ak:.6,cp:.8},sebastian:{bk:.7,ol:.5,pa:.3,ak:.35,cp:.5},amaya:{bk:.95,ol:.95,pa:.9,ak:.9,cp:.95},diego:{bk:.5,ol:.35,pa:.25,ak:.3,cp:.4},isabella:{bk:.6,ol:.6,pa:.6,ak:.7,cp:.65},noah:{bk:.75,ol:.7,pa:.6,ak:.5,cp:.6},emma:{bk:.7,ol:.55,pa:.35,ak:.55,cp:.6}};

const A11Y_LABEL={size:{es:'Texto grande',en:'Large text'},big:{es:'Botones grandes',en:'Large buttons'},speak:{es:'Lectura en voz alta',en:'Read aloud'},motion:{es:'Menos movimiento',en:'Reduced motion'},contrast:{es:'Alto contraste',en:'High contrast'}};
const A11Y_ICON={size:ico('text',14),big:ico('pointer',14),speak:ico('speaker',14),motion:ico('wave',14),contrast:ico('contrast',14)};
function a11yList(k){const a=k.a11y||{};return Object.keys(A11Y_LABEL).filter(key=>key==='size'?(a.size&&a.size!=='md'):!!a[key])}
function a11yChips(k,cls){return a11yList(k).map(key=>`<span class="chip ${cls||'plum'}">${A11Y_ICON[key]} ${L(A11Y_LABEL[key])}</span>`).join('')}
</script>
