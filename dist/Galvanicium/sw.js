if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const l=e=>i(e,r),d={module:{uri:r},exports:t,require:l};s[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.57b1f418.css",revision:null},{url:"assets/index.a814a4f6.js",revision:null},{url:"assets/workbox-window.prod.es5.d2780aeb.js",revision:null},{url:"index.html",revision:"32440338403656d36a0be5b882736042"},{url:"logo/pwa-192x192.png",revision:"489f276cc8579b659e78d079d94dcfb6"},{url:"logo/pwa-512x512.png",revision:"f12e53dc480a2fbd8a9bc7449c306a4e"},{url:"manifest.webmanifest",revision:"39e25945399024dfbf62e0f5dc954f66"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));