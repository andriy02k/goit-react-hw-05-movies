"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[996],{996:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(439),a=n(791),u=n(87),c=n(689),s=n(74),i=n(510),o=n(184),f=function(t){var e=t.handleSubmit,n=t.handleChange,r=t.searchQuery;return(0,o.jsxs)("form",{onSubmit:e,children:[(0,o.jsx)("input",{name:"search",type:"text",className:"form",value:r,onChange:n}),(0,o.jsx)("button",{type:"submit",className:"btn",children:"Search"})]})},p=function(){var t=(0,a.useState)(""),e=(0,r.Z)(t,2),n=e[0],p=e[1],l=(0,a.useState)([]),v=(0,r.Z)(l,2),h=v[0],m=v[1],d=(0,u.lr)(),x=(0,r.Z)(d,2),g=x[0],y=x[1];(0,a.useEffect)((function(){var t=g.get("query");t&&(0,s.gH)(t).then((function(t){return m(t)})).catch((function(t){return console.log(t)}))}),[g]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.j3,{}),(0,o.jsx)(f,{handleSubmit:function(t){t.preventDefault(),y({query:n}),p("")},handleChange:function(t){var e=t.target.value;p(e)},searchQuery:n}),(0,o.jsx)(i.Z,{movies:h})]})}},74:function(t,e,n){n.d(e,{Ny:function(){return i},zv:function(){return o},jP:function(){return f},gH:function(){return p},aF:function(){return s}});var r=n(861),a=n(757),u=n.n(a),c=n(340).Z.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"64389f8c9597f749526cf3aa862ff846"}}),s=function(){var t=(0,r.Z)(u().mark((function t(){var e,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("trending/all/day");case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/credits"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/movie/".concat(e,"/reviews"));case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(e){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.get("/search/movie",{params:{query:e}});case 2:return n=t.sent,r=n.data,t.abrupt("return",r.results);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},510:function(t,e,n){n.d(e,{Z:function(){return f}});n(791);var r=n(689),a=n(87),u="MovieList_list__yjDCC",c="MovieList_item__tDivI",s="MovieList_link__+cn-g",i="MovieList_title__QyMtJ",o=n(184),f=function(t){var e=t.movies,n=(0,r.TH)();return(0,o.jsx)("ul",{className:u,children:e&&e.map((function(t){var e=t.id,r=t.name,u=t.title;return(0,o.jsx)("li",{className:c,children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e),className:s,state:n,children:(0,o.jsx)("h3",{className:i,children:r||u})})},e)}))})}}}]);
//# sourceMappingURL=996.9d86f4dd.chunk.js.map