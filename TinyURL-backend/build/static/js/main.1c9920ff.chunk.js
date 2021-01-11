(this["webpackJsonptinyurl-frontend"]=this["webpackJsonptinyurl-frontend"]||[]).push([[0],{55:function(e,t,c){},81:function(e,t,c){},83:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),a=c.n(r),i=c(20),s=c.n(i),j=(c(55),c(42)),l=c(43),o=c(49),h=c(48),b=c(14),d=c(6),O=c(85),u=c(86),x=(c(56),function(){return Object(n.jsx)(O.a,{className:"p-3",children:Object(n.jsxs)(u.a,{children:[Object(n.jsx)("h1",{children:"Hello, Welcome to Joey's Website"}),Object(n.jsx)("p",{children:"I'll be featuring personal projects that I'm currently working on in the MERN stack."}),Object(n.jsx)("p",{children:"Done are the following:"}),Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("ul",{children:[Object(n.jsxs)("li",{children:[Object(n.jsx)(b.b,{to:"/tiny-url",children:"Tiny URL"})," ",Object(n.jsxs)("a",{href:"http://www.github.com/joeyschen/tinyURL",children:[Object(n.jsx)("i",{className:"fab fa-github"})," "]})]}),Object(n.jsx)("p",{children:"Tiny URL takes in a URL and shortens it. This enables the URL to be more accessible on web pages, allows tracking on things like clicks, and increases usability. Client: React.js Server: Node.js, Express.js for middleware, Redis for caching Database: MongoDB, Mongoose for ODM"})]})})]})})}),m=c(11),p=c(18),f=c.n(p),g=c(90),y=c(87),L=function(e){var t=Object(r.useState)(""),c=Object(m.a)(t,2),a=c[0],i=c[1],s=Object(r.useState)(""),j=Object(m.a)(s,2),l=j[0],o=j[1],h=Object(r.useState)(""),b=Object(m.a)(h,2),d=b[0],u=b[1],x=Object(r.useState)(""),p=Object(m.a)(x,2),L=p[0],v=p[1];return Object(n.jsx)("div",{children:Object(n.jsxs)(O.a,{className:"p-3",children:[Object(n.jsx)("h3",{children:"Add New Student"}),Object(n.jsxs)(g.a,{onSubmit:function(e){e.preventDefault();var t={name:a,shortLink:l,origLink:d};console.log(t),f.a.post("/api/newURL",t).then((function(e){v(e.data.shortLink)})).catch((function(e){return console.log(e)}))},children:[Object(n.jsxs)(g.a.Group,{controlId:"formName",children:[Object(n.jsx)(g.a.Label,{children:"Name"}),Object(n.jsx)(g.a.Control,{type:"text",className:"form-control",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Enter Name of Your Link..."})]}),Object(n.jsxs)(g.a.Group,{controlId:"formShortLink",children:[Object(n.jsxs)(g.a.Label,{children:["Your Unique ID ",Object(n.jsx)("span",{className:"text-danger",children:"*Optional"})]}),Object(n.jsx)(g.a.Control,{type:"text",className:"form-control",value:l,onChange:function(e){return o(e.target.value)},placeholder:"Enter Short Link..."}),Object(n.jsx)(g.a.Text,{className:"text-muted",children:"The format will turn out to be https://www.joeyschen/tiny/XXXXXX"})]}),Object(n.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(n.jsx)(g.a.Label,{children:"Original URL"}),Object(n.jsx)(g.a.Control,{type:"text",className:"form-control",value:d,onChange:function(e){return u(e.target.value)},placeholder:"Enter the Original Link..."}),Object(n.jsx)(g.a.Text,{className:"text-muted",children:"This is the URL that you want to be redirected"})]}),Object(n.jsx)(y.a,{variant:"primary",type:"submit",children:"Create TinyURL"}),Object(n.jsx)(y.a,{variant:"secondary",className:"m-3",onClick:function(t){return e.history.push("/tiny-url")},children:"Cancel"})]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("span",{className:"text-danger",children:"New Link: "}),Object(n.jsx)("a",{href:L,children:L})]})]})})},v=c(88),k=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),c=t[0],a=t[1],i=Object(r.useState)(!1),s=Object(m.a)(i,2),j=s[0],l=s[1],o=Object(r.useState)(!1),h=Object(m.a)(o,2),d=h[0],u=h[1];return Object(r.useEffect)((function(){u(!0),f.a.get("/api/newURL").then((function(e){var t=e.data;console.log(t),a(t),u(!1)})).catch((function(e){l(!0),u(!1)}))}),[]),d?Object(n.jsx)("div",{children:"Loading..."}):j?Object(n.jsx)("div",{children:"Error occured."}):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(O.a,{className:"p-3",children:[Object(n.jsxs)("p",{children:["These are the existing TinyURL modules. How does it ",Object(n.jsx)(b.b,{to:"/tiny-url/about",children:"work?"})," "]}),Object(n.jsx)(y.a,{variant:"success",className:"mb-3",href:"/tiny-url/create",children:"Create TinyURL"}),Object(n.jsxs)(v.a,{striped:!0,bordered:!0,hover:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"id"}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Short Link"}),Object(n.jsx)("th",{children:"Original Link"}),Object(n.jsx)("th",{children:"Clicks"}),Object(n.jsx)("th",{children:"Date Created"})]})}),Object(n.jsx)("tbody",{children:c.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)(b.b,{to:"./tiny-url/details/".concat(e.id),children:e.id})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.shortLink}),Object(n.jsx)("td",{children:e.origLink}),Object(n.jsx)("td",{children:e.clicks}),Object(n.jsx)("td",{children:e.createDate?new Date(e.createDate).toISOString().slice(0,10):"-"})]},t)}))})]})]})})},N=function(e){var t=e.match,c=Object(r.useState)([]),a=Object(m.a)(c,2),i=a[0],s=a[1],j=Object(r.useState)(!1),l=Object(m.a)(j,2),o=l[0],h=l[1],b=Object(r.useState)(!1),d=Object(m.a)(b,2),u=d[0],x=d[1];return Object(r.useEffect)((function(){x(!0),f.a.get("/api/newURL/".concat(t.params.id)).then((function(e){var t=e.data;console.log(t),s(t),x(!1)})).catch((function(e){h(!0),x(!1)}))}),[]),u?Object(n.jsx)("div",{children:"Loading..."}):o?Object(n.jsx)("div",{children:"Error occured."}):Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(O.a,{className:"p-3",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{children:["Name: ",i.name," "]}),Object(n.jsxs)("p",{children:["Short Link: ",i.shortLink]}),Object(n.jsxs)("p",{children:["Original Link: ",i.origLink]})]})})})},w=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)("h1",{className:"title",children:"Tiny URL"}),Object(n.jsx)("p",{children:"This is how it works:"}),Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:"../../img/tinyurl/url-shortener.png"})}),Object(n.jsx)(y.a,{href:"/",variant:"primary",type:"button",children:"Back"})]})})},S=c(89),C=c(91),R=c(45),T=function(){return Object(n.jsxs)(S.a,{bg:"light",expand:"lg",children:[Object(n.jsx)(S.a.Brand,{href:"/",children:"Joeyschen"}),Object(n.jsx)(S.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(n.jsxs)(S.a.Collapse,{id:"basic-navbar-nav",children:[Object(n.jsxs)(C.a,{className:"mr-auto",children:[Object(n.jsx)(C.a.Link,{href:"/",children:"Home"}),Object(n.jsx)(C.a.Link,{href:"/tiny-url",children:"TinyURL"})]}),Object(n.jsxs)(g.a,{inline:!0,children:[Object(n.jsx)(R.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),Object(n.jsx)(y.a,{variant:"outline-success",children:"Search"})]})]})]})},U=function(){return Object(n.jsx)("h1",{children:"404: Page Not Found"})},D=(c(81),function(e){Object(o.a)(c,e);var t=Object(h.a)(c);function c(){return Object(j.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(n.jsx)(b.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(T,{}),Object(n.jsx)("div",{id:"page-body",children:Object(n.jsxs)(d.c,{children:[Object(n.jsx)(d.a,{path:"/",component:x,exact:!0}),Object(n.jsx)(d.a,{path:"/tiny-url",component:k,exact:!0}),Object(n.jsx)(d.a,{path:"/tiny-url/create",component:L,exact:!0}),Object(n.jsx)(d.a,{path:"/tiny-url/about",component:w,exact:!0}),Object(n.jsx)(d.a,{path:"/tiny-url/details/:id",component:N,exact:!0}),Object(n.jsx)(d.a,{component:U})]})})]})})}}]),c}(r.Component)),E=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,92)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),r(e),a(e),i(e)}))};c(82);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),E()}},[[83,1,2]]]);
//# sourceMappingURL=main.1c9920ff.chunk.js.map