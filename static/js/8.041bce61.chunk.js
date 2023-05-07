(this["webpackJsonpall-in-one"]=this["webpackJsonpall-in-one"]||[]).push([[8,11,13],{1140:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"updateStatus",(function(){return p})),n.d(a,"updateAuthStatus",(function(){return m}));var r=n(3),i=n.n(r),o=n(7),c=n(8),s=n(35),u=n(1145),l=n(139),d=n(235),p=function(e){return function(t){t({type:d.a.SET_WEBSOCKET_STATUS,payload:{status:e}})}},m=function(e){return function(t){t({type:d.a.SET_AUTH_STATUS,payload:{isAuthenticated:e}})}};n.d(t,"webSocket",(function(){return h}));var h=new(function(){function e(){Object(o.a)(this,e),this.socket=void 0,this.actions=void 0,this.handlers=[],this.socket=Object(u.a)("".concat(window.location.host),{path:"/io",transports:["websocket"],autoConnect:!1}),this.actions=Object(s.b)(a,l.a.dispatch),this.actions.updateStatus(d.b.ENABLED)}return Object(c.a)(e,[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"".concat(window.location.host);this.socket.connected||(this.socket.io.uri=e,this.initListeners(),this.socket.connect())}},{key:"initListeners",value:function(){var e=this;this.socket.on("connect",(function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e.actions.updateStatus(d.b.CONNECTED);case 1:case"end":return t.stop()}}))})),this.socket.on("disconnect",(function(){e.actions.updateStatus(d.b.DISCONNECTED)})),this.socket.on("connect_error",(function(t){e.actions.updateStatus(d.b.CONNECTION_ERROR)})),this.socket.on("reconnect_error",(function(t){e.actions.updateStatus(d.b.CONNECTION_ERROR)})),this.socket.on("reconnect_failed",(function(t){e.actions.updateStatus(d.b.CONNECTION_ERROR)})),this.socket.on("SOCKET_INIT_STATUS",(function(t){e.actions.updateAuthStatus("success"===t.status)}))}},{key:"setSocketEventListeners",value:function(e){var t=this;e.forEach((function(e){t.handlers.push(e),t.socket.on(e.name,e.instance)}))}},{key:"disconnect",value:function(){this.removeSocketEventListeners(),this.socket.close()}},{key:"removeSocketEventListeners",value:function(){var e=this;this.handlers.forEach((function(t){e.socket.off(t.name,t.instance)}))}}]),e}())},1143:function(e,t,n){"use strict";n.r(t),n.d(t,"commentsList",(function(){return c})),n.d(t,"commentAdded",(function(){return s})),n.d(t,"commentResolved",(function(){return u})),n.d(t,"commentUnResolved",(function(){return l})),n.d(t,"commentDeleted",(function(){return d})),n.d(t,"commentRestored",(function(){return p})),n.d(t,"replyAdded",(function(){return m})),n.d(t,"replyDeleted",(function(){return h})),n.d(t,"replyRestored",(function(){return v})),n.d(t,"commentResolvedAck",(function(){return f})),n.d(t,"commentDeletedAck",(function(){return E})),n.d(t,"replyDeletedAck",(function(){return b}));var a=n(202),r=n(139),i=n(27),o=n(98),c=function(e){return function(t){t({type:o.a.COMMENTS_LIST,payload:{comments:e}})}},s=function(e){return function(t){Object(a.b)(e,Object(i.e)(r.a.getState()))&&t({type:o.a.COMMENT_ADDED,payload:{comment:e}})}},u=function(e){return function(t){t({type:o.a.COMMENT_RESOLVED,payload:e})}},l=function(e){return function(t){t({type:o.a.COMMENT_UNRESOLVED,payload:e})}},d=function(e){return function(t){t({type:o.a.COMMENT_DELETED,payload:e})}},p=function(e){return function(t){t({type:o.a.COMMENT_RESTORED,payload:e})}},m=function(e){return function(t){t({type:o.a.COMMENT_REPLY_ADDED,payload:e})}},h=function(e){return function(t){t({type:o.a.COMMENT_REPLY_DELETED,payload:e})}},v=function(e){return function(t){t({type:o.a.COMMENT_REPLY_RESTORED,payload:e})}},f=function(e){return function(t){t({type:o.a.COMMENT_RESOLVED_ACK,payload:e})}},E=function(e){return function(t){t({type:o.a.COMMENT_DELETED_ACK,payload:e})}},b=function(e){return function(t){t({type:o.a.COMMENT_REPLY_DELETED_ACK,payload:e})}}},1159:function(e,t,n){"use strict";n.r(t);var a=n(12),r=n(3),i=n.n(r),o=n(7),c=n(8),s=n(73),u=n(21),l=n(156),d=n(139),p=n(49),m=n(98),h=n(105),v=n(210),f=n(10),E=n(1140),b=n(27),T=n(35),k=Object(T.b)(v,d.a.dispatch),O=function(){function e(){var t=this;Object(o.a)(this,e),this.token="",this.courseId="",this.reviewApiUrl="",this.authServiceUrl="",this.authoringToolDomain="",this.initToken=function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.awrap(t.getReviewTokenFromAuthService());case 2:e.sent||t.requestTokenFromParentWindow();case 4:case"end":return e.stop()}}))},this.getUserDetails=function(){return Object(b.h)(d.a.getState())},this.reviewTokenListener=function(e){return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if((/\.easygenerator\.com$/.test(e.origin)||e.origin===window.location.origin)&&e.data.reviewToken){n.next=2;break}return n.abrupt("return");case 2:return document.cookie="".concat(l.q,"=").concat(e.data.reviewToken,";domain=easygenerator.com; Path=/"),n.next=5,i.a.awrap(t.getReviewTokenFromAuthService());case 5:window.removeEventListener("message",t.reviewTokenListener);case 6:case"end":return n.stop()}}))},this.requestTokenFromParentWindow=function(){window.addEventListener("message",t.reviewTokenListener);var e="https://".concat(t.authoringToolDomain,"/review/course").concat(window.location.pathname);window.location.href.includes(".easygenerator.com/")&&window.parent.postMessage({sendReviewToken:!0},e)}}return Object(c.a)(e,[{key:"initialize",value:function(e){var t,n,a,r;return i.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.reviewApiUrl,n=e.authServiceUrl,a=e.courseId,r=e.authoringToolDomain,this.reviewApiUrl=t,this.authServiceUrl=n,this.courseId=a,this.authoringToolDomain=r,o.next=7,i.a.awrap(this.initToken());case 7:case"end":return o.stop()}}),null,this)}},{key:"getReviewTokenFromAuthService",value:function(){var e,t;return i.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.a.awrap(s.b.get("".concat(this.authServiceUrl,"/api/account/token"),{credentials:"include",query:{clientId:l.m},retryOptions:{retries:0,retryOn:[503]}}));case 2:if(!((e=n.sent).status<400||window.location.href.includes("localhost")&&localStorage.getItem(l.q))){n.next=14;break}return n.next=6,i.a.awrap(e.json());case 6:return t=n.sent,this.token=null===t||void 0===t?void 0:t.token,n.next=10,i.a.awrap(this.getUserInfoFromToken());case 10:if(n.sent!==l.r){n.next=14;break}return f.a.emit(f.b.COMMENTS_LIST),n.abrupt("return",!0);case 14:return n.abrupt("return",!1);case 15:case"end":return n.stop()}}),null,this)}},{key:"endSession",value:function(){return i.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.navigator.onLine){e.next=3;break}return e.abrupt("return",l.h);case 3:return e.next=5,i.a.awrap(s.b.post("".concat(this.authServiceUrl,"/api/account/logout"),{credentials:"include"}));case 5:return d.a.dispatch({type:m.a.COMMENTS_LIST,payload:{comments:[]}}),e.next=8,i.a.awrap(k.logout());case 8:return d.a.dispatch({type:p.a.UPDATE_REVIEW_LAYOUT,payload:{layout:l.g.LOGIN_WITH_EMAIL}}),E.webSocket.disconnect(),e.abrupt("return",l.r);case 11:case"end":return e.stop()}}),null,this)}},{key:"getCallbackUrl",value:function(){var e=window.location.pathname;return"https://".concat(this.authoringToolDomain,"/review/course").concat(e)}},{key:"updateUserEmail",value:function(e){var t,n,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t=e.name,n=e.email,a=this.getCallbackUrl(),window.navigator.onLine){r.next=5;break}return r.abrupt("return",l.h);case 5:return r.next=7,i.a.awrap(s.b.put("".concat(this.authServiceUrl,"/api/account/login-link"),{headers:{"Content-Type":u.e.JSON},query:{clientId:l.m},data:{email:n,fullName:t,callbackUrl:a}}));case 7:if(200===r.sent.status){r.next=10;break}return r.abrupt("return",l.h);case 10:return d.a.dispatch({type:h.a.USER_AUTHENTICATED,payload:{name:t,email:n.newEmail}}),r.abrupt("return",l.r);case 12:case"end":return r.stop()}}),null,this)}},{key:"getLoginLink",value:function(e){var t,n,a,r,o,c;return i.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:if(t=e.name,n=e.email,a=e.avatarUrl,r=e.isIdentified,o=window.navigator.onLine,c=this.getCallbackUrl(),o){p.next=5;break}return p.abrupt("return",l.h);case 5:return p.next=7,i.a.awrap(s.b.post("".concat(this.authServiceUrl,"/api/account/login-link"),{headers:{"Content-Type":u.e.JSON},query:{clientId:l.m},data:{email:n,fullName:t,callbackUrl:c}}));case 7:if(200===p.sent.status){p.next=10;break}return p.abrupt("return",l.h);case 10:return d.a.dispatch({type:h.a.USER_AUTHENTICATED,payload:{name:t,email:n,avatarUrl:a,isRegisteredReviewer:r}}),p.abrupt("return",l.r);case 12:case"end":return p.stop()}}),null,this)}},{key:"getUserInfoFromToken",value:function(){var e,t,n,r,o,c,m,v,f,b,T,k,O;return i.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:if(window.navigator.onLine){y.next=3;break}return y.abrupt("return",l.t);case 3:return y.next=5,i.a.awrap(s.b.get("".concat(this.reviewApiUrl,"reviewers"),{headers:(e={"Content-Type":u.e.JSON},Object(a.a)(e,l.e,this.courseId),Object(a.a)(e,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(e,"Authorization","Bearer ".concat(this.token)),e)}));case 5:if(404!==(t=y.sent).status||window.location.href.includes("localhost")){y.next=8;break}return y.abrupt("return",l.i);case 8:if(200===t.status||window.location.href.includes("localhost")){y.next=10;break}return y.abrupt("return",l.t);case 10:return y.next=12,i.a.awrap(t.json());case 12:return n=y.sent,r=n.fullName,o=n.email,c=n.avatarUrl,m=void 0===c?"":c,window.location.href.includes("localhost")&&(this.token=null!==(v=null!==(f=this.token)&&void 0!==f?f:localStorage.getItem(l.q))&&void 0!==v?v:"",r=null!==(b=null!==(T=r)&&void 0!==T?T:localStorage.getItem("reviewerUsername"))&&void 0!==b?b:"",o=null!==(k=null!==(O=o)&&void 0!==O?O:localStorage.getItem("reviewerUsermail"))&&void 0!==k?k:""),E.webSocket.init(this.reviewApiUrl),d.a.dispatch({type:h.a.USER_AUTHENTICATED,payload:{name:r,email:o,avatarUrl:m,isAuthenticatedReviewer:!0}}),d.a.dispatch({type:p.a.UPDATE_REVIEW_LAYOUT,payload:{layout:l.g.ADD_COMMENT_WITH_HISTORY}}),y.abrupt("return",l.r);case 22:case"end":return y.stop()}}),null,this)}},{key:"deleteCommentRequest",value:function(e){var t,n,r,o,c;return i.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:if(n=e.commentId,r=window.navigator.onLine,o=this.getUserDetails(),c=o.name,r){u.next=5;break}return u.abrupt("return",l.c);case 5:return u.next=7,i.a.awrap(s.b.delete("".concat(this.reviewApiUrl,"comments/").concat(n),{headers:(t={},Object(a.a)(t,l.e,this.courseId),Object(a.a)(t,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(t,"Authorization","Bearer ".concat(this.token)),t),query:{fullName:c,isReviewer:!0}}));case 7:if(200===u.sent.status){u.next=10;break}return u.abrupt("return",l.c);case 10:return u.abrupt("return",l.r);case 11:case"end":return u.stop()}}),null,this)}},{key:"deleteReplyRequest",value:function(e){var t,n,r,o,c,u;return i.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(n=e.commentId,r=e.replyId,o=window.navigator.onLine,c=this.getUserDetails(),u=c.name,o){d.next=5;break}return d.abrupt("return",l.j);case 5:return d.next=7,i.a.awrap(s.b.delete("".concat(this.reviewApiUrl,"comments/").concat(n,"/replies/").concat(r),{headers:(t={},Object(a.a)(t,l.e,this.courseId),Object(a.a)(t,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(t,"Authorization","Bearer ".concat(this.token)),t),query:{fullName:u,isReviewer:!0}}));case 7:if(200===d.sent.status){d.next=10;break}return d.abrupt("return",l.j);case 10:return d.abrupt("return",l.r);case 11:case"end":return d.stop()}}),null,this)}},{key:"ackDeletedRequest",value:function(e){var t,n,r,o,c;return i.a.async((function(d){for(;;)switch(d.prev=d.next){case 0:if(n=e.commentId,r=e.replyId,o=window.navigator.onLine,c="",o){d.next=5;break}return d.abrupt("return",l.a);case 5:return r&&(c="replies/".concat(r,"/")),d.next=8,i.a.awrap(s.b.post("".concat(this.reviewApiUrl,"comments/").concat(n,"/").concat(c,"acknowledge/delete"),{headers:(t={"Content-Type":u.e.JSON},Object(a.a)(t,l.e,this.courseId),Object(a.a)(t,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(t,"Authorization","Bearer ".concat(this.token)),t),data:{}}));case 8:if(200===d.sent.status){d.next=11;break}return d.abrupt("return",l.a);case 11:return d.abrupt("return",l.r);case 12:case"end":return d.stop()}}),null,this)}},{key:"ackResolvedRequest",value:function(e){var t,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(n=e.commentId,window.navigator.onLine){r.next=4;break}return r.abrupt("return",l.a);case 4:return r.next=6,i.a.awrap(s.b.post("".concat(this.reviewApiUrl,"comments/").concat(n,"/acknowledge/resolve"),{headers:(t={"Content-Type":u.e.JSON},Object(a.a)(t,l.e,this.courseId),Object(a.a)(t,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(t,"Authorization","Bearer ".concat(this.token)),t),data:{}}));case 6:if(200===r.sent.status){r.next=9;break}return r.abrupt("return",l.a);case 9:return r.abrupt("return",l.r);case 10:case"end":return r.stop()}}),null,this)}},{key:"sendCommentReplyRequest",value:function(e){var t,n,r,o,c,d,p,m,h;return i.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:if(r=e.commentId,o=e.data,c=window.navigator.onLine,d=this.getUserDetails(),p=d.name,m=d.email,h=d.avatarUrl,c){v.next=5;break}return v.abrupt("return",l.k);case 5:return o.createdBy={avatarUrl:h,email:m,firstName:(null===p||void 0===p?void 0:null===(t=p.split(" "))||void 0===t?void 0:t[0])||"",lastName:(null===p||void 0===p?void 0:p.split(" ").splice(1).join(" "))||"",fullName:p||"",isReviewer:!0},v.next=8,i.a.awrap(s.b.post("".concat(this.reviewApiUrl,"comments/").concat(r,"/replies"),{headers:(n={"Content-Type":u.e.JSON},Object(a.a)(n,l.e,this.courseId),Object(a.a)(n,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(n,"Authorization","Bearer ".concat(this.token)),n),data:o}));case 8:if(201===v.sent.status){v.next=11;break}return v.abrupt("return",l.k);case 11:return v.abrupt("return",l.r);case 12:case"end":return v.stop()}}),null,this)}},{key:"sendCommentRequest",value:function(e){var t,n,a,r,o,c,p,h;return i.a.async((function(v){for(;;)switch(v.prev=v.next){case 0:if(t=e.data,n=window.navigator.onLine,a=this.getUserDetails(),r=a.name,o=a.email,n){v.next=5;break}return v.abrupt("return",l.d);case 5:return t.createdByName=r,t.fullName=r,t.createdBy=o,t.courseId=this.courseId,v.next=11,i.a.awrap(s.b.post("".concat(this.reviewApiUrl,"comments"),{headers:{"Content-Type":u.e.JSON,"X-Authoring-Tool-Domain":this.authoringToolDomain},data:t}));case 11:if(200===(c=v.sent).status){v.next=14;break}return v.abrupt("return",l.d);case 14:return v.next=16,i.a.awrap(c.json());case 16:return p=v.sent,h={id:p.id,text:t.text,mentionedEmails:[],deletedSeenEmails:[],resolvedSeenEmails:[],context:t.context,courseId:this.courseId,createdOn:new Date,createdBy:{fullName:r,email:o,isReviewer:!0},replies:[],isDeleted:!1,isResolved:!1},d.a.dispatch({type:m.a.COMMENT_ADDED,payload:{comment:h}}),v.abrupt("return",l.r);case 20:case"end":return v.stop()}}),null,this)}},{key:"getCommentsRequest",value:function(){var e,t,n;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(window.navigator.onLine){r.next=3;break}return r.abrupt("return",l.b);case 3:return r.next=5,i.a.awrap(s.b.get("".concat(this.reviewApiUrl,"comments/by-reviewer"),{headers:(e={"Content-Type":u.e.JSON},Object(a.a)(e,l.e,this.courseId),Object(a.a)(e,"X-Authoring-Tool-Domain",this.authoringToolDomain),Object(a.a)(e,"Authorization","Bearer ".concat(this.token)),e)}));case 5:if(200===(t=r.sent).status){r.next=8;break}return r.abrupt("return",l.b);case 8:return r.next=10,i.a.awrap(t.json());case 10:return n=r.sent,d.a.dispatch({type:m.a.COMMENTS_LIST,payload:{comments:n}}),r.abrupt("return",l.r);case 13:case"end":return r.stop()}}),null,this)}}]),e}();t.default=new O},1210:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),i=n(35),o=n(1143),c=n(139),s=n(14),u=n(11),l=n(45),d=n(13),p=n(10),m=n(181),h=n(1159),v=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handlers=void 0,e.handlers=[{event:p.b.REVIEW_INITIALIZED,instance:e.reviewInitialize.bind(Object(l.a)(e))},{event:p.b.COMMENT_SENT,instance:e.sendComment.bind(Object(l.a)(e))},{event:p.b.COMMENT_REPLY_SENT,instance:e.sendCommentReply.bind(Object(l.a)(e))},{event:p.b.COMMENT_DELETED,instance:e.deleteComment.bind(Object(l.a)(e))},{event:p.b.REPLY_DELETED,instance:e.deleteReply.bind(Object(l.a)(e))},{event:p.b.ACK_COMMENT_DELETED,instance:e.ackDeleted.bind(Object(l.a)(e))},{event:p.b.ACK_COMMENT_RESOLVED,instance:e.ackResolved.bind(Object(l.a)(e))},{event:p.b.ACK_REPLY_DELETED,instance:e.ackDeleted.bind(Object(l.a)(e))},{event:p.b.ACK_REPLY_RESOLVED,instance:e.ackResolved.bind(Object(l.a)(e))},{event:p.b.COMMENTS_LIST,instance:e.getComments.bind(Object(l.a)(e))},{event:p.b.GET_REVIEWER_INFO_FROM_TOKEN,instance:e.getUserInfoFromToken.bind(Object(l.a)(e))},{event:p.b.END_REVIEWER_SESSION,instance:e.endSession.bind(Object(l.a)(e))},{event:p.b.UPDATE_EMAIL_FOR_LOGIN_LINK,instance:e.updateUserEmail.bind(Object(l.a)(e))},{event:p.b.GET_LOGIN_LINK,instance:e.getLoginLink.bind(Object(l.a)(e))}],e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"reviewInitialize",value:function(e){var t=e.reviewApiUrl,n=e.authServiceUrl,a=e.courseId,r=e.authoringToolDomain;return h.default.initialize({reviewApiUrl:t,authServiceUrl:n,courseId:a,authoringToolDomain:r})}},{key:"sendComment",value:function(e){var t=e.data;return h.default.sendCommentRequest({data:t})}},{key:"sendCommentReply",value:function(e){var t=e.commentId,n=e.data;return h.default.sendCommentReplyRequest({commentId:t,data:n})}},{key:"deleteComment",value:function(e){var t=e.commentId;return h.default.deleteCommentRequest({commentId:t})}},{key:"deleteReply",value:function(e){var t=e.commentId,n=e.replyId;return h.default.deleteReplyRequest({commentId:t,replyId:n})}},{key:"ackDeleted",value:function(e){var t=e.commentId,n=e.replyId;return h.default.ackDeletedRequest({commentId:t,replyId:n})}},{key:"ackResolved",value:function(e){var t=e.commentId;return h.default.ackResolvedRequest({commentId:t})}},{key:"getComments",value:function(){return h.default.getCommentsRequest()}},{key:"getUserInfoFromToken",value:function(){return h.default.getUserInfoFromToken()}},{key:"updateUserEmail",value:function(e){var t=e.name,n=e.email;return h.default.updateUserEmail({name:t,email:n})}},{key:"getLoginLink",value:function(e){var t=e.name,n=e.email;return h.default.getLoginLink({name:t,email:n})}},{key:"endSession",value:function(){return h.default.endSession()}}]),t}(m.a),f=function(){function e(){Object(a.a)(this,e),this.eventHandler=void 0,this.actions=void 0,this.socketHandlers=[],this.eventHandler=new v,this.actions=Object(i.b)(o,c.a.dispatch),this.initWebSocketHandlers()}return Object(r.a)(e,[{key:"subscribe",value:function(){this.eventHandler.on()}},{key:"unsubscribe",value:function(){this.eventHandler.off()}},{key:"initWebSocketHandlers",value:function(){var e=this;this.socketHandlers=[{name:"SOCKET_COMMENT_ADDED",instance:function(t){e.actions.commentAdded(t)}},{name:"SOCKET_COMMENT_RESOLVED",instance:function(t){e.actions.commentResolved(t)}},{name:"SOCKET_COMMENT_UNRESOLVED",instance:function(t){e.actions.commentUnResolved(t)}},{name:"SOCKET_COMMENT_DELETED",instance:function(t){e.actions.commentDeleted(t)}},{name:"SOCKET_COMMENT_RESTORED",instance:function(t){e.actions.commentRestored(t)}},{name:"SOCKET_COMMENT_REPLY_ADDED",instance:function(t){e.actions.replyAdded(t)}},{name:"SOCKET_COMMENT_REPLY_DELETED",instance:function(t){e.actions.replyDeleted(t)}},{name:"SOCKET_COMMENT_REPLY_RESTORED",instance:function(t){e.actions.replyRestored(t)}},{name:"SOCKET_COMMENT_RESOLVED_ACK",instance:function(t){e.actions.commentResolvedAck(t)}},{name:"SOCKET_COMMENT_DELETED_ACK",instance:function(t){e.actions.commentDeletedAck(t)}},{name:"SOCKET_COMMENT_REPLY_DELETED_ACK",instance:function(t){e.actions.replyDeletedAck(t)}}]}}]),e}();t.default=new f}}]);