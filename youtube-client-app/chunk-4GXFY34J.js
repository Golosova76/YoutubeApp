import{a as F,b as N,c as P,d as j,e as O,f}from"./chunk-F4XZKGAC.js";import{E as g,N as r,O as m,P as p,Q as I,S as M,X as x,Y as h,Z as w,_ as a,la as L,m as l,q as u,r as c,ta as S,ua as C,va as d,w as b,x as v}from"./chunk-W3K3PMDA.js";var E=["usernameInput"],R=["passwordInput"],Q=(()=>{let t=class t{constructor(i,e){this.loginService=i,this.router=e}onLogin(){let i=this.usernameInput.value,e=this.passwordInput.value;this.loginService.login(i,e)?this.router.navigate(["/youtube"]):alert("Login failed!")}};t.\u0275fac=function(e){return new(e||t)(g(O),g(S))},t.\u0275cmp=u({type:t,selectors:[["app-login-form"]],viewQuery:function(e,s){if(e&1&&(x(E,7),x(R,7)),e&2){let n;h(n=w())&&(s.usernameInput=n.first),h(n=w())&&(s.passwordInput=n.first)}},decls:15,vars:0,consts:[["usernameInput",""],["passwordInput",""],[1,"form-login-container"],["action","#","method","post","autocomplete","on",1,"form-login",3,"ngSubmit"],[1,"login-container"],[1,"login-title"],["for","username",1,"login-label"],["type","text","inputClass","login-input","id","username","name","username","placeholder","Login"],["for","password",1,"login-label"],["type","password","inputClass","password-input","id","password","name","password","placeholder","********"],["type","submit","buttonClass","button-login-submit"]],template:function(e,s){if(e&1){let n=I();r(0,"div",2)(1,"form",3),M("ngSubmit",function(){return b(n),v(s.onLogin())}),r(2,"div",4)(3,"h1",5),a(4,"Login"),m(),r(5,"label",6),a(6,"login"),m(),p(7,"app-input",7,0),r(9,"label",8),a(10,"password"),m(),p(11,"app-input",9,1),r(13,"app-custom-button",10),a(14," Login "),m()()()()}},dependencies:[f,d,P,F,N],styles:['@charset "UTF-8";.form-login-container[_ngcontent-%COMP%]{padding:20px;max-width:1200px;margin:0 auto}.form-login[_ngcontent-%COMP%]{border-radius:10px;background-color:#fff;outline:#fff double 5px;box-shadow:0 3px 10px 4px #e3d8d866,0 4px 15px 6px #00000080,0 5px 20px 10px #78727299;padding:2vw;max-width:28rem;margin:0 auto;transition:width .5s ease}.login-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;background-color:#fff;width:100%;padding:1.2rem 2.5rem 2.5rem;border-radius:8px;box-shadow:2px 4px 6px #0003}.login-title[_ngcontent-%COMP%]{font-weight:800;font-size:20px}.login-title[_ngcontent-%COMP%]:not(:last-child){margin-bottom:21px}.login-label[_ngcontent-%COMP%]{color:#00000080;font-size:16px;font-family:Roboto,sans-serif}']});let o=t;return o})();var V=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=u({type:t,selectors:[["app-login-page"]],decls:1,vars:0,template:function(e,s){e&1&&p(0,"app-login-form")},dependencies:[Q]});let o=t;return o})();var _=[{path:"",component:V}],D=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[C.forChild(_),C]});let o=t;return o})();var nt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c({type:t}),t.\u0275inj=l({imports:[L,D,f,d,j]});let o=t;return o})();export{nt as AuthModule};
