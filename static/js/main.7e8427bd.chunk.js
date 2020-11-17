(this["webpackJsonpreact-deploy"]=this["webpackJsonpreact-deploy"]||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},20:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a(1),s=a(6),m="https://api.spaceXdata.com/v3/launches?limit=100";function o(e){var t=e.title,a=void 0===t?"SpaceX Launch Programs":t,n=e.children,l=e.className,r=void 0===l?"bg-light":l;return c.a.createElement("div",null,c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-light text-left"},c.a.createElement("h2",null,a)),c.a.createElement("div",{className:r},n)),c.a.createElement("footer",{className:"footer bg-light "},c.a.createElement("div",{className:"container text-center"},c.a.createElement("span",{className:"text-muted"},"Developed By ",c.a.createElement("span",null,"aamir@dev")))))}var u=a(8);function i(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2);a[0],a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"text-strong"},"Launch Year",c.a.createElement("hr",null)),[{_id:"2006",name:"2006"},{_id:"2007",name:"2007"},{_id:"2008",name:"2008"},{_id:"2009",name:"2009"},{_id:"2010",name:"2010"},{_id:"2011",name:"2011"},{_id:"2012",name:"2012"},{_id:"2013",name:"2013"},{_id:"2014",name:"2014"},{_id:"2015",name:"2015"},{_id:"2016",name:"2016"},{_id:"2017",name:"2017"},{_id:"2018",name:"2018"},{_id:"2019",name:"2019"},{_id:"2020",name:"2020"}].map((function(t,a){return c.a.createElement("button",{className:"btn btn-success m-2",onClick:function(){return function(t){var a=Object(u.a)(Object(u.a)({},e.filters),{},{land_success:!0,launch_year:t});e.setFilters(a)}(t._id)},key:a},t.name)})),c.a.createElement("br",null))}var d=function(e){return c.a.createElement("div",{className:"rounded bg-light border-success p-2"},c.a.createElement("img",{src:e.imageURL,alt:"No Image Found",style:{maxHeight:"100%",maxWidth:"100%"},className:"mb-3 rounded"}))},E=function(e){var t=e.product,a=t?t.mission_name:"NA",n=t?"#"+t.flight_number:"NA",l=t?t.links.mission_patch:"",r=t?t.launch_year:"",s=!!t&&t.launch_success,m=!!t&&t.launch_landing;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-body"},c.a.createElement(d,{imageURL:l}),c.a.createElement("p",{className:"lead font-weight-normal text-info"},a," ",n),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},c.a.createElement("span",{className:"font-weight-bold"},"Launch Year: "),r," ",c.a.createElement("br",null),c.a.createElement("span",{className:"font-weight-bold"},"Successful Launch: "),s?"true":"false"," ",c.a.createElement("br",null),c.a.createElement("span",{className:"font-weight-bold"},"Successful Landing: "),m?"true":"false"," ",c.a.createElement("br",null)))))};a(20);function b(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),l=a[0],r=a[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"text-strong"},"Launch Success",c.a.createElement("hr",null)),c.a.createElement("button",{className:"btn btn-success m-2",onClick:function(){!function(t){r(!t);var a=Object(u.a)(Object(u.a)({},e.filters),{},{launch_success:t});e.setFilters(a)}(l)},"data-toggle":"button","aria-pressed":"false"},"Yes/No"),c.a.createElement("br",null))}function f(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"text-strong"},"Land Success",c.a.createElement("hr",null)),c.a.createElement("button",{className:"btn btn-success m-2",onClick:function(){}},"Yes/No"),c.a.createElement("br",null))}function h(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(!0),u=Object(s.a)(r,2),d=(u[0],u[1],Object(n.useState)({})),h=Object(s.a)(d,2),g=h[0],v=h[1],N=Object(n.useState)(m),p=Object(s.a)(N,2),_=(p[0],p[1],Object(n.useState)(!1)),j=Object(s.a)(_,2),O=(j[0],j[1],Object(n.useState)(1)),S=Object(s.a)(O,2),x=(S[0],S[1],function(e){(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return fetch(e)})(e).then((function(e){return e.json()})).then((function(e){l(e)})).catch((function(e){return console.log(e)}))});return Object(n.useEffect)((function(){var e=m;for(var t in g)e+="&".concat(t,"=").concat(g[t]);console.log(e),x(e)}),[g]),c.a.createElement(o,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-2 col-md-2 col-sm-12 center-block"},c.a.createElement(i,{setFilters:v,filters:g}),c.a.createElement(b,{setFilters:v,filters:g}),c.a.createElement(f,null)),c.a.createElement("div",{className:"col-lg-10 col-md-10 col-sm-12 row"},c.a.createElement("div",{className:"w-100"},function(){var e="<h2>Filters</h2>";for(var t in g)t&&(e+="<div><strong>".concat(t,"</strong>: ").concat(g[t],"</div>"));return c.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}()),a.length>0?a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-lg-3 col-md-3 mb-1 col-sm-1"},c.a.createElement(E,{product:e}))})):"No products found.")))}var g=function(){return c.a.createElement(l.a,null,c.a.createElement(r.c,null,c.a.createElement(r.a,{path:"/",exact:!0,component:h})))},v=a(17);a.n(v).a.render(c.a.createElement(g,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7e8427bd.chunk.js.map