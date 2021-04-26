(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{90:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return l})),a.d(n,"metadata",(function(){return c})),a.d(n,"toc",(function(){return o})),a.d(n,"default",(function(){return b}));var t=a(3),r=a(7),i=(a(0),a(99)),l={id:"network",title:"Jaringan Nuchain",sidebar_label:"Jaringan"},c={unversionedId:"build/network",id:"build/network",isDocsHomePage:!1,title:"Jaringan Nuchain",description:"Di Nuchain ada ada dua jaringan: Mainnet dan",source:"@site/docs/build/network.md",sourceDirName:"build",slug:"/build/network",permalink:"/docs/build/network",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/docs/build/network.md",version:"current",sidebar_label:"Jaringan",frontMatter:{id:"network",title:"Jaringan Nuchain",sidebar_label:"Jaringan"},sidebar:"tutorialSidebar",previous:{title:"Build",permalink:"/docs/build/build-intro"},next:{title:"Decentralized Identifiers (DIDs)",permalink:"/docs/build/build-did"}},o=[{value:"Daftar Nodes",id:"daftar-nodes",children:[]},{value:"Lokal",id:"lokal",children:[]},{value:"Telemetry",id:"telemetry",children:[]}],u={toc:o};function b(e){var n=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},u,a,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Di Nuchain ada ada dua jaringan: ",Object(i.b)("a",{parentName:"p",href:"/docs/general/glossary#mainnet"},"Mainnet")," dan\n",Object(i.b)("a",{parentName:"p",href:"/docs/general/glossary#testnet"},"Testnet"),"."),Object(i.b)("p",null,"Mainnet adalah jaringan utama Nuchain, jaringan ini telah berjalan sejak bulan Februari tahun 2021.\nSementara Testnet adalah jaringan ujicoba yang biasanya digunakan oleh para pengembang untuk\nmembanun aplikasi di atas jaringan Nuchain."),Object(i.b)("p",null,"Baik jaringan Mainnet maupun Testnet berasal dari genesis yang sama:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"0x789d2c1f6bd2948577506b4fa65d8f7c5b821eacc8612d0c86ff6a20994e5649")),Object(i.b)("h2",{id:"daftar-nodes"},"Daftar Nodes"),Object(i.b)("p",null,"Dan berikut adalah daftar ",Object(i.b)("em",{parentName:"p"},"nodes")," yang dihosting oleh Rantai Nusantara Foundation:"),Object(i.b)("h4",{id:"mainnet"},"Mainnet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node-sg.nuchain.riset.tech")," (Singapura)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node-id.nuchain.riset.tech")," (Indonesia)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node-id2.nuchain.riset.tech")," (Indonesia)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"node-ind.nuchain.riset.tech")," (India)")),Object(i.b)("h4",{id:"testnet"},"Testnet"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"testnet.nuchain.riset.tech")," (Indonesia)")),Object(i.b)("h2",{id:"lokal"},"Lokal"),Object(i.b)("p",null,"Nuchain bisa juga dijalankan di jaringan intranet lokal tanpa perlu terhubung dengan jaringan utama\n(mainnet) maupun jaringan test (testnet). Jaringan lokal ini sangat membantu ketika kita ingin\nmencoba sistem secara terisolir dan dengan akun preset yang telah memiliki token."),Object(i.b)("p",null,"Untuk menjalankan Nuchain di jaringan lokal kita bisa menjalankan Nuchain dengan parameter ",Object(i.b)("inlineCode",{parentName:"p"},"--dev"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"./nuchain --dev\n")),Object(i.b)("p",null,"Apabila kita ingin ",Object(i.b)("em",{parentName:"p"},"storage"),"-nya bersifat temporer (hilang ketika restart), yang mana sangat\nbermanfaat ketika sedang mengembangkan modul Nuchain di lapisan ",Object(i.b)("em",{parentName:"p"},"runtime"),", maka Anda bisa\nmenjalankannya dengan penambahan parameter ",Object(i.b)("inlineCode",{parentName:"p"},"--tmp"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"./nuchain --dev --tmp\n")),Object(i.b)("h2",{id:"telemetry"},"Telemetry"),Object(i.b)("p",null,"Anda bisa memantau semua aktifitas jaringan Nuchain melalui ",Object(i.b)("em",{parentName:"p"},"telemetry")," di\n",Object(i.b)("a",{parentName:"p",href:"https://telemetry.nuchain.network/#/Nuchain"},"telemetry.nuchain.network"),"."))}b.isMDXComponent=!0},99:function(e,n,a){"use strict";a.d(n,"a",(function(){return d})),a.d(n,"b",(function(){return m}));var t=a(0),r=a.n(t);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),b=function(e){var n=r.a.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},d=function(e){var n=b(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=b(a),s=t,m=d["".concat(l,".").concat(s)]||d[s]||p[s]||i;return a?r.a.createElement(m,c(c({ref:n},u),{},{components:a})):r.a.createElement(m,c({ref:n},u))}));function m(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=s;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:t,l[1]=c;for(var u=2;u<i;u++)l[u]=a[u];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);