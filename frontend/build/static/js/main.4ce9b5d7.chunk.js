(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),i=a.n(r),c=a(9),o=a.n(c),s=(a(87),a(155)),l=a(156),d=a(144),u=a(160),p=a(153),b=a.p+"static/media/memories.9f8d4aee.png",j=a(20),f=a(14),m=a.n(f),h=a(26),g=a(49),x=a(77),O=a(145),v=a(157),y=a(158),w=a(16),C=a(66),k=a.n(C),N=a(17),P=a(67),S=a.n(P).a.create({baseURL:"https://insta-memories.herokuapp.com/posts"}),I=function(e){return S.delete("/".concat(e))},W=function(e){return S.patch("/".concat(e,"/likePost"))},E=Object(N.c)({name:"posts",initialState:{loading:!1,posts:[],hasErrors:!1,currentId:null},reducers:{getPosts:function(e){e.loading=!0},getPostsSuccess:function(e,t){var a=t.payload;e.posts=a,e.loading=!1,e.hasErrors=!1},getPostsFailure:function(e,t){e.loading=!1,e.hasErrors=!0},addPost:function(e,t){var a=t.payload;e.posts.push(a)},editPost:function(e,t){var a=t.payload;e.posts.forEach((function(e){return e._id===a._id?a:e}))},setCurrentId:function(e,t){var a=t.payload;e.currentId=a},removePost:function(e,t){var a=t.payload;e.posts.filter((function(e){return e._id===a}))},favPost:function(e,t){var a=t.payload;e.posts.forEach((function(e){return e._id===a._id?a:e}))}}}),B=E.actions,D=B.getPosts,_=B.getPostsSuccess,z=(B.getPostsFailure,B.addPost),M=B.editPost,F=B.setCurrentId,R=B.removePost,T=B.favPost,A=Object(N.b)("posts/fetchPosts",function(){var e=Object(h.a)(m.a.mark((function e(t,a){var n,r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=a.dispatch)(D()),e.next=4,S.get("/");case 4:r=e.sent,i=r.data,n(_(i));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),L=Object(N.b)("posts/createPost",function(){var e=Object(h.a)(m.a.mark((function e(t,a){var n,r,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.postData,r=a.dispatch,e.next=4,o=n,S.post("/",o);case 4:return i=e.sent,c=i.data,e.abrupt("return",r(z(c)));case 7:case"end":return e.stop()}var o}),e)})));return function(t,a){return e.apply(this,arguments)}}()),H=Object(N.b)("posts/updatePost",function(){var e=Object(h.a)(m.a.mark((function e(t,a){var n,r,i,c,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.currentId,r=t.postData,i=a.dispatch,e.next=4,s=n,l=r,S.patch("/".concat(s),l);case 4:c=e.sent,o=c.data,i(M(o));case 7:case"end":return e.stop()}var s,l}),e)})));return function(t,a){return e.apply(this,arguments)}}()),J=Object(N.b)("posts/deletePost",function(){var e=Object(h.a)(m.a.mark((function e(t,a){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=a.dispatch,e.next=4,I(n);case 4:return e.abrupt("return",r(R()));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),$=Object(N.b)("posts/likePost",function(){var e=Object(h.a)(m.a.mark((function e(t,a){var n,r,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.id,r=a.dispatch,e.next=4,W(n);case 4:i=e.sent,c=i.data,r(T(c));case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()),U=function(e){return e.posts},V=E.reducer,q=a(140),G=a(73),K=Object(q.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10,backgroundColor:"rgb(91, 93, 94)",color:"white"},margin:{margin:e.spacing(1)}}})),Q=Object(G.a)({palette:{primary:{main:"#1e90ff"}}}),X=Object(N.c)({name:"modal",initialState:{open:!1},reducers:{setModal:function(e){e.open?e.open=!1:e.open=!0}}}),Y=X.actions.setModal,Z=function(e){return e.modal},ee=X.reducer,te=function(){var e=Object(r.useState)({creator:"",title:"",message:"",tags:"",selectedFile:""}),t=Object(g.a)(e,2),a=t[0],i=t[1],c=Object(w.c)(U),o=c.posts,s=c.currentId,l=s?null===o||void 0===o?void 0:o.find((function(e){return e._id===s})):null,u=Object(w.b)(),p=K(),b=function(){F(null),i({creator:"",title:"",message:"",tags:"",selectedFile:""})},f=function(){var e=Object(h.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),u(s?H({currentId:s,postData:a}):L({postData:a})),b(),u(Y(!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){l&&i(l)}),[l]),Object(n.jsx)(x.a,{className:p.paper,children:Object(n.jsxs)("form",{autoComplete:"off",noValidate:!0,className:"".concat(p.root," ").concat(p.form),onSubmit:f,children:[Object(n.jsx)(d.a,{variant:"h6",children:s?'Editing "'.concat(null===l||void 0===l?void 0:l.title,'"'):"Creating a Memory"}),Object(n.jsxs)(O.a,{theme:Q,children:[Object(n.jsx)(v.a,{className:p.margin,name:"creator",variant:"outlined",label:"Creator",fullWidth:!0,value:a.creator,onChange:function(e){return i(Object(j.a)(Object(j.a)({},a),{},{creator:e.target.value}))}}),Object(n.jsx)(v.a,{className:p.margin,name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:a.title,onChange:function(e){return i(Object(j.a)(Object(j.a)({},a),{},{title:e.target.value}))}}),Object(n.jsx)(v.a,{className:p.margin,name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:a.message,onChange:function(e){return i(Object(j.a)(Object(j.a)({},a),{},{message:e.target.value}))}}),Object(n.jsx)(v.a,{className:p.margin,name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:a.tags,onChange:function(e){return i(Object(j.a)(Object(j.a)({},a),{},{tags:e.target.value.split(",")}))}}),Object(n.jsx)("div",{className:p.fileInput,children:Object(n.jsx)(k.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return i(Object(j.a)(Object(j.a)({},a),{},{selectedFile:t}))}})}),Object(n.jsx)(y.a,{className:p.buttonSubmit,variant:"contained",size:"large",type:"submit",fullWidth:!0,children:"Submit"}),Object(n.jsx)(y.a,{variant:"contained",size:"small",onClick:b,fullWidth:!0,style:{backgroundColor:"lightgray",color:"black"},children:"Clear"})]})]})})},ae=a(159),ne=a(146),re=a(147),ie=a(149),ce=a(150),oe=a(71),se=a.n(oe),le=Object(q.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"},btnColor:{color:"#ff6c5f"},spa:{backgroundColor:"dodgerblue",color:"red"}}),de=a(148),ue=a(151),pe=a(152),be=function(e){var t=e.post,a=le(),r=Object(w.b)();return Object(n.jsxs)(ne.a,{className:a.card,children:[Object(n.jsx)(re.a,{className:a.media,image:t.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:t.title}),Object(n.jsxs)("div",{className:a.overlay,children:[Object(n.jsx)(d.a,{variant:"h6",children:t.creator}),Object(n.jsx)(d.a,{variant:"body2",children:se()(t.createdAt).fromNow()})]}),Object(n.jsx)("div",{className:a.overlay2,children:Object(n.jsx)(y.a,{style:{color:"white"},size:"small",onClick:function(){r(Y(!0)),r(F(t._id))},children:Object(n.jsx)(de.a,{fontSize:"default"})})}),Object(n.jsx)("div",{className:a.details,children:Object(n.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"h2",children:t.tags.map((function(e){return"#".concat(e," ")}))})}),Object(n.jsx)(d.a,{className:a.title,gutterBottom:!0,variant:"h5",component:"h2",children:t.title}),Object(n.jsx)(ie.a,{children:Object(n.jsx)(d.a,{variant:"body2",color:"textSecondary",component:"p",children:t.message})}),Object(n.jsxs)(ce.a,{className:a.cardActions,children:[Object(n.jsxs)(y.a,{size:"small",className:a.btnColor,onClick:function(){return r($({id:t._id}))},children:[Object(n.jsx)(ue.a,{fontSize:"small"}),"\xa0 ",t.likeCount]}),Object(n.jsxs)(y.a,{size:"small",className:a.btnColor,onClick:function(){return r(J({id:t._id}))},children:[Object(n.jsx)(pe.a,{fontSize:"small"})," Delete"]})]})]})},je=a(154),fe=a(23),me=Object(q.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"},paper:{position:"absolute",backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},posts:{minHeight:"100vh",backgroundColor:"#f8f9fa",position:"relative"},postsContainer:{position:"absolute",bottom:"10px",color:"#fe3d71"},postsCreateBtn:Object(fe.a)({position:"fixed",right:".2em",bottom:"10px",fontSize:"3em !important"},e.breakpoints.up("sm"),{right:"1em"}),container:{scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}}}}));function he(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var ge=function(){var e=Object(w.b)(),t=Object(r.useState)(he),a=Object(g.a)(t,1)[0],i=me(),c=Object(w.c)(U),o=c.posts,s=c.hasErrors,l=Object(w.c)(Z).open;return Object(n.jsxs)(n.Fragment,{children:[s?Object(n.jsx)(we,{}):(null===o||void 0===o?void 0:o.length)?Object(n.jsx)(p.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:null===o||void 0===o?void 0:o.map((function(e){return Object(n.jsx)(p.a,{item:!0,xs:12,sm:4,md:4,children:Object(n.jsx)(be,{post:e})},e._id)}))}):Object(n.jsx)(Oe,{}),Object(n.jsx)("div",{className:i.postsContainer,children:Object(n.jsx)(je.a,{className:i.postsCreateBtn,onClick:function(){return e(Y(!0))}})}),Object(n.jsx)(ae.a,{open:l,onClose:function(){e(Y(!1)),e(F(null))},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:Object(n.jsx)("div",{style:a,className:i.paper,children:Object(n.jsx)(te,{})})})]})},xe=Object(q.a)((function(e){return{loaderContainer:{display:"grid",placeItems:"center",height:"80vh"},loader:Object(fe.a)({border:"0.7rem solid #f8f9fa",borderRadius:"50%",background:"#fde6ec",borderTop:"0.7rem solid #fe3d71",width:"5rem",height:"5rem",animation:"$spin 2s linear infinite"},e.breakpoints.up("md"),{width:"7rem",height:"7rem"}),"@keyframes spin":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}}})),Oe=function(){var e=xe();return Object(n.jsx)("div",{className:e.loaderContainer,children:Object(n.jsx)("div",{className:e.loader})})},ve=Object(q.a)((function(e){return{errorPage:{maxWidth:"100%",display:"grid",placeItems:"center",height:"100vh"}}})),ye=a.p+"static/media/errorPage.8c602802.jpg",we=function(){var e=ve();return Object(n.jsxs)("div",{className:e.errorPage,children:[Object(n.jsx)("img",{src:ye,alt:"errorPage"}),";"]})},Ce=Object(q.a)((function(e){return{appBar:Object(fe.a)({borderRadius:15,marginBottom:"20px",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",borderLeft:"5px solid #fe3d71"},e.breakpoints.down("md"),{borderLeft:"2px solid #fe3d71"}),heading:{color:"rgb(91, 93, 94)"},image:{marginRight:"15px"},capsule:{backgroundColor:"#fe3d71",borderRadius:"0 25px 25px 0",padding:"2px 7px 2px 2px",color:"white"}}})),ke=a(72),Ne=a.n(ke);var Pe=function(){var e=Ce(),t=Object(w.b)();return Object(r.useEffect)((function(){t(A())}),[t]),Object(r.useEffect)((function(){var e=function(e){t(A())},a=new Ne.a("4f051944159df55f7c75",{cluster:"eu"}).subscribe("posts");a.bind("inserted",e),a.bind("deleted",e),a.bind("updated",e)}),[t]),Object(n.jsxs)(s.a,{maxWidth:"lg",children:[Object(n.jsxs)(l.a,{className:e.appBar,position:"sticky",color:"inherit",children:[Object(n.jsx)("img",{src:b,alt:"memories",className:e.image,height:60}),Object(n.jsxs)(d.a,{className:e.heading,variant:window.innerWidth<576?"h4":"h3",align:"center",children:[Object(n.jsx)("span",{style:{},children:"Mem"}),Object(n.jsx)("span",{className:e.capsule,children:"ories"})]})]}),Object(n.jsx)(u.a,{in:!0,children:Object(n.jsx)(p.a,{container:!0,justify:"space-between",alignItems:"stretch",spacing:3,children:Object(n.jsx)(p.a,{item:!0,xs:12,children:Object(n.jsx)(ge,{})})})})]})},Se=a(74);var Ie=Object(N.a)({reducer:{posts:V,modal:ee,middleware:[].concat(Object(Se.a)(Object(N.d)()),[function(e){return function(e){return function(t){e(t)}}}])}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(w.a,{store:Ie,children:Object(n.jsx)(Pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},87:function(e,t,a){}},[[112,1,2]]]);
//# sourceMappingURL=main.4ce9b5d7.chunk.js.map