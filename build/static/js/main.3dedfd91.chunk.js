(window.webpackJsonpimage_match=window.webpackJsonpimage_match||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(3),l=a.n(i),r=(a(16),a(4)),o=a(1),s=a(5),d=a(6),m=a(9),g=a(7),u=a(10);var p=function(e){return c.a.createElement("div",{className:"tiles",onClick:e.onCardClick},c.a.createElement("img",{src:e.image,alt:"cat pic"}))};var h=function(e){return c.a.createElement("div",{class:"modal",tabindex:"-1",role:"dialog"},c.a.createElement("div",{class:"modal-dialog",role:"document"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("div",{class:"modal-header"},c.a.createElement("h5",{class:"modal-title"},"U haz won!")),c.a.createElement("div",{class:"modal-body"},c.a.createElement("img",{src:"/titan_content.jpg",alt:"content cat"}),c.a.createElement("p",null,"Titan is pleased, though generally disinterested in most things. See if you can win again!")))))};var f=function(e){return c.a.createElement("div",{class:"modal",tabindex:"-1",role:"dialog"},c.a.createElement("div",{class:"modal-dialog",role:"document"},c.a.createElement("div",{class:"modal-content"},c.a.createElement("div",{class:"modal-header"},c.a.createElement("h5",{class:"modal-title"},"U haz lost!")),c.a.createElement("div",{class:"modal-body"},c.a.createElement("img",{src:"/titan_displeased.jpg",alt:"displeased cat"}),c.a.createElement("p",null,"Titan is shocked by your lack of skill! Try again!")))))},k=(a(17),a(8));function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function j(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*t),n=e[t];e[t]=e[a],e[a]=n}return e}var v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={titan:k,score:0,highScore:0},a}return Object(u.a)(t,e),Object(d.a)(t,[{key:"highScoreCheck",value:function(){var e=this.state.highScore;return e=this.state.score>=e?this.state.score:this.state.highScore}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"jumbotron"},c.a.createElement("h1",null,c.a.createElement("a",{href:"/"},"Clicky Game!")),c.a.createElement("h2",null,"Click on an image to earn points, but don't click on any more than once!")),c.a.createElement("ul",null,c.a.createElement("li",null,"Score: ",this.state.score," | Top Score: ",this.state.highScore))),c.a.createElement("main",null,this.state.titan.map(function(t,a){return c.a.createElement(p,{key:t.id,image:t.image,onCardClick:function(){if(!1===e.state.titan[a].clicked){console.log("card click from App "+t.image);var n=Object(o.a)(e.state.titan);n[a].clicked=!0,e.setState({score:e.state.score+1,titan:j(n)})}else if(12===e.state.score)console.log("U haz won!");else{console.log("U haz lost.");var c=Object(o.a)(e.state.titan).map(function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(a,!0).forEach(function(t){Object(r.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e);return t.clicked=!1,t});e.setState({highScore:e.highScoreCheck(),score:0,titan:j(c)})}}})})),c.a.createElement(h,null),c.a.createElement(f,null))}}]),t}(n.Component);l.a.render(c.a.createElement(v,null),document.getElementById("root"))},8:function(e){e.exports=JSON.parse('[{"id":1,"image":"/Titan.jpg","clicked":false},{"id":2,"image":"/titan_chubby.jpg","clicked":false},{"id":3,"image":"/titan_hide_nose.jpg","clicked":false},{"id":4,"image":"/titan_jedi.jpg","clicked":false},{"id":5,"image":"/titan_kitten.jpg","clicked":false},{"id":6,"image":"/titan_post_turkey.jpg","clicked":false},{"id":7,"image":"/titan_tucked_in.jpg","clicked":false},{"id":8,"image":"/titan_windowsill.jpg","clicked":false},{"id":9,"image":"/titan_bigeyes.jpg","clicked":false},{"id":10,"image":"/titan_kitten_towel_lap.jpg","clicked":false},{"id":11,"image":"/titan_posed_chair.jpg","clicked":false},{"id":12,"image":"/titan_proper.jpg","clicked":false}]')}},[[11,1,2]]]);
//# sourceMappingURL=main.3dedfd91.chunk.js.map