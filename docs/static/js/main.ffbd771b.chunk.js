(this["webpackJsonpgif-app"]=this["webpackJsonpgif-app"]||[]).push([[0],{16:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n(7),i=n.n(r),s=(n(16),n(2)),u=n(9),j=function(t){var e=t.setcategories,n=Object(a.useState)(""),r=Object(s.a)(n,2),i=r[0],j=r[1];return Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),i.trim().length>2&&(e((function(t){return[i].concat(Object(u.a)(t))})),j(""))},children:Object(c.jsx)("input",{type:"text",value:i,onChange:function(t){return j(t.target.value)}})})},o=n(10),d=n(6),l=n.n(d),b=n(8),O=function(){var t=Object(b.a)(l.a.mark((function t(e){var n,c,a,r,i;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(e),"&limit=10&api_key=M8BW7WREALbIOs500HKewt6GFsxckQ6W"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(t){var e=t.title,n=t.url;return Object(c.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(c.jsx)("img",{src:n,alt:e}),Object(c.jsx)("p",{children:e})]})},h=function(t){var e=t.category,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){O(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),r=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),i&&Object(c.jsx)("p",{className:"animate__animated animate__flash",children:"Loading"}),Object(c.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(c.jsx)(f,Object(o.a)({},t),t.id)}))}),Object(c.jsx)("button",{children:"Test"})]})},p=(n(18),function(){var t=Object(a.useState)(["One punch"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("header",{children:Object(c.jsx)("h2",{children:"Gif App"})}),Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)(j,{setcategories:r}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(h,{category:t},t)}))})]})]})});i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.ffbd771b.chunk.js.map