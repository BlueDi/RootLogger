(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{280:function(e,t,a){e.exports=a(452)},452:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(66),l=a.n(r),i=a(30),c=a(31),s=a(33),u=a(32),p=a(34),h=a(269),m=a(477),g=a(80).rootRulesLink,d=a(97).vastRulesLink,f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"chooseRulesLink",value:function(){switch(this.props.game){case"root":return g;case"vast":return d}}},{key:"render",value:function(){var e=this.props,t=e.game,a=e.onSelectGame,n=e.onShowStats;return o.a.createElement(m.a,null,o.a.createElement(m.a.Item,{as:"a",href:this.chooseRulesLink(),target:"_blank",content:"Rules"}),o.a.createElement(v,{name:"root",game:t,onSelectGame:a}),o.a.createElement(v,{name:"vast",game:t,onSelectGame:a}),o.a.createElement(b,{onShowStats:n}))}}]),t}(n.Component),v=function(e){var t=e.name,a=e.game,n=e.onSelectGame,r=t[0].toUpperCase()+t.slice(1);return o.a.createElement(m.a.Item,{name:t,active:a===t,content:r,onClick:n})};function y(e){var t=new FileReader;t.onload=(e.target.files[0],function(e){localStorage.setItem("logged_data",e.target.result)}),t.readAsText(e.target.files[0])}var b=function(e){var t=e.onShowStats,a="text/json;charset=utf-8,"+encodeURIComponent(localStorage.getItem("logged_data"));return o.a.createElement(m.a.Menu,{position:"right"},o.a.createElement(m.a.Item,{content:"Stats",onClick:t}),o.a.createElement(m.a.Item,{as:"label",htmlFor:"file",className:"ui icon button"},"Import",o.a.createElement("input",{type:"file",id:"file",style:{display:"none"},onChange:y})),o.a.createElement(m.a.Item,{as:"a",href:"data:"+a,download:"rootlogger_data.json",content:"Export"}))},k=f,w=a(80).rootLogo,E=a(97).vastLogo,O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"chooseLogo",value:function(){switch(this.props.game){case"root":return w;case"vast":return E;default:return}}},{key:"render",value:function(){var e=this.props,t=e.game,a=e.onSelectGame,n=e.onShowStats;return[o.a.createElement(h.a,{key:"logo",centered:!0,size:"medium",src:this.chooseLogo()}),o.a.createElement(k,{key:"menu",game:t,onSelectGame:a,onShowStats:n})]}}]),t}(n.Component),x=a(55),C=a(470),j=a(469),S=a(465),_=a(472),W=a(480),F=a(487),M=a(482),A=a(471),G=a(483),N=a(474),D=a(80).rootFactionsOptions,I=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"getWinnerImage",value:function(e){var t=this.props.session,a=D.findIndex(function(e){return e.value===t.winner});return a>=0?D[a].image:null}},{key:"setWhichGraph",value:function(){var e=this.props.session;if(e.points)return e.points.length>1?o.a.createElement(P,{session:this.props.session}):o.a.createElement(R,{session:this.props.session})}},{key:"render",value:function(){var e=this.props.session;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a.Header,null,e.date),o.a.createElement(j.a.Content,{image:!0},o.a.createElement(h.a,{wrapped:!0,size:"medium",src:this.getWinnerImage(e.winner)}),o.a.createElement(j.a.Description,null,this.setWhichGraph())))}}]),t}(n.Component),P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"createLabels",value:function(){var e=this.props.session.played_factions,t=[];return e.forEach(function(e,a){var n=D.findIndex(function(t){return t.value===e}),o=D[n];t.push({key:a,y:10+20*a,text:o.text,fill:"#".concat(o.color)})}),t}},{key:"transformPoints",value:function(){var e=this.props.session,t=e.points[0];return Object.keys(t).map(function(t){if("turn"!==t){var a=D.findIndex(function(e){return e.value===t}),n=D[a];return e.points.map(function(e,a){return{x:a+1,y:Number(e[t]),color:"#".concat(n.color)}})}return null})}},{key:"render",value:function(){var e=this.transformPoints(),t=this.createLabels();return o.a.createElement(_.a,{containerComponent:o.a.createElement(W.a,{voronoiDimension:"x",labels:function(e){return"y: ".concat(e.y)},labelComponent:o.a.createElement(F.a,{cornerRadius:0,flyoutStyle:{fill:"white"}})})},t.map(function(e){return o.a.createElement(M.a,{key:e.text,x:60,y:e.y,text:e.text,style:{fill:e.fill}})}),e.map(function(e,t){if(null!=e){var a=e[0].color||"black";return o.a.createElement(A.a,{key:t,data:e,domain:{y:[0,30]},animate:!0,style:{data:{stroke:a},labels:{fill:a}}})}return null}))}}]),t}(n.Component),R=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"transformPoints",value:function(){var e=this.props.session.points[0];return Object.keys(e).map(function(t){if("turn"!==t){var a=D.findIndex(function(e){return e.value===t}),n=D[a];return{x:n.text,y:parseInt(e[t],10),fill:"#".concat(n.color)}}return null})}},{key:"render",value:function(){return o.a.createElement(_.a,{domainPadding:{x:20}},o.a.createElement(G.a,{style:{grid:{stroke:"#B3E5FC",strokeWidth:.25}},dependentAxis:!0}),o.a.createElement(G.a,{style:{tickLabels:{padding:1,angle:10,verticalAnchor:"middle",textAnchor:"start"}}}),o.a.createElement(N.a,{style:{data:{fill:function(e){return e.fill}}},data:this.transformPoints(),animate:!0,alignment:"start"}))}}]),t}(n.Component),L=I,T=a(80).rootFactionsOptions,V=a(97).vastCharactersOptions;function q(e){var t=function(e){switch(e.game){case"root":return T;case"vast":return V;default:return}}(e).find(function(t){return t.value===e.winner});return"undefined"==typeof t?{text:"No one"}:t}var B=function(e){var t=e.logged_data,a=e.onClick,n="undefined"==typeof t.played_factions?".":" of "+t.played_factions.length+" players.",r=q(t).text+" won a game"+n,l=new Date-new Date(t.date),i=Math.floor(l/1e3/60/60/24);return o.a.createElement(C.a.Event,{onClick:a},o.a.createElement(C.a.Content,null,o.a.createElement(C.a.Summary,{content:r,date:i+" days ago"})))},U=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state=Object(x.a)({},a.props.index,!1),a.handleOpen=function(){a.setState(Object(x.a)({},a.props.index,!0))},a.handleClose=function(){a.setState(Object(x.a)({},a.props.index,!1))},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(j.a,{trigger:o.a.createElement(B,{logged_data:this.props.session,onClick:this.handleOpen})},o.a.createElement(L,{session:this.props.session}))}}]),t}(n.Component),Y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:JSON.parse(localStorage.getItem("logged_data"))||[]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="undefined"!==typeof this.state.data&&this.state.data.length>0?o.a.createElement(S.a,null):null;return o.a.createElement(o.a.Fragment,null,e,o.a.createElement(C.a,null,this.state.data.map(function(e,t){return o.a.createElement(U,{key:t,index:t,session:e})})))}}]),t}(n.Component),z=a(95),K=a(467),Q=a(473),J=a(106),Z=a(261),H=a.n(Z),X=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChangeNumberOfTurns=function(e,t){var n=t.name,o=t.value;o=Number(o),a.prepareRows(o),a.setState(Object(x.a)({},n,o))},a.onToggle=function(){a.setState(function(e){return{checked:!e.checked,number_of_turns:1}},a.prepareRows(1))},a.onGridRowsUpdated=function(e){var t=e.fromRow,n=e.toRow,o=e.updated,r=Object.values(o)[0];if(!isNaN(r)){var l=a.props,i=l.handleChange,c=l.points.slice();r=r>30?"30":""+r<0?"0":""+r,o[Object.keys(o)[0]]=r;for(var s=t;s<=n;s++)c[s]=Object(z.a)({},c[s],o);i({},{name:"points",value:c})}},a.prepareValue=function(){var e=a.props.value;return null!=e&&e.forEach(function(e){e.name=e.text,e.editable="true"}),e},a.prepareRows=function(e){var t=[],n={},o=a.props,r=o.handleChange,l=o.value;null!=l&&l.forEach(function(e){return n[e.key]=0});for(var i=0;i<e;i++)t.push(Object(z.a)({turn:i+1},n));r({},{name:"points",value:t})},a.state={checked:!1,number_of_turns:1},a.prepareRows(1),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.checked,a=e.number_of_turns,n=this.props,r=n.handleChangePoints,l=n.points,i=this.prepareValue();return i&&o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a.Group,{widths:"equal"},o.a.createElement(K.a.Checkbox,{label:"Victory Points per turn",onChange:this.onToggle,checked:t}),this.state.checked&&o.a.createElement(K.a.Input,{key:"nturns",label:"Number of Turns",type:"number",min:"1",name:"number_of_turns",value:a,placeholder:"1",onChange:this.handleChangeNumberOfTurns})),this.state.checked?o.a.createElement(K.a.Field,null,o.a.createElement(H.a,{columns:[{key:"turn",name:"Turn"}].concat(Object(J.a)(i)),rowGetter:function(e){return l[e]},rowsCount:a,minHeight:35*(a+1),onGridRowsUpdated:this.onGridRowsUpdated,enableCellSelect:!0})):o.a.createElement(K.a.Group,{widths:"equal"},i.map(function(e){return o.a.createElement(K.a.Input,{key:e.value,label:"".concat(e.text," Points"),type:"number",min:"0",max:"30",value:l[0][e.value],name:e.value,placeholder:"".concat(e.text," Points"),onChange:r})})))}}]),t}(n.Component),$=a(80),ee=$.rootFactionsOptions,te=$.rootMapOptions,ae=$.rootDeckOptions,ne=a(97).vastCharactersOptions,oe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={date:"",deck:null,map:null,options:ee,points:[],searchQuery:null,value:null,winner:null},a.handleChange=function(e,t){var n=t.name,o=t.value;return a.setState(Object(x.a)({},n,o))},a.handleChangeFactions=function(e,t){var n=t.value,o=[];n.forEach(function(e){var t=a.state.options.find(function(t){return t.key===e});return o.push(t),t}),a.setState({played_factions:n,value:o})},a.handleChangePoints=function(e,t){var n=t.name,o=t.value;return a.setState({points:[Object(z.a)({},a.state.points[0],Object(x.a)({},n,o))]})},a.handleSearchChange=function(e,t){var n=t.searchQuery;return a.setState({searchQuery:n})},a.handleSubmit=function(){var e=Object(z.a)({},a.state,{game:a.props.game});delete e.options,delete e.searchQuery,delete e.value;var t=JSON.parse(localStorage.getItem("logged_data"))||[];t.push(e),localStorage.setItem("logged_data",JSON.stringify(t)),a.setState({date:"",deck:null,map:null,options:a.chooseOptions(),played_factions:[],searchQuery:null,value:null,winner:null})},a.chooseOptions=function(){switch(a.props.game){case"root":return ee;case"vast":return ne;default:return}},a.chooseTypeName=function(){switch(a.props.game){case"root":return"Factions";case"vast":return"Characters";default:return}},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.game!==e.game&&this.setState({deck:null,map:null,options:this.chooseOptions(),played_factions:[],points:[],searchQuery:null,value:null,winner:null})}},{key:"render",value:function(){var e=this.state,t=e.deck,a=e.map,n=e.options,r=e.points,l=e.played_factions,i=e.value,c=e.winner,s=this.props.game[0].toUpperCase()+this.props.game.slice(1),u="Welcome to ".concat(s," Logger!"),p=this.chooseTypeName(),h="Select the ".concat(p),m="root"===this.props.game&&o.a.createElement(o.a.Fragment,null,o.a.createElement(X,{handleChange:this.handleChange,handleChangePoints:this.handleChangePoints,points:r,value:i}),o.a.createElement(K.a.Dropdown,{label:"Map",fluid:!0,selection:!0,search:!0,options:te,value:a,name:"map",placeholder:"Select the Map",onChange:this.handleChange,onSearchChange:this.handleSearchChange}),o.a.createElement(K.a.Dropdown,{label:"Deck",fluid:!0,selection:!0,search:!0,options:ae,value:t,name:"deck",placeholder:"Select the Deck",onChange:this.handleChange,onSearchChange:this.handleSearchChange}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{attached:!0,header:u,content:"Fill out the form below to log your play"}),o.a.createElement(K.a,{className:"attached fluid segment",onSubmit:this.handleSubmit},o.a.createElement(K.a.Input,{label:"Date",fluid:!0,type:"datetime-local",name:"date",onChange:this.handleChange}),o.a.createElement(K.a.Dropdown,{label:p,fluid:!0,selection:!0,multiple:!0,search:!0,options:n,value:l,placeholder:h,onChange:this.handleChangeFactions,onSearchChange:this.handleSearchChange}),o.a.createElement(K.a.Dropdown,{label:"Winner",fluid:!0,selection:!0,search:!0,options:i,value:c,name:"winner",placeholder:"Select the Winner",onChange:this.handleChange,onSearchChange:this.handleSearchChange}),m,o.a.createElement(K.a.Button,{type:"submit"},"Submit")))}}]),t}(n.Component),re=a(476),le=a(478),ie=a(80).rootFactionsOptions,ce=a(97).vastCharactersOptions;function se(e){switch(e){case"root":return ie;case"vast":return ce;default:return}}function ue(e,t){return e.filter(function(e){return e.game===t})}var pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:JSON.parse(localStorage.getItem("logged_data"))||[]},a.countWinners=function(){var e=se(a.props.game);return e.map(function(e){var t=ue(a.state.data,a.props.game).filter(function(t){return t.winner===e.value}).length;return{x:e.text,y:t,fill:e.color,value:e.value}}).filter(function(e){return e.y>0})},a.handleClick=function(){return[{target:"data",mutation:function(e){return"#c43a31"===(e.style&&e.style.stroke)?null:{style:{stroke:"#c43a31",fill:e.style.fill}}}},{target:"labels",mutation:function(e){return e.text===e.datum.y?null:{text:e.datum.y}}}]},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.countWinners();return o.a.createElement(o.a.Fragment,null,o.a.createElement(me,{game:this.props.game,options:se(this.props.game),data:e,storedData:this.state.data}),o.a.createElement(le.a,{width:550,data:e,events:[{target:"data",eventHandlers:{onClick:this.handleClick}}],style:{data:{fill:function(e){return e.fill}}}}))}}]),t}(n.Component),he=function(e){var t=e.value,a=e.text,n=e.label,r=e.color;return o.a.createElement(re.a,null,o.a.createElement(re.a.Value,{style:{color:"#".concat(r||null)}},t),o.a.createElement(re.a.Value,{style:{color:"#".concat(r||null)},text:!0},a),o.a.createElement(re.a.Label,null,n))},me=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"findMaxValue",value:function(e){return Math.max.apply(Math,e.map(function(e){return e.y}))}},{key:"findMinValue",value:function(e){return Math.min.apply(Math,e.map(function(e){return e.y}))}},{key:"findElementWithText",value:function(e,t){return e.find(function(e){return e.x===t})}},{key:"findElementWithValue",value:function(e,t){return e.find(function(e){return e.y===t})}},{key:"countPlaysWithElement",value:function(e){return ue(this.props.storedData,this.props.game).map(function(t){return!!t.played_factions&&t.played_factions.includes(e)}).filter(Boolean).length}},{key:"getPercentWin",value:function(){var e=this;return this.props.options.map(function(t){var a=ue(e.props.storedData,e.props.game).filter(function(e){return e.winner===t.value}).filter(Boolean).length,n=e.countPlaysWithElement(t.value);return 0!==n?a/n:0})}},{key:"getMaxPercentWin",value:function(){var e=this.getPercentWin(),t=e.indexOf(Math.max.apply(Math,Object(J.a)(e)));return[this.props.options[t],e[t]]}},{key:"getMinPercentWin",value:function(){var e=this.getPercentWin(),t=e.indexOf(Math.min.apply(Math,Object(J.a)(e)));return[this.props.options[t],e[t]]}},{key:"render",value:function(){var e=this.props.data,t=this.findElementWithValue(e,this.findMaxValue(e)),a=this.findElementWithValue(e,this.findMinValue(e)),n=this.getMaxPercentWin(),r=this.getMinPercentWin(),l=t?o.a.createElement(he,{value:t.y,text:t.x,label:"Most Wins",color:t.fill}):null,i=a?o.a.createElement(he,{value:a.y,text:a.x,label:"Least Wins",color:a.fill}):null,c=n?o.a.createElement(he,{value:Math.floor(100*n[1])+"%",text:n[0].text,label:"Most Wins of Played Games",color:n[0].color}):null,s=r?o.a.createElement(he,{value:Math.floor(100*r[1])+"%",text:r[0].text,label:"Least Wins of Played Games",color:r[0].color}):null;return o.a.createElement(re.a.Group,{widths:"2"},l,i,c,s)}}]),t}(n.Component),ge=pe,de=a(466),fe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedgame:"root",showStats:!1},a.handleSelectGame=function(e,t){var n=t.name;return a.setState({selectedgame:n})},a.handleShowStats=function(e){return a.setState({showStats:!a.state.showStats})},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.showStats?o.a.createElement(ge,{game:this.state.selectedgame}):o.a.createElement(o.a.Fragment,null,o.a.createElement(oe,{game:this.state.selectedgame}),o.a.createElement(Y,null));return o.a.createElement(de.a,null,o.a.createElement(O,{game:this.state.selectedgame,onSelectGame:this.handleSelectGame,onShowStats:this.handleShowStats}),e)}}]),t}(n.Component),ve=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ye(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(fe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RootLogger",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RootLogger","/service-worker.js");ve?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ye(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ye(t,e)})}}()},80:function(e,t){t.rootLogo="https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg",t.rootRulesLink="http://root.livingrules.io/",t.rootFactionsOptions=[{key:"mc",value:"mc",text:"Marquise de Cat",color:"EC7A21",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Marquise-de-Cat.png"},{key:"ed",value:"ed",text:"Eyrie Dynasties",color:"26447D",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Eyrie-Dynasties.png"},{key:"wa",value:"wa",text:"Woodland Alliance",color:"60B657",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Woodland-Alliance.png"},{key:"vb",value:"vb",text:"Vagabond",color:"8A8987",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Vagabond.png"},{key:"lc",value:"lc",text:"Lizard Cult",color:"F4EF6F",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Lizard-Cult.jpg"},{key:"rc",value:"rc",text:"Riverfolk Company",color:"FFF59D",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Riverfolk-Company.jpg"},{key:"cc",value:"cc",text:"Corvid Conspiracy",color:"56489F",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Crow.jpg"},{key:"gc",value:"gc",text:"The Great Dutchy",color:"CA8245",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Mole.jpg"}],t.rootMapOptions=[{key:"a",value:"a",text:"Autumn"},{key:"w",value:"w",text:"Winter"},{key:"m",value:"m",text:"Mountain"},{key:"l",value:"l",text:"Lake"}],t.rootDeckOptions=[{key:"d",value:"d",text:"Default"},{key:"ep",value:"ep",text:"Exiles & Partisans"}]},97:function(e,t){t.vastLogo="https://cf.geekdo-images.com/imagepage/img/d_-BA8wyApUR45GfQFcAKYulbOU=/fit-in/900x600/filters:no_upscale()/pic2962290.jpg",t.vastRulesLink="https://boardgamegeek.com/filepage/136381/rules-summaries-and-one-pagers",t.vastCharactersOptions=[{key:"kn",value:"kn",text:"Knight",color:"DDAB28",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU3jrdXB5EVP540NLcz1N0-Y5fOUIdYEy5MeFvtrwyXaOLqcP"},{key:"pa",value:"pa",text:"Paladin",color:"997E19",image:"https://cf.geekdo-images.com/imagepage/img/bDzo6b-V_fvEpufrWiKTgSAa9q8=/fit-in/900x600/filters:no_upscale()/pic4151593.png"},{key:"gb",value:"gb",text:"Goblins",color:"6FBF4B",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb46COElYmNenCpiBhAYYkv0yl5E4QTK10kzrG32M82JIY1Hx"},{key:"sk",value:"sk",text:"Skeletons",color:"0A4721",image:"https://cf.geekdo-images.com/imagepage/img/EJ65HKvEOkEEQbz-Q2NT0_zaSWM=/fit-in/900x600/filters:no_upscale()/pic4151592.png"},{key:"go",value:"go",text:"Ghoul",color:"F96C4C",image:"https://cf.geekdo-images.com/imagepage/img/b6IKKg1vqY_oBIDYaEjFfksUn8o=/fit-in/900x600/filters:no_upscale()/pic3343034.jpg"},{key:"dg",value:"dg",text:"Dragon",color:"CF202E",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNMTZAokJFirw3Er_TAo2i1CY08z6epqM4MBa9FekOPylomqGlng0V5s"},{key:"nu",value:"nu",text:"Nightmare Unicorn",color:"944D51",image:"https://cf.geekdo-images.com/imagepage/img/oH04KivYLOC8pyZ6VR09QSeqDYk=/fit-in/900x600/filters:no_upscale()/pic3343040.jpg"},{key:"sp",value:"sp",text:"Spider",color:"8D0103",image:"https://cf.geekdo-images.com/imagepage/img/oul-pAZVzh3ak5Gu13UzYW8XPRI=/fit-in/900x600/filters:no_upscale()/pic4151595.png"},{key:"cv",value:"cv",text:"Cave",color:"5F2E7E",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZvU982DsIYOTIsvS1KPlMEhRKNJPlYgCj9gE2pw0xmg6kXNKnw"},{key:"gh",value:"gh",text:"Ghost",color:"5BA0AF",image:"https://cf.geekdo-images.com/imagepage/img/IxF8mVtwO-liR0Nkj8eG6mGewgw=/fit-in/900x600/filters:no_upscale()/pic3343029.jpg"},{key:"mn",value:"mn",text:"Manor",color:"511471",image:"https://cf.geekdo-images.com/imagepage/img/mLDhZMKwNoZar7Ees9VOCK5f-Co=/fit-in/900x600/filters:no_upscale()/pic4151591.png"},{key:"tf",value:"tf",text:"Thief",color:"777679",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_ZCZ64uW9eWhEy9TK6zeBNOwaQZYr7eIqYyr_3iuu4hwVRybiw"},{key:"ec",value:"ec",text:"Enchanter",color:"787A77",image:"https://cf.geekdo-images.com/imagepage/img/yhrgOxqxFzvF1YehogSp4wVffww=/fit-in/900x600/filters:no_upscale()/pic4151590.png"}]}},[[280,1,2]]]);
//# sourceMappingURL=main.b8fddd9f.chunk.js.map