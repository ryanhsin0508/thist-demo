(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"225d":function(e,t,n){"use strict";n("6df7")},"6df7":function(e,t,n){},"8bae":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),c=Object(o["J"])("data-v-bd744894");Object(o["v"])("data-v-bd744894");var i={id:"page-documentation",class:"documentation",ref:"component"},a={class:"page-main",ref:"main"};Object(o["t"])();var s=c((function(e,t,n,s,l,r){var d=Object(o["A"])("SidebarComponent"),b=Object(o["A"])("starting-component"),u=Object(o["A"])("CodeIntroComponent"),p=Object(o["A"])("CodeSectionComponent");return Object(o["s"])(),Object(o["e"])("div",i,[Object(o["i"])(d),Object(o["i"])("main",a,[Object(o["i"])(b),Object(o["i"])(p,{onOnMainScroll:r.onCodeSectionScroll},{main:c((function(){return[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(e.dataX.codeExamples,(function(e){return Object(o["s"])(),Object(o["e"])(u,{codeName:e.title,key:e.title},null,8,["codeName"])})),128))]})),_:1},8,["onOnMainScroll"])],512)],512)})),l=n("1da1"),r=(n("96cf"),n("d2e8")),d=n("327b"),b=Object(o["J"])("data-v-5e846953");Object(o["v"])("data-v-5e846953");var u=Object(o["i"])("h2",null,"Starting",-1),p=Object(o["i"])("ul",null,[Object(o["i"])("li",null,"Installation"),Object(o["i"])("li",null,"Basic Introduction")],-1),m=Object(o["i"])("h2",null,"Code Examples",-1);Object(o["t"])();var O=b((function(e,t,n,c,i,a){var s=Object(o["A"])("router-link");return Object(o["s"])(),Object(o["e"])("div",{class:"sidebar sidebar-component",style:{transform:e.windowInfo.windowWidth<=1440&&!e.dataX.isShowSidebar?"translateX(-100%)":""}},[u,p,m,Object(o["i"])("ul",null,[(Object(o["s"])(!0),Object(o["e"])(o["a"],null,Object(o["y"])(e.dataX.codeExamples,(function(e){return Object(o["s"])(),Object(o["e"])("li",{key:e.title},[Object(o["i"])(s,{to:"#".concat(e.title)},{default:b((function(){return[Object(o["h"])("tt."+Object(o["C"])(e.title),1)]})),_:2},1032,["to"])])})),128))])],4)})),j={name:"SidebarComponent",props:{},components:{},data:function(){return{scrollTop:0}},watch:{},computed:{},methods:{},mounted:function(){console.log(this.dataX),window.addEventListener("scroll",this.onWindowScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.onWindowScroll)}},f=(n("cd72"),n("d959")),v=n.n(f);const h=v()(j,[["render",O],["__scopeId","data-v-5e846953"]]);var w=h,g={class:"starting starting-component"},S={class:"container"},C=Object(o["i"])("div",{class:"content"},[Object(o["i"])("section",null,[Object(o["i"])("h2",{class:"title"},"Installation"),Object(o["i"])("h3",null,"NPM"),Object(o["i"])("div",{class:"code-section"},"$ npm i thist")])],-1),k={class:"content"},x={class:"flex"},E=Object(o["g"])('<div class="text"><h2 class="title">Basic Introduction</h2><p>All callback functions are composed of following arguments:</p><ul><li><span class="code-parameter-dark">item</span>: Each object being processed in nested list </li><li><span class="code-parameter-dark">index</span>: Object index in each level <span class="question"></span></li><li><span class="code-parameter-dark">list</span>: Each object in processing nested list </li><li><span class="code-parameter-dark">parent</span>: Parent of processing nested list item </li></ul></div>',1),y={class:"code"},A=Object(o["g"])('<div class="code-explaination"><ul><li><span class="color-block" style="background-color:#fff;"></span><span class="color-block" style="background-color:#c3c6f3;"></span><span class="color-block" style="background-color:#fff700;"></span> Original JSON Code </li><li><span class="color-block" style="background-color:#46eeff;"></span> Thist Explaination Code </li></ul></div>',1),I={class:"code-section"},L={class:"json"};function T(e,t,n,c,i,a){var s=Object(o["A"])("NestedListComponent");return Object(o["s"])(),Object(o["e"])("div",g,[Object(o["i"])("div",S,[C,Object(o["i"])("div",k,[Object(o["i"])("section",x,[E,Object(o["i"])("div",y,[A,Object(o["i"])("div",I,[Object(o["i"])("div",L,[Object(o["i"])(s,{indent:24,list:e.dataX.listExamples.productLine.list,nextListKey:"subBusinessList",isShowControl:!0,isShowDebug:!0},null,8,["list"])])])])])])])])}var _={name:"StartingComponent",props:{},components:{},data:function(){return{}},watch:{},computed:{},methods:{},mounted:function(){}};const M=v()(_,[["render",T]]);var X=M,$=n("9a60"),J={name:"Documentation",components:{ExampleListSelectorComponent:r["a"],CodeSectionComponent:d["a"],SidebarComponent:w,StartingComponent:X},methods:{onCodeSectionScroll:function(){console.log("QQQ"),this.$refs.main.scrollTo({top:3e3,left:0,behavior:"smooth"})},onMainScroll:function(){}},watch:{$route:function(e,t){if(e.hash){var n=document.getElementById("code-example-".concat(e.hash.substring(1))),o=n.offsetTop-60;window.scrollTo({top:o,behavior:"smooth"})}}},beforeCreate:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$store.commit("SET_DATA",{codeExamples:$["a"]});case 1:case"end":return t.stop()}}),t)})))()},mounted:function(){this.$refs.main.addEventListener("scroll",this.onMainScroll)},beforeUnmounted:function(){this.$refs.main.removeEventListener("scroll",this.onMainScroll)}};n("225d");const N=v()(J,[["render",s],["__scopeId","data-v-bd744894"]]);t["default"]=N},b4c8:function(e,t,n){},cd72:function(e,t,n){"use strict";n("b4c8")}}]);
//# sourceMappingURL=about.e0ffa8be.js.map