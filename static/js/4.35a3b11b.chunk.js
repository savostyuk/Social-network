(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{295:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__3iPoG",dialogsItems:"Dialogs_dialogsItems__2So2D",active:"Dialogs_active__11CEO",dialog:"Dialogs_dialog__1wvyN",messages:"Dialogs_messages__2nTe5",message:"Dialogs_message__2ha5K"}},296:function(e,s,a){e.exports={dialogs:"DialogItem_dialogs__3ffWX",dialogsItems:"DialogItem_dialogsItems__11ETp",active:"DialogItem_active__1PBKB",dialog:"DialogItem_dialog__2nRZr",messages:"DialogItem_messages__pIBqP",message:"DialogItem_message__33XAD"}},297:function(e,s,a){e.exports={dialogs:"Message_dialogs__3uk-K",dialogsItems:"Message_dialogsItems__1OvUU",active:"Message_active__2qOIi",dialog:"Message_dialog__3gHN5",messages:"Message_messages__F5E-x",message:"Message_message__14qsM"}},303:function(e,s,a){"use strict";a.r(s);var t=a(1),i=a.n(t),n=a(127),o=a(0),c=a(295),g=a.n(c),d=a(296),l=a.n(d),r=a(15),_=function(e){var s="/dialogs/"+e.id;return Object(o.jsx)("div",{className:l.a.dialog+" "+l.a.active,children:Object(o.jsx)(r.b,{to:s,children:e.name})})},m=a(297),j=a.n(m),u=function(e){return Object(o.jsx)("div",{className:j.a.message,children:e.message})},b=a(11),O=a(90),h=a(128),p=a(34),f=a(57),v=Object(f.a)(50),x=Object(h.a)({form:"dialogAddMessageForm"})((function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(O.a,{component:p.b,name:"newMessageBody",placeholder:"Enter your message",validate:[f.b,v]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Send"})})]})})),I=function(e){var s=e.dialogsPage,a=s.dialogs.map((function(e){return Object(o.jsx)(_,{name:e.name,id:e.id},e.id)})),t=s.messages.map((function(e){return Object(o.jsx)(u,{message:e.message},e.id)}));s.newMessageBody;return!1===e.isAuth?Object(o.jsx)(b.a,{to:"/login"}):Object(o.jsxs)("div",{className:g.a.dialogs,children:[Object(o.jsx)("div",{className:g.a.dialogsItems,children:a}),Object(o.jsxs)("div",{className:g.a.messages,children:[Object(o.jsx)("div",{children:t}),Object(o.jsx)(x,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})},D=a(18),M=a(5),y=a(35),N=a(36),w=a(39),A=a(38),B=function(e){return{isAuth:e.auth.isAuth}},P=a(8);s.default=Object(P.d)(Object(D.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e(Object(n.b)(s))}}})),(function(e){var s=function(s){Object(w.a)(t,s);var a=Object(A.a)(t);function t(){return Object(y.a)(this,t),a.apply(this,arguments)}return Object(N.a)(t,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(e,Object(M.a)({},this.props)):Object(o.jsx)(b.a,{to:"/login"})}}]),t}(i.a.Component);return Object(D.b)(B)(s)}))(I)}}]);
//# sourceMappingURL=4.35a3b11b.chunk.js.map