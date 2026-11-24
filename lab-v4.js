'use strict';
//grafo no dirigido con pesos positivos
(() => {
const nodes={A:[65,145],B:[180,55],C:[180,245],D:[345,55],E:[345,245],F:[475,145]};
const edges=[['A','B',4],['A','C',2],['B','C',1],['B','D',5],['C','D',8],['C','E',10],['D','E',2],['D','F',6],['E','F',3]];
const names=Object.keys(nodes),es=document.documentElement.lang==='es';
const byId=id=>document.getElementById(id), start=byId('start'),end=byId('end'),graph=byId('graph');
let dist,prev,visited,finished,current;
const svg=(tag,attrs,label)=>{const n=document.createElementNS('http://www.w3.org/2000/svg',tag);for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);if(label!==undefined)n.textContent=label;return n};
function path(){if(!finished||!Number.isFinite(dist[end.value]))return [];let p=[end.value];while(p[0]!==start.value){const previous=prev[p[0]];if(!previous)return [];p.unshift(previous)}return p}
function draw(){const route=path();graph.replaceChildren();for(const [a,b,w] of edges){const [x1,y1]=nodes[a],[x2,y2]=nodes[b];const isPath=route.some((n,i)=>i&&((n===a&&route[i-1]===b)||(n===b&&route[i-1]===a)));graph.append(svg('line',{x1,y1,x2,y2,class:'edge'+(isPath?' path':'')}),svg('text',{x:(x1+x2)/2,y:(y1+y2)/2-6,class:'weight'},String(w)))}for(const [n,[cx,cy]] of Object.entries(nodes)){const on=route.includes(n);graph.append(svg('circle',{cx,cy,r:22,class:'node'+(on?' path':visited.has(n)?' visited':'')}),svg('text',{x:cx,y:cy,class:'node-label'+(on?' path':'')},n))}const tbody=byId('distances');tbody.replaceChildren();for(const n of names){const tr=document.createElement('tr');for(const val of [n,Number.isFinite(dist[n])?String(dist[n]):'∞',visited.has(n)?(es?'Fijado':'Settled'):(es?'Pendiente':'Pending')]){const td=document.createElement('td');td.textContent=val;tr.append(td)}tbody.append(tr)}byId('path').textContent=route.length?route.join(' → ')+' · '+dist[end.value]:'—';byId('step').disabled=finished;byId('solve').disabled=finished;byId('lab-status').textContent=finished?(es?'Cálculo terminado. Las distancias fijadas son definitivas.':'Calculation complete. Settled distances are final.'):current?(es?'Vértice fijado: ':'Settled vertex: ')+current:(es?'Preparado. Selecciona Siguiente paso o Resolver.':'Ready. Select Next step or Solve.');}
function reset(){dist=Object.fromEntries(names.map(n=>[n,Infinity]));prev={};visited=new Set();finished=false;current=null;dist[start.value]=0;draw()}
//relajacion de aristas y eleccion del minimo pendiente
function step(){if(finished)return;const u=names.filter(n=>!visited.has(n)).sort((a,b)=>dist[a]-dist[b])[0];if(!u||!Number.isFinite(dist[u])){finished=true;draw();return}visited.add(u);current=u;for(const [a,b,w] of edges){const v=a===u?b:b===u?a:null;if(v&&!visited.has(v)&&dist[u]+w<dist[v]){dist[v]=dist[u]+w;prev[v]=u}}if(visited.size===names.length)finished=true;draw()}
byId('step').addEventListener('click',step);byId('solve').addEventListener('click',()=>{while(!finished)step()});byId('reset').addEventListener('click',reset);start.addEventListener('change',reset);end.addEventListener('change',reset);reset();
})();
