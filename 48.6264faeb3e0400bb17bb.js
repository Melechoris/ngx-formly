(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"+9/e":function(n,s){n.exports="import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { ReactiveFormsModule } from '@angular/forms';\nimport { FormlyModule } from '@ngx-formly/core';\nimport { FormlyBootstrapModule } from '@ngx-formly/bootstrap';\n\nimport { AppComponent } from './app.component';\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\nexport class AppModule { }\n"},"5Lgp":function(n,s){n.exports="import { Component } from '@angular/core';\nimport { FormGroup } from '@angular/forms';\nimport { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';\n\n@Component({\n  selector: 'formly-app-example',\n  templateUrl: './app.component.html',\n})\nexport class AppComponent {\n  form = new FormGroup({});\n  model: any = {};\n  options: FormlyFormOptions = {\n    formState: {\n      selectOptionsData: {\n        teams: [\n          { id: '1', name: 'Bayern Munich', sportId: '1' },\n          { id: '2', name: 'Real Madrid', sportId: '1' },\n          { id: '3', name: 'Cleveland', sportId: '2' },\n          { id: '4', name: 'Miami', sportId: '2' },\n        ],\n        players: [\n          { id: '1', name: 'Bayern Munich (Player 1)', teamId: '1' },\n          { id: '2', name: 'Bayern Munich (Player 2)', teamId: '1' },\n          { id: '3', name: 'Real Madrid (Player 1)', teamId: '2' },\n          { id: '4', name: 'Real Madrid (Player 2)', teamId: '2' },\n          { id: '5', name: 'Cleveland (Player 1)', teamId: '3' },\n          { id: '6', name: 'Cleveland (Player 2)', teamId: '3' },\n          { id: '7', name: 'Miami (Player 1)', teamId: '4' },\n          { id: '8', name: 'Miami (Player 2)', teamId: '4' },\n        ],\n      },\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: 'sport',\n      type: 'select',\n      templateOptions: {\n        label: 'Sport',\n        options: [\n          { id: '1', name: 'Soccer' },\n          { id: '2', name: 'Basketball' },\n        ],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n    },\n    {\n      key: 'team',\n      type: 'select',\n      templateOptions: {\n        label: 'Team',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      expressionProperties: {\n        'templateOptions.options': 'formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)',\n        // reset model when updating select options\n        'model.team': `this.field.templateOptions.options.find(o => o.id === model.team) ? model.team:null`,\n      },\n    },\n    {\n      key: 'player',\n      type: 'select',\n      templateOptions: {\n        label: 'Player',\n        options: [],\n        valueProp: 'id',\n        labelProp: 'name',\n      },\n      expressionProperties: {\n        'templateOptions.options': 'formState.selectOptionsData.players.filter(player => player.teamId === model.team)',\n        // reset model when updating select options\n        'model.player': `this.field.templateOptions.options.find(o => o.id === model.player) ? model.player:null`,\n      },\n    },\n  ];\n\n  submit() {\n    alert(JSON.stringify(this.model));\n  }\n}\n"},A0er:function(n,s){n.exports='<form [formGroup]="form" (ngSubmit)="submit()">\n  <formly-form [model]="model" [fields]="fields" [options]="options" [form]="form"></formly-form>\n  <button type="submit" class="btn btn-primary submit-button" [disabled]="!form.valid">Submit</button>\n</form>\n'},SZZ2:function(n,s,a){"use strict";a.r(s);var l=a("CcnG"),e=a("gIcY"),p=function(){function n(){this.form=new e.FormGroup({}),this.model={},this.options={formState:{selectOptionsData:{teams:[{id:"1",name:"Bayern Munich",sportId:"1"},{id:"2",name:"Real Madrid",sportId:"1"},{id:"3",name:"Cleveland",sportId:"2"},{id:"4",name:"Miami",sportId:"2"}],players:[{id:"1",name:"Bayern Munich (Player 1)",teamId:"1"},{id:"2",name:"Bayern Munich (Player 2)",teamId:"1"},{id:"3",name:"Real Madrid (Player 1)",teamId:"2"},{id:"4",name:"Real Madrid (Player 2)",teamId:"2"},{id:"5",name:"Cleveland (Player 1)",teamId:"3"},{id:"6",name:"Cleveland (Player 2)",teamId:"3"},{id:"7",name:"Miami (Player 1)",teamId:"4"},{id:"8",name:"Miami (Player 2)",teamId:"4"}]}}},this.fields=[{key:"sport",type:"select",templateOptions:{label:"Sport",options:[{id:"1",name:"Soccer"},{id:"2",name:"Basketball"}],valueProp:"id",labelProp:"name"}},{key:"team",type:"select",templateOptions:{label:"Team",options:[],valueProp:"id",labelProp:"name"},expressionProperties:{"templateOptions.options":"formState.selectOptionsData.teams.filter(team => team.sportId === model.sport)","model.team":"this.field.templateOptions.options.find(o => o.id === model.team) ? model.team:null"}},{key:"player",type:"select",templateOptions:{label:"Player",options:[],valueProp:"id",labelProp:"name"},expressionProperties:{"templateOptions.options":"formState.selectOptionsData.players.filter(player => player.teamId === model.team)","model.player":"this.field.templateOptions.options.find(o => o.id === model.player) ? model.player:null"}}]}return n.prototype.submit=function(){alert(JSON.stringify(this.model))},n}(),o={examples:[{title:"Cascaded Select JSON powered",description:"",component:p,files:[{file:"app.component.html",content:a("tEMV"),filecontent:a("A0er")},{file:"app.component.ts",content:a("opr4"),filecontent:a("5Lgp")},{file:"app.module.ts",content:a("mM+q"),filecontent:a("+9/e")}]}]},t=function(){return function(){}}(),r=a("NcP4"),m=a("goW2"),i=a("htty"),d=a("LgGJ"),c=a("MT1c"),u=a("1Q/V"),g=a("9+aI"),h=a("haId"),f=a("LJsP"),y=a("yR2A"),j=a("UFMs"),b=a("pMnS"),M=a("4o01"),v=a("Dl9q"),P=a("9Glx"),C=a("UcnZ"),F=l["\u0275crt"]({encapsulation:2,styles:[],data:{}});function I(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,8,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,s,a){var e=!0,p=n.component;return"submit"===s&&(e=!1!==l["\u0275nov"](n,2).onSubmit(a)&&e),"reset"===s&&(e=!1!==l["\u0275nov"](n,2).onReset()&&e),"ngSubmit"===s&&(e=!1!==p.submit()&&e),e},null,null)),l["\u0275did"](1,16384,null,0,e["\u0275angular_packages_forms_forms_bh"],[],null,null),l["\u0275did"](2,540672,null,0,e.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),l["\u0275prd"](2048,null,e.ControlContainer,null,[e.FormGroupDirective]),l["\u0275did"](4,16384,null,0,e.NgControlStatusGroup,[[4,e.ControlContainer]],null,null),(n()(),l["\u0275eld"](5,0,null,null,1,"formly-form",[],null,null,null,v.b,v.a)),l["\u0275did"](6,966656,null,0,P.a,[C.a,l.ComponentFactoryResolver,l.Injector,[2,e.NgForm],[8,null],[2,e.FormGroupDirective],[3,P.a]],{form:[0,"form"],model:[1,"model"],fields:[2,"fields"],options:[3,"options"]},null),(n()(),l["\u0275eld"](7,0,null,null,1,"button",[["class","btn btn-primary submit-button"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(n()(),l["\u0275ted"](-1,null,["Submit"]))],function(n,s){var a=s.component;n(s,2,0,a.form),n(s,6,0,a.form,a.model,a.fields,a.options)},function(n,s){var a=s.component;n(s,0,0,l["\u0275nov"](s,4).ngClassUntouched,l["\u0275nov"](s,4).ngClassTouched,l["\u0275nov"](s,4).ngClassPristine,l["\u0275nov"](s,4).ngClassDirty,l["\u0275nov"](s,4).ngClassValid,l["\u0275nov"](s,4).ngClassInvalid,l["\u0275nov"](s,4).ngClassPending),n(s,7,0,!a.form.valid)})}function k(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,1,"formly-app-example",[],null,null,null,I,F)),l["\u0275did"](1,49152,null,0,p,[],null,null)],null,null)}var w=l["\u0275ccf"]("formly-app-example",p,k,{},{},[]),O=a("Ip0R"),S=a("M2Lx"),x=a("eDkP"),R=a("Fzqc"),_=a("v9Dh"),D=a("ZYjt"),N=a("Wf4p"),A=a("6LlJ"),B=a("F6kA"),G=a("DAbo"),L=a("dWZg"),E=a("lLAP"),J=a("4c35"),T=a("qAlS"),U=a("La40"),Z=a("SMsm"),q=a("UodH"),V=a("5QwG"),W=a("qkla"),Y=a("iZhS"),Q=a("XR12"),z=a("me7w"),H=a("N3PW"),X=a("l4pn"),K=a("Fv2i"),$=a("wBYW"),nn=a("IE48"),sn=a("Q4Tx"),an=a("Nsh5"),ln=a("8mMr"),en=a("LC5p"),pn=a("0/Q6"),on=a("mqvi"),tn=a("lYui"),rn=a("VGFS"),mn=a("1ey0"),dn=function(){return function(){}}(),cn=a("ZYCi"),un=a("cIcG");a.d(s,"ConfigModuleNgFactory",function(){return gn});var gn=l["\u0275cmf"](t,[],function(n){return l["\u0275mod"]([l["\u0275mpd"](512,l.ComponentFactoryResolver,l["\u0275CodegenComponentFactoryResolver"],[[8,[r.a,m.a,i.a,d.a,c.a,u.a,g.a,h.a,f.a,y.a,j.a,b.a,M.a,w]],[3,l.ComponentFactoryResolver],l.NgModuleRef]),l["\u0275mpd"](4608,O.NgLocalization,O.NgLocaleLocalization,[l.LOCALE_ID,[2,O["\u0275angular_packages_common_common_a"]]]),l["\u0275mpd"](4608,S.c,S.c,[]),l["\u0275mpd"](4608,x.c,x.c,[x.i,x.e,l.ComponentFactoryResolver,x.h,x.f,l.Injector,l.NgZone,O.DOCUMENT,R.b,[2,O.Location]]),l["\u0275mpd"](5120,x.j,x.k,[x.c]),l["\u0275mpd"](5120,_.b,_.c,[x.c]),l["\u0275mpd"](4608,D.HAMMER_GESTURE_CONFIG,N.c,[[2,N.g],[2,N.l]]),l["\u0275mpd"](4608,A.a,A.a,[]),l["\u0275mpd"](4608,B.a,B.a,[]),l["\u0275mpd"](4608,e.FormBuilder,e.FormBuilder,[]),l["\u0275mpd"](4608,e["\u0275angular_packages_forms_forms_j"],e["\u0275angular_packages_forms_forms_j"],[]),l["\u0275mpd"](4608,C.a,C.a,[G.b,l.ComponentFactoryResolver,l.Injector]),l["\u0275mpd"](1073742336,O.CommonModule,O.CommonModule,[]),l["\u0275mpd"](1073742336,L.b,L.b,[]),l["\u0275mpd"](1073742336,S.d,S.d,[]),l["\u0275mpd"](1073742336,E.a,E.a,[]),l["\u0275mpd"](1073742336,R.a,R.a,[]),l["\u0275mpd"](1073742336,J.g,J.g,[]),l["\u0275mpd"](1073742336,T.c,T.c,[]),l["\u0275mpd"](1073742336,x.g,x.g,[]),l["\u0275mpd"](1073742336,N.l,N.l,[[2,N.d],[2,D.HAMMER_LOADER]]),l["\u0275mpd"](1073742336,_.e,_.e,[]),l["\u0275mpd"](1073742336,N.v,N.v,[]),l["\u0275mpd"](1073742336,U.j,U.j,[]),l["\u0275mpd"](1073742336,Z.c,Z.c,[]),l["\u0275mpd"](1073742336,q.c,q.c,[]),l["\u0275mpd"](1073742336,V.b,V.b,[]),l["\u0275mpd"](512,G.b,G.b,[]),l["\u0275mpd"](1024,G.a,function(n,s){return[{wrappers:[{name:"addons",component:W.a}],extensions:[{name:"addons",extension:{postPopulate:Y.a}}]},Q.b(n),{types:[{name:"input",component:z.a,wrappers:["form-field"]},{name:"checkbox",component:H.a,wrappers:["form-field"]},{name:"radio",component:X.a,wrappers:["form-field"]},{name:"select",component:K.a,wrappers:["form-field"]},{name:"textarea",component:$.a,wrappers:["form-field"]},{name:"multicheckbox",component:nn.a,wrappers:["form-field"]}],wrappers:[{name:"form-field",component:sn.a}]},Q.b(s),{}]},[G.b,G.b]),l["\u0275mpd"](1073742336,Q.a,Q.a,[G.b,[2,G.a]]),l["\u0275mpd"](1073742336,an.h,an.h,[]),l["\u0275mpd"](1073742336,ln.b,ln.b,[]),l["\u0275mpd"](1073742336,N.m,N.m,[]),l["\u0275mpd"](1073742336,N.t,N.t,[]),l["\u0275mpd"](1073742336,en.b,en.b,[]),l["\u0275mpd"](1073742336,pn.c,pn.c,[]),l["\u0275mpd"](1073742336,on.a,on.a,[]),l["\u0275mpd"](1073742336,e["\u0275angular_packages_forms_forms_bc"],e["\u0275angular_packages_forms_forms_bc"],[]),l["\u0275mpd"](1073742336,e.ReactiveFormsModule,e.ReactiveFormsModule,[]),l["\u0275mpd"](1073742336,tn.a,tn.a,[]),l["\u0275mpd"](1073742336,rn.a,rn.a,[]),l["\u0275mpd"](1073742336,mn.a,mn.a,[]),l["\u0275mpd"](1073742336,dn,dn,[]),l["\u0275mpd"](1073742336,cn.s,cn.s,[[2,cn.y],[2,cn.p]]),l["\u0275mpd"](1073742336,t,t,[]),l["\u0275mpd"](1024,cn.n,function(){return[[{path:"",component:un.a,data:o}]]},[])])})},"mM+q":function(n,s){n.exports='<span class="hljs-keyword">import</span> { NgModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { CommonModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/common\'</span>;\n<span class="hljs-keyword">import</span> { ReactiveFormsModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n<span class="hljs-keyword">import</span> { FormlyBootstrapModule } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/bootstrap\'</span>;\n\n<span class="hljs-keyword">import</span> { AppComponent } <span class="hljs-keyword">from</span> <span class="hljs-string">\'./app.component\'</span>;\n<span class="hljs-meta">@NgModule</span>({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    FormlyBootstrapModule,\n    FormlyModule.forRoot(),\n  ],\n  declarations: [\n    AppComponent,\n  ],\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppModule { }\n'},opr4:function(n,s){n.exports='<span class="hljs-keyword">import</span> { Component } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/core\'</span>;\n<span class="hljs-keyword">import</span> { FormGroup } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@angular/forms\'</span>;\n<span class="hljs-keyword">import</span> { FormlyFormOptions, FormlyFieldConfig } <span class="hljs-keyword">from</span> <span class="hljs-string">\'@ngx-formly/core\'</span>;\n\n<span class="hljs-meta">@Component</span>({\n  selector: <span class="hljs-string">\'formly-app-example\'</span>,\n  templateUrl: <span class="hljs-string">\'./app.component.html\'</span>,\n})\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> AppComponent {\n  form = <span class="hljs-keyword">new</span> FormGroup({});\n  model: <span class="hljs-built_in">any</span> = {};\n  options: FormlyFormOptions = {\n    formState: {\n      selectOptionsData: {\n        teams: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Real Madrid\'</span>, sportId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Cleveland\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Miami\'</span>, sportId: <span class="hljs-string">\'2\'</span> },\n        ],\n        players: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 1)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Bayern Munich (Player 2)\'</span>, teamId: <span class="hljs-string">\'1\'</span> },\n          { id: <span class="hljs-string">\'3\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 1)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'4\'</span>, name: <span class="hljs-string">\'Real Madrid (Player 2)\'</span>, teamId: <span class="hljs-string">\'2\'</span> },\n          { id: <span class="hljs-string">\'5\'</span>, name: <span class="hljs-string">\'Cleveland (Player 1)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n          { id: <span class="hljs-string">\'6\'</span>, name: <span class="hljs-string">\'Cleveland (Player 2)\'</span>, teamId: <span class="hljs-string">\'3\'</span> },\n          { id: <span class="hljs-string">\'7\'</span>, name: <span class="hljs-string">\'Miami (Player 1)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n          { id: <span class="hljs-string">\'8\'</span>, name: <span class="hljs-string">\'Miami (Player 2)\'</span>, teamId: <span class="hljs-string">\'4\'</span> },\n        ],\n      },\n    },\n  };\n\n  fields: FormlyFieldConfig[] = [\n    {\n      key: <span class="hljs-string">\'sport\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Sport\'</span>,\n        options: [\n          { id: <span class="hljs-string">\'1\'</span>, name: <span class="hljs-string">\'Soccer\'</span> },\n          { id: <span class="hljs-string">\'2\'</span>, name: <span class="hljs-string">\'Basketball\'</span> },\n        ],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'team\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Team\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.options\'</span>: <span class="hljs-string">\'formState.selectOptionsData.teams.filter(team =&gt; team.sportId === model.sport)\'</span>,\n        <span class="hljs-comment">// reset model when updating select options</span>\n        <span class="hljs-string">\'model.team\'</span>: <span class="hljs-string">`this.field.templateOptions.options.find(o =&gt; o.id === model.team) ? model.team:null`</span>,\n      },\n    },\n    {\n      key: <span class="hljs-string">\'player\'</span>,\n      <span class="hljs-keyword">type</span>: <span class="hljs-string">\'select\'</span>,\n      templateOptions: {\n        label: <span class="hljs-string">\'Player\'</span>,\n        options: [],\n        valueProp: <span class="hljs-string">\'id\'</span>,\n        labelProp: <span class="hljs-string">\'name\'</span>,\n      },\n      expressionProperties: {\n        <span class="hljs-string">\'templateOptions.options\'</span>: <span class="hljs-string">\'formState.selectOptionsData.players.filter(player =&gt; player.teamId === model.team)\'</span>,\n        <span class="hljs-comment">// reset model when updating select options</span>\n        <span class="hljs-string">\'model.player\'</span>: <span class="hljs-string">`this.field.templateOptions.options.find(o =&gt; o.id === model.player) ? model.player:null`</span>,\n      },\n    },\n  ];\n\n  submit() {\n    alert(<span class="hljs-built_in">JSON</span>.stringify(<span class="hljs-keyword">this</span>.model));\n  }\n}\n'},tEMV:function(n,s){n.exports='<span class="hljs-tag">&lt;<span class="hljs-name">form</span> [<span class="hljs-attr">formGroup</span>]=<span class="hljs-string">"form"</span> (<span class="hljs-attr">ngSubmit</span>)=<span class="hljs-string">"submit()"</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">formly-form</span> [<span class="hljs-attr">model</span>]=<span class="hljs-string">"model"</span> [<span class="hljs-attr">fields</span>]=<span class="hljs-string">"fields"</span> [<span class="hljs-attr">options</span>]=<span class="hljs-string">"options"</span> [<span class="hljs-attr">form</span>]=<span class="hljs-string">"form"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">formly-form</span>&gt;</span>\n  <span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"submit"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary submit-button"</span> [<span class="hljs-attr">disabled</span>]=<span class="hljs-string">"!form.valid"</span>&gt;</span>Submit<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;/<span class="hljs-name">form</span>&gt;</span>\n'}}]);