(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{109:function(e,t,n){"use strict";t.a=n.p+"static/media/user.ab7efdc7.png"},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(49),a=n(4),s="SEND_MESSAGE",c={messages:[{id:1,message:"\u041f\u0440\u0438\u0432\u0435\u0442! \u041a\u0430\u043a \u0434\u0435\u043b\u0430?"},{id:2,message:"\u041d\u0430\u043f\u0438\u0448\u0438 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c..."},{id:3,message:"\u041a\u043e\u0433\u0434\u0430 \u0442\u044b \u043f\u0440\u0438\u0435\u0434\u0435\u0448\u044c?"},{id:4,message:"\u042f \u0442\u0435\u0431\u0435 \u043f\u043e\u0437\u0432\u043e\u043d\u044e!"}],dialogs:[{id:1,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439"},{id:2,name:"\u0410\u043d\u0434\u0440\u0435\u0439"},{id:3,name:"\u0421\u0432\u0435\u0442\u043b\u0430\u043d\u0430"},{id:4,name:"\u0415\u043b\u0435\u043d\u0430"},{id:5,name:"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0430"},{id:6,name:"\u041d\u0430\u0442\u0430\u043b\u044c\u044f"}]},o=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:n}])});default:return e}}},134:function(e,t,n){e.exports={content:"News_content__1gzSJ"}},135:function(e,t,n){e.exports={content:"Music_content__10cda"}},136:function(e,t,n){e.exports={content:"Settings_content__3tkAQ"}},16:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(138),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"f8b8860b-d1a3-4306-b3c2-9fd57ae66342"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo/",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile/",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},169:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__3fAs7",item:"Navbar_item__cD6ue",activeLink:"Navbar_activeLink__32sWq"}},173:function(e,t,n){},24:function(e,t,n){e.exports={formControl:"FormsControl_formControl__394sM",error:"FormsControl_error__3WcDu",formSummaryError:"FormsControl_formSummaryError__2dGI1",textarea:"FormsControl_textarea__3Pu9N",formCheckbox:"FormsControl_formCheckbox__KxTuu",buttonLogin:"FormsControl_buttonLogin__1ifwY",loginForm:"FormsControl_loginForm__3fIFf",loginInput:"FormsControl_loginInput__1ZxmC",loginTitle:"FormsControl_loginTitle__3jqx8"}},27:function(e,t,n){e.exports={userWrapper:"Users_userWrapper__1lpd3",usersPhoto:"Users_usersPhoto__3eWu2",users:"Users_users__MJK0Y",usersInfo:"Users_usersInfo__3IQ-b",username:"Users_username__1ZFX-",status:"Users_status__1M7gV",usersButtonRed:"Users_usersButtonRed__2GJVN",usersButtonGreen:"Users_usersButtonGreen__1P5Dx"}},28:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(4),a=n(59),s=n(0),c=(n(1),n(24)),o=n.n(c),i=n(91),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:o.a.formControl+" "+(c?o.a.error:""),children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({className:o.a.textarea},t),n))}))},d=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{className:o.a.formCheckbox,children:[Object(s.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c)),u]})}},294:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),s=n.n(a),c=(n(169),function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,301)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),a(e),s(e),c(e)}))}),o=n(133),i=n.n(o),u=n(40),l=n(41),d=n(43),f=n(42),j=n(11),p=n(14),b=(n(173),n(17)),h=n.n(b),g=function(){return Object(r.jsxs)("nav",{className:h.a.nav,children:[Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(p.b,{to:"/profile",activeClassName:h.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:"".concat(h.a.item," ").concat(h.a.active),children:Object(r.jsx)(p.b,{to:"/dialogs",activeClassName:h.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(p.b,{to:"/users",activeClassName:h.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(p.b,{to:"/news",activeClassName:h.a.activeLink,children:"News"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(p.b,{to:"/musics",activeClassName:h.a.activeLink,children:"Musics"})}),Object(r.jsx)("div",{className:h.a.item,children:Object(r.jsx)(p.b,{to:"/settings",activeClassName:h.a.activeLink,children:"Settings"})})]})},O=n(134),m=n.n(O),v=function(){return Object(r.jsx)("div",{className:m.a.content,children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})},x=n(135),_=n.n(x),w=function(){return Object(r.jsx)("div",{className:_.a.content,children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})},C=n(136),P=n.n(C),S=function(){return Object(r.jsx)("div",{className:P.a.content,children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435"})},y=n(19),N=n(8),k=n.n(N),U=n(15),I=n(49),E=n(4),F=n(16),T="FOLLOW",L="UNFOLLOW",A="SET_USERS",z="SET_CURRENT_PAGE",M="SET_TOTAL_USERS_COUNT",R="TOGGLE_IS_FETCHING",B="TOGGLE_IS_FOLLOWING_PROGRESS",D={users:[],pageSize:55,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:T,userId:e}},W=function(e){return{type:L,userId:e}},H=function(e){return{type:z,currentPage:e}},J=function(e){return{type:R,isFetching:e}},K=function(e,t){return{type:B,isFetching:e,userId:t}},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!0}):e}))});case L:return Object(E.a)(Object(E.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(E.a)(Object(E.a)({},e),{},{followed:!1}):e}))});case A:return Object(E.a)(Object(E.a)({},e),{},{users:t.users});case z:return Object(E.a)(Object(E.a)({},e),{},{currentPage:t.currentPage});case M:return Object(E.a)(Object(E.a)({},e),{},{totalUsersCount:t.count});case R:return Object(E.a)(Object(E.a)({},e),{},{isFetching:t.isFetching});case B:return Object(E.a)(Object(E.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(I.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},X=n(59),Y=n(27),Z=n.n(Y),q=n(57),Q=n(99),$=n(30),ee=n.n($),te=n(95),ne=n.n(te),re=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,c=e.onPageChanged,o=e.portionSize,i=void 0===o?10:o,u=Math.ceil(t/n),l=[],d=1;d<=u;d++)l.push(d);var f=Math.ceil(u/n),j=Object(a.useState)(1),p=Object(Q.a)(j,2),b=p[0],h=p[1],g=(b-1)*i+1,O=b*i;return Object(r.jsxs)("div",{className:ne()(ee.a.paginator,Object(q.a)({},ee.a.selectedPage,!0)),children:[b>1&&Object(r.jsx)("button",{className:ee.a.button+" "+ee.a.buttonLeft,onClick:function(){h(b-1)},children:"\u276e"}),l.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(r.jsx)("span",{className:ne()(Object(q.a)({},ee.a.selectedPage,s===e),ee.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),f>b&&Object(r.jsx)("button",{className:ee.a.button+" "+ee.a.buttonRight,onClick:function(){h(b+1)},children:"\u276f"})]})},ae=n(109),se=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsxs)("div",{className:Z.a.userWrapper,children:[Object(r.jsx)("div",{className:Z.a.users,children:Object(r.jsx)("div",{children:Object(r.jsx)(p.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:ae.a,alt:"\u0424\u043e\u0442\u043e \u043f\u0440\u043e\u0444\u0438\u043b\u044f",title:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443",className:Z.a.usersPhoto})})})}),Object(r.jsxs)("div",{className:Z.a.usersInfo,children:[Object(r.jsx)("div",{className:Z.a.username,children:t.name}),Object(r.jsx)("div",{className:Z.a.status,children:t.status}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{className:Z.a.usersButtonRed,disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):Object(r.jsx)("button",{className:Z.a.usersButtonGreen,disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]})]})},ce=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,s=e.onPageChanged,c=e.users,o=Object(X.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(re,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)(se,{user:e,followingInProgress:o.followingInProgress,unfollow:o.unfollow,follow:o.follow},e.id)}))})]})},oe=n(45),ie=n(9),ue=n(139),le=Object(ue.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),de=function(e){return e.usersPage.pageSize},fe=function(e){return e.usersPage.totalUsersCount},je=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.isFetching},be=function(e){return e.usersPage.followingInProgress},he=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(oe.a,{}):null,Object(r.jsx)(ce,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),ge=Object(ie.d)(Object(y.b)((function(e){return{users:le(e),pageSize:de(e),totalUsersCount:fe(e),currentPage:je(e),isFetching:pe(e),followingInProgress:be(e)}}),{follow:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(K(!0,e)),t.next=3,F.d.follow(e);case 3:0===t.sent.data.resultCode&&n(G(e)),n(K(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(K(!0,e)),t.next=3,F.d.unfollow(e);case 3:0===t.sent.data.resultCode&&n(W(e)),n(K(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:K,getUsers:function(e,t){return function(){var n=Object(U.a)(k.a.mark((function n(r){var a;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(H(e)),r(J(!0)),n.next=4,F.d.getUsers(e,t);case 4:a=n.sent,r(J(!1)),r((c=a.items,{type:A,users:c})),r((s=a.totalCount,{type:M,count:s}));case 8:case"end":return n.stop()}var s,c}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(he),Oe=n(72),me=n.n(Oe),ve=function(e){return Object(r.jsx)("header",{className:me.a.header,children:Object(r.jsx)("div",{className:me.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{className:me.a.headerButton,onClick:e.logout,children:"\u0412\u044b\u0439\u0442\u0438"})," "]}):Object(r.jsx)(p.b,{to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})})},xe=n(34),_e="social-network/auth/SET_USER_DATA",we="social-network/auth/GET_CAPTCHA_URL_SUCCESS",Ce={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Pe=function(e,t,n,r){return{type:_e,payload:{userId:e,email:t,login:n,isAuth:r}}},Se=function(e){return{type:we,payload:{captchaUrl:e}}},ye=function(){return function(){var e=Object(U.a)(k.a.mark((function e(t){var n,r,a,s,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.email,c=r.login,t(Pe(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ne=function(){return function(){var e=Object(U.a)(k.a.mark((function e(t){var n,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(Se(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:case we:return Object(E.a)(Object(E.a)({},e),t.payload);default:return e}},Ue=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(r.jsx)(ve,Object(E.a)({},this.props))}}]),n}(s.a.Component),Ie=Object(y.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(U.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.a.logout();case 2:0===e.sent.data.resultCode&&t(Pe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ue),Ee=n(131),Fe=n(28),Te=n(68),Le=n(24),Ae=n.n(Le),ze=Object(Ee.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return Object(r.jsxs)("form",{className:Ae.a.loginForm,onSubmit:t,children:[Object(r.jsxs)("div",{className:Ae.a.loginInput,children:[Object(Fe.c)("Email","email",[Te.b],Fe.a),Object(Fe.c)("Password","password",[Te.b],Fe.a,{type:"password"})]}),Object(Fe.c)(null,"rememberMe",null,Fe.a,{type:"checkbox"},"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c"),a&&Object(r.jsx)("img",{src:a}),a&&Object(Fe.c)("Symbols from image","captcha",[Te.b],Fe.a,{}),n&&Object(r.jsx)("div",{className:Ae.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{className:Ae.a.buttonLogin,children:"\u0412\u043e\u0439\u0442\u0438"})})]})})),Me=Object(y.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(U.a)(k.a.mark((function a(s){var c,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,F.a.login(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?s(ye()):(10===c.data.resultCode&&s(Ne()),o=c.data.messages.length>0?c.data.messages:"Some error",s(Object(xe.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(j.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{className:Ae.a.loginTitle,children:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c"}),Object(r.jsx)(ze,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Re="INITIALIZED_SUCCESS",Be={initialized:!1,globalError:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Re:return Object(E.a)(Object(E.a)({},e),{},{initialized:!0});default:return e}},Ge=n(98),We=n(130),He={},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He;return e},Ke=n(141),Ve=n(132),Xe=Object(ie.c)({profilePage:Ge.b,dialogsPage:We.a,sidebar:Je,usersPage:V,auth:ke,form:Ve.a,app:De}),Ye=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,Ze=Object(ie.e)(Xe,Ye(Object(ie.a)(Ke.a)));window.store=Ze;var qe=Ze,Qe=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)(oe.a,{}),children:Object(r.jsx)(e,Object(E.a)({},t))})}},$e=s.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),et=s.a.lazy((function(){return n.e(4).then(n.bind(null,302))})),tt=function(e){Object(d.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandleErrors=function(e){console.error(e)},e}return Object(l.a)(n,[{key:"componentWillMount",value:function(){document.title="\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c"}},{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Ie,{}),Object(r.jsx)(g,{}),Object(r.jsx)("div",{className:"app-wrapper-content",children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(r.jsx)(j.a,{to:"/profile"})}}),Object(r.jsx)(j.b,{path:"/profile/:userId?",render:Qe(et)}),Object(r.jsx)(j.b,{path:"/dialogs",render:Qe($e)}),Object(r.jsx)(j.b,{path:"/users",render:function(){return Object(r.jsx)(ge,{})}}),Object(r.jsx)(j.b,{path:"/login",render:function(){return Object(r.jsx)(Me,{})}}),Object(r.jsx)(j.b,{exact:!0,path:"/news",component:v}),Object(r.jsx)(j.b,{exact:!0,path:"/musics",component:w}),Object(r.jsx)(j.b,{exact:!0,path:"/settings",component:S}),Object(r.jsx)(j.b,{exact:!0,path:"*",render:function(){return Object(r.jsx)("div",{children:"404 NOT FOUND"})}})]})})]}):Object(r.jsx)(oe.a,{})}}]),n}(s.a.Component),nt=Object(ie.d)(j.g,Object(y.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ye());Promise.all([t]).then((function(){e({type:Re})}))}}}))(tt),rt=function(e){return Object(r.jsx)(p.a,{children:Object(r.jsx)(y.a,{store:qe,children:Object(r.jsx)(nt,{})})})};i.a.render(Object(r.jsx)(rt,{}),document.getElementById("root")),c()},30:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__32P-W",selectedPage:"Paginator_selectedPage__xMU1i",paginator:"Paginator_paginator__2fwnZ",button:"Paginator_button__7F_Cr",buttonRight:"Paginator_buttonRight__2CWxw",buttonLeft:"Paginator_buttonLeft__2fH7L"}},45:function(e,t,n){"use strict";var r=n(0),a=(n(1),n.p+"static/media/loader.02c32932.svg");t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"#f3f3f3"},children:Object(r.jsx)("img",{src:a})})}},68:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},72:function(e,t,n){e.exports={header:"Header_header__11Y5M",loginBlock:"Header_loginBlock__QkKgB",headerButton:"Header_headerButton__3MHdX"}},98:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return _}));var r=n(8),a=n.n(r),s=n(15),c=n(49),o=n(4),i=n(16),u=n(34),l="ADD_POST",d="SET_USER_PROFILE",f="SET_STATUS",j="DELETE_POST",p="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"\u042d\u0442\u043e \u043c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430",likesCount:12},{id:2,message:"\u0421\u0435\u0433\u043e\u0434\u043d\u044f 23 \u044f\u043d\u0432\u0430\u0440\u044f 2021 \u0433\u043e\u0434\u0430",likesCount:123},{id:3,message:"\u041f\u043e\u0441\u0442 \u043d\u0438 \u043e \u0447\u0435\u043c",likesCount:5},{id:4,message:"\u041e\u043d\u043e \u043a\u0430\u043a \u0431\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043d\u043e \u043d\u0430\u0434\u043e \u0442\u0435\u0441\u0442\u0438\u0442\u044c",likesCount:222}],profile:null,status:""},h=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.saveProfile(e);case 2:if(s=t.sent,c=r().auth.userId,0!==s.data.resultCode){t.next=8;break}n(O(c)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case j:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case p:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[294,1,2]]]);
//# sourceMappingURL=main.cff94972.chunk.js.map