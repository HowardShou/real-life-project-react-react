(this["webpackJsonpreal-life-project-react"]=this["webpackJsonpreal-life-project-react"]||[]).push([[0],{107:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),o=n.n(c),r=n(15),i=n.n(r),l=(n(96),n(66)),s=n(5),u=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,164))})),O=Object(c.lazy)((function(){return Promise.resolve().then(n.bind(null,75))})),b=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,165))})),j=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,166))})),h=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,178))})),p=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(7)]).then(n.bind(null,177))})),d=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(12)]).then(n.bind(null,171))})),f=Object(c.lazy)((function(){return n.e(11).then(n.bind(null,174))})),m=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,175))})),x=[{path:s.a.HOME,childComponent:u,exact:!0,routes:[]},{path:s.a.DEMOS,childComponent:O,exact:!1,routes:[{path:s.a.DEMOS,childComponent:p,exact:!0,routes:[]},{path:s.a.CREDIT_CARD_FORM,childComponent:h,exact:!0,routes:[]},{path:s.a.TODOLIST,childComponent:j,exact:!0,routes:[]},{path:s.a.PHOTOS_FETCHER,childComponent:d,exact:!0,routes:[]},{path:s.a.PAGETITLE_TRANSFORMER,childComponent:f,exact:!0,routes:[]},{path:s.a.ONLINE_DEMOS,childComponent:m,exact:!0,routes:[]},{path:"*",childComponent:b}]},{path:"*",childComponent:b}],E=n(10),_=n(23),D=n(75),g=n(113),T=n(41),C=n.n(T),M=n(54),N=function(){var e=Object(M.a)(C.a.mark((function e(t,n){var a,c;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n&&Object.keys(n).length>0)){e.next=6;break}return e.next=3,fetch(t,n);case 3:a=e.sent,e.next=9;break;case 6:return e.next=8,fetch(t);case 8:a=e.sent;case 9:if(a.ok){e.next=16;break}return c=new Error("An error occurred while fetching the data."),e.next=13,a.json();case 13:throw c.info=e.sent,c.status=a.status,c;case 16:return e.abrupt("return",a.json());case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=n(140),k=n(139),L=n(133),I=n(20),S=n(134),v=n(141),R=n(136),F=n(137),w=n.p+"static/media/react.cc18e3dd.svg",A=n(68),B=n.n(A),P=n(30),H=n(132),z=n(71),G=n.n(z),U=n(73),W=n.n(U),J=n(70),q=n.n(J),K=n(69),Q=n.n(K),V=n(72),X=n.n(V),Y={color:"#fff"},Z=[{path:s.a.DEMOS,icon:Object(a.jsx)(Q.a,{style:Y}),isRouterLink:!0,title:"Home"},{path:s.a.ONLINE_DEMOS,icon:Object(a.jsx)(q.a,{style:Y}),isRouterLink:!0,title:"Online Demos"},{path:"https://github.com/HowardShou/real-life-project-react",title:"Repo",icon:Object(a.jsx)(G.a,{style:Y}),isRouterLink:!1},{path:"https://www.linkedin.com/in/%E5%93%81%E7%9A%93-%E5%A3%BD-6492b71a5/?locale=en_US",title:"profile",icon:Object(a.jsx)(X.a,{style:Y}),isRouterLink:!1},{path:"https://howardshou.github.io/real-life-project/index.html",title:"Legacy Portfolio",icon:Object(a.jsx)(W.a,{style:Y}),isRouterLink:!1}],$=Object(L.a)({titleContainer:{maxWidth:"170px"},title:{textDecoration:"none"},icons:{maxWidth:"190px"}}),ee=function(){var e=Object(P.a)(),t=Object(H.a)(e.breakpoints.down("xs")),n=$();return Object(a.jsxs)(g.a,{display:"flex",justifyContent:"space-between",alignItems:"center",bgcolor:"common.black",children:[Object(a.jsxs)(g.a,{display:"flex",alignItems:"center",children:[Object(a.jsx)(g.a,{component:"img",className:B.a.logo,src:w,alt:"logo"}),Object(a.jsx)(S.a,{variant:"h5",className:t?n.titleContainer:null,children:Object(a.jsx)(g.a,{color:"common.white",fontStyle:"italic",letterSpacing:1,component:_.b,to:s.a.HOME,className:n.title,children:"Howard's Demo Site"})})]}),Object(a.jsx)(g.a,{display:"flex",justifyContent:"flex-end",flexWrap:"wrap",className:t?n.icons:null,children:Z.map((function(e,t){var n=e.isRouterLink?{component:_.b,to:e.path}:{component:"a",href:e.path,target:"_blank"};return Object(a.jsx)(v.a,{TransitionComponent:R.a,TransitionProps:{timeout:600},title:e.title,children:Object(a.jsx)(F.a,Object(I.a)(Object(I.a)({rel:"noopener",color:"primary"},n),{},{children:e.icon}))},t)}))})]})},te=n(50),ne=n(135),ae=n(111),ce=n(138),oe=[{title:"Credit Card Form",path:s.a.CREDIT_CARD_FORM},{title:"ToDo List",path:s.a.TODOLIST},{title:"Photos Fetcher",path:s.a.PHOTOS_FETCHER},{title:"Page Title Transformer",path:s.a.PAGETITLE_TRANSFORMER},{title:"Other Online Demos",path:s.a.ONLINE_DEMOS}],re=Object(L.a)({btnGroup:{width:"80%"}}),ie=function(){var e=Object(c.useState)(!1),t=Object(te.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(!1),i=Object(te.a)(r,2),l=i[0],u=i[1],O=Object(E.g)(),b=Object(E.h)(),j=Object(P.a)(),h=Object(H.a)(j.breakpoints.down("xs")),p=re();return Object(c.useEffect)((function(){var e=null;return b.pathname!==s.a.ONLINE_DEMOS?(o(!0),u(!0)):(u(!1),e=setTimeout((function(){o(!1)}),500)),function(){clearTimeout(e)}}),[b.pathname]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsx)(ne.a,Object(I.a)(Object(I.a)({in:l},{timeout:500}),{},{children:Object(a.jsx)(g.a,{display:"flex",justifyContent:h?"center":"flex-end",bgcolor:"common.black",children:Object(a.jsx)(ce.a,{orientation:h?"vertical":"horizontal",size:"small",variant:"contained",color:"default","aria-label":"text primary button group",className:h?p.btnGroup:null,children:oe.map((function(e,t){return Object(a.jsx)(ae.a,{onClick:function(){return O.push(e.path)},children:e.title},t)}))})})})):null})},le=function(){return Object(a.jsxs)(g.a,{display:"flex",flexDirection:"column",children:[Object(a.jsx)(ee,{}),Object(a.jsx)(ie,{})]})},se=n(49),ue=(n(107),Object(L.a)((function(e){return{route_container:{display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"20px",height:function(e){return e.height},overflow:"auto",backgroundColor:"#fff",transition:"background-color 250ms ease-in"},subContainer:{position:"relative",display:"flex",justifyContent:"center",width:"100%",maxWidth:e.breakpoints.values.lg,height:"100%",overflow:"visible"},gr:{backgroundColor:"#CFFFF1"},ye:{backgroundColor:"#FFE797"},db:{backgroundColor:"#163e75"},pi:{backgroundColor:"#FF96BD"},or:{backgroundColor:"#FFB457"},bl:{backgroundColor:"#000000"}}})));function Oe(){var e=Object(E.h)(),t=Object(se.a)(),n=ue({height:"calc(100% - ".concat(t,"px)")}),o=Object(c.useMemo)((function(){var t="";switch(e.pathname){case s.a.HOME:t=n.ye;break;case s.a.DEMOS:t=n.db;break;case s.a.CREDIT_CARD_FORM:t=n.bl;break;case s.a.TODOLIST:t=n.gr;break;case s.a.ONLINE_DEMOS:t=n.or;break;default:t=n.ye}return t}),[e.pathname,n.ye,n.gr,n.bl,n.db,n.or]);return Object(a.jsx)(k.a,{maxWidth:!1,className:"".concat(n.route_container," ").concat(o),children:Object(a.jsx)(g.a,{className:n.subContainer,children:Object(a.jsx)(D.default,{routes:x})})})}var be=function(){return Object(a.jsxs)(l.a,{value:{fetcher:N},children:[Object(a.jsx)(y.a,{}),Object(a.jsx)(_.a,{basename:"real-life-project-react",children:Object(a.jsxs)("div",{id:"App",children:[Object(a.jsx)(le,{routes:x}),Object(a.jsx)(Oe,{})]})})]})},je=function(e){e&&e instanceof Function&&n.e(13).then(n.bind(null,176)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(be,{})}),document.getElementById("root")),je()},49:function(e,t,n){"use strict";var a=n(0),c={DEMO_AND_MOBILE:250,DEMO_BUT_NOT_MOBILE:78,NOT_DEMO_BUT_MOBILE:96,NOT_DEMO_AND_NOT_MOBILE:48},o=n(5),r=n(30),i=n(132),l=n(10);t.a=function(){var e=Object(r.a)(),t=Object(i.a)(e.breakpoints.down("xs")),n=Object(l.h)();return Object(a.useMemo)((function(){var e=0;return n.pathname!==o.a.ONLINE_DEMOS&&t?e=c.DEMO_AND_MOBILE:n.pathname===o.a.ONLINE_DEMOS||t?n.pathname===o.a.ONLINE_DEMOS&&t?e=c.NOT_DEMO_BUT_MOBILE:n.pathname!==o.a.ONLINE_DEMOS||t||(e=c.NOT_DEMO_AND_NOT_MOBILE):e=c.DEMO_BUT_NOT_MOBILE,e}),[n.pathname,t])}},5:function(e,t,n){"use strict";t.a={HOME:"/",DEMOS:"/Demos",CREDIT_CARD_FORM:"/Demos/CreditCardForm",TODOLIST:"/Demos/ToDoList",PHOTOS_FETCHER:"/Demos/PhotosFetcher",PAGETITLE_TRANSFORMER:"/Demos/PagetitleTransformer",ONLINE_DEMOS:"/Demos/OnlineDemos"}},63:function(e,t,n){"use strict";var a=n(2),c=n(113),o=n(84),r=n(49);t.a=function(e){var t=e.dynamic,n=void 0===t||t,i=Object(r.a)(),l=document.documentElement.clientHeight,s="".concat(l-i,"px");return Object(a.jsx)(c.a,{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"".concat(n?s:null),children:Object(a.jsx)(o.a,{})})}},68:function(e,t,n){e.exports={logo:"MainHead_logo__3wobq","App-logo-spin":"MainHead_App-logo-spin__1iRMn"}},75:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(20),c=n(2),o=n(76),r=n(0),i=n(10),l=n(63);function s(e){var t=e.routes,n=Object(o.a)(e,["routes"]);return Object(c.jsx)(i.b,Object(a.a)(Object(a.a)({},n),{},{children:Object(c.jsx)(n.childComponent,{routes:t})}))}function u(e){var t=e.routes;return Object(c.jsx)(r.Suspense,{fallback:Object(c.jsx)(l.a,{}),children:Object(c.jsx)(i.d,{children:t.map((function(e,t){return Object(c.jsx)(s,Object(a.a)({},e),t)}))})})}},96:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.e2a0d4e2.chunk.js.map