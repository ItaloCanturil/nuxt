import{_ as k}from"./fP8E3WHU.js";import{_ as S}from"./BhGaGYKh.js";import{_ as g}from"./4eYjNddo.js";import{a as O,c as u,f as U,k as n,I as d,g as m,w as o,W as r,h as a,i as w,A as B}from"./BH8HNmAl.js";import"./2MDalXbh.js";import"./4qzmr7pZ.js";import"./CFhCo6Xl.js";const C={class:"select-demo-container"},P={class:"flex gap-2"},$={class:"flex flex-col"},z=O({__name:"ShowSelect",props:{type:{}},setup(N){const v=u(),V=u(),c=u(),_=u(),i=u(),b=[{value:"sm",label:"Small"},{value:"lg",label:"Large"}],f=[{value:"preset",label:"Preselected Option"},{value:"opt2",label:"Regular Option"}];return(t,e)=>{const s=k,p=S,y=g;return n(),U("div",C,[t.type==="default"?(n(),d(p,{key:0},{preview:o(()=>[a(s,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=l=>v.value=l),options:[{value:1,label:"Option 1"},{value:2,label:"Option 2"}]},null,8,["modelValue"])]),code:o(()=>[r(t.$slots,"code")]),_:3})):m("",!0),t.type==="placeholder"?(n(),d(p,{key:1},{preview:o(()=>[a(s,{modelValue:V.value,"onUpdate:modelValue":e[1]||(e[1]=l=>V.value=l),placeholder:"Select something",options:[{value:"a",label:"Item A"},{value:"b",label:"Item B"}]},null,8,["modelValue"])]),code:o(()=>[r(t.$slots,"code")]),_:3})):m("",!0),t.type==="sizes"?(n(),d(p,{key:2},{preview:o(()=>[w("div",P,[a(s,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=l=>c.value=l),size:"small",options:b},null,8,["modelValue"]),a(s,{modelValue:_.value,"onUpdate:modelValue":e[3]||(e[3]=l=>_.value=l),size:"large",options:b},null,8,["modelValue"])])]),code:o(()=>[r(t.$slots,"code")]),_:3})):m("",!0),t.type==="example-option"?(n(),d(p,{key:3},{preview:o(()=>[a(s,{modelValue:i.value,"onUpdate:modelValue":e[4]||(e[4]=l=>i.value=l),"example-option":{value:"preset",label:"Preselected Option"},options:f},null,8,["modelValue"])]),code:o(()=>[r(t.$slots,"code")]),_:3})):m("",!0),t.type==="with-label"?(n(),d(p,{key:4},{preview:o(()=>[w("div",$,[a(y,{id:"label"},{default:o(()=>e[6]||(e[6]=[B(" with label ")])),_:1}),a(s,{modelValue:i.value,"onUpdate:modelValue":e[5]||(e[5]=l=>i.value=l),placeholder:"Choose an option",options:f},null,8,["modelValue"])])]),code:o(()=>[r(t.$slots,"code")]),_:3})):m("",!0)])}}}),R=Object.assign(z,{__name:"PaperShowSelect"});export{R as default};
