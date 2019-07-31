(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{283:function(e,t,a){e.exports=a(453)},453:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(67),l=a.n(r),i=a(27),c=a(28),s=a(30),u=a(29),m=a(31),p=a(272),h=a(477),g=a(71).rootRulesLink,d=a(82).vastRulesLink,f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"chooseRulesLink",value:function(){switch(this.props.game){case"root":return g;case"vast":return d}}},{key:"render",value:function(){var e=this.props,t=e.game,a=e.onSelectGame,n=e.onShowView;return o.a.createElement(h.a,{stackable:!0},o.a.createElement(h.a.Item,{as:"a",href:this.chooseRulesLink(),target:"_blank",content:"Rules"}),o.a.createElement(v,{name:"root",game:t,onSelectGame:a}),o.a.createElement(v,{name:"vast",game:t,onSelectGame:a}),o.a.createElement(b,{onShowView:n}))}}]),t}(n.Component),v=function(e){var t=e.name,a=e.game,n=e.onSelectGame,r=t[0].toUpperCase()+t.slice(1);return o.a.createElement(h.a.Item,{name:t,active:a===t,content:r,onClick:n})};function y(e){var t=new FileReader;t.onload=(e.target.files[0],function(e){localStorage.setItem("logged_data",e.target.result)}),t.readAsText(e.target.files[0])}var b=function(e){var t=e.onShowView,a="text/json;charset=utf-8,"+encodeURIComponent(localStorage.getItem("logged_data"));return o.a.createElement(h.a.Menu,{position:"right"},o.a.createElement(h.a.Item,{content:"Recommendation",name:"recommendation",onClick:t}),o.a.createElement(h.a.Item,{content:"Stats",name:"stats",onClick:t}),o.a.createElement(h.a.Item,{as:"label",htmlFor:"file",className:"ui icon button"},"Import",o.a.createElement("input",{type:"file",id:"file",style:{display:"none"},onChange:y})),o.a.createElement(h.a.Item,{as:"a",href:"data:"+a,download:"rootlogger_data.json",content:"Export"}))},k=f,w=a(71).rootLogo,E=a(82).vastLogo,O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"chooseLogo",value:function(){switch(this.props.game){case"root":return w;case"vast":return E;default:return}}},{key:"render",value:function(){var e=this.props,t=e.game,a=e.onSelectGame,n=e.onShowView;return[o.a.createElement(p.a,{key:"logo",centered:!0,size:"medium",src:this.chooseLogo()}),o.a.createElement(k,{key:"menu",game:t,onSelectGame:a,onShowView:n})]}}]),t}(n.Component),x=a(48),C=a(471),j=a(470),S=a(466),_=a(473),R=a(482),A=a(486),M=a(479),F=a(472),W=a(485),I=a(475),N=a(71).rootFactionsOptions,P=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"getWinnerImage",value:function(e){var t=this.props.session,a=N.findIndex(function(e){return e.value===t.winner});return a>=0?N[a].image:null}},{key:"setWhichGraph",value:function(){var e=this.props.session;if(e.points)return e.points.length>1?o.a.createElement(D,{session:this.props.session}):o.a.createElement(G,{session:this.props.session})}},{key:"render",value:function(){var e=this.props.session;return o.a.createElement(o.a.Fragment,null,o.a.createElement(j.a.Header,null,e.date),o.a.createElement(j.a.Content,{image:!0},o.a.createElement(p.a,{wrapped:!0,size:"medium",src:this.getWinnerImage(e.winner)}),o.a.createElement(j.a.Description,null,this.setWhichGraph())))}}]),t}(n.Component),D=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"createLabels",value:function(){var e=this.props.session.played_factions,t=[];return e.forEach(function(e,a){var n=N.findIndex(function(t){return t.value===e}),o=N[n];t.push({key:a,y:10+20*a,text:o.text,fill:"#".concat(o.color)})}),t}},{key:"transformPoints",value:function(){var e=this.props.session,t=e.points[0];return Object.keys(t).map(function(t){if("turn"!==t){var a=N.findIndex(function(e){return e.value===t}),n=N[a];return e.points.map(function(e,a){return{x:a+1,y:Number(e[t]),color:"#".concat(n.color)}})}return null})}},{key:"render",value:function(){var e=this.transformPoints(),t=this.createLabels();return o.a.createElement(_.a,{containerComponent:o.a.createElement(R.a,{voronoiDimension:"x",labels:function(e){return"y: ".concat(e.y)},labelComponent:o.a.createElement(A.a,{cornerRadius:0,flyoutStyle:{fill:"white"}})})},t.map(function(e){return o.a.createElement(M.a,{key:e.text,x:60,y:e.y,text:e.text,style:{fill:e.fill}})}),e.map(function(e,t){if(null!=e){var a=e[0].color||"black";return o.a.createElement(F.a,{key:t,data:e,domain:{y:[0,30]},animate:!0,style:{data:{stroke:a},labels:{fill:a}}})}return null}))}}]),t}(n.Component),G=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"transformPoints",value:function(){var e=this.props.session.points[0];return Object.keys(e).map(function(t){if("turn"!==t){var a=N.findIndex(function(e){return e.value===t}),n=N[a];return{x:n.text,y:parseInt(e[t],10),fill:"#".concat(n.color)}}return null})}},{key:"render",value:function(){return o.a.createElement(_.a,{domainPadding:{x:20}},o.a.createElement(W.a,{style:{grid:{stroke:"#B3E5FC",strokeWidth:.25}},dependentAxis:!0}),o.a.createElement(W.a,{style:{tickLabels:{padding:1,angle:10,verticalAnchor:"middle",textAnchor:"start"}}}),o.a.createElement(I.a,{style:{data:{fill:function(e){return e.fill}}},data:this.transformPoints(),animate:!0,alignment:"start"}))}}]),t}(n.Component),V=P,L=a(71).rootFactionsOptions,T=a(82).vastCharactersOptions;function U(e){var t=function(e){switch(e.game){case"root":return L;case"vast":return T;default:return}}(e).find(function(t){return t.value===e.winner});return"undefined"==typeof t?{text:"No one"}:t}var Y=function(e){var t=e.logged_data,a=e.onClick,n="undefined"==typeof t.played_factions?".":" of "+t.played_factions.length+" players.",r=U(t).text+" won a game"+n,l=new Date-new Date(t.date),i=Math.floor(l/1e3/60/60/24);return o.a.createElement(C.a.Event,{onClick:a},o.a.createElement(C.a.Content,null,o.a.createElement(C.a.Summary,{content:r,date:i+" days ago"})))},q=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state=Object(x.a)({},a.props.index,!1),a.handleOpen=function(){a.setState(Object(x.a)({},a.props.index,!0))},a.handleClose=function(){a.setState(Object(x.a)({},a.props.index,!1))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(j.a,{trigger:o.a.createElement(Y,{logged_data:this.props.session,onClick:this.handleOpen})},o.a.createElement(V,{session:this.props.session}))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:JSON.parse(localStorage.getItem("logged_data"))||[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e="undefined"!==typeof this.state.data&&this.state.data.length>0?o.a.createElement(S.a,null):null;return o.a.createElement(o.a.Fragment,null,e,o.a.createElement(C.a,null,this.state.data.map(function(e,t){return o.a.createElement(q,{key:t,index:t,session:e})})))}}]),t}(n.Component),z=a(96),K=a(468),Q=a(474),J=a(487),H=a(106),Z=a(263),X=a.n(Z),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChangeNumberOfTurns=function(e,t){var n=t.name,o=t.value;o=Number(o),a.prepareRows(o),a.setState(Object(x.a)({},n,o))},a.onToggle=function(e,t){var n=t.name;a.setState(function(e){var t;return t={},Object(x.a)(t,n,!e[n]),Object(x.a)(t,"number_of_turns",1),t},a.prepareRows(1))},a.onGridRowsUpdated=function(e){var t=e.fromRow,n=e.toRow,o=e.updated,r=Object.values(o)[0];if(!isNaN(r)){var l=a.props,i=l.handleChange,c=l.points.slice();r=r>30?"30":""+r<0?"0":""+r,o[Object.keys(o)[0]]=r;for(var s=t;s<=n;s++)c[s]=Object(z.a)({},c[s],o);i({},{name:"points",value:c})}},a.prepareValue=function(){var e=a.props.value;return null!=e&&e.forEach(function(e){e.name=e.text,e.editable="true"}),e},a.prepareRows=function(e){var t=[],n={},o=a.props,r=o.handleChange,l=o.value;null!=l&&l.forEach(function(e){return n[e.key]=0});for(var i=0;i<e;i++)t.push(Object(z.a)({turn:i+1},n));r({},{name:"points",value:t})},a.state={checked:!1,number_of_turns:1},a.prepareRows(1),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.checked,a=e.number_of_turns,n=this.props,r=n.domination,l=n.handleChange,i=n.handleChangePoints,c=n.points,s=this.prepareValue(),u=!r;return s&&o.a.createElement(o.a.Fragment,null,o.a.createElement(K.a.Group,{widths:"equal"},o.a.createElement(K.a.Checkbox,{label:"Domination Win",onChange:l,name:"domination",value:u,checked:r}),o.a.createElement(K.a.Checkbox,{label:"Victory Points per Turn",onChange:this.onToggle,name:"checked",checked:t}),this.state.checked&&o.a.createElement(K.a.Input,{key:"nturns",label:"Number of Turns",type:"number",min:"1",name:"number_of_turns",value:a,placeholder:"1",onChange:this.handleChangeNumberOfTurns})),this.state.checked?o.a.createElement(K.a.Field,null,o.a.createElement(X.a,{columns:[{key:"turn",name:"Turn"}].concat(Object(H.a)(s)),rowGetter:function(e){return c[e]},rowsCount:a,minHeight:35*(a+1),onGridRowsUpdated:this.onGridRowsUpdated,enableCellSelect:!0})):o.a.createElement(K.a.Group,{widths:"equal"},s.map(function(e){return o.a.createElement(K.a.Input,{key:e.value,label:"".concat(e.text," Points"),type:"number",min:"0",max:"30",value:c.length>0?c[0][e.value]:0,name:e.value,placeholder:"".concat(e.text," Points"),onChange:i})})))}}]),t}(n.Component),ee=a(71),te=ee.rootFactionsOptions,ae=ee.rootMapOptions,ne=ee.rootDeckOptions,oe=a(82).vastCharactersOptions,re=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={date:"",deck:null,domination:!1,map:null,options:te,points:[],rating:0,searchQuery:null,value:null,winner:null},a.handleChange=function(e,t){var n=t.name,o=t.value;return a.setState(Object(x.a)({},n,o))},a.handleChangeFactions=function(e,t){var n=t.value,o=[];n.forEach(function(e){var t=a.state.options.find(function(t){return t.key===e});return o.push(t),t}),a.setState({played_factions:n,value:o})},a.handleChangePoints=function(e,t){var n=t.name,o=t.value;return a.setState({points:[Object(z.a)({},a.state.points[0],Object(x.a)({},n,o))]})},a.handleSearchChange=function(e,t){var n=t.searchQuery;return a.setState({searchQuery:n})},a.handleSubmit=function(){var e=Object(z.a)({},a.state,{game:a.props.game});delete e.options,delete e.searchQuery,delete e.value;var t=JSON.parse(localStorage.getItem("logged_data"))||[];t.push(e),localStorage.setItem("logged_data",JSON.stringify(t)),a.setState({date:"",deck:null,domination:!1,map:null,options:a.chooseOptions(),played_factions:[],rating:0,searchQuery:null,value:null,winner:null})},a.handleRate=function(e,t){var n=t.rating;return a.setState({rating:n})},a.chooseOptions=function(){switch(a.props.game){case"root":return te;case"vast":return oe;default:return}},a.chooseTypeName=function(){switch(a.props.game){case"root":return"Factions";case"vast":return"Characters";default:return}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.game!==e.game&&this.setState({deck:null,domination:!1,map:null,options:this.chooseOptions(),played_factions:[],points:[],rating:0,searchQuery:null,value:null,winner:null})}},{key:"render",value:function(){var e=this.state,t=e.deck,a=e.domination,n=e.map,r=e.options,l=e.points,i=e.played_factions,c=e.rating,s=e.value,u=e.winner,m=this.props.game[0].toUpperCase()+this.props.game.slice(1),p="Welcome to ".concat(m," Logger!"),h=this.chooseTypeName(),g="Select the ".concat(h),d="root"===this.props.game&&o.a.createElement(o.a.Fragment,null,o.a.createElement($,{handleChange:this.handleChange,handleChangePoints:this.handleChangePoints,domination:a,points:l,value:s}),o.a.createElement(K.a.Dropdown,{label:"Map",fluid:"fluid",selection:"selection",search:"search",options:ae,value:n,name:"map",placeholder:"Select the Map",onChange:this.handleChange,onSearchChange:this.handleSearchChange}),o.a.createElement(K.a.Dropdown,{label:"Deck",fluid:"fluid",selection:"selection",search:"search",options:ne,value:t,name:"deck",placeholder:"Select the Deck",onChange:this.handleChange,onSearchChange:this.handleSearchChange}));return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{attached:!0,header:p,content:"Fill out the form below to log your play"}),o.a.createElement(K.a,{className:"attached fluid segment",onSubmit:this.handleSubmit},o.a.createElement(K.a.Input,{label:"Date",fluid:"fluid",type:"datetime-local",name:"date",onChange:this.handleChange}),o.a.createElement(K.a.Dropdown,{label:h,fluid:"fluid",selection:"selection",multiple:"multiple",search:"search",options:r,value:i,placeholder:g,onChange:this.handleChangeFactions,onSearchChange:this.handleSearchChange}),o.a.createElement(K.a.Dropdown,{label:"Winner",fluid:"fluid",selection:"selection",search:"search",options:s,value:u,name:"winner",placeholder:"Select the Winner",onChange:this.handleChange,onSearchChange:this.handleSearchChange}),d,o.a.createElement(K.a.Input,{label:"Rating"},o.a.createElement(J.a,{icon:"star",maxRating:5,rating:c,onRate:this.handleRate})),o.a.createElement(K.a.Button,{type:"submit"},"Submit")))}}]),t}(n.Component),le=a(97),ie=a(71),ce=ie.rootFactionsOptions,se=ie.rootPlayersReach,ue=a(82).vastCharactersOptions,me=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={data:JSON.parse(localStorage.getItem("logged_data"))||[]},a.chooseOptions=function(){switch(a.props.game){case"root":return ce;case"vast":return ue;default:return}},a.multiplayerRecommendation=function(){var e=a.chooseOptions(),t=[];return a.randomInReach().forEach(function(a){return t.push(o.a.createElement(Q.a,{icon:!0,key:a,color:e[a].colortext},o.a.createElement(le.a,{name:"user"}),o.a.createElement(Q.a.Content,null,e[a].text)))}),t},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"randomInReach",value:function(){for(var e=this.props.number_of_players,t=this.chooseOptions(),a=[];!this.isArraySumHigher(a);)for(a=[];a.length<e;){var n=Math.floor(Math.random()*t.length);-1===a.indexOf(n)&&a.push(n)}return a}},{key:"isArraySumHigher",value:function(e){var t=this.props.number_of_players,a=this.chooseOptions(),n=[];return e.forEach(function(e){return n.push(a[e].reach||99)}),n.reduce(function(e,t){return e+t},0)>=se[t]}},{key:"render",value:function(){switch(this.props.number_of_players){case 1:return o.a.createElement(Q.a,{negative:!0},o.a.createElement(Q.a.Header,{content:"A solo player can only play against the Automatas"}),o.a.createElement(Q.a.List,null,o.a.createElement(Q.a.Item,{content:"You can select your favourite factions!"}),o.a.createElement(Q.a.Item,{content:"Any of the automatas is compatible with any faction."})));case 0:return o.a.createElement(Q.a,{info:!0},o.a.createElement(Q.a.Header,{content:"Please select the number of players for this session"}),o.a.createElement(Q.a.Content,{content:"You can select your favourite factions!"}));default:return this.multiplayerRecommendation()}}}]),t}(n.Component),pe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={options:ce,max_number_of_players:6,number_of_players:0},a.setMaxNumberOfPlayers=function(){switch(a.props.game){case"root":return 6;case"vast":return 5;default:return 1}},a.handleRate=function(e,t){var n=t.rating;return a.setState({number_of_players:n})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.game!==e.game&&this.setState({max_number_of_players:this.setMaxNumberOfPlayers(),number_of_players:0})}},{key:"render",value:function(){var e=this.state,t=e.max_number_of_players,a=e.number_of_players,n=this.props.game[0].toUpperCase()+this.props.game.slice(1),r="Welcome to ".concat(n," Logger!");return o.a.createElement(o.a.Fragment,null,o.a.createElement(Q.a,{attached:!0,header:r,content:"Fill the settings to generate a new session"}),o.a.createElement(K.a,{className:"attached fluid segment"},o.a.createElement(K.a.Input,{label:"Number of Players"},o.a.createElement(J.a,{icon:"star",maxRating:t,rating:a,onRate:this.handleRate})),o.a.createElement(me,{game:this.props.game,number_of_players:a})))}}]),t}(n.Component),he=a(478),ge=a(483),de=a(71).rootFactionsOptions,fe=a(82).vastCharactersOptions;function ve(e){switch(e){case"root":return de;case"vast":return fe;default:return}}function ye(e,t){return e.filter(function(e){return e.game===t})}var be=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={data:JSON.parse(localStorage.getItem("logged_data"))||[]},a.countWinners=function(){var e=ve(a.props.game);return e.map(function(e){var t=ye(a.state.data,a.props.game).filter(function(t){return t.winner===e.value}).length;return{x:e.text,y:t,fill:e.color,value:e.value}}).filter(function(e){return e.y>0})},a.handleClick=function(){return[{target:"data",mutation:function(e){return"#c43a31"===(e.style&&e.style.stroke)?null:{style:{stroke:"#c43a31",fill:e.style.fill}}}},{target:"labels",mutation:function(e){return e.text===e.datum.y?null:{text:e.datum.y}}}]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.countWinners();return o.a.createElement(o.a.Fragment,null,o.a.createElement(we,{game:this.props.game,options:ve(this.props.game),data:e,storedData:this.state.data}),o.a.createElement(ge.a,{width:550,data:e,events:[{target:"data",eventHandlers:{onClick:this.handleClick}}],style:{data:{fill:function(e){return e.fill}}}}))}}]),t}(n.Component),ke=function(e){var t=e.value,a=e.text,n=e.label,r=e.color;return o.a.createElement(he.a,null,o.a.createElement(he.a.Value,{style:{color:"#".concat(r||null)}},t),o.a.createElement(he.a.Value,{style:{color:"#".concat(r||null)},text:!0},a),o.a.createElement(he.a.Label,null,n))},we=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"findMaxValue",value:function(e){return Math.max.apply(Math,e.map(function(e){return e.y}))}},{key:"findMinValue",value:function(e){return Math.min.apply(Math,e.map(function(e){return e.y}))}},{key:"findElementWithText",value:function(e,t){return e.find(function(e){return e.x===t})}},{key:"findElementWithValue",value:function(e,t){return e.find(function(e){return e.y===t})}},{key:"countPlaysWithElement",value:function(e){return ye(this.props.storedData,this.props.game).map(function(t){return!!t.played_factions&&t.played_factions.includes(e)}).filter(Boolean).length}},{key:"getPercentWin",value:function(){var e=this;return this.props.options.map(function(t){var a=ye(e.props.storedData,e.props.game).filter(function(e){return e.winner===t.value}).filter(Boolean).length,n=e.countPlaysWithElement(t.value);return 0!==n?a/n:0})}},{key:"getMaxPercentWin",value:function(){var e=this.getPercentWin(),t=e.indexOf(Math.max.apply(Math,Object(H.a)(e)));return[this.props.options[t],e[t]]}},{key:"getMinPercentWin",value:function(){var e=this.getPercentWin(),t=e.indexOf(Math.min.apply(Math,Object(H.a)(e)));return[this.props.options[t],e[t]]}},{key:"render",value:function(){var e=this.props.data,t=this.findElementWithValue(e,this.findMaxValue(e)),a=this.findElementWithValue(e,this.findMinValue(e)),n=this.getMaxPercentWin(),r=this.getMinPercentWin(),l=t?o.a.createElement(ke,{value:t.y,text:t.x,label:"Most Wins",color:t.fill}):null,i=a?o.a.createElement(ke,{value:a.y,text:a.x,label:"Least Wins",color:a.fill}):null,c=n?o.a.createElement(ke,{value:Math.floor(100*n[1])+"%",text:n[0].text,label:"Most Wins of Played Games",color:n[0].color}):null,s=r?o.a.createElement(ke,{value:Math.floor(100*r[1])+"%",text:r[0].text,label:"Least Wins of Played Games",color:r[0].color}):null;return o.a.createElement(he.a.Group,{widths:"2"},l,i,c,s)}}]),t}(n.Component),Ee=be,Oe=a(467),xe=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={selectedgame:"root",view:"form"},a.handleSelectGame=function(e,t){var n=t.name;return a.setState({selectedgame:n})},a.handleShowView=function(e,t){var n=t.name;a.state.view===n?a.setState({view:"form"}):a.setState({view:n})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"setContent",value:function(){var e=this.state,t=e.selectedgame;switch(e.view){case"stats":return o.a.createElement(Ee,{game:t});case"recommendation":return o.a.createElement(pe,{game:t});case"form":default:return o.a.createElement(o.a.Fragment,null,o.a.createElement(re,{game:t}),o.a.createElement(B,null))}}},{key:"render",value:function(){var e=this.state.selectedgame,t=this.setContent();return o.a.createElement(Oe.a,null,o.a.createElement(O,{game:e,onSelectGame:this.handleSelectGame,onShowView:this.handleShowView}),t)}}]),t}(n.Component),Ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function je(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(xe,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/RootLogger",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/RootLogger","/service-worker.js");Ce?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):je(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):je(t,e)})}}()},71:function(e,t){t.rootLogo="https://cf.geekdo-images.com/imagepage/img/RhpM7ioEqBhBuSOwMpN5Vcqcztk=/fit-in/900x600/filters:no_upscale()/pic3791326.jpg",t.rootRulesLink="http://root.livingrules.io/",t.rootPlayersReach={2:17,3:18,4:21,5:25,6:28},t.rootFactionsOptions=[{key:"mc",value:"mc",text:"Marquise de Cat",reach:10,color:"EC7A21",colortext:"orange",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Marquise-de-Cat.png"},{key:"ed",value:"ed",text:"Eyrie Dynasties",reach:7,color:"26447D",colortext:"blue",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Eyrie-Dynasties.png"},{key:"wa",value:"wa",text:"Woodland Alliance",reach:3,color:"60B657",colortext:"green",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Woodland-Alliance.png"},{key:"vb",value:"vb",text:"Vagabond",reach:5,color:"8A8987",colortext:"grey",image:"https://ledergames.com/w/wp-content/uploads/2019/03/The-Vagabond.png"},{key:"lc",value:"lc",text:"Lizard Cult",reach:2,color:"F4EF6F",colortext:"yellow",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Lizard-Cult.jpg"},{key:"rc",value:"rc",text:"Riverfolk Company",reach:5,color:"FFF59D",colortext:"teal",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Riverfolk-Company.jpg"},{key:"cc",value:"cc",text:"Corvid Conspiracy",reach:3,color:"56489F",colortext:"violet",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Crow.jpg"},{key:"gc",value:"gc",text:"The Great Dutchy",reach:8,color:"CA8245",colortext:"brown",image:"https://ledergames.com/w/wp-content/uploads/2019/03/Mole.jpg"}],t.rootMapOptions=[{key:"a",value:"a",text:"Autumn"},{key:"w",value:"w",text:"Winter"},{key:"m",value:"m",text:"Mountain"},{key:"l",value:"l",text:"Lake"}],t.rootDeckOptions=[{key:"d",value:"d",text:"Default"},{key:"ep",value:"ep",text:"Exiles & Partisans"}]},82:function(e,t){t.vastLogo="https://cf.geekdo-images.com/imagepage/img/d_-BA8wyApUR45GfQFcAKYulbOU=/fit-in/900x600/filters:no_upscale()/pic2962290.jpg",t.vastRulesLink="https://boardgamegeek.com/filepage/136381/rules-summaries-and-one-pagers",t.vastCharactersOptions=[{key:"kn",value:"kn",text:"Knight",color:"DDAB28",colortext:"yellow",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzU3jrdXB5EVP540NLcz1N0-Y5fOUIdYEy5MeFvtrwyXaOLqcP"},{key:"pa",value:"pa",text:"Paladin",color:"997E19",colortext:"yellow",image:"https://cf.geekdo-images.com/imagepage/img/bDzo6b-V_fvEpufrWiKTgSAa9q8=/fit-in/900x600/filters:no_upscale()/pic4151593.png"},{key:"gb",value:"gb",text:"Goblins",color:"6FBF4B",colortext:"green",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVb46COElYmNenCpiBhAYYkv0yl5E4QTK10kzrG32M82JIY1Hx"},{key:"sk",value:"sk",text:"Skeletons",color:"0A4721",colortext:"green",image:"https://cf.geekdo-images.com/imagepage/img/EJ65HKvEOkEEQbz-Q2NT0_zaSWM=/fit-in/900x600/filters:no_upscale()/pic4151592.png"},{key:"go",value:"go",text:"Ghoul",color:"F96C4C",colortext:"orange",image:"https://cf.geekdo-images.com/imagepage/img/b6IKKg1vqY_oBIDYaEjFfksUn8o=/fit-in/900x600/filters:no_upscale()/pic3343034.jpg"},{key:"dg",value:"dg",text:"Dragon",color:"CF202E",colortext:"red",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdNMTZAokJFirw3Er_TAo2i1CY08z6epqM4MBa9FekOPylomqGlng0V5s"},{key:"nu",value:"nu",text:"Nightmare Unicorn",color:"944D51",colortext:"red",image:"https://cf.geekdo-images.com/imagepage/img/oH04KivYLOC8pyZ6VR09QSeqDYk=/fit-in/900x600/filters:no_upscale()/pic3343040.jpg"},{key:"sp",value:"sp",text:"Spider",color:"8D0103",colortext:"red",image:"https://cf.geekdo-images.com/imagepage/img/oul-pAZVzh3ak5Gu13UzYW8XPRI=/fit-in/900x600/filters:no_upscale()/pic4151595.png"},{key:"cv",value:"cv",text:"Cave",color:"5F2E7E",colortext:"purple",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXZvU982DsIYOTIsvS1KPlMEhRKNJPlYgCj9gE2pw0xmg6kXNKnw"},{key:"gh",value:"gh",text:"Ghost",color:"5BA0AF",colortext:"blue",image:"https://cf.geekdo-images.com/imagepage/img/IxF8mVtwO-liR0Nkj8eG6mGewgw=/fit-in/900x600/filters:no_upscale()/pic3343029.jpg"},{key:"mn",value:"mn",text:"Manor",color:"511471",colortext:"purple",image:"https://cf.geekdo-images.com/imagepage/img/mLDhZMKwNoZar7Ees9VOCK5f-Co=/fit-in/900x600/filters:no_upscale()/pic4151591.png"},{key:"tf",value:"tf",text:"Thief",color:"777679",colortext:"grey",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_ZCZ64uW9eWhEy9TK6zeBNOwaQZYr7eIqYyr_3iuu4hwVRybiw"},{key:"ec",value:"ec",text:"Enchanter",color:"787A77",colortext:"grey",image:"https://cf.geekdo-images.com/imagepage/img/yhrgOxqxFzvF1YehogSp4wVffww=/fit-in/900x600/filters:no_upscale()/pic4151590.png"}]}},[[283,1,2]]]);
//# sourceMappingURL=main.39ff7a6b.chunk.js.map