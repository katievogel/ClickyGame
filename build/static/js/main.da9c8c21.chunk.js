(window.webpackJsonpimage_match=window.webpackJsonpimage_match||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(3),c=a.n(l),o=(a(16),a(4)),s=a(1),r=a(5),m=a(6),d=a(9),g=a(7),h=a(10);var p=function(e){return i.a.createElement("div",{className:"tiles",onClick:e.onCardClick},i.a.createElement("img",{src:e.image,alt:"cat pic"}))};var u=function(e){var t;return t=!0===e.win_showing?{display:"block"}:{display:"none"},i.a.createElement("div",{style:t,className:"modal win_modal fade show",tabIndex:"-1",role:"dialog"},i.a.createElement("div",{className:"modal-dialog",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title"},"U haz won!"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal",onClick:e.close,"aria-label":"Close"},"CLOSE")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("img",{src:"/ClickyGame/titan_content.jpg",alt:"content cat"}),i.a.createElement("p",null,"Titan is pleased, though generally disinterested in most things. See if you can win again!")))))};var f=function(e){var t;return t=!0===e.lose_showing?{display:"block"}:{display:"none"},i.a.createElement("div",{style:t,className:"modal lose_modal fade show",tabIndex:"-1",role:"dialog"},i.a.createElement("div",{className:"modal-dialog",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h5",{className:"modal-title"},"U haz lost!"),i.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal",onClick:e.close,"aria-label":"Close"},"CLOSE")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("img",{src:"/ClickyGame/titan_displeased.jpg",alt:"displeased cat"}),i.a.createElement("p",null,"Titan is disappointed by your lack of skill! Try again!")))))},k=(a(17),a(8));function y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function b(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}return e}var w=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={titan:k,score:0,highScore:0,lose_showing:!1,win_showing:!1},a.close=function(){console.log("close"),a.setState({lose_showing:!1}),a.setState({win_showing:!1})},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"highScoreCheck",value:function(){var e=this.state.highScore;return e=this.state.score>=e?this.state.score:this.state.highScore}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("div",{className:"jumbotron"},i.a.createElement("h1",null,"Clicky Game!"),i.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")),i.a.createElement("ul",null,i.a.createElement("li",null,"Score: ",this.state.score," | Top Score: ",this.state.highScore),i.a.createElement("li",null,i.a.createElement("a",{href:"/"},"Reset Scores and Try Again")))),i.a.createElement("main",null,this.state.titan.map(function(t,a){return i.a.createElement(p,{key:t.id,image:"/ClickyGame"+t.image,onCardClick:function(){if(!1===e.state.titan[a].clicked){console.log("card click from App "+t.image);var n=Object(s.a)(e.state.titan);n[a].clicked=!0;var i=e.state.score+1;e.setState({score:i}),12===i?(console.log("U haz won!"),e.setState({highScore:i,win_showing:!0})):12!==e.state.score&&e.setState({score:e.state.score+1,titan:b(n)})}else{console.log("U haz lost.");var l=Object(s.a)(e.state.titan).map(function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?y(a,!0).forEach(function(t){Object(o.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):y(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e);return t.clicked=!1,t});e.setState({highScore:e.highScoreCheck(),score:0,titan:b(l),lose_showing:!0})}}})})),i.a.createElement(u,{win_showing:this.state.win_showing,close:this.close}),i.a.createElement(f,{lose_showing:this.state.lose_showing,close:this.close}))}}]),t}(n.Component);c.a.render(i.a.createElement(w,null),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"image":"/Titan.jpg","clicked":false},{"id":2,"image":"/titan_chubby.jpg","clicked":false},{"id":3,"image":"/titan_hide_nose.jpg","clicked":false},{"id":4,"image":"/titan_jedi.jpg","clicked":false},{"id":5,"image":"/titan_kitten.jpg","clicked":false},{"id":6,"image":"/titan_post_turkey.jpg","clicked":false},{"id":7,"image":"/titan_tucked_in.jpg","clicked":false},{"id":8,"image":"/titan_windowsill.jpg","clicked":false},{"id":9,"image":"/titan_bigeyes.jpg","clicked":false},{"id":10,"image":"/titan_kitten_towel_lap.jpg","clicked":false},{"id":11,"image":"/titan_posed_chair.jpg","clicked":false},{"id":12,"image":"/titan_proper.jpg","clicked":false}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.da9c8c21.chunk.js.map