import{_ as o}from"./main.9e942201.js";import{ab as e}from"./App.e46cb77f.js";import{aW as n}from"./Main.7a088ea9.js";import"./vendor.74ebd2ee.js";import"./chunk-MTWSNRX5.47c61f42.js";import"./index.f05acd56.js";const C=async()=>{const a=(await o(()=>import("./index.cfb2cdae.js"),["assets/index.cfb2cdae.js","assets/App.e46cb77f.js","assets/App.e8e595f6.css","assets/main.9e942201.js","assets/vendor.74ebd2ee.js","assets/subscriptionManager.1aba8eed.js","assets/index.1b0e3b2a.js","assets/index.fb76426e.js","assets/elliptic.2aa57b6b.js","assets/Main.7a088ea9.js","assets/Main.6ee88e00.css","assets/chunk-MTWSNRX5.47c61f42.js","assets/index.f05acd56.js"])).default,i=(await o(()=>import("./fortmatic.80bf14aa.js").then(function(t){return t.f}),[])).default,{WalletLink:c}=await o(()=>import("./index.54ed8add.js").then(function(t){return t.i}),["assets/index.54ed8add.js","assets/vendor.74ebd2ee.js","assets/subscriptionManager.1aba8eed.js","assets/App.e46cb77f.js","assets/App.e8e595f6.css","assets/main.9e942201.js","assets/index.1b0e3b2a.js","assets/index.fb76426e.js"]),r=(await o(()=>import("./index.500e3159.js"),["assets/index.500e3159.js","assets/App.e46cb77f.js","assets/App.e8e595f6.css","assets/main.9e942201.js","assets/vendor.74ebd2ee.js","assets/index.fb76426e.js","assets/Main.7a088ea9.js","assets/Main.6ee88e00.css","assets/chunk-MTWSNRX5.47c61f42.js","assets/index.f05acd56.js"])).default,s=(await o(()=>import("./index.b1f4d3b5.js").then(function(t){return t.i}),["assets/index.b1f4d3b5.js","assets/vendor.74ebd2ee.js","assets/elliptic.2aa57b6b.js","assets/subscriptionManager.1aba8eed.js","assets/App.e46cb77f.js","assets/App.e8e595f6.css","assets/main.9e942201.js","assets/index.1b0e3b2a.js","assets/index.fb76426e.js","assets/Main.7a088ea9.js","assets/Main.6ee88e00.css","assets/chunk-MTWSNRX5.47c61f42.js","assets/index.f05acd56.js"])).default,{ConnectToStaticJsonRpcProvider:p}=await o(()=>import("./index.9507034b.js"),["assets/index.9507034b.js","assets/App.e46cb77f.js","assets/App.e8e595f6.css","assets/main.9e942201.js","assets/vendor.74ebd2ee.js"]),{StaticJsonRpcProvider:l}=await o(()=>import("./App.e46cb77f.js").then(function(t){return t.aT}),["assets/App.e46cb77f.js","assets/App.e8e595f6.css","assets/main.9e942201.js","assets/vendor.74ebd2ee.js"]),d={display:{logo:"https://user-images.githubusercontent.com/9419140/128913641-d025bc0c-e059-42de-a57b-422f196867ce.png",name:"Portis",description:"Connect to Portis App"},package:a,options:{id:"6255fb2b-58c8-433b-a2c9-62098c05ddc9"}},u={package:i,options:{key:"pk_live_5A7C91B2FC585A17"}},_=new c({appName:"coinbase"}).makeWeb3Provider(`https://mainnet.infura.io/v3/${e}`,1),m={display:{logo:"https://play-lh.googleusercontent.com/PjoJoG27miSglVBXoXrxBSLveV6e3EeBPpNY55aiUUBM9Q1RCETKCOqdOkX2ZydqVf0",name:"Coinbase",description:"Connect to your Coinbase Wallet (not coinbase.com)"},package:_,connector:async(t,v)=>(await t.enable(),t)},f={package:s},h={package:r,options:{bridge:"https://polygon.bridge.walletconnect.org",infuraId:e,rpc:{1:`https://mainnet.infura.io/v3/${e}`,42:`https://kovan.infura.io/v3/${e}`,100:"https://dai.poa.network"}}},b={display:{logo:"https://avatars.githubusercontent.com/u/56928858?s=200&v=4",name:"BurnerWallet",description:"\u{1F525} Connect to localhost with a burner wallet \u{1F525}"},package:l,connector:p,options:{chainId:n.chainId,rpc:{[n.chainId]:n.rpcUrl}}};return{cacheProvider:!0,theme:"light",providerOptions:{"custom-localhost":b,walletconnect:h,portis:d,fortmatic:u,authereum:f,"custom-walletlink":m}}};export{C as getWeb3ModalConfig};
