(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{167:function(e,t,n){e.exports=n(296)},172:function(e,t,n){},173:function(e,t,n){},296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),o=n.n(c),i=(n(172),n(173),n(174),n(65)),l=n(66),u=n(71),h=n(67),s=n(73),d=n(156),v=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{centered:!0,size:"medium",src:"https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg"})}}]),t}(a.Component),p=n(305),m=[{key:"mc",value:"mc",text:"Marquise de Cat"},{key:"ed",value:"ed",text:"Eyrie Dynasties"},{key:"wa",value:"wa",text:"Woodland Alliance"},{key:"vb",value:"vb",text:"Vagabond"},{key:"lc",value:"lc",text:"Lizard Cult"},{key:"rc",value:"rc",text:"Riverfolk Company"}],f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={searchQuery:null,value:[],winner:null},n.handleWinner=function(e,t){var a=t.value;return n.setState({winner:a})},n.handleChangeFactions=function(e,t){var a=t.value,r=[];a.forEach(function(e){var t=m.find(function(t){return t.key===e});return r.push(t),t}),n.setState({value:r})},n.handleSearchChange=function(e,t){var a=t.searchQuery;return n.setState({searchQuery:a})},n.toggleSearch=function(e){return n.setState({search:e.target.checked})},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.played_factions,n=e.winner;return r.a.createElement(p.a,null,r.a.createElement(p.a.Dropdown,{fluid:!0,selection:!0,multiple:!0,search:!0,options:m,value:t,placeholder:"Select the Factions",onChange:this.handleChangeFactions,onSearchChange:this.handleSearchChange}),r.a.createElement(p.a.Dropdown,{fluid:!0,selection:!0,search:!0,options:this.state.value,value:n,placeholder:"Select the Winner",onChange:this.handleWinner,onSearchChange:this.handleSearchChange}),r.a.createElement(p.a.Button,{type:"submit"},"Submit"))}}]),t}(a.Component),g=n(304);var y=function(){return r.a.createElement(g.a,null,r.a.createElement(v,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[167,1,2]]]);
//# sourceMappingURL=main.26efb0cc.chunk.js.map