(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{170:function(e,t,n){e.exports=n(305)},305:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),c=n.n(r),i=n(28),l=n(29),s=n(31),u=n(30),h=n(32),d=n(159),p=n(315),v=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.game,n=e.onSelectGame;return o.a.createElement(p.a,null,o.a.createElement(p.a.Item,{as:"a",href:"http://root.livingrules.io/",content:"Rules"}),o.a.createElement(p.a.Item,{name:"root",active:"root"===t,content:"Root",onClick:n}),o.a.createElement(p.a.Item,{name:"vast",active:"vast"===t,content:"Vast",onClick:n}))}}]),t}(a.Component),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return[o.a.createElement(d.a,{centered:!0,size:"medium",src:"https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg"}),o.a.createElement(v,{game:this.props.game,onSelectGame:this.props.onSelectGame})]}}]),t}(a.Component),g=n(314),m=[{key:"mc",value:"mc",text:"Marquise de Cat"},{key:"ed",value:"ed",text:"Eyrie Dynasties"},{key:"wa",value:"wa",text:"Woodland Alliance"},{key:"vb",value:"vb",text:"Vagabond"},{key:"lc",value:"lc",text:"Lizard Cult"},{key:"rc",value:"rc",text:"Riverfolk Company"}],y=[{key:"kn",value:"kn",text:"Knight"},{key:"pa",value:"pa",text:"Paladin"},{key:"gb",value:"gb",text:"Goblins"},{key:"sk",value:"sk",text:"Skeletons"},{key:"dg",value:"dg",text:"Dragon"},{key:"sp",value:"sp",text:"Spider"},{key:"cv",value:"cv",text:"Cave"},{key:"mn",value:"mn",text:"Manor"},{key:"tf",value:"tf",text:"Thief"},{key:"ec",value:"ec",text:"Enchanter"}],k=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={options:m,searchQuery:null,value:null,winner:null},n.handleWinner=function(e,t){var a=t.value;return n.setState({winner:a})},n.handleChangeFactions=function(e,t){var a=t.value,o=[],r=a.forEach(function(e){var t=n.state.options.find(function(t){return t.key===e});return o.push(t),t});console.log(r),n.setState({played_factions:a,value:o})},n.handleSearchChange=function(e,t){var a=t.searchQuery;return n.setState({searchQuery:a})},n.toggleSearch=function(e){return n.setState({search:e.target.checked})},n.chooseOptions=function(){switch(n.props.game){case"root":return m;case"vast":return y;default:return}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.game!==e.game&&this.setState({options:this.chooseOptions(),played_factions:[],searchQuery:null,value:null,winner:null})}},{key:"render",value:function(){var e=this.state,t=e.options,n=e.played_factions,a=e.value,r=e.winner;return o.a.createElement(g.a,null,o.a.createElement(g.a.Dropdown,{fluid:!0,selection:!0,multiple:!0,search:!0,options:t,value:n,placeholder:"Select the Factions",onChange:this.handleChangeFactions,onSearchChange:this.handleSearchChange}),o.a.createElement(g.a.Dropdown,{fluid:!0,selection:!0,search:!0,options:a,value:r,placeholder:"Select the Winner",onChange:this.handleWinner,onSearchChange:this.handleSearchChange}),o.a.createElement(g.a.Button,{type:"submit"},"Submit"))}}]),t}(a.Component),w=n(313),b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedgame:"root"},n.handleSelectGame=function(e,t){var a=t.name;return n.setState({selectedgame:a})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(w.a,null,o.a.createElement(f,{game:this.state.selectedgame,onSelectGame:this.handleSelectGame}),o.a.createElement(k,{game:this.state.selectedgame}))}}]),t}(a.Component),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function O(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(b,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RootLogger",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RootLogger","/service-worker.js");S?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):O(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):O(t,e)})}}()}},[[170,1,2]]]);
//# sourceMappingURL=main.5ffbdba5.chunk.js.map