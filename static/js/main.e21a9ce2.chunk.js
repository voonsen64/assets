(this.webpackJsonpassets=this.webpackJsonpassets||[]).push([[0],{16:function(e,t,n){},2:function(e,t,n){e.exports={row:"Counter_row__1d1x8",value:"Counter_value__YdIZI",button:"Counter_button__1wYT4",textbox:"Counter_textbox__UwWfc",asyncButton:"Counter_asyncButton__1MlfB Counter_button__1wYT4"}},23:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(5),o=n.n(c),s=(n(16),n.p+"static/media/logo.b2e5a01e.svg"),u=n(11),i=n(3),l=n(9),d=n.n(l),j=n(10),b=n(4);function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(t){return setTimeout((function(){return t({data:e})}),500)}))}var p=Object(b.b)("counter/fetchCount",function(){var e=Object(j.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),x=Object(b.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(e){e.value+=1},decrement:function(e){e.value-=1},incrementByAmount:function(e,t){e.value+=t.payload}},extraReducers:function(e){e.addCase(p.pending,(function(e){e.status="loading"})).addCase(p.fulfilled,(function(e,t){e.status="idle",e.value+=t.payload}))}}),f=x.actions,m=f.increment,O=f.decrement,v=f.incrementByAmount,g=function(e){return e.counter.value},_=x.reducer,k=n(2),w=n.n(k),N=n(1);function A(){var e=Object(i.c)(g),t=Object(i.b)(),n=Object(r.useState)("2"),a=Object(u.a)(n,2),c=a[0],o=a[1],s=Number(c)||0;return Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:w.a.row,children:[Object(N.jsx)("button",{className:w.a.button,"aria-label":"Decrement value",onClick:function(){return t(O())},children:"-"}),Object(N.jsx)("span",{className:w.a.value,children:e}),Object(N.jsx)("button",{className:w.a.button,"aria-label":"Increment value",onClick:function(){return t(m())},children:"+"})]}),Object(N.jsxs)("div",{className:w.a.row,children:[Object(N.jsx)("input",{className:w.a.textbox,"aria-label":"Set increment amount",value:c,onChange:function(e){return o(e.target.value)}}),Object(N.jsx)("button",{className:w.a.button,onClick:function(){return t(v(s))},children:"Add Amount"}),Object(N.jsx)("button",{className:w.a.asyncButton,onClick:function(){return t(p(s))},children:"Add Async"}),Object(N.jsx)("button",{className:w.a.button,onClick:function(){return t((e=s,function(t,n){g(n())%2===1&&t(v(e))}));var e},children:"Add If Odd"})]})]})}n(23);var C=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)("header",{className:"App-header",children:[Object(N.jsx)("img",{src:s,className:"App-logo",alt:"logo"}),Object(N.jsx)(A,{}),Object(N.jsxs)("p",{children:["Edit ",Object(N.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(N.jsxs)("span",{children:[Object(N.jsx)("span",{children:"Learn "}),Object(N.jsx)("a",{className:"App-link",href:"https://reactjs.org/",target:"_blank",rel:"noopener noreferrer",children:"React"}),Object(N.jsx)("span",{children:", "}),Object(N.jsx)("a",{className:"App-link",href:"https://redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux"}),Object(N.jsx)("span",{children:", "}),Object(N.jsx)("a",{className:"App-link",href:"https://redux-toolkit.js.org/",target:"_blank",rel:"noopener noreferrer",children:"Redux Toolkit"}),",",Object(N.jsx)("span",{children:" and "}),Object(N.jsx)("a",{className:"App-link",href:"https://react-redux.js.org/",target:"_blank",rel:"noopener noreferrer",children:"React Redux"})]})]})})},y=Object(b.a)({reducer:{counter:_}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(i.a,{store:y,children:Object(N.jsx)(C,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[24,1,2]]]);
//# sourceMappingURL=main.e21a9ce2.chunk.js.map