import{b as v}from"./index.dd4e9bf4.js";import"./chunk-MTWSNRX5.47c61f42.js";import"./vendor.1a767ab4.js";import"./index.ce36710c.js";function w(e,r){return r.forEach(function(n){Object.keys(n).forEach(function(f){if(f!=="default"&&!(f in e)){var d=Object.getOwnPropertyDescriptor(n,f);Object.defineProperty(e,f,d.get?d:{enumerable:!0,get:function(){return n[f]}})}})}),Object.freeze(e)}var m={exports:{}},t=m.exports={},o,i;function h(){throw new Error("setTimeout has not been defined")}function p(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?o=setTimeout:o=h}catch{o=h}try{typeof clearTimeout=="function"?i=clearTimeout:i=p}catch{i=p}})();function g(e){if(o===setTimeout)return setTimeout(e,0);if((o===h||!o)&&setTimeout)return o=setTimeout,setTimeout(e,0);try{return o(e,0)}catch{try{return o.call(null,e,0)}catch{return o.call(this,e,0)}}}function y(e){if(i===clearTimeout)return clearTimeout(e);if((i===p||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch{try{return i.call(null,e)}catch{return i.call(this,e)}}}var u=[],s=!1,a,l=-1;function j(){!s||!a||(s=!1,a.length?u=a.concat(u):l=-1,u.length&&T())}function T(){if(!s){var e=g(j);s=!0;for(var r=u.length;r;){for(a=u,u=[];++l<r;)a&&a[l].run();l=-1,r=u.length}a=null,s=!1,y(e)}}t.nextTick=function(e){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];u.push(new b(e,r)),u.length===1&&!s&&g(T)};function b(e,r){this.fun=e,this.array=r}b.prototype.run=function(){this.fun.apply(null,this.array)};t.title="browser";t.browser=!0;t.env={};t.argv=[];t.version="";t.versions={};function c(){}t.on=c;t.addListener=c;t.once=c;t.off=c;t.removeListener=c;t.removeAllListeners=c;t.emit=c;t.prependListener=c;t.prependOnceListener=c;t.listeners=function(e){return[]};t.binding=function(e){throw new Error("process.binding is not supported")};t.cwd=function(){return"/"};t.chdir=function(e){throw new Error("process.chdir is not supported")};t.umask=function(){return 0};var x=m.exports,O=Object.freeze(w({__proto__:null,[Symbol.toStringTag]:"Module",default:x},[m.exports]));global.hasOwnProperty("Buffer")||(global.Buffer=v.Buffer);global.process=O;
