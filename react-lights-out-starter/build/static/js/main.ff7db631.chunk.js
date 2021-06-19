(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t(37)},21:function(e,a,t){},27:function(e,a,t){},29:function(e,a,t){},31:function(e,a,t){},33:function(e,a,t){},35:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),s=(t(21),t(2)),o=t(3),i=t(5),m=t(4),u=t(6),p=t(12),d=t(15),h=t(7),f=(t(27),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),a}(n.Component)),b=(t(29),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).state={hasWon:!1,board:t.createBoard()},t.handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"createBoard",value:function(){for(var e=[],a=0;a<this.props.nrows;a++){for(var t=[],n=0;n<this.props.ncols;n++)t.push(Math.random()<this.props.chanceLightStartsOn);e.push(t)}return e}},{key:"flipCellsAround",value:function(e){var a=this.props,t=a.ncols,n=a.nrows,r=this.state.board,c=e.split("-").map(Number),l=Object(d.a)(c,2),s=l[0],o=l[1];function i(e,a){a>=0&&a<t&&e>=0&&e<n&&(r[e][a]=!r[e][a])}i(s,o),i(s,o-1),i(s,o+1),i(s-1,o),i(s+1,o);var m=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:m})}},{key:"handleClick",value:function(){this.resetGame()}},{key:"resetGame",value:function(){var e=this;this.setState(function(a){return{hasWon:!1,board:e.createBoard()}});new Audio("./reset.mp3").play()}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return r.a.createElement("div",{className:"game-winner-wrapper"},r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"Winner"},r.a.createElement("span",{className:"neon-orange"},"You"),r.a.createElement("span",{className:"neon-blue"},"Win!!!"))),r.a.createElement("div",{className:"play-again-btn-wrapper"},r.a.createElement("div",{onClick:this.handleClick,className:"play-again-btn"},r.a.createElement("span",{id:"play-btn",className:"neon-orange"},"Play"),r.a.createElement("span",{id:"play-btn",className:"neon-blue play-btn"},"Again?"))));for(var a=[],t=0;t<this.props.nrows;t++){for(var n=[],c=function(a){var c="".concat(t,"-").concat(a);n.push(r.a.createElement(f,{key:c,isLit:e.state.board[t][a],flipCellsAroundMe:function(){return e.flipCellsAround(c)}}))},l=0;l<this.props.ncols;l++)c(l);a.push(r.a.createElement("tr",{key:t},n))}return r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,a)),r.a.createElement("div",{className:"play-again-btn-wrapper"},r.a.createElement("div",{onClick:this.handleClick},r.a.createElement("span",{id:"play-btn",className:"neon-orange"},"New"),r.a.createElement("span",{id:"play-btn",className:"neon-blue play-btn"},"Board?"))))}}]),a}(n.Component));b.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.35};var E=b,g=(t(31),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rules-wrapper"},r.a.createElement("img",{alt:"rules-gif",className:"rules-img",src:"https://i.gyazo.com/7a277191e25a7f180d6f08670db1a6d5.gif"}),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-arrow-down neon-blue"}),r.a.createElement("i",{className:"fas fa-arrow-down neon-orange"}),r.a.createElement("i",{className:"fas fa-arrow-down neon-blue"})),r.a.createElement("img",{alt:"rules-gif",className:"rules-img",src:"https://i.gyazo.com/9ea0d8da36968be4ccf0b3dbc2da7d3d.gif"}),r.a.createElement("h1",{className:"neon-blue rules-title"},"Rules"),r.a.createElement("hr",{className:"hr-line"}),r.a.createElement("h3",{className:"neon-orange rules-text"},"Turn all the lights off.......and Have Fun"),r.a.createElement("img",{alt:"rules-gif",className:"rules-img",src:"https://i.gyazo.com/9ea0d8da36968be4ccf0b3dbc2da7d3d.gif"}),r.a.createElement("div",null,r.a.createElement("i",{className:"fas fa-arrow-up neon-orange"}),r.a.createElement("i",{className:"fas fa-arrow-up neon-blue"}),r.a.createElement("i",{className:"fas fa-arrow-up neon-orange"})),r.a.createElement("img",{alt:"rules-gif",className:"rules-img",src:"https://i.gyazo.com/7a277191e25a7f180d6f08670db1a6d5.gif"}))}}]),a}(n.Component)),v=(t(33),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-div"},r.a.createElement("p",{className:"copyright"},"Crafted by a ",r.a.createElement("i",{className:"fas fa-user-ninja fa-2x"}),r.a.createElement("a",{href:"http://www.mycodedojo.com"}," \xa9 2021 MyCodeDojo")))}}]),a}(n.Component)),y=(t(35),function(e){function a(){return Object(s.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"image",property:"og:image",content:"https://image.prntscr.com/image/yiujgjgzSHqyxvP8UAlb1w.png"}),r.a.createElement("meta",{name:"url",property:"og:url",content:"https://zen-bhaskara-0d6cd4.netlify.app/"}),r.a.createElement("meta",{name:"description",property:"og:description",content:"LightsOut | Can YOU turn the lights out?"}),r.a.createElement("meta",{name:"author",content:"Michael Cooper"}),r.a.createElement("meta",{name:"publish_date",property:"og:publish_date",content:"2021-06-18T00:00:00-0600"}),r.a.createElement("script",{src:"https://kit.fontawesome.com/8cc1b75eb3.js",crossorigin:"anonymous"}),r.a.createElement("title",null,"LightsOut")),r.a.createElement("audio",{src:"./game-bg.mp3",loop:!0,autoPlay:!0}),r.a.createElement("div",{className:"game-wrapper"},r.a.createElement(E,null),r.a.createElement(g,null),r.a.createElement(v,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.ff7db631.chunk.js.map