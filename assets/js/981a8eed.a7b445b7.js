(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{147:function(e,a,n){"use strict";n.r(a),a.default=n.p+"assets/images/nuchain-supply-chain-c95c544c0357d8018cf71db9da92c868.png"},83:function(e,a,n){"use strict";n.r(a),n.d(a,"frontMatter",(function(){return b})),n.d(a,"metadata",(function(){return p})),n.d(a,"toc",(function(){return c})),n.d(a,"default",(function(){return l}));var t=n(3),i=n(7),r=(n(0),n(99)),b={id:"supply-chain",title:"Rantai Pasok",sidebar_label:"Rantai Pasok"},p={unversionedId:"build/supply-chain",id:"build/supply-chain",isDocsHomePage:!1,title:"Rantai Pasok",description:"Nuchain mendukung fungsi-fungsi untuk membangun sistem rantai pasok (supply chain).",source:"@site/docs/build/supply-chain.md",sourceDirName:"build",slug:"/build/supply-chain",permalink:"/docs/build/supply-chain",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/build/supply-chain.md",version:"current",sidebar_label:"Rantai Pasok",frontMatter:{id:"supply-chain",title:"Rantai Pasok",sidebar_label:"Rantai Pasok"},sidebar:"tutorialSidebar",previous:{title:"Sertifikat Digital",permalink:"/docs/build/build-certificate"}},c=[{value:"Alur Kerja",id:"alur-kerja",children:[]},{value:"Verifikasi",id:"verifikasi",children:[]},{value:"Notifikasi",id:"notifikasi",children:[]},{value:"Demo",id:"demo",children:[]}],u={toc:c};function l(e){var a=e.components,b=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},u,b,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Nuchain mendukung fungsi-fungsi untuk membangun sistem rantai pasok (supply chain)."),Object(r.b)("p",null,"Kode untuk kebutuhan tersebut bisa ditemukan di dua modul berikut:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-registry"},"Product Registry"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/nusantarachain/nuchain/tree/supplychain/frame/product-tracking"},"Product Tracking"),".")),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Untuk bisa mengikuti materi ini pastikan Anda telah membaca bagian\n",Object(r.b)("a",{parentName:"p",href:"/docs/learn/learn-main"},"Getting Started")," dan ",Object(r.b)("a",{parentName:"p",href:"/docs/build/build-intro"},"Build"),"."))),Object(r.b)("p",null,"Sistem rantai pasok membutuhkan organisasi sebagai holder produk. Tentang organisasi dan bagaimana\ncara membuatnya bisa baca di bagian ",Object(r.b)("a",{parentName:"p",href:"/docs/build/build-organization"},"Organisasi"),"."),Object(r.b)("p",null,"Secara gambaran besar sistem rantai pasok di Nuchain dikontrol oleh organisasi. Organisasi bisa\ndigunakan untuk melakukan:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Registrasi produk."),Object(r.b)("li",{parentName:"ol"},"Registrasi ",Object(r.b)("em",{parentName:"li"},"tracking"),"."),Object(r.b)("li",{parentName:"ol"},"Memberikan akses ",Object(r.b)("em",{parentName:"li"},"tracker"),".")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Tracker"))," adalah entitas/individu yang bisa melakukan ",Object(r.b)("em",{parentName:"p"},"update")," status ",Object(r.b)("em",{parentName:"p"},"tracking")," atas ijin akses\ndari organisasi melalui ",Object(r.b)("a",{parentName:"p",href:"/docs/build/build-did"},"DIDs"),"."),Object(r.b)("p",null,Object(r.b)("img",{alt:"Nuchain Supply Chain",src:n(147).default})),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"(gambar: skema supply chain di Nuchain)")),Object(r.b)("p",null,"Setiap ",Object(r.b)("em",{parentName:"p"},"update")," yang dilakukan oleh ",Object(r.b)("em",{parentName:"p"},"tracker")," akan memunculkan ",Object(r.b)("em",{parentName:"p"},"event")," dan ",Object(r.b)("em",{parentName:"p"},"event")," akan diproses\noleh ",Object(r.b)("a",{parentName:"p",href:"/docs/general/glossary#off-chain-worker"},"off-chain worker")," untuk dibuatkan notifikasi kemudian\nnotifikasi akan di-",Object(r.b)("em",{parentName:"p"},"push")," melalui ",Object(r.b)("em",{parentName:"p"},"webhook"),"."),Object(r.b)("h2",{id:"alur-kerja"},"Alur Kerja"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Mendaftarkan produk"),", produk perlu didaftarkan terlebih dahulu dengan cara mengirim transaksi\nmenggunakan fungsi ",Object(r.b)("a",{parentName:"p",href:"/docs/learn/learn-extrinsic"},"ekstrinsik")," ",Object(r.b)("inlineCode",{parentName:"p"},"productRegistry.register")," dengan\nparameter:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - sebagai id produk, ini bebas bisa berupa numeric atau alpha-numeric, bisa juga GS1 GTIN\n(Global Trade Item Number) atau ASIN (Amazon Standard Identification Number)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"org_id")," - merupakan ID akun organisasi/instansi yang merepresentasikan kepemilikan atas\nproduk."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"props")," - list data yang berisi key value untuk menjelaskan produknya. Biasanya berisi\nsetidaknya SKU atau deskripsi dari produk. Bisa juga berisi informasi seperti kandungan, masa\nkadaluarsa, berat, asal pertanian, waktu panen, dll."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Mendaftarkan tracking"),", produk yang akan di-",Object(r.b)("em",{parentName:"p"},"track")," perlu didaftarkan terlebih dahulu\nmenggunakan fungsi ",Object(r.b)("a",{parentName:"p",href:"/docs/learn/learn-extrinsic"},"ekstrinsik")," ",Object(r.b)("inlineCode",{parentName:"p"},"productTracking.register")," dengan\nparameter:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - id ",Object(r.b)("em",{parentName:"li"},"tracking"),"-nya."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"org_id")," - merupakan ID dari organisasi/instansi yang merepresentasikan kepemilikan atas\nproduk."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"year")," - tahun inisiasi ",Object(r.b)("em",{parentName:"li"},"tracking"),', contoh "2021".'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"products")," - list/array ID dari produk yang akan didaftarkan."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Melakukan update status"),", memperbaharui (update) status setiap proses yang dilalui oleh produk\ndengan cara mengirimkan transaksi menggunakan fungsi ",Object(r.b)("a",{parentName:"p",href:"/docs/learn/learn-extrinsic"},"ekstrinsik"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"productTracking.updateStatus")," dengan parameter:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"id")," - ID kode tracking."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"status")," - (string) status yang akan diberikan."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"timestamp")," - timestamp dalam bentuk miliseconds."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"location")," - lokasi di mana ",Object(r.b)("em",{parentName:"li"},"tracking")," dilakukan."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"readings")," - informasi tambahan yang akan dimasukkan berkaitan dengan produknya.")))),Object(r.b)("p",null,"Untuk bisa melakukan ",Object(r.b)("em",{parentName:"p"},"update status")," maka ",Object(r.b)("em",{parentName:"p"},"caller")," harus terlebih dahulu memiliki akses sebagai\n",Object(r.b)("em",{parentName:"p"},"tracker")," yang diberikan oleh organisasi kepada akun yang ditunjuk. Cara memberikan akses bisa\nmenggunakan fungsi ekstrinsik ",Object(r.b)("inlineCode",{parentName:"p"},"did.createDelegate")," dengan tipe ",Object(r.b)("inlineCode",{parentName:"p"},"ProductTracker")," yang berada di modul\n",Object(r.b)("inlineCode",{parentName:"p"},"did"),". Akses ini bisa diberikan secara terbatas (dengan ",Object(r.b)("em",{parentName:"p"},"expritaion time"),") atau secara bebas (tanpa\n",Object(r.b)("em",{parentName:"p"},"expiration time"),")."),Object(r.b)("h2",{id:"verifikasi"},"Verifikasi"),Object(r.b)("p",null,"Untuk memverifikasi kita bisa melakukan ",Object(r.b)("em",{parentName:"p"},"query")," menggunakan fungsi ",Object(r.b)("em",{parentName:"p"},"query"),"\n",Object(r.b)("inlineCode",{parentName:"p"},"productTracking.tracking(ID)"),". Fungsi tersebut bisa digunakan untuk mendapatkan detail data\ntracking yang berisi ",Object(r.b)("em",{parentName:"p"},"metadata")," dan list ID produk yang disertakan."),Object(r.b)("p",null,"Sementara untuk mendapatkan ",Object(r.b)("em",{parentName:"p"},"event-event")," yang terjadi pada objek ",Object(r.b)("em",{parentName:"p"},"tracking")," bisa menggunakan fungsi\n",Object(r.b)("em",{parentName:"p"},"query")," ",Object(r.b)("inlineCode",{parentName:"p"},"productTracking.eventsOfTracking(ID)"),". Fungsi tersebut hanya mengembalikan ID dari event.\nUntuk mendapatkan detail event-nya bisa melakukan ",Object(r.b)("em",{parentName:"p"},"query")," menggunakan fungsi\n",Object(r.b)("inlineCode",{parentName:"p"},"productTracking.eventByIdx(IDX)"),"."),Object(r.b)("h2",{id:"notifikasi"},"Notifikasi"),Object(r.b)("p",null,"Nuchain dapat mengirimkan notifikasi secara ",Object(r.b)("em",{parentName:"p"},"real-time")," ke luar jaringan (",Object(r.b)("em",{parentName:"p"},"off-chain"),") menggunakan\n",Object(r.b)("em",{parentName:"p"},"Web hook")," untuk setiap ",Object(r.b)("em",{parentName:"p"},"event")," yang terjadi pada ",Object(r.b)("em",{parentName:"p"},"tracking")," di jaringan ",Object(r.b)("em",{parentName:"p"},"blockchain"),"."),Object(r.b)("p",null,"Nuchain menggunakan ",Object(r.b)("em",{parentName:"p"},"Off-chain Worker")," untuk keperluan ini."),Object(r.b)("h2",{id:"demo"},"Demo"),Object(r.b)("p",null,"Contoh kode demo penggunannya bisa ditemukan di Github\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/nusantarachain/supplychain-sample-py"},"supplychain-sample-py"),"."))}l.isMDXComponent=!0},99:function(e,a,n){"use strict";n.d(a,"a",(function(){return s})),n.d(a,"b",(function(){return d}));var t=n(0),i=n.n(t);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function b(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function p(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?b(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function c(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),l=function(e){var a=i.a.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):p(p({},a),e)),n},s=function(e){var a=l(e.components);return i.a.createElement(u.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return i.a.createElement(i.a.Fragment,{},a)}},o=i.a.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,b=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=l(n),o=t,d=s["".concat(b,".").concat(o)]||s[o]||m[o]||r;return n?i.a.createElement(d,p(p({ref:a},u),{},{components:n})):i.a.createElement(d,p({ref:a},u))}));function d(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,b=new Array(r);b[0]=o;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,b[1]=p;for(var u=2;u<r;u++)b[u]=n[u];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,n)}o.displayName="MDXCreateElement"}}]);