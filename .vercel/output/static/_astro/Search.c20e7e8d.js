import{j as m}from"./jsx-runtime.7d759e48.js";import{r as lt}from"./index.8365acb2.js";function S(s){return Array.isArray?Array.isArray(s):st(s)==="[object Array]"}const ut=1/0;function ft(s){if(typeof s=="string")return s;let t=s+"";return t=="0"&&1/s==-ut?"-0":t}function dt(s){return s==null?"":ft(s)}function _(s){return typeof s=="string"}function tt(s){return typeof s=="number"}function gt(s){return s===!0||s===!1||pt(s)&&st(s)=="[object Boolean]"}function et(s){return typeof s=="object"}function pt(s){return et(s)&&s!==null}function x(s){return s!=null}function K(s){return!s.trim().length}function st(s){return s==null?s===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(s)}const mt="Incorrect 'index' type",xt=s=>`Invalid value for key ${s}`,Mt=s=>`Pattern length exceeds max of ${s}.`,yt=s=>`Missing ${s} property in key`,Et=s=>`Property 'weight' in key '${s}' must be a positive integer`,U=Object.prototype.hasOwnProperty;class _t{constructor(t){this._keys=[],this._keyMap={};let e=0;t.forEach(n=>{let r=nt(n);this._keys.push(r),this._keyMap[r.id]=r,e+=r.weight}),this._keys.forEach(n=>{n.weight/=e})}get(t){return this._keyMap[t]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function nt(s){let t=null,e=null,n=null,r=1,i=null;if(_(s)||S(s))n=s,t=X(s),e=D(s);else{if(!U.call(s,"name"))throw new Error(yt("name"));const c=s.name;if(n=c,U.call(s,"weight")&&(r=s.weight,r<=0))throw new Error(Et(c));t=X(c),e=D(c),i=s.getFn}return{path:t,id:e,weight:r,src:n,getFn:i}}function X(s){return S(s)?s:s.split(".")}function D(s){return S(s)?s.join("."):s}function It(s,t){let e=[],n=!1;const r=(i,c,o)=>{if(x(i))if(!c[o])e.push(i);else{let a=c[o];const h=i[a];if(!x(h))return;if(o===c.length-1&&(_(h)||tt(h)||gt(h)))e.push(dt(h));else if(S(h)){n=!0;for(let l=0,f=h.length;l<f;l+=1)r(h[l],c,o+1)}else c.length&&r(h,c,o+1)}};return r(s,_(t)?t.split("."):t,0),n?e:e[0]}const St={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},At={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(s,t)=>s.score===t.score?s.idx<t.idx?-1:1:s.score<t.score?-1:1},wt={location:0,threshold:.6,distance:100},bt={useExtendedSearch:!1,getFn:It,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var u={...At,...St,...wt,...bt};const Lt=/[^ ]+/g;function Nt(s=1,t=3){const e=new Map,n=Math.pow(10,t);return{get(r){const i=r.match(Lt).length;if(e.has(i))return e.get(i);const c=1/Math.pow(i,.5*s),o=parseFloat(Math.round(c*n)/n);return e.set(i,o),o},clear(){e.clear()}}}class Y{constructor({getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){this.norm=Nt(e,3),this.getFn=t,this.isCreated=!1,this.setIndexRecords()}setSources(t=[]){this.docs=t}setIndexRecords(t=[]){this.records=t}setKeys(t=[]){this.keys=t,this._keysMap={},t.forEach((e,n)=>{this._keysMap[e.id]=n})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,_(this.docs[0])?this.docs.forEach((t,e)=>{this._addString(t,e)}):this.docs.forEach((t,e)=>{this._addObject(t,e)}),this.norm.clear())}add(t){const e=this.size();_(t)?this._addString(t,e):this._addObject(t,e)}removeAt(t){this.records.splice(t,1);for(let e=t,n=this.size();e<n;e+=1)this.records[e].i-=1}getValueForItemAtKeyId(t,e){return t[this._keysMap[e]]}size(){return this.records.length}_addString(t,e){if(!x(t)||K(t))return;let n={v:t,i:e,n:this.norm.get(t)};this.records.push(n)}_addObject(t,e){let n={i:e,$:{}};this.keys.forEach((r,i)=>{let c=r.getFn?r.getFn(t):this.getFn(t,r.path);if(x(c)){if(S(c)){let o=[];const a=[{nestedArrIndex:-1,value:c}];for(;a.length;){const{nestedArrIndex:h,value:l}=a.pop();if(x(l))if(_(l)&&!K(l)){let f={v:l,i:h,n:this.norm.get(l)};o.push(f)}else S(l)&&l.forEach((f,d)=>{a.push({nestedArrIndex:d,value:f})})}n.$[i]=o}else if(_(c)&&!K(c)){let o={v:c,n:this.norm.get(c)};n.$[i]=o}}}),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function rt(s,t,{getFn:e=u.getFn,fieldNormWeight:n=u.fieldNormWeight}={}){const r=new Y({getFn:e,fieldNormWeight:n});return r.setKeys(s.map(nt)),r.setSources(t),r.create(),r}function Rt(s,{getFn:t=u.getFn,fieldNormWeight:e=u.fieldNormWeight}={}){const{keys:n,records:r}=s,i=new Y({getFn:t,fieldNormWeight:e});return i.setKeys(n),i.setIndexRecords(r),i}function C(s,{errors:t=0,currentLocation:e=0,expectedLocation:n=0,distance:r=u.distance,ignoreLocation:i=u.ignoreLocation}={}){const c=t/s.length;if(i)return c;const o=Math.abs(n-e);return r?c+o/r:o?1:c}function $t(s=[],t=u.minMatchCharLength){let e=[],n=-1,r=-1,i=0;for(let c=s.length;i<c;i+=1){let o=s[i];o&&n===-1?n=i:!o&&n!==-1&&(r=i-1,r-n+1>=t&&e.push([n,r]),n=-1)}return s[i-1]&&i-n>=t&&e.push([n,i-1]),e}const R=32;function kt(s,t,e,{location:n=u.location,distance:r=u.distance,threshold:i=u.threshold,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,includeMatches:a=u.includeMatches,ignoreLocation:h=u.ignoreLocation}={}){if(t.length>R)throw new Error(Mt(R));const l=t.length,f=s.length,d=Math.max(0,Math.min(n,f));let g=i,p=d;const M=o>1||a,L=M?Array(f):[];let I;for(;(I=s.indexOf(t,p))>-1;){let y=C(t,{currentLocation:I,expectedLocation:d,distance:r,ignoreLocation:h});if(g=Math.min(y,g),p=I+l,M){let A=0;for(;A<l;)L[I+A]=1,A+=1}}p=-1;let $=[],N=1,j=l+f;const ht=1<<l-1;for(let y=0;y<l;y+=1){let A=0,w=j;for(;A<w;)C(t,{errors:y,currentLocation:d+w,expectedLocation:d,distance:r,ignoreLocation:h})<=g?A=w:j=w,w=Math.floor((j-A)/2+A);j=w;let G=Math.max(1,d-w+1),P=c?f:Math.min(d+w,f)+l,k=Array(P+2);k[P+1]=(1<<y)-1;for(let E=P;E>=G;E-=1){let v=E-1,Q=e[s.charAt(v)];if(M&&(L[v]=+!!Q),k[E]=(k[E+1]<<1|1)&Q,y&&(k[E]|=($[E+1]|$[E])<<1|1|$[E+1]),k[E]&ht&&(N=C(t,{errors:y,currentLocation:v,expectedLocation:d,distance:r,ignoreLocation:h}),N<=g)){if(g=N,p=v,p<=d)break;G=Math.max(1,2*d-p)}}if(C(t,{errors:y+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:h})>g)break;$=k}const T={isMatch:p>=0,score:Math.max(.001,N)};if(M){const y=$t(L,o);y.length?a&&(T.indices=y):T.isMatch=!1}return T}function Ot(s){let t={};for(let e=0,n=s.length;e<n;e+=1){const r=s.charAt(e);t[r]=(t[r]||0)|1<<n-e-1}return t}class it{constructor(t,{location:e=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){if(this.options={location:e,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h},this.pattern=a?t:t.toLowerCase(),this.chunks=[],!this.pattern.length)return;const l=(d,g)=>{this.chunks.push({pattern:d,alphabet:Ot(d),startIndex:g})},f=this.pattern.length;if(f>R){let d=0;const g=f%R,p=f-g;for(;d<p;)l(this.pattern.substr(d,R),d),d+=R;if(g){const M=f-R;l(this.pattern.substr(M),M)}}else l(this.pattern,0)}searchIn(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let p={isMatch:!0,score:0};return n&&(p.indices=[[0,t.length-1]]),p}const{location:r,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,ignoreLocation:h}=this.options;let l=[],f=0,d=!1;this.chunks.forEach(({pattern:p,alphabet:M,startIndex:L})=>{const{isMatch:I,score:$,indices:N}=kt(t,p,M,{location:r+L,distance:i,threshold:c,findAllMatches:o,minMatchCharLength:a,includeMatches:n,ignoreLocation:h});I&&(d=!0),f+=$,I&&N&&(l=[...l,...N])});let g={isMatch:d,score:d?f/this.chunks.length:1};return d&&n&&(g.indices=l),g}}class b{constructor(t){this.pattern=t}static isMultiMatch(t){return J(t,this.multiRegex)}static isSingleMatch(t){return J(t,this.singleRegex)}search(){}}function J(s,t){const e=s.match(t);return e?e[1]:null}class jt extends b{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(t){const e=t===this.pattern;return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class vt extends b{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const n=t.indexOf(this.pattern)===-1;return{isMatch:n,score:n?0:1,indices:[0,t.length-1]}}}class Ct extends b{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,this.pattern.length-1]}}}class Ft extends b{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class Tt extends b{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[t.length-this.pattern.length,t.length-1]}}}class Pt extends b{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,indices:[0,t.length-1]}}}class ct extends b{constructor(t,{location:e=u.location,threshold:n=u.threshold,distance:r=u.distance,includeMatches:i=u.includeMatches,findAllMatches:c=u.findAllMatches,minMatchCharLength:o=u.minMatchCharLength,isCaseSensitive:a=u.isCaseSensitive,ignoreLocation:h=u.ignoreLocation}={}){super(t),this._bitapSearch=new it(t,{location:e,threshold:n,distance:r,includeMatches:i,findAllMatches:c,minMatchCharLength:o,isCaseSensitive:a,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchIn(t)}}class ot extends b{constructor(t){super(t)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e=0,n;const r=[],i=this.pattern.length;for(;(n=t.indexOf(this.pattern,e))>-1;)e=n+i,r.push([n,e-1]);const c=!!r.length;return{isMatch:c,score:c?0:1,indices:r}}}const W=[jt,ot,Ct,Ft,Pt,Tt,vt,ct],Z=W.length,Kt=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,Dt="|";function Wt(s,t={}){return s.split(Dt).map(e=>{let n=e.trim().split(Kt).filter(i=>i&&!!i.trim()),r=[];for(let i=0,c=n.length;i<c;i+=1){const o=n[i];let a=!1,h=-1;for(;!a&&++h<Z;){const l=W[h];let f=l.isMultiMatch(o);f&&(r.push(new l(f,t)),a=!0)}if(!a)for(h=-1;++h<Z;){const l=W[h];let f=l.isSingleMatch(o);if(f){r.push(new l(f,t));break}}}return r})}const zt=new Set([ct.type,ot.type]);class Bt{constructor(t,{isCaseSensitive:e=u.isCaseSensitive,includeMatches:n=u.includeMatches,minMatchCharLength:r=u.minMatchCharLength,ignoreLocation:i=u.ignoreLocation,findAllMatches:c=u.findAllMatches,location:o=u.location,threshold:a=u.threshold,distance:h=u.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:r,findAllMatches:c,ignoreLocation:i,location:o,threshold:a,distance:h},this.pattern=e?t:t.toLowerCase(),this.query=Wt(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:r}=this.options;t=r?t:t.toLowerCase();let i=0,c=[],o=0;for(let a=0,h=e.length;a<h;a+=1){const l=e[a];c.length=0,i=0;for(let f=0,d=l.length;f<d;f+=1){const g=l[f],{isMatch:p,indices:M,score:L}=g.search(t);if(p){if(i+=1,o+=L,n){const I=g.constructor.type;zt.has(I)?c=[...c,...M]:c.push(M)}}else{o=0,i=0,c.length=0;break}}if(i){let f={isMatch:!0,score:o/i};return n&&(f.indices=c),f}}return{isMatch:!1,score:1}}}const z=[];function Ht(...s){z.push(...s)}function B(s,t){for(let e=0,n=z.length;e<n;e+=1){let r=z[e];if(r.condition(s,t))return new r(s,t)}return new it(s,t)}const F={AND:"$and",OR:"$or"},H={PATH:"$path",PATTERN:"$val"},V=s=>!!(s[F.AND]||s[F.OR]),Vt=s=>!!s[H.PATH],Yt=s=>!S(s)&&et(s)&&!V(s),q=s=>({[F.AND]:Object.keys(s).map(t=>({[t]:s[t]}))});function at(s,t,{auto:e=!0}={}){const n=r=>{let i=Object.keys(r);const c=Vt(r);if(!c&&i.length>1&&!V(r))return n(q(r));if(Yt(r)){const a=c?r[H.PATH]:i[0],h=c?r[H.PATTERN]:r[a];if(!_(h))throw new Error(xt(a));const l={keyId:D(a),pattern:h};return e&&(l.searcher=B(h,t)),l}let o={children:[],operator:i[0]};return i.forEach(a=>{const h=r[a];S(h)&&h.forEach(l=>{o.children.push(n(l))})}),o};return V(s)||(s=q(s)),n(s)}function Gt(s,{ignoreFieldNorm:t=u.ignoreFieldNorm}){s.forEach(e=>{let n=1;e.matches.forEach(({key:r,norm:i,score:c})=>{const o=r?r.weight:null;n*=Math.pow(c===0&&o?Number.EPSILON:c,(o||1)*(t?1:i))}),e.score=n})}function Qt(s,t){const e=s.matches;t.matches=[],x(e)&&e.forEach(n=>{if(!x(n.indices)||!n.indices.length)return;const{indices:r,value:i}=n;let c={indices:r,value:i};n.key&&(c.key=n.key.src),n.idx>-1&&(c.refIndex=n.idx),t.matches.push(c)})}function Ut(s,t){t.score=s.score}function Xt(s,t,{includeMatches:e=u.includeMatches,includeScore:n=u.includeScore}={}){const r=[];return e&&r.push(Qt),n&&r.push(Ut),s.map(i=>{const{idx:c}=i,o={item:t[c],refIndex:c};return r.length&&r.forEach(a=>{a(i,o)}),o})}class O{constructor(t,e={},n){this.options={...u,...e},this.options.useExtendedSearch,this._keyStore=new _t(this.options.keys),this.setCollection(t,n)}setCollection(t,e){if(this._docs=t,e&&!(e instanceof Y))throw new Error(mt);this._myIndex=e||rt(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(t){x(t)&&(this._docs.push(t),this._myIndex.add(t))}remove(t=()=>!1){const e=[];for(let n=0,r=this._docs.length;n<r;n+=1){const i=this._docs[n];t(i,n)&&(this.removeAt(n),n-=1,r-=1,e.push(i))}return e}removeAt(t){this._docs.splice(t,1),this._myIndex.removeAt(t)}getIndex(){return this._myIndex}search(t,{limit:e=-1}={}){const{includeMatches:n,includeScore:r,shouldSort:i,sortFn:c,ignoreFieldNorm:o}=this.options;let a=_(t)?_(this._docs[0])?this._searchStringList(t):this._searchObjectList(t):this._searchLogical(t);return Gt(a,{ignoreFieldNorm:o}),i&&a.sort(c),tt(e)&&e>-1&&(a=a.slice(0,e)),Xt(a,this._docs,{includeMatches:n,includeScore:r})}_searchStringList(t){const e=B(t,this.options),{records:n}=this._myIndex,r=[];return n.forEach(({v:i,i:c,n:o})=>{if(!x(i))return;const{isMatch:a,score:h,indices:l}=e.searchIn(i);a&&r.push({item:i,idx:c,matches:[{score:h,value:i,norm:o,indices:l}]})}),r}_searchLogical(t){const e=at(t,this.options),n=(o,a,h)=>{if(!o.children){const{keyId:f,searcher:d}=o,g=this._findMatches({key:this._keyStore.get(f),value:this._myIndex.getValueForItemAtKeyId(a,f),searcher:d});return g&&g.length?[{idx:h,item:a,matches:g}]:[]}const l=[];for(let f=0,d=o.children.length;f<d;f+=1){const g=o.children[f],p=n(g,a,h);if(p.length)l.push(...p);else if(o.operator===F.AND)return[]}return l},r=this._myIndex.records,i={},c=[];return r.forEach(({$:o,i:a})=>{if(x(o)){let h=n(e,o,a);h.length&&(i[a]||(i[a]={idx:a,item:o,matches:[]},c.push(i[a])),h.forEach(({matches:l})=>{i[a].matches.push(...l)}))}}),c}_searchObjectList(t){const e=B(t,this.options),{keys:n,records:r}=this._myIndex,i=[];return r.forEach(({$:c,i:o})=>{if(!x(c))return;let a=[];n.forEach((h,l)=>{a.push(...this._findMatches({key:h,value:c[l],searcher:e}))}),a.length&&i.push({idx:o,item:c,matches:a})}),i}_findMatches({key:t,value:e,searcher:n}){if(!x(e))return[];let r=[];if(S(e))e.forEach(({v:i,i:c,n:o})=>{if(!x(i))return;const{isMatch:a,score:h,indices:l}=n.searchIn(i);a&&r.push({score:h,key:t,value:i,idx:c,norm:o,indices:l})});else{const{v:i,n:c}=e,{isMatch:o,score:a,indices:h}=n.searchIn(i);o&&r.push({score:a,key:t,value:i,norm:c,indices:h})}return r}}O.version="7.0.0";O.createIndex=rt;O.parseIndex=Rt;O.config=u;O.parseQuery=at;Ht(Bt);const Jt={keys:["data.title","data.logoImage","data.soon","data.description","data.slug"],includeMatches:!0,minMatchCharLength:2,threshold:.5};function ee({postsList:s,searchTo:t}){const[e,n]=lt.useState(""),i=new O(s,Jt).search(e).map(o=>o.item).slice(0,6);function c({target:o={}}){const{value:a}=o;n(a)}return m.jsx(m.Fragment,{children:m.jsxs("div",{className:"relative",children:[m.jsx("input",{className:"ring-1 ring-gray-200 px-3 py-2 rounded-xl w-full",role:"search",type:"text",value:e,onChange:c,placeholder:"Поиск..."}),i&&i.length>0&&m.jsxs("ul",{className:"z-10 ring-1 ring-gray-200 p-3 rounded-xl bg-white/80 backdrop-blur-md w-full absolute top-[50px]",children:[e.length>1&&m.jsxs("p",{className:"text-gray-600",children:["Найдено ",m.jsx("b",{children:i.length})," ",i.length===1?"результат":"результатов","для",m.jsxs("b",{children:[' "',e,'"']})]}),m.jsx("div",{className:"mt-2 flex flex-col gap-3",children:i.map(o=>m.jsx("li",{className:"p-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 hover:bg-gray-100 transition-colors duration-75 ease-linear",children:m.jsxs("a",{href:`/${t}/${o.slug}`,children:[m.jsxs("h4",{className:"font-bold",children:["➥ ",o.data.title]}),o.data.description&&m.jsx("p",{className:"text-gray-600 text-sm",children:o.data.description}),o.data.soon&&m.jsx("p",{className:"text-gray-600 text-sm",children:o.data.soon})]})}))})]})]})})}export{ee as default};
