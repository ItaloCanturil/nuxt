import{_ as c}from"./2MDalXbh.js";import{a as d,c as n,f as m,k as e,n as p,I as l,g as u,W as f,l as b}from"./BH8HNmAl.js";const h=["disabled"],_=d({__name:"PUButton",props:{disabled:{type:Boolean,default:!1},flavor:{default:"normal"},shape:{default:"rounded"},size:{default:"medium"},customClass:{default:""},iconLeft:{},iconRight:{}},setup(r){const o=r,s=n(["pu-button"]),i=n({normal:"pu-button--normal",outlined:"pu-button--outlined",ghost:"pu-button--ghost"});return s.value.push(i.value[o.flavor],`pu-button--${o.size}`,`pu-button--${o.shape}`,o.customClass),(t,v)=>{const a=c;return e(),m("button",{disabled:t.disabled,class:p(["pu-button font-patrick",[s.value,t.disabled?"pu-button--disabled":""]])},[t.iconLeft?(e(),l(a,{key:0,name:t.iconLeft,"custom-class":t.flavor=="outlined"||t.flavor=="ghost"?"text-primary-light-500":"text-white"},null,8,["name","custom-class"])):u("",!0),f(t.$slots,"default",{},void 0,!0),t.iconRight?(e(),l(a,{key:1,name:t.iconRight,"custom-class":t.flavor=="outlined"||t.flavor=="ghost"?"text-primary-light-500":"text-white"},null,8,["name","custom-class"])):u("",!0)],10,h)}}}),C=Object.assign(b(_,[["__scopeId","data-v-6d991c38"]]),{__name:"PUButton"});export{C as _};
