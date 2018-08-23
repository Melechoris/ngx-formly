(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"+UWV":function(n,a){n.exports='<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>form</span> <span class="token attr-name" >[formGroup]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span> <span class="token attr-name" >(ngSubmit)</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit()<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>formly-form</span> <span class="token attr-name" >[model]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>model<span class="token punctuation" >"</span></span> <span class="token attr-name" >[fields]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>fields<span class="token punctuation" >"</span></span> <span class="token attr-name" >[options]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>options<span class="token punctuation" >"</span></span> <span class="token attr-name" >[form]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>form<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>submit<span class="token punctuation" >"</span></span> <span class="token attr-name" >class</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>btn btn-primary submit-button<span class="token punctuation" >"</span></span> <span class="token attr-name" >[disabled]</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>!form.valid<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Submit<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>formly-form</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>form</span><span class="token punctuation" >></span></span>\n'},D0pb:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormGroup <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyFormOptions<span class="token punctuation" >,</span> FormlyFieldConfig <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-app-example\'</span><span class="token punctuation" >,</span>\n  templateUrl<span class="token punctuation" >:</span> <span class="token string" >\'./app.component.html\'</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppComponent</span> <span class="token punctuation" >{</span>\n  form <span class="token operator" >=</span> <span class="token keyword" >new</span> <span class="token class-name" >FormGroup</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  model<span class="token punctuation" >:</span> <span class="token keyword" >any</span> <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  options<span class="token punctuation" >:</span> FormlyFormOptions <span class="token operator" >=</span> <span class="token punctuation" >{</span><span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n\n  fields<span class="token punctuation" >:</span> FormlyFieldConfig<span class="token punctuation" >[</span><span class="token punctuation" >]</span> <span class="token operator" >=</span> <span class="token punctuation" >[</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'form-field-horizontal\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Email\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'email\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Formly is terrific!\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >{</span>\n      key<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n      type<span class="token punctuation" >:</span> <span class="token string" >\'input\'</span><span class="token punctuation" >,</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token string" >\'form-field-horizontal\'</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      templateOptions<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n        label<span class="token punctuation" >:</span> <span class="token string" >\'Password\'</span><span class="token punctuation" >,</span>\n        type<span class="token punctuation" >:</span> <span class="token string" >\'password\'</span><span class="token punctuation" >,</span>\n        placeholder<span class="token punctuation" >:</span> <span class="token string" >\'Formly is terrific!\'</span><span class="token punctuation" >,</span>\n        required<span class="token punctuation" >:</span> <span class="token keyword" >true</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >;</span>\n\n  <span class="token function" >submit</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span>JSON<span class="token punctuation" >.</span><span class="token function" >stringify</span><span class="token punctuation" >(</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>model<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span>\n'},N4Ox:function(n,a){n.exports='import { Component, ViewChild, ViewContainerRef } from \'@angular/core\';\nimport { FieldWrapper } from \'@ngx-formly/core\';\n\n@Component({\n  selector: \'formly-horizontal-wrapper\',\n  template: `\n    <div class="form-group row">\n      <label [attr.for]="id" class="col-sm-2 col-form-label" *ngIf="to.label">\n        {{ to.label }}\n        <ng-container *ngIf="to.required && to.hideRequiredMarker !== true">*</ng-container>\n      </label>\n      <div class="col-sm-10">\n        <ng-template #fieldComponent></ng-template>\n      </div>\n    </div>\n  `,\n})\nexport class FormlyHorizontalWrapper extends FieldWrapper {\n  @ViewChild(\'fieldComponent\', { read: ViewContainerRef }) fieldComponent: ViewContainerRef;\n}\n'},W2xB:function(n,a){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\nimport { FormlyHorizontalWrapper } from './horizontal-wrapper';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot({\n      wrappers: [{ name: 'form-field-horizontal', component: FormlyHorizontalWrapper }],\n      validationMessages: [\n        { name: 'required', message: 'This field is required' },\n      ],\n    }),\n  ],\n  declarations: [\n    AppComponent,\n    FormlyHorizontalWrapper,\n  ],\n})\nexport class AppModule { }\n"},X22e:function(n,a){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {};\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'email',\n      type: 'input',\n      wrappers: ['form-field-horizontal'],\n      templateOptions: {\n        label: 'Email',\n        type: 'email',\n        placeholder: 'Formly is terrific!',\n        required: true,\n      },\n    },\n    {\n      key: 'password',\n      type: 'input',\n      wrappers: ['form-field-horizontal'],\n      templateOptions: {\n        label: 'Password',\n        type: 'password',\n        placeholder: 'Formly is terrific!',\n        required: true,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},iFNl:function(n,a,s){"use strict";s.r(a);var t=s("CcnG"),p=s("gIcY"),o=function(){function n(){this.form=new p.FormGroup({}),this.model={},this.options={},this.fields=[{key:"email",type:"input",wrappers:["form-field-horizontal"],templateOptions:{label:"Email",type:"email",placeholder:"Formly is terrific!",required:!0}},{key:"password",type:"input",wrappers:["form-field-horizontal"],templateOptions:{label:"Password",type:"password",placeholder:"Formly is terrific!",required:!0}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),e={examples:[{title:"Bootstrap Horizontal",description:"",component:o,files:[{file:"app.component.html",content:s("+UWV"),filecontent:s("sHRc")},{file:"app.component.ts",content:s("D0pb"),filecontent:s("X22e")},{file:"app.module.ts",content:s("iHR9"),filecontent:s("W2xB")},{file:"horizontal-wrapper.ts",content:s("x2pY"),filecontent:s("N4Ox")}]}]},l=function(){},c=s("NcP4"),u=s("goW2"),r=s("MT1c"),i=s("1Q/V"),m=s("9+aI"),k=s("haId"),d=s("LJsP"),f=s("yR2A"),g=s("grA4"),y=s("UFMs"),b=s("Ip0R"),w=s("mrSG"),v=function(n){function a(){return null!==n&&n.apply(this,arguments)||this}return Object(w.__extends)(a,n),a}(s("HkYz").c),F=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function C(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["*"]))],null,null)}function h(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"label",[["class","col-sm-2 col-form-label"]],[[1,"for",0]],null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "])),(n()(),t["\u0275and"](16777216,null,null,1,null,C)),t["\u0275did"](3,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,a){var s=a.component;n(a,3,0,s.to.required&&!0!==s.to.hideRequiredMarker)},function(n,a){var s=a.component;n(a,0,0,s.id),n(a,1,0,s.to.label)})}function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275and"](0,null,null,0))],null,null)}function M(n){return t["\u0275vid"](0,[t["\u0275qud"](402653184,1,{fieldComponent:0}),(n()(),t["\u0275eld"](1,0,null,null,4,"div",[["class","form-group row"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,h)),t["\u0275did"](3,16384,null,0,b.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,null,1,"div",[["class","col-sm-10"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,[[1,3],["fieldComponent",2]],null,0,null,x))],function(n,a){n(a,3,0,a.component.to.label)},null)}var R=t["\u0275ccf"]("formly-horizontal-wrapper",v,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-horizontal-wrapper",[],null,null,null,M,F)),t["\u0275did"](1,49152,null,0,v,[],null,null)],null,null)},{form:"form",field:"field",options:"options",model:"model"},{},[]),z=s("pMnS"),O=s("4o01"),_=s("Dl9q"),q=s("9Glx"),N=s("UcnZ"),W=s("DAbo"),I=t["\u0275crt"]({encapsulation:2,styles:[],data:{}});function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,a,s){var p=!0,o=n.component;return"submit"===a&&(p=!1!==t["\u0275nov"](n,2).onSubmit(s)&&p),"reset"===a&&(p=!1!==t["\u0275nov"](n,2).onReset()&&p),"ngSubmit"===a&&(p=!1!==o.submit()&&p),p},null,null)),t["\u0275did"](1,16384,null,0,p["\u0275angular_packages_forms_forms_bg"],[],null,null),t["\u0275did"](2,540672,null,0,p.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t["\u0275prd"](2048,null,p.ControlContainer,null,[p.FormGroupDirective]),t["\u0275did"](4,16384,null,0,p.NgControlStatusGroup,[[4,p.ControlContainer]],null,null),(n()(),t["\u0275eld"](5,0,null,null,3,"formly-form",[],null,null,null,_.b,_.a)),t["\u0275did"](6,966656,null,0,q.a,[N.a,W.b,[2,p.NgForm],[2,p.FormGroupDirective],[3,q.a]],{model:[0,"model"],form:[1,"form"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),t["\u0275eld"](7,0,null,0,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Submit"]))],function(n,a){var s=a.component;n(a,2,0,s.form),n(a,6,0,s.model,s.form,s.fields,s.options)},function(n,a){var s=a.component;n(a,0,0,t["\u0275nov"](a,4).ngClassUntouched,t["\u0275nov"](a,4).ngClassTouched,t["\u0275nov"](a,4).ngClassPristine,t["\u0275nov"](a,4).ngClassDirty,t["\u0275nov"](a,4).ngClassValid,t["\u0275nov"](a,4).ngClassInvalid,t["\u0275nov"](a,4).ngClassPending),n(a,7,0,!s.form.valid)})}var G=t["\u0275ccf"]("formly-app-example",o,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,S,I)),t["\u0275did"](1,49152,null,0,o,[],null,null)],null,null)},{},{},[]),V=s("M2Lx"),A=s("eDkP"),H=s("Fzqc"),D=s("v9Dh"),L=s("6LlJ"),B=s("F6kA"),P=s("dWZg"),U=s("lLAP"),T=s("4c35"),J=s("qAlS"),Y=s("Wf4p"),E=s("La40"),Q=s("SMsm"),Z=s("UodH"),j=s("5QwG"),X=s("XR12"),K=s("me7w"),$=s("N3PW"),nn=s("l4pn"),an=s("Fv2i"),sn=s("wBYW"),tn=s("IE48"),pn=s("zn1Q"),on=s("Q4Tx"),en=s("zdmU"),ln=s("Nsh5"),cn=s("8mMr"),un=s("LC5p"),rn=s("0/Q6"),mn=s("mqvi"),kn=s("lYui"),dn=s("1ey0"),fn=function(){},gn=s("ZYCi"),yn=s("cIcG");s.d(a,"ConfigModuleNgFactory",function(){return bn});var bn=t["\u0275cmf"](l,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[c.a,u.a,r.a,i.a,m.a,k.a,d.a,f.a,g.a,y.a,R,z.a,O.a,G]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,b.NgLocalization,b.NgLocaleLocalization,[t.LOCALE_ID,[2,b["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,V.c,V.c,[]),t["\u0275mpd"](4608,A.c,A.c,[A.i,A.e,t.ComponentFactoryResolver,A.h,A.f,t.Injector,t.NgZone,b.DOCUMENT,H.b]),t["\u0275mpd"](5120,A.j,A.k,[A.c]),t["\u0275mpd"](5120,D.b,D.c,[A.c]),t["\u0275mpd"](4608,L.a,L.a,[]),t["\u0275mpd"](4608,B.a,B.a,[]),t["\u0275mpd"](4608,p.FormBuilder,p.FormBuilder,[]),t["\u0275mpd"](4608,p["\u0275angular_packages_forms_forms_i"],p["\u0275angular_packages_forms_forms_i"],[]),t["\u0275mpd"](4608,N.a,N.a,[W.b]),t["\u0275mpd"](1073742336,b.CommonModule,b.CommonModule,[]),t["\u0275mpd"](1073742336,P.b,P.b,[]),t["\u0275mpd"](1073742336,V.d,V.d,[]),t["\u0275mpd"](1073742336,U.a,U.a,[]),t["\u0275mpd"](1073742336,H.a,H.a,[]),t["\u0275mpd"](1073742336,T.g,T.g,[]),t["\u0275mpd"](1073742336,J.b,J.b,[]),t["\u0275mpd"](1073742336,A.g,A.g,[]),t["\u0275mpd"](1073742336,Y.l,Y.l,[[2,Y.d]]),t["\u0275mpd"](1073742336,D.e,D.e,[]),t["\u0275mpd"](1073742336,Y.w,Y.w,[]),t["\u0275mpd"](1073742336,E.i,E.i,[]),t["\u0275mpd"](1073742336,Q.b,Q.b,[]),t["\u0275mpd"](1073742336,Z.c,Z.c,[]),t["\u0275mpd"](1073742336,j.b,j.b,[]),t["\u0275mpd"](512,W.b,W.b,[]),t["\u0275mpd"](1024,W.a,function(){return[X.b(),{types:[{name:"input",component:K.a,wrappers:["form-field"]},{name:"checkbox",component:$.a,wrappers:["form-field"],defaultOptions:{templateOptions:{indeterminate:!0,hideLabel:!0}}},{name:"radio",component:nn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"select",component:an.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}},{name:"textarea",component:sn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{cols:1,rows:1}}},{name:"multicheckbox",component:tn.a,wrappers:["form-field"],defaultOptions:{templateOptions:{options:[]}}}],wrappers:[{name:"addons",component:pn.a},{name:"form-field",component:on.a}],manipulators:[{class:en.a,method:"run"}]},X.b(),{wrappers:[{name:"form-field-horizontal",component:v}],validationMessages:[{name:"required",message:"This field is required"}]}]},[]),t["\u0275mpd"](1073742336,X.a,X.a,[W.b,t.ComponentFactoryResolver,[2,W.a]]),t["\u0275mpd"](1073742336,ln.h,ln.h,[]),t["\u0275mpd"](1073742336,cn.b,cn.b,[]),t["\u0275mpd"](1073742336,Y.m,Y.m,[]),t["\u0275mpd"](1073742336,Y.u,Y.u,[]),t["\u0275mpd"](1073742336,un.b,un.b,[]),t["\u0275mpd"](1073742336,rn.c,rn.c,[]),t["\u0275mpd"](1073742336,mn.a,mn.a,[]),t["\u0275mpd"](1073742336,p["\u0275angular_packages_forms_forms_bb"],p["\u0275angular_packages_forms_forms_bb"],[]),t["\u0275mpd"](1073742336,p.ReactiveFormsModule,p.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,kn.a,kn.a,[]),t["\u0275mpd"](1073742336,dn.a,dn.a,[]),t["\u0275mpd"](1073742336,fn,fn,[]),t["\u0275mpd"](1073742336,gn.s,gn.s,[[2,gn.y],[2,gn.p]]),t["\u0275mpd"](1073742336,l,l,[]),t["\u0275mpd"](1024,gn.n,function(){return[[{path:"",component:yn.a,data:e}]]},[])])})},iHR9:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NgModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> CommonModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/common\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> ReactiveFormsModule <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/forms\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyBootstrapModule <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/bootstrap\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> AppComponent <span class="token punctuation" >}</span> from <span class="token string" >\'./app.component\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FormlyHorizontalWrapper <span class="token punctuation" >}</span> from <span class="token string" >\'./horizontal-wrapper\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >NgModule</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  imports<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    CommonModule<span class="token punctuation" >,</span>\n    ReactiveFormsModule<span class="token punctuation" >,</span>\n    FormlyBootstrapModule<span class="token punctuation" >,</span>\n    FormlyModule<span class="token punctuation" >.</span><span class="token function" >forRoot</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n      wrappers<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'form-field-horizontal\'</span><span class="token punctuation" >,</span> component<span class="token punctuation" >:</span> FormlyHorizontalWrapper <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n      validationMessages<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n        <span class="token punctuation" >{</span> name<span class="token punctuation" >:</span> <span class="token string" >\'required\'</span><span class="token punctuation" >,</span> message<span class="token punctuation" >:</span> <span class="token string" >\'This field is required\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  declarations<span class="token punctuation" >:</span> <span class="token punctuation" >[</span>\n    AppComponent<span class="token punctuation" >,</span>\n    FormlyHorizontalWrapper<span class="token punctuation" >,</span>\n  <span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >AppModule</span> <span class="token punctuation" >{</span> <span class="token punctuation" >}</span>\n'},sHRc:function(n,a){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form">\n    <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n  </formly-form>\n</form>\n'},x2pY:function(n,a){n.exports='<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Component<span class="token punctuation" >,</span> ViewChild<span class="token punctuation" >,</span> ViewContainerRef <span class="token punctuation" >}</span> from <span class="token string" >\'@angular/core\'</span><span class="token punctuation" >;</span>\n<span class="token keyword" >import</span> <span class="token punctuation" >{</span> FieldWrapper <span class="token punctuation" >}</span> from <span class="token string" >\'@ngx-formly/core\'</span><span class="token punctuation" >;</span>\n\n@<span class="token function" >Component</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  selector<span class="token punctuation" >:</span> <span class="token string" >\'formly-horizontal-wrapper\'</span><span class="token punctuation" >,</span>\n  template<span class="token punctuation" >:</span> `\n    <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"form-group row"</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>label <span class="token punctuation" >[</span>attr<span class="token punctuation" >.</span><span class="token keyword" >for</span><span class="token punctuation" >]</span><span class="token operator" >=</span><span class="token string" >"id"</span> <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-2 col-form-label"</span> <span class="token operator" >*</span>ngIf<span class="token operator" >=</span><span class="token string" >"to.label"</span><span class="token operator" >></span>\n        <span class="token punctuation" >{</span><span class="token punctuation" >{</span> to<span class="token punctuation" >.</span>label <span class="token punctuation" >}</span><span class="token punctuation" >}</span>\n        <span class="token operator" >&lt;</span>ng<span class="token operator" >-</span>container <span class="token operator" >*</span>ngIf<span class="token operator" >=</span><span class="token string" >"to.required &amp;&amp; to.hideRequiredMarker !== true"</span><span class="token operator" >></span><span class="token operator" >*</span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ng<span class="token operator" >-</span>container<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>label<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div <span class="token keyword" >class</span><span class="token operator" >=</span><span class="token string" >"col-sm-10"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>ng<span class="token operator" >-</span>template #fieldComponent<span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>ng<span class="token operator" >-</span>template<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n  `<span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>\n<span class="token keyword" >export</span> <span class="token keyword" >class</span> <span class="token class-name" >FormlyHorizontalWrapper</span> <span class="token keyword" >extends</span> <span class="token class-name" >FieldWrapper</span> <span class="token punctuation" >{</span>\n  @<span class="token function" >ViewChild</span><span class="token punctuation" >(</span><span class="token string" >\'fieldComponent\'</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span> read<span class="token punctuation" >:</span> ViewContainerRef <span class="token punctuation" >}</span><span class="token punctuation" >)</span> fieldComponent<span class="token punctuation" >:</span> ViewContainerRef<span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>\n'}}]);