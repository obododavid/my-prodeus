(this["webpackJsonpprodeus-frontend"]=this["webpackJsonpprodeus-frontend"]||[]).push([[15],{494:function(e,a,t){"use strict";var n=t(0),l=t.n(n);t(310);a.a=Object(n.memo)((function(e){var a=e.placeholder,t=e.type,n=void 0===t?"text":t,r=e.name,c=e.id,s=e.img,i=(e.label,e.value),o=e.handleChange,m=e.handleBlur;return l.a.createElement("div",{className:"input-component"},l.a.createElement("input",{type:n,placeholder:a,name:r,id:c,value:i,onChange:o,onBlur:m}),l.a.createElement("img",{src:s,alt:"key"}))}))},495:function(e,a,t){e.exports=t.p+"static/media/logo-name.b6ca986b.svg"},496:function(e,a,t){e.exports=t.p+"static/media/key.e1a6521a.svg"},497:function(e,a,t){e.exports=t.p+"static/media/mail.5f803e62.svg"},498:function(e,a,t){e.exports=t.p+"static/media/google.3cf21d79.svg"},517:function(e,a,t){e.exports=t.p+"static/media/boy.81fbcab6.png"},518:function(e,a,t){},596:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(23),c=t(52),s=t(10),i=t(134),o=t(67),m=t(494),u=t(131),d=t(132),p=t(495),g=t.n(p),h=t(517),b=t.n(h),E=t(496),v=t.n(E),f=t(497),w=t.n(f),y=t(498),N=t.n(y),k=t(16);t(518);a.default=function(){var e=Object(s.b)(),a=Object(s.c)((function(e){return e.auth})).isLoading,t=Object(s.c)((function(e){return e.auth})).isGoogleLoading,p=Object(s.c)((function(e){return e.auth})).googleLink,h=Object(s.c)((function(e){return e.auth})).signInErr,E=new URLSearchParams(Object(r.h)().search).get("token");E&&e(Object(k.e)(E));var f=Object(i.a)({initialValues:{email:"",password:""},validationSchema:o.a({email:o.c().email("Invalid email address").required("Required"),password:o.c().required("Password provided.").min(6,"Password is too short - should be 6 chars minimum.").matches(/[a-zA-Z]/,"Password can only contain Latin letters.")}),onSubmit:function(a){e(Object(k.h)(a))}}),y=Object(n.useCallback)((function(){e(Object(k.f)())}),[e]),O=[{key:1,name:"email",id:"email",type:"email",placeholder:"Email",img:w.a,value:f.values.email},{key:2,name:"password",id:"password",type:"password",placeholder:"Password",img:v.a,value:f.values.password}];return p?(window.location.href="".concat(p),null):l.a.createElement("div",{id:"signin-page"},l.a.createElement("div",{className:"left-column"},l.a.createElement("section",null,l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:g.a,alt:"logo"}))),l.a.createElement("section",null,l.a.createElement("form",{className:"form",onSubmit:f.handleSubmit,noValidate:!0},O.map((function(e){var a=e.key,t=e.name;return l.a.createElement("div",{className:"input-wrapper",key:a},l.a.createElement(m.a,Object.assign({},e,{handleChange:f.handleChange,handleBlur:f.handleBlur})),f.touched[t]&&f.errors[t]?l.a.createElement("div",{className:"error-message"},f.errors[t]):null)})),l.a.createElement(u.a,{type:"submit",variant:"",disabled:a},a?l.a.createElement(d.a,null):"",l.a.createElement("span",null,"Sign In")),h&&l.a.createElement("h5",{className:"response-error-message"},h)),l.a.createElement("div",{className:"divider"},l.a.createElement("span",{className:"text"},"or"),l.a.createElement("span",{className:"line"})),l.a.createElement("div",{className:"google-auth"},l.a.createElement(u.a,{type:"button",handleOnClick:y,disabled:t},t?l.a.createElement(d.a,null):"",l.a.createElement("span",{className:"title"},"Sign In with Google"),l.a.createElement("span",{className:"google-icon-wrapper"},l.a.createElement("img",{src:N.a,alt:"google"})))),l.a.createElement("p",{className:"terms-conditions"},"By registering you agree to our"," ",l.a.createElement("a",{href:"https://www.prodeus.co/terms-conditions",target:"_blank"},"Terms & Conditions")),l.a.createElement("div",{className:"enquiry"},"Not a member? ",l.a.createElement(c.b,{to:"/signup"},"Sign Up")))),l.a.createElement("div",{className:"right-column"},l.a.createElement("h1",null,"Welcome ",l.a.createElement("br",null)," back."),l.a.createElement("img",{src:b.a,alt:"welcome"})))}}}]);
//# sourceMappingURL=SignIn.4cb184e8.chunk.js.map