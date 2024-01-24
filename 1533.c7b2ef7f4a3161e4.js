"use strict";(self.webpackChunkavalon_ng=self.webpackChunkavalon_ng||[]).push([[1533],{3948:(v,f,e)=>{e.d(f,{h:()=>l});var s=e(8274),d=e(6895),n=e(6679);const E=function(_){return{background:_}};function u(_,m){if(1&_&&(s.ynx(0),s.TgZ(1,"p-tag",1)(2,"div",2),s._UZ(3,"i",3),s.TgZ(4,"span",4),s._uU(5),s.qZA()()(),s.BQk()),2&_){const h=m.ngIf;s.xp6(1),s.Akn(s.VKq(6,E,h.color)),s.Q6J("rounded",!0),s.xp6(2),s.Tol(h.icon),s.xp6(2),s.Oqu(h.name)}}let l=(()=>{class _{constructor(){}ngOnInit(){}trackByFn(h,r){return r.id||h}}return _.\u0275fac=function(h){return new(h||_)},_.\u0275cmp=s.Xpm({type:_,selectors:[["app-task-status"]],inputs:{taskStatus:"taskStatus"},decls:1,vars:1,consts:[[4,"ngIf"],["styleClass","px-3",3,"rounded"],[1,"flex","align-items-center","gap-1"],[2,"font-size","11px"],[1,"font-semibold",2,"font-size","11px"]],template:function(h,r){1&h&&s.YNc(0,u,6,8,"ng-container",0),2&h&&s.Q6J("ngIf",r.taskStatus)},dependencies:[d.O5,n.V],encapsulation:2}),_})()},9981:(v,f,e)=>{e.d(f,{o:()=>E});var s=e(6895),d=e(6679),n=e(8274);let E=(()=>{class u{}return u.\u0275fac=function(_){return new(_||u)},u.\u0275mod=n.oAB({type:u}),u.\u0275inj=n.cJS({imports:[s.ez,d.W]}),u})()},3446:(v,f,e)=>{e.d(f,{O:()=>_});var s=e(8274),d=e(433),n=e(6895),E=e(2156),u=e(585);function l(m,h){1&m&&(s.ynx(0),s.TgZ(1,"label",3)(2,"span"),s._uU(3,"\u0e9b\u0eb0\u0e88\u0eb3\u0e9b\u0eb5:"),s.qZA()(),s.BQk())}let _=(()=>{class m{constructor(r,c){this.parentForm=r,this.cdr=c,this.showLabel=!0,this.yearSelected=new s.vpe,this.onChange=()=>{},this.onTouched=()=>{}}get control(){return this.formGroup.get("docYear")}ngOnInit(){this.formGroup=this.parentForm.control;const r=(new Date).getFullYear(),c=new Date(r,0,1);this.formGroup.patchValue({docYear:c}),this.cdr.detectChanges()}writeValue(r){r&&(this.selectedValue=r)}registerOnChange(r){this.onChange=r}registerOnTouched(r){this.onTouched=r}onSelectYear(r){this.writeValue(r),this.onChange(r),this.yearSelected.emit(r)}}return m.\u0275fac=function(r){return new(r||m)(s.Y36(d.sg),s.Y36(s.sBO))},m.\u0275cmp=s.Xpm({type:m,selectors:[["app-year-picker"]],inputs:{showLabel:"showLabel"},outputs:{yearSelected:"yearSelected"},features:[s._Bn([{provide:d.JU,useExisting:(0,s.Gpc)(()=>m),multi:!0}])],decls:3,vars:3,consts:[[3,"formGroup"],[4,"ngIf"],["view","year","dateFormat","yy","inputId","yearpicker","placeholder","\u0ec0\u0ea5\u0eb7\u0ead\u0e81\u0e9b\u0eb5","styleClass","mr-2","formControlName","docYear",3,"readonlyInput","onSelect"],["for","yearpicker",1,"font-semibold","white-space-nowrap","mr-1"]],template:function(r,c){1&r&&(s.TgZ(0,"form",0),s.YNc(1,l,4,0,"ng-container",1),s.TgZ(2,"p-calendar",2),s.NdJ("onSelect",function(i){return c.onSelectYear(i)}),s.qZA()()),2&r&&(s.Q6J("formGroup",c.formGroup),s.xp6(1),s.Q6J("ngIf",c.showLabel),s.xp6(1),s.Q6J("readonlyInput",!0))},dependencies:[n.O5,d._Y,d.JJ,d.JL,d.sg,d.u,E.bc,E.VP,E.YE,u.f],encapsulation:2}),m})()},6749:(v,f,e)=>{e.d(f,{g:()=>u});var s=e(6895),d=e(4466),n=e(585),E=e(8274);let u=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=E.oAB({type:l}),l.\u0275inj=E.cJS({imports:[s.ez,d.m,n._8]}),l})()},7248:(v,f,e)=>{e.d(f,{U:()=>n});var s=e(655),d=e(2156);class n{}(0,s.gn)([(0,d.C1)()],n.prototype,"docYear",void 0)},6522:(v,f,e)=>{e.d(f,{_:()=>s});class s{static getWaiting(n,E=!0){let u=["main.id","main.docYear","main.taskId","main.taskSubject","main.selfTimeScore","main.selfQuantityScore","main.selfQualityScore","main.selfSatisfiedScore","main.selfCode","main.createdAt","main.isLock","staff.staffCode","staff.firstName","staff.lastName","status.icon","status.name","status.color"];return E&&u.push("main.taskWfId"),{query:{fields:u,joins:["staff","status"],filters:n,getType:"MANY"}}}static getMany(n){return{query:{fields:["main.docYear","main.id","main.taskId","main.taskSubject","main.selfTimeScore","main.selfQuantityScore","main.selfQualityScore","main.selfSatisfiedScore","main.headTimeScore","main.headQuantityScore","main.headQualityScore","main.headSatisfiedScore","main.selfCode","main.createdAt","main.headActionAt","main.isLock","staff.staffCode","staff.firstName","staff.lastName","status.icon","status.name","status.color"],joins:["staff","status"],filters:n,getType:"MANY"}}}static getDetail(n,E=!0){const u=["main.docYear","main.id","main.taskId","main.taskSubject","main.reportDetail","main.scheduledStart","main.scheduledEnd","main.selfTimeScore","main.selfQuantityScore","main.selfQualityScore","main.selfSatisfiedScore","main.selfCode","main.headTimeScore","main.headQuantityScore","main.headQualityScore","main.headSatisfiedScore","main.createdAt","main.headActionAt","main.comment","task.indicatorTime","task.indicatorQuantity","iq.id","iq.subject","is.id","is.subject","priority.name","priority.color","priority.score","staff.staffCode","staff.firstName","staff.lastName","head.staffCode","head.firstName","head.lastName","status.icon","status.name","status.color","attached.fileName","attached.filePath"];return E&&u.push("main.taskWfId"),{query:{fields:u,joins:["task","iq","is","priority","staff","head","status","attached"],filters:n,getType:"ONE"}}}static getPlanSubDetail(n){return{query:{fields:["main.id","main.docYear","main.taskWfId","main.taskId","main.taskSubject","main.reportDetail","main.scheduledStart","main.scheduledEnd","main.selfTimeScore","main.selfQuantityScore","main.selfQualityScore","main.selfSatisfiedScore","main.selfCode","main.headTimeScore","main.headQuantityScore","main.headQualityScore","main.headSatisfiedScore","main.createdAt","main.headActionAt","main.comment","task.indicatorTime","task.indicatorQuantity","iq.id","iq.subject","is.id","is.subject","staff.staffCode","staff.firstName","staff.lastName","head.staffCode","head.firstName","head.lastName","status.icon","status.name","status.color","attached.fileName","attached.filePath"],joins:["task","iq","is","staff","head","status","attached"],filters:n,getType:"ONE"}}}}},875:(v,f,e)=>{e.d(f,{K:()=>s});class s{static getMany(n){return{query:{fields:["main.id","main.docYear","main.taskId","main.taskSubject","main.selfTimeScore","main.selfQuantityScore","main.selfQualityScore","main.selfSatisfiedScore","main.selfCode","main.createdAt","main.isLock","status.id","status.icon","status.name","status.color"],joins:["status"],filters:n,getType:"MANY"}}}static getDetail(n){return{query:{fields:["main.id","main.docYear","main.taskId","main.taskSubject","main.reportDetail","main.scheduledStart","main.scheduledEnd","main.selfTimeScore","main.selfQuantityScore","main.selfQualityScore","main.selfSatisfiedScore","main.selfCode","main.createdAt","main.headActionAt","main.comment","task.id","task.indicatorTime","task.indicatorQuantity","iq.id","iq.subject","is.id","is.subject","staff.staffCode","staff.firstName","staff.lastName","head.staffCode","head.firstName","head.lastName","status.icon","status.name","status.color","attached.attachRefId","attached.docRefId","attached.fileName","attached.filePath"],joins:["task","iq","is","staff","head","status","attached"],filters:n,getType:"ONE"}}}static getStatus(n){return{query:{fields:["main.id","status.id","status.name","status.icon","status.color"],joins:["status"],filters:n,getType:"ONE"}}}}},6819:(v,f,e)=>{e.d(f,{M:()=>s});class s{static getOne(n){return{query:{fields:["main.id","main.docYear","main.taskNo","main.taskSubject","main.indicatorTime","main.indicatorQuantity","main.createdAt","priority.name","priority.color","iq.id","iq.subject","is.id","is.subject","mainStatus.name","mainStatus.color","mainStatus.icon","attached.id","wf.taskId","wfStaff.staffCode","wfStaff.firstName","wfStaff.lastName","wfStatus.name","wfStatus.icon","wfStatus.color"],joins:["priority","iq","is","mainStatus","attached","wf","wfStaff","wfStatus"],filters:n,getType:"ONE"}}}static getDetail(n){return{query:{fields:["main.id","main.docYear","main.taskNo","main.taskSubject","main.indicatorTime","main.indicatorQuantity","main.description","main.createdAt","main.updatedAt","priority.id","priority.name","priority.color","iq.id","iq.subject","is.id","is.subject","mainStatus.name","mainStatus.color","mainStatus.icon","attached.fileName","attached.filePath","wf.id","wfStaff.staffCode","wfStaff.firstName","wfStaff.lastName","wfStatus.name","wfStatus.icon","wfStatus.color"],joins:["priority","iq","is","mainStatus","attached","wf","wfStaff","wfStatus"],filters:n,getType:"ONE"}}}static getMany(n){return{query:{fields:["main.id","main.docYear","main.taskNo","main.taskSubject","main.indicatorTime","main.indicatorQuantity","main.createdAt","priority.name","priority.color","iq.id","iq.subject","is.id","is.subject","mainStatus.name","mainStatus.color","mainStatus.icon","attached.id","attached.fileName","attached.filePath","wf.id","wfStaff.staffCode","wfStaff.firstName","wfStaff.lastName","wfStatus.name","wfStatus.icon","wfStatus.color"],joins:["priority","iq","is","mainStatus","attached","wf","wfStaff","wfStatus"],filters:n,getType:"MANY"}}}static getWorkflow(n){return{query:{fields:["main.id","main.taskId","main.assignedTo","creator.staffCode","creator.firstName","creator.lastName","status.name","status.icon","status.color"],joins:["creator","status"],filters:n,getType:"MANY"}}}}},6922:(v,f,e)=>{e.d(f,{r:()=>_});var s=e(1135),d=e(8505),n=e(4004),E=e(2340),u=e(8274),l=e(529);let _=(()=>{class m{constructor(r){this.http=r,this.apiUrl=`${E.N.apiUrl}/v1/assign-evaluations`,this.item=new s.X(null),this.item$=this.item.asObservable(),this.items=new s.X([]),this.items$=this.items.asObservable()}getOne(r){return this.http.post(`${this.apiUrl}/find`,r).pipe((0,d.b)(t=>{200===t?.statusCode&&t?.data&&this.item.next(t.data)}))}getMany(r){return this.http.post(`${this.apiUrl}/find`,r).pipe((0,d.b)(t=>{200===t?.statusCode&&t?.data&&this.items.next(t.data)}))}update(r,c){return this.http.patch(`${this.apiUrl}/head/${r}`,c).pipe((0,n.U)(i=>{if(200===i?.statusCode&&i?.data){const o=this.items.getValue().map(p=>p.id===r?{...p,...c}:p);return this.items.next(o),!0}return!1}))}updateAndRemove(r,c){return this.http.patch(`${this.apiUrl}/head/${r}`,c).pipe((0,d.b)(i=>{200===i?.statusCode&&this.removeItemFromList(r)}))}removeItemFromList(r){const t=this.items.getValue().filter(i=>i?.id!==r);this.items.next(t)}}return m.\u0275fac=function(r){return new(r||m)(u.LFG(l.eN))},m.\u0275prov=u.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},9506:(v,f,e)=>{e.d(f,{_:()=>m});var s=e(1135),d=e(4004),n=e(8505),E=e(2340),u=e(8274),l=e(529),_=e(6514);let m=(()=>{class h{constructor(c,t){this.http=c,this.assignWfService=t,this.apiUrl=`${E.N.apiUrl}/v1/assign-evaluations`,this.item=new s.X({}),this.item$=this.item.asObservable(),this.items=new s.X([]),this.items$=this.items.asObservable()}create(c){return this.http.post(this.apiUrl,c).pipe((0,d.U)(t=>{if(201===t.statusCode&&t.data)return this.assignWfService.updateItems(t.data),t.data}))}getOne(c){return this.http.post(`${this.apiUrl}/find`,c).pipe((0,n.b)(i=>{200===i?.statusCode&&i?.data&&this.item.next(i.data)}))}getOneAndReplace(c){return this.http.post(`${this.apiUrl}/find`,c).pipe((0,n.b)(i=>{if(200===i?.statusCode&&i?.data){const a=i.data,o=this.items.getValue();if(-1!==o.findIndex(M=>M.id===a.id)){const M=o.map(g=>g.id===a.id?{...g,...a}:g);this.items.next([...M])}}}))}getMany(c){return this.http.post(`${this.apiUrl}/find`,c).pipe((0,n.b)(i=>{200===i?.statusCode&&i?.data&&this.items.next(i.data)}))}update(c,t){return this.http.patch(`${this.apiUrl}/${c}`,t).pipe((0,n.b)(a=>200===a?.statusCode))}deleteOne(c){return this.http.delete(`${this.apiUrl}/${c}`).pipe((0,d.U)(i=>200===i?.statusCode),(0,n.b)(i=>{i&&this.removeItemFromList(c)}))}removeItemFromList(c){const i=this.items.getValue().filter(a=>a?.id!==c);this.items.next(i)}}return h.\u0275fac=function(c){return new(c||h)(u.LFG(l.eN),u.LFG(_.y))},h.\u0275prov=u.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},2392:(v,f,e)=>{e.d(f,{G:()=>h});var s=e(1135),d=e(4004),n=e(8505),E=e(2843),u=e(2340),l=e(6819),_=e(8274),m=e(529);let h=(()=>{class r{constructor(t){this.http=t,this.apiUrl=`${u.N.apiUrl}/v1/task-assign-main`,this.item=new s.X(null),this.item$=this.item.asObservable(),this.items=new s.X([]),this.items$=this.items.asObservable()}create(t){return this.http.post(this.apiUrl,t).pipe((0,d.U)(i=>{if(201===i?.statusCode&&i?.data)return i?.data}))}getOne(t){return this.http.post(`${this.apiUrl}/find`,t).pipe((0,d.U)(a=>{if(200===a.statusCode&&a.data)return this.item.next(a.data),a.data}))}getOneAndPushNew(t){return this.http.post(`${this.apiUrl}/find`,t).pipe((0,n.b)(a=>{if(200===a?.statusCode&&a?.data){const g=[...this.items.getValue(),a.data].sort((O,S)=>S.id-O.id);this.items.next(g)}}))}getOneAndReplace(t){return this.http.post(`${this.apiUrl}/find`,t).pipe((0,n.b)(a=>{if(200===a?.statusCode&&a?.data){const o=a.data,p=this.items.getValue();if(-1!==p.findIndex(g=>g.id===o.id)){const g=p.map(O=>O.id===o.id?{...O,...o}:O);this.items.next([...g])}}}))}getMany(t){return this.http.post(`${this.apiUrl}/find`,t).pipe((0,n.b)(a=>{200===a?.statusCode&&a?.data&&this.items.next(a.data)}))}getAll(t,i){return this.http.get(`${this.apiUrl}/${t}`,{params:i}).pipe((0,n.b)(o=>{200===o?.statusCode&&o?.data&&this.items.next(o.data)}))}getTaskDetail(t){if(!t)return(0,E._)(()=>new Error("Task ID is required"));const a=l.M.getDetail({id:t});return this.getOne(a)}update(t,i){return this.http.patch(`${this.apiUrl}/${t}`,i).pipe((0,d.U)(o=>!(200!==o?.statusCode||!o?.data)))}updateWorkflow(t,i){const a=this.items.getValue(),o=a.findIndex(p=>p.id===t);if(-1!==o){const p={...a[o]};p.taskAssignWf=i,p.taskAssignWf.sort((M,g)=>(g?.staff?.id??0)-(M?.staff?.id??0)),a[o]=p,a.sort((M,g)=>(g.id??0)-(M.id??0)),this.items.next([...a])}}deleteOne(t){return this.http.delete(`${this.apiUrl}/${t}`).pipe((0,d.U)(a=>200===a?.statusCode),(0,n.b)(a=>{a&&this.removeItemFromList(t)}))}removeItemFromList(t){const a=this.items.getValue().filter(o=>o?.id!==t);this.items.next(a)}}return r.\u0275fac=function(t){return new(t||r)(_.LFG(m.eN))},r.\u0275prov=_.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},7960:(v,f,e)=>{e.d(f,{P:()=>c});var s=e(6527),d=e(6819),n=e(875),E=e(6522),u=e(8274),l=e(8386),_=e(6514),m=e(2392),h=e(9506),r=e(6922);let c=(()=>{class t{constructor(a,o,p,M,g){this.userService=a,this.wfService=o,this.taskAssignService=p,this.selfEvalService=M,this.headEvalService=g}createFilter(a,o){const p=this.userService.getLoggedUser()?.profile?.staffCode;return{docYear:a,[o]:p}}getTaskIn(a){const o=this.createFilter(a,"assignedTo"),p=s.o.getMany(o);return this.wfService.getMany(p)}getTaskOut(a){const o=this.createFilter(a,"createdBy"),p=d.M.getMany(o);return this.taskAssignService.getMany(p)}getTaskReport(a){const o=this.createFilter(a,"selfCode"),p=n.K.getMany(o);return this.selfEvalService.getMany(p)}getTaskEval(a){const o=this.createFilter(a,"headActionBy"),p=E._.getMany(o);return this.headEvalService.getMany(p)}}return t.\u0275fac=function(a){return new(a||t)(u.LFG(l.K),u.LFG(_.y),u.LFG(m.G),u.LFG(h._),u.LFG(r.r))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},6514:(v,f,e)=>{e.d(f,{y:()=>h});var s=e(4004),d=e(8505),n=e(1135),E=e(2340),u=e(6819),l=e(8274),_=e(529),m=e(2392);let h=(()=>{class r{constructor(t,i){this.http=t,this.taskAssignService=i,this.apiUrl=`${E.N.apiUrl}/v1/task-assign-wf`,this.item=new n.X({}),this.item$=this.item.asObservable(),this.items=new n.X([]),this.items$=this.items.asObservable()}create(t){return this.http.post(this.apiUrl,t).pipe((0,s.U)(i=>!(201!==i?.statusCode||!i?.data)))}getOne(t){return this.http.post(`${this.apiUrl}/find`,t).pipe((0,d.b)(a=>{200===a?.statusCode&&a?.data&&this.item.next(a.data)}))}getMany(t){return this.http.post(`${this.apiUrl}/find`,t).pipe((0,s.U)(a=>{if(200===a?.statusCode&&a?.data)return this.items.next(a.data),a.data}))}getWorkflow(t){if(t){const i=Object.assign({taskId:t}),a=u.M.getWorkflow(i);this.getMany(a).subscribe({next:o=>{o&&o.length&&this.taskAssignService.updateWorkflow(t,o)}})}}pickup(t,i){return this.http.patch(`${this.apiUrl}/pickup`,i,{params:t}).pipe((0,d.b)(o=>{200===o?.statusCode&&o?.data&&this.updateItems(o.data)}))}forwardWf(t){return this.http.post(`${this.apiUrl}/forward`,t).pipe((0,d.b)(a=>{201===a?.statusCode&&a?.data&&this.updateItems(a.data)}))}deleteMany(t){return this.http.delete(`${this.apiUrl}/${t}`).pipe((0,s.U)(a=>200===a?.statusCode))}updateItems(t){const a=this.items.getValue().map(o=>o?.id===t.id?{...o,status:t.status}:o);this.items.next(a)}}return r.\u0275fac=function(t){return new(t||r)(l.LFG(_.eN),l.LFG(m.G))},r.\u0275prov=l.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},6527:(v,f,e)=>{e.d(f,{o:()=>s});class s{static getDetail(n){return{query:{fields:["main.id","main.docYear","main.taskId","main.createdAt","main.pickupAt","main.remark","staff.firstName","staff.lastName","status.id","status.name","status.icon","status.color","task.id","task.taskSubject","task.indicatorTime","task.indicatorQuantity","task.description","creator.firstName","creator.lastName","priority.id","priority.name","priority.color","iq.id","iq.subject","is.id","is.subject","attached.fileName","attached.filePath"],joins:["staff","status","task","creator","priority","iq","is","attached"],filters:n,getType:"ONE"}}}static getMany(n){return{query:{fields:["main.id","main.docYear","main.taskId","main.createdAt","main.pickupAt","status.id","status.name","status.icon","status.color","task.id","task.taskSubject","task.indicatorTime","task.indicatorQuantity","creator.staffCode","creator.firstName","creator.lastName","priority.id","priority.name","priority.color","priority.score","iq.id","iq.subject","is.id","is.subject"],joins:["status","task","creator","priority","iq","is"],filters:n,getType:"MANY"}}}}},2448:(v,f,e)=>{e.d(f,{q:()=>u});var s=e(6895),d=e(5593),n=e(3930),E=e(8274);let u=(()=>{class l{}return l.\u0275fac=function(m){return new(m||l)},l.\u0275mod=E.oAB({type:l}),l.\u0275inj=E.cJS({imports:[s.ez,d.hJ,n.g3]}),l})()}}]);