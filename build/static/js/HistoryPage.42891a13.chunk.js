(this["webpackJsonpprodeus-frontend"]=this["webpackJsonpprodeus-frontend"]||[]).push([[10],{466:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(10),l=a(23),i=a(34),o=a.n(i),s=a(467),u=a(468),d=a(471),f=a(469),m=a(470),h=a(22),p=a(90),b=(a(472),a(12));t.a=Object(c.memo)((function(e){var t=e.details,a=e.watchedDetails,i=void 0===a?null:a,g=t.image,v=t.title,E=t.category,w=t.difficulty,y=t.duration,j=t._id,O=Object(r.b)(),C=Object(l.g)(),S=Object(r.c)((function(e){return e.auth})).userToken,_=Object(c.useCallback)((function(e){e.stopPropagation(),O(Object(p.b)(j))}),[O]),N=Object(c.useCallback)((function(e){e.stopPropagation(),o.a.post("".concat(h.a,"/class/click/").concat(j),{},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}}).then((function(e){})).catch((function(e){alert(e)})),C.push({pathname:"/library-class",state:{details:t,watchedDetails:i}})}),[t,i]),k=Object(c.useCallback)((function(e){e.stopPropagation(),o.a.post("".concat(h.a,"/class/save/").concat(j),{},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(S)}}).then((function(){})).catch((function(e){alert(e)}))}),[j]);return n.a.createElement("div",{className:"class-preview-card-component"},n.a.createElement("div",{className:"image-wrapper",style:{backgroundImage:"url(".concat(g,")")},onClick:N},n.a.createElement("h5",{className:"badge-new"},"NEW"),n.a.createElement("div",{className:"likes-wrapper"},n.a.createElement(d.a,{iconColor:"#4389f8",bgColor:"#fff",color:"#000"})),n.a.createElement("div",{className:"bottom-actions"},n.a.createElement("div",{onClick:k,className:"bottom-actions__bookmark"},n.a.createElement("div",{className:"popup"},"Bookmark"),n.a.createElement(m.a,{color:"#fff",bgColor:"#e63146",opacity:"1"})),n.a.createElement("div",{onClick:_,className:"bottom-actions__add-to-course"},n.a.createElement("div",{className:"popup"},"Add to course"),n.a.createElement(f.a,{color:"#fff",bgColor:"#6a28e6",opacity:"1"})))),n.a.createElement("h6",{className:"category"},n.a.createElement("span",{role:"img","aria-label":""},Object(b.n)(E)),E),n.a.createElement("h2",{className:"caption",onClick:N},v),n.a.createElement("div",{className:"info"},n.a.createElement("section",null,n.a.createElement(s.a,{difficulty:w})),n.a.createElement("section",null,n.a.createElement(u.a,{iconColor:"#fff",duration:y}))))}))},469:function(e,t,a){"use strict";var c=a(0),n=a.n(c);t.a=function(e){var t=e.color,a=void 0===t?"#6a28e6":t,c=e.bgColor,r=void 0===c?"#6a28e6":c,l=e.opacity,i=void 0===l?"0.15":l;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"34",height:"34",viewBox:"0 0 34 34"},n.a.createElement("g",{id:"Group_10186","data-name":"Group 10186",transform:"translate(-227 -622.953)"},n.a.createElement("rect",{id:"Rectangle_7355","data-name":"Rectangle 7355",width:"34",height:"34",rx:"17",transform:"translate(227 622.953)",fill:r,opacity:i}),n.a.createElement("path",{id:"Path_14356","data-name":"Path 14356",d:"M183.187,3002.728H174.7l-.761-.922a1.179,1.179,0,0,0-.891-.406h-2.723a1.01,1.01,0,0,0-1,1v9.992a1.009,1.009,0,0,0,1,1H183.2a1.009,1.009,0,0,0,1-1v-8.664A1.034,1.034,0,0,0,183.187,3002.728Zm-4.013,5.734h-1.681v1.68a.637.637,0,1,1-1.274,0v-1.68h-1.68a.637.637,0,0,1,0-1.275h1.68v-1.68a.637.637,0,1,1,1.274,0v1.68h1.681a.637.637,0,0,1,0,1.275Z",transform:"translate(66.895 -2367.239)",fill:a})))}},472:function(e,t,a){},473:function(e,t,a){e.exports=a.p+"static/media/search.5199ddc5.svg"},474:function(e,t,a){"use strict";var c=a(0),n=a.n(c),r=a(473),l=a.n(r),i=a(475),o=a.n(i);a(476);t.a=Object(c.memo)((function(e){var t=e.handleShowFilterSidebar,a=e.value,c=e.handleChange;return n.a.createElement("div",{className:"search-filter-component"},n.a.createElement("img",{src:l.a,alt:"search"}),n.a.createElement("input",{type:"text",placeholder:"Search by instructor, keyword or topic",value:a,onChange:c}),n.a.createElement("img",{src:o.a,alt:"filter",onClick:t,style:{cursor:"pointer"}}))}))},475:function(e,t,a){e.exports=a.p+"static/media/filter.5cc563fb.svg"},476:function(e,t,a){},484:function(e,t,a){"use strict";var c=a(64),n=a(119),r=a(6),l=a(5),i=a(0);t.a=function(e,t){var a=Object(i.useState)(!1),o=Object(l.a)(a,2),s=o[0],u=o[1],d=Object(i.useState)([]),f=Object(l.a)(d,2),m=f[0],h=f[1],p=Object(i.useState)([]),b=Object(l.a)(p,2),g=b[0],v=b[1],E=Object(i.useState)(""),w=Object(l.a)(E,2),y=w[0],j=w[1],O=Object(i.useState)("Newest"),C=Object(l.a)(O,2),S=C[0],_=C[1],N=Object(i.useState)({categories:[],topics:[],difficulties:[]}),k=Object(l.a)(N,2),F=k[0],B=k[1],L=Object(i.useCallback)((function(e){_(e.target.dataset.name)}),[]),T=Object(i.useCallback)((function(e){j(e.target.value)}),[]),x=Object(i.useCallback)((function(){u(!s)}),[s]),A=Object(i.useCallback)((function(){var a=Object(c.a)(e);0!==F.categories.length&&(a=a.filter((function(e){return t?F.categories.includes(e.class.category):F.categories.includes(e.category)}))),0!==F.topics.length&&(a=a.filter((function(e){F.topics.forEach((function(a){return t?e.class.topics.includes(a):e.topics.includes(a)}))}))),0!==F.difficulties.length&&(a=a.filter((function(e){return t?F.difficulties.includes(e.class.difficulty):F.difficulties.includes(e.difficulty)}))),S&&("Newest"===S&&(a=a.sort((function(e,t){return new Date("".concat(t._updated_at)).getTime()-new Date("".concat(e._updated_at)).getTime()}))),"Oldest"===S&&(a=a.sort((function(e,t){return new Date("".concat(e._updated_at)).getTime()-new Date("".concat(t._updated_at)).getTime()})))),h(a)}),[F,S,e]);Object(i.useEffect)((function(){h(e)}),[e]),Object(i.useEffect)((function(){v(m)}),[m]),Object(i.useEffect)((function(){var e=m.filter((function(e){return t?e.class.instructor.toLowerCase().includes(y.toLowerCase())||e.class.topics.some((function(e){return e.toLowerCase().includes(y.toLowerCase())})):e.topics&&e.instructor?e.instructor.toLowerCase().includes(y.toLowerCase())||e.topics.some((function(e){return e.toLowerCase().includes(y.toLowerCase())})):e}));v(e)}),[y]);return{showFilterSidebar:s,handleShowFilterSidebar:x,searchValue:y,handleSetSearchValue:T,displayedVideos:g,filters:F,sortBy:S,handleSetFilters:function(e,t){B((function(a){return Object(r.a)(Object(r.a)({},a),{},Object(n.a)({},t,e))}))},handleSortBy:L,handleApplyFilters:A,handleClearFilters:function(){B((function(e){return{categories:[],topics:[],difficulties:[]}})),_("Newest")}}}},594:function(e,t,a){},606:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(10),l=a(34),i=a.n(l),o=a(477),s=a(309),u=a(466),d=a(483),f=a(474),m=a(484),h=a(97),p=a(22);a(594);t.default=function(){var e=Object(r.c)((function(e){return e.auth})).userToken,t=Object(r.b)(),a=Object(r.c)((function(e){return e.class})).watchedClasses,l=Object(m.a)(a,!0),b=l.showFilterSidebar,g=l.handleShowFilterSidebar,v=l.searchValue,E=l.handleSetSearchValue,w=l.displayedVideos,y=l.filters,j=l.sortBy,O=l.handleSetFilters,C=l.handleSortBy,S=l.handleApplyFilters,_=l.handleClearFilters;return Object(c.useEffect)((function(){i.a.get("".concat(p.a,"/watch/allwithclass"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){t(Object(h.d)(e.data))})).catch((function(e){alert(e)}))}),[]),n.a.createElement("div",{className:b?"library-section-wrapper show-filter-sidebar":"library-section-wrapper"},n.a.createElement("div",{className:"library-section-wrapper__left-column"},n.a.createElement(o.a,null),n.a.createElement("div",{className:"library-section-wrapper__left-column__content"},n.a.createElement("div",{id:"history-page"},n.a.createElement("div",{className:"history-page"},n.a.createElement("div",{className:"history-page__header"},n.a.createElement("h1",null,"History")),n.a.createElement("div",{className:"history-page__content"},n.a.createElement("div",{className:"search-filter-wrapper"},n.a.createElement(f.a,{handleShowFilterSidebar:g,value:v,handleChange:E})),0!==w.length?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"group"},w.map((function(e,t){return e.class?n.a.createElement(u.a,{details:e.class,watchedDetails:e,key:t}):null}))),n.a.createElement("div",{className:"advert-wrapper",style:{marginBottom:"0px"}},n.a.createElement(d.a,null))):n.a.createElement("h2",{style:{marginLeft:"70px"}},"You haven't watched any classes yet")))))),n.a.createElement("div",{className:"library-section-wrapper__right-column"},b&&n.a.createElement(s.a,{filters:y,handleShowFilterSidebar:g,sortBy:j,handleSetFilters:O,handleSortBy:C,handleSaveFilters:S,handleClearFilters:_})))}}}]);
//# sourceMappingURL=HistoryPage.42891a13.chunk.js.map