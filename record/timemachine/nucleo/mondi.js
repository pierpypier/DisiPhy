/* =====================================================================
   MONDI
   addWorld({ id, name, width, sky[3], gt(orizzonte terra), gr[2](terra), chord[],amb,
              intro, look[[maxX,testo]], back[{k,fn}], mid[{k,fn}], gdraw, props[[nome,x,arg]],
              npcs[{id,name,x,draw,d}] })
   k = velocita' parallasse (0 = fermo, 1 = come il terreno)
   Dialoghi: d:{a:{t:'testo', o:[['scelta','nodoSuccessivo'|null,funzione?]], m:'ricordo?'}}
   ===================================================================== */
const WORLDS=[];const addWorld=w=>WORLDS.push(w);

const TOPX={};  /* battute dei personaggi: TOPX.idpersonaggio=[[domanda,risposta],...] */

/* Dialogo a menu: 4 domande per finestra, a pagine. T=[[etichetta,testo],...] */
function topicsD(greet,T){const n=T.length,pick=ex=>{const ids=[...Array(n).keys()].filter(i=>i!==ex);for(let i=ids.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[ids[i],ids[j]]=[ids[j],ids[i]]}return ids.slice(0,4).map(i=>[T[i][0],'t'+i])},d={a:{t:greet,o:()=>pick(-1)}};
 T.forEach((x,i)=>{d['t'+i]={t:x[1],m:i%3==2?'n'+i:undefined,o:()=>pick(i)}});return d}

