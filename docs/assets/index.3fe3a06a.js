const it=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function l(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=l(r);fetch(r.href,i)}};it();function N(){}function st(t,e){for(const l in e)t[l]=e[l];return t}function Je(t){return t()}function Te(){return Object.create(null)}function ie(t){t.forEach(Je)}function Ce(t){return typeof t=="function"}function I(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let fe;function ve(t,e){return fe||(fe=document.createElement("a")),fe.href=e,t===fe.href}function ot(t){return Object.keys(t).length===0}function at(t,e,l,n){if(t){const r=Ke(t,e,l,n);return t[0](r)}}function Ke(t,e,l,n){return t[1]&&n?st(l.ctx.slice(),t[1](n(e))):l.ctx}function ct(t,e,l,n){if(t[2]&&n){const r=t[2](n(l));if(e.dirty===void 0)return r;if(typeof r=="object"){const i=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)i[o]=e.dirty[o]|r[o];return i}return e.dirty|r}return e.dirty}function ft(t,e,l,n,r,i){if(r){const s=Ke(e,l,n,i);t.p(s,r)}}function ut(t){if(t.ctx.length>32){const e=[],l=t.ctx.length/32;for(let n=0;n<l;n++)e[n]=-1;return e}return-1}function gt(t){return t&&Ce(t.destroy)?t.destroy:N}function d(t,e){t.appendChild(e)}function C(t,e,l){t.insertBefore(e,l||null)}function x(t){t.parentNode.removeChild(t)}function Qe(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function v(t){return document.createElement(t)}function K(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function b(){return F(" ")}function Ze(){return F("")}function a(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function mt(t){return Array.from(t.childNodes)}function Se(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ye(t,e,l,n){l===null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function V(t,e,l){t.classList[l?"add":"remove"](e)}function dt(t,e,{bubbles:l=!1,cancelable:n=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,l,n,e),r}let re;function ne(t){re=t}function $e(){if(!re)throw new Error("Function called outside component initialization");return re}function ht(t){$e().$$.on_mount.push(t)}function pt(){const t=$e();return(e,l,{cancelable:n=!1}={})=>{const r=t.$$.callbacks[e];if(r){const i=dt(e,l,{cancelable:n});return r.slice().forEach(s=>{s.call(t,i)}),!i.defaultPrevented}return!0}}const le=[],Re=[],de=[],Ie=[],vt=Promise.resolve();let ke=!1;function _t(){ke||(ke=!0,vt.then(et))}function xe(t){de.push(t)}const we=new Set;let ue=0;function et(){const t=re;do{for(;ue<le.length;){const e=le[ue];ue++,ne(e),yt(e.$$)}for(ne(null),le.length=0,ue=0;Re.length;)Re.pop()();for(let e=0;e<de.length;e+=1){const l=de[e];we.has(l)||(we.add(l),l())}de.length=0}while(le.length);for(;Ie.length;)Ie.pop()();ke=!1,we.clear(),ne(t)}function yt(t){if(t.fragment!==null){t.update(),ie(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(xe)}}const he=new Set;let D;function tt(){D={r:0,c:[],p:D}}function lt(){D.r||ie(D.c),D=D.p}function k(t,e){t&&t.i&&(he.delete(t),t.i(e))}function S(t,e,l,n){if(t&&t.o){if(he.has(t))return;he.add(t),D.c.push(()=>{he.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}}function O(t){t&&t.c()}function q(t,e,l,n){const{fragment:r,on_mount:i,on_destroy:s,after_update:o}=t.$$;r&&r.m(e,l),n||xe(()=>{const u=i.map(Je).filter(Ce);s?s.push(...u):ie(u),t.$$.on_mount=[]}),o.forEach(xe)}function z(t,e){const l=t.$$;l.fragment!==null&&(ie(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function wt(t,e){t.$$.dirty[0]===-1&&(le.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function B(t,e,l,n,r,i,s,o=[-1]){const u=re;ne(t);const f=t.$$={fragment:null,ctx:null,props:i,update:N,not_equal:r,bound:Te(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:Te(),dirty:o,skip_bound:!1,root:e.target||u.$$.root};s&&s(f.root);let h=!1;if(f.ctx=l?l(t,e.props||{},(c,m,...E)=>{const y=E.length?E[0]:m;return f.ctx&&r(f.ctx[c],f.ctx[c]=y)&&(!f.skip_bound&&f.bound[c]&&f.bound[c](y),h&&wt(t,c)),m}):[],f.update(),h=!0,ie(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const c=mt(e.target);f.fragment&&f.fragment.l(c),c.forEach(x)}else f.fragment&&f.fragment.c();e.intro&&k(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),et()}ne(u)}class H{$destroy(){z(this,1),this.$destroy=N}$on(e,l){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const r=n.indexOf(l);r!==-1&&n.splice(r,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var bt={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]},kt={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},xt={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]},jt={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.325 4.548 .325 9.097 .325 13.65 0 138.7-105.6 298.6-298.6 298.6-59.45 0-114.7-17.22-161.1-47.11 8.447 .974 16.57 1.299 25.34 1.299 49.06 0 94.21-16.57 130.3-44.83-46.13-.975-84.79-31.19-98.11-72.77 6.498 .974 12.99 1.624 19.82 1.624 9.421 0 18.84-1.3 27.61-3.573-48.08-9.747-84.14-51.98-84.14-102.1v-1.299c13.97 7.797 30.21 12.67 47.43 13.32-28.26-18.84-46.78-51.01-46.78-87.39 0-19.49 5.197-37.36 14.29-52.95 51.65 63.67 129.3 105.3 216.4 109.8-1.624-7.797-2.599-15.92-2.599-24.04 0-57.83 46.78-104.9 104.9-104.9 30.21 0 57.5 12.67 76.67 33.14 23.72-4.548 46.46-13.32 66.6-25.34-7.798 24.37-24.37 44.83-46.13 57.83 21.12-2.273 41.58-8.122 60.43-16.24-14.29 20.79-32.16 39.31-52.63 54.25z"]};function Ct(t){let e,l;return{c(){e=v("span"),l=F(t[0]),a(e,"class","box"),ye(e,"background-color",t[1]),ye(e,"color","#1c1e26")},m(n,r){C(n,e,r),d(e,l)},p(n,[r]){r&1&&Se(l,n[0]),r&2&&ye(e,"background-color",n[1])},i:N,o:N,d(n){n&&x(e)}}}function St(t,e,l){let{text:n}=e,{color:r}=e;return t.$$set=i=>{"text"in i&&l(0,n=i.text),"color"in i&&l(1,r=i.color)},[n,r]}class Ve extends H{constructor(e){super(),B(this,e,St,Ct,I,{text:0,color:1})}}const Et="modulepreload",Fe={},qt="/",pe=function(e,l){return!l||l.length===0?e():Promise.all(l.map(n=>{if(n=`${qt}${n}`,n in Fe)return;Fe[n]=!0;const r=n.endsWith(".css"),i=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${i}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":Et,r||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),r)return new Promise((o,u)=>{s.addEventListener("load",o),s.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>e())},Be=t=>t.childNodes.length===1&&t.childNodes[0].nodeType===3,zt=(t,e)=>{const l=document.createElement(e);return l.textContent=t,l},Nt=t=>t.dataset.static===void 0,nt=(t,{parentElement:e})=>{if(Be(e)){const l=e.textContent,n=zt(e.textContent,"p");return e.textContent="",e.appendChild(n),[{currentNode:n,text:l}]}if(Be(t)){const l=t.innerHTML.replaceAll("&amp;","&");return[{currentNode:t,text:l}]}else return[...t.children].filter(Nt).flatMap(r=>nt(r,{parentElement:e}))},Ot=async(t,e,l)=>{if(!e){console.error("The specified parent element does not exists!");return}let n=t;do{if(n===e)return;l(n),n=n.parentElement||n.parentNode}while(n!==null&&n.nodeType===1)},Lt=t=>{const e=[...t.querySelectorAll("[data-static]")];for(const l of e)Ot(l,t,n=>{n!==l&&n.classList.add("finished-typing")})},Pt=async t=>t.loop||t.loopRandom?(await pe(()=>import("./loopTypewriter.fe9d54d3.js"),["assets/loopTypewriter.fe9d54d3.js","assets/writeEffect.63e15626.js","assets/sleep.b2c92b69.js"])).mode:t.scramble?(await pe(()=>import("./scramble.454e3b86.js"),["assets/scramble.454e3b86.js","assets/sleep.b2c92b69.js"])).mode:(await pe(()=>import("./typewriter.8ba5cc92.js"),["assets/typewriter.8ba5cc92.js","assets/writeEffect.63e15626.js","assets/sleep.b2c92b69.js"])).mode,Mt=async(t,e)=>{Lt(t);const l=await Pt(e),n=nt(t,{parentElement:t,...e});if(e.delay>0){const{sleep:r}=await pe(()=>import("./sleep.b2c92b69.js"),[]);await r(e.delay),t.classList.remove("delay")}l(n,{parentElement:t,...e})};function He(t){let e,l,n,r,i;const s=t[11].default,o=at(s,t,t[10],null);return{c(){e=v("div"),o&&o.c(),a(e,"class","typewriter-container svelte-12nvf3j"),V(e,"cursor",t[0]),V(e,"delay",t[1].delay>0)},m(u,f){C(u,e,f),o&&o.m(e,null),n=!0,r||(i=gt(l=Mt.call(null,e,t[1])),r=!0)},p(u,f){o&&o.p&&(!n||f&1024)&&ft(o,s,u,u[10],n?ct(s,u[10],f,null):ut(u[10]),null),l&&Ce(l.update)&&f&2&&l.update.call(null,u[1]),f&1&&V(e,"cursor",u[0]),f&2&&V(e,"delay",u[1].delay>0)},i(u){n||(k(o,u),n=!0)},o(u){S(o,u),n=!1},d(u){u&&x(e),o&&o.d(u),r=!1,i()}}}function At(t){let e,l=t[1],n,r,i=He(t);return{c(){e=b(),i.c(),n=Ze()},m(s,o){C(s,e,o),i.m(s,o),C(s,n,o),r=!0},p(s,[o]){o&2&&I(l,l=s[1])?(tt(),S(i,1,1,N),lt(),i=He(s),i.c(),k(i,1),i.m(n.parentNode,n)):i.p(s,o)},i(s){r||(k(i),r=!0)},o(s){S(i),r=!1},d(s){s&&x(e),s&&x(n),i.d(s)}}}function Tt(t,e,l){let n,{$$slots:r={},$$scope:i}=e,{interval:s=30}=e,{cascade:o=!1}=e,{loop:u=!1}=e,{loopRandom:f=!1}=e,{scramble:h=!1}=e,{scrambleSlowdown:c=!!h}=e,{cursor:m=!0}=e,{delay:E=0}=e,{unwriteInterval:y=!1}=e;const L=pt();return t.$$set=_=>{"interval"in _&&l(2,s=_.interval),"cascade"in _&&l(3,o=_.cascade),"loop"in _&&l(4,u=_.loop),"loopRandom"in _&&l(5,f=_.loopRandom),"scramble"in _&&l(6,h=_.scramble),"scrambleSlowdown"in _&&l(7,c=_.scrambleSlowdown),"cursor"in _&&l(0,m=_.cursor),"delay"in _&&l(8,E=_.delay),"unwriteInterval"in _&&l(9,y=_.unwriteInterval),"$$scope"in _&&l(10,i=_.$$scope)},t.$$.update=()=>{t.$$.dirty&1021&&l(1,n={interval:s,cascade:o,loop:u,loopRandom:f,scramble:h,scrambleSlowdown:c,cursor:m,delay:E,dispatch:L,unwriteInterval:y})},[m,n,s,o,u,f,h,c,E,y,i,r]}class Rt extends H{constructor(e){super(),B(this,e,Tt,At,I,{interval:2,cascade:3,loop:4,loopRandom:5,scramble:6,scrambleSlowdown:7,cursor:0,delay:8,unwriteInterval:9})}}function It(t){let e,l;return{c(){e=v("p"),l=F(t[1]),a(e,"class","svelte-1qyamt2")},m(n,r){C(n,e,r),d(e,l)},p(n,r){r&2&&Se(l,n[1])},d(n){n&&x(e)}}}function Vt(t){let e,l,n,r,i,s,o,u,f,h;return i=new Rt({props:{$$slots:{default:[It]},$$scope:{ctx:t}}}),{c(){e=v("div"),l=v("h1"),n=F(t[0]),r=b(),O(i.$$.fragment),s=b(),o=v("div"),u=v("a"),f=F("open"),a(l,"class","svelte-1qyamt2"),a(u,"href",t[2]),a(u,"target","_blank"),a(u,"class","svelte-1qyamt2"),a(o,"class","open-project svelte-1qyamt2"),a(e,"class","project svelte-1qyamt2")},m(c,m){C(c,e,m),d(e,l),d(l,n),d(e,r),q(i,e,null),d(e,s),d(e,o),d(o,u),d(u,f),h=!0},p(c,[m]){(!h||m&1)&&Se(n,c[0]);const E={};m&10&&(E.$$scope={dirty:m,ctx:c}),i.$set(E),(!h||m&4)&&a(u,"href",c[2])},i(c){h||(k(i.$$.fragment,c),h=!0)},o(c){S(i.$$.fragment,c),h=!1},d(c){c&&x(e),z(i)}}}function Ft(t,e,l){let{title:n}=e,{description:r}=e,{url:i}=e;return t.$$set=s=>{"title"in s&&l(0,n=s.title),"description"in s&&l(1,r=s.description),"url"in s&&l(2,i=s.url)},[n,r,i]}class be extends H{constructor(e){super(),B(this,e,Ft,Vt,I,{title:0,description:1,url:2})}}function Bt(t){let e,l,n,r;return{c(){e=v("div"),l=v("a"),n=v("img"),ve(n.src,r=t[1])||a(n,"src",r),a(n,"alt","Skill"),a(n,"class","svelte-63lyib"),a(l,"href",t[0]),a(l,"target","_blank"),a(l,"rel","noreferrer"),a(e,"class","skill svelte-63lyib")},m(i,s){C(i,e,s),d(e,l),d(l,n)},p(i,[s]){s&2&&!ve(n.src,r=i[1])&&a(n,"src",r),s&1&&a(l,"href",i[0])},i:N,o:N,d(i){i&&x(e)}}}function Ht(t,e,l){let{url:n}=e,{image:r}=e;return t.$$set=i=>{"url"in i&&l(0,n=i.url),"image"in i&&l(1,r=i.image)},[n,r]}class Yt extends H{constructor(e){super(),B(this,e,Ht,Bt,I,{url:0,image:1})}}const ge=parseFloat;function je(t,e=";"){let l;if(Array.isArray(t))l=t.filter(n=>n);else{l=[];for(const n in t)t[n]&&l.push(`${n}:${t[n]}`)}return l.join(e)}function Ut(t,e,l,n){let r,i;const s="1em";let o,u,f,h="-.125em";const c="visible";return n&&(f="center",i="1.25em"),l&&(r=l),e&&(e=="lg"?(u="1.33333em",o=".75em",h="-.225em"):e=="xs"?u=".75em":e=="sm"?u=".875em":u=e.replace("x","em")),je([je({float:r,width:i,height:s,"line-height":o,"font-size":u,"text-align":f,"vertical-align":h,"transform-origin":"center",overflow:c}),t])}function Dt(t,e,l,n,r,i=1,s="",o=""){let u=1,f=1;return r&&(r=="horizontal"?u=-1:r=="vertical"?f=-1:u=f=-1),je([`translate(${ge(e)*i}${s},${ge(l)*i}${s})`,`scale(${u*ge(t)},${f*ge(t)})`,n&&`rotate(${n}${o})`]," ")}function Ye(t){let e,l,n,r,i,s,o;function u(c,m){return typeof c[10][4]=="string"?Wt:Xt}let f=u(t),h=f(t);return{c(){e=K("svg"),l=K("g"),n=K("g"),h.c(),a(n,"transform",t[12]),a(l,"transform",r="translate("+t[10][0]/2+" "+t[10][1]/2+")"),a(l,"transform-origin",i=t[10][0]/4+" 0"),a(e,"id",t[1]),a(e,"class",s="svelte-fa "+t[0]+" svelte-1cj2gr0"),a(e,"style",t[11]),a(e,"viewBox",o="0 0 "+t[10][0]+" "+t[10][1]),a(e,"aria-hidden","true"),a(e,"role","img"),a(e,"xmlns","http://www.w3.org/2000/svg"),V(e,"pulse",t[4]),V(e,"spin",t[3])},m(c,m){C(c,e,m),d(e,l),d(l,n),h.m(n,null)},p(c,m){f===(f=u(c))&&h?h.p(c,m):(h.d(1),h=f(c),h&&(h.c(),h.m(n,null))),m&4096&&a(n,"transform",c[12]),m&1024&&r!==(r="translate("+c[10][0]/2+" "+c[10][1]/2+")")&&a(l,"transform",r),m&1024&&i!==(i=c[10][0]/4+" 0")&&a(l,"transform-origin",i),m&2&&a(e,"id",c[1]),m&1&&s!==(s="svelte-fa "+c[0]+" svelte-1cj2gr0")&&a(e,"class",s),m&2048&&a(e,"style",c[11]),m&1024&&o!==(o="0 0 "+c[10][0]+" "+c[10][1])&&a(e,"viewBox",o),m&17&&V(e,"pulse",c[4]),m&9&&V(e,"spin",c[3])},d(c){c&&x(e),h.d()}}}function Xt(t){let e,l,n,r,i,s,o,u,f,h;return{c(){e=K("path"),s=K("path"),a(e,"d",l=t[10][4][0]),a(e,"fill",n=t[6]||t[2]||"currentColor"),a(e,"fill-opacity",r=t[9]!=!1?t[7]:t[8]),a(e,"transform",i="translate("+t[10][0]/-2+" "+t[10][1]/-2+")"),a(s,"d",o=t[10][4][1]),a(s,"fill",u=t[5]||t[2]||"currentColor"),a(s,"fill-opacity",f=t[9]!=!1?t[8]:t[7]),a(s,"transform",h="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(c,m){C(c,e,m),C(c,s,m)},p(c,m){m&1024&&l!==(l=c[10][4][0])&&a(e,"d",l),m&68&&n!==(n=c[6]||c[2]||"currentColor")&&a(e,"fill",n),m&896&&r!==(r=c[9]!=!1?c[7]:c[8])&&a(e,"fill-opacity",r),m&1024&&i!==(i="translate("+c[10][0]/-2+" "+c[10][1]/-2+")")&&a(e,"transform",i),m&1024&&o!==(o=c[10][4][1])&&a(s,"d",o),m&36&&u!==(u=c[5]||c[2]||"currentColor")&&a(s,"fill",u),m&896&&f!==(f=c[9]!=!1?c[8]:c[7])&&a(s,"fill-opacity",f),m&1024&&h!==(h="translate("+c[10][0]/-2+" "+c[10][1]/-2+")")&&a(s,"transform",h)},d(c){c&&x(e),c&&x(s)}}}function Wt(t){let e,l,n,r;return{c(){e=K("path"),a(e,"d",l=t[10][4]),a(e,"fill",n=t[2]||t[5]||"currentColor"),a(e,"transform",r="translate("+t[10][0]/-2+" "+t[10][1]/-2+")")},m(i,s){C(i,e,s)},p(i,s){s&1024&&l!==(l=i[10][4])&&a(e,"d",l),s&36&&n!==(n=i[2]||i[5]||"currentColor")&&a(e,"fill",n),s&1024&&r!==(r="translate("+i[10][0]/-2+" "+i[10][1]/-2+")")&&a(e,"transform",r)},d(i){i&&x(e)}}}function Gt(t){let e,l=t[10][4]&&Ye(t);return{c(){l&&l.c(),e=Ze()},m(n,r){l&&l.m(n,r),C(n,e,r)},p(n,[r]){n[10][4]?l?l.p(n,r):(l=Ye(n),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:N,o:N,d(n){l&&l.d(n),n&&x(e)}}}function Jt(t,e,l){let{class:n=""}=e,{id:r=""}=e,{style:i=""}=e,{icon:s}=e,{size:o=""}=e,{color:u=""}=e,{fw:f=!1}=e,{pull:h=""}=e,{scale:c=1}=e,{translateX:m=0}=e,{translateY:E=0}=e,{rotate:y=""}=e,{flip:L=!1}=e,{spin:_=!1}=e,{pulse:A=!1}=e,{primaryColor:Q=""}=e,{secondaryColor:T=""}=e,{primaryOpacity:Z=1}=e,{secondaryOpacity:R=.4}=e,{swapOpacity:$=!1}=e,Y,ee,M;return t.$$set=g=>{"class"in g&&l(0,n=g.class),"id"in g&&l(1,r=g.id),"style"in g&&l(13,i=g.style),"icon"in g&&l(14,s=g.icon),"size"in g&&l(15,o=g.size),"color"in g&&l(2,u=g.color),"fw"in g&&l(16,f=g.fw),"pull"in g&&l(17,h=g.pull),"scale"in g&&l(18,c=g.scale),"translateX"in g&&l(19,m=g.translateX),"translateY"in g&&l(20,E=g.translateY),"rotate"in g&&l(21,y=g.rotate),"flip"in g&&l(22,L=g.flip),"spin"in g&&l(3,_=g.spin),"pulse"in g&&l(4,A=g.pulse),"primaryColor"in g&&l(5,Q=g.primaryColor),"secondaryColor"in g&&l(6,T=g.secondaryColor),"primaryOpacity"in g&&l(7,Z=g.primaryOpacity),"secondaryOpacity"in g&&l(8,R=g.secondaryOpacity),"swapOpacity"in g&&l(9,$=g.swapOpacity)},t.$$.update=()=>{t.$$.dirty&16384&&l(10,Y=s&&s.icon||[0,0,"",[],""]),t.$$.dirty&237568&&l(11,ee=Ut(i,o,h,f)),t.$$.dirty&8126464&&l(12,M=Dt(c,m,E,y,L,512))},[n,r,u,_,A,Q,T,Z,R,$,Y,ee,M,i,s,o,f,h,c,m,E,y,L]}class Kt extends H{constructor(e){super(),B(this,e,Jt,Gt,I,{class:0,id:1,style:13,icon:14,size:15,color:2,fw:16,pull:17,scale:18,translateX:19,translateY:20,rotate:21,flip:22,spin:3,pulse:4,primaryColor:5,secondaryColor:6,primaryOpacity:7,secondaryOpacity:8,swapOpacity:9})}}var Qt=Kt;function Zt(t){let e,l,n,r;return n=new Qt({props:{icon:t[1]}}),{c(){e=v("div"),l=v("a"),O(n.$$.fragment),a(l,"href",t[0]),a(l,"target","_blank"),a(l,"rel","noreferrer"),a(l,"class","svelte-1a6txvs"),a(e,"class","social svelte-1a6txvs")},m(i,s){C(i,e,s),d(e,l),q(n,l,null),r=!0},p(i,[s]){const o={};s&2&&(o.icon=i[1]),n.$set(o),(!r||s&1)&&a(l,"href",i[0])},i(i){r||(k(n.$$.fragment,i),r=!0)},o(i){S(n.$$.fragment,i),r=!1},d(i){i&&x(e),z(n)}}}function $t(t,e,l){let{url:n}=e,{icon:r}=e;return t.$$set=i=>{"url"in i&&l(0,n=i.url),"icon"in i&&l(1,r=i.icon)},[n,r]}class me extends H{constructor(e){super(),B(this,e,$t,Zt,I,{url:0,icon:1})}}function Ue(t,e,l){const n=t.slice();return n[1]=e[l],n}function De(t){let e;return{c(){e=v("p"),e.textContent="loading..."},m(l,n){C(l,e,n)},p:N,d(l){l&&x(e)}}}function Xe(t){let e,l;return{c(){e=v("img"),ve(e.src,l=t[1])||a(e,"src",l),a(e,"alt","pic"),a(e,"class","svelte-1h3mse5")},m(n,r){C(n,e,r)},p(n,r){r&1&&!ve(e.src,l=n[1])&&a(e,"src",l)},d(n){n&&x(e)}}}function el(t){let e,l,n,r=t[0],i=[];for(let o=0;o<r.length;o+=1)i[o]=Xe(Ue(t,r,o));let s=null;return r.length||(s=De()),{c(){e=v("div");for(let o=0;o<i.length;o+=1)i[o].c();s&&s.c(),l=b(),n=v("div"),n.innerHTML='<a href="https://unsplash.com/@ssebastianoo" target="_blank"><img src="./Unsplash_Logo_Full_White.png" alt="Unsplash" class="svelte-1h3mse5"/></a>',a(e,"class","pics svelte-1h3mse5"),a(n,"class","unsplash svelte-1h3mse5")},m(o,u){C(o,e,u);for(let f=0;f<i.length;f+=1)i[f].m(e,null);s&&s.m(e,null),C(o,l,u),C(o,n,u)},p(o,[u]){if(u&1){r=o[0];let f;for(f=0;f<r.length;f+=1){const h=Ue(o,r,f);i[f]?i[f].p(h,u):(i[f]=Xe(h),i[f].c(),i[f].m(e,null))}for(;f<i.length;f+=1)i[f].d(1);i.length=r.length,!r.length&&s?s.p(o,u):r.length?s&&(s.d(1),s=null):(s=De(),s.c(),s.m(e,null))}},i:N,o:N,d(o){o&&x(e),Qe(i,o),s&&s.d(),o&&x(l),o&&x(n)}}}function tl(t,e,l){let n=[];return ht(async()=>{const r=await fetch("https://xs3lmn.deta.dev/");l(0,n=(await r.json()).pics.slice(0,6))}),[n]}class ll extends H{constructor(e){super(),B(this,e,tl,el,I,{})}}function We(t,e,l){const n=t.slice();return n[1]=e[l],n[3]=l,n}function Ge(t){let e,l;return e=new Yt({props:{image:t[1].image,url:t[1].url}}),{c(){O(e.$$.fragment)},m(n,r){q(e,n,r),l=!0},p:N,i(n){l||(k(e.$$.fragment,n),l=!0)},o(n){S(e.$$.fragment,n),l=!1},d(n){z(e,n)}}}function nl(t){let e,l,n,r,i,s,o,u,f,h,c,m,E,y,L,_,A,Q,T,Z,R,$,Y,ee,M,g,Ee,X,qe,W,ze,se,Ne,te,Oe,oe,Le,G,ae,Pe,J,Me,_e,ce;f=new Ve({props:{color:"#f7e018",text:"javascript"}}),c=new Ve({props:{color:"#3474a7",text:"python"}}),L=new me({props:{url:"https://twitter.com/ssebastianoo",icon:jt}}),A=new me({props:{url:"https://github.com/ssebastianoo",icon:bt}}),T=new me({props:{url:"https://instagram.com/sbstngrtt",icon:kt}}),R=new me({props:{url:"https://www.linkedin.com/in/sebastianogirotto/",icon:xt}}),g=new be({props:{title:"guess the element",description:"guess the random element from the periodic table",url:"https://seba.gq/GuessTheElement"}}),X=new be({props:{title:"venice freestyle lab",description:"website for venice freestyle lab",url:"https://preview.venicefreestyle.com"}}),W=new be({props:{title:"portfolio",description:"portfolio for a product designer",url:"https://francescadiana.pages.dev/"}});let U=t[0],w=[];for(let p=0;p<U.length;p+=1)w[p]=Ge(We(t,U,p));const rt=p=>S(w[p],1,1,()=>{w[p]=null});return J=new ll({}),{c(){e=v("main"),l=v("div"),n=v("div"),n.innerHTML='<img src="./logo.png" alt="seb" class="svelte-15gggti"/>',r=b(),i=v("div"),s=v("h2"),s.textContent="im seb",o=b(),u=v("p"),O(f.$$.fragment),h=F(" && "),O(c.$$.fragment),m=F(" developer"),E=b(),y=v("div"),O(L.$$.fragment),_=b(),O(A.$$.fragment),Q=b(),O(T.$$.fragment),Z=b(),O(R.$$.fragment),$=b(),Y=v("h2"),Y.textContent="projects",ee=b(),M=v("div"),O(g.$$.fragment),Ee=b(),O(X.$$.fragment),qe=b(),O(W.$$.fragment),ze=b(),se=v("h2"),se.textContent="skills",Ne=b(),te=v("div");for(let p=0;p<w.length;p+=1)w[p].c();Oe=b(),oe=v("h2"),oe.textContent="who am i",Le=b(),G=v("div"),ae=v("p"),ae.textContent=`hello, i'm a still-learning web developer from italy, after some years of python developing i
			decided to focus on web development, learning new technologies like svelte and react. besides
			programming, i'm a photo and video student, here are some of my shots`,Pe=b(),O(J.$$.fragment),Me=b(),_e=v("div"),a(n,"class","seb-pic svelte-15gggti"),a(i,"class","info-text svelte-15gggti"),a(l,"class","info svelte-15gggti"),a(y,"class","socials svelte-15gggti"),a(Y,"class","title svelte-15gggti"),a(M,"class","projects svelte-15gggti"),a(se,"class","title svelte-15gggti"),a(te,"class","skills svelte-15gggti"),a(oe,"class","title svelte-15gggti"),a(ae,"class","about-description svelte-15gggti"),a(G,"class","about svelte-15gggti"),a(_e,"class","footer svelte-15gggti")},m(p,P){C(p,e,P),d(e,l),d(l,n),d(l,r),d(l,i),d(i,s),d(i,o),d(i,u),q(f,u,null),d(u,h),q(c,u,null),d(u,m),d(e,E),d(e,y),q(L,y,null),d(y,_),q(A,y,null),d(y,Q),q(T,y,null),d(y,Z),q(R,y,null),d(e,$),d(e,Y),d(e,ee),d(e,M),q(g,M,null),d(M,Ee),q(X,M,null),d(M,qe),q(W,M,null),d(e,ze),d(e,se),d(e,Ne),d(e,te);for(let j=0;j<w.length;j+=1)w[j].m(te,null);d(e,Oe),d(e,oe),d(e,Le),d(e,G),d(G,ae),d(G,Pe),q(J,G,null),d(e,Me),d(e,_e),ce=!0},p(p,[P]){if(P&1){U=p[0];let j;for(j=0;j<U.length;j+=1){const Ae=We(p,U,j);w[j]?(w[j].p(Ae,P),k(w[j],1)):(w[j]=Ge(Ae),w[j].c(),k(w[j],1),w[j].m(te,null))}for(tt(),j=U.length;j<w.length;j+=1)rt(j);lt()}},i(p){if(!ce){k(f.$$.fragment,p),k(c.$$.fragment,p),k(L.$$.fragment,p),k(A.$$.fragment,p),k(T.$$.fragment,p),k(R.$$.fragment,p),k(g.$$.fragment,p),k(X.$$.fragment,p),k(W.$$.fragment,p);for(let P=0;P<U.length;P+=1)k(w[P]);k(J.$$.fragment,p),ce=!0}},o(p){S(f.$$.fragment,p),S(c.$$.fragment,p),S(L.$$.fragment,p),S(A.$$.fragment,p),S(T.$$.fragment,p),S(R.$$.fragment,p),S(g.$$.fragment,p),S(X.$$.fragment,p),S(W.$$.fragment,p),w=w.filter(Boolean);for(let P=0;P<w.length;P+=1)S(w[P]);S(J.$$.fragment,p),ce=!1},d(p){p&&x(e),z(f),z(c),z(L),z(A),z(T),z(R),z(g),z(X),z(W),Qe(w,p),z(J)}}}function rl(t){return[[{image:"https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png",url:"https://www.w3schools.com/html/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/512px-CSS3_logo.svg.png",url:"https://www.w3schools.com/css/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",url:"https://reactjs.org/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png",url:"https://nextjs.org/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1200px-Sass_Logo_Color.svg.png",url:"https://sass-lang.com/"},{image:"https://www.gstatic.com/devrel-devsite/prod/v2325d8c952b9b608081f2b039989eacb0148117feedf74c3efc58771dfb973db/firebase/images/touchicon-180.png",url:"https://firebase.google.com/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",url:"https://www.python.org/"},{image:"https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",url:"https://git-scm.com/"},{image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",url:"https://expressjs.com/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",url:"https://nodejs.org/"},{image:"https://www.corsinvest.it/wp-content/uploads/2019/10/mysql-icon-3.png",url:"https://www.mysql.com/"},{image:"https://w.namu.la/s/bbde860dbfce579361e8798eae0e121c552405da431c48ba628ae113ee5a400122e79799cf7133364839758121c40b04aaba1b0dadfd478d82fb95af70b79c9fb99265261ca690ee6a41d8343fcc273a",url:"https://discordpy.readthedocs.io/en/stable/"},{image:"https://upload.wikimedia.org/wikipedia/commons/9/96/Socket-io.svg",url:"https://socket.io/"},{image:"https://flask-training-courses.uk/images/flask-logo.png",url:"https://flask.palletsprojects.com/"},{image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png",url:"https://svelte.dev/"}]]}class il extends H{constructor(e){super(),B(this,e,rl,nl,I,{})}}new il({target:document.getElementById("app")});export{pe as _,Ot as r};
