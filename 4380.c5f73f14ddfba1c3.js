"use strict";(self.webpackChunkavalon_ng=self.webpackChunkavalon_ng||[]).push([[4380],{9615:(y,p,n)=>{n.d(p,{E:()=>g});var t=n(6895),c=n(8639),e=n(8274);let g=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[t.ez,c.TX]}),d})()},9981:(y,p,n)=>{n.d(p,{o:()=>g});var t=n(6895),c=n(6679),e=n(8274);let g=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[t.ez,c.W]}),d})()},4380:(y,p,n)=>{n.r(p),n.d(p,{EvaluationsModule:()=>O});var t=n(6895),c=n(5675),e=n(8274),g=n(8145),d=n(8386),l=n(805),s=n(6163);function u(i,C){if(1&i&&(e.TgZ(0,"a",3)(1,"div"),e._UZ(2,"i"),e.TgZ(3,"span",4),e._uU(4),e.qZA()()()),2&i){const v=C.$implicit;e.xp6(2),e.Tol(v.icon),e.xp6(2),e.hij(" ",v.label,"")}}const m=[{path:"",component:(()=>{class i{constructor(v,I){this.menuService=v,this.userService=I,this.menuItems=[],this.showMenu$=this.menuService.menuState$}ngOnInit(){this.user=this.userService.getLoggedUser(),this.staffCode=this.user?.profile?.staffCode,this.userRoleId=this.user?.role?.id,this.userDeptId=this.user?.profile?.department?.id,this.menuItems=[{label:"\u0ea7\u0ebd\u0e81\u0ec1\u0e9c\u0e99\u0eaa\u0eb9\u0ec9\u0e8a\u0ebb\u0e99",icon:"pi pi-fw pi-th-large",routerLink:"action-plan",badge:""},{label:"\u0ea7\u0ebd\u0e81\u0ea1\u0ead\u0e9a\u0edd\u0eb2\u0e8d",icon:"pi pi-fw pi-users",routerLink:"job-assign",badge:""},{label:"\u0ea7\u0ebd\u0e81\u0e9e\u0eb2\u0ea5\u0eb0\u0e9a\u0ebb\u0e94\u0e9a\u0eb2\u0e94",icon:"pi pi-fw pi-user",routerLink:"job-descriptions",badge:""}]}}return i.\u0275fac=function(v){return new(v||i)(e.Y36(g.h),e.Y36(d.K))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-evaluations"]],decls:7,vars:2,consts:[[1,"text-3xl","font-semibold","mb-3"],[3,"model","activeItem"],["pTemplate","item"],[1,"flex","justify-content-between","align-items-center"],[1,"text-xl"]],template:function(v,I){1&v&&(e.TgZ(0,"div",0)(1,"span"),e._uU(2,"\u0e81\u0eb2\u0e99\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81\u0e97\u0eb5\u0ec8\u0ea5\u0ecd\u0e96\u0ec9\u0eb2\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99"),e.qZA()(),e.TgZ(3,"p-tabMenu",1),e.YNc(4,u,5,3,"ng-template",2),e.qZA(),e.TgZ(5,"div"),e._UZ(6,"router-outlet"),e.qZA()),2&v&&(e.xp6(3),e.Q6J("model",I.menuItems)("activeItem",I.activeItem))},dependencies:[c.lC,l.jx,s.d],encapsulation:2}),i})(),children:[{path:"action-plan",loadChildren:()=>Promise.all([n.e(666),n.e(5047),n.e(8073),n.e(3958),n.e(585),n.e(605),n.e(6620),n.e(6190),n.e(5665),n.e(5144),n.e(8592),n.e(139)]).then(n.bind(n,139)).then(i=>i.EvalTaskPlanModule)},{path:"job-assign",loadChildren:()=>Promise.all([n.e(666),n.e(5047),n.e(8073),n.e(3958),n.e(585),n.e(605),n.e(6620),n.e(6190),n.e(5665),n.e(5144),n.e(3344)]).then(n.bind(n,3344)).then(i=>i.EvalTaskAssignModule)},{path:"job-descriptions",loadChildren:()=>Promise.all([n.e(666),n.e(5047),n.e(8073),n.e(3958),n.e(585),n.e(605),n.e(6620),n.e(6190),n.e(5665),n.e(5144),n.e(7145)]).then(n.bind(n,7145)).then(i=>i.EvalTaskDescModule)},{path:"approval",loadChildren:()=>n.e(8592).then(n.bind(n,3972)).then(i=>i.ApprovalModule)}]}];let E=(()=>{class i{}return i.\u0275fac=function(v){return new(v||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(m),c.Bz]}),i})();var o=n(4325),f=n(3930),a=n(4466),h=n(8639),M=n(7147),T=n(9981),x=n(2448),D=n(3054),A=n(5593),B=n(9615);let O=(()=>{class i{}return i.\u0275fac=function(v){return new(v||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[o.E7,o.xA],imports:[t.ez,E,a.m,h.TX,M.o,A.hJ,s.i,B.E,D.A,T.o,x.q,f.g3]}),i})()},2448:(y,p,n)=>{n.d(p,{q:()=>d});var t=n(6895),c=n(5593),e=n(3930),g=n(8274);let d=(()=>{class l{}return l.\u0275fac=function(u){return new(u||l)},l.\u0275mod=g.oAB({type:l}),l.\u0275inj=g.cJS({imports:[t.ez,c.hJ,e.g3]}),l})()},7147:(y,p,n)=>{n.d(p,{A:()=>m,o:()=>E});var t=n(8274),c=n(6895);function e(o,f){if(1&o){const a=t.EpF();t.TgZ(0,"img",6),t.NdJ("error",function(M){t.CHM(a);const T=t.oxw(2);return t.KtG(T.imageError(M))}),t.qZA()}if(2&o){const a=t.oxw(2);t.Q6J("src",a.image,t.LSH)}}function g(o,f){if(1&o&&t._UZ(0,"span",8),2&o){const a=t.oxw(3);t.Tol(a.icon),t.Q6J("ngClass","p-chip-icon")}}function d(o,f){if(1&o&&t.YNc(0,g,1,3,"span",7),2&o){const a=t.oxw(2);t.Q6J("ngIf",a.icon)}}function l(o,f){if(1&o&&(t.TgZ(0,"div",9),t._uU(1),t.qZA()),2&o){const a=t.oxw(2);t.xp6(1),t.Oqu(a.label)}}function s(o,f){if(1&o){const a=t.EpF();t.TgZ(0,"span",10),t.NdJ("click",function(M){t.CHM(a);const T=t.oxw(2);return t.KtG(T.close(M))})("keydown.enter",function(M){t.CHM(a);const T=t.oxw(2);return t.KtG(T.close(M))}),t.qZA()}if(2&o){const a=t.oxw(2);t.Tol(a.removeIcon),t.Q6J("ngClass","pi-chip-remove-icon")}}function u(o,f){if(1&o&&(t.TgZ(0,"div",1),t.Hsn(1),t.YNc(2,e,1,1,"img",2),t.YNc(3,d,1,1,"ng-template",null,3,t.W1O),t.YNc(5,l,2,1,"div",4),t.YNc(6,s,1,3,"span",5),t.qZA()),2&o){const a=t.MAs(4),h=t.oxw();t.Tol(h.styleClass),t.Q6J("ngClass",h.containerClass())("ngStyle",h.style),t.xp6(2),t.Q6J("ngIf",h.image)("ngIfElse",a),t.xp6(3),t.Q6J("ngIf",h.label),t.xp6(1),t.Q6J("ngIf",h.removable)}}const r=["*"];let m=(()=>{class o{constructor(){this.removeIcon="pi pi-times-circle",this.onRemove=new t.vpe,this.onImageError=new t.vpe,this.visible=!0}containerClass(){return{"p-chip p-component":!0,"p-chip-image":null!=this.image}}close(a){this.visible=!1,this.onRemove.emit(a)}imageError(a){this.onImageError.emit(a)}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["p-chip"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",style:"style",styleClass:"styleClass",removable:"removable",removeIcon:"removeIcon"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},ngContentSelectors:r,decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"src","error",4,"ngIf","ngIfElse"],["iconTemplate",""],["class","p-chip-text",4,"ngIf"],["tabindex","0",3,"class","ngClass","click","keydown.enter",4,"ngIf"],[3,"src","error"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-text"],["tabindex","0",3,"ngClass","click","keydown.enter"]],template:function(a,h){1&a&&(t.F$t(),t.YNc(0,u,7,8,"div",0)),2&a&&t.Q6J("ngIf",h.visible)},dependencies:[c.mk,c.O5,c.PC],styles:[".p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi{line-height:1.5}.pi-chip-remove-icon{line-height:1.5;cursor:pointer}.p-chip img{border-radius:50%}\n"],encapsulation:2,changeDetection:0}),o})(),E=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez]}),o})()},3054:(y,p,n)=>{n.d(p,{A:()=>d,g:()=>g});var t=n(8274),c=n(6895),e=n(433);let g=(()=>{class l{constructor(u,r,m,E){this.el=u,this.ngModel=r,this.control=m,this.cd=E,this.onResize=new t.vpe}ngOnInit(){this.ngModel&&(this.ngModelSubscription=this.ngModel.valueChanges.subscribe(()=>{this.updateState()})),this.control&&(this.ngControlSubscription=this.control.valueChanges.subscribe(()=>{this.updateState()}))}ngAfterViewInit(){this.autoResize&&this.resize(),this.updateFilledState(),this.cd.detectChanges()}onInput(u){this.updateState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length}onFocus(u){this.autoResize&&this.resize(u)}onBlur(u){this.autoResize&&this.resize(u)}resize(u){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(u||{})}updateState(){this.updateFilledState(),this.autoResize&&this.resize()}ngOnDestroy(){this.ngModelSubscription&&this.ngModelSubscription.unsubscribe(),this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}}return l.\u0275fac=function(u){return new(u||l)(t.Y36(t.SBq),t.Y36(e.On,8),t.Y36(e.a5,8),t.Y36(t.sBO))},l.\u0275dir=t.lG2({type:l,selectors:[["","pInputTextarea",""]],hostAttrs:[1,"p-inputtextarea","p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(u,r){1&u&&t.NdJ("input",function(E){return r.onInput(E)})("focus",function(E){return r.onFocus(E)})("blur",function(E){return r.onBlur(E)}),2&u&&t.ekj("p-filled",r.filled)("p-inputtextarea-resizable",r.autoResize)},inputs:{autoResize:"autoResize"},outputs:{onResize:"onResize"}}),l})(),d=(()=>{class l{}return l.\u0275fac=function(u){return new(u||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[c.ez]}),l})()},6679:(y,p,n)=>{n.d(p,{V:()=>d,W:()=>l});var t=n(8274),c=n(6895);function e(s,u){if(1&s&&t._UZ(0,"span",3),2&s){const r=t.oxw();t.Q6J("ngClass",r.icon)}}const g=["*"];let d=(()=>{class s{containerClass(){return{"p-tag p-component":!0,"p-tag-info":"info"===this.severity,"p-tag-success":"success"===this.severity,"p-tag-warning":"warning"===this.severity,"p-tag-danger":"danger"===this.severity,"p-tag-rounded":this.rounded}}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["p-tag"]],hostAttrs:[1,"p-element"],inputs:{styleClass:"styleClass",style:"style",severity:"severity",value:"value",icon:"icon",rounded:"rounded"},ngContentSelectors:g,decls:5,vars:6,consts:[[3,"ngClass","ngStyle"],["class","p-tag-icon",3,"ngClass",4,"ngIf"],[1,"p-tag-value"],[1,"p-tag-icon",3,"ngClass"]],template:function(r,m){1&r&&(t.F$t(),t.TgZ(0,"span",0),t.Hsn(1),t.YNc(2,e,1,1,"span",1),t.TgZ(3,"span",2),t._uU(4),t.qZA()()),2&r&&(t.Tol(m.styleClass),t.Q6J("ngClass",m.containerClass())("ngStyle",m.style),t.xp6(2),t.Q6J("ngIf",m.icon),t.xp6(2),t.Oqu(m.value))},dependencies:[c.mk,c.O5,c.PC],styles:[".p-tag{display:inline-flex;align-items:center;justify-content:center}.p-tag-icon,.p-tag-value,.p-tag-icon.pi{line-height:1.5}.p-tag.p-tag-rounded{border-radius:10rem}\n"],encapsulation:2,changeDetection:0}),s})(),l=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez]}),s})()}}]);