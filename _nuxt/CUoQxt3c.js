const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./C_YUd8sv.js","./BxAjDrKF.js","./2MDalXbh.js","./BH8HNmAl.js","./entry.5reSiHKh.css","./PUVideo.D8iopLad.css","./DbT__Y6D.js","./Cw20cVb9.js","./PUTooltip.oxSLbDDA.css","./PUDatePicker.CFrW2-Ho.css","./D8w7mTTv.js","./BZsjGCNk.js","./PUAvatar.BVDvg4DH.css","./DaiOc17G.js","./Gssb0iMC.js","./PUInput.CjXpuYZh.css","./4qzmr7pZ.js","./PUButton.DbOYP8mC.css","./vtZP4tO1.js","./PUModal.cduSBpmG.css","./CcU6ueDI.js","./useToast.E_M-vuN3.css","./fP8E3WHU.js","./CU9NMOFW.js","./PUButtonIcon.BUE96afQ.css","./4eYjNddo.js","./PULabel.aytlOwbQ.css","./DgvCOhfo.js","./PUTextArea.HLeEQa8a.css","./CTL4r2GF.js","./PUTag._r29zkA0.css","./BWH7M0gl.js","./PUBadge.Dq1NpiMh.css","./BzpJut_D.js","./PUAccordion.eal4HAgz.css","./DJvVBLwy.js","./PUCheckbox.CjWOI4gr.css","./Bx7dnW7v.js","./BNiNh43X.js","./AllComponents.6t7WZaH8.css","./CFhCo6Xl.js","./5qMKypGo.js","./DocTable.HKXd5KGR.css","./BqkI8_Y2.js","./BwRF35hD.js","./CpWPZZzq.js","./ym2bcCbs.js","./PUTabs.CM4k6bch.css","./CU4Swui7.js","./BhGaGYKh.js","./QZgSRMm5.js","./ShowAudio.CkUZ6CQN.css","./D0Q2vlZC.js","./S4CveBqF.js","./BMiieFhK.js","./CPencGBp.js","./DGb7sCPM.js","./DJd38sqK.js","./TdpMVG71.js","./ShowIcons.Mk-MacnQ.css","./CAXvA1MO.js","./drktTbWb.js","./BzjrWCbB.js","./B87Vs6H5.js","./CvSt0gJV.js","./DshblvHu.js","./CUpC7B1P.js","./lx6SGZMd.js","./C2SvpQ8Z.js","./CU6a6CAY.js","./C8CmMnqG.js","./CpEIDLHc.js","./DImGU0d8.js","./De4Z5dnE.js"])))=>i.map(i=>d[i]);
import{a as rn,L as en,M as an,N as I,r as Rn,O as Ln,P as In,Q as un,R as X,S as N,U as Mn,V as Bn,_ as h,s as Un,I as Vn,W as jn,J as ln,n as $n,k as Nn,X as zn,Y as Hn}from"./BH8HNmAl.js";import{t as Fn}from"./De4Z5dnE.js";const Wn=/\d/,qn=["-","_","/","."];function Kn(n=""){if(!Wn.test(n))return n!==n.toLowerCase()}function sn(n,l){const e=qn,t=[];if(!n||typeof n!="string")return t;let r="",o,i;for(const s of n){const d=e.includes(s);if(d===!0){t.push(r),r="",o=void 0;continue}const p=Kn(s);if(i===!1){if(o===!1&&p===!0){t.push(r),r=s,o=p;continue}if(o===!0&&p===!1&&r.length>1){const m=r.at(-1);t.push(r.slice(0,Math.max(0,r.length-1))),r=m+s,o=p;continue}}r+=s,o=p,i=d}return t.push(r),t}function Xn(n){return n?n[0].toUpperCase()+n.slice(1):""}function M(n,l){return n?(Array.isArray(n)?n:sn(n)).map(e=>Xn(e)).join(""):""}function cn(n,l){return n?(Array.isArray(n)?n:sn(n)).map(e=>e.toLowerCase()).join("-"):""}const j=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"];class ${constructor(l,e,t){this.property=l,this.normal=e,t&&(this.space=t)}}$.prototype.property={};$.prototype.normal={};$.prototype.space=null;function pn(n,l){const e={},t={};let r=-1;for(;++r<n.length;)Object.assign(e,n[r].property),Object.assign(t,n[r].normal);return new $(e,t,l)}function Y(n){return n.toLowerCase()}class w{constructor(l,e){this.property=l,this.attribute=e}}w.prototype.space=null;w.prototype.boolean=!1;w.prototype.booleanish=!1;w.prototype.overloadedBoolean=!1;w.prototype.number=!1;w.prototype.commaSeparated=!1;w.prototype.spaceSeparated=!1;w.prototype.commaOrSpaceSeparated=!1;w.prototype.mustUseProperty=!1;w.prototype.defined=!1;let Yn=0;const u=L(),v=L(),dn=L(),a=L(),g=L(),B=L(),S=L();function L(){return 2**++Yn}const Q=Object.freeze(Object.defineProperty({__proto__:null,boolean:u,booleanish:v,commaOrSpaceSeparated:S,commaSeparated:B,number:a,overloadedBoolean:dn,spaceSeparated:g},Symbol.toStringTag,{value:"Module"})),K=Object.keys(Q);class J extends w{constructor(l,e,t,r){let o=-1;if(super(l,e),tn(this,"space",r),typeof t=="number")for(;++o<K.length;){const i=K[o];tn(this,K[o],(t&Q[i])===Q[i])}}}J.prototype.defined=!0;function tn(n,l,e){e&&(n[l]=e)}const Qn={}.hasOwnProperty;function U(n){const l={},e={};let t;for(t in n.properties)if(Qn.call(n.properties,t)){const r=n.properties[t],o=new J(t,n.transform(n.attributes||{},t),r,n.space);n.mustUseProperty&&n.mustUseProperty.includes(t)&&(o.mustUseProperty=!0),l[t]=o,e[Y(t)]=t,e[Y(o.attribute)]=t}return new $(l,e,n.space)}const mn=U({space:"xlink",transform(n,l){return"xlink:"+l.slice(5).toLowerCase()},properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null}}),hn=U({space:"xml",transform(n,l){return"xml:"+l.slice(3).toLowerCase()},properties:{xmlLang:null,xmlBase:null,xmlSpace:null}});function fn(n,l){return l in n?n[l]:l}function gn(n,l){return fn(n,l.toLowerCase())}const yn=U({space:"xmlns",attributes:{xmlnsxlink:"xmlns:xlink"},transform:gn,properties:{xmlns:null,xmlnsXLink:null}}),vn=U({transform(n,l){return l==="role"?l:"aria-"+l.slice(4).toLowerCase()},properties:{ariaActiveDescendant:null,ariaAtomic:v,ariaAutoComplete:null,ariaBusy:v,ariaChecked:v,ariaColCount:a,ariaColIndex:a,ariaColSpan:a,ariaControls:g,ariaCurrent:null,ariaDescribedBy:g,ariaDetails:null,ariaDisabled:v,ariaDropEffect:g,ariaErrorMessage:null,ariaExpanded:v,ariaFlowTo:g,ariaGrabbed:v,ariaHasPopup:null,ariaHidden:v,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:g,ariaLevel:a,ariaLive:null,ariaModal:v,ariaMultiLine:v,ariaMultiSelectable:v,ariaOrientation:null,ariaOwns:g,ariaPlaceholder:null,ariaPosInSet:a,ariaPressed:v,ariaReadOnly:v,ariaRelevant:null,ariaRequired:v,ariaRoleDescription:g,ariaRowCount:a,ariaRowIndex:a,ariaRowSpan:a,ariaSelected:v,ariaSetSize:a,ariaSort:null,ariaValueMax:a,ariaValueMin:a,ariaValueNow:a,ariaValueText:null,role:null}}),Gn=U({space:"html",attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},transform:gn,mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:B,acceptCharset:g,accessKey:g,action:null,allow:null,allowFullScreen:u,allowPaymentRequest:u,allowUserMedia:u,alt:null,as:null,async:u,autoCapitalize:null,autoComplete:g,autoFocus:u,autoPlay:u,blocking:g,capture:null,charSet:null,checked:u,cite:null,className:g,cols:a,colSpan:null,content:null,contentEditable:v,controls:u,controlsList:g,coords:a|B,crossOrigin:null,data:null,dateTime:null,decoding:null,default:u,defer:u,dir:null,dirName:null,disabled:u,download:dn,draggable:v,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:u,formTarget:null,headers:g,height:a,hidden:u,high:a,href:null,hrefLang:null,htmlFor:g,httpEquiv:g,id:null,imageSizes:null,imageSrcSet:null,inert:u,inputMode:null,integrity:null,is:null,isMap:u,itemId:null,itemProp:g,itemRef:g,itemScope:u,itemType:g,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:u,low:a,manifest:null,max:null,maxLength:a,media:null,method:null,min:null,minLength:a,multiple:u,muted:u,name:null,nonce:null,noModule:u,noValidate:u,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:u,optimum:a,pattern:null,ping:g,placeholder:null,playsInline:u,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:u,referrerPolicy:null,rel:g,required:u,reversed:u,rows:a,rowSpan:a,sandbox:g,scope:null,scoped:u,seamless:u,selected:u,shadowRootClonable:u,shadowRootDelegatesFocus:u,shadowRootMode:null,shape:null,size:a,sizes:null,slot:null,span:a,spellCheck:v,src:null,srcDoc:null,srcLang:null,srcSet:null,start:a,step:null,style:null,tabIndex:a,target:null,title:null,translate:null,type:null,typeMustMatch:u,useMap:null,value:v,width:a,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:g,axis:null,background:null,bgColor:null,border:a,borderColor:null,bottomMargin:a,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:u,declare:u,event:null,face:null,frame:null,frameBorder:null,hSpace:a,leftMargin:a,link:null,longDesc:null,lowSrc:null,marginHeight:a,marginWidth:a,noResize:u,noHref:u,noShade:u,noWrap:u,object:null,profile:null,prompt:null,rev:null,rightMargin:a,rules:null,scheme:null,scrolling:v,standby:null,summary:null,text:null,topMargin:a,valueType:null,version:null,vAlign:null,vLink:null,vSpace:a,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:u,disableRemotePlayback:u,prefix:null,property:null,results:a,security:null,unselectable:null}}),Zn=U({space:"svg",attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},transform:fn,properties:{about:S,accentHeight:a,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:a,amplitude:a,arabicForm:null,ascent:a,attributeName:null,attributeType:null,azimuth:a,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:a,by:null,calcMode:null,capHeight:a,className:g,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:a,diffuseConstant:a,direction:null,display:null,dur:null,divisor:a,dominantBaseline:null,download:u,dx:null,dy:null,edgeMode:null,editable:null,elevation:a,enableBackground:null,end:null,event:null,exponent:a,externalResourcesRequired:null,fill:null,fillOpacity:a,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:B,g2:B,glyphName:B,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:a,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:a,horizOriginX:a,horizOriginY:a,id:null,ideographic:a,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:a,k:a,k1:a,k2:a,k3:a,k4:a,kernelMatrix:S,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:a,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:a,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:a,overlineThickness:a,paintOrder:null,panose1:null,path:null,pathLength:a,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:g,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:a,pointsAtY:a,pointsAtZ:a,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:S,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:S,rev:S,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:S,requiredFeatures:S,requiredFonts:S,requiredFormats:S,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:a,specularExponent:a,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:a,strikethroughThickness:a,string:null,stroke:null,strokeDashArray:S,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:a,strokeOpacity:a,strokeWidth:null,style:null,surfaceScale:a,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:S,tabIndex:a,tableValues:null,target:null,targetX:a,targetY:a,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:S,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:a,underlineThickness:a,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:a,values:null,vAlphabetic:a,vMathematical:a,vectorEffect:null,vHanging:a,vIdeographic:a,version:null,vertAdvY:a,vertOriginX:a,vertOriginY:a,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:a,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null}}),Jn=/^data[-\w.:]+$/i,on=/-[a-z]/g,ne=/[A-Z]/g;function ee(n,l){const e=Y(l);let t=l,r=w;if(e in n.normal)return n.property[n.normal[e]];if(e.length>4&&e.slice(0,4)==="data"&&Jn.test(l)){if(l.charAt(4)==="-"){const o=l.slice(5).replace(on,te);t="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=l.slice(4);if(!on.test(o)){let i=o.replace(ne,le);i.charAt(0)!=="-"&&(i="-"+i),l="data"+i}}r=J}return new r(t,l)}function le(n){return"-"+n.toLowerCase()}function te(n){return n.charAt(1).toUpperCase()}const oe=pn([hn,mn,yn,vn,Gn],"html");pn([hn,mn,yn,vn,Zn],"svg");const re=["p","h1","h2","h3","h4","h5","h6","li"];function z(n,l){return n.type===l||typeof n.type=="object"&&n.type.tag===l||n.tag===l}function nn(n){return z(n,"text")||z(n,Symbol.for("v-txt"))}function _n(n){var l;return Array.isArray(n.children)||typeof n.children=="string"?n.children:typeof((l=n.children)==null?void 0:l.default)=="function"?n.children.default():[]}function H(n){if(!n)return"";if(Array.isArray(n))return n.map(H).join("");if(nn(n))return n.value||n.children||"";const l=_n(n);return Array.isArray(l)?l.map(H).filter(Boolean).join(""):""}function bn(n,l=[]){if(Array.isArray(n))return n.flatMap(t=>bn(t,l));let e=n;return l.some(t=>t==="*"||z(n,t))&&(e=_n(n)||n,!Array.isArray(e)&&re.some(t=>z(n,t))&&(e=[e])),e}function Pn(n,l=[]){return n=Array.isArray(n)?n:[n],l.length?n.flatMap(e=>Pn(bn(e,[l[0]]),l.slice(1))).filter(e=>!(nn(e)&&H(e).trim()==="")):n}function Sn(n,l=[]){return typeof l=="string"&&(l=l.split(/[,\s]/).map(e=>e.trim()).filter(Boolean)),l.length?Pn(n,l).reduce((e,t)=>(nn(t)?typeof e[e.length-1]=="string"?e[e.length-1]+=t.children:e.push(t.children):e.push(t),e),[]):n}function ae(n,l){return l.reduce((e,t)=>{const r=ie(n,t);return r!==void 0&&(e[t]=r),e},{})}function ie(n,l){return l.split(".").reduce((e,t)=>e&&e[t],n)}const G="default",wn=/^@|^v-on:/,Cn=/^:|^v-bind:/,ue=/^v-model/,se=["select","textarea","input"],ce=["math","svg"],pe=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(n=>[n,`prose-${n}`])),de=rn({name:"MDCRenderer",props:{body:{type:Object,required:!0},data:{type:Object,default:()=>({})},class:{type:[String,Object],default:void 0},tag:{type:[String,Boolean],default:void 0},prose:{type:Boolean,default:void 0},components:{type:Object,default:()=>({})},unwrap:{type:[Boolean,String],default:!1}},async setup(n){var d,p,m,f,b,k,O,P;const l=(m=(p=(d=In())==null?void 0:d.appContext)==null?void 0:p.app)==null?void 0:m.$nuxt,e=(l==null?void 0:l.$route)||(l==null?void 0:l._route),{mdc:t}=((f=l==null?void 0:l.$config)==null?void 0:f.public)||{},r={...(b=t==null?void 0:t.components)!=null&&b.prose&&n.prose!==!1?pe:{},...((k=t==null?void 0:t.components)==null?void 0:k.map)||{},...an(((P=(O=n.data)==null?void 0:O.mdc)==null?void 0:P.components)||{}),...n.components},o=I(()=>{var R;const C=(((R=n.body)==null?void 0:R.children)||[]).map(E=>E.tag||E.type).filter(E=>!j.includes(E));return Array.from(new Set(C)).sort().join(".")}),i=Rn({...n.data});Ln(()=>n.data,C=>{Object.assign(i,C)}),await we(n.body,{tags:r});function s(C,R){const E=C.split(".").length-1;return C.split(".").reduce((x,c,y)=>y==E&&x?(x[c]=R,x[c]):typeof x=="object"?x[c]:void 0,i)}return{tags:r,contentKey:o,route:e,runtimeData:i,updateRuntimeData:s}},render(n){var k,O;const{tags:l,tag:e,body:t,data:r,contentKey:o,route:i,unwrap:s,runtimeData:d,updateRuntimeData:p}=n;if(!t)return null;const m={...r,tags:l,$route:i,runtimeData:d,updateRuntimeData:p},f=e!==!1?Z(e||((k=m.component)==null?void 0:k.name)||m.component||"div"):void 0;return f?en(f,{...(O=m.component)==null?void 0:O.props,class:n.class,...this.$attrs,key:o},{default:b}):b==null?void 0:b();function b(){const P=Tn(t,en,{documentMeta:m,parentScope:m,resolveComponent:Z});return P!=null&&P.default?s?Sn(P.default(),typeof s=="string"?s.split(" "):["*"]):P.default():null}}});function me(n,l,e){const{documentMeta:t,parentScope:r,resolveComponent:o}=e;if(n.type==="text")return l(N,n.value);if(n.type==="comment")return l(Mn,null,n.value);const i=n.tag,s=kn(n,t.tags);if(n.tag==="binding")return he(n,l,t,r);const d=On(s)?f=>f:o;if(s==="script")return l("pre",{class:"script-to-pre"},`<script>
`+H(n)+`
<\/script>`);const p=d(s);typeof p=="object"&&(p.tag=i);const m=fe(n,t);return l(p,m,Tn(n,l,{documentMeta:t,parentScope:{...r,...m},resolveComponent:d}))}function Tn(n,l,e){const{documentMeta:t,parentScope:r,resolveComponent:o}=e,s=(n.children||[]).reduce((p,m)=>{if(!Pe(m))return p[G].children.push(m),p;const f=be(m);return p[f]=p[f]||{props:{},children:[]},m.type==="element"&&(p[f].props=m.props,p[f].children.push(...m.children||[])),p},{[G]:{props:{},children:[]}});return Object.entries(s).reduce((p,[m,{props:f,children:b}])=>(b.length&&(p[m]=(k={})=>{const O=ae(k,Object.keys(f||{}));let P=b.map(C=>me(C,l,{documentMeta:t,parentScope:{...r,...O},resolveComponent:o}));return f!=null&&f.unwrap&&(P=Sn(P,f.unwrap)),Se(P)}),p),{})}function he(n,l,e,t={}){var p,m;const r={...e.runtimeData,...t,$document:e,$doc:e},o=/\.|\[(\d+)\]/,s=((p=n.props)==null?void 0:p.value.trim().split(o).filter(Boolean)).reduce((f,b)=>{if(f&&b in f)return typeof f[b]=="function"?f[b]():f[b]},r),d=(m=n.props)==null?void 0:m.defaultValue;return l(N,s??d??"")}function fe(n,l){const{tag:e="",props:t={}}=n;return Object.keys(t).reduce(function(r,o){if(o==="__ignoreMap")return r;const i=t[o];if(ue.test(o))return ge(o,i,r,l,{native:se.includes(e)});if(o==="v-bind")return ye(o,i,r,l);if(wn.test(o))return ve(o,i,r,l);if(Cn.test(o))return _e(o,i,r,l);const{attribute:s}=ee(oe,o);return Array.isArray(i)&&i.every(d=>typeof d=="string")?(r[s]=i.join(" "),r):(r[s]=i,r)},{})}function ge(n,l,e,t,{native:r}){var d;const o=((d=n.match(/^v-model:([^=]+)/))==null?void 0:d[1])||"modelValue",i=r?"value":o,s=r?"onInput":`onUpdate:${o}`;return e[i]=q(l,t.runtimeData),e[s]=p=>{var m;t.updateRuntimeData(l,r?(m=p.target)==null?void 0:m.value:p)},e}function ye(n,l,e,t){const r=q(l,t);return e=Object.assign(e,r),e}function ve(n,l,e,t){return n=n.replace(wn,""),e.on=e.on||{},e.on[n]=()=>q(l,t),e}function _e(n,l,e,t){return n=n.replace(Cn,""),e[n]=q(l,t),e}const Z=n=>{if(typeof n=="string"){if(j.includes(n))return n;const l=un(M(n),!1);return!n||(l==null?void 0:l.name)==="AsyncComponentWrapper"||typeof l=="string"?l:"setup"in l?X(()=>new Promise(e=>e(l))):l}return n};function q(n,l){const e=n.split(".").reduce((t,r)=>typeof t=="object"?t[r]:void 0,l);return typeof e>"u"?Bn(n):e}function be(n){let l="";for(const e of Object.keys(n.props||{}))if(!(!e.startsWith("#")&&!e.startsWith("v-slot:"))){l=e.split(/[:#]/,2)[1];break}return l||G}function Pe(n){return n.tag==="template"}function On(n){return ce.includes(n)}function Se(n){const l=[];for(const e of n){const t=l[l.length-1];e.type===N&&(t==null?void 0:t.type)===N?t.children=t.children+e.children:l.push(e)}return l}async function we(n,l){if(!n)return;const e=Array.from(new Set(t(n,l)));await Promise.all(e.map(async r=>{if(r!=null&&r.render||r!=null&&r.ssrRender||r!=null&&r.__ssrInlineRender)return;const o=Z(r);o!=null&&o.__asyncLoader&&!o.__asyncResolved&&await o.__asyncLoader()}));function t(r,o){const i=r.tag;if(r.type==="text"||i==="binding"||r.type==="comment")return[];const s=kn(r,o.tags);if(On(s))return[];const d=[];r.type!=="root"&&!j.includes(s)&&d.push(s);for(const p of r.children||[])d.push(...t(p,o));return d}}function kn(n,l){var t;const e=n.tag;return!e||typeof((t=n.props)==null?void 0:t.__ignoreMap)<"u"?e:l[e]||l[M(e)]||l[cn(n.tag)]||e}function Ce(n){return{type:"root",children:n.value.map(En)}}function En(n){if(typeof n=="string")return{type:"text",value:n};const[l,e,...t]=n;return{type:"element",tag:l,props:e,children:t.map(En)}}const Te=()=>h(()=>import("./C_YUd8sv.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39]),import.meta.url),Oe=()=>h(()=>import("./CFhCo6Xl.js"),__vite__mapDeps([40,3,4]),import.meta.url),ke=()=>h(()=>import("./5qMKypGo.js"),__vite__mapDeps([41,3,4,42]),import.meta.url),Ee=()=>h(()=>import("./BqkI8_Y2.js"),__vite__mapDeps([43,3,4]),import.meta.url),De=()=>h(()=>import("./BwRF35hD.js"),__vite__mapDeps([44,3,4]),import.meta.url),Ae=()=>h(()=>import("./CpWPZZzq.js"),__vite__mapDeps([45,16,2,3,4,17]),import.meta.url),xe=()=>h(()=>import("./ym2bcCbs.js"),__vite__mapDeps([46,2,3,4,47]),import.meta.url),Re=()=>h(()=>import("./CU4Swui7.js"),__vite__mapDeps([48,33,3,4,2,34,49,16,17,40]),import.meta.url),Le=()=>h(()=>import("./QZgSRMm5.js"),__vite__mapDeps([50,2,3,4,49,16,17,40,51]),import.meta.url),Ie=()=>h(()=>import("./D0Q2vlZC.js"),__vite__mapDeps([52,11,3,4,12,49,16,2,17,40]),import.meta.url),Me=()=>h(()=>import("./S4CveBqF.js"),__vite__mapDeps([53,31,2,3,4,32,49,16,17,40]),import.meta.url),Be=()=>h(()=>import("./BMiieFhK.js"),__vite__mapDeps([54,16,2,3,4,17,49,40]),import.meta.url),Ue=()=>h(()=>import("./CPencGBp.js"),__vite__mapDeps([55,23,2,3,4,24,49,16,17,40]),import.meta.url),Ve=()=>h(()=>import("./DGb7sCPM.js"),__vite__mapDeps([56,35,2,3,4,36,49,16,17,40]),import.meta.url),je=()=>h(()=>import("./DJd38sqK.js"),__vite__mapDeps([57,6,2,3,4,7,8,9,49,16,17,40]),import.meta.url),$e=()=>h(()=>import("./TdpMVG71.js"),__vite__mapDeps([58,14,2,3,4,15,59]),import.meta.url),Ne=()=>h(()=>import("./CAXvA1MO.js"),__vite__mapDeps([60,14,2,3,4,15,49,16,17,40,25,26]),import.meta.url),ze=()=>h(()=>import("./drktTbWb.js"),__vite__mapDeps([61,16,2,3,4,17,18,19,49,40]),import.meta.url),He=()=>h(()=>import("./BzjrWCbB.js"),__vite__mapDeps([62,10,3,4,49,16,2,17,40]),import.meta.url),Fe=()=>h(()=>import("./B87Vs6H5.js"),__vite__mapDeps([63,38,3,4,49,16,2,17,40]),import.meta.url),We=()=>h(()=>import("./CvSt0gJV.js"),__vite__mapDeps([64,22,2,3,4,49,16,17,40,25,26]),import.meta.url),qe=()=>h(()=>import("./DshblvHu.js"),__vite__mapDeps([65,37,3,4,49,16,2,17,40]),import.meta.url),Ke=()=>h(()=>import("./CUpC7B1P.js"),__vite__mapDeps([66,13,14,2,3,4,15,16,17,49,40]),import.meta.url),Xe=()=>h(()=>import("./lx6SGZMd.js"),__vite__mapDeps([67,29,2,3,4,30,49,16,17,40]),import.meta.url),Ye=()=>h(()=>import("./C2SvpQ8Z.js"),__vite__mapDeps([68,27,3,4,28,49,16,2,17,40,25,26]),import.meta.url),Qe=()=>h(()=>import("./CU6a6CAY.js"),__vite__mapDeps([69,20,2,3,4,21,16,17,49,40]),import.meta.url),Ge=()=>h(()=>import("./C8CmMnqG.js"),__vite__mapDeps([70,7,3,4,8,49,16,2,17,40]),import.meta.url),Ze=()=>h(()=>import("./CpEIDLHc.js"),__vite__mapDeps([71,1,2,3,4,5,49,16,17,40]),import.meta.url),Dn=["ProseA","ProseBlockquote","ProseCode","ProseEm","ProseH1","ProseH2","ProseH3","ProseH4","ProseH5","ProseH6","ProseHr","ProseImg","ProseLi","ProseOl","ProseP","ProsePre","ProseScript","ProseStrong","ProseTable","ProseTbody","ProseTd","ProseTh","ProseThead","ProseTr","ProseUl"],An=["AllComponents","CodeBox","DocTable","DocTitle","DocTopic","WelcomePage","PaperPUTabs","PaperShowAccordion","PaperShowAudio","PaperShowAvatar","PaperShowBadge","PaperShowButton","PaperShowButtonIcon","PaperShowCheckbox","PaperShowDatepicker","PaperShowIcons","PaperShowInput","PaperShowModal","PaperShowProgress","PaperShowRadio","PaperShowSelect","PaperShowSwitch","PaperShowTable","PaperShowTag","PaperShowTextarea","PaperShowToast","PaperShowTooltip","PaperShowVideo"],Je=Object.freeze(Object.defineProperty({__proto__:null,AllComponents:Te,CodeBox:Oe,DocTable:ke,DocTitle:Ee,DocTopic:De,PaperPUTabs:xe,PaperShowAccordion:Re,PaperShowAudio:Le,PaperShowAvatar:Ie,PaperShowBadge:Me,PaperShowButton:Be,PaperShowButtonIcon:Ue,PaperShowCheckbox:Ve,PaperShowDatepicker:je,PaperShowIcons:$e,PaperShowInput:Ne,PaperShowModal:ze,PaperShowProgress:He,PaperShowRadio:Fe,PaperShowSelect:We,PaperShowSwitch:qe,PaperShowTable:Ke,PaperShowTag:Xe,PaperShowTextarea:Ye,PaperShowToast:Qe,PaperShowTooltip:Ge,PaperShowVideo:Ze,WelcomePage:Ae,globalComponents:Dn,localComponents:An},Symbol.toStringTag,{value:"Module"})),nl=rn({__name:"ContentRenderer",props:{value:{type:Object,required:!0},excerpt:{type:Boolean,default:!1},tag:{type:String,default:"div"},components:{type:Object,default:()=>({})},data:{type:Object,default:()=>({})},prose:{type:Boolean,default:void 0},class:{type:[String,Object],default:void 0},unwrap:{type:[Boolean,String],default:!1}},setup(n){var C,R,E,x;const l=["render","ssrRender","__ssrInlineRender"],e=n,t=!1,r=I(()=>{let c=e.value.body||e.value;return e.excerpt&&e.value.excerpt&&(c=e.value.excerpt),c.type==="minimal"?Ce(c):c}),o=I(()=>{var c,y;return!((y=(c=r.value)==null?void 0:c.children)!=null&&y.length)}),i=I(()=>{const{body:c,excerpt:y,..._}=e.value;return{..._,...e.data}}),s=Object.fromEntries(["p","a","blockquote","code","pre","code","em","h1","h2","h3","h4","h5","h6","hr","img","ul","ol","li","strong","table","thead","tbody","td","th","tr","script"].map(c=>[c,`prose-${c}`])),{mdc:d}=Un().public||{},p={...(C=d==null?void 0:d.components)!=null&&C.prose&&e.prose!==!1?s:{},...((R=d==null?void 0:d.components)==null?void 0:R.map)||{},...an(((x=(E=e.data)==null?void 0:E.mdc)==null?void 0:x.components)||{}),...e.components},m=I(()=>{}),f=I(()=>r.value?k(r.value,{tags:p}):{});function b(c){let y=c;if(typeof c=="string"){if(j.includes(c))return c;if(Dn.includes(M(c))?y=un(c,!1):An.includes(M(c))&&(y=X(()=>h(()=>Promise.resolve().then(()=>Je),void 0,import.meta.url).then(D=>{const A=D[M(c)];return A?A():void 0}))),typeof y=="string")return y}if(!y)return y;const _=y;return"__asyncLoader"in _?_:"setup"in _?X(()=>Promise.resolve(_)):_}function k(c,y){if(!c)return;const _=Array.from(new Set(O(c,y))),T={};for(const[D,A]of _)if(!T[D]){if(typeof A=="object"&&l.some(xn=>Object.hasOwnProperty.call(A,xn))){T[D]=A;continue}T[D]=b(A)}return T}function O(c,y){const _=c.tag;if(c.type==="text"||_==="binding"||c.type==="comment")return[];const T=P(c,y.tags),D=[];c.type!=="root"&&!j.includes(T)&&D.push([_,T]);for(const A of c.children||[])D.push(...O(A,y));return D}function P(c,y){var T;const _=c.tag;return!_||typeof((T=c.props)==null?void 0:T.__ignoreMap)<"u"?_:y[_]||y[M(_)]||y[cn(c.tag)]||_}return(c,y)=>o.value?jn(c.$slots,"empty",{key:1,body:r.value,data:i.value,dataContentId:ln(t)?n.value.id:void 0}):(Nn(),Vn(de,{key:m.value,body:r.value,data:i.value,class:$n(e.class),tag:e.tag,prose:e.prose,unwrap:e.unwrap,components:f.value,"data-content-id":ln(t)?n.value.id:void 0},null,8,["body","data","class","tag","prose","unwrap","components","data-content-id"]))}}),al=Object.assign(nl,{__name:"ContentRenderer"}),F=(n,l)=>{const e=n._conditions;return e.length>0?`(${e.join(` ${l} `)})`:""},W=n=>{const l=[],e={_conditions:l,where(t,r,o){let i;switch(r.toUpperCase()){case"IN":case"NOT IN":if(Array.isArray(o)){const s=o.map(d=>V(d)).join(", ");i=`"${String(t)}" ${r.toUpperCase()} (${s})`}else throw new TypeError(`Value for ${r} must be an array`);break;case"BETWEEN":case"NOT BETWEEN":if(Array.isArray(o)&&o.length===2)i=`"${String(t)}" ${r.toUpperCase()} ${V(o[0])} AND ${V(o[1])}`;else throw new Error(`Value for ${r} must be an array with two elements`);break;case"IS NULL":case"IS NOT NULL":i=`"${String(t)}" ${r.toUpperCase()}`;break;case"LIKE":case"NOT LIKE":i=`"${String(t)}" ${r.toUpperCase()} ${V(o)}`;break;default:i=`"${String(t)}" ${r} ${V(typeof o=="boolean"?Number(o):o)}`}return l.push(`${i}`),e},andWhere(t){const r=t(W());return l.push(F(r,"AND")),e},orWhere(t){const r=t(W());return l.push(F(r,"OR")),e}};return e},el=(n,l)=>{const e={conditions:[],selectedFields:[],offset:0,limit:0,orderBy:[],count:{field:"",distinct:!1}},t={__params:e,andWhere(o){const i=o(W());return e.conditions.push(F(i,"AND")),t},orWhere(o){const i=o(W());return e.conditions.push(F(i,"OR")),t},path(o){return t.where("path","=",zn(o))},skip(o){return e.offset=o,t},where(o,i,s){return t.andWhere(d=>d.where(String(o),i,s)),t},limit(o){return e.limit=o,t},select(...o){return o.length&&e.selectedFields.push(...o),t},order(o,i){return e.orderBy.push(`"${String(o)}" ${i}`),t},async all(){return l(n,r()).then(o=>o||[])},async first(){return l(n,r({limit:1})).then(o=>o[0]||null)},async count(o="*",i=!1){return l(n,r({count:{field:String(o),distinct:i}})).then(s=>s[0].count)}};function r(o={}){let i="SELECT ";if(o!=null&&o.count)i+=`COUNT(${o.count.distinct?"DISTINCT ":""}${o.count.field}) as count`;else{const d=Array.from(new Set(e.selectedFields));i+=d.length>0?d.map(p=>`"${String(p)}"`).join(", "):"*"}i+=` FROM ${Fn[String(n)]}`,e.conditions.length>0&&(i+=` WHERE ${e.conditions.join(" AND ")}`),e.orderBy.length>0?i+=` ORDER BY ${e.orderBy.join(", ")}`:i+=" ORDER BY stem ASC";const s=(o==null?void 0:o.limit)||e.limit;return s>0&&(e.offset>0?i+=` LIMIT ${s} OFFSET ${e.offset}`:i+=` LIMIT ${s}`),i}return t};function V(n){return`'${String(n).replace(/'/g,"''")}'`}const il=n=>{var e,t;const l=(t=(e=Hn())==null?void 0:e.ssrContext)==null?void 0:t.event;return el(n,(r,o)=>ll(l,r,o))};async function ll(n,l,e){return tl(l,e)}async function tl(n,l){return await h(()=>import("./DImGU0d8.js"),__vite__mapDeps([72,3,4,73]),import.meta.url).then(t=>t.loadDatabaseAdapter(n)).then(t=>t.all(l))}export{al as _,il as q};
