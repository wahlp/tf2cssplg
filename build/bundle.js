var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function a(t){t.forEach(e)}function c(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e){t.appendChild(e)}function s(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function i(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function f(){return u(" ")}function d(t,e,n,a){return t.addEventListener(e,n,a),()=>t.removeEventListener(e,n,a)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e){t.value=null==e?"":e}let m;function h(t){m=t}const y=[],$=[],b=[],U=[],x=Promise.resolve();let q=!1;function _(t){b.push(t)}const k=new Set;let w=0;function S(){if(0!==w)return;const t=m;do{try{for(;w<y.length;){const t=y[w];w++,h(t),C(t.$$)}}catch(t){throw y.length=0,w=0,t}for(h(null),y.length=0,w=0;$.length;)$.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];k.has(e)||(k.add(e),e())}b.length=0}while(y.length);for(;U.length;)U.pop()();q=!1,k.clear(),h(t)}function C(t){if(null!==t.fragment){t.update(),a(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const E=new Set;let j;function D(t,e){t&&t.i&&(E.delete(t),t.i(e))}function A(t,n,o,r){const{fragment:s,after_update:l}=t.$$;s&&s.m(n,o),r||_((()=>{const n=t.$$.on_mount.map(e).filter(c);t.$$.on_destroy?t.$$.on_destroy.push(...n):a(n),t.$$.on_mount=[]})),l.forEach(_)}function N(t,e){const n=t.$$;null!==n.fragment&&(a(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(y.push(t),q||(q=!0,x.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,c,o,r,s,i,u,f=[-1]){const d=m;h(e);const p=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:c.target||d.$$.root};u&&u(p.root);let v=!1;if(p.ctx=o?o(e,c.props||{},((t,n,...a)=>{const c=a.length?a[0]:n;return p.ctx&&s(p.ctx[t],p.ctx[t]=c)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](c),v&&T(e,t)),n})):[],p.update(),v=!0,a(p.before_update),p.fragment=!!r&&r(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();c.intro&&D(e.$$.fragment),A(e,c.target,c.anchor,c.customElement),S()}h(d)}class z{$destroy(){N(this,1),this.$destroy=t}$on(e,n){if(!c(n))return t;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const t=a.indexOf(n);-1!==t&&a.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(t){const e=BigInt("76561197960265728");return(BigInt(t)+e).toString()}const L='\nhostname: Valve Matchmaking Server (Hong Kong srcds1234-hkg56 #7)\nversion : 6986594/24 6986594 secure\nudp/ip  : 169.254.123.234:61736\nsteamid : [A:1:1234567901:23456] (78901234567890123)\naccount : not logged in  (No account specified)\nmap     : pl_pier at: 0 x, 0 y, 0 z\ntags    : hidden,payload,valve\nplayers : 19 humans, 0 bots (32 max)\nedicts  : 1235 used of 2048 max\n# userid name                uniqueid            connected ping loss state\n#   1147 "player1"           [U:1:123456789]     00:20     93   17   active\n#   1145 "player2"           [U:1:234567891]     01:06     62   0    active\n#   1142 "player3"           [U:1:123456789]     01:26     86   0    active\n#   1129 "player4"           [U:1:234567891]     02:33     78   0    active\n#   1130 "player5"           [U:1:123456789]     02:29     86   0    active\n#   1131 "player6"           [U:1:234567891]     02:29     93   0    active\n#   1132 "player7"           [U:1:123456789]     02:28     86   0    active\n#   1119 "player8"           [U:1:234567891]     05:16     82   0    active\n#   1133 "player9"           [U:1:123456789]     02:27     83   0    active\n#   1121 "player10"          [U:1:234567891]     05:15     65   0    active\n#   1146 "player11"          [U:1:123456789]     00:58     43   0    active\n#   1123 "player12"          [U:1:234567891]     05:14     105  18   active\n#   1124 "player13"          [U:1:123456789]     05:08     211  0    active\n#   1125 "player14"          [U:1:234567891]     05:00     80   0    active\n#   1148 "player15"          [U:1:123456789]     00:11     74   75   spawning\n#   1149 "player16"          [U:1:234567891]     00:04     679  77   spawning\n#   1136 "player17"          [U:1:123456789]     02:01     69   0    active\n#   1138 "player18"          [U:1:234567891]     01:56     1038 58   active\n#   1144 "player19"          [U:1:123456789]     01:10     68   0    active\n',M='\nhostname: Valve Matchmaking Server (Hong Kong srcds1234-hkg56 #7)\nversion : 6986594/24 6986594 secure\nudp/ip  : 169.254.200.190:53328\nsteamid : [A:1:1446477828:19552] (90155969194459140)\n#   2635 "abcde12345"        [U:1:123456789]    12:39      116    0 active\naccount : not logged in  (No account specified)\n#   2647 "asfasdr"           [U:1:234567891]    00:39       71    0 active\nmap     : pl_barnblitz at: 0 x, 0 y, 0 z\n#   2648 "ljh qert"          [U:1:123456789]      00:33       69    0 active\ntags    : hidden,increased_maxplayers,payload,valve\n#   2646 "fjkllfmem-"         [U:1:234567891]     01:55       92    0 active\nplayers : 20 humans, 0 bots (32 max)\n#   2649 "Afgvzxd"             [U:1:123456789]    00:32       67    0 active\nedicts  : 1325 used of 2048 max\n#   2657 "DasdSdfg"            [U:1:234567891]      00:01      429   42 spawning\n# userid name                uniqueid            connected ping loss state\n#   2651 "Sfa,msdnsf"        [U:1:123456789]     00:25      123    0 active\n#   2652 "dgfhdd"               [U:1:234567891]      00:24       40    0 active\n#   2620 "f  e q sfgdsf"     [U:1:123456789]    17:17      121    0 active\n#   2653 "Eghgfhtryt"           [U:1:234567891]     00:20      117   19 active\n#   2654 "oiljzxi4"           [U:1:123456789]     00:19       80   69 active\n#   2627 "podisg"              [U:1:234567891]    14:08       60    0 active\n#   2609 "xcvhj ioreut"      [U:1:123456789]     19:20      113    0 active\n#   2655 "ipoeurasd"        [U:1:234567891]     00:19      110   76 spawning\n#   2656 "sdfgbrew235"             [U:1:123456789]     00:09      151   76 spawning\n#   2612 "HJKFD hdfg UTYORWU" [U:1:234567891] 19:11       75    0 active\n#   2613 "lgjxcvgwads"         [U:1:123456789]    19:09       72    0 spawning\n#   2642 "t09uw4"              [U:1:234567891]    09:10       57    0 active\n#   2586 "3f89hr"           [U:1:123456789]    25:21       87    0 active\n#   2643 "7y98vf"           [U:1:234567891]     08:43      114    0 active\n';function O(t,e,n){const a=t.slice();return a[8]=e[n].name,a[9]=e[n].id3,a[10]=e[n].url,a}function B(t){let e,n,a,c,o,d,g,m,h,y,$,b,U,x=t[8]+"",q=t[9]+"",_=t[10]+"";return{c(){e=i("tr"),n=i("td"),a=u(x),c=f(),o=i("td"),d=u(q),g=f(),m=i("td"),h=i("div"),y=i("a"),$=u(_),U=f(),p(n,"class","svelte-1fdq4c7"),p(o,"class","svelte-1fdq4c7"),p(y,"href",b=t[10]),p(y,"target","_blank"),p(y,"rel","noreferrer"),p(y,"class","svelte-1fdq4c7"),p(h,"class","link-container svelte-1fdq4c7"),p(m,"class","svelte-1fdq4c7"),p(e,"class","svelte-1fdq4c7")},m(t,l){s(t,e,l),r(e,n),r(n,a),r(e,c),r(e,o),r(o,d),r(e,g),r(e,m),r(m,h),r(h,y),r(y,$),r(e,U)},p(t,e){2&e&&x!==(x=t[8]+"")&&v(a,x),2&e&&q!==(q=t[9]+"")&&v(d,q),2&e&&_!==(_=t[10]+"")&&v($,_),2&e&&b!==(b=t[10])&&p(y,"href",b)},d(t){t&&l(e)}}}function K(e){let n,c,o,u,v,m,h,y,$,b,U,x,q,_,k,w,S,C,E,j,D,A,N,T=e[1],I=[];for(let t=0;t<T.length;t+=1)I[t]=B(O(e,T,t));return{c(){n=i("div"),c=i("div"),o=i("form"),u=i("h1"),u.textContent="dump your console output here",v=f(),m=i("textarea"),h=f(),y=i("div"),$=i("button"),$.textContent="Show me an example",b=f(),U=i("button"),U.textContent="Ugly example",x=f(),q=i("button"),q.textContent="Clear",_=f(),k=i("button"),k.textContent="Submit",w=f(),S=i("div"),C=i("table"),E=i("thead"),E.innerHTML='<tr class="svelte-1fdq4c7"><th class="svelte-1fdq4c7">Name</th> \n          <th class="svelte-1fdq4c7">ID3</th> \n          <th class="svelte-1fdq4c7">URL</th></tr>',j=f(),D=i("tbody");for(let t=0;t<I.length;t+=1)I[t].c();p(m,"class","input svelte-1fdq4c7"),p(m,"spellcheck","false"),p($,"class","button button-example svelte-1fdq4c7"),p(U,"class","button button-example svelte-1fdq4c7"),p(q,"class","button button-clear svelte-1fdq4c7"),p(k,"class","button button-submit svelte-1fdq4c7"),p(k,"type","submit"),p(y,"class","button-container svelte-1fdq4c7"),p(o,"class","svelte-1fdq4c7"),p(c,"class","form-container svelte-1fdq4c7"),p(C,"class","svelte-1fdq4c7"),p(S,"class","table-container svelte-1fdq4c7"),p(n,"class","container svelte-1fdq4c7")},m(t,a){s(t,n,a),r(n,c),r(c,o),r(o,u),r(o,v),r(o,m),g(m,e[0]),r(o,h),r(o,y),r(y,$),r(y,b),r(y,U),r(y,x),r(y,q),r(y,_),r(y,k),r(n,w),r(n,S),r(S,C),r(C,E),r(C,j),r(C,D);for(let t=0;t<I.length;t+=1)I[t].m(D,null);var l;A||(N=[d(m,"input",e[7]),d(m,"input",e[2]),d($,"click",e[4]),d(U,"click",e[5]),d(q,"click",e[6]),d(o,"submit",(l=e[3],function(t){return t.preventDefault(),l.call(this,t)}))],A=!0)},p(t,[e]){if(1&e&&g(m,t[0]),2&e){let n;for(T=t[1],n=0;n<T.length;n+=1){const a=O(t,T,n);I[n]?I[n].p(a,e):(I[n]=B(a),I[n].c(),I[n].m(D,null))}for(;n<I.length;n+=1)I[n].d(1);I.length=T.length}},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(I,t),A=!1,a(N)}}}function R(t,e,n){let a=localStorage.getItem("inputText")||"",c=[];return[a,c,function(t){n(0,a=t.target.value),localStorage.setItem("inputText",a)},function(t){t.preventDefault(),n(1,c=function(t){const e=/"(.+)"\s+\[U:(\d+):(\d+)\]/g,n=[];let a;for(;a=e.exec(t);){const[,t,e,c]=a,o=`[U:${e}:${c}]`,r=`https://steamcommunity.com/profiles/${H(c)}/`;n.push({name:t,id3:o,url:r})}return n.sort(((t,e)=>t.name.localeCompare(e.name)))}(a))},function(t){t.preventDefault(),n(0,a=L)},function(t){t.preventDefault(),n(0,a=M)},function(t){t.preventDefault(),n(0,a=""),localStorage.removeItem("inputText")},function(){a=this.value,n(0,a)}]}class V extends z{constructor(t){super(),I(this,t,R,K,o,{})}}function F(e){let n,a,c;return a=new V({}),{c(){var t;n=i("main"),(t=a.$$.fragment)&&t.c()},m(t,e){s(t,n,e),A(a,n,null),c=!0},p:t,i(t){c||(D(a.$$.fragment,t),c=!0)},o(t){!function(t,e,n,a){if(t&&t.o){if(E.has(t))return;E.add(t),j.c.push((()=>{E.delete(t),a&&(n&&t.d(1),a())})),t.o(e)}else a&&a()}(a.$$.fragment,t),c=!1},d(t){t&&l(n),N(a)}}}return new class extends z{constructor(t){super(),I(this,t,null,F,o,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map