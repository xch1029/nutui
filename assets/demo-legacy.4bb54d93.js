System.register(["./mobile-legacy.9bacf72e.js","./vendor-legacy.bfe8bac7.js","./index-legacy.b8e163f7.js"],(function(e){"use strict";var l,t,n,i,o,c,a,s;return{setters:[function(e){l=e.c,t=e._},function(e){n=e.k,i=e.r,o=e.o,c=e.c,a=e.f,s=e.i},function(){}],execute:function(){const{createDemo:C}=l("dialog");var k=e("default",C({setup(){const e=n(!1),l=()=>{console.log("event cancel")},i=()=>{console.log("event ok")};return{visible:e,baseClick:()=>{t({title:"基础弹框",content:"支持函数调用和组件调用两种方式。",onCancel:l,onOk:i})},noTitleClick:()=>{t({content:"无标题弹框",onCancel:l,onOk:i})},componentClick:()=>{e.value=!0},tipsClick:()=>{t({title:"温馨提示",content:"支持函数调用和组件调用两种方式。",noCancelBtn:!0,onCancel:l,onOk:i})},teleportClick:e=>{t({teleport:e,title:"挂载至 "+e,content:"打开开发者工具看一下 Elements Tab",noCancelBtn:!0,onCancel:l})}}}}));const u={class:"demo"};k.render=function(e,l,t,n,C,k){const r=i("nut-cell"),p=i("nut-cell-group"),b=i("nut-dialog");return o(),c("div",u,[a(p,{title:"函数式调用"},{default:s((()=>[a(r,{title:"基础弹框",onClick:e.baseClick},null,8,["onClick"]),a(r,{title:"基础弹框",onClick:e.baseClick},null,8,["onClick"]),a(r,{title:"无标题弹框",onClick:e.noTitleClick},null,8,["onClick"]),a(r,{title:"提示弹框",onClick:e.tipsClick},null,8,["onClick"])])),_:1}),a(p,{title:"标签式调用"},{default:s((()=>[a(r,{title:"组件调用",onClick:e.componentClick},null,8,["onClick"]),a(b,{teleport:"#app",title:"组件调用",content:"如果需要在弹窗内嵌入组件或其他自定义内容，可以使用组件调用的方式。",visible:e.visible,"onUpdate:visible":l[1]||(l[1]=l=>e.visible=l)},null,8,["visible"])])),_:1}),a(p,{title:"teleport 使用，挂载到指定节点"},{default:s((()=>[a(r,{title:"body 节点下",onClick:l[2]||(l[2]=l=>e.teleportClick("body"))}),a(r,{title:"#app 节点下",onClick:l[3]||(l[3]=l=>e.teleportClick("#app"))}),a(r,{title:"demo class 元素节点下",onClick:l[4]||(l[4]=l=>e.teleportClick(".demo"))})])),_:1})])}}}}));
