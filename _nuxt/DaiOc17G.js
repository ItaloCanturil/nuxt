import{_ as O}from"./Gssb0iMC.js";import{_ as R}from"./2MDalXbh.js";import{_ as T}from"./4qzmr7pZ.js";import{a as A,c as f,N as _,f as s,k as l,g as k,i as d,h,F as w,K as P,al as V,am as N,A as b,t as y,I as U,W as D,w as $}from"./BH8HNmAl.js";const F={class:"w-full"},K={key:0,class:"mb-3 flex justify-between"},E={class:"w-48"},M={class:"w-full border-collapse border-2 border-primary-light-500 font-patrick"},Q={class:"bg-primary-light-500/10 text-primary-light-500 text-left"},W=["onClick"],q={key:0},z={class:"shadow-lg shadow-primary-light-500/20"},G={key:1,class:"flex justify-between mt-4 font-patrick items-center"},H=A({__name:"PUTable",props:{headers:{},rows:{},sortable:{type:Boolean},filterable:{type:Boolean},perPage:{},hiddenColumns:{}},setup(j){const a=j,v=f(""),u=f(null),i=f("asc"),c=f(1),C=_(()=>!a.filterable||!v.value?a.rows:a.rows.filter(e=>Object.values(e).some(t=>String(t).toLowerCase().includes(v.value.toLowerCase())))),g=_(()=>!a.sortable||!u.value?C.value:[...C.value].sort((e,t)=>{const n=e[u.value],r=t[u.value];return typeof n=="number"&&typeof r=="number"?i.value==="asc"?n-r:r-n:i.value==="asc"?String(n).localeCompare(String(r)):String(r).localeCompare(String(n))})),I=_(()=>{if(!a.perPage)return g.value;const e=(c.value-1)*a.perPage;return g.value.slice(e,e+a.perPage)}),S=_(()=>a.perPage?Math.ceil(g.value.length/a.perPage):1),L=e=>{u.value===e?i.value=i.value==="asc"?"desc":"asc":(u.value=e,i.value="asc")};return(e,t)=>{const n=O,r=R,x=T;return l(),s("div",F,[e.filterable?(l(),s("div",K,[d("div",E,[h(n,{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=o=>v.value=o),type:"text","icon-left":"search",placeholder:"Search...",class:"border p-2 rounded"},null,8,["modelValue"])])])):k("",!0),d("table",M,[d("thead",null,[d("tr",Q,[(l(!0),s(w,null,P(e.headers,o=>{var m;return V((l(),s("th",{key:o.key,class:"border p-2 border-primary-light-500 cursor-pointer",onClick:p=>e.sortable?L(o.key):null},[b(y(o.label)+" ",1),e.sortable&&u.value===o.key?(l(),s("span",q,[i.value==="asc"?(l(),U(r,{key:0,class:"inline-flex",name:"chevron-up"})):(l(),U(r,{key:1,class:"inline-flex",name:"chevron-down"}))])):k("",!0)],8,W)),[[N,!((m=e.hiddenColumns)!=null&&m.includes(o.key))]])}),128))])]),d("tbody",z,[(l(!0),s(w,null,P(I.value,(o,m)=>(l(),s("tr",{key:m},[(l(!0),s(w,null,P(e.headers,p=>{var B;return V((l(),s("td",{key:p.key,class:"border p-2 border-primary-light-500"},[D(e.$slots,`cell-${p.key}`,{row:o},()=>[b(y(o[p.key]),1)])])),[[N,!((B=e.hiddenColumns)!=null&&B.includes(p.key))]])}),128))]))),128))])]),e.perPage?(l(),s("div",G,[h(x,{key:"table-previous",disabled:c.value===1,"icon-left":"chevron-left",flavor:"outlined",onClick:t[1]||(t[1]=o=>c.value--)},{default:$(()=>t[3]||(t[3]=[b(" Previous ")])),_:1},8,["disabled"]),d("span",null,"Page "+y(c.value)+" of "+y(S.value),1),h(x,{key:"table-next",flavor:"outlined","icon-right":"chevron-right",disabled:c.value===S.value,onClick:t[2]||(t[2]=o=>c.value++)},{default:$(()=>t[4]||(t[4]=[b(" Next ")])),_:1},8,["disabled"])])):k("",!0)])}}}),ee=Object.assign(H,{__name:"PUTable"});export{ee as _};
