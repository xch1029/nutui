import{c as e}from"./mobile.4ec90e4e.js";import{a as s,z as t,A as a,r as o,o as l,c as n,f as i,y as d,j as r}from"./vendor.ed841bd5.js";import"./index.45f80b9c.js";const{createDemo:c}=e("overlay");var u=c({props:{},setup:()=>({state:s({show:!1,show2:!1})})});const p=d();t("data-v-3325d30e");const v={class:"demo"},b=i("h2",null,"基础用法",-1),f=r("显示遮罩层"),h=i("h2",null,"嵌套内容",-1),m=r("嵌套内容"),w=i("div",{class:"wrapper"},[i("div",{class:"content"},"这里是正文")],-1);a();const _=p(((e,s,t,a,d,r)=>{const c=o("nut-button"),u=o("nut-overlay"),_=o("nut-cell");return l(),n("div",v,[b,i(_,null,{default:p((()=>[i(c,{type:"primary",onClick:s[1]||(s[1]=s=>e.state.show=!0)},{default:p((()=>[f])),_:1}),i(u,{visible:e.state.show,"onUpdate:visible":s[2]||(s[2]=s=>e.state.show=s),"z-index":2e3},null,8,["visible"])])),_:1}),h,i(_,null,{default:p((()=>[i(c,{type:"success",onClick:s[3]||(s[3]=s=>e.state.show2=!0)},{default:p((()=>[m])),_:1}),i(u,{visible:e.state.show2,"onUpdate:visible":s[4]||(s[4]=s=>e.state.show2=s),"z-index":2e3},{default:p((()=>[w])),_:1},8,["visible"])])),_:1})])}));u.render=_,u.__scopeId="data-v-3325d30e";export default u;