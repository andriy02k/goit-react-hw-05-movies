"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694,9],{946:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=t(439),a=t(791),s=t(689),c=t(87),u=t(74),i=t.p+"static/media/image.8a6e339f8347ae498ed5.webp",o=t(9),l=t(184),d=function(){var e=(0,s.UO)().moviesId,r=(0,a.useState)(null),t=(0,n.Z)(r,2),d=t[0],f=t[1],h=(0,s.TH)().state,p=(0,s.s0)();(0,a.useEffect)((function(){(0,u.Ny)(e).then((function(e){f(e)})).catch((function(e){var r=e.message;console.log(r)}))}),[e]);if(!d)return(0,l.jsx)("p",{children:"404 Not Found"});var v=d.title,m=d.poster_path,x=d.release_date,j=d.vote_average,w=d.overview,_=d.genres;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.default,{}),(0,l.jsx)("button",{onClick:function(){p(null!==h&&void 0!==h?h:"/")},children:"go back"}),(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:m?"https://image.tmdb.org/t/p/w500/".concat(m):i,width:250,alt:"poster"}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("h1",{children:[v,"(",new Date(x).getFullYear(),")"]}),(0,l.jsxs)("p",{children:["User Score: ",Math.floor(10*j),"%"]}),(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:w}),(0,l.jsx)("h3",{children:"Genres"}),_.map((function(e,r){return(0,l.jsx)("p",{className:"genres",children:e.name},r)}))]}),(0,l.jsxs)("div",{children:[(0,l.jsx)(c.OL,{to:"cast",children:"Cast"}),(0,l.jsx)(c.OL,{to:"reviews",children:"Reviews"})]}),(0,l.jsx)(s.j3,{})]})]})}},74:function(e,r,t){t.d(r,{Ny:function(){return i},zv:function(){return o},jP:function(){return l},gH:function(){return d},aF:function(){return u}});var n=t(861),a=t(757),s=t.n(a),c=t(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"64389f8c9597f749526cf3aa862ff846"}}),u=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("trending/all/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},9:function(e,r,t){t.r(r),t.d(r,{default:function(){return l}});var n=t(87),a="Header_header__HXQOm",s="Header_nav__J8WFt",c="Header_list__Ucifz",u="Header_item__IvEBm",i="Header_link__xIhZh",o=t(184),l=function(){return(0,o.jsx)("header",{className:a,children:(0,o.jsx)("nav",{className:s,children:(0,o.jsxs)("ul",{className:c,children:[(0,o.jsx)("li",{className:u,children:(0,o.jsx)(n.OL,{className:i,to:"/",children:"Home"})}),(0,o.jsx)("li",{className:u,children:(0,o.jsx)(n.OL,{className:i,to:"/movies",children:"Movies"})})]})})})}}}]);
//# sourceMappingURL=694.4036234c.chunk.js.map