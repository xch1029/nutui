var __vite_style__=document.createElement("style");__vite_style__.innerHTML="view-block[data-v-ae6a87fe]{display:block}@keyframes nutFadeIn-ae6a87fe{from{opacity:0}to{opacity:1}}@keyframes nutFadeOut-ae6a87fe{from{opacity:1}to{opacity:0}}.nutFade-enter-active[data-v-ae6a87fe],.nutFade-leave-active[data-v-ae6a87fe],.nutFadeIn[data-v-ae6a87fe],.nutFadeOut[data-v-ae6a87fe]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutFade-enter-active[data-v-ae6a87fe],.nutFadeIn[data-v-ae6a87fe]{animation-name:nutFadeIn-ae6a87fe}.nutFade-leave-active[data-v-ae6a87fe],.nutFadeOut[data-v-ae6a87fe]{animation-name:nutFadeOut-ae6a87fe}@keyframes nutZoomIn-ae6a87fe{from{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes nutZoomOut-ae6a87fe{from{opacity:1}50%{opacity:0;transform:scale3d(.3,.3,.3)}to{opacity:0}}.nutZoom-enter-active[data-v-ae6a87fe],.nutZoom-leave-active[data-v-ae6a87fe],.nutZoomIn[data-v-ae6a87fe],.nutZoomOut[data-v-ae6a87fe]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutZoom-enter-active[data-v-ae6a87fe],.nutZoomIn[data-v-ae6a87fe]{animation-name:nutZoomIn-ae6a87fe}.nutZoom-leave-active[data-v-ae6a87fe],.nutZoomOut[data-v-ae6a87fe]{animation-name:nutZoomOut-ae6a87fe}@keyframes nutEaseIn-ae6a87fe{0%{opacity:0;transform:scale(.9)}100%{opacity:1;transform:scale(1)}}@keyframes nutEaseOut-ae6a87fe{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.9)}}.nutEase-enter-active[data-v-ae6a87fe],.nutEase-leave-active[data-v-ae6a87fe],.nutEaseIn[data-v-ae6a87fe],.nutEaseOut[data-v-ae6a87fe]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutEase-enter-active[data-v-ae6a87fe],.nutEaseIn[data-v-ae6a87fe]{animation-name:nutEaseIn-ae6a87fe}.nutEase-leave-active[data-v-ae6a87fe],.nutEaseOut[data-v-ae6a87fe]{animation-name:nutEaseOut-ae6a87fe}@keyframes nutDropIn-ae6a87fe{0%{opacity:0;transform:scaleY(.8)}100%{opacity:1;transform:scaleY(1)}}@keyframes nutDropOut-ae6a87fe{0%{opacity:1;transform:scaleY(1)}100%{opacity:0;transform:scaleY(.8)}}.nutDrop-enter-active[data-v-ae6a87fe],.nutDrop-leave-active[data-v-ae6a87fe],.nutDropIn[data-v-ae6a87fe],.nutDropOut[data-v-ae6a87fe]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutDrop-enter-active[data-v-ae6a87fe],.nutDropIn[data-v-ae6a87fe]{animation-name:nutDropIn-ae6a87fe}.nutDrop-leave-active[data-v-ae6a87fe],.nutDropOut[data-v-ae6a87fe]{animation-name:nutDropOut-ae6a87fe}@keyframes rotation-ae6a87fe{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}.nutRotate-enter-active[data-v-ae6a87fe],.nutRotate-leave-active[data-v-ae6a87fe],.nutRotateIn[data-v-ae6a87fe],.nutRotateOut[data-v-ae6a87fe]{animation-duration:.25s;animation-fill-mode:both;animation-timing-function:cubic-bezier(.55,.085,.68,.53)}.nutRotate-enter-active[data-v-ae6a87fe],.nutRotateIn[data-v-ae6a87fe]{animation-name:nutRotateIn}.nutRotate-leave-active[data-v-ae6a87fe],.nutRotateOut[data-v-ae6a87fe]{animation-name:nutRotateOut}.demo .nut-cell[data-v-ae6a87fe]{align-items:center}.demo .nut-cell .nut-cell__value[data-v-ae6a87fe]{margin-right:8px}",document.head.appendChild(__vite_style__),System.register(["./mobile-legacy.9bacf72e.js","./vendor-legacy.bfe8bac7.js","./index-legacy.b8e163f7.js"],(function(e){"use strict";var a,t,n,o,i,s,c,d,l,r,u;return{setters:[function(e){a=e.c},function(e){t=e.a,n=e.k,o=e.A,i=e.x,s=e.y,c=e.r,d=e.o,l=e.c,r=e.f,u=e.s},function(){}],execute:function(){const{createDemo:m}=a("address");var f=e("default",m({props:{},setup(){const e=t({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),a=t({normal:!1,exist:!1,customImg:!1,other:!1}),i=t({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),s=n([{id:1,addressDetail:"",cityName:"次渠镇",countyName:"通州区",provinceName:"北京市",selectedAddress:!0,townName:""},{id:2,addressDetail:"",cityName:"钓鱼岛全区",countyName:"",provinceName:"钓鱼岛",selectedAddress:!1,townName:""},{id:3,addressDetail:"京东大厦",cityName:"大兴区",countyName:"科创十一街18号院",provinceName:"北京市",selectedAddress:!1,townName:""}]),c=t({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址"});return{showAddress:()=>{a.normal=!a.normal},showPopup:a,onChange:(t,n)=>{e[t.next].length<1&&(a[n]=!1)},close1:e=>{console.log(e),c.one=e.data.addressStr},showAddressExist:()=>{a.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:a,cityName:t,countyName:n,townName:o,addressDetail:i}=e.data;c.two=a+t+n+o+i}else c.two=e.data.addressStr},selected:(e,a,t)=>{console.log(e),console.log(a)},existAddress:s,showAddressOther:()=>{a.other=!0},showCustomImg:()=>{a.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:a,cityName:t,countyName:n,townName:o,addressDetail:i}=e.data;c.three=a+t+n+o+i}else c.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:a,cityName:t,countyName:n,townName:o,addressDetail:i}=e.data;c.four=a+t+n+o+i}else c.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)},...o(i),...o(c),...o(a),...o(e)}}}));const v=u();i("data-v-ae6a87fe");const y={class:"demo"},p=r("h2",null,"选择自定义地址",-1),h=r("h2",null,"选择已有地址",-1),b=r("h2",null,"自定义图标",-1),g=r("h2",null,"自定义地址与已有地址切换",-1);s();const w=v(((e,a,t,n,o,i)=>{const s=c("nut-cell"),u=c("nut-address");return d(),l("div",y,[p,r(s,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),r(u,{visible:e.normal,"onUpdate:visible":a[1]||(a[1]=a=>e.normal=a),province:e.province,city:e.city,country:e.country,town:e.town,onChange:a[2]||(a[2]=a=>e.onChange(a,"normal")),onClose:e.close1,"custom-address-title":"请选择所在地区"},null,8,["visible","province","city","country","town","onClose"]),h,r(s,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),r(u,{visible:e.exist,"onUpdate:visible":a[3]||(a[3]=a=>e.exist=a),type:"exist","exist-address":e.existAddress,onChange:a[4]||(a[4]=a=>e.onChange(a,"exist")),onClose:e.close2,"is-show-custom-address":!1,onSelected:e.selected,"exist-address-title":"配送至"},null,8,["visible","exist-address","onClose","onSelected"]),b,r(s,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),r(u,{visible:e.customImg,"onUpdate:visible":a[5]||(a[5]=a=>e.customImg=a),type:"exist","exist-address":e.existAddress,onChange:a[6]||(a[6]=a=>e.onChange(a,"customImg")),onClose:e.close3,"is-show-custom-address":!1,onSelected:e.selected,"default-icon":e.defaultIcon,"selected-icon":e.selectedIcon,"close-btn-icon":e.closeBtnIcon},null,8,["visible","exist-address","onClose","onSelected","default-icon","selected-icon","close-btn-icon"]),g,r(s,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),r(u,{visible:e.other,"onUpdate:visible":a[7]||(a[7]=a=>e.other=a),type:"exist","exist-address":e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,"back-btn-icon":e.backBtnIcon,onChange:a[8]||(a[8]=a=>e.onChange(a,"other")),onClose:e.close4,onSelected:e.selected,"custom-and-exist-title":"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["visible","exist-address","province","city","country","town","back-btn-icon","onClose","onSelected","onSwitchModule","onCloseMask"])])}));f.render=w,f.__scopeId="data-v-ae6a87fe"}}}));
