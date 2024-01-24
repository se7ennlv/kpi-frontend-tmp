"use strict";(self.webpackChunkavalon_ng=self.webpackChunkavalon_ng||[]).push([[2016],{2016:(H,T,r)=>{r.r(T),r.d(T,{ApprDepartmentModule:()=>Dt});var l=r(6895),v=r(5675),_=r(7579),f=r(655),E=r(2156);class Z{}(0,f.gn)([(0,E.C1)()],Z.prototype,"batchMonth",void 0),(0,f.gn)([(0,E.C1)()],Z.prototype,"departmentId",void 0);class x{}(0,f.gn)([(0,E.C1)()],x.prototype,"gradeApproved",void 0),(0,f.gn)([(0,E.C1)()],x.prototype,"comment",void 0);var t=r(8274),C=r(4325),D=r(841),U=r(4004),a=r(2340),d=r(529);let s=(()=>{class n{constructor(e){this.http=e,this.apiUrl=`${a.N.apiUrl}/v1/appr-departments`}create(e){return this.http.post(this.apiUrl,e).pipe((0,U.U)(o=>201===o?.statusCode))}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(d.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var m=r(704),c=r(433),A=r(3054),B=r(5593),w=r(666);function $(n,i){if(1&n&&(t.TgZ(0,"small",13),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" *",null==e.controls.gradeApproved.errors.required?null:e.controls.gradeApproved.errors.required.message," ")}}function G(n,i){if(1&n&&(t.TgZ(0,"small",13),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" *",null==e.controls.comment.errors.required?null:e.controls.comment.errors.required.message," ")}}let R=(()=>{class n{constructor(e,o,u,p,g,h){this.fb=e,this.dialogRef=o,this.dialogConfig=u,this.formService=p,this.deptApprService=g,this.alertService=h,this.submitted=!1,this.gradeList=[],this.formGroup=this.fb.formGroup(new x),E.jc.set(this.formService.validationMessages)}get controls(){return this.formGroup.controls}ngOnInit(){this.parentData=this.dialogConfig.data.data,this.gradeList=[{id:1,code:"A",description:"A (90-100)"},{id:2,code:"B",description:"B (75-89)"},{id:3,code:"C",description:"C (60-74)"},{id:4,code:"D",description:"D (30-59)"},{id:5,code:"F",description:"F (< 30)"}]}onApprove(){if(this.submitted=!0,this.formGroup.invalid)return;this.formGroup.disable();const e={...this.parentData,...this.formGroup.value,isAdjust:!0};console.log(e),this.deptApprService.create(e).subscribe({next:o=>{o&&(this.dialogRef&&this.dialogRef.close(),this.alertService.showSuccess("\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0ec1\u0ea5\u0ec9\u0ea7"))},error:o=>{this.formGroup.enable(),this.alertService.showError(o)}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(E.GW),t.Y36(C.E7),t.Y36(C.S),t.Y36(D.k),t.Y36(s),t.Y36(m.c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-approve-modal"]],decls:17,vars:4,consts:[[1,"grid"],[1,"col-12"],[3,"formGroup"],[1,"formgrid","grid","p-fluid"],[1,"field","col-12"],["for","gradeApproved",1,"font-semibold","text-lg","mb-0"],["class","p-error",4,"ngIf"],["optionValue","code","optionLabel","description","placeholder","\u0ec0\u0ea5\u0eb7\u0ead\u0e81","formControlName","gradeApproved",3,"options"],["for","comment",1,"font-semibold","text-lg","mb-0"],["rows","5","cols","20","pInputTextarea","","formControlName","comment",1,"w-full"],[1,"mt-5","text-right"],["pButton","","pRipple","","icon","pi pi-times","label","\u0e8d\u0ebb\u0e81\u0ec0\u0ea5\u0eb5\u0e81",1,"p-button-outlined",3,"click"],["pButton","","pRipple","","icon","pi pi-check","label","\u0ead\u0eb0\u0e99\u0eb8\u0ea1\u0eb1\u0e94",1,"ml-2",3,"click"],[1,"p-error"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"form",2)(3,"div",3)(4,"div",4)(5,"label",5),t._uU(6,"\u0ec0\u0e81\u0ea3\u0e94 "),t.YNc(7,$,2,1,"small",6),t.qZA(),t._UZ(8,"p-dropdown",7),t.qZA(),t.TgZ(9,"div",4)(10,"label",8),t._uU(11,"\u0e84\u0eb3\u0ec0\u0eab\u0eb1\u0e99 "),t.YNc(12,G,2,1,"small",6),t.qZA(),t._UZ(13,"textarea",9),t.qZA()()()()(),t.TgZ(14,"div",10)(15,"button",11),t.NdJ("click",function(){return o.dialogRef.close()}),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){return o.onApprove()}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.formGroup),t.xp6(5),t.Q6J("ngIf",o.submitted&&o.controls.gradeApproved.errors),t.xp6(1),t.Q6J("options",o.gradeList),t.xp6(4),t.Q6J("ngIf",o.submitted&&o.controls.comment.errors))},dependencies:[l.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,E.bc,E.VP,E.YE,A.g,B.Hq,w.Lt],encapsulation:2}),n})();var I=r(6832),M=r(8145),P=r(1094),O=r(8039),S=r(805),k=r(1383),b=r(8639),q=r(2722),N=r(8286),j=r(1490),J=r(2946),y=r(793),Y=r(3608),F=r(8235);function L(n,i){1&n&&(t.TgZ(0,"div",7)(1,"span",8),t._uU(2,"\u0e9c\u0ebb\u0e99\u0e81\u0eb2\u0e99\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99\u0ea7\u0ebd\u0e81\u0ec1\u0e9c\u0e99\u0eaa\u0eb9\u0ec9\u0e8a\u0ebb\u0e99"),t.qZA()())}function z(n,i){1&n&&(t.TgZ(0,"tr")(1,"th",9),t._uU(2,"\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81\u0eab\u0ebc\u0eb1\u0e81"),t.qZA(),t.TgZ(3,"th",10),t._uU(4,"\u0e99\u0ec9\u0eb3\u0edc\u0eb1\u0e81"),t.qZA(),t.TgZ(5,"th",10),t._uU(6,"\u0ec1\u0e9c\u0e99 "),t._UZ(7,"br"),t._uU(8," \u0ec3\u0e99\u0ec0\u0e94\u0eb7\u0ead\u0e99"),t.qZA(),t.TgZ(9,"th",10),t._uU(10,"\u0e9b\u0eb0\u0e95\u0eb4\u0e9a\u0eb1\u0e94\u0ec4\u0e94\u0ec9 "),t._UZ(11,"br"),t._uU(12," \u0ec3\u0e99\u0ec0\u0e94\u0eb7\u0ead\u0e99"),t.qZA(),t.TgZ(13,"th",10),t._uU(14,"\u0e84\u0ea7\u0eb2\u0ea1\u0e84\u0eb7\u0e9a\u0edc\u0ec9\u0eb2 "),t._UZ(15,"br"),t._uU(16," \u0e97\u0eb1\u0e87\u0edd\u0ebb\u0e94"),t.qZA(),t.TgZ(17,"th",10),t._uU(18,"\u0ea7\u0ebd\u0e81\u0e84\u0ebb\u0e87\u0e84\u0ec9\u0eb2\u0e87"),t.qZA(),t.TgZ(19,"th",10),t._uU(20,"\u0eaa\u0eb0\u0e96\u0eb2\u0e99\u0eb0 "),t._UZ(21,"br"),t._uU(22," \u0e84\u0ea7\u0eb2\u0ea1\u0e84\u0eb7\u0e9a\u0edc\u0ec9\u0eb2 "),t.qZA()())}function K(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",11),t._UZ(2,"button",12),t.qZA(),t.TgZ(3,"td",13)(4,"div",14),t._uU(5),t.qZA()(),t.TgZ(6,"td",10),t._UZ(7,"p-badge",15),t.qZA(),t.TgZ(8,"td",10),t._UZ(9,"p-badge",16),t.qZA(),t.TgZ(10,"td",10),t._UZ(11,"p-badge",17),t.qZA(),t.TgZ(12,"td",10),t._UZ(13,"p-badge",18),t.qZA(),t.TgZ(14,"td",10),t._UZ(15,"p-badge",19),t.qZA(),t.TgZ(16,"td")(17,"div"),t._UZ(18,"p-progressBar",20),t.qZA()()()),2&n){const e=i.$implicit,o=i.expanded,u=i.rowIndex,p=t.oxw(2);t.xp6(2),t.Q6J("pRowToggler",e)("icon",o?"pi pi-chevron-down":"pi pi-chevron-right"),t.xp6(1),t.Q6J("pTooltip",(null==e||null==e.subject?null:e.subject.length)>25?null==e?null:e.subject:null),t.xp6(2),t.AsE(" ",u+1,"). ",null==e?null:e.subject," "),t.xp6(2),t.Q6J("value",p.utilService.formatNumber(null==e?null:e.weight)+"%"),t.xp6(2),t.Q6J("value",p.utilService.formatNumber(null==e?null:e.planInMonth)+"%"),t.xp6(2),t.Q6J("value",p.utilService.formatNumber(null==e?null:e.actualInMonth)+"%"),t.xp6(2),t.Q6J("value",p.utilService.formatNumber(null==e?null:e.totalProgress)+"%"),t.xp6(2),t.Q6J("value",p.utilService.formatNumber(null==e?null:e.totalPending)+"%"),t.xp6(3),t.Q6J("value",p.progressbarCalc(null==e?null:e.weight,null==e?null:e.totalProgress))}}function V(n,i){1&n&&(t.TgZ(0,"tr")(1,"th",24),t._uU(2,"\u0e9e\u0eb0\u0ec1\u0e99\u0e81"),t.qZA(),t.TgZ(3,"th"),t._uU(4,"\u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81\u0e8d\u0ec8\u0ead\u0e8d"),t.qZA(),t.TgZ(5,"th",10),t._uU(6,"\u0e99\u0ec9\u0eb3\u0edc\u0eb1\u0e81"),t.qZA(),t.TgZ(7,"th",10),t._uU(8,"\u0ec1\u0e9c\u0e99\u0ec0\u0ea5\u0eb5\u0ec8\u0ea1"),t.qZA(),t.TgZ(9,"th",10),t._uU(10,"\u0ec1\u0e9c\u0e99\u0eaa\u0eb3\u0ec0\u0ea5\u0eb1\u0e94"),t.qZA(),t.TgZ(11,"th",10),t._uU(12,"\u0e88\u0eb3\u0e99\u0ea7\u0e99 "),t._UZ(13,"br"),t._uU(14," \u0ec0\u0e94\u0eb7\u0ead\u0e99"),t.qZA(),t.TgZ(15,"th",10),t._uU(16,"\u0ec1\u0e9c\u0e99 "),t._UZ(17,"br"),t._uU(18," \u0ec3\u0e99\u0ec0\u0e94\u0eb7\u0ead\u0e99"),t.qZA(),t.TgZ(19,"th",10),t._uU(20,"\u0e9b\u0eb0\u0e95\u0eb4\u0e9a\u0eb1\u0e94\u0ec4\u0e94\u0ec9 "),t._UZ(21,"br"),t._uU(22," \u0ec3\u0e99\u0ec0\u0e94\u0eb7\u0ead\u0e99"),t.qZA(),t.TgZ(23,"th",10),t._uU(24,"\u0e84\u0eb0\u0ec1\u0e99\u0e99 "),t._UZ(25,"br"),t._uU(26," \u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99"),t.qZA(),t.TgZ(27,"th",10),t._uU(28," \u0e84\u0ea7\u0eb2\u0ea1\u0e84\u0eb7\u0e9a\u0edc\u0ec9\u0eb2 "),t._UZ(29,"br"),t._uU(30," \u0e97\u0eb5\u0ec8\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2 "),t.qZA(),t.TgZ(31,"th",10),t._uU(32," \u0e84\u0ea7\u0eb2\u0ea1\u0e84\u0eb7\u0e9a\u0edc\u0ec9\u0eb2 "),t._UZ(33,"br"),t._uU(34,"\u0e97\u0eb1\u0e87\u0edd\u0ebb\u0e94 "),t.qZA()())}function W(n,i){if(1&n&&(t.TgZ(0,"td",29)(1,"div",30),t._uU(2),t.qZA()()),2&n){const e=t.oxw(),o=e.$implicit,u=e.rowspan;t.Q6J("pTooltip",(null==o||null==o.division||null==o.division.name?null:o.division.name.length)>15?null==o||null==o.division?null:o.division.name:null),t.uIk("rowspan",u),t.xp6(2),t.hij(" ",null==o||null==o.division?null:o.division.name," ")}}function X(n,i){if(1&n&&(t.TgZ(0,"tr"),t.YNc(1,W,3,3,"td",25),t.TgZ(2,"td",13)(3,"div",26),t._uU(4),t.qZA()(),t.TgZ(5,"td",27),t._uU(6),t.qZA(),t.TgZ(7,"td",27),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td",27),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td",27),t._uU(14),t.ALo(15,"number"),t.qZA(),t.TgZ(16,"td",27),t._uU(17),t.ALo(18,"number"),t.qZA(),t.TgZ(19,"td",27),t._uU(20),t.ALo(21,"number"),t.qZA(),t.TgZ(22,"td",27),t._uU(23),t.ALo(24,"number"),t.qZA(),t.TgZ(25,"td",27),t._uU(26),t.ALo(27,"number"),t.qZA(),t.TgZ(28,"td",28),t._uU(29),t.ALo(30,"number"),t.qZA()()),2&n){const e=i.$implicit,o=i.rowIndex,u=i.rowgroup;t.xp6(1),t.Q6J("ngIf",u),t.xp6(1),t.Q6J("pTooltip",(null==e||null==e.subject?null:e.subject.length)>15?null==e?null:e.subject:null),t.xp6(2),t.AsE(" ",o+1,".",null==e?null:e.subject," "),t.xp6(2),t.hij("",null==e?null:e.weight,"%"),t.xp6(2),t.Oqu(t.xi3(9,13,null==e?null:e.scheduledStart,"dd/MM/yyyy")),t.xp6(3),t.Oqu(t.xi3(12,16,null==e?null:e.scheduledEnd,"dd/MM/yyyy")),t.xp6(3),t.Oqu(t.xi3(15,19,null==e?null:e.totalMonth,"1.2-2")),t.xp6(3),t.hij("",t.xi3(18,22,null==e?null:e.planAvgMonth,"1.2-2"),"%"),t.xp6(3),t.hij("",t.xi3(21,25,null==e?null:e.planInMonth,"1.2-2"),"%"),t.xp6(3),t.Oqu(t.xi3(24,28,null==e?null:e.evaluationScore,"1.2-2")),t.xp6(3),t.hij("",t.xi3(27,31,null==e?null:e.progressPrevious,"1.2-2"),"%"),t.xp6(3),t.hij("",t.xi3(30,34,null==e?null:e.progressAll,"1.2-2"),"%")}}function tt(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",31),t._uU(2,"\u0ea5\u0ea7\u0ea1\u0e8d\u0ec8\u0ead\u0e8d:"),t.qZA(),t.TgZ(3,"td",28),t._uU(4),t.qZA(),t._UZ(5,"td")(6,"td"),t.TgZ(7,"td",28),t._uU(8),t.qZA(),t.TgZ(9,"td",28),t._uU(10),t.qZA(),t.TgZ(11,"td",28),t._uU(12),t.qZA(),t.TgZ(13,"td",28),t._uU(14),t.qZA(),t.TgZ(15,"td",28),t._uU(16),t.qZA(),t.TgZ(17,"td",28),t._uU(18),t.qZA()()),2&n){const e=t.oxw().$implicit,o=t.oxw(2);t.xp6(4),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"weight"),"% "),t.xp6(4),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"totalMonth")," "),t.xp6(2),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"planAvgMonth"),"% "),t.xp6(2),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"planInMonth"),"% "),t.xp6(2),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"evaluationScore")," "),t.xp6(2),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"progressPrevious"),"% "),t.xp6(2),t.hij(" ",o.reportHelpService.totalByPlanSub(null==e?null:e.planMainId,null==e?null:e.planSubs,"progressAll"),"% ")}}function et(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",21)(2,"div",22)(3,"p-table",23),t.YNc(4,V,35,0,"ng-template",2),t.YNc(5,X,31,37,"ng-template",4),t.YNc(6,tt,19,7,"ng-template",6),t.qZA()()()()),2&n){const e=i.$implicit;t.xp6(3),t.Q6J("value",null==e?null:e.planSubs)}}function nt(n,i){if(1&n&&(t.TgZ(0,"tr",32)(1,"td",31),t._uU(2,"\u0ea5\u0ea7\u0ea1:"),t.qZA(),t.TgZ(3,"td",28),t._uU(4),t.qZA(),t.TgZ(5,"td",28),t._uU(6),t.qZA(),t.TgZ(7,"td",28),t._uU(8),t.qZA(),t.TgZ(9,"td",28),t._uU(10),t.qZA(),t.TgZ(11,"td",28),t._uU(12),t.qZA(),t._UZ(13,"td"),t.qZA(),t.TgZ(14,"tr",32)(15,"td",31),t._uU(16,"\u0ea5\u0ea7\u0ea1\u0e84\u0eb0\u0ec1\u0e99\u0e99\u0e95\u0eb2\u0ea1\u0eaa\u0eb1\u0e94\u0eaa\u0ec8\u0ea7\u0e99 (60/100):"),t.qZA(),t.TgZ(17,"td",28),t._uU(18),t.ALo(19,"number"),t.qZA(),t._UZ(20,"td")(21,"td")(22,"td")(23,"td")(24,"td"),t.qZA()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",e.totalWeight,"% "),t.xp6(2),t.hij(" ",e.totalPlanInMonth,"% "),t.xp6(2),t.hij(" ",e.totalActualInMonth,"% "),t.xp6(2),t.hij(" ",e.totalProgress,"% "),t.xp6(2),t.hij(" ",e.totalPending,"% "),t.xp6(6),t.hij(" ",t.xi3(19,6,e.totalActualScore,"1.2-2")," ")}}function ot(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"p-fieldset",1),t.YNc(2,L,3,0,"ng-template",2),t.TgZ(3,"p-table",3),t.YNc(4,z,23,0,"ng-template",2),t.YNc(5,K,19,11,"ng-template",4),t.YNc(6,et,7,1,"ng-template",5),t.YNc(7,nt,25,9,"ng-template",6),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("toggleable",!0),t.xp6(2),t.Q6J("value",e.reportItems)("scrollable",!0)("scrollHeight",e.screenHeight+"px")("showCurrentPageReport",!0)}}let lt=(()=>{class n{constructor(e,o,u,p,g,h){this.planMainSumService=e,this.cdr=o,this.filter=u,this.menuService=p,this.utilService=g,this.reportHelpService=h,this.dataEmitter=new t.vpe,this.reportItems=[],this.totalWeight=0,this.totalPlanInMonth=0,this.totalActualInMonth=0,this.totalProgress=0,this.totalPending=0,this.totalScore=0,this.totalActualScore=0,this.screenHeight=0,this.showMenu$=this.menuService.menuState$,this.destroy$=new _.x}ngOnInit(){this.planMainSumService.items$.pipe((0,q.R)(this.destroy$)).subscribe(e=>{this.reportItems=e,this.summary(e),this.cdr.markForCheck()}),this.checkScreenSize()}onResize(e){this.checkScreenSize()}progressbarCalc(e,o){if(e<=0||o<=0)return 0;const u=Math.min(100,o/e*100);return parseFloat(u.toFixed(2))}sendDataToParent(e){this.dataEmitter.emit({totalScore:e})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}summary(e){if(e&&e?.length){this.totalWeight=this.reportHelpService.totalByPlanMain(e,"weight"),this.totalPlanInMonth=this.reportHelpService.totalByPlanMain(e,"planInMonth"),this.totalActualInMonth=this.reportHelpService.totalByPlanMain(e,"actualInMonth"),this.totalProgress=this.reportHelpService.totalByPlanMain(e,"totalProgress"),this.totalPending=this.reportHelpService.totalByPlanMain(e,"totalPending");const o=100*this.totalActualInMonth/this.totalPlanInMonth;this.totalScore=o>100?100:o,this.totalActualScore=60*this.totalScore/100,this.totalActualScore>60&&(this.totalActualScore=60),this.sendDataToParent(this.totalActualScore)}else this.sendDataToParent(0)}checkScreenSize(){this.screenHeight=Math.floor(.6*window.innerHeight),this.cdr.detectChanges()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(N.Q),t.Y36(t.sBO),t.Y36(I.i),t.Y36(M.h),t.Y36(P.F),t.Y36(j.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-eval-task-plan"]],hostBindings:function(e,o){1&e&&t.NdJ("resize",function(p){return o.onResize(p)},!1,t.Jf7)},outputs:{dataEmitter:"dataEmitter"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"toggleable"],["pTemplate","header"],["dataKey","id","styleClass","p-datatable-sm","responsiveLayout","scroll",3,"value","scrollable","scrollHeight","showCurrentPageReport"],["pTemplate","body"],["pTemplate","rowexpansion"],["pTemplate","footer"],[1,"flex","align-items-center"],[1,"font-semibold","text-xl"],["colspan","2",1,"white-space-nowrap","text-lg"],[1,"text-center","white-space-nowrap"],[1,"text-center","white-space-nowrap",2,"width","4rem"],["type","button","pButton","","pRipple","",1,"p-button-text","p-button-rounded","p-button-plain",3,"pRowToggler","icon"],["tooltipPosition","bottom","tooltipStyleClass","custom-tooltip",3,"pTooltip"],[1,"max-w-10rem","xl:max-w-30rem","white-space-nowrap","overflow-hidden","text-overflow-ellipsis","text-lg"],["severity","warning","size","large",3,"value"],["severity","info","size","large",3,"value"],["severity","success","size","large",3,"value"],["size","large",3,"value"],["severity","danger","size","large",3,"value"],[3,"value"],["colspan","8"],[1,"px-3","py-2"],["dataKey","id","rowGroupMode","rowspan","groupRowsBy","division.name","styleClass","p-datatable-sm p-datatable-gridlines",3,"value"],[1,"white-space-nowrap"],["tooltipPosition","right","tooltipStyleClass","custom-tooltip",3,"pTooltip",4,"ngIf"],[1,"max-w-10rem","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],[1,"text-center"],[1,"text-center","font-bold"],["tooltipPosition","right","tooltipStyleClass","custom-tooltip",3,"pTooltip"],[1,"max-w-15rem","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],["colspan","2",1,"text-right","font-bold"],[1,"text-xl"]],template:function(e,o){1&e&&t.YNc(0,ot,8,5,"ng-container",0),2&e&&t.Q6J("ngIf",o.reportItems&&(null==o.reportItems?null:o.reportItems.length))},dependencies:[l.O5,J.p,S.jx,y.iA,y.jB,B.Hq,Y.u,b.Ct,F.k,l.JJ,l.uU],encapsulation:2}),n})();var Q=r(1042);function it(n,i){1&n&&(t.TgZ(0,"div",7)(1,"span",8),t._uU(2,"\u0e9c\u0ebb\u0e99\u0e81\u0eb2\u0e99\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99\u0ea7\u0ebd\u0e81\u0ea1\u0ead\u0e9a\u0edd\u0eb2\u0e8d"),t.qZA()())}function rt(n,i){1&n&&(t.TgZ(0,"tr")(1,"th",9),t._uU(2,"#"),t.qZA(),t.TgZ(3,"th",10),t._uU(4," \u0edc\u0ec9\u0eb2\u0ea7\u0ebd\u0e81 "),t.qZA(),t.TgZ(5,"th",11),t._uU(6," \u0eaa\u0eb0\u0e96\u0eb2\u0e99\u0eb0 "),t.qZA(),t.TgZ(7,"th",12),t._uU(8," \u0ea5\u0ea7\u0ea1\u0e84\u0eb0\u0ec1\u0e99\u0e99\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99 "),t.qZA()())}const ut=function(n){return{color:n}};function at(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",17),t._UZ(2,"i"),t.TgZ(3,"span",18),t._uU(4),t.qZA()(),t.BQk()),2&n){const e=i.ngIf;t.xp6(1),t.Akn(t.VKq(5,ut,null==e?null:e.color)),t.xp6(1),t.Tol(null==e?null:e.icon),t.xp6(2),t.Oqu(null==e?null:e.name)}}const st=function(){return{width:"50px"}};function pt(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",13),t._uU(2),t.qZA(),t.TgZ(3,"td",14)(4,"div",15),t._uU(5),t.qZA()(),t.TgZ(6,"td"),t.YNc(7,at,5,7,"ng-container",0),t.qZA(),t.TgZ(8,"td",12),t._UZ(9,"p-badge",16),t.qZA()()),2&n){const e=i.$implicit,o=i.rowIndex,u=t.oxw(2);t.xp6(1),t.Q6J("ngStyle",t.DdM(6,st)),t.xp6(1),t.hij(" ",o+1," "),t.xp6(1),t.Q6J("pTooltip",(null==e||null==e.subject?null:e.subject.length)>25?null==e?null:e.subject:null),t.xp6(2),t.hij(" ",null==e?null:e.subject," "),t.xp6(2),t.Q6J("ngIf",null==e?null:e.status),t.xp6(2),t.Q6J("value",u.utilService.formatNumber(null==e?null:e.totalEvalScore))}}function ct(n,i){if(1&n&&(t.TgZ(0,"tr",19)(1,"td",20),t._uU(2,"\u0ea5\u0ea7\u0ea1\u0e84\u0eb0\u0ec1\u0e99\u0e99 (\u0ec0\u0e95\u0eb1\u0ea1 85%):"),t.qZA(),t.TgZ(3,"td",21),t._uU(4),t.ALo(5,"number"),t.qZA()(),t.TgZ(6,"tr",19)(7,"td",20),t._uU(8,"\u0ea5\u0ea7\u0ea1\u0e84\u0eb0\u0ec1\u0e99\u0e99\u0e95\u0eb2\u0ea1\u0eaa\u0eb1\u0e94\u0eaa\u0ec8\u0ea7\u0e99 (40/100):"),t.qZA(),t.TgZ(9,"td",21),t._uU(10),t.ALo(11,"number"),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.hij(" ",t.xi3(5,2,e.totalAverage,"1.2-2")," "),t.xp6(6),t.hij(" ",t.xi3(11,5,e.totalActualScore,"1.2-2")," ")}}function Et(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"p-fieldset",1),t.YNc(2,it,3,0,"ng-template",2),t.TgZ(3,"p-table",3,4),t.YNc(5,rt,9,0,"ng-template",2),t.YNc(6,pt,10,7,"ng-template",5),t.YNc(7,ct,12,8,"ng-template",6),t.qZA()(),t.BQk()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("toggleable",!0),t.xp6(2),t.Q6J("value",e.reportItems)("scrollable",!0)("scrollHeight",e.screenHeight+"px")("rowHover",!0)}}let mt=(()=>{class n{constructor(e,o,u,p,g,h){this.taskAssignSumService=e,this.cdr=o,this.filter=u,this.menuService=p,this.utilService=g,this.reportHelpService=h,this.dataEmitter=new t.vpe,this.reportItems=[],this.totalAverage=0,this.totalActualScore=0,this.screenHeight=0,this.showMenu$=this.menuService.menuState$,this.destroy$=new _.x}ngOnInit(){this.taskAssignSumService.items$.pipe((0,q.R)(this.destroy$)).subscribe(e=>{this.reportItems=e,this.getAverage(e),this.cdr.markForCheck()}),this.checkScreenSize()}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onResize(e){this.checkScreenSize()}checkScreenSize(){this.screenHeight=Math.floor(.6*window.innerHeight),this.cdr.detectChanges()}getAverage(e){e&&e.length?(this.totalAverage=this.reportHelpService.averageByProperty(e,"totalEvalScore"),this.totalActualScore=40*this.totalAverage/85,this.sendDataToParent(this.totalActualScore)):this.sendDataToParent(0)}sendDataToParent(e){this.dataEmitter.emit({totalScore:e})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Q.j),t.Y36(t.sBO),t.Y36(I.i),t.Y36(M.h),t.Y36(P.F),t.Y36(j.Z))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-eval-task-assign"]],hostBindings:function(e,o){1&e&&t.NdJ("resize",function(p){return o.onResize(p)},!1,t.Jf7)},outputs:{dataEmitter:"dataEmitter"},decls:1,vars:1,consts:[[4,"ngIf"],[3,"toggleable"],["pTemplate","header"],["responsiveLayout","scroll","dataKey","id","styleClass","p-datatable-sm",3,"value","scrollable","scrollHeight","rowHover"],["dt",""],["pTemplate","body"],["pTemplate","footer"],[1,"flex","align-items-center"],[1,"font-semibold","text-xl"],[1,"text-center"],[1,"white-space-nowrap","text-lg"],[1,"white-space-nowrap"],[1,"text-center","white-space-nowrap"],[1,"text-center",3,"ngStyle"],["tooltipPosition","bottom","tooltipStyleClass","custom-tooltip",3,"pTooltip"],[1,"max-w-10rem","xl:max-w-30rem","white-space-nowrap","overflow-hidden","text-overflow-ellipsis"],["severity","success","size","large",3,"value"],[1,"font-semibold"],[1,"ml-1"],[1,"text-xl"],["colspan","3",1,"text-right","font-bold"],[1,"text-center","font-bold"]],template:function(e,o){1&e&&t.YNc(0,Et,8,5,"ng-container",0),2&e&&t.Q6J("ngIf",o.reportItems&&(null==o.reportItems?null:o.reportItems.length))},dependencies:[l.O5,l.PC,J.p,S.jx,y.iA,Y.u,b.Ct,l.JJ],encapsulation:2,changeDetection:0}),n})();var dt=r(3828),gt=r(2569);function ht(n,i){if(1&n&&(t.TgZ(0,"div",5)(1,"div"),t._uU(2),t.qZA()()),2&n){const e=i.$implicit;t.xp6(2),t.AsE("[",null==e?null:e.code,"]-",null==e?null:e.name,"")}}function At(n,i){if(1&n&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.xp6(1),t.AsE("[",null==e?null:e.code,"]-",null==e?null:e.name,"")}}const vt=function(){return{width:"150px"}},_t=function(){return{width:"250px"}};let ft=(()=>{class n{constructor(e,o,u,p,g,h){this.cdr=e,this.departmentService=o,this.planMainSumService=u,this.taskAssignSumService=p,this.loadingService=g,this.parentForm=h,this.departments=[],this.months=[],this.loading$=this.loadingService.state$,this.destroy$=new _.x}get control(){return this.formGroup.get("departmentId")}ngOnInit(){this.months=[{name:"10",code:"10"},{name:"11",code:"11"}],this.formGroup=this.parentForm.control,this.getAllDepartments(),this.departmentService.items$.pipe((0,q.R)(this.destroy$)).subscribe(e=>{this.departments=e,this.cdr.markForCheck()})}getAllDepartments(){this.departmentService.getAll("field-sm").subscribe()}onChangeMonth(){this.formGroup.patchValue({departmentId:null})}onChangeDept(e){if(e){const o={...this.formGroup.value};this.planMainSumService.getAllByDept(o).subscribe(),this.taskAssignSumService.getAllByDept(o).subscribe()}}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(t.sBO),t.Y36(dt.n),t.Y36(N.Q),t.Y36(Q.j),t.Y36(gt.b),t.Y36(c.sg))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appr-dept-filter"]],decls:6,vars:14,consts:[[3,"formGroup"],["optionLabel","\u0ec0\u0e94\u0eb7\u0ead\u0e99","placeholder","\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0ec0\u0e94\u0eb7\u0ead\u0e99","optionValue","code","optionLabel","name","formControlName","batchMonth",3,"options","onChange"],["appendTo","body","id","departmentId","optionValue","id","optionLabel","name","placeholder","\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0e9d\u0ec8\u0eb2\u0e8d","emptyFilterMessage","\u0e9a\u0ecd\u0ec8\u0e9e\u0ebb\u0e9a\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99","styleClass","ml-2","formControlName","departmentId",3,"options","filter","resetFilterOnHide","emptyMessage","onFocus","onChange"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"flex","align-items-center"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"p-dropdown",1),t.NdJ("onChange",function(){return o.onChangeMonth()}),t.qZA(),t.TgZ(2,"p-dropdown",2),t.NdJ("onFocus",function(){return o.getAllDepartments()})("onChange",function(p){return o.onChangeDept(p.value)}),t.ALo(3,"async"),t.YNc(4,ht,3,2,"ng-template",3),t.YNc(5,At,2,2,"ng-template",4),t.qZA()()),2&e&&(t.Q6J("formGroup",o.formGroup),t.xp6(1),t.Akn(t.DdM(12,vt)),t.Q6J("options",o.months),t.xp6(1),t.Akn(t.DdM(13,_t)),t.Q6J("options",o.departments)("filter",!0)("resetFilterOnHide",!0)("emptyMessage",t.lcZ(3,10,o.loading$)?"\u0e81\u0eb3\u0ea5\u0eb1\u0e87\u0ec2\u0eab\u0ebc\u0e94..":"\u0e9a\u0ecd\u0ec8\u0e9e\u0ebb\u0e9a\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99"))},dependencies:[c._Y,c.JJ,c.JL,c.sg,c.u,E.bc,E.VP,E.YE,S.jx,w.Lt,l.Ov],encapsulation:2,changeDetection:0}),n})();function Ct(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"div",13)(2,"div",14)(3,"span",15),t._uU(4,"\u0e9c\u0ebb\u0e99\u0ea5\u0ea7\u0ea1\u0e84\u0eb0\u0ec1\u0e99\u0e99:"),t.qZA(),t._UZ(5,"p-badge",16),t.qZA(),t.TgZ(6,"div",17)(7,"span"),t._uU(8,"\u0ec0\u0e81\u0ea3\u0e94\u0e97\u0eb5\u0ec8\u0ec4\u0e94\u0ec9\u0eae\u0eb1\u0e9a: "),t.TgZ(9,"span",18),t._uU(10),t.qZA()()()(),t.BQk()),2&n){const e=t.oxw();t.xp6(5),t.Q6J("value",e.totalCombinedScore.toString()),t.xp6(5),t.hij(" ",e.gradeService.getGrade(e.totalCombinedScore)," ")}}const Zt=[{path:"",component:(()=>{class n{constructor(e,o,u,p,g,h,Ut,wt,It,Mt,Pt){this.filter=e,this.menuService=o,this.utilService=u,this.gradeService=p,this.confirmService=g,this.dialogRef=h,this.dialogService=Ut,this.fb=wt,this.approveService=It,this.alertService=Mt,this.cdr=Pt,this.reportItems=[],this.totalPlanScore=0,this.totalAssignScore=0,this.totalCombinedScore=0,this.screenHeight=0,this.filterFields=["name","description"],this.showMenu$=this.menuService.menuState$,this.destroy$=new _.x,this.formGroup=this.fb.formGroup(new Z)}get controls(){return this.formGroup.controls}ngOnInit(){}getEmitterTaskPlan(e){this.totalPlanScore=e.totalScore,this.calculateCombinedScore()}getEmitterTaskAssign(e){this.totalAssignScore=e.totalScore,this.calculateCombinedScore()}onApprove(){this.confirmService.confirm({message:"\u0e97\u0ec8\u0eb2\u0e99\u0ec1\u0e99\u0ec8\u0ec3\u0e88\u0e9a\u0ecd\u0ec8\u0ea7\u0ec8\u0eb2\u0ec0\u0eab\u0eb1\u0e99\u0e94\u0eb5\u0e95\u0eb2\u0ea1\u0e9c\u0ebb\u0e99\u0e81\u0eb2\u0e99\u0e9b\u0eb0\u0ec0\u0ea1\u0eb5\u0e99\u0e99\u0eb5\u0ec9 ?",icon:"pi pi-exclamation-triangle",accept:()=>{this.execApprove()}})}onNotApproved(){this.dialogRef=this.dialogService.open(R,{header:"\u0e81\u0eb0\u0ea5\u0eb8\u0e99\u0eb2\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0ec0\u0e81\u0ea3\u0e94\u0e97\u0eb5\u0ec8\u0ec0\u0eab\u0eb1\u0e99\u0ea7\u0ec8\u0eb2\u0ec0\u0edd\u0eb2\u0eb0\u0eaa\u0ebb\u0ea1",data:{data:{batchMonth:this.controls.batchMonth.value,departmentId:this.controls.departmentId.value,gradeScore:this.totalCombinedScore,gradeSys:this.gradeSys}},width:"50%",contentStyle:{overflow:"auto","padding-bottom":"20px"},baseZIndex:1e4,dismissableMask:!1})}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete(),this.dialogRef&&this.dialogRef.close()}calculateCombinedScore(){const e=this.totalPlanScore+this.totalAssignScore;console.log(this.totalPlanScore),e&&(this.totalCombinedScore=parseFloat(e.toFixed(2)),this.gradeSys=this.gradeService.getGrade(e))}execApprove(){const e=this.formGroup.value;this.formGroup.disable();const o={...e,gradeScore:this.totalCombinedScore,gradeSys:this.gradeSys};this.approveService.create(o).subscribe({next:u=>{u&&(this.resetData(),this.alertService.showSuccess("\u0e9a\u0eb1\u0e99\u0e97\u0eb6\u0e81\u0e82\u0ecd\u0ec9\u0ea1\u0eb9\u0e99\u0ec1\u0ea5\u0ec9\u0ea7"))},error:u=>{this.formGroup.enable(),this.alertService.showError(u)}})}resetData(){this.formGroup.enable(),this.formGroup.markAsPristine()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(I.i),t.Y36(M.h),t.Y36(P.F),t.Y36(O.U),t.Y36(S.YP),t.Y36(C.E7),t.Y36(C.xA),t.Y36(E.GW),t.Y36(s),t.Y36(m.c),t.Y36(t.sBO))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-appr-department"]],decls:16,vars:2,consts:[[1,"p-grid"],["styleClass","card my-4"],[1,"p-toolbar-group-start","text-2xl"],[1,"w-30rem"],[3,"formGroup"],[1,"flex","align-items-center"],[1,"p-toolbar-group-end"],["pButton","","pRipple","","icon","pi pi-check","label","\u0ead\u0eb0\u0e99\u0eb8\u0ea1\u0eb1\u0e94",1,"p-button-success","text-lg","font-semibold","mr-2",3,"click"],["pButton","","pRipple","","icon","pi pi-times","label","\u0e9e\u0eb4\u0e88\u0eb2\u0ea5\u0eb0\u0e99\u0eb2\u0e84\u0eb7\u0e99",1,"p-button-danger","text-lg","font-semibold",3,"click"],[1,"p-col-12"],[4,"ngIf"],[3,"dataEmitter"],[1,"mt-4"],[1,"flex","align-items-center","justify-content-center","gap-3"],[1,"white-space-nowrap","text-2xl","font-semibold"],[1,"mr-2"],["severity","success","size","large",3,"value"],[1,"white-space-nowrap","font-semibold","text-2xl"],[1,"text-3xl","font-bold"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"p-toolbar",1)(2,"div",2)(3,"div",3)(4,"form",4)(5,"div",5),t._UZ(6,"app-appr-dept-filter"),t.qZA()()()(),t.TgZ(7,"div",6)(8,"button",7),t.NdJ("click",function(){return o.onApprove()}),t.qZA(),t.TgZ(9,"button",8),t.NdJ("click",function(){return o.onNotApproved()}),t.qZA()()(),t.TgZ(10,"div",9),t.YNc(11,Ct,11,2,"ng-container",10),t.TgZ(12,"div")(13,"app-eval-task-plan",11),t.NdJ("dataEmitter",function(p){return o.getEmitterTaskPlan(p)}),t.qZA()(),t.TgZ(14,"div",12)(15,"app-eval-task-assign",11),t.NdJ("dataEmitter",function(p){return o.getEmitterTaskAssign(p)}),t.qZA()()()()),2&e&&(t.xp6(4),t.Q6J("formGroup",o.formGroup),t.xp6(7),t.Q6J("ngIf",o.controls.departmentId.value))},dependencies:[l.O5,c._Y,c.JL,c.sg,E.VP,k.o,B.Hq,b.Ct,lt,mt,ft],encapsulation:2}),n})()}];let xt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.Bz.forChild(Zt),v.Bz]}),n})();var Tt=r(4466),Bt=r(585),St=r(7147),bt=r(2137),yt=r(1493);let Dt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,xt,Tt.m,k.V,J.L,y.U$,A.A,Bt._8,St.o,yt.S,w.kW,Y.z,B.hJ,b.TX,F.q,bt.D]}),n})()},7147:(H,T,r)=>{r.d(T,{A:()=>D,o:()=>U});var l=r(8274),v=r(6895);function _(a,d){if(1&a){const s=l.EpF();l.TgZ(0,"img",6),l.NdJ("error",function(c){l.CHM(s);const A=l.oxw(2);return l.KtG(A.imageError(c))}),l.qZA()}if(2&a){const s=l.oxw(2);l.Q6J("src",s.image,l.LSH)}}function f(a,d){if(1&a&&l._UZ(0,"span",8),2&a){const s=l.oxw(3);l.Tol(s.icon),l.Q6J("ngClass","p-chip-icon")}}function E(a,d){if(1&a&&l.YNc(0,f,1,3,"span",7),2&a){const s=l.oxw(2);l.Q6J("ngIf",s.icon)}}function Z(a,d){if(1&a&&(l.TgZ(0,"div",9),l._uU(1),l.qZA()),2&a){const s=l.oxw(2);l.xp6(1),l.Oqu(s.label)}}function x(a,d){if(1&a){const s=l.EpF();l.TgZ(0,"span",10),l.NdJ("click",function(c){l.CHM(s);const A=l.oxw(2);return l.KtG(A.close(c))})("keydown.enter",function(c){l.CHM(s);const A=l.oxw(2);return l.KtG(A.close(c))}),l.qZA()}if(2&a){const s=l.oxw(2);l.Tol(s.removeIcon),l.Q6J("ngClass","pi-chip-remove-icon")}}function t(a,d){if(1&a&&(l.TgZ(0,"div",1),l.Hsn(1),l.YNc(2,_,1,1,"img",2),l.YNc(3,E,1,1,"ng-template",null,3,l.W1O),l.YNc(5,Z,2,1,"div",4),l.YNc(6,x,1,3,"span",5),l.qZA()),2&a){const s=l.MAs(4),m=l.oxw();l.Tol(m.styleClass),l.Q6J("ngClass",m.containerClass())("ngStyle",m.style),l.xp6(2),l.Q6J("ngIf",m.image)("ngIfElse",s),l.xp6(3),l.Q6J("ngIf",m.label),l.xp6(1),l.Q6J("ngIf",m.removable)}}const C=["*"];let D=(()=>{class a{constructor(){this.removeIcon="pi pi-times-circle",this.onRemove=new l.vpe,this.onImageError=new l.vpe,this.visible=!0}containerClass(){return{"p-chip p-component":!0,"p-chip-image":null!=this.image}}close(s){this.visible=!1,this.onRemove.emit(s)}imageError(s){this.onImageError.emit(s)}}return a.\u0275fac=function(s){return new(s||a)},a.\u0275cmp=l.Xpm({type:a,selectors:[["p-chip"]],hostAttrs:[1,"p-element"],inputs:{label:"label",icon:"icon",image:"image",style:"style",styleClass:"styleClass",removable:"removable",removeIcon:"removeIcon"},outputs:{onRemove:"onRemove",onImageError:"onImageError"},ngContentSelectors:C,decls:1,vars:1,consts:[[3,"ngClass","class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"src","error",4,"ngIf","ngIfElse"],["iconTemplate",""],["class","p-chip-text",4,"ngIf"],["tabindex","0",3,"class","ngClass","click","keydown.enter",4,"ngIf"],[3,"src","error"],[3,"class","ngClass",4,"ngIf"],[3,"ngClass"],[1,"p-chip-text"],["tabindex","0",3,"ngClass","click","keydown.enter"]],template:function(s,m){1&s&&(l.F$t(),l.YNc(0,t,7,8,"div",0)),2&s&&l.Q6J("ngIf",m.visible)},dependencies:[v.mk,v.O5,v.PC],styles:[".p-chip{display:inline-flex;align-items:center}.p-chip-text,.p-chip-icon.pi{line-height:1.5}.pi-chip-remove-icon{line-height:1.5;cursor:pointer}.p-chip img{border-radius:50%}\n"],encapsulation:2,changeDetection:0}),a})(),U=(()=>{class a{}return a.\u0275fac=function(s){return new(s||a)},a.\u0275mod=l.oAB({type:a}),a.\u0275inj=l.cJS({imports:[v.ez]}),a})()}}]);