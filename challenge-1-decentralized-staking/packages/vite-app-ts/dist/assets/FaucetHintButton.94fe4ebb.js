import{r as o}from"./vendor.74ebd2ee.js";import{aC as g,aD as F,aE as v,B as j,a as B,Q as b}from"./Main.7a088ea9.js";import{aa as k,X as E}from"./App.e46cb77f.js";import"./chunk-MTWSNRX5.47c61f42.js";import{a as r,F as l,j as S}from"./main.9e942201.js";const y=(t,c)=>{var a;return(a=(c==null?void 0:c.ethersProvider)&&(c==null?void 0:c.chainId)===t.targetNetwork.chainId&&t.targetNetwork.name==="localhost")!=null?a:!1},N=t=>{var u;const c=o.exports.useContext(k),a=E(),s=g((u=a.account)!=null?u:""),f=t.scaffoldAppProviders.localProvider.getSigner(),n=b(c,f,void 0,void 0,!0),e=F(y(t.scaffoldAppProviders,a),500,{trailing:!0}),[d,i]=o.exports.useState(!1),p=o.exports.useMemo(()=>{const m=parseFloat(v(s.toBigInt(),"ether"));return!d&&e&&s&&m<.002&&(a==null?void 0:a.account)!=null?r("div",{style:{paddingTop:10,paddingLeft:10},children:r(j,{type:"primary",onClick:()=>{n&&(a==null?void 0:a.account)!=null&&n({to:a==null?void 0:a.account,value:B("0.01").toHexString()}).then(()=>i(!0)).catch(()=>i(!1))},children:"\u{1F4B0} Grab funds from the faucet \u26FD\uFE0F"})}):r(l,{})},[e,s,n,a==null?void 0:a.account]);return S(l,{children:[" ",p," "]})};export{N as F,y as g};
