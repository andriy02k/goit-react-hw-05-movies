"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[694],{946:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(439),a=t(791),c=t(689),s=t(87),u=t(74),i=t.p+"static/media/image.8a6e339f8347ae498ed5.webp",o=t(184),f=function(){var e,r,t=(0,c.UO)().moviesId,f=(0,a.useState)(null),p=(0,n.Z)(f,2),d=p[0],l=p[1],v=(0,c.TH)(),h=(0,a.useRef)(null===(e=v.state)||void 0===e?void 0:e.location);if((0,a.useEffect)((function(){(0,u.Ny)(t).then((function(e){l(e)})).catch((function(e){var r=e.message;console.log(r)}))}),[t]),!d)return(0,o.jsx)("p",{children:"404 Not Found"});var m=d.title,x=d.poster_path,w=d.release_date,g=d.vote_average,j=d.overview,k=d.genres;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.rU,{to:null!==(r=h.current)&&void 0!==r?r:"/",children:"go back"}),(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:x?"https://image.tmdb.org/t/p/w500/".concat(x):i,width:250,alt:"poster"}),(0,o.jsxs)("div",{children:[(0,o.jsxs)("h1",{children:[m,"(",new Date(w).getFullYear(),")"]}),(0,o.jsxs)("p",{children:["User Score: ",Math.floor(10*g),"%"]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:j}),(0,o.jsx)("h3",{children:"Genres"}),k.map((function(e,r){return(0,o.jsx)("p",{className:"genres",children:e.name},r)}))]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(s.OL,{to:"cast",children:"Cast"}),(0,o.jsx)(s.OL,{to:"reviews",children:"Reviews"})]}),(0,o.jsx)(c.j3,{})]})]})}},74:function(e,r,t){t.d(r,{Ny:function(){return i},zv:function(){return o},jP:function(){return f},gH:function(){return p},aF:function(){return u}});var n=t(861),a=t(757),c=t.n(a),s=t(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"64389f8c9597f749526cf3aa862ff846"}}),u=function(){var e=(0,n.Z)(c().mark((function e(){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("trending/all/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/movie/".concat(r,"/reviews"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.get("/search/movie",{params:{query:r}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=694.6f15b48f.chunk.js.map