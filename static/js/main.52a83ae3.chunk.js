(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{19:function(e,a,t){e.exports=t(45)},24:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(12),i=t.n(s),o=(t(24),t(2)),c=t.n(o),m=t(13),l=t(14),u=t(17),v=t(15),d=t(18),p=t(16),g=t.n(p);t(43);var y=function(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres,o=e.rating;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("span",{className:"rating"},o," / 10"),r.a.createElement("div",{className:"movie_data"},r.a.createElement("strong",{className:"moive_title"},t),r.a.createElement("span",{className:"movie_year"},"(",a,")"),r.a.createElement("div",{className:"movie_genres"},r.a.createElement("ul",{className:"genres_list"},i.map((function(e,a){return r.a.createElement("li",{className:"genres_genre",key:a},e)})))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,150),"...")),r.a.createElement("button",{type:"button",className:"bt_like"},r.a.createElement("i",{className:"fas fa-heart fa-2x"})))},f=(t(44),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=function(){var e,a;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,a=e.data.data.movies,t.setState({movies:a,isLoading:!1});case 5:case"end":return n.stop()}}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_txt"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,rating:e.rating})}))))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.52a83ae3.chunk.js.map