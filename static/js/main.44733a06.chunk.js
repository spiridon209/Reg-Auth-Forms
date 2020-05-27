(this["webpackJsonpreg-auth"]=this["webpackJsonpreg-auth"]||[]).push([[0],{197:function(e,t,r){e.exports=r(306)},203:function(e,t,r){},207:function(e,t,r){},227:function(e,t,r){},283:function(e,t,r){},284:function(e,t,r){},285:function(e,t,r){},286:function(e,t,r){},303:function(e,t,r){},304:function(e,t,r){},305:function(e,t,r){},306:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(19),i=r.n(c),o=(r(202),r(203),r(55)),u=r(7),s=r(173),l=r(12),m=r(4),p={token:null,username:"",errors:"",isProcessing:!1,isLogIn:!1},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_REQUEST":var r=t.payload.isProcessing;return Object(m.a)(Object(m.a)({},e),{},{isProcessing:r});case"AUTH_SUCCES":var n=t.payload;return Object(m.a)(Object(m.a)({},e),n);case"AUTH_FAILURE":var a=t.payload,c=a.errors,i=a.isProcessing;return Object(m.a)(Object(m.a)({},e),{},{errors:c,isProcessing:i});case"LOG_OUT":case"RESET_ERRORS":return p;default:return e}},f={isProcessing:!1,errors:""},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ARTICLE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!0});case"CREATE_ARTICLE_SUCCES":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!1});case"CREATE_ARTICLE_FAILURE":var r=t.payload;return Object(m.a)(Object(m.a)({},e),{},{errors:r,isProcessing:!1});default:return e}},g={articles:[],isLoading:!1,errors:"",articlesCount:0,currentPage:1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ARTICLES_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case"GET_ARTICLES_SUCCES":var r=t.payload,n=r.articles,a=r.articlesCount;return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,articles:n,articlesCount:a});case"GET_ARTICLES_FAILURE":var c=t.payload.errors;return Object(m.a)(Object(m.a)({},e),{},{errors:c,isLoading:!1});case"ARTICLE_FAVORITED":case"ARTICLE_UNFAVORITED":var i=t.payload.article,o=e.articles;return Object(m.a)(Object(m.a)({},e),{},{articles:o.map((function(e){return e.slug===i.slug?Object(m.a)(Object(m.a)({},i),{},{favorited:i.favorited,favoritesCount:i.favoritesCount}):e}))});case"ARTICLES_PAGINATION":var u=t.payload.currentPage;return Object(m.a)(Object(m.a)({},e),{},{currentPage:u});default:return e}},v={isProcessing:!1,errors:""},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_ARTICLE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!0});case"UPDATE_ARTICLE_SUCCES":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!1});case"UPDATE_ARTICLE_FAILURE":var r=t.payload;return Object(m.a)(Object(m.a)({},e),{},{errors:r,isProcessing:!1});default:return e}},A={isProcessing:!1,errors:""},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"DELETE_ARTICLE_REQUEST":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!0});case"DELETE_ARTICLE_SUCCES":return Object(m.a)(Object(m.a)({},e),{},{isProcessing:!1});case"DELETE_ARTICLE_FAILURE":var r=t.payload;return Object(m.a)(Object(m.a)({},e),{},{errors:r,isProcessing:!1});default:return e}},L=Object(o.c)({auth:d,createArticle:E,getArticles:h,updateArticle:b,deleteArticle:O});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r(207);var T=r(59),y=r(308),R=r(148),C=r(33),j=r(3),S=r.n(j),w=r(6),F=r(15),N=r.n(F),P="https://conduit.productionready.io/api",_={getLoginPath:function(){return"".concat(P,"/users/login")},getSignupPath:function(){return"".concat(P,"/users")},getAutoLoginPath:function(){return"".concat(P,"/user")},getCreateArticlePath:function(){return"".concat(P,"/articles")},getFavoriteArticlePath:function(e){return"".concat(P,"/articles/").concat(e,"/favorite")},getArticlePath:function(e){return"".concat(P,"/articles/").concat(e)},getArticlesListPath:function(e){return"".concat(P,"/articles?limit=10&offset=").concat(e)}},k=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.getLoginPath(),e.next=3,N.a.post(r,{user:t});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.getSignupPath(),e.next=3,N.a.post(r,{user:t});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.getAutoLoginPath(),e.next=3,N.a.get(r,{headers:t});case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){return localStorage.getItem("token")},D=function(e){return localStorage.setItem("token",e)},B=function(e){return{type:"AUTH_REQUEST",payload:{isProcessing:e}}},q=function(e,t){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return D(t),{type:"AUTH_SUCCES",payload:{username:e,token:t,isLogIn:r,isProcessing:n}}},H=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"AUTH_FAILURE",payload:{errors:e,isProcessing:t}}},z=function(){return localStorage.removeItem("token"),{type:"LOG_OUT"}},G=r(18),M=G.a().shape({username:G.b().max(20,"Must be shorter").required("Required"),email:G.b().email("Invalid email address").required("Required"),password:G.b().min(8,"Must be longer than 8 characters").max(40,"Must be shorter").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,"Must have one Big or more letter and one or more number").required("Required")}),Q=r(310),V=r(177),W=r.n(V),X=(r(227),Object(u.b)((function(e){return{serverErrors:e.auth.errors}}))((function(e){var t=e.serverErrors;if(!t)return null;var r=a.a.createElement("ul",{className:"ServerErrors"},Object.keys(t).map((function(e,r){return a.a.createElement("li",{key:W.a.uniqueId(r),className:"ServerErrors-Item"},a.a.createElement(Q.a,{twoToneColor:"#cf1322"}),a.a.createElement("span",{className:"ServerErrors-ItemText"},"".concat(e,": ").concat(t[e])))})));return a.a.createElement("div",{className:"ServerErrorsWrap"},r)}))),J={username:"",email:"",password:""},Z=Object(u.b)((function(e){return{isAuth:!!e.auth.token,isProcessing:e.auth.isProcessing}}),(function(e){return{regFunc:function(t,r,n){return e(function(e,t,r){return function(){var n=Object(w.a)(S.a.mark((function n(a){var c,i,o,u;return S.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(B(!0)),n.prev=1,n.next=4,x({username:r,email:e,password:t});case 4:c=n.sent,i=c.data.user,o=i.username,u=i.token,a(q(o,u)),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a(H(n.t0.response.data.errors));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(t,r,n))},resetErrorsFunc:function(){return e({type:"RESET_ERRORS"})}}}))((function(e){var t=e.isAuth,r=e.regFunc,n=e.resetErrorsFunc,c=e.isProcessing,i=function(e,t,r,n,c,i,o,u){return a.a.createElement("label",{className:"Form-Label",htmlFor:e},"".concat(r),a.a.createElement(y.a,{className:"Form-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:i,value:n[e],style:u[e]&&o[e]?{borderColor:"red"}:{}}),u[e]&&o[e]&&a.a.createElement("div",{className:"Form-RequredField"},o[e]))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Signup Page"),a.a.createElement("div",{className:"FormWrapper"},a.a.createElement(C.b,{initialValues:J,validationSchema:M,onSubmit:function(e,n){var a=e.email,c=e.password,i=e.username;r(a,c,i),t&&n.resetForm(J)}},(function(e){var t=e.values,r=e.handleChange,n=e.errors,o=e.touched,u=e.handleBlur,s=e.handleSubmit;return a.a.createElement(C.a,{className:"Form",onSubmit:s},i("username","text","User Name",t,r,u,n,o),i("email","email","Email",t,r,u,n,o),i("password","password","Password",t,r,u,n,o),a.a.createElement(R.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"Sign up"),a.a.createElement(X,null))})),a.a.createElement(l.b,{to:"".concat("/Reg-Auth-Forms","/login"),onClick:n},"Log in")))})),$={email:"",password:""},K=Object(u.b)((function(e){return{isAuth:!!e.auth.token,isProcessing:e.auth.isProcessing}}),(function(e){return{authFunc:function(t,r){return e(function(e,t){return function(){var r=Object(w.a)(S.a.mark((function r(n){var a,c,i,o;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n(B(!0)),r.prev=1,r.next=4,k({email:e,password:t});case 4:a=r.sent,c=a.data.user,i=c.username,o=c.token,n(q(i,o)),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),n(H(r.t0.response.data.errors));case 12:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))},resetErrorsFunc:function(){return e({type:"RESET_ERRORS"})}}}))((function(e){var t=e.isAuth,r=e.authFunc,n=e.resetErrorsFunc,c=e.isProcessing,i=function(e,t,r,n,c,i,o,u){return a.a.createElement("label",{className:"Form-Label",htmlFor:e},"".concat(r),a.a.createElement(y.a,{className:"Form-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:i,value:n[e],style:u[e]&&o[e]?{borderColor:"red"}:{}}),u[e]&&o[e]&&a.a.createElement("div",{className:"Form-RequredField"},o[e]))};return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"Login Page"),a.a.createElement("div",{className:"FormWrapper"},a.a.createElement(C.b,{initialValues:$,onSubmit:function(e,n){var a=e.email,c=e.password;r(a,c),t&&n.resetForm($)}},(function(e){var t=e.values,r=e.handleChange,n=e.errors,o=e.touched,u=e.handleBlur,s=e.handleSubmit;return a.a.createElement(C.a,{className:"Form",onSubmit:s},i("email","email","Email",t,r,u,n,o),i("password","password","Password",t,r,u,n,o),a.a.createElement(R.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"Log in"),a.a.createElement(X,null))})),a.a.createElement(l.b,{to:"".concat("/Reg-Auth-Forms","/signup"),onClick:n},"Signup")))})),Y=(r(283),Object(u.b)((function(e){return{username:e.auth.username}}),(function(e){return{logOutFunc:function(){return e(z())}}}))((function(e){var t=e.username,r=e.logOutFunc,n=e.isLogin,c=function(){r()};return n?a.a.createElement("div",{className:"UserBioWrap"},a.a.createElement("div",{className:"UserBio"},t),a.a.createElement(R.a,{className:"Btn",type:"primary",onClick:c},"Log out")):null}))),ee=r(67),te=(r(284),_.getCreateArticlePath()),re=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=U(),n={Authorization:"Token ".concat(r)},e.next=4,N.a.post(te,{article:t},{headers:n});case 4:return a=e.sent,e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(e){return{type:"CREATE_ARTICLE_FAILURE",payload:e}},ae=G.a().shape({title:G.b().required("Required"),description:G.b().required("Required"),content:G.b().required("Required"),tags:G.b()}),ce=y.a.TextArea,ie={title:"",description:"",content:"",tags:""},oe=Object(u.b)((function(e){return{isProcessing:e.createArticle.isProcessing}}),(function(e){return{createArticleFunc:function(t){return e(function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"CREATE_ARTICLE_REQUEST"}),t.prev=1,t.next=4,re(e);case 4:r({type:"CREATE_ARTICLE_SUCCES",payload:void 0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),r(ne(t.t0.response.data.errors));case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=Object(T.g)(),r=e.createArticleFunc,c=e.isProcessing,i=Object(n.useState)(""),o=Object(ee.a)(i,2),u=o[0],s=o[1],l=function(e,t,r,n,c,i,o,u,s){return a.a.createElement("label",{className:"CreateArticle-Label",htmlFor:e},"".concat(r),a.a.createElement(s,{className:"CreateArticle-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:i,value:n[e],style:u[e]&&o[e]?{borderColor:"red"}:{}}),u[e]&&o[e]&&a.a.createElement("div",{className:"CreateArticle-RequiredField"},o[e]))};return a.a.createElement("div",{className:"CreateArticle"},a.a.createElement("h1",null,"New article"),a.a.createElement("div",{className:"CreateArticle-FormWrapper"},a.a.createElement(C.b,{initialValues:ie,validationSchema:ae,onSubmit:function(e,n){var a=e.title,c=e.description,i=e.content,o=e.tags,u=""===o?[]:o.split(",");try{r({title:a,description:c,body:i,tagList:u}),s((function(){return"Article was created succssesfully !"}))}catch(l){s((function(){return"Ooops somthing going wrong ".concat(l)}))}n.resetForm(),t.push("".concat("/Reg-Auth-Forms","/"))}},(function(e){var t=e.values,r=e.handleChange,n=e.errors,i=e.touched,o=e.handleBlur,u=e.handleSubmit;return a.a.createElement(C.a,{className:"CreateArticle-Form",onSubmit:u},l("title","text","Title",t,r,o,n,i,y.a),l("description","text","Description",t,r,o,n,i,y.a),l("content","text","Article content",t,r,o,n,i,ce),l("tags","text","Tags",t,r,o,n,i,y.a),a.a.createElement(R.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"create article"))})),a.a.createElement("div",{className:"CreateArticle-Response"},u)))})),ue=function(e){var t=e.children;return a.a.createElement("main",null,t)},se=(r(285),r(311)),le=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=U(),n={Authorization:"Token ".concat(r)},a=_.getArticlesListPath(t),r){e.next=8;break}return e.next=6,N.a.get(a);case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.next=10,N.a.get(a,{headers:n});case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=U(),n={Authorization:"Token ".concat(r)},a=_.getFavoriteArticlePath(t),e.next=5,N.a.post(a,null,{headers:n});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),pe=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=U(),n={Authorization:"Token ".concat(r)},a=_.getFavoriteArticlePath(t),e.next=5,N.a.delete(a,{headers:n});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de=function(e){return{type:"GET_ARTICLES_FAILURE",payload:e}},fe=function(e){return{type:"ARTICLE_FAVORITED",payload:e}},Ee=function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,me(e);case 3:n=t.sent,r(fe(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(de(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},ge=function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,pe(e);case 3:n=t.sent,r(fe(n.data)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),r(de(t.t0));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},he=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=U(),n={Authorization:"Token ".concat(r)},a=_.getArticlePath(t),r){e.next=8;break}return e.next=6,N.a.get(a);case 6:return c=e.sent,e.abrupt("return",c);case 8:return e.next=10,N.a.get(a,{headers:n});case 10:return i=e.sent,e.abrupt("return",i);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ve=function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=_.getArticlePath(t),n=U(),a={Authorization:"Token ".concat(n)},e.next=5,N.a.delete(r,{headers:a});case 5:return c=e.sent,e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),be=Object(u.b)((function(e){return{username:e.auth.username,deleteProcessing:e.deleteArticle.isProcessing}}),(function(e){return{favoriteArticleFunc:function(t){return e(Ee(t))},unfavoriteArticleFunc:function(t){return e(ge(t))},deleteArticleFunc:function(t){return e(function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"DELETE_ARTICLE_REQUEST"}),t.prev=1,t.next=4,ve(e);case 4:return n=t.sent,r({type:"DELETE_ARTICLE_SUCCES"}),t.abrupt("return",n);case 9:return t.prev=9,t.t0=t.catch(1),r({type:"DELETE_ARTICLE_FAILURE",payload:t.t0.response.data.errors}),t.abrupt("return",t.t0);case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Object(T.h)((function(e){var t=e.match.params.slug,r=e.favoriteArticleFunc,c=e.unfavoriteArticleFunc,i=e.username,o=e.deleteProcessing,u=e.deleteArticleFunc,s=Object(n.useState)(null),l=Object(ee.a)(s,2),p=l[0],d=l[1],f=Object(T.g)();if(Object(n.useEffect)((function(){he(t).then((function(e){return e.data})).then((function(e){return e.article})).then((function(e){return d((function(){return e}))}))}),[t]),null===p)return a.a.createElement("div",null,"Article is loading...");var E=p.favorited,g=p.favoritesCount,h="LikeButton";return E&&(h="LikeButton LikeButton__Liked"),a.a.createElement("div",{className:"Article"},a.a.createElement("div",{className:"Article-Meta"},a.a.createElement("div",{className:"Meta-Date"},new Date(p.createdAt).toDateString()),a.a.createElement("div",{className:"Meta-Author"},p.author.username)),a.a.createElement("h1",{className:"Article-Header"},p.title),a.a.createElement("div",{className:"Article-Description"},p.description),a.a.createElement("div",{className:"Article-Body"},p.body),a.a.createElement("ul",{className:"Article-TagsList"},p.tagList.map((function(e){return a.a.createElement("li",{key:e,className:"TagList-Item"},e)}))),a.a.createElement("div",{className:"Likes"},a.a.createElement("button",{className:h,type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),E?(c(t),d((function(){return Object(m.a)(Object(m.a)({},p),{},{favorited:!E,favoritesCount:g-1})}))):(r(t),d((function(){return Object(m.a)(Object(m.a)({},p),{},{favorited:!E,favoritesCount:g+1})})))}},a.a.createElement(se.a,null),g)),p.author.username===i?a.a.createElement("div",{className:"Article-Buttons"},a.a.createElement(R.a,{className:"Buttons-UpdateBtn",onClick:function(){f.push("".concat("/Reg-Auth-Forms","/articles/").concat(t,"/edit"))}},"Update article"),a.a.createElement(R.a,{danger:!0,loading:o,className:"Buttons-UpdateBtn",onClick:function(){u(t).then((function(e){200===e.status&&f.push("".concat("/Reg-Auth-Forms","/"))}))}},"Delete article"),a.a.createElement("div",{className:"Article-DeliteError"})):null)}))),Ae=(r(286),Object(u.b)(null,(function(e){return{favoriteArticleFunc:function(t){return e(Ee(t))},unfavoriteArticleFunc:function(t){return e(ge(t))}}}))((function(e){var t=e.article,r=t.slug,n=t.title,c=t.description,i=t.tagList,o=t.favorited,u=t.favoritesCount,s=t.createdAt,l=t.author.username,m=e.favoriteArticleFunc,p=e.unfavoriteArticleFunc,d=Object(T.g)(),f=function(e){e.preventDefault(),d.push("".concat("/Reg-Auth-Forms","/articles/").concat(r))},E="LikeButton";return o&&(E="LikeButton LikeButton__Liked"),a.a.createElement("div",{className:"ArticlePreview",onClick:f,onKeyDown:f,role:"button",tabIndex:"0"},a.a.createElement("div",{className:"ArticlePreview-AuthorDateLikesRow"},a.a.createElement("div",{className:"AuthorDate"},a.a.createElement("span",{className:"Author"},l),a.a.createElement("span",{className:"Date"},new Date(s).toDateString())),a.a.createElement("div",{className:"Likes"},a.a.createElement("button",{className:E,type:"button",onClick:function(e){e.preventDefault(),e.stopPropagation(),o?p(r):m(r)}},a.a.createElement(se.a,null),u))),a.a.createElement("div",{className:"ArticlePreview-HeaderDescriptionRow"},a.a.createElement("h1",null,n),a.a.createElement("span",null,c)),a.a.createElement("div",{className:"ArticlePreview-TagsRow"},a.a.createElement("ul",{className:"TagList"},i.map((function(e){return a.a.createElement("li",{className:"TagList-Item",key:e},e)})))))}))),Oe=r(307),Le=Object(u.b)((function(e){return{articlesCount:e.getArticles.articlesCount,currentPage:e.getArticles.currentPage}}),(function(e){return{switchPage:function(t){return e({type:"ARTICLES_PAGINATION",payload:t})}}}))((function(e){var t=e.articlesCount,r=e.currentPage,n=e.switchPage;return a.a.createElement(Oe.a,{showSizeChanger:!1,current:r,total:t,onChange:function(e){n({currentPage:e})}})})),Te=(r(303),Object(u.b)((function(e){return{articles:e.getArticles.articles,isLoading:e.getArticles.isLoading,errors:e.getArticles.errors,offset:1===e.getArticles.currentPage?0:Math.floor(10*(e.getArticles.currentPage-1))}}),(function(e){return{getArticlesFunc:function(t){return e(function(e){return function(){var t=Object(w.a)(S.a.mark((function t(r){var n;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:"GET_ARTICLES_REQUEST"}),t.prev=1,t.next=4,le(e);case 4:n=t.sent,r({type:"GET_ARTICLES_SUCCES",payload:n.data}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),r(de(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))((function(e){var t=e.articles,r=e.isLoading,c=e.errors,i=e.getArticlesFunc,o=e.offset;return Object(n.useEffect)((function(){i(o)}),[i,o]),r?a.a.createElement("div",null,"Articles is loading..."):c?a.a.createElement("div",null,"Something went wrong ",c):a.a.createElement("div",{className:"ArticleList"},t.map((function(e){return a.a.createElement(Ae,{key:e.slug,article:e})})),a.a.createElement(Le,null))}))),ye=(r(304),{getHome:function(){return"".concat("/Reg-Auth-Forms","/")},getArticle:function(){return"".concat("/Reg-Auth-Forms","/articles/:slug")},getReg:function(){return"".concat("/Reg-Auth-Forms","/signup")},getAuth:function(){return"".concat("/Reg-Auth-Forms","/login")},getCreateArticle:function(){return"".concat("/Reg-Auth-Forms","/add")},getArticleEditor:function(){return"".concat("/Reg-Auth-Forms","/articles/:slug/edit")}}),Re=function(e){var t=e.isLogIn,r=a.a.createElement("nav",{className:"Navigation"},a.a.createElement(l.b,{exact:!0,className:"Navigation-Link",to:ye.getHome()},"Home page"),a.a.createElement(l.b,{className:"Navigation-Link",to:ye.getAuth()},"Log in"),a.a.createElement(l.b,{className:"Navigation-Link",to:ye.getReg()},"Signup")),n=a.a.createElement("nav",{className:"Navigation"},a.a.createElement(l.b,{className:"Navigation-Link",to:ye.getHome(),exact:!0},"Home page"),a.a.createElement(l.b,{className:"Navigation-Link",to:ye.getCreateArticle()},"Create article"));return t?n:r},Ce=(r(305),G.a().shape({title:G.b().required("Required"),description:G.b().required("Required"),content:G.b().required("Required"),tags:G.b()})),je=function(){var e=Object(w.a)(S.a.mark((function e(t,r){var n,a,c,i;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_.getArticlePath(r),a=U(),c={Authorization:"Token ".concat(a)},e.next=5,N.a.put(n,{article:t},{headers:c});case 5:return i=e.sent,e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),Se=y.a.TextArea,we=Object(u.b)((function(e){return{isProcessing:e.updateArticle.isProcessing}}),(function(e){return{updateArticleFunc:function(t,r){return e(function(e,t){return function(){var r=Object(w.a)(S.a.mark((function r(n){var a;return S.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:"UPDATE_ARTICLE_REQUEST"}),r.prev=1,r.next=4,je(e,t);case 4:return a=r.sent,n({type:"UPDATE_ARTICLE_SUCCES"}),r.abrupt("return",a.data.article);case 9:return r.prev=9,r.t0=r.catch(1),n({type:"UPDATE_ARTICLE_FAILURE",payload:r.t0.response.data.errors}),r.abrupt("return",r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(e){return r.apply(this,arguments)}}()}(t,r))}}}))(Object(T.h)((function(e){var t=e.match.params.slug,r=e.updateArticleFunc,c=e.isProcessing,i=Object(n.useState)(null),o=Object(ee.a)(i,2),u=o[0],s=o[1],l=Object(n.useState)(""),m=Object(ee.a)(l,2),p=m[0],d=m[1],f=Object(T.g)();if(Object(n.useEffect)((function(){he(t).then((function(e){return e.data})).then((function(e){return e.article})).then((function(e){return s((function(){return e}))}))}),[t]),null===u)return a.a.createElement("div",null,"Article is loading...");var E=function(e,t,r,n,c,i,o,u,s){return a.a.createElement("label",{className:"ArticleEditor-Label",htmlFor:e},"".concat(r),a.a.createElement(s,{className:"ArticleEditor-Field",type:t,name:e,placeholder:r,id:e,onChange:c,onBlur:i,value:n[e],style:u[e]&&o[e]?{borderColor:"red"}:{}}),u[e]&&o[e]&&a.a.createElement("div",{className:"ArticleEditor-RequiredField"},o[e]))},g={title:u.title,description:u.description,content:u.body,tags:u.tagList.length>0?u.tagList.join(", "):""};return a.a.createElement("div",{className:"ArticleEditor"},a.a.createElement("h1",null,"Update article"),a.a.createElement("div",{className:"ArticleEditor-FormWrapper"},a.a.createElement(C.b,{initialValues:g,validationSchema:Ce,onSubmit:function(e){var t=e.title,n=e.description,a=e.content,c=e.tags,i=""===c?[]:c.split(",");try{r({title:t,description:n,body:a,tagList:i},u.slug).then((function(e){f.push("".concat("/Reg-Auth-Forms","/articles/").concat(e.slug))}))}catch(o){d((function(){return"Somthing going wrong: ".concat(o)}))}}},(function(e){var t=e.values,r=e.handleChange,n=e.errors,i=e.touched,o=e.handleBlur,u=e.handleSubmit;return a.a.createElement(C.a,{className:"ArticleEditor-Form",onSubmit:u},E("title","text","Title",t,r,o,n,i,y.a),E("description","text","Description",t,r,o,n,i,y.a),E("content","text","Article content",t,r,o,n,i,Se),E("tags","text","Tags",t,r,o,n,i,y.a),a.a.createElement(R.a,{loading:c,className:"SubmitBtn Btn",type:"primary",htmlType:"submit"},"Update article"))})),a.a.createElement("div",{className:"ArticleEditor-Response"},p)))}))),Fe=r(121),Ne=function(e){var t=e.component,r=e.isLogin,n=e.restricted,c=Object(Fe.a)(e,["component","isLogin","restricted"]);return a.a.createElement(T.b,Object.assign({},c,{render:function(e){return r&&n?a.a.createElement(T.a,{to:ye.getHome()}):a.a.createElement(t,e)}}))},Pe=function(e){var t=e.component,r=e.isLogin,n=Object(Fe.a)(e,["component","isLogin"]);return a.a.createElement(T.b,Object.assign({},n,{render:function(e){return r?a.a.createElement(t,e):a.a.createElement(T.a,{to:ye.getHome()})}}))};var _e=Object(u.b)((function(e){return{isAuth:!!e.auth.token}}),(function(e){return{autoLogInFunc:function(){return e(function(){var e=Object(w.a)(S.a.mark((function e(t){var r,n,a,c,i,o;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t(B(!0)),e.prev=1,r=U()){e.next=6;break}return t(z()),e.abrupt("return");case 6:return n={Authorization:"Token ".concat(r)},e.next=9,I(n);case 9:a=e.sent,c=a.data.user,i=c.username,o=c.token,t(q(i,o)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t(H(e.t0.response.data.errors));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.isAuth,r=e.autoLogInFunc;Object(n.useEffect)((function(){r()}));var c=a.a.createElement("div",{className:"App"},a.a.createElement(Re,{isLogIn:t}),a.a.createElement(Y,{isLogin:t}),a.a.createElement(T.d,null,a.a.createElement(Ne,{exact:!0,path:ye.getHome(),isLogin:t,restricted:!1,component:Te}),a.a.createElement(Ne,{exact:!0,path:ye.getArticle(),isLogin:t,restricted:!1,component:be}),a.a.createElement(Ne,{exact:!0,path:ye.getReg(),isLogin:t,restricted:!0,component:Z}),a.a.createElement(Ne,{exact:!0,path:ye.getAuth(),isLogin:t,restricted:!0,component:K}),a.a.createElement(Pe,{exact:!0,path:ye.getArticleEditor(),isLogin:t,component:we}),a.a.createElement(Pe,{exact:!0,path:ye.getCreateArticle(),isLogin:t,component:oe}),a.a.createElement(T.a,{to:ye.getHome()})));return a.a.createElement(ue,null,c)})),ke="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):o.d,xe=Object(o.e)(L,ke(Object(o.a)(s.a))),Ie=a.a.createElement(l.a,null,a.a.createElement(u.a,{store:xe},a.a.createElement(_e,null)));i.a.render(Ie,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.44733a06.chunk.js.map