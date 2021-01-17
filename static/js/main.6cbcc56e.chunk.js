(this["webpackJsonpmovies-2"]=this["webpackJsonpmovies-2"]||[]).push([[0],{53:function(e,t,c){},94:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var s=c(0),r=c(1),i=c(18),a=c.n(i),n=c(17),l=c(6),o=c(4),j=c.n(o),d=c(9),b=c(14),u=c(39),m=c.n(u),p=c(19),h=c.n(p),O=(c(53),c(26),c(16)),x=c.n(O),f="05f7db0eb20b02a8803d7f7d0f3fb520",v="https://api.themoviedb.org/3",g="".concat(v,"/movie/now_playing"),N="".concat(v,"/movie/top_rated"),y="".concat(v,"/movie"),w="".concat(v,"/genre/movie/list"),k="".concat(v,"/discover/movie"),_="".concat(v,"/trending/person/week"),E=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,s,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(g,{params:{api_key:f,language:"ru-RU",page:1}});case 3:return t=e.sent,e.next=6,t;case 6:return c=e.sent,s=c.data,r="https://image.tmdb.org/t/p/original/",i=s.results.map((function(e){return{id:e.id,backPoster:r+e.backdrop_path,popularity:e.popularity,title:e.title,poster:r+e.poster_path,overview:e.overview,rating:e.vote_average}})),e.abrupt("return",i);case 13:e.prev=13,e.t0=e.catch(0),console.error("Oops! There is an error in fetchMovies: ",e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),S=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(w,{params:{api_key:f,language:"ru-RU",page:1}});case 3:return t=e.sent,c=t.data,s=c.genres.map((function(e){return{id:e.id,name:e.name}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.error("Oops! There is an error in fetchGenre: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(k,{params:{api_key:f,language:"ru-RU",page:1,with_genres:t}});case 3:return c=e.sent,s=c.data,r="https://image.tmdb.org/t/p/original/",i=s.results.map((function(e){return{id:e.id,backPoster:r+e.backdrop_path,popularity:e.popularity,title:e.title,poster:r+e.poster_path,overview:e.overview,rating:e.vote_average}})),e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.error("Oops! There is an error in fetchMovieByGenre: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(_,{params:{api_key:f}});case 3:return t=e.sent,c=t.data,s=c.results.map((function(e){return{id:e.id,popularity:e.popularity,name:e.name,profileImg:"https://image.tmdb.org/t/p/w200"+e.profile_path,known:e.known_for_department}})),e.abrupt("return",s);case 9:e.prev=9,e.t0=e.catch(0),console.error("Oops! There is an error in fetchPersons: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(d.a)(j.a.mark((function e(){var t,c,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(N,{params:{api_key:f,language:"ru-RU",page:1}});case 3:return t=e.sent,c=t.data,s="https://image.tmdb.org/t/p/original/",r=c.results.map((function(e){return{id:e.id,backPoster:s+e.backdrop_path,popularity:e.popularity,title:e.title,poster:s+e.poster_path,overview:e.overview,rating:e.vote_average}})),e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.error("Oops! There is an error in fetchTopratedMovie: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(y,"/").concat(t),{params:{api_key:f,language:"ru-RU"}});case 3:return c=e.sent,s=c.data,e.abrupt("return",s);case 8:e.prev=8,e.t0=e.catch(0),console.error("Oops! There is an error in fetchMovieDetail: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(y,"/").concat(t,"/videos"),{params:{api_key:f}});case 3:return c=e.sent,s=c.data,e.abrupt("return",s.results[0]);case 8:e.prev=8,e.t0=e.catch(0),console.error("Oops! There is an error in fetchMovieVideos: ",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(y,"/").concat(t,"/credits"),{params:{api_key:f}});case 3:return c=e.sent,s=c.data,r=s.cast.map((function(e){return{id:e.cast_id,character:e.character,name:e.name,img:"https://image.tmdb.org/t/p/w200"+e.profile_path}})),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.error("Oops! There is an error in fetchCasts: ",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(d.a)(j.a.mark((function e(t){var c,s,r,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(y,"/").concat(t,"/similar"),{params:{api_key:f,language:"en-US"}});case 3:return c=e.sent,s=c.data,r="https://image.tmdb.org/t/p/original/",i=s.results.map((function(e){return{id:e.id,backPoster:r+e.backdrop_path,popularity:e.popularity,title:e.title,poster:r+e.poster_path,overview:e.overview,rating:e.vote_average}})),e.abrupt("return",i);case 10:e.prev=10,e.t0=e.catch(0),console.error("Oops! There is an error in fetchSimilarMovie: ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();var U=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],i=t[1],a=Object(r.useState)([]),l=Object(b.a)(a,2),o=l[0],u=l[1],p=Object(r.useState)([]),O=Object(b.a)(p,2),x=O[0],f=O[1],v=Object(r.useState)([]),g=Object(b.a)(v,2),N=g[0],y=g[1],w=Object(r.useState)([]),k=Object(b.a)(w,2),_=k[0],W=k[1];Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=i,e.next=3,E();case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=u,e.next=8,S();case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=f,e.next=13,T();case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=y,e.next=18,I();case 18:return e.t7=e.sent,(0,e.t6)(e.t7),e.t8=W,e.next=23,R();case 23:e.t9=e.sent,(0,e.t8)(e.t9);case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var A=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,T(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=c.slice(0,5).map((function(e,t){return Object(s.jsxs)("div",{className:"div-item",children:[Object(s.jsx)("div",{className:"carousel-center",children:Object(s.jsx)("img",{src:e.backPoster,alt:e.title,className:"carousel-img"})}),Object(s.jsx)("div",{className:"carousel-center",children:Object(s.jsx)("i",{className:"bi bi-play-circle",style:{fontSize:95,color:"#f4c10f"}})}),Object(s.jsx)("div",{className:"carousel-caption",style:{textAlign:"center",fontSize:35},children:e.title})]},t)})),P=o.map((function(e,t){return Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("button",{type:"button",className:"btn btn-outline-info",onClick:function(){return A(e.id)},children:e.name})},t)})),U=x.slice(0,4).map((function(e,t){return Object(s.jsxs)("div",{className:"col-md-3 col-sm-6",children:[Object(s.jsx)("div",{className:"card",children:Object(s.jsx)(n.b,{to:"/movie/".concat(e.id),children:Object(s.jsx)("img",{className:"img-fluid",src:e.poster,alt:e.title})})}),Object(s.jsxs)("div",{className:"mt-3",children:[Object(s.jsx)("p",{style:{fontWeight:"bolder"},children:e.title}),Object(s.jsxs)("p",{children:["Rated: ",e.rating]}),Object(s.jsx)(h.a,{count:e.rating,size:20,color:"#f4c10f"})]})]},t)})),q=N.slice(0,4).map((function(e,t){return Object(s.jsxs)("div",{className:"col-md-3 text-center",children:[Object(s.jsx)("img",{src:e.profileImg,alt:e.name,className:"img-fluid rounded-circle mx-auto d-block"}),Object(s.jsx)("p",{className:"font-weight-bold text-center",children:e.name}),Object(s.jsxs)("p",{className:"font-weight-light text-center",style:{color:"#5a606b"},children:["Trending for ",e.known]})]},t)})),z=_.slice(0,4).map((function(e,t){return Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsx)("div",{className:"card",children:Object(s.jsx)(n.b,{to:"/movie/".concat(e.id),children:Object(s.jsx)("img",{src:e.poster,alt:e.title,className:"img-fluid"})})}),Object(s.jsxs)("div",{className:"mt-3",children:[Object(s.jsx)("p",{style:{fontWeight:"bolder"},children:e.title}),Object(s.jsxs)("p",{children:["Rated: ",e.rating]}),Object(s.jsx)(h.a,{count:e.rating,size:20,color:"#f4c10f"})]})]},t)}));return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("div",{className:"row mt-2",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)(m.a,{autoplay:!0,pauseOnVisibility:!0,slideshowSpeed:5e3,defaultActiveIndex:0,version:4,children:M})})}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("ul",{className:"list-inline",children:P})})}),Object(s.jsx)("div",{className:"row my-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"float-right",children:Object(s.jsx)("i",{className:"bi bi-arrow-right-circle"})})})}),Object(s.jsx)("div",{className:"row mt-3",children:U}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{className:"font-weight-bold",style:{color:"#5a606b"},children:"TRENDING PERSONS ON THIS WEEK"})})}),Object(s.jsx)("div",{className:"row my-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"float-right",children:Object(s.jsx)("i",{className:"bi bi-arrow-right-circle"})})})}),Object(s.jsx)("div",{className:"row mt-3",children:q}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{className:"font-weight-bold",style:{color:"#5a606b"},children:"TOP RATED MOVIES"})})}),Object(s.jsx)("div",{className:"row my-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("div",{className:"float-right",children:Object(s.jsx)("i",{className:"bi bi-arrow-right-circle"})})})}),Object(s.jsx)("div",{className:"row my-3",children:z}),Object(s.jsx)("hr",{className:"mt-5",style:{borderTop:"1px solid #5a606b"}}),Object(s.jsxs)("div",{className:"row mt-3 mb-5",children:[Object(s.jsxs)("div",{className:"col-md-8 col-sm-6",style:{color:"#5a606b"},children:[Object(s.jsx)("h3",{children:"ABOUT ME"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus nemo suscipit quasi fugiat harum aliquam! Itaque, voluptatibus! Dolorem dolore voluptate voluptas illum blanditiis consectetur impedit vitae corrupti numquam temporibus!"}),Object(s.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iure quae reprehenderit, exercitationem possimus libero sapiente incidunt totam eveniet harum id voluptatem facilis assumenda dolores, deserunt reiciendis cum nesciunt rerum."}),Object(s.jsxs)("ul",{className:"list-inline",children:[Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-facebook",style:{color:"#f4c10f"}})})}),Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-youtube",style:{color:"#f4c10f"}})})}),Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-twitter",style:{color:"#f4c10f"}})})}),Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-instagram",style:{color:"#f4c10f"}})})})]})]}),Object(s.jsxs)("div",{className:"col-md-4 col-sm-6",style:{color:"#5a606b"},children:[Object(s.jsx)("h3",{children:"KEEP IN TOUCH"}),Object(s.jsxs)("ul",{className:"list-unstyled",children:[Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[Object(s.jsx)("i",{className:"bi bi-geo-alt-fill"})," Address:"]})," city, state, country"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[Object(s.jsx)("i",{className:"bi bi-telephone-fill"})," Phone:"]})," +7 000 000 00 00"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[Object(s.jsx)("i",{className:"bi bi-envelope-fill"})," Email:"]})," info@infomail.com"]})})]})]})]})]})},q=c(25),z=c(98),V=c(41),B=c.n(V);var C=function(e){var t=e.id,c=[],i=Object(r.useState)(!1),a=Object(b.a)(i,2),l=a[0],o=a[1],u=Object(r.useState)([]),m=Object(b.a)(u,2),p=m[0],O=m[1],x=Object(r.useState)([]),f=Object(b.a)(x,2),v=f[0],g=f[1],N=Object(r.useState)([]),y=Object(b.a)(N,2),w=y[0],k=y[1],_=Object(r.useState)([]),E=Object(b.a)(_,2),S=E[0],T=E[1];console.log("detail: ",p),Object(r.useEffect)((function(){(function(){var e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,W(t);case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.t2=g,e.next=8,A(t);case 8:return e.t3=e.sent,(0,e.t2)(e.t3),e.t4=k,e.next=13,M(t);case 13:return e.t5=e.sent,(0,e.t4)(e.t5),e.t6=T,e.next=18,P(t);case 18:e.t7=e.sent,(0,e.t6)(e.t7);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[t]);var I=function(e){return Object(s.jsxs)(z.a,Object(q.a)(Object(q.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(z.a.Header,{closeButton:!0,children:Object(s.jsx)(z.a.Title,{id:"contained-modal-title-vcenter",style:{color:"#000000",fontWeight:"bolder"},children:p.title})}),Object(s.jsx)(z.a.Body,{style:{backgroundColor:"#000000"},children:Object(s.jsx)(B.a,{className:"container-fluid",url:"https://www.youtube.com/watch?v="+v.key,playing:!0,controls:!0,width:"100%"})})]}))},R=(c=p.genres)&&c.map((function(e,t){return Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("button",{type:"button",className:"btn btn-outline-info",children:e.name})},t)})),U=w.slice(0,4).map((function(e,t){return Object(s.jsxs)("div",{className:"col-md-3 text-center",children:[Object(s.jsx)("img",{src:e.img,alt:e.name,className:"img-fluid rounded-circle mx-auto d-block"}),Object(s.jsx)("p",{className:"font-weight-bold text-center",children:e.name}),Object(s.jsx)("p",{className:"font-weight-light text-center",style:{color:"#5a606b"},children:e.character})]},t)})),V=S.slice(0,4).map((function(e,t){return Object(s.jsxs)("div",{className:"col-md-3 col-sm-6",children:[Object(s.jsx)("div",{className:"card",children:Object(s.jsx)(n.b,{to:"/movie/".concat(e.id),children:Object(s.jsx)("img",{className:"img-fluid",src:e.poster,alt:e.title})})}),Object(s.jsxs)("div",{className:"mt-3",children:[Object(s.jsx)("p",{style:{fontWeight:"bolder"},children:e.title}),Object(s.jsxs)("p",{children:["Rated: ",e.rating]}),Object(s.jsx)(h.a,{count:e.rating,size:20,color:"#f4c10f"})]})]},t)}));return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsxs)("div",{className:"row mt-2",children:[Object(s.jsx)(I,{show:l,onHide:function(){return o(!1)}}),Object(s.jsxs)("div",{className:"col text-center",style:{width:"100%"},children:[Object(s.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(p.backdrop_path),alt:p.title,className:"img-fluid"}),Object(s.jsx)("div",{className:"carousel-center",children:Object(s.jsx)("i",{onClick:function(){o(!0)},className:"bi bi-play-circle",style:{fontSize:95,color:"#f4c10f",cursor:"pointer"}})}),Object(s.jsx)("div",{className:"carousel-caption",style:{textAlign:"center",fontSize:35},children:p.title})]})]}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"GENRE"})})}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("ul",{className:"list-inline",children:R})})}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsxs)("div",{className:"col",children:[Object(s.jsx)("div",{className:"text-center",children:Object(s.jsx)(h.a,{count:p.vote_average,size:20,color:"#f4c10f"})}),Object(s.jsxs)("div",{className:"mt-3",children:[Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"OVERVIEW"}),p.overview]})]})}),Object(s.jsxs)("div",{className:"row mt-3",children:[Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"RELEASE DATE"}),Object(s.jsx)("p",{style:{color:"#f4c10f"},children:p.release_date})]}),Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"RUN TIME"}),Object(s.jsx)("p",{style:{color:"#f4c10f"},children:p.runtime})]}),Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"BUDGET"}),Object(s.jsx)("p",{style:{color:"#f4c10f"},children:p.budget})]}),Object(s.jsxs)("div",{className:"col-md-3",children:[Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"HOMEPAGE"}),Object(s.jsx)("p",{style:{color:"#f4c10f"},children:p.homepage})]})]}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"CASTS"})})}),Object(s.jsx)("div",{className:"row mt-3",children:U}),Object(s.jsx)("div",{className:"row mt-3",children:Object(s.jsx)("div",{className:"col",children:Object(s.jsx)("p",{style:{color:"#5a606b",fontWeight:"bolder"},children:"SIMILAR MOVIES"})})}),Object(s.jsx)("div",{className:"row mt-3",children:V}),Object(s.jsx)("hr",{className:"mt-5",style:{borderTop:"1px solid #5a606b"}}),Object(s.jsxs)("div",{className:"row mt-3 mb-5",children:[Object(s.jsxs)("div",{className:"col-md-8 col-sm-6",style:{color:"#5a606b"},children:[Object(s.jsx)("h3",{children:"ABOUT ME"}),Object(s.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ducimus nemo suscipit quasi fugiat harum aliquam! Itaque, voluptatibus! Dolorem dolore voluptate voluptas illum blanditiis consectetur impedit vitae corrupti numquam temporibus!"}),Object(s.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel iure quae reprehenderit, exercitationem possimus libero sapiente incidunt totam eveniet harum id voluptatem facilis assumenda dolores, deserunt reiciendis cum nesciunt rerum."}),Object(s.jsxs)("ul",{className:"list-inline",children:[Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-facebook",style:{color:"#f4c10f"}})})}),Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-youtube",style:{color:"#f4c10f"}})})}),Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-twitter",style:{color:"#f4c10f"}})})}),Object(s.jsx)("li",{className:"list-inline-item",children:Object(s.jsx)("a",{href:"/",children:Object(s.jsx)("i",{className:"bi bi-instagram",style:{color:"#f4c10f"}})})})]})]}),Object(s.jsxs)("div",{className:"col-md-4 col-sm-6",style:{color:"#5a606b"},children:[Object(s.jsx)("h3",{children:"KEEP IN TOUCH"}),Object(s.jsxs)("ul",{className:"list-unstyled",children:[Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[Object(s.jsx)("i",{className:"bi bi-geo-alt-fill"})," Address:"]})," city, state, country"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[Object(s.jsx)("i",{className:"bi bi-telephone-fill"})," Phone:"]})," +7 000 000 00 00"]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("p",{children:[Object(s.jsxs)("strong",{children:[Object(s.jsx)("i",{className:"bi bi-envelope-fill"})," Email:"]})," info@infomail.com"]})})]})]})]})]})};var D=function(){return Object(s.jsx)("main",{children:Object(s.jsxs)(l.c,{children:[Object(s.jsx)(l.a,{path:"/",exact:!0,component:U}),Object(s.jsx)(l.a,{path:"/movie/:id",render:function(e){var t=e.match.params.id;return Object(s.jsx)(C,{id:t})}})]})})};c(93),c(94);a.a.render(Object(s.jsx)(n.a,{children:Object(s.jsx)(D,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.6cbcc56e.chunk.js.map