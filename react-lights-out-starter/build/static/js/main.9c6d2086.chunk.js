(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(34)},19:function(e,a,t){},24:function(e,a,t){},26:function(e,a,t){},28:function(e,a,t){},30:function(e,a,t){},32:function(e,a,t){},34:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),s=(t(19),t(2)),i=t(3),o=t(5),m=t(4),u=t(6),p=t(10),d=t(13),h=t(7),f=(t(24),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"handleClick",value:function(e){this.props.flipCellsAroundMe()}},{key:"render",value:function(){var e="Cell"+(this.props.isLit?" Cell-lit":"");return r.a.createElement("td",{className:e,onClick:this.handleClick})}}]),a}(n.Component)),b=(t(26),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"rules-wrapper"},r.a.createElement("div",null,r.a.createElement("div",{className:"arrows"},r.a.createElement("i",{className:"fas fa-arrow-down"}),r.a.createElement("i",{className:"fas fa-arrow-down"}),r.a.createElement("i",{className:"fas fa-arrow-down"})),r.a.createElement("img",{src:"https://i.gyazo.com/64b960d2e4d5a86840a20fd396a589c5.gif",className:"img-gif",alt:"tutorial gif"})),r.a.createElement("div",{className:"rules-wrap2"},r.a.createElement("h1",{className:"rules-title"},"Rules"),r.a.createElement("hr",{className:"hr-line"}),r.a.createElement("h3",{className:"rules-text"},"Turn all the lights off"),r.a.createElement("h3",{className:"rules-text"},"Have Fun")),r.a.createElement("img",{src:"https://i.gyazo.com/64b960d2e4d5a86840a20fd396a589c5.gif",className:"img-gif",alt:"tutorial gif"}),r.a.createElement("div",{className:"arrows"},r.a.createElement("i",{className:"fas fa-arrow-up"}),r.a.createElement("i",{className:"fas fa-arrow-up"}),r.a.createElement("i",{className:"fas fa-arrow-up"})))}}]),a}(n.Component)),E=(t(28),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer-div"},r.a.createElement("p",{className:"copyright"},"Crafted by a ",r.a.createElement("i",{className:"fas fa-user-ninja fa-2x"}),r.a.createElement("a",{href:"http://www.mycodedojo.com"}," \xa9 2021 MyCodeDojo")))}}]),a}(n.Component)),g=(t(30),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={hasWon:!1,board:t.createBoard(),gameStarted:!1},t.handleClick=t.handleClick.bind(Object(h.a)(Object(h.a)(t))),t.handleNew=t.handleNew.bind(Object(h.a)(Object(h.a)(t))),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"createBoard",value:function(){for(var e=[],a=0;a<this.props.nrows;a++){for(var t=[],n=0;n<this.props.ncols;n++)t.push(Math.random()<this.props.chanceLightStartsOn);e.push(t)}return e}},{key:"flipCellsAround",value:function(e){var a=this.props,t=a.ncols,n=a.nrows,r=this.state.board,c=e.split("-").map(Number),l=Object(d.a)(c,2),s=l[0],i=l[1];function o(e,a){a>=0&&a<t&&e>=0&&e<n&&(r[e][a]=!r[e][a])}o(s,i),o(s,i-1),o(s,i+1),o(s-1,i),o(s+1,i);var m=r.every(function(e){return e.every(function(e){return!e})});this.setState({board:r,hasWon:m})}},{key:"handleClick",value:function(){this.resetGame()}},{key:"handleNew",value:function(){this.newGame()}},{key:"newGame",value:function(){var e=this;this.setState(function(a){return{hasWon:!1,board:e.createBoard(),gameStarted:!0}});new Audio("./game-bg-new.mp3").play()}},{key:"resetGame",value:function(){var e=this;this.setState(function(a){return{hasWon:!1,board:e.createBoard(),gameStarted:!0}})}},{key:"render",value:function(){var e=this;if(this.state.hasWon)return r.a.createElement("div",{className:"game-winner-wrapper"},r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"Big-Winner"},r.a.createElement("span",{className:"neon-orange"},"You"),r.a.createElement("span",{className:"neon-blue"},"Win!!!"))),r.a.createElement("img",{className:"win-img",src:"https://media.giphy.com/media/o75ajIFH0QnQC3nCeD/giphy.gif",alt:"the office erin excited Big Win"}),r.a.createElement("div",{className:"play-again-btn-wrapper"},r.a.createElement("div",{onClick:this.handleClick,className:"play-again-btn"},r.a.createElement("span",{id:"play-btn",className:"neon-orange"},"Play"),r.a.createElement("span",{id:"play-btn",className:"neon-blue play-btn"},"Again?"))));if(this.state.gameStarted){for(var a=[],t=0;t<this.props.nrows;t++){for(var n=[],c=function(a){var c="".concat(t,"-").concat(a);n.push(r.a.createElement(f,{key:c,isLit:e.state.board[t][a],flipCellsAroundMe:function(){return e.flipCellsAround(c)}}))},l=0;l<this.props.ncols;l++)c(l);a.push(r.a.createElement("tr",{key:t},n))}return r.a.createElement("div",null,r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"neon-orange"},"Lights"),r.a.createElement("div",{className:"neon-blue"},"Out")),r.a.createElement("table",{className:"Board"},r.a.createElement("tbody",null,a)),r.a.createElement("div",{className:"play-again-btn-wrapper"},r.a.createElement("div",{onClick:this.handleClick},r.a.createElement("span",{id:"play-btn",className:"neon-orange"},"New"),r.a.createElement("span",{id:"play-btn",className:"neon-blue play-btn"},"Board?"))),r.a.createElement(b,null),r.a.createElement(E,null))}return r.a.createElement("div",{className:"game-winner-wrapper"},r.a.createElement("div",{className:"Board-title"},r.a.createElement("div",{className:"Winner"},r.a.createElement("span",{className:"neon-orange"},"Ready"),r.a.createElement("span",{className:"neon-blue"},"To Play?"))),r.a.createElement("div",{className:"play-again-btn-wrapper"},r.a.createElement("div",{onClick:this.handleNew,className:"play-again-btn"},r.a.createElement("span",{id:"play-btn",className:"neon-orange"},"Click"),r.a.createElement("span",{id:"play-btn",className:"neon-blue play-btn"},"Here"))))}}]),a}(n.Component));g.defaultProps={nrows:5,ncols:5,chanceLightStartsOn:.35};var v=g,y=(t(32),function(e){function a(){return Object(s.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("meta",{name:"theme-color",content:"#000000"}),r.a.createElement("meta",{name:"image",property:"og:image",content:"https://image.prntscr.com/image/yiujgjgzSHqyxvP8UAlb1w.png"}),r.a.createElement("meta",{name:"url",property:"og:url",content:"https://zen-bhaskara-0d6cd4.netlify.app/"}),r.a.createElement("meta",{name:"description",property:"og:description",content:"LightsOut | Can YOU turn the lights out?"}),r.a.createElement("meta",{name:"author",property:"og:author",content:"Michael Cooper"}),r.a.createElement("meta",{name:"publish_date",property:"og:publish_date",content:"2021-06-18T00:00:00-0600"}),r.a.createElement("script",{src:"https://kit.fontawesome.com/8cc1b75eb3.js",crossorigin:"anonymous"}),r.a.createElement("title",null,"LightsOut")),r.a.createElement("div",{className:"game-wrapper"},r.a.createElement(v,null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.9c6d2086.chunk.js.map