"use strict";(self.webpackChunkavalon_ng=self.webpackChunkavalon_ng||[]).push([[6479],{6479:(T,y,o)=>{o.r(y),o.d(y,{SignInModule:()=>D});var g=o(6895),t=o(5675),d=o(2156),f=o(5116),C=o(655);class b{}(0,C.gn)([(0,d.C1)(),(0,d.Ei)({value:4}),(0,d.uR)({allowDecimal:!1,isFormat:!1})],b.prototype,"username",void 0),(0,C.gn)([(0,d.C1)(),(0,d.Ei)({value:6})],b.prototype,"password",void 0),(0,C.gn)([(0,d.vg)({defaultValue:!1})],b.prototype,"rememberMe",void 0);var M=o(2340),v=o(5841),e=o(8274),A=o(263),k=o(841),B=o(6616),l=o(704),c=o(8386),s=o(1924),n=o(4325),u=o(433),h=o(1740),m=o(1989),x=o(5593),S=o(2453);const Z=function(a){return{"ng-invalid ng-dirty":a}},I=[{path:"",component:(()=>{class a{constructor(r,i,p,G,O,R,N,F,L,Q){this.fb=r,this.authService=i,this.formService=p,this.tokenService=G,this.alertService=O,this.userService=R,this.storage=N,this.router=F,this.dialogRef=L,this.dialogService=Q,this.submitted=!1,this.passwordVisible=!1,d.jc.set(this.formService.validationMessages),this.baseUrl=M.N.baseUrl,this.appNameLa=v.m.NAME_LA,this.appNameEn=v.m.NAME_EN,this.appVersion=v.m.VERSION,this.appDevelopBy=v.m.DEVELOP_BY}get controls(){return this.formGroup.controls}ngOnInit(){const r=new b;this.formGroup=this.fb.formGroup(r);const i=this.storage.retrieve(f.Q.REMEMBER);i&&this.formGroup.patchValue({username:i,rememberMe:!0})}togglePassword(){this.passwordVisible=!this.passwordVisible}signIn(){if(this.submitted=!0,this.formGroup.invalid)return;const r=this.formGroup.value;this.formGroup.disable(),this.authService.signIn(r).subscribe({next:i=>{const p=i?.accessToken;p&&(this.tokenService.setToken(p),r.rememberMe?this.storage.store(f.Q.REMEMBER,r.username):this.storage.clear(f.Q.REMEMBER),setTimeout(()=>{this.getProfile()},1e3))},error:i=>{this.formGroup.enable();const p=i.error?.message;this.alertService.unauthorized(p)}})}getProfile(){this.userService.getProfile().subscribe({next:r=>{if(r){const i=r?.role?.id;if(i){const p=r?.group?.code?.toUpperCase();this.userService.setLoggedUser(r),this.userService.setUserGroup(p),this.userService.setUserRole(i),this.router.navigate(["/"])}else this.formGroup.enable(),this.alertService.unauthorized("\u0e9a\u0eb1\u0e99\u0e8a\u0eb5\u0e82\u0ead\u0e87\u0e97\u0ec8\u0eb2\u0e99\u0e8d\u0eb1\u0e87\u0e9a\u0ecd\u0ec8\u0ec4\u0e94\u0ec9\u0e81\u0eb3\u0e99\u0ebb\u0e94\u0eaa\u0eb4\u0e94\u0e81\u0eb2\u0e99\u0e99\u0eb3\u0ec3\u0e8a\u0ec9!")}},error:r=>{const i=r.error?.message;this.alertService.unauthorized(i)}})}}return a.\u0275fac=function(r){return new(r||a)(e.Y36(d.GW),e.Y36(A.e),e.Y36(k.k),e.Y36(B.B),e.Y36(l.c),e.Y36(c.K),e.Y36(s.n2),e.Y36(t.F0),e.Y36(n.E7),e.Y36(n.xA))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-sign-in"]],decls:38,vars:15,consts:[[1,"h-screen","bg-auth-page","flex","flex-column","justify-content-center","align-content-center","align-items-center"],["src","assets/images/svg/survey-main-banner.svg","alt","",1,"w-4","mr-auto","ml-5"],[1,"absolute"],[1,"card","card-login","p-4","shadow-2","w-26rem","md:w-28rem","border-round-xl"],[1,"flex","justify-content-center"],["src","assets/images/kpi-03.svg","alt","",1,"w-18rem"],[1,"mt-4"],[1,"flex","flex-column","mb-5","text-center"],[1,"text-2xl","font-bold"],[1,"text-xl","font-bold"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"p-fluid"],[1,"p-inputgroup","mb-4"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["type","text","id","username","pInputText","","placeholder","\u0ec4\u0ead\u0e94\u0eb5\u0e9e\u0eb0\u0e99\u0eb1\u0e81\u0e87\u0eb2\u0e99 \u0e9f\u0e9f\u0ea5","formControlName","username",3,"ngClass"],[1,"p-inputgroup","cursor-pointer"],[1,"p-inputgroup-addon",3,"click"],[1,"pi",3,"ngClass"],["placeholder","\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99","id","password","pInputText","","formControlName","password",3,"type","ngClass"],[1,"flex","align-items-center","align-content-center","justify-content-between","mt-5"],["inputId","binary","formControlName","rememberMe",3,"binary"],["for","binary",1,"ml-2","text-sm"],[1,"text-indigo-500","text-sm"],[1,"my-4","text-center"],["pButton","","pRipple","","type","submit","label","\u0ec0\u0e82\u0ebb\u0ec9\u0eb2\u0eaa\u0eb9\u0ec8\u0ea5\u0eb0\u0e9a\u0ebb\u0e9a",1,"p-button-lg","p-button-rounded",3,"loading","disabled"],[1,"text-center","text-white","-mt-4"],[1,"font-semibold"],["styleClass","px-50"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"div",6)(7,"div",7)(8,"span",8),e._uU(9,"EDL"),e.qZA(),e.TgZ(10,"span",9),e._uU(11),e.qZA(),e.TgZ(12,"span",9),e._uU(13),e.qZA()(),e.TgZ(14,"form",10),e.NdJ("ngSubmit",function(){return i.signIn()}),e.TgZ(15,"div",11)(16,"div",12)(17,"span",13),e._UZ(18,"i",14),e.qZA(),e._UZ(19,"input",15),e.qZA(),e.TgZ(20,"div",16)(21,"span",17),e.NdJ("click",function(){return i.togglePassword()}),e._UZ(22,"span",18),e.qZA(),e._UZ(23,"input",19),e.qZA(),e.TgZ(24,"div",20)(25,"div"),e._UZ(26,"p-checkbox",21),e.TgZ(27,"label",22),e._uU(28,"\u0e88\u0eb3\u0ec4\u0ead\u0e94\u0eb5\u0ec4\u0ea7\u0ec9"),e.qZA()(),e.TgZ(29,"div")(30,"a",23),e._uU(31,"\u0ea5\u0eb7\u0ea1\u0ea5\u0eb0\u0eab\u0eb1\u0e94\u0e9c\u0ec8\u0eb2\u0e99?"),e.qZA()()(),e.TgZ(32,"div",24),e._UZ(33,"button",25),e.qZA()()()()(),e.TgZ(34,"div",26)(35,"span",27),e._uU(36),e.qZA()()()(),e._UZ(37,"p-toast",28)),2&r&&(e.xp6(11),e.Oqu(i.appNameEn),e.xp6(2),e.Oqu(i.appNameLa),e.xp6(1),e.Q6J("formGroup",i.formGroup),e.xp6(5),e.Q6J("ngClass",e.VKq(11,Z,i.submitted&&i.controls.username.errors)),e.xp6(3),e.Q6J("ngClass",i.passwordVisible?"pi-eye-slash":"pi-key"),e.xp6(1),e.Q6J("type",i.passwordVisible?"text":"password")("ngClass",e.VKq(13,Z,i.submitted&&i.controls.password.errors)),e.xp6(3),e.Q6J("binary",!0),e.xp6(7),e.Q6J("loading",i.formGroup.disabled)("disabled",i.formGroup.disabled),e.xp6(3),e.hij("v",i.appVersion,""))},dependencies:[g.mk,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,d.bc,d.VP,d.YE,h.o,m.XZ,x.Hq,S.FN],encapsulation:2}),a})()}];let U=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[t.Bz.forChild(I),t.Bz]}),a})();var V=o(4466),J=o(3425);let D=(()=>{class a{}return a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({providers:[n.E7,n.xA],imports:[g.ez,U,V.m,h.j,m.nD,x.hJ,J.gz,S.EV]}),a})()},1989:(T,y,o)=>{o.d(y,{XZ:()=>k,nD:()=>B});var g=o(6895),t=o(8274),d=o(433),f=o(982);const C=["cb"],b=function(l,c,s){return{"p-checkbox-label":!0,"p-checkbox-label-active":l,"p-disabled":c,"p-checkbox-label-focus":s}};function M(l,c){if(1&l){const s=t.EpF();t.TgZ(0,"label",7),t.NdJ("click",function(u){t.CHM(s);const h=t.oxw(),m=t.MAs(3);return t.KtG(h.onClick(u,m,!0))}),t._uU(1),t.qZA()}if(2&l){const s=t.oxw();t.Tol(s.labelStyleClass),t.Q6J("ngClass",t.kEZ(5,b,s.checked(),s.disabled,s.focused)),t.uIk("for",s.inputId),t.xp6(1),t.Oqu(s.label)}}const v=function(l,c,s){return{"p-checkbox p-component":!0,"p-checkbox-checked":l,"p-checkbox-disabled":c,"p-checkbox-focused":s}},e=function(l,c,s){return{"p-highlight":l,"p-disabled":c,"p-focus":s}},A={provide:d.JU,useExisting:(0,t.Gpc)(()=>k),multi:!0};let k=(()=>{class l{constructor(s){this.cd=s,this.checkboxIcon="pi pi-check",this.trueValue=!0,this.falseValue=!1,this.onChange=new t.vpe,this.onModelChange=()=>{},this.onModelTouched=()=>{},this.focused=!1}onClick(s,n,u){s.preventDefault(),!this.disabled&&!this.readonly&&(this.updateModel(s),u&&n.focus())}updateModel(s){let n;this.binary?(n=this.checked()?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(n=this.checked()?this.model.filter(u=>!f.gb.equals(u,this.value)):this.model?[...this.model,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this.onChange.emit({checked:n,originalEvent:s})}handleChange(s){this.readonly||this.updateModel(s)}onFocus(){this.focused=!0}onBlur(){this.focused=!1,this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(s){this.model=s,this.cd.markForCheck()}registerOnChange(s){this.onModelChange=s}registerOnTouched(s){this.onModelTouched=s}setDisabledState(s){this.disabled=s,this.cd.markForCheck()}checked(){return this.binary?this.model===this.trueValue:f.gb.contains(this.value,this.model)}}return l.\u0275fac=function(s){return new(s||l)(t.Y36(t.sBO))},l.\u0275cmp=t.Xpm({type:l,selectors:[["p-checkbox"]],viewQuery:function(s,n){if(1&s&&t.Gf(C,5),2&s){let u;t.iGM(u=t.CRH())&&(n.inputViewChild=u.first)}},hostAttrs:[1,"p-element"],inputs:{value:"value",name:"name",disabled:"disabled",binary:"binary",label:"label",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:"tabindex",inputId:"inputId",style:"style",styleClass:"styleClass",labelStyleClass:"labelStyleClass",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:"readonly",required:"required",trueValue:"trueValue",falseValue:"falseValue"},outputs:{onChange:"onChange"},features:[t._Bn([A])],decls:7,vars:26,consts:[[3,"ngStyle","ngClass"],[1,"p-hidden-accessible"],["type","checkbox",3,"readonly","value","checked","disabled","focus","blur","change"],["cb",""],[1,"p-checkbox-box",3,"ngClass","click"],[1,"p-checkbox-icon",3,"ngClass"],[3,"class","ngClass","click",4,"ngIf"],[3,"ngClass","click"]],template:function(s,n){if(1&s){const u=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"input",2,3),t.NdJ("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("change",function(m){return n.handleChange(m)}),t.qZA()(),t.TgZ(4,"div",4),t.NdJ("click",function(m){t.CHM(u);const x=t.MAs(3);return t.KtG(n.onClick(m,x,!0))}),t._UZ(5,"span",5),t.qZA()(),t.YNc(6,M,2,9,"label",6)}2&s&&(t.Tol(n.styleClass),t.Q6J("ngStyle",n.style)("ngClass",t.kEZ(18,v,n.checked(),n.disabled,n.focused)),t.xp6(2),t.Q6J("readonly",n.readonly)("value",n.value)("checked",n.checked())("disabled",n.disabled),t.uIk("id",n.inputId)("name",n.name)("tabindex",n.tabindex)("aria-labelledby",n.ariaLabelledBy)("aria-label",n.ariaLabel)("aria-checked",n.checked())("required",n.required),t.xp6(2),t.Q6J("ngClass",t.kEZ(22,e,n.checked(),n.disabled,n.focused)),t.xp6(1),t.Q6J("ngClass",n.checked()?n.checkboxIcon:null),t.xp6(1),t.Q6J("ngIf",n.label))},dependencies:[g.mk,g.O5,g.PC],styles:[".p-checkbox{display:inline-flex;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:bottom;position:relative}.p-checkbox-disabled{cursor:default!important;pointer-events:none}.p-checkbox-box{display:flex;justify-content:center;align-items:center}p-checkbox{display:inline-flex;vertical-align:bottom;align-items:center}.p-checkbox-label{line-height:1}\n"],encapsulation:2,changeDetection:0}),l})(),B=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.ez]}),l})()}}]);