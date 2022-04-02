import{_ as _e,b as Be,c as je,e as $e,m as X,C as L,g as M,h as R,aF as Te,aa as ze,aG as Me,aH as Le,aI as De,a6 as Fe,aJ as He,aK as We,aL as Ge,aM as Ue,aN as Ke,i as Xe,r as Je,aO as Ye,j as ce,R as le,T as qe,ab as Qe,v as ie,ae as ue,q as Ve,K as de,d as Y,an as Ze,W as er,aP as rr,P as tr,aA as ar,aQ as nr}from"./Main.7a088ea9.js";import{X as or,a4 as me}from"./App.e46cb77f.js";import{r as t,_ as A}from"./vendor.74ebd2ee.js";import{j as D,F as fe,a as B}from"./main.9e942201.js";import{F as sr}from"./FaucetHintButton.94fe4ebb.js";import"./chunk-MTWSNRX5.47c61f42.js";import{D as cr}from"./DownOutlined.969e6a72.js";import{g as lr,D as ir}from"./dropdown.c7b8bc73.js";import{M as ve}from"./index.43955424.js";import{u as ur}from"./useBreakpoint.d2aece02.js";import"./index.f05acd56.js";import"./LeftOutlined.79c796b5.js";var dr=function(n){_e(a,n);var e=Be(a);function a(){var r;return je(this,a),r=e.apply(this,arguments),r.state={error:void 0,info:{componentStack:""}},r}return $e(a,[{key:"componentDidCatch",value:function(o,s){this.setState({error:o,info:s})}},{key:"render",value:function(){var o=this.props,s=o.message,i=o.description,l=o.children,c=this.state,d=c.error,u=c.info,m=u&&u.componentStack?u.componentStack:null,f=typeof s=="undefined"?(d||"").toString():s,p=typeof i=="undefined"?m:i;return d?t.exports.createElement(xe,{type:"error",message:f,description:t.exports.createElement("pre",null,p)}):l}}]),a}(t.exports.Component),mr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},fr={success:Le,info:De,error:Fe,warning:He},vr={success:We,info:Ge,error:Ue,warning:Ke},pe=function(e){var a,r=e.description,o=e.prefixCls,s=e.message,i=e.banner,l=e.className,c=l===void 0?"":l,d=e.style,u=e.onMouseEnter,m=e.onMouseLeave,f=e.onClick,p=e.afterClose,y=e.showIcon,S=e.closable,g=e.closeText,h=e.action,b=mr(e,["description","prefixCls","message","banner","className","style","onMouseEnter","onMouseLeave","onClick","afterClose","showIcon","closable","closeText","action"]),C=t.exports.useState(!1),E=X(C,2),v=E[0],k=E[1],T=t.exports.useRef(),I=t.exports.useContext(L),F=I.getPrefixCls,H=I.direction,x=F("alert",o),_=function(N){var P;k(!0),(P=b.onClose)===null||P===void 0||P.call(b,N)},q=function(){var N=b.type;return N!==void 0?N:i?"warning":"info"},j=g?!0:S,J=q(),Q=function(){var N=b.icon,P=(r?vr:fr)[J]||null;return N?Me(N,t.exports.createElement("span",{className:"".concat(x,"-icon")},N),function(){return{className:M("".concat(x,"-icon"),R({},N.props.className,N.props.className))}}):t.exports.createElement(P,{className:"".concat(x,"-icon")})},V=function(){return j?t.exports.createElement("button",{type:"button",onClick:_,className:"".concat(x,"-close-icon"),tabIndex:0},g?t.exports.createElement("span",{className:"".concat(x,"-close-text")},g):t.exports.createElement(ze,null)):null},U=i&&y===void 0?!0:y,W=M(x,"".concat(x,"-").concat(J),(a={},R(a,"".concat(x,"-with-description"),!!r),R(a,"".concat(x,"-no-icon"),!U),R(a,"".concat(x,"-banner"),!!i),R(a,"".concat(x,"-rtl"),H==="rtl"),a),c),w=lr(b);return t.exports.createElement(Te,{visible:!v,motionName:"".concat(x,"-motion"),motionAppear:!1,motionEnter:!1,onLeaveStart:function(N){return{maxHeight:N.offsetHeight}},onLeaveEnd:p},function($){var N=$.className,P=$.style;return t.exports.createElement("div",A({ref:T,"data-show":!v,className:M(W,N),style:A(A({},d),P),onMouseEnter:u,onMouseLeave:m,onClick:f,role:"alert"},w),U?Q():null,t.exports.createElement("div",{className:"".concat(x,"-content")},t.exports.createElement("div",{className:"".concat(x,"-message")},s),t.exports.createElement("div",{className:"".concat(x,"-description")},r)),h?t.exports.createElement("div",{className:"".concat(x,"-action")},h):null,V())})};pe.ErrorBoundary=dr;var xe=pe,re=t.exports.createContext("default"),ge=function(e){var a=e.children,r=e.size;return t.exports.createElement(re.Consumer,null,function(o){return t.exports.createElement(re.Provider,{value:r||o},a)})},pr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},xr=function(e,a){var r,o,s=t.exports.useContext(re),i=t.exports.useState(1),l=X(i,2),c=l[0],d=l[1],u=t.exports.useState(!1),m=X(u,2),f=m[0],p=m[1],y=t.exports.useState(!0),S=X(y,2),g=S[0],h=S[1],b=t.exports.useRef(),C=t.exports.useRef(),E=Xe(a,b),v=t.exports.useContext(L),k=v.getPrefixCls,T=function(){if(!(!C.current||!b.current)){var O=C.current.offsetWidth,z=b.current.offsetWidth;if(O!==0&&z!==0){var se=e.gap,ee=se===void 0?4:se;ee*2<z&&d(z-ee*2<O?(z-ee*2)/O:1)}}};t.exports.useEffect(function(){p(!0)},[]),t.exports.useEffect(function(){h(!0),d(1)},[e.src]),t.exports.useEffect(function(){T()},[e.gap]);var I=function(){var O=e.onError,z=O?O():void 0;z!==!1&&h(!1)},F=e.prefixCls,H=e.shape,x=e.size,_=e.src,q=e.srcSet,j=e.icon,J=e.className,Q=e.alt,V=e.draggable,U=e.children,W=pr(e,["prefixCls","shape","size","src","srcSet","icon","className","alt","draggable","children"]),w=x==="default"?s:x,$=ur(),N=t.exports.useMemo(function(){if(Je(w)!=="object")return{};var K=Ye.find(function(z){return $[z]}),O=w[K];return O?{width:O,height:O,lineHeight:"".concat(O,"px"),fontSize:j?O/2:18}:{}},[$,w]);ce(!(typeof j=="string"&&j.length>2),"Avatar","`icon` is using ReactNode instead of string naming in v4. Please check `".concat(j,"` at https://ant.design/components/icon"));var P=k("avatar",F),Se=M((r={},R(r,"".concat(P,"-lg"),w==="large"),R(r,"".concat(P,"-sm"),w==="small"),r)),oe=t.exports.isValidElement(_),we=M(P,Se,(o={},R(o,"".concat(P,"-").concat(H),!!H),R(o,"".concat(P,"-image"),oe||_&&g),R(o,"".concat(P,"-icon"),!!j),o),J),Ae=typeof w=="number"?{width:w,height:w,lineHeight:"".concat(w,"px"),fontSize:j?w/2:18}:{},G;if(typeof _=="string"&&g)G=t.exports.createElement("img",{src:_,draggable:V,srcSet:q,onError:I,alt:Q});else if(oe)G=_;else if(j)G=j;else if(f||c!==1){var Z="scale(".concat(c,") translateX(-50%)"),ke={msTransform:Z,WebkitTransform:Z,transform:Z},Ie=typeof w=="number"?{lineHeight:"".concat(w,"px")}:{};G=t.exports.createElement(le,{onResize:T},t.exports.createElement("span",{className:"".concat(P,"-string"),ref:function(O){C.current=O},style:A(A({},Ie),ke)},U))}else G=t.exports.createElement("span",{className:"".concat(P,"-string"),style:{opacity:0},ref:function(O){C.current=O}},U);return delete W.onError,delete W.gap,t.exports.createElement("span",A({},W,{style:A(A(A({},Ae),N),W.style),className:we,ref:E}),G)},te=t.exports.forwardRef(xr);te.displayName="Avatar";te.defaultProps={shape:"circle",size:"default"};var he=te,be=function(e){if(!e)return null;var a=typeof e=="function";return a?e():e},gr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},ae=t.exports.forwardRef(function(n,e){var a=n.prefixCls,r=n.title,o=n.content,s=gr(n,["prefixCls","title","content"]),i=t.exports.useContext(L),l=i.getPrefixCls,c=function(f){return t.exports.createElement(t.exports.Fragment,null,r&&t.exports.createElement("div",{className:"".concat(f,"-title")},be(r)),t.exports.createElement("div",{className:"".concat(f,"-inner-content")},be(o)))},d=l("popover",a),u=l();return t.exports.createElement(qe,A({},s,{prefixCls:d,ref:e,overlay:c(d),transitionName:Qe(u,"zoom-big",s.transitionName)}))});ae.displayName="Popover";ae.defaultProps={placement:"top",trigger:"hover",mouseEnterDelay:.1,mouseLeaveDelay:.1,overlayStyle:{}};var hr=ae,br=function(e){var a=t.exports.useContext(L),r=a.getPrefixCls,o=a.direction,s=e.prefixCls,i=e.className,l=i===void 0?"":i,c=e.maxCount,d=e.maxStyle,u=e.size,m=r("avatar-group",s),f=M(m,R({},"".concat(m,"-rtl"),o==="rtl"),l),p=e.children,y=e.maxPopoverPlacement,S=y===void 0?"top":y,g=ie(p).map(function(E,v){return ue(E,{key:"avatar-key-".concat(v)})}),h=g.length;if(c&&c<h){var b=g.slice(0,c),C=g.slice(c,h);return b.push(t.exports.createElement(hr,{key:"avatar-popover-key",content:C,trigger:"hover",placement:S,overlayClassName:"".concat(m,"-popover")},t.exports.createElement(he,{style:d},"+".concat(h-c)))),t.exports.createElement(ge,{size:u},t.exports.createElement("div",{className:f,style:e.style},b))}return t.exports.createElement(ge,{size:u},t.exports.createElement("div",{className:f,style:e.style},g))},yr=br,ye=he;ye.Group=yr;var Cr=ye,Er=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a},Ce=function(e){var a=e.prefixCls,r=e.separator,o=r===void 0?"/":r,s=e.children,i=e.overlay,l=e.dropdownProps,c=Er(e,["prefixCls","separator","children","overlay","dropdownProps"]),d=t.exports.useContext(L),u=d.getPrefixCls,m=u("breadcrumb",a),f=function(S){return i?t.exports.createElement(ir,A({overlay:i,placement:"bottomCenter"},l),t.exports.createElement("span",{className:"".concat(m,"-overlay-link")},S,t.exports.createElement(cr,null))):S},p;return"href"in c?p=t.exports.createElement("a",A({className:"".concat(m,"-link")},c),s):p=t.exports.createElement("span",A({className:"".concat(m,"-link")},c),s),p=f(p),s?t.exports.createElement("span",null,p,o&&t.exports.createElement("span",{className:"".concat(m,"-separator")},o)):null};Ce.__ANT_BREADCRUMB_ITEM=!0;var Ee=Ce,Ne=function(e){var a=e.children,r=t.exports.useContext(L),o=r.getPrefixCls,s=o("breadcrumb");return t.exports.createElement("span",{className:"".concat(s,"-separator")},a||"/")};Ne.__ANT_BREADCRUMB_SEPARATOR=!0;var Nr=Ne,Pr=globalThis&&globalThis.__rest||function(n,e){var a={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(a[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(n);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(n,r[o])&&(a[r[o]]=n[r[o]]);return a};function Or(n,e){if(!n.breadcrumbName)return null;var a=Object.keys(e).join("|"),r=n.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(o,s){return e[s]||o});return r}function Rr(n,e,a,r){var o=a.indexOf(n)===a.length-1,s=Or(n,e);return o?t.exports.createElement("span",null,s):t.exports.createElement("a",{href:"#/".concat(r.join("/"))},s)}var Pe=function(e,a){return e=(e||"").replace(/^\//,""),Object.keys(a).forEach(function(r){e=e.replace(":".concat(r),a[r])}),e},Sr=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",r=arguments.length>2?arguments[2]:void 0,o=Ve(e),s=Pe(a,r);return s&&o.push(s),o},ne=function(e){var a=e.prefixCls,r=e.separator,o=r===void 0?"/":r,s=e.style,i=e.className,l=e.routes,c=e.children,d=e.itemRender,u=d===void 0?Rr:d,m=e.params,f=m===void 0?{}:m,p=Pr(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),y=t.exports.useContext(L),S=y.getPrefixCls,g=y.direction,h,b=S("breadcrumb",a);if(l&&l.length>0){var C=[];h=l.map(function(v){var k=Pe(v.path,f);k&&C.push(k);var T;return v.children&&v.children.length&&(T=t.exports.createElement(ve,null,v.children.map(function(I){return t.exports.createElement(ve.Item,{key:I.path||I.breadcrumbName},u(I,f,l,Sr(C,I.path,f)))}))),t.exports.createElement(Ee,{overlay:T,separator:o,key:k||v.breadcrumbName},u(v,f,l,C))})}else c&&(h=ie(c).map(function(v,k){return v&&(ce(v.type&&(v.type.__ANT_BREADCRUMB_ITEM===!0||v.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),ue(v,{separator:o,key:k}))}));var E=M(b,R({},"".concat(b,"-rtl"),g==="rtl"),i);return t.exports.createElement("div",A({className:E,style:s},p),h)};ne.Item=Ee;ne.Separator=Nr;var wr=ne,Ar={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},kr=Ar,Oe=function(e,a){return t.exports.createElement(de,Y(Y({},e),{},{ref:a,icon:kr}))};Oe.displayName="ArrowLeftOutlined";var Ir=t.exports.forwardRef(Oe),_r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},Br=_r,Re=function(e,a){return t.exports.createElement(de,Y(Y({},e),{},{ref:a,icon:Br}))};Re.displayName="ArrowRightOutlined";var jr=t.exports.forwardRef(Re),$r=function(e,a,r){return!a||!r?null:t.exports.createElement(er,{componentName:"PageHeader"},function(o){var s=o.back;return t.exports.createElement("div",{className:"".concat(e,"-back")},t.exports.createElement(rr,{onClick:function(l){r==null||r(l)},className:"".concat(e,"-back-button"),"aria-label":s},a))})},Tr=function(e){return t.exports.createElement(wr,e)},zr=function(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:a==="rtl"?t.exports.createElement(jr,null):t.exports.createElement(Ir,null)},Mr=function(e,a){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",o=a.title,s=a.avatar,i=a.subTitle,l=a.tags,c=a.extra,d=a.onBack,u="".concat(e,"-heading"),m=o||i||l||c;if(!m)return null;var f=zr(a,r),p=$r(e,f,d),y=p||s||m;return t.exports.createElement("div",{className:u},y&&t.exports.createElement("div",{className:"".concat(u,"-left")},p,s&&t.exports.createElement(Cr,s),o&&t.exports.createElement("span",{className:"".concat(u,"-title"),title:typeof o=="string"?o:void 0},o),i&&t.exports.createElement("span",{className:"".concat(u,"-sub-title"),title:typeof i=="string"?i:void 0},i),l&&t.exports.createElement("span",{className:"".concat(u,"-tags")},l)),c&&t.exports.createElement("span",{className:"".concat(u,"-extra")},c))},Lr=function(e,a){return a?t.exports.createElement("div",{className:"".concat(e,"-footer")},a):null},Dr=function(e,a){return t.exports.createElement("div",{className:"".concat(e,"-content")},a)},Fr=function(e){var a=t.exports.useState(!1),r=X(a,2),o=r[0],s=r[1],i=function(c){var d=c.width;s(d<768)};return t.exports.createElement(Ze,null,function(l){var c,d=l.getPrefixCls,u=l.pageHeader,m=l.direction,f=e.prefixCls,p=e.style,y=e.footer,S=e.children,g=e.breadcrumb,h=e.breadcrumbRender,b=e.className,C=!0;"ghost"in e?C=e.ghost:u&&"ghost"in u&&(C=u.ghost);var E=d("page-header",f),v=function(){var _;return((_=g)===null||_===void 0?void 0:_.routes)?Tr(g):null},k=v(),T=g&&"props"in g,I=(h==null?void 0:h(e,k))||k,F=T?g:I,H=M(E,b,(c={"has-breadcrumb":!!F,"has-footer":!!y},R(c,"".concat(E,"-ghost"),C),R(c,"".concat(E,"-rtl"),m==="rtl"),R(c,"".concat(E,"-compact"),o),c));return t.exports.createElement(le,{onResize:i},t.exports.createElement("div",{className:H,style:p},F,Mr(E,e,m),S&&Dr(E,S),Lr(E,y)))})},Hr=Fr;const rt=n=>{var l,c,d;const e=or(),a=e.chainId,r=tr(e.chainId,"fast",ar(e.chainId)),o=D(fe,{children:[B("div",{children:B(Hr,{title:"\u{1F3F0} BuidlGuidl",subTitle:D("span",{children:["v2.1 - [",D("a",{href:"https://youtu.be/aYMj00JoIug",target:"_blank",rel:"noreferrer",children:[B("span",{style:{marginRight:4},children:"\u{1F3A5} "})," 8min speed run"]}),"] - [",D("a",{href:"https://trello.com/b/ppbUs796/buidlguidlcom-idea-board",target:"_blank",rel:"noreferrer",children:[B("span",{style:{marginRight:4},children:"\u{1F4A1} "})," trello"]}),"]"," "]}),style:{cursor:"pointer"}})}),n.children]}),s=D("div",{style:{position:"fixed",textAlign:"right",right:0,top:0,padding:10},children:[B(nr,{createLoginConnector:n.scaffoldAppProviders.createLoginConnector,ensProvider:n.scaffoldAppProviders.mainnetProvider,price:n.price,blockExplorer:n.scaffoldAppProviders.targetNetwork.blockExplorer,hasContextConnect:!0}),B(sr,{scaffoldAppProviders:n.scaffoldAppProviders,gasPrice:r}),n.children]});let i;if(a&&a!=n.scaffoldAppProviders.targetNetwork.chainId){const u=D("div",{children:["You have ",B("b",{children:(l=me(a))==null?void 0:l.name})," selected and you need to be on"," ",B("b",{children:(d=(c=me(n.scaffoldAppProviders.targetNetwork))==null?void 0:c.name)!=null?d:"UNKNOWN"}),"."]});i=B("div",{style:{zIndex:2,position:"absolute",right:0,top:60,padding:16},children:B(xe,{message:"\u26A0\uFE0F Wrong Network",description:u,type:"error",closable:!1})})}else i=B("div",{style:{position:"absolute",right:18,top:54,padding:10,color:n.scaffoldAppProviders.targetNetwork.color},children:n.scaffoldAppProviders.targetNetwork.name});return D(fe,{children:[o,i,s]})};export{rt as MainPageHeader};
