(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{86:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return i})),a.d(n,"metadata",(function(){return o})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return s}));var r=a(3),t=a(7),c=(a(0),a(99)),i={id:"learn-docker",title:"Menggunakan Docker",sidebar_label:"Docker"},o={unversionedId:"learn/learn-docker",id:"learn/learn-docker",isDocsHomePage:!1,title:"Menggunakan Docker",description:"Cara tercepat menjalankan Nuchain node selain menggunakan prebuilt binary bisa menggunakan Docker.",source:"@site/docs/learn/learn-docker.md",sourceDirName:"learn",slug:"/learn/learn-docker",permalink:"/docs/learn/learn-docker",editUrl:"https://github.com/nusantarachain/wiki/edit/master/docs/learn/learn-docker.md",version:"current",sidebar_label:"Docker",frontMatter:{id:"learn-docker",title:"Menggunakan Docker",sidebar_label:"Docker"},sidebar:"tutorialSidebar",previous:{title:"Menjadi Validator",permalink:"/docs/learn/learn-become-validator"},next:{title:"Build",permalink:"/docs/build/build-intro"}},l=[],u={toc:l};function s(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,a,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Cara tercepat menjalankan Nuchain node selain menggunakan prebuilt binary bisa menggunakan Docker.\nBerikut adalah cara-cara menjalankan Nuchain Node menggunakan Docker."),Object(c.b)("p",null,"Pull latest Nuchain docker image:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ docker pull anvie/nuchain:latest-alpine\n")),Object(c.b)("p",null,"Menjalankan:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ docker run --rm \\\n  -v '/var/data/nuchain:/data' \\\n  -p '9933:9933' \\\n  -p '9944:9944' \\\n  -p '30333:30333' \\\n   --name nuchain anvie/nuchain:latest-alpine \\\n   nuchain --base-path=/data \\\n   --ws-external \\\n   --rpc-external \\\n   --rpc-methods=Unsafe\n")),Object(c.b)("p",null,"Apabila ingin menjalankan docker container sebagai servis bisa menggunakan konfigurasi systemd\nberikut:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"# Systemd service configuration for Nuchain docker container.\n# edit as you wish.\n\n[Unit]\nDescription=Nuchain Node Container\nAfter=docker.service\nRequires=docker.service\n\n[Service]\nType=simple\nRestart=always\nRestartSec=5\nStartLimitBurst=5\nLimitNOFILE=10000\nExecStartPre=-/usr/bin/docker stop nuchain\nExecStartPre=-/usr/bin/docker rm nuchain\nExecStart=/usr/bin/docker run --rm -v '/var/data:/data' -p '9933:9933' -p '9944:9944' -p '30333:30333' --name nuchain anvie/nuchain:latest-alpine nuchain --validator --base-path=/data --ws-external --rpc-external --rpc-methods=Unsafe\n\n[Install]\nWantedBy=multi-user.target\n")),Object(c.b)("p",null,"Simpan konfigurasi di atas ke file ",Object(c.b)("inlineCode",{parentName:"p"},"/etc/systemd/system/nuchain.service")," lalu ketikkan:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"$ systemctl systemctl daemon-reload\n$ systemctl enable nuchain\n$ systemctl start nuchain\n")))}s.isMDXComponent=!0},99:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return m}));var r=a(0),t=a.n(r);function c(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){c(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=t.a.createContext({}),s=function(e){var n=t.a.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},p=function(e){var n=s(e.components);return t.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},b=t.a.forwardRef((function(e,n){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),b=r,m=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return a?t.a.createElement(m,o(o({ref:n},u),{},{components:a})):t.a.createElement(m,o({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=b;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<c;u++)i[u]=a[u];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);