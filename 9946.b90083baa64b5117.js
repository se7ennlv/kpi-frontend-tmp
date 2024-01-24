"use strict";(self.webpackChunkavalon_ng=self.webpackChunkavalon_ng||[]).push([[9946],{209:(S,C,o)=>{o.d(C,{A:()=>g,G:()=>m});let m=(()=>{class t{}return t.LIMIT=4,t})(),g=(()=>{class t{}return t.sm=576,t.md=768,t.lg=992,t.xl=1200,t})()},6749:(S,C,o)=>{o.d(C,{g:()=>D});var m=o(6895),g=o(4466),t=o(585),T=o(8274);let D=(()=>{class h{}return h.\u0275fac=function(B){return new(B||h)},h.\u0275mod=T.oAB({type:h}),h.\u0275inj=T.cJS({imports:[m.ez,g.m,t._8]}),h})()},7248:(S,C,o)=>{o.d(C,{U:()=>t});var m=o(655),g=o(2156);class t{}(0,m.gn)([(0,g.C1)()],t.prototype,"docYear",void 0)},9166:(S,C,o)=>{o.d(C,{A:()=>b});var m=o(1135),g=o(4004),t=o(8505),T=o(2340),D=o(8274),h=o(529);let b=(()=>{class B{constructor(E){this.http=E,this.apiUrl=`${T.N.apiUrl}/v1/desc-evaluations`,this.item=new m.X({}),this.item$=this.item.asObservable(),this.items=new m.X([]),this.items$=this.items.asObservable()}create(E){return this.http.post(this.apiUrl,E).pipe((0,g.U)(l=>{if(201===l?.statusCode&&l?.data)return l.data}))}getOne(E){return this.http.post(`${this.apiUrl}/find`,E).pipe((0,t.b)(a=>{200===a?.statusCode&&a?.data&&this.item.next(a.data)}))}getOneAndReplace(E){return this.http.post(`${this.apiUrl}/find`,E).pipe((0,t.b)(a=>{if(200===a?.statusCode&&a?.data){const d=a.data,u=this.items.getValue();if(-1!==u.findIndex(f=>f.id===d.id)){const f=u.map(v=>v.id===d.id?{...v,...d}:v);this.items.next([...f])}}}))}getMany(E){return this.http.post(`${this.apiUrl}/find`,E).pipe((0,t.b)(a=>{200===a?.statusCode&&a?.data&&this.items.next(a.data)}))}update(E,l){return this.http.patch(`${this.apiUrl}/${E}`,l).pipe((0,t.b)(d=>200===d?.statusCode))}deleteOne(E){return this.http.delete(`${this.apiUrl}/${E}`).pipe((0,g.U)(a=>200===a?.statusCode),(0,t.b)(a=>{a&&this.removeItemFromList(E)}))}removeItemFromList(E){const a=this.items.getValue().filter(d=>d?.id!==E);this.items.next(a)}}return B.\u0275fac=function(E){return new(E||B)(D.LFG(h.eN))},B.\u0275prov=D.Yz7({token:B,factory:B.\u0275fac,providedIn:"root"}),B})()},3591:(S,C,o)=>{o.d(C,{w:()=>B});var m=o(1135),g=o(4004),t=o(8505),T=o(2340),D=o(4365),h=o(8274),b=o(529);let B=(()=>{class _{constructor(l){this.http=l,this.apiUrl=`${T.N.apiUrl}/v1/task-descriptions`,this.item=new m.X({}),this.item$=this.item.asObservable(),this.items=new m.X([]),this.items$=this.items.asObservable()}create(l){return this.http.post(this.apiUrl,l).pipe((0,g.U)(a=>{if(201===a?.statusCode&&a?.data)return a?.data}))}getOne(l){return this.http.post(`${this.apiUrl}/find`,l).pipe((0,t.b)(d=>{200===d?.statusCode&&d?.data&&this.item.next(d.data)}))}getOneAndPushNew(l){return this.http.post(`${this.apiUrl}/find`,l).pipe((0,t.b)(d=>{if(200===d?.statusCode&&d?.data){const v=[...this.items.getValue(),d.data].sort((y,U)=>U.id-y.id);this.items.next(v)}}))}getOneAndReplace(l){return this.http.post(`${this.apiUrl}/find`,l).pipe((0,t.b)(d=>{if(200===d?.statusCode&&d?.data){const u=d.data,c=this.items.getValue();if(-1!==c.findIndex(v=>v.id===u.id)){const v=c.map(y=>y.id===u.id?{...y,...u}:y);this.items.next([...v])}}}))}getMany(l){return this.http.post(`${this.apiUrl}/find`,l).pipe((0,t.b)(d=>{200===d?.statusCode&&d?.data&&this.items.next(d.data)}))}getManyAndReplace(l){return this.http.post(`${this.apiUrl}/find`,l).pipe((0,t.b)(d=>{if(200===d?.statusCode&&d?.data){const u=d.data,f=this.items.getValue().map(v=>{const y=Array.isArray(u)?u.find(U=>U.id===v.id):u;return y?{...v,...y}:v});this.items.next(f)}}))}update(l,a){return this.http.patch(`${this.apiUrl}/${l}`,a).pipe((0,t.b)(u=>{if(200===u?.statusCode&&u?.data){const c=u.data,v=this.items.value.map(y=>y?.id===c.id?c:y);this.items.next(v)}}))}deleteOne(l){return this.http.delete(`${this.apiUrl}/${l}`).pipe((0,g.U)(d=>200===d?.statusCode),(0,t.b)(d=>{if(d){const c=this.items.getValue().filter(f=>f?.id!==l);this.items.next(c)}}))}getTaskDetail(l){if(l){const d=D.c.getDetail({id:l});this.getOne(d).subscribe()}}}return _.\u0275fac=function(l){return new(l||_)(h.LFG(b.eN))},_.\u0275prov=h.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},4365:(S,C,o)=>{o.d(C,{c:()=>m});class m{static getOne(t){return{query:{fields:["main.id","main.docYear","main.taskSubject","main.indicatorTime","main.indicatorQuantity","priority.name","priority.color","iq.id","iq.subject","is.id","is.subject","status.name","status.color","status.icon"],joins:["priority","iq","is","status"],filters:t,getType:"ONE"}}}static getDetail(t){return{query:{fields:["main.id","main.docYear","main.taskSubject","main.description","main.indicatorTime","main.indicatorQuantity","main.createdAt","main.updatedAt","priority.id","priority.name","priority.color","priority.score","iq.id","iq.subject","is.id","is.subject","status.name","status.color","status.icon"],joins:["priority","iq","is","status"],filters:t,getType:"ONE"}}}static getMany(t){return{query:{fields:["main.id","main.docYear","main.taskSubject","main.indicatorTime","main.indicatorQuantity","main.isLock","main.createdAt","priority.name","priority.color","iq.id","iq.subject","is.id","is.subject","status.name","status.color","status.icon"],joins:["priority","iq","is","status"],filters:t,getType:"MANY"}}}}},7365:(S,C,o)=>{o.r(C),o.d(C,{TaskDescModule:()=>zt});var m=o(6895),g=o(5675),t=o(8274),T=o(8386),D=o(8145),h=o(805),b=o(6163);function B(i,s){if(1&i&&(t.TgZ(0,"a",2)(1,"div"),t._UZ(2,"i"),t.TgZ(3,"span",3),t._uU(4),t.qZA()()()),2&i){const e=s.$implicit;t.xp6(2),t.Tol(e.icon),t.xp6(2),t.hij(" ",e.label,"")}}let _=(()=>{class i{constructor(e,n){this.userService=e,this.menuService=n,this.menuItems=[],this.showMenu$=this.menuService.menuState$}ngOnInit(){this.user=this.userService.getLoggedUser();const e=this.user?.role?.id,n=[{label:"\u0e81\u0eb2\u0e99\u0e88\u0eb1\u0e94\u0e81\u0eb2\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81",icon:"pi pi-fw pi-briefcase",routerLink:"list"},{label:"\u0e9b\u0eb0\u0eab\u0ea7\u0eb1\u0e94\u0e81\u0eb2\u0e99\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99",icon:"pi pi-fw pi-send",routerLink:"report-history"}],r=[...n,{label:"\u0e9b\u0eb0\u0eab\u0ea7\u0eb1\u0e94\u0e81\u0eb2\u0e99\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99",icon:"pi pi-fw pi-check-square",routerLink:"eval-history"}];this.menuItems=e<=13?r:n}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(T.K),t.Y36(D.h))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-task-desc"]],decls:4,vars:2,consts:[[3,"model","activeItem"],["pTemplate","item"],[1,"flex","justify-content-between","align-items-center"],[1,"text-xl"]],template:function(e,n){1&e&&(t.TgZ(0,"p-tabMenu",0),t.YNc(1,B,5,3,"ng-template",1),t.qZA(),t.TgZ(2,"div"),t._UZ(3,"router-outlet"),t.qZA()),2&e&&t.Q6J("model",n.menuItems)("activeItem",n.activeItem)},dependencies:[g.lC,h.jx,b.d],encapsulation:2}),i})();var E=o(7579),l=o(2722),a=o(7489),d=o(1837),u=o(2156),c=o(655);class f{}(0,c.gn)([(0,u.C1)()],f.prototype,"taskSubject",void 0),(0,c.gn)([(0,u.C1)({conditionalExpression:i=>!(null!==i.indicatorQuantity&&""!=i.indicatorQuantity||null!==i.qualityIndicatorId&&i.qualityIndicatorId||null!==i.satisfiedIndicatorId&&i.satisfiedIndicatorId)})],f.prototype,"indicatorTime",void 0),(0,c.gn)([(0,u.C1)({conditionalExpression:i=>!(null!==i.indicatorTime&&""!=i.indicatorTime||null!==i.qualityIndicatorId&&i.qualityIndicatorId||null!==i.satisfiedIndicatorId&&i.satisfiedIndicatorId)})],f.prototype,"indicatorQuantity",void 0),(0,c.gn)([(0,u.C1)({conditionalExpression:i=>!(null!==i.indicatorTime&&""!=i.indicatorTime||null!==i.indicatorQuantity&&""!=i.indicatorQuantity||null!==i.satisfiedIndicatorId&&i.satisfiedIndicatorId)})],f.prototype,"qualityIndicatorId",void 0),(0,c.gn)([(0,u.C1)({conditionalExpression:i=>!(null!==i.indicatorTime&&""!=i.indicatorTime||null!==i.indicatorQuantity&&""!=i.indicatorQuantity||null!==i.qualityIndicatorId&&i.qualityIndicatorId)})],f.prototype,"satisfiedIndicatorId",void 0),(0,c.gn)([(0,u.C1)()],f.prototype,"priorityId",void 0),(0,c.gn)([(0,u.vg)()],f.prototype,"description",void 0);var v=o(4365),y=o(704),U=o(841),k=o(3591),I=o(4325),x=o(433),F=o(5593),R=o(1740),P=o(2946),W=o(1376),Q=o(585),z=o(2634),X=o(299),L=o(695);function tt(i,s){1&i&&(t.TgZ(0,"span",25),t._uU(1,"\u0ea5\u0eb2\u0e8d\u0ea5\u0eb0\u0ead\u0ebd\u0e94"),t.qZA())}function et(i,s){if(1&i&&(t.TgZ(0,"small",26),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" *",null==e.controls.taskSubject.errors.required?null:e.controls.taskSubject.errors.required.message," ")}}function it(i,s){1&i&&(t.TgZ(0,"span",25),t._uU(1,"\u0e81\u0eb3\u0e99\u0ebb\u0e94\u0e95\u0ebb\u0ea7\u0e8a\u0eb5\u0ec9\u0ea7\u0eb1\u0e94"),t.qZA())}function ot(i,s){1&i&&(t.ynx(0),t.TgZ(1,"div",27)(2,"small",26),t._uU(3," *\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0e81\u0eb3\u0e99\u0ebb\u0e94\u0e95\u0ebb\u0ea7\u0e8a\u0eb5\u0ec9\u0ea7\u0eb1\u0e94\u0ea2\u0ec8\u0eb2\u0e87\u0edc\u0ec9\u0ead\u0e8d\u0edc\u0eb6\u0ec8\u0e87\u0e82\u0ecd\u0ec9\u0e82\u0eb6\u0ec9\u0e99\u0ec4\u0e9b "),t.qZA()(),t.BQk())}function nt(i,s){if(1&i&&(t.TgZ(0,"small",26),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij(" *",null==e.controls.description.errors.required?null:e.controls.description.errors.required.message," ")}}let w=(()=>{class i{constructor(e,n,r,p,A,M,O){this.fb=e,this.alertService=n,this.formService=r,this.taskDescService=p,this.dialogConfig=A,this.dialogRef=M,this.cdr=O,this.submitted=!1,this.editMode=!1,this.destroy$=new E.x,u.jc.set(this.formService.validationMessages)}get controls(){return this.formGroup.controls}ngOnInit(){this.formGroup=this.fb.formGroup(new f),this.taskId=this.dialogConfig.data.taskId,this.taskId&&(this.taskDescService.getTaskDetail(this.taskId),this.taskDescService.item$.pipe((0,l.R)(this.destroy$)).subscribe(e=>{if(e){this.editMode=!0;const n=e.priority?.id,r=e?.indicatorQuality?.id,p=e?.indicatorSatisfied?.id,A=e?.indicatorTime?new Date(e?.indicatorTime):null;this.formGroup.patchValue({...e,priorityId:n,qualityIndicatorId:r,satisfiedIndicatorId:p,indicatorTime:A}),this.initFormValues=this.formGroup.value}this.cdr.markForCheck()}))}checkIndicators(){const{indicatorTime:e,indicatorQuantity:n,qualityIndicatorId:r,satisfiedIndicatorId:p}=this.controls;return this.submitted&&!!(e.errors||n.errors||r.errors||p.errors)}onSubmit(){if(this.submitted=!0,this.formGroup.invalid)return;const e=this.formGroup.value;if(e.indicatorTime){const r=d.ou.fromJSDate(e.indicatorTime).toFormat("yyyy-MM-dd HH:mm");e.indicatorTime=r}if(this.formGroup.disable(),this.taskId)if(this.formService.checkValueChange(this.initFormValues,e)){const r=this.formService.getFieldValueChange(this.initFormValues,e);this.taskDescService.update(+this.taskId,r).subscribe({next:p=>{p&&(this.getOne(this.taskId,"REPLACE"),this.alertService.showSuccess("\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0ec1\u0ea5\u0ec9\u0ea7"),this.closeDialog())},error:p=>{this.formGroup.enable(),this.alertService.showError(p)}})}else this.closeDialog();else this.taskDescService.create(e).subscribe({next:n=>{if(n?.id){const r=n?.id;this.getOne(r,"ADD"),this.alertService.showSuccess("\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0ec1\u0ea5\u0ec9\u0ea7"),this.closeDialog()}},error:n=>{this.formGroup.enable(),this.alertService.showError(n)}})}getOne(e,n){const p=v.c.getOne({id:e});"ADD"===n?this.taskDescService.getOneAndPushNew(p).subscribe():this.taskDescService.getOneAndReplace(p).subscribe()}closeDialog(){this.submitted=!1,this.formGroup.reset(),this.formGroup.enable(),this.dialogRef&&this.dialogRef.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.GW),t.Y36(y.c),t.Y36(U.k),t.Y36(k.w),t.Y36(I.S),t.Y36(I.E7),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-mutation-form"]],decls:43,vars:18,consts:[[3,"formGroup"],[3,"toggleable"],["pTemplate","header"],[1,"formgrid","grid","p-fluid"],[1,"field","col-12"],["for","taskSubject",1,"font-semibold","text-lg","mb-0"],["class","p-error",4,"ngIf"],["type","text","id","taskSubject","pInputText","","formControlName","taskSubject"],[3,"submitted","editMode"],["styleClass","mt-4",3,"toggleable"],[1,"field","col-6"],["for","indicatorTime",1,"font-semibold","mb-0"],["appendTo","body","dateFormat","dd/mm/yy","formControlName","indicatorTime","placeholder","\u0e84\u0eb2\u0e94\u0edd\u0eb2\u0e8d\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94",3,"readonlyInput","showTime","showIcon"],["for","indicatorQuantity",1,"font-semibold","mb-0"],["type","text","id","indicatorQuantity","pInputText","","formControlName","indicatorQuantity","placeholder","\u0e9b\u0ec9\u0ead\u0e99\u0e88\u0eb3\u0e99\u0ea7\u0e99\u0e95\u0ebb\u0ea7\u0ec0\u0ea5\u0e81"],[1,"font-semibold","mb-0"],[3,"submitted"],[4,"ngIf"],[1,"formgrid","grid","p-fluid","mt-4"],[1,"col-12"],["for","description",1,"font-semibold","text-lg","mb-0"],[3,"readonly","formControlName"],[1,"text-right","mt-4"],["label","\u0e8d\u0ebb\u0e81\u0ec0\u0ea5\u0eb5\u0e81","icon","pi pi-times","styleClass","p-button-outlined mr-2",3,"disabled","click"],["label","\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81","icon","pi pi-check",3,"loading","disabled","click"],[1,"font-semibold","text-lg"],[1,"p-error"],[1,"col-12","py-0"]],template:function(e,n){1&e&&(t.TgZ(0,"div")(1,"form",0)(2,"p-fieldset",1),t.YNc(3,tt,2,0,"ng-template",2),t.TgZ(4,"div",3)(5,"div",4)(6,"label",5),t._uU(7,"\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81 "),t.YNc(8,et,2,1,"small",6),t.qZA(),t._UZ(9,"input",7),t.qZA(),t.TgZ(10,"div",4),t._UZ(11,"app-dropdown-priority",8),t.qZA()()(),t.TgZ(12,"p-fieldset",9),t.YNc(13,it,2,0,"ng-template",2),t.TgZ(14,"div",3)(15,"div",10)(16,"label",11),t._uU(17,"\u0e94\u0ec9\u0eb2\u0e99\u0ec0\u0ea7\u0ea5\u0eb2"),t.qZA(),t._UZ(18,"p-calendar",12),t.qZA(),t.TgZ(19,"div",10)(20,"label",13),t._uU(21,"\u0e94\u0ec9\u0eb2\u0e99\u0e9b\u0eb0\u0ea5\u0eb4\u0ea1\u0eb2\u0e99"),t.qZA(),t._UZ(22,"input",14),t.qZA(),t.TgZ(23,"div",10)(24,"label",15),t._uU(25,"\u0e94\u0ec9\u0eb2\u0e99\u0e84\u0eb8\u0e99\u0e99\u0eb0\u0e9e\u0eb2\u0e9a"),t.qZA(),t._UZ(26,"app-dropdown-ind-quality",16),t.qZA(),t.TgZ(27,"div",10)(28,"label",15),t._uU(29,"\u0e94\u0ec9\u0eb2\u0e99\u0e84\u0ea7\u0eb2\u0ea1\u0ec0\u0e9e\u0eb4\u0ec8\u0e87\u0e9e\u0ecd\u0ec3\u0e88"),t.qZA(),t._UZ(30,"app-dropdown-ind-satisfied",16),t.qZA(),t.YNc(31,ot,4,0,"ng-container",17),t.qZA()(),t.TgZ(32,"div",18)(33,"div",19)(34,"label",20),t._uU(35,"\u0ea5\u0eb2\u0e8d\u0ea5\u0eb0\u0ead\u0ebd\u0e94\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0ec0\u0e95\u0eb5\u0ea1 "),t.TgZ(36,"small"),t._uU(37,"(\u0ea7\u0ec8\u0eb2\u0e87\u0ec4\u0e94\u0ec9)"),t.qZA(),t.YNc(38,nt,2,1,"small",6),t.qZA(),t._UZ(39,"app-shared-editor",21),t.qZA()()(),t.TgZ(40,"div",22)(41,"p-button",23),t.NdJ("click",function(){return n.closeDialog()}),t.qZA(),t.TgZ(42,"p-button",24),t.NdJ("click",function(){return n.onSubmit()}),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.formGroup),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(6),t.Q6J("ngIf",n.submitted&&n.controls.taskSubject.errors),t.xp6(3),t.Q6J("submitted",n.submitted)("editMode",n.editMode),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(6),t.Q6J("readonlyInput",!0)("showTime",!0)("showIcon",!0),t.xp6(8),t.Q6J("submitted",n.submitted),t.xp6(4),t.Q6J("submitted",n.submitted),t.xp6(1),t.Q6J("ngIf",n.checkIndicators()),t.xp6(7),t.Q6J("ngIf",n.submitted&&n.controls.description.errors),t.xp6(1),t.Q6J("readonly",n.formGroup.disabled)("formControlName","description"),t.xp6(2),t.Q6J("disabled",n.formGroup.disabled),t.xp6(1),t.Q6J("loading",n.formGroup.disabled)("disabled",n.formGroup.disabled))},dependencies:[m.O5,x._Y,x.Fj,x.JJ,x.JL,x.sg,x.u,u.bc,u.VP,u.YE,h.jx,F.zx,R.o,P.p,W.$,Q.f,z.k,X.t,L.d],encapsulation:2}),i})();var st=o(7248),ut=o(1094),rt=o(6832),$=o(793),G=o(3608),j=o(6679),N=o(7147),at=o(1481),lt=o(8739);function dt(i,s){if(1&i&&t._UZ(0,"div",12),2&i){const e=t.oxw().ngIf,n=t.oxw();t.Q6J("innerHTML",n.transform(null==e?null:e.description),t.oJD)}}const ct=function(i){return{"background-color":i}};function pt(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"div",3)(2,"div",4)(3,"label",5),t._uU(4),t.qZA()(),t.TgZ(5,"div",4)(6,"label",5),t._uU(7,"\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81"),t.qZA(),t.TgZ(8,"div"),t._uU(9),t.qZA()(),t.TgZ(10,"div",4),t._UZ(11,"app-indicator-detail",6),t.qZA(),t.TgZ(12,"div",7)(13,"div")(14,"label",8),t._uU(15,"\u0ea5\u0eb3\u0e94\u0eb1\u0e9a\u0e84\u0ea7\u0eb2\u0ea1\u0eaa\u0eb3\u0e84\u0eb1\u0e99:"),t.qZA()(),t.TgZ(16,"div"),t._UZ(17,"p-tag",9),t.qZA()(),t.TgZ(18,"div",10)(19,"div")(20,"label",8),t._uU(21,"\u0ea7\u0eb1\u0e99\u0e97\u0eb5\u0eaa\u0ec9\u0eb2\u0e87:"),t.qZA()(),t._uU(22),t.ALo(23,"date"),t.qZA(),t.TgZ(24,"div",7)(25,"div")(26,"label",8),t._uU(27,"\u0ec1\u0e81\u0ec9\u0ec4\u0e82\u0eab\u0ebc\u0ec9\u0eb2\u0eaa\u0eb8\u0e94:"),t.qZA()(),t.TgZ(28,"div"),t._uU(29),t.ALo(30,"date"),t.qZA()(),t.TgZ(31,"div",4)(32,"label",5),t._uU(33,"\u0ea5\u0eb2\u0e8d\u0ea5\u0eb0\u0ead\u0ebd\u0e94\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0ec0\u0e95\u0eb5\u0ea1"),t.qZA(),t.YNc(34,dt,1,1,"div",11),t.qZA()(),t.BQk()),2&i){const e=s.ngIf;t.xp6(4),t.hij("\u0e9b\u0eb0\u0e88\u0eb3\u0e9b\u0eb5: ",null==e?null:e.docYear,""),t.xp6(5),t.Oqu(null==e?null:e.taskSubject),t.xp6(2),t.Q6J("item",e),t.xp6(6),t.Akn(t.VKq(16,ct,null==e||null==e.priority?null:e.priority.color)),t.Q6J("value",null==e||null==e.priority?null:e.priority.name)("rounded",!0),t.xp6(5),t.hij(" ",t.xi3(23,10,null==e?null:e.createdAt,"dd/MM/yyyy HH:mm")," "),t.xp6(7),t.Oqu(t.xi3(30,13,null==e?null:e.updatedAt,"dd/MM/yyyy HH:mm")),t.xp6(5),t.Q6J("ngIf",null==e?null:e.description)}}let mt=(()=>{class i{constructor(e,n,r){this.dialogConfig=e,this.sanitizer=n,this.taskDescService=r,this.destroy$=new E.x}ngOnInit(){this.taskId=this.dialogConfig.data.taskId,this.taskId&&(this.taskDescService.getTaskDetail(this.taskId),this.task$=this.taskDescService.item$)}transform(e){return this.sanitizer.bypassSecurityTrustHtml(e)}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(I.S),t.Y36(at.H7),t.Y36(k.w))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-detail"]],decls:4,vars:3,consts:[[1,"grid"],[1,"col-12"],[4,"ngIf"],[1,"p-fluid"],[1,"field"],[1,"font-semibold","text-xl","mb-0"],[3,"item"],[1,"field","flex","align-items-center","gap-2"],[1,"font-semibold","text-xl"],["styleClass","px-4",3,"value","rounded"],[1,"flex","align-items-center","gap-2"],[3,"innerHTML",4,"ngIf"],[3,"innerHTML"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,pt,35,18,"ng-container",2),t.ALo(3,"async"),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngIf",t.lcZ(3,1,n.task$)))},dependencies:[m.O5,j.V,lt.Q,m.Ov,m.uU],encapsulation:2}),i})();class Z{}(0,c.gn)([(0,u.C1)()],Z.prototype,"taskId",void 0),(0,c.gn)([(0,u.C1)()],Z.prototype,"taskSubject",void 0),(0,c.gn)([(0,u.C1)()],Z.prototype,"taskPriorityScore",void 0),(0,c.gn)([(0,u.C1)()],Z.prototype,"reportDetail",void 0),(0,c.gn)([(0,u.C1)()],Z.prototype,"scheduledStart",void 0),(0,c.gn)([(0,u.C1)()],Z.prototype,"scheduledEnd",void 0),(0,c.gn)([(0,u.vg)({defaultValue:0})],Z.prototype,"selfTimeScore",void 0),(0,c.gn)([(0,u.vg)({defaultValue:0})],Z.prototype,"selfQuantityScore",void 0),(0,c.gn)([(0,u.vg)({defaultValue:0})],Z.prototype,"selfQualityScore",void 0),(0,c.gn)([(0,u.vg)({defaultValue:0})],Z.prototype,"selfSatisfiedScore",void 0);var q=o(6620),J=o(4090),Et=o(3949),ht=o(9166),ft=o(904);function gt(i,s){1&i&&(t.TgZ(0,"span",27),t._uU(1,"\u0e81\u0eb2\u0e99\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81"),t.qZA())}function vt(i,s){if(1&i&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" *",null==e.controls.reportDetail.errors.required?null:e.controls.reportDetail.errors.required.message," ")}}function At(i,s){if(1&i&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" *",null==e.controls.scheduledStart.errors.required?null:e.controls.scheduledStart.errors.required.message," ")}}function Ct(i,s){if(1&i&&(t.TgZ(0,"small",28),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.hij(" *",null==e.controls.scheduledEnd.errors.required?null:e.controls.scheduledEnd.errors.required.message," ")}}function Tt(i,s){1&i&&(t.TgZ(0,"span",27),t._uU(1,"\u0e81\u0eb2\u0e99\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81"),t.qZA())}function Bt(i,s){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"form",1)(2,"div",2)(3,"p-fieldset",3),t.YNc(4,gt,2,0,"ng-template",4),t.TgZ(5,"div",5)(6,"div",6)(7,"label",7),t._uU(8,"\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81"),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA()(),t.TgZ(11,"div",8)(12,"label",9),t._uU(13,"\u0ea5\u0eb2\u0e8d\u0ea5\u0eb0\u0ead\u0ebd\u0e94\u0e84\u0ea7\u0eb2\u0ea1\u0e84\u0eb7\u0e9a\u0edc\u0ec9\u0eb2 "),t.YNc(14,vt,2,1,"small",10),t.qZA(),t._UZ(15,"app-shared-editor",11),t.qZA(),t.TgZ(16,"div",12)(17,"label",13),t._uU(18,"\u0ea7\u0eb1\u0e99\u0e97\u0eb5\u0ec0\u0ea5\u0eb5\u0ec8\u0ea1\u0e9b\u0eb0\u0e95\u0eb4\u0e9a\u0eb1\u0e94 "),t.YNc(19,At,2,1,"small",10),t.qZA(),t._UZ(20,"p-calendar",14),t.qZA(),t.TgZ(21,"div",12)(22,"label",15),t._uU(23,"\u0ea7\u0eb1\u0e99\u0e97\u0eb5\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94 "),t.YNc(24,Ct,2,1,"small",10),t.qZA(),t._UZ(25,"p-calendar",16),t.qZA(),t.TgZ(26,"div",17)(27,"label",18),t._UZ(28,"i",19),t.TgZ(29,"span",20),t._uU(30,"\u0ec1\u0e99\u0e9a\u0ec0\u0ead\u0e81\u0eb0\u0eaa\u0eb2\u0e99 "),t.TgZ(31,"small"),t._uU(32,"(jpg, png, pdf)"),t.qZA()()(),t._UZ(33,"app-upload-helper",21),t.qZA()()()(),t.TgZ(34,"p-fieldset",22),t.YNc(35,Tt,2,0,"ng-template",4),t._UZ(36,"app-score-option",23),t.qZA()(),t.TgZ(37,"div",24)(38,"p-button",25),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.closeDialog())}),t.qZA(),t.TgZ(39,"p-button",26),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.onSubmit())}),t.qZA()(),t.BQk()}if(2&i){const e=s.ngIf,n=t.oxw();t.xp6(1),t.Q6J("formGroup",n.formGroup),t.xp6(2),t.Q6J("toggleable",!0),t.xp6(7),t.Oqu(null==e?null:e.taskSubject),t.xp6(4),t.Q6J("ngIf",n.submitted&&n.controls.reportDetail.errors),t.xp6(1),t.Q6J("readonly",n.formGroup.disabled)("formControlName","reportDetail"),t.xp6(4),t.Q6J("ngIf",n.submitted&&n.controls.scheduledStart.errors),t.xp6(1),t.Q6J("readonlyInput",!0)("showTime",!0)("showIcon",!0),t.xp6(4),t.Q6J("ngIf",n.submitted&&n.controls.scheduledEnd.errors),t.xp6(1),t.Q6J("readonlyInput",!0)("showTime",!0)("showIcon",!0),t.xp6(8),t.Q6J("apiPath","desc-attachments")("oldFiles",null)("attachRefId",2),t.xp6(1),t.Q6J("toggleable",!0),t.xp6(2),t.Q6J("item",e)("submitted",n.submitted),t.xp6(2),t.Q6J("disabled",n.formGroup.disabled),t.xp6(1),t.Q6J("loading",n.formGroup.disabled)("disabled",n.formGroup.disabled)}}let yt=(()=>{class i{constructor(e,n,r,p,A,M,O,Y){this.fb=e,this.alertService=n,this.formService=r,this.taskDescService=p,this.selfEvalService=A,this.dialogConfig=M,this.dialogRef=O,this.cdr=Y,this.submitted=!1,this.newFiles=[],this.destroy$=new E.x,u.jc.set(this.formService.validationMessages),this.formGroup=this.fb.formGroup(new Z)}get controls(){return this.formGroup.controls}ngOnInit(){this.loadTaskDetails()}loadTaskDetails(){this.taskId=this.dialogConfig.data.taskId,this.taskId&&(this.taskDescService.getTaskDetail(this.taskId),this.taskDescService.item$.pipe((0,l.R)(this.destroy$)).subscribe(e=>{e&&this.handleTaskDetails(e)}))}handleTaskDetails(e){this.task=e,this.formGroup.patchValue({taskId:e?.id,taskSubject:e?.taskSubject,taskPriorityScore:e?.priority?.score}),this.setIndicatorValidators(this.getRelevantIndicators()),this.cdr.markForCheck()}getRelevantIndicators(){const e=Object.keys(J.qu.self),n=a.pick(this.task,e);return a.pickBy(n,r=>null!=r&&""!==r&&0!=+r)}setIndicatorValidators(e){Object.entries(e).forEach(([n,r])=>{const p=J.qu.self[n],A=this.formGroup.get(p);A&&(this.formGroup.patchValue({[p]:p!==J.qu.self[n]?0:null}),A.setValidators([u.CM.required()]),A.updateValueAndValidity())})}onSubmit(){if(this.submitted=!0,this.formGroup.invalid)return;const e=this.formGroup.value;this.formGroup.disable(),this.selfEvalService.create(e).subscribe({next:n=>{if(n){const r=n?.id;this.child.onCheckFileUpload(r,Et.ij.TASKD_EVAL),this.alertService.showSuccess("\u0eaa\u0ebb\u0ec8\u0e87\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99\u0ec1\u0ea5\u0ec9\u0ea7"),this.closeDialog()}},error:n=>{this.formGroup.enable(),this.alertService.showError(n)}})}closeDialog(){this.submitted=!1,this.formGroup.reset(),this.formGroup.enable(),this.dialogRef?.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.GW),t.Y36(y.c),t.Y36(U.k),t.Y36(k.w),t.Y36(ht.A),t.Y36(I.S),t.Y36(I.E7),t.Y36(t.sBO))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-report-form"]],viewQuery:function(e,n){if(1&e&&t.Gf(q.u,5),2&e){let r;t.iGM(r=t.CRH())&&(n.child=r.first)}},decls:1,vars:1,consts:[[4,"ngIf"],[3,"formGroup"],[1,"mb-4"],[3,"toggleable"],["pTemplate","header"],[1,"formgrid","grid","p-fluid"],[1,"field","col-12"],["for","address",1,"font-semibold","text-xl","mb-0"],[1,"field","col-12","mb-8"],["for","reportDetail",1,"font-semibold","text-xl","mb-0"],["class","p-error",4,"ngIf"],[3,"readonly","formControlName"],[1,"field","col-12","md:col-6"],["for","scheduledStart",1,"font-semibold","text-xl","mb-0"],["id","scheduledStart","appendTo","body","dateFormat","dd/mm/yy","formControlName","scheduledStart",3,"readonlyInput","showTime","showIcon"],["for","scheduledEnd",1,"font-semibold","text-xl","mb-0"],["id","scheduledEnd","appendTo","body","dateFormat","dd/mm/yy","formControlName","scheduledEnd",3,"readonlyInput","showTime","showIcon"],[1,"field","col-12","mt-4"],["for","files-input",1,"flex","align-items-center","cursor-pointer","mb-0"],[1,"pi","pi-paperclip"],[1,"ml-1","font-semibold"],[3,"apiPath","oldFiles","attachRefId"],["styleClass","mb-8",3,"toggleable"],[3,"item","submitted"],[1,"text-right","sticky","bottom-0","mt-5"],["label","\u0e8d\u0ebb\u0e81\u0ec0\u0ea5\u0eb5\u0e81","icon","pi pi-times","styleClass","p-button-outlined mr-2",3,"disabled","click"],["label","\u0eaa\u0ebb\u0ec8\u0e87\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99","icon","pi pi-send",3,"loading","disabled","click"],[1,"font-semibold","text-xl"],[1,"p-error"]],template:function(e,n){1&e&&t.YNc(0,Bt,40,23,"ng-container",0),2&e&&t.Q6J("ngIf",n.task)},dependencies:[m.O5,x._Y,x.JJ,x.JL,x.sg,x.u,u.bc,u.VP,u.YE,h.jx,F.zx,P.p,Q.f,ft.M,q.u,L.d],encapsulation:2}),i})();var Dt=o(209),K=o(605);let It=(()=>{class i{constructor(e,n,r,p){this.dialogRef=e,this.dialogService=n,this.confirmService=r,this.taskDescService=p,this.menuItems=[],this.dialogConfig={width:window.innerWidth>Dt.A.lg?"65%":"80%",contentStyle:{overflow:"auto","padding-bottom":"20px"},baseZIndex:1e4,dismissableMask:!1,maximizable:!0}}ngOnInit(){}setActionMenus(){this.menuItems=[{label:"\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99\u0ea7\u0ebd\u0e81",icon:"pi pi-send",command:()=>this.onReport()},{separator:!0},{label:"\u0ec1\u0e81\u0ec9\u0ec4\u0e82",icon:"pi pi-pencil",command:()=>this.showForm()}]}showForm(){if(this.task)return this.dialogService.open(w,{header:`\u0ec1\u0e81\u0ec9\u0ec4\u0e82\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81 #${this.task?.id}`,data:{taskId:(0,a.cloneDeep)(this.task?.id)},...this.dialogConfig})}onReport(){this.task&&(this.dialogRef=this.dialogService.open(yt,{header:`\u0e81\u0eb2\u0e99\u0ea5\u0eb2\u0e8d\u0e87\u0eb2\u0e99 \u0ec1\u0ea5\u0eb0 \u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81\u0e95\u0ebb\u0e99\u0ec0\u0ead\u0e87 #${this.task?.id}`,data:{taskId:this.task?.id},...this.dialogConfig}))}showDetail(){this.task&&(this.dialogRef=this.dialogService.open(mt,{header:`\u0ea5\u0eb2\u0e8d\u0ea5\u0eb0\u0ead\u0ebd\u0e94 #${this.task?.id}`,data:{taskId:this.task?.id},...this.dialogConfig}))}onDelete(){this.task?.id&&this.confirmService.confirm({message:"\u0ec1\u0e99\u0ec8\u0ec3\u0e88\u0e9a\u0ecd\u0ec8\u0ea7\u0ec8\u0eb2\u0e95\u0ec9\u0ead\u0e87\u0e81\u0eb2\u0e99\u0ea5\u0eb6\u0e9a\u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99\u0e99\u0eb5\u0ec9?",icon:"pi pi-exclamation-triangle",accept:()=>{this.taskDescService.deleteOne(this.task?.id).subscribe()}})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(I.E7),t.Y36(I.xA),t.Y36(h.YP),t.Y36(k.w))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-btn-action"]],inputs:{task:"task"},decls:1,vars:1,consts:[["appendTo","body","label","\u0ec0\u0e9a\u0eb4\u0ec8\u0e87\u0ea5\u0eb2\u0e8d\u0ea5\u0eb0\u0ead\u0ebd\u0e94","styleClass","p-button-secondary p-button-sm",3,"model","onClick","onDropdownClick"]],template:function(e,n){1&e&&(t.TgZ(0,"p-splitButton",0),t.NdJ("onClick",function(){return n.showDetail()})("onDropdownClick",function(){return n.setActionMenus()}),t.qZA()),2&e&&t.Q6J("model",n.menuItems)},dependencies:[K.a],encapsulation:2}),i})();function xt(i,s){1&i&&(t.TgZ(0,"tr")(1,"th",14),t._uU(2,"#"),t.qZA(),t.TgZ(3,"th",15),t._uU(4,"\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0ea7\u0ebd\u0e81"),t.qZA(),t.TgZ(5,"th",16),t._uU(6,"\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81\u0e95\u0eb2\u0ea1\u0e9e\u0eb2\u0ea5\u0eb0\u0e9a\u0ebb\u0e94\u0e9a\u0eb2\u0e94"),t.qZA(),t.TgZ(7,"th",15),t._uU(8,"\u0e95\u0ebb\u0ea7\u0e8a\u0eb5\u0ec9\u0ea7\u0eb1\u0e94"),t.qZA(),t.TgZ(9,"th",15),t._uU(10,"\u0ea5\u0eb3\u0e94\u0eb1\u0e9a\u0e84\u0ea7\u0eb2\u0ea1\u0eaa\u0eb3\u0e84\u0eb1\u0e99"),t.qZA(),t.TgZ(11,"th",15),t._uU(12,"\u0ea7\u0eb1\u0e99\u0e97\u0eb5\u0eaa\u0ec9\u0eb2\u0e87"),t.qZA(),t.TgZ(13,"th",15),t._uU(14,"\u0e94\u0eb3\u0ec0\u0e99\u0eb5\u0e99\u0e81\u0eb2\u0e99"),t.qZA()())}function Zt(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"p-chip",18)(2,"div",25),t._uU(3,"\u0ec0\u0ea7\u0ea5\u0eb2"),t.qZA()(),t.BQk()),2&i){const e=t.oxw().$implicit,n=t.oxw();t.xp6(1),t.Q6J("pTooltip",n.utilService.dateTimeShortFormat(null==e?null:e.indicatorTime))}}function bt(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"p-chip",18)(2,"div",25),t._uU(3,"\u0e9b\u0eb0\u0ea5\u0eb4\u0ea1\u0eb2\u0e99"),t.qZA()(),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("pTooltip",null==e?null:e.indicatorQuantity)}}function _t(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"p-chip",18)(2,"div",25),t._uU(3,"\u0e84\u0eb8\u0e99\u0e99\u0eb0\u0e9e\u0eb2\u0e9a"),t.qZA()(),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("pTooltip",null==e||null==e.indicatorQuality?null:e.indicatorQuality.subject)}}function St(i,s){if(1&i&&(t.ynx(0),t.TgZ(1,"p-chip",18)(2,"div",25),t._uU(3,"\u0e84\u0ea7\u0eb2\u0ea1\u0ec0\u0e9e\u0eb4\u0ec8\u0e87\u0e9e\u0ecd\u0ec3\u0e88"),t.qZA()(),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("pTooltip",null==e||null==e.indicatorSatisfied?null:e.indicatorSatisfied.subject)}}const Mt=function(){return{width:"50px"}},Ut=function(i){return{"background-color":i}};function kt(i,s){if(1&i&&(t.TgZ(0,"tr")(1,"td",17),t._uU(2),t.qZA(),t.TgZ(3,"td",15),t._uU(4),t.qZA(),t.TgZ(5,"td",18)(6,"div",19),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"div",20),t.YNc(10,Zt,4,1,"ng-container",21),t.YNc(11,bt,4,1,"ng-container",21),t.YNc(12,_t,4,1,"ng-container",21),t.YNc(13,St,4,1,"ng-container",21),t.qZA()(),t.TgZ(14,"td",22),t._UZ(15,"p-tag",23),t.qZA(),t.TgZ(16,"td",15),t._uU(17),t.ALo(18,"date"),t.qZA(),t.TgZ(19,"td",15),t._UZ(20,"app-btn-action",24),t.qZA()()),2&i){const e=s.$implicit,n=s.rowIndex;t.xp6(1),t.Q6J("ngStyle",t.DdM(18,Mt)),t.xp6(1),t.hij(" ",n+1," "),t.xp6(2),t.hij(" ",null==e?null:e.id," "),t.xp6(1),t.Q6J("pTooltip",(null==e||null==e.taskSubject?null:e.taskSubject.length)>25?null==e?null:e.taskSubject:null),t.xp6(2),t.hij(" ",null==e?null:e.taskSubject," "),t.xp6(3),t.Q6J("ngIf",null==e?null:e.indicatorTime),t.xp6(1),t.Q6J("ngIf",null==e?null:e.indicatorQuantity),t.xp6(1),t.Q6J("ngIf",null==e||null==e.indicatorQuality?null:e.indicatorQuality.id),t.xp6(1),t.Q6J("ngIf",null==e||null==e.indicatorSatisfied?null:e.indicatorSatisfied.id),t.xp6(2),t.Akn(t.VKq(19,Ut,null==e||null==e.priority?null:e.priority.color)),t.Q6J("value",null==e||null==e.priority?null:e.priority.name)("rounded",!0),t.xp6(2),t.hij(" ",t.xi3(18,15,null==e?null:e.createdAt,"dd/MM/yyyy HH:mm")," "),t.xp6(3),t.Q6J("task",e)}}function Ot(i,s){1&i&&(t.TgZ(0,"tr")(1,"td",26),t._uU(2,"\u0e9a\u0ecd\u0ec8\u0e9e\u0ebb\u0e9a\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99"),t.qZA()())}const Ft=function(){return[25,50,100]},Qt=[{path:"",component:_,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class i{constructor(e,n,r,p,A,M,O,Y){this.menuService=e,this.dialogRef=n,this.utilService=r,this.filter=p,this.fb=A,this.cdr=M,this.taskDescService=O,this.dialogService=Y,this.tasks=[],this.filterFields=["taskId","taskSubject"],this.screenHeight=0,this.text="",this.showMenu$=this.menuService.menuState$,this.destroy$=new E.x,this.formGroup=this.fb.formGroup(new st.U)}ngOnInit(){this.taskDescService.items$.pipe((0,l.R)(this.destroy$)).subscribe(e=>{this.tasks=e,this.cdr.markForCheck()}),this.checkScreenSize()}onResize(e){this.checkScreenSize()}checkScreenSize(){this.screenHeight=Math.floor(.6*window.innerHeight),this.cdr.detectChanges()}showForm(e){this.dialogRef=this.dialogService.open(w,{header:e?`\u0ec1\u0e81\u0ec9\u0ec4\u0e82\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81 #${e?.id}`:"\u0eaa\u0ec9\u0eb2\u0e87\u0ea7\u0ebd\u0e81\u0e95\u0eb2\u0ea1\u0e9e\u0eb2\u0ea5\u0eb0\u0e9a\u0ebb\u0e94\u0e9a\u0eb2\u0e94",width:"80%",data:{task:(0,a.cloneDeep)(e)},contentStyle:{overflow:"auto","padding-bottom":"20px"},baseZIndex:1e4,dismissableMask:!1,maximizable:!0})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.dialogRef?.close()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(D.h),t.Y36(I.E7),t.Y36(ut.F),t.Y36(rt.i),t.Y36(u.GW),t.Y36(t.sBO),t.Y36(k.w),t.Y36(I.xA))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-task-desc-list"]],hostBindings:function(e,n){1&e&&t.NdJ("resize",function(p){return n.onResize(p)},!1,t.Jf7)},decls:17,vars:10,consts:[[1,"p-grid","mt-4"],[1,"p-col-12"],[1,"flex","align-items-center","justify-content-between"],[1,"flex","align-items-center"],[1,"text-2xl","font-semibold","ml-2"],[1,"p-input-icon-left"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","\u0e84\u0ebb\u0ec9\u0e99\u0eab\u0eb2..",3,"input"],["icon","pi pi-plus","label","\u0ec0\u0e9e\u0eb5\u0ec8\u0ea1\u0ec3\u0edd\u0ec8",1,"ml-3",3,"click"],["responsiveLayout","scroll","styleClass","p-datatable-sm","currentPageReportTemplate","\u0eaa\u0eb0\u0ec1\u0e94\u0e87 {first} \u0ec0\u0e96\u0eb4\u0e87 {last} \u0e88\u0eb2\u0e81\u0e97\u0eb1\u0e87\u0edd\u0ebb\u0e94 {totalRecords} \u0ea5\u0eb2\u0e8d\u0e81\u0eb2\u0e99",3,"value","rows","paginator","globalFilterFields","rowHover","scrollable","scrollHeight","showCurrentPageReport","rowsPerPageOptions"],["dt",""],["pTemplate","header"],["pTemplate","body"],["pTemplate","emptymessage"],[1,"text-center"],[1,"white-space-nowrap","text-center"],[1,"white-space-nowrap"],[1,"text-center",3,"ngStyle"],["tooltipPosition","bottom","tooltipStyleClass","custom-tooltip",3,"pTooltip"],[1,"max-w-15rem","xl:max-w-30rem","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"flex","gap-1","align-items-center","justify-content-center"],[4,"ngIf"],[1,"text-center","white-space-nowrap"],["styleClass","px-4",3,"value","rounded"],[3,"task"],[1,"text-xs","white-space-nowrap"],["colspan","7",1,"text-center","py-4"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5,"\u0e88\u0eb1\u0e94\u0e81\u0eb2\u0e99\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81\u0e95\u0eb2\u0ea1\u0e9e\u0eb2\u0ea5\u0eb0\u0e9a\u0ebb\u0e94\u0e9a\u0eb2\u0e94\u0e82\u0ead\u0e87\u0e97\u0ec8\u0eb2\u0e99"),t.qZA()(),t.TgZ(6,"div",3)(7,"span",5),t._UZ(8,"i",6),t.TgZ(9,"input",7),t.NdJ("input",function(A){t.CHM(r);const M=t.MAs(13);return t.KtG(n.filter.dataTable(M,A))}),t.qZA()(),t.TgZ(10,"p-button",8),t.NdJ("click",function(){return n.showForm(null)}),t.qZA()()(),t._UZ(11,"hr"),t.TgZ(12,"p-table",9,10),t.YNc(14,xt,15,0,"ng-template",11),t.YNc(15,kt,21,21,"ng-template",12),t.YNc(16,Ot,3,0,"ng-template",13),t.qZA()()()}2&e&&(t.xp6(12),t.Q6J("value",n.tasks)("rows",25)("paginator",!0)("globalFilterFields",n.filterFields)("rowHover",!0)("scrollable",!0)("scrollHeight",n.screenHeight+"px")("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(9,Ft)))},dependencies:[m.O5,m.PC,$.iA,h.jx,F.zx,R.o,G.u,j.V,N.A,It,m.uU],encapsulation:2,changeDetection:0}),i})(),resolve:{items:(()=>{class i{constructor(e,n){this.taskMainService=e,this.userService=n,this.user=this.userService.getLoggedUser()}resolve(e,n){const A=v.c.getMany({createdBy:this.user?.profile?.staffCode});return this.taskMainService.getMany(A)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(k.w),t.LFG(T.K))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}},{path:"report-history",loadChildren:()=>Promise.all([o.e(8592),o.e(118)]).then(o.bind(o,5573)).then(i=>i.ReportHistoryModule)},{path:"eval-history",loadChildren:()=>Promise.all([o.e(8592),o.e(5761)]).then(o.bind(o,1873)).then(i=>i.EvalHistoryModule)}]}];let Rt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.Bz.forChild(Qt),g.Bz]}),i})();var V=o(4466),H=o(1989),Pt=o(1493),jt=o(5047),Jt=o(8639),Yt=o(613),Lt=o(1119),wt=o(1889),$t=o(8455),Gt=o(4396);let Nt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.ez,V.m,Q._8,H.nD]}),i})();var qt=o(3241),Kt=o(2890),Vt=o(8191),Ht=o(6749),Wt=o(9615);let zt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[I.E7,I.xA],imports:[m.ez,Rt,V.m,$.U$,F.hJ,R.j,jt.L$,b.i,j.W,N.o,Pt.S,Gt.y,P.L,Yt.cc,$t.$,Q._8,H.nD,K.l,Jt.TX,G.z,Vt.P,Nt,Wt.E,Lt.H,wt.P,qt.$,Kt.j,Ht.g]}),i})()},2448:(S,C,o)=>{o.d(C,{q:()=>D});var m=o(6895),g=o(5593),t=o(3930),T=o(8274);let D=(()=>{class h{}return h.\u0275fac=function(B){return new(B||h)},h.\u0275mod=T.oAB({type:h}),h.\u0275inj=T.cJS({imports:[m.ez,g.hJ,t.g3]}),h})()}}]);