(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{145:function(a,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/add-account-2c924748c6b824a4dee00e2916be0b92.png"},77:function(a,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return u})),n.d(e,"toc",(function(){return l})),n.d(e,"default",(function(){return d}));var t=n(3),r=n(7),i=(n(0),n(99)),c={id:"learn-account",title:"Akun Nuchain",sidebar_label:"Akun"},u={unversionedId:"learn/learn-account",id:"learn/learn-account",isDocsHomePage:!1,title:"Akun Nuchain",description:"Akun pada Nuchain sebenarnya hanyalah sebuah simbol dari representasi kunci kirpto yang terdiri dari",source:"@site/docs/learn/learn-account.md",sourceDirName:"learn",slug:"/learn/learn-account",permalink:"/docs/learn/learn-account",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/learn-account.md",version:"current",sidebar_label:"Akun",frontMatter:{id:"learn-account",title:"Akun Nuchain",sidebar_label:"Akun"},sidebar:"tutorialSidebar",previous:{title:"Memulai Pertama",permalink:"/docs/learn/learn-main"},next:{title:"Apa itu Validator",permalink:"/docs/learn/learn-validator-basic"}},l=[{value:"Membuat Akun",id:"membuat-akun",children:[{value:"Menggunakan Dashboard",id:"menggunakan-dashboard",children:[]},{value:"Menggunakan CLI",id:"menggunakan-cli",children:[]}]}],b={toc:l};function d(a){var e=a.components,c=Object(r.a)(a,["components"]);return Object(i.b)("wrapper",Object(t.a)({},b,c,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Akun pada Nuchain sebenarnya hanyalah sebuah simbol dari representasi kunci kirpto yang terdiri dari\nkunci publik dan kunci rahasia. Kunci publik digunakan sebagai identifikasi akun di dalam jaringan\ndan kunci rahasia digunakan untuk mengakses sumber daya di jaringan atas nama akun kita."),Object(i.b)("p",null,"Membuat akun di Nuchain sangat mudah, tidak perlu konfirmasi email seperti pada layanan terpusat\npada umumnya. Yang diperlukan hanyalah menggenerasikan pasangan kunci kripto, dan semua itu bisa\ndilakukan di komputer lokal tanpa perlu koneksi internet sama sekali."),Object(i.b)("h2",{id:"membuat-akun"},"Membuat Akun"),Object(i.b)("p",null,"Ada beberapa cara dalam membuat akun di Nuchain:"),Object(i.b)("h3",{id:"menggunakan-dashboard"},"Menggunakan Dashboard"),Object(i.b)("p",null,"Menggunakan dashboard adalah cara paling mudah dalam membuat pasangan kunci kripto. Berikut\nlangkah-langkahnya:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Buka ",Object(i.b)("a",{parentName:"p",href:"https://dashboard.nuchain.network"},"Dashboard Nuchain"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Buka tab ",Object(i.b)("inlineCode",{parentName:"p"},"Account")," klik tombol ",Object(i.b)("inlineCode",{parentName:"p"},"+ Add acocunt"),", di awal Anda akan langsung mendapatkan ",Object(i.b)("em",{parentName:"p"},"mnemonic\nseed")," yang digenerasikan secara otomatis oleh program, Anda perlu menyimpan dan merahasiakan\n",Object(i.b)("em",{parentName:"p"},"mnemonic seed")," ini karena bisa digunakan untuk me-",Object(i.b)("em",{parentName:"p"},"recovery")," akun Anda apabila Anda lupa kata\nkunci atau kehilangan ",Object(i.b)("em",{parentName:"p"},"json"),"-nya. Dan pastikan dicatat di tempat yang aman dan jangan sampai\nhilang."),Object(i.b)("p",{parentName:"li"},Object(i.b)("img",{alt:"Add Account",src:n(145).default})),Object(i.b)("div",{parentName:"li",className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Jangan gunakan mnemonic seeds pada contoh akun pada gambar di atas.")),Object(i.b)("div",{parentName:"div",className:"admonition-content"}))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"klik ",Object(i.b)("strong",{parentName:"p"},"I have saved my mnemonic seed safely")," dan klik tombol ",Object(i.b)("strong",{parentName:"p"},"Next"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Pada halaman selanjutnya isi nama yang Anda inginkan, kata kunci dan ",Object(i.b)("strong",{parentName:"p"},"Next"),".")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Selesai Anda akan diberikan file ",Object(i.b)("em",{parentName:"p"},"json")," yang bisa digunakan untuk ",Object(i.b)("em",{parentName:"p"},"import")," akun ke platform\nlainnya, seperti mobile App dll."))),Object(i.b)("h3",{id:"menggunakan-cli"},"Menggunakan CLI"),Object(i.b)("p",null,"Membuat pasangan kunci kripto menggunakan CLI adalah cara paling aman."),Object(i.b)("p",null,"Yang Anda perlukan hanya program Nuchain, Anda bisa mendapatkannya dengan cara mengunduh dari\nhalaman ",Object(i.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/nuchain/releases"},"releases"),"."),Object(i.b)("p",null,"Kemudian pada terminal ketikkan:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"./nuchain key generate\n")),Object(i.b)("p",null,"Maka akan muncul output kurang lebih seperti berikut:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-bash"},"Secret phrase `shoulder lizard sea lion eye dignity current major clutch call antenna planet` is account:\n  Secret seed:      0x9910672e399e49370e1493c2b6aef855c3a7a7dd2fc1f9463b97b29710ba3ffb\n  Public key (hex): 0x74d0deecd560ecc66607065574534daefa067df4fbd75363f741ae5ae8de1d6b\n  Account ID:       0x74d0deecd560ecc66607065574534daefa067df4fbd75363f741ae5ae8de1d6b\n  SS58 Address:     5EhsTbb8Gf6aUGcE91cDrGNr163y5GXvU5vexdyVAevE2daC\n")),Object(i.b)("p",null,"Anda sudah memiliki SS58 Address tersebut sebagai representasi akun Anda di Nuchain."),Object(i.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Simpan ",Object(i.b)("strong",{parentName:"p"},"Secret phrase")," dengan aman dan jangan pernah ditunjukkan ke orang lain, karena siapapun\nyang memiliki ",Object(i.b)("strong",{parentName:"p"},"Secret phrase")," bisa menggunakannya untuk mengembalikan (recovery) akun Anda."),Object(i.b)("p",{parentName:"div"},"Mengapa Anda butuh ",Object(i.b)("strong",{parentName:"p"},"Secret phrase"),"? Karena manusia adalah tempatnya lupa, ketika Anda lupa kata\nkunci, maka hanya ",Object(i.b)("strong",{parentName:"p"},"Secret phrase")," inilah yang dapat membantu mengembalikan akunnya."))))}d.isMDXComponent=!0},99:function(a,e,n){"use strict";n.d(e,"a",(function(){return p})),n.d(e,"b",(function(){return s}));var t=n(0),r=n.n(t);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function c(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,t,r=function(a,e){if(null==a)return{};var n,t,r={},i=Object.keys(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||(r[n]=a[n]);return r}(a,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(a);for(t=0;t<i.length;t++)n=i[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(r[n]=a[n])}return r}var b=r.a.createContext({}),d=function(a){var e=r.a.useContext(b),n=e;return a&&(n="function"==typeof a?a(e):u(u({},e),a)),n},p=function(a){var e=d(a.components);return r.a.createElement(b.Provider,{value:e},a.children)},o={inlineCode:"code",wrapper:function(a){var e=a.children;return r.a.createElement(r.a.Fragment,{},e)}},m=r.a.forwardRef((function(a,e){var n=a.components,t=a.mdxType,i=a.originalType,c=a.parentName,b=l(a,["components","mdxType","originalType","parentName"]),p=d(n),m=t,s=p["".concat(c,".").concat(m)]||p[m]||o[m]||i;return n?r.a.createElement(s,u(u({ref:e},b),{},{components:n})):r.a.createElement(s,u({ref:e},b))}));function s(a,e){var n=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var i=n.length,c=new Array(i);c[0]=m;var u={};for(var l in e)hasOwnProperty.call(e,l)&&(u[l]=e[l]);u.originalType=a,u.mdxType="string"==typeof a?a:t,c[1]=u;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);