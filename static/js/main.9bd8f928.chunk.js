(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{171:function(e,t,n){e.exports=n(306)},306:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(37),c=n.n(r),i=n(28),l=n(29),s=n(31),u=n(30),h=n(32),p=n(160),d=n(316),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"chooseRulesLink",value:function(){switch(this.props.game){case"root":return"http://root.livingrules.io/";case"vast":return"https://boardgamegeek.com/filepage/136381/rules-summaries-and-one-pagers"}}},{key:"render",value:function(){var e=this.props,t=e.game,n=e.onSelectGame;return o.a.createElement(d.a,null,o.a.createElement(d.a.Item,{as:"a",href:this.chooseRulesLink(),target:"_blank",content:"Rules"}),o.a.createElement(d.a.Item,{name:"root",active:"root"===t,content:"Root",onClick:n}),o.a.createElement(d.a.Item,{name:"vast",active:"vast"===t,content:"Vast",onClick:n}))}}]),t}(a.Component),m=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"chooseLogo",value:function(){switch(this.props.game){case"root":return"https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg";case"vast":return"https://cf.geekdo-images.com/imagepage/img/d_-BA8wyApUR45GfQFcAKYulbOU=/fit-in/900x600/filters:no_upscale()/pic2962290.jpg";default:return}}},{key:"render",value:function(){return[o.a.createElement(p.a,{centered:!0,size:"medium",src:this.chooseLogo()}),o.a.createElement(g,{game:this.props.game,onSelectGame:this.props.onSelectGame})]}}]),t}(a.Component),v=n(149),f=n(315),k=[{key:"mc",value:"mc",text:"Marquise de Cat"},{key:"ed",value:"ed",text:"Eyrie Dynasties"},{key:"wa",value:"wa",text:"Woodland Alliance"},{key:"vb",value:"vb",text:"Vagabond"},{key:"lc",value:"lc",text:"Lizard Cult"},{key:"rc",value:"rc",text:"Riverfolk Company"},{key:"cc",value:"cc",text:"Corvid Conspiracy"},{key:"gc",value:"gc",text:"The Great Dutchy"}],y=[{key:"d",value:"d",text:"Default"},{key:"w",value:"w",text:"Winter"},{key:"m",value:"m",text:"Mountain"},{key:"l",value:"l",text:"Lake"}],w=[{key:"d",value:"d",text:"Default"},{key:"ep",value:"ep",text:"Exiles & Partisans"}],b=[{key:"kn",value:"kn",text:"Knight"},{key:"pa",value:"pa",text:"Paladin"},{key:"gb",value:"gb",text:"Goblins"},{key:"sk",value:"sk",text:"Skeletons"},{key:"dg",value:"dg",text:"Dragon"},{key:"sp",value:"sp",text:"Spider"},{key:"cv",value:"cv",text:"Cave"},{key:"mn",value:"mn",text:"Manor"},{key:"tf",value:"tf",text:"Thief"},{key:"ec",value:"ec",text:"Enchanter"}],C=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={deck:null,map:null,options:k,searchQuery:null,value:null,winner:null},n.handleChange=function(e,t){var a=t.name,o=t.value;return n.setState(Object(v.a)({},a,o))},n.handleChangeFactions=function(e,t){var a=t.value,o=[];a.forEach(function(e){var t=n.state.options.find(function(t){return t.key===e});return o.push(t),t}),n.setState({played_factions:a,value:o})},n.handleSearchChange=function(e,t){var a=t.searchQuery;return n.setState({searchQuery:a})},n.toggleSearch=function(e){return n.setState({search:e.target.checked})},n.chooseOptions=function(){switch(n.props.game){case"root":return k;case"vast":return b;default:return}},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.game!==e.game&&this.setState({deck:null,map:null,options:this.chooseOptions(),played_factions:[],searchQuery:null,value:null,winner:null})}},{key:"render",value:function(){var e=this.state,t=e.deck,n=e.map,a=e.options,r=e.played_factions,c=e.value,i=e.winner;return o.a.createElement(f.a,null,o.a.createElement(f.a.Dropdown,{fluid:!0,selection:!0,multiple:!0,search:!0,options:a,value:r,placeholder:"Select the Factions",onChange:this.handleChangeFactions,onSearchChange:this.handleSearchChange}),o.a.createElement(f.a.Dropdown,{fluid:!0,selection:!0,search:!0,options:c,value:i,name:"winner",placeholder:"Select the Winner",onChange:this.handleChange,onSearchChange:this.handleSearchChange}),"root"===this.props.game&&o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a.Dropdown,{fluid:!0,selection:!0,search:!0,options:y,value:n,name:"map",placeholder:"Select the Map",onChange:this.handleChange,onSearchChange:this.handleSearchChange}),o.a.createElement(f.a.Dropdown,{fluid:!0,selection:!0,search:!0,options:w,value:t,name:"deck",placeholder:"Select the Deck",onChange:this.handleChange,onSearchChange:this.handleSearchChange})),o.a.createElement(f.a.Button,{type:"submit"},"Submit"))}}]),t}(a.Component),S=n(314),x=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedgame:"root"},n.handleSelectGame=function(e,t){var a=t.name;return n.setState({selectedgame:a})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(S.a,null,o.a.createElement(m,{game:this.state.selectedgame,onSelectGame:this.handleSelectGame}),o.a.createElement(C,{game:this.state.selectedgame}))}}]),t}(a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(o.a.createElement(x,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RootLogger",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RootLogger","/service-worker.js");O?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()}},[[171,1,2]]]);
//# sourceMappingURL=main.9bd8f928.chunk.js.map