function Q2(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function nd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var N0={exports:{}},Bo={},R0={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=Symbol.for("react.element"),K2=Symbol.for("react.portal"),Y2=Symbol.for("react.fragment"),X2=Symbol.for("react.strict_mode"),Z2=Symbol.for("react.profiler"),eb=Symbol.for("react.provider"),tb=Symbol.for("react.context"),nb=Symbol.for("react.forward_ref"),rb=Symbol.for("react.suspense"),ib=Symbol.for("react.memo"),sb=Symbol.for("react.lazy"),Hf=Symbol.iterator;function ab(e){return e===null||typeof e!="object"?null:(e=Hf&&e[Hf]||e["@@iterator"],typeof e=="function"?e:null)}var L0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D0=Object.assign,M0={};function Ni(e,t,n){this.props=e,this.context=t,this.refs=M0,this.updater=n||L0}Ni.prototype.isReactComponent={};Ni.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ni.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function I0(){}I0.prototype=Ni.prototype;function rd(e,t,n){this.props=e,this.context=t,this.refs=M0,this.updater=n||L0}var id=rd.prototype=new I0;id.constructor=rd;D0(id,Ni.prototype);id.isPureReactComponent=!0;var zf=Array.isArray,_0=Object.prototype.hasOwnProperty,sd={current:null},O0={key:!0,ref:!0,__self:!0,__source:!0};function U0(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)_0.call(t,r)&&!O0.hasOwnProperty(r)&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return{$$typeof:$s,type:e,key:s,ref:a,props:i,_owner:sd.current}}function ob(e,t){return{$$typeof:$s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ad(e){return typeof e=="object"&&e!==null&&e.$$typeof===$s}function lb(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var $f=/\/+/g;function Sl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?lb(""+e.key):t.toString(36)}function Da(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case $s:case K2:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Sl(a,0):r,zf(i)?(n="",e!=null&&(n=e.replace($f,"$&/")+"/"),Da(i,t,n,"",function(u){return u})):i!=null&&(ad(i)&&(i=ob(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace($f,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",zf(e))for(var o=0;o<e.length;o++){s=e[o];var l=r+Sl(s,o);a+=Da(s,t,n,l,i)}else if(l=ab(e),typeof l=="function")for(e=l.call(e),o=0;!(s=e.next()).done;)s=s.value,l=r+Sl(s,o++),a+=Da(s,t,n,l,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function na(e,t,n){if(e==null)return e;var r=[],i=0;return Da(e,r,"","",function(s){return t.call(n,s,i++)}),r}function cb(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var st={current:null},Ma={transition:null},ub={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:Ma,ReactCurrentOwner:sd};function V0(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:na,forEach:function(e,t,n){na(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return na(e,function(){t++}),t},toArray:function(e){return na(e,function(t){return t})||[]},only:function(e){if(!ad(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};te.Component=Ni;te.Fragment=Y2;te.Profiler=Z2;te.PureComponent=rd;te.StrictMode=X2;te.Suspense=rb;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ub;te.act=V0;te.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=D0({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=sd.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)_0.call(t,l)&&!O0.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&o!==void 0?o[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:$s,type:e.type,key:i,ref:s,props:r,_owner:a}};te.createContext=function(e){return e={$$typeof:tb,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:eb,_context:e},e.Consumer=e};te.createElement=U0;te.createFactory=function(e){var t=U0.bind(null,e);return t.type=e,t};te.createRef=function(){return{current:null}};te.forwardRef=function(e){return{$$typeof:nb,render:e}};te.isValidElement=ad;te.lazy=function(e){return{$$typeof:sb,_payload:{_status:-1,_result:e},_init:cb}};te.memo=function(e,t){return{$$typeof:ib,type:e,compare:t===void 0?null:t}};te.startTransition=function(e){var t=Ma.transition;Ma.transition={};try{e()}finally{Ma.transition=t}};te.unstable_act=V0;te.useCallback=function(e,t){return st.current.useCallback(e,t)};te.useContext=function(e){return st.current.useContext(e)};te.useDebugValue=function(){};te.useDeferredValue=function(e){return st.current.useDeferredValue(e)};te.useEffect=function(e,t){return st.current.useEffect(e,t)};te.useId=function(){return st.current.useId()};te.useImperativeHandle=function(e,t,n){return st.current.useImperativeHandle(e,t,n)};te.useInsertionEffect=function(e,t){return st.current.useInsertionEffect(e,t)};te.useLayoutEffect=function(e,t){return st.current.useLayoutEffect(e,t)};te.useMemo=function(e,t){return st.current.useMemo(e,t)};te.useReducer=function(e,t,n){return st.current.useReducer(e,t,n)};te.useRef=function(e){return st.current.useRef(e)};te.useState=function(e){return st.current.useState(e)};te.useSyncExternalStore=function(e,t,n){return st.current.useSyncExternalStore(e,t,n)};te.useTransition=function(){return st.current.useTransition()};te.version="18.3.1";R0.exports=te;var w=R0.exports;const Ia=nd(w),db=Q2({__proto__:null,default:Ia},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fb=w,hb=Symbol.for("react.element"),pb=Symbol.for("react.fragment"),mb=Object.prototype.hasOwnProperty,gb=fb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vb={key:!0,ref:!0,__self:!0,__source:!0};function F0(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)mb.call(t,r)&&!vb.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:hb,type:e,key:s,ref:a,props:i,_owner:gb.current}}Bo.Fragment=pb;Bo.jsx=F0;Bo.jsxs=F0;N0.exports=Bo;var c=N0.exports,W0={exports:{}},St={},B0={exports:{}},G0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,I){var U=A.length;A.push(I);e:for(;0<U;){var X=U-1>>>1,Q=A[X];if(0<i(Q,I))A[X]=I,A[U]=Q,U=X;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var I=A[0],U=A.pop();if(U!==I){A[0]=U;e:for(var X=0,Q=A.length,Le=Q>>>1;X<Le;){var De=2*(X+1)-1,L=A[De],H=De+1,O=A[H];if(0>i(L,U))H<Q&&0>i(O,L)?(A[X]=O,A[H]=U,X=H):(A[X]=L,A[De]=U,X=De);else if(H<Q&&0>i(O,U))A[X]=O,A[H]=U,X=H;else break e}}return I}function i(A,I){var U=A.sortIndex-I.sortIndex;return U!==0?U:A.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],d=1,f=null,h=3,v=!1,m=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(A){for(var I=n(u);I!==null;){if(I.callback===null)r(u);else if(I.startTime<=A)r(u),I.sortIndex=I.expirationTime,t(l,I);else break;I=n(u)}}function j(A){if(y=!1,x(A),!m)if(n(l)!==null)m=!0,Z(S);else{var I=n(u);I!==null&&_(j,I.startTime-A)}}function S(A,I){m=!1,y&&(y=!1,p(k),k=-1),v=!0;var U=h;try{for(x(I),f=n(l);f!==null&&(!(f.expirationTime>I)||A&&!M());){var X=f.callback;if(typeof X=="function"){f.callback=null,h=f.priorityLevel;var Q=X(f.expirationTime<=I);I=e.unstable_now(),typeof Q=="function"?f.callback=Q:f===n(l)&&r(l),x(I)}else r(l);f=n(l)}if(f!==null)var Le=!0;else{var De=n(u);De!==null&&_(j,De.startTime-I),Le=!1}return Le}finally{f=null,h=U,v=!1}}var E=!1,C=null,k=-1,T=5,P=-1;function M(){return!(e.unstable_now()-P<T)}function B(){if(C!==null){var A=e.unstable_now();P=A;var I=!0;try{I=C(!0,A)}finally{I?G():(E=!1,C=null)}}else E=!1}var G;if(typeof b=="function")G=function(){b(B)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,V=$.port2;$.port1.onmessage=B,G=function(){V.postMessage(null)}}else G=function(){g(B,0)};function Z(A){C=A,E||(E=!0,G())}function _(A,I){k=g(function(){A(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){m||v||(m=!0,Z(S))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(h){case 1:case 2:case 3:var I=3;break;default:I=h}var U=h;h=I;try{return A()}finally{h=U}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,I){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var U=h;h=A;try{return I()}finally{h=U}},e.unstable_scheduleCallback=function(A,I,U){var X=e.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?X+U:X):U=X,A){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=U+Q,A={id:d++,callback:I,priorityLevel:A,startTime:U,expirationTime:Q,sortIndex:-1},U>X?(A.sortIndex=U,t(u,A),n(l)===null&&A===n(u)&&(y?(p(k),k=-1):y=!0,_(j,U-X))):(A.sortIndex=Q,t(l,A),m||v||(m=!0,Z(S))),A},e.unstable_shouldYield=M,e.unstable_wrapCallback=function(A){var I=h;return function(){var U=h;h=I;try{return A.apply(this,arguments)}finally{h=U}}}})(G0);B0.exports=G0;var yb=B0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bb=w,jt=yb;function D(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var H0=new Set,vs={};function Dr(e,t){gi(e,t),gi(e+"Capture",t)}function gi(e,t){for(vs[e]=t,e=0;e<t.length;e++)H0.add(t[e])}var bn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=Object.prototype.hasOwnProperty,xb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},qf={};function jb(e){return Ec.call(qf,e)?!0:Ec.call(Jf,e)?!1:xb.test(e)?qf[e]=!0:(Jf[e]=!0,!1)}function wb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Sb(e,t,n,r){if(t===null||typeof t>"u"||wb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function at(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var He={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){He[e]=new at(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];He[t]=new at(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){He[e]=new at(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){He[e]=new at(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){He[e]=new at(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){He[e]=new at(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){He[e]=new at(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){He[e]=new at(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){He[e]=new at(e,5,!1,e.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ld(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(od,ld);He[t]=new at(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(od,ld);He[t]=new at(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(od,ld);He[t]=new at(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){He[e]=new at(e,1,!1,e.toLowerCase(),null,!1,!1)});He.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){He[e]=new at(e,1,!1,e.toLowerCase(),null,!0,!0)});function cd(e,t,n,r){var i=He.hasOwnProperty(t)?He[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Sb(t,n,i,r)&&(n=null),r||i===null?jb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var En=bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ra=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),Cc=Symbol.for("react.profiler"),z0=Symbol.for("react.provider"),$0=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Tc=Symbol.for("react.suspense"),Pc=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Dn=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),Qf=Symbol.iterator;function Oi(e){return e===null||typeof e!="object"?null:(e=Qf&&e[Qf]||e["@@iterator"],typeof e=="function"?e:null)}var we=Object.assign,kl;function Ji(e){if(kl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);kl=t&&t[1]||""}return`
`+kl+e}var El=!1;function Cl(e,t){if(!e||El)return"";El=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||i[a]!==s[o]){var l=`
`+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=a&&0<=o);break}}}finally{El=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ji(e):""}function kb(e){switch(e.tag){case 5:return Ji(e.type);case 16:return Ji("Lazy");case 13:return Ji("Suspense");case 19:return Ji("SuspenseList");case 0:case 2:case 15:return e=Cl(e.type,!1),e;case 11:return e=Cl(e.type.render,!1),e;case 1:return e=Cl(e.type,!0),e;default:return""}}function Ac(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case Hr:return"Portal";case Cc:return"Profiler";case ud:return"StrictMode";case Tc:return"Suspense";case Pc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $0:return(e.displayName||"Context")+".Consumer";case z0:return(e._context.displayName||"Context")+".Provider";case dd:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fd:return t=e.displayName||null,t!==null?t:Ac(e.type)||"Memo";case Dn:t=e._payload,e=e._init;try{return Ac(e(t))}catch{}}return null}function Eb(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ac(t);case 8:return t===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Kn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function q0(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cb(e){var t=q0(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ia(e){e._valueTracker||(e._valueTracker=Cb(e))}function Q0(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=q0(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xa(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nc(e,t){var n=t.checked;return we({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Kf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Kn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function K0(e,t){t=t.checked,t!=null&&cd(e,"checked",t,!1)}function Rc(e,t){K0(e,t);var n=Kn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Lc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Lc(e,t.type,Kn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Yf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Lc(e,t,n){(t!=="number"||Xa(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var qi=Array.isArray;function ui(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Kn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Dc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(D(91));return we({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Xf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(D(92));if(qi(n)){if(1<n.length)throw Error(D(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Kn(n)}}function Y0(e,t){var n=Kn(t.value),r=Kn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Zf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function X0(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?X0(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sa,Z0=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sa=sa||document.createElement("div"),sa.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sa.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ys(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Tb=["Webkit","ms","Moz","O"];Object.keys(rs).forEach(function(e){Tb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),rs[t]=rs[e]})});function e1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||rs.hasOwnProperty(e)&&rs[e]?(""+t).trim():t+"px"}function t1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=e1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Pb=we({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ic(e,t){if(t){if(Pb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(D(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(D(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(D(61))}if(t.style!=null&&typeof t.style!="object")throw Error(D(62))}}function _c(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oc=null;function hd(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Uc=null,di=null,fi=null;function eh(e){if(e=Qs(e)){if(typeof Uc!="function")throw Error(D(280));var t=e.stateNode;t&&(t=Jo(t),Uc(e.stateNode,e.type,t))}}function n1(e){di?fi?fi.push(e):fi=[e]:di=e}function r1(){if(di){var e=di,t=fi;if(fi=di=null,eh(e),t)for(e=0;e<t.length;e++)eh(t[e])}}function i1(e,t){return e(t)}function s1(){}var Tl=!1;function a1(e,t,n){if(Tl)return e(t,n);Tl=!0;try{return i1(e,t,n)}finally{Tl=!1,(di!==null||fi!==null)&&(s1(),r1())}}function bs(e,t){var n=e.stateNode;if(n===null)return null;var r=Jo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(D(231,t,typeof n));return n}var Vc=!1;if(bn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{Vc=!1}function Ab(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var is=!1,Za=null,eo=!1,Fc=null,Nb={onError:function(e){is=!0,Za=e}};function Rb(e,t,n,r,i,s,a,o,l){is=!1,Za=null,Ab.apply(Nb,arguments)}function Lb(e,t,n,r,i,s,a,o,l){if(Rb.apply(this,arguments),is){if(is){var u=Za;is=!1,Za=null}else throw Error(D(198));eo||(eo=!0,Fc=u)}}function Mr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function o1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function th(e){if(Mr(e)!==e)throw Error(D(188))}function Db(e){var t=e.alternate;if(!t){if(t=Mr(e),t===null)throw Error(D(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return th(i),e;if(s===r)return th(i),t;s=s.sibling}throw Error(D(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(D(189))}}if(n.alternate!==r)throw Error(D(190))}if(n.tag!==3)throw Error(D(188));return n.stateNode.current===n?e:t}function l1(e){return e=Db(e),e!==null?c1(e):null}function c1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=c1(e);if(t!==null)return t;e=e.sibling}return null}var u1=jt.unstable_scheduleCallback,nh=jt.unstable_cancelCallback,Mb=jt.unstable_shouldYield,Ib=jt.unstable_requestPaint,Pe=jt.unstable_now,_b=jt.unstable_getCurrentPriorityLevel,pd=jt.unstable_ImmediatePriority,d1=jt.unstable_UserBlockingPriority,to=jt.unstable_NormalPriority,Ob=jt.unstable_LowPriority,f1=jt.unstable_IdlePriority,Go=null,tn=null;function Ub(e){if(tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Go,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:Wb,Vb=Math.log,Fb=Math.LN2;function Wb(e){return e>>>=0,e===0?32:31-(Vb(e)/Fb|0)|0}var aa=64,oa=4194304;function Qi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function no(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var o=a&~i;o!==0?r=Qi(o):(s&=a,s!==0&&(r=Qi(s)))}else a=n&~i,a!==0?r=Qi(a):s!==0&&(r=Qi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),i=1<<n,r|=e[n],t&=~i;return r}function Bb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-Gt(s),o=1<<a,l=i[a];l===-1?(!(o&n)||o&r)&&(i[a]=Bb(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}function Wc(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function h1(){var e=aa;return aa<<=1,!(aa&4194240)&&(aa=64),e}function Pl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Js(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function Hb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Gt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function md(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ae=0;function p1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var m1,gd,g1,v1,y1,Bc=!1,la=[],Fn=null,Wn=null,Bn=null,xs=new Map,js=new Map,In=[],zb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function rh(e,t){switch(e){case"focusin":case"focusout":Fn=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":xs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":js.delete(t.pointerId)}}function Vi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Qs(t),t!==null&&gd(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function $b(e,t,n,r,i){switch(t){case"focusin":return Fn=Vi(Fn,e,t,n,r,i),!0;case"dragenter":return Wn=Vi(Wn,e,t,n,r,i),!0;case"mouseover":return Bn=Vi(Bn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return xs.set(s,Vi(xs.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,js.set(s,Vi(js.get(s)||null,e,t,n,r,i)),!0}return!1}function b1(e){var t=pr(e.target);if(t!==null){var n=Mr(t);if(n!==null){if(t=n.tag,t===13){if(t=o1(n),t!==null){e.blockedOn=t,y1(e.priority,function(){g1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _a(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oc=r,n.target.dispatchEvent(r),Oc=null}else return t=Qs(n),t!==null&&gd(t),e.blockedOn=n,!1;t.shift()}return!0}function ih(e,t,n){_a(e)&&n.delete(t)}function Jb(){Bc=!1,Fn!==null&&_a(Fn)&&(Fn=null),Wn!==null&&_a(Wn)&&(Wn=null),Bn!==null&&_a(Bn)&&(Bn=null),xs.forEach(ih),js.forEach(ih)}function Fi(e,t){e.blockedOn===t&&(e.blockedOn=null,Bc||(Bc=!0,jt.unstable_scheduleCallback(jt.unstable_NormalPriority,Jb)))}function ws(e){function t(i){return Fi(i,e)}if(0<la.length){Fi(la[0],e);for(var n=1;n<la.length;n++){var r=la[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Fn!==null&&Fi(Fn,e),Wn!==null&&Fi(Wn,e),Bn!==null&&Fi(Bn,e),xs.forEach(t),js.forEach(t),n=0;n<In.length;n++)r=In[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)b1(n),n.blockedOn===null&&In.shift()}var hi=En.ReactCurrentBatchConfig,ro=!0;function qb(e,t,n,r){var i=ae,s=hi.transition;hi.transition=null;try{ae=1,vd(e,t,n,r)}finally{ae=i,hi.transition=s}}function Qb(e,t,n,r){var i=ae,s=hi.transition;hi.transition=null;try{ae=4,vd(e,t,n,r)}finally{ae=i,hi.transition=s}}function vd(e,t,n,r){if(ro){var i=Gc(e,t,n,r);if(i===null)Ul(e,t,r,io,n),rh(e,r);else if($b(i,e,t,n,r))r.stopPropagation();else if(rh(e,r),t&4&&-1<zb.indexOf(e)){for(;i!==null;){var s=Qs(i);if(s!==null&&m1(s),s=Gc(e,t,n,r),s===null&&Ul(e,t,r,io,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ul(e,t,r,null,n)}}var io=null;function Gc(e,t,n,r){if(io=null,e=hd(r),e=pr(e),e!==null)if(t=Mr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=o1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return io=e,null}function x1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_b()){case pd:return 1;case d1:return 4;case to:case Ob:return 16;case f1:return 536870912;default:return 16}default:return 16}}var On=null,yd=null,Oa=null;function j1(){if(Oa)return Oa;var e,t=yd,n=t.length,r,i="value"in On?On.value:On.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return Oa=i.slice(e,1<r?1-r:void 0)}function Ua(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ca(){return!0}function sh(){return!1}function kt(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ca:sh,this.isPropagationStopped=sh,this}return we(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ca)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ca)},persist:function(){},isPersistent:ca}),t}var Ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=kt(Ri),qs=we({},Ri,{view:0,detail:0}),Kb=kt(qs),Al,Nl,Wi,Ho=we({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Wi&&(Wi&&e.type==="mousemove"?(Al=e.screenX-Wi.screenX,Nl=e.screenY-Wi.screenY):Nl=Al=0,Wi=e),Al)},movementY:function(e){return"movementY"in e?e.movementY:Nl}}),ah=kt(Ho),Yb=we({},Ho,{dataTransfer:0}),Xb=kt(Yb),Zb=we({},qs,{relatedTarget:0}),Rl=kt(Zb),e4=we({},Ri,{animationName:0,elapsedTime:0,pseudoElement:0}),t4=kt(e4),n4=we({},Ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),r4=kt(n4),i4=we({},Ri,{data:0}),oh=kt(i4),s4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=o4[e])?!!t[e]:!1}function xd(){return l4}var c4=we({},qs,{key:function(e){if(e.key){var t=s4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ua(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?a4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(e){return e.type==="keypress"?Ua(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ua(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),u4=kt(c4),d4=we({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),lh=kt(d4),f4=we({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),h4=kt(f4),p4=we({},Ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),m4=kt(p4),g4=we({},Ho,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),v4=kt(g4),y4=[9,13,27,32],jd=bn&&"CompositionEvent"in window,ss=null;bn&&"documentMode"in document&&(ss=document.documentMode);var b4=bn&&"TextEvent"in window&&!ss,w1=bn&&(!jd||ss&&8<ss&&11>=ss),ch=" ",uh=!1;function S1(e,t){switch(e){case"keyup":return y4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function k1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $r=!1;function x4(e,t){switch(e){case"compositionend":return k1(t);case"keypress":return t.which!==32?null:(uh=!0,ch);case"textInput":return e=t.data,e===ch&&uh?null:e;default:return null}}function j4(e,t){if($r)return e==="compositionend"||!jd&&S1(e,t)?(e=j1(),Oa=yd=On=null,$r=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return w1&&t.locale!=="ko"?null:t.data;default:return null}}var w4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!w4[e.type]:t==="textarea"}function E1(e,t,n,r){n1(r),t=so(t,"onChange"),0<t.length&&(n=new bd("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var as=null,Ss=null;function S4(e){_1(e,0)}function zo(e){var t=Qr(e);if(Q0(t))return e}function k4(e,t){if(e==="change")return t}var C1=!1;if(bn){var Ll;if(bn){var Dl="oninput"in document;if(!Dl){var fh=document.createElement("div");fh.setAttribute("oninput","return;"),Dl=typeof fh.oninput=="function"}Ll=Dl}else Ll=!1;C1=Ll&&(!document.documentMode||9<document.documentMode)}function hh(){as&&(as.detachEvent("onpropertychange",T1),Ss=as=null)}function T1(e){if(e.propertyName==="value"&&zo(Ss)){var t=[];E1(t,Ss,e,hd(e)),a1(S4,t)}}function E4(e,t,n){e==="focusin"?(hh(),as=t,Ss=n,as.attachEvent("onpropertychange",T1)):e==="focusout"&&hh()}function C4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zo(Ss)}function T4(e,t){if(e==="click")return zo(t)}function P4(e,t){if(e==="input"||e==="change")return zo(t)}function A4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zt=typeof Object.is=="function"?Object.is:A4;function ks(e,t){if(zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ec.call(t,i)||!zt(e[i],t[i]))return!1}return!0}function ph(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function mh(e,t){var n=ph(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ph(n)}}function P1(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?P1(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function A1(){for(var e=window,t=Xa();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xa(e.document)}return t}function wd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function N4(e){var t=A1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&P1(n.ownerDocument.documentElement,n)){if(r!==null&&wd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=mh(n,s);var a=mh(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var R4=bn&&"documentMode"in document&&11>=document.documentMode,Jr=null,Hc=null,os=null,zc=!1;function gh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zc||Jr==null||Jr!==Xa(r)||(r=Jr,"selectionStart"in r&&wd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),os&&ks(os,r)||(os=r,r=so(Hc,"onSelect"),0<r.length&&(t=new bd("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jr)))}function ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var qr={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Ml={},N1={};bn&&(N1=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function $o(e){if(Ml[e])return Ml[e];if(!qr[e])return e;var t=qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in N1)return Ml[e]=t[n];return e}var R1=$o("animationend"),L1=$o("animationiteration"),D1=$o("animationstart"),M1=$o("transitionend"),I1=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tr(e,t){I1.set(e,t),Dr(t,[e])}for(var Il=0;Il<vh.length;Il++){var _l=vh[Il],L4=_l.toLowerCase(),D4=_l[0].toUpperCase()+_l.slice(1);tr(L4,"on"+D4)}tr(R1,"onAnimationEnd");tr(L1,"onAnimationIteration");tr(D1,"onAnimationStart");tr("dblclick","onDoubleClick");tr("focusin","onFocus");tr("focusout","onBlur");tr(M1,"onTransitionEnd");gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ki="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),M4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ki));function yh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lb(r,t,void 0,e),e.currentTarget=null}function _1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;yh(i,o,u),s=l}else for(a=0;a<r.length;a++){if(o=r[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;yh(i,o,u),s=l}}}if(eo)throw e=Fc,eo=!1,Fc=null,e}function fe(e,t){var n=t[Kc];n===void 0&&(n=t[Kc]=new Set);var r=e+"__bubble";n.has(r)||(O1(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),O1(n,e,r,t)}var da="_reactListening"+Math.random().toString(36).slice(2);function Es(e){if(!e[da]){e[da]=!0,H0.forEach(function(n){n!=="selectionchange"&&(M4.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[da]||(t[da]=!0,Ol("selectionchange",!1,t))}}function O1(e,t,n,r){switch(x1(t)){case 1:var i=qb;break;case 4:i=Qb;break;default:i=vd}n=i.bind(null,t,n,e),i=void 0,!Vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ul(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var o=r.stateNode.containerInfo;if(o===i||o.nodeType===8&&o.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;a=a.return}for(;o!==null;){if(a=pr(o),a===null)return;if(l=a.tag,l===5||l===6){r=s=a;continue e}o=o.parentNode}}r=r.return}a1(function(){var u=s,d=hd(n),f=[];e:{var h=I1.get(e);if(h!==void 0){var v=bd,m=e;switch(e){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":v=u4;break;case"focusin":m="focus",v=Rl;break;case"focusout":m="blur",v=Rl;break;case"beforeblur":case"afterblur":v=Rl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Xb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=h4;break;case R1:case L1:case D1:v=t4;break;case M1:v=m4;break;case"scroll":v=Kb;break;case"wheel":v=v4;break;case"copy":case"cut":case"paste":v=r4;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=lh}var y=(t&4)!==0,g=!y&&e==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var b=u,x;b!==null;){x=b;var j=x.stateNode;if(x.tag===5&&j!==null&&(x=j,p!==null&&(j=bs(b,p),j!=null&&y.push(Cs(b,j,x)))),g)break;b=b.return}0<y.length&&(h=new v(h,m,null,n,d),f.push({event:h,listeners:y}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Oc&&(m=n.relatedTarget||n.fromElement)&&(pr(m)||m[xn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(m=n.relatedTarget||n.toElement,v=u,m=m?pr(m):null,m!==null&&(g=Mr(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(v=null,m=u),v!==m)){if(y=ah,j="onMouseLeave",p="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(y=lh,j="onPointerLeave",p="onPointerEnter",b="pointer"),g=v==null?h:Qr(v),x=m==null?h:Qr(m),h=new y(j,b+"leave",v,n,d),h.target=g,h.relatedTarget=x,j=null,pr(d)===u&&(y=new y(p,b+"enter",m,n,d),y.target=x,y.relatedTarget=g,j=y),g=j,v&&m)t:{for(y=v,p=m,b=0,x=y;x;x=Ur(x))b++;for(x=0,j=p;j;j=Ur(j))x++;for(;0<b-x;)y=Ur(y),b--;for(;0<x-b;)p=Ur(p),x--;for(;b--;){if(y===p||p!==null&&y===p.alternate)break t;y=Ur(y),p=Ur(p)}y=null}else y=null;v!==null&&bh(f,h,v,y,!1),m!==null&&g!==null&&bh(f,g,m,y,!0)}}e:{if(h=u?Qr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var S=k4;else if(dh(h))if(C1)S=P4;else{S=C4;var E=E4}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=T4);if(S&&(S=S(e,u))){E1(f,S,n,d);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Lc(h,"number",h.value)}switch(E=u?Qr(u):window,e){case"focusin":(dh(E)||E.contentEditable==="true")&&(Jr=E,Hc=u,os=null);break;case"focusout":os=Hc=Jr=null;break;case"mousedown":zc=!0;break;case"contextmenu":case"mouseup":case"dragend":zc=!1,gh(f,n,d);break;case"selectionchange":if(R4)break;case"keydown":case"keyup":gh(f,n,d)}var C;if(jd)e:{switch(e){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else $r?S1(e,n)&&(k="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(w1&&n.locale!=="ko"&&($r||k!=="onCompositionStart"?k==="onCompositionEnd"&&$r&&(C=j1()):(On=d,yd="value"in On?On.value:On.textContent,$r=!0)),E=so(u,k),0<E.length&&(k=new oh(k,e,null,n,d),f.push({event:k,listeners:E}),C?k.data=C:(C=k1(n),C!==null&&(k.data=C)))),(C=b4?x4(e,n):j4(e,n))&&(u=so(u,"onBeforeInput"),0<u.length&&(d=new oh("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=C))}_1(f,t)})}function Cs(e,t,n){return{instance:e,listener:t,currentTarget:n}}function so(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(e,n),s!=null&&r.unshift(Cs(e,s,i)),s=bs(e,t),s!=null&&r.push(Cs(e,s,i))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bh(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===r)break;o.tag===5&&u!==null&&(o=u,i?(l=bs(n,s),l!=null&&a.unshift(Cs(n,l,o))):i||(l=bs(n,s),l!=null&&a.push(Cs(n,l,o)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var I4=/\r\n?/g,_4=/\u0000|\uFFFD/g;function xh(e){return(typeof e=="string"?e:""+e).replace(I4,`
`).replace(_4,"")}function fa(e,t,n){if(t=xh(t),xh(e)!==t&&n)throw Error(D(425))}function ao(){}var $c=null,Jc=null;function qc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qc=typeof setTimeout=="function"?setTimeout:void 0,O4=typeof clearTimeout=="function"?clearTimeout:void 0,jh=typeof Promise=="function"?Promise:void 0,U4=typeof queueMicrotask=="function"?queueMicrotask:typeof jh<"u"?function(e){return jh.resolve(null).then(e).catch(V4)}:Qc;function V4(e){setTimeout(function(){throw e})}function Vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ws(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(t)}function Gn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function wh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Xt="__reactFiber$"+Li,Ts="__reactProps$"+Li,xn="__reactContainer$"+Li,Kc="__reactEvents$"+Li,F4="__reactListeners$"+Li,W4="__reactHandles$"+Li;function pr(e){var t=e[Xt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[xn]||n[Xt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=wh(e);e!==null;){if(n=e[Xt])return n;e=wh(e)}return t}e=n,n=e.parentNode}return null}function Qs(e){return e=e[Xt]||e[xn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(D(33))}function Jo(e){return e[Ts]||null}var Yc=[],Kr=-1;function nr(e){return{current:e}}function pe(e){0>Kr||(e.current=Yc[Kr],Yc[Kr]=null,Kr--)}function de(e,t){Kr++,Yc[Kr]=e.current,e.current=t}var Yn={},Ze=nr(Yn),dt=nr(!1),Sr=Yn;function vi(e,t){var n=e.type.contextTypes;if(!n)return Yn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ft(e){return e=e.childContextTypes,e!=null}function oo(){pe(dt),pe(Ze)}function Sh(e,t,n){if(Ze.current!==Yn)throw Error(D(168));de(Ze,t),de(dt,n)}function U1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(D(108,Eb(e)||"Unknown",i));return we({},n,r)}function lo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Yn,Sr=Ze.current,de(Ze,e),de(dt,dt.current),!0}function kh(e,t,n){var r=e.stateNode;if(!r)throw Error(D(169));n?(e=U1(e,t,Sr),r.__reactInternalMemoizedMergedChildContext=e,pe(dt),pe(Ze),de(Ze,e)):pe(dt),de(dt,n)}var cn=null,qo=!1,Fl=!1;function V1(e){cn===null?cn=[e]:cn.push(e)}function B4(e){qo=!0,V1(e)}function rr(){if(!Fl&&cn!==null){Fl=!0;var e=0,t=ae;try{var n=cn;for(ae=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}cn=null,qo=!1}catch(i){throw cn!==null&&(cn=cn.slice(e+1)),u1(pd,rr),i}finally{ae=t,Fl=!1}}return null}var Yr=[],Xr=0,co=null,uo=0,At=[],Nt=0,kr=null,fn=1,hn="";function ar(e,t){Yr[Xr++]=uo,Yr[Xr++]=co,co=e,uo=t}function F1(e,t,n){At[Nt++]=fn,At[Nt++]=hn,At[Nt++]=kr,kr=e;var r=fn;e=hn;var i=32-Gt(r)-1;r&=~(1<<i),n+=1;var s=32-Gt(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,fn=1<<32-Gt(t)+i|n<<i|r,hn=s+e}else fn=1<<s|n<<i|r,hn=e}function Sd(e){e.return!==null&&(ar(e,1),F1(e,1,0))}function kd(e){for(;e===co;)co=Yr[--Xr],Yr[Xr]=null,uo=Yr[--Xr],Yr[Xr]=null;for(;e===kr;)kr=At[--Nt],At[Nt]=null,hn=At[--Nt],At[Nt]=null,fn=At[--Nt],At[Nt]=null}var bt=null,gt=null,ge=!1,Wt=null;function W1(e,t){var n=Rt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Eh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,bt=e,gt=Gn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,bt=e,gt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kr!==null?{id:fn,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Rt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,bt=e,gt=null,!0):!1;default:return!1}}function Xc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Zc(e){if(ge){var t=gt;if(t){var n=t;if(!Eh(e,t)){if(Xc(e))throw Error(D(418));t=Gn(n.nextSibling);var r=bt;t&&Eh(e,t)?W1(r,n):(e.flags=e.flags&-4097|2,ge=!1,bt=e)}}else{if(Xc(e))throw Error(D(418));e.flags=e.flags&-4097|2,ge=!1,bt=e}}}function Ch(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;bt=e}function ha(e){if(e!==bt)return!1;if(!ge)return Ch(e),ge=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qc(e.type,e.memoizedProps)),t&&(t=gt)){if(Xc(e))throw B1(),Error(D(418));for(;t;)W1(e,t),t=Gn(t.nextSibling)}if(Ch(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(D(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){gt=Gn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}gt=null}}else gt=bt?Gn(e.stateNode.nextSibling):null;return!0}function B1(){for(var e=gt;e;)e=Gn(e.nextSibling)}function yi(){gt=bt=null,ge=!1}function Ed(e){Wt===null?Wt=[e]:Wt.push(e)}var G4=En.ReactCurrentBatchConfig;function Bi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(D(309));var r=n.stateNode}if(!r)throw Error(D(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var o=i.refs;a===null?delete o[s]:o[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(D(284));if(!n._owner)throw Error(D(290,e))}return e}function pa(e,t){throw e=Object.prototype.toString.call(t),Error(D(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Th(e){var t=e._init;return t(e._payload)}function G1(e){function t(p,b){if(e){var x=p.deletions;x===null?(p.deletions=[b],p.flags|=16):x.push(b)}}function n(p,b){if(!e)return null;for(;b!==null;)t(p,b),b=b.sibling;return null}function r(p,b){for(p=new Map;b!==null;)b.key!==null?p.set(b.key,b):p.set(b.index,b),b=b.sibling;return p}function i(p,b){return p=Jn(p,b),p.index=0,p.sibling=null,p}function s(p,b,x){return p.index=x,e?(x=p.alternate,x!==null?(x=x.index,x<b?(p.flags|=2,b):x):(p.flags|=2,b)):(p.flags|=1048576,b)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function o(p,b,x,j){return b===null||b.tag!==6?(b=Jl(x,p.mode,j),b.return=p,b):(b=i(b,x),b.return=p,b)}function l(p,b,x,j){var S=x.type;return S===zr?d(p,b,x.props.children,j,x.key):b!==null&&(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&Th(S)===b.type)?(j=i(b,x.props),j.ref=Bi(p,b,x),j.return=p,j):(j=za(x.type,x.key,x.props,null,p.mode,j),j.ref=Bi(p,b,x),j.return=p,j)}function u(p,b,x,j){return b===null||b.tag!==4||b.stateNode.containerInfo!==x.containerInfo||b.stateNode.implementation!==x.implementation?(b=ql(x,p.mode,j),b.return=p,b):(b=i(b,x.children||[]),b.return=p,b)}function d(p,b,x,j,S){return b===null||b.tag!==7?(b=xr(x,p.mode,j,S),b.return=p,b):(b=i(b,x),b.return=p,b)}function f(p,b,x){if(typeof b=="string"&&b!==""||typeof b=="number")return b=Jl(""+b,p.mode,x),b.return=p,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ra:return x=za(b.type,b.key,b.props,null,p.mode,x),x.ref=Bi(p,null,b),x.return=p,x;case Hr:return b=ql(b,p.mode,x),b.return=p,b;case Dn:var j=b._init;return f(p,j(b._payload),x)}if(qi(b)||Oi(b))return b=xr(b,p.mode,x,null),b.return=p,b;pa(p,b)}return null}function h(p,b,x,j){var S=b!==null?b.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:o(p,b,""+x,j);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ra:return x.key===S?l(p,b,x,j):null;case Hr:return x.key===S?u(p,b,x,j):null;case Dn:return S=x._init,h(p,b,S(x._payload),j)}if(qi(x)||Oi(x))return S!==null?null:d(p,b,x,j,null);pa(p,x)}return null}function v(p,b,x,j,S){if(typeof j=="string"&&j!==""||typeof j=="number")return p=p.get(x)||null,o(b,p,""+j,S);if(typeof j=="object"&&j!==null){switch(j.$$typeof){case ra:return p=p.get(j.key===null?x:j.key)||null,l(b,p,j,S);case Hr:return p=p.get(j.key===null?x:j.key)||null,u(b,p,j,S);case Dn:var E=j._init;return v(p,b,x,E(j._payload),S)}if(qi(j)||Oi(j))return p=p.get(x)||null,d(b,p,j,S,null);pa(b,j)}return null}function m(p,b,x,j){for(var S=null,E=null,C=b,k=b=0,T=null;C!==null&&k<x.length;k++){C.index>k?(T=C,C=null):T=C.sibling;var P=h(p,C,x[k],j);if(P===null){C===null&&(C=T);break}e&&C&&P.alternate===null&&t(p,C),b=s(P,b,k),E===null?S=P:E.sibling=P,E=P,C=T}if(k===x.length)return n(p,C),ge&&ar(p,k),S;if(C===null){for(;k<x.length;k++)C=f(p,x[k],j),C!==null&&(b=s(C,b,k),E===null?S=C:E.sibling=C,E=C);return ge&&ar(p,k),S}for(C=r(p,C);k<x.length;k++)T=v(C,p,k,x[k],j),T!==null&&(e&&T.alternate!==null&&C.delete(T.key===null?k:T.key),b=s(T,b,k),E===null?S=T:E.sibling=T,E=T);return e&&C.forEach(function(M){return t(p,M)}),ge&&ar(p,k),S}function y(p,b,x,j){var S=Oi(x);if(typeof S!="function")throw Error(D(150));if(x=S.call(x),x==null)throw Error(D(151));for(var E=S=null,C=b,k=b=0,T=null,P=x.next();C!==null&&!P.done;k++,P=x.next()){C.index>k?(T=C,C=null):T=C.sibling;var M=h(p,C,P.value,j);if(M===null){C===null&&(C=T);break}e&&C&&M.alternate===null&&t(p,C),b=s(M,b,k),E===null?S=M:E.sibling=M,E=M,C=T}if(P.done)return n(p,C),ge&&ar(p,k),S;if(C===null){for(;!P.done;k++,P=x.next())P=f(p,P.value,j),P!==null&&(b=s(P,b,k),E===null?S=P:E.sibling=P,E=P);return ge&&ar(p,k),S}for(C=r(p,C);!P.done;k++,P=x.next())P=v(C,p,k,P.value,j),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?k:P.key),b=s(P,b,k),E===null?S=P:E.sibling=P,E=P);return e&&C.forEach(function(B){return t(p,B)}),ge&&ar(p,k),S}function g(p,b,x,j){if(typeof x=="object"&&x!==null&&x.type===zr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ra:e:{for(var S=x.key,E=b;E!==null;){if(E.key===S){if(S=x.type,S===zr){if(E.tag===7){n(p,E.sibling),b=i(E,x.props.children),b.return=p,p=b;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Dn&&Th(S)===E.type){n(p,E.sibling),b=i(E,x.props),b.ref=Bi(p,E,x),b.return=p,p=b;break e}n(p,E);break}else t(p,E);E=E.sibling}x.type===zr?(b=xr(x.props.children,p.mode,j,x.key),b.return=p,p=b):(j=za(x.type,x.key,x.props,null,p.mode,j),j.ref=Bi(p,b,x),j.return=p,p=j)}return a(p);case Hr:e:{for(E=x.key;b!==null;){if(b.key===E)if(b.tag===4&&b.stateNode.containerInfo===x.containerInfo&&b.stateNode.implementation===x.implementation){n(p,b.sibling),b=i(b,x.children||[]),b.return=p,p=b;break e}else{n(p,b);break}else t(p,b);b=b.sibling}b=ql(x,p.mode,j),b.return=p,p=b}return a(p);case Dn:return E=x._init,g(p,b,E(x._payload),j)}if(qi(x))return m(p,b,x,j);if(Oi(x))return y(p,b,x,j);pa(p,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,b!==null&&b.tag===6?(n(p,b.sibling),b=i(b,x),b.return=p,p=b):(n(p,b),b=Jl(x,p.mode,j),b.return=p,p=b),a(p)):n(p,b)}return g}var bi=G1(!0),H1=G1(!1),fo=nr(null),ho=null,Zr=null,Cd=null;function Td(){Cd=Zr=ho=null}function Pd(e){var t=fo.current;pe(fo),e._currentValue=t}function eu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function pi(e,t){ho=e,Cd=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ut=!0),e.firstContext=null)}function Mt(e){var t=e._currentValue;if(Cd!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ho===null)throw Error(D(308));Zr=e,ho.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var mr=null;function Ad(e){mr===null?mr=[e]:mr.push(e)}function z1(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Ad(t)):(n.next=i.next,i.next=n),t.interleaved=n,jn(e,r)}function jn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Mn=!1;function Nd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function pn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Hn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,jn(e,n)}return i=r.interleaved,i===null?(t.next=t,Ad(r)):(t.next=i.next,i.next=t),r.interleaved=t,jn(e,n)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,md(e,n)}}function Ph(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function po(e,t,n,r){var i=e.updateQueue;Mn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;a=0,d=u=l=null,o=s;do{var h=o.lane,v=o.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var m=e,y=o;switch(h=t,v=n,y.tag){case 1:if(m=y.payload,typeof m=="function"){f=m.call(v,f,h);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=y.payload,h=typeof m=="function"?m.call(v,f,h):m,h==null)break e;f=we({},f,h);break e;case 2:Mn=!0}}o.callback!==null&&o.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[o]:h.push(o))}else v={eventTime:v,lane:h,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,a|=h;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;h=o,o=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Cr|=a,e.lanes=a,e.memoizedState=f}}function Ah(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(D(191,i));i.call(r)}}}var Ks={},nn=nr(Ks),Ps=nr(Ks),As=nr(Ks);function gr(e){if(e===Ks)throw Error(D(174));return e}function Rd(e,t){switch(de(As,t),de(Ps,e),de(nn,Ks),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Mc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Mc(t,e)}pe(nn),de(nn,t)}function xi(){pe(nn),pe(Ps),pe(As)}function J1(e){gr(As.current);var t=gr(nn.current),n=Mc(t,e.type);t!==n&&(de(Ps,e),de(nn,n))}function Ld(e){Ps.current===e&&(pe(nn),pe(Ps))}var ye=nr(0);function mo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wl=[];function Dd(){for(var e=0;e<Wl.length;e++)Wl[e]._workInProgressVersionPrimary=null;Wl.length=0}var Fa=En.ReactCurrentDispatcher,Bl=En.ReactCurrentBatchConfig,Er=0,xe=null,Me=null,Ue=null,go=!1,ls=!1,Ns=0,H4=0;function Je(){throw Error(D(321))}function Md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zt(e[n],t[n]))return!1;return!0}function Id(e,t,n,r,i,s){if(Er=s,xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fa.current=e===null||e.memoizedState===null?q4:Q4,e=n(r,i),ls){s=0;do{if(ls=!1,Ns=0,25<=s)throw Error(D(301));s+=1,Ue=Me=null,t.updateQueue=null,Fa.current=K4,e=n(r,i)}while(ls)}if(Fa.current=vo,t=Me!==null&&Me.next!==null,Er=0,Ue=Me=xe=null,go=!1,t)throw Error(D(300));return e}function _d(){var e=Ns!==0;return Ns=0,e}function Yt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?xe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function It(){if(Me===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Me.next;var t=Ue===null?xe.memoizedState:Ue.next;if(t!==null)Ue=t,Me=e;else{if(e===null)throw Error(D(310));Me=e,e={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ue===null?xe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Rs(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=It(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var d=u.lane;if((Er&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=f,a=r):l=l.next=f,xe.lanes|=d,Cr|=d}u=u.next}while(u!==null&&u!==s);l===null?a=r:l.next=o,zt(r,t.memoizedState)||(ut=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,xe.lanes|=s,Cr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hl(e){var t=It(),n=t.queue;if(n===null)throw Error(D(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);zt(s,t.memoizedState)||(ut=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function q1(){}function Q1(e,t){var n=xe,r=It(),i=t(),s=!zt(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,Od(X1.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,Ls(9,Y1.bind(null,n,r,i,t),void 0,null),Ve===null)throw Error(D(349));Er&30||K1(n,t,i)}return i}function K1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Y1(e,t,n,r){t.value=n,t.getSnapshot=r,Z1(t)&&eg(e)}function X1(e,t,n){return n(function(){Z1(t)&&eg(e)})}function Z1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zt(e,n)}catch{return!0}}function eg(e){var t=jn(e,1);t!==null&&Ht(t,e,1,-1)}function Nh(e){var t=Yt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rs,lastRenderedState:e},t.queue=e,e=e.dispatch=J4.bind(null,xe,e),[t.memoizedState,e]}function Ls(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=xe.updateQueue,t===null?(t={lastEffect:null,stores:null},xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function tg(){return It().memoizedState}function Wa(e,t,n,r){var i=Yt();xe.flags|=e,i.memoizedState=Ls(1|t,n,void 0,r===void 0?null:r)}function Qo(e,t,n,r){var i=It();r=r===void 0?null:r;var s=void 0;if(Me!==null){var a=Me.memoizedState;if(s=a.destroy,r!==null&&Md(r,a.deps)){i.memoizedState=Ls(t,n,s,r);return}}xe.flags|=e,i.memoizedState=Ls(1|t,n,s,r)}function Rh(e,t){return Wa(8390656,8,e,t)}function Od(e,t){return Qo(2048,8,e,t)}function ng(e,t){return Qo(4,2,e,t)}function rg(e,t){return Qo(4,4,e,t)}function ig(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sg(e,t,n){return n=n!=null?n.concat([e]):null,Qo(4,4,ig.bind(null,t,e),n)}function Ud(){}function ag(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Md(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function og(e,t){var n=It();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Md(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lg(e,t,n){return Er&21?(zt(n,t)||(n=h1(),xe.lanes|=n,Cr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ut=!0),e.memoizedState=n)}function z4(e,t){var n=ae;ae=n!==0&&4>n?n:4,e(!0);var r=Bl.transition;Bl.transition={};try{e(!1),t()}finally{ae=n,Bl.transition=r}}function cg(){return It().memoizedState}function $4(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ug(e))dg(t,n);else if(n=z1(e,t,n,r),n!==null){var i=it();Ht(n,e,r,i),fg(n,t,r)}}function J4(e,t,n){var r=$n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ug(e))dg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,zt(o,a)){var l=t.interleaved;l===null?(i.next=i,Ad(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=z1(e,t,i,r),n!==null&&(i=it(),Ht(n,e,r,i),fg(n,t,r))}}function ug(e){var t=e.alternate;return e===xe||t!==null&&t===xe}function dg(e,t){ls=go=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function fg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,md(e,n)}}var vo={readContext:Mt,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},q4={readContext:Mt,useCallback:function(e,t){return Yt().memoizedState=[e,t===void 0?null:t],e},useContext:Mt,useEffect:Rh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Wa(4194308,4,ig.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Wa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Wa(4,2,e,t)},useMemo:function(e,t){var n=Yt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Yt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$4.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var t=Yt();return e={current:e},t.memoizedState=e},useState:Nh,useDebugValue:Ud,useDeferredValue:function(e){return Yt().memoizedState=e},useTransition:function(){var e=Nh(!1),t=e[0];return e=z4.bind(null,e[1]),Yt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=xe,i=Yt();if(ge){if(n===void 0)throw Error(D(407));n=n()}else{if(n=t(),Ve===null)throw Error(D(349));Er&30||K1(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Rh(X1.bind(null,r,s,e),[e]),r.flags|=2048,Ls(9,Y1.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Yt(),t=Ve.identifierPrefix;if(ge){var n=hn,r=fn;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ns++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=H4++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Q4={readContext:Mt,useCallback:ag,useContext:Mt,useEffect:Od,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:rg,useMemo:og,useReducer:Gl,useRef:tg,useState:function(){return Gl(Rs)},useDebugValue:Ud,useDeferredValue:function(e){var t=It();return lg(t,Me.memoizedState,e)},useTransition:function(){var e=Gl(Rs)[0],t=It().memoizedState;return[e,t]},useMutableSource:q1,useSyncExternalStore:Q1,useId:cg,unstable_isNewReconciler:!1},K4={readContext:Mt,useCallback:ag,useContext:Mt,useEffect:Od,useImperativeHandle:sg,useInsertionEffect:ng,useLayoutEffect:rg,useMemo:og,useReducer:Hl,useRef:tg,useState:function(){return Hl(Rs)},useDebugValue:Ud,useDeferredValue:function(e){var t=It();return Me===null?t.memoizedState=e:lg(t,Me.memoizedState,e)},useTransition:function(){var e=Hl(Rs)[0],t=It().memoizedState;return[e,t]},useMutableSource:q1,useSyncExternalStore:Q1,useId:cg,unstable_isNewReconciler:!1};function Ut(e,t){if(e&&e.defaultProps){t=we({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function tu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:we({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ko={isMounted:function(e){return(e=e._reactInternals)?Mr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),i=$n(e),s=pn(r,i);s.payload=t,n!=null&&(s.callback=n),t=Hn(e,s,i),t!==null&&(Ht(t,e,i,r),Va(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),i=$n(e),s=pn(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Hn(e,s,i),t!==null&&(Ht(t,e,i,r),Va(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=$n(e),i=pn(n,r);i.tag=2,t!=null&&(i.callback=t),t=Hn(e,i,r),t!==null&&(Ht(t,e,r,n),Va(t,e,r))}};function Lh(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!ks(n,r)||!ks(i,s):!0}function hg(e,t,n){var r=!1,i=Yn,s=t.contextType;return typeof s=="object"&&s!==null?s=Mt(s):(i=ft(t)?Sr:Ze.current,r=t.contextTypes,s=(r=r!=null)?vi(e,i):Yn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ko,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function Dh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ko.enqueueReplaceState(t,t.state,null)}function nu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Nd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Mt(s):(s=ft(t)?Sr:Ze.current,i.context=vi(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(tu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ko.enqueueReplaceState(i,i.state,null),po(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ji(e,t){try{var n="",r=t;do n+=kb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function zl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ru(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Y4=typeof WeakMap=="function"?WeakMap:Map;function pg(e,t,n){n=pn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){bo||(bo=!0,hu=r),ru(e,t)},n}function mg(e,t,n){n=pn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ru(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ru(e,t),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Mh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Y4;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=dx.bind(null,e,t,n),t.then(e,e))}function Ih(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _h(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=pn(-1,1),t.tag=2,Hn(n,t,1))),n.lanes|=1),e)}var X4=En.ReactCurrentOwner,ut=!1;function nt(e,t,n,r){t.child=e===null?H1(t,null,n,r):bi(t,e.child,n,r)}function Oh(e,t,n,r,i){n=n.render;var s=t.ref;return pi(t,i),r=Id(e,t,n,r,s,i),n=_d(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(ge&&n&&Sd(t),t.flags|=1,nt(e,t,r,i),t.child)}function Uh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!$d(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,gg(e,t,s,r,i)):(e=za(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ks,n(a,r)&&e.ref===t.ref)return wn(e,t,i)}return t.flags|=1,e=Jn(s,r),e.ref=t.ref,e.return=t,t.child=e}function gg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(ks(s,r)&&e.ref===t.ref)if(ut=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(ut=!0);else return t.lanes=e.lanes,wn(e,t,i)}return iu(e,t,n,r,i)}function vg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},de(ti,mt),mt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,de(ti,mt),mt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,de(ti,mt),mt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,de(ti,mt),mt|=r;return nt(e,t,i,n),t.child}function yg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function iu(e,t,n,r,i){var s=ft(n)?Sr:Ze.current;return s=vi(t,s),pi(t,i),n=Id(e,t,n,r,s,i),r=_d(),e!==null&&!ut?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,wn(e,t,i)):(ge&&r&&Sd(t),t.flags|=1,nt(e,t,n,i),t.child)}function Vh(e,t,n,r,i){if(ft(n)){var s=!0;lo(t)}else s=!1;if(pi(t,i),t.stateNode===null)Ba(e,t),hg(t,n,r),nu(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Mt(u):(u=ft(n)?Sr:Ze.current,u=vi(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==r||l!==u)&&Dh(t,a,r,u),Mn=!1;var h=t.memoizedState;a.state=h,po(t,r,a,i),l=t.memoizedState,o!==r||h!==l||dt.current||Mn?(typeof d=="function"&&(tu(t,n,d,r),l=t.memoizedState),(o=Mn||Lh(t,n,o,r,h,l,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$1(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:Ut(t.type,o),a.props=u,f=t.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Mt(l):(l=ft(n)?Sr:Ze.current,l=vi(t,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||h!==l)&&Dh(t,a,r,l),Mn=!1,h=t.memoizedState,a.state=h,po(t,r,a,i);var m=t.memoizedState;o!==f||h!==m||dt.current||Mn?(typeof v=="function"&&(tu(t,n,v,r),m=t.memoizedState),(u=Mn||Lh(t,n,u,r,h,m,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,m,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,m,l)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),a.props=r,a.state=m,a.context=l,r=u):(typeof a.componentDidUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return su(e,t,n,r,s,i)}function su(e,t,n,r,i,s){yg(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&kh(t,n,!1),wn(e,t,s);r=t.stateNode,X4.current=t;var o=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=bi(t,e.child,null,s),t.child=bi(t,null,o,s)):nt(e,t,o,s),t.memoizedState=r.state,i&&kh(t,n,!0),t.child}function bg(e){var t=e.stateNode;t.pendingContext?Sh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Sh(e,t.context,!1),Rd(e,t.containerInfo)}function Fh(e,t,n,r,i){return yi(),Ed(i),t.flags|=256,nt(e,t,n,r),t.child}var au={dehydrated:null,treeContext:null,retryLane:0};function ou(e){return{baseLanes:e,cachePool:null,transitions:null}}function xg(e,t,n){var r=t.pendingProps,i=ye.current,s=!1,a=(t.flags&128)!==0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(i&2)!==0),o?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),de(ye,i&1),e===null)return Zc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Zo(a,r,0,null),e=xr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ou(n),t.memoizedState=au,e):Vd(t,a));if(i=e.memoizedState,i!==null&&(o=i.dehydrated,o!==null))return Z4(e,t,a,r,o,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,o=i.sibling;var l={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Jn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),o!==null?s=Jn(o,s):(s=xr(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?ou(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=au,r}return s=e.child,e=s.sibling,r=Jn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Vd(e,t){return t=Zo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ma(e,t,n,r){return r!==null&&Ed(r),bi(t,e.child,null,n),e=Vd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Z4(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=zl(Error(D(422))),ma(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Zo({mode:"visible",children:r.children},i,0,null),s=xr(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&bi(t,e.child,null,a),t.child.memoizedState=ou(a),t.memoizedState=au,s);if(!(t.mode&1))return ma(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var o=r.dgst;return r=o,s=Error(D(419)),r=zl(s,r,void 0),ma(e,t,a,r)}if(o=(a&e.childLanes)!==0,ut||o){if(r=Ve,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,jn(e,i),Ht(r,e,i,-1))}return zd(),r=zl(Error(D(421))),ma(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fx.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,gt=Gn(i.nextSibling),bt=t,ge=!0,Wt=null,e!==null&&(At[Nt++]=fn,At[Nt++]=hn,At[Nt++]=kr,fn=e.id,hn=e.overflow,kr=t),t=Vd(t,r.children),t.flags|=4096,t)}function Wh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),eu(e.return,t,n)}function $l(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(nt(e,t,r.children,n),r=ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Wh(e,n,t);else if(e.tag===19)Wh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(de(ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&mo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$l(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&mo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$l(t,!0,n,null,s);break;case"together":$l(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ba(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function wn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(D(153));if(t.child!==null){for(e=t.child,n=Jn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Jn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ex(e,t,n){switch(t.tag){case 3:bg(t),yi();break;case 5:J1(t);break;case 1:ft(t.type)&&lo(t);break;case 4:Rd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;de(fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(de(ye,ye.current&1),t.flags|=128,null):n&t.child.childLanes?xg(e,t,n):(de(ye,ye.current&1),e=wn(e,t,n),e!==null?e.sibling:null);de(ye,ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return jg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),de(ye,ye.current),r)break;return null;case 22:case 23:return t.lanes=0,vg(e,t,n)}return wn(e,t,n)}var wg,lu,Sg,kg;wg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lu=function(){};Sg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(nn.current);var s=null;switch(n){case"input":i=Nc(e,i),r=Nc(e,r),s=[];break;case"select":i=we({},i,{value:void 0}),r=we({},r,{value:void 0}),s=[];break;case"textarea":i=Dc(e,i),r=Dc(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ao)}Ic(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var o=i[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(o=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&fe("scroll",e),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};kg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Gi(e,t){if(!ge)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function tx(e,t,n){var r=t.pendingProps;switch(kd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return ft(t.type)&&oo(),qe(t),null;case 3:return r=t.stateNode,xi(),pe(dt),pe(Ze),Dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ha(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Wt!==null&&(gu(Wt),Wt=null))),lu(e,t),qe(t),null;case 5:Ld(t);var i=gr(As.current);if(n=t.type,e!==null&&t.stateNode!=null)Sg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(D(166));return qe(t),null}if(e=gr(nn.current),ha(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Xt]=t,r[Ts]=s,e=(t.mode&1)!==0,n){case"dialog":fe("cancel",r),fe("close",r);break;case"iframe":case"object":case"embed":fe("load",r);break;case"video":case"audio":for(i=0;i<Ki.length;i++)fe(Ki[i],r);break;case"source":fe("error",r);break;case"img":case"image":case"link":fe("error",r),fe("load",r);break;case"details":fe("toggle",r);break;case"input":Kf(r,s),fe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},fe("invalid",r);break;case"textarea":Xf(r,s),fe("invalid",r)}Ic(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?r.textContent!==o&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,o,e),i=["children",o]):typeof o=="number"&&r.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&fa(r.textContent,o,e),i=["children",""+o]):vs.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&fe("scroll",r)}switch(n){case"input":ia(r),Yf(r,s,!0);break;case"textarea":ia(r),Zf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ao)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=X0(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Xt]=t,e[Ts]=r,wg(e,t,!1,!1),t.stateNode=e;e:{switch(a=_c(n,r),n){case"dialog":fe("cancel",e),fe("close",e),i=r;break;case"iframe":case"object":case"embed":fe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ki.length;i++)fe(Ki[i],e);i=r;break;case"source":fe("error",e),i=r;break;case"img":case"image":case"link":fe("error",e),fe("load",e),i=r;break;case"details":fe("toggle",e),i=r;break;case"input":Kf(e,r),i=Nc(e,r),fe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=we({},r,{value:void 0}),fe("invalid",e);break;case"textarea":Xf(e,r),i=Dc(e,r),fe("invalid",e);break;default:i=r}Ic(n,i),o=i;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?t1(e,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Z0(e,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ys(e,l):typeof l=="number"&&ys(e,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(vs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&fe("scroll",e):l!=null&&cd(e,s,l,a))}switch(n){case"input":ia(e),Yf(e,r,!1);break;case"textarea":ia(e),Zf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Kn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?ui(e,!!r.multiple,s,!1):r.defaultValue!=null&&ui(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ao)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)kg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(D(166));if(n=gr(As.current),gr(nn.current),ha(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xt]=t,(s=r.nodeValue!==n)&&(e=bt,e!==null))switch(e.tag){case 3:fa(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&fa(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xt]=t,t.stateNode=r}return qe(t),null;case 13:if(pe(ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ge&&gt!==null&&t.mode&1&&!(t.flags&128))B1(),yi(),t.flags|=98560,s=!1;else if(s=ha(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(D(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(D(317));s[Xt]=t}else yi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),s=!1}else Wt!==null&&(gu(Wt),Wt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ye.current&1?_e===0&&(_e=3):zd())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return xi(),lu(e,t),e===null&&Es(t.stateNode.containerInfo),qe(t),null;case 10:return Pd(t.type._context),qe(t),null;case 17:return ft(t.type)&&oo(),qe(t),null;case 19:if(pe(ye),s=t.memoizedState,s===null)return qe(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)Gi(s,!1);else{if(_e!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=mo(e),a!==null){for(t.flags|=128,Gi(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return de(ye,ye.current&1|2),t.child}e=e.sibling}s.tail!==null&&Pe()>wi&&(t.flags|=128,r=!0,Gi(s,!1),t.lanes=4194304)}else{if(!r)if(e=mo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Gi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ge)return qe(t),null}else 2*Pe()-s.renderingStartTime>wi&&n!==1073741824&&(t.flags|=128,r=!0,Gi(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Pe(),t.sibling=null,n=ye.current,de(ye,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Hd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?mt&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(D(156,t.tag))}function nx(e,t){switch(kd(t),t.tag){case 1:return ft(t.type)&&oo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xi(),pe(dt),pe(Ze),Dd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ld(t),null;case 13:if(pe(ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(D(340));yi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(ye),null;case 4:return xi(),null;case 10:return Pd(t.type._context),null;case 22:case 23:return Hd(),null;case 24:return null;default:return null}}var ga=!1,Ye=!1,rx=typeof WeakSet=="function"?WeakSet:Set,F=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ee(e,t,r)}else n.current=null}function cu(e,t,n){try{n()}catch(r){Ee(e,t,r)}}var Bh=!1;function ix(e,t){if($c=ro,e=A1(),wd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,d=0,f=e,h=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(o=a+i),f!==s||r!==0&&f.nodeType!==3||(l=a+r),f.nodeType===3&&(a+=f.nodeValue.length),(v=f.firstChild)!==null;)h=f,f=v;for(;;){if(f===e)break t;if(h===n&&++u===i&&(o=a),h===s&&++d===r&&(l=a),(v=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=v}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Jc={focusedElem:e,selectionRange:n},ro=!1,F=t;F!==null;)if(t=F,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,F=e;else for(;F!==null;){t=F;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var y=m.memoizedProps,g=m.memoizedState,p=t.stateNode,b=p.getSnapshotBeforeUpdate(t.elementType===t.type?y:Ut(t.type,y),g);p.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(D(163))}}catch(j){Ee(t,t.return,j)}if(e=t.sibling,e!==null){e.return=t.return,F=e;break}F=t.return}return m=Bh,Bh=!1,m}function cs(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&cu(t,n,s)}i=i.next}while(i!==r)}}function Yo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function uu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Eg(e){var t=e.alternate;t!==null&&(e.alternate=null,Eg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xt],delete t[Ts],delete t[Kc],delete t[F4],delete t[W4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cg(e){return e.tag===5||e.tag===3||e.tag===4}function Gh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function du(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ao));else if(r!==4&&(e=e.child,e!==null))for(du(e,t,n),e=e.sibling;e!==null;)du(e,t,n),e=e.sibling}function fu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fu(e,t,n),e=e.sibling;e!==null;)fu(e,t,n),e=e.sibling}var We=null,Ft=!1;function An(e,t,n){for(n=n.child;n!==null;)Tg(e,t,n),n=n.sibling}function Tg(e,t,n){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Go,n)}catch{}switch(n.tag){case 5:Ye||ei(n,t);case 6:var r=We,i=Ft;We=null,An(e,t,n),We=r,Ft=i,We!==null&&(Ft?(e=We,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Ft?(e=We,n=n.stateNode,e.nodeType===8?Vl(e.parentNode,n):e.nodeType===1&&Vl(e,n),ws(e)):Vl(We,n.stateNode));break;case 4:r=We,i=Ft,We=n.stateNode.containerInfo,Ft=!0,An(e,t,n),We=r,Ft=i;break;case 0:case 11:case 14:case 15:if(!Ye&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&cu(n,t,a),i=i.next}while(i!==r)}An(e,t,n);break;case 1:if(!Ye&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Ee(n,t,o)}An(e,t,n);break;case 21:An(e,t,n);break;case 22:n.mode&1?(Ye=(r=Ye)||n.memoizedState!==null,An(e,t,n),Ye=r):An(e,t,n);break;default:An(e,t,n)}}function Hh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new rx),t.forEach(function(r){var i=hx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function _t(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;o!==null;){switch(o.tag){case 5:We=o.stateNode,Ft=!1;break e;case 3:We=o.stateNode.containerInfo,Ft=!0;break e;case 4:We=o.stateNode.containerInfo,Ft=!0;break e}o=o.return}if(We===null)throw Error(D(160));Tg(s,a,i),We=null,Ft=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ee(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pg(t,e),t=t.sibling}function Pg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(_t(t,e),Qt(e),r&4){try{cs(3,e,e.return),Yo(3,e)}catch(y){Ee(e,e.return,y)}try{cs(5,e,e.return)}catch(y){Ee(e,e.return,y)}}break;case 1:_t(t,e),Qt(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(_t(t,e),Qt(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{ys(i,"")}catch(y){Ee(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&K0(i,s),_c(o,a);var u=_c(o,s);for(a=0;a<l.length;a+=2){var d=l[a],f=l[a+1];d==="style"?t1(i,f):d==="dangerouslySetInnerHTML"?Z0(i,f):d==="children"?ys(i,f):cd(i,d,f,u)}switch(o){case"input":Rc(i,s);break;case"textarea":Y0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?ui(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?ui(i,!!s.multiple,s.defaultValue,!0):ui(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ts]=s}catch(y){Ee(e,e.return,y)}}break;case 6:if(_t(t,e),Qt(e),r&4){if(e.stateNode===null)throw Error(D(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(y){Ee(e,e.return,y)}}break;case 3:if(_t(t,e),Qt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(t.containerInfo)}catch(y){Ee(e,e.return,y)}break;case 4:_t(t,e),Qt(e);break;case 13:_t(t,e),Qt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Bd=Pe())),r&4&&Hh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ye=(u=Ye)||d,_t(t,e),Ye=u):_t(t,e),Qt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(F=e,d=e.child;d!==null;){for(f=F=d;F!==null;){switch(h=F,v=h.child,h.tag){case 0:case 11:case 14:case 15:cs(4,h,h.return);break;case 1:ei(h,h.return);var m=h.stateNode;if(typeof m.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(y){Ee(r,n,y)}}break;case 5:ei(h,h.return);break;case 22:if(h.memoizedState!==null){$h(f);continue}}v!==null?(v.return=h,F=v):$h(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,l=f.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=e1("display",a))}catch(y){Ee(e,e.return,y)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){Ee(e,e.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:_t(t,e),Qt(e),r&4&&Hh(e);break;case 21:break;default:_t(t,e),Qt(e)}}function Qt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Cg(n)){var r=n;break e}n=n.return}throw Error(D(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ys(i,""),r.flags&=-33);var s=Gh(e);fu(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,o=Gh(e);du(e,o,a);break;default:throw Error(D(161))}}catch(l){Ee(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function sx(e,t,n){F=e,Ag(e)}function Ag(e,t,n){for(var r=(e.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||ga;if(!a){var o=i.alternate,l=o!==null&&o.memoizedState!==null||Ye;o=ga;var u=Ye;if(ga=a,(Ye=l)&&!u)for(F=i;F!==null;)a=F,l=a.child,a.tag===22&&a.memoizedState!==null?Jh(i):l!==null?(l.return=a,F=l):Jh(i);for(;s!==null;)F=s,Ag(s),s=s.sibling;F=i,ga=o,Ye=u}zh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):zh(e)}}function zh(e){for(;F!==null;){var t=F;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ye||Yo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ye)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Ah(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ah(t,a,n)}break;case 5:var o=t.stateNode;if(n===null&&t.flags&4){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ws(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(D(163))}Ye||t.flags&512&&uu(t)}catch(h){Ee(t,t.return,h)}}if(t===e){F=null;break}if(n=t.sibling,n!==null){n.return=t.return,F=n;break}F=t.return}}function $h(e){for(;F!==null;){var t=F;if(t===e){F=null;break}var n=t.sibling;if(n!==null){n.return=t.return,F=n;break}F=t.return}}function Jh(e){for(;F!==null;){var t=F;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Yo(4,t)}catch(l){Ee(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Ee(t,i,l)}}var s=t.return;try{uu(t)}catch(l){Ee(t,s,l)}break;case 5:var a=t.return;try{uu(t)}catch(l){Ee(t,a,l)}}}catch(l){Ee(t,t.return,l)}if(t===e){F=null;break}var o=t.sibling;if(o!==null){o.return=t.return,F=o;break}F=t.return}}var ax=Math.ceil,yo=En.ReactCurrentDispatcher,Fd=En.ReactCurrentOwner,Lt=En.ReactCurrentBatchConfig,re=0,Ve=null,Re=null,Ge=0,mt=0,ti=nr(0),_e=0,Ds=null,Cr=0,Xo=0,Wd=0,us=null,ct=null,Bd=0,wi=1/0,ln=null,bo=!1,hu=null,zn=null,va=!1,Un=null,xo=0,ds=0,pu=null,Ga=-1,Ha=0;function it(){return re&6?Pe():Ga!==-1?Ga:Ga=Pe()}function $n(e){return e.mode&1?re&2&&Ge!==0?Ge&-Ge:G4.transition!==null?(Ha===0&&(Ha=h1()),Ha):(e=ae,e!==0||(e=window.event,e=e===void 0?16:x1(e.type)),e):1}function Ht(e,t,n,r){if(50<ds)throw ds=0,pu=null,Error(D(185));Js(e,n,r),(!(re&2)||e!==Ve)&&(e===Ve&&(!(re&2)&&(Xo|=n),_e===4&&_n(e,Ge)),ht(e,r),n===1&&re===0&&!(t.mode&1)&&(wi=Pe()+500,qo&&rr()))}function ht(e,t){var n=e.callbackNode;Gb(e,t);var r=no(e,e===Ve?Ge:0);if(r===0)n!==null&&nh(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&nh(n),t===1)e.tag===0?B4(qh.bind(null,e)):V1(qh.bind(null,e)),U4(function(){!(re&6)&&rr()}),n=null;else{switch(p1(r)){case 1:n=pd;break;case 4:n=d1;break;case 16:n=to;break;case 536870912:n=f1;break;default:n=to}n=Og(n,Ng.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ng(e,t){if(Ga=-1,Ha=0,re&6)throw Error(D(327));var n=e.callbackNode;if(mi()&&e.callbackNode!==n)return null;var r=no(e,e===Ve?Ge:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=jo(e,r);else{t=r;var i=re;re|=2;var s=Lg();(Ve!==e||Ge!==t)&&(ln=null,wi=Pe()+500,br(e,t));do try{cx();break}catch(o){Rg(e,o)}while(!0);Td(),yo.current=s,re=i,Re!==null?t=0:(Ve=null,Ge=0,t=_e)}if(t!==0){if(t===2&&(i=Wc(e),i!==0&&(r=i,t=mu(e,i))),t===1)throw n=Ds,br(e,0),_n(e,r),ht(e,Pe()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!ox(i)&&(t=jo(e,r),t===2&&(s=Wc(e),s!==0&&(r=s,t=mu(e,s))),t===1))throw n=Ds,br(e,0),_n(e,r),ht(e,Pe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(D(345));case 2:or(e,ct,ln);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=Bd+500-Pe(),10<t)){if(no(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Qc(or.bind(null,e,ct,ln),t);break}or(e,ct,ln);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-Gt(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ax(r/1960))-r,10<r){e.timeoutHandle=Qc(or.bind(null,e,ct,ln),r);break}or(e,ct,ln);break;case 5:or(e,ct,ln);break;default:throw Error(D(329))}}}return ht(e,Pe()),e.callbackNode===n?Ng.bind(null,e):null}function mu(e,t){var n=us;return e.current.memoizedState.isDehydrated&&(br(e,t).flags|=256),e=jo(e,t),e!==2&&(t=ct,ct=n,t!==null&&gu(t)),e}function gu(e){ct===null?ct=e:ct.push.apply(ct,e)}function ox(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!zt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~Wd,t&=~Xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function qh(e){if(re&6)throw Error(D(327));mi();var t=no(e,0);if(!(t&1))return ht(e,Pe()),null;var n=jo(e,t);if(e.tag!==0&&n===2){var r=Wc(e);r!==0&&(t=r,n=mu(e,r))}if(n===1)throw n=Ds,br(e,0),_n(e,t),ht(e,Pe()),n;if(n===6)throw Error(D(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,or(e,ct,ln),ht(e,Pe()),null}function Gd(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(wi=Pe()+500,qo&&rr())}}function Tr(e){Un!==null&&Un.tag===0&&!(re&6)&&mi();var t=re;re|=1;var n=Lt.transition,r=ae;try{if(Lt.transition=null,ae=1,e)return e()}finally{ae=r,Lt.transition=n,re=t,!(re&6)&&rr()}}function Hd(){mt=ti.current,pe(ti)}function br(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,O4(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&oo();break;case 3:xi(),pe(dt),pe(Ze),Dd();break;case 5:Ld(r);break;case 4:xi();break;case 13:pe(ye);break;case 19:pe(ye);break;case 10:Pd(r.type._context);break;case 22:case 23:Hd()}n=n.return}if(Ve=e,Re=e=Jn(e.current,null),Ge=mt=t,_e=0,Ds=null,Wd=Xo=Cr=0,ct=us=null,mr!==null){for(t=0;t<mr.length;t++)if(n=mr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}mr=null}return e}function Rg(e,t){do{var n=Re;try{if(Td(),Fa.current=vo,go){for(var r=xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}go=!1}if(Er=0,Ue=Me=xe=null,ls=!1,Ns=0,Fd.current=null,n===null||n.return===null){_e=1,Ds=t,Re=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Ge,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=o,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Ih(a);if(v!==null){v.flags&=-257,_h(v,a,o,s,t),v.mode&1&&Mh(s,u,t),t=v,l=u;var m=t.updateQueue;if(m===null){var y=new Set;y.add(l),t.updateQueue=y}else m.add(l);break e}else{if(!(t&1)){Mh(s,u,t),zd();break e}l=Error(D(426))}}else if(ge&&o.mode&1){var g=Ih(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),_h(g,a,o,s,t),Ed(ji(l,o));break e}}s=l=ji(l,o),_e!==4&&(_e=2),us===null?us=[s]:us.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=pg(s,l,t);Ph(s,p);break e;case 1:o=l;var b=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof b.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(zn===null||!zn.has(x)))){s.flags|=65536,t&=-t,s.lanes|=t;var j=mg(s,o,t);Ph(s,j);break e}}s=s.return}while(s!==null)}Mg(n)}catch(S){t=S,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function Lg(){var e=yo.current;return yo.current=vo,e===null?vo:e}function zd(){(_e===0||_e===3||_e===2)&&(_e=4),Ve===null||!(Cr&268435455)&&!(Xo&268435455)||_n(Ve,Ge)}function jo(e,t){var n=re;re|=2;var r=Lg();(Ve!==e||Ge!==t)&&(ln=null,br(e,t));do try{lx();break}catch(i){Rg(e,i)}while(!0);if(Td(),re=n,yo.current=r,Re!==null)throw Error(D(261));return Ve=null,Ge=0,_e}function lx(){for(;Re!==null;)Dg(Re)}function cx(){for(;Re!==null&&!Mb();)Dg(Re)}function Dg(e){var t=_g(e.alternate,e,mt);e.memoizedProps=e.pendingProps,t===null?Mg(e):Re=t,Fd.current=null}function Mg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=nx(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{_e=6,Re=null;return}}else if(n=tx(n,t,mt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);_e===0&&(_e=5)}function or(e,t,n){var r=ae,i=Lt.transition;try{Lt.transition=null,ae=1,ux(e,t,n,r)}finally{Lt.transition=i,ae=r}return null}function ux(e,t,n,r){do mi();while(Un!==null);if(re&6)throw Error(D(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(D(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Hb(e,s),e===Ve&&(Re=Ve=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||va||(va=!0,Og(to,function(){return mi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var a=ae;ae=1;var o=re;re|=4,Fd.current=null,ix(e,n),Pg(n,e),N4(Jc),ro=!!$c,Jc=$c=null,e.current=n,sx(n),Ib(),re=o,ae=a,Lt.transition=s}else e.current=n;if(va&&(va=!1,Un=e,xo=i),s=e.pendingLanes,s===0&&(zn=null),Ub(n.stateNode),ht(e,Pe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(bo)throw bo=!1,e=hu,hu=null,e;return xo&1&&e.tag!==0&&mi(),s=e.pendingLanes,s&1?e===pu?ds++:(ds=0,pu=e):ds=0,rr(),null}function mi(){if(Un!==null){var e=p1(xo),t=Lt.transition,n=ae;try{if(Lt.transition=null,ae=16>e?16:e,Un===null)var r=!1;else{if(e=Un,Un=null,xo=0,re&6)throw Error(D(331));var i=re;for(re|=4,F=e.current;F!==null;){var s=F,a=s.child;if(F.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(F=u;F!==null;){var d=F;switch(d.tag){case 0:case 11:case 15:cs(8,d,s)}var f=d.child;if(f!==null)f.return=d,F=f;else for(;F!==null;){d=F;var h=d.sibling,v=d.return;if(Eg(d),d===u){F=null;break}if(h!==null){h.return=v,F=h;break}F=v}}}var m=s.alternate;if(m!==null){var y=m.child;if(y!==null){m.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}F=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,F=a;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:cs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,F=p;break e}F=s.return}}var b=e.current;for(F=b;F!==null;){a=F;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,F=x;else e:for(a=b;F!==null;){if(o=F,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Yo(9,o)}}catch(S){Ee(o,o.return,S)}if(o===a){F=null;break e}var j=o.sibling;if(j!==null){j.return=o.return,F=j;break e}F=o.return}}if(re=i,rr(),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Go,e)}catch{}r=!0}return r}finally{ae=n,Lt.transition=t}}return!1}function Qh(e,t,n){t=ji(n,t),t=pg(e,t,1),e=Hn(e,t,1),t=it(),e!==null&&(Js(e,1,t),ht(e,t))}function Ee(e,t,n){if(e.tag===3)Qh(e,e,n);else for(;t!==null;){if(t.tag===3){Qh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){e=ji(n,e),e=mg(t,e,1),t=Hn(t,e,1),e=it(),t!==null&&(Js(t,1,e),ht(t,e));break}}t=t.return}}function dx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Ve===e&&(Ge&n)===n&&(_e===4||_e===3&&(Ge&130023424)===Ge&&500>Pe()-Bd?br(e,0):Wd|=n),ht(e,t)}function Ig(e,t){t===0&&(e.mode&1?(t=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):t=1);var n=it();e=jn(e,t),e!==null&&(Js(e,t,n),ht(e,n))}function fx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ig(e,n)}function hx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(D(314))}r!==null&&r.delete(t),Ig(e,n)}var _g;_g=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||dt.current)ut=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ut=!1,ex(e,t,n);ut=!!(e.flags&131072)}else ut=!1,ge&&t.flags&1048576&&F1(t,uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ba(e,t),e=t.pendingProps;var i=vi(t,Ze.current);pi(t,n),i=Id(null,t,r,e,i,n);var s=_d();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ft(r)?(s=!0,lo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nd(t),i.updater=Ko,t.stateNode=i,i._reactInternals=t,nu(t,r,e,n),t=su(null,t,r,!0,s,n)):(t.tag=0,ge&&s&&Sd(t),nt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ba(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=mx(r),e=Ut(r,e),i){case 0:t=iu(null,t,r,e,n);break e;case 1:t=Vh(null,t,r,e,n);break e;case 11:t=Oh(null,t,r,e,n);break e;case 14:t=Uh(null,t,r,Ut(r.type,e),n);break e}throw Error(D(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),iu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Vh(e,t,r,i,n);case 3:e:{if(bg(t),e===null)throw Error(D(387));r=t.pendingProps,s=t.memoizedState,i=s.element,$1(e,t),po(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ji(Error(D(423)),t),t=Fh(e,t,r,n,i);break e}else if(r!==i){i=ji(Error(D(424)),t),t=Fh(e,t,r,n,i);break e}else for(gt=Gn(t.stateNode.containerInfo.firstChild),bt=t,ge=!0,Wt=null,n=H1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){t=wn(e,t,n);break e}nt(e,t,r,n)}t=t.child}return t;case 5:return J1(t),e===null&&Zc(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,qc(r,i)?a=null:s!==null&&qc(r,s)&&(t.flags|=32),yg(e,t),nt(e,t,a,n),t.child;case 6:return e===null&&Zc(t),null;case 13:return xg(e,t,n);case 4:return Rd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bi(t,null,r,n):nt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Oh(e,t,r,i,n);case 7:return nt(e,t,t.pendingProps,n),t.child;case 8:return nt(e,t,t.pendingProps.children,n),t.child;case 12:return nt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,de(fo,r._currentValue),r._currentValue=a,s!==null)if(zt(s.value,a)){if(s.children===i.children&&!dt.current){t=wn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=pn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eu(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(D(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),eu(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}nt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,pi(t,n),i=Mt(i),r=r(i),t.flags|=1,nt(e,t,r,n),t.child;case 14:return r=t.type,i=Ut(r,t.pendingProps),i=Ut(r.type,i),Uh(e,t,r,i,n);case 15:return gg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Ut(r,i),Ba(e,t),t.tag=1,ft(r)?(e=!0,lo(t)):e=!1,pi(t,n),hg(t,r,i),nu(t,r,i,n),su(null,t,r,!0,e,n);case 19:return jg(e,t,n);case 22:return vg(e,t,n)}throw Error(D(156,t.tag))};function Og(e,t){return u1(e,t)}function px(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,n,r){return new px(e,t,n,r)}function $d(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mx(e){if(typeof e=="function")return $d(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dd)return 11;if(e===fd)return 14}return 2}function Jn(e,t){var n=e.alternate;return n===null?(n=Rt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function za(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")$d(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case zr:return xr(n.children,i,s,t);case ud:a=8,i|=8;break;case Cc:return e=Rt(12,n,t,i|2),e.elementType=Cc,e.lanes=s,e;case Tc:return e=Rt(13,n,t,i),e.elementType=Tc,e.lanes=s,e;case Pc:return e=Rt(19,n,t,i),e.elementType=Pc,e.lanes=s,e;case J0:return Zo(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z0:a=10;break e;case $0:a=9;break e;case dd:a=11;break e;case fd:a=14;break e;case Dn:a=16,r=null;break e}throw Error(D(130,e==null?e:typeof e,""))}return t=Rt(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xr(e,t,n,r){return e=Rt(7,e,r,t),e.lanes=n,e}function Zo(e,t,n,r){return e=Rt(22,e,r,t),e.elementType=J0,e.lanes=n,e.stateNode={isHidden:!1},e}function Jl(e,t,n){return e=Rt(6,e,null,t),e.lanes=n,e}function ql(e,t,n){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pl(0),this.expirationTimes=Pl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Jd(e,t,n,r,i,s,a,o,l){return e=new gx(e,t,n,o,l),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Rt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),e}function vx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Ug(e){if(!e)return Yn;e=e._reactInternals;e:{if(Mr(e)!==e||e.tag!==1)throw Error(D(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ft(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(D(171))}if(e.tag===1){var n=e.type;if(ft(n))return U1(e,n,t)}return t}function Vg(e,t,n,r,i,s,a,o,l){return e=Jd(n,r,!0,e,i,s,a,o,l),e.context=Ug(null),n=e.current,r=it(),i=$n(n),s=pn(r,i),s.callback=t??null,Hn(n,s,i),e.current.lanes=i,Js(e,i,r),ht(e,r),e}function el(e,t,n,r){var i=t.current,s=it(),a=$n(i);return n=Ug(n),t.context===null?t.context=n:t.pendingContext=n,t=pn(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Hn(i,t,a),e!==null&&(Ht(e,i,a,s),Va(e,i,a)),a}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Kh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function qd(e,t){Kh(e,t),(e=e.alternate)&&Kh(e,t)}function yx(){return null}var Fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Qd(e){this._internalRoot=e}tl.prototype.render=Qd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(D(409));el(e,t,null,null)};tl.prototype.unmount=Qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tr(function(){el(null,e,null,null)}),t[xn]=null}};function tl(e){this._internalRoot=e}tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=v1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<In.length&&t!==0&&t<In[n].priority;n++);In.splice(n,0,e),n===0&&b1(e)}};function Kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function nl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Yh(){}function bx(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wo(a);s.call(u)}}var a=Vg(t,r,e,0,null,!1,!1,"",Yh);return e._reactRootContainer=a,e[xn]=a.current,Es(e.nodeType===8?e.parentNode:e),Tr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var o=r;r=function(){var u=wo(l);o.call(u)}}var l=Jd(e,0,!1,null,null,!1,!1,"",Yh);return e._reactRootContainer=l,e[xn]=l.current,Es(e.nodeType===8?e.parentNode:e),Tr(function(){el(t,l,n,r)}),l}function rl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var o=i;i=function(){var l=wo(a);o.call(l)}}el(t,a,e,i)}else a=bx(n,t,e,i,r);return wo(a)}m1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Qi(t.pendingLanes);n!==0&&(md(t,n|1),ht(t,Pe()),!(re&6)&&(wi=Pe()+500,rr()))}break;case 13:Tr(function(){var r=jn(e,1);if(r!==null){var i=it();Ht(r,e,1,i)}}),qd(e,1)}};gd=function(e){if(e.tag===13){var t=jn(e,134217728);if(t!==null){var n=it();Ht(t,e,134217728,n)}qd(e,134217728)}};g1=function(e){if(e.tag===13){var t=$n(e),n=jn(e,t);if(n!==null){var r=it();Ht(n,e,t,r)}qd(e,t)}};v1=function(){return ae};y1=function(e,t){var n=ae;try{return ae=e,t()}finally{ae=n}};Uc=function(e,t,n){switch(t){case"input":if(Rc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Jo(r);if(!i)throw Error(D(90));Q0(r),Rc(r,i)}}}break;case"textarea":Y0(e,n);break;case"select":t=n.value,t!=null&&ui(e,!!n.multiple,t,!1)}};i1=Gd;s1=Tr;var xx={usingClientEntryPoint:!1,Events:[Qs,Qr,Jo,n1,r1,Gd]},Hi={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jx={bundleType:Hi.bundleType,version:Hi.version,rendererPackageName:Hi.rendererPackageName,rendererConfig:Hi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:En.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=l1(e),e===null?null:e.stateNode},findFiberByHostInstance:Hi.findFiberByHostInstance||yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Go=ya.inject(jx),tn=ya}catch{}}St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;St.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kd(t))throw Error(D(200));return vx(e,t,null,n)};St.createRoot=function(e,t){if(!Kd(e))throw Error(D(299));var n=!1,r="",i=Fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Jd(e,1,!1,null,null,n,!1,r,i),e[xn]=t.current,Es(e.nodeType===8?e.parentNode:e),new Qd(t)};St.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(D(188)):(e=Object.keys(e).join(","),Error(D(268,e)));return e=l1(t),e=e===null?null:e.stateNode,e};St.flushSync=function(e){return Tr(e)};St.hydrate=function(e,t,n){if(!nl(t))throw Error(D(200));return rl(null,e,t,!0,n)};St.hydrateRoot=function(e,t,n){if(!Kd(e))throw Error(D(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Vg(t,null,e,1,n??null,i,!1,s,a),e[xn]=t.current,Es(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new tl(t)};St.render=function(e,t,n){if(!nl(t))throw Error(D(200));return rl(null,e,t,!1,n)};St.unmountComponentAtNode=function(e){if(!nl(e))throw Error(D(40));return e._reactRootContainer?(Tr(function(){rl(null,null,e,!1,function(){e._reactRootContainer=null,e[xn]=null})}),!0):!1};St.unstable_batchedUpdates=Gd;St.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!nl(n))throw Error(D(200));if(e==null||e._reactInternals===void 0)throw Error(D(38));return rl(e,t,n,!1,r)};St.version="18.3.1-next-f1338f8080-20240426";function Wg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wg)}catch(e){console.error(e)}}Wg(),W0.exports=St;var wx=W0.exports,Bg,Xh=wx;Bg=Xh.createRoot,Xh.hydrateRoot;/**
 * @remix-run/router v1.23.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ms(){return Ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ms.apply(null,arguments)}var Vn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Vn||(Vn={}));const Zh="popstate";function Sx(e){e===void 0&&(e={});function t(i,s){let{pathname:a="/",search:o="",hash:l=""}=Ir(i.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),vu("",{pathname:a,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let a=i.document.querySelector("base"),o="";if(a&&a.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");o=u===-1?l:l.slice(0,u)}return o+"#"+(typeof s=="string"?s:So(s))}function r(i,s){Yd(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Ex(t,n,r,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Yd(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kx(){return Math.random().toString(36).substr(2,8)}function ep(e,t){return{usr:e.state,key:e.key,idx:t}}function vu(e,t,n,r){return n===void 0&&(n=null),Ms({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ir(t):t,{state:n,key:t&&t.key||r||kx()})}function So(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ir(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ex(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,o=Vn.Pop,l=null,u=d();u==null&&(u=0,a.replaceState(Ms({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function f(){o=Vn.Pop;let g=d(),p=g==null?null:g-u;u=g,l&&l({action:o,location:y.location,delta:p})}function h(g,p){o=Vn.Push;let b=vu(y.location,g,p);n&&n(b,g),u=d()+1;let x=ep(b,u),j=y.createHref(b);try{a.pushState(x,"",j)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(j)}s&&l&&l({action:o,location:y.location,delta:1})}function v(g,p){o=Vn.Replace;let b=vu(y.location,g,p);n&&n(b,g),u=d();let x=ep(b,u),j=y.createHref(b);a.replaceState(x,"",j),s&&l&&l({action:o,location:y.location,delta:0})}function m(g){let p=i.location.origin!=="null"?i.location.origin:i.location.href,b=typeof g=="string"?g:So(g);return b=b.replace(/ $/,"%20"),je(p,"No window.location.(origin|href) available to create URL for href: "+b),new URL(b,p)}let y={get action(){return o},get location(){return e(i,a)},listen(g){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Zh,f),l=g,()=>{i.removeEventListener(Zh,f),l=null}},createHref(g){return t(i,g)},createURL:m,encodeLocation(g){let p=m(g);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:v,go(g){return a.go(g)}};return y}var tp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(tp||(tp={}));function Cx(e,t,n){return n===void 0&&(n="/"),Tx(e,t,n)}function Tx(e,t,n,r){let i=typeof t=="string"?Ir(t):t,s=Si(i.pathname||"/",n);if(s==null)return null;let a=Gg(e);Px(a);let o=null,l=Vx(s);for(let u=0;o==null&&u<a.length;++u)o=Ox(a[u],l);return o}function Gg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,o)=>{let l={relativePath:o===void 0?s.path||"":o,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};l.relativePath.startsWith("/")&&(je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=qn([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(je(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Gg(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Ix(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var o;if(s.path===""||!((o=s.path)!=null&&o.includes("?")))i(s,a);else for(let l of Hg(s.path))i(s,a,l)}),t}function Hg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Hg(r.join("/")),o=[];return o.push(...a.map(l=>l===""?s:[s,l].join("/"))),i&&o.push(...a),o.map(l=>e.startsWith("/")&&l===""?"/":l)}function Px(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_x(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ax=/^:[\w-]+$/,Nx=3,Rx=2,Lx=1,Dx=10,Mx=-2,np=e=>e==="*";function Ix(e,t){let n=e.split("/"),r=n.length;return n.some(np)&&(r+=Mx),t&&(r+=Rx),n.filter(i=>!np(i)).reduce((i,s)=>i+(Ax.test(s)?Nx:s===""?Lx:Dx),r)}function _x(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Ox(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let o=0;o<r.length;++o){let l=r[o],u=o===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",f=yu({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},d),h=l.route;if(!f)return null;Object.assign(i,f.params),a.push({params:i,pathname:qn([s,f.pathname]),pathnameBase:Bx(qn([s,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(s=qn([s,f.pathnameBase]))}return a}function yu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ux(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),o=i.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:h,isOptional:v}=d;if(h==="*"){let y=o[f]||"";a=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const m=o[f];return v&&!m?u[h]=void 0:u[h]=(m||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Ux(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Yd(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,o,l)=>(r.push({paramName:o,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Vx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Yd(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Si(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Fx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ir(e):e,s;return n?(n=zg(n),n.startsWith("/")?s=rp(n.substring(1),"/"):s=rp(n,t)):s=t,{pathname:s,search:Gx(r),hash:Hx(i)}}function rp(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ql(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xd(e,t){let n=Wx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Zd(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ir(e):(i=Ms({},e),je(!i.pathname||!i.pathname.includes("?"),Ql("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Ql("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Ql("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,o;if(a==null)o=n;else{let f=t.length-1;if(!r&&a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}o=f>=0?t[f]:"/"}let l=Fx(i,o),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const zg=e=>e.replace(/\/\/+/g,"/"),qn=e=>zg(e.join("/")),Bx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Gx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Hx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function zx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const $g=["post","put","patch","delete"];new Set($g);const $x=["get",...$g];new Set($x);/**
 * React Router v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Is(){return Is=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Is.apply(null,arguments)}const il=w.createContext(null),Jg=w.createContext(null),Cn=w.createContext(null),sl=w.createContext(null),Tn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),qg=w.createContext(null);function Jx(e,t){let{relative:n}=t===void 0?{}:t;Di()||je(!1);let{basename:r,navigator:i}=w.useContext(Cn),{hash:s,pathname:a,search:o}=al(e,{relative:n}),l=a;return r!=="/"&&(l=a==="/"?r:qn([r,a])),i.createHref({pathname:l,search:o,hash:s})}function Di(){return w.useContext(sl)!=null}function Pn(){return Di()||je(!1),w.useContext(sl).location}function Qg(e){w.useContext(Cn).static||w.useLayoutEffect(e)}function Ys(){let{isDataRoute:e}=w.useContext(Tn);return e?o3():qx()}function qx(){Di()||je(!1);let e=w.useContext(il),{basename:t,future:n,navigator:r}=w.useContext(Cn),{matches:i}=w.useContext(Tn),{pathname:s}=Pn(),a=JSON.stringify(Xd(i,n.v7_relativeSplatPath)),o=w.useRef(!1);return Qg(()=>{o.current=!0}),w.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){r.go(u);return}let f=Zd(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:qn([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,a,s,e])}function Qx(){let{matches:e}=w.useContext(Tn),t=e[e.length-1];return t?t.params:{}}function al(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(Cn),{matches:i}=w.useContext(Tn),{pathname:s}=Pn(),a=JSON.stringify(Xd(i,r.v7_relativeSplatPath));return w.useMemo(()=>Zd(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function Kx(e,t){return Yx(e,t)}function Yx(e,t,n,r){Di()||je(!1);let{navigator:i}=w.useContext(Cn),{matches:s}=w.useContext(Tn),a=s[s.length-1],o=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let u=Pn(),d;if(t){var f;let g=typeof t=="string"?Ir(t):t;l==="/"||(f=g.pathname)!=null&&f.startsWith(l)||je(!1),d=g}else d=u;let h=d.pathname||"/",v=h;if(l!=="/"){let g=l.replace(/^\//,"").split("/");v="/"+h.replace(/^\//,"").split("/").slice(g.length).join("/")}let m=Cx(e,{pathname:v}),y=n3(m&&m.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:qn([l,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?l:qn([l,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),s,n,r);return t&&y?w.createElement(sl.Provider,{value:{location:Is({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Vn.Pop}},y):y}function Xx(){let e=a3(),t=zx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:i},n):null,null)}const Zx=w.createElement(Xx,null);class e3 extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(Tn.Provider,{value:this.props.routeContext},w.createElement(qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function t3(e){let{routeContext:t,match:n,children:r}=e,i=w.useContext(il);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Tn.Provider,{value:t},r)}function n3(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=(i=n)==null?void 0:i.errors;if(o!=null){let d=a.findIndex(f=>f.route.id&&(o==null?void 0:o[f.route.id])!==void 0);d>=0||je(!1),a=a.slice(0,Math.min(a.length,d+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let f=a[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:h,errors:v}=n,m=f.route.loader&&h[f.route.id]===void 0&&(!v||v[f.route.id]===void 0);if(f.route.lazy||m){l=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,f,h)=>{let v,m=!1,y=null,g=null;n&&(v=o&&f.route.id?o[f.route.id]:void 0,y=f.route.errorElement||Zx,l&&(u<0&&h===0?(l3("route-fallback"),m=!0,g=null):u===h&&(m=!0,g=f.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,h+1)),b=()=>{let x;return v?x=y:m?x=g:f.route.Component?x=w.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=d,w.createElement(t3,{match:f,routeContext:{outlet:d,matches:p,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?w.createElement(e3,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:b(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):b()},null)}var Kg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Kg||{}),Yg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yg||{});function r3(e){let t=w.useContext(il);return t||je(!1),t}function i3(e){let t=w.useContext(Jg);return t||je(!1),t}function s3(e){let t=w.useContext(Tn);return t||je(!1),t}function Xg(e){let t=s3(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function a3(){var e;let t=w.useContext(qg),n=i3(),r=Xg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function o3(){let{router:e}=r3(Kg.UseNavigateStable),t=Xg(Yg.UseNavigateStable),n=w.useRef(!1);return Qg(()=>{n.current=!0}),w.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Is({fromRouteId:t},s)))},[e,t])}const ip={};function l3(e,t,n){ip[e]||(ip[e]=!0)}function c3(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function u3(e){let{to:t,replace:n,state:r,relative:i}=e;Di()||je(!1);let{future:s,static:a}=w.useContext(Cn),{matches:o}=w.useContext(Tn),{pathname:l}=Pn(),u=Ys(),d=Zd(t,Xd(o,s.v7_relativeSplatPath),l,i==="path"),f=JSON.stringify(d);return w.useEffect(()=>u(JSON.parse(f),{replace:n,state:r,relative:i}),[u,f,i,n,r]),null}function lt(e){je(!1)}function d3(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vn.Pop,navigator:s,static:a=!1,future:o}=e;Di()&&je(!1);let l=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:l,navigator:s,static:a,future:Is({v7_relativeSplatPath:!1},o)}),[l,o,s,a]);typeof r=="string"&&(r=Ir(r));let{pathname:d="/",search:f="",hash:h="",state:v=null,key:m="default"}=r,y=w.useMemo(()=>{let g=Si(d,l);return g==null?null:{location:{pathname:g,search:f,hash:h,state:v,key:m},navigationType:i}},[l,d,f,h,v,m,i]);return y==null?null:w.createElement(Cn.Provider,{value:u},w.createElement(sl.Provider,{children:n,value:y}))}function f3(e){let{children:t,location:n}=e;return Kx(bu(t),n)}new Promise(()=>{});function bu(e,t){t===void 0&&(t=[]);let n=[];return w.Children.forEach(e,(r,i)=>{if(!w.isValidElement(r))return;let s=[...t,i];if(r.type===w.Fragment){n.push.apply(n,bu(r.props.children,s));return}r.type!==lt&&je(!1),!r.props.index||!r.props.children||je(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=bu(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.6
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ko(){return ko=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ko.apply(null,arguments)}function Zg(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function h3(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function p3(e,t){return e.button===0&&(!t||t==="_self")&&!h3(e)}function xu(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function m3(e,t){let n=xu(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(s=>{n.append(i,s)})}),n}const g3=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],v3=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],y3="6";try{window.__reactRouterVersion=y3}catch{}const b3=w.createContext({isTransitioning:!1}),x3="startTransition",sp=db[x3];function j3(e){let{basename:t,children:n,future:r,window:i}=e,s=w.useRef();s.current==null&&(s.current=Sx({window:i,v5Compat:!0}));let a=s.current,[o,l]=w.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=w.useCallback(f=>{u&&sp?sp(()=>l(f)):l(f)},[l,u]);return w.useLayoutEffect(()=>a.listen(d),[a,d]),w.useEffect(()=>c3(r),[r]),w.createElement(d3,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:a,future:r})}const w3=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",S3=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Zt=w.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:o,target:l,to:u,preventScrollReset:d,viewTransition:f}=t,h=Zg(t,g3),{basename:v}=w.useContext(Cn),m,y=!1;if(typeof u=="string"&&S3.test(u)&&(m=u,w3))try{let x=new URL(window.location.href),j=u.startsWith("//")?new URL(x.protocol+u):new URL(u),S=Si(j.pathname,v);j.origin===x.origin&&S!=null?u=S+j.search+j.hash:y=!0}catch{}let g=Jx(u,{relative:i}),p=E3(u,{replace:a,state:o,target:l,preventScrollReset:d,relative:i,viewTransition:f});function b(x){r&&r(x),x.defaultPrevented||p(x)}return w.createElement("a",ko({},h,{href:m||g,onClick:y||s?r:b,ref:n,target:l}))}),Eo=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:a=!1,style:o,to:l,viewTransition:u,children:d}=t,f=Zg(t,v3),h=al(l,{relative:f.relative}),v=Pn(),m=w.useContext(Jg),{navigator:y,basename:g}=w.useContext(Cn),p=m!=null&&C3(h)&&u===!0,b=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,x=v.pathname,j=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(x=x.toLowerCase(),j=j?j.toLowerCase():null,b=b.toLowerCase()),j&&g&&(j=Si(j,g)||j);const S=b!=="/"&&b.endsWith("/")?b.length-1:b.length;let E=x===b||!a&&x.startsWith(b)&&x.charAt(S)==="/",C=j!=null&&(j===b||!a&&j.startsWith(b)&&j.charAt(b.length)==="/"),k={isActive:E,isPending:C,isTransitioning:p},T=E?r:void 0,P;typeof s=="function"?P=s(k):P=[s,E?"active":null,C?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let M=typeof o=="function"?o(k):o;return w.createElement(Zt,ko({},f,{"aria-current":T,className:P,ref:n,style:M,to:l,viewTransition:u}),typeof d=="function"?d(k):d)});var ju;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ju||(ju={}));var ap;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ap||(ap={}));function k3(e){let t=w.useContext(il);return t||je(!1),t}function E3(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:o}=t===void 0?{}:t,l=Ys(),u=Pn(),d=al(e,{relative:a});return w.useCallback(f=>{if(p3(f,n)){f.preventDefault();let h=r!==void 0?r:So(u)===So(d);l(e,{replace:h,state:i,preventScrollReset:s,relative:a,viewTransition:o})}},[u,l,d,r,i,n,e,s,a,o])}function ol(e){let t=w.useRef(xu(e)),n=w.useRef(!1),r=Pn(),i=w.useMemo(()=>m3(r.search,n.current?null:t.current),[r.search]),s=Ys(),a=w.useCallback((o,l)=>{const u=xu(typeof o=="function"?o(i):o);n.current=!0,s("?"+u,l)},[s,i]);return[i,a]}function C3(e,t){t===void 0&&(t={});let n=w.useContext(b3);n==null&&je(!1);let{basename:r}=k3(ju.useViewTransitionState),i=al(e,{relative:t.relative});if(!n.isTransitioning)return!1;let s=Si(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Si(n.nextLocation.pathname,r)||n.nextLocation.pathname;return yu(i.pathname,a)!=null||yu(i.pathname,s)!=null}const ef=w.createContext({});function tf(e){const t=w.useRef(null);return t.current===null&&(t.current=e()),t.current}const ll=w.createContext(null),nf=w.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});class T3 extends w.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function P3({children:e,isPresent:t}){const n=w.useId(),r=w.useRef(null),i=w.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=w.useContext(nf);return w.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:u}=i.current;if(t||!r.current||!a||!o)return;r.current.dataset.motionPopId=n;const d=document.createElement("style");return s&&(d.nonce=s),document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),c.jsx(T3,{isPresent:t,childRef:r,sizeRef:i,children:w.cloneElement(e,{ref:r})})}const A3=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:i,presenceAffectsLayout:s,mode:a})=>{const o=tf(N3),l=w.useId(),u=w.useCallback(f=>{o.set(f,!0);for(const h of o.values())if(!h)return;r&&r()},[o,r]),d=w.useMemo(()=>({id:l,initial:t,isPresent:n,custom:i,onExitComplete:u,register:f=>(o.set(f,!1),()=>o.delete(f))}),s?[Math.random(),u]:[n,u]);return w.useMemo(()=>{o.forEach((f,h)=>o.set(h,!1))},[n]),w.useEffect(()=>{!n&&!o.size&&r&&r()},[n]),a==="popLayout"&&(e=c.jsx(P3,{isPresent:n,children:e})),c.jsx(ll.Provider,{value:d,children:e})};function N3(){return new Map}function ev(e=!0){const t=w.useContext(ll);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=w.useId();w.useEffect(()=>{e&&i(s)},[e]);const a=w.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const ba=e=>e.key||"";function op(e){const t=[];return w.Children.forEach(e,n=>{w.isValidElement(n)&&t.push(n)}),t}const rf=typeof window<"u",tv=rf?w.useLayoutEffect:w.useEffect,Xn=({children:e,custom:t,initial:n=!0,onExitComplete:r,presenceAffectsLayout:i=!0,mode:s="sync",propagate:a=!1})=>{const[o,l]=ev(a),u=w.useMemo(()=>op(e),[e]),d=a&&!o?[]:u.map(ba),f=w.useRef(!0),h=w.useRef(u),v=tf(()=>new Map),[m,y]=w.useState(u),[g,p]=w.useState(u);tv(()=>{f.current=!1,h.current=u;for(let j=0;j<g.length;j++){const S=ba(g[j]);d.includes(S)?v.delete(S):v.get(S)!==!0&&v.set(S,!1)}},[g,d.length,d.join("-")]);const b=[];if(u!==m){let j=[...u];for(let S=0;S<g.length;S++){const E=g[S],C=ba(E);d.includes(C)||(j.splice(S,0,E),b.push(E))}s==="wait"&&b.length&&(j=b),p(op(j)),y(u);return}const{forceRender:x}=w.useContext(ef);return c.jsx(c.Fragment,{children:g.map(j=>{const S=ba(j),E=a&&!o?!1:u===g||d.includes(S),C=()=>{if(v.has(S))v.set(S,!0);else return;let k=!0;v.forEach(T=>{T||(k=!1)}),k&&(x==null||x(),p(h.current),a&&(l==null||l()),r&&r())};return c.jsx(A3,{isPresent:E,initial:!f.current||n?void 0:!1,custom:E?void 0:t,presenceAffectsLayout:i,mode:s,onExitComplete:E?void 0:C,children:j},S)})})},xt=e=>e;let nv=xt;function sf(e){let t;return()=>(t===void 0&&(t=e()),t)}const ki=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},mn=e=>e*1e3,gn=e=>e/1e3,R3={useManualTiming:!1};function L3(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function o(u){s.has(u)&&(l.schedule(u),e()),u(a)}const l={schedule:(u,d=!1,f=!1)=>{const v=f&&r?t:n;return d&&s.add(u),v.has(u)||v.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0,[t,n]=[n,t],t.forEach(o),t.clear(),r=!1,i&&(i=!1,l.process(u))}};return l}const xa=["read","resolveKeyframes","update","preRender","render","postRender"],D3=40;function rv(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=xa.reduce((p,b)=>(p[b]=L3(s),p),{}),{read:o,resolveKeyframes:l,update:u,preRender:d,render:f,postRender:h}=a,v=()=>{const p=performance.now();n=!1,i.delta=r?1e3/60:Math.max(Math.min(p-i.timestamp,D3),1),i.timestamp=p,i.isProcessing=!0,o.process(i),l.process(i),u.process(i),d.process(i),f.process(i),h.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},m=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:xa.reduce((p,b)=>{const x=a[b];return p[b]=(j,S=!1,E=!1)=>(n||m(),x.schedule(j,S,E)),p},{}),cancel:p=>{for(let b=0;b<xa.length;b++)a[xa[b]].cancel(p)},state:i,steps:a}}const{schedule:me,cancel:Zn,state:Be,steps:Kl}=rv(typeof requestAnimationFrame<"u"?requestAnimationFrame:xt,!0),iv=w.createContext({strict:!1}),lp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Ei={};for(const e in lp)Ei[e]={isEnabled:t=>lp[e].some(n=>!!t[n])};function M3(e){for(const t in e)Ei[t]={...Ei[t],...e[t]}}const I3=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Co(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||I3.has(e)}let sv=e=>!Co(e);function _3(e){e&&(sv=t=>t.startsWith("on")?!Co(t):e(t))}try{_3(require("@emotion/is-prop-valid").default)}catch{}function O3(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||(sv(i)||n===!0&&Co(i)||!t&&!Co(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}function U3(e){if(typeof Proxy>"u")return e;const t=new Map,n=(...r)=>e(...r);return new Proxy(n,{get:(r,i)=>i==="create"?e:(t.has(i)||t.set(i,e(i)),t.get(i))})}const cl=w.createContext({});function _s(e){return typeof e=="string"||Array.isArray(e)}function ul(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const af=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],of=["initial",...af];function dl(e){return ul(e.animate)||of.some(t=>_s(e[t]))}function av(e){return!!(dl(e)||e.variants)}function V3(e,t){if(dl(e)){const{initial:n,animate:r}=e;return{initial:n===!1||_s(n)?n:void 0,animate:_s(r)?r:void 0}}return e.inherit!==!1?t:{}}function F3(e){const{initial:t,animate:n}=V3(e,w.useContext(cl));return w.useMemo(()=>({initial:t,animate:n}),[cp(t),cp(n)])}function cp(e){return Array.isArray(e)?e.join(" "):e}const W3=Symbol.for("motionComponentSymbol");function ni(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function B3(e,t,n){return w.useCallback(r=>{r&&e.onMount&&e.onMount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ni(n)&&(n.current=r))},[t])}const lf=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),G3="framerAppearId",ov="data-"+lf(G3),{schedule:cf}=rv(queueMicrotask,!1),lv=w.createContext({});function H3(e,t,n,r,i){var s,a;const{visualElement:o}=w.useContext(cl),l=w.useContext(iv),u=w.useContext(ll),d=w.useContext(nf).reducedMotion,f=w.useRef(null);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:o,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:d}));const h=f.current,v=w.useContext(lv);h&&!h.projection&&i&&(h.type==="html"||h.type==="svg")&&z3(f.current,n,i,v);const m=w.useRef(!1);w.useInsertionEffect(()=>{h&&m.current&&h.update(n,u)});const y=n[ov],g=w.useRef(!!y&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,y))&&((a=window.MotionHasOptimisedAnimation)===null||a===void 0?void 0:a.call(window,y)));return tv(()=>{h&&(m.current=!0,window.MotionIsMounted=!0,h.updateFeatures(),cf.render(h.render),g.current&&h.animationState&&h.animationState.animateChanges())}),w.useEffect(()=>{h&&(!g.current&&h.animationState&&h.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var p;(p=window.MotionHandoffMarkAsComplete)===null||p===void 0||p.call(window,y)}),g.current=!1))}),h}function z3(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:o,layoutScroll:l,layoutRoot:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:cv(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||o&&ni(o),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,layoutScroll:l,layoutRoot:u})}function cv(e){if(e)return e.options.allowProjection!==!1?e.projection:cv(e.parent)}function $3({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:r,Component:i}){var s,a;e&&M3(e);function o(u,d){let f;const h={...w.useContext(nf),...u,layoutId:J3(u)},{isStatic:v}=h,m=F3(u),y=r(u,v);if(!v&&rf){q3();const g=Q3(h);f=g.MeasureLayout,m.visualElement=H3(i,y,h,t,g.ProjectionNode)}return c.jsxs(cl.Provider,{value:m,children:[f&&m.visualElement?c.jsx(f,{visualElement:m.visualElement,...h}):null,n(i,u,B3(y,m.visualElement,d),y,v,m.visualElement)]})}o.displayName=`motion.${typeof i=="string"?i:`create(${(a=(s=i.displayName)!==null&&s!==void 0?s:i.name)!==null&&a!==void 0?a:""})`}`;const l=w.forwardRef(o);return l[W3]=i,l}function J3({layoutId:e}){const t=w.useContext(ef).id;return t&&e!==void 0?t+"-"+e:e}function q3(e,t){w.useContext(iv).strict}function Q3(e){const{drag:t,layout:n}=Ei;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t!=null&&t.isEnabled(e)||n!=null&&n.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const K3=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function uf(e){return typeof e!="string"||e.includes("-")?!1:!!(K3.indexOf(e)>-1||/[A-Z]/u.test(e))}function up(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function df(e,t,n,r){if(typeof t=="function"){const[i,s]=up(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=up(r);t=t(n!==void 0?n:e.custom,i,s)}return t}const wu=e=>Array.isArray(e),Y3=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),X3=e=>wu(e)?e[e.length-1]||0:e,Xe=e=>!!(e&&e.getVelocity);function $a(e){const t=Xe(e)?e.get():e;return Y3(t)?t.toValue():t}function Z3({scrapeMotionValuesFromProps:e,createRenderState:t,onUpdate:n},r,i,s){const a={latestValues:e6(r,i,s,e),renderState:t()};return n&&(a.onMount=o=>n({props:r,current:o,...a}),a.onUpdate=o=>n(o)),a}const uv=e=>(t,n)=>{const r=w.useContext(cl),i=w.useContext(ll),s=()=>Z3(e,t,r,i);return n?s():tf(s)};function e6(e,t,n,r){const i={},s=r(e,{});for(const h in s)i[h]=$a(s[h]);let{initial:a,animate:o}=e;const l=dl(e),u=av(e);t&&u&&!l&&e.inherit!==!1&&(a===void 0&&(a=t.initial),o===void 0&&(o=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const f=d?o:a;if(f&&typeof f!="boolean"&&!ul(f)){const h=Array.isArray(f)?f:[f];for(let v=0;v<h.length;v++){const m=df(e,h[v]);if(m){const{transitionEnd:y,transition:g,...p}=m;for(const b in p){let x=p[b];if(Array.isArray(x)){const j=d?x.length-1:0;x=x[j]}x!==null&&(i[b]=x)}for(const b in y)i[b]=y[b]}}}return i}const Mi=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],_r=new Set(Mi),dv=e=>t=>typeof t=="string"&&t.startsWith(e),fv=dv("--"),t6=dv("var(--"),ff=e=>t6(e)?n6.test(e.split("/*")[0].trim()):!1,n6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,hv=(e,t)=>t&&typeof e=="number"?t.transform(e):e,Sn=(e,t,n)=>n>t?t:n<e?e:n,Ii={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Os={...Ii,transform:e=>Sn(0,1,e)},ja={...Ii,default:1},Xs=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),Ln=Xs("deg"),rn=Xs("%"),K=Xs("px"),r6=Xs("vh"),i6=Xs("vw"),dp={...rn,parse:e=>rn.parse(e)/100,transform:e=>rn.transform(e*100)},s6={borderWidth:K,borderTopWidth:K,borderRightWidth:K,borderBottomWidth:K,borderLeftWidth:K,borderRadius:K,radius:K,borderTopLeftRadius:K,borderTopRightRadius:K,borderBottomRightRadius:K,borderBottomLeftRadius:K,width:K,maxWidth:K,height:K,maxHeight:K,top:K,right:K,bottom:K,left:K,padding:K,paddingTop:K,paddingRight:K,paddingBottom:K,paddingLeft:K,margin:K,marginTop:K,marginRight:K,marginBottom:K,marginLeft:K,backgroundPositionX:K,backgroundPositionY:K},a6={rotate:Ln,rotateX:Ln,rotateY:Ln,rotateZ:Ln,scale:ja,scaleX:ja,scaleY:ja,scaleZ:ja,skew:Ln,skewX:Ln,skewY:Ln,distance:K,translateX:K,translateY:K,translateZ:K,x:K,y:K,z:K,perspective:K,transformPerspective:K,opacity:Os,originX:dp,originY:dp,originZ:K},fp={...Ii,transform:Math.round},hf={...s6,...a6,zIndex:fp,size:K,fillOpacity:Os,strokeOpacity:Os,numOctaves:fp},o6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},l6=Mi.length;function c6(e,t,n){let r="",i=!0;for(let s=0;s<l6;s++){const a=Mi[s],o=e[a];if(o===void 0)continue;let l=!0;if(typeof o=="number"?l=o===(a.startsWith("scale")?1:0):l=parseFloat(o)===0,!l||n){const u=hv(o,hf[a]);if(!l){i=!1;const d=o6[a]||a;r+=`${d}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function pf(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,o=!1;for(const l in t){const u=t[l];if(_r.has(l)){a=!0;continue}else if(fv(l)){i[l]=u;continue}else{const d=hv(u,hf[l]);l.startsWith("origin")?(o=!0,s[l]=d):r[l]=d}}if(t.transform||(a||n?r.transform=c6(t,e.transform,n):r.transform&&(r.transform="none")),o){const{originX:l="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${l} ${u} ${d}`}}const u6={offset:"stroke-dashoffset",array:"stroke-dasharray"},d6={offset:"strokeDashoffset",array:"strokeDasharray"};function f6(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?u6:d6;e[s.offset]=K.transform(-r);const a=K.transform(t),o=K.transform(n);e[s.array]=`${a} ${o}`}function hp(e,t,n){return typeof e=="string"?e:K.transform(t+n*e)}function h6(e,t,n){const r=hp(t,e.x,e.width),i=hp(n,e.y,e.height);return`${r} ${i}`}function mf(e,{attrX:t,attrY:n,attrScale:r,originX:i,originY:s,pathLength:a,pathSpacing:o=1,pathOffset:l=0,...u},d,f){if(pf(e,u,f),d){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:v,dimensions:m}=e;h.transform&&(m&&(v.transform=h.transform),delete h.transform),m&&(i!==void 0||s!==void 0||v.transform)&&(v.transformOrigin=h6(m,i!==void 0?i:.5,s!==void 0?s:.5)),t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),a!==void 0&&f6(h,a,o,l,!1)}const gf=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),pv=()=>({...gf(),attrs:{}}),vf=e=>typeof e=="string"&&e.toLowerCase()==="svg";function mv(e,{style:t,vars:n},r,i){Object.assign(e.style,t,i&&i.getProjectionStyles(r));for(const s in n)e.style.setProperty(s,n[s])}const gv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function vv(e,t,n,r){mv(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(gv.has(i)?i:lf(i),t.attrs[i])}const To={};function p6(e){Object.assign(To,e)}function yv(e,{layout:t,layoutId:n}){return _r.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!To[e]||e==="opacity")}function yf(e,t,n){var r;const{style:i}=e,s={};for(const a in i)(Xe(i[a])||t.style&&Xe(t.style[a])||yv(a,e)||((r=n==null?void 0:n.getValue(a))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function bv(e,t,n){const r=yf(e,t,n);for(const i in e)if(Xe(e[i])||Xe(t[i])){const s=Mi.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}function m6(e,t){try{t.dimensions=typeof e.getBBox=="function"?e.getBBox():e.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const pp=["x","y","width","height","cx","cy","r"],g6={useVisualState:uv({scrapeMotionValuesFromProps:bv,createRenderState:pv,onUpdate:({props:e,prevProps:t,current:n,renderState:r,latestValues:i})=>{if(!n)return;let s=!!e.drag;if(!s){for(const o in i)if(_r.has(o)){s=!0;break}}if(!s)return;let a=!t;if(t)for(let o=0;o<pp.length;o++){const l=pp[o];e[l]!==t[l]&&(a=!0)}a&&me.read(()=>{m6(n,r),me.render(()=>{mf(r,i,vf(n.tagName),e.transformTemplate),vv(n,r)})})}})},v6={useVisualState:uv({scrapeMotionValuesFromProps:yf,createRenderState:gf})};function xv(e,t,n){for(const r in t)!Xe(t[r])&&!yv(r,n)&&(e[r]=t[r])}function y6({transformTemplate:e},t){return w.useMemo(()=>{const n=gf();return pf(n,t,e),Object.assign({},n.vars,n.style)},[t])}function b6(e,t){const n=e.style||{},r={};return xv(r,n,e),Object.assign(r,y6(e,t)),r}function x6(e,t){const n={},r=b6(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}function j6(e,t,n,r){const i=w.useMemo(()=>{const s=pv();return mf(s,t,vf(r),e.transformTemplate),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};xv(s,e.style,e),i.style={...s,...i.style}}return i}function w6(e=!1){return(n,r,i,{latestValues:s},a)=>{const l=(uf(n)?j6:x6)(r,s,a,n),u=O3(r,typeof n=="string",e),d=n!==w.Fragment?{...u,...l,ref:i}:{},{children:f}=r,h=w.useMemo(()=>Xe(f)?f.get():f,[f]);return w.createElement(n,{...d,children:h})}}function S6(e,t){return function(r,{forwardMotionProps:i}={forwardMotionProps:!1}){const a={...uf(r)?g6:v6,preloadedFeatures:e,useRender:w6(i),createVisualElement:t,Component:r};return $3(a)}}function jv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function fl(e,t,n){const r=e.getProps();return df(r,t,n!==void 0?n:r.custom,e)}const k6=sf(()=>window.ScrollTimeline!==void 0);class E6{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,n){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=n}attachTimeline(t,n){const r=this.animations.map(i=>{if(k6()&&i.attachTimeline)return i.attachTimeline(t);if(typeof n=="function")return n(i)});return()=>{r.forEach((i,s)=>{i&&i(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let n=0;n<this.animations.length;n++)t=Math.max(t,this.animations[n].duration);return t}runAll(t){this.animations.forEach(n=>n[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class C6 extends E6{then(t,n){return Promise.all(this.animations).then(t).catch(n)}}function bf(e,t){return e?e[t]||e.default||e:void 0}const Su=2e4;function wv(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<Su;)t+=n,r=e.next(t);return t>=Su?1/0:t}function xf(e){return typeof e=="function"}function mp(e,t){e.timeline=t,e.onfinish=null}const jf=e=>Array.isArray(e)&&typeof e[0]=="number",T6={linearEasing:void 0};function P6(e,t){const n=sf(e);return()=>{var r;return(r=T6[t])!==null&&r!==void 0?r:n()}}const Po=P6(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Sv=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=e(ki(0,i-1,s))+", ";return`linear(${r.substring(0,r.length-2)})`};function kv(e){return!!(typeof e=="function"&&Po()||!e||typeof e=="string"&&(e in ku||Po())||jf(e)||Array.isArray(e)&&e.every(kv))}const Yi=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,ku={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Yi([0,.65,.55,1]),circOut:Yi([.55,0,1,.45]),backIn:Yi([.31,.01,.66,-.59]),backOut:Yi([.33,1.53,.69,.99])};function Ev(e,t){if(e)return typeof e=="function"&&Po()?Sv(e,t):jf(e)?Yi(e):Array.isArray(e)?e.map(n=>Ev(n,t)||ku.easeOut):ku[e]}const Ot={x:!1,y:!1};function Cv(){return Ot.x||Ot.y}function A6(e,t,n){var r;if(e instanceof Element)return[e];if(typeof e=="string"){let i=document;const s=(r=void 0)!==null&&r!==void 0?r:i.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e)}function Tv(e,t){const n=A6(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function gp(e){return t=>{t.pointerType==="touch"||Cv()||e(t)}}function N6(e,t,n={}){const[r,i,s]=Tv(e,n),a=gp(o=>{const{target:l}=o,u=t(o);if(typeof u!="function"||!l)return;const d=gp(f=>{u(f),l.removeEventListener("pointerleave",d)});l.addEventListener("pointerleave",d,i)});return r.forEach(o=>{o.addEventListener("pointerenter",a,i)}),s}const Pv=(e,t)=>t?e===t?!0:Pv(e,t.parentElement):!1,wf=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,R6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function L6(e){return R6.has(e.tagName)||e.tabIndex!==-1}const Xi=new WeakSet;function vp(e){return t=>{t.key==="Enter"&&e(t)}}function Yl(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const D6=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=vp(()=>{if(Xi.has(n))return;Yl(n,"down");const i=vp(()=>{Yl(n,"up")}),s=()=>Yl(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function yp(e){return wf(e)&&!Cv()}function M6(e,t,n={}){const[r,i,s]=Tv(e,n),a=o=>{const l=o.currentTarget;if(!yp(o)||Xi.has(l))return;Xi.add(l);const u=t(o),d=(v,m)=>{window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",h),!(!yp(v)||!Xi.has(l))&&(Xi.delete(l),typeof u=="function"&&u(v,{success:m}))},f=v=>{d(v,n.useGlobalTarget||Pv(l,v.target))},h=v=>{d(v,!1)};window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",h,i)};return r.forEach(o=>{!L6(o)&&o.getAttribute("tabindex")===null&&(o.tabIndex=0),(n.useGlobalTarget?window:o).addEventListener("pointerdown",a,i),o.addEventListener("focus",u=>D6(u,i),i)}),s}function I6(e){return e==="x"||e==="y"?Ot[e]?null:(Ot[e]=!0,()=>{Ot[e]=!1}):Ot.x||Ot.y?null:(Ot.x=Ot.y=!0,()=>{Ot.x=Ot.y=!1})}const Av=new Set(["width","height","top","left","right","bottom",...Mi]);let Ja;function _6(){Ja=void 0}const sn={now:()=>(Ja===void 0&&sn.set(Be.isProcessing||R3.useManualTiming?Be.timestamp:performance.now()),Ja),set:e=>{Ja=e,queueMicrotask(_6)}};function Sf(e,t){e.indexOf(t)===-1&&e.push(t)}function kf(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ef{constructor(){this.subscriptions=[]}add(t){return Sf(this.subscriptions,t),()=>kf(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function Nv(e,t){return t?e*(1e3/t):0}const bp=30,O6=e=>!isNaN(parseFloat(e));class U6{constructor(t,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,i=!0)=>{const s=sn.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),i&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=sn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=O6(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ef);const r=this.events[t].add(n);return t==="change"?()=>{r(),me.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=sn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>bp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,bp);return Nv(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Us(e,t){return new U6(e,t)}function V6(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Us(n))}function F6(e,t){const n=fl(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const o=X3(s[a]);V6(e,a,o)}}function W6(e){return!!(Xe(e)&&e.add)}function Eu(e,t){const n=e.getValue("willChange");if(W6(n))return n.add(t)}function Rv(e){return e.props[ov]}const Lv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,B6=1e-7,G6=12;function H6(e,t,n,r,i){let s,a,o=0;do a=t+(n-t)/2,s=Lv(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>B6&&++o<G6);return a}function Zs(e,t,n,r){if(e===t&&n===r)return xt;const i=s=>H6(s,0,1,e,n);return s=>s===0||s===1?s:Lv(i(s),t,r)}const Dv=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Mv=e=>t=>1-e(1-t),Iv=Zs(.33,1.53,.69,.99),Cf=Mv(Iv),_v=Dv(Cf),Ov=e=>(e*=2)<1?.5*Cf(e):.5*(2-Math.pow(2,-10*(e-1))),Tf=e=>1-Math.sin(Math.acos(e)),Uv=Mv(Tf),Vv=Dv(Tf),Fv=e=>/^0[^.\s]+$/u.test(e);function z6(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Fv(e):!0}const fs=e=>Math.round(e*1e5)/1e5,Pf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function $6(e){return e==null}const J6=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Af=(e,t)=>n=>!!(typeof n=="string"&&J6.test(n)&&n.startsWith(e)||t&&!$6(n)&&Object.prototype.hasOwnProperty.call(n,t)),Wv=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,o]=r.match(Pf);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:o!==void 0?parseFloat(o):1}},q6=e=>Sn(0,255,e),Xl={...Ii,transform:e=>Math.round(q6(e))},vr={test:Af("rgb","red"),parse:Wv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Xl.transform(e)+", "+Xl.transform(t)+", "+Xl.transform(n)+", "+fs(Os.transform(r))+")"};function Q6(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const Cu={test:Af("#"),parse:Q6,transform:vr.transform},ri={test:Af("hsl","hue"),parse:Wv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+rn.transform(fs(t))+", "+rn.transform(fs(n))+", "+fs(Os.transform(r))+")"},Qe={test:e=>vr.test(e)||Cu.test(e)||ri.test(e),parse:e=>vr.test(e)?vr.parse(e):ri.test(e)?ri.parse(e):Cu.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?vr.transform(e):ri.transform(e)},K6=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function Y6(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Pf))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(K6))===null||n===void 0?void 0:n.length)||0)>0}const Bv="number",Gv="color",X6="var",Z6="var(",xp="${}",e9=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Vs(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const o=t.replace(e9,l=>(Qe.test(l)?(r.color.push(s),i.push(Gv),n.push(Qe.parse(l))):l.startsWith(Z6)?(r.var.push(s),i.push(X6),n.push(l)):(r.number.push(s),i.push(Bv),n.push(parseFloat(l))),++s,xp)).split(xp);return{values:n,split:o,indexes:r,types:i}}function Hv(e){return Vs(e).values}function zv(e){const{split:t,types:n}=Vs(e),r=t.length;return i=>{let s="";for(let a=0;a<r;a++)if(s+=t[a],i[a]!==void 0){const o=n[a];o===Bv?s+=fs(i[a]):o===Gv?s+=Qe.transform(i[a]):s+=i[a]}return s}}const t9=e=>typeof e=="number"?0:e;function n9(e){const t=Hv(e);return zv(e)(t.map(t9))}const er={test:Y6,parse:Hv,createTransformer:zv,getAnimatableNone:n9},r9=new Set(["brightness","contrast","saturate","opacity"]);function i9(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Pf)||[];if(!r)return e;const i=n.replace(r,"");let s=r9.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const s9=/\b([a-z-]*)\(.*?\)/gu,Tu={...er,getAnimatableNone:e=>{const t=e.match(s9);return t?t.map(i9).join(" "):e}},a9={...hf,color:Qe,backgroundColor:Qe,outlineColor:Qe,fill:Qe,stroke:Qe,borderColor:Qe,borderTopColor:Qe,borderRightColor:Qe,borderBottomColor:Qe,borderLeftColor:Qe,filter:Tu,WebkitFilter:Tu},Nf=e=>a9[e];function $v(e,t){let n=Nf(e);return n!==Tu&&(n=er),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const o9=new Set(["auto","none","0"]);function l9(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!o9.has(s)&&Vs(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=$v(n,i)}const jp=e=>e===Ii||e===K,wp=(e,t)=>parseFloat(e.split(", ")[t]),Sp=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const i=r.match(/^matrix3d\((.+)\)$/u);if(i)return wp(i[1],t);{const s=r.match(/^matrix\((.+)\)$/u);return s?wp(s[1],e):0}},c9=new Set(["x","y","z"]),u9=Mi.filter(e=>!c9.has(e));function d9(e){const t=[];return u9.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ci={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Sp(4,13),y:Sp(5,14)};Ci.translateX=Ci.x;Ci.translateY=Ci.y;const jr=new Set;let Pu=!1,Au=!1;function Jv(){if(Au){const e=Array.from(jr).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=d9(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var o;(o=r.getValue(s))===null||o===void 0||o.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Au=!1,Pu=!1,jr.forEach(e=>e.complete()),jr.clear()}function qv(){jr.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Au=!0)})}function f9(){qv(),Jv()}class Rf{constructor(t,n,r,i,s,a=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(jr.add(this),Pu||(Pu=!0,me.read(qv),me.resolveKeyframes(Jv))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;for(let s=0;s<t.length;s++)if(t[s]===null)if(s===0){const a=i==null?void 0:i.get(),o=t[t.length-1];if(a!==void 0)t[0]=a;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),i&&a===void 0&&i.set(t[0])}else t[s]=t[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),jr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,jr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Qv=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),h9=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function p9(e){const t=h9.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Kv(e,t,n=1){const[r,i]=p9(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return Qv(a)?parseFloat(a):a}return ff(i)?Kv(i,t,n+1):i}const Yv=e=>t=>t.test(e),m9={test:e=>e==="auto",parse:e=>e},Xv=[Ii,K,rn,Ln,i6,r6,m9],kp=e=>Xv.find(Yv(e));class Zv extends Rf{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<t.length;l++){let u=t[l];if(typeof u=="string"&&(u=u.trim(),ff(u))){const d=Kv(u,n.current);d!==void 0&&(t[l]=d),l===t.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!Av.has(r)||t.length!==2)return;const[i,s]=t,a=kp(i),o=kp(s);if(a!==o)if(jp(a)&&jp(o))for(let l=0;l<t.length;l++){const u=t[l];typeof u=="string"&&(t[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)z6(t[i])&&r.push(i);r.length&&l9(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ci[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;const{element:n,name:r,unresolvedKeyframes:i}=this;if(!n||!n.current)return;const s=n.getValue(r);s&&s.jump(this.measuredOrigin,!1);const a=i.length-1,o=i[a];i[a]=Ci[r](n.measureViewportBox(),window.getComputedStyle(n.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const Ep=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(er.test(e)||e==="0")&&!e.startsWith("url("));function g9(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function v9(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=Ep(i,t),o=Ep(s,t);return!a||!o?!1:g9(e)||(n==="spring"||xf(n))&&r}const y9=e=>e!==null;function hl(e,{repeat:t,repeatType:n="loop"},r){const i=e.filter(y9),s=t&&n!=="loop"&&t%2===1?0:i.length-1;return!s||r===void 0?i[s]:r}const b9=40;class ey{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=sn.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,...o},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>b9?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&f9(),this._resolved}onKeyframesResolved(t,n){this.resolvedAt=sn.now(),this.hasAttemptedResolve=!0;const{name:r,type:i,velocity:s,delay:a,onComplete:o,onUpdate:l,isGenerator:u}=this.options;if(!u&&!v9(t,r,i,s))if(a)this.options.duration=0;else{l&&l(hl(t,this.options,n)),o&&o(),this.resolveFinishedPromise();return}const d=this.initPlayback(t,n);d!==!1&&(this._resolved={keyframes:t,finalKeyframe:n,...d},this.onPostResolved())}onPostResolved(){}then(t,n){return this.currentFinishedPromise.then(t,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const be=(e,t,n)=>e+(t-e)*n;function Zl(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function x9({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const o=n<.5?n*(1+t):n+t-n*t,l=2*n-o;i=Zl(l,o,e+1/3),s=Zl(l,o,e),a=Zl(l,o,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function Ao(e,t){return n=>n>0?t:e}const ec=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},j9=[Cu,vr,ri],w9=e=>j9.find(t=>t.test(e));function Cp(e){const t=w9(e);if(!t)return!1;let n=t.parse(e);return t===ri&&(n=x9(n)),n}const Tp=(e,t)=>{const n=Cp(e),r=Cp(t);if(!n||!r)return Ao(e,t);const i={...n};return s=>(i.red=ec(n.red,r.red,s),i.green=ec(n.green,r.green,s),i.blue=ec(n.blue,r.blue,s),i.alpha=be(n.alpha,r.alpha,s),vr.transform(i))},S9=(e,t)=>n=>t(e(n)),ea=(...e)=>e.reduce(S9),Nu=new Set(["none","hidden"]);function k9(e,t){return Nu.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function E9(e,t){return n=>be(e,t,n)}function Lf(e){return typeof e=="number"?E9:typeof e=="string"?ff(e)?Ao:Qe.test(e)?Tp:P9:Array.isArray(e)?ty:typeof e=="object"?Qe.test(e)?Tp:C9:Ao}function ty(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>Lf(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function C9(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=Lf(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function T9(e,t){var n;const r=[],i={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const a=t.types[s],o=e.indexes[a][i[a]],l=(n=e.values[o])!==null&&n!==void 0?n:0;r[s]=l,i[a]++}return r}const P9=(e,t)=>{const n=er.createTransformer(t),r=Vs(e),i=Vs(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Nu.has(e)&&!i.values.length||Nu.has(t)&&!r.values.length?k9(e,t):ea(ty(T9(r,i),i.values),n):Ao(e,t)};function ny(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?be(e,t,n):Lf(e)(e,t)}const A9=5;function ry(e,t,n){const r=Math.max(t-A9,0);return Nv(n-e(r),t-r)}const ke={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},tc=.001;function N9({duration:e=ke.duration,bounce:t=ke.bounce,velocity:n=ke.velocity,mass:r=ke.mass}){let i,s,a=1-t;a=Sn(ke.minDamping,ke.maxDamping,a),e=Sn(ke.minDuration,ke.maxDuration,gn(e)),a<1?(i=u=>{const d=u*a,f=d*e,h=d-n,v=Ru(u,a),m=Math.exp(-f);return tc-h/v*m},s=u=>{const f=u*a*e,h=f*n+n,v=Math.pow(a,2)*Math.pow(u,2)*e,m=Math.exp(-f),y=Ru(Math.pow(u,2),a);return(-i(u)+tc>0?-1:1)*((h-v)*m)/y}):(i=u=>{const d=Math.exp(-u*e),f=(u-n)*e+1;return-tc+d*f},s=u=>{const d=Math.exp(-u*e),f=(n-u)*(e*e);return d*f});const o=5/e,l=L9(i,s,o);if(e=mn(e),isNaN(l))return{stiffness:ke.stiffness,damping:ke.damping,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const R9=12;function L9(e,t,n){let r=n;for(let i=1;i<R9;i++)r=r-e(r)/t(r);return r}function Ru(e,t){return e*Math.sqrt(1-t*t)}const D9=["duration","bounce"],M9=["stiffness","damping","mass"];function Pp(e,t){return t.some(n=>e[n]!==void 0)}function I9(e){let t={velocity:ke.velocity,stiffness:ke.stiffness,damping:ke.damping,mass:ke.mass,isResolvedFromDuration:!1,...e};if(!Pp(e,M9)&&Pp(e,D9))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*Sn(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ke.mass,stiffness:i,damping:s}}else{const n=N9(e);t={...t,...n,mass:ke.mass},t.isResolvedFromDuration=!0}return t}function iy(e=ke.visualDuration,t=ke.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],o={done:!1,value:s},{stiffness:l,damping:u,mass:d,duration:f,velocity:h,isResolvedFromDuration:v}=I9({...n,velocity:-gn(n.velocity||0)}),m=h||0,y=u/(2*Math.sqrt(l*d)),g=a-s,p=gn(Math.sqrt(l/d)),b=Math.abs(g)<5;r||(r=b?ke.restSpeed.granular:ke.restSpeed.default),i||(i=b?ke.restDelta.granular:ke.restDelta.default);let x;if(y<1){const S=Ru(p,y);x=E=>{const C=Math.exp(-y*p*E);return a-C*((m+y*p*g)/S*Math.sin(S*E)+g*Math.cos(S*E))}}else if(y===1)x=S=>a-Math.exp(-p*S)*(g+(m+p*g)*S);else{const S=p*Math.sqrt(y*y-1);x=E=>{const C=Math.exp(-y*p*E),k=Math.min(S*E,300);return a-C*((m+y*p*g)*Math.sinh(k)+S*g*Math.cosh(k))/S}}const j={calculatedDuration:v&&f||null,next:S=>{const E=x(S);if(v)o.done=S>=f;else{let C=0;y<1&&(C=S===0?mn(m):ry(x,S,E));const k=Math.abs(C)<=r,T=Math.abs(a-E)<=i;o.done=k&&T}return o.value=o.done?a:E,o},toString:()=>{const S=Math.min(wv(j),Su),E=Sv(C=>j.next(S*C).value,S,30);return S+"ms "+E}};return j}function Ap({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:o,max:l,restDelta:u=.5,restSpeed:d}){const f=e[0],h={done:!1,value:f},v=k=>o!==void 0&&k<o||l!==void 0&&k>l,m=k=>o===void 0?l:l===void 0||Math.abs(o-k)<Math.abs(l-k)?o:l;let y=n*t;const g=f+y,p=a===void 0?g:a(g);p!==g&&(y=p-f);const b=k=>-y*Math.exp(-k/r),x=k=>p+b(k),j=k=>{const T=b(k),P=x(k);h.done=Math.abs(T)<=u,h.value=h.done?p:P};let S,E;const C=k=>{v(h.value)&&(S=k,E=iy({keyframes:[h.value,m(h.value)],velocity:ry(x,k,h.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:k=>{let T=!1;return!E&&S===void 0&&(T=!0,j(k),C(k)),S!==void 0&&k>=S?E.next(k-S):(!T&&j(k),h)}}}const _9=Zs(.42,0,1,1),O9=Zs(0,0,.58,1),sy=Zs(.42,0,.58,1),U9=e=>Array.isArray(e)&&typeof e[0]!="number",V9={linear:xt,easeIn:_9,easeInOut:sy,easeOut:O9,circIn:Tf,circInOut:Vv,circOut:Uv,backIn:Cf,backInOut:_v,backOut:Iv,anticipate:Ov},Np=e=>{if(jf(e)){nv(e.length===4);const[t,n,r,i]=e;return Zs(t,n,r,i)}else if(typeof e=="string")return V9[e];return e};function F9(e,t,n){const r=[],i=n||ny,s=e.length-1;for(let a=0;a<s;a++){let o=i(e[a],e[a+1]);if(t){const l=Array.isArray(t)?t[a]||xt:t;o=ea(l,o)}r.push(o)}return r}function W9(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(nv(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=F9(t,r,i),l=o.length,u=d=>{if(a&&d<e[0])return t[0];let f=0;if(l>1)for(;f<e.length-2&&!(d<e[f+1]);f++);const h=ki(e[f],e[f+1],d);return o[f](h)};return n?d=>u(Sn(e[0],e[s-1],d)):u}function B9(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ki(0,t,r);e.push(be(n,1,i))}}function G9(e){const t=[0];return B9(t,e.length-1),t}function H9(e,t){return e.map(n=>n*t)}function z9(e,t){return e.map(()=>t||sy).splice(0,e.length-1)}function No({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=U9(r)?r.map(Np):Np(r),s={done:!1,value:t[0]},a=H9(n&&n.length===t.length?n:G9(t),e),o=W9(a,t,{ease:Array.isArray(i)?i:z9(t,i)});return{calculatedDuration:e,next:l=>(s.value=o(l),s.done=l>=e,s)}}const $9=e=>{const t=({timestamp:n})=>e(n);return{start:()=>me.update(t,!0),stop:()=>Zn(t),now:()=>Be.isProcessing?Be.timestamp:sn.now()}},J9={decay:Ap,inertia:Ap,tween:No,keyframes:No,spring:iy},q9=e=>e/100;class Df extends ey{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:r,element:i,keyframes:s}=this.options,a=(i==null?void 0:i.KeyframeResolver)||Rf,o=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new a(s,o,n,r,i),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:n="keyframes",repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=this.options,o=xf(n)?n:J9[n]||No;let l,u;o!==No&&typeof t[0]!="number"&&(l=ea(q9,ny(t[0],t[1])),t=[0,100]);const d=o({...this.options,keyframes:t});s==="mirror"&&(u=o({...this.options,keyframes:[...t].reverse(),velocity:-a})),d.calculatedDuration===null&&(d.calculatedDuration=wv(d));const{calculatedDuration:f}=d,h=f+i,v=h*(r+1)-i;return{generator:d,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:f,resolvedDuration:h,totalDuration:v}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,n=!1){const{resolved:r}=this;if(!r){const{keyframes:k}=this.options;return{done:!0,value:k[k.length-1]}}const{finalKeyframe:i,generator:s,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:l,calculatedDuration:u,totalDuration:d,resolvedDuration:f}=r;if(this.startTime===null)return s.next(0);const{delay:h,repeat:v,repeatType:m,repeatDelay:y,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-d/this.speed,this.startTime)),n?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const p=this.currentTime-h*(this.speed>=0?1:-1),b=this.speed>=0?p<0:p>d;this.currentTime=Math.max(p,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=d);let x=this.currentTime,j=s;if(v){const k=Math.min(this.currentTime,d)/f;let T=Math.floor(k),P=k%1;!P&&k>=1&&(P=1),P===1&&T--,T=Math.min(T,v+1),!!(T%2)&&(m==="reverse"?(P=1-P,y&&(P-=y/f)):m==="mirror"&&(j=a)),x=Sn(0,1,P)*f}const S=b?{done:!1,value:l[0]}:j.next(x);o&&(S.value=o(S.value));let{done:E}=S;!b&&u!==null&&(E=this.speed>=0?this.currentTime>=d:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return C&&i!==void 0&&(S.value=hl(l,this.options,i)),g&&g(S.value),C&&this.finish(),S}get duration(){const{resolved:t}=this;return t?gn(t.calculatedDuration):0}get time(){return gn(this.currentTime)}set time(t){t=mn(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=gn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=$9,onPlay:n,startTime:r}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),n&&n();const i=this.driver.now();this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=i):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const Q9=new Set(["opacity","clipPath","filter","transform"]);function K9(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:o="easeInOut",times:l}={}){const u={[t]:n};l&&(u.offset=l);const d=Ev(o,i);return Array.isArray(d)&&(u.easing=d),e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"})}const Y9=sf(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ro=10,X9=2e4;function Z9(e){return xf(e.type)||e.type==="spring"||!kv(e.ease)}function e5(e,t){const n=new Df({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let s=0;for(;!r.done&&s<X9;)r=n.sample(s),i.push(r.value),s+=Ro;return{times:void 0,keyframes:i,duration:s-Ro,ease:"linear"}}const ay={anticipate:Ov,backInOut:_v,circInOut:Vv};function t5(e){return e in ay}class Rp extends ey{constructor(t){super(t);const{name:n,motionValue:r,element:i,keyframes:s}=this.options;this.resolver=new Zv(s,(a,o)=>this.onKeyframesResolved(a,o),n,r,i),this.resolver.scheduleResolve()}initPlayback(t,n){let{duration:r=300,times:i,ease:s,type:a,motionValue:o,name:l,startTime:u}=this.options;if(!o.owner||!o.owner.current)return!1;if(typeof s=="string"&&Po()&&t5(s)&&(s=ay[s]),Z9(this.options)){const{onComplete:f,onUpdate:h,motionValue:v,element:m,...y}=this.options,g=e5(t,y);t=g.keyframes,t.length===1&&(t[1]=t[0]),r=g.duration,i=g.times,s=g.ease,a="keyframes"}const d=K9(o.owner.current,l,t,{...this.options,duration:r,times:i,ease:s});return d.startTime=u??this.calcStartTime(),this.pendingTimeline?(mp(d,this.pendingTimeline),this.pendingTimeline=void 0):d.onfinish=()=>{const{onComplete:f}=this.options;o.set(hl(t,this.options,n)),f&&f(),this.cancel(),this.resolveFinishedPromise()},{animation:d,duration:r,times:i,type:a,ease:s,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:n}=t;return gn(n)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:n}=t;return gn(n.currentTime||0)}set time(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.currentTime=mn(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:n}=t;return n.playbackRate}set speed(t){const{resolved:n}=this;if(!n)return;const{animation:r}=n;r.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:n}=t;return n.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:n}=t;return n.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:n}=this;if(!n)return xt;const{animation:r}=n;mp(r,t)}return xt}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:n,keyframes:r,duration:i,type:s,ease:a,times:o}=t;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:d,onComplete:f,element:h,...v}=this.options,m=new Df({...v,keyframes:r,duration:i,type:s,ease:a,times:o,isGenerator:!0}),y=mn(this.time);u.setWithVelocity(m.sample(y-Ro).value,m.sample(y).value,Ro)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:n,name:r,repeatDelay:i,repeatType:s,damping:a,type:o}=t;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return Y9()&&r&&Q9.has(r)&&!l&&!u&&!i&&s!=="mirror"&&a!==0&&o!=="inertia"}}const n5={type:"spring",stiffness:500,damping:25,restSpeed:10},r5=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),i5={type:"keyframes",duration:.8},s5={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},a5=(e,{keyframes:t})=>t.length>2?i5:_r.has(e)?e.startsWith("scale")?r5(t[1]):n5:s5;function o5({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:i,repeat:s,repeatType:a,repeatDelay:o,from:l,elapsed:u,...d}){return!!Object.keys(d).length}const Mf=(e,t,n,r={},i,s)=>a=>{const o=bf(r,e)||{},l=o.delay||r.delay||0;let{elapsed:u=0}=r;u=u-mn(l);let d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...o,delay:-u,onUpdate:h=>{t.set(h),o.onUpdate&&o.onUpdate(h)},onComplete:()=>{a(),o.onComplete&&o.onComplete()},name:e,motionValue:t,element:s?void 0:i};o5(o)||(d={...d,...a5(e,d)}),d.duration&&(d.duration=mn(d.duration)),d.repeatDelay&&(d.repeatDelay=mn(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let f=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(d.duration=0,d.delay===0&&(f=!0)),f&&!s&&t.get()!==void 0){const h=hl(d.keyframes,o);if(h!==void 0)return me.update(()=>{d.onUpdate(h),d.onComplete()}),new C6([])}return!s&&Rp.supports(d)?new Rp(d):new Df(d)};function l5({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function oy(e,t,{delay:n=0,transitionOverride:r,type:i}={}){var s;let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=t;r&&(a=r);const u=[],d=i&&e.animationState&&e.animationState.getState()[i];for(const f in l){const h=e.getValue(f,(s=e.latestValues[f])!==null&&s!==void 0?s:null),v=l[f];if(v===void 0||d&&l5(d,f))continue;const m={delay:n,...bf(a||{},f)};let y=!1;if(window.MotionHandoffAnimation){const p=Rv(e);if(p){const b=window.MotionHandoffAnimation(p,f,me);b!==null&&(m.startTime=b,y=!0)}}Eu(e,f),h.start(Mf(f,h,v,e.shouldReduceMotion&&Av.has(f)?{type:!1}:m,e,y));const g=h.animation;g&&u.push(g)}return o&&Promise.all(u).then(()=>{me.update(()=>{o&&F6(e,o)})}),u}function Lu(e,t,n={}){var r;const i=fl(e,t,n.type==="exit"?(r=e.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(s=n.transitionOverride);const a=i?()=>Promise.all(oy(e,i,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:f,staggerDirection:h}=s;return c5(e,t,d+u,f,h,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,d]=l==="beforeChildren"?[a,o]:[o,a];return u().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function c5(e,t,n=0,r=0,i=1,s){const a=[],o=(e.variantChildren.size-1)*r,l=i===1?(u=0)=>u*r:(u=0)=>o-u*r;return Array.from(e.variantChildren).sort(u5).forEach((u,d)=>{u.notify("AnimationStart",t),a.push(Lu(u,t,{...s,delay:n+l(d)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(a)}function u5(e,t){return e.sortNodePosition(t)}function d5(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Lu(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Lu(e,t,n);else{const i=typeof t=="function"?fl(e,t,n.custom):t;r=Promise.all(oy(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const f5=of.length;function ly(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?ly(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<f5;n++){const r=of[n],i=e.props[r];(_s(i)||i===!1)&&(t[r]=i)}return t}const h5=[...af].reverse(),p5=af.length;function m5(e){return t=>Promise.all(t.map(({animation:n,options:r})=>d5(e,n,r)))}function g5(e){let t=m5(e),n=Lp(),r=!0;const i=l=>(u,d)=>{var f;const h=fl(e,d,l==="exit"?(f=e.presenceContext)===null||f===void 0?void 0:f.custom:void 0);if(h){const{transition:v,transitionEnd:m,...y}=h;u={...u,...y,...m}}return u};function s(l){t=l(e)}function a(l){const{props:u}=e,d=ly(e.parent)||{},f=[],h=new Set;let v={},m=1/0;for(let g=0;g<p5;g++){const p=h5[g],b=n[p],x=u[p]!==void 0?u[p]:d[p],j=_s(x),S=p===l?b.isActive:null;S===!1&&(m=g);let E=x===d[p]&&x!==u[p]&&j;if(E&&r&&e.manuallyAnimateOnMount&&(E=!1),b.protectedKeys={...v},!b.isActive&&S===null||!x&&!b.prevProp||ul(x)||typeof x=="boolean")continue;const C=v5(b.prevProp,x);let k=C||p===l&&b.isActive&&!E&&j||g>m&&j,T=!1;const P=Array.isArray(x)?x:[x];let M=P.reduce(i(p),{});S===!1&&(M={});const{prevResolvedValues:B={}}=b,G={...B,...M},$=_=>{k=!0,h.has(_)&&(T=!0,h.delete(_)),b.needsAnimating[_]=!0;const A=e.getValue(_);A&&(A.liveStyle=!1)};for(const _ in G){const A=M[_],I=B[_];if(v.hasOwnProperty(_))continue;let U=!1;wu(A)&&wu(I)?U=!jv(A,I):U=A!==I,U?A!=null?$(_):h.add(_):A!==void 0&&h.has(_)?$(_):b.protectedKeys[_]=!0}b.prevProp=x,b.prevResolvedValues=M,b.isActive&&(v={...v,...M}),r&&e.blockInitialAnimation&&(k=!1),k&&(!(E&&C)||T)&&f.push(...P.map(_=>({animation:_,options:{type:p}})))}if(h.size){const g={};h.forEach(p=>{const b=e.getBaseTarget(p),x=e.getValue(p);x&&(x.liveStyle=!0),g[p]=b??null}),f.push({animation:g})}let y=!!f.length;return r&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,y?t(f):Promise.resolve()}function o(l,u){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(h=>{var v;return(v=h.animationState)===null||v===void 0?void 0:v.setActive(l,u)}),n[l].isActive=u;const f=a(l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:a,setActive:o,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Lp(),r=!0}}}function v5(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!jv(t,e):!1}function sr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lp(){return{animate:sr(!0),whileInView:sr(),whileHover:sr(),whileTap:sr(),whileDrag:sr(),whileFocus:sr(),exit:sr()}}class ir{constructor(t){this.isMounted=!1,this.node=t}update(){}}class y5 extends ir{constructor(t){super(t),t.animationState||(t.animationState=g5(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ul(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let b5=0;class x5 extends ir{constructor(){super(...arguments),this.id=b5++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const j5={animation:{Feature:y5},exit:{Feature:x5}};function Fs(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function ta(e){return{point:{x:e.pageX,y:e.pageY}}}const w5=e=>t=>wf(t)&&e(t,ta(t));function hs(e,t,n,r){return Fs(e,t,w5(n),r)}const Dp=(e,t)=>Math.abs(e-t);function S5(e,t){const n=Dp(e.x,t.x),r=Dp(e.y,t.y);return Math.sqrt(n**2+r**2)}class cy{constructor(t,n,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const f=rc(this.lastMoveEventInfo,this.history),h=this.startEvent!==null,v=S5(f.offset,{x:0,y:0})>=3;if(!h&&!v)return;const{point:m}=f,{timestamp:y}=Be;this.history.push({...m,timestamp:y});const{onStart:g,onMove:p}=this.handlers;h||(g&&g(this.lastMoveEvent,f),this.startEvent=this.lastMoveEvent),p&&p(this.lastMoveEvent,f)},this.handlePointerMove=(f,h)=>{this.lastMoveEvent=f,this.lastMoveEventInfo=nc(h,this.transformPagePoint),me.update(this.updatePoint,!0)},this.handlePointerUp=(f,h)=>{this.end();const{onEnd:v,onSessionEnd:m,resumeAnimation:y}=this.handlers;if(this.dragSnapToOrigin&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=rc(f.type==="pointercancel"?this.lastMoveEventInfo:nc(h,this.transformPagePoint),this.history);this.startEvent&&v&&v(f,g),m&&m(f,g)},!wf(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.contextWindow=i||window;const a=ta(t),o=nc(a,this.transformPagePoint),{point:l}=o,{timestamp:u}=Be;this.history=[{...l,timestamp:u}];const{onSessionStart:d}=n;d&&d(t,rc(o,this.history)),this.removeListeners=ea(hs(this.contextWindow,"pointermove",this.handlePointerMove),hs(this.contextWindow,"pointerup",this.handlePointerUp),hs(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Zn(this.updatePoint)}}function nc(e,t){return t?{point:t(e.point)}:e}function Mp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function rc({point:e},t){return{point:e,delta:Mp(e,uy(t)),offset:Mp(e,k5(t)),velocity:E5(t,.1)}}function k5(e){return e[0]}function uy(e){return e[e.length-1]}function E5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=uy(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>mn(t)));)n--;if(!r)return{x:0,y:0};const s=gn(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}const dy=1e-4,C5=1-dy,T5=1+dy,fy=.01,P5=0-fy,A5=0+fy;function wt(e){return e.max-e.min}function N5(e,t,n){return Math.abs(e-t)<=n}function Ip(e,t,n,r=.5){e.origin=r,e.originPoint=be(t.min,t.max,e.origin),e.scale=wt(n)/wt(t),e.translate=be(n.min,n.max,e.origin)-e.originPoint,(e.scale>=C5&&e.scale<=T5||isNaN(e.scale))&&(e.scale=1),(e.translate>=P5&&e.translate<=A5||isNaN(e.translate))&&(e.translate=0)}function ps(e,t,n,r){Ip(e.x,t.x,n.x,r?r.originX:void 0),Ip(e.y,t.y,n.y,r?r.originY:void 0)}function _p(e,t,n){e.min=n.min+t.min,e.max=e.min+wt(t)}function R5(e,t,n){_p(e.x,t.x,n.x),_p(e.y,t.y,n.y)}function Op(e,t,n){e.min=t.min-n.min,e.max=e.min+wt(t)}function ms(e,t,n){Op(e.x,t.x,n.x),Op(e.y,t.y,n.y)}function L5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?be(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?be(n,e,r.max):Math.min(e,n)),e}function Up(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function D5(e,{top:t,left:n,bottom:r,right:i}){return{x:Up(e.x,n,i),y:Up(e.y,t,r)}}function Vp(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function M5(e,t){return{x:Vp(e.x,t.x),y:Vp(e.y,t.y)}}function I5(e,t){let n=.5;const r=wt(e),i=wt(t);return i>r?n=ki(t.min,t.max-r,e.min):r>i&&(n=ki(e.min,e.max-i,t.min)),Sn(0,1,n)}function _5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Du=.35;function O5(e=Du){return e===!1?e=0:e===!0&&(e=Du),{x:Fp(e,"left","right"),y:Fp(e,"top","bottom")}}function Fp(e,t,n){return{min:Wp(e,t),max:Wp(e,n)}}function Wp(e,t){return typeof e=="number"?e:e[t]||0}const Bp=()=>({translate:0,scale:1,origin:0,originPoint:0}),ii=()=>({x:Bp(),y:Bp()}),Gp=()=>({min:0,max:0}),Ce=()=>({x:Gp(),y:Gp()});function Tt(e){return[e("x"),e("y")]}function hy({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function U5({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function V5(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ic(e){return e===void 0||e===1}function Mu({scale:e,scaleX:t,scaleY:n}){return!ic(e)||!ic(t)||!ic(n)}function lr(e){return Mu(e)||py(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function py(e){return Hp(e.x)||Hp(e.y)}function Hp(e){return e&&e!=="0%"}function Lo(e,t,n){const r=e-n,i=t*r;return n+i}function zp(e,t,n,r,i){return i!==void 0&&(e=Lo(e,i,r)),Lo(e,n,r)+t}function Iu(e,t=0,n=1,r,i){e.min=zp(e.min,t,n,r,i),e.max=zp(e.max,t,n,r,i)}function my(e,{x:t,y:n}){Iu(e.x,t.translate,t.scale,t.originPoint),Iu(e.y,n.translate,n.scale,n.originPoint)}const $p=.999999999999,Jp=1.0000000000001;function F5(e,t,n,r=!1){const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let o=0;o<i;o++){s=n[o],a=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ai(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,my(e,a)),r&&lr(s.latestValues)&&ai(e,s.latestValues))}t.x<Jp&&t.x>$p&&(t.x=1),t.y<Jp&&t.y>$p&&(t.y=1)}function si(e,t){e.min=e.min+t,e.max=e.max+t}function qp(e,t,n,r,i=.5){const s=be(e.min,e.max,i);Iu(e,t,n,s,r)}function ai(e,t){qp(e.x,t.x,t.scaleX,t.scale,t.originX),qp(e.y,t.y,t.scaleY,t.scale,t.originY)}function gy(e,t){return hy(V5(e.getBoundingClientRect(),t))}function W5(e,t,n){const r=gy(e,n),{scroll:i}=t;return i&&(si(r.x,i.offset.x),si(r.y,i.offset.y)),r}const vy=({current:e})=>e?e.ownerDocument.defaultView:null,B5=new WeakMap;class G5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ce(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const i=d=>{const{dragSnapToOrigin:f}=this.getProps();f?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ta(d).point)},s=(d,f)=>{const{drag:h,dragPropagation:v,onDragStart:m}=this.getProps();if(h&&!v&&(this.openDragLock&&this.openDragLock(),this.openDragLock=I6(h),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Tt(g=>{let p=this.getAxisMotionValue(g).get()||0;if(rn.test(p)){const{projection:b}=this.visualElement;if(b&&b.layout){const x=b.layout.layoutBox[g];x&&(p=wt(x)*(parseFloat(p)/100))}}this.originPoint[g]=p}),m&&me.postRender(()=>m(d,f)),Eu(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},a=(d,f)=>{const{dragPropagation:h,dragDirectionLock:v,onDirectionLock:m,onDrag:y}=this.getProps();if(!h&&!this.openDragLock)return;const{offset:g}=f;if(v&&this.currentDirection===null){this.currentDirection=H5(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",f.point,g),this.updateAxis("y",f.point,g),this.visualElement.render(),y&&y(d,f)},o=(d,f)=>this.stop(d,f),l=()=>Tt(d=>{var f;return this.getAnimationState(d)==="paused"&&((f=this.getAxisMotionValue(d).animation)===null||f===void 0?void 0:f.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new cy(t,{onSessionStart:i,onStart:s,onMove:a,onSessionEnd:o,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:vy(this.visualElement)})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:i}=n;this.startAnimation(i);const{onDragEnd:s}=this.getProps();s&&me.postRender(()=>s(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!wa(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=L5(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,s=this.constraints;n&&ni(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&i?this.constraints=D5(i.layoutBox,n):this.constraints=!1,this.elastic=O5(r),s!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&Tt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=_5(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ni(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;const s=W5(r,i.root,this.visualElement.getTransformPagePoint());let a=M5(i.layout.layoutBox,s);if(n){const o=n(U5(a));this.hasMutatedConstraints=!!o,o&&(a=hy(o))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),l=this.constraints||{},u=Tt(d=>{if(!wa(d,n,this.currentDirection))return;let f=l&&l[d]||{};a&&(f={min:0,max:0});const h=i?200:1e6,v=i?40:1e7,m={type:"inertia",velocity:r?t[d]:0,bounceStiffness:h,bounceDamping:v,timeConstant:750,restDelta:1,restSpeed:10,...s,...f};return this.startAxisValueAnimation(d,m)});return Promise.all(u).then(o)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Eu(this.visualElement,t),r.start(Mf(t,r,0,n,this.visualElement,!1))}stopAnimation(){Tt(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Tt(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),i=r[n];return i||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){Tt(n=>{const{drag:r}=this.getProps();if(!wa(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:o}=i.layout.layoutBox[n];s.set(t[n]-be(a,o,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!ni(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};Tt(a=>{const o=this.getAxisMotionValue(a);if(o&&this.constraints!==!1){const l=o.get();i[a]=I5({min:l,max:l},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),Tt(a=>{if(!wa(a,t,null))return;const o=this.getAxisMotionValue(a),{min:l,max:u}=this.constraints[a];o.set(be(l,u,i[a]))})}addListeners(){if(!this.visualElement.current)return;B5.set(this.visualElement,this);const t=this.visualElement.current,n=hs(t,"pointerdown",l=>{const{drag:u,dragListener:d=!0}=this.getProps();u&&d&&this.start(l)}),r=()=>{const{dragConstraints:l}=this.getProps();ni(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:i}=this.visualElement,s=i.addEventListener("measure",r);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),me.read(r);const a=Fs(window,"resize",()=>this.scalePositionWithinConstraints()),o=i.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(Tt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=l[d].translate,f.set(f.get()+l[d].translate))}),this.visualElement.render())});return()=>{a(),n(),s(),o&&o()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=Du,dragMomentum:o=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:o}}}function wa(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function H5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class z5 extends ir{constructor(t){super(t),this.removeGroupControls=xt,this.removeListeners=xt,this.controls=new G5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xt}unmount(){this.removeGroupControls(),this.removeListeners()}}const Qp=e=>(t,n)=>{e&&me.postRender(()=>e(t,n))};class $5 extends ir{constructor(){super(...arguments),this.removePointerDownListener=xt}onPointerDown(t){this.session=new cy(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vy(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Qp(t),onStart:Qp(n),onMove:r,onEnd:(s,a)=>{delete this.session,i&&me.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=hs(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const qa={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Kp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const zi={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(K.test(e))e=parseFloat(e);else return e;const n=Kp(e,t.target.x),r=Kp(e,t.target.y);return`${n}% ${r}%`}},J5={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=er.parse(e);if(i.length>5)return r;const s=er.createTransformer(e),a=typeof i[0]!="number"?1:0,o=n.x.scale*t.x,l=n.y.scale*t.y;i[0+a]/=o,i[1+a]/=l;const u=be(o,l,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}};class q5 extends w.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;p6(Q5),s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),qa.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,a=r.projection;return a&&(a.isPresent=s,i||t.layoutDependency!==n||n===void 0?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||me.postRender(()=>{const o=a.getStack();(!o||!o.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),cf.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function yy(e){const[t,n]=ev(),r=w.useContext(ef);return c.jsx(q5,{...e,layoutGroup:r,switchLayoutGroup:w.useContext(lv),isPresent:t,safeToRemove:n})}const Q5={borderRadius:{...zi,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:zi,borderTopRightRadius:zi,borderBottomLeftRadius:zi,borderBottomRightRadius:zi,boxShadow:J5};function K5(e,t,n){const r=Xe(e)?e:Us(e);return r.start(Mf("",r,t,n)),r.animation}function Y5(e){return e instanceof SVGElement&&e.tagName!=="svg"}const X5=(e,t)=>e.depth-t.depth;class Z5{constructor(){this.children=[],this.isDirty=!1}add(t){Sf(this.children,t),this.isDirty=!0}remove(t){kf(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(X5),this.isDirty=!1,this.children.forEach(t)}}function ej(e,t){const n=sn.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Zn(r),e(s-t))};return me.read(r,!0),()=>Zn(r)}const by=["TopLeft","TopRight","BottomLeft","BottomRight"],tj=by.length,Yp=e=>typeof e=="string"?parseFloat(e):e,Xp=e=>typeof e=="number"||K.test(e);function nj(e,t,n,r,i,s){i?(e.opacity=be(0,n.opacity!==void 0?n.opacity:1,rj(r)),e.opacityExit=be(t.opacity!==void 0?t.opacity:1,0,ij(r))):s&&(e.opacity=be(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,r));for(let a=0;a<tj;a++){const o=`border${by[a]}Radius`;let l=Zp(t,o),u=Zp(n,o);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Xp(l)===Xp(u)?(e[o]=Math.max(be(Yp(l),Yp(u),r),0),(rn.test(u)||rn.test(l))&&(e[o]+="%")):e[o]=u}(t.rotate||n.rotate)&&(e.rotate=be(t.rotate||0,n.rotate||0,r))}function Zp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const rj=xy(0,.5,Uv),ij=xy(.5,.95,xt);function xy(e,t,n){return r=>r<e?0:r>t?1:n(ki(e,t,r))}function em(e,t){e.min=t.min,e.max=t.max}function Et(e,t){em(e.x,t.x),em(e.y,t.y)}function tm(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function nm(e,t,n,r,i){return e-=t,e=Lo(e,1/n,r),i!==void 0&&(e=Lo(e,1/i,r)),e}function sj(e,t=0,n=1,r=.5,i,s=e,a=e){if(rn.test(t)&&(t=parseFloat(t),t=be(a.min,a.max,t/100)-a.min),typeof t!="number")return;let o=be(s.min,s.max,r);e===s&&(o-=t),e.min=nm(e.min,t,n,o,i),e.max=nm(e.max,t,n,o,i)}function rm(e,t,[n,r,i],s,a){sj(e,t[n],t[r],t[i],t.scale,s,a)}const aj=["x","scaleX","originX"],oj=["y","scaleY","originY"];function im(e,t,n,r){rm(e.x,t,aj,n?n.x:void 0,r?r.x:void 0),rm(e.y,t,oj,n?n.y:void 0,r?r.y:void 0)}function sm(e){return e.translate===0&&e.scale===1}function jy(e){return sm(e.x)&&sm(e.y)}function am(e,t){return e.min===t.min&&e.max===t.max}function lj(e,t){return am(e.x,t.x)&&am(e.y,t.y)}function om(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function wy(e,t){return om(e.x,t.x)&&om(e.y,t.y)}function lm(e){return wt(e.x)/wt(e.y)}function cm(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class cj{constructor(){this.members=[]}add(t){Sf(this.members,t),t.scheduleRender()}remove(t){if(kf(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(i=>t===i);if(n===0)return!1;let r;for(let i=n;i>=0;i--){const s=this.members[i];if(s.isPresent!==!1){r=s;break}}return r?(this.promote(r),!0):!1}promote(t,n){const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,n&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:i}=t.options;i===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:r}=t;n.onExitComplete&&n.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function uj(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,rotateX:f,rotateY:h,skewX:v,skewY:m}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),h&&(r+=`rotateY(${h}deg) `),v&&(r+=`skewX(${v}deg) `),m&&(r+=`skewY(${m}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(r+=`scale(${o}, ${l})`),r||"none"}const cr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Zi=typeof window<"u"&&window.MotionDebug!==void 0,sc=["","X","Y","Z"],dj={visibility:"hidden"},um=1e3;let fj=0;function ac(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Sy(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Rv(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",me,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Sy(r)}function ky({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},o=t==null?void 0:t()){this.id=fj++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Zi&&(cr.totalNodes=cr.resolvedTargetDeltas=cr.recalculatedProjection=0),this.nodes.forEach(mj),this.nodes.forEach(xj),this.nodes.forEach(jj),this.nodes.forEach(gj),Zi&&window.MotionDebug.record(cr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=o?o.root||o:this,this.path=o?[...o.path,o]:[],this.parent=o,this.depth=o?o.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new Z5)}addEventListener(a,o){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new Ef),this.eventHandlers.get(a).add(o)}notifyListeners(a,...o){const l=this.eventHandlers.get(a);l&&l.notify(...o)}hasListeners(a){return this.eventHandlers.has(a)}mount(a,o=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Y5(a),this.instance=a;const{layoutId:l,layout:u,visualElement:d}=this.options;if(d&&!d.current&&d.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),o&&(u||l)&&(this.isLayoutDirty=!0),e){let f;const h=()=>this.root.updateBlockedByResize=!1;e(a,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=ej(h,250),qa.hasAnimatedSinceResize&&(qa.hasAnimatedSinceResize=!1,this.nodes.forEach(fm))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||u)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeTargetChanged:v,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||d.getDefaultTransition()||Cj,{onLayoutAnimationStart:g,onLayoutAnimationComplete:p}=d.getProps(),b=!this.targetLayout||!wy(this.targetLayout,m)||v,x=!h&&v;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||x||h&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,x);const j={...bf(y,"layout"),onPlay:g,onComplete:p};(d.shouldReduceMotion||this.options.layoutRoot)&&(j.delay=0,j.type=!1),this.startAnimation(j)}else h||fm(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Zn(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(wj),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Sy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const f=this.path[d];f.shouldResetTransform=!0,f.updateScroll("snapshot"),f.options.layoutRoot&&f.willUpdate(!1)}const{layoutId:o,layout:l}=this.options;if(o===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(dm);return}this.isUpdating||this.nodes.forEach(yj),this.isUpdating=!1,this.nodes.forEach(bj),this.nodes.forEach(hj),this.nodes.forEach(pj),this.clearAllSnapshots();const o=sn.now();Be.delta=Sn(0,1e3/60,o-Be.timestamp),Be.timestamp=o,Be.isProcessing=!0,Kl.update.process(Be),Kl.preRender.process(Be),Kl.render.process(Be),Be.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,cf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(vj),this.sharedNodes.forEach(Sj)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,me.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){me.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ce(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:o}=this.options;o&&o.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let o=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(o=!1),o){const l=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,o=this.projectionDelta&&!jy(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&(o||lr(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const o=this.measurePageBox();let l=this.removeElementScroll(o);return a&&(l=this.removeTransform(l)),Tj(l),{animationId:this.root.animationId,measuredBox:o,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var a;const{visualElement:o}=this.options;if(!o)return Ce();const l=o.measureViewportBox();if(!(((a=this.scroll)===null||a===void 0?void 0:a.wasRoot)||this.path.some(Pj))){const{scroll:d}=this.root;d&&(si(l.x,d.offset.x),si(l.y,d.offset.y))}return l}removeElementScroll(a){var o;const l=Ce();if(Et(l,a),!((o=this.scroll)===null||o===void 0)&&o.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:f,options:h}=d;d!==this.root&&f&&h.layoutScroll&&(f.wasRoot&&Et(l,a),si(l.x,f.offset.x),si(l.y,f.offset.y))}return l}applyTransform(a,o=!1){const l=Ce();Et(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];!o&&d.options.layoutScroll&&d.scroll&&d!==d.root&&ai(l,{x:-d.scroll.offset.x,y:-d.scroll.offset.y}),lr(d.latestValues)&&ai(l,d.latestValues)}return lr(this.latestValues)&&ai(l,this.latestValues),l}removeTransform(a){const o=Ce();Et(o,a);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!lr(u.latestValues))continue;Mu(u.latestValues)&&u.updateSnapshot();const d=Ce(),f=u.measurePageBox();Et(d,f),im(o,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,d)}return lr(this.latestValues)&&im(o,this.latestValues),o}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Be.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var o;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(a||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!(!this.layout||!(f||h))){if(this.resolvedRelativeTargetAt=Be.timestamp,!this.targetDelta&&!this.relativeTarget){const v=this.getClosestProjectingParent();v&&v.layout&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),ms(this.relativeTargetOrigin,this.layout.layoutBox,v.layout.layoutBox),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ce(),this.targetWithTransforms=Ce()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),R5(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Et(this.target,this.layout.layoutBox),my(this.target,this.targetDelta)):Et(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const v=this.getClosestProjectingParent();v&&!!v.resumingFrom==!!this.resumingFrom&&!v.options.layoutScroll&&v.target&&this.animationProgress!==1?(this.relativeParent=v,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ce(),this.relativeTargetOrigin=Ce(),ms(this.relativeTargetOrigin,this.target,v.target),Et(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Zi&&cr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Mu(this.parent.latestValues)||py(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var a;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let u=!0;if((this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Be.timestamp&&(u=!1),u)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;Et(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,v=this.treeScale.y;F5(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=Ce());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(tm(this.prevProjectionDelta.x,this.projectionDelta.x),tm(this.prevProjectionDelta.y,this.projectionDelta.y)),ps(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==v||!cm(this.projectionDelta.x,this.prevProjectionDelta.x)||!cm(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),Zi&&cr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var o;if((o=this.options.visualElement)===null||o===void 0||o.scheduleRender(),a){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ii(),this.projectionDelta=ii(),this.projectionDeltaWithTransform=ii()}setAnimationOrigin(a,o=!1){const l=this.snapshot,u=l?l.latestValues:{},d={...this.latestValues},f=ii();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!o;const h=Ce(),v=l?l.source:void 0,m=this.layout?this.layout.source:void 0,y=v!==m,g=this.getStack(),p=!g||g.members.length<=1,b=!!(y&&!p&&this.options.crossfade===!0&&!this.path.some(Ej));this.animationProgress=0;let x;this.mixTargetDelta=j=>{const S=j/1e3;hm(f.x,a.x,S),hm(f.y,a.y,S),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(ms(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),kj(this.relativeTarget,this.relativeTargetOrigin,h,S),x&&lj(this.relativeTarget,x)&&(this.isProjectionDirty=!1),x||(x=Ce()),Et(x,this.relativeTarget)),y&&(this.animationValues=d,nj(d,u,this.latestValues,S,b,p)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Zn(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=me.update(()=>{qa.hasAnimatedSinceResize=!0,this.currentAnimation=K5(0,um,{...a,onUpdate:o=>{this.mixTargetDelta(o),a.onUpdate&&a.onUpdate(o)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(um),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:o,target:l,layout:u,latestValues:d}=a;if(!(!o||!l||!u)){if(this!==a&&this.layout&&u&&Ey(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Ce();const f=wt(this.layout.layoutBox.x);l.x.min=a.target.x.min,l.x.max=l.x.min+f;const h=wt(this.layout.layoutBox.y);l.y.min=a.target.y.min,l.y.max=l.y.min+h}Et(o,l),ai(o,d),ps(this.projectionDeltaWithTransform,this.layoutCorrected,o,d)}}registerSharedNode(a,o){this.sharedNodes.has(a)||this.sharedNodes.set(a,new cj),this.sharedNodes.get(a).add(o);const u=o.options.initialPromotionConfig;o.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(o):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())===null||a===void 0?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())===null||a===void 0?void 0:a.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:o,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),a&&(this.projectionDelta=void 0,this.needsReset=!0),o&&this.setOptions({transition:o})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let o=!1;const{latestValues:l}=a;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(o=!0),!o)return;const u={};l.z&&ac("z",a,u,this.animationValues);for(let d=0;d<sc.length;d++)ac(`rotate${sc[d]}`,a,u,this.animationValues),ac(`skew${sc[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}getProjectionStyles(a){var o,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return dj;const u={visibility:""},d=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=$a(a==null?void 0:a.pointerEvents)||"",u.transform=d?d(this.latestValues,""):"none",u;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const y={};return this.options.layoutId&&(y.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,y.pointerEvents=$a(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!lr(this.latestValues)&&(y.transform=d?d({},""):"none",this.hasProjected=!1),y}const h=f.animationValues||f.latestValues;this.applyTransformsToTarget(),u.transform=uj(this.projectionDeltaWithTransform,this.treeScale,h),d&&(u.transform=d(h,u.transform));const{x:v,y:m}=this.projectionDelta;u.transformOrigin=`${v.origin*100}% ${m.origin*100}% 0`,f.animationValues?u.opacity=f===this?(l=(o=h.opacity)!==null&&o!==void 0?o:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:h.opacityExit:u.opacity=f===this?h.opacity!==void 0?h.opacity:"":h.opacityExit!==void 0?h.opacityExit:0;for(const y in To){if(h[y]===void 0)continue;const{correct:g,applyTo:p}=To[y],b=u.transform==="none"?h[y]:g(h[y],f);if(p){const x=p.length;for(let j=0;j<x;j++)u[p[j]]=b}else u[y]=b}return this.options.layoutId&&(u.pointerEvents=f===this?$a(a==null?void 0:a.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var o;return(o=a.currentAnimation)===null||o===void 0?void 0:o.stop()}),this.root.nodes.forEach(dm),this.root.sharedNodes.clear()}}}function hj(e){e.updateLayout()}function pj(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=n.source!==e.layout.source;s==="size"?Tt(f=>{const h=a?n.measuredBox[f]:n.layoutBox[f],v=wt(h);h.min=r[f].min,h.max=h.min+v}):Ey(s,n.layoutBox,r)&&Tt(f=>{const h=a?n.measuredBox[f]:n.layoutBox[f],v=wt(r[f]);h.max=h.min+v,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[f].max=e.relativeTarget[f].min+v)});const o=ii();ps(o,r,n.layoutBox);const l=ii();a?ps(l,e.applyTransform(i,!0),n.measuredBox):ps(l,r,n.layoutBox);const u=!jy(o);let d=!1;if(!e.resumeFrom){const f=e.getClosestProjectingParent();if(f&&!f.resumeFrom){const{snapshot:h,layout:v}=f;if(h&&v){const m=Ce();ms(m,n.layoutBox,h.layoutBox);const y=Ce();ms(y,r,v.layoutBox),wy(m,y)||(d=!0),f.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=m,e.relativeParent=f)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:n,delta:l,layoutDelta:o,hasLayoutChanged:u,hasRelativeTargetChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function mj(e){Zi&&cr.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function gj(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function vj(e){e.clearSnapshot()}function dm(e){e.clearMeasurements()}function yj(e){e.isLayoutDirty=!1}function bj(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function fm(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xj(e){e.resolveTargetDelta()}function jj(e){e.calcProjection()}function wj(e){e.resetSkewAndRotation()}function Sj(e){e.removeLeadSnapshot()}function hm(e,t,n){e.translate=be(t.translate,0,n),e.scale=be(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function pm(e,t,n,r){e.min=be(t.min,n.min,r),e.max=be(t.max,n.max,r)}function kj(e,t,n,r){pm(e.x,t.x,n.x,r),pm(e.y,t.y,n.y,r)}function Ej(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Cj={duration:.45,ease:[.4,0,.1,1]},mm=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),gm=mm("applewebkit/")&&!mm("chrome/")?Math.round:xt;function vm(e){e.min=gm(e.min),e.max=gm(e.max)}function Tj(e){vm(e.x),vm(e.y)}function Ey(e,t,n){return e==="position"||e==="preserve-aspect"&&!N5(lm(t),lm(n),.2)}function Pj(e){var t;return e!==e.root&&((t=e.scroll)===null||t===void 0?void 0:t.wasRoot)}const Aj=ky({attachResizeListener:(e,t)=>Fs(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),oc={current:void 0},Cy=ky({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!oc.current){const e=new Aj({});e.mount(window),e.setOptions({layoutScroll:!0}),oc.current=e}return oc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Nj={pan:{Feature:$5},drag:{Feature:z5,ProjectionNode:Cy,MeasureLayout:yy}};function ym(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&me.postRender(()=>s(t,ta(t)))}class Rj extends ir{mount(){const{current:t}=this.node;t&&(this.unmount=N6(t,n=>(ym(this.node,n,"Start"),r=>ym(this.node,r,"End"))))}unmount(){}}class Lj extends ir{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ea(Fs(this.node.current,"focus",()=>this.onFocus()),Fs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function bm(e,t,n){const{props:r}=e;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&me.postRender(()=>s(t,ta(t)))}class Dj extends ir{mount(){const{current:t}=this.node;t&&(this.unmount=M6(t,n=>(bm(this.node,n,"Start"),(r,{success:i})=>bm(this.node,r,i?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const _u=new WeakMap,lc=new WeakMap,Mj=e=>{const t=_u.get(e.target);t&&t(e)},Ij=e=>{e.forEach(Mj)};function _j({root:e,...t}){const n=e||document;lc.has(n)||lc.set(n,{});const r=lc.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(Ij,{root:e,...t})),r[i]}function Oj(e,t,n){const r=_j(t);return _u.set(e,n),r.observe(e),()=>{_u.delete(e),r.unobserve(e)}}const Uj={some:0,all:1};class Vj extends ir{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:Uj[i]},o=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),h=u?d:f;h&&h(l)};return Oj(this.node.current,a,o)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Fj(t,n))&&this.startObserver()}unmount(){}}function Fj({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Wj={inView:{Feature:Vj},tap:{Feature:Dj},focus:{Feature:Lj},hover:{Feature:Rj}},Bj={layout:{ProjectionNode:Cy,MeasureLayout:yy}},Ou={current:null},Ty={current:!1};function Gj(){if(Ty.current=!0,!!rf)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Ou.current=e.matches;e.addListener(t),t()}else Ou.current=!1}const Hj=[...Xv,Qe,er],zj=e=>Hj.find(Yv(e)),xm=new WeakMap;function $j(e,t,n){for(const r in t){const i=t[r],s=n[r];if(Xe(i))e.addValue(r,i);else if(Xe(s))e.addValue(r,Us(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,Us(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const jm=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Jj{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:s,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Rf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const v=sn.now();this.renderScheduledAt<v&&(this.renderScheduledAt=v,me.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:d}=a;this.onUpdate=d,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!s,this.isControllingVariants=dl(n),this.isVariantNode=av(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:f,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const v in h){const m=h[v];l[v]!==void 0&&Xe(m)&&m.set(l[v],!1)}}mount(t){this.current=t,xm.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,r)=>this.bindToMotionValue(r,n)),Ty.current||Gj(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Ou.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){xm.delete(this.current),this.projection&&this.projection.unmount(),Zn(this.notifyUpdate),Zn(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const n=this.features[t];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(t,n){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const r=_r.has(t),i=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&me.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s(),a&&a(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Ei){const n=Ei[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ce()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<jm.length;r++){const i=jm[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=$j(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Us(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){var r;let i=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(r=this.getBaseTargetFromProps(this.props,t))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,t,this.options);return i!=null&&(typeof i=="string"&&(Qv(i)||Fv(i))?i=parseFloat(i):!zj(i)&&er.test(n)&&(i=$v(t,n)),this.setBaseTarget(t,Xe(i)?i.get():i)),Xe(i)?i.get():i}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props;let i;if(typeof r=="string"||typeof r=="object"){const a=df(this.props,r,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);a&&(i=a[t])}if(r&&i!==void 0)return i;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Xe(s)?s:this.initialValues[t]!==void 0&&i===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ef),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class Py extends Jj{constructor(){super(...arguments),this.KeyframeResolver=Zv}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Xe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function qj(e){return window.getComputedStyle(e)}class Qj extends Py{constructor(){super(...arguments),this.type="html",this.renderInstance=mv}readValueFromInstance(t,n){if(_r.has(n)){const r=Nf(n);return r&&r.default||0}else{const r=qj(t),i=(fv(n)?r.getPropertyValue(n):r[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return gy(t,n)}build(t,n,r){pf(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return yf(t,n,r)}}class Kj extends Py{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ce}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(_r.has(n)){const r=Nf(n);return r&&r.default||0}return n=gv.has(n)?n:lf(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return bv(t,n,r)}build(t,n,r){mf(t,n,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,r,i){vv(t,n,r,i)}mount(t){this.isSVGTag=vf(t.tagName),super.mount(t)}}const Yj=(e,t)=>uf(e)?new Kj(t):new Qj(t,{allowProjection:e!==w.Fragment}),Xj=S6({...j5,...Wj,...Nj,...Bj},Yj),he=U3(Xj),Kt=e=>`/planned?title=${encodeURIComponent(e)}`,Zj=[{label:"首页",to:"/"},{label:"作品集",to:"/portfolio",children:[{label:"前端作品集",to:"/portfolio?cat=web"},{label:"游戏作品集",to:Kt("游戏作品集")},{label:"人工智能作品集",to:"/portfolio?cat=ai"}]},{label:"知识库",to:"/knowledge",children:[{label:"网站链接",to:"/links"},{label:"文件资源",to:Kt("文件资源")},{label:"知识图谱",to:"/graph"},{label:"学习笔记",children:[{label:"前端开发",children:[{label:"Vue",to:"/knowledge?cat=frontend"},{label:"React",to:"/knowledge?cat=frontend"}]},{label:"游戏开发",children:[{label:"Unity3D",to:"/knowledge?cat=gamedev"},{label:"三维建模",to:"/knowledge?cat=gamedev"}]},{label:"考研笔记",to:Kt("考研笔记")},{label:"人工智能笔记",to:"/knowledge?cat=tech"},{label:"算法笔记",to:Kt("算法笔记")},{label:"读书笔记",to:"/knowledge?cat=reading"},{label:"技术笔记",to:"/knowledge?cat=tech"},{label:"产品与想法",to:"/knowledge?cat=product"},{label:"灵感随记",to:Kt("灵感随记")}]}]},{label:"工具集",to:"/apps"},{label:"时间管理",to:"/studio",children:[{label:"日程计划",to:"/studio"},{label:"待办事项",to:"/studio"},{label:"人生规划",to:Kt("人生规划")}]},{label:"私人花园",to:"/garden",children:[{label:"日常记录",to:"/garden"},{label:"育儿成长日记",to:Kt("育儿成长日记")},{label:"写作",to:Kt("写作")},{label:"相册",to:Kt("相册")},{label:"心愿单",to:Kt("心愿单")}]}],wm={to:"/studio",label:"工作台"};function Ay({item:e,onNavigate:t,depth:n=1}){const[r,i]=w.useState(!1),s=Array.isArray(e.children)&&e.children.length>0;return c.jsxs("li",{className:`nav-dd-item ${s?"has-children":""}`,children:[e.to?c.jsxs(Eo,{to:e.to,className:"nav-dd-link",onClick:()=>t==null?void 0:t(),children:[c.jsx("span",{className:"nav-dd-label",children:e.label}),s&&c.jsx("span",{className:"nav-dd-caret",onClick:a=>{a.preventDefault(),i(o=>!o)},children:"›"})]}):c.jsxs("button",{className:"nav-dd-link",onClick:()=>i(a=>!a),children:[c.jsx("span",{className:"nav-dd-label",children:e.label}),s&&c.jsx("span",{className:`nav-dd-caret ${r?"open":""}`,children:"›"})]}),s&&c.jsx("ul",{className:`nav-dd-sub nav-dd-depth-${n} ${r?"sub-open":""}`,children:e.children.map((a,o)=>c.jsx(Ay,{item:a,onNavigate:t,depth:n+1},o))})]})}function ew({item:e,onNavigate:t}){const[n,r]=w.useState(!1),i=Array.isArray(e.children)&&e.children.length>0;return c.jsxs("li",{className:`nav-item ${i?"has-menu":""} ${n?"menu-open":""}`,onMouseEnter:()=>i&&r(!0),onMouseLeave:()=>i&&r(!1),children:[c.jsx(Eo,{to:e.to||"#",end:e.to==="/",className:({isActive:s})=>`nav-link ${s?"active":""}`,onClick:()=>{i||t==null||t()},children:e.label}),i&&c.jsx("button",{className:`nav-caret nav-caret-btn ${n?"open":""}`,"aria-label":`展开${e.label}子菜单`,onClick:()=>r(s=>!s),children:"▾"}),i&&c.jsx("ul",{className:`nav-dropdown ${n?"open":""}`,children:e.children.map((s,a)=>c.jsx(Ay,{item:s,onNavigate:()=>{r(!1),t==null||t()}},a))})]})}function tw(){const[e,t]=w.useState(!1),[n,r]=w.useState(!1),i=Pn();return w.useEffect(()=>{const s=()=>t(window.scrollY>24);return s(),window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s,{passive:!0})},[]),w.useEffect(()=>{r(!1)},[i.pathname,i.search]),c.jsx(he.header,{initial:{y:-70,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:[.22,1,.36,1]},className:`nav ${e?"nav-scrolled":""}`,children:c.jsxs("div",{className:"nav-inner container",children:[c.jsxs(Eo,{to:"/",className:"nav-logo",onClick:()=>r(!1),children:[c.jsx("span",{className:"logo-orb"}),c.jsxs("span",{children:["NEBULA",c.jsx("span",{className:"logo-thin",children:"·FOLIO"})]})]}),c.jsx("nav",{className:`nav-links ${n?"open":""}`,children:c.jsxs("ul",{className:"nav-root",children:[Zj.map((s,a)=>c.jsx(ew,{item:s,onNavigate:()=>r(!1)},a)),c.jsx("li",{className:"nav-item nav-private-item",children:c.jsx(Eo,{to:wm.to,className:({isActive:s})=>`nav-link nav-link-private ${s?"active":""}`,title:"只有你能进",onClick:()=>r(!1),children:wm.label})})]})}),c.jsxs("button",{className:`nav-burger ${n?"open":""}`,onClick:()=>r(s=>!s),"aria-label":"切换菜单",children:[c.jsx("span",{}),c.jsx("span",{}),c.jsx("span",{})]})]})})}const nw=["linglong","小塔","wujie"],If="nf.gate";function rw(){try{const e=localStorage.getItem(If);if(!e)return null;const t=JSON.parse(e);return!t||t.mode!=="invited"&&t.mode!=="guest"?null:t}catch{return null}}function iw(e){try{localStorage.setItem(If,JSON.stringify({mode:e,at:Date.now()}))}catch{}return{mode:e}}function sw(){try{localStorage.removeItem(If)}catch{}}function aw(){const e=()=>{sw(),window.location.reload()};return c.jsx("footer",{className:"site-footer",children:c.jsxs("div",{className:"container",children:[c.jsxs("span",{children:["© ",new Date().getFullYear()," Nebula Folio · 由 React + Three.js 驱动"]}),c.jsxs("span",{className:"footer-hint",children:["Designed & built with ☾ by a frontend developer",c.jsx("button",{type:"button",className:"footer-lock",onClick:e,title:"清除本机密令，回到吾界门面",children:"重新上锁"})]})]})})}function ow({children:e}){return c.jsx(he.main,{className:"page-shell",initial:{opacity:0,y:22},animate:{opacity:1,y:0},exit:{opacity:0,y:-14},transition:{duration:.35,ease:[.22,1,.36,1]},children:e})}const Ny="nf-perf-mode";function lw(){try{const n=new URLSearchParams(window.location.search).get("perf");if(n==="lite"||n==="full")return n;const r=localStorage.getItem(Ny);if(r==="lite"||r==="full")return r}catch{}const e=navigator;return e.deviceMemory&&e.deviceMemory<=4||e.hardwareConcurrency&&e.hardwareConcurrency<=4||window.matchMedia("(pointer: coarse)").matches&&window.innerWidth<=820?"lite":"full"}function cw(e){try{if(new URLSearchParams(window.location.search).get("perf"))return;localStorage.setItem(Ny,e)}catch{}}function uw({mode:e}){const[t,n]=w.useState(!1),r=w.useRef([]),i=w.useRef(0),s=w.useRef(e);if(s.current=e,w.useEffect(()=>{if(s.current!=="full")return;let o=performance.now();const l=u=>{if(r.current.push(u),u-o<2200)i.current=requestAnimationFrame(l);else{const d=(r.current[r.current.length-1]-r.current[0])/1e3;r.current.length/Math.max(d,.001)<34&&(cw("lite"),window.dispatchEvent(new CustomEvent("nf-perf-downgrade"))),n(!0)}};return i.current=requestAnimationFrame(l),()=>cancelAnimationFrame(i.current)},[]),t)return null;const a=e==="lite";return c.jsxs("div",{className:"perf-note",title:"性能模式：根据设备能力自动选择，可用 ?perf=full / ?perf=lite 强制指定",children:[c.jsx("span",{className:`perf-dot ${a?"lite":"full"}`}),a?"LITE MODE · 动效已降级":"FULL FX · 3D 运行中"]})}const dw="modulepreload",fw=function(e,t){return new URL(e,t).href},Sm={},Ry=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=fw(u,r),u in Sm)return;Sm[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!r)for(let m=a.length-1;m>=0;m--){const y=a[m];if(y.href===u&&(!d||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const v=document.createElement("link");if(v.rel=d?"stylesheet":dw,d||(v.as="script"),v.crossOrigin="",v.href=u,l&&v.setAttribute("nonce",l),document.head.appendChild(v),d)return new Promise((m,y)=>{v.addEventListener("load",m),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},hw="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!<>[]{}#$%&*",Gr=e=>/\s/.test(e);function km(e,t){const n=[];if(e<=0)return n;if(t==="start")for(let r=0;r<e;r++)n.push(r);else if(t==="end")for(let r=e-1;r>=0;r--)n.push(r);else{const r=Math.floor(e/2);let i=0;for(;n.length<e;){const s=i%2===0?r+i/2:r-Math.ceil(i/2);s>=0&&s<e&&n.push(s),i+=1}}return n}function Em(e,t,n){return Array.from(e).map((r,i)=>Gr(r)||t.has(i)?r:n[Math.floor(Math.random()*n.length)]).join("")}function pw({text:e,speed:t=50,maxIterations:n=10,revealDirection:r="center",useOriginalCharsOnly:i=!1,characters:s=hw,className:a="",replayOnHover:o=!0}){const l=w.useRef(null),[u,d]=w.useState(()=>Array.from(e).join("")),[f,h]=w.useState(!1),[v,m]=w.useState(()=>new Set),y=w.useRef(null),g=w.useRef(!1),p=w.useRef(0),b=i?Array.from(new Set(Array.from(e))).filter(S=>!Gr(S)):Array.from(s),x=w.useCallback(()=>{y.current&&(clearInterval(y.current),y.current=null)},[]);w.useEffect(()=>{var k;const S=l.current;if(!S)return;if((k=window.matchMedia)==null?void 0:k.call(window,"(prefers-reduced-motion: reduce)").matches){h(!0);return}const C=new IntersectionObserver(([T])=>{if(T.isIntersecting&&!g.current){g.current=!0,h(!1),m(new Set),p.current=0;const P=km(Array.from(e).length,r);y.current=setInterval(()=>{p.current+=1;const M=Math.max(1,Math.ceil(Array.from(e).filter(B=>!Gr(B)).length/n));m(B=>{const G=new Set(B);let $=0;for(const V of P)!G.has(V)&&$<M&&(G.add(V),$+=1);return d(Em(e,G,b)),(G.size>=Array.from(e).filter(V=>!Gr(V)).length||p.current>=n)&&(x(),d(e),h(!0)),G})},Math.max(16,t))}},{threshold:.1});return C.observe(S),()=>{C.disconnect(),x()}},[e,t,n,r,x]);const j=()=>{if(!o||y.current)return;g.current=!1,h(!1),m(new Set),p.current=0;const S=km(Array.from(e).length,r);x(),y.current=setInterval(()=>{p.current+=1;const E=Math.max(1,Math.ceil(Array.from(e).filter(C=>!Gr(C)).length/n));m(C=>{const k=new Set(C);let T=0;for(const P of S)!k.has(P)&&T<E&&(k.add(P),T+=1);return d(Em(e,k,b)),(k.size>=Array.from(e).filter(P=>!Gr(P)).length||p.current>=n)&&(x(),d(e),h(!0)),k})},Math.max(16,t))};return c.jsx("span",{ref:l,className:`decrypted-text ${f?"done":""} ${a}`,onMouseEnter:j,children:u})}function mw({as:e="span",color:t="#22d3ee",speed:n="6s",thickness:r=1,className:i="",children:s,...a}){const o={background:`radial-gradient(circle, ${t}, transparent 10%)`};return c.jsxs(e,{className:`star-border ${i}`,style:{padding:`${r}px 0`},...a,children:[c.jsx("span",{className:"star-border__beam top",style:{...o,animationDuration:n},"aria-hidden":"true"}),c.jsx("span",{className:"star-border__beam bottom",style:{...o,animationDuration:n},"aria-hidden":"true"}),c.jsx("span",{className:"star-border__inner",children:s})]})}function ve({children:e,delay:t=0,y:n=26,className:r="",...i}){return c.jsx(he.div,{className:r,initial:{opacity:0,y:n},whileInView:{opacity:1,y:0},viewport:{once:!0,margin:"-60px"},transition:{duration:.55,delay:t,ease:[.22,1,.36,1]},...i,children:e})}function Pr({children:e,className:t="",stagger:n=.07}){return c.jsx(he.div,{className:t,initial:"hidden",whileInView:"show",viewport:{once:!0,margin:"-40px"},variants:{hidden:{},show:{transition:{staggerChildren:n}}},children:e})}function Ar({children:e,className:t="",y:n=20}){return c.jsx(he.div,{className:t,variants:{hidden:{opacity:0,y:n},show:{opacity:1,y:0,transition:{duration:.5,ease:[.22,1,.36,1]}}},children:e})}const oi=[{id:"idea-box",category:"ai",title:"想法盒子",subtitle:'给"想得多、说得少"的人的访谈式小程序',year:2026,tags:["微信小程序","云开发","LLM"],accent:"violet",desc:"它先问你一个问题，你答，它替你说出没说出口的那句，存成一张卡，某天再随机递回给你。做给 INFJ，也做给自己：第一个用户是我。",highlights:["访谈式输入：先问再记，拒绝冷冰冰的输入框","笔记一键导出白底金句卡，直接发小红书","盲盒机制：随机翻出旧想法，防止它凉"],links:[]},{id:"nebula-folio",category:"web",title:"Nebula Folio · 个人网站",subtitle:"你现在看到的这个站",year:2026,tags:["React 18","Three.js","Vite"],accent:"cyan",desc:"霓虹深空风格的个人站。对外是展示：作品、简历、知识库；对内是带门禁的工作台：笔记本、计划板、私人花园。一台站，两种身份。",highlights:["内外分离：访客看展示，只有我能进工作台","笔记本内置访谈式模板，一键导出小红书金句卡","Three.js 星穹场景，低端设备自动降级"],links:[]},{id:"micro-demo",category:"web",title:"星尘 · 微前端演示",subtitle:"主站壳 + 独立子应用的第一根管道",year:2026,tags:["wujie","微前端","Canvas"],accent:"magenta",desc:"以后每个演示、每个产品，都单独开发、单独部署，从这里接进主站。这张卡就是那根管道的第一段。",highlights:["wujie 微前端：子应用零改造接入，任意技术栈都行","子应用崩溃不影响主站，互相隔离","以后所有 demo 的统一入口"],appId:"demo",links:[]},{id:"css-lab",category:"web",title:"CSS 动画实验室",subtitle:"读《Web 动画之旅》时，把每个理论都做成能看的 demo",year:2026,tags:["CSS","animation-fill-mode","微前端子应用"],accent:"amber",desc:"读技术文档最怕看完就忘，所以我一边读一边把每个结论做成能点的东西：填充模式的四个取值和五个实战坑、原文 demo 的逐帧复刻（SVG / SMIL / 3D）、动画的六个作用逐条演示，再到 WAAPI、rAF 跟随和磁吸导航。纯 CSS + 原生 JS，无依赖，独立子应用。",highlights:["填充模式吃透：四取值并排 + 六讲 + 五个实战坑（reverse / alternate 的首末帧陷阱）","缓动曲线同屏赛跑，回弹曲线用 cubic-bezier 越界值实现","滚动驱动动画零 JS：animation-timeline + animation-range"],appId:"css",links:[]},{id:"cesium-lab",category:"web",title:"Cesium 三维地球实验室",subtitle:"把一整套 Cesium 资料，拆成能看能拖的六个原理 demo",year:2026,tags:["Cesium","3D Tiles","WebGIS","微前端子应用"],accent:"cyan",desc:"工作里做的是停车运营的三维地图：视频值守、地图点聚合、3D Tiles 加载都碰过。这套实验室把资料库里那 33 个示例压成六个骨架：经纬度到底怎么变成地心坐标、标绘的线面怎么收尾、测地线为什么和直线不一样、tileset.json 怎么决定清晰度、天空盒六张图怎么缝、动态线和扫描线怎么每帧改一个参数。最后一个接真 Cesium，其余零依赖。",highlights:["坐标转换用 WGS84 真实公式正反算，误差当场校验","Vincenty 椭球测地线 vs 球面近似，同一对点三个数",'3D Tiles 逐层解剖 + SSE 屏幕误差计算器，看清"为什么这一层加载了"'],appId:"cesium",links:[]},{id:"bits-lab",category:"web",title:"Bits 效果实验室",subtitle:"React Bits × Vue Bits：同一效果，两种框架，切换着看",year:2026,tags:["React 18","Vue 3","动画","微前端子应用"],accent:"magenta",desc:"从 React Bits（47K+ Star）和 Vue Bits 里挑了 8 个最实用的效果：解密文字、逐词浮现、逐字入场、流光文字、星流边框、眩光悬停、数字滚动、磁力线阵。每个都同时给出 React 与 Vue 两份真实现，一键切换重挂载，看同一个效果在两个框架里长什么样。首页的标语和 CTA 按钮就是从这里出去的。",highlights:["双框架真实现：React hooks 版 + Vue composition 版，切换即重挂载","原仓库 motion-v 依赖用 CSS 过渡与 rAF 弹性逼近等效复现","首页同款：DecryptedText 标语 + StarBorder 按钮，先在这里验过再上首页"],appId:"bits",links:[]},{id:"three-lab",category:"web",title:"Three.js 实验室",subtitle:"《Threejs 通关秘籍》起步，从八个实战长到十八个面板的实验室",year:2026,tags:["Three.js","WebGL","着色与几何","微前端子应用"],accent:"cyan",desc:"噪声地形、隧道穿梭、雨雪粒子、3D 饼图、打碎重组、精灵标注、镜面反射、描边发光，后面又加了视锥剔除、WebGPU、HDR 环境光、物理引擎。每个都拆到可以单独看懂：顶点怎么被噪声抬高、倒影为什么是真的实时渲染、描边光怎么靠后期处理长出来。",highlights:["零构建：three 运行时本地化，动态 import 直接跑，不依赖打包器","Reflector / OutlinePass 等 addons 也已本地化，换清晰度、调发光都能实时玩","每个 demo 都带原理说明与关键代码，不是只有画面","自写极简轨道控制器，接进微前端也不打架"],appId:"three",links:[]},{id:"webgl-lab",category:"web",title:"WebGL 原生实验室",subtitle:"不引库，直接摸 WebGL 最底下那一层",year:2026,tags:["原生 WebGL","GLSL","手写矩阵","微前端子应用"],accent:"violet",desc:"魔法火焰：没有几何体，全屏像素跑同一段 fragment shader，噪声向上滚动、按值套颜色梯度，速度湍流蓝焰全是一个 uniform。三种几何体：立方体、球体、椎体的顶点自己数，MVP 矩阵手写 36 行，看清 three 帮你省掉的那层到底在干什么。",highlights:["fragment shader 噪声火焰：湍流 = 噪声套噪声，色温一键切换","三种几何体顶点全手数：立方体 24 顶点、球体经纬网格、椎体侧面 + 底面","手写 perspective / rotate / translate，MVP 一次乘完"],appId:"webgl",links:[]},{id:"dc-dashboard",category:"web",title:"三维机房监控大屏",subtitle:"把「动环监控」做成一眼看到红色告警的数字孪生",year:2026,tags:["Three.js","InstancedMesh","数据驱动","可视化大屏","微前端子应用"],accent:"cyan",desc:"数据中心动环监控场景的完整落地：设备表（deviceId → 坐标/尺寸/业务状态）驱动 60 台机柜的 InstancedMesh 阵列，告警状态只写实例属性、脉冲在顶点着色器里算，点击机柜下钻看功率负载温度，A/B/C 区一键筛选，1920×1080 设计稿等比缩放适配并显式反算鼠标坐标。",highlights:["数据与渲染解耦：业务表是唯一事实源，三维只负责把表画出来","告警脉冲在 GPU：每实例 aGlow/aAlarm 属性 + onBeforeCompile 注入，CPU 每帧零上传","大屏适配：1920 基线 scale 方案，鼠标坐标除以缩放比反算，拾取不偏","趋势图零依赖：Canvas 2D 手绘双折线 + 渐变填充，读数与三维同源"],appId:"dc",links:[]},{id:"wms-twin",category:"web",title:"智能仓储数字孪生",subtitle:"参数化货架生成 + AGV 轨迹搬运",year:2026,tags:["Three.js","CatmullRomCurve3","状态机","InstancedMesh","微前端子应用"],accent:"cyan",desc:"仓储孪生的两个核心机制：一份数据表参数化生成 4 排双面货架 240 货位（立柱/层板/灯带/货位全实例化，货位状态即实例色）；三台 AGV 沿 CatmullRom 闭环按弧长巡航，朝向取切线，取货/搬运/卸货状态机驱动货箱从货位飞上车再交付出库口。",highlights:["场景配置即数据：RACKS/CELLS 表驱动生成，改布局不改代码","AGV 曲线运动：getPointAt 弧长参数化防弯道变速，getTangentAt 朝向不横飘","搬运是状态机不是 setTimeout：idle/toPick/picking/toDrop/dropping 五态驱动","点击货位 instanceId 反查 CELLS 表，SKU/批次/数量即时可查"],appId:"wms",links:[]},{id:"js-lab",category:"web",title:"原生 JS 实验室",subtitle:"不用装库，浏览器早就内置了",year:2026,tags:["原生 JS","浏览器 API","微前端子应用"],accent:"cyan",desc:'Custom Highlight API 不插一个标签就能高亮文本；@property 把 CSS 变量从字符串变数字，transition 才能插值；View Transitions 让"共享元素动画"变成两行代码；还有 60 行写完的链式迷你动画库。',highlights:["Range + Highlight：改关键词不动 DOM，样式全在 ::highlight() 里","@property 对照实验：同一段 transition，注册与未注册一秒看懂差别","View Transitions：列表↔详情形变，JS 只负责换内容"],appId:"js",links:[]},{id:"canvas-lab",category:"web",title:"Canvas 实验室",subtitle:"背景特效三章，从骨架到封装",year:2026,tags:["Canvas 2D","requestAnimationFrame","微前端子应用"],accent:"cyan",desc:"随机粒子是所有 Canvas 动画的骨架：清屏、更新、撞墙反向、画圆；鼠标互动只加了一条距离公式，排斥/聚拢一键切，连线亮度随距离衰减；最后一个面板把前两个封装成 ParticleField 类，自带 DPR 适配、降帧和页面隐藏自动暂停。",highlights:["三面板递进：同一个粒子系统，每章只多做一个机制","devicePixelRatio 适配：Retina 屏不发虚，标签实时显示实际帧率","降帧 + visibilitychange：目标 30fps 就每两帧画一次，切走自动停"],appId:"canvas",links:[]},{id:"widgets-lab",category:"web",title:"组件交互实验室",subtitle:"把 React 帮你做的事，用 vanilla JS 做一遍",year:2026,tags:["原生 JS","组件原理","Web Audio","微前端子应用"],accent:"emerald",desc:"读掘金《React 通关秘籍》组件实战与原理篇时留下的练手场：防删除水印、五种 Observer、手写 Zustand、HSV 取色器、漫游引导、Web Audio 钢琴。六个机制全部无 React 依赖，拆开看框架底下那层到底在干什么。",highlights:["水印守卫：canvas 平铺水印 + MutationObserver，删一次防一次","createStore 15 行：getState/setState/subscribe，双组件共享 store","onBoarding 挖孔：box-shadow 负空间 + 气泡自动上下定位","钢琴：振荡器 + ADSR 包络，鼠标键盘双输入，四种波形"],appId:"widgets",links:[]},{id:"ssr-lab",category:"web",title:"SSR 解剖台",subtitle:"NestJS 一个进程，两个身份",year:2026,tags:["NestJS","React SSR","微前端子应用"],accent:"violet",desc:"读掘金《用 NestJS 构建的 SSR 混合渲染方案》时真搭的骨架：Controller 只返数据，拦截器四段 map 拼出 HTML，浏览器 hydrateRoot 接管。面板里的 HTML、状态、耗时全部来自真实运行的服务端，可切换「关 JS / 不转义」亲眼看到 SEO 直出与脚本截断现场。",highlights:["流水线可视化：injectStyle → injectJS → injectSEO → renderToString，每段真实产物","双栏对照：左边 view-source，右边带着真 React hydrate 的页面，可交互","不转义现场：状态里的 <\/script> 截断脚本，React error #423 页面清空"],appId:"ssr",links:[]}],Qa=[{id:"all",label:"全部"},{id:"ai",label:"AI 产品"},{id:"web",label:"前端实现"}],Ly={cyan:"linear-gradient(135deg, #062a3a 0%, #0b1226 55%, #123a52 100%)",violet:"linear-gradient(135deg, #241a4d 0%, #0b1226 55%, #3b1d66 100%)",magenta:"linear-gradient(135deg, #3a1140 0%, #0b1226 55%, #4d1a44 100%)",amber:"linear-gradient(135deg, #3a2a08 0%, #0b1226 55%, #4a3410 100%)",emerald:"linear-gradient(135deg, #063226 0%, #0b1226 55%, #0d4034 100%)"},wr={cyan:"#22d3ee",violet:"#8b5cf6",magenta:"#e879f9",amber:"#fbbf24",emerald:"#34d399"},gw=[{id:"fs-YNJndd0WSoipFvxjtcJcPs9Hnvf",category:"reading",title:"人性的枷锁读书笔记",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"读书笔记 在左侧 “**+**” 菜单点击“思维导图”创建你自己的读书思维笔记 🧠 飞书思维导图（请在飞书原文查看） 灵感摘抄 人类语言真正独特的功能，在于能够传达一些根本不存在的事物的信息。传说，神话，宗教应运而生。 …",body:`## 读书笔记

> 在左侧 “**+**” 菜单点击“思维导图”创建你自己的读书思维笔记

> 🧠 飞书思维导图（请在飞书原文查看）

## 灵感摘抄

- 人类语言真正独特的功能，在于能够传达一些根本不存在的事物的信息。传说，神话，宗教应运而生。 

## 引申阅读

> 在阅读中发现感兴趣的地方，拓展阅读的广度和深度

- 《未来简史》
- 《乌合之众》
- 《美丽新世界》

# 《美丽新世界》

> 🧠 飞书思维导图（请在飞书原文查看）

## 全书结构

- 

## 灵感摘抄

- 

## 引申阅读

-`,feishuUrl:"https://my.feishu.cn/docx/YNJndd0WSoipFvxjtcJcPs9Hnvf"},{id:"fs-NU2gd6iwToNMWlxcbibc7yXqnqg",category:"reading",title:"指匠读书笔记",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"👤 作者：萨拉·沃特斯【英】，阿朗【译】** 📚 类别：应该文学/畅销小说** ✅ 阅读时间：8小时** ❤️ 推荐指数：⭐️⭐️⭐️⭐️⭐️** 📒 简介：这本书主要讲述了维多利亚时期，关于两个女孩在卷入一场筹谋了十七…",body:`> 👤 
**作者：萨拉·沃特斯【英】，阿朗【译】**

> 📚 
**类别：应该文学/畅销小说**

> ✅ 
**阅读时间：8小时**

> ❤️ 
**推荐指数：⭐️⭐️⭐️⭐️⭐️**

> 📒 
**简介：这本书主要讲述了维多利亚时期，关于两个女孩在卷入一场筹谋了十七年左右的骗局中，彼此救赎并相爱。这是一部反转又反转的哥特式悬疑小说，是一部充满十九世纪珍闻的纯文学。**
作者分别通过两个女孩的视角来讲述，彼此都以为对方是待宰的羔羊，而自己是那个猎人，实则这一切都是被操控的。
一个是坐拥家财的千金小姐，从小在精神病院被一群护士带大，十一岁左右，她的舅舅认为她被教养好了，就把她接回去，日日被迫抄写舅舅的情色藏书，甚至在有外宾访问时，还要给他们朗读这些藏书，她已经百毒不侵了。在深宅中，她戴着白色的手套，所有的动作都要很轻，没有玩伴，没有自由。
另一个是从小生活在贼窝，但是却被养母保护的很好的小毛贼，天真单纯，以为自己很聪明，所以当那个觊觎千金小姐金钱的，洞彻人心，自以为很迷人的绅士来邀请她参加这场骗局时，她虽然有些害怕，但还是去了。而后反被做局送到了精神病院，她觉醒为一个女战士，决心为自己复仇。

# 书摘

### 第 1 章

> 🔆 
【精彩片段】
他垂下手，手心向上，曲起中指；这个手势，他用这个手势表示的字——指匠——在我们波镇就是小偷的暗称。

> 🔆 
【精彩片段】
因为我知道她的命运——知道的一清二楚，而且正帮忙把它变成现实！她的世界那么奇异，那么安静和封闭，使真实世界——那个平凡的，尔虞我诈的，我坐着大嚼猪头肉喝着热酒，听萨克斯比大娘和约翰·弗鲁姆笑谈我从绅士这笔横财六发达了该如何挥霍——那个真实世界，离这个世界那么远，远得它的艰难都失去了意义。起初我会对自己说，“绅士来了，我就做这个”或者“等他把她搞进疯人院，我就做那个”。我会这么想，然后看见她，那么单纯和美好，这些念头就会消失，然后我会帮她梳头或者整理她的裙带。我并不觉得愧疚——不是很愧疚，也没有在那时愧疚。我只是觉得，既然我们要在一起相处那么多时间，就尽量对她好点，少想一点她的将来，这样比较容易，感觉上没那么残忍。


### 第 2 章

> ✨ 
【精彩片段】
也许小孩真的像马一样，是可以驯服的。舅舅在纸堆里埋下头去，让我们退下。我便乖乖的回房里学做针线。让我畏缩的并不是鞭打的警告，而是我知道强大的耐心能有多残酷。没有什么比疯子的耐心更可怕的了。我见识过疯子做的无用功——把沙子从一个有漏洞的杯子倒进另一个，去数一件破旧衣服上的针脚，或者去数一道太阳光柱里的尘粒，往无形的账本里填写数目。若她们不是女人，而是有钱的绅士，也许她们就成为了学者，还能吩咐下人做事，这都说不定。当然，这也是后来，当我完全了解了舅舅的癖好，才有这样的念头。当天，童年的我只看到了事物的表面。但我知道那是黑暗的，也知道那是安静无声的——其实，它的本质，就是那黑暗寂静的本质，像水，像蜡，充满了舅舅家这座大宅。
我若挣扎，它会把我拉进去，吞没在其中。
当时，我不愿被它淹没。
于是我停止了挣扎。在它那黏稠的漩涡中，随波逐流。

> 🏆 
【精彩片段】
当然，她不知道，其实是她，才需要变得健壮丰满——是她，才需要慢慢学会，跟循规条，跟循铃声和信号，行止坐卧，进食和睡眠。她以为她在取笑我，她以为她在怜悯我！她学到这大宅里的规矩，却不明白，那些束缚我的陈规节律，将迅速把她束缚。它们会像摩洛哥皮或小牛皮，把她绑牢……我已惯于把自己想象成书本，现在我觉得，对她而言，我就是一本书：她不用识字的眼看我，她看的见形状，却看不懂内容。她看见白皙的皮肤——她说“您真白啊！”——却看不见皮肤之下流动的，败坏的血。

> ✨ 
【精彩片段】
我无所不知，却又一无所知

> ✏️ 
【精彩片段】
当然，我希望她把我吞没。我需要她把我吞没。而且我感到我已经开始放弃我的生活，放弃得那么轻松，犹如灯芯放出黑烟，染污了护它的玻璃罩，又如蜘蛛吐出银丝，套牢了颤抖的飞蛾。我想象那银丝，紧紧绑住她。她却毫无知觉。等她知道时，已经太迟了。那时她将会发现，她是怎样被包装，被改变，变成了我的模样。而现在，她只觉得疲惫，焦躁，无聊。

> ✨ 
【精彩片段】
因为，你赤着手就来到我这里，而在常人的世界——这房间以外那个平凡的世界——但凡染指硫酸和砒霜的人，都有护罩护手。你与他们不同。这里才是你的领域。这是我精心计划，我已经给你一点一点喂食了毒药。现在，是加大剂量的时候了。
不可胡乱给人。你要是说出去，他们会认为你思想肮脏。你听明白了吗？我已在你的唇上涂了毒药，莫德，你记住。


### 第 3 章

> 💎 
【精彩片段】
这是一种迟缓的病痛，不像我刚到这里时，那种让我出汗的尖锐的恐惧。它慢慢地，鬼鬼祟祟地潜伏进来，变成了疯人院生活的一部分——就像墙上的颜色，食物的味道，病人们哭喊的声音，它悄悄在我身上扎了根，当我察觉时，已经太晚了。我还是对每一个跟我说话的人说，我脑子很清楚很正常，我进疯人院是被搞错了，我不是莫德·里弗斯，应该马上被放出去。但是，我说了太多遍以后，这些话变得软弱无力，就像钱币用久了以后，头像就磨损得模糊不清。最后，有一天，我和一个女人在花园里散步时又说了一遍，她带着怜悯的表情看着我。
“我曾经也跟你想的一样”，她和善的对我说，“但是，你知道吗，我怕你是来了这里之后疯了。我们这儿的人都有点奇怪，你看看周围就知道。你看看你自己就知道了。”
我已经很久，我也不记得多久了，没去想过我在别人眼中是啥模样。克里斯蒂医生不给我们镜子，怕我们打碎了。
我慢慢走过去，带着恐惧，自己大量着自己。
我的头发还缝在头顶，不过线已经松了，头发也七拱八翘了。我的脸色苍白，满是青的紫的瘢痕和伤口。我的眼睛肿着——是因为缺乏睡眠吧——眼圈发红。我的脸从未像现在这么尖瘦，脖子细的像麻杆。格子尼裙子套在我身上，像个挂着的洗衣袋，领口漏出莫德那只旧手套的脏兮兮的指尖，我还把这东西藏在胸口。你还可以勉强看出，小牛皮上有我的牙齿印。

> 💎 
【精彩片段】
其实，这跟死也没有多少区别了。我睡在黑暗里，没有梦，没有思想。我甚至不是我自己，我什么都不是了。或许，我再也不会成为从前的那个我了。
我就像一只羊羔，乖乖地跟着走。我身上到处是青肿淤血，还有烫伤，但我没啥感觉。我没有哭。我坐着，和其他女人一样，对什么都视而不见。我听说她们想过给我上帆布手箍，谨防我再次抽风。但见我这么乖，就放弃了这想法。培根护士被我撞过的眼圈还是黑的，我估计，如果她能单独把我拉到一边，可能会打我一顿——我想，要是她真的这么干，我也不会躲闪，任打任罚了。但是，和其他的一切一样，她好像也变了。她看我的眼神也奇怪起来。有一天晚上，我躺在床上，其他人都闭上了眼睛，她看着我，轻言细语地说“你还好吧？”她瞟了一眼其他几张床，眼光又回到我脸上，“没记恨我吧——莫德？都好的，是吧？我们总得找点乐子不是？要不，我们也疯了……”
我转过头去，但我知道，她还在看着我。无所谓了。现在我什么都无所谓了。之前，我总是把弦绷的紧紧的，时刻找机会逃跑，结果哪也没去成。突然间，我对萨克斯比大娘、易布斯大叔、绅士、甚至莫德的记忆，都变得模糊起来。我脑子里好像充满了烟幕。有时候我也觉得我真的就是莫德吧，既然这么多人都认为我是。
我也习惯了被摇晃，被呵斥，被打耳光。我也习惯了看着其他病人们被呵斥被打。我对什么都习惯了。我习惯了我的床，习惯了刺眼的灯。克里斯蒂医生说，我现在肯叫自己莫德，并不表示我已经好了，只是我的症状改了一个方向，到时还会变回来，在那之前就别想治好，所以他也停了治疗。但是我听说，真实情况是，他把所有治疗都停了。因为他治好了那个说蛇语的女人，治疗效果太好了，她妈妈把她接回去了；另外，死了几个病人，疯人院亏了些钱。


# 收获 & 感悟

> “那个时代，女人的归宿无非是：高墙深宅、贼窝、收容所、精神病院……”
> 
> 莫德被困在庄园的图书室里，看似高贵实则畸形；苏出身贼窝，看似自由实则同样被命运捆绑。两个女孩都想逃，却殊途同归。沃特斯把女性被迫害、禁锢、控制与自我控制刻画得细致入微。
> 
> 书中有一个细节让我久久难以释怀：莫德在逃跑途中站上大桥，摸着已经断开的鞋底想——“一位女性能否在桥上公开揉搓自己的脚？我不知道。”一个连揉脚的自由都没有的女人，谈何逃出命运的牢笼？
> 
> 这不是一本简单的“百合小说”。沃特斯没有将同性恋情感描绘成猎奇或单纯的反叛行为，而是呈现出一种温柔却坚定的爱。在阴谋诡计之中，两个女孩相互欺骗，却又因为彼此内心的温暖而相互爱恋。
> 
> 正如沃特斯自己所说：“相爱吧，那才是自由！”
> 
> 读完之后心情复杂。如释重负的是两个女孩终于结束了各自的苦难，感到悲哀的是在维多利亚时期女性地位的不公。但最打动我的，是结局——女人无论出身于什么家庭，有怎样的成长经历，都有追求自由的能力：自由地爱，自由地赚钱，自由地书写自己的人生。
> 
> 阴谋浩荡，而希望蠢动；骗局迷离，而爱欲丰盛。这或许就是《指匠》留给读者最好的礼物。

# 书评

> 小说分为三部，第一部以苏的视角展开，第二部以莫德的视角展开，第三部回归苏的视角。第一部分结尾处那个反转，突如其来，让人感觉“上了作者的当”。读到第二部分时，你才发现之前深信不疑的一切都需要重新审视。
> 
> 有读者形容这种阅读体验“就如同身临世间最伟大教堂最浩繁灿烂的穹顶之下”，醉心于那种对称却又在细部处处呈现不同的结构设置。每一处你以为看透的细节，都是作者精心布置的陷阱。`,feishuUrl:"https://my.feishu.cn/docx/NU2gd6iwToNMWlxcbibc7yXqnqg"},{id:"fs-ACtddaHEjoMxmgxGJ7kckSnsnHf",category:"reading",title:"咸的玩笑读书笔记",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"👤 作者：刘震云** 📚 类别：文学** ❤️ 推荐指数：⭐️⭐️⭐️⭐️⭐️** ✅ 阅读时间：五日** 📒 简介：** 这本书主要讲了在延津县城里，一个叫杜太白的文化人，在一次酒宴中，因为醉酒和校长就李商隐《夜雨寄北…",body:`> 👤 
**作者：刘震云**

> 📚 
**类别：文学**

> ❤️ 
**推荐指数：⭐️⭐️⭐️⭐️⭐️**

> ✅ 
**阅读时间：五日**

> 📒 
**简介：**
这本书主要讲了在延津县城里，一个叫杜太白的文化人，在一次酒宴中，因为醉酒和校长就李商隐《夜雨寄北》这首诗写作时，他的妻子是死是活这一学术问题，发生打架斗殴，并被人拍照发到网上，关了几天拘留所被学校辞退。
机缘巧合下他又成为了红白喜事的主持人并且因为他在延津算是很有文化的人，主持时喜欢引用孔子老子以及诗词歌赋，被人称为雅一派很多人花钱去请他。在这期间，他受儿子闪婚闪离的生活态度所影响，他也和他的妻子斩断了26年的吵闹，离了婚。然后她遇到了一个在按摩店工作的蓝颜知己，后来又遇到了，他现在的女朋友，是一个戏子。
就在他和现任女友终于

# 书摘

### 第 1 章

> 🔆 
【精彩片段】
只知道叨眼前的两粒米，是只鸡，不是只鹰。

【精彩片段】
大师总说苦海无边，又说佛法无边，两个无边，到底哪个更无边？
有边更无边，有边就是无边，无边就是有边。

【评论 & 感言】

> 🔆 
【精彩片段】
世上最可相信的是时间，时间相信的是变化。凡是说一个事情永远不变的，要么是无知，要么是骗子。


### 第 2 章

> ✨ 
【精彩片段】
任何事一开始都想凑齐，待凑不齐又自我安慰，万事古难全没有也就算了

【评论 
一时解决不了的矛盾可以等待，可以交给时间，给时间一点时间

> ✨ 
【精彩片段】P26
过去万把块钱都归自己支配，怎么结婚之后，自个儿能支配的钱突然缩水百分之九十，成了一千块钱了，而且这一千块钱还不是杜太白自己留下的，而是先把所有挣的钱交给她，又由她发给自己。没结婚他是自己，结婚之后咋沦为奴隶了，接着又想，将来所受的限制恐怕还不止钱的问题，举一反三，由此及彼，是事物发展的规律，也许奴隶的地位，会由钱，扩展和延伸到方方面面，钱归谁管看似是钱的问题，其实不是钱的问题，而是主权的问题，何况当年杜太白跟前妻在一起有过被奴役的历史，鉴古知今，彰往察来，眼见结婚之路是通往奴役之路，是通往独裁之路，杜太白有些害怕了。过往的历史教训还证明人物关系一旦确立，事后就很难改变了。


### 第 3 章

> 💎 
【精彩片段】

【评论 & 感言】

【评论 & 感言】

> 💎 
【精彩片段】


# 收获 & 感悟

> 记录全书阅读的心得和体会

# 书评

> 从多个维度分析、评价书籍

> 📊 飞书多维表格（请在飞书原文查看）`,feishuUrl:"https://my.feishu.cn/docx/ACtddaHEjoMxmgxGJ7kckSnsnHf"},{id:"fs-TpYmdYZZYolS1dxD03VcHTmknCc",category:"reading",title:"寻欢作乐",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"我发现要是有人打电话来找你，而你恰巧不在，于是他留下口信，请你一回家就打个电话给他，说他有要紧的事，那么这件事多半是对他要紧，而不是对你要紧。 天才来自无穷无尽的刻苦努力。 ——查尔斯·狄更斯 一个人一生中必须应付的一大…",body:`我发现要是有人打电话来找你，而你恰巧不在，于是他留下口信，请你一回家就打个电话给他，说他有要紧的事，那么这件事多半是对他要紧，而不是对你要紧。

天才来自无穷无尽的刻苦努力。

——查尔斯·狄更斯

一个人一生中必须应付的一大难题，就是应该如何对待下面这种人：他曾经一度和他们关系密切，而他对他们的兴趣在一段时间后淡漠了。如果双方在社会上的地位都很平常，这种关系的中断往往很自然，彼此之间也不会出现什么恶感，可是如果其中一方有了名望，局面就变得很难处理。

我们大多数人，在对别人于了什么卑劣的勾当之后，总对那个人心怀怨恨。

虚伪是一个人所能寻求的最困难、最刺激神经的恶习，它需要永不间断的警觉和精神的高度集中。它不像通奸或贪食可以在空闲的时间进行；它是需要付出全部时间从事的工作；它还需要一种玩世不恭的幽默。`,feishuUrl:"https://my.feishu.cn/docx/TpYmdYZZYolS1dxD03VcHTmknCc"},{id:"fs-Uy1YdeMpNo4SxqxW8QMcMb2LnEd",category:"reading",title:"《面纱》",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"👤 作者：毛姆【英】** 📚 类别：小说** ❤️ 推荐指数：⭐️⭐️⭐️⭐️⭐️** ✅ 阅读时间：5小时-7小时** 📒 简介：小说讲述的是19世纪20年代一对年轻的英国夫妇来到中国乡村生活的故事，书中的女主角凯蒂嫁…",body:`> 👤 
**作者：毛姆【英】**

> 📚 
**类别：小说**

> ❤️ 
**推荐指数：⭐️⭐️⭐️⭐️⭐️**

> ✅ 
**阅读时间：5小时-7小时**

> 📒 
**简介：小说讲述的是19世纪20年代一对年轻的英国夫妇来到中国乡村生活的故事，书中的女主角凯蒂嫁给了沉默寡言的医生沃尔特·费恩，却和已婚男子查理·汤森发生婚外情，被沃尔特·费恩发现以后，他展开了报复，带着凯蒂来到霍乱肆虐的偏远城镇，最后却不幸丧命于此，凯蒂则在经历了爱情、背叛和死亡以后，终于慢慢掀开生活的面纱，开始了精神上的成长。**
《面纱》写的是一个女人对爱情的幻灭，真正讲述的则是对人生的终极思考，其所揭示的爱情、婚姻都是虚伪的彩色面纱，把这层面纱解开，你就会感受到世界的辽阔和心灵的平静。

# 书摘

> 🔆 
【精彩片段】
一个人无论是在工作还是娱乐中，无论是在尘世中还是在修道院里，都无法找到安宁，安宁都只存在于人的灵魂中。

【评论 & 感言】
内心的平静源于无欲，可是谁又能真正做到无欲无求呢，但是我们可以通过信仰、身心灵、冥想等来达到片刻的安宁。

> ✨ 
【精彩片段】
我请求主赐予我内心的平静，主似乎给了我这样的回答：当你不再渴望它的时候，它就会来到你面前。

> 🔆 
【精彩片段】
这条河虽然流得很慢，却仍然有一种流动的感觉，它使人产生一种世事无常的悲凉感。它一切都会过去，它们会在世界上留下怎样的痕迹？所有人都像河里的水滴一样，相互之间挨得这么近，却又相隔那么远，汇成了一股无名的水流，奔向大海。既然世间的万物都是转瞬即逝，所有的事情都不重要，而人却重视那些十分琐碎的事情，让自己和他人都如此不快乐，难道不可悲吗？

> ✨ 
【精彩片段】
道，一些人在鸦片中寻找道，一些人通过上帝寻找道，一些人在威士忌中寻找道，一些人在爱情中寻找道。一切的道都是一样的，可它不会通向任何地方。

> 👒 
【精彩片段】
有时候，对他人撒谎是有必要的，可是不能欺骗自己，因为这样做就太可耻了。

> 👒 
【精彩片段】
道就是道路和行路人。这是一条永恒的道路，一切众生都沿着这条道路行走着，但是没有人创造它，因为它本身就是存在。它什么都是，又什么都不是。道生万物，万物都顺从着道，最后万物都回归它。它是一个没有角的正方形，一种耳朵听不到的声音，一个没有形状的图像。他是一张巨大的网，虽然它的网孔像大海一样宽，但是什么都不能从中通过。它是万物寻求庇护的圣所。它不在任何地方，但是你可以‘不往窗外看，就能了解事物发展的规律’。它教导我们，要无欲无求，让一切顺其自然。‘委曲反能求全，弯曲则能伸直’。失败是成功的基础，成功是失败的根源；但谁知道转折点什么时候回到来呢？；养丹田之气，可以让身体变得像婴儿一样柔软‘。战胜自己的人是伟大的。

> 👒 
【精彩片段】
——假如没有永生呢？想一想，如果死亡真的是万物的终结，那意味着什么。她们白白放弃了一切。她们被骗了。
——就算她们追求的只是虚幻，又有什么要紧的。她们的生活本身就是美好的。我有一个想法，使我们能够不厌恶地看待我们生活在这个世界的唯一东西，就是人们不时地从混沌中创造出来的美：人们画的画，谱写的音乐，写的书，过的生活。所有这些每种最极致的就是美好的生活，那是一件完美的艺术品。

> 👒 
【精彩片段】
我想要一个女孩，我想把她养大，不让她犯我犯过的错误。当我回收那个曾经的我，我就恨我自己。但我从来没有机会。我要抚养我的女儿，这样她就自由了，可以自立。我把她带到这个世界上来，爱她，抚养她长大，不是为了让某个男人和她睡觉。

> 👒 
【精彩片段】
我希望她能无所畏惧，坦诚待人。我希望她成为一个独立于他人的人，由自己支配，我希望她能自由地生活，比我活的更好。


# 收获 & 感悟

> 恋爱脑很适合读这本书，她（他）可以从作者笔下感受到人性的多面，爱你的时候，他可以各种甜言蜜语，各种伪装，但是，一旦触犯了他的底线，他会毫不犹豫的拍拍屁股走人。或者被各种拿捏，例如男主。

> 女人不要做任何人的附属品，可以通过工作，或者做自己感兴趣的事情，去旅游，去逛街，去运动。总之让自己的生活充实起来，精神世界富裕，才不会因为一些鸡皮蒜毛的小事影响自己，不会变的斤斤计较，沉溺于情爱之中。去感受一些人世间的大爱，更加爱自己，才会做自己情感的主人。

> 对于刚刚成年，不知情爱滋味的年轻人，请擦亮你的双眼，多去听听别人对那个人的评价，多听听长辈的意见，毕竟他们的阅历以及他们旁观者角度还是有益于我们更好认清。爱别人之前请先学会爱自己。

> 对于要结婚的新人，婚前一定要了解清楚，你是否了解对方，也许婚后可以培养感情，但是三观不合只会让彼此折磨，要么退让，自己受委屈，要么紧逼，彼此怀恨。有些人说结婚就是要头脑一热，趁热打铁领证，不然很可能拖很久就不了了之了，但是千万不要因为一些旁观因素，比如说年龄，比如说和别人赌气，比如说为了父母，就没有认清楚对方人品匆忙决定。学会爱与尊重！

# 书评

毛姆对于人物描写非常的细腻，通过外貌，语言，动作和心理，可以很快的让人物形象立住，并且通过故事推进逐渐丰满。

小说基本可以分为三个阶段，首先是在香港女主凯蒂和她的情人偷情被发现后到她掀开情人的伪君子爱情面纱；她和丈夫前往湄潭，看到了更广阔的天地，见识到修女们无私大爱，她精神上得到了觉醒，找到了自我价值，直到她的丈夫去世后，她感受到了灵魂的自由；最后是她回到香港，并逃离回英国，和自己和父亲的和解阶段。

在书中每一个角色都可以拿出来细品，比如女主的母亲，她渴望权利，却又很吝啬，她希望通过对丈夫的控制来达到自身社会地位的提升，并且将女儿们作为攀附权贵的筹码，来拉拢贵人，发现女儿不中用了，就会各种嘲讽，甚至认为养女儿是在浪费钱，真是难以想象！所以女主在男主求婚时，一想到原生家庭这些就当即答应了。不过我想女主即使按照她和她母亲的想法找到了一个她们觉得很不错的男人，她大概率也不会幸福，毕竟她的母亲可能会因为各种事情来巴结，让她在婆家地位处于低级，而且她可能会像其他贵妇一样只能看到自己的壹方天地，无法蜕变，但谁有知道呢！

而女主的父亲，就是一个很可悲的人物，他被妻子拿捏，被女儿轻视，在家中只是拿来当做赚钱的工具，如果没有赚到很多就会被瞧不起。所以他不爱他的女儿们，同样他的女儿们也不爱他。在第三阶段女主回家时，即时他的妻子已经去世了，这位六十多岁的老人想在自己书房抽根烟都要征询他女儿的意愿。在他想要逃离，享受自由时，女儿一句请求，她也会为了责任而放弃自己。幸亏女主醒悟了和她的父亲和解了，不然我想这个老头到死都是压抑的。

男二在偷情被发现前后通过一些微表情，和语言动作的描写，可以暗示出他渣男、自恋、官僚伪君子的属性，还有很多渣男语录，比如哦亲爱的，男人在热恋时说的话，是不能完全相信的；你现在是让我跟我非常依恋的妻子离婚，再以毁掉我的事业为代价跟你结婚，这是在为难我；

其实女主即使闹翻，跟他在一起了，应该也不会幸福，正如他说的那样，这段感情影响了他的事业，所以他们以后也只会生活在互相埋怨中。

他从恼怒女主遇事总是哭泣，到决定用官威压住男主后沾沾自喜，对女主甜言蜜语；后来在女主面临抉择时，他自以为是的说着两全其美的方案，到明确说不可能和女主结婚。一系列操作简直是渣男的教科书级别操作，毕竟他之前应该也是有过几段的，得心应手了。通过作者细腻的描写，一个自恋自负，圆滑，总是让自己处于很有魅力状态的花蝴蝶形象立住了。

女主在整本书中心理变化非常大，从刚开始惊恐，到怀疑丈夫是不是真的发现，然后到心安理得，自我安慰，认为丈夫总归为了面子为了爱，会原谅她，到后来听说丈夫想和她谈谈时心咯噔一下，到后来去找情人谈判时，从不安慌乱到错愕到她去往湄潭初期非常的悲伤，到摸黑男二的形象，再后来她去修道院看到大爱后，发现了更广阔的天地，心灵和精神的到了蜕变。

她从之前信誓旦旦说情人会离婚和她在一起，到终于认清了情人的真实想法，她经历了爱情的背叛。她无疑是很多婚外情女生的写照，总是对男人的话信以为真，而实际，她是会被随时抛弃的那一个。

后来她通过在湄潭见到了死去的乞丐，为了信仰远离故土在霍乱中奉献自己的修女们，还有一个她精神导师朋友，所以她找到了自己内心的平静，与自己和解了。

而她的丈夫是一个我没有看很透的人物，他应该是很睿智的，虽然他其貌不扬，但可惜他恋爱脑，爱女主爱的很卑微，即使知道女主就是一个肤浅，平庸的女人，但还是在她出轨后不愿意抛弃，在得知妻子怀孕，而孩子不确定是不是他的时候，不愿意原谅自己，自杀（作者写的很隐晦，但是我觉得应该是的）。而他的遗言是"死的是那条狗"，原谅我反复看了很多遍都不理解，虽然译者注释了，但是我还是不理解为什么狗死了，怎么死的🐶

女主的父亲，男主的朋友们对他都评价不错，只有女主看不到他的好，湄潭那一段我一度以为女主和男主会和好，但是没想到，女主只是意识到他是伟大的，但就是不爱，甚至在男主死的时候，很平静，或许爱和不爱就是很明确吧。而男主到死都怀恨，无法原谅他自己，因为他爱她。一个陷入了牛角尖，无法得到自我救赎的可怜人。

而最最最令我想不到的有三处剧情发展和人物

一个修道院院长，法国比较尊贵的家族的独生女，很有教养，有一种淡淡的压迫感。她带领修女们跑到万里外的中国，从零建成她们栖息的修道院，很有能力。我不理解她为了信仰抛弃家人和富贵，也不理解在男主死后，看到女主想继续在修道院帮忙，可是她却拒绝了，这我不是很理解，基督徒不应该很喜欢帮助别人么，为什么不愿意留下她！

第二个是多萝西，男二的妻子，我不知道她是太过蠢笨，没有发现丈夫和女主的关系，还是太过聪慧笃定，知道即使丈夫出轨也离不开她，所以在女主回来后迎接她，并接到了家里

第三是女主，就真的是气，她从湄潭回到香港后，看到了男二后，又又又没把持住。所以她最后应该是逃离回英国。

总之这本书还是很值得细品的，最后用女主的话作为结尾吧，我希望她能无所畏惧，坦诚待人。我希望她成为一个独立于他人的人，由自己支配，我希望她能自由地生活，比我活的更好。`,feishuUrl:"https://my.feishu.cn/docx/Uy1YdeMpNo4SxqxW8QMcMb2LnEd"},{id:"fs-TlaTdq5WSoRQpsxpyxScupVcnlb",category:"reading",title:"读书笔记思维导图",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"🧠 飞书思维导图（请在飞书原文查看）",body:"> 🧠 飞书思维导图（请在飞书原文查看）",feishuUrl:"https://my.feishu.cn/docx/TlaTdq5WSoRQpsxpyxScupVcnlb"},{id:"fs-H4FndVT9PogOq7xEd5zczsYMnRg",category:"reading",title:"《反向学习》原文整理（前言＋导论＋第一章）",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:'来源：微信读书截图（共 42 页），涵盖"前言""导论""第一章 反向学习"。 说明：以下为对截图内容的文字整理，尽量保留原书结构、标题、金句与引文；个别截图中的水印/反光造成的错字已做顺句处理，但不改变原意。 前言 这…',body:`> 来源：微信读书截图（共 42 页），涵盖"前言""导论""第一章 反向学习"。  
> 说明：以下为对截图内容的文字整理，尽量保留原书结构、标题、金句与引文；个别截图中的水印/反光造成的错字已做顺句处理，但不改变原意。


## 前言

这是一本为成人而写的的学习书。这里的成人有双关的意义：一方面指本书的目标读者是"成人"，另一方面指学习的目标是"成人"。

### 成年人与成熟的人

我们通常所说的"成人"，指成年的人，表示在年龄上成人，是生理和法律意义上的"成人"。"成人"还有另一种含义，指成熟的人，表示在思想上成人，是心智意义上的成人，可以跟认知事物的真正区别在一起……那么真正的成熟是在思想上成人，在理想的情况下，这两种含义都应该重合。一个人在年龄上成人，也应该同时在思想上成人。

成年是容易的，成熟是困难的。每个人都会长大，但不是每个人都能成人。怎样才能算在思想上成人呢？我用两个心理学家对成熟的研究。

心理学家霍华德·加德纳总结了人的四个心智发展阶段：二元对立、力求公平、相对主义、个人整合。他也将这四个阶段分别称为五岁儿童、十岁儿童、十五岁青少年、二十五岁左右成人的心智。

> GARDNER H. (2004). Five minds for the future[M]. Boston: Harvard Business School Press, 2011.

这四个阶段的阶段大致如下：

- **二元对立**就是执着于好人与坏人的对立、正确与错误的对立、自我与他人的对立；
- **力求公平**则是认为没有绝对的好与坏与对错，比如说好人也有缺点，坏人也有优点；
- **相对主义**则从更加多元的价值观看待世界；
- **个人整合**能够综合两种明显对立的情感：一方面，明白各种价值观是相对的，另一方面，在一个特定的情形下又需要选择一种更为适合的立场。

加德纳认为，个人整合是最为成熟的心智，但是很少有人能达到。有些成年人一直处于五岁儿童的心智，以自我为中心，还有些人则一直没有超越十五岁儿童的看法。

另一位心理学家（与加德纳同在哈佛大学教育研究生院任教）罗伯特·凯根把人的心智发展分为四个阶段：以我为尊、规范主导、自主导向、内观自变。

这四个阶段大致可以这么区分：

- **以我为尊**就是像加德纳所说的二元对立基本是一回事；
- **规范主导**就是通常所说的社会化阶段，把社会制定的种种规则内化于心，成为自己想要的那个组织或者群体；
- **自主导向**是能够从多个角度看问题，又有自己的观点；
- **内观自变**则是能够利用他人的观点来持续提升自己的思维系统。

在凯根模型中，内观自变是最成熟的心智，是很少有人能达到的境界。实际上，根据凯根及其学生的研究，能够达到自主导向的人不多，连一半都不到。

### 参考答案思维方式

关于成人的心智发展阶段，还有其他一些说法。加德纳模型、凯根模型和其他模型，尽管各有不同，但是仍然有很多共同点。

我们应该看到，成熟的人需要有自己的声音，而不是只会复制、粘贴别人的观点。如果都是这样，那就跟一个人设定好的计算机差不多，又怎么能称为一个成熟的人呢？

这一点，在加德纳模型和凯根模型中都有体现。在加德纳模型中，自己的思考发育在相对主义阶段，而在个人整合阶段；在凯根模型中，自己的思考形成于自主导向阶段，壮大在内观自变阶段。

我也试着思考一下，把成人的心智发展分为三个阶段：

- 第一个阶段是**"标准答案思维方式"**。这时，我们把家庭、学校、社会所教给我们的种种当作标准答案（相当于凯根模型中的规范主导阶段）。
- 第二个阶段是**"参考答案思维方式 1"**。这时，我们把之前（及今后）家庭、学校、社会所教给我们的种种当作参考答案（相当于加德纳模型中的相对主义阶段），并形成自己的答案（相当于凯根模型中的自主导向阶段）。
- 第三个阶段是**"参考答案思维方式 2"**。这时，我们把自己的答案也当作参考答案，随着情境的不同而不断修改（相当于加德纳模型中的个人整合阶段），并尝试着认知和更新（相当于凯根模型中的内观自变阶段）。

参考答案思维方式 1 和 2 的区别在于，前者把自己的答案视为标准答案，而后者把自己的答案视为参考答案。

所以，参考答案思维方式 1 其实也可以称为标准答案思维方式 2。但是，产生自己的答案其实是相当了不起的事情，是意识到自己对自己负责的一个飞跃，所以还是称为参考答案思维方式 1 更好一些。可以理解为，成人有两个阶段，这是成人第一阶段。

我用我的三阶段模型来"兼容"其他一些关于成人的说法。

关于成人还有这样一个三阶段模型：依赖、独立、互相依赖。这可以理解为人际关系的三个阶段，也可以理解为思想成熟的三个阶段。它跟我的三阶段模型可以一一对应：

- "依赖"对应"标准答案思维方式"，这时，我们依赖于家庭、学校、社会提供的标准答案；
- "独立"对应"参考答案思维方式 1"，这时，我们形成了自己的答案，在思想上独立了；
- "互相依赖"对应"参考答案思维方式 2"，这时，我们意识到自己的答案也是一种参考答案，其他人的答案是互相依赖的，可以在它们的启发下更新和改变。

哲学家理查德·罗蒂这样说成人：

> 作为成年人的标志之一就是懂得：没有任何书会向我们揭示宇宙的秘密或者生命的意义，这意味着认识到，所有那些有趣的书籍都只是我们终有一天有能力撰写的梯子上的一些梯级而已。

罗蒂说的当然不是年龄上的成人，而是思想上的成人。罗蒂所说的成人的标志就是参考答案思维方式。这个标志——所有的书都只是在提供参考答案。

语言学家史蒂芬·平克这样说成人：

> 不立刻做出任何反应，是一个人已经到达成年的表示。

为什么"不立刻做出任何反应"是成人的标志呢？我同样可以用我的三阶段模型来理解。

一个人如果对其他人的言论、行为立刻做出反应，往往是依据了某个被认为真的标准答案。这个标准答案可能来自外界（标准答案思维方式），也可能来自自己（参考答案思维方式 1）。你如果把自己的答案当作参考答案（参考答案思维方式 2），就不会立刻做出反应了，即使对方的做法跟你的答案完全相反，你很可能在做出反应之前先问一个问题："你那么做，理由是什么呢？"

所以，平克所说的可以对应我的三阶段模型中的第三个阶段：参考答案思维方式 2。

### 用一生来学习"成人"

你可能听说过"学习型组织"这个概念，这个概念能够在企业界流行起来，要归功于彼得·圣吉，一位具有全球影响力的管理大师。

我跟彼得·圣吉有过一些交往，在一次比较深入的对话中，他这样对我说：

> 人们通常认为人一生下来就成人，但是我认为，在所有的修行传统中，不仅仅是佛家、道家，也包括西方所谓的修行传统中，最基本的思想是，你花费你的一生来成人。你不是生而为人的。

这段话对我影响很大，这个思想其实也暗含在了加德纳模型和凯根模型之中：我们花费一生来学习"成人"。

### 成人首先需要反向学习

成人是目的，学习是道路，本书提出的学习力的五项修炼是具体行动。

这五项修炼是：

1. 反向学习
2. 参考答案思维方式
3. 聚焦
4. 模式化学习
5. 深层迁移

这五项修炼是紧密联系在一起的。如果只选择最重要的一项，在其他场合，我可能会选择深层迁移。但其实选择任何一项，并以它为中心把其他几项联系起来，逻辑上都能自洽。

我在这个前言中主要强调了参考答案思维方式。但是，培养参考答案思维方式，要求我们"成年人首先要进行反向学习"。所以，成年人首先要进行反向学习，再进行其他学习。

我们也可以反向学习这项修炼为中心，把其他几项修炼串联起来。

所谓反向学习的重点，就是做减法学习：不是一味往头脑里添加知识，而是去除那些错误的知识；而在去除错误知识的时候，反而是在补充新的知识。如果只做加法，那么补充的新知识与旧知识混为一体，新旧难辨。

由于幼时学习的最大的坏习惯就是标准答案思维方式，为了替代它，我们要培养参考答案思维方式（第二项修炼）。

幼时学习的另一大坏习惯是发散式学习，即弥散短板、全面发展，它必然导致学习得多而不深。为了替代它，我们要聚焦（第三项修炼）。

幼时学习的又一大坏习惯是碎片化学习，它与发散式学习是"相辅相成"的。大多数人都认为碎片化学习，学到的知识是一片"散沙"，是一堆不相关的知识碎片。为了替代它，我们要进行模式化学习（第四项修炼），要在头脑中建立一棵模式树。

为了替代学而不问、学而不用的坏习惯，我们要进行深层迁移（第五项修炼）。

我们可以把参考答案思维比作指向的手指：月亮只有一个，但是手指却时时不同，所以不能把手指错当成是月亮本身，而是要看到手指所指向的方向。在本书里，我把五种不同的学习的关系，也就是不同指向的手指的关系做了区分。你可以理解，这些是在不同的时刻，指向一个月亮的手指。

最后总结一下，真正的学习者用一生的时间来学习"成人"。具体来说，他们做这五件事情：反向学习、参考答案思维方式、聚焦、模式化学习、深层迁移。


## 导论　学习＝我知道＋我不知道

我主要的工作是，给企业管理者讲课。我喜欢问他们这样一个问题：管理者最重要的是什么？你会怎么回答这个问题？试试看。

### 管理者最重要的能力

对这个问题，我听到过各种各样的回答：有人说是沟通能力，有人说是解决问题的能力，有人说是发现问题的能力，还有人说是协调能力、战略思考能力、用人的能力……

上面这些回答，都有一定的道理，不过还不够好。

如果你能够这么说，说明你对管理工作的本质已经比很多人理解得更清楚了。但是这还不够，你还要具体回答怎么看情况。

如果我来回答这个问题，在具体说"怎么看情况"之前，我会先介绍一个模型——管理者三大能力模型。这是管理学者罗伯特·卡茨在 20 世纪 50 年代提出来的，现在几乎每一本管理学教科书都会写到它。

> KATZ R L. Skills of an effective administrator[J]. Harvard Business Review, 1974, 52(5): 90-102.

卡茨指出，每个管理者都需要具备三方面的能力：

- **技术能力**：与具体工作内容相关的专业能力；
- **人际能力**：与人交往相关的能力；
- **概念能力**：从整体上、本质上思考问题的能力。

这个模型的关键内容是：随着一个人职位的升高，技术能力越来越不重要，概念能力越来越重要，而人际能力一直都比较重要。

我很喜欢这个模型，因为它很大程度上把握住了管理者能力的本质。

这个模型也符合大多数管理者的经验——我在对成千上万的管理者讲过这个模型时，还没有站出来反对这个模型的人，倒是很多人用亲身的经历印证了这个模型。

前面我列举了一些对"管理者最重要的能力是什么"的回答，包括沟通能力、解决问题能力、发现问题的能力、协调能力、战略思考能力、用人的能力。现在看来，管理者三大能力模型是更好的答案，因为在这些答案里，用人的能力包含在人际能力之中，解决问题的能力和发现问题的能力都是技术能力，沟通能力是人际能力的一部分，战略思考能力则是概念能力的一部分。

而且，管理者三大能力模型之所以是更好的答案，还因为它告诉我们"怎么看情况"：

- 如果你是一名**高层管理者**，这个模型告诉你：概念能力最重要，你需要培养大局观和战略思考能力；
- 如果你是**中层管理者**，这个模型告诉你：人际能力最重要，你需要处理好上下左右的关系；
- 如果你是一名**基层管理者**，这个模型告诉你：技术能力最重要，你需要能够解决工作中的日常问题。

### 学习力是元能力

对于管理者最重要的能力是什么这个问题，我还有另外一个答案：学习力。

这个答案也有其他人提供过。比如，管理学家沙因就这样说：（略）

有意思的是，我可以从管理者三大能力模型把这个问题推导出来。

管理者的三大能力从哪里来？显然，尽管有些能力有天生的成分，但是大部分需要通过后天学习得来。比如，技术能力、人际能力和概念能力的掌握方式是不一样的，人在不同的阶段、不同的职能领域，需要用不同的方法去学习不同的能力。显然，这对一个人的学习力提出了很高的要求。

也就是说，如果没有很强的学习力，你很难从一个基层管理者顺利地转化为一个高层管理者。

学习力不仅对管理者很重要，对所有人而言，它都是最重要的能力。

管理者的三大能力，其实也是每个人都应该具备的三大能力。技术能力等同于我们通常所说的情商，概念能力等同于通常所谓的智商。智商、情商和财商是怎么来的？里面有天生的成分，但是大部分都可以通过学习来提升。

学习力其实是一个人的**元能力**。

所谓元能力就是关于能力的能力，学习力是一种特殊的能力，其他能力在很大程度上都依赖于这种能力，所以它是最重要的能力。你能培养其他能力，除了先天和运气的因素，主要靠学习力。没有学习力作为基础，其他能力就是空中楼阁，难以成为现实。

未来学家阿尔文·托夫勒这样说：

> 未来的文盲不是那些不识字的人，而是那些没有学会如何学习的人。

这两位未来学家展望未来，强调学习力的重要性；我这个"现实学家"则盯着现实，发现很多孩子在学校里没有学会如何学习，等到孩子变成大人，绝大多数人并没有具备学习力。

这是我的亲身体会。我是当年四川省的高考状元，在学校里一直都是好学生，但是我到 30 岁之后，才逐渐开始懂得如何学习。

学习力跟你在学校里的成绩关系不大，这既是坏消息，也是好消息。

坏消息是：学校可能没有培养你的学习力，甚至还扼杀了你的学习力。

好消息是：即使你在学校里不是好学生，同样也可能培养出学习力。

### 学习力第一公式

关于学习，如果你只能记住一个道理，你应该记住这一个：你能够学到什么新知识，在很大程度上取决于你已经知道些什么。

教育心理学家戴维·奥苏贝尔在 1968 年就说过：

> 如果一定要把所有的教育心理学总结成一句话的话，那么我会说：影响学习的唯一最重要的因素就是学习者已经知道了什么。

2000 年出版的《人是怎样学习的》被认为是"学习科学这个新兴跨学科领域的一本集大成式的论著"。

从一般的意义上说，现代学习观就是人们用他们已经知道和相信的知识去建构新知识和对新知识的理解。

这两句话都是在讲述同一个大道理，可以说是关于学习最重要的道理。我把这个道理变成了一个公式，称为"学习力第一公式"：

> **学习 ＝ 我知道 ＋ 我不知道**

这个公式中的"我知道"，就是已有知识；"我不知道"就是需要学习的新知识；而公式中的加号，就是建立联系。

尽管我们用了数学中的加号，但这并不是真正的加法，不能应用加法交换律——公式中的"我知道"和"我不知道"这两项不能交换位置，人们在学习的时候，一定是带着已有知识进行的。也就是说，"我知道"一定在先，在加号的前面。

这个公式可以解释很多学习现象。

比如，为什么读同一本书，听同一门课，有的学生收获很大，有的学生什么都没学到？传统的解释可能是他们用功程度不同，而根据学习力第一公式，更好的解释是他们的已有知识不同，以及用已有知识跟新知识建立联系的方式不同。

比如，为什么说因材施教是很重要的教育方法？就是因为每个学生已有的知识不同，想要做到因材施教，必须考虑到这些不同。

学习力第一公式所蕴含的道理，尽管说起来好像是个简单的公理，但在学习科学的历史上，它是佼佼者，所以《人是如何学习的》这本书才会那么强调这一点。所以，传统的灌输、填鸭式的教学方法，是低效的、不科学的，是需要被替换的。

之所以称为"第一公式"，是在第一性原理的意义上强调这个公式的重要性。比如，从这个公式可以推导出我所强调的学习力的五项修炼，也就是本书的主要内容。

### 学习力的五项修炼

学习力的五项修炼是：反向学习、参考答案思维方式、聚焦、模式化学习、深层迁移。

我把它们叫作学习力的五项修炼。当然，也可以把它们叫作五个方法或者五个习惯。我之所以更多地称之为五项修炼，主要是强调"修炼"这个词的两个内涵：

- 它们做起来并不容易，需要付出艰苦的努力；
- 它们需要长期坚持地做，才能成为习惯。

本书的核心内容就是学习力的五项修炼。我先简单介绍一下这五项修炼。

**第一项修炼：反向学习**

我们通常所说的学习（learning）一般指的是增加知识的学，这其实只是学习的一种，可以称为正向学习，或者说是加法式学习。

所谓的反向学习（unlearning），也可以说是减法式学习，就是去除大脑里错误、过时、低效的知识。反向学习就是"有意识地忘记"一些知识。

反向学习的重要性，可以从学习力第一公式推导出来：对"我不知道"的知识的学习，需要建立在"我知道"的知识的基础上。如果你的旧知识是靠不住的，你在此基础上学到的新知识也将是靠不住的。所以，我们需要对靠不住的旧知识进行反向学习。

每个人需要反向学习的知识肯定是不一样的，但是，我还是发现了一些共性。大多数成年人对于"学习"是有误解的。他们需要对"关于学习的知识"进行反向学习。

在成年人的大脑里，有四个关于学习的重大误解，而且这体现在他们的行动上，变成了四个坏的学习习惯，分别是：标准答案思维方式、弥散短板全面发展、碎片化学习、学用脱节。

怎么针对这些坏习惯做减法呢？我们可以用加法来做减法。去除坏习惯的最好方式是养成替代它们的新习惯。学习力的后面四项修炼就是替代这些坏习惯的新习惯。

**第二项修炼：参考答案思维方式**

所谓参考答案思维方式，就是既要学习已有的答案，把它们作为参考，但是又不能把它们作为标准答案，即不能生搬硬套。

毛泽东经常引用孟子的一句话：尽信《书》，则不如无《书》。

这里的《书》本来指的是《尚书》，因为所有的书本知识，包括《书》都只包括了参考答案。毛泽东用这句话来反对把书本当作标准答案。

当然，参考答案思维方式还包括更多的内容。本书介绍参考答案思维方式的六个主要策略：洞见分类、标准答案、互动学习、注重过程而非结果、发现隐含的假设、反过来想。

华为创始人任正非在回答"怎样学习华为的管理哲学"时是这样说的：

> 在这个参考学习中，不应该有标准答案，站在左边、右边的人都是正确的……华为的价值观只能是相对正确，你可以反对华为的价值观，在反对的过程中可以更加深刻地认识它。

任正非的回答既体现了参考答案思维方式，又指出了培养这种思维方式的一种策略，就是前面列举的六种主要策略之一的互动学习。

参考答案思维方式跟学习力第一公式的关系是这样的：如果一个人把"我知道"作为标准答案，就难以学习跟它不一样的"我不知道"；如果一个人把"我不知道"作为标准答案来学习，就难以产生创造性的想法。

**第三项修炼：聚焦**

学习应该学得多，还是应该学得妙？这好像是一个不用回答的问题，因为在大多数人看来，知识就是越多越好。但是在很多擅长学习的人看来，学得多往往意味着学得浅，学得少才能学得深。所以，会学习的人一般主张学得少，也就是聚焦。

著名物理学家、诺贝尔奖获得者理查德·费曼承认自己是"偏科"的。他给一个想问自己孩子的家长回信说：

> 让他去吧，让他去做这种偏执的学习。针对自己感兴趣的东西，全心全意投入，而不管其他科目。当然，我们目前的教育系统和学校的制度，会给他最低的评价，因为这只会得到一个知识点很多、但每件事都只知道一点点的平庸的人。

当年轻的毛泽东汇报他在大学的考试成绩时，老师对他说：

> 一个人的精力是有限的，你不能把精力平均地用在每一门功课上，你应该选一门你最喜欢的，因为这最值得学习，在一门学科上，你要去有所突破，理解得更深一点，洞悉它。

学习力第一公式跟聚焦关系密切。尽管"学习＝我知道＋我不知道"，但这并不意味着"我知道"的部分越多越好。因为，如果你的"我知道"只是多余而浅的知识，你的"我知道"是低质量的，就很难高质量地吸收"我不知道"。你的"我知道"需要是高质量的，如此才能发挥"知识的第一推手"的作用。

聚焦其实就是要学得少。本书介绍聚焦学习的六个策略：聚焦不变、聚焦解决问题、聚焦实用、聚焦擅长、聚焦专题、聚焦作者、聚焦样本。

**第四项修炼：模式化学习**

专家和新手最重要的区别，就是专家掌握模式知识，而新手只掌握碎片知识。专家能够看到事物的共性、整体和本质，而新手只看到事物的个性、部分与表象——这是两种不同的学习方式：模式化学习与碎片化学习。大多数人的学习是碎片化的，而真正有效的学习是模式化的。

模式化的重要性体现在两个方面。

第一是知识静态的整体与部分层面：模式知识是关于事物的共性、整体和本质的知识，而碎片知识是关于事物的个性、部分与表象的知识。这也是更重要的一个方面。

第二是知识动态的结构层面：碎片化知识好像是一堆散沙，而模式化知识好像用一根线（知识线）把它们串了起来，挂在墙上成为一串。

毛泽东曾经做过这样一个比喻：

> 有了学问，好比站在山上，可以看到很远很多的东西。没有学问，如在暗沟里走路，摸索不着，那会苦煞人。

但是，毛泽东这里并没有把话说完整，并不是所有学问都能让你看得"很远很多"。为什么呢？我们在读毛的另外一句话，就可以知道原因了：

> 学习与其思想，不仅是要掌握它别的个别结论，而是要掌握它的立场、观点和方法。

也就是说，你要学模式，而非碎片。并不是所有知识都能让你站得更高一层，模式化学习才能让你站得更高。有些知识比其他知识更重要——模式知识比碎片知识更重要。

管理学者赫伯特·西蒙，也是信息管理领域最重要的学者，他既是芝加哥大学政治学博士，对组织理论做出过重要贡献，同时又是获得诺贝尔经济学奖、图灵奖和美国心理学会终身成就奖的学者。他在学习上最大的特点，就是重视模式化学习。他经常以沙滩上的蚂蚁为例，讲蚂蚁的行动看似很复杂，其实只是遵循少数几个模式。

本书会提出一个模式化学习金字塔模型，并介绍模式化学习的六种策略：书中离群写模式、用模式吸收碎片、用模式分析案例、用模式比较模式、搭建一棵模式树、建立模式的树林。

**第五项修炼：深层迁移**

学习不仅是"学"——掌握知识，而且是"习"——应用知识。对小孩子来说，学习是目的，或者是为了读书而读书。但是成年人学习知识的主要目的是用于自己的工作和生活中。成年人如何将知识转化为工作和生活的能力？这就涉及深层迁移。

学习可以分为两种：一种是相对低效的，就是在一种情境中学到的知识，在同一种情境中加以应用；另一种则是相对高效的，在学习理论中有个专门术语叫作"迁移"，指把在一种情境中学到的知识，应用到另一种情境中。

有人这么评价美国第一位获得诺贝尔经济学奖的学者萨缪尔森：

> 萨缪尔森从生物学、数学、机械工程学借用大量概念与工具，套用于经济分析中。

企业家任正非是真正懂迁移的。他曾经是军队中的工程师，创建华为之后，他把工程和军事中的很多思想，用到了对华为的管理上。

然而，真正懂迁移的只是少数人。学者们研究发现：学习上的有效迁移很难实现。

你也许已经从自己的经验中得出了这个结论。你很可能有过这样的体会：一方面，你从小学到大学，不知道学了多少知识；另一方面，你在现实中遇到了问题，又不知道该怎么解决。还有些时候，你真的进行了迁移，却发现出了问题！

有一个真实的例子：一家连锁餐饮企业的一个店长去海底捞学习，学习回来后，要求自己店里的服务员也像海底捞一样给顾客递眼镜布……这个店长没有意识到，海底捞是火锅店，顾客的眼睛很容易因为火锅的热气而起雾，而他们所在的餐饮企业是快餐店，不存在这个问题。

我们需要区分两种迁移：一种是**表层迁移**，直接把碎片知识应用到另一个情境中；另一种是**深层迁移**，把碎片知识背后的模式提取出来再应用到新的情境中。

表层迁移是"鱼"，深层迁移是"渔"，也即更高效。深层迁移只有两个步骤：把知识背后的模式提取出来，再加以应用。

我为深层迁移专门发明了一个工具——**四问学习法**，四问学习法由四个问题组成：

- 我听到什么？
- 我想到什么？
- 我变成什么？
- 我用到哪里？

### 结语

后文将详细讲解如何用四问学习法进行深层迁移，包括对刚才那个例子的分析。

学习力的五项修炼是一个有机的整体，它们彼此联系、相互支持：深层迁移以模式化学习为基础，模式化学习以聚焦为前提；参考答案思维方式及聚焦、模式化学习和深层迁移四项修炼是互补的关系。

在这五项修炼中，如果要选择最重要的一项，我会选择第五项修炼——深层迁移。一方面，它强调学习"用"的部分，这对成人来说是更为重要的部分；另一方面，它以其他四项修炼为基础，包含了其他四项修炼。

下面，我们就从第一项修炼——反向学习开始，踏上我们成为卓有成效的学习者的漫漫征途。我们做这五件事情：反向学习、参考答案思维方式、聚焦、模式化学习、深层迁移。


## 第一章　反向学习

反向学习指有意遗忘头脑中已有的知识，这个概念很少被拿出来讨论，以至于当著名咨询顾问彼得·圣吉等人谈到反向学习时，中文版将其翻译为"不学习"。这个概念对成年人非常重要，是成年人学习的第一项修炼。

### 反向学习的几个要点

我先讲几个关于反向学习的要点。

**第一，对孩子们来说，正向学习（增加知识的学习）更重要，但是对成年人来说反向学习非常重要。**

小孩子就像一张白纸，已经积累的知识非常少，这时候做加法、增加知识更重要。而成年人的大脑里已经积累了很多错误的、过时的、低效的知识，需要先做减法。

有学者很早就认识到了反向学习的重要性：

> 早在灌输进头脑的虚幻的东西和由此产生的偏见所造成的损害是令人难以置信的。在往后的日子里，世事和人生所给予我们的教训就不得不主要用于清除这些偏见方面。

古希腊哲学家安提西尼被问及需要做的事情是什么时，回答："学会忘记坏的东西。"

古人明白的道理，今人反而忽视了。即便是专门以成年人为目标读者写的讲学习方法的书，对反向学习也不够重视。我认为原因之一是：大多数研究学习的研究者研究的是学校里的学习，而市面上大多数学习书要么由这些学者写成，要么基于这些学者的研究写成；而学校里的学习就是加法式学习，没有减法式学习。

**第二，在现在这个时代，反向学习尤其重要。**

很多人把这个时代称为 VUCA 时代。所谓 VUCA，指的是易变性（volatility）、不确定性（uncertainty）、复杂性（complexity）、模糊性（ambiguity）。

在这个易变、不确定的时代，过去管用的知识现在不一定管用，今天正确的答案明天不一定正确。在这样的时代，反向学习比正向学习更加重要，至少是同样重要。

沃顿商学院教授亚当·格兰特指出：

> 智力一直被视为思考和学习的能力，但是，在一个变化莫测的世界，还有一项更重要的认知工具：重新思考和消除之前所学的能力。

所谓的"重新思考和消除之前所学的能力"，就是反向学习。

**第三，反向学习很难。**

反向学习要求我们"忘却之前所学"，可以将其比喻为用橡皮擦掉原本里的知识，这样的事情很难。也许有些知识像是白纸上的铅笔字，比较容易擦掉，但可以肯定的是，也有些知识像是写在纸上的钢笔字，甚至是刻在木头上的字，是很难擦掉的。

著名经济学家凯恩斯说过这样的话："介绍新观念倒不是很难，难的是清除那些旧观念。"文化研究学者斯图尔特·霍尔也指出："反向学习比正向学习更难。"

**第四，反向学习是有不同层次的，有些反向学习比另一些反向学习更重要。**

反向学习有不同层次，是因为知识是有不同层次的。关于知识的不同层次，有多种区分方法，其中一种就是碎片知识和模式知识之分。

所谓碎片知识，可以说是单点知识，是一个孤立的知识点，或者是"一点"知识；所谓的模式知识，如我们通常所说的规律、原理、规则、理论，是"一套"相互关联的知识体系。

"美国的首都是华盛顿"，这就是一个碎片知识；而我在这里讲的"反向学习"这个词，是一个模式概念，是一个"套"知识或者概念体系，包含多个相互关联的要点（比如前面已经讲了三个）。

如果以前曾认为"美国的首都是纽约"，那么你需要反向学习，把这个错误的碎片知识擦掉。你之前也可能认为"学习就是增加知识"，换句话说，"学习就是正向学习"（这是一个包含多个要点的模式，尽管你不一定明确意识到），那么，现在你要对这个模式进行反向学习。

显然，对模式知识的反向学习更加重要，而且更加困难。

**第五，组织也需要反向学习。**

尽管研究个人学习的学者往往忽视了反向学习，但有一些学者重视反向学习。研究学习有一个分支领域即组织学习，有人总结了这一领域的七大贡献（其实就是七个重要概念），其中之一是"反向学习"。

为什么组织学习领域重视反向学习呢？这跟前面讲到的两个要点有关。首先，那些有一定历史的组织，跟成年人很像，它们从过去的经历中积累了很多知识，其中也会有错误、过时的东西。而且，组织正身处 VUCA 时代——这个术语就是在组织研究的背景下提出来的——需要不断反向学习来适应变化。

管理大师德鲁克只是偶然使用"反向学习"这个词，但他可能是最重视反向学习的管理思想家。他在《知识社会》中强调了"有系统的放弃"，或者"有计划的放弃"，他写道：

> 在整个人类历史中，学习都是组织流中的所为。所以，组织能不能再学习，在战略层面，把"有计划的放弃"作为战略的一部分。

投资家查理·芒格说他能把伯克希尔打造成全球最好的投资公司，可以归功于自己和巴菲特擅长反向学习。他说：

> 如果说成功的企业……主要是因为沃伦和我非常善于破坏我们自己最爱的观念。每年你都没有破坏一个你最爱的观念，那么你这年就白过了。

读到这里，你很可能已经认可了反向学习的重要性，而且产生了这样的疑问：我应该对自己的什么知识反向学习呢？下面，我试着回答这个问题。

### 来自学校的隐性课程

每个成年人都有很多留存的知识，而这些知识中肯定有一部分是靠不住的，需要反向学习。那么哪些知识不值得呢？个人的情况都不一样。

但是，作为一个成人教育工作者，我发现大多数成年人存在一个共性：他们关于学习的模式是来自学校的，而学校在这方面有很强的制约作用。成年人脑子中那些靠不住的知识有许多来源，包括父母、大众媒体、个人经验、他人传播等等，但其中有一些是靠不住的——来自学校教育。

我这里并不是指某个国家的学校教育，全世界的学校教育都存在一些共性的问题。我在这里专指两个问题。

其一，学校的某些知识不全面，甚至是错误的。数学家丹·布莱格曼说："如果你对数学的了解完全来自学校教育，那么你所掌握的数学知识就十分有限，在某些重要方面甚至是错误的。"如果连数学都是这样，那么其他学科的情况会怎样？

其二，学校教给了我们一些错误的学习习惯。学校对于我们的学习是有益的，不过绝大多数学校通过"隐性课程"在无意中教给我们的，这是教育学上的一个专门术语，指的是课程表上根本没有、但是学校悄悄教给我们的东西。

批评家们认为，我们在学校中真正学到的是：应该配合/接受权威，不要批判思考事物，承认社会变革难如（如果不是不可能的话）。由此学校造出了一辈又一辈驯良的学生，使他们成为易于管理的员工。

我想强调隐性课程教给我们的另一类特别的态度——学习习惯。在学校里学的东西，在我们走出校门之后，仍然继续影响着我们的学习。

小说家村上春树说：

> 学校就是这样一种地方：我们在学校里学到的最重要的东西，就是最重要的东西在学校学不到。

实际情况可能更糟糕：不仅重要的东西没学到，而且学到了一些重要的错误的东西。

有些人读到这里可能会纳闷：学校到底教了我什么错误的学习习惯？我怎么没有感觉到？这正是成年人对学习习惯进行反向学习的一个难点：很多错误的学习习惯不是明着教的，而是以润物细无声的方式传播给我们的。

小说家大卫·福斯特·华莱士在某大学的毕业典礼上做过一个演讲，从一个小故事开头：

> 两条小鱼在水里游泳，突然碰到一条从对面游来的老鱼向它们点头问好："早呀，小伙子们，水里怎么样？"两条小鱼继续游了一会儿，其中一条终于忍不住了，向另一条问道："水是个什么东西？"

据说，小说家马克·吐温说过这样一句俏皮话："我从没有让上学干扰我的学习。"我小学到高中一直在学校读书，没有一天缺勤，也曾经是高考状元，是学校教育环境中的"成功者"，但虽然很困难，我在三十岁之后，才对自己身上那些错误的学习习惯有所觉悟，慢慢开始改变。

出于两个原因，我把反向学习的重点设定为一些学习上的坏习惯。

其一就是前面谈到的，它们来自学校的隐性课程，对上过学的成年人都有影响，而且很多人还没有清醒地意识到它们的影响。

其二则基于学习力第一公式：学习＝我知道＋我不知道。我们学习新知识（"我不知道"），总是以已有知识（"我知道"）为基础。比如，如果你已有的物理知识是不准的，你很难有效地学习新的物理知识。不过，如果这种具体知识不具备一般性，充其量只影响你学物理。但是，如果你关于学习的知识是错的，那就不只影响你学物理，而且影响你学习任何知识——尤其是那些根深蒂固的学习习惯如果是错误的，将影响你学习任何知识。

所以，成年人反向学习的重点是一些学习上的坏习惯，本书将聚焦在四个坏习惯，分别是：标准答案思维方式、弥散短板全面发展、碎片化学习、学用脱节。下面我就分别讲一讲。

### 坏习惯一：标准答案思维方式

如果一定要挑出学习上最大的一个坏习惯，那就是标准答案思维方式。

#### 重要问题往往没有标准答案

小儿子上小学的时候，有时候会来找我问辅导作业问题。后来他不找我了，因为他很快发现，很多事情较真的标准答案经常不一样。因为我告诉他，老师给的答案其实并不是标准答案，他大惑不解。后来他上高中了，我才告诉他，世界上有三种问题。

- **第一种问题有正确答案**，比如中国的首都是哪个城市？鲁迅生于哪一年？这些是有唯一正确答案的。
- **第二种问题没有正确答案**，属于个人偏好性问题，比如红烧肉好不好吃？西施和貂蝉哪一个更漂亮？
- **第三种问题也没有正确答案**，但 a、b 两个不同的答案都很好；或者说比较之后，我们发现 a 是更好的答案，但并不能因此就说 b 是错的。第三种问题的例子很多，可以说包括了绝大多数的重要问题。比如，法国大革命的意义是什么？

第一种问题有对错之分；第二种问题的答案没有对错之分，但有个人的偏好；第三种问题有更好的答案，但没有唯一的标准答案。

第一种问题有唯一答案、没有争议，但这类问题意义不大。

寻找标准答案的思维方式之所以很正常，是因为学校主要教第一种问题：学校用标准答案来要求学生，也用标准答案来评价学生，这就造成了标准答案思维方式，大多数人成年后仍然受到它的危害。

#### 又一个坏习惯：被动学习

我之所以说"如果只挑出学习上最大的一个坏习惯，那就是标准答案思维方式"，是因为其他很多坏习惯都跟它有关。

我先问一个问题：学习像什么？你觉得学习可以比喻成什么？

传统的学习观认为人的大脑就像是一个容器，学习就是把知识装进去——就像把水装进瓶子，很快就装满了。这种比喻的假设是：所有人学到的都是一样的，而且是被动的，等着老师放进去就行了；知识是固定的，老师教的是什么，学生学到的就是什么。

但学习真的是这样吗？不是。

借助容器比喻来说，传统学习只在少数时候成立，大多数时候不是。与之相对的是"建房子"的比喻：学习就是建筑，老师给你提供砖、搭梯子用什么等等，但是组装房子是你自己。你自己造的砖、搭的梯子可能都是一样的，但是不同的学生会建起不同的房子。实际上，很多时候，砖、砂石都由你自己去找。

这里对比了两种学习观。容器式学习观认为，老师把标准答案装到学生大脑中，学习者是被动的，这种学习方式被称为课堂教学式（instructionism），著名教育家保罗·弗莱雷称之为"银行储蓄式"学习。与之相对的学习观被称为建构主义（constructivism），也就是建房子式学习：学生积极参与，最后搭建出来的是自己的房子。

学习科学家现在的共识：人们实际学习的过程更像是建房子，他们认为"学习总是建立在原有知识背景之下……"学习者"并不是一个空容器等待被动的传播"。

然而，学校教育长期使用的是容器式学习观，这也是标准答案思维方式带来的——学校的任务就是把标准答案装到学生的脑袋里。

有很多人对学校像工厂一样表达了担忧。伊万·伊里奇指出：

> 学校像一座工厂，将一个中心灵魂这样的原材料打造成一部性能良好的机器。

在 20 世纪 10 年代，"泰勒制"被引入美国的教育——设定教育目标、有限管理学习过程、用测量来评定教育效果。然后，"这种制度转瞬间在全世界推广开来"。

现在你知道了，学校和工厂来自同一个模式。顺着容器装水这个隐喻，可以把学校想象为一个装水大工厂：学生是空瓶子，在流水线上整齐地排成一列；老师是流水线上的机器，把规格统一的知识灌装到瓶子里。学生需要主动做什么吗？不用，等着被"灌水"就可以了。尽管这样说比较夸张，但是许多学生表现出来的，就是这种被动学习的态度。

#### 又一个坏习惯：单人学习

标准答案思维方式和被动学习这两个坏习惯加在一起，引出了又一个坏习惯：单人学习。

美国的学校科学家约翰逊指出：

> 学校文化经常阻碍了知识的分享——限制学生之间进行交谈、合作解决问题或完成任务、分享讨论他们的观点。

提出"翻转课堂"的管理学者萨尔曼·可汗指出：

> 给成人提出一个问题时，很少要求他们不寻求帮助或借助外力解决问题，而是期望他们能够发现并找到解决问题所需的资源。学校里缺失的"作业"的东西，在学校之外的世界里，却是特别受推崇的那种高效使用外部资源的能力。

学校教育不鼓励讨论，根本原因还是标准答案思维方式和容器式学习观。

我举一个我自己的例子。我在北大读完本科和研究生，都是自己一个人学习。后来到哈佛商学院和欧洲工商管理学院，一个班里的同学来自 40 多个国家，我一开始仍习惯一个人学，后来组织学习小组却失败了。我们的学习小组之所以失败，原因很多，其中之一就是学校的考核机制：学校考核个人成绩，并以分数决定奖学金等"报酬"，所以同学之间实际上是竞争关系，很难真正互相帮助。

然而，卓有成效的学习者是重视跟其他人讨论的。

吉姆·柯林斯为彼得·德鲁克的一本书写过序言，其中谈到德鲁克"最有效的学习方式就是跟别人对话"。德鲁克说："我很早就发现，我最有效的学习方式就是跟别人对话，在戏剧、刺激、愉悦的气氛之中，跟睿智之士进行思想碰撞之时，我自己的观点得以形成、更新、打磨。"

爱因斯坦很重视通过讨论来学习，他年轻时就和两个朋友成立了自己的"科学院"。后来，另一位著名物理学家玻尔在谈到爱因斯坦时说：

> 在整个人类思想史上，没有什么时候能比爱因斯坦与阿尔伯特·爱因斯坦在若干年里关于量子含义的对话更伟大。（按原意整理）

芒格和巴菲特搭档有时候有一半时间是在看书，并把剩下一半的时间大部分用来跟一些非同寻常的人进行一对一的交谈，有时候是打电话，有时候是当面聊。

中国古代思想家其实非常提倡与朋友一起互动学习，在他们看来，朋友是用来互相学习的。下面引用几句古汉语：

- 君子以朋友讲习。（《周易·兑卦》）
- 有朋自远方来，不亦乐乎。（《论语·学而》）
- 独学而无友，则孤陋而寡闻。（《礼记·学记》）

遗憾的是，这些美好的遗产都被我们忽视了。我在美国读商学院的时候，经常观察到：学生习惯小组讨论这样的环节，讨论前他们已经提前准备好了，但往往只顾自己说，不听完别人的观点，也不擅长利用这样的学习方式。

成年人可能有老师，但肯定不缺同伴、同事、朋友，都是可以用来学习的。有多少互动学习的机会被我们浪费掉了呢？

#### 又一个坏习惯：害怕出错

害怕出错，畏惧失败，这似乎是"人之常情"。但是，这不是天生的，而是教育的结果。

害怕出错也是标准答案思维方式和被动学习延伸出来的一个坏习惯——既然存在标准答案，既然学习就是让老师把标准答案灌输给自己，那么，出错就是学习的失败。

几位美国心理学家指出：

> 在西方文化中，成绩被视作能力的一种象征，许多学生把错误看作失败，想一切办法避免出错，教育有可能也强化了人们对失败的恐惧感，因为他们认为：要避免失败，唯一的办法就是学习。

德国心理学家吉仁泽提出了同样的观察：

> 不冒险，不犯错，就不会有创新。但是，学校却在培养学生对风险的厌恶情绪，老师不鼓励学生自己去寻找答案的能力，而是避免他们犯错。学校强调的，是老师告诉学生答案是什么，然后测试他们能否记住并学会运用。学校强调的是考试前尽可能少出错，但这并不是培养人才之道。

不鼓励犯错，这是全世界的学校教育共有的问题。学生即使在走出校门之后，仍然畏惧犯错，他们害怕在工作和生活中失败，而且会害怕一切新事物。

许多人提出，对于错误和失败的关系，我们需要改变观念。学习科学家安德烈·焦尔当提醒学习者"可以对错误进行研究"，甚至应该制定一种"错误策略"。心理学家卡罗尔·德韦克认为：从某种意义上讲，犯错不是学习的失败，而是"人们学习或者做出创新反应的唯一机会"。

著名投资家瑞·达利欧提出这样一个公式：痛苦＋反思＝进步。他指出：

> 如果你能养成一种习惯，面对精神痛苦时能够自动地反思痛苦而不是躲避痛苦，你就能快速学习和进化。

下面我用一个简单的模型把它说得更加清楚：舒适区、学习区、恐慌区。如果我们已经掌握了某事物，就不会出错，因为我们在舒适区；学习区提供的挑战超出了我们已有的能力，但又是我们能力所及的，这里才会真正发生学习；一旦超出能力太多，就进入恐慌区。

伯特兰·罗素喜欢这样一句话：

> 任何值得做的事都值得糟糕地去做。

这句话可以这样解读：值得做的事情往往要求你走出舒适区，因此一开始往往做得不那么好，但是，你做下来就能做得更好。失败不是成功的反义词，而是成功的必经之路；糟糕地做一件事，也是成功地做一件事的必经之路。

#### 又一个坏习惯：重视结果而非过程

标准答案思维方式延伸出的又一个坏习惯是：重视结果而非过程。因为人们把标准答案拿出来，要求看重结果，而忽略了能够让结果形成的过程，其实过程才是重要的。

重视结果而非过程的典型表现之一，就是只看学校的成绩。

家长如果问孩子："考了多少分？是班上第几名？"那就更可能培养出只重成绩的孩子；家长如果问孩子："从这门课学到了什么东西？搞清楚了哪些问题？"那就更可能培养出成长型的孩子。

学习科学家约翰·哈蒂在晚餐的时候问孩子们："你们今天的学习得到什么反馈意见了？"反馈在学习上的作用，是哈蒂的一个研究成果，反馈的核心是"下一步该怎么做"，这是让学习更加有效的一个最重要因素。关注反馈，就是关注对学习过程的改进。

还有的家长问："你今天有没有提出一个问题？"首先需要指出，"你今天学到了什么吗"已经是比"你考了多少分"更好的问题了。但是，"你今天学到了什么"这个问题，也可能得到一个只是关注结果的回答——孩子可以简单回答学到了某个知识点，而他可能并不懂这些知识背后的东西，这意味着他是在被动地学习。而"你今天有没有提出一个问题"可以得到更好的反馈，因为它关注到了学习的过程。

接下来，普尔·卡鲁·德韦克对固定心智和成长心智的区分现在已经广为人知。所谓固定心智，就是认为智力是不变的，考得不好就说明自己能力不行，所以很在意成绩；所谓成长心智，就是认为智力是可以变的，如果考得不好，不一定是智力不行，只是说明你目前还没有掌握，而通过努力，可能掌握更多知识，从而学习的潜力是巨大的。

拥有固定心智的孩子，不敢尝试有挑战的任务，害怕失败；而拥有成长心智的孩子，更愿意迎接挑战，把失败当成学习的机会。

我已经讲过了属于标准答案思维方式这个坏习惯的四个坏习惯：被动学习、单人学习、害怕出错、重视结果而非过程。

### 坏习惯二：弥散短板、全面发展

弥散短板、全面发展，这是学校教给我们的又一个坏习惯，这也是标准答案思维方式带来的。

弥散短板、全面发展带来的一个所谓"优势"，就是你知道的东西比一般人多，但是……

#### 被误用的木桶理论

管理上有一个著名的木桶理论：一个木桶能装水的容积取决于最短的那块木板。这个理论有一个错误：一个人也像木桶一样吗？

你很可能觉得弥散短板的主张很有道理，因为学校就是这么教我们的。想象一下，一个高中生，语文考了七十分，数学考了七十分，英语考了七十分，这就是优秀学生。

有这样一个故事：一位家长去参加正在上四年级的外孙女的家长会，老师说她语文差，需要多练笔。这位家长心想，老师为什么不说她作文写得好、故事写得好，应该多花时间在写作上呢？

老师把重点放在学生需要做什么来达到最低要求上，这样符合质量管理理念；但是如果我们关注的是人们去学习，这样做就会起到反作用，因为：

> 我们知道没有任何东西能比成功更加激励人们。任何东西。因此，我们应该把重点放在优势上、放在成功之处。

如果说弥散短板在中小学还有其合理之处的话，那么在大学和工作阶段，就应该基本上是把优势发展起来，而个人成长更需要长远发展长板而非补短板。这里我不展开了。

#### 学习上的二八法则

"二八法则"在这里也适用。这个法则用在投资上，就是少数股票创造了多数股票的价值；用在个人成长上，就是少数优势创造了多数的价值。

学校教给我们的恰好相反：制度以无差别的方式教授——学校里不管什么课都是一样的五十五分钟，每门课的教授方式都是一样的，每门课的分数都同样重要；重要的不是你释放出来的几项科目的成绩如何，而是你有没有偏科。

马尔科姆·格拉德威尔说："你应该将全部注意力放在你擅长的事情上"，即使"全部"两个字说得也太绝对了，我们也至少要将"主要"注意力放在擅长的事情上。我们可以这样说，在学习上应用二八法则：把 80% 的注意力放在我们擅长的 20% 的事情上。

#### 两个附带的学习习惯

弥散短板、全面发展还有一个附带的坏习惯——满分思维。其表现之一就是认为自己在某件事上已经做得很好了、接近满分了，所以提升空间不大，就不会再往上走。

达利欧在高中时成绩不好，平均成绩是 C，所以上了一所不起眼的大学，而且还有试读期。但是，达利欧在大学里成绩变得很好，他说原因是"因为我能学习我想学的东西，而不是被强迫去学那些课程"。

我在哈佛商学院读书时，有一门历史课，选择太多，我根本不知道选哪门。结果我选了一门几乎没有老师指导的课程。正因为在这门课上没有老师、也没有父母老师指导自己的学习，反而促使我学会了"自我调节学习"——自己学习、科学掌握学习。

心理学家齐默尔曼研究"自我调节学习"。学习科学专家把自我调节学习分为三个阶段：自己制定学习计划、自己调节学习过程、自己反思学习效果。

> ZIMMERMAN B J. Self-regulated learning and academic achievement: an overview[J]. Educational Psychologist, 1990, 25(1): 3-17.

梁漱溟说：

> 一切都来自教师教导的人，亦都来自自学不可。……任何一个人的学问成就，都是出于自学。学校教育不管给学生开一个窗，他便要成为自学网已。（按原意整理）

令人遗憾的是，学校教育往往是让学生更难以自学。

### 坏习惯三：碎片化学习

成年人普遍存在一个坏习惯：碎片化学习。这在很大程度上要"归功"于学校教育。

《剑桥学习科学手册》指出，真正有用而且能够促进智力发展的是"深层知识"：当学习科学家深入课堂时，他们发现学校教育并没有教授旨在促进智力发展的深层知识，而是……

表 1-1 对比了"深层学习（认知科学的发现）"与"传统的课堂实践（教授主义）"：

| 深层学习（认知科学的发现） | 传统的课堂实践（教授主义） |
|-|-|
| 要求学习者在新的知识、概念、经验之间建立联系 | 没有在课程材料与原有知识之间建立联系 |
| 要求学习者将知识归纳到相关的概念系统中 | 将课程材料视为不连贯的知识点 |
| 要求学习者寻找模式和基本原理 | 记忆陈述性知识和程序性知识，却不知道为什么这么做、怎么解释 |
| 要求学习者评价新的想法，并将这些想法与结论联系起来 | 提出不同于课本的问题时，遇到了不知道如何解答 |
| 要求学习者批判地检验和论证（对话的过程就是知识产生的过程） | 将陈述性知识和程序性知识视为来自权威或著作 |
| 要求学习者对其理解及学习的过程进行反思 | 仅仅记忆知识，并没有对目的和策略进行反思 |

那么，学校为什么不教学生深层知识呢？原因可能很多，我想强调其中两个。首先，这跟前面提到的考试的关系有关：因为要面向考试，学校的教学很自然也是一种"赶进度"式的方式。其次，学校被建立在这样一个技术基础之上——当正式的内容应用时，这些都是不相容的、应接不暇的，更谈不上在课堂上深入。

有学者指出：

> 地理不应该是这座山的高度、那里河流的流域、这一小镇的砂石量、那一小城镇面积、国家的疆域和国家的资源。地理应该教学生思考这样的问题：为什么有些人会成为商人？什么原因可以解释三条河流的交汇处的大城市的发展？为什么我们在山岳的一侧看到农业的繁荣，而在山脉的另一侧却不是如此？

一个世纪过去了，现在情况好了一些，但是正如《剑桥学习科学手册》所指出的，多数人不再学习，那些还在继续学习的少数人，主要在收集知识。

### 坏习惯四：学用脱节

学用脱节是我们在成年人身上很容易观察到的一个学习上的坏习惯。这个坏习惯有两个方面的体现：一个是学而不用，另一个是学而乱用。

#### 学而不用

我先说说学而不用。前面已经谈到，学校并不期望你在生活中使用它教你的知识。因此，学而不用是一个普遍的问题，这是学校教育的一个"后遗症"。

古人读书，讲究"格物致知、诚意正心、修身齐家治国平天下"，学习"格物致知"的目的，是为了"修齐治平"。《论语》有"学而时习之，不亦说乎"一句，学习之后，要经常应用。

古人强调的"学"与"习"两个字，现在大家通常理解的学习，其实只是"学"，"习"其实更重要——要"习"，即实践、应用。而空谈知识的现象随处可见。

我曾经有个热心读者 H，号称在学习领导力，还影响了一些人读我的书，但他发现，尽管他很用心，可他解释起书里的一些概念来并不到位，因为他根本没有用过这些知识。在 H 的"启发"下，我发明了一个学习上的"证"字诀。我的答复是："如果你觉得这些知识好，应该想'我可以怎么用到自己身上'，而不是去想这种知识可能是教育部部长才要想的事。"

毛泽东说过这样一段话：

> 读书是学习，使用也是学习，而且是更重要的学习。从战争学习战争——这是我们的主要方法。

这就是在说"用以致学"。如果一个人真正掌握了关于战争的某个理论，就必然要掌握这个理论在具体情境下的应用。不去实际应用的话，是难以真正掌握抽象的知识的理论的。

#### 学而乱用

学而乱用，这个现象几乎是随时随地可见。

学而乱用，就是说你在工作中遇到一个问题，看到书里或某个理论觉得很好，马上就用到工作上，结果往往是把问题搞得更糟。

有些人之所以学而不用，是因为没有真正教过他们"从学到用"应该怎样"用"。大多数人学而不用，还有两个原因：一个是碎片化学习，自己学到的东西是碎片化的；另一个是标准答案思维方式，以为自己的知识（其实是碎片知识）就是标准答案，可以放之四海而皆准。

### 反向学习的好消息和坏消息

对于学习上的这四个坏习惯，我们需要反向学习，对此我有三个好消息和一个坏消息。

#### 第一个好消息：对照清单

先说一个好消息：你已经知道了要改变哪些坏习惯。前面讲到的坏习惯，你不一定都有，即使你都有，严重程度应该也不一样。

所以，第一个好消息是：你已经有了一个清单，可以对照来自查，找出自己有哪些坏习惯，然后进行反向学习。我们之所以被坏习惯所困，是因为不知道它们的存在。现在你已知道了，就会在你的大脑中马上开始改变，增加变化的可能。

所以，知道自己有哪些坏习惯，是反向学习的第一步。

#### 一个坏消息：遗忘很难

不过，我要告诉你的坏消息是：这些学习上的坏习惯已经渗透在你大脑里了，要改变它们，不像抹掉板书或者把蜡烛吹灭那么简单。反向学习不是"有意识地忘记"那么容易。

古希腊的西蒙尼德斯（据说他是记忆的发明人）要把记忆艺术传授给一位希腊政治家，却被拒绝了。这位政治家说：

> 不要给我记住的艺术，倒请给我遗忘的艺术，因为如果我记住了很多事，却不能把那些事忘掉，反而会害了我。

认知科学家有这样的观点：大脑不可能真正遗忘掉什么事情。一旦它们进入大脑，就在特定的情形下被重新激活，尤其是当某种情境下，它们全都可能被唤醒。

而且，这些学习的坏习惯不是单个的知识点，而是一个心智模式，是成套的知识体系。它们不仅彼此交织在一起，而且跟大脑里其他一些知识体系也交织在一起，应用时能够取其精华、弃其糟粕，不会那么轻易地被抹掉。

#### 第二个好消息：用加法做减法

现在，我告诉你第二个好消息：我们可以通过培养新习惯来改变旧习惯。坏习惯可能很难被遗忘，但是可以被替代。

反向学习是减法式学习。在数学上，如果要减去一个数，我们可以加上这个数的相反数。与此类似，对于这些学习上的坏习惯，我们可以通过培养与之相反的好的新习惯来替代它们。

比如说，标准答案思维方式是一个坏习惯，要想直接根除它几乎是不可能的，但是，我们可以培养参考答案思维方式这一好习惯来替代它。

同样，我们可以用聚焦来替代弥散短板、全面发展这一坏习惯，用模式化学习来替代碎片化学习，用深层迁移来替代学用脱节。

刚刚提到的，就是本书的后四项修炼——学习力的五项修炼中，后四项修炼就是用来替代四个坏习惯的。这五项修炼不是并列的关系，而是有主次、有递进的关系：第一项修炼是反向学习，其他四项修炼是用来替代四个坏习惯的。后四项修炼与第一项修炼之间既是反与正的关系，又是总与分的关系，而后四项修炼之间则是层层递进的关系。

为什么说反向学习是一项"修炼"？因为旧的坏习惯会纠缠你，替代它们将是一个漫长而艰难的过程。而要成功地进行反向学习，就必须进行其他四项修炼。

#### 第三个好消息：使用口诀

第三个好消息是我为你准备了一句口诀，帮助你进行反向学习这项修炼。

我以前的"主旋律"是 leadership，提出了领导力的十项修炼，我后来又提出了配套的十句口诀，很受欢迎。所以，这次我也为学习力的五项修炼准备了配套的口诀。

学习力的口诀主要以问题的形式出现，因为学习在很大程度上就是思考，而根据杜威的说法，思考就是提问。

### 反向学习的口诀

反向学习这项修炼的口诀是这样一个问题：

> **我要改变什么？**

这个问题的应用范围很广。如果我们只是局限于本章的内容，那个问题的具体展开就是自己：

> 我有哪些（本列举出来的）学习上的坏习惯？它们的具体表现是什么？我应该怎么改变？

这两个问题还可以延伸到更为广泛的反向学习中，主要的应用场景可以概括两种。

一种场景是你经历了大大小小的失败。比如，你错失了一次晋升的机会，或者是恋人刚离你而去，或者是搞砸了一个项目，或者是失去了一个大客户……这时候你可以问自己："我要改变什么？"

你还可以问得更细一些，问自己：这一失败的根源，是不是某个已经在我头脑中根深蒂固的观念？这个观念我一直以为是对的，但它不仅导致了这次的失败，而且还带来了（之前被我忽视的）其他负面影响。这个观念如果我改变，可以给我带来哪些巨大的变化？我想要改变这个观念，会遭遇哪些内心的阻碍？

另一种场景则是作为定期反思。比如，每过三个月，你坐下来问自己：

> 我现在的哪些行动，在以前可能是行之有效的，但是现在需要改变了？这些行动背后的观念是什么？这些观念是否还带来了其他的错误行动？我应该怎么改变这些观念？

虽然，在第一种场景使用这个问题更容易一些，因为在失败之后，我们更容易"幡然醒悟"，正如所谓"吃一堑，长一智"。所以，在第二种场景问"我要改变什么"时，是更加高级的"反向学习"。

使用这个问题有双重效果：一方面，这些口诀可以直接起到思考工具的作用，让你接手改变的方向、去除一面，它们也锚定了方向，使你不会因为能力单一而迷失方向；另一方面，这些口诀即便没有带来立即可见的结果，也起到了路标的作用，为你指明了一个宝贵的方向。比如，当你问"我要改变什么"时，它实际上直接指向结论，让本书重点讨论的四个学习上的坏习惯凸显出来，而你仔细考察这些之后，从中找到了答案。

好，关于学习的"破"就讲到这里。不破不立，要打破旧习惯才能建立新习惯。所以第一项修炼是反向学习。但是反过来也是成立的，不立不破——只有真正建立起新习惯才能完全打败旧习惯。下面，我们就进入建立新习惯的修炼。`,feishuUrl:"https://my.feishu.cn/docx/H4FndVT9PogOq7xEd5zczsYMnRg"},{id:"fs-SR3ndsA4vo2Ns1xjQEnclO4Snlg",category:"reading",title:"《反向学习》知识点笔记",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"来源：《反向学习》前言、导论、第一章（据微信读书截图整理） 用途：核心概念、模型、方法论的结构化提炼，便于快速复习与调用。 一、全书的骨架：学习力的五项修炼 一句话记住全书：**成人是目的，学习是道路，五项修炼是具体行动…",body:`> 来源：《反向学习》前言、导论、第一章（据微信读书截图整理）  
> 用途：核心概念、模型、方法论的结构化提炼，便于快速复习与调用。


## 一、全书的骨架：学习力的五项修炼

一句话记住全书：**成人是目的，学习是道路，五项修炼是具体行动。**

| # | 修炼 | 英文/含义 | 解决什么 | 替代的坏习惯 |
|-|-|-|-|-|
| 1 | 反向学习 | unlearning，减法式学习 | 去除错误、过时、低效的旧知识 | ——（总起，"破"） |
| 2 | 参考答案思维方式 | 不把答案当唯一标准 | 形成并更新自己的答案 | 标准答案思维方式 |
| 3 | 聚焦 | 学得少才能学得深 | 把注意力放到高价值处 | 弥散短板、全面发展 |
| 4 | 模式化学习 | 学模式而非碎片 | 在头脑中建立模式树 | 碎片化学习 |
| 5 | 深层迁移 | 提取模式用到新情境 | 把知识转化为能力 | 学用脱节 |

关键关系：

- 五项修炼是**有机整体**，彼此联系、相互支持。
- 深层迁移以模式化学习为基础，模式化学习以聚焦为前提。
- 第一项（反向学习）是"破"，后四项是"立"；不破不立，不立不破。
- 后四项之间是**层层递进**的关系。
- 若只选最重要的一项：作者选**深层迁移**（强调"用"，且包含其他四项）。


## 二、学习力第一公式

> **学习 ＝ 我知道 ＋ 我不知道**

- "我知道"＝已有知识；"我不知道"＝新知识；"＋"＝建立联系。
- **不能交换律**：一定是带着已有知识去学新知识，"我知道"在前。
- 理论支撑：奥苏贝尔（1968）——"影响学习的唯一最重要的因素就是学习者已经知道了什么"；《人是如何学习的》——"用已知建构新知与对新知的理解"。
- 推论：同一本书、同一门课，收获不同，根源是**已有知识不同 + 建立联系的方式不同**。
- 由此可推导出五项修炼（第一性原理）。


## 三、成人／成熟的三模型对照（前言）

作者用三个模型说明"成人＝思想上成熟"：

| 阶段 | 加德纳（四阶段） | 凯根（四阶段） | 作者（三阶段） | 人际版本 |
|-|-|-|-|-|
| 初级 | 二元对立（五岁） | 以我为尊 | 标准答案思维方式 | 依赖 |
| 中级 | 力求公平（十岁） | 规范主导 | —— | —— |
| 较高级 | 相对主义（十五岁） | 自主导向 | 参考答案思维方式 1 | 独立 |
| 最高级 | 个人整合（二十五岁） | 内观自变 | 参考答案思维方式 2 | 互相依赖 |

- 成年人中，达到"自主导向"的人不到一半；"内观自变／个人整合"极少。
- **核心判据**：成熟的人有自己的声音，不只会复制粘贴别人的观点。
- 成人标志的两句名言：

  - 罗蒂：懂得所有有趣的书都是"终有一天由自己撰写的梯子上的梯级"。
  - 平克：不立刻做出反应，是成年的标志（因为把答案当参考，才会先问"理由是什么"）。
- 彼得·圣吉：人不是生而为人的，**要花一生来学习"成人"**。


## 四、第一章：反向学习

### 4.1 定义

反向学习（unlearning）＝减法式学习＝**有意识地忘记**头脑中错误、过时、低效的知识。是成年人学习的第一项修炼。

### 4.2 五个要点

1. **成年人比孩子更需要**：孩子做加法，成年人要先做减法。古人安提西尼："学会忘记坏的东西。"
2. **VUCA 时代尤其重要**：易变、不确定、复杂、模糊；过去管用的现在不一定管用。格兰特：最重要的认知工具是"重新思考和消除之前所学"。
3. **很难**：铅笔字好擦，钢笔字、刻在木头上的字难擦。凯恩斯："介绍新观念不难，难的是清除旧观念。"霍尔："反向学习比正向学习更难。"
4. **分层次**：碎片知识（单点）vs 模式知识（一套体系）。**对模式知识的反向学习更重要、更困难。**
5. **组织也需要**：德鲁克"有系统的放弃／有计划的放弃"；芒格"每年没有破坏一个你最爱的观念，这年就白过了"。

### 4.3 病根：来自学校的隐性课程

- 隐性课程：课程表上没有、学校却悄悄教的东西。
- 两大问题：① 知识不全面甚至错误；② 教给错误的学习习惯。
- 村上春树："最重要的东西在学校学不到。"
- 华莱士"两条小鱼问水是什么"的寓言：最深的习惯最看不见。
- 为什么反向学习的重点是"学习习惯"：因为关于学习的知识如果是错的，会影响你学**任何**知识（基于第一公式）。

### 4.4 四个坏习惯

**坏习惯一：标准答案思维方式（最大坏习惯）**

- 三种问题：① 有唯一正确答案（意义不大）；② 个人偏好问题；③ 无标准答案但有更优解（绝大多数重要问题）。
- 衍生的四个坏习惯：

  - **被动学习**：容器式（银行储蓄式）vs 建房子式（建构主义）。学校像装水工厂。
  - **单人学习**：学校考核个人、制造竞争，阻碍分享。古人："独学而无友，则孤陋而寡闻。"
  - **害怕出错**：成绩＝能力的错觉。德韦克：把错误当学习机会。达利欧：痛苦＋反思＝进步。舒适区／学习区／恐慌区。罗素："任何值得做的事都值得糟糕地去做。"
  - **重视结果而非过程**：哈蒂——反馈的核心是"下一步怎么做"；问"今天提了什么问题"优于"今天学了什么"；固定心智 vs 成长心智。

**坏习惯二：弥散短板、全面发展**

- 木桶理论被误用：人不是木桶，个人成长应发展长板。
- 学习上的二八法则：把 80% 注意力放在擅长的 20% 事情上。
- 附带坏习惯：满分思维（接近满分＝不再提升）；依赖老师→缺乏**自我调节学习**（齐默尔曼：计划→调节→反思）。

**坏习惯三：碎片化学习**

- 深层学习 vs 教授主义（表 1-1）：前者建立联系、归纳概念系统、找模式原理、批判论证、反思过程；后者视为孤立知识点、死记、依赖权威、不反思。
- 学校不教深层知识的原因：应试赶进度 + 技术基础限制。

**坏习惯四：学用脱节**

- 学而不用：古人"格物致知"为了"修齐治平"；"学而时习之"。作者的"证"字诀——"我可以怎么用到自己身上？"毛泽东："读书是学习，使用也是学习，而且是更重要的学习。"
- 学而乱用：把碎片当标准答案，生搬硬套，反而把问题搞糟（海底捞递眼镜布的故事）。

### 4.5 三个好消息 + 一个坏消息

- 好消息 1 **对照清单**：已知要改什么，这是反向学习第一步。
- 坏消息 **遗忘很难**：大脑不会真正遗忘，习惯是成套的心智模式，彼此交织。（西蒙尼德斯"请给我遗忘的艺术"）
- 好消息 2 **用加法做减法**：培养相反的新习惯来替代旧习惯（数学上减去＝加上相反数）。
- 好消息 3 **使用口诀**：以问题形式呈现（杜威：思考就是提问）。

### 4.6 反向学习的口诀

> **我要改变什么？**

- 具体展开：我有哪些坏习惯？具体表现？怎么改变？
- 场景一：经历失败时——失败的根源是不是某个根深蒂固的观念？改变它能带来什么？有什么阻碍？
- 场景二：定期反思（如每三个月）——哪些曾经有效的做法现在需要改变？背后的观念是什么？（更高级的反向学习）


## 五、配套方法论与工具清单

- **四问学习法**（深层迁移工具）：我听到什么？→ 我想到什么？→ 我变成什么？→ 我用到哪里？
- **参考答案思维方式六策略**：洞见分类、标准答案、互动学习、注重过程而非结果、发现隐含的假设、反过来想。
- **聚焦七策略**：聚焦不变、聚焦解决问题、聚焦实用、聚焦擅长、聚焦专题、聚焦作者、聚焦样本。
- **模式化学习六策略**：书中离群写模式、用模式吸收碎片、用模式分析案例、用模式比较模式、搭建一棵模式树、建立模式的树林。
- **管理者三大能力模型**（卡茨）：技术能力、人际能力、概念能力；职位越高，技术越不重要、概念越重要，人际一直重要。
- **元能力**：学习力是关于能力的能力，其他能力都依赖它。


## 六、可直接引用的金句

- "我们花费一生来学习'成人'。"——彼得·圣吉
- "学习＝我知道＋我不知道。"
- "反向学习比正向学习更难。"——斯图尔特·霍尔
- "介绍新观念倒不是很难，难的是清除那些旧观念。"——凯恩斯
- "每年你都没有破坏一个你最爱的观念，那么你这年就白过了。"——芒格
- "任何值得做的事都值得糟糕地去做。"——罗素
- "痛苦＋反思＝进步。"——达利欧
- "独学而无友，则孤陋而寡闻。"——《礼记·学记》
- "不破不立，不立不破。"
- 反向学习口诀："我要改变什么？"`,feishuUrl:"https://my.feishu.cn/docx/SR3ndsA4vo2Ns1xjQEnclO4Snlg"},{id:"fs-MNP7dDtu5oMJoKx4uMpcu0l3npf",category:"reading",title:"死亡也并非所向披靡｜旅德纪事 I · 孙小平（读书笔记）",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"作者：孙小平｜广西师范大学出版社·新民说，2023 年 2 月｜ISBN 978-7-5598-5633-3 豆瓣评分 9.4｜体裁：历史随笔 / 旅德纪事 说明：本笔记基于网络公开资料（内容简介、完整目录、编辑推荐、书…",body:`> 作者：孙小平｜广西师范大学出版社·新民说，2023 年 2 月｜ISBN 978-7-5598-5633-3  
> 豆瓣评分 9.4｜体裁：历史随笔 / 旅德纪事
> 
> 说明：本笔记基于网络公开资料（内容简介、完整目录、编辑推荐、书评与书摘）整理，非逐页精读全书。标「书中句」的为书评/书摘中确认引自本书的文字，标「书评者」的为他人观点。「我的思考」部分留白，等自己读完后填。

## 一句话说清这本书

旅德四十年的作者，以旅行见闻为楔子，走进德国与东欧的山水城镇，把风景背后被掩埋的二战往事一一打捞出来——写的不是风景，是风景底下的人性与记忆。

## 书名为何叫「死亡也并非所向披靡」

- 书名令人想起**狄兰·托马斯（Dylan Thomas）的同题诗句**——死亡并非全能，有些东西它吞不掉。
- 全书开篇《死亡也并非所向披靡》是**致敬巴拉赫**（Ernst Barlach，德国表现主义雕塑家、剧作家，因艺术理念与纳粹冲突而遭打压）。
- 落点：亲历者会离去，但真实发生过的一切不会消失。**记忆本身有顽强的生命力**；死亡能带走生命，却抹不去过往。苦难、抗争、忏悔这些想被淡化的片段，长久留在「大地的褶皱」里，等人回望、记录、思索。（书评者）

## 作者其人

孙小平，1980 年毕业于上海复旦大学哲学系，后赴德留学，1996 年获德国汉堡大学神学博士学位。曾在复旦哲学系、复旦大学基督教研究中心、汉堡大学神学系、南京金陵协和神学院任教。中欧跨文化作家协会会员，旅居德国四十年，出版有中德文本著作。  
——哲学 + 神学 + 四十年旅居，决定了这本书的底色：既有史料梳理的功夫，也有对罪、良知、救赎的追问。

## 全书骨架（14 篇，按线索分组）

| 线索 | 篇目 | 关键词 |
|-|-|-|
| 山水里的历史 | 众神居所，生死因缘 | 南蒂罗尔多洛米蒂的人质事件 |
|  | 那片天粘地漫的紫色 | 吕讷堡石楠草原的前生今世 |
|  | 阿尔卑斯山逃生记 | 伊特尔堡之役 |
| 至暗中的良知 | 死亡也并非所向披靡 | 致敬巴拉赫 |
|  | 枪口前举起双手的男孩 |  |
|  | 「女武神行动」与所多玛的义人 | 1944·七二〇刺杀希特勒 |
|  | 想要回家的好人 | 德军上校舍命拯救一座城 |
|  | 踽行孤影 |  |
| 反思与忏悔 | Jedem das Seine | 布痕瓦尔德集中营门上标语 |
|  | 我感受着痛苦的馈赠 | 悲情魏玛 |
|  | 被绊倒的是人的心灵 | 「绊脚石行动」侧记 |
|  | 「我与死亡有个约会」 | 华沙的悲怆 |
|  | 我的心牵挂着那垛孤独的城墙 |  |
|  | 你的墙垣常在我的眼前 | 上乌瑟尔纪事 |

开篇另有《序·从那块"石头"说起》。

## 核心主题（重要知识点）

1. **风景从来不只是风景**：行走只是载体，回望历史才是内核。多数人只看见德国明朗整洁的风物，作者却掀开温柔面纱，露出层层隐曲的过往。（书评者）
2. **死亡并非所向披靡 = 记忆抵抗遗忘**：真实发生过的事不会因亲历者离世而烟消云散；它们蛰伏在山川、城镇与建筑之间，等待行路人驻足拾起。（书评者）
3. **至暗年代里良知仍在**：全书贯串一个信念——即使在乾坤颠倒的年代，并非所有人都与「暴虐的利维坦」同流合污，世上依然有熠熠生辉的良知。（编辑推荐 / 书评者）
4. **德国何以浴火重生：直面罪恶、拒绝遗忘**。书评者给出的解答线索：

   - 尼默勒 1945 年起草《斯图加特认罪书》，以个人认罪始、以德国人民认罪终；
   - 尼默勒《起初他们……》名言（波士顿新英格兰犹太人大屠杀纪念碑镌刻）；
   - 检察官鲍尔追问「沉默的一代」的罪责；
   - 青年一代在厨房追问父母：「纳粹犯下滔天罪行时，你们知道吗？你们做了什么？」
   - **「绊脚石行动」：艺术家冈特·德姆尼西发起，在欧洲城市路面嵌铜石块，记录被屠杀者的姓名、出生与被抓时间、死亡地点——已超过 7.5 万块**，其中 3 块为遇害华人铺在汉堡圣乔治区。
5. **个人命运如扬花飞絮**：「在历史长河中，个人的命运亦如扬花飞絮，随波逐流，渺小无助，因果无常。」（书中句）
6. **技术放大了毁灭，也给反思留下课题**：书评者借贾雷德·戴蒙德《第三种黑猩猩》与鲁迅「吃人」论切入——技术释放毁灭冲动，艾希曼可以一边听瓦格纳一边按毒气室开关；集中营入口竟写着「劳动创造自由」。这也是作者警醒世人勿重蹈覆辙的用心。

## 值得记住的句子 / 意象（书中句）

- 「即或有忘记的，我却不忘记你。看哪，我将你铭刻在我掌上，你的墙垣常在我眼前。」（出自《以赛亚书》，书中多处呼应）
- 伊尔莎《我行走过特莱西恩施塔特》：「我多想继续走下去，我多想回家！回家！——你这美妙的词语，你使我的心情沉重如铅挂。我的家已经被他们抢走，从此我不再有家。」
- 汉堡诗人咏石楠草原：岁月交替、往事无痕，「我们所能面对的充其量仅是镜花水月……唯一能够相约相期的也只有一年一度夏秋之交……那一片天粘地漫的紫色了。」

## 相关历史知识点（读懂本书的前置）

- **女武神行动（1944-07-20）**：施陶芬贝格等刺杀希特勒失败，希特勒疯狂报复，处死 1 位元帅、19 位将军、26 位上校等多人，株连上万，近五千人遇难。
- **Jedem das Seine**：德语「各得其所 / 人人得其所应得」，纳粹布痕瓦尔德集中营入口标语，是全书耐人寻味的反讽意象。
- **华沙之跪**：西德总理勃兰特 1970 年在华沙犹太人纪念碑前下跪，象征忏悔与和解；作者跳出教科书叙事，剖析背后暗流。
- **绊脚石（Stolpersteine）**：见上文，遍布欧洲的 memorial 小铜块。
- **特莱西恩施塔特（Theresienstadt）**：纳粹犹太人隔离区/集中营，在捷克，书中诗句的出处地。

## 来源

- 百度百科「死亡也并非所向披靡：旅德纪事 I」
- 得到电子书目录与主编推荐语（豆瓣评分 9.4）
- 中欧跨文化作家协会公众号《孙小平博士的新书出版》（含完整目录、编辑推荐、购书信息）
- 孔夫子旧书网 / 新华文轩图书简介
- 书评《在山水褶皱间，打捞被遮蔽的历史》《所幸死亡也并非所向披靡》（微信公号）

## 我的思考（留白 · 读完后自己填）

- 这本书触动我的一个瞬间：
- 我不同意 / 想追问的一点：
- 它和《反向学习》《人性的枷锁》在读法上有什么相通：
- 如果做成小红书选题，我会从哪个点切入：`,feishuUrl:"https://my.feishu.cn/docx/MNP7dDtu5oMJoKx4uMpcu0l3npf"},{id:"fs-ALIYdxC41ofHM7xzkqScbswlnzc",category:"reading",title:"死亡也并非所向披靡｜地点地图与人物关系网 · demo 说明",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"配套读书笔记：https://my.feishu.cn/docx/MNP7dDtu5oMJoKx4uMpcu0l3npf demo 文件：`demos/死亡也并非所向披靡-地图与人物关系网.html` 网站子应用：`D:…",body:`> 配套读书笔记：https://my.feishu.cn/docx/MNP7dDtu5oMJoKx4uMpcu0l3npf  
> demo 文件：\`demos/死亡也并非所向披靡-地图与人物关系网.html\`  
> 网站子应用：\`D:/5reactProject/wujie-nebula/apps/bookmap/index.html\`（卡片 id \`bookmap-lab\`，appId \`bookmap\`）  
> 建立时间：2026-11-20

## 做了什么

把书里出现的地点钉在地图上，每个地点关联它牵出的人和事；点人物看生平；另有一张人物关系网，把人、地点、事件连成可拖动的网。

三个视图：

1. **地点地图**：腾讯地图标点，点圆点 → 右栏显示该地点的篇目、相关人物与事件。境外底图需自己填腾讯地图 Key。
2. **人物关系网**：力导向图，橙=人、蓝=地点、绿=事件、棕=书名。点节点高亮关联并显示详情，节点可拖动。
3. **清单**：地点、人物平铺列表，方便查。

## 数据一览（13 地点 / 10 人物 / 8 事件）

地点：居斯特罗、多洛米蒂（意）、（男孩篇·待补）、布痕瓦尔德、魏玛、吕讷堡石楠草原、汉堡圣乔治区、伊特尔堡（奥）、特莱西恩施塔特（捷）、柏林、华沙（波）、上乌瑟尔、奥斯维辛（波）。

人物：孙小平（作者）、巴拉赫、勃兰特、尼默勒、鲍尔、德姆尼西、伊尔莎·韦伯、艾希曼、施陶芬贝格、想回家的好上校（待补）。

事件：颓废艺术清算、多洛米蒂人质事件、绊脚石行动、伊特尔堡之役、华沙之跪、斯图加特认罪书、艾希曼审判、大屠杀与最终方案。

## 关键设计（对齐「是我学的不是 AI 学的」）

- 标「待补充」的项（男孩篇地点、好上校身份）是公开资料查不到的，故意留白，等真正读原书后自己填。
- 人物生平基于公开史料，非逐页精读；以原著为准。
- demo 是可交互的工具，不是替你写好的结论——网怎么连、谁连谁，都摆在图上由你判断。

## 地图合规

- 用腾讯地图 GL JS；不在前端预置任何 Key。
- 地点多在境外，按非默认场景处理：由使用者自己在 \`lbs.qq.com\` 申请 Key 后填入页面输入框，脚本动态加载，本地临时使用。
- 未使用 Google/Mapbox/OSM 等境外底图。

## 网站接入记录

- 在 \`assets/index-DSNYg9SZ.js\` 加了展示卡 \`bookmap-lab\` 与子应用注册 \`bookmap → bookmap/index.html\`。
- 改动前已备份 \`assets/index-DSNYg9SZ.js.bak2\`；\`node --check\` 通过。
- 部署方式仍按既定约定：只提交打包产物，不 publish 源码；base 路径由 location.pathname 推导。`,feishuUrl:"https://my.feishu.cn/docx/ALIYdxC41ofHM7xzkqScbswlnzc"},{id:"fs-NdTqdnDshohyZnx1MjDcogwynXf",category:"reading",title:"《AI全球商业版图》· 带着问题阅读清单（按章提问，答案自己填）",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"来源：用户拍摄的实体书目录页（封面标注「AI 全球商业版图」）。这是一本讲 AI 商业化竞逐的书，分「海外篇 / 中国篇 / 未来篇」三部分，共 8 章 + 结语。 用法：读书前先扫一遍本章问题，带着问题读；读完回来用自…",body:`来源：用户拍摄的实体书目录页（封面标注「AI 全球商业版图」）。这是一本讲 AI 商业化竞逐的书，分「海外篇 / 中国篇 / 未来篇」三部分，共 8 章 + 结语。

用法：读书前先扫一遍本章问题，带着问题读；读完回来用自己的话回答（答案写进知识图谱对应节点的「我的答案」里）。下面只提问题、不给答案——答案得是你自己读完书想明白的。


## 海外篇

### 第一章　启蒙时刻：谁开启了 AI 时代（p004）

主线：规模范式、科学原理、工程逻辑三条路，分别走出 OpenAI / DeepMind / Anthropic。

- 规模定律（scaling law）到底是「被发现的规律」还是「被押注的信仰」？ OpenAI 敢 all in 的底气从哪来？
- OpenAI 被称为 AI 时代的「iPhone 时刻」，这个类比成立吗？它打开的是技术拐点还是产品拐点？
- DeepMind 走「智能本质探索」，Anthropic 走「工程可靠性」，和 OpenAI 的路线比，三条路的根本分歧在哪——是目标不同，还是对「什么是智能」的定义不同？
- 如果重来一次，「规模 + 产品」「科学探索」「工程可控」哪条路更容易跑到终点？为什么？
- 这一章讲的是公司史，还是三种「技术世界观」的胜负？作者站哪边，你怎么看？

### 第二章　核心资产：AI 时代的基石（p056）

主线：算力霸权（Azure、Oracle）、开源生态与数据（Meta、Scale AI）——基础设施层的权力博弈。

- 为什么说 AI 时代的「核心资产」不是模型而是算力和数据？这个判断在书中哪些地方被论证？
- 微软靠 Azure 卡位、Oracle 从数据库转向 AI 算力集群——传统巨头凭什么在 AI 时代继续握有权力？
- Meta 坚持开源大模型，是理念、生态卡位，还是防御闭源垄断的策略？开源到底「图什么」？
- Scale AI 从数据标注平台升级为「数据引擎」，说明数据在价值链里的地位发生了什么变化？
- 「权力的再分配」——这一章说谁失去了权力、谁得到了权力？基础设施层和应用层，谁的护城河更深？

### 第三章　生存博弈：人机共生还是机器取代（p098）

主线：自动驾驶（Waymo、特斯拉 FSD）、人形机器人（Figure AI、Optimus）、通用机器人大脑（Physical Intelligence）。

- Waymo 的「耐心布局」和特斯拉 FSD 的「纯视觉豪赌」，两条自动驾驶路线各自赌的是什么？谁更可能先跑通商业化？
- 人形机器人为什么在这个时间点爆发？是技术成熟，还是资本和叙事在推动？
- 特斯拉把 Optimus 称作「硅基劳工」，这个措辞透露了作者怎样的立场——是警惕，还是乐观？
- Physical Intelligence 做「通用机器人大脑」，和「每个机器人各自训练」比，本质区别在哪？这是不是具身智能的「Android 时刻」？
- 读这一章时始终问：这些案例到底指向「人机共生」还是「机器取代」？作者有没有给出明确答案，还是故意留白？

### 第四章　场景革命：AI 赋能垂直行业（p128）

主线：生命医疗（Insilico Medicine、Hippocratic AI）、专业服务（Palantir、Harvey AI）、知识感官（Perplexity、ElevenLabs）。

- AI 制药公司 Insilico 凭什么说自己「重构药物发现」？它重构的是速度、成本，还是成功率？
- Hippocratic AI 解决「医疗人力短缺」，这是替代医生，还是填补医生够不着的地方？边界划在哪？
- Palantir 自称「数据世界的 AI 操作系统」，Harvey 做「法律 AI 工作系统」——垂直 AI 产品的共同打法是什么？
- Perplexity 用「答案引擎」重塑知识获取，ElevenLabs 用拟真语音挑战感官体验——谁更可能成为下一个入口级应用？
- 这一章举了六个行业案例，有没有哪个是「看起来很美、其实难落地」的？你的判断依据是什么？


## 中国篇

### 第五章　中坚力量：谁能超越 OpenAI（p166）

主线：算力重压下的底层突围（DeepSeek、智谱）、超级应用入口与商业生态矩阵。

- DeepSeek 的「成本革命」是怎么做到的？它证明的是「算力不足也能追上」还是「算法效率被低估了」？
- 智谱从「知识工程」走到「认知智能」，这条路和 OpenAI 的路线差异在哪？中国公司的「底层突围」到底突的是什么？
- 「谁能超越 OpenAI」——作者心里的时间表和判断标准是什么？是技术能力、用户规模，还是商业化速度？
- 中国 AI 走的是「超级应用 + 生态矩阵」路线（对比美国的「基础模型 + API」），这两种范式的优劣各是什么？

### 第六章　算力变局：谁走下一个英伟达（p196）

主线：智能算力芯片崛起（寒武纪、摩尔线程）、通用 GPU（壁仞科技），中国算力生态的系统性突围。

- 为什么说「算力自主」是绕不开的一关？卡脖子的到底是芯片设计、制造工艺，还是软件生态（CUDA）？
- 寒武纪「在指令集与工程化的夹缝中重构计算边界」——这个夹缝指什么？它走的路和 GPU 通用路线有何不同？
- 摩尔线程做「全功能 GPU」、壁仞做「GPGPU」，国产芯片为什么要从 GPU 切入而不是别的？
- 章名问「谁走下一个英伟达」——中国的算力公司补齐的是「造芯片」，还是「建生态」？哪个才是真正的门槛？
- 判断一家芯片公司能不能成，你会看哪些指标（流片、良率、客户、软件栈）？

### 第七章　赛道兴替：具身智能的发展（p218）

主线：自动驾驶产业链（小马智行 L4、地平线中国方案）、人形机器人（宇树、智元）、通用具身智能（星海图），从实验室走向产业化。

- 「具身智能」和前面讲的「大模型」是什么关系？是大模型的落地形态，还是另一套技术路线？
- 小马智行押注 L4、地平线做「中国方案」——自动驾驶这条赛道，中国公司的机会在整车、方案商，还是芯片？
- 宇树走「高机动低成本」、智元走「生智能定义劳动力」——人形机器人的几条路线，赌的是同一个未来吗？
- 「赛道兴替」——这一章哪些赛道在起、哪些在落？判断一个赛道该不该进，作者给了什么信号？
- 从实验室到产业化，具身智能最大的坎是技术、成本，还是「找不到真实场景」？


## 未来篇

### 第八章　认知边界：AI 是如何理解世界的（p256）

主线：世界模型、空间智能（World Labs）、从「读万卷书」到「行万里路」、因果与系统 2 思维。

- 「世界模型」和现在的大语言模型，差别到底在哪？为什么说它可能定义 AI 的下一个前沿？
- World Labs 用「空间智能」重新定义前沿——空间智能解决的是什么，语言模型做不到的事？
- 从「读万卷书」到「行万里路」，AI 要真正理解世界，缺的是数据、身体，还是「行动」本身？
- 从「画得像」到「懂因果」——现在的生成式 AI 是「统计拟合」还是「真的理解」？你用什么标准判断？
- 「系统 2 思维 / 慢思考」借的是认知科学的双系统理论——让 AI「慢下来」为什么反而更强？
- 这一章是全书的「未来篇」，读完你自己的判断：AI 能跨过认知边界吗，还是会撞上一堵墙？

### 结语　站在巨人的肩膀上，抓住未来（p269）

- 作者说「站在巨人的肩膀上」，这些「巨人」是谁？你读完后心里的巨人名单变了吗？
- 全书从模型讲到芯片、从海外讲到中国、从当下讲到认知边界——如果只能记住一个判断，会是哪个？
- 「抓住未来」——这本书给你的是信心、焦虑，还是一张具体的行动清单？你打算怎么用它？


## 读完之后（给自己）

- 哪一章让你最意外？哪一章的观点你已经认同？
- 八个章节里，哪三个问题你现在就能回答，哪三个还答不上来？答不上来的就是下一步要补的。
- 把你的答案写进知识图谱对应节点的「我的答案」里，别让它停在「读过」。`,feishuUrl:"https://my.feishu.cn/docx/NdTqdnDshohyZnx1MjDcogwynXf"},{id:"fs-QGP3dFMPZodGm1xEC9JcBYs7n6f",category:"reading",title:"天涯合集整理 · 筛选说明与总览",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"目标：把 `D:\\新建文件夹\\天涯合集` 沉淀到飞书。**不放原文**，先筛有意义的文章，再逐篇提炼归纳。本篇说明筛选口径与结果，附六组分册索引。 一、处理规模 目录共 **147 个文件**，其中 PDF 108 个，…",body:`> 目标：把 \`D:\\新建文件夹\\天涯合集\` 沉淀到飞书。**不放原文**，先筛有意义的文章，再逐篇提炼归纳。本篇说明筛选口径与结果，附六组分册索引。


## 一、处理规模

- 目录共 **147 个文件**，其中 PDF 108 个，其余为 docx / zip / rar / chm / ppt / 图片 / mp3 等。
- 对 108 篇 PDF 逐一做"认知价值"判断，初筛 **入选 57 篇**、**排除 44 篇**（另有 9 篇可选项中 3 篇补入选）。
- 后经用户质疑、逐篇复核被排除内容，又补回 **5 篇**：红楼考证 1 篇（原被标题误伤，实为高密度红学考证）+ 术数文化 4 篇（作为民俗文化样本观察，非当知识/真理）。**最终入选 62 篇**。
- 对入选篇逐个提取正文（文字版用 PyMuPDF，扫描版用 RapidOCR 抽样页），再从全文中抽取开头、关键观点句与抽样段落作为归纳素材，人工提炼成六组分册。**全部为归纳，不搬运原文。**
- **详版重写（本次）**：按用户反馈"太简短、不知道里面写的什么"，六册全部重写为详版——每篇按「这篇讲什么 → 关键论点与论据 → 阅读提醒」展开，讲清具体论点、案例、数据，而非一句点评。
- **股票类暂不做**：按用户要求，9 篇纯股票/期货/证券交易技术类文章（土匪版教你炒股票、缠论108课大纲、群友顶分型操作法、戏说牛市何时崩盘、16年股龄、短线追涨停、市场心理贪嗔痴慢疑、期货实盘《空》、老黄第六季）本次跳过，不计入详版归纳。因此 01 册由 32 篇调整为 **23 篇**非股票类。


## 二、筛选标准

保留（有认知价值）：

- 经济金融与投资：市场认知、宏观大势、房产置业、行业与创业赚钱。
- 历史军事与地缘：战争史、大国博弈、历史人物。
- 社会纪实与人性：江湖骗局、特殊职业见闻、刑侦与记者纪实。
- 思维成长与认知：阶层流动、职业规划、科普认知。

排除（无沉淀价值或风险）：

- 灵异鬼故事、恐怖惊悚（如《青囊尸衣》《每夜一个鬼故事》《宜昌鬼事》）。
- 网络小说 / 玄幻武侠（如《暗海沉沙》《覆帝记》《五大贼王》《烟云》）。
- 风水算命 / 玄学预测——**复核后调整**：其中 4 篇有完整术语/源流体系，改作"民俗文化样本"补入（见 06 册）；其余仍排除。
- 猎奇八卦、情感秘史、未证实猎奇贴（如《女性秘史》《阿娇回复整理》《狐狸精修炼秘笈》）。
- 悬疑/探险小说——复核确认《心理大师》（作者自述是悬疑小说）、《伏羲密码》（读者称"楼主的小说"）、《我当道士那些年》（术士网文）为虚构故事，维持排除。

标准一句话：**留下"读完能形成判断或框架"的，剔除"纯消遣、纯猎奇"的；玄学按文化样本处理、小说维持排除。**


## 三、六组分册索引

| 分册 | 篇数 | 主题 | 版本 |
|-|-|-|-|
| 01-经济金融与投资 | 23 | 投资认知 / 宏观大势 / 房产置业 / 行业创业（股票交易类 9 篇暂不做） | 详版 |
| 02-历史军事与地缘 | 7 | 战争史 / 大国博弈 / 历史人物 | 详版 |
| 03-社会纪实与人性 | 14 | 江湖骗局 / 特殊职业 / 刑侦记者纪实 | 详版 |
| 04-思维成长与认知 | 4 | 阶层流动 / 职业规划 / 科普认知 | 详版 |
| 05-红楼梦考证与传统文化 | 1 | 红学考证（复核补入） | 详版 |
| 06-传统术数文化观察 | 4 | 术数源流 / 相术 / 五术 / 占卦规矩（复核补入） | 详版 |
| **本次整理合计** | **53** | 六册详版（另 9 篇股票类暂不做） |  |
| （历史入选总数 62） |  | 含本次暂不做的股票类 9 篇 |  |


## 四、阅读提醒

- **时效性强**：房产、宏观、行业判断类文章写于不同年份（2005\\~2023），结论须按当下行情重新校验，读的是推理框架不是点位结论。
- **立场鲜明**：论坛帖多为一家之言（如全球经济怪现象、大变局），宜作视角补充，需交叉验证。
- **详版归纳而非原文**：每篇按"这篇讲什么 → 关键论点与论据 → 阅读提醒"展开，讲清具体论点、案例、数据；需要原文细节时再回到本地 PDF。
- **时效与立场**：房产/宏观/行业判断写于 2005\\~2023 不同年份，读推理框架不读点位结论；论坛帖多为一家之言，宜作视角补充、交叉验证。


## 五、飞书分册链接（点击直达）

- [01 经济金融与投资（32篇）](https://my.feishu.cn/docx/Kv1vdtRIFoJPICxceOHcUCJ2nCd)
- [02 历史军事与地缘（7篇）](https://my.feishu.cn/docx/D2epdJuQhouHx8xWbCpcCfp0nIc)
- [03 社会纪实与人性（14篇）](https://my.feishu.cn/docx/YbV3dAveiovdU7x2Dbdc3txmnnf)
- [04 思维成长与认知（4篇）](https://my.feishu.cn/docx/SCM1d05a6oOBZkxZrfDcCbtQnWd)
- [05 红楼梦考证与传统文化（1篇·复核补入）](https://my.feishu.cn/docx/CCxHd3oCWoZ2zkxA58mcMnstnXc)
- [06 传统术数文化观察（4篇·复核补入）](https://my.feishu.cn/docx/STDfdaJTQoFm4Ax2OFqcEAIInCg)


## 六、原文全文保留（2026-11-26）

按用户要求，四类文章的**原文全文从"只放归纳"改为全文保留，并上传飞书云空间；其余两类（社会纪实、思维成长）的原文全文删除。六册详版归纳全部保留，不受影响。**

保留全文共 35 篇、约 485 万字，按四类分文件夹：

- 宏观经济 23 篇
- 历史军事与地缘 7 篇
- 红楼考证 1 篇
- 传统术数 4 篇

> 飞书云空间总入口：https://my.feishu.cn/drive/folder/PAYufmoWTlv9JQdXMY2cy2cMnMN

说明：

- 全文为 txt，已去除 PDF 页标记、合并断行，内容完整未删句；可在飞书在线预览或下载。
- 股票/期货交易技术类未纳入全文保留，延续"股票类先不做"的口径。
- 删除的只是本地提取稿；源 PDF 仍在 \`D:\\新建文件夹\\天涯合集\`，需要时可随时重新提取。`,feishuUrl:"https://my.feishu.cn/docx/QGP3dFMPZodGm1xEC9JcBYs7n6f"},{id:"fs-PL9qd0HkfoTstZxbIJCcQXQYn4f",category:"reading",title:"心理知识库 · 首页",date:"2026-11-27",tags:["读书笔记","飞书同步"],desc:"这里有从「心理知识库」完整搬运来的 **942 个节点 / 909 篇正文 / 约 481 万字**，按原四大板块的层级组织，每篇都可点击阅读。 🚀 从这里开始 **精选学习路径** — 5 条路径把核心栏目串起来（情绪…",body:`这里有从「心理知识库」完整搬运来的 **942 个节点 / 909 篇正文 / 约 481 万字**，按原四大板块的层级组织，每篇都可点击阅读。

## 🚀 从这里开始

- [**精选学习路径**](https://my.feishu.cn/docx/PcOydJAlboXFIfx4KW2c5u3KnTf) — 5 条路径把核心栏目串起来（情绪 → 自我 → 关系 → 困扰求助 → 系统打基础），适合"想学 but 不知从哪下手"。
- [**全量知识地图**](https://my.feishu.cn/docx/EqhldvwXVoR57px9OQdcKguNncA) — 942 个节点带链接的完整目录，适合"查某个概念/直接找某篇"。

## 📚 四大板块

1. **认识自己与关系**（84 篇）— 情绪梳理、自我认知、原生家庭、亲密关系、人际关系、职场心理、自我成长等。
2. **系统学习心理学**（734 节点）— 普通/发展/社会/认知/人格/生理/变态/测量/积极 九大分支的系统课程。
3. **心理困扰与求助**（83 篇）— 抑郁、焦虑、强迫、创伤、人格障碍、成瘾、睡眠等障碍的识别与求助。
4. **深度好文专栏**（35 节点）— 认识自己/理解关系/理解大脑/理解世界的精选 PDF 文章。

## ⚠️ 提醒

- 内容搬运自他人团队制作的知识库，**仅供个人学习，注意版权**。
- 心理知识用于理解和自助，**不能替代专业诊断**；持续困扰请找精神科医生或心理咨询师。`,feishuUrl:"https://my.feishu.cn/docx/PL9qd0HkfoTstZxbIJCcQXQYn4f"},{id:"fs-RJrzdKa89okwHRxiRN8cYSltnte",category:"tech",title:"旧索引 · 表格版（已被知识地图取代）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:'这份索引不是目录，是**关系图**。目录只回答"有哪些笔记"，它还要回答"这篇和那篇是什么关系"。 维护规则只有一条：**每加一篇笔记，先在这里登记它挂在谁下面。** 一、Web 动画之旅（在读） 一条从"为什么要有动画…',body:`这份索引不是目录，是**关系图**。目录只回答"有哪些笔记"，它还要回答"这篇和那篇是什么关系"。

维护规则只有一条：**每加一篇笔记，先在这里登记它挂在谁下面。**


## 一、Web 动画之旅（在读）

一条从"为什么要有动画"走到"用什么工具做动画"的线。

| 序 | 笔记 | 一句话 | 在链条上的位置 |
|-|-|-|-|
| 01 | [Web 动画基础与发展史](https://my.feishu.cn/docx/Ouv4d3wtKoD0XPx1elkcG3OJnVf) | 从 GIF、Flash、SMIL、CSS 到 JS 的五段演进，加上动画到底解决什么问题、什么时候会变成坏事 | **起点**：给出坐标。后面所有技术选择都能在这里找到出处 |
| 14 | [深度解析 CSS 动画的填充模式](https://my.feishu.cn/docx/PwE4d5y1aoHxylxv9mrcUz9Znxf) | 只讲 \`animation-fill-mode\` 一个属性：none / forwards / backwards / both 到底差在哪 | **纵深**：从 01 的"CSS 动画"那一节往下钻一层 |
| 37 | [最佳 Web 动画库](https://my.feishu.cn/docx/Ri6wdJ9qCoKVeUxEH3NclSpWnjg) | CSS 动画库与 JS 动画库各一批，Animate.css、GSAP、Framer Motion 这些怎么选 | **落地**：01 讲原理、14 讲细节，37 讲别自己写 |

### 这三篇的关系

\`\`\`
01 基础（有坐标）
   ├── 14 填充模式（钻进一个属性）
   └── 37 动画库（决定用什么工具写）
             ↓
       CSS 动画实验室（把结论做成能点的 demo）
\`\`\`

### 配套 demo

- **CSS 动画实验室** → 个人网站 \`/apps/css\`（微前端子应用，六个纯 CSS 实验）
- 14 里「案例：封面动画」→ 对应实验室里的「逐字浮现」
- 14 里四种填充模式 → 对应实验室里的「填充模式」四格并排
- 37 里提到的库 → 暂无 demo，后续若要试 GSAP / Framer Motion 再补一个子应用

### 待办

- [ ] 14 里的 \`animation-fill-mode\` 注意事项，整理成一份速查表

- [ ] 37 里的库按"要不要引入依赖"分成两组，做一张选择流程图

- [ ] 01 的"动画的双刃剑"（闪烁、滚动、延迟加载）反过来写成小红书选题


## 二、其他分组（占位，等笔记进来）

- **CSS 基础与布局**：（空）
- **JavaScript**：（空）
- **工程化 / 微前端**：（空）
- **AI 产品实践**：（空）
- **读书笔记（非技术）**：（空）


## 三、我怎么用这份索引

1. 读完一篇，先在这里加一行：标题 + 一句话 + 在链条上的位置。
2. 如果有上下游，补一句"它接在哪篇后面"。**没有关联的笔记就是散装笔记**，宁可硬想一条出来。
3. 有 demo 的，把 demo 地址挂在笔记下面，让理论和"我实现过"绑在一起。
4. 每周末扫一眼"待办"，挑一条推进，不贪多。

## 四、原文 demo 全量清单（39 个，逐个实现进度）

来源：01 篇 18 个 + 14 篇 21 个。复刻方式：原文文字描述 + 原文截图逐帧看效果 + 重写实现（CodePen 源码抓不到），每个实验室 demo 都标注原 pen 链接可对照。

### 01《Web 动画基础与发展史》

| 章节 | pen | 内容 | 状态 |
|-|-|-|-|
| SVG 动画（SMIL） | [xxmBvpy](https://codepen.io/airen/full/xxmBvpy) | 信箱与纸飞机（SVG+CSS） | ✅ 已复刻 · 实验室 p8 |
| SVG 动画（SMIL） | [ZEVZzbM](https://codepen.io/airen/full/ZEVZzbM) | 啤酒杯气泡（SMIL animate） | ✅ 已复刻 · 实验室 p9 |
| CSS 动画 | [ZyVKqW](https://codepen.io/airen/full/ZyVKqW) | 3D 立方体 Loading | ✅ 已复刻 · 实验室 p10 |
| CSS 动画 | [PoXgWqe](https://codepen.io/airen/full/PoXgWqe) | CSS 动画示例 | ⬜ 待复刻 |
| CSS 动画 | [zYyXNzB](https://codepen.io/airen/full/zYyXNzB) | filter 过渡（sepia/grayscale） | ✅ 已复刻 · 实验室 p11 |
| CSS 动画 | [wvmjomb](https://codepen.io/airen/full/wvmjomb) | 无限跑马灯（Ryan Mulligan） | ✅ 已复刻 · 实验室 p12 |
| CSS 动画 | [wvRZgXZ](https://codepen.io/airen/full/wvRZgXZ) | 跑马灯（airen 版） | ⬜ 待复刻（与 wvmjomb 同效果） |
| CSS 动画 | [abPxpQw](https://codepen.io/airen/full/abPxpQw) | CSS 动画示例 | ⬜ 待复刻 |
| CSS 动画 | [oNJOBrd](https://codepen.io/airen/full/oNJOBrd) | CSS 动画示例 | ⬜ 待复刻 |
| JavaScript 动画 | [poqBere](https://codepen.io/airen/full/poqBere) | JS 动画示例 | ⬜ 待复刻 |
| JavaScript 动画 | [PNGGaV](https://codepen.io/airen/full/PNGGaV) | Rachel Nabors 案例 | ⬜ 待复刻 |
| JavaScript 动画 | [xxmedjx](https://codepen.io/airen/full/xxmedjx) | JS 动画示例 | ⬜ 待复刻 |
| 动画减少认知负担 | [gOZyRWK](https://codepen.io/airen/full/gOZyRWK) | 减少认知负担示例 | ⬜ 待复刻 |
| 动画提供反馈（交互反馈） | [oNJOwJE](https://codepen.io/airen/full/oNJOwJE) | 交互反馈示例 | ⬜ 待复刻 |
| 动画可预测操作结果 | [jWBqNa](https://codepen.io/airen/full/jWBqNa) | 可预测性示例 | ⬜ 待复刻 |
| 动画可预测操作结果 | [MWZRvwb](https://codepen.io/airen/full/MWZRvwb) | 可预测性示例 | ⬜ 待复刻 |
| 动画吸引用户的注意力 | [LYMvjeX](https://codepen.io/airen/full/LYMvjeX) | 吸引注意力示例 | ⬜ 待复刻 |
| 动画提供了空间定位 | [BavEwbY](https://codepen.io/airen/full/BavEwbY) | 空间定位示例 | ⬜ 待复刻 |

### 14《深度解析 CSS 动画的填充模式》

| 章节 | pen | 内容 | 状态 |
|-|-|-|-|
| 从困惑启程 | [QWYVqEa](https://codepen.io/airen/full/QWYVqEa) | 困惑案例 | ⬜ 待复刻 |
| 从困惑启程 | [mdvGqRx](https://codepen.io/airen/full/mdvGqRx) | 困惑案例 | ⬜ 待复刻 |
| 从困惑启程 | [YzBOEBj](https://codepen.io/airen/full/YzBOEBj) | 困惑案例 | ⬜ 待复刻 |
| 从困惑启程 | [BaMOJWy](https://codepen.io/airen/full/BaMOJWy) | 困惑案例 | ⬜ 待复刻 |
| 动画填充模式是什么？ | [jOdvJVR](https://codepen.io/airen/full/jOdvJVR) | 概念演示 | ⬜ 待复刻 |
| 动画填充模式是什么？ | [vYbzPmp](https://codepen.io/airen/full/vYbzPmp) | 概念演示 | ⬜ 待复刻 |
| 动画填充模式是什么？ | [XWOPGYj](https://codepen.io/airen/full/XWOPGYj) | 概念演示 | ⬜ 待复刻 |
| 动画填充模式是什么？ | [qBgMvLP](https://codepen.io/airen/full/qBgMvLP) | 概念演示 | ⬜ 待复刻 |
| 深度解析 | [xxMaoqE](https://codepen.io/airen/full/xxMaoqE) | 深入解析演示 | ⬜ 待复刻 |
| none | [WNPabPR](https://codepen.io/airen/full/WNPabPR) | none 模式 | ✅ 已覆盖 · 实验室 p13 第 1 讲 |
| forwards | [BaMqoKV](https://codepen.io/airen/full/BaMqoKV) | forwards 模式 | ✅ 已覆盖 · 实验室 p13 第 1 讲 |
| backwards | [RwveWRL](https://codepen.io/airen/full/RwveWRL) | backwards 模式 | ✅ 已覆盖 · 实验室 p13 第 1 讲 |
| both | [QWYZjEz](https://codepen.io/airen/full/QWYZjEz) | both 模式 | ✅ 已覆盖 · 实验室 p13 第 1 讲 |
| both | [Jjxmrjw](https://codepen.io/airen/full/Jjxmrjw) | both 案例 | ⬜ 待复刻 |
| both | [oNmaGGv](https://codepen.io/airen/full/oNmaGGv) | both 案例 | ⬜ 待复刻 |
| 注意事项 | [rNPqpPp](https://codepen.io/airen/full/rNPqpPp) | 注意事项演示 | ⬜ 待复刻 |
| 注意事项 | [abXRqoa](https://codepen.io/airen/full/abXRqoa) | 注意事项演示 | ⬜ 待复刻 |
| 注意事项 | [BaMqYjL](https://codepen.io/airen/full/BaMqYjL) | 注意事项演示 | ⬜ 待复刻 |
| 注意事项 | [OJdBQQp](https://codepen.io/airen/full/OJdBQQp) | 注意事项演示 | ⬜ 待复刻 |
| 注意事项 | [RwveQEo](https://codepen.io/airen/full/RwveQEo) | 注意事项演示 | ⬜ 待复刻 |
| 案例：封面动画 | [QWYZmNZ](https://codepen.io/airen/full/QWYZmNZ) | 封面动画原案例 | ✅ 已复刻 · 实验室 p7 |

**进度：已覆盖 30 / 39（详见文末第二批记录）。剩余 9 个为同概念变体，标记不再单独复刻。** 复刻节奏：每次开工批处理 5-6 个，优先 14 篇（都在讲填充模式，和 p1 关联最紧），再回来清 01 篇的 JS 动画与「动画的作用」部分。全部清零后，这篇清单就是这篇文章的完整消化记录。

## 五、第二批完成记录（2026-11-11 23:20）

新增三个面板，18 个 demo，覆盖 15 个 pen：

**「14·五个坑」（p14）**——覆盖 9 个 pen：QWYVqEa（fadeOut 弹回）、mdvGqRx（手动 opacity hack）、YzBOEBj（延迟期闪现）、BaMOJWy（transition hack）、Jjxmrjw（只写 50% 帧）、oNmaGGv（50% 等价展开）、rNPqpPp（backwards+reverse）、abXRqoa（方向首帧表）、BaMqYjL（alternate×2 的末帧）。按「三个坑 + 三个真相」组织，每个都能播放对比。

**「01·动画的七个作用」（p15）**——覆盖 6 个 pen：gOZyRWK（菜单展开·认知负担）、oNJOwJE（按钮反馈）、MWZRvwb/jWBqNa（拖拽落点预览·可预测结果）、LYMvjeX（灯泡·吸引注意）、BavEwbY（TodoList·空间定位）+ 全屏模态（防迷失）。GSAP 原件改为原生实现。

**「01·JS 动画」（p16）**——覆盖 poqBere（GSAP 导航 → 原生磁吸复刻）、xxmedjx（WAAPI 时间线控制）、PNGGaV（rAF 缓动跟随）。

**进度更新：累计覆盖 30/39 pen。** 剩余 9 个为同概念的变体示例（PoXgWqe、abPxpQw、oNJOBrd、wvRZgXZ、OJdBQQp、RwveQEo、vYbzPmp、XWOPGYj、qBgMvLP），按已定原则不再单独复刻，标记为「已被同概念 demo 覆盖」。`,feishuUrl:"https://my.feishu.cn/docx/RJrzdKa89okwHRxiRN8cYSltnte"},{id:"fs-Rd6Ud9f8oonuFjxkekzcGa5SnUg",category:"tech",title:"Agent 工具箱（5 个开源项目 · 2026-11-12）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"出处：公众号「莫理」《分享 5 个非常适合喂给 Agent 的开源项目》（2026-11-11）。核心观点：AI 把执行接走之后，比的是提出问题的能力。 五个工具，按对我的用法排序： 已装成 Skill 的三个（可以直接…",body:`出处：公众号「莫理」《分享 5 个非常适合喂给 Agent 的开源项目》（2026-11-11）。核心观点：AI 把执行接走之后，比的是提出问题的能力。

五个工具，按对我的用法排序：

## 已装成 Skill 的三个（可以直接用）

| 工具 | 仓库 | 一句话 | 对应场景 |
|-|-|-|-|
| Archify | github.com/tt-a1i/archify | 给 Agent 的画图工具：一段描述或一个仓库，出可交互的架构图/流程图/时序图，独立 HTML，10 种图型 | 想法盒子的流程演示、小程序交互图、系统结构讲解 |
| pixelfx | github.com/patch-gg/pixelfx | 244 种代码生成的像素特效（火球/闪电/斩击），可导出透明精灵图 + JSON 进 Godot/Unity/Phaser | 游戏线：打击感调试、角色蓄力-命中-收招整套动效 |
| ascii.rest | github.com/bas3line/ascii | 241 个字符动画（海浪/极光/加载器/图表），npm 包或免装 HTML 标签，图片可转字符画 | 小红书配图、网站加载动效、README 横幅 |

Skill 已装在本机 \`C:/Users/46324/.workbuddy/skills/\` 下的 \`archify\`、\`pixelfx\`、\`ascii-rest\` 三个目录（SKILL.md 为官方原文 + 本环境网络注意事项）。

## 待用的两个（要用时再说）

| 工具 | 仓库 | 一句话 | 什么时候用 |
|-|-|-|-|
| Awesome MCP Servers | github.com/punkpeye/awesome-mcp-servers | 最全的 MCP 工具目录，配套检索站 Glama（glama.ai） | 想让 Agent 干某件事但找不到入口时，先去 Glama 搜，再把服务详情页链接发给 Agent 接入 |
| REA | github.com/morluto/rea | 给 Agent 的逆向分析 MCP：读现成软件的文件和运行行为，搞懂某功能怎么实现再复刻 | 想抄某个软件的交互/功能实现时；成本高，非首选 |

## 用法备忘

- Archify 的标准提示词格式：「用 Archify 画出……」或「用 Archify 一页回答……」，后续可继续说「添加 xx 步骤」「突出 xx 路径」。
- pixelfx 的制作循环：找现有效果做底 → 改参数 → \`node tools/render.mjs\` 出 contact sheet → 修最差的一帧 → 导出精灵图。测打击感：同一斩击做两个版本只改命中停顿，并排播。
- ASCII 生成自家字符画：\`ascii.rest/kit\` 一行代码出结果，如 \`sea({palette:"ocean"})\`；写 README 用 SVG 输出。

## 前端 Skill 清单（2026-11-12 补录）

来源：公众号「Kryon 大前端架构师」《前端 Skill 总清单：50 个常用 Skill 链接，一篇收齐》。原文 50 个，按当前技术栈（个人网站 React18+Vite+Three.js；工作线 Vue2/3 组件库；CSS 实验室；无头浏览器自测）筛出值得留意的 8 个，其余按需去原文翻。

### 第一梯队（对现有项目直接有用）

| Skill | 链接 | 用在哪 |
|-|-|-|
| vercel-react-best-practices | skills.sh/vercel-labs/agent-skills/vercel-react-best-practices | React 性能优化、组件设计，装量 221.5K 最高；个人网站重构时用 |
| frontend-design | skills.sh/anthropics/skills/frontend-design | Anthropic 官方，页面视觉落地；首页「炫酷化」动工时挂上 |
| fixing-motion-performance | skills.sh/ibelick/ui-skills/fixing-motion-performance | 动效卡顿优化；CSS 实验室 13 组 demo 和后续 Bits 组件的性能体检 |
| webapp-testing | skills.sh/anthropics/skills/webapp-testing | 官方 Web 测试技能；替代/补充现在手写的 CDP 截图验证流程 |

### 第二梯队（对工作线 Vue 有用）

| Skill | 链接 | 用在哪 |
|-|-|-|
| vue-best-practices | skills.sh/hyf0/vue-skills/vue-best-practices | Vue 工程规范，海康 Vue2/3 项目维护参考 |
| vue-router-best-practices | skills.sh/antfu/skills/vue-router-best-practices | antfu 出品，路由与权限设计 |

### 待用（到了再装）

- playwright-best-practices（E2E 自动化，网站部署后做回归）
- shadcn（装量 24.2K，若以后引入 shadcn/ui 再说；当前站点是手写 CSS，不需要）

### 备注

- 安装方式统一为 skill 生态标准；本机沙箱网络受限的注意点同上（Archify 条目）。
- 完整 50 个清单见原文：mp.weixin.qq.com/s/PajgttxhdwREiSfC8VE6dQ
- 与 React Bits（reactbits.dev / vue-bits.dev）是互补关系：Bits 是「抄源码的组件」，Skill 是「改代码的方法论」，首页炫酷化时两个一起用。

## 原文已归档

8 个前端 skill 的原文全文（SKILL.md + 附带文件）已整理进知识库「🧩 Skill 原文件库（8 个 · 原文）」，父页带完整压缩包，可直接给公司同事取用。`,feishuUrl:"https://my.feishu.cn/docx/Rd6Ud9f8oonuFjxkekzcGa5SnUg"},{id:"fs-AfsKdJe6Vo3DJQx0WPQciZlFnrf",category:"tech",title:"前端灵感入口（12 站收藏单）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"做页面卡住的时候，缺的往往不是教程，是看得够多。这篇收藏单按用途分组，找灵感先想清楚「我要找哪类」，再去对应的站。 来源：公众号「Kryon 大前端架构师」，原文 12 个站全收，下面按使用场景重排。 | 场景 | 去哪…",body:`做页面卡住的时候，缺的往往不是教程，是看得够多。这篇收藏单按用途分组，找灵感先想清楚「我要找哪类」，再去对应的站。

来源：公众号「Kryon 大前端架构师」，原文 12 个站全收，下面按使用场景重排。

| 场景 | 去哪 | 看什么 |
|-|-|-|
| 拆解实现 | [CodePen](https://codepen.io) | CSS 动画、交互 demo，能直接读源码——CSS 实验室的 demo 基本都从这儿来 |
| 页面风格 | [Dribbble](https://dribbble.com) / [Behance](https://www.behance.net) / [Awwwards](https://www.awwwards.com) | 视觉概念到完整品牌站；Awwwards 找「网页还能这样做」 |
| 真实网站案例 | [Godly](https://godly.website) / [Land-book](https://land-book.com) / [One Page Love](https://onepagelove.com) | 首屏结构、排版、落地页；个人网站首页动工时先逛这三个 |
| 交互和微动效 | [UI Movement](https://uimovement.com) | 按钮反馈、切换、加载态这类细节 |
| 组件直抄 | [Collect UI](https://collectui.com) / [Uiverse](https://uiverse.io) / [Figma Community](https://www.figma.com/community) | 按类型找现成组件（登录页/卡片/开关），Uiverse 很多能直接改造 |
| 移动端产品流 | [Mobbin](https://mobbin.com) | 真实 App 的页面流、表单、onboarding——想法盒子小程序动工时用 |

和已有资料的关系

- CodePen 是「Web 动画之旅」39 个 pen 的老家，覆盘笔记时回去翻
- 个人网站首页炫酷化：先逛 Godly / Awwwards 定方向，再用 React Bits / border-beam 这类库找素材
- 想法盒子小程序：Mobbin 看 onboarding 流，Collect UI 找组件`,feishuUrl:"https://my.feishu.cn/docx/AfsKdJe6Vo3DJQx0WPQciZlFnrf"},{id:"fs-RjjddA17SoeZf5xcL63cZn6znjK",category:"tech",title:"踩坑手册 · 实战问题与解法",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"记录做个人站（React 18 + Vite + wujie 微前端）和五个实验室子应用过程中真实踩过的坑。每条都经过实测验证，格式：**坑 → 症状 → 解法**。持续更新，最新在末尾。 网络与依赖 国内环境拉开源包的…",body:`> 记录做个人站（React 18 + Vite + wujie 微前端）和五个实验室子应用过程中真实踩过的坑。每条都经过实测验证，格式：**坑 → 症状 → 解法**。持续更新，最新在末尾。

## 网络与依赖

### 1. 国内环境拉开源包的可用通道

- **可用**：GitHub API（api.github.com）、jsDelivr、registry.npmmirror.com
- **不可用**：raw.githubusercontent.com、npm 官方 registry、git clone 直连
- **解法**：批量拉文件用 GitHub API \`git/trees?recursive=1\` 列清单 + \`contents\` API 逐个取 download_url；整仓拉取用 \`api.github.com/repos///tarball/\` 一次下载

### 2. C 盘根附近 NTFS 硬链接计数（nlink）被弄坏

- **症状**：在 \`C:\\\`、\`C:\\lubo\` 等目录下删文件后重新创建同名文件，nlink 停留在 2，某些依赖硬链接计数的工具（如 Archify 的原子发布门禁）必挂
- **解法**：这类工具的输出/工作目录放到 \`%TEMP%\`，避开 C 盘根附近

## CSS

### 3. \`@property\` 注册的变量传不进伪元素

- **症状**：在宿主元素上注册 \`--beam-angle\` 并用 JS 驱动，伪元素里的光束钉在原地不动
- **原因**：\`@property\` 默认 \`inherits: false\`，变量值不会继承给 \`::before\`/\`::after\`
- **解法**：注册时写 \`inherits: true\`；同理，想让 JS 每帧改 \`element.style.setProperty('--angle', …)\` 生效到伪元素，继承链不能断

### 4. 子元素 \`width: 100%\` 顶掉父级容器约束

- **症状**：hero 区内容一直贴着屏幕左边缘，找不到原因
- **原因**：\`.hero-inner\` 写了 \`width: 100%\`，把外层 \`.container\` 的居中约束顶掉了
- **解法**：需要全宽时不要写 \`width: 100%\`，让 block 元素默认行为去继承容器约束；用 \`max-width\` + \`margin: auto\` 做居中链路

### 5. box-shadow 做流动光晕会掉帧

- **症状**：边框光束用大范围 \`box-shadow\` + 动画，帧率明显下降
- **解法**：光束用 \`conic-gradient\` + 两层 mask 相减只留边框环；阴影类效果控制在合成层属性（transform/opacity）上

## React / Vue

### 6. React error #321：hooks 写在外层函数

- **症状**：\`Uncaught Error: Minified React error #321\`（hooks 在非组件函数里被调用）
- **原因**：CDN 场景下图省事把 \`useState\`/\`useEffect\` 写在普通函数里，再手动 \`createRoot().render\` 调用
- **解法**：hooks 必须在真正的组件函数体内；用 \`function Comp() { ...hooks... }\` 包一层再 render

### 7. UMD 场景下拿不到"最新实例"的方法引用

- **症状**：\`createRoot().render()\` 之后保存的是当时的方法引用，组件重挂后句柄断掉
- **解法**：用一个全局 \`lastInstance\` 在组件 \`useEffect\` 里持续保存最新实例，外部按钮永远调 \`lastInstance.api.xxx()\`

### 8. Vue 字色不随进度还原（数据驱动 vs DOM 操作）

- **症状**：解密文字动画里手动改 class，Vue 重渲染时被吞掉
- **解法**：改成响应式数据驱动（\`revealed\` Set + \`:class\`），让 Vue 自己 patch，不要在 Vue 管辖范围内手动操作 DOM

## 微前端（wujie）

### 9. wujie 会把子应用外链 \`\` 改成异步加载

- **症状**：子应用初始化代码比框架运行时（React/Vue UMD）先跑，报 undefined；直开子应用 URL 一切正常，嵌进宿主就挂
- **解法**：初始化等运行时就绪再执行——轮询 \`typeof React !== 'undefined'\`（设 10s 超时兜底），就绪后再 mount

### 10. wujie 环境下 Vue 运行时"加载了但没执行"

- **症状**：Network 面板里 vue.global.prod.js 请求成功，页面里 \`typeof Vue === 'undefined'\`；React 正常
- **排查**：CDP 直接在 iframe 里 eval 脚本文本可以定义 Vue → 说明不是 CSP，是 wujie 对该外链脚本的执行环节丢了
- **解法**：不走 wujie 的外链处理——Vue 改成内联脚本自己 \`fetch('./vendor/vue.global.prod.js')\` + \`new Function\` 执行，加载成功后自动撤掉"框架缺失"警告

### 11. importmap 在 wujie 下不可靠，动态 import 可用

- **症状**：子应用内 \`\` 走 three 官方推荐写法，宿主内挂
- **解法**：经典 \`\` + \`await import('./vendor/three.module.min.js')\` 动态导入——wujie 不碰动态导入的字符串参数，宿主内实测稳定

### 12. 子应用 vendor 一律本地化

- CDN 版偶发加载失败、公司内网/离线环境直接挂。\`vendor/\` 目录随仓库走，UI 库运行时（react/vue/three 及其 addons）全部本地化，import 路径改指本地文件

## Three.js

### 13. three addons 引入本地 ESM 的路径改写

- **症状**：\`Reflector.js\` 等 addons \`import { ... } from 'three'\`，无打包器环境解析不了
- **解法**：把 \`node_modules/three/examples/jsm/\` 下需要的文件拷进 \`vendor/addons/\`，批量替换 \`from 'three'\` → \`from '../three.module.min.js'\`、\`from '../shaders/CopyShader.js'\` → \`from './CopyShader.js'\`。同 URL 拿到的是同一个模块实例，状态共享没问题

### 14. Reflector 反射分辨率在构造时定死

- **症状**：运行时想切"低清反射"省性能，改 options 无效
- **解法**：\`textureWidth/textureHeight\` 绑死在构造参数里，切换只能销毁重建（\`mirror.getRenderTarget().dispose()\` + 重新 new）

### 15. 后期处理链（EffectComposer）接入自己的渲染循环

- **解法**：demo 对象返回可选的 \`render()\` 方法，宿主循环里 \`current.render ? current.render(dt) : renderer.render(scene, camera)\`；resize 时除了 \`composer.setSize()\` 还要 \`outlinePass.setSize(nw, nh)\`，否则描边模糊区域不对

### 16. 悬浮物体动画用 \`position.y += sin(t)\` 会累积漂移

- **症状**：物体越漂越高/越低
- **原因**：\`+=\` 把正弦积分了，不是叠加在基准值上
- **解法**：存 \`userData.baseY\`，每帧 \`pos.y = baseY + sin(t) * amp\`

## 原生 WebGL

### 17. uniform 调用前必须 \`useProgram\`，否则静默 no-op

- **症状**：画面全黑，**控制台零报错、无 JS 异常、无警告**——最阴的坑
- **原因**：WebGL 的 uniform 调用在没有绑定 program 时是 no-op，只留一个 \`gl.getError()\` 的 INVALID_OPERATION，不抛异常
- **定位手段**：逐 demo 二分比对（正常 demo vs 黑屏 demo），\`readPixels\` 读回像素确认 framebuffer 从未被写
- **解法**：\`gl.createProgram()\` + \`linkProgram\` 之后立刻 \`gl.useProgram(prog)\`，再做任何 uniform/buffer 关联

### 18. 切换 WebGL demo 要换 canvas

- **解法**：切 demo 时把旧 canvas remove、新建 canvas 重新 \`getContext\`，context 状态天然干净；省去手动清理 attribute/texture/program 的心智负担

## 工作流

### 19. 飞书批量建文档：先核对再删

- 手滑重复创建过一次文档。删副本前先 \`wiki +node-list\` 核对标题和 obj_token，避免误删原文
- 批量导入用 \`docs +create --doc-format markdown --content @file.md\`，导入后必须 \`docs +fetch\` 抽查内容完整度（超长文档可能截断）


*初始整理：2026-11-12，源自个人站 + 五个子应用（CSS / Bits / Cesium / Three.js / WebGL）的搭建过程。*

### 补录（2026-11-12 · JS / Canvas 实验室）

- **20 · \`::highlight()\` 不支持渐变背景**：Custom Highlight API 只支持绘制子集（background-color / color / text-decoration），\`background-image\` 不生效且无报错。用纯色。
- **21 · \`startViewTransition()\` 的 ready promise 必须 catch**：\`document.startViewTransition(go).ready.catch(()=>{})\`，否则控制台偶发 Uncaught (in promise)。
- **22 · flex 子项被父级 \`align-items: center\` 收缩宽度**：column 圣杯中层 \`flex:1\` 不拉伸像塌了——子容器自己 \`align-items: stretch\` 覆盖继承的居中。
- **23 · CDP 验证时页面不重载，改动永远不生效**：验证脚本只做 click，从不 \`Page.navigate\`，浏览器一直停在首次加载的旧页面——粒子配色连改四版「全无效」，其实一版都没真正跑过。验证脚本第一步永远 navigate（加 \`?v=Date.now()\` 防缓存），或 \`Network.setCacheDisabled\`。速查法：改一个必然可见的东西（比如背景改成红色）看截图变不变。「连续两次修改无效」不是巧合，是信号——先怀疑验证链路，再怀疑代码。
- **24 · Windows 下 CLI 传长内容的两个坑（cmd 行长 + @ 前缀）**：lark-cli 是 .cmd shim，参数走 cmd.exe，单行上限 8191 字符——超过 \\~9KB 的内容直接「命令行太长」（stderr 是 GBK 乱码）。且 CLI 把行首 \`@\` 的 \`--content\` 解析成文件路径引用，正文里 \`@media\` 开头的 CSS 代码块会报 \`invalid file path\`。解法：内容一律写临时文件、以 \`--content "@路径"\` 传入，一次解决两个问题，块还能加大到 8k 字符。判断技巧：报 \`invalid file path\` 而你传的不是文件，就是内容行首有 \`@\`。
- **25 · WebGL 拾取通道后忘绑回默认帧缓冲，画面「冻结」且零报错**：拾取通道 \`bindFramebuffer(pickFbo)\` 后只顾 readPixels，忘绑回 \`null\`——下一帧 render 的 clear 和全部绘制全进了离屏纹理，屏幕永远停在最后一帧。不抛异常不报错，连拍两帧逐字节一致是唯一线索。事件驱动的离屏通道结束时必须绑回 null 并恢复 clearColor，怀疑冻结先查 bindFramebuffer 是否成对。关联：该子应用没有 \`window.__errs\`，render 异常只走 console.error，CDP 验证要挂 Runtime.consoleAPICalled，别依赖页面自报。

## 26. Cesium CustomShader：uniforms 和 varyings 一旦共存，uniform 就不上传

- 症状：给 Model.customShader 挂了一个带 uniforms + varyings 的雪效 shader，不报错、shader 已赋上，但画面完全没变化；把 uniform 换成裸值（material.diffuse = u_snowColor）都没反应，像 shader 没挂上
- 原因：CesiumJS 1.119 的 Model 管线，CustomShader 声明 varyings 后 uniform 上传链路就断了（纯 uniforms 好、纯 varyings 好、共存就灭）。排查花了 5 轮 A/B：全红 shader（无 uniforms 无 varyings）✓ → 只 uniform ✓ → 只 varying ✓ → 共存 ✗，才锁定
- 解法：二选一。要么不用 varyings（fragment 只有 normalEC，眼坐标系没法判「朝上」），要么不用 uniforms 把参数直接烘进 shader 源码、参数变了重建 CustomShader（小 shader 重建很便宜，配 120ms 防抖）。这个坑新版本可能已修，升级时用同一个 A/B 脚本复测
- 连带坑 ①：1.119 的 fragment 里根本没有 normalMC（只给 normalEC，眼坐标随相机转，没法判「朝上」）——要在 vertexMain 里把 vsInput.attributes.normalMC 存进自定义 varying 传下来
- 连带坑 ②：Model.fromGltfAsync resolve 时内部场景图还没算完，立刻读 model.boundingSphere 会抛 Cannot read properties of undefined——重试几帧再取景
- 连带坑 ③：scene.light 默认是真太阳，傍晚太阳在地平线下，白模全被压灰，会误以为 shader 没生效；换固定方向 DirectionalLight 时注意 direction 是光的传播方向（从上往下照要给负 Z），不是「指向光源」

发现于 2026-11-12 cesium 实验室「积雪 CustomShader」面板。

### 27. 大屏 1920 基线 scale 适配：grid 居中 + transform scale 组合会整体跑偏

- **症状**：#screen（1920×1080 固定设计稿）放进 display:grid; place-items:center 的全屏容器，再 transform: scale(k)，1600×900 视口下整屏向右下偏移约 10%——右列被裁、底部告警流水跑出屏，左侧却留黑边，且毫无报错
- **原因**：item 占位仍是未缩放的 1920×1080，比容器大；「grid 居中一个溢出 item + 之后以中心缩放」这两步的视觉合成不符合直觉（溢出量的一半没有如预期回补），位置算出来就是偏的。原文只说了「scale 方案里 canvas 鼠标坐标要反算」，没提居中本身也会翻车
- **解法**：改用大屏项目的事实标准写法——position:absolute; left:50%; top:50%; transform: translate(-50%,-50%) scale(k)，占位与缩放一步到位，数学上明确居中。鼠标反算照旧：(clientX - rect.left) / scale（rect 是缩放后的实际位置，除以当前 scale 得回设计稿坐标），拾取不再偏
- **验证法**：headless Chrome 分别截 1920×1080（scale=1）和 1600×900（scale≈0.83）两张，四边都不该有非对称黑边/裁切

*发现于 2026-11-12 机柜阵列大屏（apps/dc）。*

### 28. 无头 Chrome virtual-time 快进截图：黑屏是测试假象，别急着改代码

- **症状**：--virtual-time-budget 大值（20s+）+ SwiftShader 截 3D 页面，画面全黑但 DOM UI（卡片/KPI/流水）全部正常更新；stderr 同时出现 GL Driver Mojo 错误和每帧 Uncaught TypeError（指向 three 内部）
- **原因**：虚拟时间被瞬间快进耗完，而 SwiftShader 每帧要几百 ms，rAF 队列严重积压——截图发生在首帧画完之前，canvas 是黑的；随后 WebGL 上下文丢失，three 渲染循环每帧抛错。是测试环境的时序/驱动问题，不是页面 bug。派单等重逻辑触发后帧更耗时，更容易踩中
- **解法**：① 换小 budget（3\\~5s）重截，能出来就确认是假象；② 判断金标准：黑屏会话里 DOM 数据流是否仍然正确（任务卡/KPI 在动 = 代码没死）；③ 页面侧加 webglcontextlost 提示层 + 渲染循环 try/catch，上下文丢时不刷屏
- **排查工具**：--enable-logging=stderr --v=0 能拿到 console 消息但一行截断 120 字符；要完整错误可用 window.onerror 写进 document.title，再 --dump-dom 读 title（dump 输出是 GBK 乱码，匹配 ASCII 片段即可）

*发现于 2026-11-12 智能仓储 demo（apps/wms）。*

### 29. 掘金文章 HTML 导出：代码块语言标注不可信，\`\` 里还带 hljs span

- **症状**：把 html 版小册转 markdown 入库，代码块全被标成 \`kotlin\` / \`csharp\` / \`scss\` / \`ini\`，实际内容是 GLSL 和 JavaScript；直接复制文本还会把语法高亮用的 \`\` 一起搬进去
- **原因**：导出页用的是 highlight.js 自动语言猜测，\`language-ini\` 之类是猜错的；且 \`pre > code\` 内部每个 token 都是独立 span
- **解法**：① 转换前先 \`re.sub(r"(?is)<[^>]+>", "", pre内文本)\` 剥干净 span；② 只信任白名单语言（js/ts/html/css/scss/json/bash/glsl/python/vue），其余按内容重判——出现 \`gl_Position|gl_FragColor|uniform|varying\` 判 glsl，出现 \`function|const|let|=>|prototype\` 判 javascript，出现 \`?recursive=1\` 回读比对。
- 最终链路：本地算 sha → 比对远端 → 只传差异 → 建整树（不带 base_tree = 全量替换）→ commit → 强移 refs/heads/main → 回读校验 → 查 Pages 构建 → 抽查线上资源。本地网络抖动会让 curl 抽查随机返回 000，用 api.github.com contents + Accept: vnd.github.raw 比字节数更靠谱。

## 31. 新旧组件类名撞车：全局 CSS 里的旧 .gate 把全屏门禁压成 420px 小卡片

- **症状**：进门页加桌面左右分栏后，左栏品牌区消失，.gate-inner 只有 339px 宽 / 2182px 高。
- **原因**：global.css 里还躺着旧花园页的门禁样式，类名也叫 .gate（max-width: 420px），把全屏 fixed 层压成小卡片；媒体查询里 grid 两列在 339px 容器里 1fr 塌成 0，文字零宽换行高度爆炸。
- **教训**：给全局 CSS 加占位通用名（gate / card / hero）前先全局 grep；旧组件还在用就改成命名空间名（garden-gate），连 keyframes 一起改。
- **诊断套路**：别靠截图猜坐标。Chrome --remote-debugging-port + Node 内置 WebSocket 连 CDP，Runtime.evaluate 直接读 getBoundingClientRect + getComputedStyle，10 秒定位"谁把谁压瘪"。
- **附带坑**：无头 Chrome --window-size=390,844 实际视口 500 宽（桌面 Chrome 最小窗宽），测真手机断点要用 CDP Emulation；Vite dev server 会把浏览器 profile 目录里的文件当项目热重载，--user-data-dir 别放项目里。

## 32. Cesium 1.119 的两个"加载不出来"：被删的类 + 沙箱里量不准的窗口

- **坑一：OpenStreetMapImageryProvider 已被删除**。1.104 废弃、后续移除，1.119 里是 undefined，new 它直接报 Cannot read properties of undefined。唯一稳定的写法是 UrlTemplateImageryProvider 拼 URL + new C.ImageryLayer(provider) 同步构造，别依赖任何具名影像类。
- 网络兜底：先  探活（img 不受 CORS 限制，4 秒超时）再建图层，按 高德(0.2s) → Esri(2.7s) → OSM(本网络直接 000) 顺序探测；运行中瓦片大面积报错自动换源，全挂退 globe.baseColor 纯色地球，Viewer 一定起得来。配一个"换个底图"按钮。
- **坑二：wujie 沙箱里的 window 量不到真实容器**。大屏 scale 适配用 window.innerWidth/innerHeight，但 wujie 里这是隐藏 iframe 的——宿主全屏/改容器时它不同步、resize 事件也不来，HUD 全被裁掉。解法：fit() 量可见容器 getBoundingClientRect（DOM 在主文档 shadow root 里，rect 是真的），再配 300ms 轮询兜底，不依赖任何事件。
- 配套：宿主给大屏类子应用「⛶ 全屏观看」（对包裹层 requestFullscreen，iframe 不需要 allow 属性）和「↗ 新窗口打开」；.stage-big height: calc(100vh - 210px) + :fullscreen 铺满。
- **验证注意**：无头 Chrome fullscreen 视口固定 800×600，截图偶发只合成 canvas 层——别据截图判 HUD 丢失，用 CDP 读 #screen 的 transform matrix 是否换算过才算数。

*发现于 2026-11-13 站点发布与星尘页修复（lubo-fline/wujie）。脚本：publish-dist-reuse.mjs（增量，推荐）。*

> The following content is appended to the document (3 items, HTML format).

33. 起一个"真跑通"的最小 SSR 骨架：三处一眼看不出的小坑

- **背景**：按掘金 NestJS+React SSR 文章搭最小骨架（esbuild 一条链、controller 不做构造注入绕开 emitDecoratorMetadata），再把它冻结成静态解剖面板
- **坑一：rxjs 的 map 收到的是函数**。拦截器里写 \`map((v) => this.injectStyle(v))\`，而 \`injectStyle()\` 是工厂（无参返回 mapper）——mapper 本身被当数据传下去，层层包装后 Nest 收到函数，\`res.send(fn)\` 输出**函数源码**当 HTML（610 字节的 JS 代码，特别迷惑人）。文章里的写法 \`map(this.injectStyle())\` 是先调用拿 mapper，别自作主张改成箭头函数包装
- **坑二：innerHTML 里的  是黑洞**。流水线卡片副标题含 \` + description\` 字样，直接塞进模板字符串，浏览器把 \`\` 当真标签打开，后面所有兄弟节点全被吞进 RCDATA——DOM 少一个卡片、无任何报错。教训：凡是用 innerHTML 拼的动态文本一律先 esc()，包括自己写的"看似安全"的常量
- **坑三：演示"截断"的数据不能预处理**。给面板注入不转义版 HTML 时顺手把 \`\` 之后的内容删了（想"干净点"），结果演示失效——截断实验的生命力恰恰在于让浏览器真实地截断。对照实验要保存原样，坏的就是坏的
- **验证技巧**：srcdoc iframe 继承父文档 URL 作 base，相对路径资源可用；但读它内部状态要等 hydrate 跑完（defer 脚本），onload 就读会得到假阴性，setTimeout(1200) 再读
- **成果**：\`workspace/nestjs-ssr-lab/\`（真服务）+ \`personal-site/public/apps/ssr/\`（静态解剖台，含真 hydrate bundle）。面板数据用 .gen-ssr-panel.mjs 从真服务抓取注入，可重跑

*发现于 2026-11-13 NestJS SSR 骨架与 SSR 解剖台面板。*

## 34. 自写 shader 星云背景：四处"看起来对了其实没对"

- **背景**：门面页换自写 GLSL 星云背景（零依赖，裸 WebGL + 域扭曲 fbm），替代 CSS 极光渐变。首帧就渲染出来了，但四处细节要靠验证才暴露
- **坑一：smoothstep 阈值凭直觉定 1.0，某色直接全无**。fbm 4\\~5 octave 输出集中在 0.45\\~0.75，首版把青色写在 smoothstep(0.52, 1.0, q)——区间上沿根本够不到，画面全是紫色。**调色前先搞清噪声函数的实际值域**，阈值贴着分布定（青 0.42\\~0.82、紫 0.32\\~0.8、品红 r·q 乘积 0.5\\~0.88）
- **坑二：暗部渐变必有 banding**。深空底色到云的大面积低对比渐变，8bit 下断层肉眼可见。一行解法：col += (hash(gl_FragCoord.xy) - 0.5) / 255.0（抖动去色带）
- **坑三：内部分辨率要打折**。无头软渲染（SwiftShader）下 1.5 DPR 全屏 fbm 只有 17fps。星云是低频内容，canvas 内部 0.75 倍分辨率 + CSS 放大肉眼无差，再加 octaves 5→4，fps 直接拉到 61。**给"糊内容"的 canvas 别按物理分辨率渲染**
- **坑四：无头截图的"移动端溢出"是假象**。--window-size=390 实际按 500px 最小窗宽布局、截图裁掉右边——门面卡片在 390 截图里"溢出"，线上真机完全正常（线上版同宽度复现同样溢出 + 探针页实测 innerWidth=500 坐实）。**小于 500 的截图宽度一律不可信**，真断点验证走 CDP Emulation.setDeviceMetricsOverride（已留可复用脚本 verify.cjs：仿真截图 + 控制台错误收集 + 点击流 + FPS 采样）
- **e2e 重跑的隐形状态**：CDP 脚本点过一次「游客模式」后 localStorage 记住门禁，下次跑直接进主页、找不到 .gate-btn-ghost——重跑前先 localStorage.clear() 再导航
- **成果**：\`src/lib/nebulaBg.js\`（preset 0-3 + ?nebula-tune=1 调参面板，reduced-motion 只渲一帧、页签隐藏暂停、卸载时 loseContext）+ gate.jsx/css 接入，未发布（进晚间清单）

*发现于 2026-11-13 门面星云背景。*

## 35. 自绘世界地图 + 飞线：投影、事件、存储各藏一坑

- **背景**：私人花园加"旅行足迹地图"（Canvas 自绘，零依赖，180 国 GeoJSON 随构建发布），点位按时间连成飞线
- **坑一：墨卡托投影下南极洲是无限带**。纬度钳制 ±85° 不能救它——南极多边形延伸到 -90°，逐点钳制会把整个多边形拉成横贯地图底部的巨大梯形。**唯一解法是整体跳过**（properties.name === 'Antarctica'），旅行地图也用不着它
- **坑二：跨 180° 经线的 ring 会拉出横贯直线**（俄罗斯/斐济）。逐点连线时检测相邻点 u 坐标跳变 >0.5 就 moveTo 断开，别 lineTo
- **坑三：React 的 onWheel 是 passive**，e.preventDefault() 直接报错、页面跟着缩放滚走。必须 addEventListener('wheel', fn, {passive:false}) 手动挂
- **坑四：zoom 上限锚定初始 scale**。写成 Math.min(v.s\\*12, v.s\\*factor) 上限会随每次滚轮复利膨胀，形同虚设；存一份 s0，钳制 [s0\\*0.7, s0\\*12]
- **附带**：IndexedDB 加新 store 必须 DB_VERSION++，onupgradeneeded 里判 contains 再建，老数据无损；动画状态（彗星游标）放 ref 不放 state，否则每次重渲染归零跳位
- **验证技巧**：CDP 测"站中站"页面要过**双重门禁**（站点 gate 的 localStorage + 花园的 sessionStorage），都注入后必须 location.reload()；canvas 多半在视口外，点击前先 scrollIntoView 再取 getBoundingClientRect，否则鼠标事件落在视口外静默失效（elementFromPoint 返回 none 就是这条）
- **成果**：\`src/components/travelmap.jsx\`（离屏陆地层 + 动画层分离，reduced-motion 静态虚线）+ \`public/data/world-countries.geo.json\`（251KB）+ idb v3 加 spots store，未发布（进晚间清单）

*发现于 2026-11-13 私人花园旅行地图。*

- **补充（种子足迹上线时踩的）**：①「地图与点位两边都是异步，谁后到谁触发」——自动对准视野最初写在地图 fetch 完成回调里，种子首次种入比 fetch 慢一步就永远不触发；改成 effect 双条件（!loading && spots.length）+ 只做一次的 ref 门闩。②聚簇点位标签会互相叠，canvas 里没有 DOM 自动避让——自绘要自己做贪心避让（量文本宽、与已画标签盒碰撞则下挪一行）。③批量种子放 localStorage 标记防止「删光后复活」，而不是靠查库判空。

## 36. 自绘地图换高德瓦片底图：投影差 0.3% 就够攒出可见偏移

- **背景**：花园旅行地图从 GeoJSON 矢量底图换成高德瓦片（webrd style=8）+ invert 滤镜暗色化，保住霓虹风又拿到真实路网/地名
- **坑一：自算墨卡托用了 85° 钳制，瓦片是 85.0511°**。MERC_MAX 取 ln(tan(45°+42.5°))≈3.133 而标准 Web 墨卡托是 π，v 坐标差 \\~0.3%——低缩放无感，z=15 时累积偏移 60px，点位全飘。接瓦片前先把自己的投影对齐标准（MERC_MAX=π，钳 ±85.0511）
- **坑二：z≤3 的高德瓦片是 179 字节占位图**（HTTP 200 但基本是空白），最小可用层级是 4。选层公式 z=ceil(log2(worldPx/256)) 后要钳下限
- **坑三：ctx.filter 的暗色化要数值化调参，别凭截图猜**。做法：独立页面加载一张瓦片，对同一区域跑多组滤镜采样 RGB（内陆 vs 海域对比），再在成品截图上用 pngjs 采样验证——「看截图猜 RGB」两次都猜偏了
- **坑四：贴图小于 \\~90px 时瓦片糊成马赛克**，不如矢量好看。阈值切换：世界全图保持 GeoJSON 霓虹矢量风（本来也是特色），放大才切瓦片——两种底图风格共存反而成了设计
- **要点**：高德 webrd 瓦片响应带 Access-Control-Allow-Origin: \\*，Image 加 crossOrigin='anonymous' 即可保持 canvas 不被污染（getImageData 探针照常用）；失败瓦片记 Set 不重试，整体失败回落矢量
- **成果**：travelmap.jsx 瓦片层（缓存 300 上限、+0.6px 遮缝、TILE_FILTER+蓝罩调色），矢量兜底双模式，未发布（进晚间清单）

*发现于 2026-11-13 旅行地图高德底图。*`,feishuUrl:"https://my.feishu.cn/docx/RjjddA17SoeZf5xcL63cZn6znjK"},{id:"fs-JxUYdJJmkouz04xale0cXDsSn9g",category:"tech",title:"AI 婚礼微电影教程（LibTV）· 实操 SOP",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：Jack Cui《被严重低估的AI婚礼微电影，2分钟能赚6000元！【附LibTV教程】》（2026-09-21） 原文：https://mp.weixin.qq.com/s/t5KihTnrtSrjfvYwuId…",body:`> 来源：Jack Cui《被严重低估的AI婚礼微电影，2分钟能赚6000元！【附LibTV教程】》（2026-09-21）  
> 原文：https://mp.weixin.qq.com/s/t5KihTnrtSrjfvYwuId20w  
> 工作流模板：https://www.liblib.tv/canvas/share?spaceId=9275651&projectId=3aa49f3dcb1943f49d0964f2dff9bae3  
> 工具：LibTV 1.5（https://www.liblib.tv/）  
> 整理：把 2 分钟微电影的省钱做法拆成可复用的四步流程。

## 一、这个生意的逻辑

- 婚礼微电影市场价：2 分钟以上收费大几千，成本可压到几百块，毛利率约 90%。
- 痛点：新人拍照已属极限，拍微电影演技尴尬；用 AI 把真人换成新婚夫妇形象即可解决。
- 门槛：全程和 Agent 对话完成，零基础可上手；视频里的人物可替换成新人自己，剧情可自定义。
- 作者一版成片（五生五世）成本约 500 元，Seedance 2.5 做主力、Wan 3.0 做补充。

## 二、四步工作流

### 第 1 步：确定剧本

工具：LibTV 1.5（角色造型、导演、编剧功能升级；角色造型可在资产内精细调五官、发型、服装）。

1. 新建画布，所有操作都在一个画布内展开。
2. 点画布下方蓝色圆形，召唤内部 Agent。
3. 对话框下方把"全能创作模式"切换为"剧本创编-原创剧本"。
4. 两步限定剧本风格：

   - **选基础模板**：剧本设定器里选"文旅非遗"题材（自带跨时代元素，适配五生五世 MV）；剧本结构选 1 集，时代背景选"多时代穿越"，核心看点选"双向救赎"，目标受众选"女频"。画风和角色先不设，等 AI 导演分镜时再补。
   - **提示词给故事背景**：
   
     > 我需要拍一版五生五世MV，情侣微电影，从现代Vlog开始，文艺氛围，两人因为一片树叶结缘，走完五世轮回。你先确认五世轮回的基本方向，给我做选择。
5. AI 会给几个方向选择——**剔除非遗部分，保留轮回爱情结构**。约 5 分钟出大纲＋剧本正文，含道具、人物小传。
6. 打磨技巧：

   - AI 直出粗糙，五世区别不突出时，给更具体设定。
   - **给参考最好用**：如让民国剧情参考《钢铁是怎样炼成的》冬妮娅与保尔柯察金，立刻得到想要的效果。
7. 台词硬伤（突然缩字、念着别扭）：直接在对话框让 Agent 改，改动处蓝字、删除处红字，可一键撤回。

**可套用的定稿剧本结构**（树叶贯穿，现代→上古→江湖→宫廷→民国→回到现代）：

\`\`\`
现代，一男一女持摄像头自拍。女子手持一片银杏叶，问男子是否记得这片叶子。男子回答，没有这片叶子，就没有两人的相遇。女子手滑，叶子脱手飞出，她追着叶子跑离镜头。
上古，女子被缚于神树作为祭品。男子杀上祭坛，割断绳索，掌心托着一片叶子伸向女子。女子牵住他的手，两人逃至河边。男子让女子先上小船，回身杀死全部追兵。男子回到岸边，小船已被水流带走。
江湖，女子是刀客，男子是剑宗弟子，两人在枫林交战，未分胜负。朝廷伏兵出现，两人背靠背突围。分别时，女子提出，男子若有一日能胜过她，便嫁给他。两人各持半片枫叶，骑马背向离开。
宫廷，公主在御花园落水，被新科状元救起。公主在宫苑堵住状元，状元自称配不上公主。公主表示，不相信状元对自己没有动心。状元绕过屏风，与公主相吻。
民国，富家小姐与青年军官在河畔相识，军官谈及自己的信仰，小姐表示相信。小姐在花园提出让父亲帮助军官，军官拒绝。部队开拔，小姐赶到车站，两人隔着车窗分别。
回到现代，女子追着叶子回到银杏树下，叶子落回她手中。
\`\`\`

### 第 2 步：分镜和角色（含换脸）

**分镜**（视频长，必须先规划每一幕，否则烧钱）：

1. 剧本加入对话框，切换"导演执导模式"。
2. 选"纪录片导演"（更遵从剧本）。
3. 提示词：

   > 你整体切分一下分镜，根据剧情文件严格切分所有分镜，尽量保证在树叶转场时切下一镜，先生成md文本，给我确认后再进行下一步，切分视频长度 15-30s 之间。
4. 确认后 Agent 在画布上创建分镜节点。

**角色与换脸**：

1. 点画布下方"角色造型室"→ 创建新角色 → 导入已有角色 → 从本地导入，上传自己的照片。
2. 新功能可 P 自己的 AI 形象（化妆、改发型、换服装、戴美瞳），自动生成三视图、表情图，避免后续崩坏。
3. 五生五世每世形象不用手动生成——确定人物资产后给提示词，Agent 自动生成：

   > 为剧本生成本集 EP001 第1集需要的参考资产。明确授权本步直接生图，请实际调用生图并保留节点；视频节点一律不要运行。请选择支持参考图一致性的图像模型（具备多图/人物参考能力的型号）画布上现有 8 张主角资产作为脸的唯一基准：生成任何新造型时，都把对应角色的现有资产作为参考图传入，面部五官、脸型、肤色必须与基准完全一致，只改变发型与服装。提示词里用 {{node_key}} 的形式引用这些参考节点。
4. 人物形象单一时，**上传参考图升级细节**。如宫廷女提示词（可仿思路，不必照抄）：

   \`\`\`
   宫廷女：宋代公主游园造型，成年女性，容貌明艳秀丽，神情温雅，举止间带着皇室女子的矜贵。乌黑长发整齐收拢，盘成饱满高髻，露出额头与清晰鬓角，髻上簪金质花钗与精巧花梳，点缀成簇的小珍珠，耳侧佩戴玲珑金玉耳坠，发饰繁而有序。身穿浅桃粉色直领对襟长褙子，衣身修长，窄直长袖，衣侧开衩，前襟自然垂落，清楚露出内层衣裙。面料采用细腻花罗，通身隐现缠枝牡丹与山茶花纹，领缘、前襟、袖口和开衩处镶玫瑰粉色印金花边，细密金色纹样随光浮现。内穿粉白色抹胸与轻薄绢衫，下搭淡藕粉色围裹长裙，裙腰以绢带系束于腰际，藏在褙子之内，裙幅交叠，形成自然垂直的褶纹，裙长及地。裙面点缀疏密有致的穿枝花鸟暗纹，行走时从敞开的衣襟间显露。外衣保持舒展的直身轮廓，以精美织物、印金花边与金珠首饰体现身份。
   \`\`\`

### 第 3 步：生成视频

- **不要批量运行节点**，否则前后视频对不上、信息断裂。
- 一个一个生成，截每个视频的尾帧图生成下一个：

  > 截图第一个视频的最后一帧，作为首帧，根据原来的节点规划第二个视频，绑上人物和场景图片，seedance 2.5
- 模型选择：预算足、要求高用 Seedance 2.5（对真实人物精控到位）；省钱用 Wan 3.0。
- **中段出错的补救技巧**（前后都好、只有中间坏）：截取不满意片段的首帧和尾帧，让 Agent 补这一段，不用重新抽卡：

  > 请以@图片1为首帧，@图片2为尾帧，生成 5s 的视频，内容是：xxxxxx
- 最后进剪辑软件简单拼接即可。

### 第 4 步：交付

- 整套流程与 Agent 对话搞定，几百块成本做出可用于婚礼 MV、纪念日礼物的微电影。

## 三、可迁移的方法论（重点）

这套流程的价值不在"婚礼"本身，而在**用 Agent 做长视频的通用套路**：

1. **先剧本后分镜**：剧本定死再切镜，且强制"转场处切镜"，减少返工。
2. **给参考 > 纯描述**：无论剧情（参考名著桥段）还是人物（上传参考图），给参考比对空描述有效得多。
3. **锁脸基准资产**：把人物资产作为"脸的唯一基准"，每次生成都作参考图传入，保证一致性。
4. **尾帧接力**：长视频逐段生成、用上一段尾帧当下一段首帧，是避免信息断裂的关键。
5. **局部重生成**：坏一段只补一段（首尾帧夹逼），不重抽整条。
6. **成本可控组合**：主力模型保质量＋便宜模型做补充，把成本压到可接受区间。

## 四、相关链接

- LibTV：https://www.liblib.tv/
- 作者工作流模板：https://www.liblib.tv/canvas/share?spaceId=9275651&projectId=3aa49f3dcb1943f49d0964f2dff9bae3
- 原文：https://mp.weixin.qq.com/s/t5KihTnrtSrjfvYwuId20w`,feishuUrl:"https://my.feishu.cn/docx/JxUYdJJmkouz04xale0cXDsSn9g"},{id:"fs-AaRedDVq0ot1t7xM0VJcprkRnZg",category:"tech",title:"Vue3 动效组件库 10 个（收藏单 · 按用途分组）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：小4子《Vue3 生态：10 个最强大的动效组件库！》（前端开发爱好者，2025-05-12） 原文：https://mp.weixin.qq.com/s/ycxN1x77RVSxMNH0edkB4g 整理：按实际…",body:`> 来源：小4子《Vue3 生态：10 个最强大的动效组件库！》（前端开发爱好者，2025-05-12）  
> 原文：https://mp.weixin.qq.com/s/ycxN1x77RVSxMNH0edkB4g  
> 整理：按实际用途重新分组，方便按需取用（原文本是十个平铺）。

## 为什么记这篇

\`animate.js\` / \`animate.css\` 只能做常规动画，想做惊艳效果得靠专门的库。这份清单覆盖了从 2D 补间、Vue 专用组件、灵感素材到 3D 引擎的完整光谱，正好补上「Web 动画之旅」的工具选型这块。

## 一、通用动画引擎（框架无关，最该先掌握）

| 库 | 定位 | 官网 | GitHub |
|-|-|-|-|
| **GSAP** | 动画界"老大哥"/瑞士军刀，能对任意 HTML 元素和 JS 对象做动画，性能强、跨浏览器稳；抛物线、弧形、缓动、弹性等复杂动画都行 | [https://gsap.com/](https://gsap.com/) | [https://github.com/greensock/GSAP](https://github.com/greensock/GSAP) |
| **Anime.js** | 轻量易上手，融合 CSS 与 JS 动画，多元素协同也简洁 | [https://animejs.com/](https://animejs.com/) | [https://github.com/juliangarnier/anime](https://github.com/juliangarnier/anime) |
| **Tween.js** | 轻量补间库，把对象属性从一态平滑过渡到另一态（位置/大小/透明度），适合基础动画 | [https://tweenjs.github.io/tween.js/docs/user_guide.html](https://tweenjs.github.io/tween.js/docs/user_guide.html) | [https://github.com/tweenjs/tween.js](https://github.com/tweenjs/tween.js) |

## 二、Vue3 专用（直接进项目）

| 库 | 定位 | 官网 | GitHub |
|-|-|-|-|
| **Inspira UI** | 专为 Vue3 设计，示例 100+；炫酷背景、粒子特效、按钮交互，无需额外引库；高度可自定义，兼容 Vue3 / Nuxt.js | [https://inspira-ui.com/](https://inspira-ui.com/) | [https://github.com/unovue/inspira-ui](https://github.com/unovue/inspira-ui) |
| **Motion Vue** | 基于 Framer Motion 为 Vue3 打造，把 React 生态的优秀动画能力搬过来，做视觉冲击力强的界面 | [https://motion.unovue.com/](https://motion.unovue.com/) | [https://github.com/motiondivision/motion-vue](https://github.com/motiondivision/motion-vue) |

## 三、灵感 / 素材 / 模板（抄作业用）

| 库 | 定位 | 官网 | GitHub |
|-|-|-|-|
| **Uiverse.io** | 协作式 UI 组件与动画"梦工厂"，可设计、原型、分享；像搭积木一样拼组件加动画 | [https://uiverse.io/](https://uiverse.io/) | [https://github.com/uiverse-io](https://github.com/uiverse-io) |
| **NavNav+** | 1000+ UI 组件模板平台，可看源码和实时效果；动效按钮、登录页、表格、下拉框、加载动效、导航等 | [https://thuvien.org/navnav/](https://thuvien.org/navnav/) | — |
| **Color4BG** | 专攻颜色动画，RGB/HSL/HEX 间平滑过渡与渐变，给页面增添灵动 | [https://color4bg.com](https://color4bg.com) | — |

## 四、3D 动效引擎（进阶）

| 库 | 定位 | 官网 | GitHub |
|-|-|-|-|
| **Galacean Engine** | 蚂蚁开源的 Web 3D 实时渲染引擎，支持 3D 模型/相机/灯光动画、关键帧动画、程序化动画、动画混合 | [https://galacean.antgroup.com/engine/](https://galacean.antgroup.com/engine/) | [https://github.com/galacean/engine](https://github.com/galacean/engine) |
| **TresJS** | three.js 的 Vue3 扩展，让在 Vue3 里做 3D 动画更简单高效（模型/相机/灯光动画） | [https://docs.tresjs.org](https://docs.tresjs.org) | [https://github.com/tresjs/tres](https://github.com/tresjs/tres) |

## 五、选型建议（按你的场景）

- **做微前端子应用/后台的常规交互动效** → Tween.js（轻）或 GSAP（复杂）。
- \\*\\* Vue3 组件库里封装动效组件\\*\\* → Inspira UI / Motion Vue，风格与 Vue3 一致，接入成本低。
- **找灵感、快速抄一个惊艳效果** → Uiverse.io / NavNav+，直接看源码。
- **页面背景/氛围** → Color4BG。
- **上 3D（未来产品页、可视化）** → TresJS（Vue3 亲和）优先，Galacean 适合重 3D 渲染。

> 注：这份是 2025-05 的文章，链接与版本以官网当前为准；用到某个再去验证可用性。`,feishuUrl:"https://my.feishu.cn/docx/AaRedDVq0ot1t7xM0VJcprkRnZg"},{id:"fs-TmIqdJrK7oDAZAxotHGcmmmAnjd",category:"tech",title:"Vue3 + Three.js 现代 Web 3D 编辑器（Astral3DEditor）· 项目卡片",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 基于 Vue3 + Three.js 的免费开源三维可视化孪生场景编辑器，主打数字孪生 / 虚拟仿真，能快速搭建 3D 可视化 Demo。 项目信息 源码：https://github.com/mlt131220…",body:`## 一句话

基于 Vue3 + Three.js 的免费开源三维可视化孪生场景编辑器，主打数字孪生 / 虚拟仿真，能快速搭建 3D 可视化 Demo。

## 项目信息

- 源码：https://github.com/mlt131220/Astral3DEditor
- 在线预览：https://editor.astraljs.com/#/
- 技术栈：Vue3 + Three.js（主体 TypeScript，部分 JavaScript）
- 授权：Apache-2.0 —— 个人学习、二次开发、非商业用途免费；**商业用途需获得作者授权**（不是无条件商用）

## 特色功能

### 模型与格式

- 多格式支持：30+ 模型格式（GLTF / OBJ / FBX / GLB 等通用格式，RVT / IFC 等专业 BIM 格式）
- BIM 模型轻量化展示（RVT / IFC）
- CAD 图纸解析（DWG / DXF），实现 2D 与 3D 结合
- 场景分包存储与加载，优化大型场景加载体验

### 扩展与运行时

- 插件系统：扩展编辑器功能
- 脚本运行时：在场景中运行自定义脚本
- 粒子系统：特效与自然现象模拟
- 天气系统：模拟不同天气条件下的场景效果

### 协作与存储

- WebSocket 多人实时协作编辑
- 云存储集成（又拍云 USS 等）

## 快速启动

环境：Node.js ≥ 18.x，包管理器 Yarn

\`\`\`
git clone https://github.com/mlt131220/Astral3DEditor.git
cd Astral3DEditor
yarn install
yarn run dev
\`\`\`

## 开源规划（作者路线图）

- 物理引擎支持：增强交互体验和模拟能力
- WebGPU 支持：提升渲染性能
- 数据组件：通过 API / WebSocket 实现数据集成
- 低代码数据大屏：简化可视化应用开发

## 适用场景

数字孪生、虚拟仿真、智慧城市、建筑 / 规划 / 工程可视化、工业仿真——需要快速出 3D 可视化 Demo 的场景。

## 为什么值得收

- 开箱即用的「编辑器」形态，省去从零搭 Three.js 场景的成本，适合直接做原型。
- BIM 轻量化 + CAD 解析是稀缺能力，一般 3D 引擎不带，这是它最差异化的一块。
- 多人协作 + 插件 / 脚本运行时，具备二次开发成团队工具的底子。
- 与「Web 动画之旅」的 3D 方向（TresJS / Galacean）是同一技术脉络：那些是库，这个是成品编辑器，可以拿来对照学习或直接产出。


来源：

- 公众号「初识Threejs」《功能强大！基于 Vue3 + Three.js 的现代 Web 3D 编辑器（开源）》，2025-04-25
- 公众号「攻城师不浪」《又一个炸裂的开源！基于Three+Vue3的三维低代码场景编辑器，还支持BIM+CAD，绝了！》，2025-04-09`,feishuUrl:"https://my.feishu.cn/docx/TmIqdJrK7oDAZAxotHGcmmmAnjd"},{id:"fs-DImJdUrMnosPggxjOUJcnUTCnqg",category:"tech",title:"ChatGPT 打字机效果三种实现方式 · SSE 流式实战笔记",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 做 AI 对话产品时，前端要复刻 ChatGPT 那种「字一个个蹦出来」的效果。本质是把后端流式返回的数据，逐字渲染到页面上。本文给出三种由浅入深的方案，推荐第三种。 技术栈 前端 React + Tailwin…",body:`## 一句话

做 AI 对话产品时，前端要复刻 ChatGPT 那种「字一个个蹦出来」的效果。本质是把后端流式返回的数据，逐字渲染到页面上。本文给出三种由浅入深的方案，推荐第三种。

## 技术栈

- 前端 React + Tailwindcss
- 服务端 Express（模拟 SSE 接口）
- 辅助库：\`@microsoft/fetch-event-source\`、\`alova.js\`
- 服务端用 SSE（Server-Sent Events）协议推流

## 服务端准备：一个 Express 模拟 SSE 接口

所有方案共用一个后端。要点：

- 响应头 \`Content-Type: text/event-stream\` + \`Connection: keep-alive\` + \`Cache-Control: no-cache\`
- 用定时器逐字 \`res.write\`，模拟大模型返回；约定三种事件：\`start\` / \`message\` / \`done\`
- 客户端 \`close\` 时 \`clearInterval\`；同时服务端在发完后主动 \`res.end()\`（纯靠前端 close 不可靠）

两个关键注意（后面踩坑会呼应）：

- 浏览器端 SSE 必须主动触发 close 连接才断；服务端主动断会触发浏览器 \`error\` 事件，前端要处理
- 服务端不能完全依赖前端 close，要做主动关闭逻辑，避免连接堆积压垮服务器

## 三种方案对比

| 方案 | 做法 | 优点 | 缺点 | 适用 |
|-|-|-|-|-|
| ① 普通请求 + 前端模拟 | fetch 等 SSE 整体返回完，再拿定时器逐字打印 | 最简单，无需理解 SSE | 等全部数据到齐才开始显示，不是真流式；首字延迟高 | 快速 Demo、对实时性无要求 |
| ② 原生 EventSource / alova.js | 浏览器 \`EventSource\` 对象直接收流；alova 做上层封装 | 真正流式，逐字到达；alova 省去底层处理 | \`EventSource\` 只支持 GET、不能自定义 header；断线重连等行为黑盒 | 标准的 SSE 场景 |
| ③ fetch + ReadableStream（推荐） | \`fetchEventSource\` 读流，\`onmessage\` 里逐字追加 | 真流式 + 支持 POST / 自定义 header / 精细控制 | 需要自己处理解析和错误 | 生产环境、要传鉴权和参数的真实 AI 应用 |

### 方案①核心

\`fetch\` 拿全部文本 → \`filterData\` 按 event 拼出完整字符串 → \`setInterval\` 每 200ms 吐一个字。  
关键局限：它拿到的是 SSE 连接结束后的**整体数据**，所以 \`done\` 事件不用管，本质是「假流式」。

### 方案②核心

原生：

\`\`\`javascript
const eventSource = new EventSource('http://localhost:5000/sse');
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.event === 'done') eventSource.close();  // 收到 done 主动关
  else output += data.content;
};
eventSource.onerror = (e) => eventSource.close();
\`\`\`

alova 版：用 \`useSSE\` hook，返回 \`{ data, send, close }\`，在 \`useEffect\` 里按 event 累加，\`done\` 时 \`close()\`。

### 方案③核心（推荐）

\`\`\`javascript
fetchEventSource('http://localhost:5000/sse', {
  headers: { 'authorization': 'test sse' },   // 能带鉴权，方案②做不到
  onopen(res) { ... },
  onmessage(res) {
    const jsonData = JSON.parse(res.data);
    if (['start','message'].includes(jsonData.event)) {
      setValue(prev => prev + jsonData.content);
    }
    // done 在 fetch 场景可不做特殊处理
  },
  onerror(err) { ... }
});
\`\`\`

## 真正的精华：匀速打印控制器 MessageManager

不同大模型返回速度和内容长度不一致，直接渲染会「忽快忽慢」。作者封装了一个队列控制器，把所有到达的字放进队列，用固定频率匀速消费——这是让体验丝滑的关键，也是这篇最值得抄走的东西。

设计要点：

- \`add(str)\`：把新到的字符串拆成单字，追加进 \`messageList\` 队列
- \`start()\`：\`setInterval\` 每 \`timerDelay\`(默认100ms) 消费一个字，回调 \`onMessage\`
- \`stop()\`：设停止标志；**队列没走完不立刻停，等吐完再停**（避免话说到一半被截断）
- \`immediatelyStop()\`：清空定时器 + 队列，回调 \`onFinish\`
- 本质：生产者（流式返回）和消费者（匀速渲染）解耦，中间用队列缓冲

## 踩坑：Nginx 把流「攒着不发」

部署后发现数据不是实时显示，而是收完才一次性出来——多半是 Nginx 默认对响应做了缓冲。解决：只对 SSE 接口关掉 buffering，别影响其他接口。

\`\`\`bash
location /sse {
    proxy_pass http://localhost:5000/sse;
    proxy_buffering off;                    # 最关键的一行
    proxy_set_header Cache-Control 'no-cache';
    proxy_set_header Connection 'keep-alive';
}
\`\`\`

## 选型速记

- 做 Demo / 图快 → 方案①
- 标准 SSE、GET 就够、无鉴权 → 方案②（EventSource 或 alova）
- 生产级 AI 应用（要 POST 传参、带 token、要控制错误和重连）→ 方案③
- 想要「像人一样匀速说话」→ 无论哪种方案，都叠一层 MessageManager 队列


来源：掘金《实战案例：ChatGPT 打字机效果的三种实现方式》，hauk0101，2024-06-02  
[https://juejin.cn/post/7375152719482961954](https://juejin.cn/post/7375152719482961954)`,feishuUrl:"https://my.feishu.cn/docx/DImJdUrMnosPggxjOUJcnUTCnqg"},{id:"fs-NStHdBhE0oqjVSxTblIcW3aFn9b",category:"tech",title:"Three.js WebGPU 扫描效果（ScanEffect）· 项目卡片",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 用 WebGPU + TSL 着色器做的扫描视觉特效：深度图 + 程序遮罩 + 自定义 shader 实时动画，适合直接搬到官网做科技感 Hero 视觉。 项目信息 源码：https://github.com/d…",body:`## 一句话

用 WebGPU + TSL 着色器做的扫描视觉特效：深度图 + 程序遮罩 + 自定义 shader 实时动画，适合直接搬到官网做科技感 Hero 视觉。

## 项目信息

- 源码：https://github.com/d3adrabbit/ScanningEffectWithDepthMap
- 在线预览：https://tympanus.net/Development/ScanEffect/effect1/
- 出处：Codrops（tympanus.net）经典 Scan Effect 实验
- 技术栈：Three.js + react-three-fiber（R3F）+ WebGPU + TSL 着色器
- 来源公众号：初识Threejs，2025-04-10

## 效果原理

- 用**深度图（Depth Map）** 参与合成，让扫描带有真实的纵深/立体感，而不是平面的遮罩动画。
- **程序化网格 + 遮罩** 生成扫描纹理，配合自定义着色器实时驱动动画。
- 渲染走 WebGPU 管线，着色器用 **TSL（Three.js Shading Language）** 编写——这是 Three.js 新一代的跨平台着色方案，替代传统 GLSL 手写。

## 特色功能

- 着色器合成（shader compositing）
- 程序化网格与遮罩
- 图像 + 深度图结合

## 快速启动

\`\`\`
npm install
npm run dev
\`\`\`

## 适用场景

官网首页 / 产品页的科技感 Hero 视觉、数据大屏开场、3D 交互艺术、WebGL 作品集——需要"一眼惊艳"的视觉锚点时用。

## 为什么值得收

- **WebGPU + TSL 是 Three.js 的渲染未来**：传统 GLSL 手写正在被 TSL 取代，这个是跟着官方路线走的活案例，比看文档直观。
- **深度图这个切入点很实用**：很多扫描/透视/X 光类特效的差别就在于有没有用深度信息，这张图就是范本。
- **站在 Codrops 的肩上**：原作是业内标杆级视觉实验，源码结构干净，适合直接改参数套到自己的官网。
- 和 Astral3DEditor 路线图里的「WebGPU 支持」呼应——一个讲编辑器怎么用 WebGPU，一个讲着色器怎么用 WebGPU，正好互补。`,feishuUrl:"https://my.feishu.cn/docx/NStHdBhE0oqjVSxTblIcW3aFn9b"},{id:"fs-DM3ldAKn4osX4Pxp0YCcNzAPnDU",category:"tech",title:"kokomi.js · Three.js 效率辅助库（项目卡片）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 基于 TypeScript 的 Three.js 辅助库，通过更高层抽象封装常用功能，让 3D 场景搭得更快、代码更清晰可复用。GitHub 400+ star。 项目信息 源码：https://github.c…",body:`## 一句话

基于 TypeScript 的 Three.js 辅助库，通过更高层抽象封装常用功能，让 3D 场景搭得更快、代码更清晰可复用。GitHub 400+ star。

## 项目信息

- 源码：https://github.com/alphardex/kokomi.js
- 文档：https://kokomi-docs.netlify.app/
- 在线沙箱：https://kokomi-sandbox.netlify.app/
- 案例集：https://kokomi-js.netlify.app/examples/
- 作者：alphardex（主页 [https://alphardex.netlify.app](https://alphardex.netlify.app)；掘金专栏「某科学的three.js」）
- 名字由来：取自《原神》角色「珊瑚宫心海」Sangonomiya Kokomi
- 技术栈：TypeScript + Three.js

## 核心特性

- **模块化设计**：预封装 Box、OrbitControls、AssetManager 等组件，直接调用；继承 \`kokomi.Base\` 自定义场景逻辑
- **资源管理**：AssetManager 统一管理纹理 / 模型（GLTF）/ 字体等，异步加载，支持 \`ready\` 事件
- **易用 API**：如 \`box.spin(time)\` 旋转、\`OrbitControls\` 相机控制，降低 Three.js 学习曲线
- **TypeScript 支持**：带类型定义，现代前端环境有补全和类型检查

## 快速使用

安装（它基于 Three.js，两个都要装）：

\`\`\`
npm i kokomi.js
npm i three
\`\`\`

旋转立方体：

\`\`\`js
import * as kokomi from "kokomi.js";

class Sketch extends kokomi.Base {
  create() {
    const box = new kokomi.Box(this);
    box.addExisting();
    new kokomi.OrbitControls(this);
    this.update((time) => {
      box.spin(time);
    });
  }
}
new Sketch().create();
\`\`\`

要点：\`kokomi.Base\` 提供场景/相机/渲染器基础设置；\`update\` 每帧调用，time 由内部时钟提供。

## 加载外部资源（GLTF 模型）

\`\`\`js
const resourceList = [
  { name: "foxModel", type: "gltfModel", path: "/models/Fox/glTF/Fox.gltf" },
];

class Sketch extends kokomi.Base {
  create() {
    this.camera.position.set(6, 4, 3);
    const assetManager = new kokomi.AssetManager(this, resourceList);
    assetManager.emitter.on("ready", () => {
      const foxModel = assetManager.items.foxModel;
      foxModel.scene.scale.set(0.02, 0.02, 0.02);
      this.scene.add(foxModel.scene);
    });
    new kokomi.OrbitControls(this);
  }
}
\`\`\`

资源类型支持：texture（2D 贴图）、cubeTexture（3D 贴图）、gltfModel（模型）、font（字体）。

用 Vite 时需配置识别 gltf：

\`\`\`js
// vite.config.js
export default defineConfig({
  assetsInclude: ["**/*.gltf"],
});
\`\`\`

## 适用场景

想快速搭 Three.js 场景、又被样板代码劝退的前端；做模型展示 / Shadertoy 集成 / 渲染纹理 / 反射镜 / 无限画廊等案例；Three.js 入门到出活的效率工具。

## 为什么值得收

- **降样板代码的心智负担**：Base 类 + 预封装组件，把「建场景/相机/渲染器/循环」这套固定套路收掉，专注写场景逻辑。
- **AssetManager 是真正的高频痛点**：资源异步加载 + 统一 \`ready\` 事件，复杂场景这块最烦，它替你管了。
- **作者的案例库是宝藏**：alphardex 的 CodePen / examples 本身就是高质量的 Three.js + Shader 学习素材，库只是入口。
- 归属你的 Three.js 技术线：和 Astral3DEditor（成品编辑器）、WebGPU 扫描效果（渲染特效）互补——它是**写场景时的效率库**，三者正好覆盖工具 / 特效 / 编码三个层次。


来源：公众号「初识Threejs」《解密 kokomi.js，Three.js 的效率神器！前端卷王们偷偷在用》，作者 SuperMMM，2025-04-07`,feishuUrl:"https://my.feishu.cn/docx/DM3ldAKn4osX4Pxp0YCcNzAPnDU"},{id:"fs-QbIpdimgdop8EKxtE8Ncww5xntb",category:"tech",title:"fluid-light · Three.js 流体光影 Hero Section（实战拆解）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 「一个可受光的平面 + 多个动态点光源 + 后处理」做出高级感艺术官网首屏，鼠标滑动 + 点击切换主色，视觉冲击力强、可复用性高。老板花一万大洋的私活成品。 项目信息 在线预览：https://fluid-lig…",body:`## 一句话

「一个可受光的平面 + 多个动态点光源 + 后处理」做出高级感艺术官网首屏，鼠标滑动 + 点击切换主色，视觉冲击力强、可复用性高。老板花一万大洋的私活成品。

## 项目信息

- 在线预览：https://fluid-light.vercel.app/
- Debug 调试界面：https://fluid-light.vercel.app/#debug
- 源码：https://github.com/hexianWeb/fluid-light（后处理参数在 \`src/js/world/effect.js\`）
- 作者：何贤（GitHub hexianWeb），掘金「ice 图形学社区」
- 发布：2025-03-06，掘金 1.6w 阅读
- 技术栈：Three.js + GLSL Shader + 后处理（EffectComposer）

## 前置条件

- Three.js 基础：Scene / Camera / Renderer / Geometry / Material / Mesh
- Shader 基础：GLSL 顶点着色器 + 片元着色器，及在 Three.js 中自定义着色器

## 场景构成（就两样东西）

一个**可受光照影响的平面几何体** + **数个点光源**。去掉后处理和 UI 后，本质极简。

### 1. 平面几何体 + 置换/法线贴图

用正交相机，让平面铺满整个视窗：

\`\`\`js
this.geometry = new THREE.PlaneGeometry(2 * 屏幕宽高比, 2);
\`\`\`

材质用 \`MeshPhysicalMaterial\`，关键在置换贴图（Displacement）+ 法线贴图（Normal）——贴图去 polyhaven 下，不用在意它原本作用在什么物件上：

\`\`\`js
this.material = new THREE.MeshPhysicalMaterial({
  color: '#121423',
  metalness: 0.59,
  roughness: 0.41,
  displacementMap: 置换贴图,
  displacementScale: 0.1,   // 直接给置换贴图凹凸会过强，靠这个调小
  normalMap: 法线贴图,
  normalScale: new THREE.Vector2(0.68, 0.75),
  side: THREE.FrontSide
});
this.mesh = new THREE.Mesh(this.geometry, this.material);
scene.add(this.mesh);
\`\`\`

> 卡顿提示：\`MeshStandardMaterial\` / \`MeshPhysicalMaterial\` 真实感强但性能消耗高，卡的话换轻量材质。

### 2. 多光源 + 动态强度（高级感的来源）

关键设计：**同一时间场景里存在多个点光源，强度各不同，由强度为 10 的那盏担任场景主色**。不是简单 A 色切 B 色——中心白 + 周围年轮光圈 + 逐渐扩散纯色背景，这种层次感靠多光源实现。

封装创建点光源（所有光源同步在同一位置）：

\`\`\`js
createPointLight(intensity) {
  const light = new THREE.PointLight(0xffffff, intensity, 100, Math.random() * 10);
  light.position.copy(this.lightPosition);
  return { object: light, targetColor: new THREE.Color() };
}
\`\`\`

生成多个光源并初始化颜色（colors 数组：orange/red/red/orange/lightblue/green/blue/blue）：

\`\`\`js
this.lights = [
  this.createPointLight(2), this.createPointLight(3), this.createPointLight(2.5),
  this.createPointLight(10), this.createPointLight(2), this.createPointLight(3),
];
// 逐个赋色后 add 到 scene
\`\`\`

点击时打乱颜色数组、给每盏灯设置目标色，标记开始过渡：

\`\`\`js
window.addEventListener('click', () => {
  this.colors = [...this.colors.sort(() => Math.random() - 0.5)];
  this.colorTransition = true;
  const numberLights = this.lights.length;
  for (let index = 0; index < numberLights; index++) {
    const colorIndex = Math.min(index, this.colors.length - 1);
    this.lights[index].targetColor = this.colors[colorIndex].clone();
  }
});
\`\`\`

render 里用 easing（damp）平滑过渡，每盏灯延迟递增，形成「传送带/上楼梯」式依次切换：

\`\`\`js
const baseSmooth = 0.25, smoothIncrement = 0.05;
for (let index = 0; index < numberLights; index++) {
  const smoothTime = baseSmooth + index * smoothIncrement;  // 依次延迟
  this.dampC(currentColor, targetColor, smoothTime, delta);
}
\`\`\`

全部过渡完成才置 \`colorTransition = false\`，避免每帧空转。

## 后处理（做完已达成 80%，这一步提质感）

\`EffectComposer\` 串三个 Pass：

\`\`\`js
this.composer = new EffectComposer(this.renderer);
this.composer.addPass(this.renderPass);   // 渲染场景
this.composer.addPass(this.bloomPass);    // UnrealBloomPass 辉光，亮部光晕
this.composer.addPass(this.filmPass);     // FilmPass 胶片颗粒/复古感
\`\`\`

参数看个人品味调，同款参数在源码 \`src/js/world/effect.js\`。

### 画面扭曲（画龙点睛）

用 \`ShaderPass\` 加一个初始 BaseShader（只把读缓冲区拷到写缓冲区，无效果），再在片元着色器里操纵 uv，让采样 \`tDiffuse\` 时发生扭曲：

\`\`\`glsl
vec2 uv = vUv;
uv.y += sin(uv.x * frequency + offset) * amplitude;
gl_FragColor = texture2D(tDiffuse, uv);
\`\`\`

一个 sin 波扰动 uv，就有流体般的光影扭曲——这是「流体光」名字的由来。

## 可迁移的方法论（真正值钱的部分）

- **2D 平面伪造 3D 质感**：置换贴图 + 法线贴图铺在正交相机的满屏平面上，比建模便宜得多，Hero Section 高频套路。置换强度一定用 \`displacementScale\` 压住，别直接给。
- **多光源分层造层次**：中心 + 光圈 + 背景的层次感来自「多光源同在 + 强度动态变化」，不是单色切换；强度最大的那盏定主色。
- **传送带式颜色轮换**：打乱颜色数组 + 每盏灯递增 easing 延迟 + 全部到位才停更新，做出依次切换的节奏感。这个「错峰过渡」思路可迁移到任何多元素状态切换。
- **后处理三板斧**：Bloom（亮部辉光）→ Film（颗粒质感）→ ShaderPass（uv 扭曲），按这个顺序叠，每一步都独立可开关调参。
- **Debug 界面**：单独开 \`#debug\` 页调参数，把「调参」和「展示」分离——做视觉效果类项目的工程习惯。

## 适用场景

艺术/设计工作室官网首屏、产品发布页、任何需要「一眼高级感」的 Hero Section；想学 Three.js 后处理 + Shader uv 扭曲的实战案例。

## 相关资源

- ice 图形学社区：https://opensource.icegl.cn （国内 Web 图形学知识库）
- Tresjs（Vue 版 Three.js）：https://tresjs.org/
- 作者往期 Hero Section 系列：Trae 篇 \`juejin.cn/post/7472650702340046886\`、2024 篇 \`juejin.cn/post/7415504438922592294\`


来源：掘金《老板花一万大洋让我写的艺术工作室官网？！ HeroSection 再度来袭！(Three.js)》，作者何贤，2025-03-06`,feishuUrl:"https://my.feishu.cn/docx/QbIpdimgdop8EKxtE8Ncww5xntb"},{id:"fs-MeNkdmx5aoloRfxoaM3cmV6Wnrd",category:"tech",title:"Trae + 地图 Hero Section · GLSL Shader 入门（attribute/varying/uniform）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 何贤 Hero Section 专栏的入门篇：用 Trae（AI IDE）辅助，从零搭一个「地球地图 + 滚动 + 渐变光圈」首屏，真正有价值的是把 GLSL 的 attribute / varying / un…",body:`## 一句话

何贤 Hero Section 专栏的入门篇：用 Trae（AI IDE）辅助，从零搭一个「地球地图 + 滚动 + 渐变光圈」首屏，真正有价值的是把 GLSL 的 attribute / varying / uniform 三种数据传递方式讲透了。是 fluid-light（进阶实战）的前置篇。

## 项目信息

- 在线预览：https://earth-map-hero-section.vercel.app/#debug
- 作者：何贤（同 fluid-light 作者），掘金「ice 图形学社区」
- 发布：2025-02-18，掘金 9807 阅读，24 分钟长文
- 工具：Trae（Builder / Chat 模式，基于 Claude-3.5-Sonnet）+ Three.js + GLSL
- 定位：Three.js / Shader 微进阶，只需对 Three.js 有大概了解，Shader 入门级

## 系列位置（学习路径）

1. **本篇（入门）**：Shader 三要素概念 + 贴图滚动 + 透明度渐变
2. fluid-light（进阶）：多光源 + 后处理 Bloom/Film + uv 扭曲

两篇都是 Hero Section 专栏，先学本篇搞懂 Shader 数据传递，再看 fluid-light 的组合特效。

## Three.js 三要素

场景（3D 世界容器，含物体/光源/相机）+ 相机（透视 / 正交，定义视角）+ 渲染器（把场景+相机合成图像显示）。

显示平面（Trae Builder 一键生成的核心代码）：

\`\`\`js
const scene = new THREE.Scene();
const aspect = window.innerWidth / window.innerHeight;
const camera = new THREE.PerspectiveCamera(35, aspect, 0.1, 100);
camera.position.z = 3;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const geometry = new THREE.PlaneGeometry(2 * aspect, 2);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);
function animate() { requestAnimationFrame(animate); renderer.render(scene, camera); }
animate();
// resize 时更新 camera.aspect + plane.geometry 保持比例
\`\`\`

## 纹理贴图

Three.js 不能直接用图片，要 \`TextureLoader\` 加载成 Texture 实例：

\`\`\`js
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./MapChart.png');
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
\`\`\`

地图像素图用 Map Editor（或 Pixel Map Generator）生成——调好左侧 panel 参数、用像素图生成功能导出。用 MeshBasicMaterial 贴上图后「跟 CSS 没区别」，所以引出 ShaderMaterial。

## 核心：GLSL Shader 三要素（这篇最值钱的部分）

### 两种 Shader

- **顶点着色器 Vertex Shader**：定位几何体的顶点，代码作用于**每一个顶点**（成千上万顶点都执行同一段）。
- **片元着色器 Fragment Shader**：处理每个可见片段（像素）的颜色，代码作用于**每一个可见片段**。

\`geometry.attributes\` 有三个属性：\`uv\`、\`position\`、\`normal\`（Float32BufferAttribute，itemSize 决定几个一组）。**UV 坐标系原点在 WebGL 是左下角**（和传统 2D 不同）。用 \`wireframe:true\` + \`AxesHelper(2)\` 可直观看到顶点。

### 数据传递的三种方式（重点）

| 方式 | 作用 | 位置 | 特点 |
|-|-|-|-|
| **attribute** | 逐顶点数据（position/uv/normal） | 仅顶点着色器可用 | 只读，不能直接改；要改得用新容器接收 |
| **varying** | 顶点着色器 → 片元着色器传值 | 两边都声明 | **值在顶点间插值**，所以能产生渐变 |
| **uniform** | 外部传入的全局数据 | 顶点+片元共享 | 所有顶点/片元上都恒定不变 |

关键点：\`uv\` 是 attribute，只能在顶点着色器用——直接在 fragment 里用会报错（"uv 未声明 + 构造参数不足"）。正确做法是在顶点着色器里 \`vUv = uv;\`，再用 varying 传到片元着色器。

\`\`\`js
const vertexShader = \`
  varying vec2 vUv;
  void main() {
    vUv = uv;                       // attribute → varying
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
\`;
const fragmentShader = \`
  uniform sampler2D uTexture;
  varying vec2 vUv;
  void main() {
    gl_FragColor = texture2D(uTexture, vUv);  // UV 映射贴图
  }
\`;
\`\`\`

### 向量类型速查

- vec2：2D 坐标（x/y），可 \`.xy\` swizzle
- vec3：3D 坐标（x/y/z）或颜色（r/g/b），可由 vec2 构造
- vec4：4D（x/y/z/w），gl_FragColor 就是 vec4 = RGBA，每分量 0.0\\~1.0

### uniform 配色实战（克莱因蓝）

\`\`\`js
const material = new THREE.ShaderMaterial({
  vertexShader, fragmentShader,
  uniforms: {
    uColor: { value: new THREE.Vector3(0.0, 0.18, 0.65) },  // 克莱因蓝
    uPosition: { value: new THREE.Vector3(1, 0, 0) }
  }
});
\`\`\`

## 应用：滚动 + 渐变（收尾两步）

1. 地图随时间右移（\`uTime\` 累加到 uv.x）
2. 底部中央向外渐变光圈（\`vUv.y\` 控制透明度）

\`\`\`js
const fragmentShader = \`
  uniform sampler2D uTexture;
  uniform float uTime;
  varying vec2 vUv;
  void main() {
    vec2 scrolledUv = vec2(vUv.x + uTime, vUv.y);
    vec4 texColor = texture2D(uTexture, scrolledUv);
    float alpha = 1.0 - vUv.y;   // 底部(1)→顶部(0) 透明度
    gl_FragColor = vec4(texColor.rgb, texColor.a * alpha);
  }
\`;
const shaderMaterial = new THREE.ShaderMaterial({
  uniforms: { uTexture: { value: texture }, uTime: { value: 0 } },
  vertexShader, fragmentShader,
  transparent: true   // 用透明逻辑必须开这个
});
\`\`\`

> varying 的 \`vUv.y\` 会在片元间自动插值，从 0 到 1 连续变化，所以透明度才是平滑渐变而非硬边——这就是 varying 插值的实际用途。

## Trae 的用法（工具层，可迁移）

- **Builder 模式**：给初学者/基建懒人一键生成——主动读项目文件、拆任务、建改文件、跑终端命令、分析运行结果。建场景样板代码这种活直接交给它。
- **Chat 模式（侧边 + 代码内嵌）**：编码中随时唤起内嵌对话，不用来回切 IDE 和 Agent，不打断思路。让它把 MeshBasicMaterial 改成 ShaderMaterial、让贴图滚动/加渐变，直接给代码。
- **传截图分析报错**：把报错截图上传，Trae 直接返回原因——懒人调试法。
- 免费（征文期），对标 Cursor 的付费。

## 可迁移的方法论

- **Shader 三要素是理解 GLSL 的钥匙**：attribute（逐顶点、只读、仅顶点）、varying（传值且插值→渐变）、uniform（全局恒定、外部传入）。搞懂这三个，绝大多数 Shader 代码都能读懂。
- **varying 插值 = 渐变的来源**：想要颜色/透明度平滑过渡，就用 varying 把一个随位置变化的值从顶点传到片元。
- **透明效果三件套**：\`gl_FragColor.a\` 动态赋值 + \`transparent: true\` + 用 uv 做权重。
- **AI IDE 的正确用法**：样板代码交给 Builder，概念理解和改代码交给内嵌 Chat，报错截图直接丢给它——把「写代码」和「学原理」分开，AI 省时间，原理自己懂。

## 适用场景

Three.js / GLSL 入门者搞懂 Shader 数据流；做地图滚动 / 渐变遮罩 / 视觉遮罩类 Hero Section；想了解 AI IDE（Trae/Cursor）如何辅助前端 3D 开发。

## 相关

- 同专栏进阶篇：fluid-light 流体光影 Hero Section（本库另有笔记）
- ice 图形学社区：https://opensource.icegl.cn
- 作者往期：2024 篇 \`juejin.cn/post/7415504438922592294\`


来源：掘金《2025 年了，我不允许有前端不会用 Trae 让页面 Hero Section 变得高级！！！(Threejs)》，作者何贤，2025-02-18`,feishuUrl:"https://my.feishu.cn/docx/MeNkdmx5aoloRfxoaM3cmV6Wnrd"},{id:"fs-QCWpdkDMLo9xfYxAQAScC81mnub",category:"tech",title:"Tripo AI 图生3D + 3D 打印手办 · 工具实践卡片",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 用 Tripo AI 图生3D 把图片变成精细 3D 模型（还能自动绑骨骼），再丢进 3D 打印机打成实体手办。卡点从来不是打印，而是建模——AI 3D 把建模成本打下来了。 核心工具 Tripo AI**：ht…",body:`## 一句话

用 Tripo AI 图生3D 把图片变成精细 3D 模型（还能自动绑骨骼），再丢进 3D 打印机打成实体手办。卡点从来不是打印，而是建模——AI 3D 把建模成本打下来了。

## 核心工具

- **Tripo AI**：https://www.tripo3d.ai/ （作者心中目前最好的 AI 3D 平台，2.0 模型精度大幅提升）
- Printer：作者用拓竹 A1（FDM 机型）；没有打印机可淘宝代打，很便宜
- 来源：公众号「数字生命卡兹克」《我用AI 3D，终于实现了我的手办自由。》，2024-10-24

## 工作流（两步：建模 → 打印）

### 1. AI 建模（Tripo）

- 传图 →「图生3D」→ 点生成，不到 1 分钟出模型（文生3D 也行）
- 网页直接预览、转动查看；胳膊等局部偶有小错位，重 roll 即可
- **关键优势：重 roll 免费**——不像很多 AI 视频产品钱 roll 完了还没好片段，Tripo 让你 roll 到满意为止（作者 roll 1 次就完美）
- 不要模型只要数字资产的话：贴图都备好，**甚至能自动绑骨骼**——生成 Q 版索隆，点「骨骼绑定」，30秒\\~1分钟自动绑完，能走能跑，做角色动画/模型很有用
- 白模查看：取消材质显示，看结构光滑度

### 2. 3D 打印（两派路线）

| 方式 | 原理 | 优点 | 缺点 | 适合 |
|-|-|-|-|-|
| **光固化** | 紫外光照射光敏树脂，一层层固化 | 表面光滑、细节精细 | 机器+材料贵 | 小巧复杂、高精度手办原型 |
| **FDM**（熔融沉积） | 塑料丝（PLA/PETG）加热成液态逐层堆叠，像奶油裱花 | 速度更快、材料环保便宜 | 层纹明显、表面不够光滑 | 平民/常见，作者用拓竹 A1 |

- Tripo 生成的模型可直接选打印软件格式，下载拖进打印软件
- 站不稳就加脚垫 + 自动加支撑（否则悬空处打不上）
- **单色白模 + 丙烯马克笔上色**是性价比最优解：AI 3D 模型是一体的，软件里手动分色麻烦，多色打印时间从 2 小时飙到十几小时，不值当
- 出门前点开始打印，回家即成型，再花会儿涂色完工

## 真正的洞见（这篇值钱的地方）

- **3D 打印早不新鲜，卡点是建模成本**：不是耗材贵，是人力成本——以前手工建模一个复杂模型要几小时甚至更久，现在 AI 图生3D 一分钟出白模。并不是打印不行，是建模太贵，AI 把这个瓶颈解掉了。
- **AI 3D 的意义是「想象力具象化」**：作者小时候想自己设计桌游棋子，如今有人用 Tripo + 3D 打印做出了整套桌游（sonyx.eth、克罗地亚 16 岁小哥）——"当无形化为有形，棋子宛如魔法出现在面前"。
- **AI 一小步，想象力一大步**：工具的价值不在炫技，在于把过去只有专业建模师能做的事，交给普通人。

## 适用场景

想做手办/桌游棋子/原创 IP 实体化的人；需要快速出 3D 模型做角色动画的（自动绑骨骼）；AI 3D 工具链的入门参考。

## 相关

- 归入「AI 产品实践」知识线——和 AI 婚礼微电影（LibTV）、SSE 打字机实践并列，都是 AI 工具落地到具体场景的案例。`,feishuUrl:"https://my.feishu.cn/docx/QCWpdkDMLo9xfYxAQAScC81mnub"},{id:"fs-QXr6dlZVko3TKaxqvdEcdPoenNb",category:"tech",title:"即创 · AI 数字人创作平台实操（工具卡片）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 字节巨量引擎旗下、完全免费的 AI 数字人成片平台，输入脚本→选数字人→配音→一键出口播视频。这篇的价值主要在「注册登录踩坑」和「成片 SOP」。 基本信息 网址：https://aic.oceanengine.…",body:`## 一句话

字节巨量引擎旗下、完全免费的 AI 数字人成片平台，输入脚本→选数字人→配音→一键出口播视频。这篇的价值主要在「注册登录踩坑」和「成片 SOP」。

## 基本信息

- 网址：https://aic.oceanengine.com （巨量引擎旗下）
- 平台：**只有网页版，没有手机 app**，电脑浏览器使用最方便
- 费用：完全免费
- 来源：公众号「AIGC共学社」《完全免费的AI数字人创作平台…保姆级详细教程》，作者顾晓薇，2024-10-21

## 注册登录（最容易卡住的地方）

1. 打开首页 → 新用户点「注册」
2. 手机号（或邮箱）→ 滑动验证 → 收验证码 → 点注册
3. **绑定组织这一步最让人懵**：新用户没有组织，直接点「创建组织」，名称随便写（4-30 字，不含敏感词即可）
4. 创建后进入「巨量引擎」工作台 → **鼠标移到右上角展开服务栏 →「我的服务」里找到「即创」**（入口藏得深，很多人找不到）
5. 点「即创」→ 巨量引擎账号登录 → 勾选协议、同意登录
6. 首次进入有说明弹框 →「立即体验」→ 进创作页

## 数字人成片 SOP

进入创作页 → 左侧导航或中间图片导航点「**数字人成片**」：

1. **脚本字幕**：左侧「脚本字幕」输入文案，单框 600 字、可加 5 个、共 3000 字

   - 建议关掉右上角「显示字幕」，字幕留到后期剪辑工具加
   - 不打算二次剪辑才用这里，选个字幕样式即可
2. **数字人形象**：左侧「数字人」，上百款可选

   - 实景数字人**不能换背景**；非实景**可换背景**
   - 背景：系统自带很多，也可自己上传，或用「AI 生成」（一次出 3 个，不满意重生成）
3. **配音**：系统提供大量语音（男女老少），选中点右侧试听，可调语速
4. **前贴/后贴 + 背景音乐 + 花字**：这几项**建议在剪映等剪辑工具里做**，别用平台自带
5. 点右下角「立即生成」→ 查看视频 → 满意就下载

   - 想在即创内二次剪辑：点生成结果下方「编辑」进编辑页加 BGM 等，会重新生成口播视频

## 可迁移的要点

- **免费数字人口播的完整链路**：脚本→形象→背景→配音→生成，适合做知识口播、带货、课程讲解类视频的批量生产。
- **平台取舍经验**：字幕/BGM/花字放剪映做二次剪辑，比在平台内做更灵活——把「生成」和「精修」分工。
- **注册坑点**：绑组织 + 工作台里找入口，是这类大厂工具（巨量引擎系）的典型门槛，预先知道能省很多时间。

## 关联

归入「AI 产品实践」线——和 AI 婚礼微电影（LibTV）、Tripo AI 3D 并列，都是 AI 工具落地到具体创作场景的案例。`,feishuUrl:"https://my.feishu.cn/docx/QXr6dlZVko3TKaxqvdEcdPoenNb"},{id:"fs-ZVGmdF5X4ofMWaxA5A0cB1iznLd",category:"tech",title:"three-cesium-examples 开源案例库｜Three.js / Cesium.js 案例合集",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：公众号「初识Threejs」《太全面了！开源的 Three.js 各种案例》，作者 SuperMMM，2024-09-07。 定位：原生 Three.js 与 Cesium.js 的开源案例合集，持续更新，只做开源…",body:`来源：公众号「初识Threejs」《太全面了！开源的 Three.js 各种案例》，作者 SuperMMM，2024-09-07。

定位：原生 Three.js 与 Cesium.js 的开源案例合集，持续更新，只做开源。

## 案例覆盖

- 几十款着色器
- 粒子效果及多种应用场景
- 轮廓光等后期处理效果
- 不同格式模型加载
- 小米 SU7 等高级案例
- 其他持续更新的效果案例

## 资源链接

- 源码：https://github.com/z2586300277/three-cesium-examples
- 在线预览（GitHub Pages）：https://z2586300277.github.io/three-cesium-examples
- 在线预览（Vercel）：https://three-cesium-examples.vercel.app/#/example

## 可提炼的知识点

1. 案例库本身就是学习路线：按“着色器 → 粒子 → 后处理 → 模型加载 → 高级案例”的顺序看，能覆盖 Three.js 的主干能力。
2. 同时收录 Three.js 与 Cesium.js，适合对比普通 WebGL 场景与地理空间场景的差异。
3. 双在线预览（GitHub Pages + Vercel）可作为个人项目展示的部署参考。
4. 每个案例最好沉淀成独立卡片：效果截图、核心 API、源码路径、可复用片段，后续可挑适合的内容做个人站点 demo。`,feishuUrl:"https://my.feishu.cn/docx/ZVGmdF5X4ofMWaxA5A0cB1iznLd"},{id:"fs-I5yod1kiFo2dTHxxQT4ctVWNn2R",category:"tech",title:"Three.js 多屏幕同步展示｜数字人场景实战",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源（同项目两篇合并）： 公众号「前端设计大神 / AI for Frontend」《threejs实现数字人同步在多屏幕展示效果》，2023-12-07。 公众号「魔术师卡颂」《谈谈外网刷屏的量子纠缠效果》，卡颂，20…",body:`来源（同项目两篇合并）：

- 公众号「前端设计大神 / AI for Frontend」《threejs实现数字人同步在多屏幕展示效果》，2023-12-07。
- 公众号「魔术师卡颂」《谈谈外网刷屏的量子纠缠效果》，卡颂，2023-11-23。（原理补充）

原效果作者：@*nonfigurativ*（艺术家、程序员）。

定位：把同一个 3D 场景同步展示到多台机器 / 大屏或多个浏览器窗口；中控设备或任一页面状态变化，其他画面实时跟随。文章里把这个效果称为“量子纠缠”。

## 场景与效果

- 多台大屏打开浏览器窗口，每台输入 URL + 机器位置参数。
- 示例中两台屏幕拼成 2560 × 960 的大画面。
- 中控设备调整相机角度、物体数量，其他机器跟随变化。
- 作者背景：数字人项目，支持嘴形同步、骨骼绑定、3D 场景切换、定制数字人、语音克隆、接入大模型、自训练，可用于直播、灯箱等场景。

## 实现方法一：服务端中控 + setViewOffset

URL 参数示例（机器 ABC 为服务端，机器 DEF 为客户端）：

\`\`\`text
http:///games//sync2d.html?settings={shared:{fillWidth:2560,fullHeight:960},left:0,top:0,server:true}
http:///games//sync2d.html?settings={shared:{fillWidth:2560,fullHeight:960},left:1280,top:0,server:false}
\`\`\`

核心机制：

1. 第一台机器作为服务器 / 中控，控制其他机器。
2. 每台机器都绘制完整场景，但通过 Three.js 的 \`camera.setViewOffset\` 只渲染自己那部分视口。
3. 所有绘图基于统一时钟，保证各机器绘制内容匹配。
4. 服务器调整滑块后，把更新设置发送给中控，再同步给所有机器。
5. 参考源码：https://github.com/greggman/hft-syncThreeJS

## 实现方法二：localStorage + Dynamic Window Management

在多个浏览器窗口里同步 Three.js 场景，不依赖服务端中控。

参考源码：

- [https://github.com/bgstaal/multipleWindow3dScene](https://github.com/bgstaal/multipleWindow3dScene)
- React 实现案例：https://github.com/ritikbanger/react-multi-window

关键代码模式：

\`\`\`javascript
function setupWindowManager() {
  windowManager = new WindowManager();
  windowManager.setWinShapeChangeCallback(updateWindowShape);
  windowManager.setWinChangeCallback(windowsUpdated);

  let metaData = { foo: "bar" };
  windowManager.init(metaData);
  windowsUpdated();
}

function windowsUpdated() {
  updateNumberOfCubes();
}

function updateWindowShape(easing = true) {
  sceneOffsetTarget = { x: -window.screenX, y: -window.screenY };
  if (!easing) sceneOffset = sceneOffsetTarget;
}
\`\`\`

窗口管理器 \`WindowManager\` 主要监听 \`localStorage\` 变化；\`localStorage\` 保存每个窗口在屏幕上的位置（相对左上角的 x / y）和宽高，变化时刷新渲染位置。

## 原理拆解：屏幕坐标系 + 跨页面通信

来自卡颂的补充分析：

### 基础概念

- 屏幕坐标系：屏幕左上角是原点。
- 窗口坐标系：页面窗口左上角是原点。
- 单屏多窗口：一个屏幕坐标系 + 多个窗口坐标系。
- 外接屏幕 / 外接 Pad：可能存在多个屏幕坐标系，需要 \`window.getScreenDetails\`，本文讨论不展开。
- 窗口左上角相对屏幕的位置：\`window.screenTop / screenLeft\`（常见也用 \`screenX / screenY\`）。
- 页面正中间画圆，圆心的窗口坐标是 \`(window.innerWidth / 2, window.innerHeight / 2)\`；换算到屏幕坐标要加上窗口偏移。

### 位置检测与通信

- 每个页面生成唯一 \`pageId\`：\`Math.random().toString(36).substring(2)\`。
- 把圆心 / 窗口信息写进 \`localStorage\`：x、y、width、height。
- 其他页面监听 \`storage\` 事件，过滤掉自己的 \`pageId\`，拿到对方圆心的屏幕坐标。
- 再把对方屏幕坐标转换为自身窗口坐标，在该坐标绘制圆 / 连接线，就会出现“下面窗口的画面出现在上面窗口内”的错觉。
- 同源跨页面通信方式还有：\`Window.postMessage\`、\`LocalStorage / SessionStorage\`、\`SharedWorker\`、\`BroadcastChannel\`、\`Cookie\`。该效果作者用的是 \`LocalStorage\`。
- 性能考虑：坐标检测和渲染放到 \`requestAnimationFrame\` 回调中执行。

\`\`\`javascript
const pageId = Math.random().toString(36).substring(2);

localStorage.setItem(
  pageId,
  JSON.stringify({
    x: window.screenX,
    y: window.screenY,
    width: window.innerWidth,
    height: window.innerHeight,
  })
);

window.addEventListener("storage", (event) => {
  if (event.key !== pageId) {
    const { x, y } = JSON.parse(event.newValue);
    // 换算到自身窗口坐标后绘制
  }
});
\`\`\`

### 复刻时还要处理

- 大量粒子（示例中用圆代替）与多窗口通信时的性能问题。
- 窗口移动时的阻尼效果。
- 当前实现基于同一个屏幕坐标系；跨屏幕需要 \`window.getScreenDetails\`。

## 重要知识点

1. 多屏同步的本质是“共享状态 + 视口切分 + 统一时钟”：每台机器画完整场景，靠 \`setViewOffset\` 取自己那块画面。
2. URL 参数可以携带屏幕总尺寸、当前窗口偏移、是否作为 server，适合做多屏装置或数字人展陈。
3. \`WindowManager\` 的两个关键回调：\`setWinShapeChangeCallback\` 跟踪窗口位置移动，\`setWinChangeCallback\` 响应窗口数量变化。
4. \`updateWindowShape\` 用 \`window.screenX / screenY\` 计算全局偏移，渲染时按 offset 移动场景；\`windowsUpdated\` 根据当前窗口数动态增删场景对象。
5. 卡颂补充：先分清屏幕坐标系与窗口坐标系，用 \`pageId + localStorage + storage 事件\` 让多个页面互相知道圆心位置，再换算到自身窗口坐标绘制。
6. 跨页面通信不只有 \`localStorage\`，还有 \`postMessage\`、\`SharedWorker\`、\`BroadcastChannel\`、\`Cookie\` 等；检测与渲染建议放进 \`requestAnimationFrame\`。
7. 这个效果适合沉淀成个人网站里的 Three.js 实验卡片，但演示时需要多窗口或多屏环境。

## 相关链接

- 前端设计大神原文：https://mp.weixin.qq.com/s/hvBFSmMnGGufRitRYcgyZw
- 魔术师卡颂原理解析：https://mp.weixin.qq.com/s/a9tbIXJ6Jd7cQj5afB5kZA
- 原文关联：https://mp.weixin.qq.com/s/uWxidIPcDcp0WMp2A-j7Hw
- window.getScreenDetails 文档：https://developer.chrome.com/zh/articles/multi-screen-window-placement/`,feishuUrl:"https://my.feishu.cn/docx/I5yod1kiFo2dTHxxQT4ctVWNn2R"},{id:"fs-HeXQdCFfqoMRDpxyC8bcbHb1nve",category:"tech",title:"动手学大模型应用开发｜知识骨架",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：图片《动手学大模型应用开发》XMind 思维导图（奇想星球平台）。 用途：作为个人知识系统的样板——先立主题骨架，再把已经知道的内容填进去；之后每学到一个新点，只建一个小“触角”节点并链接回来源卡片。 大模型简介 …",body:`来源：图片《动手学大模型应用开发》XMind 思维导图（奇想星球平台）。

用途：作为个人知识系统的样板——先立主题骨架，再把已经知道的内容填进去；之后每学到一个新点，只建一个小“触角”节点并链接回来源卡片。

## 1. 大模型简介

- 何为大模型
- 大模型特点是什么
- LangChain 是什么

## 2. 如何调用大模型 API

### 调用方式

- 调用原生 API
- 封装为 LangChain LLM
- 封装为 Fastapi

### API 种类

- GPT
- 百度文心
- 讯飞星火
- 智谱 ChatGLM

## 3. 大模型开发流程及架构

- 何为大模型开发
- 大模型应用开发的基本流程
- 基于个人知识库的问答助手

  - 项目流程简析
  - 项目架构简析
  - 架构图（图片中展示：用户层 → 应用层 → 能力层 → LLM 调用层，含 GPT / 文心 / 讯飞 / 智谱）

## 4. 数据库搭建

### 不同类型知识库文档的加载

- PDF 文档
- Markdown 文档
- MP4 视频

### 文档处理

- 分档分割
- 向量化

### 向量数据库的搭建

- 向量数据库介绍
- 构建 Chroma 向量库
- 通过向量数据库检索
- 构建检索问答链（原图被水印部分遮挡，按上下文推断）
- 构建项目知识库

## 5. Prompt 设计

### 设计原则和使用技巧

#### 1. 编写清晰、具体的指令

- 使用分隔符清晰地表示输入的不同部分
- 寻求结构化的输出
- 要求模型检查是否满足条件
- 提供少量示例

#### 2. 给模型时间去思考

- 指定完成任务所需的步骤
- 指导模型在下结论之前找出一个自己的解法

### 基于问答助手的 Prompt 构建

- 加载向量数据库
- 创建一个 LLM
- 构建 Prompt
- Prompt 效果测试
- 添加历史对话的记忆功能

## 6. 验证迭代

### 如何实现验证迭代 → 解决 Bad Case

- 构造向量数据库
- 评估直观回答的质量
- 标明知识来源，提高可信度
- 构造思维链
- 增加一个指令解析

### 评估方法

#### 人工评估的一般思路

- 量化评估
- 多维评估

#### 简单自动评估

- 构造客观题
- 计算答案相似度
- 使用大模型进行评估
- 混合评估

## 7. 前后端开发

- Gradio 简介和使用
- FastAPI 简介和使用`,feishuUrl:"https://my.feishu.cn/docx/HeXQdCFfqoMRDpxyC8bcbHb1nve"},{id:"fs-Auv0d2HT0omAt2xIkTkc9vvdnSd",category:"tech",title:"万向节锁（Gimbal Lock）的理解",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"同一个主题，两篇文章合并（2026-11-20）： 皮斯卡略夫，博客园，2016-07-10 · https://www.cnblogs.com/psklf/p/5656938.html 欧拉角万向节死锁，知乎，编辑于 …",body:`> 同一个主题，两篇文章合并（2026-11-20）：
> 
> 1. 皮斯卡略夫，博客园，2016-07-10 · [https://www.cnblogs.com/psklf/p/5656938.html](https://www.cnblogs.com/psklf/p/5656938.html)
> 2. 欧拉角万向节死锁，知乎，编辑于 2025-04-09 · [https://zhuanlan.zhihu.com/p/344050856](https://zhuanlan.zhihu.com/p/344050856)
> 
> 注：两篇对「成因」的表述看似不同，实则互补——见文末「两个视角对照」。

## 为什么要用四元数（知乎篇开篇）

四元数相比其他姿态表示的优点：

1. 解决**万向节死锁**
2. 仅需 4 个浮点数，比矩阵更轻量
3. 求逆、串联等操作比矩阵更高效

## 基础概念

- **欧拉角**：用「依次绕 X/Y/Z 三轴旋转」三次来分解一次旋转，三个角度即一组欧拉角。
- **两个坐标系**：世界坐标系 xyz（固定不动） + 刚体坐标系 XYZ（随刚体同步运动）。初始重合。
- **顺规**：如 z→Y→X 记为 zYX，加上角度即完整欧拉角 \`zYX-(ψ,θ,φ)\`。
- **Pitch / Yaw / Roll**（陀螺仪术语，等同欧拉角）：

  - 绕机身右方 X 轴 → **Pitch 俯仰**
  - 绕机头上方 Z 轴 → **Yaw 偏航**
  - 绕机头前方 Y 轴 → **Roll 横滚**

## 成因 · 视角 A（博客园：观念没对上）

观点：成因**不是欧拉角本身，也不是旋转顺序**，而是「人的思维方式」和「程序的执行逻辑」没对应。

- 人的预期：像机长一样，每次旋转都基于「旋转后的新物体坐标系」（动态欧拉角）。
- 程序实际：把三个轴的旋转矩阵按**固定顺序连乘**，始终在**世界坐标系**下计算。OpenGL 里顺序固定 x→y→z，与用户输入顺序无关。
- Lock 的产生：绕 Y 转 90° 后，物体坐标系的 X 轴与世界坐标系的 Z 轴重合 →「绕 X 转」和「绕 Z 转」等效，失去一个自由度。
- 例：操作 A（Y90→X90，实际 X90→Y90）与操作 B（Y90→Z90，实际 Y90→Z90）结果相同 —— 这就是 Gimbal Lock。

## 成因 · 视角 B（知乎：欧拉旋转定义本身 + 陀螺仪具象）

观点：死锁由**欧拉旋转定义本身**造成——围绕「旋转前的固定轴」先 Z、再 X、再 Y 的操作，与最终预期的三轴旋转**并非一对一映射**，某些情况是**多对一映射**，造成自由度缺失。

- **Gimbal（平衡环架 / 陀螺仪）**：三层互相垂直的枢纽环，使最内环物体保持旋转轴不变。三个环分别提供三个方向的旋转自由度，靠可相对转动的连接头自我调节以保持转子平衡。
- **死锁过程**：船首仰起（Pitch）90° 后，三个连接头提供的自由度只剩「俯仰」和「偏航」两个 —— 红头给俯仰、绿头给偏航、蓝头也给偏航，**滚转（桶滚）自由度丢失**。此时陀螺仪三板斧失效。
- **进动示例**：欧拉角从 (0,0,0)→(90,0,0)→(90,90,0)→(90,180,0)→(90,180,90)→(90,180,180)。X90 后是俯仰；Y 轴 0→180 变成相对自身的 Roll；Z 轴 0→180 仍是 Roll —— 三轴进动最终只对应两个轴向。
- **关键**：当 Z 轴为 90° 时，绕 X 轴进动从「俯仰」变成「偏航」；Y 轴进动同时受 Z、X 影响，结果更不唯一。X/Y 的进动结果依赖先前 Z 的进动 → 多对一映射 → 丢失一个自由度。
- 结论原文：「某些时刻，这种不确定的结果，就可能造成某个轴向自由度的丢失……在编程中很难规避死锁，所以现在更多使用四元数形式。」

## 两个视角对照（记忆点）

- 博客园强调「**观念 vs 实现**」：你以为按物体自身坐标系连续转，程序却按世界坐标系固定顺序连乘矩阵 → Y90 后 X/Z 轴重合。
- 知乎强调「**映射本身**」：欧拉角按固定轴顺序旋转，与预期三轴自由度是多对一映射 → Pitch90 后 Roll 自由度丢失。
- 本质同一件事：**三个旋转轴的依次应用，在某些角度下退化成两个独立方向，丢掉一个自由度**；解法都是转向四元数。

## 延展

- 解决思路：转向**四元数（Quaternion）**做姿态表示与旋转。
- 参考：

  - GimbalLock 万向节锁与四元数旋转 [http://www.zwqxin.com/archives/arithmetic/gimballock-and-quaternion.html](http://www.zwqxin.com/archives/arithmetic/gimballock-and-quaternion.html)
  - 万向节死锁（Gimbal Lock）问题 [https://blog.csdn.net/AndrewFan/article/details/60981437](https://blog.csdn.net/AndrewFan/article/details/60981437)`,feishuUrl:"https://my.feishu.cn/docx/Auv0d2HT0omAt2xIkTkc9vvdnSd"},{id:"fs-Z5uvd4o0ooidwKxDtaDc4Fjkn4b",category:"tech",title:"Cesium-Examples（jiawanlong）原生 Cesium 开源示例库",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：知乎专栏《2025年最新Cesium学习示例：Cesium-Examples》，2025-09-03（湖北）。 定位：GitHub 博主 jiawanlong 开源的 Cesium 示例库，突出原生、免费、单文件示…",body:`来源：知乎专栏《2025年最新Cesium学习示例：Cesium-Examples》，2025-09-03（湖北）。

定位：GitHub 博主 jiawanlong 开源的 Cesium 示例库，突出原生、免费、单文件示例，适合新手入门到中高级项目参考，持续更新（基本每天/每周新增案例）。

> 同主题另见：[[three-cesium-examples-开源案例库]]（z2586300277，Three.js + Cesium.js 合集）。两个项目不同作者、不同仓库，可对照着学。

## 优势

1. 突出原生，无任何插件、不封装。
2. 免费、无收费、无需向作者授权，可直接使用。
3. 相比 superMap、mars3d 等，全部为原生 Cesium，每个示例是单独文件。
4. 既适合新手入门，也适合中高级开发在项目里应用。
5. 持续更新，案例增长快。

## 如何试用

下载完整项目后，放到 nginx 等静态容器下即可运行。

## 资源链接

- 源码：https://github.com/jiawanlong/Cesium-Examples
- 在线示例：https://jiawanlong.github.io/Cesium-Examples/
- 低代码 Cesium 平台（Go-Cesium-View）：https://github.com/jiawanlong/Go-Cesium-View
- 博客主页：https://jiawanlong.github.io/
- 同作者 Three.js 示例库（100+ 示例）：https://github.com/jiawanlong/ThreeJs-Examples/

## 功能覆盖（14 类）

1. **综合应用**：智慧城市、台风、智慧交通、智慧物流、二三维联动、航拍、Cesium 融合 Three 等。
2. **基础功能**：坐标、坐标转换、相机、量算、事件、飞行漫游、罗盘、导航条、时间轴。
3. **影像图层**：单张图片、xyz / tms / wms / wmts 服务、天地图、高德、百度等。
4. **矢量图层**：shp、geojson、mvt、czml、动态时序图。
5. **地形**：离线地形、在线地形、地形夸张。
6. **Entity**：点、线、面、模型、海量图标、气泡窗口、gif、聚合、czml、字体图标、entity 操作。
7. **Primitive**：各种 Primitive、PrimitiveCollection、Primitive 操作。
8. **模型**：glb / gltf / 3dtiles 加载、模型事件、编辑、运动、偏移、自定义材质、customShader。
9. **空间分析**：地形开挖、可视域、淹没、缓冲、日照、方量、透视、剖面分析、单体化。
10. **视频融合**：视频融合、视频投射、二维/三维投射、贴地投射。
11. **特效**：雨雪雾、天空盒、场景出图、体积云、闪电、视锥体、雷达扫描、流动线、水波纹、动态扩散点、电子围栏。
12. **粒子效果**：火焰、水枪、爆炸、喷雾、烟。
13. **物理引擎**：车辆运动、转动（旗子）、撞击（软体）、撞击断裂体。
14. **可视化**：大数据可视化、风场、3d/二维热力图、克里金、海流、等值面图。

## 可提炼的知识点 / 待搞懂清单

1. Cesium 与 superMap、mars3d、Three.js 的定位差异：什么场景选原生 Cesium，什么场景选封装库或纯 WebGL？
2. 影像图层 xyz / tms / wms / wmts 四种服务的区别与各自适用场景。
3. Entity 与 Primitive 两套 API 的分工：什么时候用高层 Entity，什么时候下探到 Primitive 做性能优化？
4. customShader 自定义材质在 Cesium 里的写法与能力边界。
5. 空间分析（可视域/淹没/剖面等）背后的几何与地形原理。
6. Cesium 融合 Three.js（二三维联动）的实现思路。`,feishuUrl:"https://my.feishu.cn/docx/Z5uvd4o0ooidwKxDtaDc4Fjkn4b"},{id:"fs-VSOCdXTVRoSgTxxrcQBcFUUtnUA",category:"tech",title:"CSDN GIS开发专栏｜Cesium 实战资源清单",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：CSDN 博客「啊嘞嘞嘞嘞」的 GIS开发专栏，共 75 篇文章。 专栏地址：https://blog.csdn.net/weixin_40902527/category_9087796.html 定位：以 Ces…",body:`来源：CSDN 博客「啊嘞嘞嘞嘞」的 GIS开发专栏，共 75 篇文章。

专栏地址：https://blog.csdn.net/weixin_40902527/category_9087796.html

定位：以 Cesium 为主的 GIS/WebGIS 实战案例博客，涵盖 3D 特效、后处理、空间分析、视频融合、数字孪生、二三维联动、OpenLayers/PostGIS 等。按用户约定，这里只做站点级统计与分类，不逐篇做深度笔记；用到某篇时再单独沉淀卡片。

> 同主题资源：[[three-cesium-examples-开源案例库]]（z2586300277）、[[Cesium-Examples-jiawanlong-开源示例库]]（jiawanlong）。三个来源互相补充。

## 文章主题分布（75 篇归类）

### 1. Cesium 特效 / 材质 / Shader / 后处理

- 3d 特效渲染、基于 threejs 的后处理渲染、天气后处理效果
- shader 绘制旋转光锥、shadertoy 模板封装
- 自定义材质（2）动态泛光面、（3）；自定义材质线插件（支持动态生成材质）
- 动态泛光效果、模型光照 PBR 光照、建筑光效（3dtileset + 自定义着色器）
- 3dtileset 建筑物 Shader 泛光涟漪特效

### 2. 视频融合 / 投射

- 基于 3dtileset 的视频投射插件（支持动态调整角度）
- 自定义视频投放

### 3. 空间分析

- 视域分析（可视域效果）、三维空间分析模块（通视/坡度/淹没/视域）
- 地形挖方分析、动态缓冲区（效果 + 图形绘制插件）

### 4. 雷达 / 扫描 / 信号

- 相控雷达扫描插件、绘制雷达扫描、卫星雷达传感器（雷达探测）
- 信号线和范围圈、建筑物扫描线效果、卫星扫描 + 地面雷达 + 实时通信过境
- 动画路径点绑定锥体扫描物

### 5. 数字城市 / 可视化

- 数字城市可视化、基于 Cesium 的城市可视化、城市路网可视化、动态柱状图、三维可视化
- 城市调度模拟示例、城市警情模拟、三维风场、热力图
- 数字孪生（超图/UE4/Unity 结合示例）、基于超图的数字城市效果

### 6. 模型 / 3D Tiles

- geojson 几何数据创建模型、3DTileset 变换插件（矩阵旋转/平移/缩放）
- react 中 threejs 加载 3dtiles 和 b3dm、superMap3D 加载原生 3dtiles 数据
- 点云 + 全景展示

### 7. 二三维联动 / 多引擎融合

- 结合 Cesium 的点云 + 全景展示、使用 three 渲染 cesium 地球瓦片
- ol-cesium 二三维联动（疫情数据可视化）、ol-cesium 学习（二维切三维）

### 8. React / Vue 工程化

- 基于 react + ts 的三维组件开发示例、react hooks 创建三维应用
- 基于 vue + element 的三维 GIS 示例、基于 Webpack 的 Cesium 项目搭建

### 9. Cesium 基础 / 工具

- 基础环境官方示例、事件和地图坐标转换、提取时间轴和罗盘单独交互
- dayjs 处理时间、自定义 geocode 重写地理编码、拾取 arcgis 瓦片图层属性
- 示例代码编辑器（1）（2）、三维量测插件、路径漫游（第一视角/相机跟踪）、自定义气泡框

### 10. OpenLayers / WebGIS / PostGIS

- openlayers 基于 nodejs+es6+webpack 模版、openlayes3 画点线/点选圈选多边形选/建筑物加文字
- PostGIS：ST_Within 圈选几何内 POI、点生成线；geoserver 跨域；离线地图下载与 WebGIS 应用

## 待搞懂清单（用到时再深挖）

1. Cesium 自定义材质 / Shader 的写法与 shadertoy 模板封装思路。
2. 3D Tileset 上做视频投射、建筑光效的实现方式。
3. 可视域、通视、淹没、挖方等空间分析的几何原理。
4. ol-cesium 二三维联动与 three 渲染 cesium 瓦片的融合机制。
5. PostGIS 在 WebGIS 里做空间查询（ST_Within 等）的基本用法。`,feishuUrl:"https://my.feishu.cn/docx/VSOCdXTVRoSgTxxrcQBcFUUtnUA"},{id:"fs-T2BrdFx5Iou3XZxsHxncxQTUnvh",category:"tech",title:"lib-flexible 适配大屏方案（px2rem / postcss-pxtorem / 540 上限）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：语雀《lib-flexible适配大屏方案》（作者 lubobo，本会话由本人贴正文提供；此前协作链接需登录无法直接抓取）。 定位：以 `lib-flexible` + `px2rem-loader`（2.x）/ …",body:"来源：语雀《lib-flexible适配大屏方案》（作者 lubobo，本会话由本人贴正文提供；此前协作链接需登录无法直接抓取）。\n\n定位：以 `lib-flexible` + `px2rem-loader`（2.x）/ `postcss-pxtorem`（3.x）把 CSS 里的 px 自动转成 rem，做移动端 / 大屏等比适配的方案笔记。\n\n## 核心原理\n\n- `lib-flexible` 会自动在 `` 注入 ``，并把 `html` 的 `font-size` 设为**屏幕宽度 ÷ 10**，即 `1rem = html 根节点 font-size`。\n- 换算：设计稿宽 750px → `1rem = 750/10 = 75px`；量得某元素宽 150px → CSS 写 `width: 2rem`（150/75）。\n- 一般不单独用，搭配 `px2rem-loader` 自动把 CSS 中的 px 转 rem。\n\n## 安装与引用\n\n```bash\nnpm install lib-flexible --save-dev\nnpm install px2rem-loader --save-dev\n```\n\n```js\nimport 'lib-flexible'\n```\n\n## 配置 px2rem-loader（vue-cli 2.x）\n\n1. `build/utils.js` 找到 `exports.cssLoaders`，按方案修改；\n2. 继续找到 `generateLoaders` 里的 `loaders` 配置，加入 px2rem-loader；\n3. `npm run dev` 重启生效。\n\n## vue-cli 3.x：改用 postcss-pxtorem\n\n3.x 下 px2rem-loader 未生效，改用 postcss-pxtorem，效果一致：\n\n```bash\nnpm install postcss-pxtorem --save-dev\n```\n\n在 `vue.config.js` 中加入 `css.loaderOptions.postcss.plugins` 的 `pxtorem` 配置，重启即可。\n\n- 注意：**对行内样式（style=\"...\"）无效**。\n\n## 注意事项（lib-flexible 的坑）\n\n- 默认适配对象是**移动端**：源码里默认最大值 `540`，超过部分按 540 适配；`dpr` 默认为 1。\n- 大屏要用需改源码：`./node_modules/lib-flexible/flexible.js` 里把 `width = 540` 的上限、`dpr` 逻辑改掉，重启生效。改 node_modules 不持久（重装会丢），更适合 fork 或用 `amfe-flexible` / 自己写 setRem。\n\n## 大屏兜底：calculationRem（对行内样式等 px2rem 管不到的地方）\n\n获取当前页面宽度，按 1920 基准实时算 px 再渲染：\n\n```js\ncalculationRem(px) {\n  let clientWidth = document.body.clientWidth;\n  let rem = parseInt((px / 1920) * clientWidth);\n  return rem;\n}\n```\n\n## 待搞懂（只列问题，答案自己学完填）\n\n1. `lib-flexible` 源码里 viewport 是怎么根据 dpr 动态生成 scale 的？为什么 1px 边框能物理清晰？\n2. 为什么设计稿取 750 而不是 375？`1rem = width/10` 这个「10」能不能改成 100，各有什么利弊？\n3. `px2rem-loader` 在 2.x 生效、3.x 失效的根因是什么？loader 与 postcss 插件的执行阶段差异？\n4. `postcss-pxtorem` 的 `rootValue`、`unitPrecision`、`propList`、`mediaQuery`、`selectorBlackList` 分别怎么配？为什么行内样式无效？\n5. 540 上限对 1920 大屏意味着什么？直接改 node_modules 的隐患与更稳的替代方案（amfe-flexible / 自写 setRem / vw 方案）？\n6. `vw/vh` 方案 vs `rem` 方案 vs `calc()` 各有何取舍？现在大屏适配主流用哪个？\n7. `calculationRem` 用 1920 做基准，和设计稿 750 的 rem 基准怎么统一？混用会不会冲突？\n\n> 同主题：[[Three.js-多屏幕同步展示-数字人场景]]（多屏视口切分）、[[CSDN-GIS开发专栏-Cesium实战资源清单]]（大屏特效）。",feishuUrl:"https://my.feishu.cn/docx/T2BrdFx5Iou3XZxsHxncxQTUnvh"},{id:"fs-DZz3d5BH6o89YbxIU3Ac6igsntd",category:"tech",title:"CAUTION request is not finished yet · 前端卡顿排查（1.7w 点位/死循环/网卡限速）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源（三篇合并同主题）： 博客园 布条麻绳《Caution: request is not finished yet》2021-03-09：https://www.cnblogs.com/FrankieWei/p/145…",body:`来源（三篇合并同主题）：

- 博客园 布条麻绳《Caution: request is not finished yet》2021-03-09：https://www.cnblogs.com/FrankieWei/p/14506342.html
- CSDN xiamoziqian《线上请求接口提示 CAUTION: request is not finished yet!》2021-01-29：https://blog.csdn.net/xiamoziqian/article/details/113404957
- CSDN qq_21275565《vue出现caution:request is not finished yet导致页面卡死问题解决思路》2022-07-10：https://blog.csdn.net/qq_21275565/article/details/125711898

定位：接口返回 200、Timing 显示 \`CAUTION: request is not finished yet\`、页面卡死的排查思路合集。典型场景是**大数据量（如 1.7w 地图点位）前端遍历处理太久**，或死循环导致内存泄漏。

## 现象与判定

- 接口状态码 200 但拿不到数据、Timing 提示 \`CAUTION: request is not finished yet\`、页面点击无响应。
- **关键分流看 Timing 的 Content Download 是否有值**：

  - 有值（哪怕 0.84ms）→ 数据已经下载完，**与后端/网速无关，是前端 JS 处理返回数据太久**（前端遍历、渲染、死循环）。
  - 没值 → 后端接口/网关/网络问题（另查）。

## 前端侧的成因与解法

1. 数据量太大：

   - **分页**，减少一次拿的数据量（最常规）；
   - 传输层**压缩**（nginx 开 gzip）；
   - 还不行就用 **Chrome Performance → Call Tree** 定位耗时最多的方法，排除 Vue 框架自带耗时，找到自己的方法优化；
   - 若瓶颈在渲染，用大数据渲染方案（虚拟列表 / \`clusterize.js\`）。
   - 原文实例：element-ui 表格 \`cell-class-name\` 配合方法 + 大量表格分页，每翻页重新遍历，第二页 5s、第三页 15s、十几页几分钟。
2. **死循环 / 内存泄漏**：

   - Vue 报 \`Maximum recursive updates exceeded\`（响应式副作用改自己的依赖，递归触发，来自 template/render/updated/watch）；
   - 实例一：定义未用的 \`:after-read="afterRead()"\` 方法被反复触发，删掉即好；
   - 实例二：最小值 \`min > max\` 导致死循环；
   - 排查法：看 Console 异常提示 + 注释法（逐段注释定位）。
   - 注意：开发环境往往也告警，但线上才卡死；同一接口别的页面正常、Postman 正常 → 基本锁定前端。

## 地图点位场景补充（用户经验）

- 1.7w 点位在遍历期间逐个 \`setMapPoint\`/新增覆盖物导致页面卡死 —— 属于上面"前端处理太久"，要点：

  - 不要逐点操作 DOM/地图实例，先**聚合/抽稀**，或**批量**、**分批 requestAnimationFrame** 渲染；
  - 海量点用**聚合图层**（Cluster）/ **Canvas 叠加层** 代替逐个 marker。
- **网卡被手动限速（设成 10M/s、100M/s）也会引发莫名卡顿/下载异常；改回「自适应」即可**。排查网络类卡顿别漏了本机网卡 duplex/speed 设置。

## 待搞懂（只列问题，答案自己学完填）

1. Chrome Performance 的 Call Tree / Flame Chart 怎么读？怎么区分框架耗时和自己的方法耗时？
2. \`CAUTION: request is not finished yet\` 在 Network Timing 各阶段（Queueing/Stalled/Content Download）分别对应什么？
3. 虚拟列表、clusterize.js、地图聚合图层（MarkerClusterer）各自适用边界？
4. Vue \`Maximum recursive updates exceeded\` 的完整触发机制？watch/computed 里改响应式依赖为什么会递归？
5. 1.7w 点位用 Canvas 叠加层 vs 聚合 vs WebGL 渲染，性能差多少？怎么选？
6. 网卡限速为什么会拖垮页面？协商速率/双工不匹配有哪些典型症状？`,feishuUrl:"https://my.feishu.cn/docx/DZz3d5BH6o89YbxIU3Ac6igsntd"},{id:"fs-FqNCdBbbxojcbtxnDqYclX3Vnzc",category:"tech",title:"HTTP 环境页面被注入 build.js / flash.js · 劫持排查",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：CSDN lihaiweio《flash.js 劫持怎么解决》2021-04-08：https://blog.csdn.net/lihaiweio/article/details/115521360 （用户场景描述…",body:`来源：CSDN lihaiweio《flash.js 劫持怎么解决》2021-04-08：https://blog.csdn.net/lihaiweio/article/details/115521360  
（用户场景描述为「http 环境页面被注入 build.js」，与本文 flash.js 属同类：明文 HTTP 被中间节点注入脚本。）

定位：换网络环境后，下载 xlsx 触发**两次请求**、中间夹一个 \`flash.js\`，下载两次后出现白页。本质是 **HTTP 明文被运营商/网关/中间人注入 JS（脚本劫持）**。

## 成因

- HTTP 明文传输，链路上任何节点（运营商、代理、网关、缓存）都能篡改响应体，往页面里塞 \`\`（flash.js / build.js 之类）。
- 注入脚本往往重复发起业务请求、篡改下载逻辑 → 出现两次下载、白屏、广告跳转。

## 解决思路

1. **上 HTTPS（根本解法）**：全站 HTTPS + HSTS，加密后中间节点无法注入。
2. **CSP（内容安全策略）**：\`Content-Security-Policy\` 限制 script-src 白名单，阻止未授权外部脚本执行。
3. **SRI（Subresource Integrity）**：静态资源加 \`integrity\` 哈希，被篡改则浏览器拒绝加载。
4. **校验/清理**：服务端或构建时校验返回体；发现注入脚本特征（flash.js）可针对性拦截，但这只是治标。
5. 修改浏览器设置（禁用某脚本）只能临时自测，**不能要求每个用户改浏览器**，不是最终方案。
6. 排查：F12 Network 看请求瀑布流里的多余脚本、看响应体是否被加 \`\`，定位是哪个环节注入。

## 待搞懂（只列问题，答案自己学完填）

1. HTTP 中间人注入的具体链路环节有哪些？运营商劫持 vs 本地代理 vs 网关缓存怎么区分？
2. CSP 的 \`script-src\`/\`nonce\`/\`strict-dynamic\` 怎么配才能既挡注入又不误伤内联脚本？
3. SRI 对动态注入的第三方脚本有效吗？和 CSP 如何配合？
4. HSTS preload 的机制与上线风险？
5. 下载文件被注入导致触发两次请求，前端能否检测并阻止？（如校验 blob、监听请求次数）`,feishuUrl:"https://my.feishu.cn/docx/FqNCdBbbxojcbtxnDqYclX3Vnzc"},{id:"fs-WCkqdwzX2omzYNxkpDbc63S7nsy",category:"tech",title:"vue3 + vite + pnpm 踩坑合集（Dynamic require / router-view）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:'来源（合并同主题）： CSDN qq_37715639《vite报 Dynamic require of "path" is not supported 错误》2022-11-16：https://blog.csdn.n…',body:`来源（合并同主题）：

- CSDN qq_37715639《vite报 Dynamic require of "path" is not supported 错误》2022-11-16：https://blog.csdn.net/qq_37715639/article/details/127889956
- CSDN m0_67392182《vue3 Failed to resolve component router-view》2022-03-11：https://blog.csdn.net/m0_67392182/article/details/123433386

定位：vue3 + vite + pnpm 技术栈的两个高频报错与修复。

## 坑 1：Dynamic require of "path" is not supported

- 现象：项目里 \`require('path')\` 报错 \`Dynamic require of "path" is not supported\`。
- 原因：**vite 3.1.x 不支持 commonJS** 的动态 require。
- 修复：改用 ESM 具名导入，如 \`import { resolve } from 'path'\`；或升级/降级 vite、配置 optimizeDeps。
- pnpm 场景下还要注意幽灵依赖：没声明的依赖 \`require\`/\`import\` 不到，需显式 \`pnpm add\`。

## 坑 2：Failed to resolve component: router-view

- 现象：\`Failed to resolve component: router-view\`，router-link 等未渲染。
- 原因：\`app.use(router)\` 放在了 \`app.mount('#app')\` 之后，挂载时路由组件还没注册。
- 修复：\`app.use(router)\` 必须在 \`app.mount('#app')\` 之前：

\`\`\`js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
const app = createApp(App)
app.use(router)        // ← 必须在 mount 之前
app.mount('#app')
\`\`\`

## pnpm 相关补充

- pnpm 严格 node_modules 结构（符号链接 + 隔离 store），**未显式声明的包不可见**（幽灵依赖失效），vue/vite 插件要按需 \`pnpm add -D\`。
- 版本对齐：vue3 + vite3 + 对应 @vitejs/plugin-vue，pnpm 装包注意 peer 依赖警告。

## 待搞懂（只列问题，答案自己学完填）

1. vite 为什么在 ESM 下不支持 dynamic require？\`optimizeDeps\` / \`ssr.noExternal\` 怎么影响 CJS 依赖？
2. pnpm 的幽灵依赖隔离原理？\`.pnpm\` store + 硬链接 + 符号链接怎么工作？
3. \`app.use(router)\` 必须在 \`mount\` 前的原理？Vue 插件 install 时机与组件解析关系？
4. vue3 + vite + pnpm 从零搭建的标准步骤与版本搭配？
5. 哪些 vite 插件在 pnpm 下容易因 peer 依赖出问题，怎么解？`,feishuUrl:"https://my.feishu.cn/docx/WCkqdwzX2omzYNxkpDbc63S7nsy"},{id:"fs-IV0wdJkgIofbcTx7Du3c1chsnBQ",category:"tech",title:"游戏美术资源生产管线（四）· 角色服装篇",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 用「自动化 + 模块化 + 分层 shader + 离线动画」把角色服装做成可量产、品质稳定的工业管线——能用机器/软件解决的坚决不用人力，把品质下限交给流程，把上限交给 shader/渲染。 文章信息 标题：《…",body:`## 一句话

用「自动化 + 模块化 + 分层 shader + 离线动画」把角色服装做成可量产、品质稳定的工业管线——能用机器/软件解决的坚决不用人力，把品质下限交给流程，把上限交给 shader/渲染。

## 文章信息

- 标题：《建立下个时代的高清游戏美术资源生产管线(四)：角色服装篇》
- 作者：潘翔，首发知乎，转载于 GameRes 游资网，2022-09-08
- 原文：https://mp.weixin.qq.com/s/Xx1JzNTd-tgpleP8aD6JCQ
- 知乎：https://zhuanlan.zhihu.com/p/556689917
- 系列：第4篇；前3篇为 ①摄影测量建模 ②材质与纹理规范(场景篇) ③细节与质感

## 要解决的问题

角色服装制作两个硬约束：量大（换装/皮肤产量直接挂钩营收）+ 质高（玩家不买账），但美术水平参差不齐 → 如何设计既高效又高品质、品质还稳定的生产管线？

## 一、资源生产环节

### 1. 自动化：降低人员水平对品质的影响

两条可并行方案：

- **摄影测量建模**：全角度拍真实服装→数字化重建，适合写实项目（作者2020李宁数字服装发布会即用）。缺点：现实中得先有这件衣服。
- **Marvelous Designer（MD）**：专业3D服装设计，版型+拓扑，效果等同真实，实时试穿。思路和现实做衣服一样：版型、缝线、褶边、板片分割、纽扣拉链、层数厚度。

  - 关键取舍：尽量不在 ZBrush 手工雕细节——布料纹理用 SD 程序化生成（重复排列组合，人最费时、机器最擅长）；褶皱靠物理解算（人工雕不可能比解算精确，且大神手艺无法量产、还会和实时模拟冲突）。
  - 拓扑和 UV 必须在 MD 里按规范做，UV 分配和版型一致、按像素比缩放——牵涉 shader/绑定/布料模拟/LOD，随意分配会让后续不可控。
  - 两者结合：扫描褶皱建素材库，MD 模型导 ZBrush 选择性映射对应部位褶皱，快速逼真。
- 分工流水线：MD 做基础形 → ZBrush 细节映射 → Maya/Max 统一单位/比例/UV/顶点序号/坐标轴。模块独立、可并行、统一整合。熟练美术 2–7 天/套常规服装。

### 2. 模块化：应对非布料材质

皮革/盔甲/外骨骼/紧身衣超出 MD 范围，但硬表面较简单，细节可在贴图/shader 做。利用素材库把服装拆成头盔/肩甲/胸甲/腿甲建库，从类似素材改比从0做快。复杂服装按工序拆分：硬表面走模块化、布料走服装设计 → 每工序可控可溯源、及时改，不用整套推翻。

## 二、渲染环节

美术资源品质决定画面下限，shader/光照/后处理决定上限；下限没管好，上限就卡在下限。

### 1. 材质规划

- 服装常用材质：布料/丝绸/塑料/皮革/金属/宝石——做好材质模板按类型指定，免重复调参。
- 同材质透明/不透明要区分；相似材质可合并。
- 核心：贴图尽量与材质类型对应——同材质贴图画一张；切忌同材质用四五张、或布料金属画一起。逻辑：贴图↔材质↔mesh 分割一一对应。

### 2. shader 表现细节与质感

- UE/Unity 自带布料 shader 够用但有限制（UE 不兼容各向异性、多数不支持移动端）。现实布料兼具菲涅尔/次表面/各向异性/薄膜干涉，全写进一个 shader 会臃肿 → 用拟合思路在 base color 通道处理（散射、丝绸高光变色、镭射、各向异性），也可加到 roughness/specular。
- 材质按功能分三层（把 SP 部分功能搬进引擎）：结构层（版型/衣褶/缝线，与资源绑定、不可复用）/ 细节层（面料纹理，可用统一材质库）/ 环境层（脏旧、磨损、湿润）。不同质感用 mask 混合，混越多越好、整体越可控 → 小消耗表现毫米级细节。

## 三、绑定与动画

布料运动3种+顶点动画辅助：骨骼动画/骨骼物理（省性能，移动端）/实时布料模拟（效果好，PC主机，难在防穿模和自然褶皱，纯算法风险大）。  
解决思路从 pipeline 入手：

1. 先靠优秀绑定在不依赖碰撞下解决穿模。
2. 骨骼/顶点动画做初步运动：离线解算把关节运动的布料状态存成 pose 动画，播放时读取（游戏动画固定可直接全离线解算）。
3. MD 在衣服做完同时解算布料运动。SSDR 把离线顶点动画转骨骼动画，或 VAT 驱动；可烘皱褶法线图用 pose 曲线 0-1 驱动。
4. 玩家输入不固定时用骨骼物理衔接 pose 过渡，离线与实时间调参取平衡。
5. 最后叠加实时布料模拟修细节和小穿模（绘逆止距离/半径权重控制方向、动画驱动权重调比重）——顶级3A服装主要流程。

## 对我（前端/数字人/3D）的可迁移点

- 数字人/VRM 换装与布料动画：「离线解算+骨骼物理过渡+实时模拟兜底」是性能与效果平衡的标准答案；移动端优先骨骼动画，PC再上实时模拟。
- 管线思维可泛化：任何"量大+质稳"的资源生产，核心是把品质下限交给流程和工具（自动化/模板/规范），把人的判断力留给上限。
- 材质三层（结构/细节/环境）+mask 混合对 Three.js 自定义 shader 做质感有直接参考。
- 量化意识：2–7 天/套——好管线要让产出可预期、可排期。

## 带问题留给自己

- 我做的3D/数字人资源里，哪些环节还在"人工硬雕"、其实可程序化或物理解算替代？
- 给自己的项目定资源规范，哪几项"最早定、否则后面全乱"（拓扑/UV/贴图↔材质对应）？`,feishuUrl:"https://my.feishu.cn/docx/IV0wdJkgIofbcTx7Du3c1chsnBQ"},{id:"fs-FbXMdQfG4odREyxFR6KcUHWhnwd",category:"tech",title:"数字孪生开源方案与技术栈调研（2026）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:'来源：博客园《数字孪生系统 B/S 架构全栈技术方案》(2026-01-18)、OSGeo 中文分会、微信《Web 端三维渲染引擎全景解析 2026》、漂视《数字孪生平台选型指南》、gisyxs 等，多源交叉验证。 由"…',body:`来源：博客园《数字孪生系统 B/S 架构全栈技术方案》(2026-01-18)、OSGeo 中文分会、微信《Web 端三维渲染引擎全景解析 2026》、漂视《数字孪生平台选型指南》、gisyxs 等，多源交叉验证。

由"图观引擎"软文触发的深挖，聚焦补缺口：全局技术选型、数据驱动架构、后端中台。

## 一句话

数字孪生本质是"物理实体数据 → 采集 → 数据中台 → 3D 虚拟模型实时映射"的闭环，核心是**数据驱动**（WebSocket 实时数据刷新模型状态），不是"3D 建模"。渲染层（Cesium/Three.js）只解决"看得见"，平台层（数据接入/交互编排/业务）才是最耗时最难的部分。

## 一、核心认知：数字孪生 ≠ 3D 可视化

- 本质闭环：物理实体 → 数据采集 → 数据中台 → 3D 模型实时映射 + 交互反馈。
- 核心是数据驱动：PLC 转速→模型同步旋转；温度超标→模型变红；阀门信号→模型开合。静态展示是"展示型孪生"（好看但不能用，常见坑）。
- 区分两层：渲染层（Cesium/Three.js）解决"看得见"；平台层（数据接入/交互编排/孪生体编辑器/UI/行业适配）最耗时——零代码平台卖的就是这层。
- 关键指标：有无"孪生体编辑器"决定交付效率——没有则改交互要改代码→编译→发布；有则界面拖拽配置。

## 二、B/S 架构五层

| 层 | 职责 |
|-|-|
| 表现层（浏览器） | 3D 渲染、交互、大屏、模型操控 |
| 服务层（后端） | 业务逻辑、实时数据接入/清洗/转发、协议解析、权限、持久化 |
| 数据层 | 时序库（核心）、关系库、缓存、消息队列 |
| 接入层 | 工业物联网协议中间件，对接设备/传感器/PLC——让孪生"活起来"的核心 |
| 建模层 | 建模、轻量化、格式转换——孪生的"骨架" |

核心原则：前后端分离，通过 **WebSocket 双向实时通信**（唯一核心通信方式，无轮询、比 HTTP 高效百倍）。

## 三、渲染引擎选型（2026：没有最好，只有最对）

| 引擎 | 强项 | 短板 | 适合 |
|-|-|-|-|
| CesiumJS | 3D Tiles/地形/影像/GIS，全球级，开源 | 非通用 3D，体量大；纯代码无零代码/编辑器 | 城市规划、园区、矿山、水利、航空航天 |
| Three.js | 生态最大、教程最多、渲染自由度高、开源 | 无内置坐标系/瓦片/地形，GIS 要自己搭 | 工业产线、车间设备、机柜、小型园区、产品展示 |
| Babylon.js（微软） | 底层优化强，率先完整适配 WebGPU | 中文资料少于 Three.js | 高性能、工业设备精细交互 |
| UE5 Pixel Streaming | 像素流送，Nanite+Lumen 影视级画质 | 本质是视频流，带宽高/延迟大/成本高 | 不差钱的大屏展示 |
| Unity WebGL | 复杂物理引擎与动画 | 打包体积/加载时间硬伤 | 复杂物理动画 |
| 混合架构 | Cesium 全球底座 + Three.js 局部精细 | 相机/坐标同步、渲染顺序复杂 | 既要全球 GIS 又要局部精细 |

3D Tiles 是 Cesium 处理 TB 级数据的关键（LOD 按视野动态加载）。

## 四、完整技术栈（纯开源，无授权风险）

- **建模**：Blender（首选，导出 glTF/glb，面数控制 10 万内）；FreeCAD（工业参数化）。Web 端唯一主流格式 = glTF 2.0/glb。轻量化：glTF-Pipeline（再压 50-70%）、Meshoptimizer。
- **前端**：Vue3+Vite（首选）或 React；引擎 Three.js/Cesium；辅助 ECharts（图表联动）、DataV（大屏）。前端核心不是做 3D 动画，是"数据驱动的实时可视化"。
- **后端**（原则：熟悉度 > 场景复杂度）：Python+FastAPI（工业天花板，原生 WebSocket，配 opcua-asyncio/paho-mqtt/pymodbus）；.NET 8（ASP.NET Core + SignalR 是 WebSocket 超级封装，自动重连/广播/分组）；Java（Spring Boot 3，超大型分布式备选）。工业协议：OPC UA（第一协议）、MQTT（物联网标配）、Modbus。
- **数据层**：时序库 InfluxDB 2.x / TimescaleDB（核心）、PostgreSQL、Redis。
- **中间件**：EMQX（MQTT 服务器，百万级并发）、Redis、Docker+Compose（一键部署，工业级标准）、Nginx、Grafana（监控面板）。

## 五、开源项目清单（跑通→读源码→二次开发）

- 入门：Three.js 官方示例、github.com/tiangolo/fastapi-websockets、Cesium 官方示例。
- 工业级：DigitalTwin-OPCUA-Threejs（Python 首选，FastAPI+OPC UA+MQTT+Three.js 对接真实 PLC）；AspNetCore-DigitalTwin（.NET 首选，.NET8+SignalR+Cesium）；ThingJS-Open（国产，封装 Three.js 的工业组态框架）；Cesium-WebGIS-DigitalTwin（城市/园区级）。
- 后端中台：github.com/emqx/emqx-python-sdk、github.com/dotnet/MQTTnet。

## 六、学习路线四阶段（6-8 月到商用级）

1. 筑基（1-2 月）：Blender 基础导 glb + Vue3/React + Three.js + WebSocket → 产出"静态模型+模拟数据实时刷新"最小闭环。
2. 攻坚（2-3 月）：轻量化 + Cesium/ECharts + 工业协议对接真实设备 + InfluxDB + EMQX → 产出工业级 demo（真实数据+存储+报警）。
3. 实战（2-3 月）：全栈整合 + 业务开发 + Docker Compose 部署 + Nginx → 产出完整商用级系统。
4. 进阶（长期）：微服务/边缘计算/3DTiles；数字孪生+AI（故障预测）、+GIS（智慧城市）、多端联动、对接 MES/ERP。

## 七、性能调优三板斧（实测 15fps→60fps）

1. GPU 层：浏览器用独显；Chrome 加 \`--use-angle=gl\` 强制 OpenGL（+10-20%）。
2. 引擎层：Cesium 开 \`requestRenderMode\` 按需渲染 + \`maximumRenderTimeChange: Infinity\`，静态场景 GPU 80%→接近 0。
3. 资源层：纹理压缩（KTX2/Basis）、LOD 自适应、渐进加载（精心优化可减 70% 负载）。  
四大卡顿根源：DrawCall 过多（合批）、纹理内存溢出（压缩+流式）、主线程阻塞（Worker）、GPU/CPU 同步等待（少 readPixels）。WebGPU 是新底座，Babylon.js 已完整适配，Cesium/Three.js 跟进中。

## 八、避坑指南

1. 核心是数据驱动不是建模：先打通"设备数据→模型实时映射"，别做"好看但不能用"的展示型孪生。
2. 技术选型用熟悉的栈，落地速度第一。
3. 开源优先，不买 SaaS。
4. 闭环思维：端到端每环都打通。
5. 痛点：海量实景模型加载慢/吃显卡；BIM/倾斜模型缺语义属性；重视觉轻业务；时序推演浏览器性能压力大。`,feishuUrl:"https://my.feishu.cn/docx/FbXMdQfG4odREyxFR6KcUHWhnwd"},{id:"fs-KGL0dREpLo2Mi6x8g0Jcpzu4nlh",category:"tech",title:"游戏美术生产管线（前三篇）· 摄影测量 / 纹理规范 / 细节质感",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 潘翔这套系列（共 4 篇）是一条主线：**用工业化管线把美术品质的下限交给流程与规范，上限交给 shader**——前三篇分别解决「高细节模型从哪来（摄影测量）→ 精度比例怎么统一（纹理规范）→ 细节与质感怎么规…",body:`## 一句话

潘翔这套系列（共 4 篇）是一条主线：**用工业化管线把美术品质的下限交给流程与规范，上限交给 shader**——前三篇分别解决「高细节模型从哪来（摄影测量）→ 精度比例怎么统一（纹理规范）→ 细节与质感怎么规模化（解耦式管线）」，第 4 篇（角色服装篇）是这套思路的具体落地。

## 文章信息

- 作者：潘翔（知乎「我乱写的」，哈视奇科技联合创始人），首发知乎、GameRes 转载
- 系列 4 篇：

  1. 摄影测量建模（2021-04-25）https://www.gameres.com/883388.html
  2. 材质与纹理规范·场景篇（2021-08-26）https://www.gameres.com/888548.html
  3. 细节与质感（2021-12-23）https://www.gameres.com/891995.html
  4. 角色服装篇（2022-09-08）——已有单独卡片 \`游戏美术生产管线-角色服装篇.md\`
- 第 4 篇原文：https://mp.weixin.qq.com/s/Xx1JzNTd-tgpleP8aD6JCQ


## 第一篇 · 摄影测量建模：高细节模型从哪来

**要解决的问题**：PBR 时代物体质感能靠参数还原了，剩下的瓶颈是「如何快速拿到高质量高细节模型」——手绘/次世代流程做高模要 0.3–3 个月，成本失控。

**答案**：照片建模（对着物体拍一圈 360° 照片，算法重建 3D 细节）。常用工具：Capturing Reality、Photoscan（Agisoft Metashape）、Autodesk 123D。

**关键操作规范**（决定成败的不是软件，是拍摄控制）：

- 设备像素越高越好，手机只能出大致轮廓、不能用于生产；
- 控制镜头：固定位置/焦距，避免变焦、抖动、景深；
- 控制环境：避免大量高光、阴影、透明/黑色物体；
- 控制时间：同一对象一套素材最好同时拍完；
- 控制对象状态：尽量静止。
- 终极方案是**相机矩阵**（50 台入门单反 + 定制架子 + 偏振滤镜，作者实测十几万自建比外包便宜），把镜头/角度/距离/时间全固定，得到稳定素材。

**后处理**：照片建模生成的是杂乱三角面 + 碎片化贴图，不能直接进产品，必须清理+拓扑。**Wrap 是拓扑神器**（节点化、可复用、批量处理，几分钟完成、比手拓快几百倍），配合 ZBrush。

**成果**：高质量模型周期从几个月缩到几天，且纹理/模型源于现实 → 大幅降低对制作人员水平的依赖。卡普空从《生化危机 7》打通后三年出 6 款；虚幻 MetaHuman 捏脸也基于这套。作者估算：汗毛级精度角色从 0 到进引擎调完 1–3 天（不含毛发）。


## 第二篇 · 材质与纹理规范：精度比例怎么统一

**要解决的问题**：3A 与国产资源用同样的外包人员、类似纹理，为什么 3A 明显更真实？——一句话：**同样显示尺度下，3A 画面信息量更合理丰富**。国产两大通病：

1. **贴图精度混乱**：角色缝线清晰、地面糊成一片，像两个游戏的素材拼一起；
2. **比例错误**：石板比人大、花瓶和人一样高、一片叶子比脑袋大，像巨人国里的侏儒。

**答案**：贴图规范 = 贴图应用规范 + 贴图绘制规范。国内熟悉后者（色彩空间/细节程度），缺的是前者（贴图数量规划、贴图↔材质对应、精度范围、重用度）。

**两个核心概念**（这是全篇最硬的干货）：

- **贴图像素比（texel density）：贴图像素 ↔ 现实尺寸的对应，例如「512×512 px = 现实 1 米」。定了这个，就能用常识判断 512 砖墙贴图该有几块砖。不靠感觉选贴图**，而是算：2 米墙用 1024 或 512 tiling 2 次；10 米墙用 5120（或 4096）或 tiling 10 次。
- **网格精度比**：决定多少尺寸以下用贴图、以上用模型做细节，保证场景网格精度一致（体积越大面数要对应增加），也影响 lightmap 烘焙。
- 精度等级：第三人称以**米**为单位，第一人称到**厘米**，过场动画到**毫米级**。

**操作纪律**：

- **严禁随意缩放模型尺寸**（2 米墙拉成 3 米 → 砖缝被放大、细节变糊、精度破坏）。
- UE 用 \`worldaligned\` 节点自动对齐贴图精度兜底，但仍应让美术理解规范、手动控 UV 缩放。
- 场景 shader 两条基本规则：①保证网格精度与贴图精度统一 ②在精度基础上加细节。
- **规范决定 shader 功能，shader 功能决定资源生产标准**——精度比决定贴图尺寸上限、tiling 次数、UV 分配方式，有了这些参数就能程序化生产且质量稳定。

**结论**：「如果游戏美术资源比例错误、精度混乱，再好的渲染也拯救不了画面。」


## 第三篇 · 细节与质感：怎么规模化

**细节的三个方面**：①物体微观表面（金属/皮革/木/布，不看外形就能辨材质）②环境对物体的影响（青苔、发霉、积灰）③时间对物体的影响（生锈、脱漆、磨损、腐蚀）。  
**质感**：PBR 引入后大部分现实材质有对应参数，调对即可。

**两层管线**：

- **渲染管线决定底层效果，美术生产管线**决定上层质量，结合才有高品质画面。
- shader 两种分类维度：**按材质类型**（丝绸/毛发/玻璃/金属/皮肤…还原质感，偏图形向 TA）+ **按资产用途**（地面/建筑/道具/角色/服装/特效…体现细节），两者是包含关系不是并列（石头建筑 vs 石头桌子做法完全不同）。

**三种资源生产手法（从粗放到极致工业化）**：

| 手法 | 做法 | 优 | 劣 |
|-|-|-|-|
| ①完全交给美术 | TA 给基础 shader，一模一套贴图（固有色/法线/粗糙度/金属度/AO），细节全靠画 | 简单、可控、升级就上扫描 | 材质不准、贴图分辨率/数量受显存限制、一个关卡几百张贴图爆炸、优化无从下手 |
| ②材质库+混合材质 | 建材质库+无缝纹理库，美术只标 mask/ID + 贴花 | 模型/贴图/材质解耦可并行、项目初期控总量、细节丰富 | 学习成本高、DCC 里看不到最终效果、多层混合增采样、移动端限制大（**当前业内主流**） |
| ③源头解耦 | 把细节/质感绑定在贴图与材质上，靠拆模型+UV 复用资源 | 优化方便、效果可控、品质与人员水平脱钩、适合量产 | 需美术总监极强把控、制作繁琐折磨美术、吃项目类型 |

**死亡空间（手法③极端范例）**：基本没有为特定模型做的独立贴图，所有模型/贴图随意组合。单关卡贴图最大 512、多数 256 甚至 128，整关贴图加起来**不超过 15M**（比手游还低，但它是主机/PC 游戏），lightmap 也手动创建避免冗余。「单看贴图你判断不出它属于哪个模型。」

**解耦带来的流程反转**：传统是「原画→模型→贴图→材质」，解耦后是「**贴图→材质→原画→模型**」——模型放到最后做，大幅减少资源修改的影响。

**练习建议**（作者给的）：拿虚幻 Quixel 的 AbandonedFactory 关卡练优化——不影响画面前提下把贴图压到 10 套以内（约 40 张）、贴图大小总和不超过 2 张 8192、shader 控制在 5 个左右。

**作者的方法论自觉**：「方向错了，微观上处理得再漂亮也无济于事」——这个系列刻意少讲具体效果实现，多从宏观讲生产管线的思路。


## 对我（前端 / 数字人 / 3D 方向）的可迁移点

- **精度比思维可泛化到任何 3D 项目**：做 Three.js 场景时先定「1 单位 = 多少米、每米多少像素」，再决定模型面数和贴图分辨率，别凭感觉；H5 场景尤其要控显存。
- **源头解耦 + 材质库**：数字人换装/场景搭建若量大，优先建可复用材质库和 mask 混合，而不是每个模型配独立贴图——这正是第 4 篇材质分三层（结构/细节/环境）的铺垫。
- **三层细节（微观/环境/时间）** 是给 3D 资产「加真实感」的检查清单：只做干净的模型会假，加青苔/积灰/磨损才生动。
- **规范 → shader → 生产标准** 这条链路，本质是「先定约束再执行」，和 AI 协作开发的「规格驱动」是同一个道理。

## 相关

- 第 4 篇（角色服装篇）：\`kb/游戏美术生产管线-角色服装篇.md\`
- 数字人 VRM 自制清单：\`kb/数字人-自制VRM角色清单(Blender).md\``,feishuUrl:"https://my.feishu.cn/docx/KGL0dREpLo2Mi6x8g0Jcpzu4nlh"},{id:"fs-NdVUdvNvdoAeZyxF5NsciB5endh",category:"tech",title:"前端动画/特效 42 篇 · 掘金收藏夹全整理",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916127510648651783 配套 Demo（前端动效实验室，37 个可运行效果 + 5 个资源卡片，已注册到网站），本地预览 127.0.0.1…",body:`> 来源：https://juejin.cn/collection/6916127510648651783  
> 配套 Demo（前端动效实验室，37 个可运行效果 + 5 个资源卡片，已注册到网站），本地预览 127.0.0.1:8901。  
> 每篇要点与代码归档 kb/掘金动效42篇 目录（42 个 md）。

## CSS 动画与特效（17 篇）

**1.** [**Vue3 生态再一次加强，网站开发无敌！**](https://juejin.cn/post/7554572856147984424)

> Vue3 生态再一次加强，网站开发无敌！；如果你正在做官网开发，还在辛苦的手动实现那些动画特效，那今天推荐的这个库，至少让你提前4小时开始摸鱼!

**2.** [**🤔听说这个动效可以玩一天？**](https://juejin.cn/post/7129788202335862791)

> 杭州的天儿是怎么个事儿啊这些天，热了一个夏天也就算了，上周天秋都立了，雨也下了，老话说的都是秋高气爽，怎么温度还上去了呢！！；这种天气的周末，在下也只能躺在床上吹着空调，然后赞叹一…

**8.** [**css掩人耳目式海浪动效🌊，这可能是最简单的实现方式了吧？**](https://juejin.cn/post/6844903909169823757)

> css掩人耳目式海浪动效🌊，这可能是最简单的实现方式了吧？；花里胡哨的canvas实现太过于繁琐，这就是本文存在的意义.

**9.** [**能解决 80% 需求的 10个 CSS动画库!**](https://juejin.cn/post/6859713431755784205)

> 能解决 80% 需求的 10个 CSS动画库!；网站地址:animista.net/

**10.** [**【今天你更博学了么】一个神奇的前端动画 API requestAnimationFrame** ](https://juejin.cn/post/6991297852462858277)

> 【今天你更博学了么】一个神奇的前端动画 API requestAnimationFrame；先上一个面试题：做前端少不了跟动画打交道，那么实现一个动画有哪些方式呢？

**11.** [**CSS 动画实现星球环绕效果**](https://juejin.cn/post/6987043290444988424)

> 大家好，我是97年的前端小鲜肉绿生，日常对接设计师“奇怪”的想法🤔；在做某 H5 活动页时，设计师山田出了一个行星环绕运动 🪐 的效果图 ，五颗球需要围绕倾斜的轨道进行旋转运动

**12.** [**3分钟实现充电水波特效 html+css**](https://juejin.cn/post/6967360136926986254)

> 3分钟实现充电水波特效 html+css；这个效果跟水波加载动画 html+css是异曲同工之妙的

**15.** [**使用Vue transition 实现点赞动画效果**](https://juejin.cn/post/6960915764765261837)

> 使用Vue transition 实现点赞动画效果；点赞时爱心缩小变大，变大时略微大一点再变正常

**19.** [**3D酷炫扭动卡片 html+css+js**](https://juejin.cn/post/6956775377708515341)

> 3D酷炫扭动卡片 html+css+js；1. 定义标签，.card是底层盒子，.card2是呈现卡片效果的盒子，然后里面就是一些图片和文字，字体图标的标签了

**20.** [**（html+css+js）一个简单小项目——3D卡片时钟**](https://juejin.cn/post/6955627754536566792)

> （html+css+js）一个简单小项目——3D卡片时钟；这个小项目用到了jquery，目的是为了一些书写的简便 先贴上整体的框架的代码

**29.** [**探索@property以及它在动画上的能力**](https://juejin.cn/post/6939423801721487391)

> 探索@property以及它在动画上的能力；翻译自：Exploring @property and its Animating Powers | CSS-Tricks

**31.** [**实现 3D 时间动画展示效果**](https://juejin.cn/post/6936811586736619551)

> ；

**32.** [**学习 animation属性 和 常用方式**](https://juejin.cn/post/6936533939876003877)

> 学习 animation属性 和 常用方式；并非所有属性都支持 animation

**36.** [**🌠一文带你看CSS过渡动画艺术，附带常见动效分享**](https://juejin.cn/post/6921498669816479758)

> 🌠一文带你看CSS过渡动画艺术，附带常见动效分享；作者：@wnagly19，本文已授权掘金开发者社区公众号独家使用，包括但不限于编辑、标注原创等权益

**37.** [**解构标志性的 Apple Watch Bubble UI**](https://juejin.cn/post/6919630087843217416)

> 解构标志性的 Apple Watch Bubble UI；当第一款 Apple Watch 在 2015 年推出的时候，我对 WatchOS 的主屏幕设计感到震惊

**38.** [**CSS 奇思妙想边框动画**](https://juejin.cn/post/6918921604160290830)

> 今天逛博客网站 -- shoptalkshow，看到这样一个界面，非常有意思：；觉得它的风格很独特，尤其是其中一些边框

**40.** [**Vue实现的水波球进度展示组件**](https://juejin.cn/post/6917881155040034824)

> 最近需要用到一个水波球效果的进度展示组件，查阅了一些资料后借鉴了他人的代码，最终完成了需求；主要是通过canvas实现，可以动态设置以下内容：

## Canvas 与粒子（7 篇）

**6.** [**使用前端技术实现静态图片局部流动效果 🌊**](https://juejin.cn/post/7127451058820874254)

> 使用前端技术实现静态图片局部流动效果 🌊；声明：本文已经授权【稀土掘金技术社区】公众号独家原创发布！

**13.** [**canvas文字粒子效果  3点饮茶，7点放工，美滋滋\\~**](https://juejin.cn/post/6965494591311233031)

> canvas文字粒子效果 3点饮茶，7点放工，美滋滋\\~；今天3点多在饮茶的时候，发现有好几天没水文章了，但是太难的玩意又不会啊，咋办，突然想起电脑里还有存着一个文字粒子特效，好家伙…

**18.** [**文字烟花特效，用JS代码示爱！程序员小姐姐用这个代码挽回了爱情\\~**](https://juejin.cn/post/6958998979023470628)

> 文字烟花特效，用JS代码示爱！程序员小姐姐用这个代码挽回了爱情\\~；之前我出了一个如何在网页里使用原生JS开发放烟花效果的教程

**24.** [**巧用 SVG 滤镜还能制作表情包？**](https://juejin.cn/post/6945633593020383268)

> 本文将介绍一些使用 SVG feTurbulence 滤镜实现的一些有趣、大胆的的动效；今天在群里面聊天，看到有人发这个表情包：

**25.** [**从表情包来学JS动画**](https://juejin.cn/post/6943393421130203149)

> 前两期介绍了，从表情包来学canvas、从英雄联盟来学pixi.js, 从canvas入门到canvas绘图库的使用；今天来补充一下之前没说到的动画部分,这次用一个手绘风的表情包来…

**33.** [**【🎨万物皆可动】详解Canvas路径动画**](https://juejin.cn/post/6924866572972457992)

> 【🎨万物皆可动】详解Canvas路径动画；作者：@ChanningHyl🙌，本文已授权掘金开发者社区公众号独家使用，包括但不限于编辑、标注原创等权益

**42.** [**Web 帧动画解决方案 - APNG原理与实现**](https://juejin.cn/post/6914846392808636429)

> Web 帧动画解决方案 - APNG原理与实现；Web 帧动画解决方案 - APNG原理与实现

## 游戏与互动（5 篇）

**3.** [**绝配！周杰伦bgm+阿瑟爱心代码 = 酷炫播放器**](https://juejin.cn/post/7165103268996055048)

> 绝配！周杰伦bgm+阿瑟爱心代码 = 酷炫播放器；最近电视剧《点燃我，温暖你》中的一个桥段，李峋写的爱心代码火了 ❤️‍🔥❤️‍🔥❤️‍🔥，类似的表白神器每年都会在特定的时间（这些…

**14.** [**JS-VUE-九宫格抽奖**](https://juejin.cn/post/6961339963799502885)

> 继之前两篇“老虎机抽奖”、“大转盘抽奖”，所以把九宫格也一并补全了，整体的实现方案不是很复杂，就是dom以及中奖的配置需要特别注意一下，好了话不多少，直接开始\\~；老规矩，先看下静态…

**16.** [**JS-VUE-大转盘抽奖**](https://juejin.cn/post/6961317142465609742)

> “营运三宝”（九宫格、大转盘、老虎机，当然此三宝当然是最基础的营销运营手段），本片文章聊聊大转盘，转盘的实现逻辑应该是营销方案较为简单的一种了；目前已写的是老虎机、大转盘，后续会把…

**34.** [**从0开始实现一个合成大西瓜**](https://juejin.cn/post/6923803717808422925)

> 本文同步在个人博客shymean.com上，欢迎关注；最近微博上曝出了很多瓜，"合成大西瓜"这个游戏也很火热，玩了一阵还挺有意思的

**35.** [**魔改和上线你的合成大西瓜，最全教程！**](https://juejin.cn/post/6923047027475644430)

> 魔改和上线你的合成大西瓜，最全教程！；本文是从 0 到 1 的教程，让小白也能够魔改和上线发布属于你的合成大西瓜！

## 动画库与方案（9 篇）

**4.** [**27 个前端动画库让你的交互更加炫酷**](https://juejin.cn/post/7069945906518294536)

> 27 个前端动画库让你的交互更加炫酷；很多时候我们在开发前端页面时都会做一些动画效果来提升用户体验度和页面美观度，所以今天就来给大家推荐几个好用的JavaScript动画库，希望对…

**7.** [**十大前端常用且不可错过的网页炫酷特效**](https://juejin.cn/post/7106018120036253710)

> 十大前端常用且不可错过的网页炫酷特效；文章推荐：【 玩转CSS之美 】 - 全网最全、最绚丽的按钮button样式（附源码预览图）

**21.** [**【得物技术】web端动效方案对比**](https://juejin.cn/post/6951699867475378213)

> 为了满足业务增长的需求，我们需要创意h5作为承载，增强app趣味、增加用户留存；而如果把创意h5归纳一下，会发现可以分为游戏类和主交互类，本篇文章会对主交互类创意H5的技术选型进行…

**22.** [**玩转娱乐化时代 | 淘系互动团队几年的技术沉淀+经验都在这！**](https://juejin.cn/post/6951701754690043917)

> 玩转娱乐化时代 | 淘系互动团队几年的技术沉淀+经验都在这！；12年加入阿里，曾先后参与和担任手淘无线基础架构工作、WEEX 前端框架工作

**26.** [**前端动画展示方案**](https://juejin.cn/post/6943779391813976078)

> 在开发过程中我们通常需要一些动画特效使页面变得更加精致，通常我们会使用css的animation、svg等来实现这些效果，但对于一些复杂的效果就不适合了；我们业务使用的uniapp…

**27.** [**用65行代码实现JavaScript动画序列播放**](https://juejin.cn/post/6943433312371212302)

> 用65行代码实现JavaScript动画序列播放；最近在给学生上课，上周六的第一堂课是关于 JavaScript 动画的内容，其中包括一些简单的动画，比如匀速或者匀加/减速的运动，…

**30.** [**从英雄联盟来学pixi.js**](https://juejin.cn/post/6937862827499749406)

> 首先回顾一下上期文章 从表情包来学canvas, 初步认识了canvas的基本用法，并且通过案例来实现了常见的2D图形类的写法；本期进步深入canvas，认识canvas的绘图库，…

**39.** [**【十天自制软渲染器】DAY 01：图形学学习建议与环境搭建**](https://juejin.cn/post/6917417051514470414)

> 【十天自制软渲染器】DAY 01：图形学学习建议与环境搭建；推荐直接阅读博客原文，更新更及时，阅读体验更佳

**41.** [**教你用PixiJs实现复杂动画**](https://juejin.cn/post/6917849020341682189)

> 此篇文章源于前段时间商业有个项目需求，要实现一个比较复杂的H5交互动画；那说到动画常用的技术方案无非是下面几种：`,feishuUrl:"https://my.feishu.cn/docx/NdVUdvNvdoAeZyxF5NsciB5endh"},{id:"fs-BO2bdAvV3oGnCZxjvEIcpwoonif",category:"tech",title:"掘金收藏夹① Three.js / Web3D 实战（28篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6967134845730291719 D 官网复刻、场景漫游、粒子动画、3D 工地/地球/汽车展厅等 Web3D 实战教程。 每篇要点与代码归档：`kb/…",body:`> 来源：https://juejin.cn/collection/6967134845730291719  
> 3D 官网复刻、场景漫游、粒子动画、3D 工地/地球/汽车展厅等 Web3D 实战教程。  
> 每篇要点与代码归档：\`kb/掘金6合集135篇/\`（本收藏夹各一个 md）。

**1.** [**复刻国外顶尖科技公司的机器人🤖🤖🤖 官网？！HeroSection 经典复刻 ! ! ! (Three.js)**](https://juejin.cn/post/7484922528239206415)

> 复刻国外顶尖科技公司的机器人🤖🤖🤖 官网？！HeroSection 经典复刻 ! ! ! (Three.js)；欢迎阅读本篇文章！在深入探讨 Three.js 和 Shader (GLSL) 的进阶内…（含 12 段代码）

**2.** [**当3D走进义乌购（Vue3+Pinia+Koa+Three.js 全栈项目）**](https://juejin.cn/post/7251101434023624760)

> 当3D走进义乌购（Vue3+Pinia+Koa+Three.js 全栈项目）；前几天一个朋友去义乌旅游，带回来很多小商品，就是一整个物美价廉，但是为什么线下购物和网购有的时候差别这么大（网购经常要退换…（含 5 段代码）

**3.** [**如何使用 react 和 three.js 在网站渲染自己的3D模型**](https://juejin.cn/post/7073065656580571173)

> 如何使用 react 和 three.js 在网站渲染自己的3D模型；哈喽，大家好，我是小马，今天翻译一篇文章 《How to Use Three.js And React to Render a 3…（含 8 段代码）

**4.** [**threejs双人称场景漫游**](https://juejin.cn/post/7081515282706989086)

> 一起养成写作习惯！这是我参与「掘金日新计划 · 4 月更文挑战」的第1天，点击查看活动详情；最近太忙了，断更了一段时间，最近一直忙碌于多个项目组（含 12 段代码）

**5.** [**Three.js 打造缤纷夏日3D梦中情岛 🌊**](https://juejin.cn/post/7102215670477094925)

> Three.js 打造缤纷夏日3D梦中情岛 🌊；我正在参加「初夏创意投稿大赛」详情请看：初夏创意投稿大赛（含 12 段代码）

**6.** [**Web3D智慧数字三维工地 HTML5+Threejs实战开发**](https://juejin.cn/post/7000656147094962212)

> Web3D智慧数字三维工地 HTML5+Threejs实战开发；智慧数字工地监管平台的建设,解决施工现场事故多发,扬尘噪声污染大,重点部位生产操作过程不规范、隐患未及时消除,人员、精力有限,无法全方位…（含 3 段代码）

**7.** [**蚂蚁互动图形引擎 Oasis Engine v0.8 发布**](https://juejin.cn/post/7127583833410502687)

> 蚂蚁互动图形引擎 Oasis Engine v0.8 发布；历经数月，蚂蚁互动图形引擎 Oasis Engine v0.8 正式发布，本次里程碑除了原本的 Engine 仓库外，为了 Oasis 生态…

**8.** [**Three.js 的 3D 粒子动画：群星送福，春节快乐**](https://juejin.cn/post/7053759220188971044)

> Three.js 的 3D 粒子动画：群星送福，春节快乐；PK创意闹新春，我正在参加「春节创意投稿大赛」，详情请看：春节创意投稿大赛（含 12 段代码）

**9.** [**超简单的Three.js 卡车跑跑demo**](https://juejin.cn/post/7018469829841518605)

> 超简单的Three.js 卡车跑跑demo；废话开篇：对于three.js的了解处于入门还未见门阶段，光看three.js [www.webgl3d.cn/threejs/exa](http://www.webgl3d.cn/threejs/exa)… 官网不如试着写下简单…（含 11 段代码）

**10.** [**Three.js实现穿越云层动效**](https://juejin.cn/post/6997212869469143054)

> 上文说到，我对《你的性格主导色》活动中最感兴趣的部分就是通过 Three.js 实现穿越云层动效了，据作者说每朵云出现的位置都是随机的，效果很好，下图是我实现的版本；首先说下实现穿越云层动效的基本思路…（含 12 段代码）

**11.** [**threejs+vue3实现烟花效果**](https://juejin.cn/post/7073058949406621727)

> threejs+vue3实现烟花效果；今年过年由于疫情又没回家，就抽空看了看WebGL编程指南和Three.js开发指南，为了练手，就简单实现了一下冬奥开幕式上的迎客松烟花效果，纯小白，这篇文章主要是…（含 8 段代码）

**12.** [**如何在 ThreeJS 中实现辉光效果**](https://juejin.cn/post/7069735579470004238)

> 如何在 ThreeJS 中实现辉光效果；它其实是一种作用于特定区域的外发光效果（含 12 段代码）

**13.** [**我是如何用 Three.js 在三维世界建房子的（详细教程）**](https://juejin.cn/post/7038824515404562463)

> 我是如何用 Three.js 在三维世界建房子的（详细教程）；这两天用 Three.js 画了一个 3D 的房子，放了一个床进去，可以用鼠标和键盘控制移动，有种 3D 游戏的即视感（含 12 段代码）

**14.** [**Three.js - 可视化地图下钻功能（二十二）**](https://juejin.cn/post/7065289935099527198)

> Three.js - 可视化地图下钻功能（二十二）；「这是我参与2022首次更文挑战的第22天，活动详情查看：2022首次更文挑战」（含 5 段代码）

**15.** [**使用Three.js实现炫酷的赛博朋克风格3D数字地球大屏 🌐**](https://juejin.cn/post/7124116814937718797)

> 使用Three.js实现炫酷的赛博朋克风格3D数字地球大屏 🌐；我正在参加「创意开发 投稿大赛」详情请看：掘金创意开发大赛来了！（含 12 段代码）

**16.** [**threejs太阳光与阴影**](https://juejin.cn/post/7082650640756768804)

> 一起养成写作习惯！这是我参与「掘金日新计划 · 4 月更文挑战」的第3天，点击查看活动详情；这篇文章实现智慧城市中模拟太阳光随时间变化产生对应场景效果（含 12 段代码）

**17.** [**【vue-cesium】在vue上使用cesium开发三维地图（十二）加载三维数据**](https://juejin.cn/post/7032304659595280420)

> 【vue-cesium】在vue上使用cesium开发三维地图（十二）加载三维数据；这是我参与11月更文挑战的第19天，活动详情查看：2021最后一次更文挑战」（含 4 段代码）

**18.** [**用 Three.js 写了一个涵盖了大部分基础3D功能的综合场景**](https://juejin.cn/post/7016920595623313416)

> 用 Three.js 写了一个涵盖了大部分基础3D功能的综合场景；22年1月23日更新：由于知识产权问题，源码在个人GitHub永久下架，代码片段在文章还是有很多的（含 12 段代码）

**19.** [**threejs粒子系统**](https://juejin.cn/post/7083399044608819214)

> 一起养成写作习惯！这是我参与「掘金日新计划 · 4 月更文挑战」的第4天，点击查看活动详情；本文列举一些常见的场景如：雪天、雨天、萤火虫、星空、烟雾、爆炸、火焰、多云、雾霾（含 12 段代码）

**20.** [**WebGL入门(三)：使用VUE3编写WebGL程序**](https://juejin.cn/post/6992023855384494116)

> WebGL入门(三)：使用VUE3编写WebGL程序；编程的学习，最重要的就是动手干！而开始动手前，首先得搭建好一个框架，所以今天给大家分享一下如何使用VUE3搭建一个WebGL项目（含 12 段代码）

**21.** [**从零设计可视化大屏搭建引擎**](https://juejin.cn/post/6981257575425654792)

> 相关文章: 从零开发一款可视化大屏制作平台；注: ⚠️本文为掘金社区首发签约文章，未获授权禁止转载（含 5 段代码）

**22.** [**带你入门three.js——从0到1实现一个3d可视化地图**](https://juejin.cn/post/6980983551399788580)

> 带你入门three.js——从0到1实现一个3d可视化地图；本文已参与好文召集令活动，点击查看： 后端、大前端双赛道投稿，2万元奖池等你挑战！（含 12 段代码）

**23.** [**用 three.js 画个炫彩液晶球**](https://juejin.cn/post/6967162668595544095)

> 用 three.js 画个炫彩液晶球；大家好，这里是 CSS 魔法使——alphardex（含 7 段代码）

**24.** [**基于 HTML5 WebGL 的计量站三维可视化监控系统 Web 组态工控应用**](https://juejin.cn/post/6844903829452881934)

> 基于 HTML5 WebGL 的计量站三维可视化监控系统 Web 组态工控应用；得益于 HTML5 WebGL 技术的成熟，从技术上对工控管理的可视化，数据可视化变得简单易行！完成对工控设备的管理效率…（含 9 段代码）

**25.** [**基于 HTML5 WebGL 的智慧城市**](https://juejin.cn/post/6844904069492899853)

> 基于 HTML5 WebGL 的智慧城市；国务院在今年12月印发了《长江三角洲区域一体化发展规划纲要》(下文简称《纲要》)，并发出通知，要求各地区各部门结合实际认真贯彻落实（含 2 段代码）

**26.** [**基于 HTML5 WebGL 的 水泥工厂可视化系统**](https://juejin.cn/post/6844904122404044814)

> 基于 HTML5 WebGL 的 水泥工厂可视化系统；如今的制造行业，基于数据进行生产策略制定与管理已经成为一种趋势，特别是 工业4.0 的浪潮下，数据战略已经成为很多制造企业的优先战略，而数据可视化…（含 7 段代码）

**27.** [**基于 HTML5 WebGL 的地铁站 3D 可视化系统**](https://juejin.cn/post/6844903778395619341)

> 基于 HTML5 WebGL 的地铁站 3D 可视化系统；原文链接： [www.cnblogs.com](http://www.cnblogs.com)（含 7 段代码）

**28.** [**基于 HTML5 WebGL 智能城市的模拟运行**](https://juejin.cn/post/6844903824679763981)

> 基于 HTML5 WebGL 智能城市的模拟运行；也称为网络城市、数字化城市、信息城市（含 11 段代码）`,feishuUrl:"https://my.feishu.cn/docx/BO2bdAvV3oGnCZxjvEIcpwoonif"},{id:"fs-AgMSdwyzro5rIqxW27jc3ennnLh",category:"tech",title:"掘金收藏夹② Three.js 进阶 · 酷炫3D页面（12篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6946528710761644062 光影、tween 场景动画、火焰 logo、3D 地图、裸眼 3D、汽车展厅等进阶页面效果。 每篇要点与代码归档：`…",body:`> 来源：https://juejin.cn/collection/6946528710761644062  
> 光影、tween 场景动画、火焰 logo、3D 地图、裸眼 3D、汽车展厅等进阶页面效果。  
> 每篇要点与代码归档：\`kb/掘金6合集135篇/\`（本收藏夹各一个 md）。

**29.** [**Three.js 进阶之旅：模型光源结合生成明暗变化的创意页面-光与影之诗 💡**](https://juejin.cn/post/7148969678642102286)

> Three.js 进阶之旅：模型光源结合生成明暗变化的创意页面-光与影之诗 💡；本文为稀土掘金技术社区首发签约文章，14天内禁止转载，14天后未获授权禁止转载，侵权必究！（含 12 段代码）

**30.** [**threejs+tweenjs实现3d场景动画**](https://juejin.cn/post/7028780379649605646)

> threejs+tweenjs实现3d场景动画；随着前端越来越卷，对前端的要求也越来越高，从视觉效果上不断的迈向3d（含 12 段代码）

**31.** [**用Three.js打造酷炫3D个人网站（含源码）**](https://juejin.cn/post/6985033373857579045)

> 用Three.js打造酷炫3D个人网站（含源码）；原文地址： dev.to/mrryanfloyd…（含 4 段代码）

**32.** [**Three.js 火焰效果实现艾尔登法环动态logo 🔥**](https://juejin.cn/post/7077726955528781832)

> Three.js 火焰效果实现艾尔登法环动态logo 🔥；声明：本文涉及图文和模型素材仅用于个人学习、研究和欣赏，请勿二次修改、非法传播、转载、出版、商用、及进行其他获利行为（含 8 段代码）

**33.** [**可视化大屏-用threejs撸一个3d中国地图**](https://juejin.cn/post/7057808453263163422)

> 可视化大屏-用threejs撸一个3d中国地图；不想看繁琐步骤的，可以直接去github下载项目，如果可以顺便来个star哈哈（含 7 段代码）

**34.** [**ThreeJs 从基础入门到实现3D地球动画与智慧园区雏形**](https://juejin.cn/post/7037364678325960740)

> ThreeJs 从基础入门到实现3D地球动画与智慧园区雏形；本期论点: 元宇宙爆火的当下,webGL及其衍生技术将会如何参与共建元宇宙?（含 12 段代码）

**35.** [**教你用three.js写一个炫酷的3D登陆页面**](https://juejin.cn/post/7020571868314730532)

> 教你用three.js写一个炫酷的3D登陆页面；大家好，我是xx传媒严导（xx这两个字请自行脑补）（含 11 段代码）

**36.** [**Compose版来啦！仿自如裸眼3D效果**](https://juejin.cn/post/6992169168938205191)

> Compose版来啦！仿自如裸眼3D效果；这是我参与8月更文挑战的第2天，活动详情查看：8月更文挑战 前段时间自如团队实现了App裸眼3D效果，确实让人眼前一亮，昨天Nayuta 大佬使用Flutte…（含 9 段代码）

**37.** [**2天赚了4个W，手把手教你用Threejs搭建一个Web3D汽车展厅！**](https://juejin.cn/post/6981249521258856456)

> 2天赚了4个W，手把手教你用Threejs搭建一个Web3D汽车展厅！；本文已参与好文召集令活动，点击查看：后端、大前端双赛道投稿，2万元奖池等你挑战！（含 12 段代码）

**38.** [**三种前端实现VR全景看房的方案！说不定哪天就用得上！**](https://juejin.cn/post/6973865268426571784)

> 三种前端实现VR全景看房的方案！说不定哪天就用得上！；事情是这样的，前几天我接到一个外包工头的新需求，某品牌要搭建一个在线VR展厅，用户可以在手机上通过陀螺仪或者拖动来360度全景参观展厅，这个VR展…（含 12 段代码）

**39.** [**实现一个 360 全景的 N 种方案**](https://juejin.cn/post/6946448087225368589)

> 实现一个 360 全景的 N 种方案；本文来自飞猪前端同学@甜虾，教你用 N 种方式用 JS 实现一个 360 全景效果（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/AgMSdwyzro5rIqxW27jc3ennnLh"},{id:"fs-VFjodMSLgo26fIxqksJcnKhtnKg",category:"tech",title:"掘金收藏夹③ Vue3 / 前端工程化（51篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916103970712879117 支付接入、PDF 预览、hook 封装、Vite 原理、配置化、Vue3 API 与学习方法论。 每篇要点与代码归档…",body:`> 来源：https://juejin.cn/collection/6916103970712879117  
> 支付接入、PDF 预览、hook 封装、Vite 原理、配置化、Vue3 API 与学习方法论。  
> 每篇要点与代码归档：\`kb/掘金6合集135篇/\`（本收藏夹各一个 md）。

**40.** [**支付 | 个人接入支付宝当面付实现web和h5支付（超详细步骤）**](https://juejin.cn/post/6934007551755304974)

> 支付 | 个人接入支付宝当面付实现web和h5支付（超详细步骤）；很多人或者很多业务都有接入支付宝支付或者微信支付的需要，但接入第三方支付（alipay、wxpay）一直都需要公司资质或者个体户等，使…（含 5 段代码）

**41.** [**Vue3 实现 PDF 文件在线预览功能**](https://juejin.cn/post/7105933034771185701)

> Vue3 实现 PDF 文件在线预览功能；持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第9天，点击查看活动详情（含 12 段代码）

**42.** [**【vue3】写hook三天，治好了我的组件封装强迫症。**](https://juejin.cn/post/7181712900094951483)

> 【vue3】写hook三天，治好了我的组件封装强迫症；我以前很喜欢封装组件，什么东西不喜欢别人的，总喜欢自己搞搞，这让人很有成就感，虽然是重复造轮子，但是能从无聊的crud业务中暂时解脱出来，对我来说…（含 12 段代码）

**43.** [**Pug -- 全新的 Vue 高效书写体验**](https://juejin.cn/post/7176624421761712187)

> Pug -- 全新的 Vue 高效书写体验；在年初 Vue3 刚成为 Vue 的默认版本时，在文档中看到了 Pug 的影子，虽然好奇，由于时间关系一直没能专心去尝试一下 Pug 在 Vue3 🀄️的体…（含 12 段代码）

**44.** [**花了一天的时间，地板式扫盲了vue3所有API盲点**](https://juejin.cn/post/7164159759619194893)

> 花了一天的时间，地板式扫盲了vue3所有API盲点；最近在一次理解vue项目的代码时，发现周一对好多API都不太熟悉

**45.** [**50天用vue3完成了50个web项目，我学到了什么?**](https://juejin.cn/post/7144929568132956174)

> 50天用vue3完成了50个web项目，我学到了什么?；我报名参加金石计划一期挑战——瓜分10万奖池，这是我的第1篇文章，点击查看活动详情（含 12 段代码）

**46.** [**前端配置化真香～上班又多了60%的摸🐟时间**](https://juejin.cn/post/7098211898990002207)

> 前端配置化真香～上班又多了60%的摸🐟时间；这篇文章是笔者曾经全盘负责了接近一年的广告投放系统沉淀下来的开发经验，大家各取所需，不喜勿喷～当然啦，有自己的见解、更好的建议的大牛朋友们，我们评论区见～h…（含 12 段代码）

**47.** [**深入理解Vite核心原理**](https://juejin.cn/post/7064853960636989454)

> Vite是新一代的前端构建工具，在尤雨溪开发Vue3.0的时候诞生；类似于Webpack+ Webpack-dev-server（含 10 段代码）

**48.** [**焕然一新的 Vue 3 中文文档要来了🎉** ](https://juejin.cn/post/7077701166397653028)

> 焕然一新的 Vue 3 中文文档要来了🎉；中文版翻译：staging-cn.vuejs.org

**49.** [**[点线面Vue3]把模板语法这条线串起来！（包含学习新技术的方法论）**](https://juejin.cn/post/6996654736652894222)

> [点线面Vue3]把模板语法这条线串起来！（包含学习新技术的方法论）；这是我参与8月更文挑战的第2天，活动详情查看：8月更文挑战（含 12 段代码）

**50.** [**Vite介绍和原理解析**](https://juejin.cn/post/6992200385561624607)

> Vite号称是 下一代的前端开发和构建工具 ，目前已经在前端社区里逐步开始流行起来了；它采用了全新的unbundle思想来提升整体的前端开发体验（含 12 段代码）

**51.** [**Vue后台管理系统怎么做权限验证和动态路由，谁来做？**](https://juejin.cn/post/6981031288803164173)

> Vue后台管理系统怎么做权限验证和动态路由，谁来做？；我好久都没有写过文章了，主要是因为还是觉得自己才疏学浅，如果把自己学到的东西以那种类似教程的形式写出来的话，怕误认子弟（含 5 段代码）

**52.** [**Element UI源码中学到的技巧**](https://juejin.cn/post/6966491047257964575)

> Element UI源码中学到的技巧；本文是azuo和萌妹俩的第三篇创作，内容创作@azuo😄，精神支持@大头萌妹😂（含 10 段代码）

**53.** [**vue实战中的一些小魔法**](https://juejin.cn/post/6966495817792389150)

> 已经好久好久没写过文章，上一次写应该是年前吧，可能是变懒了吧；最近都在看坑找坑，闲下来有点无聊，就想水一遍文章，打发一下时间...（含 12 段代码）

**54.** [**Vue3发布半年我不学，摸鱼爽歪歪，哎\\~就是玩儿**](https://juejin.cn/post/6955129410705948702)

> Vue3发布半年我不学，摸鱼爽歪歪，哎\\~就是玩儿；是从 Vue 2 开始学基础还是直接学 Vue 3 ？尤雨溪给出的答案是：“直接学 Vue 3 就行了，基础概念是一模一样的

**55.** [**从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境**](https://juejin.cn/post/6951649464637636622)

> 从 0 开始手把手带你搭建一套规范的 Vue3.x 项目工程环境；本项目完整的代码托管在 GitHub 仓库，欢迎点亮小星星 🌟🌟（含 12 段代码）

**56.** [**list和tree的相互转换**](https://juejin.cn/post/6952442048708345863)

> 最近在写项目的时候，遇到了现有的树状组件不能满足目前的需求，需要对树形组件进行（TreeSelect）扩展；扩展的功能主要是能够通过输入搜索关键字对树形结构进行过滤，在扩展的过程中遇到了数据结构的相互…（含 9 段代码）

**57.** [**一文带你掌握Vue3新特性，再也不怕面试官啦\\~**](https://juejin.cn/post/6952671223989927943)

> 一文带你掌握Vue3新特性，再也不怕面试官啦\\~；记录一下笔记，给各位小伙伴们分享一些常用的Vue3新特性及哪些方法发生了变更（含 12 段代码）

**58.** [**最新的vue面试题大全含源码级回答（vue3篇）**](https://juejin.cn/post/6951262189168623623)

> 最新的vue面试题大全含源码级回答（vue3篇）；接上篇的面试文章，vue2面试题大全含源码级回答 ，这篇讲讲vue3常见的面试题及回答（含 12 段代码）

**59.** [**不要再用vue2的思维写vue3了**](https://juejin.cn/post/6946387745208172558)

> 升级Vue3后，让人最脑壳疼的应该是新的Compostion API语法，他的难点不是语法，而是他提供了全新的组织代码的思维方式；我刚从Vue2转到Vue3时，代码都严格的遵循Compostion A…（含 1 段代码）

**60.** [**Vue移动端项目中页面缓存实现**](https://juejin.cn/post/6944962862410367006)

> 在移动端中，页面跳转之间的缓存是必备的一个需求；从首页进入列表页，列表页需要刷新，而从详情页返回列表页，列表页则需要保持页面缓存（含 9 段代码）

**61.** [**一个透传技巧，治好了我的重度代码洁癖**](https://juejin.cn/post/6939684549450268680)

> 一个透传技巧，治好了我的重度代码洁癖；透传是一个通讯层面的概念，指的是在通讯中不管传输的业务内容如何，只负责将传输的内容由源地址传输到目的地址，而不对业务数据内容做任何改变（含 6 段代码）

**62.** [**Vue3丨进一步了解这 20 个响应式 API，写码如有神**](https://juejin.cn/post/6926776849066360846)

> Vue3丨进一步了解这 20 个响应式 API，写码如有神；在 Vue2 中，个人觉得对于数据的操作比较 “黑盒”（含 12 段代码）

**63.** [**【阮一峰推荐】学习 vue3 源码的利器**](https://juejin.cn/post/6925668019884523534)

> 【阮一峰推荐】学习 vue3 源码的利器；哈喽，大家好，今天给大家推荐一个学习 vue3 源码的最佳利器（含 1 段代码）

**64.** [**关于vue3+ts在实践中的一些分享**](https://juejin.cn/post/6922506462409261069)

> 关于vue3+ts在实践中的一些分享；我认为现在是写最这篇文章最好的时刻了（含 1 段代码）

**65.** [**Vue3源码（二）：从源码来看Vue3新特性**](https://juejin.cn/post/6921945008136257550)

> Vue3源码（二）：从源码来看Vue3新特性；作者: 徐จุ๊บ，未经授权禁止转载（含 12 段代码）

**66.** [ **Vue 3 和 Webpack 5 来了，手动搭建的知识该更新了**](https://juejin.cn/post/6921161482663100423)

> Vue 3 和 Webpack 5 来了，手动搭建的知识该更新了；想必绝大多数用 Vue 开发过项目的同学，或多或少会有以下两种情况：（含 12 段代码）

**67.** [**使用vue3重构拼图游戏,真香!**](https://juejin.cn/post/6920464793900384270)

> 花了两天时间，重构了项目中的一个拼图小游戏（又名数字华容道），为了方便使用抽离成了独立组件，效果如下：；原有拼图游戏是通过开源代码加以改造，使用的是 vue2（含 11 段代码）

**68.** [**vuex4都beta了，vuex5还会远吗？**](https://juejin.cn/post/6920118166224666632)

> vuex4都beta了，vuex5还会远吗？；随着vue3的出现，vue社区的其他核心包都进行了对于vue3的升级支持，例如vue-router、vuex等（含 12 段代码）

**69.** [**Vue3 的学习教程汇总、源码解释项目、支持的 UI 组件库、优质实战项目**](https://juejin.cn/post/6920070789614501896)

> Vue3 的学习教程汇总、源码解释项目、支持的 UI 组件库、优质实战项目；大家好，我是你们的 猫哥，一个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~

**70.** [**预加载 prerender-spa-plugin**](https://juejin.cn/post/6919724627363102734)

> 预加载 prerender-spa-plugin；这是在vue-cli4 + vue 3.0的基础下实现的预加载（含 3 段代码）

**71.** [**【Vue-Element-Admin 分析】- 04 图标组件是怎么工作的？**](https://juejin.cn/post/6919778722719465479)

> 【Vue-Element-Admin 分析】- 04 图标组件是怎么工作的？；【Vue-Element-Admin 分析】- 01 Mock 是怎么实现的？（含 5 段代码）

**72.** [**速度与激情之 Vite 初体验**](https://juejin.cn/post/6919053614711308301)

> 梁晓莹，一只喜欢游泳&&读书的猪猪女孩；大家最近学习 Vue3 学废了吗？尤雨溪尤大大马不停蹄地又给大家送来了专门为 Vue3 打造的开发利器 — Vite（含 12 段代码）

**73.** [**看完这篇文章，Vue3一点也不难！**](https://juejin.cn/post/6919748637908008967)

> 感觉时间好快啊，也有一个月多没更文了；开启2021年之旅，这篇文章是2021年首发...希望读者掘友多多支持哈\\~（含 12 段代码）

**74.** [**React、Vue2、Vue3的三种Diff算法**](https://juejin.cn/post/6919376064833667080)

> React、Vue2、Vue3的三种Diff算法；本文章不讲解vDom实现，mount挂载，以及render函数（含 12 段代码）

**75.** [**从0到1去搭建一个适合自己公司的微前端架构**](https://juejin.cn/post/6918576380309602317)

> 从0到1去搭建一个适合自己公司的微前端架构；一、为什么要改造成走微前端的开发模式？（含 12 段代码）

**76.** [**从 Composition API 源码分析 getCurrentInstance() 为何返回 null**](https://juejin.cn/post/6918365587248775175)

> 从 Composition API 源码分析 getCurrentInstance() 为何返回 null；如果同学们已经开始使用 Composition API，那么我们可能都会遇到类似的问题，那就…（含 3 段代码）

**77.** [**Vue3丨TS丨7 个思路封装一个灵活的 Modal 对话框**](https://juejin.cn/post/6916362519279829005)

> Vue3丨TS丨7 个思路封装一个灵活的 Modal 对话框；一个灵活的，足够抽象的组件可以使我们提高编码效率，规范代码，统一 UI 风格...，在 Vue3 中，我们以常见的 Modal 对话框组件…（含 12 段代码）

**78.** [**[Vue官方教程笔记]- 尤雨溪手写mini-vue**](https://juejin.cn/post/6911897255087702030)

> [Vue官方教程笔记]- 尤雨溪手写mini-vue；上周发了 【Vue3官方教程】🎄万字笔记 | 同步导学视频 1050赞（含 12 段代码）

**79.** [**为什么 Vue3 选择了 CSS 变量**](https://juejin.cn/post/6916298446638940173)

> 为什么 Vue3 选择了 CSS 变量；为什么 Vue3 选择了 CSS 变量（含 12 段代码）

**80.** [**Vue 3 项目实战总结**](https://juejin.cn/post/6917907347452985352)

> 作为今年前端圈中最大的新闻之一，vue 3 的正式版的发布引起了几乎所有前端 er 的围观；步入 2021 年，我开始在项目中使用 vue 3 进行开发（含 9 段代码）

**81.** [**如何在 Vite 中使用 Element UI + Vue 3**](https://juejin.cn/post/6917875965079060493)

> 如何在 Vite 中使用 Element UI + Vue 3；在上篇文章《2021新年 Vue3.0 + Element UI 尝鲜小记》里，我们尝试使用了 Vue CLI 创建 Vue 3 + E…（含 4 段代码）

**82.** [**体验Vue3.0,　仿一个网易云音乐客户端**](https://juejin.cn/post/6917575631446704135)

> 体验Vue3.0,　仿一个网易云音乐客户端；体验Vue3.0,　仿一个网易云音乐客户端

**83.** [**使用Vue3的CompositionAPI来优化代码量**](https://juejin.cn/post/6917592199140458504)

> 使用Vue3的CompositionAPI来优化代码量；在我的开源项目中有一个组件是用来发送消息和展示消息的，这个组件的逻辑很复杂也是我整个项目的灵魂所在，单文件代码有1100多行（含 12 段代码）

**84.** [**【前端工程化基础 - CLI 篇】Vue CLI 是如何实现的**](https://juejin.cn/post/6916303253487484942)

> 【前端工程化基础 - CLI 篇】Vue CLI 是如何实现的；【前端工程化基础 - CLI 篇】系列文章，持续更新中：（含 12 段代码）

**85.** [**搭建自己的脚手架—快速生成前端工程**](https://juejin.cn/post/6844903607855235079)

> 我平时工作项目较多，所以我通过webpack搭建了自己的前端工程（x-build），主要是编译stylus、jade、es6，自适应解决方案，还有一些自己写的一些插件；做新的项目时，每次复制文件夹，然…（含 8 段代码）

**86.** [**基于Vue的前端架构，我做了这15点**](https://juejin.cn/post/6901466994478940168)

> 基于Vue的前端架构，我做了这15点；本篇文章针对于 vue2，目前正在基于 vue3 做一个开源的脚手架，如果有感兴趣的同学，可以来这里贡献代码（含 12 段代码）

**87.** [**做了一夜动画，就为让大家更好的理解Vue3的Composition Api**](https://juejin.cn/post/6890545920883032071)

> 做了一夜动画，就为让大家更好的理解Vue3的Composition Api；众所周知，Vue3.0带来了一个全新的特性——Composition API

**88.** [**Vue3.0全球发布会干货总结**](https://juejin.cn/post/6875236411349008398)

> 观看Vue3全球发布会的总结笔记，翻译水平有限大家海涵；先来一波我杨哥的视频普及一下 Vue3知识

**89.** [**可视化拖拽组件库一些技术要点原理分析**](https://juejin.cn/post/6908502083075325959)

> 可视化拖拽组件库一些技术要点原理分析；为了让本文更加容易理解，我将以上技术要点结合在一起写了一个可视化拖拽组件库 DEMO：（含 12 段代码）

**90.** [**【Vue3官方教程】🎄万字笔记 | 同步导学视频**](https://juejin.cn/post/6909247394904702984)

> 【Vue3官方教程】🎄万字笔记 | 同步导学视频；🔥原版视频 + 杨村长和然叔的总结分析视频（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/VFjodMSLgo26fIxqksJcnKhtnKg"},{id:"fs-JPwIdrENGoCi3zxsV82cHC3intd",category:"tech",title:"掘金收藏夹④ Web 游戏开发（7篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6953586509517701127 五子棋、3D 火车、Dice Crush、Canvas 小游戏、2048 等 Web 游戏实战。 每篇要点与代码归档…",body:`> 来源：https://juejin.cn/collection/6953586509517701127  
> 五子棋、3D 火车、Dice Crush、Canvas 小游戏、2048 等 Web 游戏实战。  
> 每篇要点与代码归档：\`kb/掘金6合集135篇/\`（本收藏夹各一个 md）。

**91.** [**公司内部技术分享，我写了一个五子棋**](https://juejin.cn/post/7275934458133528617)

> 经常和朋友玩「五子棋」微信小游戏双人对战，我就在想为什么不自己开发一个呢？正赶上公司这周的内部技术分享会排到我了，我就写了一个五子棋；在线体验地址 和 github源码 见文末（含 12 段代码）

**92.** [**码上开火车-Three.js 3D Web 游戏案例分享**](https://juejin.cn/post/7165586370814017549)

> 码上开火车-Three.js 3D Web 游戏案例分享；码上开火车是一款 3D 单机策略游戏（含 3 段代码）

**93.** [**我们用48h，合作创造了一款Web游戏：Dice Crush，参加国际赛事**](https://juejin.cn/post/7122345627307999263)

> 我们用48h，合作创造了一款Web游戏：Dice Crush，参加国际赛事；我正在参加「创意开发 投稿大赛」详情请看：掘金创意开发大赛来了！

**94.** [**为了让你们进阶Canvas，我花7小时写了3个有趣的小游戏！！！**](https://juejin.cn/post/6989003710030413838)

> 为了让你们进阶Canvas，我花7小时写了3个有趣的小游戏！！！；「本文已参与好文召集令活动，点击查看：后端、大前端双赛道投稿，2万元奖池等你挑战！」（含 12 段代码）

**95.** [**80行代码教你用Node+TypeScript写一个心灵预测魔术的终端应用**](https://juejin.cn/post/6961214445158662151)

> 80行代码教你用Node+TypeScript写一个心灵预测魔术的终端应用；中学有一段时间痴迷于各种魔术,课间给女同学变魔术炫技,放学就苦练魔术还有花式切牌,.后来,魔术在我的世界里沉沦了好一段时间,…（含 3 段代码）

**96.** [**【游戏系列】用js+html+css实现web端的2048小游戏**](https://juejin.cn/post/6956115296058867720)

> 【游戏系列】用js+html+css实现web端的2048小游戏；前几年2048小游戏风靡一时，很多人下载这个游戏玩，但是作为一个合格且没多少头发的程序员，不应该想一想，这个游戏否是可以自己实现呢？（含 6 段代码）

**97.** [**所有前端都要看的2D游戏化互动入门基础知识**](https://juejin.cn/post/6953511821420527630)

> 所有前端都要看的2D游戏化互动入门基础知识；现在越来越多的公司和APP开始使用游戏化的方式去做产品了，所谓游戏化，是指在非游戏环境中将游戏的思维和游戏的机制进行整合运用，以引导用户互动和使用的方法（含 6 段代码）`,feishuUrl:"https://my.feishu.cn/docx/JPwIdrENGoCi3zxsV82cHC3intd"},{id:"fs-HSSzduTmBoNnNtxH9wIcsPrKnMg",category:"tech",title:"掘金收藏夹⑤ 前端面试 · 大厂面经（19篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916102439045169159 JS/Vue 面试题、自检清单、阿里/网易/字节等大厂面经与详解。 每篇要点与代码归档：`kb/掘金6合集135篇/…",body:`> 来源：https://juejin.cn/collection/6916102439045169159  
> JS/Vue 面试题、自检清单、阿里/网易/字节等大厂面经与详解。  
> 每篇要点与代码归档：\`kb/掘金6合集135篇/\`（本收藏夹各一个 md）。

**98.** [**两年前端的2022：24岁、辗转三省、进入阿里**](https://juejin.cn/post/7177207701326774327)

> 两年前端的2022：24岁、辗转三省、进入阿里；「回顾2022，展望2023，我正在参与2022年终总结征文大赛活动」

**99.** [**那些高级/资深的前端是如何回答JavaScript面试题的 （一）**](https://juejin.cn/post/6971727286856843295)

> 那些高级/资深的前端是如何回答JavaScript面试题的 （一）；经验源自各大面市场，少部分别人面我，大部分我面别人（含 9 段代码）

**100.** [**网易前端面试（灵犀部门）**](https://juejin.cn/post/7087435520993099783)

> 更多面试记录，查看我的专栏--面试记录；灵犀部门从网上查到的资料业务主要是协同办公（含 3 段代码）

**101.** [**一个合格(优秀)的前端都应该阅读这些文章**](https://juejin.cn/post/6844903896637259784)

> 一个合格(优秀)的前端都应该阅读这些文章；原文地址：Nealyang/PersonalBlog

**102.** [**一名【合格】前端工程师的自检清单**](https://juejin.cn/post/6844903830887366670)

> 前端开发是一个非常特殊的行业，它的历史实际上不是很长，但是知识之繁杂，技术迭代速度之快是其他技术所不能比拟的；winter在他的《重学前端》课程中提到：

**103.** [**30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）**](https://juejin.cn/post/6844903918753808398)

> 30 道 Vue 面试题，内含详细讲解（涵盖入门到精通，自测 Vue 掌握程度）；本文以前端面试官的角度出发，对 Vue 框架中一些重要的特性、框架的原理以问题的形式进行整理汇总，意在帮助作者及读者自…（含 12 段代码）

**104.** [**字节的一个小问题 npm 和 yarn不一样吗？** ](https://juejin.cn/post/7060844948316225572)

> 字节的一个小问题 npm 和 yarn不一样吗？；对于这个问题,我突然被问到的时候,会有一点很不知所措的感觉（含 3 段代码）

**105.** [**腾讯二面：现在要你实现一个埋点监控SDK，你会怎么设计？**](https://juejin.cn/post/7085679511290773534)

> 腾讯二面：现在要你实现一个埋点监控SDK，你会怎么设计？；这是小伙伴上周被问到的一个综合性设计题，如果是没有用过埋点监控系统，或者没有深入了解，基本就凉凉（含 10 段代码）

**106.** [**字节跳动最爱问的智力题你会几道？**](https://juejin.cn/post/6991298043261911071)

> 在面试过程中，智力题的考察也经常出现，这种题的特点是如果你看过，那么很容易就能做出来，如果没加过那可能在面试过程中不太容易做出来，所以在面试过程中恰好问到看过的题也不要马上答出来，还是要假装思考一下，…

**107.** [**最新的前端大厂面经（详解答案）**](https://juejin.cn/post/7004638318843412493)

> 整理不易 如果觉得本文有帮助 记得点赞三连哦 十分感谢！；1 从输入一个 URL 地址到浏览器完成渲染的整个过程（含 12 段代码）

**108.** [**前端劝退之前端知识体系（前端面试体系）**](https://juejin.cn/post/6994657097220620319)

> 前端劝退之前端知识体系（前端面试体系）；虽然马上就要金九银十了，面试的人应该不少，虽然我也有在面，写文的目的主要是梳理下知识，能对复习有点帮助就行，本文主要针对前端知识体系相关，涉及的内容有：

**109.** [**1.6W字！梳理50道经典计算机网络面试题（收藏版）**](https://juejin.cn/post/6988794419910541348)

> 1.6W字！梳理50道经典计算机网络面试题（收藏版）；金九银十马上要到了，整理了50道计算机网络面试题，每一道都非常的经典，大厂也非常喜欢问（含 6 段代码）

**110.** [**最全的 Vue 面试题+详解答案**](https://juejin.cn/post/6961222829979697165)

> 整理不易 如果觉得本文有帮助 记得点赞三连哦 十分感谢！；MVC 全名是 Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写，一种…（含 12 段代码）

**111.** [**金三银四的前端社招面经**](https://juejin.cn/post/6939774328858738696)

> 目前工作快四年，年后投了一波简历，这里整理了一下新鲜出炉的前端面经，需要的可以自取；你们服务是怎么部署的？Node Agent 做了什么工作？

**112.** [**字节跳动最爱考的前端面试题：JavaScript 基础**](https://juejin.cn/post/6934500357091360781)

> 字节跳动最爱考的前端面试题：JavaScript 基础；注意：每道题前面出现的 (xx) 数字代表这道题出现的频次，此 JS 基础是基于 30+ 篇前端面经整理出的问题和对应的回答、参考链接等（含 12 段代码）

**113.** [**阿里面试官的”说一下从url输入到返回请求的过程“问的难度就是不一样！**](https://juejin.cn/post/6928677404332425223)

> 阿里面试官的”说一下从url输入到返回请求的过程“问的难度就是不一样！；年前准备换工作，总结了一波面试最频繁的面试问题跟大家交流（含 3 段代码）

**114.** [**vue2.x高阶问题，你能答多少**](https://juejin.cn/post/6921911974611664903)

> 有句老话说，在父母那里我们永远是孩子，同样在各位大佬这里，我永远是菜鸡🐣🐣🐣；种一棵树，最好的时机是十年前，其次是现在（含 6 段代码）

**115.** [**高级知识点（持续更新）**](https://juejin.cn/post/6917816624040902670)

> 基础知识点地址（持续更新）： juejin.cn/post/686307…；Loader本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果（含 12 段代码）

**116.** [**震惊！前端300基础面试题+答案、分类学习整理（良心制作）持续更新**](https://juejin.cn/post/6914831351271292936)

> 震惊！前端300基础面试题+答案、分类学习整理（良心制作）持续更新；注：花半个月时间，重学基础，学习完、整理完、总结归纳完，痛并快乐着（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/HSSzduTmBoNnNtxH9wIcsPrKnMg"},{id:"fs-WitLdX5oXoayBTxTT8VcgykwnDc",category:"tech",title:"掘金收藏夹⑥ JS 进阶 · 手写题 · 正则 · 小游戏（19篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916117925791432712 JS 单行代码、飞机大战、装饰器、正则、36 个手写题、录屏工具等。 每篇要点与代码归档：`kb/掘金6合集135篇…",body:`> 来源：https://juejin.cn/collection/6916117925791432712  
> JS 单行代码、飞机大战、装饰器、正则、36 个手写题、录屏工具等。  
> 每篇要点与代码归档：\`kb/掘金6合集135篇/\`（本收藏夹各一个 md）。

**117.** [**我写这10+个JavaScript单行代码，被组长夸代码写得优雅！**](https://juejin.cn/post/7145623660680708104)

> 我写这10+个JavaScript单行代码，被组长夸代码写得优雅！；我报名参加金石计划1期挑战——瓜分10万奖池，这是我的第2篇文章，点击查看活动详情（含 12 段代码）

**118.** [**用原生JS写一个飞机大战小游戏**](https://juejin.cn/post/7127553483594530846)

> 携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第1天，点击查看活动详情 >>；之前写的小游戏都是面向过程的编程思想写的 , 但是JS毕竟是一个基于对象的语言 , 于是我想用面向对…（含 6 段代码）

**119.** [**前端冷知识-装饰器**](https://juejin.cn/post/6965428382284644388)

> 装饰器这个名词，如果不是写angular、nest的其他前端同学应该都不怎么熟悉，简单来说，装饰器就是函数，提供了某种特定的功能，用于描述类、方法、属性、参数，为其添加更加强大的功能，同时与原有逻辑进…（含 9 段代码）

**120.** [**正则基础小结，一张图就够了**](https://juejin.cn/post/6946808906169450504)

> 查找特定字符，替换特定文本，数据有效性的验证，以及看框架源码等，或多或少都会用到正则表达式；文章能了解：如何创建正则，如何理解编写正则，以及常用方法（含 9 段代码）

**121.** [**死磕 36 个 JS 手写题（搞懂后，提升真的大）**](https://juejin.cn/post/6946022649768181774)

> 死磕 36 个 JS 手写题（搞懂后，提升真的大）；作为一个程序员，代码能力毋庸置疑是非常非常重要的，就像现在为什么大厂面试基本都问什么 API 怎么实现可见其重要性（含 12 段代码）

**122.** [**身份证号校验规则最全总结（保证干湿分离）**](https://juejin.cn/post/6925438445871431688)

> 身份证号校验规则最全总结（保证干湿分离）；前两天测试小姐姐突然找到我，说我的表单校验是不是有问题，为什么一个格式很标准的身份证号校验总是提示校验失败呢？能改一下校验吗,不能然每次都要使用她的真实身份证…（含 6 段代码）

**123.** [**进阶的正则表达式**](https://juejin.cn/post/6919787265489109005)

> “如果你有一个问题想到可以用正则来解决，那么你现在有两个问题了；正则表达式是用于匹配字符串中字符组合的模式（含 12 段代码）

**124.** [**基于websocket、rabbitmq、nest构建即时通讯(一)——单聊设计篇**](https://juejin.cn/post/6918659348109459464)

> 基于websocket、rabbitmq、nest构建即时通讯(一)——单聊设计篇；基于websocket和消息队列构建即时聊天系统（个人基于node的微服务的实践项目）（含 7 段代码）

**125.** [**这些 JS 中强大的操作符，总有几个你没听说过**](https://juejin.cn/post/6918902650964557838)

> 这些 JS 中强大的操作符，总有几个你没听说过；JS 里的操作符大家每天都在使用，还有一些 ES2020、ES2021 新加的实用操作符，这些共同构成了 JS 灵活的语法生态（含 12 段代码）

**126.** [**基于H5的录屏工具开发**](https://juejin.cn/post/6915287057795874824)

> WebRTC是谷歌于2011年开源的一个音视频处理引擎，可以实时的进行视频数据的采集，也就是说可以做直播，也可以做桌面录屏，桌面分享；首先在页面中创建一个video标签，用于展示录屏的内容，再创建四个…（含 8 段代码）

**127.** [**「多图预警」那些年，被blob虐过的程序猿觉醒了！**](https://juejin.cn/post/6916675943343849479)

> 「多图预警」那些年，被blob虐过的程序猿觉醒了！；本文以图文的方式深入浅出二进制的概念，前面的概念描述较为枯燥，但是非常重要！希望大家耐心往下看，后面有惊喜，定能让您虎躯一震\\~😉（含 12 段代码）

**128.** [**一个防止你多次调用接口的小轮子**](https://juejin.cn/post/6916424686926888968)

> 通过oneHandle可以创造出4中时效性的缓存；oneHandle(fn): 并发时效性（含 3 段代码）

**129.** [**必学必会-音频和视频 | 七日打卡**](https://juejin.cn/post/6918011549231775751)

> 哪吒人生信条：如果你所学的东西 处于喜欢 才会有强大的动力支撑；把你的前端拿捏得死死的，每天学习得爽爽的，微信搜索【程序员哆啦A梦】关注这个不一样的程序员，如果你所学的东西 处于喜欢 才会有强大的动力…（含 12 段代码）

**130.** [**浏览器的重绘与回流  |  七日打卡**](https://juejin.cn/post/6917820378211418119)

> 学习重绘和回流前，需要先了解浏览器的渲染原理；将 DOM 与 CSSOM 合并成一个渲染树

**131.** [**聊一聊，面试为什么大厂钟爱问源码，真的是（问）造火箭=>（做）拧螺丝？如何读源码？**](https://juejin.cn/post/6917059190548594696)

> 聊一聊，面试为什么大厂钟爱问源码，真的是（问）造火箭=>（做）拧螺丝？如何读源码？；最近身边不少玩的不错的同事跳槽，闲聊时候总会提到面试过程，提到最多的就是面试官问源码

**132.** [**玩转js正则表达式**](https://juejin.cn/post/6915261479784546318)

> 正则表达式是用于匹配字符串中字符组合的模式，即实现对字符串中的信息进行查找、替换和提取操作；下面是我对js中正则表达式的整理与总结（含 12 段代码）

**133.** [**前端高效开发必备的 js 库梳理**](https://juejin.cn/post/6898962197335490573)

> 之前有很多人问学好前端需要学习哪些 js 库, 主流框架应该学 vue 还是 react ? 针对这些问题, 笔者来说说自己的看法和学习总结.；首先我觉得在学习任何知识之前必须要有一个明确的学习目标,…

**134.** [**前端面试：H5 如何清除Input输入框多次输入的历史记录？**](https://juejin.cn/post/6844903825963221006)

> 前端面试：H5 如何清除Input输入框多次输入的历史记录？；如何清除Input输入框多次输入的历史记录？（含 4 段代码）

**135.** [**10个很棒的 JavaScript 字符串技巧**](https://juejin.cn/post/6913691919386312712)

> 10个很棒的 JavaScript 字符串技巧；作者：Kai 译者：前端小智 来源：dev（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/WitLdX5oXoayBTxTT8VcgykwnDc"},{id:"fs-Y1K1d2RTAo1kKexEI1jckbPxnCg",category:"tech",title:"掘金收藏夹·3D / Three.js（12篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6946528710761644062 Three.js 3D 页面实战：官网复刻、光影、tween 动画、粒子等（与上批 webgl-showcase 合…",body:`> 来源：https://juejin.cn/collection/6946528710761644062  
> Three.js 3D 页面实战：官网复刻、光影、tween 动画、粒子等（与上批 webgl-showcase 合集重复，仅归档）。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**1.** [**复刻国外顶尖科技公司的机器人🤖🤖🤖 官网？！HeroSection 经典复刻 ! ! ! (Three.js)**](https://juejin.cn/post/7484922528239206415)

> 复刻国外顶尖科技公司的机器人🤖🤖🤖 官网？！HeroSection 经典复刻 ! ! ! (Three.js)；欢迎阅读本篇文章！在深入探讨 Three.js 和 Shader (GLSL) 的进阶内…（含 12 段代码）

**2.** [**Three.js 进阶之旅：模型光源结合生成明暗变化的创意页面-光与影之诗 💡**](https://juejin.cn/post/7148969678642102286)

> Three.js 进阶之旅：模型光源结合生成明暗变化的创意页面-光与影之诗 💡；本文为稀土掘金技术社区首发签约文章，14天内禁止转载，14天后未获授权禁止转载，侵权必究！（含 12 段代码）

**3.** [**threejs+tweenjs实现3d场景动画**](https://juejin.cn/post/7028780379649605646)

> threejs+tweenjs实现3d场景动画；随着前端越来越卷，对前端的要求也越来越高，从视觉效果上不断的迈向3d（含 12 段代码）

**4.** [**用Three.js打造酷炫3D个人网站（含源码）**](https://juejin.cn/post/6985033373857579045)

> 用Three.js打造酷炫3D个人网站（含源码）；原文地址： dev.to/mrryanfloyd…（含 4 段代码）

**5.** [**Three.js 火焰效果实现艾尔登法环动态logo 🔥**](https://juejin.cn/post/7077726955528781832)

> Three.js 火焰效果实现艾尔登法环动态logo 🔥；声明：本文涉及图文和模型素材仅用于个人学习、研究和欣赏，请勿二次修改、非法传播、转载、出版、商用、及进行其他获利行为（含 8 段代码）

**6.** [**可视化大屏-用threejs撸一个3d中国地图**](https://juejin.cn/post/7057808453263163422)

> 可视化大屏-用threejs撸一个3d中国地图；不想看繁琐步骤的，可以直接去github下载项目，如果可以顺便来个star哈哈（含 7 段代码）

**7.** [**ThreeJs 从基础入门到实现3D地球动画与智慧园区雏形**](https://juejin.cn/post/7037364678325960740)

> ThreeJs 从基础入门到实现3D地球动画与智慧园区雏形；本期论点: 元宇宙爆火的当下,webGL及其衍生技术将会如何参与共建元宇宙?（含 12 段代码）

**8.** [**教你用three.js写一个炫酷的3D登陆页面**](https://juejin.cn/post/7020571868314730532)

> 教你用three.js写一个炫酷的3D登陆页面；大家好，我是xx传媒严导（xx这两个字请自行脑补）（含 11 段代码）

**9.** [**Compose版来啦！仿自如裸眼3D效果**](https://juejin.cn/post/6992169168938205191)

> Compose版来啦！仿自如裸眼3D效果；这是我参与8月更文挑战的第2天，活动详情查看：8月更文挑战 前段时间自如团队实现了App裸眼3D效果，确实让人眼前一亮，昨天Nayuta 大佬使用Flutte…（含 9 段代码）

**10.** [**2天赚了4个W，手把手教你用Threejs搭建一个Web3D汽车展厅！**](https://juejin.cn/post/6981249521258856456)

> 2天赚了4个W，手把手教你用Threejs搭建一个Web3D汽车展厅！；本文已参与好文召集令活动，点击查看：后端、大前端双赛道投稿，2万元奖池等你挑战！（含 12 段代码）

**11.** [**三种前端实现VR全景看房的方案！说不定哪天就用得上！**](https://juejin.cn/post/6973865268426571784)

> 三种前端实现VR全景看房的方案！说不定哪天就用得上！；事情是这样的，前几天我接到一个外包工头的新需求，某品牌要搭建一个在线VR展厅，用户可以在手机上通过陀螺仪或者拖动来360度全景参观展厅，这个VR展…（含 12 段代码）

**12.** [**实现一个 360 全景的 N 种方案**](https://juejin.cn/post/6946448087225368589)

> 实现一个 360 全景的 N 种方案；本文来自飞猪前端同学@甜虾，教你用 N 种方式用 JS 实现一个 360 全景效果（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/Y1K1d2RTAo1kKexEI1jckbPxnCg"},{id:"fs-RtOUd1tCZooy2IxXCj8cbGLznVh",category:"tech",title:"掘金收藏夹·业务（3篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/7330090454853369895 前端业务开发方法论：业务系统设计、烂代码治理、业务理解。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹…",body:`> 来源：https://juejin.cn/collection/7330090454853369895  
> 前端业务开发方法论：业务系统设计、烂代码治理、业务理解。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**13.** [**if 我是前端 Leader, 前端业务开发做不做设计？**](https://juejin.cn/post/7287142071357784119)

> if 我是前端 Leader, 前端业务开发做不做设计？；《if 我是前端 Leader 系列》已经好久没更新了，我这两三年都去哪了?（含 6 段代码）

**14.** [**梳理拯救烂怂代码？我是这么做的**](https://juejin.cn/post/7328250113791868980)

> 博客：blog.ktdaddy.com/；这几天的小猫心情还不错，修完了"幂等事件的bug"，填完了"缓存击穿的坑"，前两天组长交代给他的“整理一份系统现状报告”任务也算是有了思路,阴霾终于散去（含 9 段代码）

**15.** [**做完这五件事，还怕吃不透老业务系统？**](https://juejin.cn/post/7326268968959197211)

> 做完这五件事，还怕吃不透老业务系统？；接二连三地背锅让小猫的内心受到了前所未有的打击`,feishuUrl:"https://my.feishu.cn/docx/RtOUd1tCZooy2IxXCj8cbGLznVh"},{id:"fs-O96GdFOT4oZO1NxglA2cWSeJnRh",category:"tech",title:"掘金收藏夹·项目（6篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/7127189028541038628 前端项目实战：监控平台搭建、知识沉淀工具、PC 端界面欣赏。 每篇要点与代码归档：`kb/掘金lovelybo27收…",body:`> 来源：https://juejin.cn/collection/7127189028541038628  
> 前端项目实战：监控平台搭建、知识沉淀工具、PC 端界面欣赏。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**16.** [**用真心打造一个沉淀知识的工具，为学渣如我的道友们，提供助力**](https://juejin.cn/post/7161020844372656135)

> 用真心打造一个沉淀知识的工具，为学渣如我的道友们，提供助力；本文为稀土掘金技术社区首发签约文章，14天内禁止转载，14天后未获授权禁止转载，侵权必究！（含 3 段代码）

**17.** [**如何从0到1搭建前端监控平台**](https://juejin.cn/post/7172072612430872584)

> 常常会苦恼，平常做的项目很普通，没啥亮点；面试中也经常会被问到：做过哪些亮点项目吗？（含 12 段代码）

**18.** [**分享 11 张巨好看的PC端界面！！！**](https://juejin.cn/post/7140193310966022175)

> 分享 11 张巨好看的PC端界面！！！；今天给大家带来了11张我觉得不论从视觉效果还是页面布局的维度都特别nice的11个pc偏管理端的界面，希望大家可以在平时开发没有灵感时用来做参考

**19.** [**React版/Vue版都齐了，不一样的开源后台管理系统坐等你来开箱**](https://juejin.cn/post/7130440554516578317)

> React版/Vue版都齐了，不一样的开源后台管理系统坐等你来开箱；本项目主要基于Elux+Antd构建，包含React版本和Vue版本，旨在提供给大家一个简单基础、开箱即用的后台管理系统通用模版，主…（含 12 段代码）

**20.** [**Vue3 实现网页背景水印功能**](https://juejin.cn/post/7126734249561948174)

> 经常有一些公司和组织出于系统文件或信息安全保密的需要，需要在系统网页上增加带有个人标识（系统账号或个人信息）的水印，可以简单防止截图外传；首先我们来看这样一个水印功能的实现思路，通常是在我们原有的网页…（含 8 段代码）

**21.** [**高仿项目协作工具【Worktile】，从零带你一步步实现组织架构、网盘、消息、项目、审批等功能**](https://juejin.cn/post/7126682740505706509)

> 高仿项目协作工具【Worktile】，从零带你一步步实现组织架构、网盘、消息、项目、审批等功能；我正在参与掘金创作者训练营第5期，\\*\\*\\*\\*点击了解活动详情（含 4 段代码）`,feishuUrl:"https://my.feishu.cn/docx/O96GdFOT4oZO1NxglA2cWSeJnRh"},{id:"fs-PsFqdxNdIo8GXkxLAstcC5YMnCo",category:"tech",title:"掘金收藏夹·ES6（10篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6917900990465179661 ES6 深度：async/try-catch、Proxy/Reflect、Promise 模块解析。 每篇要点与代码…",body:`> 来源：https://juejin.cn/collection/6917900990465179661  
> ES6 深度：async/try-catch、Proxy/Reflect、Promise 模块解析。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**22.** [**如何给所有的async函数添加try/catch？**](https://juejin.cn/post/7155434131831128094)

> 如何给所有的async函数添加try/catch？；阿里三面的时候被问到了这个问题，当时思路虽然正确，可惜表述的不够清晰（含 12 段代码）

**23.** [**ES6的Proxy和Reflect,你学会了吗？**](https://juejin.cn/post/7126352717458440200)

> ES6的Proxy和Reflect,你学会了吗？；新技术的出现，都是为了解决以前代码设计的不足之处（含 12 段代码）

**24.** [**Promise 被玩出 48 种“花样”，深度解析10个常用模块**](https://juejin.cn/post/6999804617320038408)

> Promise 被玩出 48 种“花样”，深度解析10个常用模块；⚠️ 本文为掘金社区首发签约文章，未获授权禁止转载（含 12 段代码）

**25.** [**基础很好？总结了38个ES6-ES12的开发技巧，倒要看看你能拿几分？🐶**](https://juejin.cn/post/6995334897065787422)

> 基础很好？总结了38个ES6-ES12的开发技巧，倒要看看你能拿几分？🐶；大家好，首先表明一下，标题没有恶意哈哈（含 12 段代码）

**26.** [**30张图带你重温ES6（下）**](https://juejin.cn/post/6979037045440151583)

> 基础决定上层建筑！最近重温了ES6，我将知识点汇总整理成脑图，一来可以加深印象，二来方便以后查阅；上篇传送门：三天三夜，整理了30张高清思维导图 | 带你重温ES6（上）

**27.** [**深入理解Promise**](https://juejin.cn/post/6921593620680802311)

> ES6 异步编程的一种解决方案，比传统的方案（回调函数和事件）更加的合理和强大；好处 异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数（含 12 段代码）

**28.** [**这难道不是你期待的ES2021新特性吗？**](https://juejin.cn/post/6920508421200904200)

> 这难道不是你期待的ES2021新特性吗？；ES2020发布还没多久，但是更多的功能点已经安排上了，等待发布（含 12 段代码）

**29.** [**let关键字：ES6新增的var关键字加强版**](https://juejin.cn/post/6920131616149143560)

> let关键字：ES6新增的var关键字加强版；本文首发于个人网站：let关键字：ES6新增的var关键字加强版（含 12 段代码）

**30.** [**《看完就懂系列》答应我，看完就开始用Symbol好吗？**](https://juejin.cn/post/6918014088967061511)

> 《看完就懂系列》答应我，看完就开始用Symbol好吗？；这是大冰块2021年第8篇原创文章，和大冰块一起在前端领域努力吧！！！💪（含 8 段代码）

**31.** [**近一万字的ES6语法知识点补充**](https://juejin.cn/post/6844903775329583112)

> ECMAScript 6.0（简称ES6），作为下一代JavaScript的语言标准正式发布于2015 年 6 月，至今已经发布3年多了，但是因为蕴含的语法之广，完全消化需要一定的时间，这里我总结了部…（含 3 段代码）`,feishuUrl:"https://my.feishu.cn/docx/PsFqdxNdIo8GXkxLAstcC5YMnCo"},{id:"fs-QeqFdDNiYoRQZzxtmXLcL7Asn3R",category:"tech",title:"掘金收藏夹·大前端（14篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6917542516535328781 大前端体系：10万字知识体系、微前端框架、多媒体前端入门。 每篇要点与代码归档：`kb/掘金lovelybo27收藏…",body:`> 来源：https://juejin.cn/collection/6917542516535328781  
> 大前端体系：10万字知识体系、微前端框架、多媒体前端入门。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**32.** [**「历时8个月」10万字前端知识体系总结（工程化篇）🔥**](https://juejin.cn/post/7146976516692410376)

> 「历时8个月」10万字前端知识体系总结（工程化篇）🔥；本文是 10 万字前端知识体系总结 的第三篇（含 12 段代码）

**33.** [**从零到一实现企业级微前端框架，保姆级教学**](https://juejin.cn/post/7004661323124441102)

> 从零到一实现企业级微前端框架，保姆级教学；这篇文章笔者足足肝了一周多，多次斟酌修改内容，力求最大程度帮助读者造出一个微前端框架，搞懂原理（含 12 段代码）

**34.** [**多媒体前端技术入门指南**](https://juejin.cn/post/6981251413607186468)

> 随着B站、抖音、快手、淘宝直播等直播视频平台的快速崛起，前端衍生出了多媒体技术方向，各公司的传统前端团队里陆续出现了一支新军：Web多媒体团队；光看团队Title，这应该是一个拥有前端×多媒体交叉领域…

**35.** [**15 张前端高清知识地图，强烈建议收藏**](https://juejin.cn/post/6976157870014332935)

> 15 张前端高清知识地图，强烈建议收藏；这是我参与更文挑战的第二十天，活动详情查看:更文挑战

**36.** [**写给前端的跨平台方案、跨端引擎的本质**](https://juejin.cn/post/6966626823912308772)

> 写给前端的跨平台方案、跨端引擎的本质；近些年来，前端领域的跨端技术越来越多了：react native、weex、flutter、electron、kraken 等等

**37.** [**前端智能化在阿里云大数据研发平台中的实践**](https://juejin.cn/post/6951596501961277448)

> 前端智能化在阿里云大数据研发平台中的实践；淘系前端智能化团队-F(x) Team

**38.** [**手把手教你用 Github Actions 部署前端项目**](https://juejin.cn/post/6950799922178310152)

> 手把手教你用 Github Actions 部署前端项目；这是第 96 篇不掺水的原创，想获取更多原创好文，请搜索公众号关注我们吧\\~ 本文首发于政采云前端博客：手把手教你用 Github Action…（含 8 段代码）

**39.** [**从Three.js测试源码探索前端可视化项目的E2E测试方案**](https://juejin.cn/post/6950104058971553829)

> 从Three.js测试源码探索前端可视化项目的E2E测试方案；最近在工作中开发Canvas相关功能的工具库，需要写测试用例保证每次迭代不影响最终渲染效果（含 3 段代码）

**40.** [**2021前端学习路径书单—自我成长之路**](https://juejin.cn/post/6930419481835470861)

> 2021前端学习路径书单—自我成长之路；正式学习前端大概 3 年多了，接触前端大概 4 年了，很早就想整理这个书单了，因为常常会有朋友问，前端该如何学习，学习前端该看哪些书，我就讲讲我学习的道路中看的…

**41.** [**2021年前端会有什么新变化？**](https://juejin.cn/post/6920487374543831053)

> 阿里巴巴集团 @大淘宝技术，服务9亿用户，赋能各行业1000万商家，作为核心技术团队保障14次双十一购物狂欢节成功；2020年前端圈带来具有突破意义的内容或框架不多，也不会再有2013年到2017间日…（含 1 段代码）

**42.** [**带你看看JS的新趋势：「State of JS 2020」中文解读**](https://juejin.cn/post/6918920458465181710)

> 带你看看JS的新趋势：「State of JS 2020」中文解读；「State of JS 2020」数据来源：

**43.** [**代码规模飙升，前端如何走好工程化之路？**](https://juejin.cn/post/6917588945991630861)

> 代码规模飙升，前端如何走好工程化之路？；1995 年 Brendan Eich 发布了第一版网页脚本语言，奠定了今天前端开发的基础

**44.** [**Vue + qiankun 快速实现前端微服务**](https://juejin.cn/post/6917848537686507533)

> Vue + qiankun 快速实现前端微服务；本文介绍 Vue 项目如何实现前端微服务（含 8 段代码）

**45.** [**什么是前端工程化？**](https://juejin.cn/post/6917447582985748493)

> 虽然前端工程化的概念兴起还没几年的时间，但是对于“工程化”这个词并不是一个新鲜词了，在其他软件开发的领域很早就已经有了高度的工程化，例如Web服务端开发；只不过那个时候，前端工程师并没有工程化的意识，…`,feishuUrl:"https://my.feishu.cn/docx/QeqFdDNiYoRQZzxtmXLcL7Asn3R"},{id:"fs-VWgxdPFDLoH3NyxLRKsc5ybNnob",category:"tech",title:"掘金收藏夹·Node（24篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916102777903153160 Node 实战：千万级服务后端、脚手架、GIAC 大前端思考。 每篇要点与代码归档：`kb/掘金lovelybo27…",body:`> 来源：https://juejin.cn/collection/6916102777903153160  
> Node 实战：千万级服务后端、脚手架、GIAC 大前端思考。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**46.** [**怎么就敢用NodeJS写千万级别的服务后端**](https://juejin.cn/post/7125341011731185694)

> 怎么就敢用NodeJS写千万级别的服务后端；携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第1天，点击查看活动详情 >>（含 1 段代码）

**47.** [**2021 GIAC 大前端专场思考总结（下篇）**](https://juejin.cn/post/7112797447834828813)

> 2021 GIAC 大前端专场思考总结（下篇）；持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第 27 天，点击查看活动详情

**48.** [**yyds，这可能是你第一个自定义的脚手架**](https://juejin.cn/post/7122344818721685540)

> yyds，这可能是你第一个自定义的脚手架；本文为原创文章，引用请注明出处，欢迎大家收藏和分享💐💐（含 11 段代码）

**49.** [**学习egg.js，看这一篇就够了！**](https://juejin.cn/post/6995063516470198279)

> egg 是阿里出品的一款 node.js 后端 web 框架，基于 koa 封装，并做了一些约定；egg 有孕育的含义，因为 egg 的定位是企业级 web 基础框架，旨在帮助开发者孕育适合自己团队的…（含 12 段代码）

**50.** [**nodejs 如何实现控制台打印高亮代码**](https://juejin.cn/post/6960662893717094431)

> nodejs 如何实现控制台打印高亮代码；当代码运行报错时，我们会打印错误，错误中有堆栈信息，可以定位到对应的代码位置（含 4 段代码）

**51.** [**推荐 9 个 Node.js 学习、进阶、debugging 分析、实战 的重磅开源项目 👍**](https://juejin.cn/post/6961101653709684772)

> 推荐 9 个 Node.js 学习、进阶、debugging 分析、实战 的重磅开源项目 👍；大家好，我是你们的 猫哥，那个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~（含 3 段代码）

**52.** [**使用Nodejs内置加密模块实现对等加密与解密**](https://juejin.cn/post/6960133443946545189)

> 使用Nodejs内置加密模块实现对等加密与解密；哈希值计算通常是用来对数据完整性和正确性做一个校验目的使用，当我们需要确保接受的数据是跟发送的数据一毛一样的时候，就可以通过分别计算发送数据的哈希值和接…（含 8 段代码）

**53.** [**使用Node开发一个多人对战的射击游戏**](https://juejin.cn/post/6960096410305822751)

> 使用Node开发一个多人对战的射击游戏；这玩意还是很有意思的，无论是超级玛丽，还是魂斗罗，亦或者是王者荣耀以及阴阳师（含 12 段代码）

**54.** [**揭秘：如何考察前端的 Node.js 及工程能力**](https://juejin.cn/post/6959477438757896205)

> 揭秘：如何考察前端的 Node.js 及工程能力；前端早早聊大会，前端成长的新起点，与掘金联合举办（含 5 段代码）

**55.** [**Electron + Puppeteer + Robotjs 实现工作自动化**](https://juejin.cn/post/6957601771694850062)

> Electron + Puppeteer + Robotjs 实现工作自动化；当年在百度搜索团队的时候做的一个小工具，可以把一些日常工作自动化，确实解决了一些问题（含 5 段代码）

**56.** [**流媒体视频基础 MSE 入门 & FFmpeg 制作视频预览缩略图和 fmp4**](https://juejin.cn/post/6953777965838630926)

> 流媒体视频基础 MSE 入门 & FFmpeg 制作视频预览缩略图和 fmp4；这是弹幕播放器系列文章第二篇，上篇请查看 从零开发弹幕视频播放器1（含 12 段代码）

**57.** [**2021 年最值得使用的 Node.js 框架**](https://juejin.cn/post/6955402195311263751)

> 2021 年最值得使用的 Node.js 框架；AI Agent Developer @阿里巴巴

**58.** [**看了就会的 Node.js 常用三方工具包**](https://juejin.cn/post/6947856427247468551)

> 看了就会的 Node.js 常用三方工具包；之前一篇文章介绍了 Node.js 的三个模块的基础 API，面对文档时不那么抓瞎，基础 API 用习惯了也差不多找到感觉，之后想用啥就可以自己照着文档找就…（含 12 段代码）

**59.** [**前端猛男带你走进nodejs系列（一）**](https://juejin.cn/post/6946154957645021191)

> 前端猛男带你走进nodejs系列（一）；在前端技术发展之初，前端工程师只能使用html、css和javascript进行页面的交互开发，但是随着Nodejs的出现，打破了javascript只能在浏览…（含 12 段代码）

**60.** [**Libuv 之 - 只看这篇是不够的**](https://juejin.cn/post/6945702722645524517)

> Libuv 之 - 只看这篇是不够的；对 Node.js 的学习，无论如何都绕不开 Libuv（含 12 段代码）

**61.** [**nodejs服务端系统架构设计基本思想及常见场景解决方案**](https://juejin.cn/post/6940523830658105351)

> nodejs服务端系统架构设计基本思想及常见场景解决方案；本文旨在给前端同学在进行nodejs服务端项目的架构设计时提供一些基本思路及常见场景的解决方案

**62.** [**通过集群提高 Node.js 应用程序性能**](https://juejin.cn/post/6936755284685619213)

> 通过集群提高 Node.js 应用程序性能；原文地址：Improving Node.js Application Performance With Clustering（含 12 段代码）

**63.** [**工作效率upup，一起来实现一个Node.js-CLI开发工具吧**](https://juejin.cn/post/6922612857331056648)

> 工作效率upup，一起来实现一个Node.js-CLI开发工具吧；我们平时项目开发中，经常会有很多类似的代码文件，而我们在使用的时候也会经常的去复制粘贴（含 12 段代码）

**64.** [**Node.js之自动发送邮件 | 仅二十行代码即可**](https://juejin.cn/post/6922279418714914824)

> Node.js之自动发送邮件 | 仅二十行代码即可；因为最近自己建站需要添加友链，又不想每次去改静态文件，所以抽出来一个表单，准备给大家填写自己的信息然后提交到后台审核，但是我需要一个邮件来通知大家已…（含 12 段代码）

**65.** [**Node基础入门（一）**](https://juejin.cn/post/6922092040368947207)

> Node.js 诞生于2009年，Node.js采用C++语言编写而成，是 一个Javascript的运行环境；Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境 …（含 12 段代码）

**66.** [**浅谈nodejs中间层**](https://juejin.cn/post/6918260779472912392)

> nodejs的出现为前端行业带来了无限的可能性,让很多原来只负责客户端开发的同学也慢慢开始接触和使用服务器端技术.；虽然nodejs带来了很多的好处,但是它也存在自身的局限性.和那些传统老牌的编程语言…（含 5 段代码）

**67.** [**七日打卡-深入理解nodejs中的异步编程**](https://juejin.cn/post/6918204993149534215)

> 七日打卡-深入理解nodejs中的异步编程；因为javascript默认情况下是单线程的，这意味着代码不能创建新的线程来并行执行（含 12 段代码）

**68.** [**凹凸技术揭秘 · 基础服务体系 · 构筑服务端技术中枢**](https://juejin.cn/post/6917809253164482574)

> 凹凸技术揭秘 · 基础服务体系 · 构筑服务端技术中枢；凹凸实验室从最初的前端团队成长为如今的全端团队，意味着我们不仅关注前端的技术能力，也重视全端及全栈的能力

**69.** [**node_modules 困境**](https://juejin.cn/post/6914508615969669127)

> Ryan 对于 node.js 的十大遗憾之一就是支持了 node_modules，node_modules 的设计虽然能满足大部分的场景，但是其仍然存在着种种缺陷，尤其在前端工程化领域，造成了不少的…（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/VWgxdPFDLoH3NyxLRKsc5ybNnob"},{id:"fs-H3VVdwsJTonkAuxljAbcWTC1npc",category:"tech",title:"掘金收藏夹·浏览器（4篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6956156430344781838 浏览器与工具：Chrome 插件、Web Notification、vue-devtools 原理。 每篇要点与代码…",body:`> 来源：https://juejin.cn/collection/6956156430344781838  
> 浏览器与工具：Chrome 插件、Web Notification、vue-devtools 原理。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**70.** [**前端请装上这个Chrome插件**](https://juejin.cn/post/7049211255181017102)

> chrome 浏览器上有很多插件，我最喜欢的只有这一个，因为它解决了我工作中的很多麻烦；铛～铛～铛～， 铛！ 它就是ajax-interceptor

**71.** [**聊聊HTML5中的Web Notification桌面通知**](https://juejin.cn/post/6959738554930954276)

> 聊聊HTML5中的Web Notification桌面通知；大家好，我是前端队长Daotin，想要获取更多前端精彩内容，关注我，解锁前端成长新姿势（含 8 段代码）

**72.** [**据说 99% 的人不知道 vue-devtools 还能直接打开对应组件文件？本文原理揭秘**](https://juejin.cn/post/6959348263547830280)

> 据说 99% 的人不知道 vue-devtools 还能直接打开对应组件文件？本文原理揭秘；最近组织了源码共读活动，感兴趣的可以加我微信 ruochuan12 参与，或者关注我的公众号若川视野，回复“…（含 12 段代码）

**73.** [**了不起的Chrome浏览器：Chrome 90将默认使用HTTPS，Web更安全了**](https://juejin.cn/post/6955700246303571999)

> 了不起的Chrome浏览器：Chrome 90将默认使用HTTPS，Web更安全了；4月13日正式发布的Chrome 90，带来了哪些有意思的新特性呢？（含 1 段代码）`,feishuUrl:"https://my.feishu.cn/docx/H3VVdwsJTonkAuxljAbcWTC1npc"},{id:"fs-E69adPZwvoKzx4xUZrgcUvRCnJh",category:"tech",title:"掘金收藏夹·HTML（3篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6922453083431632903 HTML 冷门元素与下载进度、标签语义。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本…",body:`> 来源：https://juejin.cn/collection/6922453083431632903  
> HTML 冷门元素与下载进度、标签语义。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**74.** [**13个很酷但很少有人知道的HTML元素**](https://juejin.cn/post/7167673879693885476)

> 13个很酷但很少有人知道的HTML元素；本文正在参加「金石计划 . 瓜分6万现金大奖」（含 8 段代码）

**75.** [**来实现一个下载的需求需要展示实时下载进度  （进来不后悔）**](https://juejin.cn/post/6970946235633303559)

> 来实现一个下载的需求需要展示实时下载进度 （进来不后悔）；在工作中我们可能有遇到这种情况，需要下载一个文件或者是视频的情况并且需要提供给用户实时的进度（含 7 段代码）

**76.** [**你可能已经忘记了这些 HTML标签的作用**](https://juejin.cn/post/6922378087254786061)

> 你可能已经忘记了这些 HTML标签的作用；blog.logrocket.com/html-tags-e…（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/E69adPZwvoKzx4xUZrgcUvRCnJh"},{id:"fs-SJqMdi1J4oMPDixhOdxcltyunGd",category:"tech",title:"水波纹效果",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916136026645725192 CSS 动效与技巧：3D 抽奖、赛博朋克、原子化 CSS、动画特效（本批 demo 合集重点）。 每篇要点与代码归档…",body:`> 来源：https://juejin.cn/collection/6916136026645725192  
> CSS 动效与技巧：3D 抽奖、赛博朋克、原子化 CSS、动画特效（本批 demo 合集重点）。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**77.** [**3D抽奖页面（threejs）**](https://juejin.cn/post/7057759297811251231)

> 突然翻到在之前公司写的抽奖软件（用于公司年会）；觉得挺感慨的，TM的一共30+人，抽15左右，代码还是我写的，就是抽不中我（含 8 段代码）

**78.** [**超爽！使用 VSCode 插件实现自动原子化 CSS 样式**](https://juejin.cn/post/7077814044152823838)

> 超爽！使用 VSCode 插件实现自动原子化 CSS 样式；本文主要是讨论自动实现原子化 CSS 的实现方案，需要一些 VSCode 相关知识（含 12 段代码）

**79.** [**纯css实现赛博朋克风格**](https://juejin.cn/post/7126890428451782663)

> 我正在参加「创意开发 投稿大赛」详情请看：掘金创意开发大赛来了！；大家好，我是小阵 🔥，一路奔波不停的码字业务员（含 7 段代码）

**80.** [**用了这些css命名小技巧，我的代码优雅了不少！**](https://juejin.cn/post/7126505567408881677)

> 用了这些css命名小技巧，我的代码优雅了不少！；BEM代表 “块（block），元素（element），修饰符（modifier）”（含 12 段代码）

**81.** [**超酷炫的转场动画？CSS 轻松拿下！**](https://juejin.cn/post/7121531408778493989)

> 超酷炫的转场动画？CSS 轻松拿下！；在 WeGame 的 PC 端官网首页，有着非常多制作精良的基于滚动的动画效果（含 10 段代码）

**82.** [**2022 年最受瞩目的新特性 CSS @layer 到底是个啥？**](https://juejin.cn/post/7077758893442465806)

> 2022 年最受瞩目的新特性 CSS @layer 到底是个啥？；步入 2022，CSS 的新特性层出不穷，而最近在 CSS 圈最受瞩目的新特性，非 CSS @layer 莫属（含 12 段代码）

**83.** [**面试官让我用Flex写色子布局，我直接给写了6个**](https://juejin.cn/post/7112451678615371790)

> 面试官让我用Flex写色子布局，我直接给写了6个；持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第23天，点击查看活动详情（含 12 段代码）

**84.** [**我用这 18 个神奇的库，美化了我的项目，真是亮瞎我的眼！**](https://juejin.cn/post/7013510224896065550)

> 我用这 18 个神奇的库，美化了我的项目，真是亮瞎我的眼！；本文已参与 「掘力星计划」 ，赢取创作大礼包，挑战创作激励金（含 1 段代码）

**85.** [**【上篇】你的图片加载，一点都不酷炫！不信You Look Look...**](https://juejin.cn/post/7122256732940107813)

> 【上篇】你的图片加载，一点都不酷炫！不信You Look Look...；【下篇】你的图片加载，一点都不酷炫！不信You Look Look...（含 6 段代码）

**86.** [**吕布的回城特效有了，貂蝉的也要有，用css3制作一款貂蝉的简易回城特效**](https://juejin.cn/post/7089473772058574862)

> 吕布的回城特效有了，貂蝉的也要有，用css3制作一款貂蝉的简易回城特效；我正在参加 码上掘金体验活动，详情：show出你的创意代码块（含 10 段代码）

**87.** [**有了这些前端css工具，我下班都更早了！**](https://juejin.cn/post/7117432225385152525)

> 有了这些前端css工具，我下班都更早了！；你是不是还在手写按钮、文本字体等简单样式？这些工具就可以帮你解决以上种种难题，从此下班你将快人一步，赶快用起来吧！

**88.** [**老板：你给我来个蜻蜓点水的特效**](https://juejin.cn/post/7004704724049985549)

> 最近，老板找到我说想搞点花哨的特效，于是乎，列举了各大让人抓狂的特效；之后在我的深入评估（摸鱼）中，选取了一个稍微简单的特效，所谓蜻蜓点水实际就是波纹特效（含 9 段代码）

**89.** [**贝塞尔曲线在前端，走近她，然后爱上她**](https://juejin.cn/post/7000525748578549774)

> 贝塞尔曲线在前端，走近她，然后爱上她；这是我参与8月更文挑战的第26天，活动详情查看：8月更文挑战（含 1 段代码）

**90.** [**奇思妙想 CSS 3D 动画 | 仅使用 CSS 能制作出多惊艳的动画？**](https://juejin.cn/post/6999801808637919239)

> 奇思妙想 CSS 3D 动画 | 仅使用 CSS 能制作出多惊艳的动画？；本文将从比较多的方面详细阐述如何利用 CSS 3D 的特性，实现各类有趣、酷炫的动画效果（含 12 段代码）

**91.** [**纯CSS实现beautiful按钮**](https://juejin.cn/post/6999127555085172767)

> 这是我参与8月更文挑战的第11天，活动详情查看：8月更文挑战；近期工作中遇到一个需求——实现一些酷炫的按钮，看到效果图之后，按钮确实漂亮，有弹跳、颜色渐变、扫光、霓虹灯，瞬间激起了我的好奇心，开启了研…（含 12 段代码）

**92.** [**你可能不知道的CSS3D天空盒子👽**](https://juejin.cn/post/6997697496176820255)

> 大家好，这次给大家换换口味，我们来点不一样的东西；上周六和昊神的一聊，然后就有了这篇文章（含 12 段代码）

**93.** [**2021年你可能不知道的 CSS 特性（下篇）**](https://juejin.cn/post/6978647140910727176)

> 2021年你可能不知道的 CSS 特性（下篇）；上篇地址：2021年你可能不知道的 CSS 特性（上篇）（含 12 段代码）

**94.** [**css 流光按钮**](https://juejin.cn/post/6971340450741518344)

> 一个炫酷效果，实现简单炫酷，直接复制查看效果---；position: absolute（含 1 段代码）

**95.** [**有趣的css知识又增加了之 conic-gradient + 饼图组件**](https://juejin.cn/post/6971325956409524261)

> 有趣的css知识又增加了之 conic-gradient + 饼图组件；@https://www.tuya.com/（含 8 段代码）

**96.** [**新时代创意布局不完全指南**](https://juejin.cn/post/6966789229909114911)

> 依稀记得，某年广东语文高考作文的相关描述 -- “有时，常识虽易知而难行，有时，常识须推陈而出新”；人的想象力和创造力很容易在对常识的一贯认知中被削弱（含 12 段代码）

**97.** [**学习CSS创建霓虹灯文字总结**](https://juejin.cn/post/6966108618299015182)

> 霓虹灯文字可以为任何网站增添美好的未来感；在本文中，我们将使用CSS和keyframes实现文本发光效果，以及各种霓虹灯动画的方法（含 12 段代码）

**98.** [**CSS很杂，很乱，记不住？一文替你整理那些琐碎的CSS知识点**](https://juejin.cn/post/6966519476279836709)

> CSS很杂，很乱，记不住？一文替你整理那些琐碎的CSS知识点；写样式时，经常遇到一些bug或者某些属性值忘了，然后去查去解决，下次又忘了，又继续，挺烦人的，每次查的结果还参差不齐，痛定思痛，干脆自己整…（含 12 段代码）

**99.** [**6分钟实现CSS炫光倒影按钮**](https://juejin.cn/post/6966482130020859912)

> 回归老本行，继续分享简单有趣的CSS创意特效，放松放松心情\\~；box-sizing: border-box（含 8 段代码）

**100.** [**🌟 CSS 幻术 | 有关光影效果的黑魔法**](https://juejin.cn/post/6965488051695353886)

> 🌟 CSS 幻术 | 有关光影效果的黑魔法；总听人说光和影是孪生兄弟，有光就有影（含 8 段代码）

**101.** [**一种巧妙的使用 CSS 制作波浪效果的思路**](https://juejin.cn/post/6963445854589960206)

> 一种巧妙的使用 CSS 制作波浪效果的思路；在之前，我介绍过几种使用纯 CSS 实现波浪效果的方式，关于它们有两篇相关的文章：（含 8 段代码）

**102.** [**【CSS】CSS布局解决方案（终结版）**](https://juejin.cn/post/6960844183611375630)

> 【CSS】CSS布局解决方案（终结版）；在我们前端开发时，经常会遇到不同的场景页面布局问题，页面框架搭建是前端开发基础（含 12 段代码）

**103.** [**小技巧！CSS 提取图片主题色功能探索**](https://juejin.cn/post/6960850759759953957)

> 小技巧！CSS 提取图片主题色功能探索；本文将介绍一种利用 CSS 获取图片主题色的小技巧（含 3 段代码）

**104.** [**探秘神奇的运动路径动画 Motion Path**](https://juejin.cn/post/6956030985251061791)

> 探秘神奇的运动路径动画 Motion Path；CSS 中有一个非常有意思的模块 -- CSS Motion Path Module Level 1，翻译过来也就是运动路径（含 11 段代码）

**105.** [**CSS入门后，我从前端到全栈 | JTalk大前端**](https://juejin.cn/post/6955776857316786183)

> CSS入门后，我从前端到全栈 | JTalk大前端；「Jtalk大前端」作者专访旨在推广掘金优质的大前端作者和他们的优质内容，让优质的作者和内容被更多的看见

**106.** [**聊聊前端页面布局那些事**](https://juejin.cn/post/6954184414087626765)

> 最近在刷一些面试题以及看了一些大佬们面试总结，碰到了不少有关前端页面布局的题目，就深入学习和整理了一波；前端页面布局是我们在前端开发中比较重要的一环，这直接影响着前端页面的结构样式（含 7 段代码）

**107.** [**【面试技巧】老生常谈之 n 种使用 CSS 实现三角形的技巧** ](https://juejin.cn/post/6950081305560219679)

> 【面试技巧】老生常谈之 n 种使用 CSS 实现三角形的技巧；在一些面经中，经常能看到有关 CSS 的题目都会有一道如何使用 CSS 绘制三角形，而常见的回答通常也只有使用 border 进行绘制一种…（含 10 段代码）

**108.** [**CSS 文字装饰 text-decoration & text-emphasis**](https://juejin.cn/post/6947866495309316104)

> CSS 文字装饰 text-decoration & text-emphasis；在 CSS 中，文字算是我们天天会打交道的一大类了，有了文字，则必不可少一些文字装饰（含 12 段代码）

**109.** [**分享几个css生成工具**](https://juejin.cn/post/6944881756524789773)

> 原文地址，大家有兴趣的也可以关注一下，经常会有一些好的文章推荐；Neumorphism/Soft UI generator

**110.** [**从box-shadow属性望见前端未来**](https://juejin.cn/post/6944761771152375815)

> 从box-shadow属性望见前端未来；box-shadow应该算是比较常用的属性，用于给元素增加内外阴影，以凸显元素在视觉上的层次/立体感（含 3 段代码）

**111.** [**CSS 实现优惠券的技巧**](https://juejin.cn/post/6945023989555134494)

> 前端工程师 @上海阅文信息技术有限公司；原创声明：本文为阅文前端团队 YFE 成员出品，请尊重原创，转载请联系公众号 (id: yuewen_YFE) 获取授权，并注明作者、出处和链接（含 12 段代码）

**112.** [**有意思！不规则边框的生成方案**](https://juejin.cn/post/6944892753402822686)

> 本文将介绍一种配合 SVG 滤镜实现各种不规则图形添加边框的小技巧；本文完整的 DEMO，你可以戳这里：transparent 配合 SVG feMorphology 滤镜生成不规则边框（含 8 段代码）

**113.** [**1.5 万字 CSS 基础拾遗（核心知识、常见需求）**](https://juejin.cn/post/6941206439624966152)

> 1.5 万字 CSS 基础拾遗（核心知识、常见需求）；本篇文章围绕了 CSS 的核心知识点和项目中常见的需求来展开（含 12 段代码）

**114.** [**奇思妙想 CSS 文字动画**](https://juejin.cn/post/6937102296442470413)

> 之前有些过两篇关于字体的文章，是关于如何定义字体的：；你该知道的字体 font-family（含 12 段代码）

**115.** [**巧用 -webkit-box-reflect 倒影实现各类动效**](https://juejin.cn/post/6935248489878126628)

> 巧用 -webkit-box-reflect 倒影实现各类动效；在很久之前的一篇文章，有讲到 -webkit-box-reflect 这个属性 -- 从倒影说起，谈谈 CSS 继承 inherit（含 12 段代码）

**116.** [**你可能不知道的 transition 技巧与细节**](https://juejin.cn/post/6924114612799406093)

> 你可能不知道的 transition 技巧与细节；CSS 中，transition 属性用于指定为一个或多个 CSS 属性添加过渡效果（含 12 段代码）

**117.** [**CSS clamp 函数 101**](https://juejin.cn/post/6923180396305711118)

> 响应式布局（Responsive Design）是大约十年前提出的一个概念，意在以一套代码适配不同终端设备——而不是为每个终端做一个特定的版本；它的目的是解决移动互联网时代不同设备分辨率繁多，而多版本…（含 10 段代码）

**118.** [**CSS奇思妙想 -- 使用 CSS 创造艺术**](https://juejin.cn/post/6922257014840098830)

> CSS奇思妙想 -- 使用 CSS 创造艺术；之前有过一篇：在 CSS 中使用三角函数绘制曲线图形及展示动画（含 12 段代码）

**119.** [**2021年，是时候用mask-image来展示你炫酷的渐变图标了**](https://juejin.cn/post/6919683863492952072)

> 2021年，是时候用mask-image来展示你炫酷的渐变图标了；what is mask-image（含 11 段代码）

**120.** [**App Store 卡片展开效果**](https://juejin.cn/post/6917479303572226061)

> 今集我们会模仿 App Store 这个卡片展开效果：；本来想只用 HTML 和 CSS 去制作，但最后都要运用到 JavaScript，那我们立即开始吧

**121.** [**CSS 水滴效果**](https://juejin.cn/post/6917079398160007175)

> 今集会介绍如何使用 CSS 制作一个水滴效果，当图形碰到的时候会好像融合在一起这样，印象中有些安卓系统的 UI 在充电时也是类似的动画的：；这个教程的视频版本在 [www.bilibili.com/vi](http://www.bilibili.com/vi)…

**122.** [**CSS水波纹效果实现**](https://juejin.cn/post/6914862587863629831)

> CSS水波纹实现，使用了border-radius属性，构造一个接近圆的不规则图形，然后使用动画，让其绕Z轴不断旋转，以达到一种波浪运动的视觉效果；
> 
> （含 1 段代码）

**123.** [**分享一个一分钟就学会的vue小技巧（真的一看就会～～）**](https://juejin.cn/post/6911662617178144776)

> 分享一个一分钟就学会的vue小技巧（真的一看就会～～）；在使用vue开发时，经常会封装很多的组件方便复用，那么难免就有写样式相关组件，比如需要使用时传入颜色、高度等样式参数（含 1 段代码）

**124.** [**8个硬核技巧带你迅速提升CSS技术 | 掘金直播总结**](https://juejin.cn/post/6908879198933221383)

> 8个硬核技巧带你迅速提升CSS技术 | 掘金直播总结；特别声明：原创不易，未经授权不得转载或抄袭，如需转载可联系笔者授权（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/SJqMdi1J4oMPDixhOdxcltyunGd"},{id:"fs-PB44dbU5Ro0Od7xpLNScMwGKnDd",category:"tech",title:"掘金收藏夹·编辑器（14篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6918072505101975560 编辑器与效率：数据可视化大屏、VSCode、编辑器技巧。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹…",body:`> 来源：https://juejin.cn/collection/6918072505101975560  
> 编辑器与效率：数据可视化大屏、VSCode、编辑器技巧。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**125.** [**不敲一个代码，10分钟做出数据可视化大屏，这个教程太赞了**](https://juejin.cn/post/7128213255767457823)

**126.** [**在线 Office 解决方案调研总结**](https://juejin.cn/post/7134159389988126750)

> 在线 Office 解决方案调研总结；在之前参与的业务中，因为我们一直对在线 Office 有强烈的需求，已使用的解决方案也遇到了不少问题，想要找更好的解决方案，于是进行了一次在线 Office 解决…（含 2 段代码）

**127.** [**前端富文本基础及实现**](https://juejin.cn/post/7124839474575441934)

> 这是第 153 篇不掺水的原创，想获取更多原创好文，请搜索公众号关注我们吧\\~ 本文首发于政采云前端博客：前端富文本基础及实现；在日常生活中我们会经常接触到各种各样的文档格式和形式，其中富文本在文档格式…（含 7 段代码）

**128.** [**「教你用十分钟开发一款提升工作体验的vscode插件🌿 」console, debugger一键删除｜自定义代码模板**](https://juejin.cn/post/6996810586914816014)

> 「教你用十分钟开发一款提升工作体验的vscode插件🌿 」console, debugger一键删除｜自定义代码模板；如果喜欢我的文章，可以关注➕点赞，与我一同成长吧～（含 8 段代码）

**129.** [**一个优秀前端的工具素养**](https://juejin.cn/post/6989033473457520653)

> Arno（青楠），专有钉钉前端成员，工具和效率的狂热追求者 🤩，目前负责专有钉钉协同产品体系的前端研发；但最近在暑期实习的日子里，我特意留心观察了一下身边的实习生同学使用工具的习惯（含 1 段代码）

**130.** [**Volar - vue终极开发神器！**](https://juejin.cn/post/6966106927990308872)

> Volar - vue终极开发神器！；随着vscode以及vue的越来越普及，vetur这个名字也越来越被人熟知（含 4 段代码）

**131.** [**快速搭建一个代码在线编辑预览工具**](https://juejin.cn/post/6965467528600485919)

> 本文主要介绍的是第二类其中的一种实现方式，完全不依赖于后端，所有逻辑都在前端完成，实现起来相当简单，使用的是vue3全家桶来开发，使用其他框架也完全可以；ps.在本文基础上笔者开发了一个完整的线上工具…（含 12 段代码）

**132.** [**老板要我做一个1天搭建100个表单和列表的开发平台(1)**](https://juejin.cn/post/6933136061044359182)

> 老板要我做一个1天搭建100个表单和列表的开发平台(1)；牛年新的一天，老板兴冲冲地走进办公室，三步并作两步来到了我的工位：“大师啊，听说现在做XXX Admin、低代码开发平台火得不要不要滴，我们务…

**133.** [**手把手带你写 Vue 可视化拖拽页面编辑器**](https://juejin.cn/post/6924156555617271821)

> 手把手带你写 Vue 可视化拖拽页面编辑器；可视化页面编辑器，听起来可望不可即是吧，先来张动图观摩观摩一番！（含 12 段代码）

**134.** [**有道云笔记新版编辑器架构设计（下）**](https://juejin.cn/post/6922343979325325319)

> 上期文章，我们从整体上介绍了富文本编辑器的背景，并分享了有道云笔记新版编辑器技术选型中的模型和渲染部分；juejin.cn/post/692005… 本期文章，我们将继续分享技术选型中的编辑和指令部分…

**135.** [**有道云笔记新版编辑器架构设计（上）**](https://juejin.cn/post/6920054071571251208)

> 在开发有道云笔记的新版编辑器的过程中，我们遇到很多实际问题，愈发感觉到这是一个非常有深度的前端技术领域，所以我们将新版编辑器的技术选型、架构和部分实现细节拿出来分享给大家，希望对大家开发富文本编辑器、…

**136.** [**2021 再看 Deno（CDN for JavaScript modules的思考）**](https://juejin.cn/post/6919389446068502535)

> 2021 再看 Deno（CDN for JavaScript modules的思考）；淘系前端智能化团队-F(x) Team（含 5 段代码）

**137.** [**可视化拖拽组件库一些技术要点原理分析（二）**](https://juejin.cn/post/6918881497264947207)

> 可视化拖拽组件库一些技术要点原理分析（二）；本文是对《可视化拖拽组件库一些技术要点原理分析》的补充（含 12 段代码）

**138.** [**代码编译初探 （中）- 前端必看**](https://juejin.cn/post/6916894654277353480)

> 这一篇来简单的实践一下编译器的词法分析，考虑到词法分析实现的复杂度，这里选择以 markdown 文本语言作为对象进行简单介绍；Markdown是一种轻量级标记语言，创始人为约翰·格鲁伯（含 2 段代码）`,feishuUrl:"https://my.feishu.cn/docx/PB44dbU5Ro0Od7xpLNScMwGKnDd"},{id:"fs-SBS2d4ivjoPce6xH8rrcUk7vnng",category:"tech",title:"掘金收藏夹·网站（7篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6944656880861970462 网站收藏：优质站点与界面资源。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一…",body:`> 来源：https://juejin.cn/collection/6944656880861970462  
> 网站收藏：优质站点与界面资源。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**139.** [**前端老司机 70+ 实用工具网站分享（建议收藏！）🔥🔥**](https://juejin.cn/post/7129412947931037732)

> 前端老司机 70+ 实用工具网站分享（建议收藏！）🔥🔥；携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第9天，点击查看活动详情

**140.** [**25 个前端开发者必去的杀手级网站**](https://juejin.cn/post/7077196404422246430)

> 有许多的网站可以让我们开发人员的工作更加轻松，在本文中我将介绍25个我认为开发者必去的杀手级网站；DevDocs将不同语言、框架和库的API汇聚到了一个网页上，你可以直接在一个页面进行搜索

**141.** [**分享一些2021年个人收藏的前端学习资料**](https://juejin.cn/post/7047428140078989348)

> 分享一些2021年个人收藏的前端学习资料；于是整理了自己的收藏夹，也跟大家分享一些2021年个人收藏的前端学习资料，包括文章65篇、视频37个、书籍24本

**142.** [**浓缩了这 20+ 站点的前端滋补汤\\~干了 ❗**](https://juejin.cn/post/7004513614224687111)

> 浓缩了这 20+ 站点的前端滋补汤\\~干了 ❗；看到很多小伙伴都把自己好用好玩的站点分享出来了,我也是一个收集工具站点的爱好者

**143.** [**推荐26个GitHub上好玩又有挑战的前端项目（涵盖初中高阶）**](https://juejin.cn/post/6999918705639424014)

> 推荐26个GitHub上好玩又有挑战的前端项目（涵盖初中高阶）；有前端同学问我们，最近感觉学习遇到了瓶颈，听说尝试操作一些开源项目可以有效提升，想知道有没有什么好玩又有挑战的项目推荐

**144.** [**眼里要有光！分享一些我收藏夹里的链接**](https://juejin.cn/post/6947894860284166151)

> 眼里要有光！分享一些我收藏夹里的链接；本文已收录在前端食堂同名仓库 Github github.com/Geekhyt，欢迎光临食堂，如果觉得酒菜还算可口，赏个 Star 对食堂老板来说是莫大的鼓励

**145.** [**猛增 110K Star！年增长数最多的 10 大顶级前端学习资源项目！**](https://juejin.cn/post/6944632786724585502)

> 猛增 110K Star！年增长数最多的 10 大顶级前端学习资源项目！；大家好，我是你们的 猫哥，那个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~（含 10 段代码）`,feishuUrl:"https://my.feishu.cn/docx/SBS2d4ivjoPce6xH8rrcUk7vnng"},{id:"fs-BFNRdG7QboefYPxitn8ctHZMnpf",category:"tech",title:"掘金收藏夹·性能优化（24篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6918104139335467015 性能优化：首屏、加载、渲染、监控等性能实战。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`…",body:`> 来源：https://juejin.cn/collection/6918104139335467015  
> 性能优化：首屏、加载、渲染、监控等性能实战。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**146.** [**前端晋升答辩-性能优化篇范式**](https://juejin.cn/post/7126986286367244324)

> 携手创作，共同成长！这是我参与「掘金日新计划 · 8 月更文挑战」的第2天，点击查看活动详情；本文力争为你参加晋升答辩时，提供一个论述性能优化相关工作的范式（含 1 段代码）

**147.** [**老板让你做性能优化，第一步你应该做什么？🔥🔥**](https://juejin.cn/post/7121323745980973070)

> 老板让你做性能优化，第一步你应该做什么？🔥🔥；项目的性能决定了用户对项目的整体感观度，优秀的性能可以保证项目的流畅与自然给用户愉快的体验感受

**148.** [**我本地明明是好的啊？前端怎么本地复现线上问题？**](https://juejin.cn/post/7107567660396871716)

> 我本地明明是好的啊？前端怎么本地复现线上问题？；持续创作，加速成长！这是我参与「掘金日新计划 · 6 月更文挑战」的第 14 天，点击查看活动详情（含 7 段代码）

**149.** [**我们为什么要做前端性能优化？**](https://juejin.cn/post/6983911257329893413)

> 我们每天都在谈前端性能优化，每天都在背前端性能优化方案，然而，我们却不知道他背后的原理以及涉及那些知识储备；3、我们每天都在谈性能优化到底在谈什么？（含 4 段代码）

**150.** [**写给中高级前端关于性能优化的9大策略和6大指标 | 网易四年实践**](https://juejin.cn/post/6981673766178783262)

> 写给中高级前端关于性能优化的9大策略和6大指标 | 网易四年实践；特别声明：原创不易，未经授权不得转载或抄袭，如需转载可联系笔者授权（含 12 段代码）

**151.** [**实战篇 - 如何把性能优化的颗粒度做的更细**](https://juejin.cn/post/6970988759529553927)

> 实战篇 - 如何把性能优化的颗粒度做的更细；之前我也研究过很多性能相关的文档和博客，发现现在的性能相关的文章 90% 都是之前有过的东西，但是目前的性能优化只能做到如今的样子了吗？（含 9 段代码）

**152.** [**这些前端性能优化的知识我从来不告诉别人（下）**](https://juejin.cn/post/6971359910525141005)

> 这些前端性能优化的知识我从来不告诉别人（下）；相关概念了解请移步 这些前端性能优化的知识我从来不告诉别人（上篇） 本文干货居多噢（含 2 段代码）

**153.** [**你知道的前端优化手段**](https://juejin.cn/post/6966857691381645325)

> 会优化，我就不是不优，就是看着慢，哎\\~，就是玩儿\\~；性能优化是一个项目发展到一定时期之后绕不开的话题，也是每个工程师心中永远在撩拨的刺（含 9 段代码）

**154.** [**web性能优化（Lighthouse和performance）：从实际项目入手，如何监测性能问题、如何解决。**](https://juejin.cn/post/6965744691979485197)

> web性能优化（Lighthouse和performance）：从实际项目入手，如何监测性能问题、如何解决；这篇文章总结一下我过往项目的web性能优化，主要是就项目中如何发现性能问题，优化如何解决，谈…

**155.** [**我给网站做了一场性能手术**](https://juejin.cn/post/6959333330277892133)

> 风和日丽: 我正笑嘻嘻地抓着我炫酷的ikbc键盘疯狂的敲着Bug.；晴天霹雳: 被拉进了一个群,产品说我做的网站很卡,需要做性能优化.（含 4 段代码）

**156.** [**如何使用Lighthouse性能检测工具**](https://juejin.cn/post/6950855971379871757)

> 如何使用Lighthouse性能检测工具；最近做性能检测工具，很多知识点不清楚，打算查缺补漏，补一补（含 4 段代码）

**157.** [**现代密码学复习——第一章**](https://juejin.cn/post/6948666131276267533)

> 定义：保密学是研究信息系统安全保密的科学，它包括两个分支，一是密码学，对信息进行编码实现隐蔽信息的科学，二是密码分析学，研究分析破译密码的科学；二者相互对立，而又互相促进地向前发展（含 1 段代码）

**158.** [**性能优化 让你的页面更丝滑**](https://juejin.cn/post/6940574353926914084)

> 性能优化是一个很宏大的命题，无论是是大厂还是小公司，都在为让页面更快的展现在用户面前做优化和探索，页面性能也是检验一个前端工程师项目成果的重要指标，所以，无论是不是要面试，常用的性能优化的手段还是要熟…（含 4 段代码）

**159.** [**【前端安全】从需求分析开始，详解前端加密与验签实践  |  项目复盘**](https://juejin.cn/post/6940322648924618783)

> 【前端安全】从需求分析开始，详解前端加密与验签实践 | 项目复盘；最近在复盘项目的时候，想到了之前做的关于前端加密与验签的需求，感觉这块很少有文章介绍，所以我就把这块内容做一下整理，希望可以帮助到后面…（含 9 段代码）

**160.** [**从输入URL开始建立前端知识体系**](https://juejin.cn/post/6935232082482298911)

> 「2022-05-18: 新增总结」；浏览器主进程：只有一个，主要控制页面的创建、销毁、网络资源管理、下载等（含 8 段代码）

**161.** [ **揭秘 Vue.js 九个性能优化技巧**](https://juejin.cn/post/6922641008106668045)

> 揭秘 Vue.js 九个性能优化技巧；这篇文章主要参考了 Vue.js 核心成员 Guillaume Chau 在 19 年美国的 Vue conf 分享的主题：9 Performance secre…（含 12 段代码）

**162.** [**跨域和模版引擎的使用**](https://juejin.cn/post/6920501068002508814)

> 笔记来源：拉勾教育 - 大前端就业集训营；文章内容：学习过程中的笔记、感悟、和经验（含 6 段代码）

**163.** [**前端大文件上传深入研究和实现**](https://juejin.cn/post/6870837414852886542)

> Input Change Event；时间切片 requestIdleCallback 处理（含 12 段代码）

**164.** [**性能优化学习实录**](https://juejin.cn/post/6919763345683791885)

> ​ 性能优化的相关文章层出不穷，但是大部分都是在讲如何优化性能，也就是讲方法；但是在实际工作中，如何量化性能优化也是相当重要的一环

**165.** [**让你的vue项目体积更小点，打包速度更快点**](https://juejin.cn/post/6919638463168020488)

> 让你的vue项目体积更小点，打包速度更快点；有时候开发完一个vue项目后，会发现项目包又大打包速度还慢，里面还有很多冗余的文件，比如图片，.vue文件，.js文件等，如果你也遇到类似问题，或者你希望你…（含 12 段代码）

**166.** [**前端搞工程化：从零打造性能检测库「源码 + 视频」**](https://juejin.cn/post/6919295789630455815)

> 前端搞工程化：从零打造性能检测库「源码 + 视频」；工程化体系专栏永远首发自我的 Github，大家可以关注点赞，通常会早于发布各大平台一周时间以上（含 12 段代码）

**167.** [**详解前端性能优化方案 | 七日打卡**](https://juejin.cn/post/6918550752466206727)

> 从用户访问资源到资源完整的展现在用户面前的过程中，通过技术手段和优化策略，缩短每个步骤的处理时间从而提升整个资源的访问和呈现速度；1.从用户角度而言，优化能够让页面加载得更快、对用户的操作响应得更及时…

**168.** [**【七日打卡】重构几次代码后，我总结了一些前端代码优化实践**](https://juejin.cn/post/6916288620542296077)

> 【七日打卡】重构几次代码后，我总结了一些前端代码优化实践；本文已授权掘金开发者社区公众号独家使用，包括但不限于编辑、标注原创等权益（含 2 段代码）

**169.** [**聊一聊前端性能优化**](https://juejin.cn/post/6911472693405548557)

> 性能优化 ，每个工程师跑不掉的一个话题；这里是本人结合Mr.Max的一门课，总结的一些优化手法，希望对大家有所帮助，后续也会继续更新，想要看视频的可以直接去某课网搜（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/BFNRdG7QboefYPxitn8ctHZMnpf"},{id:"fs-ETULdujJwozVB6xs3umc87UOn5c",category:"tech",title:"掘金收藏夹·工具（9篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6932036335624519687 工具：前端开发工具与效率库。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一个…",body:`> 来源：https://juejin.cn/collection/6932036335624519687  
> 工具：前端开发工具与效率库。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**170.** [**这10 个很“哇塞”的Web资源，前端必备的神仙级网站**](https://juejin.cn/post/7125316471260971016)

> 这10 个很“哇塞”的Web资源，前端必备的神仙级网站；毋庸置疑，善用工具可以加速开发，拉满开发效率，减少996的频率，提高我们的生活质量

**171.** [**50 多个提高前端人效率的工具、网站和书籍整理**](https://juejin.cn/post/7079447275755274254)

> 50 多个提高前端人效率的工具、网站和书籍整理；本文包含了在线编译，在线编辑、实用工具、可视化工具、各种前端电子书等50多个网站，快放到你的收藏夹吃灰吧

**172.** [**前端工程师应该掌握的抓包神器工具—Charles，会了真香**](https://juejin.cn/post/7121496066591031310)

> 前端工程师应该掌握的抓包神器工具—Charles，会了真香；本文已参与「新人创作礼」活动，一起开启掘金创作之路

**173.** [**2022年了，该学会用VSCode debug了**](https://juejin.cn/post/7080135520902184997)

> 2022年了，该学会用VSCode debug了；VSCode作为目前使用人数最多的IDE，在前端开发者中也是十分受欢迎的（含 2 段代码）

**174.** [**2022前端，推荐7款值得深入学习的“👑新贵前端库”!**](https://juejin.cn/post/7051598110316822542)

> 2022前端，推荐7款值得深入学习的“👑新贵前端库”!；「2022 年什么会火？什么该学？本文正在参与“聊聊 2022 技术趋势”征文活动 」（含 1 段代码）

**175.** [**【利器篇】35+精选chrome插件，含15+前端插件，总有一款值得你停留**](https://juejin.cn/post/6998300409173377032)

> 【利器篇】35+精选chrome插件，含15+前端插件，总有一款值得你停留；这是我参与8月更文挑战的第20天，活动详情查看：8月更文挑战

**176.** [**eruda-pixel 前端用了这工具，再也不怕 UI 验收了-使用篇**](https://juejin.cn/post/6961220834073509895)

> eruda-pixel 前端用了这工具，再也不怕 UI 验收了-使用篇；基于移动端调试工具 eruda 开发的一款 UI 高精度还原辅助工具，设计师验收页面利器（含 3 段代码）

**177.** [**前端录制回放系统初体验**](https://juejin.cn/post/6953533236337197070)

> 本篇文章来自团队小伙伴 @陈小信 的一次学习分享，希望跟大家分享与探讨；顾名思义，就是录制用户在网页中的各种操作，并且支持能随时回放操作（含 12 段代码）

**178.** [**开工大吉，给各位大佬分享20款超级好用的chrome拓展插件**](https://juejin.cn/post/6931886945282818062)

> 开工大吉，给各位大佬分享20款超级好用的chrome拓展插件；我是长胖了的秦爱德，在这里祝各位开工大吉，牛气冲天！🐮🐮🐮`,feishuUrl:"https://my.feishu.cn/docx/ETULdujJwozVB6xs3umc87UOn5c"},{id:"fs-QtELdSAqWoaUmMxPtFBc11wxn4f",category:"tech",title:"掘金收藏夹·可视化（11篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6929497855811911688 可视化：数据可视化方案与图表实践（本批做效果卡片）。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹26…",body:`> 来源：https://juejin.cn/collection/6929497855811911688  
> 可视化：数据可视化方案与图表实践（本批做效果卡片）。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**179.** [**Low code 之从零搭建一个h5可视化平台**](https://juejin.cn/post/7015890033622646792)

> Low code 之从零搭建一个h5可视化平台；闲着无聊撸了个可视化编辑器，优化放到后面去吧哈哈哈（含 7 段代码）

**180.** [**2021前端智能化的总结和展望**](https://juejin.cn/post/6966404264633565215)

> 前端智能化历时三年有余，从最初被误解为“用 AI 包装自己的 PPT 产品...到 imgcook.com 发布上线；从淘系技术双11零研发战役，到赋能十余个 BU（含 1 段代码）

**181.** [**🌟 绘制一个星星形状的水波图**](https://juejin.cn/post/6944915877422694414)

> G2Plot 最初诞生于阿里经济体 BI 产品真实场景的业务诉求，基于 G2 图形语法，一图一做扩展常见的业务图表；在 G2Plot 2.3.14 版本，水波图提供了 shape 的配置，允许用户自定…（含 2 段代码）

**182.** [**可视化拖拽页面编辑器 | 项目复盘**](https://juejin.cn/post/6941657971650887716)

> 在去年闲暇时间开发了一个可视化的页面编辑器，这次看到掘金有项目复盘的活动，正好可以拿出来写篇文章，和大家分享下；多种编辑功能（字体，背景，大小，边距等）（含 12 段代码）

**183.** [**一个可视化搭建系统的演进过程**](https://juejin.cn/post/6938743972579770382)

> 可视化搭建系统是一个有趣又神秘的话题，但事实上上手并不困难，结合过去云凤蝶在中台应用搭建的探索，我们尝试用一个码农想方设法偷懒的故事来教大家从零开始写一个可视化搭建系统；阿炮是一个二十五岁的前端码农，…（含 1 段代码）

**184.** [**拖拽可缩放div---组件学习分享**](https://juejin.cn/post/6939430294068035591)

> 记录和分享也是学习路上重要的一环，掘金平台的文章质量很不错，我喜欢在这里浏览，接下来也会讲自己的所学所知，记录并分享与此，希望在这里，可以多结识喜欢分享与学习的朋友！；一段事件的基础知识学习过程，让我…（含 4 段代码）

**185.** [**从零开发一款可视化大屏制作平台**](https://juejin.cn/post/6937257727106220040)

> 几个月前开源的H5页面制作平台H5-Dooring 收到了很多热心的反馈和交流, 顺着笔者之前的规划, 我们又做了一款可视化大屏编辑器V6.Dooring. 接下来笔者就来带大家一起看看我们的方案设计…（含 2 段代码）

**186.** [**从0到1开发可视化拖拽H5编辑器(React)**](https://juejin.cn/post/6934881286527909896)

> 从0到1开发可视化拖拽H5编辑器(React)；​ 年前年后比较闲，于是用React做了一个简单的lowcode平台，功能如上面动图所示（含 12 段代码）

**187.** [**从0到1开发可视化数据大屏（上）**](https://juejin.cn/post/6931708519976534029)

> 前言：大数据时代，以大屏为载体的数据可视化需求日渐增多，数据大屏成为越来越多企业绩效展示，报表展示，业务监控等等的一种形式，大屏的上线带来的是便捷，无需编码，用户可以直接将所要呈现的组件拖拽到画布上，…

**188.** [**五福背后的 Web 3D 引擎 Oasis Engine 正式开源**](https://juejin.cn/post/6925339247348023309)

> 五福背后的 Web 3D 引擎 Oasis Engine 正式开源；相信大家已经体验了今年支付宝五福的活动，无论是今年的五福首页还是打年兽游戏都是由蚂蚁互动图形引擎（代号：Oasis Engine）驱…

**189.** [**可视化拖拽组件库一些技术要点原理分析（三）**](https://juejin.cn/post/6929302655118344200)

> 可视化拖拽组件库一些技术要点原理分析（三）；本文是可视化拖拽系列的第三篇，之前的两篇文章一共对 17 个功能点的技术原理进行了分析：（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/QtELdSAqWoaUmMxPtFBc11wxn4f"},{id:"fs-WCtXdFJB9ofxH0x6RQkcz4G1nOc",category:"tech",title:"掘金收藏夹·小程序（4篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6918101396566835208 小程序：小程序开发与踩坑。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一个 …",body:`> 来源：https://juejin.cn/collection/6918101396566835208  
> 小程序：小程序开发与踩坑。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**190.** [**公司产品太多了，怎么实现一次登录产品互通？**](https://juejin.cn/post/7123787027652280356)

> 公司产品太多了，怎么实现一次登录产品互通？；大家好，我是老王，最近开发新产品，然后老板说我们现在系统太多了，每次切换系统登录太麻烦了，能不能做个优化，同一账号互通掉（含 8 段代码）

**191.** [**小程序自动化测试入门到实践**](https://juejin.cn/post/6983294039852318728)

> 随着小程序项目越来越复杂，业务场景越来多，花费在回归测试上的时间会越来越多，前端自动化测试就非常有必要提上日程；今天要带来的是: 小程序自动化测试入门教程（含 10 段代码）

**192.** [**不用备案也能支持微信自定义分享**](https://juejin.cn/post/6925273866475995143)

> 我们知道，在微信中打开网页，使用右上角的 ... 分享给朋友/朋友圈，是可以使用 JS SDK 自定义分享卡片文案的；为了让分享内容能够更好的受到监管，从早期会自动读取网页内第一张大图到后期使用 JS…（含 3 段代码）

**193.** [**【七日打卡】开箱即用的微信小程序订阅消息代码封装**](https://juejin.cn/post/6917840080514056205)

> 【七日打卡】开箱即用的微信小程序订阅消息代码封装；本文已授权掘金开发者社区公众号独家使用，包括但不限于编辑、标注原创等权益（含 6 段代码）`,feishuUrl:"https://my.feishu.cn/docx/WCtXdFJB9ofxH0x6RQkcz4G1nOc"},{id:"fs-XSKjdLhAHo48rJxHfhlcM7gPnsd",category:"tech",title:"掘金收藏夹·TypeScript（10篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6916118515908870157 TypeScript：类型系统、实战与进阶。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`…",body:`> 来源：https://juejin.cn/collection/6916118515908870157  
> TypeScript：类型系统、实战与进阶。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**194.** [**2022年了，我才开始学 typescript ，晚吗？（7.5k字总结）**](https://juejin.cn/post/7124117404187099172)

> 2022年了，我才开始学 typescript ，晚吗？（7.5k字总结）；其实早在初学前端时，就有大致了解过 typescript ,但后面工作中基本 vue2 开发为主，所以真正能够接触到 typ…（含 11 段代码）

**195.** [**新发布的 TypeScript 手册！先睹为快！**](https://juejin.cn/post/6938614411397431304)

> 新发布的 TypeScript 手册！先睹为快！；原文地址：Announcing the New TypeScript Handbook

**196.** [**TypeScript 高级用法**](https://juejin.cn/post/6926794697553739784)

> 本文主要介绍 TypeScript 的高级用法，适用于对 TypeScript 已经有所了解或者已经实际用过一段时间的同学，分别从类型、运算符、操作符、泛型的角度来系统介绍常见的 TypeScript…（含 12 段代码）

**197.** [**潮流前端周刊（第20期）- 草海**](https://juejin.cn/post/6921320651122802701)

> 封面图摄于云南泸沽湖草海，一半在云南，一半在四川，挺有意境；记录每周看到的前端潮流技术，筛选后用接地气方式发布于此，关注此专栏可以及时收到更新\\~

**198.** [**TypeScript 的本质！🪐🪐🪐**](https://juejin.cn/post/6920139727903408136)

> TypeScript 的本质！🪐🪐🪐；口诀🤨：四基两空一对象，还有五个falsy值（含 1 段代码）

**199.** [**TypeScript 中提升幸福感的 10 个高级技巧**](https://juejin.cn/post/6919478002925453320)

> TypeScript 中提升幸福感的 10 个高级技巧；用了一年时间的 TypeScript 了，项目中用到的技术是 Vue + TypeScript 的，深感中大型项目中 TypeScript 的必…（含 12 段代码）

**200.** [**推荐 7 个 GitHub 上很火的 TypeScript 的宝库，2021 学 TS 看这篇就够了！**](https://juejin.cn/post/6916495590754877453)

> 推荐 7 个 GitHub 上很火的 TypeScript 的宝库，2021 学 TS 看这篇就够了！；大家好，新年快乐，我是你们的 猫哥，一个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~（含 2 段代码）

**201.** [**2021年与TypeScript愉快玩耍**](https://juejin.cn/post/6917830695301677069)

> 2021年与TypeScript愉快玩耍；近几年，前端领域得到了日新月异的发展，各种新技术、框架层出不穷，前端的圈子越来越大（含 10 段代码）

**202.** [**一份不可多得的 TS 学习指南（1.8W字）**](https://juejin.cn/post/6872111128135073806)

> 一份不可多得的 TS 学习指南（1.8W字）；阿宝哥第一次使用 TypeScript 是在 Angular 2.x 项目中，那时候 TypeScript 还没有进入大众的视野（含 12 段代码）

**203.** [**编写高质量可维护的代码：Awesome TypeScript**](https://juejin.cn/post/6914442673155735560)

> 编写高质量可维护的代码：Awesome TypeScript；这是第 84 篇不掺水的原创，想获取更多原创好文，请搜索公众号关注我们吧\\~ 本文首发于政采云前端博客：编写高质量可维护的代码：Awesom…（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/XSKjdLhAHo48rJxHfhlcM7gPnsd"},{id:"fs-VIcDdn9efocDqaxc1wwcydwcnoh",category:"tech",title:"掘金收藏夹·源码（5篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6917931969292697614 源码：主流库源码解析。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一个 md…",body:`> 来源：https://juejin.cn/collection/6917931969292697614  
> 源码：主流库源码解析。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**204.** [**从 vue3 和 vite 源码中，我学到了一行代码统一规范团队包管理器的神器**](https://juejin.cn/post/7033560885050212389)

> 从 vue3 和 vite 源码中，我学到了一行代码统一规范团队包管理器的神器；大家好，我是若川，欢迎 follow 我的 github（含 11 段代码）

**205.** [**2K Star！超过 50 个专题、450 个好项目，大半年来推荐过的重磅项目合集 👍**](https://juejin.cn/post/6978856784752541710)

> 2K Star！超过 50 个专题、450 个好项目，大半年来推荐过的重磅项目合集 👍；大家好，我是你们的 猫哥，还是那个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~

**206.** [**迟来的vuex源码笔记，落后大佬一大截**](https://juejin.cn/post/6966124955842904078)

> 迟来的vuex源码笔记，落后大佬一大截；vuex 辅助函数-mapState（含 10 段代码）

**207.** [**推荐 7 个 Vue2、Vue3 源码解密分析的重磅开源项目 👍**](https://juejin.cn/post/6942492146725290020)

> 推荐 7 个 Vue2、Vue3 源码解密分析的重磅开源项目 👍；大家好，我是你们的 猫哥，那个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~

**208.** [**Vue响应式原理简析**](https://juejin.cn/post/6917916823480434695)

> 这是开课吧视频中的小一个 demo ，代码很简单但是思路很清晰\\~；其实是 Vue 1.x 版本核心原理的简单实现，虽然 2.x 版本有很多改进，但是这里用来分析 Vue 响应式的原理足够了（含 5 段代码）`,feishuUrl:"https://my.feishu.cn/docx/VIcDdn9efocDqaxc1wwcydwcnoh"},{id:"fs-YLATdbe26okCTFxIC0AcqbcCnyc",category:"tech",title:"掘金收藏夹·React（10篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6918537332895252494 React：Hooks、原理与实战。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏…",body:`> 来源：https://juejin.cn/collection/6918537332895252494  
> React：Hooks、原理与实战。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**209.** [**「React 进阶」 React 全部 Hooks 使用大全 （包含 React v18 版本 ）**](https://juejin.cn/post/7118937685653192735)

> 「React 进阶」 React 全部 Hooks 使用大全 （包含 React v18 版本 ）；React hooks是react16.8 以后，react新增的钩子API，目的是增加代码的可复用…（含 12 段代码）

**210.** [**前端工程化实战 - 自定义 React 脚手架 & CLI 升级**](https://juejin.cn/post/6989028324202938398)

> 前端工程化实战 - 自定义 React 脚手架 & CLI 升级；⚠️ 本文为掘金社区首发签约文章，未获授权禁止转载（含 12 段代码）

**211.** [**2021年 React项目推荐的和应该放弃的技术方案**](https://juejin.cn/post/6970961123335995406)

> 2021年 React项目推荐的和应该放弃的技术方案；pnpm内置支持了单仓多包，创建了一个非平铺的 node_modules，因此代码无法访问任意包，所有的文件都是基于软连接访问，兼容npm指令，上…

**212.** [**初次邂逅React**](https://juejin.cn/post/6968435419448868872)

> 采用组件化模式、声明式编码，提高开发效率及组件复用率；使用虚拟DOM+优秀的DIffing算法，减少与真实DOM交互（和ajax原理相似）（含 12 段代码）

**213.** [**🔥React 转 Vue2.0 转 Vue3.0 不完全指东🔥**](https://juejin.cn/post/6960245513509699614)

> 🔥React 转 Vue2.0 转 Vue3.0 不完全指东🔥；前几天看到了 Vue 转 React不完全指北这篇文章@俊劫，感觉挺有意思，突然想到自己以前写taro+react+ts,而现在刚好公司…（含 12 段代码）

**214.** [**从零搭建一款PC页面编辑器PC-Dooring**](https://juejin.cn/post/6950075140906418213)

> 从零搭建一款PC页面编辑器PC-Dooring；之前一直忙着调研lowcode平台和开发以下两个项目:（含 3 段代码）

**215.** [**「React进阶」 React全部api解读+基础实践大全(夯实基础2万字总结)**](https://juejin.cn/post/6950063294270930980)

> 「React进阶」 React全部api解读+基础实践大全(夯实基础2万字总结)；很多同学用react开发的时候，真正用到的React的api少之又少，基本停留在Component,React.mem…（含 12 段代码）

**216.** [**最受欢迎的5个React动画库**](https://juejin.cn/post/6945015156933918734)

> 对于React前端开发人员而言，从动画文本或图像到复杂的3D动画，在网页上实现动画是您日常工作不可或缺的一部分；动画可以在构建React应用程序时帮助改善整体用户体验（含 5 段代码）

**217.** [**React 中后台系统多页签实现 ｜ 项目复盘**](https://juejin.cn/post/6941683774153293837)

> React 中后台系统多页签实现 ｜ 项目复盘；在中后台管理类系统中，多页签的需求非常普遍，用户常常需要在多个页签内跳转，比如填写表单时去查询某个列表获取一些字段信息再回到表单页面填写

**218.** [**react hooks+redux+immutable.js打造网易云音乐精美webApp**](https://juejin.cn/post/6844903911367639054)

> react hooks+redux+immutable.js打造网易云音乐精美webApp；上次出了服务端渲染的文章，获得了很多大佬的点赞评论，非常开心（含 3 段代码）`,feishuUrl:"https://my.feishu.cn/docx/YLATdbe26okCTFxIC0AcqbcCnyc"},{id:"fs-SMNFdltnooNUx3xkfFHcCSILnlh",category:"tech",title:"掘金收藏夹·播放器（3篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6946049144137973773 播放器：音视频播放器实现。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一个 …",body:`> 来源：https://juejin.cn/collection/6946049144137973773  
> 播放器：音视频播放器实现。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**219.** [**浅聊WebRTC视频通话**](https://juejin.cn/post/7000205126719766565)

> WebRTC提供了一套标准API，使Web应用可以直接提供实时音视频通信功能；大部分浏览器及操作系统都支持WebRTC，直接可以在浏览器端发起实时音视频通话，本文以WebRTC初学者的视角去完成一个1…（含 12 段代码）

**220.** [**在Javascript应用程序中执行语音识别**](https://juejin.cn/post/6961758227876970504)

> 在Javascript应用程序中执行语音识别；原文：betterprogramming.pub/perform-spe…（含 4 段代码）

**221.** [**从0到1实现Web端H.265播放器：视频解码篇**](https://juejin.cn/post/6946021617386389511)

> 从0到1实现Web端H.265播放器：视频解码篇；感兴趣的朋友可以看下面的文章了解详情（含 9 段代码）`,feishuUrl:"https://my.feishu.cn/docx/SMNFdltnooNUx3xkfFHcCSILnlh"},{id:"fs-JdwZdOu06oR46oxH1xccWk6rnuf",category:"tech",title:"掘金收藏夹·地图（2篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6918103207730216968 地图：地图可视化与集成。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一个 m…",body:`> 来源：https://juejin.cn/collection/6918103207730216968  
> 地图：地图可视化与集成。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**222.** [**【前端搞地图】如何设计一张让用户过目不忘的地图**](https://juejin.cn/post/6999162316663029797)

> 【前端搞地图】如何设计一张让用户过目不忘的地图；这是我参与 8 月更文挑战的第 5 天，活动详情查看： 8月更文挑战（含 4 段代码）

**223.** [**3倍+提升，高德地图极致性能优化之路**](https://juejin.cn/post/6917864147514458125)

> 3倍+提升，高德地图极致性能优化之路；随着移动互联网的成熟发展，移动应用技术上呈现出多样化的趋势，业务上倾向打造平台及超级入口，超级应用应运而生`,feishuUrl:"https://my.feishu.cn/docx/JdwZdOu06oR46oxH1xccWk6rnuf"},{id:"fs-BTRQd0v1xoM4FGxtoeRcnMxKn3d",category:"tech",title:"掘金收藏夹·管理（14篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6917967110148882446 管理：团队管理、代码规范、工程协作。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏…",body:`> 来源：https://juejin.cn/collection/6917967110148882446  
> 管理：团队管理、代码规范、工程协作。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**224.** [**设计方案，写了才知道有多香**](https://juejin.cn/post/6996819856033054756)

> 大家好，我是零一，今天要跟大家聊聊开发流程中不起眼的环节——设计方案；你们可能没听过，也可能只是简单得走过过场，别划走，这非常重要！（含 2 段代码）

**225.** [**精读《前端职业规划 - 2021 年》**](https://juejin.cn/post/6965675185890394119)

> 精读《前端职业规划 - 2021 年》；不知道你上次思考前端职业规划是什么时候？

**226.** [**【个人成长】如何搭建前端架构和团队体系**](https://juejin.cn/post/6959181311495897096)

> 【个人成长】如何搭建前端架构和团队体系；自我介绍下，四年工作经验，头两年全栈开发，后两年专职做前端，目前已达到高级前端工程师水平，经历过三家公司（含 1 段代码）

**227.** [**前端项目负责人需要具有的能力**](https://juejin.cn/post/6946210273061502990)

> 因为业务线比较多，所以公司内部每一个项目当中都是一个中级开发在负责项目；以下内容全是从个人角度的理解去给与一些参照

**228.** [**【工具】10分钟快速搭建属于自己的文档网站**](https://juejin.cn/post/6937452670202413087)

> 【工具】10分钟快速搭建属于自己的文档网站；很多同学都希望能够拥有自己的一个文档系统，去记录/总结自己所学到的知识（含 9 段代码）

**229.** [**推荐程序员必备的 10 大 GitHub 仓库，前端占了 7 个！**](https://juejin.cn/post/6924520063399624712)

> 推荐程序员必备的 10 大 GitHub 仓库，前端占了 7 个！；大家好，我是你们的 猫哥，一个不喜欢吃鱼、又不喜欢喵 的超级猫 \\~

**230.** [**爆肝 200 小时，我做了个编程导航！**](https://juejin.cn/post/6920794653310599175)

> 爆肝 200 小时，我做了个编程导航！；最近一个月，上班之余，我几乎将全部时间投入到自己的新项目『 编程导航 』中，熬了30 多个大夜，终于将它上线！

**231.** [**Odlbirds 带你快速生成周报**](https://juejin.cn/post/6921164823279435784)

> 公司要求每周都要写周报，周报的大体内容就是你本周做的事情，暂时不需要所思所想所感(质量要求不高)；通常都是自己从 gitlab 的操作面板筛选出自己本周提交的日志，然后每个提交 title 复制一份（含 12 段代码）

**232.** [**高中毕业：如何用 15 年从小白到技术专家**](https://juejin.cn/post/6920401073345658888)

> 高中毕业：如何用 15 年从小白到技术专家；前端早早聊大会，前端成长的新起点，与掘金联合举办

**233.** [**2021年前端工程师书单推荐**](https://juejin.cn/post/6920428989181870094)

> 本文已收录在前端食堂同名仓库Github github.com/Geekhyt，欢迎光临食堂，如果觉得酒菜还算可口，赏个 Star 对食堂老板来说是莫大的鼓励；之前有读者私信我想要一份前端工程师的成长…

**234.** [**今天聊：中小前端团队 Leader 的管理之路**](https://juejin.cn/post/6919379370667114504)

> 今天聊：中小前端团队 Leader 的管理之路；前端早早聊大会，前端成长的新起点，与掘金联合举办

**235.** [**今天聊：做好前端的 10 个习惯**](https://juejin.cn/post/6916420781069041677)

> 前端早早聊大会，前端成长的新起点，与掘金联合举办；加微信 codingdreamer 进大会专属内推群，赢在新的起跑线，第二十届|前端管理专场，2021-1-23，线上直播：

**236.** [**技术周报 · 2020 前端技术发展回顾**](https://juejin.cn/post/6917905474947907591)

> 技术周报 · 2020 前端技术发展回顾；字节前端技术周报第一期来啦\\~ 欢迎持续关注

**237.** [**前端小团队如何搞基础设施建设？**](https://juejin.cn/post/6917057999328509959)

> 我为什么会思考这个问题？这得从一篇演讲稿说起：；前端搞基建|堂主 - 如何推动前端团队的基础设施建设 - 知乎`,feishuUrl:"https://my.feishu.cn/docx/BTRQd0v1xoM4FGxtoeRcnMxKn3d"},{id:"fs-K5BddlCxKoQX3QxEv8kcFPZHnAg",category:"tech",title:"掘金收藏夹·工程化（16篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6918995853935902728 工程化：构建、规范化、CI/CD、 monorepo 等工程实践。 每篇要点与代码归档：`kb/掘金lovelybo…",body:`> 来源：https://juejin.cn/collection/6918995853935902728  
> 工程化：构建、规范化、CI/CD、 monorepo 等工程实践。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**238.** [**微前端落地，悬着的心终于放下了**](https://juejin.cn/post/6986834120290598942)

> 「本文已参与好文召集令活动，点击查看：后端、大前端双赛道投稿，2万元奖池等你挑战！」；产品提出系统要模块化，通过不同的模块组合构建我们的应用（含 12 段代码）

**239.** [**前端工程化实战 - 企业级 CLI 开发**](https://juejin.cn/post/6982215543017193502)

> 前端工程化实战 - 企业级 CLI 开发；⚠️ 本文为掘金社区首发签约文章，未获授权禁止转载（含 12 段代码）

**240.** [**解放生产力，自动化生成vue组件文档**](https://juejin.cn/post/6979142855738523679)

> 解放生产力，自动化生成vue组件文档；Vue框架在前端开发中应用广泛，当一个多人开发的Vue项目经过长期维护之后往往会沉淀出很多的公共组件，这个时候经常会出现一个人 开发了一个组件而其他维护者或新接手…（含 12 段代码）

**241.** [**经验之谈-关于实际项目微前端优化**](https://juejin.cn/post/6966189658132709390)

> 一个在某某行业为运营商提供服务的科技公司；首先会开发一个关于机器各种功能的运营系统（机器中心）（含 2 段代码）

**242.** [**【译】微前端**](https://juejin.cn/post/6964219246528167966)

> 原文地址：martinfowler.com/articles/mi…；扩展前端开发，多个前端团队同时开发一个大而复杂的产品，就更困难了（含 12 段代码）

**243.** [**钉钉前端-如何设计前端实时分析及报警系统**](https://juejin.cn/post/6961605698069381134)

> 钉钉前端-如何设计前端实时分析及报警系统；本文来自 2020年4月25日，前端早早聊第五届“前端搞监控”专场分享嘉宾 - 钉钉前端团队监控负责人 烛象(slashhuang) 的分享实录《钉钉前端-如…

**244.** [**前端智能化看“低代码/无代码”**](https://juejin.cn/post/6959794588898820127)

> 阿里巴巴集团 @大淘宝技术，服务9亿用户，赋能各行业1000万商家，作为核心技术团队保障14次双十一购物狂欢节成功；什么是低代码/无代码开发？业界对于低代码/无代码开发是否存在其他不同的理解？

**245.** [**前端智能化——图层抽象与优化**](https://juejin.cn/post/6960933940307689508)

> 在设计稿生成代码流程中，我们需要先将图层解析为UI节点，而后再通过布局算法生成代码；作为前端智能化的第一步，解析的UI数据关乎后续的代码还原质量，因此需要一套方案来保证解析阶段能输出通用而有效的UI节…（含 9 段代码）

**246.** [**前端工程化篇**](https://juejin.cn/post/6960190316427100167)

> 将一个复杂的程序依据一定的规则(规范)封装成几个块(文件), 并进行组合在一起；块的内部数据与实现是私有的, 只是向外部暴露一些接口(方法)与外部其它模块通信（含 12 段代码）

**247.** [**花半天时间，轻松打造前端CI/CD工作流**](https://juejin.cn/post/6944878021560139783)

> 花半天时间，轻松打造前端CI/CD工作流；CI/CD 是 Continuous Intergration/Continuous Deploy 的简称，翻译过来就是持续集成/持续部署（含 1 段代码）

**248.** [**前端工程化之低代码体系**](https://juejin.cn/post/6943564601694879775)

> @https://www.tuya.com/；本文由团队成员 萧凡 撰写，已授权涂鸦大前端独家使用，包括但不限于编辑、标注原创等权益

**249.** [**打造前端团队的 Vue CLI 工具**](https://juejin.cn/post/6925227362808250375)

> 打造前端团队的 Vue CLI 工具；主要功能包括基础组件,通用业务组件，网络请求库，Proxy跨域代理，Auth权限，Router路由unit,e2e测试，eslint代码规范，Mock data本…（含 12 段代码）

**250.** [**带你入门前端工程（二）：统一规范**](https://juejin.cn/post/6921524974687617037)

> 代码规范是指程序员在编码时要遵守的规则，规范的目的就是为了让程序员编写易于阅读、可维护的代码；试想一下，一个几十万行代码的项目，存在几种不同的代码规范，阅读起来是什么感受？连代码缩进使用空格还是 Ta…（含 12 段代码）

**251.** [**《带你入门前端工程》开源了**](https://juejin.cn/post/6920456879973859342)

> 这是一本关于前端工程化的小书（4W 字左右 ）；github.com/woai3c/intr…

**252.** [**「前端工程化」从0-1搭建react，ts脚手架（1.2w字超详细教程）**](https://juejin.cn/post/6919308174151385096)

> 「前端工程化」从0-1搭建react，ts脚手架（1.2w字超详细教程）；④nodejs执行终端命令 如 npm install（含 11 段代码）

**253.** [**【七日打卡】 Vue项目架构团队自动化资产生成的管理思考**](https://juejin.cn/post/6918720683807604744)

> 【七日打卡】 Vue项目架构团队自动化资产生成的管理思考；本文已授权掘金开发者社区公众号独家使用，包括但不限于编辑、标注原创等权益（含 9 段代码）`,feishuUrl:"https://my.feishu.cn/docx/K5BddlCxKoQX3QxEv8kcFPZHnAg"},{id:"fs-JKtWdo5lfofvJqxADZPc4dsontg",category:"tech",title:"掘金收藏夹·测试（2篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6922062289856118798 测试：前端单元测试与自动化测试。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各…",body:`> 来源：https://juejin.cn/collection/6922062289856118798  
> 测试：前端单元测试与自动化测试。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**254.** [**5个用于测试Vue.js应用程序的有用工具和库**](https://juejin.cn/post/6978474642562351117)

> 5个用于测试Vue.js应用程序的有用工具和库；在过去的几年中，Vue.js已成为最受欢迎的Web应用程序框架之一，考虑到它的灵活性、易用性和生产力，这并不令人惊讶

**255.** [**带你入门前端工程（四）：测试**](https://juejin.cn/post/6921969582731165704)

> 在规定的条件下对程序进行操作，以发现程序错误，衡量软件质量，并对其是否能满足设计要求进行评估的过程；也可以这样理解：测试的作用是为了提高代码质量和可维护性（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/JKtWdo5lfofvJqxADZPc4dsontg"},{id:"fs-X7T4dKN5to5awKxFZMqcT8odn2g",category:"tech",title:"掘金收藏夹·架构（7篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6923548242068127758 架构：前端架构设计与技术选型。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一…",body:`> 来源：https://juejin.cn/collection/6923548242068127758  
> 架构：前端架构设计与技术选型。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**256.** [**Vue+微前端(QianKun)落地实施和最后部署上线总结**](https://juejin.cn/post/6973156414210441247)

> Vue+微前端(QianKun)落地实施和最后部署上线总结；微前端(QianKun)落地实施和最后部署上线总结（含 12 段代码）

**257.** [**手把手教你搭建一个无框架埋点体系**](https://juejin.cn/post/6971370594117877796)

> 作者：Lilly Jiang, Aiqing Dong；一般来说，一个完整的埋点体系由以下三个部分构成：（含 12 段代码）

**258.** [**浅谈如何从状态机的角度来思考业务代码**](https://juejin.cn/post/6970898599999701005)

> 浅谈如何从状态机的角度来思考业务代码；本文通过实际业务例子举例，如何将状态机思想迁移并运用到实际业务开发场景中，从而帮助我们在开发中，简化复杂的多状态流转场景（含 6 段代码）

**259.** [**设计模式-简单易懂的观察者模式（四）**](https://juejin.cn/post/6970724597029142564)

> 设计模式-简单易懂的观察者模式（四）；这是我参与更文挑战的第2天，活动详情查看： 更文挑战（含 8 段代码）

**260.** [**设计模式这样学也太简单了吧！**](https://juejin.cn/post/6953423646664687652)

> 它是解决特定问题的一系列套路，是前辈们的代码设计经验的总结，具有一定的普遍性，可以反复使用；其目的是为了提高代码的可复用性、可读性、可维护性（含 12 段代码）

**261.** [**以前端架构师身份，从零开始搞事搞事搞事（1）**](https://juejin.cn/post/6952066955868110879)

> 以前端架构师身份，从零开始搞事搞事搞事（1）；在阿里加班加腻了的我，遂选择国企，作为人生的下一站

**262.** [**亲自动手设计一个高并发的秒杀系统**](https://juejin.cn/post/6923521556706492424)

> 有多款商品，每款商品均100件，每人限每款商品最多购买一件；在约定时间之前，只能看到产品页面，购买按钮置灰`,feishuUrl:"https://my.feishu.cn/docx/X7T4dKN5to5awKxFZMqcT8odn2g"},{id:"fs-NSXmdQ7zWoNolvxryQUcwfVMnQg",category:"tech",title:"掘金收藏夹·鸿蒙（1篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6971444400995958814 鸿蒙：HarmonyOS 开发入门。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏…",body:`> 来源：https://juejin.cn/collection/6971444400995958814  
> 鸿蒙：HarmonyOS 开发入门。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**263.** [**HarmonyOS 来了，如何开发一个鸿蒙应用，起始篇**](https://juejin.cn/post/6970820058629013541)

> HarmonyOS 来了，如何开发一个鸿蒙应用，起始篇；(万字长文，最后一个类型你一定看不懂)TypeScript 的 Utility Types，你真的懂吗？（含 12 段代码）`,feishuUrl:"https://my.feishu.cn/docx/NSXmdQ7zWoNolvxryQUcwfVMnQg"},{id:"fs-Raxdd78oSoxDcfx0MfrcKuflnOb",category:"tech",title:"掘金收藏夹·视频（5篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6949350136552095757 视频：音视频技术与处理。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收藏夹各一个 m…",body:`> 来源：https://juejin.cn/collection/6949350136552095757  
> 视频：音视频技术与处理。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**264.** [**NPlayer 支持移动、平板、桌面，高度可定制的弹幕视频播放器**](https://juejin.cn/post/6963818430885527565)

> NPlayer 支持移动、平板、桌面，高度可定制的弹幕视频播放器；NPlayer 是一个高度可定制、支持移动端、功能强大的弹幕视频播放器（含 6 段代码）

**265.** [**原来爱优腾等视频网站都是用这个来播放流媒体的**](https://juejin.cn/post/6954761121727250439)

> 原来爱优腾等视频网站都是用这个来播放流媒体的；这是从零开发弹幕播放器的第三篇，上一篇请查看 流媒体视频基础 MSE 入门 & FFmpeg 制作视频预览缩略图和 fmp4（含 12 段代码）

**266.** [**Web前端WebRTC攻略(三) 传输协议UDP/RTP/RTCP**](https://juejin.cn/post/6952849597148430344)

> Web前端WebRTC攻略(三) 传输协议UDP/RTP/RTCP；导语 | 音视频时代，WebRTC在形形色色的产品和业务场景下均有落地（含 2 段代码）

**267.** [**使用Javascript制作BadApple字符画视频 | 创作者训练营第二期**](https://juejin.cn/post/6953029932968574984)

> 使用Javascript制作BadApple字符画视频 | 创作者训练营第二期；是这样的，最近有B站的小伙伴在我某个视频下评论，让我分享一下，这个BadApple动态效果怎么做（含 12 段代码）

**268.** [**【附源码】跨界救场：如何用纯前端的方式获取视频首帧**](https://juejin.cn/post/6948585741555335176)

> 【附源码】跨界救场：如何用纯前端的方式获取视频首帧；最近在搬砖时遇到一个问题，在商详页面有些商品只有视频，没有封面图（含 10 段代码）`,feishuUrl:"https://my.feishu.cn/docx/Raxdd78oSoxDcfx0MfrcKuflnOb"},{id:"fs-QTRQdpmykorDQAx95BTcinV8nib",category:"tech",title:"掘金收藏夹·RN（1篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：https://juejin.cn/collection/6964708360566341662 RN：React Native 开发。 每篇要点与代码归档：`kb/掘金lovelybo27收藏夹269篇/`（本收…",body:`> 来源：https://juejin.cn/collection/6964708360566341662  
> RN：React Native 开发。  
> 每篇要点与代码归档：\`kb/掘金lovelybo27收藏夹269篇/\`（本收藏夹各一个 md）。

**269.** [**在腾讯我们团队做了哪些react-native的性能优化**](https://juejin.cn/post/6964607946336501797)

> 在腾讯我们团队做了哪些react-native的性能优化；这篇文章的标题可能有点大,作者的本意是想给大家分享一下在腾讯的这段时间从事 react-native 相关的工作,是如何对 react-nat…（含 3 段代码）`,feishuUrl:"https://my.feishu.cn/docx/QTRQdpmykorDQAx95BTcinV8nib"},{id:"fs-NsmFdmR6qoiqJexuml2cGJGWnZe",category:"tech",title:"掘金 lovelybo 27 收藏夹 · 全量整理总览（269篇）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"个主题收藏夹、272 篇（去重 269、抓取 269），182 万字 / 1715 个代码块，全部逐篇归档到 kb，按主题建 27 个文档。 总清单：kb/掘金-lovelybo27收藏夹全量清单.md；逐篇笔记：kb/…",body:`> 27 个主题收藏夹、272 篇（去重 269、抓取 269），182 万字 / 1715 个代码块，全部逐篇归档到 kb，按主题建 27 个文档。  
> 总清单：kb/掘金-lovelybo27收藏夹全量清单.md；逐篇笔记：kb/掘金lovelybo27收藏夹269篇/（269 个 md）。  
> Demo：CSS 收藏夹 48 篇做成「CSS 创意工坊」（32 个可运行效果 + 4 个资源卡片，public/apps/css-arts/），本地预览 127.0.0.1:9040。可视化收藏夹 11 篇为知识文章，做要点笔记不强行做 demo。3D 收藏夹与上批 webgl-showcase 重复，不重做。  
> 整理原则：能点开就玩的效果做成 demo；工具库/知识点/方法论类只做笔记与清单卡片，不强行造 demo。

| # | 主题 | 篇数 | 飞书文档 |
|-|-|-|-|
| 1 | 3D / Three.js | 12 | [打开](https://my.feishu.cn/docx/Y1K1d2RTAo1kKexEI1jckbPxnCg) |
| 2 | 业务 | 3 | [打开](https://my.feishu.cn/docx/RtOUd1tCZooy2IxXCj8cbGLznVh) |
| 3 | 项目 | 6 | [打开](https://my.feishu.cn/docx/O96GdFOT4oZO1NxglA2cWSeJnRh) |
| 4 | ES6 | 10 | [打开](https://my.feishu.cn/docx/PsFqdxNdIo8GXkxLAstcC5YMnCo) |
| 5 | 大前端 | 14 | [打开](https://my.feishu.cn/docx/QeqFdDNiYoRQZzxtmXLcL7Asn3R) |
| 6 | Node | 24 | [打开](https://my.feishu.cn/docx/VWgxdPFDLoH3NyxLRKsc5ybNnob) |
| 7 | 浏览器 | 4 | [打开](https://my.feishu.cn/docx/H3VVdwsJTonkAuxljAbcWTC1npc) |
| 8 | HTML | 3 | [打开](https://my.feishu.cn/docx/E69adPZwvoKzx4xUZrgcUvRCnJh) |
| 9 | CSS | 48 | [打开](https://my.feishu.cn/docx/SJqMdi1J4oMPDixhOdxcltyunGd) |
| 10 | 编辑器 | 14 | [打开](https://my.feishu.cn/docx/PB44dbU5Ro0Od7xpLNScMwGKnDd) |
| 11 | 网站 | 7 | [打开](https://my.feishu.cn/docx/SBS2d4ivjoPce6xH8rrcUk7vnng) |
| 12 | 性能优化 | 24 | [打开](https://my.feishu.cn/docx/BFNRdG7QboefYPxitn8ctHZMnpf) |
| 13 | 工具 | 9 | [打开](https://my.feishu.cn/docx/ETULdujJwozVB6xs3umc87UOn5c) |
| 14 | 可视化 | 11 | [打开](https://my.feishu.cn/docx/QtELdSAqWoaUmMxPtFBc11wxn4f) |
| 15 | 小程序 | 4 | [打开](https://my.feishu.cn/docx/WCtXdFJB9ofxH0x6RQkcz4G1nOc) |
| 16 | TypeScript | 10 | [打开](https://my.feishu.cn/docx/XSKjdLhAHo48rJxHfhlcM7gPnsd) |
| 17 | 源码 | 5 | [打开](https://my.feishu.cn/docx/VIcDdn9efocDqaxc1wwcydwcnoh) |
| 18 | React | 10 | [打开](https://my.feishu.cn/docx/YLATdbe26okCTFxIC0AcqbcCnyc) |
| 19 | 播放器 | 3 | [打开](https://my.feishu.cn/docx/SMNFdltnooNUx3xkfFHcCSILnlh) |
| 20 | 地图 | 2 | [打开](https://my.feishu.cn/docx/JdwZdOu06oR46oxH1xccWk6rnuf) |
| 21 | 管理 | 14 | [打开](https://my.feishu.cn/docx/BTRQd0v1xoM4FGxtoeRcnMxKn3d) |
| 22 | 工程化 | 16 | [打开](https://my.feishu.cn/docx/K5BddlCxKoQX3QxEv8kcFPZHnAg) |
| 23 | 测试 | 2 | [打开](https://my.feishu.cn/docx/JKtWdo5lfofvJqxADZPc4dsontg) |
| 24 | 架构 | 7 | [打开](https://my.feishu.cn/docx/X7T4dKN5to5awKxFZMqcT8odn2g) |
| 25 | 鸿蒙 | 1 | [打开](https://my.feishu.cn/docx/NSXmdQ7zWoNolvxryQUcwfVMnQg) |
| 26 | 视频 | 5 | [打开](https://my.feishu.cn/docx/Raxdd78oSoxDcfx0MfrcKuflnOb) |
| 27 | RN | 1 | [打开](https://my.feishu.cn/docx/QTRQdpmykorDQAx95BTcinV8nib) |`,feishuUrl:"https://my.feishu.cn/docx/NsmFdmR6qoiqJexuml2cGJGWnZe"},{id:"fs-SeLxdKGNEorASLx0PVRctQQKnLs",category:"tech",title:"掘金 lovelybo 补充 6 收藏夹 · 13 篇精选归纳",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来自 lovelybo 的 6 个补充收藏夹（语法糖 / 新功能 / 产品 / 移动端 / Nginx / 组件封装），共 13 篇，与之前整理的 27 收藏夹 269 篇零重复。全部为技术干货提炼，不放原文。这批以知识…",body:`> 来自 lovelybo 的 6 个补充收藏夹（语法糖 / 新功能 / 产品 / 移动端 / Nginx / 组件封装），共 13 篇，与之前整理的 27 收藏夹 269 篇零重复。全部为技术干货提炼，不放原文。这批以知识 / 方法论 / 实战踩坑为主，没有适合做成交互 demo 的题材，按既定规则只做知识卡片入库。


## 一、编译与工程化（4篇）

### 1. 前端也要懂编译：AST 从入门到上手指南（字节教育）

从日常工具切入：Babel 转译、CSS 预处理、代码压缩、ESLint、Prettier 的底层基石都是抽象语法树（AST）。文章讲清 AST 是什么（源码的结构化树形表示）、编译的一般流程（parse → transform → generate），并上手用 AST 做实际的代码改造。  
**可迁移点**：理解 AST 就能自己写 codemod、自动化重构、定制 lint 规则——这是从"用工具"到"造工具"的分水岭。

### 2. 设计稿（UI 视图）自动生成代码方案的探索（美团技术团队）

设计稿转代码是前端重复度最高、占比大但复杂度低的工作。早期方案是把业务组件模块化成通用视图库 + 拖拽拼接，但个性化业务下通用库覆盖不全。美团探索的是从设计稿（UI 视图）直接生成代码的自动化方案。  
**可迁移点**：D2C（Design to Code）的核心矛盾是"通用视图库的复用率"与"个性化定制"的平衡；评估这类方案要看它在真实业务里的覆盖率与可维护性。

### 11. 用 Nginx 把前端工程部署到域名的子路径上（大骆）

真实场景：产品 A 部署在域名根路径，新功能另起工程 B，但对外只有一个域名。讲如何把 B 工程挂到 \`www.xxx.com/b\` 这样的子路径上——涉及 Nginx 的 location 匹配、try_files、静态资源路径与前端路由 base 的配合。  
**可迁移点**：同域名多工程共存的通用解法 = Nginx 子路径 location 转发 + 前端路由 base 对齐 + 资源路径用绝对路径，三者缺一都会 404。

### 12. 前端 Nginx 知识梳理（黑色的枫）

面向前端的 Nginx 系统梳理：什么是 Nginx（高性能 HTTP + 反向代理 + 负载均衡服务器，事件驱动、省资源）、为什么开发/测试/预生产多环境都要用它配代理，到常用配置（反向代理、负载均衡、静态服务器、跨域处理）。  
**可迁移点**：Nginx 是前端必须掌握的"环境胶水"；把反向代理、负载均衡、静态托管三件事的配置模板存下来，比每次现查高效得多。


## 二、前端进阶实战（3篇）

### 3. 实现 Web 端指纹登录（神奇的程序员）

浏览器提供 Web Authentication API（WebAuthn），可以调用设备指纹/生物识别来做身份认证。作者把这套 API 跑通并用到自己的开源项目里，讲了从注册凭证到指纹登录的完整实现。  
**可迁移点**：WebAuthn 让 Web 端也能做免密生物认证；这是"前端能直接调用硬件安全能力"的典型案例，适合做登录体验升级的技术储备。

### 7. Console.log 日志的改造之路（cmit_zhyytFrontend）

移动端调试常用 VConsole，但低端机上日志打印过多会导致面板卡死 / 程序崩溃。文章讲如何改造 log：做日志分级与开关、批量缓冲、按需上报，避免海量同步打印拖垮性能。  
**可迁移点**：调试工具本身也可能成为性能瓶颈；生产环境的日志要有"分级 + 节流 + 开关"，不能无条件全量打印。

### 13. 从 0 到 1 搭建前端团队的组件系统（徐小夕）

市面有 Ant Design、ElementUI 等成熟组件库，B 端中台产品够用；但要服务多业务线、统一品牌与交互规范时，需要自建组件系统。文章讲从零搭建的体系：组件分层（基础 / 业务 / 区块）、规范制定、文档与调试、版本管理与发布。  
**可迁移点**：自建组件库的价值不在"再造轮子"，而在"统一设计语言 + 跨项目复用 + 降低维护成本"；先想清楚服务范围和治理机制，再动手写代码。


## 三、移动端开发（6篇）

### 5. H5 支付踩坑记（牙膏）

App 内接入第三方（微信 / 支付宝）H5 支付，作者以项目维度记录遇到的坑与处理：跳转浏览器调起支付、回跳处理、支付域名白名单配置、不同业务场景（如抽金币小游戏）的特殊问题。  
**可迁移点**：H5 支付的坑多在"配置与流程衔接"（域名白名单、回调地址、回跳体验），不在支付代码本身；对接前先把官方常见问题过一遍能省大量时间。

### 6. 中高级前端必须注意的 40 条移动端 H5 坑位指南（JowayYoung / 网易）

网易三年半移动端实战的集大成：40 条 H5 坑位，覆盖 iOS/Android 兼容、软键盘、滚动穿透、1px、安全区、点击延迟、字体、手势等。93k 阅读的高赞长文。  
**可迁移点**：当作"移动端避坑 checklist"常备；很多坑的表现是"真机才有、模拟器不复现"，所以真机回归不可替代。

### 8. Flutter 图片控件适配之路（网易云音乐技术团队）

Flutter 1.22 的图片控件缓存完全自管理、没有磁盘缓存，性能体验差。方案：利用 CDN 资源 URI 唯一的特点，直接用 URI 做缓存标识，绕过 HTTP 304 协商，节省确认请求；并补齐磁盘缓存。  
**可迁移点**：图片是带宽占比最大的资源；缓存策略的核心是"用业务上稳定的唯一标识替代协议协商"，能在正确性与性能间取得平衡。

### 9. uni 实现 App 的 H5 支付详细流程（微信、支付宝）（十一师兄）

uni-app 场景下 H5 支付的实操：安卓端需跳转浏览器调起微信支付，跳转 URL 必须是后台配置过白名单的域名；核心代码就是把拼好的 webView 地址跳转过去。  
**可迁移点**：与第 5 篇互补——一篇讲坑，一篇给最小可行代码；关键前置条件都是"支付域名在后台白名单里配好"。

### 10. 浅谈移动端开发技术（nuIl）

从 Native App 讲起，梳理 Hybrid App 的技术体系（WebView、JSBridge、离线包、RN 等），结合作者从成熟体系到从零搭建、再到接触 React Native 的经历，串起 H5 开发的全貌。  
**可迁移点**：理解移动端技术演进（Native → Hybrid → RN / Flutter）的脉络，才能判断什么场景该用什么方案，而不是盲目追新。


## 四、职业认知（1篇）

### 4. 年薪千万的产品经理打开了我对这个职位的新认知（冰_河）

作者结识一位大厂年薪近千万的产品经理，刷新了对"产品经理"的认知：只画原型远不等于产品经理。真正的产品经理要懂用户、懂商业、懂取舍，对需求和结果负责。  
**注意**：偏职场感悟、带个人色彩，干货密度低于技术篇；价值在"别把岗位等同于最表面的产出"这个提醒。


## 五、说明

- **入库范围**：6 个收藏夹全量 13 篇，与之前 lovelybo 27 收藏夹 269 篇做 ID + 标题双重去重，零重复。
- **处理方式**：按既定规则，知识 / 方法论 / 实战类只做笔记卡片，不做交互 demo；本批无适合"点开就玩"的题材。
- **本地笔记**：\`kb/掘金lovelybo新6收藏夹13篇/\`（每篇一个 md，含要点与核心代码）。
- **清单**：\`kb/掘金lovelybo新6收藏夹清单.md\`。`,feishuUrl:"https://my.feishu.cn/docx/SeLxdKGNEorASLx0PVRctQQKnLs"},{id:"fs-T3zPdyenOoUN7NxrKfkckUVbnwb",category:"tech",title:"AI 复刻可交互 3D 书房 · Liquid Glass 三个开源 Skill 拆解",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"一句话 Meng To 用 AI（文中称 GPT-6.2 Astra）一把复刻出可交互 Three.js 书房——桌上物件基本都能点、笔也有反馈、点 Sunset 全屋光影变暖。真正的价值不在效果本身，而在他开源了三个「…",body:`## 一句话

Meng To 用 AI（文中称 GPT-6.2 Astra）一把复刻出可交互 Three.js 书房——桌上物件基本都能点、笔也有反馈、点 Sunset 全屋光影变暖。真正的价值不在效果本身，而在他开源了三个「给 coding agent 用的可复用操作手册」（skill），把验证过的流程沉淀成资产。

## 来源信息

- 文章：微信公众号「SuperMMM / 初识Threejs」，原创 SuperMMM，2026-11-24 08:00 河南
- 在线 demo：https://threeui.com/studio-glass （点 Sunset 切光影，桌上物件可交互）
- 开源仓库：https://github.com/MengTo/Skills （作者 MengTo = DesignCode 创始人，真实）
- 文中三个 skill 路径：

  - \`agent-skills/ui/refract-liquid-glass\`
  - \`agent-skills/ui/shade-glass-button-press\`
  - \`agent-skills/3d/light-a-threejs-workspace\`
- 核实状态：三个目录 2026-11-22 均真实提交，各有 SKILL.md + demo，下方手法摘自原文 SKILL.md，非臆测。

## 文章核心观点

1. **交互密度才是差距**：能看 ≠ 能玩。桌上每样东西都能点、都有反馈，这是拉开差距的地方。
2. **Liquid Glass + 光照联动**这类细节最能提升产品质感（点 Sunset 整个房间光影变暖）。
3. **沉淀 skill 比单纯炫技更有长期价值**：把验证过的流程做成可复用手册，喂给模型就能提高下次成功率。
4. **「大模型时代的古法编程」**：作者自陈 Astra 默认表现一般、但上限很高，需要精心引导、反复对比参考、持续修正。你得懂什么是好效果，才能指挥模型往那儿走。
5. 做 Three.js 的瓶颈已从「会不会写 shader」变成「会不会用 AI 高效产出高质量 3D 交互」。

## 三个开源 Skill 拆解（干货）

### 1. refract-liquid-glass · 折射液态玻璃面板

做出能拖动的锐利玻璃面板，透过圆角玻璃唇折射实时背景。

- **先定视觉测试靶**：把面板跨在细斜线、亮窗框、暗表面上，检验线条能否透过面板仍可辨、在肩部弯曲、在边缘外接回原场景。
- **渲染透镜**：画玻璃前先把背景渲染到纹理（Three.js 可共用线性色 render target）；按 CSS 像素测 DOM rect，用圆角盒 signed distance + 屏幕导数算覆盖，高曲率剖面只留给「肩部」，平面保留细节。
- **折射核心代码**（视线朝向法线、入射沿 -Z、厚度按 CSS 像素）：

  \`\`\`glsl
  vec3 ray = refract(vec3(0., 0., -1.), normal, 1. / 1.46);
  vec2 offsetPx = thicknessPx * ray.xy / max(-ray.z, 0.15);
  vec2 sampleUV = (fragmentPx + offsetPx) / viewportPx;
  \`\`\`
- **反射**：沿边缘法线更远处采样反射色，掠射角加大贡献；hover 局部改变反射与视厚度。先在明暗两种背景上调边缘强度。
- **拖动回弹**：标题/把手捕获指针；玻璃、图标、文字、命中坐标共用同一显示变换；远端边缘用阻尼弹簧滞后；减弱动态效果时抑制振荡。

### 2. shade-glass-button-press · 玻璃按钮按压反馈

把「接触 / 激活 / 释放」当三个独立事件，原生 button 负责激活与键盘语义，shader 只收接触点和时钟。

- **按住**：pointer down 存局部接触点；用高斯衰减在接触处压凹表面、降低光学厚度；保留键盘焦点环，Space/Enter 用按钮中心作接触点走同一激活路径。
- **释放波**：所有距离在同一物理空间算（归一化 UV 乘按钮尺寸再测半径，宽按钮和方按钮波才一致）。

  \`\`\`glsl
  vec2 delta = (uv - contactUV) * buttonSize;
  float reach = length(max(contactUV, 1. - contactUV) * buttonSize);
  float travel = (1. - pow(1. - t, 1.7)) * (reach + bandWidth);
  float d = (length(delta) - travel) / bandWidth;
  float crest = exp(-d*d);
  float wake = exp(-pow((d + 1.1) / 1.6, 2.));
  \`\`\`
- **泛光/色散**：波峰处采样相邻 RGB 做短暂光谱分离；边缘距离门控高光让波抵达时边缘吃光；释放约 700–1000ms。玻璃、图标、文字共用一个时钟；新点击替换该按钮上一次波。

### 3. light-a-threejs-workspace · Three.js 书房布光

核心：可调百叶窗在程序化书桌上投下可见光束（体积散射在遇到第一个不透明表面处停止）。

- **场景清单**：窗墙、胡桃木书桌、显示器、机械键盘、植物、台灯；木纹和屏幕壁纸本地生成。
- **关键约束**：同一太阳角 + 百叶间距投阴影、在可见空气中集成散射直到第一个不透明表面；暴露「百叶开合」滑杆同时驱动阴影与光束；相机摆到百叶、书桌、显示器同框；屏幕后放哑光墙；木纹沿长度方向一致。
- **检验法**：关百叶看桌面光斑变化；相机滑过屏幕边缘检查光束是否在第一个不透明面处截断。
- **Remix 提示词**：把窗移到显示器后、改成雨夜阅读室。

## 对自己的启发（webgl-showcase 可借鉴）

- 这三个 skill 的手法（折射玻璃、按压波、百叶体积光）都能拆成独立 Three.js demo，比整屋复刻更可控，适合补进 webgl-showcase。
- 「先定视觉测试靶 → 再调参数 → 明暗两种背景都验一遍」的验证习惯，可直接套用到任何 shader 效果的质量把控。
- Skill 化思路：做完一个效果就把「提示词 + 关键代码 + 检验法」存一份，下次让 AI 复用——这正是我这套 kb/飞书沉淀要解决的问题。
- 注意：文中「GPT-6.2 Astra」是作者说法，未独立核实；但 skill 与 demo 真实可查，价值不依赖具体模型版本。

## 可迁移点 / 一句话可记住

- 可迁移点：把「验证过的流程」写成 SKILL.md（触发条件 + 核心代码 + 检验法）喂给 agent，比每次从零描述需求成功率高得多。
- 可记住：能看 ≠ 能玩，交互密度决定 3D 产品的档次；而 skill 沉淀决定你能不能稳定复现好效果。`,feishuUrl:"https://my.feishu.cn/docx/T3zPdyenOoUN7NxrKfkckUVbnwb"},{id:"fs-Z5DvdmhQsoMuGPx37xccVJiWn6c",category:"tech",title:"dsh-image-gen · 给 DeepSeek Harness 装上图像创作工作流",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：微信公众号「开源星探」2026-11-25 文章，GitHub 已核实：https://github.com/shanliuling/dsh-image-gen （作者 shanliuling，Apache-2.0…",body:`> 来源：微信公众号「开源星探」2026-11-25 文章，GitHub 已核实：https://github.com/shanliuling/dsh-image-gen （作者 shanliuling，Apache-2.0，1.7K+ Star，GitHub Trending TypeScript 日榜第 8，最近提交 2026-11-24）。  
> 类型：工具 / 资讯。按规则只做笔记，不做 demo（它是 DSH 插件，不是网页交互题材）。

## 一句话

**DeepSeek Harness（DSH，"一切皆插件"的智能体框架）的原生图像创作插件。** 它不是在对话框塞个"生图"按钮，而是让 Agent 本身学会画图——能一次规划生成一整组图、能看懂画布上的涂鸦和圈选、能自己去灵感库找风格模板。已有 ChatGPT/Grok/Google 订阅的话，直接登录就能用，**不用买 API Key**。

## 解决什么痛点

DSH 架构很灵活（模型、工具、存储都是插件），但原生图像能力弱——想在对话里直接出图/改图，要么跳去别的应用，要么自己折腾各种 API。这个插件把"生图→编辑→管理"整条链路原生融进 Agent 对话。

## 八大核心能力

1. **对话批量生图**：一句话描述数量和统一要求，Agent 自己拆成多条 Prompt 逐张生成，**单次最多 10 张**，整组附在同一条回复里。比例/清晰度/模型可统一指定；单张失败不影响其余，最后报"成功 X/共 Y"并列出失败原因。配图、分镜、系列插画、变体适用。（区别于 Studio 批量：Studio 是同一 Prompt 出多张候选让你挑）
2. **看得懂草图的 AI 画布**（基于 tldraw 无限画布）：Agent 能读画布内容和当前选区——草图→成图（画个火柴人说"生成二次元剑士"）、圈哪改哪（圈出剑说"换成斧头"只改局部）、组合参考（多图选中作参考，重复导入自动去重）。每步结果留画布上可继续迭代。
3. **GIF 动图**：GPT Image 2.6 等模型直接生成循环动画，对话卡片播放、调倍速（0.2×–2×）、逐帧时间轴；**按帧写评论修改**——在画面点位置写意见，评论只显示在那一帧，一次发送重绘整段，新结果作新版本保留（仅 OpenAI/兼容渠道）。还能输出 SVG 矢量（文生图，OpenAI 渠道）。
4. **500+ Prompt 灵感库**：手绘风格手册 + awesome-gpt-image-2 案例集。对话里点名"用风格 #123""莫兰迪色系""信息图排版"，Agent 先检索模板再套主题出图；风格/排版/主题色可组合。图片本地缓存，浏览学习不耗 Token。
5. **Studio 工作台**：不用对话、精细调参——Provider/模型/比例/质量/水印全摆出来，一次出 1–4 张候选，满意的才存；可从灵感库带入 Prompt，或拖历史图进来"继续编辑（垫图）"作图生图参考（最多 5 张）。
6. **多模型横向对比**：同一组 Prompt+参考图并发调多个模型，铺一张画布对比。
7. **图库管理**：统一管理对话和 Studio 保存的图，按工作区隔离，支持搜索/筛选/收藏/下载/再编辑/批量管理。
8. **本地 ComfyUI 多工作流**：有本地 GPU 就能调用，导入多个命名工作流，Agent 按名称选；支持文生图/图生图/批量。占位符 \`{{prompt}}{{seed}}\`，宽高写 \`{{width}}\`/\`{{height}}\`，图生图 LoadImage 写 \`{{image}}\`。**角色一致性**：说"保持这个角色换到雪地"，模型沿用同一主体只改场景/服装/姿势/风格。

## 支持的 Provider（全覆盖）

Google Gemini · OpenAI Images / Compatible · ByteDance Seedream（火山方舟）· Aliyun DashScope（Qwen Image）· xAI Grok Imagine · 智谱 GLM-Image · 本地 ComfyUI，外加 **ChatGPT / Grok / Google 订阅通道（免 Key）**。

- 云端 Provider + 订阅通道：对话生图/批量/Studio/多模型对比都支持。
- GIF：仅 OpenAI 官方与兼容中转（ChatGPT 订阅接口暂不支持 GIF）。
- 智谱 GLM-Image 上游不支持图生图；ComfyUI 暂未接入 Studio 和多模型对比。

## 安装与配置

环境：DSH 稳定版 + Node.js \`^22.19.0\` 或 \`>= 24.0.0\`。在 DSH 项目根目录：

\`\`\`bash
pnpm dsh plugin --profile web add dsh-image-gen@latest
# GitHub 直装最新：
pnpm dsh plugin --profile web add git+https://github.com/shanliuling/dsh-image-gen.git
# 也可在 DSH 对话里直接说"帮我安装生图插件"
\`\`\`

重启后：左侧栏「插件」→「已安装」→ dsh-image-gen → 选 Provider / 填 Key（或订阅登录）/ 调模型端点 → 「测试连接」或「拉取模型」。0.1.5 及更早版本入口在「设置 → 插件 → 插件配置 → 图像生成」。

## 值得注意的坑

- **HTTPS 部署无限画布需 tldraw License Key**：tldraw 5 在 HTTPS 非 localhost 强制校验许可证，不配会在约 5 秒后停止渲染（localhost/开发环境不受影响，其他生图功能正常）。tldraw.dev 有 100 天试用。字段 \`tldrawLicenseKey\`。
- **安全加固项默认关闭**：\`strictImageDownloads\`（强制公网 HTTPS 443、校验并固定 DNS、不跟随重定向、限制图片大小）、\`requireHostAdmission\`（宿主 admission 异常时 Web 路由一律 503）。当前未提供完整 SSRF 目标限制——对安全敏感的场景要注意。
- **数据与隐私**：API Key / 订阅令牌存 DSH Credentials，浏览器侧不接触；Prompt 和参考图会发给所选 Provider；图库元数据存浏览器本地存储。
- GitHub 安装若 pnpm 拦截构建脚本（\`ERR_PNPM_GIT_DEP_PREPARE_NOT_ALLOWED\`），在 profile 的 \`pnpm-workspace.yaml\` 把提示的键加入 \`allowBuilds: true\`。

## 可借鉴 / 与我的关系

- 这是"把能力原生融进 Agent 工作流"的设计范例，不是外挂按钮——和我关注的"把流程沉淀成可复用 skill"思路一致（对比之前记的 MengTo 三个 skill）。
- 如果以后要给网站做 AI 生图相关 demo，这套 Provider 抽象（订阅免 Key + BYOK + 本地 ComfyUI 三层）值得参考。
- 它是 DSH 生态插件，和网站现有 demo 体系无关，本次不做 demo。

原文：https://mp.weixin.qq.com/s/AgP1ca8-iblaSWigIMjGDg`,feishuUrl:"https://my.feishu.cn/docx/Z5DvdmhQsoMuGPx37xccVJiWn6c"},{id:"fs-NvYydIWf4oHnYLxydpQc94YCnle",category:"tech",title:"Casa Serra · 滚动网页时，平面图长成真实的 3D 房子",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：微信公众号「初识Threejs」2026-11-26 文章（作者 SuperMMM），GitHub 已核实：https://github.com/Sam1983Aing/casa-serra （Lintel · C…",body:`> 来源：微信公众号「初识Threejs」2026-11-26 文章（作者 SuperMMM），GitHub 已核实：https://github.com/Sam1983Aing/casa-serra （Lintel · Casa Serra，Work in progress，真实存在）。  
> 类型：可交互 3D 效果 / AI Coding 方法论。按规则：3D 可交互题材 → 做 demo（已落地 webgl-showcase「滚动建屋 · Casa Serra 复刻」），并做笔记入库。

## 一句话

打开网页是一张建筑平面图；向下滚动，墙从图纸里"长"起来变成立体房子，镜头从俯视降到人眼高度、沿预定路线从大门走进房间，每走近一个房间，线稿才渐变成真实材质与光照。滚动本身就是交互控制器，整页是一个由滚动驱动的建模动画，不是播放视频。

## 它是怎么实现的（四步叙事）

1. **平面图不是图片，是真实 3D 模型**：作者对模型在 1.2 米高度做剖切，用很长的镜头从正上方看，得到"平面图"效果。图纸和最终房子是同一个模型。
2. **墙壁逐渐升起**：滚动改变剖切高度 → 墙从视野外显现，二维视觉过渡到三维空间。调整的是真实 3D 场景里的几何和相机，不是视频。
3. **镜头进入房屋**：建筑结构完整后，相机不再绕房子转，而是沿预先规划的路径从入口进入，逐房间穿过。
4. **房间渐获材质**：每个房间一开始只是线稿，镜头接近时才切换到真实材质和光照，形成明确的叙事节奏。

## 技术栈（核心就三个，纯文件无构建）

- **Three.js**：3D 场景、几何体、材质、相机。
- **GSAP ScrollTrigger**：把页面滚动进度与动画进度绑定。
- **Lenis**：平滑滚动。
- 没有用 Blender——看到的几何结构全部用代码生成。
- 材质纹理来自 Poly Haven，免费 CC0 扫描资源（https://polyhaven.com）。
- 普通 JS 文件，无构建工具（build step）。

## 性能与降级（真实成本）

- 纹理资源：笔记本约 39MB，手机约 13MB。
- 目前是早期版本，主要针对笔记本优化。
- 移动端/低性能设备降级为静态图片 + 漫游视频。
- 启发：复杂 WebGL 页除了视觉效果，必须考虑加载性能和设备兼容性。

## 真正值得关注：AI Coding 过程

作者在 README 公开了开发过程，这才是精髓：

- **不是一条提示词生成**：约 2 周、约 70 次提示词、4 个完整版本，工具是 Claude Code + Opus 5.5。
- 灵感来自一个旧游戏网站的视频；"平面图"的点子是开发第 4 天才定下来的。
- 公开了一份可复用的初始提示词，最关键的要求：**写代码之前先提出建筑布局方案（房间尺寸、相机移动路线），给 2–3 个方向让用户选，等用户回答**；然后分阶段开发，**第一阶段只做"平面图 + 墙升起 + 走进第一个房间"，录屏给用户看，再继续**。
- 方法论：先定设计再拆任务；先完成一个可验证的阶段再逐步扩展。单纯给 AI 一个复杂视觉目标很难保证效果，拆成具体视觉阶段更好控制。
- 实测：一份 starter prompt 在全新会话跑一次，给出 3 个布局并等待，用户回一行，约 1 小时后交出第一个 checkpoint（平面图 + 墙升起 + 走进第一间）。

## 可复用提示词（原文要点）

\`\`\`
我想为 [建筑事务所 / 一栋房子 / 酒店 / 你的主题] 做一个滚动驱动的落地页。
打开页面是一张建筑平面图，像打印的设计图：纸上的黑色墨线、房间名、尺寸，看起来完全不 3D。
向下滚动，墙从图纸里升起，相机降到大门口，以人眼高度依次走过 [房间顺序]。
每个房间保持线稿，直到镜头到达才扫上真实材质。

我在意：
- 平面图不是图片，是真实的 3D 模型，约 1.2m 剖切、长焦从正上方看；图纸和建筑是同一个东西。
- 相机深入空间、一间又一间，不是从外面绕着房子转。
- 要感觉像 [价值数百万的房子 / 你的期望水准]：大房间、真实家具、午后斜光。
- three.js + GSAP ScrollTrigger + Lenis，纯文件无构建；材质用免费 CC0。

写代码前，先提出建筑布局（给出我能想象的尺寸）和逐站相机路径，给 2-3 个方向等我选择。
然后分 checkpoint 开发。第一个 checkpoint 只做：平面图、墙升起、走进第一间。录屏给我看再继续。
\`\`\`

最后一段和创意本身同等重要——没有它，你会得到一个你没参与选择的成品。

## 借鉴价值与适用场景

- 传统网页滚动用于浏览内容；这个项目把滚动变成交互控制器：平面图立体化、墙向上生长、相机俯视→第一人称、按路线穿房、房间逐加载材质光照。
- 适合：建筑展示、房地产营销（先户型图→生成结构→进入室内看客厅卧室厨房）、室内设计、数字展厅、产品介绍。比图片轮播/视频更有参与感。

## 资源链接

- GitHub 源码（发布版，脚本已压缩）：https://github.com/Sam1983Aing/casa-serra
- 开发版源码（可读）：https://github.com/Sam1983Aing/casa-larga
- 在线预览：https://sam1983aing.github.io/casa-serra/
- 一份提示词实测结果：https://sam1983aing.github.io/casa-larga/
- 起始提示词原文：https://github.com/Sam1983Aing/casa-serra/blob/main/starter-prompt.md
- Poly Haven 纹理：https://polyhaven.com/

## 本地落地

webgl-showcase 新增 demo「滚动建屋 · Casa Serra 复刻」：共享舞台无真实滚动，用滑块代理"滚动进度"，代码生成一栋带多房间的房子，剖切高度驱动墙升起、相机从俯视切到沿路径穿行、房间线稿渐变为材质。原文链接已挂在 demo 卡片上。`,feishuUrl:"https://my.feishu.cn/docx/NvYydIWf4oHnYLxydpQc94YCnle"},{id:"fs-P0v1d5d8ooEepmxa5UEcbM3an4b",category:"tech",title:"手把手用 WorkBuddy 从 0 做一个 3D 英语小游戏（附完整流程）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：微信公众号「朱又拌饭」（拌饭 AI）2026-11-25 文章。 类型：方法论 / 教程。核心价值是「用 AI 分步迭代做游戏」的完整工作流与每步可复用提示词，不是单个可玩特效，按规则只做笔记，不做 demo。 一…",body:`> 来源：微信公众号「朱又拌饭」（拌饭 AI）2026-11-25 文章。  
> 类型：方法论 / 教程。核心价值是「用 AI 分步迭代做游戏」的完整工作流与每步可复用提示词，不是单个可玩特效，按规则只做笔记，不做 demo。

## 一句话

把枯燥的英语单词跟读，做成「3D 英语小商店」：小朋友扮店员，听顾客英语点单 → 从货架选对商品赚金币 → 金币解锁宠物。文章手把手从新建文件夹讲到发布成手机可打开的在线网页，全程用 WorkBuddy 迭代。

## 整体工作流（五步）

1. **做出第一版**：新建项目 → Plan 模式梳理需求 → 聊出实施计划 → 执行约 40 分钟 → 试玩跑通。
2. **更换素材**：确认画风（先画一张）→ 批量生图 → 替换 → 修 bug → 补满货架。
3. **增加关卡**：加主题、分章节、设关卡梯度。
4. **开宠物店**：金币解锁宠物 + 帧动画 + 背景音乐。
5. **发布**：导出单文件 HTML → 发布在线网页 → 手机实测。

## 第一步：做出第一版

### 新建项目

- 新建文件夹，后续所有代码/图片/声音都放这里。
- WorkBuddy 输入框下方「选择分组」→「选择本地文件夹」，选中该文件夹。老版本叫「选择工作空间」，本质是为项目指定专门存文件的地方。

### 用 Plan 模式（关键）

- 不急着开工。输入框旁加号 →「模式」→ 打开「计划 Plan」。它会先讨论需求、整理方案，确认后再执行。
- 作者刻意不直接丢一段超长提示词，而是带大家一步步聊需求、改提示词——因为很多人看完长提示词还是不知道它怎么来的。
- 第一版提示词只需说出想法，边聊边补：

\`\`\`
我想做一个给小孩子玩的 3D 英语小商店：听顾客需求，挑对商品赚金币，以后还想加宠物。先帮我简单规划一下怎么做、需要准备什么。第一版只做水果，先把游戏跑起来，具体内容可以继续和我讨论。
\`\`\`

- 计划模式会给选择题梳理需求：做成浏览器网页 / 微信小程序 / 本地应用？点单需求怎么呈现（语音+图片卡 / 语音+英文字幕 / 只播放声音）？作者选浏览器网页（方便后面上传云端）。
- 然后给一份实施计划文档（完整流程+技术方案）。专业名词看不懂没关系，只要确认游戏流程对不对：拿错水果怎么办、什么时候加金币，不合适就继续改。
- 确认后让它执行，约 40 分钟出第一版。

### 试玩初版

- 先测流程是否正常：选商品后金币是否增加、英语播放是否正常。
- 第一版人物形象（粉色）可爱，水果造型是代码生成的、较简单，但已有可操作版本。

## 第二步：更换水果素材

### 先确认画风（先画一张，别批量）

- 在小红书收集英语单词图片作参考。
- 先让它画一张苹果确认风格：

\`\`\`
我希望使用生图模型做一些水果素材，来替换现有的代码做的水果素材。先给我画一张苹果的商品素材，卡通玩具风格，不带文字。等我确定风格之后，再做其他商品素材。
\`\`\`

- 第一次出的是圆滚滚卡通玩具风、带小表情，合适。风格确定后再照着生成其他水果。**先看一张觉得合适再继续，免得一口气生成一堆不满意要全部返工**。生图额外消耗积分，省着用。

### 替换 + 验收

- 让 WorkBuddy 替换现有水果，回游戏看实际效果：大小合不合适、有没有被货架挡住、图片边缘是否突兀。

### 修阴影 bug（截图反馈）

- 换素材后发现水果下有阴影在动 → 直接截图发给 WorkBuddy 问原因 → 确认是真 bug 并修好。
- 理念：**每次 AI 说做完了，最后还得自己检查，点一点、看一看，发现问题就截图继续改**。

### 补满货架

- 从 3 个水果加到 9 个，增加货架、摆不同水果，才像正经水果店。

## 第三步：增加文具关卡

\`\`\`
我需要增加一个文具主题，然后设置不同的章节：第一个章节是水果，第二个章节是文具。每一个章节有不同的关卡，第一关的话只有两个单词，第二关 4 个，第三关 6 个，第四关 9 个，可以不断地升级。文具素材使用生图模型，参考水果的素材。
\`\`\`

- 两个主题分成不同章节，每章节再设关卡，每关商品数量不同（2→4→6→9 递增）。文具画风参考水果，保持小店统一。
- 后续想加生活用品/玩具主题，有现成例子可参考。**先加自己需要的一类，不用一开始就做完整张单词表**。
- 加完记得听一听、点一点，确认单词、读音、图片对应上。

## 第四步：开宠物店

- 痛点：顾客给金币但数字没用处 → 开宠物店让金币有去处。
- 用金币购买、解锁宠物，带进商店在旁边活动。
- 把想要的互动和参考图一起发给 WorkBuddy，让它准备宠物的**帧动画素材**（几张动作略变的图片按顺序连播，如小狗的腿每张位置不同，连起来像走路）。
- 帧动画可有可无：想让小动物动起来才做；只想做宠物图鉴（图片展示+花金币解锁）就不必。
- 补背景音乐：注意别太抢戏，要能听清顾客说英语。

## 第五步：发布游戏

\`\`\`
将整个游戏导出成一个单文件 HTML，包含所有的图片、音频。并将这个文件发布成在线网页，可以让手机通过链接打开。
\`\`\`

- 单文件是为了任何浏览器直接打开；也可按原文件结构发布。合并后打不开就让它检查图片/音频资源，不用硬凑单文件。
- 发布后拿在线链接。找回路径：WorkBuddy 左下角头像 →「设置」→「数据管理」→「应用」，看到发布的游戏。
- 打开应用，右上角分享按钮 → 分享到微信 → 手机直接打开。
- **发布后一定用自己手机/平板实测**：商品能不能点、英语能不能听到、买宠物有没有扣金币，别只看电脑正常就结束。

## 方法论提炼（最值得记的）

1. **先聊需求再动手**：用 Plan 模式，不直接丢超长提示词；把"怎么来的"过程走一遍。
2. **先做最小可跑版本**：第一版只做水果、先跑起来，具体内容边聊边补。
3. **先确认一个样本再批量**：风格先画一张确认，合适再生成其他，省积分、防返工。
4. **分步迭代、同类复用**：先加一类主题做范例，后续主题照着加；每个阶段做完就听一听点一点验收。
5. **AI 说做完要自己复核**：发现问题截图反馈继续改。
6. **真机验收**：发布后手机/平板实测交互与声音，不只信电脑端。
7. **技术平权**：家长可自己动手做适合孩子的学习工具，也可带孩子看游戏怎么做出来，让他早接触 AI。

## 备注

这篇与 Casa Serra 那篇不同：Casa Serra 是单个可交互 3D 效果（已做 webgl demo），这篇是完整游戏应用的方法论教程，不适合做成共享舞台里的单个 demo，按"知识/方法论"只做笔记入库。若日后要做同款「3D 英语小商店」游戏（独立应用），可另立项目。`,feishuUrl:"https://my.feishu.cn/docx/P0v1d5d8ooEepmxa5UEcbM3an4b"},{id:"fs-Rgt9dPhHboiIgAxBovxcvcjZnfe",category:"tech",title:"一篇教会你用 WorkBuddy 实现「积分自由」：一个 Skill + 定时全自动签到领积分",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：微信公众号「史迪仔AI笔记」2026-11-21 文章。 类型：方法论 / 教程。核心价值是「用 Skill + 定时任务把重复签到自动化」的工作流与避坑点，不是可交互特效，按规则只做笔记，不做 demo。 一句话…",body:`> 来源：微信公众号「史迪仔AI笔记」2026-11-21 文章。  
> 类型：方法论 / 教程。核心价值是「用 Skill + 定时任务把重复签到自动化」的工作流与避坑点，不是可交互特效，按规则只做笔记，不做 demo。

## 一句话

把每天手工签到这种「点一下就忘」的事交给 WorkBuddy：装一个签到 Skill，手动跑通验证，再配两条早上 9 点的定时任务，实现每天自动签到、汇报积分，并自动把「猫猫旅行」派出去、到站领奖励。

## 核心思路

签到打卡这类重复小事最适合自动化。作者用下来总结成一条链路：

**找 Skill → 手动跑通验证 → 配定时任务 → 注意模型成本**

## 分步方法（含原文要点）

### 第一步：找对 Skill（别被同名坑）

- 直接开一个对话，把需求说清楚，让 WorkBuddy 帮忙筛选 Skill，一次选中。
- 需求要说全：一个能自动签到的、还能顺便把「猫猫旅行」派出去的（到点派猫出门、到站领奖励）。
- 坑：同名技能一大堆，看到「签到助手」就急着装容易选错。让 AI 帮你筛更稳。

### 第二步：装上先手动跑一遍（关键验证）

- 别急着设定时。先手动执行一次，看它能不能真的读到状态。
- 作者实测输出：今日已签到、连签 8 天、余额 800 分，猫猫已在路上、4 小时后到站、能领 7 分。
- 判断标准：链路真的通了（状态读得到、动作能执行），才敢往下配定时。

### 第三步：配两条定时任务

两条都定在早上 9 点：

1. **签到汇报积分**：自动签到并汇报当前积分。
2. **检查猫猫旅行**：到站就领奖励，闲着就派出去，在路上就不动它。

### 第四步：模型选择（最要紧的一句）

- 定时任务用什么模型生成，后面基本就用什么模型跑。
- 建议挑免费的或限免的模型，否则签到赚的那点积分还不够模型烧的。

## 方法论提炼（可复用）

1. **重复小事自动化**：签到、打卡这类「简单但易忘」的任务，是 Skill + 定时任务的最佳场景。
2. **让 AI 帮你选 Skill**：同名技能多时，说清需求让 AI 筛，别凭名字装。
3. **手动跑通再定时**：先验证状态能读到、链路通，再交给定时任务，避免定时跑空。
4. **定时任务分职责**：签到汇报一条、业务检查一条，各自独立、时间错开或统一。
5. **算清模型账**：定时任务按生成时用的模型跑，用免费/限免模型，别让成本吃掉收益。
6. **状态判断要写清**：像猫猫旅行这种「到站领 / 闲着派 / 路上不动」的三态逻辑，要在需求里说明，AI 才能正确自动化。

## 备注

- 作者把方法都做成了知识图卡，推荐读者照着试。
- 实际收益因账号状态（连签天数、猫猫旅行奖励）而异，文中数字为作者实测示例（连签 8 天、800 分、猫猫 4 小时到站领 7 分）。
- 本文属工具/方法论，未做 demo，未 build/push。`,feishuUrl:"https://my.feishu.cn/docx/Rgt9dPhHboiIgAxBovxcvcjZnfe"},{id:"fs-TquCdEffUonCvJxXyxLcZ5LhnBc",category:"tech",title:"handraw-style：手绘风格与排版图型提示词 Skill 库",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：GitHub 仓库 https://github.com/yang0/handraw-style （作者 yang0）。 类型：工具 / Skill 资源。按用户规则「Skill 要完整保存才可用」→ 完整克隆仓库…",body:`> 来源：GitHub 仓库 [https://github.com/yang0/handraw-style](https://github.com/yang0/handraw-style) （作者 yang0）。  
> 类型：工具 / Skill 资源。按用户规则「Skill 要完整保存才可用」→ 完整克隆仓库到 \`kb/handraw-style-skill/\`，并整理笔记入库飞书；不做网站 demo（这是提示词工具箱，非可交互特效），未 build/push。

## 一句话

不会描述画风、排不好版式？选个编号就能一键生成中英双语生图提示词。收录 **365 种手绘/写实视觉风格（#001–#372）、170 种排版图型、36 种经典单色主题**，直接复制到 Midjourney / DALL-E 3 / Stable Diffusion / Flux 出图。

## 仓库信息（核实于 2026-11-26）

- Star 8168 / Fork 957，默认分支 master，最近推送 2026-11-23，仍在高频更新（v1.9.13）。
- 许可：作者自定义，允许自由使用/修改/商业化，唯一要求是保留作者 yang0 与原仓库地址。
- 体积约 438MB（主要是图片画廊与参考图）。
- 官方飞书知识库：https://ecmn3m3i17.feishu.cn/wiki/space/7689222460876524523
- 被 HelloGitHub 收录（Featured）。

## 解决的痛点

| 创作痛点 | 本库方案 |
|-|-|
| 画风描述模糊、每次生成漂移 | 编号化精准激活：365 种手绘插画+写实摄影风格（FA\\~FI / 001–365），告别「可爱一点」玄学生图 |
| 版式单调、排不好社媒长图 | 170 种排版图型：24 社媒卡 + 38 信息图 + 71 漫画分镜 + 13 IP设计 + 24 电商 |
| 色彩杂乱、缺统领基调 | 36 种经典单色：克莱因蓝、鼠尾草绿、爱马仕橙、佩恩灰等 |
| 图文不搭、文字塞不进画面 | 纯图模式 / 图文一体模式切换 |
| 模型画风锁死或识别不了 | 模型能力分层 + 参考图兜底（model_capabilities.json 标定） |
| 封面难出彩、文案画面脱节 | 文章/视频封面设计器：自动提炼 200 字摘要+受众画像，先隐喻后出图 |
| 长文插图风格杂乱 | 长文配图规划 + 一键批量生图 + Markdown 自动回填 |
| 摄影企划繁杂、AI 人像难控 | 10+ 拍摄类型时空分镜编排，首轮出 3 套方案 + 8 宫格提示词 |

## 三种核心用法

1. **智能推荐模式（零门槛）**：不指定编号，直接说画什么。Skill 按主题情绪/氛围/场景自动匹配风格 + 主题色（附理由），输出双语提示词。

   - 例：\`帮我生成猫咪在窗台晒太阳的治愈插画提示词，你帮我选风格和主题色\`
   - 补齐模式：只给风格→自动配主题色；只给主题色→自动配画风。
2. **精准指定模式**：翻 STYLES.md / LAYOUTS.md / COLORS.md 选编号，组合输入。

   - 例：\`图型：SC-001，风格：FB-006，主题色：C-01，主题：秋天的第一杯奶茶\`
3. **AI 海报设计模式**：结构化极简提示词，原生图文一体排版。

## 关键设计原则（值得借鉴）

- **默认智能推荐、严禁写死映射**：不许维护「节气→固定编号」的静态表，每次由 AI 结合主题深层语境在全库开放动态搭配，理由要具象化到笔触/质感/情绪。
- **模型能力分层**：按 model_capabilities.json 判断何时需要输出核心特征、何时需要编号参考图；强激活风格（如 Beatrix Potter）只给作者名+风格名，严禁塞核心特征/本地路径/参考隔离块。默认基线模型 gpt-image-2。
- **特征提取铁律**：自定义风格入库时严禁从参考图解析具体人物/服装/动作/道具/场景写入 traits，只保留纯媒介、光影、色彩、艺术视觉语言——避免侵权与套用。
- **默认只出提示词**：不显式要求就不调用生图工具。
- **发布分享闭环**：原请求逐字存 original-request.txt，分享到网站 work square，不发布论坛帖冒充。

## 目录结构（完整克隆版）

- 根目录入口：\`SKILL.md\`（安装入口）、\`README.md\` / \`README_en.md\`、\`STYLES.md\`(176KB) / \`LAYOUTS.md\`(119KB) / \`COLORS.md\` + 英文版
- \`skills/\` 15 个子 Skill：

  - \`handdraw-style-prompter\` 主程序（编号化风格提示词）
  - \`poster-prompt-generator\` 海报生成
  - \`article-cover-designer\` 文章/视频封面设计
  - \`article-illustration-planner\` / \`release-illustration-planner\` 长文配图规划
  - \`style-fusion-prompter\` 双风格融合
  - \`ip-designer\` IP 形象设计（18 张标准卡）
  - \`couple-photo-orchestrator\` 摄影企划（情侣/婚纱/写真/全家福）
  - \`custom-asset-manager\` / \`personal-library\` 自建图库资产管理
  - \`style-library-importer\` / \`layout-library-importer\` / \`tweet-style-importer\` 风格/图型/推文入库
  - \`style-business-analyzer\` 商业应用分析
  - \`community-share\` 社区发帖/画廊部署
- \`plugins/dsh-handraw-style\`：插件包
- \`images/\`：风格与图型参考图画廊（体积大头）
- \`scripts/\`：索引/图像处理/YAML 校验工具（依赖 Pillow + PyYAML，Python≥3.10）

## 安装与使用

- 仓库作者对 Codex 的安装指令：\`帮我安装这个 Skill：https://github.com/yang0/handraw-style\`，Codex 自动拉取并配置。
- 关键：整个仓库作为包安装在同一路径，根目录 \`SKILL.md\` 是入口，子 Skill 与 \`images/\` 画廊必须保持相对位置，不能拍平。
- 仅看画廊/提示词规范不需要额外依赖；跑图库索引/图像处理脚本才需 \`pip install -r requirements.txt\`。
- 生图能力依赖客户端自己的模型/平台权限，本包不含模型与密钥；视频制作已拆分到独立 \`handraw-video\` 项目。

## 本地保存位置

\`kb/handraw-style-skill/\`（完整克隆，含 images 画廊、全部子 Skill、脚本）。`,feishuUrl:"https://my.feishu.cn/docx/TquCdEffUonCvJxXyxLcZ5LhnBc"},{id:"fs-Oc04dEevsoeQB4xud0qcEUT4nKc",category:"tech",title:"Playwright MCP 配置教程 + 公司内网部署网络限制分析",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"整理于 2026-11-26。已在当前 Windows 机器实测跑通（本地安装 → 冒烟测试通过：MCP 启动、25 个工具、系统 Chrome 打开 example.com 并拿到可访问性快照）。 定位：让 AI 像真…",body:`> 整理于 2026-11-26。已在当前 Windows 机器实测跑通（本地安装 → 冒烟测试通过：MCP 启动、25 个工具、系统 Chrome 打开 example.com 并拿到可访问性快照）。  
> 定位：让 AI 像真人一样按用例在真实浏览器里点按钮、填表单、验结果，用来做网页系统的端到端（E2E）测试。

## 一、它是什么、为什么适合"按用例点页面"

Playwright MCP 是微软官方的 MCP Server，把浏览器自动化能力暴露成一组工具，AI 客户端（Claude Code / Cursor / VS Code / Codex / WorkBuddy 等）通过它操控真实浏览器。

- **核心机制**：不用截图猜坐标，而是读页面的「无障碍快照」（元素角色 + 名称 + 引用 ref），AI 用 \`ref=e5\` 这种引用精准点击/输入，确定性高、不依赖视觉模型。
- **25 个工具**：导航、点击、填表、下拉、键盘鼠标、截图、对话框、标签页、网络请求查看与 mock、console 日志、存储状态（cookie/localStorage）保存恢复、运行任意 Playwright 代码等。
- **默认只出操作、可回退**：默认有头模式能看到操作过程；加 \`--headless\` 则后台跑。
- 对比：比传统 Playwright 脚本更适合"探索性/按用例即时执行"，比纯视觉 Agent 更稳更省 token。

## 二、本机已完成的安装与配置（Windows）

### 环境

- Node.js v22.22.2（要求 ≥20）
- 系统已装 Google Chrome（\`C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\`），因此直接用系统 Chrome 通道，不必再下载 Chromium。

### 安装步骤（本机已执行）

\`\`\`bash
# 1. 建一个固定目录放 MCP server，避免每次 npx 联网
mkdir -p ~/.workbuddy/mcp-servers/playwright-mcp
cd ~/.workbuddy/mcp-servers/playwright-mcp
npm init -y
npm install @playwright/mcp@latest          # 实测装到 v0.0.86

# 2. 若要独立浏览器内核（无系统 Chrome 时需要）
npx playwright install chromium
\`\`\`

### 接入 MCP 客户端

标准配置（多数客户端通用，会联网用 npx 拉最新版）：

\`\`\`json
{
  "mcpServers": {
    "playwright": {
      "command": "npx",
      "args": ["@playwright/mcp@latest"]
    }
  }
}
\`\`\`

本机采用**本地安装版**（不依赖联网、启动更快），配置在 \`c:\\Users\\Dell\\WorkBuddy\\Claw\\.mcp.json\`：

\`\`\`json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "C:\\\\Users\\\\Dell\\\\.workbuddy\\\\binaries\\\\node\\\\versions\\\\22.22.2-6\\\\node.exe",
      "args": [
        "C:\\\\Users\\\\Dell\\\\.workbuddy\\\\mcp-servers\\\\playwright-mcp\\\\node_modules\\\\@playwright\\\\mcp\\\\cli.js",
        "--browser", "chrome", "--headless", "--no-sandbox"
      ],
      "defer_loading": false
    }
  }
}
\`\`\`

其他客户端安装命令：

- Claude Code：\`claude mcp add playwright npx @playwright/mcp@latest\`
- VS Code：\`code --add-mcp '{"name":"playwright","command":"npx","args":["@playwright/mcp@latest"]}'\`
- Cursor：Settings → MCP → Add new MCP Server，命令填 \`npx @playwright/mcp@latest\`

配置改完重启客户端生效。

## 三、怎么用它按用例做真实测试

### 基础交互（对 AI 说自然语言即可）

- \`打开 https://demo.playwright.dev/todomvc，添加三个待办\`
- \`点击登录按钮，填入邮箱 test@x.com 和密码 123456，提交，验证出现"欢迎"字样\`
- \`截取当前页面截图\`
- \`查看刚才页面发出的网络请求，找出 /api/user 的响应\`
- \`把 /api/users 这个接口 mock 成返回 [{id:1,name:"张三"}]\`

### 按用例驱动测试（推荐工作流：两层）

1. **探索层**：用 Playwright MCP + 自然语言对话，快速验证流程、定位元素、让 AI 产出操作步骤。
2. **回归层**：把跑通的稳定操作固化成正式 Playwright 测试代码，进 pytest / Playwright Test Runner 接 CI/CD。
3. 两层之间人工审核三件事：断言是否覆盖核心业务逻辑、测试数据是否可复用、选择器是否稳定。

### 实操示例用例

\`\`\`
用例：登录功能
前置：系统已启动在 http://localhost:3000，测试账号 admin / Admin@123
步骤：
1. 打开首页，点击右上角"登录"
2. 输入用户名 admin、密码 Admin@123，点击"登录"
3. 断言：跳转到 /dashboard，页面出现"欢迎，admin"
预期结果：步骤全部通过，控制台无 error
\`\`\`

让 AI 逐步执行，每步回报页面快照和断言结果，失败时结合 console 和截图定位。

### 关键技巧

- 系统提示词里加一句："执行浏览器操作前先调用快照/截图确认当前页面状态再决定下一步"，能显著减少盲目操作。
- 复杂操作别指望一次成功，多轮对话实时纠偏效率最高。
- 涉及登录态：用「保存存储状态」把 cookie/localStorage 存下来，后续用例「恢复状态」跳过重复登录。
- 非标准 DOM（Canvas/WebGL）页面：MCP 靠无障碍树，对纯画布识别弱，这类要用坐标点击或 \`browser_run_code_unsafe\` 注入脚本（注意该工具等同 RCE，仅在受信任客户端启用）。

## 四、公司内网部署的网络限制分析（重点）

结论：**Playwright MCP 本身几乎不依赖外网，能很好适配内网；真正的网络限制在"模型调用"和"初始安装"两处。**

### 1. 浏览器访问被测系统 —— 内网友好 ✅

- 被测系统在内网，MCP server 就跑在同一台机器/内网机器上，浏览器直接访问内网地址（http://内网IP 或 localhost），不走公网。
- 若浏览器需经公司代理访问某些域，用启动参数：

  - \`--proxy-server http://proxy:port\`（支持 \`http://user:pass@proxy:port\`、\`socks5://...\`）
  - \`--proxy-bypass .corp,.internal,localhost\`（内网域名绕过代理）
- 自签证书的内网 HTTPS：加 \`--ignore-https-errors\`，否则证书校验会失败。
- 默认 \`--allowed-origins\` 允许所有域名；安全要求高时可用它 + \`--blocked-origins\` 做白/黑名单（注意：官方明确这只是便利开关，**不是安全边界**，也不影响重定向）。

### 2. 初始安装 / 浏览器内核下载 —— 需联网或走内网镜像 ⚠️

- \`npm install @playwright/mcp\`、\`npx playwright install chromium\` 默认访问 npm registry 和微软 CDN。纯内网会失败。
- 解决办法（三选一）：

  1. 在联网机器装好后，把整个 \`node_modules\` + 浏览器目录拷进内网（本机就是用系统 Chrome 免下载）。
  2. 用公司内网 npm 镜像：\`npm config set registry http://内网镜像/\`。
  3. 用系统已装的 Chrome/Edge（\`--browser chrome\` / \`--browser=msedge\`），完全跳过 Chromium 下载——**本机采用此方案**。
- 建议把依赖和浏览器做成离线安装包/镜像一次配好，避免每台机器重复联网。

### 3. AI 模型调用 —— 最大的外网依赖点 ⚠️

- MCP 只是"手和眼"，真正理解用例、决策点哪里的是 LLM 客户端（Claude Code / Cursor / WorkBuddy 等），这些通常要连公网模型服务。
- 内网若禁外网，需确认：

  - 客户端能否配**企业内网部署的模型 / 私有化模型端点**（很多支持自定义 base_url）；
  - 或走公司统一的 AI 网关/代理。
- 若完全无模型可用，Playwright MCP 退化为纯工具，无法"按用例自动决策点击"，只能人工写死 Playwright 脚本跑（那就回到传统 E2E）。

### 4. 数据与合规 —— 内网部署的天然优势 ✅

- 页面内容、截图、cookie 等敏感数据都留在本地/内网，不上传第三方（除非客户端把快照发给云端模型——这点要向内网的模型方案确认）。
- 用 \`--isolated\` 可让浏览器 profile 只在内存，不留磁盘痕迹。
- 用 \`--redact-url-params access_token,code\` 可在工具返回里脱敏 URL 参数，防 token 泄露到日志/模型上下文。

### 5. 无显示器 / 服务端运行 —— 支持 ✅

- 服务器/无显示器场景用 \`--headless\`。
- 或用独立 HTTP 模式：\`npx @playwright/mcp@latest --port 8931\`，客户端指向 \`http://host:8931/mcp\`，适合集中部署一个浏览器服务给多人用。

  - 心跳超时注意：代理不响应 ping 时设 \`PLAYWRIGHT_MCP_PING_TIMEOUT_MS\` 调大或设 0 禁用。
  - 端口服务默认只绑 localhost，要局域网访问需 \`--host 0.0.0.0\` 并配合 \`--allowed-hosts\`。

### 内网部署检查清单

1. Node ≥20 就位；决定用系统 Chrome 还是内置 Chromium（离线拷包）。
2. npm 依赖：走内网镜像或离线拷贝。
3. 浏览器访问被测系统：确认代理/证书配置（proxy-server / proxy-bypass / ignore-https-errors）。
4. 模型端点：内网私有模型或企业网关，确认 base_url 可达。
5. 安全：allowed-origins 白名单、redact-url-params 脱敏、isolated 隔离。
6. 无显示器：headless 或独立 HTTP 服务 + host/port/allowed-hosts。

## 五、本机文件位置

- MCP server 安装目录：\`C:\\Users\\Dell\\.workbuddy\\mcp-servers\\playwright-mcp\\\`（\`@playwright/mcp\` v0.0.86）
- WorkBuddy 配置：\`c:\\Users\\Dell\\WorkBuddy\\Claw\\.mcp.json\`
- 验证脚本（已归档）：\`kb/playwright-mcp-验证/smoke-test.mjs\`、\`kb/playwright-mcp-验证/usecase-demo.mjs\`
- 实测结论①冒烟：INIT 成功、25 工具、导航 example.com 成功、快照含页面标题与正文，RESULT: PASS。
- 实测结论②真实用例（TodoMVC）：5/5 PASS——步骤1打开页面、步骤2-3加3条待办（实际3）、步骤4勾选第1条、步骤5断言剩余未完成=2（实际2）。证明它能像测试人员一样逐步执行用例并断言。
- 实测发现：\`demo.playwright.dev\` 在首次冒烟时曾被误判失败，实为脚本判断写法问题；页面本身可正常访问。工具参数：\`browser_type\` / \`browser_click\` 用的是 \`target\`（不是 ref），可直接传快照里的 ref 或 CSS 选择器；\`browser_run_code_unsafe\` 的返回值在文本 \`### Result\` 后。

## 六、官方参考

- Playwright MCP 文档：https://playwright.net.cn/docs/getting-started-mcp
- 完整配置 schema（config.d.ts）：https://github.com/microsoft/playwright-mcp/blob/main/config.d.ts`,feishuUrl:"https://my.feishu.cn/docx/Oc04dEevsoeQB4xud0qcEUT4nKc"},{id:"fs-UUk5dyAbLo6pD9xgHldcEaCvnug",category:"tech",title:"Playwright MCP 内网部署配置包（可直接套用）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:'整理于 2026-11-26。配套《Playwright MCP 配置与内网部署教程》，把网络限制分析落成"改几个变量就能用"的模板。基于 @playwright/mcp v0.0.86 实测。 本地文件：`kb/pla…',body:`> 整理于 2026-11-26。配套《Playwright MCP 配置与内网部署教程》，把网络限制分析落成"改几个变量就能用"的模板。基于 @playwright/mcp v0.0.86 实测。  
> 本地文件：\`kb/playwright-mcp-部署配置包/\`（含 3 个配置模板 + 1 个启动脚本 + 选择指南）。

## 一、三步选方案

第 1 步 —— MCP 服务跑在哪？

- 每个人自己电脑（最常见）→ 模板1 直连版 / 模板2 代理版，走 stdio。
- 集中一台内网服务器多人共用 → 模板3 集中服务版，走 HTTP。

第 2 步 —— 浏览器访问被测系统要不要过代理/自签证书？

- 内网直连、证书正常 → 模板1。
- 过公司代理 或 自签 HTTPS → 模板2。

第 3 步 —— AI 客户端背后的模型怎么连？（最关键，见第四节）

## 二、变量填写表（先填表再套模板）

| 变量 | 含义 | 示例 |
|-|-|-|
| NODE_EXE | node 可执行文件路径 | \`C:\\Users\\Dell\\.workbuddy\\binaries\\node\\versions\\22.22.2-6\\node.exe\` |
| CLI_JS | mcp 的 cli.js 路径 | \`C:\\Users\\Dell\\.workbuddy\\mcp-servers\\playwright-mcp\\node_modules\\@playwright\\mcp\\cli.js\` |
| PROXY_URL | 公司代理 | \`http://proxy.corp.com:8080\` |
| BYPASS | 不走代理的内网域名 | \`.corp,.internal,localhost,127.0.0.1\` |
| TEST_URL | 被测系统地址 | \`http://10.0.12.30:8080\` |
| SERVER_IP | 集中服务机器内网 IP | \`10.0.12.50\` |
| MODEL_BASE_URL | 企业模型端点 | \`http://ai-gw.corp.com/v1\` |

JSON 里 Windows 路径要用双反斜杠 \`\\\\\`。

## 三、三个配置模板

模板1 直连版（本机已实测）：

\`\`\`json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "",
      "args": ["", "--browser", "chrome", "--headless", "--no-sandbox",
               "--isolated", "--redact-url-params", "access_token,token,code"],
      "defer_loading": false
    }
  }
}
\`\`\`

模板2 代理版（在模板1 的 args 里加）：

\`\`\`json
"--proxy-server", "",
"--proxy-bypass", "",
"--ignore-https-errors",
"--allowed-origins", "https://a.corp.com,https://b.corp.com"
\`\`\`

不需要代理就删 proxy 两行；证书正常就删 ignore-https-errors。

模板3 集中服务版（连集中 HTTP 服务）：

\`\`\`json
{
  "mcpServers": {
    "playwright": { "type": "streamable-http", "url": "http://:8931/mcp" }
  }
}
\`\`\`

服务端启动脚本 \`start-server.ps1\`（顶部改变量即可）：

\`\`\`powershell
powershell -ExecutionPolicy Bypass -File start-server.ps1
\`\`\`

核心命令：\`node cli.js --browser chrome --headless --no-sandbox --port 8931 --host 0.0.0.0 --allowed-hosts  --isolated\`

配置放进客户端 \`.mcp.json\`（本工作区是 \`c:\\Users\\Dell\\WorkBuddy\\Claw\\.mcp.json\`），改完重启客户端生效。

## 四、模型端点（内网最容易卡住的一环）

MCP 只是"手和眼"，真正读用例、决定点哪里的是 AI 客户端背后的大模型。内网禁外网时：

1. 优先确认客户端能否配**企业私有模型 / AI 网关**：模型设置里填 \`base_url\` + \`api_key\` 指向 MODEL_BASE_URL，WorkBuddy/Claude Code/Cursor 大多支持。
2. 让 IT 放行模型端点域名——这是唯一必须出网或连内网网关的地方。
3. 完全没模型可用：MCP 退化成纯工具，失去"按用例自动决策"，只能退回手写 Playwright 脚本进 CI。
4. 数据合规：确认端点不外传快照/截图；敏感系统用 \`--isolated\` + \`--redact-url-params\`。

## 五、安全加固参数

| 参数 | 作用 |
|-|-|
| \`--isolated\` | 浏览器 profile 只在内存，不留磁盘痕迹 |
| \`--redact-url-params access_token,code\` | 脱敏 URL 参数，防 token 进日志/模型上下文 |
| \`--allowed-origins\` / \`--blocked-origins\` | 域名白/黑名单（便利开关，非安全边界，不影响重定向） |
| \`--ignore-https-errors\` | 自签证书内网 HTTPS（仅可信内网用） |

## 六、落地检查清单

1. Node ≥ 20；决定用系统 Chrome（推荐免下载）还是内置 Chromium（离线拷包）。
2. npm 依赖走内网镜像 \`npm config set registry http://内网镜像/\` 或离线拷 node_modules。
3. 填第二节变量表。
4. 选模板、替换占位符、放进客户端 \`.mcp.json\`。
5. 确认模型端点可达（第四节）。
6. 配安全参数（第五节）。
7. 重启客户端，对话里让它"打开  并描述页面结构"验证。
8. 跑一遍教程里的 TodoMVC 用例（加3条→勾1条→断言剩余2）确认端到端可用。

## 七、关键提醒

- 无显示器服务器：模板已带 \`--headless\`；集中服务注意配 \`--host 0.0.0.0\` + \`--allowed-hosts\`，心跳超时调 \`PLAYWRIGHT_MCP_PING_TIMEOUT_MS\`（脚本里设了 30000）。
- \`browser_run_code_unsafe\` 等同 RCE，仅在受信任客户端/内网启用。
- 配置改动必须重启客户端才生效，当前会话不会热加载。`,feishuUrl:"https://my.feishu.cn/docx/UUk5dyAbLo6pD9xgHldcEaCvnug"},{id:"fs-JmoNdsOHnoCMxaxFiticMlF5nM1",category:"tech",title:"Blueprint · 草图变3D房子 Skill（三木前端笔记）",date:"2026-11-27",tags:["技术笔记","飞书同步"],desc:"来源：微信公众号「三木前端笔记」/ 三木程序员 2026-11-26 文章，GitHub 已核实：https://github.com/Nyxera0x/blueprint （2026-11-24 开源，MIT，真实存在…",body:`> 来源：微信公众号「三木前端笔记」/ 三木程序员 2026-11-26 文章，GitHub 已核实：https://github.com/Nyxera0x/blueprint （2026-11-24 开源，MIT，真实存在）。  
> 类型：开源 Claude Code Skill / AI 3D 生成。按规则：Skill 要完整保存才可用 → 已完整下载 55 个文件（25MB）到 \`kb/blueprint-skill/\`，保留 SKILL.md、houses、kit、sfx、docs、tools 全部原始结构，一字不改；并整理笔记入库飞书。可交互效果 → 已做 demo（webgl-showcase「零件拼装建屋 · Blueprint」）。

## 一句话

给它一张纸上手绘草图、售楼户型图，或者 3–4 张风格参考图，它会写一段 Blender Python 脚本，把整栋房子每个零件（地基、立柱、椽子、榻榻米、障子格……）都建成独立对象，渲染出高清静帧，再拍成一条"房子在图纸上自己拼起来、然后走进去"的带音效漫游短片。仓库里没有一个现成 \`.blend\` 模型——所有几何都是代码生成的。

## 能吃什么输入，长出什么

| 输入 | 示例 | 产出 |
|-|-|-|
| 手绘草图 | 14m 见方日式庭院 | 2444 个独立零件，按施工阶段飞入，白 clay + 每系统闪色 + 实时计数，最后红枫为您触发纸张变山坡、clay 变杉木和纸石 |
| 售楼户型图 | 三居室平面图 | 按比例尺描墙、1 米网格读门窗 → 娃娃屋俯瞰 → 钻进客厅卧室漫游 |
| 3–4 张参考图 | 悬崖别墅 | 洞石亭台+无边泳池，瓷砖石块飞入、池水注满、屋内亮灯、镜头穿落地玻璃而入 |

三种输入走同一套逻辑：**先生成能自由拆解的白模，再让材质从某个焦点一圈圈铺开。**

## 关键工程约束（为什么它拼得严丝合缝，而不是墙错位门悬空）

1. **数字先于像素**：草图的尺寸标注永远高于图像像素（生图模型把 14m 见方画成 745×670px，按像素建必变形）；户型图先找比例尺、描墙填充色，再在 1 米网格上人工读门窗——自动识别会把门开在房间正中间。
2. **按木匠施工顺序拆件**：每件独立对象并挂阶段标签（\`K.STAGE[0]="frame"\`），动画按工种顺序飞入、角落实时计数；重复翼用 side + (u,v) 坐标，一个函数建四翼、转角落在对角线上。
3. **低分静帧并排纠偏**：960×540 / 32 samples 先出图，参考图摆旁边列差异、查穿模（梁头穿屋顶从上看是个点、石头穿泳池底是块污渍），改完再重渲。
4. **显存控制**：几千个运动零件加 motion blur 会爆 8GB 卡——打关键帧前把倒角修饰器烘焙进网格，扫描松柏做 8 倍减面（Poly Haven 松柏每棵 200–700 万面）。
5. **灯光最后定、两种都出**：\`--look day|dusk\` 切整场；蓝调时刻压抑，雨后亮日（低太阳+湿木板+淡天空）开阔。
6. **音效挂在影片时间轴上**：\`film.py\` 产出 \`timeline.json\` 记录每次落件、材质波、亮灯、入水时刻；\`score.py\` 给每种材质（石头/空木/纸/金属）配音；有 ElevenLabs key 才混背景乐，没有也能出带物理动作声的成片。

## 血泪参数经验（作者踩坑总结，照抄避坑）

- 色调映射用 **Khronos PBR Neutral**——常见的 AgX 会把日落晚霞压成灰米黄。
- 玻璃用薄片 + Transparent 按 Fresnel 混 Glossy，**关闭折射**；未倒角的盒子开平滑着色会把玻璃变成凸透镜。
- Poly Haven 的 "set" 文件（一排灌木、一堆石头）要拆成单株（\`model_variants\`）。
- Mix 节点默认 clamp factor——加太阳盘/天空光晕要关 \`clamp_factor\`。
- 切成真瓷砖后要去掉画的砖缝，否则重影。
- 相机不要近距离对着空墙，从洞口进来先转向洞外的景再拉回室内。
- 片长取非整数秒（18–25s），每栋不同。

## 可复用方法论（抛开 Blender，做别的 AI 视觉也用得上）

1. **先用数字或骨架锁死比例，再让 AI 填画面**——直接看图生图/生视频，模型会顺手改门位置和空间尺度；先落一层精确尺寸、白模、网格，细节发挥才不跑偏。
2. **要过程可控靠按阶段拆零件，不是把提示词越写越长**——成品拆成带阶段标签的独立模块，局部坏了单独返工，零件本身还能顺理成章变成逐层拼装动画素材。
3. **把低分草样并排对照当固定验收动作**——别一口气盲赌高采样成片，先出低分辨率草图找穿模、改误差。

## 安装与使用

\`\`\`
# 装进 Claude Code（需本机先装 Blender 4.2+）
npx skills add Nyxera0x/blueprint -g -a claude-code

# 首次拉 CC0 材质（Poly Haven）
python ~/.claude/skills/blueprint/houses/courtyard/fetch_assets.py

# 跑示例
blender -b --factory-startup -P houses/courtyard/build.py -- tatami engawa --samples 192 --res 1920x1080
blender -b --factory-startup -P houses/courtyard/film.py -- --res 1920x1080 --samples 64
\`\`\`

依赖：Blender 4.2+（PATH 里有 \`blender\`）、Python3 + pillow（计数叠字，读户型图还要 opencv-python + numpy）、ffmpeg（或 \`FFMPEG=\` 指定）。Mac 用户让 Claude 把渲染后端和降噪切到 Metal + OpenImageDenoise。

**不适合**：客户定制软装要严丝合缝还原真实品牌型号；或不想折腾本地 Blender 环境和渲染等待——这类直接用即梦或常规渲染器省心。

## 本地完整保存

- 目录：\`kb/blueprint-skill/\`（55 文件 / 25MB，完整克隆，非提炼）。
- 核心：\`SKILL.md\`（94 行，含建新房的 9 步流程和 9 条血泪规则）。
- 三套房：\`houses/{courtyard,villa,apartment}/\`，每套有 build.py（场景+静帧）、film.py（影片，支持断点续渲）、score.py（音效）、music_plan.json。
- 工具箱：\`kit/bkit.py\`（建件库）、\`sfx/\`（代码合成音效 dsp/synth/mix/loudness + 11 个 CC0 采样）、\`tools/music.py\`、\`run_sfx.py\`。
- 素材：\`docs/\` 4 个演示 gif、\`houses/courtyard/sketch.png\` 原始草图、\`houses/courtyard/timeline.json\` 时间轴。
- 许可：代码 MIT；材质/绿植/石头 Poly Haven CC0；音效采样见 \`sfx/samples/SOURCES.md\`（CC0）。

## 资源链接

- 项目仓库：https://github.com/Nyxera0x/blueprint
- CC0 材质与模型库：https://polyhaven.com
- Blender 下载：https://www.blender.org/download/

## 本地落地

webgl-showcase 新增 demo「零件拼装建屋 · Blueprint」：用滑块代理进度，代码生成一栋房子的地基/立柱/梁/墙/屋顶等零件，按施工阶段逐件从空中飞入就位并实时计数，复刻原文"按工种顺序飞入 + 角落计数"的核心观感；原文链接挂在 demo 卡片上。`,feishuUrl:"https://my.feishu.cn/docx/JmoNdsOHnoCMxaxFiticMlF5nM1"},{id:"fs-WNfadQcYoouD5tx34I5crqIznPh",category:"product",title:"副业 / 搞钱网站清单（7 个 · 统计）",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"用途：先存档，后续整理进个人网站工作台展示。来源：公众号「一支童谣」《不想上班，一定要记住这7个网站！》，2024-11-17。 清单 | # | 网站 | 网址 | 类别 | 说明 | 适合人群 | |-|-|-|-|…",body:`> 用途：先存档，后续整理进个人网站工作台展示。来源：公众号「一支童谣」《不想上班，一定要记住这7个网站！》，2024-11-17。

## 清单

| # | 网站 | 网址 | 类别 | 说明 | 适合人群 |
|-|-|-|-|-|-|
| 1 | 云队友 | [https://www.duiyou360.com/](https://www.duiyou360.com/) | 接单变现 | 兼职写文案/视频剪辑/市场运营，上传简历、上架技能、明码标价，平台审核结算；剪辑按小时结算 30 元起 | 学生、宝妈、自由职业者 |
| 2 | 终身教育平台 | [https://le.ouchn.cn/home](https://le.ouchn.cn/home) | 学习提升 | 国家开放大学出品，50 万+免费课程，涵盖健康管理/职业技能/演讲口才/应用文写作；官方审核、资源免费 | 想提升技能的职场人、学生 |
| 3 | 小红书创作服务平台 | [https://creator.xiaohongshu.com/](https://creator.xiaohongshu.com/) | 内容创作 | 小红书官方培训，账号创建→爆文标题/高曝光技巧/账号运营；万粉账号可接广告变现 | 想做自媒体的新手 |
| 4 | 一品威客 | [https://www.epwk.com/](https://www.epwk.com/) | 接单变现 | 2010 年创立的老牌平台，创意设计/技术开发/广告策划，任务丰富、收益透明 | 设计师、开发者、创意策划 |
| 5 | WPS学堂 | [https://www.wps.cn/learning/](https://www.wps.cn/learning/) | 学习提升 | WPS 官方免费教程，Word/Excel/PPT 入门到进阶，每天半小时提升职场竞争力 | 职场新手、上班族 |
| 6 | 头条号创作训练营 | [https://mp.toutiao.com/](https://mp.toutiao.com/) | 内容创作 | 0 粉丝门槛写作变现，官方训练营讲爆款内容/引流/广告变现 | 写作变现的自由职业者 |
| 7 | RW实验室 | [https://www.rwnomad.com/](https://www.rwnomad.com/) | 接单变现 | 数字游民/自由职业者远程工作平台，国内项目+跨国合作，技术/设计/翻译岗 | 有语言能力、想接触国际市场 |

## 按用途分组

- **接单变现**：云队友（1）、一品威客（4）、RW实验室（7）
- **学习提升**：终身教育平台（2）、WPS学堂（5）
- **内容创作**：小红书创作服务平台（3）、头条号创作训练营（6）

## 备注

- 网站类收藏按用户约定：只做统计，不做深度笔记。
- 后续计划：放进个人网站工作台做展示（待办）。`,feishuUrl:"https://my.feishu.cn/docx/WNfadQcYoouD5tx34I5crqIznPh"},{id:"fs-FM6JdJzt9osbk0xDDEBciPLLnOd",category:"product",title:"每天一个AI干货Day76｜内容创作者AI工具箱",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"来源：每天一个 AI 干货 Day76。 核心观点：AI 分成生成式和决策式两种；内容创作者可以把下面这些工具按“输入—输出”组装成自己的工作流。 输入 智能搜索 Perplexity：https://www.perpl…",body:`来源：每天一个 AI 干货 Day76。

核心观点：AI 分成生成式和决策式两种；内容创作者可以把下面这些工具按“输入—输出”组装成自己的工作流。

## 输入

### 智能搜索

- Perplexity：https://www.perplexity.ai/
- ChatGPT Plus + WebPilot

### 数字员工

- MindOS：https://mindos.com/

### 阅读文档

- ChatDOC：https://chatdoc.com/

### 内容总结

- Monica：https://monica.im/
- Upword：https://www.upword.ai/

### 视频总结

- Bibigpt：https://bibigpt.co/

### 会议整理

- 讯飞听见：https://www.iflyrec.com/
- Claude：https://claude.ai/

### 获取灵感

- PromptPerfect：https://promptperfect.jina.ai/

### 整理 Excel

- ChatGPT Code Interpreter
- FormulaBot：https://formulabot.com/

### 打造私人 / 企业专属知识体系

- Dify：https://dify.ai/

## 输出

### 文本内容

- ChatGPT + Notion AI

### PPT

- Tome
- Gamma

### 沟通

- ChatGPT`,feishuUrl:"https://my.feishu.cn/docx/FM6JdJzt9osbk0xDDEBciPLLnOd"},{id:"fs-MwtJdAU9RoP6IIxqSvwcZ6Qgnkf",category:"product",title:"学习资源网站清单｜4 个",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"来源：公众号「后期圈」《成仁 “学习网站”，囊括一切》，2024-04-25。按“网站类收藏只统计网站”的规范整理，未做深度笔记。 网站清单 公考知识库：https://www.wolai.com/shangan/eTk…",body:`来源：公众号「后期圈」《成仁 “学习网站”，囊括一切》，2024-04-25。按“网站类收藏只统计网站”的规范整理，未做深度笔记。

## 网站清单

1. 公考知识库：https://www.wolai.com/shangan/eTk9MfMbm1AtJUa4SrwREC

   - 免费的公考知识库文档，含题型、文字讲解、视频，可搜索，作者持续更新。
2. 私人电子书库：https://zuoshipin.com/sites/12799.html

   - 基于 AList 搭建的免费电子书库，可下载，也可在线阅读。
3. 大学生资源网：https://www.dxzy163.com/

   - 无广告学习资源站，覆盖小学、中学、大学课程，以及考研、考公、考证资源，支持在线观看。
4. Muhou（幕后）：https://muhou.net

   - 国内老牌素材资源站，以国外资源为主，涵盖平面、视频、AE/PR 模板、制作工具与插件，每日更新，有限免正版资源。`,feishuUrl:"https://my.feishu.cn/docx/MwtJdAU9RoP6IIxqSvwcZ6Qgnkf"},{id:"fs-ERIEd91naoPXzQxxGXAcvSfjnqd",category:"product",title:"FTUE 玩家首次体验设计｜新手引导方法论（SIFU 案例）",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"一句话 把「新手引导」换成「玩家首次体验」（FTUE, First Time User Experience）——从教规则 turns 到传达核心体验：击中玩家、代入玩家、留住玩家。规则与操作是「皮相」，核心体验是「骨相…",body:`## 一句话

把「新手引导」换成「玩家首次体验」（FTUE, First Time User Experience）——从教规则 turns 到传达核心体验：击中玩家、代入玩家、留住玩家。规则与操作是「皮相」，核心体验是「骨相」。

## 文章信息

- 标题：《前5分钟都留不住玩家，现在的游戏新手教程到底差在哪？》
- 作者：Wenlon，公众号「游戏葡萄」，转载于腾讯 GWB 游戏无界
- 发布：2022-11-08
- 原文：https://mp.weixin.qq.com/s/zrn0ffxkOc-0J6QYluYHYg

## 新手引导的三大通病

1. 内容冗长，没有体验乐趣
2. 强制玩家（一步步点、不能跳过）
3. 叙事与 Gameplay 割裂

根因引导目标没融进核心体验，或一次推给玩家太多导致体验失焦。具体：没明确引导目标 / 内容没规划 / 关卡没编排组合 / 过度重教学轻体验 / 平铺直叙忽视节奏。

## FTUE 构成三要素（缺一不可）

- **核心体验传达**（最易被忽视）：玩家对玩法感知未必清晰，但一定要感到吸引力——叙事悬念 / 玩法挑战乐趣 / 沉没成本，给继续的动力。
- **目标感养成**：短期目标给正反馈、建立激励-反射模型；长线目标给「离线后还回来」的动机。短线目标要清晰，长线方向要明确。
- **基础规则引导**：规则与操作只是皮相，别把全部精力花在这。

### SIFU 案例

- **直给的核心体验**：开局即打斗，不做冗长剧情，直接把后续十几小时反复磨炼的核心操作传达给玩家。
- **角色共情**：以反派「杨」的身份杀师父开局，武馆对话侧面交代身份、埋叙事伏笔 → 情感代入。
- **电影式教学**：雨夜父亲被杀 → 八年后在血色中练习，镜头直给「血海深仇」→ 长线目标（复仇）自然建立，机制教学与目标传达一次完成。

## 前 5 分钟要抓住的 4 个点

游戏前 5 分钟像电影前 5 分钟、短视频前 5 秒，但玩家离开成本更低。关键：

1. 迅速进入情境，熟悉 3C（角色 Character / 控制 Control / 镜头 Camera）
2. 卷入核心体验
3. 小步成长的清晰传达 + 长线追求的想象空间
4. 奠定基调

## FTUE 设计 4 步曲

### I. 规划引导优先级

细颗粒理解整体机制。以英雄体验为核心的游戏需准备：① 英雄能力维度 / 成长开放梯度 / 练度梯度；② 英雄强关联且有趣的场景交互；③ 单英雄→多英雄的过渡与搭配组合。

- Mario 是范例：FTUE 内容序列与关卡紧密结合，用 3 个箱庭传达 3 个目标。
- **序列（蒙太奇）产生意义**：同样 ABC 三个镜头，A-B-C（哭→送礼→笑）= 天真撒娇；C-B-A（笑→送礼→哭）= 喜极而泣。爱森斯坦：A+B 不是简单相加，而是生成全新的 C。→ 可把中后期英雄/场景/矛盾用倒叙前置到前 5 分钟制造悬念。

### II. 关卡设计

像对待刚到新世界的孩子：包容，给适合其成长发挥的空间，设计两条线——「好奇探索」的上限 与「创造/破坏」的底线。环境「儿童友好」：基础是无 Bug / 不卡住 / 不中断 / 不伤害玩家，进阶是颜色友好、结构友好、互动友好。  
检查要点：纯粹（减干扰）/ 递进（举一反三、有成长感）/ 即时激励与负反馈纠正 / 无多余边界情况 / 目标明确（短期清晰、长线有方向）。

### III. 任务系统与叙事

**任务系统**：底层逻辑共通（UE4 用条件判断节点）。两种引导——

- 强制引导：单一条件 + 单一错误反馈，熟手也得一步步点，体验差。
- 非强制引导（推荐，Supercell《部落冲突》）：不同操作触发不同检测与提示，玩家直接满足条件的动作就快速跳过 → 新手有针对性提示、熟手流畅跳过。

**叙事常见问题**：共情差被跳过 / 叙事与玩法割裂 / 平铺直叙信息过载。  
**解决**：矛盾冲突或悬念代入、角色贯穿不来回切 / 冲突设计与玩法、内容序列结合 / 清晰短期目标+激励、相对清晰长期方向 / 减少规则信息（避免过载）、增加精彩内容预告（给成长目标感）。

## 两个底层模型

### 学习方式与内容留存率

从被动到主动：听→读→讨论→实践→教授他人，平均留存率递增（「学习金字塔」，实践 75% vs 单纯听读 10%）。游戏融合视听、演示、实践与即时反馈，天然是更好的教学形式。SLG 策略类若只用红点+文字，吸收极差；改用演示 + 非强制引导，让玩家在试错中掌握，初期慢一点但避免了反复教学，事半功倍。

### 激励与反射模型

操作性条件反射（斯金纳），关键在强化激励。四种：

- **正强化**：给予想要的东西 → 行为增强
- **负强化**：移除不想要的东西 → 行为增强
- **正惩罚**：施加有害/负面影响 → 行为减弱
- **负惩罚**：移除想要的东西 → 行为减弱

两种学习链路要区分适配：

- **身体条件反射**：速度快、潜意识、适应变化差。适合动作游戏，用声音/颜色/形态传达（如敌人出招前摇统一红闪→最佳格挡时机），反复训练成肌肉记忆。
- **逻辑思考条件反射**：固定模式、需思考、能迁移、举一反三。适合策略游戏，重在把内在逻辑讲清（如枪兵克制骑兵），玩家换主将/升级后仍能识别兵种做判断。

> 反面案例：策略游戏前期过度依赖闪烁红点，玩家只点击不调动思考，脱离红点后遇到很大阻力。

## 对我（前端 / 游戏方向）的可迁移点

- 任何产品的 onboarding（不只是游戏）：首屏 5 秒传达核心价值 > 功能说明书。这套 FTUE 三要素 + 4 步曲可直接套到网站引导、产品的首次体验设计。
- 「非强制引导 + 演示 + 试错」比「红点填鸭」留存高——做幕后工作台/图谱引导页时可借鉴。
- 序列/蒙太奇的思维对叙事型页面、作品集排序有启发：同样的内容换顺序会产生完全不同的意义。

## 配套 demo

见个人网站 \`public/apps/ftue/\`：把三要素、4 步曲、留存率、激励四象限做成可交互的「新手引导设计检查器」，对照好坏示范直观感受差异。`,feishuUrl:"https://my.feishu.cn/docx/ERIEd91naoPXzQxxGXAcvSfjnqd"},{id:"fs-CWFNdO3eroqn8vxQsogcPruvnEc",category:"product",title:"好问题清单 · 做产品时的思考框架",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:'用途：每次做产品、做功能，或拆解/评估一个产品时，拿出来逐个问自己。 来源：2026-11-23 对话中，用于分析「数字人」方案时列出的五问，你认可为"比较好的问题"，要求单独记录、长期积累。 一、产品拆解五问 这个产品…',body:`> 用途：每次做产品、做功能，或拆解/评估一个产品时，拿出来逐个问自己。  
> 来源：2026-11-23 对话中，用于分析「数字人」方案时列出的五问，你认可为"比较好的问题"，要求单独记录、长期积累。

## 一、产品拆解五问

1. **这个产品为什么这样设计？**
2. **它解决了什么问题？**
3. **核心业务流程是什么？**
4. **哪些设计值得借鉴？**
5. **还有哪些地方可以优化？**

### 使用提示（怎么问自己）

- **第 1 问 · 为什么这样设计**：看设计背后的取舍——它把什么成本降低了？为什么选这种形态而不是别的？
- **第 2 问 · 解决什么问题**：找真痛点，区分"痒点"和"必需"——谁在什么场景下非它不可？
- **第 3 问 · 核心业务流程**：画主链路，从用户输入到拿到价值，几步走完？哪一步是关键？
- **第 4 问 · 值得借鉴**：抄结构不抄表面——哪些机制/约束是聪明的，能迁移到我的产品？
- **第 5 问 · 可优化**：找改进空间——同质化、体验、成本、合规，哪里还能更好？

### 一句话记忆法

> 先问「为什么/为谁」定方向 → 再问「流程」理清怎么做 → 最后问「借鉴/优化」做得更好。

## 二、待补充的好问题

（以后看到好的问题或思考框架，就往这里加，注明来源和适用场景。）

-`,feishuUrl:"https://my.feishu.cn/docx/CWFNdO3eroqn8vxQsogcPruvnEc"},{id:"fs-HXvWdUIZvoQkhvxDg2qc64aRntc",category:"product",title:"游戏设计方法论 · 为什么做游戏还需要方法论",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"一句话 游戏设计源自 99% 的方法论 + 1% 的灵感——灵感比方法论更重要，但没有那 99%，这 1% 也没用。方法论 = 别人问「你为什么这么设计」时，你能给出的条理清晰、逻辑顺畅的回答；说不清就是全凭感觉。 文章…",body:`## 一句话

游戏设计源自 99% 的方法论 + 1% 的灵感——灵感比方法论更重要，但没有那 99%，这 1% 也没用。方法论 = 别人问「你为什么这么设计」时，你能给出的条理清晰、逻辑顺畅的回答；说不清就是全凭感觉。

## 文章信息

- 标题：《为什么做游戏还需要"方法论"》
- 作者：命运Sniper，首发「想精想怪」公众号，转载于 GameRes 游资网
- 发布：2022-09-15
- 原文：https://mp.weixin.qq.com/s/lrmMZq2XSQ_Q1kRkchC_wA

## 什么是方法论

不断追问「目的是什么 / 为什么 / 怎么做」，总结出来的就是你的方法论。用「Boss 难度太高砍攻击力」层层递进：

- 回答1（凭感觉）：砍 5 点肯定简单些，试试看。
- 回答2（有逻辑）：满血抗 2 刀、第 3 刀死，砍 5 点后满血抗 3 刀、不满血仍抗 2 刀。
- 回答3（更完备）：算「容错次数」——满血 2 刀 + 吃药回满再 2 刀 = 容错 4；砍 5 点后满血抗 3 刀但吃药回不满仍能抗 2 刀，满血容错 +1、满血+一药容错也 +1。
- 继续追问：满血 vs 满血+一药？+1 药 vs +2 药？为什么砍伤害而不是加前摇/削韧性/多给药？追问逼你完善方法论。

## 为什么需要（三个重要性）

1. **保证设计一致性**：创意落地需要的人力/时间越多，越需要方法论（写诗靠灵感，拍电影有拍摄技法，长篇小说有「英雄之旅/推理十诫/戏剧三原则」）。反模式「加机制」：分身解谜 → 加二段跳 → 加怪物 → 加弹反 → 全删。方法论可判断某机制是不是纯负面（二段跳若不配合连携机制，会拉大间隙、减少一屏信息，与解谜目标冲突）。
2. **团队协作沟通的基础**：设计师怕「大气」这种词——你不知道对方心里的「大气」是啥。团队争论的依据是谁的方法论更完备、更经得起「挑战」(challenge：抛出观点+背后方法论，别人来挑战)。经得起挑战才达成一致。
3. **评估和修改的指导依据**：玩家反馈杂乱甚至互相矛盾。玩家从「客户」视角看局部，不同类型玩家需求不同（巴蒂尔四象限：杀手型只关心 PVP，PVE 对他只是拿装备的途径）。要有方法论才能判断哪些需求满足、怎么改、怎么验证，而不是「超过 50% 说难就砍」。

   - 案例：PVP 玩家抱怨「怪太难又不爆好东西还妨碍杀人」。若 PVE 只是前期拿装备 → 做竞技场；若 PVE 是为产生「牵引」→ 改怪物刷新/战斗/产出，让枪声=有好东西=聚集玩家=畅快 PVP（吃鸡空投就是牵引物）。没有方法论就只会头疼医头。

## 方法论 vs 创意（辩证收尾）

- 方法论来自对已有创意/现象的总结：第一个游戏、第一个手游都没有现成方法论。
- 越成熟领域方法论越完善；新兴领域方法论可能失效——水果忍者/愤怒的小鸟靠「滑屏」新操作产生新乐趣，套 PC 主机方法论反而错。此时比拼创意和悟性，能弯道超车。
- 只有方法论没创意 = 游戏没意思；只有创意没方法论 = 游戏做不出来。二者结合才是王道。

## 对我（前端 / 游戏方向）的可迁移点

- 这是 FTUE 那篇的上游：FTUE 讲「怎么设计新手引导」，这篇讲「凭什么说你这么设计是对的」——设计决策要能讲出「容错次数」式的可量化依据。
- 「挑战」机制搬进产品评审：任何设计提案附上方法论，让别人挑战；经不起挑战就回去想。
- 「加机制」反模式：每加一个功能前先问「它和核心体验目标一致吗？是不是纯负面？」。
- 玩家四象限 → 用户分层：不同用户需求天然冲突，别用「投票过半」做决策，先明确「这个功能不服务哪类用户」。

## 配套

- 同系列：FTUE 游戏新手引导设计（SIFU 案例与方法论）、好问题清单-做产品时的思考框架`,feishuUrl:"https://my.feishu.cn/docx/HXvWdUIZvoQkhvxDg2qc64aRntc"},{id:"fs-TV7Ad2Y70oXWUjxUKf9c1CiGn2V",category:"product",title:"像做菜一样制作关卡 ·《藏梦》设计心得",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"作者：姜晨（锈钻工作室关卡策划），皮皮关转载｜发布：2022-08-25｜原文：https://zhuanlan.zhihu.com/p/557562756 《藏梦》是一款以文成公主入藏为主线的国风推箱解谜独立游戏。作者…",body:`作者：姜晨（锈钻工作室关卡策划），皮皮关转载｜发布：2022-08-25｜原文：https://zhuanlan.zhihu.com/p/557562756

《藏梦》是一款以文成公主入藏为主线的国风推箱解谜独立游戏。作者把关卡制作比作做菜：用一堆无序的"食材"（素材特征）组合出完整有序的作品。

## 一句话

关卡制作分四步：备餐（收集/拆解素材）→ 设计菜单（定章节）→ 烹饪（做关卡/题眼/白模测试）→ 踩坑（美术进场后的碰撞问题）。核心是"题眼"——一个"情理之中、意料之外"的设定，让玩家在观察与尝试中自己找到解法，获得发现的成就感。

## 第一步·备餐（前期准备）

- 食材准备（资料收集）：收集主题相关资料作为食材。《藏梦》收集了入藏年代的社会风貌、建筑特点、神话传说、西藏美食等，作为设计想象的基础。
- 食材加工（元素拆分）：从素材提取可用于关卡的特征——配色、形状、结构、运动状态。转经筒 = 圆柱形 + 金属 + 转动 + 刻经文。
- 特征变关卡：这些特征用来构思题眼、做场景结构、影响美术风格。转经筒 → 五层可独立转动的圆柱大楼，逐层解谜，转对位置出现通道并用金属纹路把能量引到楼顶。
- 要点：关卡设计就是基于事物特征去想象延展；要比玩家看得更远更细，才能做出意想不到的设计。

## 第二步·设计菜单（确定章节）

- 玩家玩游戏像吃席，只有一道菜太单调。要归纳食材，定做哪些菜（章节数）、每道菜用什么食材（每章故事/元素/谜题机制）。
- 两个方向都行：整体推细节（先故事后玩法）或细节推整体（先玩法后套故事）。
- 难点与解法：主线元素能否挖出足够谜题需要制作中验证、很耗时。做法是先按章节量构思一半题眼，制作中边做边补齐另一半。
- 关键忠告：给想法充分沉淀、构建思维模型，切莫急着开工。做一半做不下去再换方向会浪费大量资源，中小团队可能被砍。策划被程序诟病"老改需求"，多半是自己没想明白就做了。

## 第三步·烹饪食材（关卡制作）

- 场景结构：3D 解谜不像《时空幻境》《传送门》房间独立，要按名胜地形设计场景结构、谜题房间、游玩动线，并在现实结构基础上适当变形。
- 题眼（最重要、决定上限）：

  - 定义：像《时空幻境》每关暗示通关技巧的标题。案例"洗脸10分/刷牙5分/烧水15分，最少15分钟完成"——题眼是"多任务可并行"。
  - 体验链路：观察尝试 → 主动对行为排序 → 推理出工作流 → 执行成功（正反馈）→ 成就感。让玩家自己找到路径是核心体验。
  - 必须是"意料之外、情理之中"：只情理之中会沦为工作流、失去探索乐趣；只意料之外却是硬加机制会让人觉得被戏耍。
  - 构思法：从特征里挖掘事物另一面。两扇门一把钥匙，改成第二扇反方向插入锁孔（利用钥匙两端形状不同），就有意料之外感。
- 递进式谜题：后面的谜题基于前面的变化而来（《时空幻境》：时间倒退能力 → 不受倒退影响的怪 → 后退时间才逆流）。带来新鲜感、降低学习门槛。设计从宏观到微观：先定递进框架，再细化题眼和出现顺序；机制方向更改要慎重（牵一发动全身）。
- 完善谜题（给题眼包装）：别直接展示题眼=剧透。用建筑特点填充与题眼相关的简单工作流，让题眼在流程靠后出现（抖包袱前铺垫）。工作流控制四点：

  - 复杂度：不太简单（无聊）也不太繁琐（疲惫、题眼失焦）。
  - 流程时长：推箱速度、机关间距等，要放角色反复测试定度。
  - 相关性：工作流要与题眼相关（别"给玫瑰配芭蕉叶"）。
  - 功能性：简单题眼可用工作流误导（思维惯性：一直向右走下次还向右，魔术手法）；难题眼可加暗示降低难度。
- 流程：整理功能需求给程序 → 搭白模 demo（无美术包装的关卡）→ 团队试玩、按反馈调整 → 美术介入包装。

## 场景搭建小技巧（解决视野问题）

第一/三人称视野局限在前方扇形，看不到墙后或身后：

- 动线设计：让玩家第一次碰开关时，触发的机关就在视野内（按重要度/频度取舍）。
- 摄影机视角：灵活调视角，如上下层频繁切换时增加摇臂长度。
- 记忆锚点：关键结构用突出的颜色/亮度/形状暗示（"不穿校服的同学格外显眼"）。
- 视野矛盾：策划想拆墙看机关、美术觉得不美观 → 给完整建筑加满足视野的破损："视野不够，破损来凑"。

## 踩坑经验（美术进场后的碰撞问题）

- 常见坑：能跑通的 demo 一旦美术资源进来就出现中断流程的碰撞 bug，作者约 1/3 时间花在修 bug，每关都要重操一遍。
- 根因：美术摆模型时不明确碰撞关系，与原有冲突；让美术短时间搞懂每个设计细节不现实。
- 解法：① 原画出概念图时就沟通评估风险、告知注意事项；② 美术搭建尽量与 demo 严丝合缝，只用 demo 的碰撞、取消装饰物碰撞；③ 若场景结构与 demo 出入大，策划先调整 demo 再交给美术加工。
- 推箱解谜对精度要求极高——木板高出 10cm 都可能中断流程。`,feishuUrl:"https://my.feishu.cn/docx/TV7Ad2Y70oXWUjxUKf9c1CiGn2V"},{id:"fs-B9hLdNbx2ot2wKxPvw4cqLyAnBh",category:"product",title:"游戏社会学 · 网络游戏社会等级的构建与维系",date:"2026-11-27",tags:["产品与想法","飞书同步"],desc:"作者：李红袖（青花会游戏百科），转载于 GameRes 游资网｜发布：2022-08-30｜原文：https://mp.weixin.qq.com/s/gN_E8j-ttyFb4dlwUuIQxg 网络游戏≈虚拟社会，玩…",body:`作者：李红袖（青花会游戏百科），转载于 GameRes 游资网｜发布：2022-08-30｜原文：https://mp.weixin.qq.com/s/gN_E8j-ttyFb4dlwUuIQxg

网络游戏≈虚拟社会，玩家团体内必然形成社会等级（不可能绝对平等）。陌生人之间如何从零构建等级、又靠什么维系？核心是一种人类学机制——"慷慨互惠"：不要求回报的利他赠予。谁持续提供"使用价值"，谁就积累声望与地位；而关系一旦"等价交换"达到平衡就会淡化，所以中心人物必须持续赠予，让关系长期处于"不平衡"，团体才能存续。

理论来源：马歇尔·萨林斯"慷慨互惠"、马林诺斯基"纯馈赠"、夸富宴(potlatch)、K.E. Read《Leadership and Consensus in a New Guinea Society》。

## 一、社会等级构建的三种启动方式（不考虑"团体迁移"）

1. 现实社会等级的代入：现实中高社会等级 + 能让别人信以为真 → 直接获得游戏内高等级（名人在粉丝中尤其明显）。关键洞察：能代入的不是"资产"而是"影响力"——现实资产多的大佬低调就没人追随，顶大学生的"创收潜力"也难代入。**游戏评判标准与现实不一致：影响力可直接转化，资产需中间手段。**
2. 个人话术：巧舌如簧者在陌生人中靠演说划出小圈子、让人感到可靠/有安全感/以为你有能力（是不是真的不重要），从而确立地位。
3. 慷慨互惠（游戏公司可深度干涉的一类）：萨林斯式"利他交换"——回馈纯属自愿，馈赠方对回馈方式/价值/时间不作要求。类似夸富宴：分散财产提升声望。

### 慷慨互惠的 4 项常用内容

- 信息：稀有资源坐标、BOSS 攻略、角色 build、版本囤货、掉落率等。"百科型玩家"不图回报答疑，随信息量与需求度积累等级。
- 游戏表现：付出劳动力分担他人压力（5人本法师输出40%+、20人团德鲁伊独治疗全团）。叠加自媒体/官方赛事可质变（一夜成名）。
- 虚拟物品（含游戏货币）：来源=氪金或花时间。启动后维系只有两条路——持续分发，或展现令人信服的组织/调解能力。只启动不维系 → 等级快速瓦解。
- 现实物品/货币：现实赠礼甚至送钱。MMORPG 建帮会需买"证书"，建团体本身就是慷慨互惠，创建者默认最高等级。
- 反直觉：启动速度与稳定性并非 4 项依次变强。由"可靠信息分享者"和"能调度虚拟物品的管理者"创建的团体，稳定性可能比"花钱维系"的更高——后者要求高技术/高在线、把游戏变味；前者持续分享准确及时的信息/展现技巧，会成 KOL 持续吸引成员。

## 二、游戏中经济行为的逻辑（game ≠ 现实市场）

- 现实资本公式 M→C→M'（资金→商品→售出获利）；多数玩家（排除倒卖工作室）在游戏中的行为是 **C→M→C'**（虚拟物品换游戏币，币再换所需物品/服务，如剥皮卖皮换金币买药水）。
- 推论：**游戏货币不该是经济行为的"终点站"、更不能是"游戏目的"，而应是换取其他物品的通道**——设计上要鼓励"多花钱"而非"攒钱"。所以禁止现金交易的游戏中，玩家收到契合装备大概率自己用而非卖钱：游戏里更看重物品/服务的**使用价值**，用虚拟物品做慷慨互惠也更有效。
- 双方视角差：施予方关注"自己的付出"，受惠方关注"使用价值"；随社会距离拉近，受惠方才越来越看重背后成本（亲密关系手作礼物即使不值钱也打动人）。→ 团体早期中心人物须持续提供高使用价值的物品/服务；对"老熟人"则要送能显示投入成本的礼物。
- 慷慨互惠换到的不只是等级，还有他人的"劳动力/使用价值"（参团、捐物资）。**投入成本 = 想和别人一起玩的意愿**（"不想让这个家散了"），且成本要让成员直观看到。
- 游戏 vs 现实：现实是"先控制生产资料→控制劳动者"；游戏是"**先让普通玩家信服（靠慷慨互惠提等级）→ 才能带他们做活动**"。

## 三、"再分配"与"持续性的慷慨互惠"（维系机制）

- 再分配 = 物资汇聚后按规则分配（部落酋长分食物；魔兽早期40人本战利品按 DKP 分配）。物质上让成员硬件最大化提升、团体持续发展；社会上**再分配是"加固次级成员对中心管理者信任的仪式"，也是管理者人格魅力与管理能力的展示**。
- 为什么必须"持续慷慨互惠"？K.E. Read：送出礼物=产生债务，只要没完全偿还，关系就持续"不平衡"——"债权人"有威势，"负债者"谨小慎微（吵架爱翻旧账就是提醒对方仍是负债者）。礼物一旦完全偿还、关系平衡，关系就淡化甚至结束（"等价交换"完成关系即终止；商贩"便宜点卖你""送根葱"就是刻意制造不平衡建立长期关系）。
- 同理玩家若通过参团/捐物资让与管理者的关系"达到平衡"，依赖感消失、离开概率大增。所以高等级者必须持续慷慨互惠，让普通玩家始终有依赖团体的理由。

## 四、对游戏设计的 6 条运用（前提：团体长期存续有助减缓流失）

1. 团体福利重"使用价值"与"可持续性"。反面：魔兽"暗色凤凰"坐骑——使用价值低、可替代性强、不可持续。
2. 内置合理/公平/透明的"再分配"机制让分配更信服（可查分配记录、内置输出/治疗/出勤统计）。
3. 团体活动产出额外可再分配奖励，且要"集体性 + 消耗快"。反例：魔兽《争霸艾泽拉斯》《暗影国度》用"个人拾取"强替"队长分配"削弱公会再分配，虽消除分配矛盾但参团人数与活跃公会锐减（作者声明非全盘否定，流失原因是多方面的）。
4. "弱社交/不社交"游戏应避免任何交易行为、团体也不能有"再分配"功能——交易/交换都可能成为社会关系的起点。
5. 货币"赛季化"（大胆设想）：定期清零或限制带入下赛季货币量缓解通胀，需配合"可购商品/携带上限/产出"多处设计。
6. （超出范围）鼓励虚拟物品↔现金交易（"搬砖"卖点）——门槛高，只有背景雄厚的大公司能平稳运作。`,feishuUrl:"https://my.feishu.cn/docx/B9hLdNbx2ot2wKxPvw4cqLyAnBh"}],_f=[{id:"kb-pitfalls",category:"frontend",title:"踩坑手册 · 28 条实战实录",date:"2026-11-12",tags:["踩坑","排错","实战"],desc:"18 个 demo 做下来真实踩过的坑：大屏 scale 跑偏、无头截图黑屏假象、Cesium shader 失效……每条都是「症状 → 原因 → 解法 → 验证法」。",body:`## 这本手册怎么用
做 18 个 3D demo 的过程中，每踩一个坑就记一条，攒到 28 条。格式固定：**症状 → 原因 → 解法 → 验证法**。这里挑最通用的几条，完整版在本地知识库。

## 大屏 1920 基线 scale：grid 居中 + transform scale 会跑偏
把 1920×1080 的设计稿放进 \`display:grid; place-items:center\` 容器再 \`scale(k)\`，小屏下整屏向右下偏移约 10%，右列被裁、毫无报错。
**解法**：大屏项目的事实标准写法——
\`\`\`css
#screen {
  position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%) scale(k);
}
\`\`\`
鼠标坐标反算照旧：\`(clientX - rect.left) / scale\`。

## 无头 Chrome 截图黑屏，多半是测试假象
\`--virtual-time-budget\` 大值 + SwiftShader 截 3D 页面，canvas 全黑但 DOM 数据流正常更新。
**判断金标准**：黑屏时 UI 还在动 = 代码没死，换 3~5s 短快进重截即可。别急着改代码。

## Cesium CustomShader：uniforms 与 varyings 共存会失效
Cesium 1.119 的 Model 上，shader 同时声明 uniforms 和 varyings 时 uniforms 不上传（纯 uniform ✓、纯 varying ✓、共存 ✗）。
**解法**：把参数烘进 shader 源码、变动时重建（120ms 防抖）。另外 fragment 里没有 \`normalMC\`，要在 \`vertexMain\` 存进自定义 varying。

## three 模块在 file:// 下动态 import 被拦
ES module 的 CORS 策略对 \`file://\` 一律拒绝。
**解法**：本地验证一律起 \`python -m http.server\`，别跟 file 协议较劲。

## 固定步长物理引擎：别把帧率和步频混在一根计时器上
渲染帧率波动时，用累加器（accumulator）固定步长推进物理，渲染插值输出。实测 61 步/秒稳定；关掉累加器改跟帧率，立刻可见穿模。`},{id:"kb-001",category:"frontend",title:"把 Three.js 塞进 React 项目的正确姿势",date:"2025-08-12",tags:["Three.js","React"],desc:"不引 R3C 也能优雅协作：生命周期、resize、 dispose 的完整清单。",body:`## 为什么要谨慎集成
Three.js 是命令式 API，React 是声明式框架，直接混用最容易踩的坑是 **重复初始化** 和 **内存泄漏**。

## 三条军规
1. 所有 Three 资源在 \`useEffect\` 里创建，return 里 \`dispose()\` —— 一个都不能少
2. 尺寸变化用 \`ResizeObserver\`，不要监听 window.resize
3. 渲染循环用 \`requestAnimationFrame\` 并在卸载时 \`cancelAnimationFrame\`

### 最小可运行骨架

\`\`\`js
useEffect(() => {
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
  let raf = requestAnimationFrame(loop);
  return () => {
    cancelAnimationFrame(raf);
    renderer.dispose();
  };
}, []);
\`\`\`

## 什么时候上 react-three-fiber
组件数量多、场景结构频繁变化时，R3C 的声明式模型收益巨大；单一全屏场景（首页背景、大屏）手动集成反而更轻。`},{id:"kb-002",category:"frontend",title:"动效性能预算：60fps 的一毫秒都花在哪",date:"2025-06-30",tags:["性能","动画"],desc:"从渲染管线讲起，给出一套可直接抄的动效性能预算表。",body:`## 帧预算只有 16.7ms
一帧内要完成 **JS 执行 → Style → Layout → Paint → Composite**。动效卡顿的根源九成是触发了 Layout 或长 JS 任务。

## 预算表（可直接抄）
- JS 单任务：< 4ms，超出就切片
- transform/opacity 之外的动画属性：一律禁止
- 并行动画数（重元素）：full 模式 ≤ 3，lite 模式 ≤ 1
- 阴影模糊半径 ≤ 30px，且不作用在滚动容器内

## 工具链
Performance 面板看「Rendering → FPS meter」，再配合 \`will-change\` 诊断层爆炸。记住：\`will-change\` 是手术刀不是维生素。`},{id:"kb-003",category:"gamedev",title:"Web 小游戏的「手感」清单",date:"2025-04-18",tags:["游戏开发","手感"],desc:"画面之外，让玩家觉得「脆」的 11 个技术细节。",body:`## 手感 = 输入响应 + 反馈密度
画面决定第一印象，手感决定留存。

## 清单
1. 输入采样固定在物理帧，渲染插值跟随
2. 所有可交互物体 hover 后 **必须在 100ms 内** 有反馈
3. 相机永远比角色慢半拍（lerp 0.08~0.15）
4. 命中停顿（hit-stop）30~60ms，打击感翻倍
5. 屏幕震动幅度 ≤ 8px、时长 ≤ 200ms
6. 音效预加载，解码放 AudioContext.suspend 之外

## 验证方法
录屏放慢 4 倍逐帧看，任何一次「输入到可见变化」超过 6 帧就是 bug。`},{id:"kb-004",category:"gamedev",title:"用 GLSL 写 noise：从 value noise 到 FBM",date:"2025-02-09",tags:["Shader","程序化生成"],desc:"地形、云、火焰共用的底层技术，一篇讲透实现与调参。",body:`## Value Noise 起步
哈希打点 + 平滑插值，10 行 GLSL 搞定。

## FBM = 分形叠加
把不同频率的 noise 按 **振幅减半、频率翻倍** 叠加 4~6 层，就能得到自然纹理。

\`\`\`glsl
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p *= 2.0;
    a *= 0.5;
  }
  return v;
}
\`\`\`

## 调参经验
- 层数 5 是性价比拐点，再多肉眼难辨
- 用 \`domain warping\`（用 noise 扭曲 noise 的输入）能立刻获得流体感
- 把时间作为第三维输入，就是最便宜的动态云`},{id:"kb-005",category:"frontend",title:"数字孪生前端的三个数据层",date:"2024-12-21",tags:["数字孪生","架构"],desc:"把「实时数据 → 渲染」拆成三层，大屏才不会越写越乱。",body:`## 三层模型
1. **接入层**：WebSocket/MQTT 统一收敛，断线重连与心跳全在这层
2. **状态层**：测点 → 实体 → 场景的映射表，任何 UI 只读这层
3. **渲染层**：只消费状态层的 diff，禁止直接持有 socket 引用

## 好处
换数据源只改接入层；做回放/仿真只是给状态层换一个 driver；渲染层永远不知道「数据从哪来」。

## 踩坑记录
某项目把 socket 写进了 Three 组件，后来接第二路数据源时重构了两周。分层不是教条，是给三个月后的自己留活路。`},{id:"kb-006",category:"gamedev",title:"Cocos 到 Three.js：组件思维 vs 场景图思维",date:"2024-10-02",tags:["游戏开发","Three.js"],desc:"从游戏引擎转 Web 3D 的心智模型迁移笔记。",body:`## 最大差异
Cocos/Unity 是 **组件挂在节点上**，Three.js 是 **场景图 + 手动组装**。没有 Inspector，一切皆代码。

## 迁移建议
- 把「预制体」翻译成工厂函数，返回 Group
- 把「生命周期」翻译成显式的 update(dt) 注册表
- 资源加载统一走 LoadingManager，不然进度条做不了

## 何时反过来
重交互、多 UI 的 2.5D 项目，Cocos 的 UI 体系依然省时省力；纯 3D 沉浸式才值得上 Three 原生。`}],gs=[{id:"all",label:"全部",icon:"✦"},{id:"frontend",label:"前端开发",icon:"⌘"},{id:"gamedev",label:"游戏开发",icon:"⚙"},{id:"reading",label:"读书笔记",icon:"📖"},{id:"tech",label:"技术笔记",icon:"🛠"},{id:"product",label:"产品与想法",icon:"💡"}],cc=[..._f,...gw],Te={name:"路小垚",realName:"鲁博",enName:"Bo Lu",title:"前端负责人 · 可视化低代码 / 三维可视化 / AI 提效",location:"杭州 · 萧山区 / 滨江区",phone:"18968045217",email:"173774418@qq.com",wechat:"",github:"",blog:"",target:"前端负责人 / 前端技术管理",status:"在职",intro:"9 年前端、5 年带团队，做过四件「从 0 到 1 立规矩」的事：两套组件库、一次平台微前端化拆分、一次 Vue2 → Vue3 整体升级（改造期间不停版）、一套基于 Cesium 的三维组件库。擅长的不是写完需求，而是把散在各项目里的重复劳动收成组件、文档和流程；近一年把 AI 放进交付链，做的是「模型执行、人验收」的分工。"},vw=[{label:"求职意向",value:Te.target},{label:"期望城市",value:Te.location},{label:"当前状态",value:Te.status}],yw=[{key:"系统设计",detail:"把单体前端拆成可独立开发、独立部署的子应用，主应用只做壳与统一鉴权，城市定制项目改为插件式接入；主导 Vue2 → Vue3 升级时先做兼容层与依赖梳理，再按模块灰度替换，配套回归清单，保证业务方改造期间不停版。"},{key:"可视化与三维",detail:"基于 Cesium 封装天地图常用能力：飞线、圆聚合、呼吸围墙、白模加载、模型加载、漫游，服务驾驶舱与空间地理两条产品线；从 jQuery + 天地图时代一路做到三维，Cesium / Mapbox / 天地图 / 百度地图都落地过点线面能力。"},{key:"AI 工程化",detail:"把 AI 用在三个具体位置：需求拆解与方案比选、跨文件重构、性能问题定位。所有模型产出必须过三关——渲染性能、边界情况、可维护性——不过关就退回重写。做的是流程，不是装个插件。"},{key:"团队与产品",detail:"带团队负责招聘、培养、项目排布；沉淀五套组件库（业务 / 可视化 / 地图 / 小程序 / H5）+ 技术文档 + 培训视频 + Jenkins 自动化部署，用来对付人员流动大、能力差异大的问题。作为产品 PO 跑完过低代码平台从立项到交付的全程。"}],bw=[{group:"语言 / 框架",items:["JavaScript (ES6+)","TypeScript","Vue 2 / 3","React","Taro","Node + Egg"]},{group:"三维与可视化",items:["Cesium","天地图 / Mapbox / 百度地图 API","Three.js","WebGL","ECharts","AntV G6"]},{group:"低代码 / 编辑器",items:["可视化低代码平台","表单编辑器","流程编辑器","富文本 / Swiper 动效"]},{group:"工程与架构",items:["微前端（qiankun / wujie）","Webpack 分包","Jenkins 自动化部署","MySQL","GitLab"]},{group:"AI 与提效",items:["AI 工作流搭建","Prompt 资产沉淀","AI 代码审查规范","Cursor / Claude Code"]},{group:"管理与方法",items:["团队管理 / 招聘 / 培养","产品 PO（立项到交付）","Axure / Visio","需求规格与操作手册"]}],xw=[{date:"2022.05 — 至今",role:"前端开发（停车运营部）",org:"海康威视",summary:"负责基线停车平台与城市定制项目前端，四个牵头项。",points:["平台微前端化：按业务域拆子应用，主应用收口路由、鉴权、公共依赖。解决多团队并行互相阻塞、发布互相牵连的老问题，此后各城市定制改为插件式接入。","组件库（Vue2 / Vue3 两套）：统一交互与代码规范，沉淀业务高频组件，配套文档与示例；Vue3 组件库同时作为技术栈迁移的地基。","Vue2 → Vue3 整体升级：兼容层与依赖梳理、公共逻辑重构、按模块灰度替换、回归清单制定，改造期间业务不停版。","AI 工作流：把停车业务里重复的分析与配置动作拆成固定步骤交给模型执行，人只做验收——先解决「哪几步可以让出去」，再谈效率。","城市定制：基于公司视频插件做值守监控（多路视频、实时告警、事件处置闭环）；公众号页面与小程序的点聚合优化，解决点位密集时的渲染卡顿与交互失准。"]},{date:"2019.10 — 2022.04",role:"前端经理",org:"浙江非线数联科技股份有限公司",summary:"前端团队管理 + 团队基础建设 + 可视化产品 PO。",points:["负责前端团队管理、新人招聘、各项目人员排布，在需求理解与技术方案上带组内成员；与项目经理、UE 共同梳理需求，紧急或大型项目亲自下场。","搭团队基础建设：五套组件库 + 技术文档 + 培训视频 + Jenkins 自动化部署，推动研发流程规范化。","2021.03 起任「四维驾驶舱」可视化产品 PO，负责立项、需求分析、产品定位、排期与任务拆解，Axure 原型、Visio 流程、需求规格说明书；同时兼前端架构与难点攻坚。"]},{date:"2017.05 — 2019.09",role:"前端开发工程师",org:"浙江非线数联科技股份有限公司",summary:"从政务审批系统起步，完成 jQuery → Vue 的技术栈过渡。",points:["独立负责项目前端：按原型与设计图快速搭建、与后端联调、处理复杂业务逻辑。","表单编辑器一套代码覆盖 80% 以上业务逻辑，后用 Webpack 拆包按需加载并以 ES6 重写，为公司转 Vue 探路。"]}],jw=[{name:"四维驾驶舱 · 可视化低代码平台",role:"产品 PO + 前端技术负责人 · 2021.03 — 至今",detail:"数字化政府改革背景下立项。负责两件事：产品定什么（需求分析、产品定位、排期拆解），技术怎么兜住（架构设计、可视化组件封装）。难点不在画图，在配置能力与性能上限的平衡——大屏数据量上来后靠分层渲染与按需加载，而不是给每个组件打补丁。"},{name:"停车平台 · 微前端化 + Vue2 → Vue3 升级",role:"牵头 · 2022.05 — 至今",detail:"两件事叠在一起：先把单体拆开，再把技术栈换掉。顺序是关键——先拆再升，才能按子应用逐个灰度，出问题只影响一个域。结果：多团队并行不再互相阻塞，城市定制从「改主代码」变成「接插件」。"},{name:"Cesium 三维组件库",role:"前端负责人 · 2021.12 — 至今",detail:"查文档、拆同类产品，自己划封装边界：飞线、圆聚合、呼吸围墙、白模、模型加载、漫游。判准是业务方不需要懂 Cesium——传坐标、传样式、传数据，组件自己处理层级、显隐与卸载。"}],ww=[{name:"浙里办公安专区 / 民政事项 · 表单编辑器",note:"一套代码覆盖 80% 业务逻辑，Webpack 按需加载 + ES6 重写"},{name:"省办公厅公文交换平台",note:"Vue + Ant Design Vue + ECharts；单位选择弹窗封成 jQuery 插件给第三方复用"},{name:"台州 / 嘉兴企业复工系统",note:"疫情期高频需求变化；审批流程按钮与附件的细粒度权限控制"},{name:"空间地理平台 / 重点人员管控系统",note:"天地图 / Mapbox / 百度地图点线面；轨迹与越界监控"},{name:"公司面试系统",note:"自己画原型、设计表、Node + Egg 写服务端，React PC 端 + Vue3/Taro 小程序"},{name:"公司 OA · 云上政工 · 数字改革门户",note:"复杂审批流、直播与题库、动效与 CMS 编辑器"},{name:"数据中台公安部项目 · IE9 兼容",note:"逐条归类兼容问题，多数靠全局配置解决，Node 按变量加载不同版本插件"}],Sw=[{where:"需求与方案",ai:"拆需求、给两到三个技术方案并列出取舍",human:"判断哪个方案符合现有架构与人力"},{where:"重构",ai:"跨文件改调用、补类型、统一命名",human:"口径是否一致、有没有隐式副作用"},{where:"性能排查",ai:"扫是否存在 O(n²)、重复 diff、无谓重渲染",human:"用 Performance 面板实测确认"},{where:"测试",ai:"生成边界用例（空数据、超长文本、权限缺失）",human:"补业务侧真实场景"}],kw="所有 AI 产出必须过三关：渲染性能、边界情况、可维护性。不过关就退回重写——AI 不是替我写代码，是替我把脏活先做一遍。",Ew=[{name:"踩坑手册",detail:"按「现象 → 定位过程 → 根因 → 修法」归档的工程实录，含微前端子应用脚本漏执行、CSS @property 不继承、WebGL uniform 静默失效等典型问题。"},{name:"技术实验室",detail:"七个可交互前端实验室，覆盖 CSS（容器查询、锚点定位、masonry、原生 dialog）、Three.js（噪声地形、合批城堡 draw call 对比实验、十万粒子 GPU 漂移、GLTF 骨骼动画）、原生 WebGL（手写顶点与 mat4、冯氏光照、帧缓冲与颜色拾取）、Canvas 粒子场、JS 新 API，以及 React / Vue 双实现动效组件。"},{name:"前端 AI Skill 库",detail:"把常用 AI 编程技能整理成团队可查的文档库，解决「一个人找到、全组复用」的问题。"}],Cw=[{date:"2013.09 — 2017.06",school:"浙江理工大学 · 生物技术",detail:"本科"}],Tw=["信息系统项目管理师（高级）","系统集成项目管理工程师（中级）","PMP（在考）","浙江非线 2018 年优秀员工","浙江非线 2019 年优秀员工"],Pw=[{to:"/portfolio",icon:"◈",tone:"",title:"作品展示",desc:"在做的 AI 产品、写过的代码，每个项目都有可点开的详情"},{to:"/knowledge",icon:"✎",tone:"magenta",title:"知识库",desc:"前端与游戏开发的沉淀笔记，按分类浏览、可搜索"},{to:"/studio",icon:"⌘",tone:"amber",title:"工作台",desc:"笔记本、计划板——日常的中控台，只有我能进"},{to:"/garden",icon:"✿",tone:"green",title:"私人花园",desc:"不对外公开的后花园：日志、图片与视频的时间线"}],Aw=["idea-box","nebula-folio","micro-demo"],Nw={ai:"◆",web:"❖"},Rw=Aw.map(e=>oi.find(t=>t.id===e)).filter(Boolean),Lw=[..._f].sort((e,t)=>e.date<t.date?1:-1).slice(0,3);function Cm({perfMode:e}){const t=w.useRef(null);return w.useEffect(()=>{if(e!=="full")return;let n=null,r=!1;return Ry(async()=>{const{createNebulaScene:i}=await import("./nebula-pGnLUUxI.js");return{createNebulaScene:i}},[],import.meta.url).then(({createNebulaScene:i})=>{if(!r)try{n=i(t.current)}catch{n=null}}).catch(()=>{}),()=>{var i;r=!0,(i=n==null?void 0:n.dispose)==null||i.call(n)}},[e]),c.jsxs("div",{className:"page",style:{paddingTop:"var(--nav-h)"},children:[c.jsxs("section",{className:"hero",children:[c.jsx("div",{id:"hero-canvas",ref:t}),c.jsxs("div",{className:`hero-css-stars ${e==="lite"?"on":""}`,children:[c.jsx("span",{className:"star-layer s1"}),c.jsx("span",{className:"star-layer s2"}),c.jsx("span",{className:"star-layer s3"})]}),c.jsxs("div",{className:"hero-inner container",children:[c.jsx(he.p,{className:"hero-kicker",initial:{opacity:0,y:14},animate:{opacity:1,y:0},transition:{delay:.1,duration:.6},children:c.jsx(pw,{text:"EXPLORER · FRONTEND / AI PRODUCTS",speed:55,maxIterations:12})}),c.jsxs(he.h1,{className:"hero-title",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{delay:.22,duration:.7,ease:[.22,1,.36,1]},children:["我对世界的",c.jsx("br",{}),"默认设置是 ",c.jsx("span",{className:"grad",children:"好奇"}),"。"]}),c.jsxs(he.p,{className:"hero-sub",initial:{opacity:0,y:24},animate:{opacity:1,y:0},transition:{delay:.36,duration:.7},children:["你好，我是 ",Te.name,"。不停在舒适圈里，是我唯一坚持的舒适。 这里放我做的东西、读的书，和一个正在长出来的产品。"]}),c.jsx(he.div,{className:"hero-actions",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.6},children:c.jsx(mw,{as:"span",color:"#22d3ee",speed:"6s",children:c.jsx(Zt,{to:"/portfolio",className:"btn btn-primary",children:"进入作品集 →"})})}),c.jsxs(he.div,{className:"hero-stats",initial:{opacity:0},animate:{opacity:1},transition:{delay:.72,duration:.8},children:[c.jsxs("div",{children:[c.jsxs("div",{className:"hero-stat-num",children:[oi.length,"+"]}),c.jsx("div",{className:"hero-stat-label",children:"PROJECTS"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"hero-stat-num",children:_f.length}),c.jsx("div",{className:"hero-stat-label",children:"NOTES"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"hero-stat-num",children:["5",c.jsx("span",{style:{fontSize:"1.1rem"},children:" yrs"})]}),c.jsx("div",{className:"hero-stat-label",children:"EXPERIENCE"})]})]})]}),c.jsx("div",{className:"scroll-hint",children:"SCROLL"})]}),c.jsxs("section",{className:"container section-gap",children:[c.jsx(ve,{children:c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"MODULES"}),c.jsx("h2",{className:"page-title",style:{fontSize:"clamp(1.5rem,3vw,2.1rem)"},children:"五个房间，一座站"})]})}),c.jsx(Pr,{className:"module-grid",children:Pw.map(n=>c.jsx(Ar,{children:c.jsxs(Zt,{to:n.to,className:"card module-card",children:[c.jsx("span",{className:"module-arrow",children:"→"}),c.jsx("div",{className:`module-icon ${n.tone}`,children:n.icon}),c.jsx("div",{className:"card-title",children:n.title}),c.jsx("div",{className:"card-text",children:n.desc})]})},n.to))})]}),c.jsxs("section",{className:"container section-gap",children:[c.jsx(ve,{children:c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"FEATURED"}),c.jsx("h2",{className:"page-title",style:{fontSize:"clamp(1.5rem,3vw,2.1rem)"},children:"精选作品"})]})}),c.jsx(Pr,{className:"grid-3",children:Rw.map(n=>c.jsx(Ar,{children:c.jsxs(Zt,{to:"/portfolio",className:"card",children:[c.jsx("div",{className:"work-cover",style:{background:Ly[n.accent]},children:c.jsx("div",{className:"cover-inner",children:c.jsx("span",{style:{fontSize:"3.4rem",color:wr[n.accent],opacity:.85,textShadow:`0 0 34px ${wr[n.accent]}`},children:Nw[n.category]})})}),c.jsx("div",{className:"card-title",children:n.title}),c.jsx("div",{className:"card-text",children:n.subtitle}),c.jsx("div",{className:"work-meta",children:n.tags.slice(0,3).map(r=>c.jsx("span",{className:"badge",children:r},r))})]})},n.id))})]}),c.jsxs("section",{className:"container section-gap",children:[c.jsx(ve,{children:c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"JOURNAL"}),c.jsx("h2",{className:"page-title",style:{fontSize:"clamp(1.5rem,3vw,2.1rem)"},children:"最新笔记"})]})}),c.jsx(ve,{children:c.jsx("div",{className:"panel",style:{padding:"10px 22px"},children:Lw.map(n=>c.jsx(Zt,{to:"/knowledge",style:{display:"block",color:"inherit"},children:c.jsxs("div",{className:"article-item",children:[c.jsxs("div",{children:[c.jsx("div",{className:"article-item-title",children:n.title}),c.jsx("div",{className:"article-item-desc",children:n.desc})]}),c.jsx("span",{className:"article-item-date",children:n.date})]})},n.id))})})]})]})}function Dw({work:e,onClose:t}){var r;if(w.useEffect(()=>{document.body.classList.add("modal-open");const i=s=>s.key==="Escape"&&t();return window.addEventListener("keydown",i),()=>{document.body.classList.remove("modal-open"),window.removeEventListener("keydown",i)}},[t]),!e)return null;const n=wr[e.accent]||wr.cyan;return c.jsx(he.div,{className:"modal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:t,children:c.jsxs(he.div,{className:"modal-card",initial:{opacity:0,y:34,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.98},transition:{duration:.28,ease:[.22,1,.36,1]},onClick:i=>i.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":e.title,children:[c.jsx("button",{className:"modal-close",onClick:t,"aria-label":"关闭",children:"✕"}),c.jsx("span",{className:"badge badge-cyan",children:e.year}),c.jsx("h2",{style:{margin:"14px 0 4px",fontSize:"1.6rem"},children:e.title}),c.jsx("p",{style:{color:"var(--text-mid)"},children:e.subtitle}),c.jsx("div",{className:"work-meta",children:e.tags.map(i=>c.jsx("span",{className:"badge",children:i},i))}),c.jsx("p",{style:{color:"#ccd6f6",margin:"16px 0"},children:e.desc}),c.jsx("div",{className:"tool-group-title",children:"亮点"}),c.jsx("ul",{style:{margin:"0 0 8px 20px",color:"var(--text-mid)",fontSize:"0.92rem"},children:e.highlights.map(i=>c.jsxs("li",{style:{margin:"6px 0"},children:[c.jsx("span",{style:{color:n,marginRight:6},children:"◆"}),i]},i))}),e.appId&&c.jsx(Zt,{className:"btn btn-sm btn-primary",to:`/apps/${e.appId}`,style:{marginRight:10},children:"进入应用 →"}),((r=e.links)==null?void 0:r.length)>0&&c.jsx("div",{className:"work-links",children:e.links.map(i=>c.jsxs("a",{className:"btn btn-sm btn-primary",href:i.url,target:"_blank",rel:"noopener noreferrer",children:[i.label," ↗"]},i.label))})]})})}const Mw={ai:"◆",web:"❖"},Iw={ai:"badge-violet",web:"badge-cyan"},_w=Object.fromEntries(Qa.map(e=>[e.id,e.label]));function Ow(e){const t=e.currentTarget.getBoundingClientRect(),n=e.clientX-(t.left+t.width/2),r=e.clientY-(t.top+t.height/2),i=Math.atan2(r,n)*180/Math.PI+90;e.currentTarget.style.setProperty("--beam-angle",`${i-180}deg`),e.currentTarget.style.setProperty("--mx",`${e.clientX-t.left}px`),e.currentTarget.style.setProperty("--my",`${e.clientY-t.top}px`)}function Uw(){const[e,t]=ol(),[n,r]=w.useState(()=>{const l=e.get("cat");return Qa.some(u=>u.id===l)?l:"all"}),[i,s]=w.useState(null);w.useEffect(()=>{const l=e.get("cat");r(Qa.some(u=>u.id===l)?l:"all")},[e]);const a=l=>{r(l),t(l==="all"?{}:{cat:l},{replace:!0})},o=w.useMemo(()=>n==="all"?oi:oi.filter(l=>l.category===n),[n]);return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"PORTFOLIO"}),c.jsx("h1",{className:"page-title",children:"作品展示"}),c.jsx("p",{className:"page-desc",children:"在做的产品，和做出来的东西。点开卡片看详情。"})]}),c.jsx("div",{className:"chip-row",role:"tablist","aria-label":"作品分类",children:Qa.map(l=>c.jsxs("button",{role:"tab","aria-selected":n===l.id,className:`chip ${n===l.id?"active":""}`,onClick:()=>a(l.id),children:[c.jsx("span",{className:"chip-dot"}),l.label,c.jsx("span",{className:"chip-count",children:l.id==="all"?oi.length:oi.filter(u=>u.category===l.id).length})]},l.id))}),c.jsx(Xn,{mode:"wait",children:c.jsx(he.div,{initial:{opacity:0,y:16},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.28},children:o.length===0?c.jsxs("div",{className:"empty",children:[c.jsx("div",{className:"empty-icon",children:"🛰"}),c.jsx("div",{className:"empty-title",children:"这个分类还没有作品"}),c.jsx("div",{children:"去 src/data/portfolio.js 里加一个吧"})]}):c.jsx(Pr,{className:"grid-2",children:o.map(l=>c.jsx(Ar,{children:c.jsxs("button",{className:"card work-card-btn",onClick:()=>s(l),onMouseMove:Ow,style:{textAlign:"left",width:"100%",cursor:"pointer",color:"inherit"},children:[c.jsxs("div",{className:"work-cover",style:{background:Ly[l.accent]},children:[c.jsx("div",{className:"cover-inner",children:c.jsx("span",{className:"cover-float",style:{fontSize:"3.6rem",color:wr[l.accent],textShadow:`0 0 40px ${wr[l.accent]}`},children:Mw[l.category]})}),c.jsx("span",{className:`badge ${Iw[l.category]} cover-cat`,children:_w[l.category]})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10},children:[c.jsx("div",{className:"card-title",children:l.title}),c.jsx("span",{className:"article-item-date",children:l.year})]}),c.jsx("div",{className:"card-text",children:l.desc}),c.jsx("div",{className:"work-meta",children:l.tags.map(u=>c.jsx("span",{className:"badge",children:u},u))}),c.jsx("span",{style:{color:wr[l.accent],fontSize:"0.85rem",fontWeight:700},children:"查看详情 →"})]})},l.id))})},n)}),c.jsx(Xn,{children:i&&c.jsx(Dw,{work:i,onClose:()=>s(null)})})]})}const Dy="R7kq-m2Xw-L9pv";function Vw(e){const t=new Date(e),n=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}function Fw({expired:e,until:t}){return c.jsx("div",{className:"page container",style:{maxWidth:560,minHeight:"60vh",display:"grid",alignItems:"center"},children:c.jsxs("div",{className:"card",style:{textAlign:"center",padding:"48px 36px"},children:[c.jsx("div",{style:{fontSize:44,marginBottom:18},children:"🔒"}),c.jsx("h2",{style:{marginBottom:12},children:e?"链接已过期":"这里是私密页面"}),c.jsx("p",{style:{color:"var(--text-mid)",lineHeight:1.8,fontSize:14},children:e?`这份简历的查看权限已在 ${Vw(t)} 到期。如仍需要，请联系本人获取新的链接。`:"这份简历不对外公开，只通过带时限的专用链接查看。如需查看，请联系本人获取链接。"})]})})}const Ww=[{icon:"☎",label:"手机",value:Te.phone,href:`tel:${Te.phone}`},{icon:"✉",label:"邮箱",value:Te.email,href:`mailto:${Te.email}`},{icon:"❋",label:"微信",value:Te.wechat,href:null},{icon:"⌨",label:"GitHub",value:Te.github,href:Te.github},{icon:"✎",label:"博客",value:Te.blog,href:Te.blog}].filter(e=>e.value),Bw={display:"inline-block",padding:"4px 10px",borderRadius:999,fontSize:12.5,lineHeight:1.7,background:"rgba(120,150,255,0.10)",border:"1px solid var(--line-soft)",color:"var(--text-mid)",marginRight:6,marginBottom:6},Gw={position:"relative",paddingLeft:16,marginTop:7,color:"var(--text-mid)",fontSize:"0.87rem",lineHeight:1.8},Vr={padding:"28px 30px",marginTop:24};function Hw({children:e,first:t}){return c.jsx("div",{style:{fontSize:12.5,letterSpacing:2,color:"var(--cyan)",margin:t?"0 0 14px":"26px 0 14px",paddingBottom:8,borderBottom:"1px dashed var(--line-soft)"},children:e})}function zw(){const[e]=ol(),t=e.get("t"),n=Number(e.get("e")),r=t===Dy,i=Number.isFinite(n)&&n>Date.now();return!r||!i?c.jsx(Fw,{expired:r&&n<=Date.now(),until:n}):c.jsxs("div",{className:"page container",children:[c.jsx(ve,{children:c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"RESUME"}),c.jsxs("h1",{className:"page-title",children:[Te.realName," ",c.jsx("span",{style:{fontSize:"1rem",color:"var(--text-low)",fontWeight:400},children:Te.enName})]}),c.jsxs("p",{className:"page-desc",children:[Te.title," · ",Te.location]})]})}),c.jsxs("div",{className:"resume-grid",children:[c.jsxs("div",{className:"resume-side",children:[c.jsx(ve,{children:c.jsxs("section",{className:"card",style:{marginBottom:22},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,marginBottom:14},children:[c.jsx("div",{className:"logo-orb",style:{width:54,height:54,borderRadius:16,flexShrink:0},"aria-hidden":!0}),c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"1.35rem",fontWeight:800},children:Te.realName}),c.jsx("div",{style:{color:"var(--text-mid)",fontSize:"0.85rem"},children:Te.title})]})]}),c.jsx("p",{style:{color:"var(--text-mid)",fontSize:"0.9rem",lineHeight:1.85},children:Te.intro})]})}),c.jsx(ve,{delay:.06,children:c.jsxs("section",{className:"card",style:{marginBottom:22},children:[c.jsx("div",{className:"card-title",children:"求职意向"}),vw.map(s=>c.jsxs("div",{className:"contact-row",children:[c.jsx("span",{style:{width:60,color:"var(--text-low)",fontSize:"0.82rem",flexShrink:0},children:s.label}),c.jsx("span",{children:s.value})]},s.label))]})}),c.jsx(ve,{delay:.1,children:c.jsxs("section",{className:"card",style:{marginBottom:22},children:[c.jsx("div",{className:"card-title",children:"技能栈"}),bw.map((s,a)=>c.jsxs("div",{style:{marginBottom:12},children:[c.jsx("div",{style:{fontSize:12,letterSpacing:1,color:"var(--text-low)",marginBottom:7},children:s.group}),c.jsx("div",{children:s.items.map(o=>c.jsx(he.span,{style:Bw,initial:{opacity:0,y:6},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.3,delay:a*.03},children:o},o))})]},s.group))]})}),c.jsx(ve,{delay:.14,children:c.jsxs("section",{className:"card",style:{marginBottom:22},children:[c.jsx("div",{className:"card-title",children:"联系方式"}),Ww.map(s=>c.jsxs("div",{className:"contact-row",children:[c.jsx("span",{style:{color:"var(--cyan)",width:18,textAlign:"center"},children:s.icon}),c.jsx("span",{style:{width:46,color:"var(--text-low)",fontSize:"0.82rem"},children:s.label}),s.href?c.jsx("a",{href:s.href,target:"_blank",rel:"noopener noreferrer",children:s.value}):c.jsx("span",{children:s.value})]},s.label))]})}),c.jsx(ve,{delay:.18,children:c.jsxs("section",{className:"card",children:[c.jsx("div",{className:"card-title",children:"证书与荣誉"}),Tw.map(s=>c.jsxs("div",{style:{fontSize:"0.86rem",color:"var(--text-mid)",padding:"5px 0",lineHeight:1.6},children:["· ",s]},s))]})})]}),c.jsxs("div",{children:[c.jsx(ve,{children:c.jsxs("section",{className:"card",style:Vr,children:[c.jsx("div",{className:"card-title",style:{fontSize:"1.15rem",marginBottom:18},children:"核心能力"}),yw.map((s,a)=>c.jsxs("div",{style:{marginTop:a?18:0},children:[c.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:10,marginBottom:4},children:[c.jsxs("span",{style:{fontFamily:"var(--font-mono)",fontSize:"0.74rem",color:"var(--cyan)",letterSpacing:1,flexShrink:0},children:["0",a+1]}),c.jsx("span",{style:{fontWeight:700,fontSize:"0.94rem"},children:s.key})]}),c.jsx("div",{style:{color:"var(--text-mid)",fontSize:"0.87rem",lineHeight:1.85},children:s.detail})]},s.key))]})}),c.jsx(ve,{delay:.06,children:c.jsxs("section",{className:"card",style:Vr,children:[c.jsx("div",{className:"card-title",style:{fontSize:"1.15rem",marginBottom:22},children:"工作经历"}),c.jsx(Pr,{stagger:.12,children:xw.map(s=>c.jsx(Ar,{children:c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-date",children:s.date}),c.jsx("div",{className:"timeline-role",children:s.role}),c.jsx("div",{className:"timeline-org",children:s.org}),s.summary&&c.jsx("div",{className:"timeline-detail",style:{color:"var(--text)"},children:s.summary}),s.points.map(a=>c.jsxs("div",{style:Gw,children:[c.jsx("span",{style:{position:"absolute",left:1,top:0,color:"var(--text-low)"},children:"—"}),a]},a.slice(0,12)))]})},s.date))})]})}),c.jsx(ve,{delay:.1,children:c.jsxs("section",{className:"card",style:Vr,children:[c.jsx("div",{className:"card-title",style:{fontSize:"1.15rem",marginBottom:8},children:"代表项目"}),c.jsx("p",{style:{color:"var(--text-low)",fontSize:"0.82rem",marginBottom:20},children:"只留三个能讲二十分钟的，其余压到下面一行一个。"}),jw.map(s=>c.jsxs("div",{className:"timeline-item",style:{marginBottom:18},children:[c.jsx("div",{className:"timeline-role",children:s.name}),c.jsx("div",{className:"timeline-date",style:{marginTop:2},children:s.role}),c.jsx("div",{className:"timeline-detail",children:s.detail})]},s.name)),c.jsx(Hw,{children:"其他项目"}),ww.map(s=>c.jsxs("div",{style:{fontSize:"0.85rem",lineHeight:1.8,padding:"3px 0"},children:[c.jsx("span",{style:{color:"var(--text)"},children:s.name}),c.jsxs("span",{style:{color:"var(--text-low)"},children:[" — ",s.note]})]},s.name))]})}),c.jsx(ve,{delay:.14,children:c.jsxs("section",{className:"card",style:Vr,children:[c.jsx("div",{className:"card-title",style:{fontSize:"1.15rem",marginBottom:8},children:"AI 实践"}),c.jsx("p",{style:{color:"var(--text-low)",fontSize:"0.82rem",marginBottom:18},children:"不写「用过什么工具」，只写它在流程里的位置，以及谁负责验收。"}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:"0.9fr 1.6fr 1.3fr",gap:"10px 14px",fontSize:"0.84rem"},children:[c.jsx("div",{style:{color:"var(--text-low)",fontSize:12,letterSpacing:1},children:"位置"}),c.jsx("div",{style:{color:"var(--text-low)",fontSize:12,letterSpacing:1},children:"交给 AI"}),c.jsx("div",{style:{color:"var(--text-low)",fontSize:12,letterSpacing:1},children:"人负责"}),Sw.map(s=>c.jsxs("div",{style:{display:"contents"},children:[c.jsx("div",{style:{color:"var(--cyan)",fontWeight:600,paddingTop:6,borderTop:"1px solid var(--line-soft)"},children:s.where}),c.jsx("div",{style:{color:"var(--text-mid)",paddingTop:6,borderTop:"1px solid var(--line-soft)",lineHeight:1.7},children:s.ai}),c.jsx("div",{style:{color:"var(--text-mid)",paddingTop:6,borderTop:"1px solid var(--line-soft)",lineHeight:1.7},children:s.human})]},s.where))]}),c.jsx("div",{className:"panel",style:{marginTop:18,padding:"14px 18px",fontSize:"0.86rem",color:"var(--text-mid)",lineHeight:1.8},children:kw})]})}),c.jsx(ve,{delay:.18,children:c.jsxs("section",{className:"card",style:Vr,children:[c.jsx("div",{className:"card-title",style:{fontSize:"1.15rem",marginBottom:18},children:"技术输出"}),Ew.map(s=>c.jsxs("div",{style:{marginBottom:14},children:[c.jsx("div",{style:{fontWeight:700,fontSize:"0.92rem",marginBottom:4},children:s.name}),c.jsx("div",{style:{color:"var(--text-mid)",fontSize:"0.86rem",lineHeight:1.8},children:s.detail})]},s.name))]})}),c.jsx(ve,{delay:.22,children:c.jsxs("section",{className:"card",style:Vr,children:[c.jsx("div",{className:"card-title",style:{fontSize:"1.15rem",marginBottom:18},children:"教育背景"}),Cw.map(s=>c.jsxs("div",{className:"timeline-item",children:[c.jsx("div",{className:"timeline-date",children:s.date}),c.jsx("div",{className:"timeline-role",children:s.school}),c.jsx("div",{className:"timeline-detail",children:s.detail})]},s.date))]})}),c.jsx(ve,{delay:.26,children:c.jsxs("div",{className:"panel",style:{marginTop:24,padding:"18px 24px",display:"flex",gap:14,alignItems:"center",flexWrap:"wrap"},children:[c.jsx("span",{style:{color:"var(--text-mid)",fontSize:"0.9rem"},children:"这份简历在线维护，链接有时效，过期自动上锁。"}),c.jsx("a",{className:"btn btn-sm btn-primary",href:`mailto:${Te.email}`,children:"邮件联系"})]})})]})]})]})}function Uu(e){const t=String(e).replace(/\r\n/g,`
`).split(`
`),n=[];let r=[];const i=()=>{r.length&&(n.push(`<p>${r.map(Sa).join("<br/>")}</p>`),r=[])};let s=0;for(;s<t.length;){const a=t[s];if(/^```/.test(a)){i();const l=[];for(s++;s<t.length&&!/^```/.test(t[s]);)l.push(t[s]),s++;s++,n.push(`<pre><code>${My(l.join(`
`))}</code></pre>`);continue}if(/^\s*$/.test(a)){i(),s++;continue}const o=a.match(/^(#{2,3})\s+(.*)$/);if(o){i();const l=o[1].length===2?2:3;n.push(`<h${l}>${Sa(o[2])}</h${l}>`),s++;continue}if(/^>\s?/.test(a)){i();const l=[];for(;s<t.length&&/^>\s?/.test(t[s]);)l.push(Sa(t[s].replace(/^>\s?/,""))),s++;n.push(`<blockquote>${l.join("<br/>")}</blockquote>`);continue}if(/^\s*[-*]\s+/.test(a)||/^\s*\d+\.\s+/.test(a)){i();const l=/^\s*\d+\.\s+/.test(a),u=[];for(;s<t.length&&(l?/^\s*\d+\.\s+/.test(t[s]):/^\s*[-*]\s+/.test(t[s]));)u.push(Sa(t[s].replace(/^\s*(?:[-*]|\d+\.)\s+/,""))),s++;const d=l?"ol":"ul";n.push(`<${d}>${u.map(f=>`<li>${f}</li>`).join("")}</${d}>`);continue}r.push(a),s++}return i(),n.join("")}function Sa(e){let t=My(e);return t=t.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g,(n,r,i)=>{const s=i.replace(/&amp;/g,"&");return/^https?:\/\//i.test(s)?`<a href="${s}" target="_blank" rel="noopener noreferrer">${r}</a>`:n}),t=t.replace(/\*\*([^*]+)\*\*/g,"<strong>$1</strong>"),t=t.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g,"$1<em>$2</em>"),t=t.replace(/`([^`]+)`/g,"<code>$1</code>"),t}function My(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}const Tm=Object.fromEntries(gs.map(e=>[e.id,e.label])),$w=Object.fromEntries(gs.map(e=>[e.id,e.icon])),Pm={frontend:"badge-cyan",gamedev:"badge-violet",reading:"badge-amber",tech:"badge-cyan",product:"badge-violet"};function Jw(){const[e,t]=ol(),[n,r]=w.useState(()=>{const f=e.get("cat");return gs.some(h=>h.id===f)?f:"all"}),[i,s]=w.useState(""),[a,o]=w.useState(null);w.useEffect(()=>{const f=e.get("cat");r(gs.some(h=>h.id===f)?f:"all")},[e]);const l=f=>{r(f),t(f==="all"?{}:{cat:f},{replace:!0})},u=w.useMemo(()=>{const f=i.trim().toLowerCase();return cc.filter(h=>n!=="all"&&h.category!==n?!1:f?`${h.title} ${h.desc} ${h.tags.join(" ")} ${h.body}`.toLowerCase().includes(f):!0).sort((h,v)=>h.date<v.date?1:-1)},[n,i]),d=a?cc.find(f=>f.id===a):null;return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"KNOWLEDGE"}),c.jsx("h1",{className:"page-title",children:"知识库"}),c.jsx("p",{className:"page-desc",children:"前端与游戏开发的沉淀笔记。全文搜索基于本地内存 —— 快，且不出网。"})]}),c.jsxs("div",{className:"knowledge-toolbar",children:[c.jsx("input",{className:"input",placeholder:"搜索标题、标签或正文…",value:i,onChange:f=>s(f.target.value),"aria-label":"搜索文章"}),c.jsx("div",{className:"chip-row",style:{margin:0},children:gs.map(f=>c.jsxs("button",{className:`chip ${n===f.id?"active":""}`,onClick:()=>l(f.id),children:[c.jsx("span",{children:$w[f.id]}),f.label]},f.id))}),c.jsxs("span",{className:"kb-count",children:[u.length," / ",cc.length," 篇"]})]}),c.jsx(Xn,{mode:"wait",children:c.jsx(he.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.24},children:u.length===0?c.jsxs("div",{className:"empty",children:[c.jsx("div",{className:"empty-icon",children:"🔭"}),c.jsx("div",{className:"empty-title",children:"没有匹配的笔记"}),c.jsx("div",{children:"换个关键词试试，或清空搜索"})]}):c.jsx(Pr,{className:"panel",stagger:.05,children:u.map(f=>c.jsx(Ar,{children:c.jsxs("div",{className:"article-item",role:"button",tabIndex:0,onClick:()=>o(f.id),onKeyDown:h=>(h.key==="Enter"||h.key===" ")&&o(f.id),children:[c.jsxs("div",{children:[c.jsxs("div",{className:"article-item-title",children:[c.jsx("span",{className:`badge ${Pm[f.category]||""}`,children:Tm[f.category]}),f.title]}),c.jsx("div",{className:"article-item-desc",children:f.desc}),c.jsx("div",{className:"work-meta",style:{marginBottom:0},children:f.tags.map(h=>c.jsx("span",{className:"badge",children:h},h))})]}),c.jsx("span",{className:"article-item-date",children:f.date})]})},f.id))})},n+i)}),c.jsx(Xn,{children:d&&c.jsx(he.div,{className:"modal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>o(null),children:c.jsxs(he.article,{className:"modal-card",initial:{opacity:0,y:34,scale:.97},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:20,scale:.98},transition:{duration:.28,ease:[.22,1,.36,1]},onClick:f=>f.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":d.title,children:[c.jsx("button",{className:"modal-close",onClick:()=>o(null),"aria-label":"关闭",children:"✕"}),c.jsx("span",{className:`badge ${Pm[d.category]||""}`,children:Tm[d.category]}),c.jsx("span",{className:"badge",style:{marginLeft:8},children:d.date}),d.feishuUrl&&c.jsx("a",{className:"badge badge-amber",style:{marginLeft:8,textDecoration:"none"},href:d.feishuUrl,target:"_blank",rel:"noopener noreferrer",children:"飞书原文 ↗"}),c.jsx("h2",{style:{margin:"14px 0 6px",fontSize:"1.5rem"},children:d.title}),c.jsx("p",{style:{color:"var(--text-mid)",marginBottom:8},children:d.desc}),c.jsx("div",{className:"work-meta",children:d.tags.map(f=>c.jsx("span",{className:"badge",children:f},f))}),c.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line-soft)",margin:"18px 0"}}),c.jsx("div",{className:"article-body",dangerouslySetInnerHTML:{__html:Uu(d.body)}})]})})})]})}const Ws=[{id:"inspire",label:"设计灵感",icon:"✦",en:"INSPIRATION"},{id:"material",label:"素材资源",icon:"◈",en:"ASSETS"},{id:"learning",label:"学习提升",icon:"◐",en:"LEARNING"},{id:"earn",label:"接单变现",icon:"◇",en:"FREELANCE"},{id:"create",label:"内容创作",icon:"✎",en:"CREATION"},{id:"ai",label:"AI 工具",icon:"✳",en:"AI TOOLS"}],qw=[{name:"前端灵感入口（12 站收藏单）",from:"公众号「Kryon 大前端架构师」",token:"AfsKdJe6Vo3DJQx0WPQciZlFnrf"},{name:"副业 / 搞钱网站清单（7 个）",from:"公众号「一支童谣」2024-11-17",token:"WNfadQcYoouD5tx34I5crqIznPh"},{name:"学习资源网站清单（4 个）",from:"公众号「后期圈」2024-04-25",token:"MwtJdAU9RoP6IIxqSvwcZ6Qgnkf"},{name:"每天一个 AI 干货 Day76 · 内容创作者 AI 工具箱",from:"每天一个 AI 干货",token:"FM6JdJzt9osbk0xDDEBciPLLnOd"},{name:"网站收藏 · 创意素材与 AI 工具",from:"本站整理",token:""}],Iy=[{name:"CodePen",url:"https://codepen.io",cat:"inspire",source:"前端灵感入口",desc:"CSS 动画、交互 demo，能直接读源码。拆解实现第一站。"},{name:"Dribbble",url:"https://dribbble.com",cat:"inspire",source:"前端灵感入口",desc:"设计概念与视觉稿，找配色、找风格。"},{name:"Behance",url:"https://www.behance.net",cat:"inspire",source:"前端灵感入口",desc:"完整品牌站与视觉项目，从概念到成品。"},{name:"Awwwards",url:"https://www.awwwards.com",cat:"inspire",source:"前端灵感入口",desc:"「网页还能这样做」——前沿网页设计作品站。"},{name:"Godly",url:"https://godly.website",cat:"inspire",source:"前端灵感入口",desc:"精选高质量网站案例，首页动工时先看这里定方向。"},{name:"Land-book",url:"https://land-book.com",cat:"inspire",source:"前端灵感入口",desc:"落地页设计合集，看首屏结构与排版。"},{name:"One Page Love",url:"https://onepagelove.com",cat:"inspire",source:"前端灵感入口",desc:"单页网站灵感库，个人站首页参考。"},{name:"UI Movement",url:"https://uimovement.com",cat:"inspire",source:"前端灵感入口",desc:"交互与微动效：按钮反馈、切换、加载态细节。"},{name:"Collect UI",url:"https://collectui.com",cat:"inspire",source:"前端灵感入口",desc:"按类型找现成组件（登录页/卡片/开关）。"},{name:"Uiverse",url:"https://uiverse.io",cat:"inspire",source:"前端灵感入口",desc:"开源 UI 组件，很多可直接改造使用。"},{name:"Figma Community",url:"https://www.figma.com/community",cat:"inspire",source:"前端灵感入口",desc:"Figma 社区模板与组件资源。"},{name:"Mobbin",url:"https://mobbin.com",cat:"inspire",source:"前端灵感入口",desc:"真实 App 页面流、表单、onboarding。小程序动工时用。"},{name:"爱给网 Aigei",url:"https://www.aigei.com/",cat:"material",source:"本站整理",desc:"音效/配乐、视频模板、3D 模型、平面与游戏素材，外加 AI 生图/生视频/配音与在线剪辑。含免费、CC 免费商用与付费版权。"},{name:"Muhou 幕后",url:"https://muhou.net",cat:"material",source:"学习资源清单",desc:"国内老牌素材站，以国外资源为主：平面、视频、AE/PR 模板、工具插件，每日更新、有限免正版资源。"},{name:"公考知识库",url:"https://www.wolai.com/shangan/eTk9MfMbm1AtJUa4SrwREC",cat:"learning",source:"学习资源清单",desc:"免费公考知识库，含题型、文字讲解、视频，可搜索，作者持续更新。"},{name:"私人电子书库",url:"https://zuoshipin.com/sites/12799.html",cat:"learning",source:"学习资源清单",desc:"基于 AList 搭建的免费电子书库，可下载、可在线阅读。"},{name:"大学生资源网",url:"https://www.dxzy163.com/",cat:"learning",source:"学习资源清单",desc:"无广告学习资源站，覆盖中小学到大学课程及考研、考公、考证资源，支持在线观看。"},{name:"终身教育平台",url:"https://le.ouchn.cn/home",cat:"learning",source:"副业搞钱清单",desc:"国家开放大学出品，50 万+免费课程，涵盖健康管理/职业技能/演讲口才/应用文写作。"},{name:"WPS 学堂",url:"https://www.wps.cn/learning/",cat:"learning",source:"副业搞钱清单",desc:"WPS 官方免费教程，Word/Excel/PPT 入门到进阶，每天半小时。"},{name:"云队友",url:"https://www.duiyou360.com/",cat:"earn",source:"副业搞钱清单",desc:"兼职写文案/视频剪辑/市场运营，上架技能、明码标价，平台审核结算；剪辑按小时 30 元起。"},{name:"一品威客",url:"https://www.epwk.com/",cat:"earn",source:"副业搞钱清单",desc:"2010 年创立的老牌平台，创意设计/技术开发/广告策划，任务丰富、收益透明。"},{name:"RW 实验室",url:"https://www.rwnomad.com/",cat:"earn",source:"副业搞钱清单",desc:"数字游民/自由职业者远程工作平台，国内+跨国项目，技术/设计/翻译岗。"},{name:"小红书创作服务平台",url:"https://creator.xiaohongshu.com/",cat:"create",source:"副业搞钱清单",desc:"小红书官方培训：账号创建→爆文标题/高曝光技巧/账号运营；万粉账号可接广告。"},{name:"头条号创作训练营",url:"https://mp.toutiao.com/",cat:"create",source:"副业搞钱清单",desc:"0 粉丝门槛写作变现，官方训练营讲爆款内容/引流/广告变现。"},{name:"Perplexity",url:"https://www.perplexity.ai/",cat:"ai",source:"AI 工具箱 Day76",desc:"智能搜索，带来源引用的对话式搜索引擎。"},{name:"MindOS",url:"https://mindos.com/",cat:"ai",source:"AI 工具箱 Day76",desc:"数字员工，把 AI 组装成可协作的助手。"},{name:"ChatDOC",url:"https://chatdoc.com/",cat:"ai",source:"AI 工具箱 Day76",desc:"阅读文档，和 PDF/Word 直接对话提问。"},{name:"Monica",url:"https://monica.im/",cat:"ai",source:"AI 工具箱 Day76",desc:"内容总结，浏览器侧边栏 AI 助手。"},{name:"Upword",url:"https://www.upword.ai/",cat:"ai",source:"AI 工具箱 Day76",desc:"内容总结，把长文提炼成要点。"},{name:"BibiGPT",url:"https://bibigpt.co/",cat:"ai",source:"AI 工具箱 Day76",desc:"视频总结，一键提炼视频/播客内容。"},{name:"讯飞听见",url:"https://www.iflyrec.com/",cat:"ai",source:"AI 工具箱 Day76",desc:"会议整理，语音转写与纪要。"},{name:"Claude",url:"https://claude.ai/",cat:"ai",source:"AI 工具箱 Day76",desc:"会议整理/长文写作，Anthropic 的对话模型。"},{name:"PromptPerfect",url:"https://promptperfect.jina.ai/",cat:"ai",source:"AI 工具箱 Day76",desc:"获取灵感，自动优化提示词。"},{name:"FormulaBot",url:"https://formulabot.com/",cat:"ai",source:"AI 工具箱 Day76",desc:"整理 Excel，用自然语言生成公式。"},{name:"Dify",url:"https://dify.ai/",cat:"ai",source:"AI 工具箱 Day76",desc:"打造私人/企业专属知识体系，LLM 应用开发平台。"}],uc=Iy.length;Object.fromEntries(Ws.map(e=>[e.id,e.label]));Object.fromEntries(Ws.map(e=>[e.id,e.icon]));Object.fromEntries(Ws.map(e=>[e.id,e.en]));function Am(e){try{return new URL(e).hostname.replace(/^www\./,"")}catch{return e}}function Qw(){const[e,t]=w.useState("all"),[n,r]=w.useState(""),i=w.useMemo(()=>{const a=n.trim().toLowerCase(),o=Iy.filter(l=>e!=="all"&&l.cat!==e?!1:a?`${l.name} ${l.desc} ${l.source} ${Am(l.url)}`.toLowerCase().includes(a):!0);return Ws.filter(l=>e==="all"||l.id===e).map(l=>({...l,items:o.filter(u=>u.cat===l.id)})).filter(l=>l.items.length>0)},[e,n]),s=i.reduce((a,o)=>a+o.items.length,0);return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"BOOKMARKS"}),c.jsx("h1",{className:"page-title",children:"网站链接"}),c.jsxs("p",{className:"page-desc",children:[uc," 个收藏站点，按用途分组。都是「只统计、不深挖」的好站—— 找灵感、找素材、找工具时来这里翻。点卡片在新标签页打开。"]})]}),c.jsxs("div",{className:"knowledge-toolbar",children:[c.jsx("input",{className:"input",placeholder:"搜索站名、用途或来源…",value:n,onChange:a=>r(a.target.value),"aria-label":"搜索网站"}),c.jsxs("div",{className:"chip-row",style:{margin:0},children:[c.jsxs("button",{className:`chip ${e==="all"?"active":""}`,onClick:()=>t("all"),children:[c.jsx("span",{className:"chip-dot"}),"全部",c.jsx("span",{className:"chip-count",children:uc})]}),Ws.map(a=>c.jsxs("button",{className:`chip ${e===a.id?"active":""}`,onClick:()=>t(a.id),children:[c.jsx("span",{children:a.icon}),a.label]},a.id))]}),c.jsxs("span",{className:"kb-count",children:[s," / ",uc]})]}),c.jsx(Xn,{mode:"wait",children:c.jsx(he.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.24},children:s===0?c.jsxs("div",{className:"empty",children:[c.jsx("div",{className:"empty-icon",children:"🔗"}),c.jsx("div",{className:"empty-title",children:"没有匹配的网站"}),c.jsx("div",{children:"换个关键词，或点「全部」"})]}):i.map(a=>c.jsxs("section",{className:"link-group",children:[c.jsxs("div",{className:"link-group-head",children:[c.jsx("span",{className:"link-group-icon",children:a.icon}),c.jsx("h2",{className:"link-group-title",children:a.label}),c.jsx("span",{className:"link-group-en",children:a.en}),c.jsx("span",{className:"link-group-count",children:a.items.length})]}),c.jsx(Pr,{className:"link-grid",stagger:.03,children:a.items.map(o=>c.jsx(Ar,{children:c.jsxs("a",{className:"link-card",href:o.url,target:"_blank",rel:"noopener noreferrer",children:[c.jsxs("div",{className:"link-card-top",children:[c.jsx("span",{className:"link-card-name",children:o.name}),c.jsx("span",{className:"link-card-go",children:"↗"})]}),c.jsx("div",{className:"link-card-host",children:Am(o.url)}),c.jsx("div",{className:"link-card-desc",children:o.desc}),c.jsx("div",{className:"link-card-src",children:o.source})]})},o.url))})]},a.id))},e+n)}),c.jsxs("div",{className:"link-sources",children:[c.jsx("div",{className:"link-sources-title",children:"收藏来源"}),qw.filter(a=>a.token).map(a=>c.jsxs("a",{href:`https://my.feishu.cn/docx/${a.token}`,target:"_blank",rel:"noopener noreferrer",children:[a.name," ",c.jsxs("span",{children:["· ",a.from," ↗"]})]},a.token)),c.jsx("div",{className:"link-sources-note",children:"网站按约定只做统计、不做深度笔记；来源清单在飞书，点上面可在飞书打开原文。"})]})]})}const dc={updatedAt:"2026-11-22",total:322},fc=[{id:"1b8abdf1-40ea-4153-823a-b68b565721a9",parent:null,text:"能力骨架 · 只列要掌握的知识点（问题式），答案自己学完自己填 · 2026-11-22 剪裁版",hl:"red",finish:!1,link:""},{id:"4a2236a0-e581-4879-9d41-6aefda721eb8",parent:"1b8abdf1-40ea-4153-823a-b68b565721a9",text:"① 前端技术 · 学过要能跑起来",hl:"cyan",finish:!1,link:""},{id:"09978f2b-16a2-44d2-971c-db76ea5a3fce",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"JS / TS 语言核心",hl:"blue",finish:!1,link:""},{id:"a97bd196-d355-4104-bcc4-70f9741e90d8",parent:"09978f2b-16a2-44d2-971c-db76ea5a3fce",text:"L0 前置 · 能写静态页",hl:"grey",finish:!1,link:""},{id:"df67c381-4e85-4f4a-870d-6d709708914c",parent:"a97bd196-d355-4104-bcc4-70f9741e90d8",text:"变量 / 类型 / 运算符，let-const-var 区别能讲清吗？",hl:"",finish:!1,link:""},{id:"0af9585e-1043-466e-8d03-84c4a1a7dbd4",parent:"a97bd196-d355-4104-bcc4-70f9741e90d8",text:"函数、作用域、闭包是什么，举得出使用场景吗？",hl:"",finish:!1,link:""},{id:"1852a828-5638-4376-b822-a2687d6edc77",parent:"a97bd196-d355-4104-bcc4-70f9741e90d8",text:"数组 / 对象常用方法（map/filter/reduce）能徒手用吗？",hl:"",finish:!1,link:""},{id:"1cc26a41-393f-4cce-aa8d-4c76892ec3c0",parent:"09978f2b-16a2-44d2-971c-db76ea5a3fce",text:"L1 入门 · 能写交互",hl:"blue",finish:!1,link:""},{id:"b5e8f410-7b79-4cbd-9c30-6cf9aa93e4ae",parent:"1cc26a41-393f-4cce-aa8d-4c76892ec3c0",text:"原型 / 原型链 / 继承，能画出来讲清吗？",hl:"",finish:!1,link:""},{id:"a1120dd5-bbdf-47cf-a90d-6870c7979b2f",parent:"1cc26a41-393f-4cce-aa8d-4c76892ec3c0",text:"this 的四种绑定规则分别是什么？",hl:"",finish:!1,link:""},{id:"40358ed7-d557-4f95-949e-1617f8de0440",parent:"1cc26a41-393f-4cce-aa8d-4c76892ec3c0",text:"事件循环：宏任务 / 微任务执行顺序能推演吗？",hl:"",finish:!1,link:""},{id:"fdad7dd7-983e-4535-bb8b-500eb5909284",parent:"1cc26a41-393f-4cce-aa8d-4c76892ec3c0",text:"Promise / async-await / 并发控制怎么写？",hl:"",finish:!1,link:""},{id:"b508cec7-5a57-4891-bf64-39ac60bdc970",parent:"1cc26a41-393f-4cce-aa8d-4c76892ec3c0",text:"DOM 操作与事件委托怎么做得更高效？",hl:"",finish:!1,link:""},{id:"22c81d7b-bdff-4844-9248-369e9a8f709b",parent:"09978f2b-16a2-44d2-971c-db76ea5a3fce",text:"L2 进阶 · 能写工程",hl:"yellow",finish:!1,link:""},{id:"d87e78e4-cab2-40a0-aed3-da82055c74fc",parent:"22c81d7b-bdff-4844-9248-369e9a8f709b",text:"ES Module / CommonJS 差异与循环依赖怎么处理？",hl:"",finish:!1,link:""},{id:"e6140e9b-0113-4cb8-bf96-ce87b15571ef",parent:"22c81d7b-bdff-4844-9248-369e9a8f709b",text:"深拷贝 / 防抖节流 / 柯里化能徒手实现吗？",hl:"",finish:!1,link:""},{id:"11c760f5-7eb4-4e75-b985-1e06c32ec308",parent:"22c81d7b-bdff-4844-9248-369e9a8f709b",text:"错误与异常处理：try-catch / Promise.catch / 全局兜底怎么分层？",hl:"",finish:!1,link:""},{id:"5b1c41bf-82b1-4e45-8807-19f7b2d212c2",parent:"22c81d7b-bdff-4844-9248-369e9a8f709b",text:"模块化与包管理：npm / pnpm 幽灵依赖是怎么回事？",hl:"",finish:!1,link:""},{id:"e87f5a39-682a-47fa-a32c-ace3f7a1b1af",parent:"09978f2b-16a2-44d2-971c-db76ea5a3fce",text:"L3 深入原理",hl:"olive",finish:!1,link:""},{id:"7cf9ab1c-2ff6-451f-b1f5-e2a743bb724a",parent:"e87f5a39-682a-47fa-a32c-ace3f7a1b1af",text:"V8 执行机制：编译、隐藏类、内联缓存懂吗？",hl:"",finish:!1,link:""},{id:"56b7d65a-2952-49ec-80fc-06158b80b8a5",parent:"e87f5a39-682a-47fa-a32c-ace3f7a1b1af",text:"垃圾回收：标记清除 / 分代收集 / 内存泄漏怎么定位？",hl:"",finish:!1,link:""},{id:"51cc28ea-dc85-4c9c-b17d-6f526e237625",parent:"e87f5a39-682a-47fa-a32c-ace3f7a1b1af",text:"TS 类型系统：泛型 / 类型收窄 / 条件类型 / infer 能讲清吗？",hl:"",finish:!1,link:""},{id:"0ee4d9a3-4bcc-408c-b057-4f2ba47a6f09",parent:"e87f5a39-682a-47fa-a32c-ace3f7a1b1af",text:"TS 在 Vue3 里怎么落地，declare 与 .d.ts 怎么写？",hl:"",finish:!1,link:""},{id:"b48640a4-71d6-48e7-b986-d2468b6da5c9",parent:"09978f2b-16a2-44d2-971c-db76ea5a3fce",text:"L4 资深架构",hl:"red",finish:!1,link:""},{id:"bdaa9dab-64a0-430c-84da-5e199594bfd4",parent:"b48640a4-71d6-48e7-b986-d2468b6da5c9",text:"如何设计一套可维护的类型体系与公共 API？",hl:"",finish:!1,link:""},{id:"a7560ae6-b720-4950-be91-86f219b97a4f",parent:"b48640a4-71d6-48e7-b986-d2468b6da5c9",text:"大型项目的构建性能与产物体积怎么系统优化？",hl:"",finish:!1,link:""},{id:"f50b4997-a49c-45e9-8516-84a74bd70c73",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"CSS / 布局 / 响应式",hl:"blue",finish:!1,link:""},{id:"430a5ae6-344a-4e4a-983b-c243c55016f7",parent:"f50b4997-a49c-45e9-8516-84a74bd70c73",text:"L0 前置 · 能排版",hl:"grey",finish:!1,link:""},{id:"68f0fd3f-671e-4775-a84d-6d92163990e8",parent:"430a5ae6-344a-4e4a-983b-c243c55016f7",text:"盒模型 / 定位 / 浮动 / BFC 能讲清吗？",hl:"",finish:!1,link:""},{id:"bdcb0b8a-4967-4848-9376-9b0ad6a7e9f4",parent:"430a5ae6-344a-4e4a-983b-c243c55016f7",text:"flex 常用属性与居中方案能徒手写吗？",hl:"",finish:!1,link:""},{id:"0f787690-0bb3-40f9-aba7-47d2dcdd69f1",parent:"f50b4997-a49c-45e9-8516-84a74bd70c73",text:"L1 入门 · 能做页面",hl:"blue",finish:!1,link:""},{id:"41e838de-4dab-4754-8c01-acfd660ec2e5",parent:"0f787690-0bb3-40f9-aba7-47d2dcdd69f1",text:"层叠上下文与 z-index 失效的原因？",hl:"",finish:!1,link:""},{id:"8b016552-3719-467a-b368-a2fa2e8ccfc4",parent:"0f787690-0bb3-40f9-aba7-47d2dcdd69f1",text:"grid 布局与 flex 的取舍？",hl:"",finish:!1,link:""},{id:"9a068fe1-7823-4c64-ba5d-a128f4c1831a",parent:"0f787690-0bb3-40f9-aba7-47d2dcdd69f1",text:"响应式：媒体查询 / rem / vw 各怎么适配？",hl:"",finish:!1,link:""},{id:"be9b2567-9d21-4c76-a1ce-1d44da6c3481",parent:"0f787690-0bb3-40f9-aba7-47d2dcdd69f1",text:"lib-flexible 为什么设 font-size=width/10，540 上限对大屏意味着什么？",hl:"",finish:!1,link:""},{id:"82ed19be-c893-465c-a7e3-d32d30e65b49",parent:"f50b4997-a49c-45e9-8516-84a74bd70c73",text:"L2 进阶 · 能做动效",hl:"yellow",finish:!1,link:""},{id:"b8723b00-46d3-40dc-81d4-c616ad86d82d",parent:"82ed19be-c893-465c-a7e3-d32d30e65b49",text:"transition / animation / fill-mode 怎么配合？",hl:"",finish:!1,link:""},{id:"d309d226-b820-43a3-afa2-2597fa1a7247",parent:"82ed19be-c893-465c-a7e3-d32d30e65b49",text:"cubic-bezier 怎么调出手感，哪些属性会触发重排重绘？",hl:"",finish:!1,link:""},{id:"7308f731-d3c2-4666-b7e8-395b66361404",parent:"82ed19be-c893-465c-a7e3-d32d30e65b49",text:"FLIP 动画与复合层动画怎么选？",hl:"",finish:!1,link:""},{id:"3a18017e-e434-447a-bbc2-2fc66279dc82",parent:"f50b4997-a49c-45e9-8516-84a74bd70c73",text:"L3 深入原理",hl:"olive",finish:!1,link:""},{id:"eeea926c-7b6e-4404-a1f0-c005d0057c8e",parent:"3a18017e-e434-447a-bbc2-2fc66279dc82",text:"浏览器渲染流程：解析→样式→布局→绘制→合成 全流程？",hl:"",finish:!1,link:""},{id:"207853f2-a36d-492a-847a-14eca6fce558",parent:"3a18017e-e434-447a-bbc2-2fc66279dc82",text:"BFC / 层叠上下文的底层规则，重排重绘如何避免？",hl:"",finish:!1,link:""},{id:"4e3a3c31-3bd2-41ab-9b7b-6b51ade75e98",parent:"f50b4997-a49c-45e9-8516-84a74bd70c73",text:"L4 资深架构",hl:"red",finish:!1,link:""},{id:"191bce2b-459c-4eaf-b073-a29b699a88e0",parent:"4e3a3c31-3bd2-41ab-9b7b-6b51ade75e98",text:"如何设计一套主题 / 设计令牌 / 多端适配体系？",hl:"",finish:!1,link:""},{id:"d68c867d-ef7b-44e6-bb4d-af3bd191c9ae",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"Vue2 · 从 0 到资深",hl:"blue",finish:!1,link:""},{id:"b85d6be4-c4a8-42cf-bd02-603337743ad1",parent:"d68c867d-ef7b-44e6-bb4d-af3bd191c9ae",text:"L0 前置",hl:"grey",finish:!1,link:""},{id:"9e7191a1-d93a-41a5-9713-b8055daf3114",parent:"b85d6be4-c4a8-42cf-bd02-603337743ad1",text:"HTML/CSS 能写静态页，JS 基础（类型/函数/作用域）够用吗？",hl:"",finish:!1,link:""},{id:"c3c84047-ae7f-4e97-8fd7-802d5e1bdd3f",parent:"b85d6be4-c4a8-42cf-bd02-603337743ad1",text:"DOM 操作与事件、npm / Vue CLI 起项目会吗？",hl:"",finish:!1,link:""},{id:"1959e9a3-3333-415b-8718-7cd06db57e49",parent:"d68c867d-ef7b-44e6-bb4d-af3bd191c9ae",text:"L1 入门 · 能搭页面",hl:"blue",finish:!1,link:""},{id:"28575331-10b1-4a5c-bae1-a787c6d51d18",parent:"1959e9a3-3333-415b-8718-7cd06db57e49",text:"Vue 实例 el/data/methods 与模板语法 {{}} 会用吗？",hl:"",finish:!1,link:""},{id:"401bea11-74a5-4757-b6aa-63cbca9ec4fe",parent:"1959e9a3-3333-415b-8718-7cd06db57e49",text:"指令 v-bind / v-model / v-if / v-for / v-show / v-on 都会吗？",hl:"",finish:!1,link:""},{id:"33c568ba-3331-47d5-bd79-b7dd5f101063",parent:"1959e9a3-3333-415b-8718-7cd06db57e49",text:"computed 与 watch 的区别和各自场景？",hl:"",finish:!1,link:""},{id:"07d58f7c-c7e0-411f-a4c7-c225563a8ca8",parent:"1959e9a3-3333-415b-8718-7cd06db57e49",text:"生命周期 created/mounted/updated/destroyed 何时用？",hl:"",finish:!1,link:""},{id:"00942bb1-295d-40a7-80c1-c7c64cc389d9",parent:"1959e9a3-3333-415b-8718-7cd06db57e49",text:"组件定义、全局/局部注册、props 传值、$emit 抛事件？",hl:"",finish:!1,link:""},{id:"ab31e872-a7fb-47ea-b2c2-2f955adb7245",parent:"1959e9a3-3333-415b-8718-7cd06db57e49",text:"scoped CSS、:class / :style 绑定怎么写？",hl:"",finish:!1,link:""},{id:"1023b488-a96e-4839-b06c-54c982dfcc32",parent:"d68c867d-ef7b-44e6-bb4d-af3bd191c9ae",text:"L2 进阶 · 能写业务",hl:"yellow",finish:!1,link:""},{id:"030a222a-4e04-409d-b73c-44f60226ddbe",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"组件通信全解：props/$emit、$parent/$children、provide/inject、event bus、Vuex？",hl:"",finish:!1,link:""},{id:"1f242c66-0086-461a-8150-abb90cd44dbf",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"Vue Router：动态/嵌套路由、导航守卫、懒加载、query/params？",hl:"",finish:!1,link:""},{id:"bf005ae0-8d56-4168-88cd-2bed2ede263e",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"Vuex：state/getters/mutations/actions/modules、辅助函数、严格模式？",hl:"",finish:!1,link:""},{id:"5bf46541-832d-4f5f-97e4-fcff9294271d",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"插槽：默认/具名/作用域插槽、v-slot 怎么用？",hl:"",finish:!1,link:""},{id:"12004c6e-e866-41de-b2a9-c44081af884e",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"动态组件 / keep-alive / 异步组件怎么用？",hl:"",finish:!1,link:""},{id:"c619b765-3649-4deb-b2a2-f3fe689c2c47",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"自定义指令 / 过滤器 / mixins 冲突怎么处理？",hl:"",finish:!1,link:""},{id:"8a2c15c8-1c6e-4f76-8c4f-e48834c8f679",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"ref / $refs / $nextTick 的时机与原理？",hl:"",finish:!1,link:""},{id:"b6d589c4-9a41-46ca-9c96-c6242369d696",parent:"1023b488-a96e-4839-b06c-54c982dfcc32",text:"表单校验与组件封装规范怎么定？",hl:"",finish:!1,link:""},{id:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",parent:"d68c867d-ef7b-44e6-bb4d-af3bd191c9ae",text:"L3 深入原理",hl:"olive",finish:!1,link:""},{id:"f354c5a1-b14c-426c-abfe-513b2b503d74",parent:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",text:"响应式：Object.defineProperty 劫持、Dep/Watcher 依赖收集怎么运作？",hl:"",finish:!1,link:""},{id:"0701cd59-cdc9-4bc7-b6f3-eea291d1b280",parent:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",text:"数组响应式为何要重写方法、Vue.set 为何存在？",hl:"",finish:!1,link:""},{id:"6ad45513-5688-4caa-a013-d49e6a340427",parent:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",text:"虚拟 DOM 与双端 diff、key 的作用、为什么不能用 index？",hl:"",finish:!1,link:""},{id:"34e1912a-8ce8-49f2-a3b9-a38c560f9045",parent:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",text:"模板编译：template→AST→render function→VNode 全流程？",hl:"",finish:!1,link:""},{id:"9d083350-15c2-45c3-9b6f-bfdd8b79ed37",parent:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",text:"nextTick 的事件循环原理？",hl:"",finish:!1,link:""},{id:"ef5aa6a0-d56b-4a4a-8b1b-c89a1fcd9272",parent:"d024f57c-78ab-4dca-8f56-980bd26ce1ef",text:"hash vs history 路由的实现差异？",hl:"",finish:!1,link:""},{id:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",parent:"d68c867d-ef7b-44e6-bb4d-af3bd191c9ae",text:"L4 资深架构",hl:"red",finish:!1,link:""},{id:"01cd4e16-a6e7-49e2-94fe-280561850fdf",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"性能优化：v-if vs v-show、computed 缓存、函数式组件、事件销毁怎么做？",hl:"",finish:!1,link:""},{id:"59b91045-1eea-44d1-b1b9-c7be99d81241",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"大数据量渲染：虚拟列表 / 时间分片怎么落地？",hl:"",finish:!1,link:""},{id:"e2afb784-deb7-4528-8b98-3a7cb5b8b9e5",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"组件库设计：API 设计 / 按需引入 / 主题定制 / 文档站？",hl:"",finish:!1,link:""},{id:"9047e617-941d-4e27-b582-bd280630d43a",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"vue2→vue3 升级策略与破坏性变更清单？",hl:"",finish:!1,link:""},{id:"493b872c-f27b-4195-9502-640982185dc3",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"SSR / Nuxt 的 hydration 是怎么接管的？",hl:"",finish:!1,link:""},{id:"1aebf62e-8182-46b2-a179-275142d6400c",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"大型状态拆分、持久化、Webpack 构建优化 / 拆包 / CDN？",hl:"",finish:!1,link:""},{id:"f951eb07-9e6f-4876-be1c-e25b364d64d5",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"微前端里怎么集成 Vue2 子应用？",hl:"",finish:!1,link:""},{id:"0db0dc77-ca09-4c88-bc2f-459f958a13c1",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"单测 + E2E、内存泄漏排查、性能监控、错误捕获怎么做？",hl:"",finish:!1,link:""},{id:"55513398-7528-40d1-b1c8-56e98921bb54",parent:"a1c83d55-6078-4f46-a974-d9d6794cf2b2",text:"能读源码、定位框架级 bug、给开源提 PR 吗？",hl:"",finish:!1,link:""},{id:"69cb2de4-7138-432e-86e4-6235bb977fe8",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"Vue3 · 从 0 到资深",hl:"blue",finish:!1,link:""},{id:"b5ec24ed-d29e-4002-a866-daea00125f04",parent:"69cb2de4-7138-432e-86e4-6235bb977fe8",text:"L0 前置",hl:"grey",finish:!1,link:""},{id:"0b9e996f-1877-4ef9-b379-494fdcb17698",parent:"b5ec24ed-d29e-4002-a866-daea00125f04",text:"有 Vue2 基础或 JS/TS 基础，setup 心智模型能接受吗？",hl:"",finish:!1,link:""},{id:"d53b111d-637e-47a3-88dc-30db92e5e432",parent:"69cb2de4-7138-432e-86e4-6235bb977fe8",text:"L1 入门 · 能搭页面",hl:"blue",finish:!1,link:""},{id:"a7f6f663-1ac4-4240-8e19-b72044dc2c94",parent:"d53b111d-637e-47a3-88dc-30db92e5e432",text:"createApp / Composition API / setup 怎么用？",hl:"",finish:!1,link:""},{id:"937b0c5e-8d29-45dd-beb1-2ca055010915",parent:"d53b111d-637e-47a3-88dc-30db92e5e432",text:"ref / reactive 的区别，为什么解构 reactive 会丢失响应？toRefs / toRef？",hl:"",finish:!1,link:""},{id:"d584cd3a-8ade-4952-87d0-49a0d218ddc0",parent:"d53b111d-637e-47a3-88dc-30db92e5e432",text:"computed / watch / watchEffect 的区别、停止监听、副作用清理？",hl:"",finish:!1,link:""},{id:"dee92d1c-56f5-40bf-92d6-aa171cc29fc4",parent:"d53b111d-637e-47a3-88dc-30db92e5e432",text:"生命周期钩子在 setup 里怎么对应？",hl:"",finish:!1,link:""},{id:"4f438d74-d384-490f-a328-350f2b667190",parent:"d53b111d-637e-47a3-88dc-30db92e5e432",text:"模板语法与指令、组件注册、props / emit 和 Vue2 有何不同？",hl:"",finish:!1,link:""},{id:"e259d07f-ba68-4056-8e8c-8dbef73d37ba",parent:"69cb2de4-7138-432e-86e4-6235bb977fe8",text:"L2 进阶 · 能写业务",hl:"yellow",finish:!1,link:""},{id:"6143b134-7b6e-46b7-b6b6-8bb055b25fb7",parent:"e259d07f-ba68-4056-8e8c-8dbef73d37ba",text:"组件通信：provide/inject、defineProps/defineEmits、v-model 升级？",hl:"",finish:!1,link:""},{id:"efcf188a-fbd2-44cc-a4e3-8e9764206566",parent:"e259d07f-ba68-4056-8e8c-8dbef73d37ba",text:"Vue Router4：导航守卫、组合式 API 用法、路由懒加载？",hl:"",finish:!1,link:""},{id:"0bf9eb90-0f28-421a-9d56-f9bc44934168",parent:"e259d07f-ba68-4056-8e8c-8dbef73d37ba",text:"Pinia：store 定义、状态持久化、大型项目状态拆分？",hl:"",finish:!1,link:""},{id:"e73d054a-2ca9-4c6b-9735-f3d78043ebf4",parent:"e259d07f-ba68-4056-8e8c-8dbef73d37ba",text:"插槽 / 动态组件 / keep-alive / 异步组件在 Vue3 怎么写？",hl:"",finish:!1,link:""},{id:"ad30fa70-62c0-488f-a280-c53859e90327",parent:"e259d07f-ba68-4056-8e8c-8dbef73d37ba",text:"Teleport / Suspense 解决什么问题？",hl:"",finish:!1,link:""},{id:"da040914-8f67-4c1e-97fc-071bdab7a484",parent:"69cb2de4-7138-432e-86e4-6235bb977fe8",text:"L3 深入原理",hl:"olive",finish:!1,link:""},{id:"3f12a2ce-b8e7-4d6d-af28-b8d8b82f3d85",parent:"da040914-8f67-4c1e-97fc-071bdab7a484",text:"响应式：Proxy / Reflect 相比 defineProperty 的优势？",hl:"",finish:!1,link:""},{id:"e0e1e7ea-9af3-45b4-aa5a-b8dd38d415ec",parent:"da040914-8f67-4c1e-97fc-071bdab7a484",text:"track / trigger 依赖收集与 effect 机制？",hl:"",finish:!1,link:""},{id:"df37bea1-dc63-4cc8-a8d2-530e78b028e7",parent:"da040914-8f67-4c1e-97fc-071bdab7a484",text:"Diff 优化：静态提升 / patchFlag / 事件缓存 / 最长递增子序列？",hl:"",finish:!1,link:""},{id:"ce8ad991-a8fa-4089-b5d1-33ca338d1ba8",parent:"da040914-8f67-4c1e-97fc-071bdab7a484",text:"模板编译与 Block Tree 优化懂吗？",hl:"",finish:!1,link:""},{id:"8d1f9107-77df-4a40-9e33-9eb2d51aa214",parent:"69cb2de4-7138-432e-86e4-6235bb977fe8",text:"L4 资深架构",hl:"red",finish:!1,link:""},{id:"241e50f0-4c37-4066-8cea-cdc6202e4ac2",parent:"8d1f9107-77df-4a40-9e33-9eb2d51aa214",text:"SSR / SSG（Nuxt3）hydration 与踩坑？",hl:"",finish:!1,link:""},{id:"cfefa57e-3e32-4581-ac5a-b3c18788cbf3",parent:"8d1f9107-77df-4a40-9e33-9eb2d51aa214",text:"Vue3 + TS 大型项目类型设计与工程化？",hl:"",finish:!1,link:""},{id:"4df5dc5e-f5c1-4ea9-b387-d4990f04f7f4",parent:"8d1f9107-77df-4a40-9e33-9eb2d51aa214",text:"从 Vue2 迁移的完整策略与回滚方案？",hl:"",finish:!1,link:""},{id:"9444dda8-09ce-4e30-852b-1c69461a3c2e",parent:"8d1f9107-77df-4a40-9e33-9eb2d51aa214",text:"组件库 / 微前端 / 构建优化 / 测试体系怎么搭？",hl:"",finish:!1,link:""},{id:"1030e9cb-d987-4fec-b54a-7d991696b1f4",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"React（了解 / 对比）",hl:"blue",finish:!1,link:""},{id:"c0f843d6-91c3-4fcd-a1d3-e5aae6bba6ec",parent:"1030e9cb-d987-4fec-b54a-7d991696b1f4",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"037c6921-6186-4afc-9401-576bf6cbdd19",parent:"c0f843d6-91c3-4fcd-a1d3-e5aae6bba6ec",text:"JSX / 组件 / props / state  basics 能讲清吗？",hl:"",finish:!1,link:""},{id:"c5300c22-537a-43d8-845c-b4e2319d7cc6",parent:"c0f843d6-91c3-4fcd-a1d3-e5aae6bba6ec",text:"Hooks：useState/useEffect 依赖数组怎么理解？",hl:"",finish:!1,link:""},{id:"0dbe903d-bd92-437e-98fb-efe724d851eb",parent:"1030e9cb-d987-4fec-b54a-7d991696b1f4",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"9b17ad3f-17be-48ba-8646-528a9ea742f0",parent:"0dbe903d-bd92-437e-98fb-efe724d851eb",text:"状态管理：Redux / Zustand 与 Pinia 的差异？",hl:"",finish:!1,link:""},{id:"82c0b88a-f0dd-4d4d-8dcf-eb5735485e11",parent:"0dbe903d-bd92-437e-98fb-efe724d851eb",text:"路由 React Router 怎么用？",hl:"",finish:!1,link:""},{id:"efd08649-4127-4317-9d86-4240aa466310",parent:"1030e9cb-d987-4fec-b54a-7d991696b1f4",text:"L3 原理",hl:"olive",finish:!1,link:""},{id:"f7a97f4d-a044-467d-b73f-6f394e600d04",parent:"efd08649-4127-4317-9d86-4240aa466310",text:"虚拟 DOM / Fiber 架构 / 调和与 Vue 的 diff 有何不同？",hl:"",finish:!1,link:""},{id:"f615c71b-5ac2-4afd-a404-a5c94d3c785b",parent:"efd08649-4127-4317-9d86-4240aa466310",text:"并发特性 Concurrent / Suspense 解决什么？",hl:"",finish:!1,link:""},{id:"5b32d691-57d4-4f71-ba30-2517eee83574",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"Three.js / WebGL / Shader",hl:"blue",finish:!1,link:""},{id:"635db3a8-d549-4d88-9e15-ba96955dfeb4",parent:"5b32d691-57d4-4f71-ba30-2517eee83574",text:"L0 前置 · 数学",hl:"grey",finish:!1,link:""},{id:"4c5cfdd9-f3c8-41a6-b8d2-b91b08cb529b",parent:"635db3a8-d549-4d88-9e15-ba96955dfeb4",text:"向量 / 矩阵 / 欧拉角 / 四元数 / 万向节锁能讲清吗？",hl:"",finish:!1,link:""},{id:"90d831b1-712d-45ec-9ace-78514075c7d8",parent:"635db3a8-d549-4d88-9e15-ba96955dfeb4",text:"坐标系与变换（平移/旋转/缩放）怎么算？",hl:"",finish:!1,link:""},{id:"7001edc7-97ac-4e8b-a502-749a414760b6",parent:"5b32d691-57d4-4f71-ba30-2517eee83574",text:"L1 入门 · 能出画面",hl:"blue",finish:!1,link:""},{id:"5dc47fc2-71e3-4819-b9c3-4edcec8220a7",parent:"7001edc7-97ac-4e8b-a502-749a414760b6",text:"场景 / 相机 / 渲染器 / 几何 / 材质 / 光照 六件套怎么用？",hl:"",finish:!1,link:""},{id:"bc277e96-d943-4af7-8cef-53da7c0ee083",parent:"7001edc7-97ac-4e8b-a502-749a414760b6",text:"坐标系、相机（透视/正交）、控制器怎么配？",hl:"",finish:!1,link:""},{id:"f77b7269-0782-46f7-9c6e-57887282c258",parent:"7001edc7-97ac-4e8b-a502-749a414760b6",text:"第一个动画循环 requestAnimationFrame 怎么写？",hl:"",finish:!1,link:""},{id:"324d9701-f9a4-4aa7-b1e0-d8baedebcc9a",parent:"5b32d691-57d4-4f71-ba30-2517eee83574",text:"L2 进阶 · 能出效果",hl:"yellow",finish:!1,link:""},{id:"0d0d12d9-48ef-4716-b746-87540b1f8370",parent:"324d9701-f9a4-4aa7-b1e0-d8baedebcc9a",text:"模型加载：glTF / GLB / 压缩（Draco / KTX2）？",hl:"",finish:!1,link:""},{id:"34da4bda-08c6-4116-8e68-929209b123f5",parent:"324d9701-f9a4-4aa7-b1e0-d8baedebcc9a",text:"动画：AnimationMixer / 关键帧 / 骨骼蒙皮？",hl:"",finish:!1,link:""},{id:"c3ecfe8a-8538-450c-abb9-9f5a6c9afc38",parent:"324d9701-f9a4-4aa7-b1e0-d8baedebcc9a",text:"后处理：Bloom / SSAO / 色调映射怎么接？",hl:"",finish:!1,link:""},{id:"510ecf6f-8935-4b8d-b2f6-ad4c33ea38d2",parent:"324d9701-f9a4-4aa7-b1e0-d8baedebcc9a",text:"拾取：Raycaster 点击/悬浮检测怎么做？",hl:"",finish:!1,link:""},{id:"b69b5bac-f05d-4877-92a3-69cbb5e18453",parent:"324d9701-f9a4-4aa7-b1e0-d8baedebcc9a",text:"纹理：UV / filtering / wrapping / 法线贴图？",hl:"",finish:!1,link:""},{id:"81318ef3-d370-4457-becc-cb2f175ca2db",parent:"5b32d691-57d4-4f71-ba30-2517eee83574",text:"L3 深入原理",hl:"olive",finish:!1,link:""},{id:"a14a8a0d-03a8-4e52-a7d7-f87bbd6470aa",parent:"81318ef3-d370-4457-becc-cb2f175ca2db",text:"GPU 渲染管线：顶点→装配→光栅化→片元→帧缓冲 全流程？",hl:"",finish:!1,link:""},{id:"e97345eb-1b00-497e-aada-f8ba308a046f",parent:"81318ef3-d370-4457-becc-cb2f175ca2db",text:"着色器：GLSL / TSL、attribute-uniform-varying、自定义 Shader？",hl:"",finish:!1,link:""},{id:"b42bcaf0-0568-4ea1-9fff-7f7bce989e74",parent:"81318ef3-d370-4457-becc-cb2f175ca2db",text:"PBR 材质：金属度-粗糙度、IBL 环境光？",hl:"",finish:!1,link:""},{id:"3848d79c-3c02-42b9-8198-cae07e53f496",parent:"81318ef3-d370-4457-becc-cb2f175ca2db",text:"阴影：shadow map 原理、PCF 软化？",hl:"",finish:!1,link:""},{id:"216ea6df-49ec-4cea-b12c-552e5837cd37",parent:"81318ef3-d370-4457-becc-cb2f175ca2db",text:"深度测试 / 透明混合 / 背面剔除 各解决什么？",hl:"",finish:!1,link:""},{id:"e5ddb6ca-5331-4d8d-8cf7-a2bbcedde586",parent:"5b32d691-57d4-4f71-ba30-2517eee83574",text:"L4 资深 · 性能与落地",hl:"red",finish:!1,link:""},{id:"08422b7a-31eb-468e-a53b-f720904631e0",parent:"e5ddb6ca-5331-4d8d-8cf7-a2bbcedde586",text:"性能：drawcall / instancing / LOD / 合批 / 视锥剔除怎么查瓶颈？",hl:"",finish:!1,link:""},{id:"0981bec1-d7a7-415b-a448-3c7f891450b5",parent:"e5ddb6ca-5331-4d8d-8cf7-a2bbcedde586",text:"WebGPU 与 WebGL 差异、TSL 节点材质取舍？",hl:"",finish:!1,link:""},{id:"484d3601-8741-44fc-be9d-00867ede31cb",parent:"e5ddb6ca-5331-4d8d-8cf7-a2bbcedde586",text:"R3F + Drei 声明式写法、WebXR / VR / AR 起步？",hl:"",finish:!1,link:""},{id:"38cece9d-eeb0-48b6-a00f-e3372007eb99",parent:"e5ddb6ca-5331-4d8d-8cf7-a2bbcedde586",text:"物理引擎 Rapier / Cannon 接入思路？",hl:"",finish:!1,link:""},{id:"f91c8360-75ef-46ef-87d6-56ab20d83b7d",parent:"e5ddb6ca-5331-4d8d-8cf7-a2bbcedde586",text:"数字孪生项目落地思路？",hl:"",finish:!1,link:""},{id:"eaf7a60d-a3a4-4e43-a8b5-f8b39eb1b079",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"Cesium · GIS 可视化",hl:"blue",finish:!1,link:""},{id:"6f395d01-3296-436b-ad91-bca79babb360",parent:"eaf7a60d-a3a4-4e43-a8b5-f8b39eb1b079",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"71e1817f-a557-4d4a-b293-72e84a6cbd01",parent:"6f395d01-3296-436b-ad91-bca79babb360",text:"地形 / 影像 / 实体 Entity / 相机 四件套怎么用？",hl:"",finish:!1,link:""},{id:"d276355f-9ccc-4195-ae05-99d7055108a7",parent:"6f395d01-3296-436b-ad91-bca79babb360",text:"坐标转换：经纬度 / 笛卡尔 / 屏幕坐标？",hl:"",finish:!1,link:""},{id:"a7dc4aac-03a5-46e1-8ab2-0f15fe0d3297",parent:"eaf7a60d-a3a4-4e43-a8b5-f8b39eb1b079",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"24c55a1c-9c9d-404f-a664-62940ace9000",parent:"a7dc4aac-03a5-46e1-8ab2-0f15fe0d3297",text:"标绘 / 量算 / 飞线 / 粒子 / 水波纹等特效怎么实现？",hl:"",finish:!1,link:""},{id:"c769ba63-25e4-4434-8b3c-b2defbecb3ed",parent:"a7dc4aac-03a5-46e1-8ab2-0f15fe0d3297",text:"3D Tiles 加载与样式？",hl:"",finish:!1,link:""},{id:"35a862b5-0207-429d-aabc-98804df5fb6a",parent:"eaf7a60d-a3a4-4e43-a8b5-f8b39eb1b079",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"610fbe2d-99e6-40f4-b3c5-ac7db51a7b1e",parent:"35a862b5-0207-429d-aabc-98804df5fb6a",text:"Entity vs Primitive 的分工与性能差异？",hl:"",finish:!1,link:""},{id:"8a246097-d655-4b26-83d1-1873cea50534",parent:"35a862b5-0207-429d-aabc-98804df5fb6a",text:"影像服务 xyz / tms / wms / wmts 差异？",hl:"",finish:!1,link:""},{id:"a460a369-3b5a-4673-90fc-aee8559995c9",parent:"35a862b5-0207-429d-aabc-98804df5fb6a",text:"customShader 与空间分析怎么做？",hl:"",finish:!1,link:""},{id:"e1dbc2e1-631e-43a6-be43-3cf9edf22c2f",parent:"eaf7a60d-a3a4-4e43-a8b5-f8b39eb1b079",text:"L4 落地",hl:"red",finish:!1,link:""},{id:"284efc57-5783-407c-9618-b4fa9a1d9150",parent:"e1dbc2e1-631e-43a6-be43-3cf9edf22c2f",text:"视频融合 / 数字孪生 / 二三维联动怎么落地？",hl:"",finish:!1,link:""},{id:"11fbe50e-337b-4108-863b-f81601fee807",parent:"e1dbc2e1-631e-43a6-be43-3cf9edf22c2f",text:"与 Three.js 融合渲染的方案？",hl:"",finish:!1,link:""},{id:"a570e3c7-ff48-4d98-b45c-7218133d5609",parent:"4a2236a0-e581-4879-9d41-6aefda721eb8",text:"工程化 · 构建 / 部署 / 微前端",hl:"blue",finish:!1,link:""},{id:"6176bb94-691a-49ea-888f-e73262ea8831",parent:"a570e3c7-ff48-4d98-b45c-7218133d5609",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"462b39a4-128d-4429-92b2-f889288d6fcc",parent:"6176bb94-691a-49ea-888f-e73262ea8831",text:"Vite / Webpack 基本配置与 dev/build 流程？",hl:"",finish:!1,link:""},{id:"aa26df62-94ec-460f-b77d-b400cf48b3d2",parent:"6176bb94-691a-49ea-888f-e73262ea8831",text:"环境变量 / base 路径 / 别名怎么配？",hl:"",finish:!1,link:""},{id:"14bd95e0-8d49-43a9-a4b1-ff0236548042",parent:"a570e3c7-ff48-4d98-b45c-7218133d5609",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"5f25ea61-76d4-4700-9b63-89dbc9671de2",parent:"14bd95e0-8d49-43a9-a4b1-ff0236548042",text:"拆包 / Tree Shaking / 动态 import 怎么生效？",hl:"",finish:!1,link:""},{id:"7ed5ca8f-2bfc-488f-b2dd-72f1803367d3",parent:"14bd95e0-8d49-43a9-a4b1-ff0236548042",text:"HMR 热更新原理？",hl:"",finish:!1,link:""},{id:"d897d34a-94cf-43fd-8300-3f6b6183cecc",parent:"14bd95e0-8d49-43a9-a4b1-ff0236548042",text:"Source Map 与线上错误定位？",hl:"",finish:!1,link:""},{id:"b5be0b47-0024-460e-ba3b-81243f3f4a91",parent:"a570e3c7-ff48-4d98-b45c-7218133d5609",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"e3bf0987-072c-426a-9d47-d714468ce381",parent:"b5be0b47-0024-460e-ba3b-81243f3f4a91",text:"Vite 为什么快：ESM + esbuild + Rollup 流程？",hl:"",finish:!1,link:""},{id:"fad4ac2c-15b8-41a2-a94e-19827a42b389",parent:"b5be0b47-0024-460e-ba3b-81243f3f4a91",text:"微前端方案对比：qiankun / wujie / Module Federation / iframe？",hl:"",finish:!1,link:""},{id:"9782e333-16b9-4ee5-ad2b-17af7f6964b7",parent:"b5be0b47-0024-460e-ba3b-81243f3f4a91",text:"wujie 沙箱：JS 隔离 / CSS 隔离怎么做？",hl:"",finish:!1,link:""},{id:"07512cb4-2db6-4767-905c-5b3ff153334b",parent:"a570e3c7-ff48-4d98-b45c-7218133d5609",text:"L4 资深",hl:"red",finish:!1,link:""},{id:"650f1fac-d205-494f-ac1d-2e62927ca0eb",parent:"07512cb4-2db6-4767-905c-5b3ff153334b",text:"monorepo / pnpm workspace 怎么组织？",hl:"",finish:!1,link:""},{id:"c9539eb9-3dcb-4bd3-9a66-0043a6c6e939",parent:"07512cb4-2db6-4767-905c-5b3ff153334b",text:"CI/CD 自动构建与发布流水线？",hl:"",finish:!1,link:""},{id:"34000e93-55c2-4730-be98-53691a5d41ca",parent:"07512cb4-2db6-4767-905c-5b3ff153334b",text:"产物优化：gzip/brotli、哈希、CDN 缓存策略？",hl:"",finish:!1,link:""},{id:"5fa21a0f-5741-4bad-9f7c-463ca566d56d",parent:"07512cb4-2db6-4767-905c-5b3ff153334b",text:"GitHub Pages 项目页 base 路径坑怎么避？",hl:"",finish:!1,link:""},{id:"d988de9f-5d8f-493f-9add-171b980f8664",parent:"1b8abdf1-40ea-4153-823a-b68b565721a9",text:"② 游戏技术 · 引擎与实时渲染",hl:"cyan",finish:!1,link:""},{id:"b6a64d2d-f89f-4e59-ac65-740e91a3415b",parent:"d988de9f-5d8f-493f-9add-171b980f8664",text:"图形渲染基础",hl:"blue",finish:!1,link:""},{id:"d9906a78-0987-484f-8dea-f08034c7a1c6",parent:"b6a64d2d-f89f-4e59-ac65-740e91a3415b",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"4ff8c340-57c7-46a8-b6a8-7c7601e4b397",parent:"d9906a78-0987-484f-8dea-f08034c7a1c6",text:"游戏循环（Game Loop）：固定步长 vs 变步长？",hl:"",finish:!1,link:""},{id:"417ecdab-b583-48a7-a09a-b76690b2782c",parent:"d9906a78-0987-484f-8dea-f08034c7a1c6",text:"精灵 / 图集 / 帧动画怎么组织？",hl:"",finish:!1,link:""},{id:"91546d1a-ad27-41ce-99e9-5007babe0a43",parent:"b6a64d2d-f89f-4e59-ac65-740e91a3415b",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"9e129f80-07ec-4dd4-b345-7a3c02978aec",parent:"91546d1a-ad27-41ce-99e9-5007babe0a43",text:"2D 渲染批次与合批怎么做？",hl:"",finish:!1,link:""},{id:"f17766d0-4646-4d59-ab0b-61bda8d57a3c",parent:"91546d1a-ad27-41ce-99e9-5007babe0a43",text:"粒子系统与缓动动画怎么实现？",hl:"",finish:!1,link:""},{id:"4f13db27-18b0-46f3-9616-3341414a8f1f",parent:"b6a64d2d-f89f-4e59-ac65-740e91a3415b",text:"L3 原理",hl:"olive",finish:!1,link:""},{id:"74581ee3-d4fe-4155-963c-bd5ebd6c974b",parent:"4f13db27-18b0-46f3-9616-3341414a8f1f",text:"渲染管线与 WebGL/Three 的共通点？",hl:"",finish:!1,link:""},{id:"725e8861-f3ad-47eb-84b0-68727999be8e",parent:"4f13db27-18b0-46f3-9616-3341414a8f1f",text:"帧同步与状态同步的差别？",hl:"",finish:!1,link:""},{id:"66ae48fa-0301-4b63-8b26-61e5ce8a67b0",parent:"d988de9f-5d8f-493f-9add-171b980f8664",text:"物理与碰撞",hl:"blue",finish:!1,link:""},{id:"f72f5492-de3b-4ff1-8d7e-edb74cddf27e",parent:"66ae48fa-0301-4b63-8b26-61e5ce8a67b0",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"429afea3-5163-4311-82b1-838f5cdde284",parent:"f72f5492-de3b-4ff1-8d7e-edb74cddf27e",text:"AABB / 圆形碰撞检测怎么写？",hl:"",finish:!1,link:""},{id:"53296f29-f9c6-4686-8613-8c441cbae55c",parent:"f72f5492-de3b-4ff1-8d7e-edb74cddf27e",text:"重力 / 速度 / 加速度积分怎么做？",hl:"",finish:!1,link:""},{id:"60336c5e-05e1-49ce-91a9-5b1891b16c99",parent:"66ae48fa-0301-4b63-8b26-61e5ce8a67b0",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"9aa78fb0-d250-48e4-ae5a-6997d4728e68",parent:"60336c5e-05e1-49ce-91a9-5b1891b16c99",text:"物理引擎（Rapier / Cannon / Box2D）怎么接入？",hl:"",finish:!1,link:""},{id:"25a4410d-070f-4244-9229-b1d52f45b13b",parent:"60336c5e-05e1-49ce-91a9-5b1891b16c99",text:"刚体 / 碰撞体 / 触发器 / 约束怎么配？",hl:"",finish:!1,link:""},{id:"3fb98a08-90d9-49fd-8122-6dc5211aa2a8",parent:"66ae48fa-0301-4b63-8b26-61e5ce8a67b0",text:"L3 原理",hl:"olive",finish:!1,link:""},{id:"8d80693e-fd68-4cae-ac4b-0572436a408e",parent:"3fb98a08-90d9-49fd-8122-6dc5211aa2a8",text:"碰撞检测Broadphase / Narrowphase 是什么？",hl:"",finish:!1,link:""},{id:"52cb067d-567d-4f8d-bf31-a2d80c489361",parent:"3fb98a08-90d9-49fd-8122-6dc5211aa2a8",text:"连续碰撞检测 CCD 解决什么问题？",hl:"",finish:!1,link:""},{id:"9e031de9-2ddf-41cf-9d70-0873430dd691",parent:"d988de9f-5d8f-493f-9add-171b980f8664",text:"游戏引擎与网络",hl:"blue",finish:!1,link:""},{id:"c3249c5f-8a49-4c17-928c-bd4e23cccb9d",parent:"9e031de9-2ddf-41cf-9d70-0873430dd691",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"c29cfce7-e3ae-427a-b520-231db4f46ede",parent:"c3249c5f-8a49-4c17-928c-bd4e23cccb9d",text:"Unity / Godot / Unreal 各自定位与适用？",hl:"",finish:!1,link:""},{id:"65d50c9a-482c-4068-8ba6-86fdd1dd0db3",parent:"c3249c5f-8a49-4c17-928c-bd4e23cccb9d",text:"状态机 / 行为树 / 寻路（A*）怎么实现？",hl:"",finish:!1,link:""},{id:"48721f6c-5e1b-4585-a0f0-57295948f789",parent:"9e031de9-2ddf-41cf-9d70-0873430dd691",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"8c7f0132-94ce-420d-93bc-75d3d18ad9a6",parent:"48721f6c-5e1b-4585-a0f0-57295948f789",text:"网络同步：帧同步 / 状态同步 / 预测与回滚？",hl:"",finish:!1,link:""},{id:"5bc9929a-3267-499f-8949-52a01541895f",parent:"48721f6c-5e1b-4585-a0f0-57295948f789",text:"服务端权威与反作弊思路？",hl:"",finish:!1,link:""},{id:"4367a94f-13b1-49c1-bead-9d0509d10b1e",parent:"9e031de9-2ddf-41cf-9d70-0873430dd691",text:"L4 落地",hl:"red",finish:!1,link:""},{id:"bb34c2f5-00ce-45f4-b2da-280c63257c81",parent:"4367a94f-13b1-49c1-bead-9d0509d10b1e",text:"一款小游戏从原型到上线的完整流程？",hl:"",finish:!1,link:""},{id:"98aa1292-4ae0-40b6-a657-6c0fee5a389d",parent:"4367a94f-13b1-49c1-bead-9d0509d10b1e",text:"性能优化：DrawCall / 对象池 / 内存管理？",hl:"",finish:!1,link:""},{id:"087d6fd3-74a2-4c35-a3c5-cbbb3da16ac4",parent:"1b8abdf1-40ea-4153-823a-b68b565721a9",text:"③ 心理学 · 认知与他人",hl:"cyan",finish:!1,link:""},{id:"885bcbbe-96ad-4434-993a-81ed8444446d",parent:"087d6fd3-74a2-4c35-a3c5-cbbb3da16ac4",text:"认知与决策",hl:"blue",finish:!1,link:""},{id:"31a4d36b-f099-425a-ae14-280bd354eea7",parent:"885bcbbe-96ad-4434-993a-81ed8444446d",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"ba8ed10d-738d-4b6c-b4bd-320fbf0bb47b",parent:"31a4d36b-f099-425a-ae14-280bd354eea7",text:"认知偏差有哪些，怎么影响日常判断？",hl:"",finish:!1,link:""},{id:"e671a6f7-4226-4cfe-951c-a94890493a79",parent:"31a4d36b-f099-425a-ae14-280bd354eea7",text:"记忆的工作原理与遗忘曲线？",hl:"",finish:!1,link:""},{id:"f185bc31-61b1-4a16-b211-9e7129a5c83c",parent:"885bcbbe-96ad-4434-993a-81ed8444446d",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"4cebd19d-9d2c-462d-a2ff-d234efc09d87",parent:"f185bc31-61b1-4a16-b211-9e7129a5c83c",text:"系统1/系统2（快思考慢思考）怎么区分？",hl:"",finish:!1,link:""},{id:"d1289395-6e0f-4770-87e7-b9061baac768",parent:"f185bc31-61b1-4a16-b211-9e7129a5c83c",text:"锚定 / 损失厌恶 / 确认偏误 各是什么？",hl:"",finish:!1,link:""},{id:"b86809ca-8ec0-431f-a68f-33a06c293ac3",parent:"885bcbbe-96ad-4434-993a-81ed8444446d",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"4a32c741-2856-41e6-9b43-bdff448425d5",parent:"b86809ca-8ec0-431f-a68f-33a06c293ac3",text:"注意力与心流：深度工作的心理学基础？",hl:"",finish:!1,link:""},{id:"9d401e91-cdf7-4823-b3c4-8c571480a50a",parent:"b86809ca-8ec0-431f-a68f-33a06c293ac3",text:"决策疲劳与默认选项效应？",hl:"",finish:!1,link:""},{id:"febe09b4-8701-4482-9982-92c312c10197",parent:"087d6fd3-74a2-4c35-a3c5-cbbb3da16ac4",text:"动机与习惯",hl:"blue",finish:!1,link:""},{id:"a1c0a54a-cc9d-4479-8617-55e04b1e34ca",parent:"febe09b4-8701-4482-9982-92c312c10197",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"ce84504d-693e-4913-ae3c-bd559174ab12",parent:"a1c0a54a-cc9d-4479-8617-55e04b1e34ca",text:"内在动机 vs 外在动机怎么区分？",hl:"",finish:!1,link:""},{id:"492abc58-358d-4eab-bfbb-efd40d002c71",parent:"a1c0a54a-cc9d-4479-8617-55e04b1e34ca",text:"习惯回路（线索-行为-奖励）是什么？",hl:"",finish:!1,link:""},{id:"a1f35614-9fc7-4add-8f8d-d3c63eb824e2",parent:"febe09b4-8701-4482-9982-92c312c10197",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"96ece4b3-daa6-49d2-a488-f147d854c0db",parent:"a1f35614-9fc7-4add-8f8d-d3c63eb824e2",text:"目标设定理论 / 拖延的心理机制？",hl:"",finish:!1,link:""},{id:"d3ef5308-3815-4a6e-befc-fffe51bac6eb",parent:"a1f35614-9fc7-4add-8f8d-d3c63eb824e2",text:"复利式成长与刻意练习的心理学依据？",hl:"",finish:!1,link:""},{id:"bb21e073-911d-4e88-9d20-67317985503a",parent:"087d6fd3-74a2-4c35-a3c5-cbbb3da16ac4",text:"情绪与人格",hl:"blue",finish:!1,link:""},{id:"a3912099-d3c4-436b-bac3-75e4e23ded05",parent:"bb21e073-911d-4e88-9d20-67317985503a",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"c1938828-c2f9-4928-bbaf-d2647d551a9b",parent:"a3912099-d3c4-436b-bac3-75e4e23ded05",text:"情绪是怎么产生的，如何调节？",hl:"",finish:!1,link:""},{id:"8e8e0df6-2375-4307-80a8-104653571567",parent:"a3912099-d3c4-436b-bac3-75e4e23ded05",text:"大五人格 / MBTI 各自说明什么，局限在哪？",hl:"",finish:!1,link:""},{id:"553c8a12-ebbc-423e-95a8-f09a50a50a19",parent:"bb21e073-911d-4e88-9d20-67317985503a",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"fd9a927f-491f-4eeb-9b2f-e436233c1a92",parent:"553c8a12-ebbc-423e-95a8-f09a50a50a19",text:"INFJ 这类类型的优势与盲区？",hl:"",finish:!1,link:""},{id:"496bb7b6-1ee6-4f04-9fe3-084fb22cf2ad",parent:"553c8a12-ebbc-423e-95a8-f09a50a50a19",text:"共情与边界：高敏感人群怎么自处？",hl:"",finish:!1,link:""},{id:"a36bd518-cca5-445a-b1bf-aa78b807158b",parent:"087d6fd3-74a2-4c35-a3c5-cbbb3da16ac4",text:"群体与社会",hl:"blue",finish:!1,link:""},{id:"5b563e95-07a1-4045-8593-4eefa9465ded",parent:"a36bd518-cca5-445a-b1bf-aa78b807158b",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"3e407d0a-7a3d-4fe0-95af-10dfe6859f99",parent:"5b563e95-07a1-4045-8593-4eefa9465ded",text:"从众 / 社会认同 / 群体极化怎么发生？",hl:"",finish:!1,link:""},{id:"e4cfd5d3-cf1f-48cd-bfc3-1aedbba8d312",parent:"5b563e95-07a1-4045-8593-4eefa9465ded",text:"沟通与非暴力沟通（NVC）怎么实践？",hl:"",finish:!1,link:""},{id:"084bd864-8f45-405c-96aa-d4d05c18fdef",parent:"a36bd518-cca5-445a-b1bf-aa78b807158b",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"eedbbae6-29d7-48cb-84ca-e3f5f97a34ca",parent:"084bd864-8f45-405c-96aa-d4d05c18fdef",text:"影响力六原则（互惠/承诺/社会认同/喜好/权威/稀缺）？",hl:"",finish:!1,link:""},{id:"ee03595c-519b-435c-80b7-0a501602218e",parent:"084bd864-8f45-405c-96aa-d4d05c18fdef",text:"亲密关系与依恋理论基础？",hl:"",finish:!1,link:""},{id:"df60a159-8dd5-4a78-8e23-9adde4295002",parent:"1b8abdf1-40ea-4153-823a-b68b565721a9",text:"④ 阅读 · 读过的书和读法",hl:"cyan",finish:!1,link:""},{id:"f6eef1a2-2abe-4176-9f5a-6b70ea8263f8",parent:"df60a159-8dd5-4a78-8e23-9adde4295002",text:"阅读方法",hl:"blue",finish:!1,link:""},{id:"f2955b19-2c77-4f8d-a122-ddd1b1155c9d",parent:"f6eef1a2-2abe-4176-9f5a-6b70ea8263f8",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"3942b668-116c-4541-b4a4-ba45e39765bc",parent:"f2955b19-2c77-4f8d-a122-ddd1b1155c9d",text:"怎么选书：主题阅读 vs 兴趣阅读？",hl:"",finish:!1,link:""},{id:"7a905f8a-68e0-4694-b9ee-5cd68f19e1e2",parent:"f2955b19-2c77-4f8d-a122-ddd1b1155c9d",text:"速读 / 精读 / 主题阅读各怎么用？",hl:"",finish:!1,link:""},{id:"c3135a2c-570e-4b3c-aeeb-a65f9b73124a",parent:"f6eef1a2-2abe-4176-9f5a-6b70ea8263f8",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"e7f20959-0066-4869-8653-b5903b1f6422",parent:"c3135a2c-570e-4b3c-aeeb-a65f9b73124a",text:"费曼学习法怎么用来读技术书？",hl:"",finish:!1,link:""},{id:"cfbf4cf5-bac4-4334-9a3c-5460d2f2cfe0",parent:"c3135a2c-570e-4b3c-aeeb-a65f9b73124a",text:"如何做摘录与批注才有价值？",hl:"",finish:!1,link:""},{id:"903c66ab-3f8b-4c34-a2bf-3e0a37219c16",parent:"f6eef1a2-2abe-4176-9f5a-6b70ea8263f8",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"19012b50-93bc-4f77-9005-97616c02d5ab",parent:"903c66ab-3f8b-4c34-a2bf-3e0a37219c16",text:"长河笔记法 / 卡片盒（Zettelkasten）怎么搭？",hl:"",finish:!1,link:""},{id:"35bb4c3e-8446-493a-bd4f-c4c49873ace7",parent:"903c66ab-3f8b-4c34-a2bf-3e0a37219c16",text:"读完就忘怎么破：复习与输出机制？",hl:"",finish:!1,link:""},{id:"925992de-96ae-4044-a4b3-a10f5a5c2675",parent:"df60a159-8dd5-4a78-8e23-9adde4295002",text:"主题书单",hl:"blue",finish:!1,link:""},{id:"dd62f2ff-4214-4c74-a18c-67841431671c",parent:"925992de-96ae-4044-a4b3-a10f5a5c2675",text:"L1 书单",hl:"blue",finish:!1,link:""},{id:"762c81f6-e9d5-467c-acd0-795e6c7c46ec",parent:"dd62f2ff-4214-4c74-a18c-67841431671c",text:"已读与在读的书单怎么维护？",hl:"",finish:!1,link:""},{id:"d414169d-a12e-4b28-86bc-04fd6ecc7e3b",parent:"dd62f2ff-4214-4c74-a18c-67841431671c",text:"每本书的一句话收获与关联知识点怎么记？",hl:"",finish:!1,link:""},{id:"c7bd6c8a-3996-41e1-8f63-33c225f67e0c",parent:"925992de-96ae-4044-a4b3-a10f5a5c2675",text:"L2 主题",hl:"yellow",finish:!1,link:""},{id:"00f92606-391f-4bbb-b6a1-0d33f0dbb310",parent:"c7bd6c8a-3996-41e1-8f63-33c225f67e0c",text:"心理学主题书单有哪些？",hl:"",finish:!1,link:""},{id:"4d34bdec-2ea5-4804-91f6-671e55c21027",parent:"c7bd6c8a-3996-41e1-8f63-33c225f67e0c",text:"技术 / 产品 / 成长主题各有哪些必读？",hl:"",finish:!1,link:""},{id:"57554fae-23bd-4ed6-9c30-0e374ab274ee",parent:"1b8abdf1-40ea-4153-823a-b68b565721a9",text:"⑤ AI · 大模型应用开发",hl:"cyan",finish:!1,link:""},{id:"1556676f-24fe-40b0-90c2-d82dc6c4d191",parent:"57554fae-23bd-4ed6-9c30-0e374ab274ee",text:"基础概念",hl:"blue",finish:!1,link:""},{id:"abb8ac9e-f62d-4407-b1b1-bc692790e164",parent:"1556676f-24fe-40b0-90c2-d82dc6c4d191",text:"L0 前置",hl:"grey",finish:!1,link:""},{id:"d7eacc96-e23b-412a-bef1-94bb62332713",parent:"abb8ac9e-f62d-4407-b1b1-bc692790e164",text:"token / 上下文窗口 / 幻觉 / 能力边界是什么？",hl:"",finish:!1,link:""},{id:"c676a47d-d3ec-4b17-8412-c4b1737cee65",parent:"abb8ac9e-f62d-4407-b1b1-bc692790e164",text:"大模型能做什么、不能做什么？",hl:"",finish:!1,link:""},{id:"35e1b329-a95b-4318-99fa-85db0b5fdc9d",parent:"1556676f-24fe-40b0-90c2-d82dc6c4d191",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"79266978-f9a6-42b7-84ce-bd8d88428c71",parent:"35e1b329-a95b-4318-99fa-85db0b5fdc9d",text:"Transformer / Attention 为什么需要注意力机制？",hl:"",finish:!1,link:""},{id:"38b0f2b8-562f-4954-96a8-7956816b01da",parent:"35e1b329-a95b-4318-99fa-85db0b5fdc9d",text:"采样参数 temperature / top-p / max tokens 怎么影响输出？",hl:"",finish:!1,link:""},{id:"09e5b989-85dd-4f9d-a02f-68e4a29ab0d6",parent:"57554fae-23bd-4ed6-9c30-0e374ab274ee",text:"Prompt 工程",hl:"blue",finish:!1,link:""},{id:"a5c1841c-08c5-4dbd-a032-71c20f3a10fd",parent:"09e5b989-85dd-4f9d-a02f-68e4a29ab0d6",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"3f6e0bef-dadb-46f2-829c-75b26ff321c2",parent:"a5c1841c-08c5-4dbd-a032-71c20f3a10fd",text:"清晰指令 / 分隔符 / few-shot / CoT / 结构化输出怎么用？",hl:"",finish:!1,link:""},{id:"f5378c58-3256-470a-b99b-3179991d489b",parent:"a5c1841c-08c5-4dbd-a032-71c20f3a10fd",text:"角色设定与输出格式约束怎么给？",hl:"",finish:!1,link:""},{id:"8991fabe-fc8d-4c6d-8966-66b2436b9a12",parent:"09e5b989-85dd-4f9d-a02f-68e4a29ab0d6",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"f5b06e9d-97f3-4bbf-b006-783b89abd5ae",parent:"8991fabe-fc8d-4c6d-8966-66b2436b9a12",text:"提示注入 / 越狱怎么防，guardrails 怎么建？",hl:"",finish:!1,link:""},{id:"1cd0b23e-75b8-4ea6-a7d9-f62e2101bd06",parent:"8991fabe-fc8d-4c6d-8966-66b2436b9a12",text:"Prompt 版本管理与效果评估怎么做？",hl:"",finish:!1,link:""},{id:"b96d73a3-7bc6-4566-9f9f-f9567a519b2c",parent:"57554fae-23bd-4ed6-9c30-0e374ab274ee",text:"RAG 与向量",hl:"blue",finish:!1,link:""},{id:"99cf4956-339a-40d6-987b-b96928fa9e2f",parent:"b96d73a3-7bc6-4566-9f9f-f9567a519b2c",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"536bd9af-b638-422d-943a-a68d81745bbf",parent:"99cf4956-339a-40d6-987b-b96928fa9e2f",text:"RAG 全流程：加载→切分→向量化→检索→问答链？",hl:"",finish:!1,link:""},{id:"7e294cb5-c4d2-46f3-be82-beb72cfeee35",parent:"99cf4956-339a-40d6-987b-b96928fa9e2f",text:"向量数据库原理与 Chroma 实战？",hl:"",finish:!1,link:""},{id:"923f6bce-daf7-4edf-a790-d7aaf44f6aaa",parent:"b96d73a3-7bc6-4566-9f9f-f9567a519b2c",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"7c200e1b-ee79-4306-826a-adf613bbce1d",parent:"923f6bce-daf7-4edf-a790-d7aaf44f6aaa",text:"chunking 策略 / 混合检索 / rerank / 多路召回？",hl:"",finish:!1,link:""},{id:"c7910e85-b918-49b6-82da-d0b62f460d46",parent:"923f6bce-daf7-4edf-a790-d7aaf44f6aaa",text:"Embedding 模型怎么选、检索效果怎么评估？",hl:"",finish:!1,link:""},{id:"db86e323-f03c-45c9-9ae6-b60025f91f57",parent:"b96d73a3-7bc6-4566-9f9f-f9567a519b2c",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"c2d1c444-d14c-4bc2-b010-dca2df9c3c08",parent:"db86e323-f03c-45c9-9ae6-b60025f91f57",text:"RAG 评测：召回率 / 忠实度 / 答案相关性怎么量化？",hl:"",finish:!1,link:""},{id:"2f154fd9-51af-4b81-a68a-64fa4ef86903",parent:"db86e323-f03c-45c9-9ae6-b60025f91f57",text:"知识图谱 + RAG（GraphRAG）是什么思路？",hl:"",finish:!1,link:""},{id:"7946681a-1e1a-4304-95e5-efcd1476a389",parent:"57554fae-23bd-4ed6-9c30-0e374ab274ee",text:"Agent 与工具",hl:"blue",finish:!1,link:""},{id:"fd2d61f7-26a0-4091-9dae-c290e84e8419",parent:"7946681a-1e1a-4304-95e5-efcd1476a389",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"ea06ddc0-995c-4dd4-8faa-f1a12d866631",parent:"fd2d61f7-26a0-4091-9dae-c290e84e8419",text:"Agent 与 Function Calling / Tool 调用怎么运作？",hl:"",finish:!1,link:""},{id:"ccf710fb-b504-4910-86b2-edb7c7fe08ce",parent:"fd2d61f7-26a0-4091-9dae-c290e84e8419",text:"Tool 调用的失败处理怎么做？",hl:"",finish:!1,link:""},{id:"6e6664f3-eb4a-4595-87ec-9e248f875974",parent:"7946681a-1e1a-4304-95e5-efcd1476a389",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"9a580f44-f959-47e4-8f85-af445e7e3f0a",parent:"6e6664f3-eb4a-4595-87ec-9e248f875974",text:"Agent 框架：LangGraph / AutoGen / CrewAI 多 Agent 协作？",hl:"",finish:!1,link:""},{id:"42e2e252-258f-43ff-a645-e16381ab803c",parent:"6e6664f3-eb4a-4595-87ec-9e248f875974",text:"记忆 / 规划 / 反思机制怎么设计？",hl:"",finish:!1,link:""},{id:"1cf589f9-9d58-4195-8cf6-ccb7c71ff2da",parent:"57554fae-23bd-4ed6-9c30-0e374ab274ee",text:"工程与运维",hl:"blue",finish:!1,link:""},{id:"95bf1359-f0f8-48da-8a66-ee848f4c4489",parent:"1cf589f9-9d58-4195-8cf6-ccb7c71ff2da",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"e98ece5f-a005-45dc-9fae-e0c494a3c224",parent:"95bf1359-f0f8-48da-8a66-ee848f4c4489",text:"API 封装：原生 / LangChain / OpenAI SDK？",hl:"",finish:!1,link:""},{id:"4a17c615-f5a7-4cee-8a20-5c7bc79fdef1",parent:"95bf1359-f0f8-48da-8a66-ee848f4c4489",text:"成本与延迟：token 计费 / 缓存 / 流式输出怎么控？",hl:"",finish:!1,link:""},{id:"7f55937e-fce6-4199-89a1-fcd887a46da9",parent:"1cf589f9-9d58-4195-8cf6-ccb7c71ff2da",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"1841843b-f7a3-45ba-a20d-ebdbd5a8431a",parent:"7f55937e-fce6-4199-89a1-fcd887a46da9",text:"LLMOps：Langfuse/LangSmith 可观测性、版本管理？",hl:"",finish:!1,link:""},{id:"6c6f2b26-ed61-4ef0-8e4d-eee7693136b7",parent:"7f55937e-fce6-4199-89a1-fcd887a46da9",text:"微调基础：LoRA / 数据集构造（了解）？",hl:"",finish:!1,link:""},{id:"e2733751-2913-4cb5-b435-275db050e406",parent:"7f55937e-fce6-4199-89a1-fcd887a46da9",text:"推理优化：量化 / 蒸馏 / vLLM 什么时候用？",hl:"",finish:!1,link:""},{id:"3820f707-bd4d-437f-b857-ea377c3d66ea",parent:"1cf589f9-9d58-4195-8cf6-ccb7c71ff2da",text:"L4 落地",hl:"red",finish:!1,link:""},{id:"2363d6e8-5252-40a6-a1cc-d37f0d2fcf79",parent:"3820f707-bd4d-437f-b857-ea377c3d66ea",text:"多模态：图文混合检索 / 视觉模型接入？",hl:"",finish:!1,link:""},{id:"a951e4e6-5df7-496f-8840-e3023811c1fa",parent:"3820f707-bd4d-437f-b857-ea377c3d66ea",text:"从需求到上线的 AI 应用完整路径？",hl:"",finish:!1,link:""},{id:"413e58f3-6ad6-430b-b804-a50664ae2bde",parent:"1b8abdf1-40ea-4153-823a-b68b565721a9",text:"⑥ 产品与表达 · 把想法变现实",hl:"cyan",finish:!1,link:""},{id:"9fcf9e1f-f8f5-4871-829e-fcec2fd408da",parent:"413e58f3-6ad6-430b-b804-a50664ae2bde",text:"产品与需求",hl:"blue",finish:!1,link:""},{id:"61838b56-bfe5-4adc-b8dd-a8844955e435",parent:"9fcf9e1f-f8f5-4871-829e-fcec2fd408da",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"94397972-18c9-4209-a6dc-ce2fefa37202",parent:"61838b56-bfe5-4adc-b8dd-a8844955e435",text:"从需求到 demo，最小可验证怎么做？",hl:"",finish:!1,link:""},{id:"e62a1fa3-e97e-4ca1-bd69-e37f9d3fa6e0",parent:"61838b56-bfe5-4adc-b8dd-a8844955e435",text:"用户访谈 / 需求验证：怎么判断想法值不值得做？",hl:"",finish:!1,link:""},{id:"8715905c-4516-4447-ba02-5cfb48ba3581",parent:"9fcf9e1f-f8f5-4871-829e-fcec2fd408da",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"d31374e9-56ae-4dde-be75-b3999a0542e8",parent:"8715905c-4516-4447-ba02-5cfb48ba3581",text:"MVP 与最小闭环怎么砍？",hl:"",finish:!1,link:""},{id:"8e8fe922-7c83-4caa-984e-c62bebf0e011",parent:"8715905c-4516-4447-ba02-5cfb48ba3581",text:"数据分析：埋点 / 转化率 / 留存怎么定义和看？",hl:"",finish:!1,link:""},{id:"6cba4262-0ec7-4525-a752-91b3294ee77b",parent:"413e58f3-6ad6-430b-b804-a50664ae2bde",text:"写作与表达",hl:"blue",finish:!1,link:""},{id:"e7e8a6ab-d5b2-4ea3-93d8-d1aaf69ac555",parent:"6cba4262-0ec7-4525-a752-91b3294ee77b",text:"L1 入门",hl:"blue",finish:!1,link:""},{id:"b4f8085c-a8e5-4056-8b51-998dea7b210c",parent:"e7e8a6ab-d5b2-4ea3-93d8-d1aaf69ac555",text:"长评 / 读书笔记 / 长河笔记法怎么写？",hl:"",finish:!1,link:""},{id:"8bb0af67-63ef-4100-adcf-76342fe369f3",parent:"e7e8a6ab-d5b2-4ea3-93d8-d1aaf69ac555",text:"把技术讲给非技术听怎么讲？",hl:"",finish:!1,link:""},{id:"fe7b7ca3-2fa4-4ca1-bf46-b70455e0b5fb",parent:"6cba4262-0ec7-4525-a752-91b3294ee77b",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"e7d0cead-b626-4409-b11c-df33a185d647",parent:"fe7b7ca3-2fa4-4ca1-bf46-b70455e0b5fb",text:"写作结构：钩子-冲突-转折-结论怎么搭？",hl:"",finish:!1,link:""},{id:"c92271f9-a733-46c3-a2f3-c9afa84d9db3",parent:"fe7b7ca3-2fa4-4ca1-bf46-b70455e0b5fb",text:"标题与封面怎么提高点击率而不做标题党？",hl:"",finish:!1,link:""},{id:"014ff846-4984-44bf-9c5d-48a08e9046d3",parent:"6cba4262-0ec7-4525-a752-91b3294ee77b",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"e9ad7096-377a-4dd6-ad57-5c9afa122674",parent:"014ff846-4984-44bf-9c5d-48a08e9046d3",text:"个人品牌：定位 / 人设 / 内容矩阵怎么规划？",hl:"",finish:!1,link:""},{id:"d3a6d61c-2235-4f60-843d-f6dbc115f324",parent:"014ff846-4984-44bf-9c5d-48a08e9046d3",text:"面试怎么讲项目才有说服力？",hl:"",finish:!1,link:""},{id:"77fc4be8-8b6c-4695-b3dc-47d6c1e47f34",parent:"413e58f3-6ad6-430b-b804-a50664ae2bde",text:"成长与知识管理",hl:"blue",finish:!1,link:""},{id:"32594e81-8246-4936-a280-ab0573686dbf",parent:"77fc4be8-8b6c-4695-b3dc-47d6c1e47f34",text:"L2 进阶",hl:"yellow",finish:!1,link:""},{id:"2ffcac32-efdb-432e-b4bc-7e34a152e2d2",parent:"32594e81-8246-4936-a280-ab0573686dbf",text:"知识管理：飞书沉淀 / SOP / 踩坑库双写怎么坚持？",hl:"",finish:!1,link:""},{id:"a802ec1e-ffb3-4c40-8941-ea37a94a3d8d",parent:"32594e81-8246-4936-a280-ab0573686dbf",text:"时间管理：深度工作 / 精力管理怎么落地？",hl:"",finish:!1,link:""},{id:"53ae7f84-03e8-4c2c-b054-d89ecd3515cd",parent:"77fc4be8-8b6c-4695-b3dc-47d6c1e47f34",text:"L3 深入",hl:"olive",finish:!1,link:""},{id:"7b4d56a2-7994-48dd-a321-421fffcefde7",parent:"53ae7f84-03e8-4c2c-b054-d89ecd3515cd",text:"复盘方法：PDCA / 复盘四步法怎么用？",hl:"",finish:!1,link:""},{id:"4a3de595-ee61-40ec-8aa0-2f0875aab417",parent:"53ae7f84-03e8-4c2c-b054-d89ecd3515cd",text:"项目管理：任务分型 / 优先级 / 一次一个动工名额？",hl:"",finish:!1,link:""}],hc={blue:"#5b9dff",yellow:"#f4c04c",cyan:"#3fd0d4",green:"#43c07a",purple:"#b48cf5"};function Kw(e){const t=new Map(e.map(r=>[r.id,{...r,children:[]}])),n=[];for(const r of t.values()){const i=r.parent&&t.get(r.parent);i&&i!==r?i.children.push(r):n.push(r)}return{roots:n,byId:t}}function Yw(e){const t=new Map,n=(r,i)=>{t.set(r.id,i),r.children.forEach(s=>n(s,i+1))};return e.forEach(r=>n(r,0)),t}function Xw(e,t,n,r,i){const s=[];let a=0;const o=(d,f)=>{const h=t.has(d.id)?[]:d.children;let v;if(!h.length)v=a*(n+r),a+=1;else{const m=h.map(y=>o(y,f+1));v=(m[0]+m[m.length-1])/2}return s.push({node:d,x:f*i,y:v,depth:f,hasKids:d.children.length>0,collapsed:t.has(d.id)}),v};e.forEach(d=>o(d,0));const l=new Map(s.map(d=>[d.node.id,d])),u=s.filter(d=>d.node.parent&&l.has(d.node.parent)).map(d=>({p:l.get(d.node.parent),c:d}));return{positioned:s,links:u,leafCount:a,maxDepth:Math.max(0,...s.map(d=>d.depth))}}const Ct=32,Zw=12,e8=236,Nn=202;function t8(e,t=16){const n=String(e||"");return n.length>t?n.slice(0,t)+"…":n}const _y="graph-my-answers-v1";function n8(){try{const e=localStorage.getItem(_y);return e?JSON.parse(e):{}}catch{return{}}}function pc(e){try{return localStorage.setItem(_y,JSON.stringify(e)),!0}catch{return!1}}function Nm(e,t,n){const r=new Blob([t],{type:n}),i=URL.createObjectURL(r),s=document.createElement("a");s.href=i,s.download=e,document.body.appendChild(s),s.click(),s.remove(),setTimeout(()=>URL.revokeObjectURL(i),1e3)}function Rm(){const e=new Date,t=n=>String(n).padStart(2,"0");return`${e.getFullYear()}${t(e.getMonth()+1)}${t(e.getDate())}`}function r8(){const{roots:e,byId:t}=w.useMemo(()=>Kw(fc),[]),n=w.useMemo(()=>Yw(e),[e]),[r,i]=w.useState(()=>{const L=new Set;return n.forEach((H,O)=>{var ie;H>=2&&((ie=t.get(O))!=null&&ie.children.length)&&L.add(O)}),L}),[s,a]=w.useState(null),[o,l]=w.useState(""),[u,d]=w.useState({tx:48,ty:40,k:.86}),f=w.useRef(null),h=w.useRef(null),v=w.useRef(null),[m,y]=w.useState(n8),[g,p]=w.useState(!1),b=w.useMemo(()=>Object.values(m).filter(L=>L&&L.text&&L.text.trim()).length,[m]),x=(L,H)=>{y(O=>{const ie={...O,[L]:{text:H,updatedAt:new Date().toISOString()}};return pc(ie),ie}),p(!0),clearTimeout(x._t),x._t=setTimeout(()=>p(!1),1500)},j=()=>{const L=["# 我的知识图谱答案","",`> 导出时间：${new Date().toLocaleString("zh-CN")} · 共 ${b} 条 · 数据来源：个人网站知识图谱`,""];fc.forEach(H=>{const O=m[H.id];O&&O.text&&O.text.trim()&&(L.push(`## ${H.text.replace(/\s*https?:\/\/\S+/g,"")}`),L.push(""),L.push(`- 节点 ID：\`${H.id}\``),H.link&&L.push(`- 来源：${H.link}`),L.push(`- 更新：${O.updatedAt?new Date(O.updatedAt).toLocaleString("zh-CN"):"—"}`),L.push(""),L.push(O.text.trim()),L.push(""))}),Nm(`我的知识图谱答案-${Rm()}.md`,L.join(`
`),"text/markdown;charset=utf-8")},S=()=>{Nm(`知识图谱答案备份-${Rm()}.json`,JSON.stringify({version:1,exportedAt:new Date().toISOString(),answers:m},null,2),"application/json;charset=utf-8")},E=L=>{const H=L.target.files&&L.target.files[0];if(!H)return;const O=new FileReader;O.onload=()=>{try{const ie=JSON.parse(O.result),R=ie.answers&&typeof ie.answers=="object"?ie.answers:ie;y(N=>{const z={...N,...R};return pc(z),z}),alert(`导入成功，恢复 ${Object.keys(R).length} 条答案。`)}catch{alert("导入失败：不是有效的备份文件。")}},O.readAsText(H),L.target.value=""},C=()=>{window.confirm(`确定清空本机全部 ${b} 条答案吗？此操作不可恢复，建议先导出备份。`)&&(y({}),pc({}))},{positioned:k,links:T,leafCount:P,maxDepth:M}=w.useMemo(()=>Xw(e,r,Ct,Zw,e8),[e,r]),B=w.useMemo(()=>new Map(k.map(L=>[L.node.id,L])),[k]),G=w.useMemo(()=>{const L=o.trim().toLowerCase();if(!L)return new Set;const H=new Set;return fc.forEach(O=>{O.text.toLowerCase().includes(L)&&H.add(O.id)}),H},[o]),$=L=>{i(H=>{const O=new Set(H);return O.has(L)?O.delete(L):O.add(L),O})},V=()=>i(new Set),Z=()=>{const L=new Set;t.forEach(H=>{H.children.length&&L.add(H.id)}),i(L)},_=()=>{if(!G.size)return;const L=[...G][0];i(O=>{const ie=new Set(O);let R=t.get(L);for(;R&&R.parent;)ie.delete(R.parent),R=t.get(R.parent);return ie}),a(L);const H=B.get(L);if(H&&h.current){const O=h.current.getBoundingClientRect();d(ie=>({...ie,tx:O.width/2-H.x*ie.k-Nn/2,ty:O.height/2-H.y*ie.k}))}},A=(L,H)=>{a(L.id),L.link?window.open(L.link,"_blank","noopener,noreferrer"):H&&$(L.id)},I=L=>{f.current={x:L.clientX,y:L.clientY,tx:u.tx,ty:u.ty}},U=L=>{f.current&&d(H=>({...H,tx:f.current.tx+(L.clientX-f.current.x),ty:f.current.ty+(L.clientY-f.current.y)}))},X=()=>{f.current=null};w.useEffect(()=>{const L=h.current;if(!L)return;const H=O=>{O.preventDefault();const ie=O.deltaY<0?1.12:.89;d(R=>({...R,k:Math.min(2.2,Math.max(.3,R.k*ie))}))};return L.addEventListener("wheel",H,{passive:!1}),()=>L.removeEventListener("wheel",H)},[]);const Q=s?t.get(s):null,Le=s?n.get(s):null,De=s&&m[s]?m[s].text:"";return c.jsxs("div",{className:"page container graph-page",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"KNOWLEDGE GRAPH"}),c.jsx("h1",{className:"page-title",children:"知识图谱"}),c.jsxs("p",{className:"page-desc",children:["从飞书知识图谱同步 · ",dc.total," 个节点 · 更新于 ",dc.updatedAt,"。 点节点展开/折叠，拖动平移，滚轮缩放；带链接的节点点击直达飞书原文。 选中节点可在右侧写下自己的答案，自动保存在本机并可导出成文档。"]})]}),c.jsxs("div",{className:"graph-toolbar",children:[c.jsx("input",{className:"input",placeholder:"搜索知识点（如 四元数 / RAG / 闭包）",value:o,onChange:L=>l(L.target.value),onKeyDown:L=>L.key==="Enter"&&_(),"aria-label":"搜索知识点"}),c.jsxs("button",{className:"btn",onClick:_,disabled:!G.size,children:["定位 ",G.size?`(${G.size})`:""]}),c.jsx("span",{className:"graph-spacer"}),c.jsx("button",{className:"btn",onClick:V,children:"全部展开"}),c.jsx("button",{className:"btn",onClick:Z,children:"全部折叠"}),c.jsx("button",{className:"btn",onClick:()=>d({tx:48,ty:40,k:.86}),children:"复位"})]}),c.jsxs("div",{className:"graph-answerbar",children:[c.jsxs("span",{className:"graph-progress",children:[c.jsx("b",{children:b})," / ",dc.total," 个知识点已填答案 · 自动保存在本机"]}),c.jsx("span",{className:"graph-spacer"}),c.jsx("button",{className:"btn",onClick:j,disabled:!b,children:"导出文档（Markdown）"}),c.jsx("button",{className:"btn",onClick:S,disabled:!b,children:"备份（JSON）"}),c.jsx("button",{className:"btn",onClick:()=>v.current&&v.current.click(),children:"从备份恢复"}),c.jsx("button",{className:"btn danger",onClick:C,disabled:!b,children:"清空"}),c.jsx("input",{ref:v,type:"file",accept:"application/json,.json",onChange:E,style:{display:"none"}})]}),c.jsxs("div",{className:"graph-layout",children:[c.jsxs("div",{className:"graph-canvas",children:[c.jsx("svg",{ref:h,width:"100%",height:"100%",onMouseDown:I,onMouseMove:U,onMouseUp:X,onMouseLeave:X,children:c.jsxs("g",{transform:`translate(${u.tx},${u.ty}) scale(${u.k})`,children:[T.map(({p:L,c:H},O)=>c.jsx("path",{className:"graph-link",d:`M ${L.x+Nn} ${L.y+Ct/2} C ${L.x+Nn+70} ${L.y+Ct/2}, ${H.x-70} ${H.y+Ct/2}, ${H.x} ${H.y+Ct/2}`},O)),k.map(({node:L,x:H,y:O,hasKids:ie,collapsed:R})=>{const N=G.has(L.id),z=s===L.id,W=hc[L.hl]||"#4a5573",Y=!!(m[L.id]&&m[L.id].text&&m[L.id].text.trim());return c.jsxs("g",{className:`graph-node ${z?"sel":""} ${N?"match":""} ${Y?"answered":""}`,transform:`translate(${H},${O})`,onClick:J=>{J.stopPropagation(),A(L,ie)},children:[c.jsx("rect",{width:Nn,height:Ct,rx:8,fill:Y?"rgba(24,44,38,.94)":"rgba(18,22,38,.92)",stroke:N?"#ffd166":z?"#fff":Y?"#43c07a":W,strokeWidth:N||z?2.4:1.2}),c.jsx("rect",{width:5,height:Ct,rx:2.5,fill:Y?"#43c07a":W}),c.jsx("text",{x:14,y:Ct/2+4,className:"graph-node-text",title:L.text,children:t8(L.text)}),c.jsx("text",{x:Nn-52,y:Ct/2+4,className:"graph-node-mark answered-mark",title:"已填答案",children:"✎"}),L.finish&&c.jsx("text",{x:Nn-20,y:Ct/2+4,className:"graph-node-mark",children:"✓"}),L.link&&c.jsx("text",{x:Nn-20,y:Ct/2+4,className:"graph-node-mark",children:"↗"}),ie&&c.jsx("text",{x:Nn-36,y:Ct/2+4,className:"graph-node-caret",children:R?"+":"−"})]},L.id)})]})}),!k.length&&c.jsx("div",{className:"graph-empty",children:"图谱数据为空，请先运行同步脚本"})]}),c.jsx("aside",{className:"graph-side",children:Q?c.jsxs(c.Fragment,{children:[c.jsx("span",{className:"page-kicker",children:"节点详情"}),c.jsx("h3",{className:"graph-side-title",children:Q.text}),c.jsxs("div",{className:"graph-side-meta",children:[c.jsxs("span",{className:"badge",children:["第 ",Le," 层"]}),Q.hl&&c.jsx("span",{className:"badge",style:{color:hc[Q.hl]},children:Q.hl}),Q.finish&&c.jsx("span",{className:"badge",children:"✓ 已掌握"}),Q.children.length>0&&c.jsxs("span",{className:"badge",children:[Q.children.length," 个子节点"]})]}),Q.children.length>0&&c.jsxs("div",{className:"graph-side-children",children:[c.jsx("span",{className:"page-kicker",children:"下级知识点"}),c.jsxs("ul",{children:[Q.children.slice(0,12).map(L=>c.jsxs("li",{onClick:()=>a(L.id),children:[c.jsx("span",{className:"graph-dot",style:{background:hc[L.hl]||"#4a5573"}}),L.text]},L.id)),Q.children.length>12&&c.jsxs("li",{className:"graph-more",children:["…还有 ",Q.children.length-12," 个"]})]})]}),c.jsxs("div",{className:"graph-answer-box",children:[c.jsxs("div",{className:"graph-answer-head",children:[c.jsx("span",{className:"page-kicker",children:"我的答案"}),c.jsx("span",{className:`graph-save-state ${g?"flash":""}`,children:g?"✓ 已保存":De?"已存本机":"尚未填写"})]}),c.jsx("textarea",{className:"textarea graph-answer-input",placeholder:"学完后，在这里写下你自己的理解、答案或踩坑记录……输入即自动保存。",value:De,onChange:L=>x(Q.id,L.target.value),"aria-label":"我的答案"}),c.jsx("p",{className:"graph-answer-foot",children:"输入自动存到本机浏览器（刷新、关页都不丢）。想长期留存或同步到飞书，点上方「导出文档」。"})]}),Q.link&&c.jsx("a",{className:"btn graph-side-link",href:Q.link,target:"_blank",rel:"noopener noreferrer",children:"打开飞书原文 ↗"}),c.jsx("p",{className:"graph-side-hint",children:"提示：图谱只列「要掌握的知识点」，答案由你自己学完填写。"})]}):c.jsxs("div",{className:"graph-side-empty",children:[c.jsx("div",{className:"empty-icon",children:"🧭"}),c.jsx("p",{children:"点击任一节点查看详情"}),c.jsx("p",{className:"graph-side-hint",children:"蓝色=待学 · 黄色=在学 · ✓=已掌握"})]})})]})]})}const i8=[{group:"日常开发",tools:[{name:"GitHub",host:"github.com",url:"https://github.com",icon:"⌨"},{name:"CodeSandbox",host:"codesandbox.io",url:"https://codesandbox.io",icon:"▣"},{name:"Stack Overflow",host:"stackoverflow.com",url:"https://stackoverflow.com",icon:"?"},{name:"Can I Use",host:"caniuse.com",url:"https://caniuse.com",icon:"✓"}]},{group:"3D / 图形",tools:[{name:"Three.js Docs",host:"threejs.org",url:"https://threejs.org/docs/",icon:"◈"},{name:"Shadertoy",host:"shadertoy.com",url:"https://www.shadertoy.com",icon:"✧"},{name:"GLSL Sandbox",host:"glslsandbox.com",url:"http://glslsandbox.com",icon:"❋"},{name:"Poly Haven",host:"polyhaven.com",url:"https://polyhaven.com",icon:"◱"}]},{group:"设计资源",tools:[{name:"Figma",host:"figma.com",url:"https://figma.com",icon:"✎"},{name:"Dribbble",host:"dribbble.com",url:"https://dribbble.com",icon:"◍"},{name:"Google Fonts",host:"fonts.google.com",url:"https://fonts.google.com",icon:"A"},{name:"Coolors",host:"coolors.co",url:"https://coolors.co",icon:"◐"}]},{group:"性能与调试",tools:[{name:"PageSpeed",host:"pagespeed.web.dev",url:"https://pagespeed.web.dev",icon:"⚡"},{name:"WebPageTest",host:"webpagetest.org",url:"https://www.webpagetest.org",icon:"⏱"},{name:"Squoosh",host:"squoosh.app",url:"https://squoosh.app",icon:"◧"}]}],mc=[{id:"g-site",name:"个人站 v2 + 部署上线",start:0,end:12,progress:1},{id:"g-graph",name:"知识图谱剪裁重建 + 答案持久化",start:2,end:12,progress:1},{id:"g-history",name:"历史长河 demo",start:8,end:20,progress:.9},{id:"g-library",name:"Three.js 图书馆（开门 + 分类书架）",start:16,end:34,progress:.05},{id:"g-digital",name:"数字人",start:18,end:34,progress:.05},{id:"g-wedding",name:"三生三世婚纱视频",start:24,end:40,progress:0},{id:"g-wechat",name:"微信公众号（心理方向）",start:24,end:40,progress:0}],s8=[{id:"s-digital",text:"数字人",done:!1,priority:"high"},{id:"s-wedding",text:"三生三世婚纱视频",done:!1,priority:"high"},{id:"s-wechat",text:"微信公众号：心理方向",done:!1,priority:"mid"},{id:"s-reading",text:"带问题阅读流程化（T2 模板 → 飞书 → 知识图谱）",done:!1,priority:"mid"},{id:"s-library",text:"Three.js 图书馆：飞书书单 + 开门 + 分类书架",done:!1,priority:"high"},{id:"s-novel",text:"novel 项目（进行中）",done:!1,priority:"low"}],Oy=new Map;function Uy(){try{const e=window.localStorage;return e.setItem("__nf_probe__","1"),e.removeItem("__nf_probe__"),e}catch{return null}}function Bs(e,t=null){try{const n=Uy();if(!n)return Oy.get(e)??t;const r=n.getItem(e);return r==null?t:JSON.parse(r)}catch{return t}}function li(e,t){try{const n=Uy();if(!n){Oy.set(e,t);return}n.setItem(e,JSON.stringify(t))}catch{}}function Of(){const[e,t]=w.useState(null),n=w.useCallback((i,s="info")=>{t({msg:i,type:s,key:Date.now()}),window.setTimeout(()=>t(null),2600)},[]);return[e?c.jsx("div",{className:`toast ${e.type}`,role:"status",children:e.msg},e.key):null,n]}const ka="nf-gantt",Lm="nf-gantt-seed-v2",on=40,a8=10;function o8(){const[e,t]=w.useState(()=>{if(!Bs(Lm,null))return li(ka,mc),li(Lm,1),mc;const v=Bs(ka,null);return Array.isArray(v)&&v.length?v:mc}),[n,r]=w.useState(""),i=w.useRef({}),s=w.useRef(null),a=v=>{t(v),li(ka,v)},o=w.useMemo(()=>{const v=[],m=new Date;for(let y=0;y<=4;y++){const g=new Date(m);g.setDate(m.getDate()-(on-Math.round(on/4*y))),v.push(`${g.getMonth()+1}/${g.getDate()}`)}return v},[]),l=(v,m)=>{var j,S;const y=i.current[m.id];if(!y)return;const g=y.getBoundingClientRect(),p=m.start/on*g.width,b=Math.max((m.end-m.start)/on*g.width,14),x=v.clientX-g.left-p>b-a8?"resize":"move";s.current={row:m,startX:v.clientX,rect:g,mode:x},(S=(j=v.currentTarget).setPointerCapture)==null||S.call(j,v.pointerId)},u=v=>{const m=s.current;if(!m)return;const y=Math.round((v.clientX-m.startX)/m.rect.width*on);t(g=>g.map(p=>{if(p.id!==m.row.id)return p;if(m.mode==="move"){const b=p.end-p.start,x=Math.min(Math.max(p.start+y,0),on-b);return{...p,start:x,end:x+b}}return{...p,end:Math.min(Math.max(p.start+2,p.end+y),on)}}))},d=()=>{s.current&&(s.current=null,li(ka,e))},f=()=>{const v=n.trim();v&&(a([...e,{id:`g-${Date.now()}`,name:v,start:0,end:10,progress:0}]),r(""))},h=v=>a(e.filter(m=>m.id!==v));return c.jsxs("div",{className:"panel",style:{padding:"22px 24px"},children:[c.jsxs("div",{className:"ws-panel-head",children:[c.jsx("span",{className:"ws-panel-title",children:"项目甘特图"}),c.jsx("span",{className:"ws-panel-sub",children:"拖动平移 · 拖右缘改时长 · 自动保存"})]}),c.jsxs("div",{className:"gantt-wrap",children:[c.jsxs("div",{className:"gantt-axis",children:[c.jsx("span",{}),c.jsx("div",{className:"gantt-axis-dates",children:o.map(v=>c.jsx("span",{children:v},v))})]}),e.map(v=>c.jsxs("div",{className:"gantt-row",children:[c.jsxs("div",{className:"gantt-label",children:[c.jsxs("span",{className:`todo-priority todo-priority-${v.progress>=1?"low":v.progress>.5?"mid":"high"}`,children:[Math.round(v.progress*100),"%"]}),c.jsx("span",{className:"gantt-name",title:v.name,children:v.name}),c.jsx("button",{className:"todo-del gantt-del",onClick:()=>h(v.id),"aria-label":`删除 ${v.name}`,children:"✕"})]}),c.jsx("div",{className:"gantt-track",ref:m=>i.current[v.id]=m,onPointerMove:u,children:c.jsx("div",{className:"gantt-bar",style:{left:`${v.start/on*100}%`,width:`${Math.max((v.end-v.start)/on*100,3)}%`,touchAction:"none"},onPointerDown:m=>l(m,v),onPointerMove:u,onPointerUp:d,role:"slider","aria-label":`${v.name}：第 ${v.start} 到 ${v.end} 天`,"aria-valuenow":Math.round(v.progress*100),children:c.jsx("span",{className:"gantt-fill",style:{width:`${(1-v.progress)*100}%`}})})})]},v.id)),e.length===0&&c.jsx("div",{className:"empty",style:{padding:"26px"},children:"暂无计划，加一条吧"})]}),c.jsxs("div",{className:"todo-input-row",children:[c.jsx("input",{className:"input",placeholder:"新计划名称…",value:n,onChange:v=>r(v.target.value),onKeyDown:v=>v.key==="Enter"&&f()}),c.jsx("button",{className:"btn btn-sm btn-primary",onClick:f,children:"添加"})]}),c.jsxs("div",{className:"gantt-legend",children:[c.jsxs("span",{children:[c.jsx("i",{className:"lg-done"})," 已完成进度"]}),c.jsxs("span",{children:[c.jsx("i",{className:"lg-rest"})," 剩余部分（条上深色遮罩）"]})]})]})}const Dm="nf-todos",l8=[{key:"high",label:"高优先",hint:"先啃这些"},{key:"mid",label:"进行中",hint:"排着队"},{key:"low",label:"低优先 / 已完成",hint:"有空再说"}];function c8(){const[e,t]=w.useState(()=>{const m=Bs(Dm,null),y=Array.isArray(m)?m:[],g=new Set(y.map(b=>b.id));return[...y,...s8.filter(b=>!g.has(b.id))]}),[n,r]=w.useState(""),[i,s]=w.useState("high"),[a,o]=w.useState(null),l=m=>{t(m),li(Dm,m)},u=()=>{const m=n.trim();m&&(l([{id:`t-${Date.now()}`,text:m,done:!1,priority:i},...e]),r(""))},d=m=>l(e.map(y=>y.id===m?{...y,done:!y.done}:y)),f=m=>l(e.filter(y=>y.id!==m)),h=(m,y)=>{a&&(l(e.map(g=>g.id===m?{...g,priority:y,done:y==="low"}:g)),o(null))},v=e.filter(m=>!m.done).length;return c.jsxs("div",{className:"panel",style:{padding:"22px 24px"},children:[c.jsxs("div",{className:"ws-panel-head",children:[c.jsx("span",{className:"ws-panel-title",children:"待办看板"}),c.jsxs("span",{className:"ws-panel-sub",children:[v," 项待办 · 拖动卡片换列 · 自动保存"]})]}),c.jsxs("div",{className:"todo-input-row",children:[c.jsx("input",{className:"input",placeholder:"要做什么？回车快速添加…",value:n,onChange:m=>r(m.target.value),onKeyDown:m=>m.key==="Enter"&&u()}),c.jsxs("select",{className:"select",style:{width:92},value:i,onChange:m=>s(m.target.value),"aria-label":"优先级",children:[c.jsx("option",{value:"high",children:"高"}),c.jsx("option",{value:"mid",children:"中"}),c.jsx("option",{value:"low",children:"低"})]}),c.jsx("button",{className:"btn btn-sm btn-primary",onClick:u,children:"添加"})]}),c.jsx("div",{className:"kanban",children:l8.map(m=>{const y=e.filter(g=>g.priority===m.key);return c.jsxs("div",{className:"kanban-col",onDragOver:g=>g.preventDefault(),onDrop:g=>{g.preventDefault(),h(a,m.key)},children:[c.jsxs("div",{className:`kanban-head kanban-${m.key}`,children:[c.jsx("span",{children:m.label}),c.jsx("span",{className:"kanban-count",children:y.length})]}),c.jsxs("div",{className:"kanban-body",children:[y.map(g=>c.jsxs("div",{className:`kanban-card ${g.done?"done":""}`,draggable:!0,onDragStart:()=>o(g.id),onDragEnd:()=>o(null),children:[c.jsx("button",{className:`todo-check ${g.done?"checked":""}`,onClick:()=>d(g.id),"aria-label":g.done?"标记为未完成":"标记为完成",children:"✓"}),c.jsx("span",{className:"todo-text",children:g.text}),c.jsx("button",{className:"todo-del",onClick:()=>f(g.id),"aria-label":"删除待办",children:"✕"})]},g.id)),y.length===0&&c.jsx("div",{className:"kanban-empty",children:"拖到这里"})]})]},m.key)})})]})}function u8(){const[e,t]=Of();return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"WORKSPACE"}),c.jsx("h1",{className:"page-title",children:"工作区"}),c.jsx("p",{className:"page-desc",children:"日常开发中控台：工具导航、计划甘特图与待办清单。甘特图与待办保存在本机浏览器，刷新不丢。"})]}),c.jsx(ve,{children:i8.map(n=>c.jsxs("div",{children:[c.jsx("div",{className:"tool-group-title",children:n.group}),c.jsx("div",{className:"tool-grid",children:n.tools.map(r=>c.jsxs("a",{className:"tool-card",href:r.url,target:"_blank",rel:"noopener noreferrer",onClick:()=>t(`已在新标签打开 ${r.name}`,"ok"),children:[c.jsx("span",{className:"tool-icon",children:r.icon}),c.jsxs("span",{children:[c.jsx("span",{className:"tool-name",children:r.name}),c.jsx("br",{}),c.jsx("span",{className:"tool-host",children:r.host})]})]},r.name))})]},n.group))}),c.jsxs("div",{className:"workspace-grid",style:{marginTop:40},children:[c.jsx(ve,{children:c.jsx(o8,{})}),c.jsx(ve,{delay:.08,children:c.jsx(c8,{})})]}),e]})}const d8="nebula-folio",f8=3;let Ea=null;function h8(){return Ea||(Ea=new Promise((e,t)=>{const n=indexedDB.open(d8,f8);n.onupgradeneeded=r=>{const i=r.target.result;i.objectStoreNames.contains("media")||i.createObjectStore("media",{keyPath:"id"}),i.objectStoreNames.contains("entries")||i.createObjectStore("entries",{keyPath:"id"}),i.objectStoreNames.contains("notes")||i.createObjectStore("notes",{keyPath:"id"}),i.objectStoreNames.contains("spots")||i.createObjectStore("spots",{keyPath:"id"})},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error)}),Ea)}function Ca(e,t,n){return h8().then(r=>new Promise((i,s)=>{const o=r.transaction(e,t).objectStore(e),l=n(o);l.onsuccess=()=>i(l.result),l.onerror=()=>s(l.error)}))}const Ke={put:(e,t)=>Ca(e,"readwrite",n=>n.put(t)),getAll:e=>Ca(e,"readonly",t=>t.getAll()),get:(e,t)=>Ca(e,"readonly",n=>n.get(t)),del:(e,t)=>Ca(e,"readwrite",n=>n.delete(t))},p8="nf-studio-pass",Vy="nf-studio-unlocked",m8="linglong",gc=[{id:"t1",name:"T1 金句拆解",body:`## 原文
> 

## 我的解释


## 我的场景


## 反问
`},{id:"t2",name:"T2 带问题阅读",body:`## 书名 / 章节


## 读前：我带着什么问题
（一章 2-3 个，先写下来再读）
1. 
2. 

## 读前：我原来的答案
（凭已有认知先答，哪怕猜——这是"反向学习"的钩子）


## 读中：书里怎么答
（摘原句或转述，标页码）


## 读后：我现在的答案
（合上书用自己的话重写一遍，别抄）


## 认知差：我改了什么想法


## 回写知识图谱
（把"我现在的答案"填进知识图谱对应节点的「我的答案」，完成沉淀）
`},{id:"t3",name:"T3 场景共鸣",body:`## 那个瞬间


## 书里那一句
> 

## 我的一句话
`},{id:"t4",name:"T4 长河笔记",body:`## 这条知识是什么
（一句话：人物 / 事件 / 技术／艺术，写清时间点）


## 它让我想起什么
（已有的一条知识——没有就写"暂时孤立"，但要想过一遍）


## 我是从哪知道的


## 熟悉度
- [ ] 🟡 已了解（能给别人讲明白）
- [ ] 🟠 稍了解（知道大概，讲不清细节）
- [ ] ⚪ 未知（听说过，还没碰过）

## 追问
（它引出的一个新问题——下次阅读的钩子）
`},{id:"free",name:"自由笔记",body:""}],Ta="notes";function Mm(e){const t=new Date(e),n=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}function g8(){const[e,t]=w.useState([]),[n,r]=w.useState(null),[i,s]=w.useState(!1),a=w.useRef(null),[o,l]=Of();w.useEffect(()=>{Ke.getAll(Ta).then(y=>{const g=(y||[]).sort((p,b)=>(b.updatedAt||0)-(p.updatedAt||0));t(g),g.length&&r(g[0].id)})},[]);const u=w.useMemo(()=>e.find(y=>y.id===n)||null,[e,n]),d=y=>{const g=gc.find(b=>b.id===y)||gc[3],p={id:`n-${Date.now()}`,title:g.id==="free"?"无题":g.name,body:g.body,createdAt:Date.now(),updatedAt:Date.now()};Ke.put(Ta,p).then(()=>{t(b=>[p,...b]),r(p.id)})},f=y=>{if(!u)return;const g={...u,...y,updatedAt:Date.now()};t(p=>p.map(b=>b.id===u.id?g:b)),Ke.put(Ta,g)},h=y=>{Ke.del(Ta,y).then(()=>{t(g=>{const p=g.filter(b=>b.id!==y);return n===y&&r(p.length?p[0].id:null),p})})},v=()=>{if(!u)return;const y=new Blob([`# ${u.title||"无题"}

${u.body}`],{type:"text/markdown;charset=utf-8"}),g=document.createElement("a");g.href=URL.createObjectURL(y),g.download=`${(u.title||"笔记").replace(/[\\/:*?"<>|]/g,"")}.md`,g.click(),URL.revokeObjectURL(g.href),l("已导出 Markdown，丢给知野就能归档到飞书","ok")},m=async()=>{if(!(!u||i)){s(!0);try{const{default:y}=await Ry(async()=>{const{default:b}=await import("./html2canvas.esm-CBrSDip1.js");return{default:b}},[],import.meta.url),g=await y(a.current,{backgroundColor:"#ffffff",scale:2,useCORS:!0}),p=document.createElement("a");p.href=g.toDataURL("image/png"),p.download=`${(u.title||"笔记").replace(/[\\/:*?"<>|]/g,"")}.png`,p.click(),l("已导出 PNG，可直接发小红书","ok")}catch(y){l(`导出失败：${(y==null?void 0:y.message)||y}`,"err")}finally{s(!1)}}};return c.jsxs("div",{children:[c.jsx("div",{className:"notes-toolbar",children:gc.map(y=>c.jsxs("button",{className:"btn btn-sm",onClick:()=>d(y.id),children:["+ ",y.name]},y.id))}),c.jsxs("div",{className:"note-layout",children:[c.jsxs("div",{className:"note-list panel",children:[e.length===0&&c.jsx("div",{className:"empty",style:{padding:26},children:"还没有笔记，选一个模板开一张"}),e.map(y=>c.jsxs("div",{className:`note-item ${y.id===n?"active":""}`,onClick:()=>r(y.id),role:"button",tabIndex:0,onKeyDown:g=>g.key==="Enter"&&r(y.id),children:[c.jsx("span",{className:"note-item-title",children:y.title||"无题"}),c.jsx("span",{className:"note-item-date",children:Mm(y.updatedAt)}),c.jsx("button",{className:"todo-del",onClick:g=>{g.stopPropagation(),h(y.id)},"aria-label":`删除 ${y.title}`,children:"✕"})]},y.id))]}),c.jsxs("div",{className:"note-editor",children:[!u&&c.jsx("div",{className:"panel empty",style:{padding:40},children:"选中左侧一张笔记，或新建一张"}),u&&c.jsxs("div",{className:"panel",style:{padding:"22px 24px",display:"flex",flexDirection:"column",gap:14},children:[c.jsx("input",{className:"input note-title-input",placeholder:"标题…",value:u.title,onChange:y=>f({title:y.target.value})}),c.jsx("textarea",{className:"input note-body-input",placeholder:"写点什么…支持 ## 标题、**粗体**、> 引用、- 列表",value:u.body,onChange:y=>f({body:y.target.value})}),c.jsxs("div",{className:"note-actions",children:[c.jsxs("span",{className:"note-saved",children:["自动保存 · ",Mm(u.updatedAt)]}),c.jsxs("span",{style:{display:"flex",gap:8},children:[c.jsx("button",{className:"btn btn-sm",onClick:v,children:"导出 Markdown"}),c.jsx("button",{className:"btn btn-sm btn-primary",onClick:m,disabled:i,children:i?"生成中…":"导出为图片"})]})]}),c.jsxs("div",{className:"note-preview",children:[c.jsx("div",{className:"note-preview-head",children:"预览"}),c.jsx("div",{className:"note-card-md",dangerouslySetInnerHTML:{__html:Uu(u.body)}})]})]})]})]}),o,u&&c.jsx("div",{style:{position:"fixed",left:-1e4,top:0,width:480},"aria-hidden":"true",children:c.jsxs("div",{ref:a,className:"note-export-card",children:[c.jsx("div",{className:"nec-kicker",children:"路小垚 · 读书笔记"}),c.jsx("h1",{className:"nec-title",children:u.title||"无题"}),c.jsx("div",{className:"note-card-md",dangerouslySetInnerHTML:{__html:Uu(u.body)}}),c.jsx("div",{className:"nec-footer",children:"— 小红书 · 路小垚 —"})]})})]})}const v8=[{h:24,label:"24 小时"},{h:72,label:"3 天"},{h:168,label:"7 天"},{h:720,label:"30 天"}];function y8(){const[e,t]=w.useState(72),[n,r]=w.useState(!1),i=Date.now()+e*3600*1e3,s=`${window.location.origin}${window.location.pathname}#/resume?t=${Dy}&e=${i}`,a=async()=>{try{await navigator.clipboard.writeText(s),r(!0),setTimeout(()=>r(!1),2e3)}catch{r(!1)}},o=l=>{const u=new Date(l),d=f=>String(f).padStart(2,"0");return`${u.getFullYear()}-${d(u.getMonth()+1)}-${d(u.getDate())} ${d(u.getHours())}:${d(u.getMinutes())}`};return c.jsxs("div",{className:"card",style:{maxWidth:720,padding:28},children:[c.jsx("h3",{style:{marginBottom:8},children:"简历专用链接"}),c.jsx("p",{style:{color:"var(--text-mid)",fontSize:13.5,lineHeight:1.8,marginBottom:18},children:"发给 HR 的链接。对方只有在到期前打开才能看到简历，过期自动上锁。 导航里已经没有简历入口，全站唯一入口就是这个链接。"}),c.jsx("div",{style:{display:"flex",gap:8,flexWrap:"wrap",marginBottom:18},children:v8.map(l=>c.jsx("button",{className:`studio-tab ${e===l.h?"active":""}`,onClick:()=>t(l.h),children:l.label},l.h))}),c.jsx("div",{style:{background:"rgba(120,150,255,0.08)",borderRadius:10,padding:"12px 14px",fontSize:12.5,fontFamily:"var(--font-mono)",wordBreak:"break-all",marginBottom:14,lineHeight:1.6},children:s}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14},children:[c.jsx("button",{className:"btn btn-sm btn-primary",onClick:a,children:n?"已复制 ✓":"复制链接"}),c.jsxs("span",{style:{fontSize:12.5,color:"var(--text-low)"},children:["到期时间：",o(i)]})]}),c.jsx("p",{style:{fontSize:12,color:"var(--text-low)",marginTop:16},children:"想让旧链接全部立刻失效？跟我说一声，我换掉密钥即可。"})]})}function b8(){const[e,t]=w.useState(()=>typeof sessionStorage<"u"&&sessionStorage.getItem(Vy)==="1"),[n,r]=w.useState("notes");return e?c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"STUDIO"}),c.jsx("h1",{className:"page-title",children:"工作台"}),c.jsx("p",{className:"page-desc",children:"只有你能进的一层：笔记本、计划板，和通往花园的门。"})]}),c.jsxs("div",{className:"studio-tabs",children:[c.jsx("button",{className:`studio-tab ${n==="notes"?"active":""}`,onClick:()=>r("notes"),children:"笔记本"}),c.jsx("button",{className:`studio-tab ${n==="plan"?"active":""}`,onClick:()=>r("plan"),children:"计划板"}),c.jsx("button",{className:`studio-tab ${n==="resumelink"?"active":""}`,onClick:()=>r("resumelink"),children:"简历链接"}),c.jsx(Zt,{to:"/garden",className:"studio-tab",style:{textDecoration:"none"},children:"私人花园 →"})]}),c.jsx(he.div,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.4},children:n==="notes"?c.jsx(g8,{}):n==="plan"?c.jsx(u8,{}):c.jsx(y8,{})})]}):c.jsx(x8,{onPass:()=>t(!0)})}function x8({onPass:e}){const[t,n]=w.useState(""),[r,i]=w.useState(!1),s=()=>{const a=Bs(p8,m8);t===a?(sessionStorage.setItem(Vy,"1"),e()):(i(!0),setTimeout(()=>i(!1),500))};return c.jsxs("div",{className:"page container",style:{maxWidth:460},children:[c.jsxs("div",{className:"page-head",style:{textAlign:"center"},children:[c.jsx("span",{className:"page-kicker",children:"STUDIO"}),c.jsx("h1",{className:"page-title",children:"这层不对访客开放"}),c.jsx("p",{className:"page-desc",children:"报口令。"})]}),c.jsxs(he.div,{className:"panel",style:{padding:28,display:"flex",flexDirection:"column",gap:14},animate:r?{x:[0,-8,8,-6,6,0]}:{x:0},transition:{duration:.4},children:[c.jsx("input",{className:"input",type:"password",placeholder:"口令",value:t,autoFocus:!0,onChange:a=>n(a.target.value),onKeyDown:a=>a.key==="Enter"&&s()}),c.jsx("button",{className:"btn btn-primary",onClick:s,children:"进门"})]})]})}const j8="./data/world-countries.geo.json",w8=[{id:"seed-harbin",name:"哈尔滨",lon:126.53,lat:45.8,date:"2026-01-18"},{id:"seed-jinan",name:"济南",lon:117.12,lat:36.65,date:"2026-03-07"},{id:"seed-weihai",name:"威海",lon:122.12,lat:37.51,date:"2026-04-12"},{id:"seed-qingdao",name:"青岛",lon:120.38,lat:36.07,date:"2026-05-02"},{id:"seed-nanjing",name:"南京",lon:118.79,lat:32.06,date:"2026-07-19"},{id:"seed-wuhan",name:"武汉",lon:114.3,lat:30.59,date:"2026-08-08"},{id:"seed-changsha",name:"长沙",lon:112.94,lat:28.23,date:"2026-08-22"},{id:"seed-jiaxing",name:"嘉兴",lon:120.75,lat:30.75,date:"2026-09-13"},{id:"seed-xitang",name:"西塘",lon:120.89,lat:30.94,date:"2026-09-19"},{id:"seed-nanxun",name:"南浔",lon:120.42,lat:30.87,date:"2026-09-26"},{id:"seed-damingshan",name:"大明山",lon:119.1,lat:30.03,date:"2026-09-29"},{id:"seed-daqishan",name:"大奇山",lon:119.69,lat:29.73,date:"2026-10-01"},{id:"seed-shaoxing",name:"绍兴",lon:120.58,lat:30.03,date:"2026-10-03"},{id:"seed-taizhou",name:"台州",lon:121.42,lat:28.66,date:"2026-10-17"},{id:"seed-wenzhou",name:"温州",lon:120.7,lat:28,date:"2026-10-24"},{id:"seed-leshan",name:"乐山",lon:103.77,lat:29.55,date:"2026-11-01"},{id:"seed-emeishan",name:"峨眉山",lon:103.34,lat:29.6,date:"2026-11-03"},{id:"seed-dali",name:"大理",lon:100.27,lat:25.61,date:"2026-11-08"},{id:"seed-xining",name:"西宁",lon:101.78,lat:36.62,date:"2027-01-10"},{id:"seed-qinghaihu",name:"青海湖",lon:100.2,lat:36.95,date:"2027-01-12"},{id:"seed-chaka",name:"茶卡",lon:99.1,lat:36.78,date:"2027-01-13"},{id:"seed-shuishangyadan",name:"水上雅丹",lon:93.7,lat:37,date:"2027-01-15"},{id:"seed-dunhuang",name:"敦煌",lon:94.66,lat:40.14,date:"2027-01-18"},{id:"seed-jiayuguan",name:"嘉峪关",lon:98.29,lat:39.77,date:"2027-01-20"},{id:"seed-zhangye",name:"张掖",lon:100.45,lat:38.93,date:"2027-01-22"}],Im=4,vc="nf-spots-seeded",S8=["webrd01","webrd02","webrd03","webrd04"],k8=(e,t,n)=>`https://${S8[(t+n)%4]}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x=${t}&y=${n}&z=${e}`,E8="invert(1) hue-rotate(180deg) saturate(0.45) contrast(0.55) brightness(1.3)",C8="rgba(40, 80, 200, 0.16)",T8=(()=>{try{const e=document.createElement("canvas").getContext("2d");return e.filter="invert(1)",e.filter==="invert(1)"}catch{return!1}})(),Do=Math.PI;function Fr(e,t){const n=Math.max(-85.0511,Math.min(85.0511,t))*(Math.PI/180),r=Math.log(Math.tan(Math.PI/4+n/2));return{u:(e+180)/360,v:(Do-r)/(2*Do)}}function P8(e,t){const n=e*360-180,r=Do-t*2*Do,i=2*Math.atan(Math.exp(r))-Math.PI/2;return{lon:n,lat:i*180/Math.PI}}function A8(e,t){const r=Math.PI/180,i=(t.lat-e.lat)*r,s=(t.lon-e.lon)*r,a=Math.sin(i/2)**2+Math.cos(e.lat*r)*Math.cos(t.lat*r)*Math.sin(s/2)**2;return 2*6371*Math.asin(Math.sqrt(a))}function N8(e,t,n,r){const i=n-e,s=r-t,a=Math.hypot(i,s),o=Math.min(a*.28,130);return{x:(e+n)/2-s/(a||1)*o,y:(t+r)/2-i/(a||1)*o}}function _m(e,t,n,r){const i=1-e;return{x:i*i*t.x+2*i*e*n.x+e*e*r.x,y:i*i*t.y+2*i*e*n.y+e*e*r.y}}function R8(){const e=w.useRef(null),t=w.useRef(null),n=w.useRef(null),r=w.useRef(null),i=w.useRef({s:0,s0:0,tx:0,ty:0}),s=w.useRef([]),a=w.useRef({w:0,h:0,dpr:1}),o=w.useRef(null),l=w.useRef(!1),u=w.useRef(0),d=w.useRef(!1),f=w.useRef(0),h=w.useRef(!1),v=w.useRef(new Map),m=w.useRef(new Set),y=w.useRef(!1),g=w.useRef(0),[p,b]=w.useState([]),[x,j]=w.useState(!1),[S,E]=w.useState(null),[C,k]=w.useState(!0),[T]=w.useState(()=>typeof window<"u"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches),P=()=>{Ke.getAll("spots").then(async R=>{const N=parseInt(localStorage.getItem(vc)||"0",10),z=!R.length&&!localStorage.getItem(vc),W=R.length&&N>=1&&N<Im;if(z||W)return localStorage.setItem(vc,String(Im)),await Promise.all(w8.map(J=>Ke.put("spots",J))),P();const Y=R.sort((J,ne)=>J.date<ne.date?-1:1);s.current=Y,b(Y)}).catch(()=>{})};w.useEffect(()=>{P()},[]);const M=w.useMemo(()=>{let R=0;for(let N=1;N<p.length;N++)R+=A8(p[N-1],p[N]);return Math.round(R)},[p]),B=()=>{if(!S)return;const R={id:`s-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,name:S.name.trim()||"未命名",lon:S.lon,lat:S.lat,date:S.date};Ke.put("spots",R).then(()=>{P(),E(null)}).catch(()=>{})},G=R=>{Ke.del("spots",R).then(P).catch(()=>{})},$=()=>{const{w:R,h:N}=a.current,z=i.current;z.s=z.s0,z.tx=(R-z.s)/2,z.ty=(N-z.s)/2,Le()},V=()=>{const R=s.current,{w:N,h:z}=a.current,W=i.current;if(!N||!R.length)return;const Y=R.map(ee=>Fr(ee.lon,ee.lat)),J=Math.min(...Y.map(ee=>ee.u)),ne=Math.max(...Y.map(ee=>ee.u)),q=Math.min(...Y.map(ee=>ee.v)),ze=Math.max(...Y.map(ee=>ee.v)),et=ne-J+Math.max((ne-J)*.5,.06),se=ze-q+Math.max((ze-q)*.7,.1);W.s=Math.max(W.s0*.7,Math.min(W.s0*12,N/et,z/se)),W.tx=N/2-(J+ne)/2*W.s,W.ty=z/2-(q+ze)/2*W.s},Z=R=>{const{w:N,h:z}=a.current,W=i.current,Y=Fr(R.lon,R.lat);W.s=Math.max(W.s,W.s0*3),W.tx=N/2-Y.u*W.s,W.ty=z/2-Y.v*W.s,Le()},_=()=>{const R=e.current,N=t.current;if(!R||!N)return;const z=Math.min(window.devicePixelRatio||1,2),W=R.clientWidth,Y=Math.round(Math.min(Math.max(W*.58,320),520));N.width=Math.round(W*z),N.height=Math.round(Y*z),N.style.height=`${Y}px`,a.current={w:W,h:Y,dpr:z};const J=i.current;J.s0||(J.s0=Math.min(W*.96/1,Y*.96/1),J.s=J.s0,J.tx=(W-J.s)/2,J.ty=(Y-J.s)/2),U(),T&&X()};function A(){if(y.current||!T8)return 0;const R=i.current;if(!R.s)return 0;const N=Math.max(4,Math.min(17,Math.ceil(Math.log2(R.s/256))));return R.s/2**N>=90?N:0}function I(R,N){const{w:z,h:W}=a.current,Y=i.current,J=2**N,ne=Y.s/J;g.current||(g.current=Date.now());const q=v.current;q.size>300&&q.clear();const ze=Math.floor(Math.max(0,(0-Y.tx)/Y.s)*J),et=Math.floor(Math.min(1,(z-Y.tx)/Y.s)*J),se=Math.max(0,Math.floor((0-Y.ty)/Y.s*J)),ee=Math.min(J-1,Math.floor((W-Y.ty)/Y.s*J));let oe=0,Se=0;for(let ot=ze;ot<=et;ot++)for(let $e=se;$e<=ee;$e++){const Ne=(ot%J+J)%J,Oe=`${N}/${Ne}/${$e}`,Jt=ot/J*Y.s+Y.tx,qt=$e/J*Y.s+Y.ty;let tt=q.get(Oe);if(!tt){if(m.current.has(Oe))continue;tt=new Image,tt.crossOrigin="anonymous",tt.onload=()=>{l.current||U()},tt.onerror=()=>{m.current.add(Oe),m.current.size>12&&(y.current=!0),l.current||U()},tt.src=k8(N,Ne,$e),q.set(Oe,tt),Se++;continue}if(!tt.complete||!tt.naturalWidth){Se++;continue}R.filter=E8,R.drawImage(tt,Jt,qt,ne+.6,ne+.6),R.filter="none",oe++}oe===0&&(Se===0||Date.now()-g.current>4e3)&&(y.current=!0),R.filter="none",R.fillStyle=C8,R.fillRect(0,0,z,W)}function U(){var et;const R=t.current,N=r.current;if(!R||!N)return;const{w:z,h:W,dpr:Y}=a.current,J=i.current;let ne=n.current;ne||(ne=document.createElement("canvas"),n.current=ne),ne.width=R.width,ne.height=R.height;const q=ne.getContext("2d");q.setTransform(Y,0,0,Y,0,0),q.clearRect(0,0,z,W);const ze=q.createLinearGradient(0,0,0,W);if(ze.addColorStop(0,"rgba(10, 18, 40, 0.92)"),ze.addColorStop(1,"rgba(4, 8, 20, 0.96)"),q.fillStyle=ze,q.fillRect(0,0,z,W),A()){if(I(q,A()),!y.current)return}else{q.strokeStyle="rgba(120, 150, 255, 0.07)",q.lineWidth=.5,q.beginPath();for(let se=-180;se<=180;se+=20){const ee=Fr(se,0).u*J.s+J.tx;q.moveTo(ee,0),q.lineTo(ee,W)}for(let se=-80;se<=80;se+=20){const ee=Fr(0,se).v*J.s+J.ty;q.moveTo(0,ee),q.lineTo(z,ee)}q.stroke()}for(const se of N.features){if(((et=se.properties)==null?void 0:et.name)==="Antarctica")continue;const ee=se.geometry.type==="Polygon"?[se.geometry.coordinates]:se.geometry.coordinates;for(const oe of ee){q.beginPath();for(const Se of oe){let ot=null;for(let $e=0;$e<Se.length;$e++){const Ne=Fr(Se[$e][0],Se[$e][1]),Oe=Ne.u*J.s+J.tx,Jt=Ne.v*J.s+J.ty;$e===0||ot!==null&&Math.abs(Ne.u-ot)>.5?q.moveTo(Oe,Jt):q.lineTo(Oe,Jt),ot=Ne.u}q.closePath()}q.fillStyle="rgba(120, 150, 255, 0.10)",q.fill("evenodd"),q.strokeStyle="rgba(139, 92, 246, 0.30)",q.lineWidth=.6,q.stroke()}}}function X(){const R=t.current;if(!R)return;const N=R.getContext("2d"),{w:z,h:W,dpr:Y}=a.current,J=i.current;N.setTransform(1,0,0,1,0,0),N.clearRect(0,0,R.width,R.height),n.current&&N.drawImage(n.current,0,0),N.setTransform(Y,0,0,Y,0,0);const ne=s.current,q=se=>{const ee=Fr(se.lon,se.lat);return{x:ee.u*J.s+J.tx,y:ee.v*J.s+J.ty}};for(let se=1;se<ne.length;se++){const ee=q(ne[se-1]),oe=q(ne[se]);if(ee.x<-200&&oe.x<-200||ee.x>z+200&&oe.x>z+200)continue;const Se=N8(ee.x,ee.y,oe.x,oe.y);if(T){N.strokeStyle="rgba(34, 211, 238, 0.55)",N.lineWidth=1.4,N.setLineDash([5,5]),N.beginPath(),N.moveTo(ee.x,ee.y),N.quadraticCurveTo(Se.x,Se.y,oe.x,oe.y),N.stroke(),N.setLineDash([]);continue}N.strokeStyle="rgba(34, 211, 238, 0.22)",N.lineWidth=1.2,N.beginPath(),N.moveTo(ee.x,ee.y),N.quadraticCurveTo(Se.x,Se.y,oe.x,oe.y),N.stroke();const ot=(((se-1)*.37+f.current)%1+1)%1,$e=26;N.beginPath();for(let Jt=0;Jt<=$e;Jt++){const qt=Math.max(0,ot-Jt*.014),tt=_m(qt,ee,Se,oe);Jt===0?N.moveTo(tt.x,tt.y):N.lineTo(tt.x,tt.y)}N.strokeStyle="rgba(125, 240, 255, 0.9)",N.lineWidth=2.2,N.lineCap="round",N.stroke();const Ne=_m(ot,ee,Se,oe),Oe=N.createRadialGradient(Ne.x,Ne.y,0,Ne.x,Ne.y,9);Oe.addColorStop(0,"rgba(232, 121, 249, 0.95)"),Oe.addColorStop(.5,"rgba(139, 92, 246, 0.4)"),Oe.addColorStop(1,"rgba(139, 92, 246, 0)"),N.fillStyle=Oe,N.beginPath(),N.arc(Ne.x,Ne.y,9,0,Math.PI*2),N.fill()}const ze=performance.now()/1e3,et=[];ne.forEach((se,ee)=>{const{x:oe,y:Se}=q(se);if(oe<-60||oe>z+60||Se<-30||Se>W+30)return;const ot=(ee*47+185)%360;if(!T){const Oe=(ze*.7+ee*.31)%1;N.strokeStyle=`hsla(${ot}, 90%, 70%, ${.5*(1-Oe)})`,N.lineWidth=1.5,N.beginPath(),N.arc(oe,Se,5+Oe*16,0,Math.PI*2),N.stroke()}N.fillStyle=`hsl(${ot}, 85%, 62%)`,N.beginPath(),N.arc(oe,Se,4,0,Math.PI*2),N.fill(),N.strokeStyle="rgba(255,255,255,0.85)",N.lineWidth=1.2,N.stroke(),N.font="11px ui-monospace, SFMono-Regular, monospace";const $e=N.measureText(se.name).width;let Ne=Se-6;for(let Oe=0;Oe<3&&et.some(qt=>oe+8<qt.x+qt.w&&oe+8+$e+2>qt.x&&Ne-11<qt.y+qt.h&&Ne>qt.y);Oe++)Ne+=15;N.fillStyle="rgba(234, 240, 255, 0.92)",N.fillText(se.name,oe+8,Ne),et.push({x:oe+8,y:Ne-11,w:$e+2,h:13})}),d.current}function Q(){l.current||T||(f.current=(f.current+.004)%1,X(),u.current=requestAnimationFrame(Q))}const Le=()=>{U(),X()};w.useEffect(()=>{l.current=!1,_(),fetch(j8).then(W=>{if(!W.ok)throw new Error(`地图数据 ${W.status}`);return W.json()}).then(W=>{l.current||(r.current=W,k(!1),Le(),T||(u.current=requestAnimationFrame(Q)))}).catch(()=>{if(e.current){let W=e.current.querySelector(".travel-loading");W||(W=document.createElement("div"),W.className="travel-loading",e.current.appendChild(W)),W.textContent="地图数据没加载出来（data/world-countries.geo.json 缺失？）"}});const R=t.current,N=W=>{W.preventDefault();const Y=R.getBoundingClientRect(),J=W.clientX-Y.left,ne=W.clientY-Y.top,q=i.current,ze=W.deltaY<0?1.15:1/1.15,et=Math.max(q.s0*.7,Math.min(q.s0*12,q.s*ze));q.tx=J-(J-q.tx)/q.s*et,q.ty=ne-(ne-q.ty)/q.s*et,q.s=et,Le()};R.addEventListener("wheel",N,{passive:!1});const z=new ResizeObserver(_);return z.observe(e.current),()=>{l.current=!0,cancelAnimationFrame(u.current),R.removeEventListener("wheel",N),z.disconnect()}},[T]),w.useEffect(()=>{T&&X()},[p,x,T]),w.useEffect(()=>{h.current||C||!r.current||!p.length||(h.current=!0,V(),Le())},[p,C]),w.useEffect(()=>{d.current=x,t.current&&(t.current.style.cursor=x?"crosshair":"grab"),T&&X()},[x,T]);const De=R=>{const N=t.current.getBoundingClientRect(),z=i.current;return P8((R.clientX-N.left-z.tx)/z.s,(R.clientY-N.top-z.ty)/z.s)},L=R=>{x||(o.current={x:R.clientX,y:R.clientY,tx:i.current.tx,ty:i.current.ty},R.currentTarget.setPointerCapture(R.pointerId))},H=R=>{const N=o.current;N&&(i.current.tx=N.tx+(R.clientX-N.x),i.current.ty=N.ty+(R.clientY-N.y),Le())},O=()=>{o.current=null},ie=R=>{var ne;if(!x)return;const{lon:N,lat:z}=De(R);if(N<-180||N>180||z<-85||z>85)return;const W=t.current.getBoundingClientRect(),Y=((ne=e.current)==null?void 0:ne.clientWidth)||600,J={lon:Math.round(N*1e3)/1e3,lat:Math.round(z*1e3)/1e3,name:"",date:new Date().toISOString().slice(0,10),px:Math.min(R.clientX-W.left,Y-240),py:Math.min(R.clientY-W.top,400)};E(J)};return c.jsxs("div",{className:"travel-wrap",children:[c.jsxs("div",{className:"travel-toolbar",children:[c.jsx("button",{className:`btn btn-sm ${x?"btn-primary":""}`,onClick:()=>{j(!x),E(null)},children:x?"◉ 打点中（点地图）":"＋ 打点模式"}),c.jsx("button",{className:"btn btn-sm",onClick:$,children:"⤾ 复位"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>{V(),Le()},children:"⤢ 对准足迹"}),c.jsx("span",{className:"travel-hint",children:"滚轮缩放 · 拖拽平移 · 点位按时间连成飞线"})]}),c.jsxs("div",{className:"travel-map-wrap",ref:e,children:[c.jsx("canvas",{ref:t,className:"travel-canvas",onPointerDown:L,onPointerMove:H,onPointerUp:O,onPointerLeave:O,onClick:ie}),C&&c.jsx("div",{className:"travel-loading",children:"地图加载中…"}),x&&!S&&c.jsx("div",{className:"travel-adding-tip",children:"点击地图任意位置放下一个足迹"}),S&&c.jsxs("div",{className:"travel-draft",style:{left:S.px,top:S.py},children:[c.jsx("input",{className:"input travel-draft-input",autoFocus:!0,placeholder:"这个地方叫什么？",value:S.name,onChange:R=>E({...S,name:R.target.value}),onKeyDown:R=>R.key==="Enter"&&B()}),c.jsx("input",{className:"input travel-draft-input",type:"date",value:S.date,onChange:R=>E({...S,date:R.target.value})}),c.jsxs("div",{className:"travel-draft-meta",children:[S.lat.toFixed(2),"°, ",S.lon.toFixed(2),"°"]}),c.jsxs("div",{className:"travel-draft-btns",children:[c.jsx("button",{className:"btn btn-sm btn-primary",onClick:B,children:"种下足迹"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>E(null),children:"取消"})]})]})]}),c.jsxs("div",{className:"travel-list-head",children:[c.jsx("span",{className:"ws-panel-title",children:"足迹"}),c.jsxs("span",{className:"ws-panel-sub",children:[p.length," 个点 · 顺路 ",M.toLocaleString()," km"]})]}),p.length===0?c.jsx("div",{className:"travel-empty",children:"还没有足迹。开「打点模式」，在世界地图上按下第一个点。"}):c.jsx("div",{className:"travel-list",children:[...p].reverse().map(R=>c.jsxs("div",{className:"travel-item",onClick:()=>Z(R),role:"button",tabIndex:0,onKeyDown:N=>N.key==="Enter"&&Z(R),children:[c.jsx("span",{className:"travel-item-dot"}),c.jsx("span",{className:"travel-item-name",children:R.name}),c.jsx("span",{className:"travel-item-date",children:R.date}),c.jsx("button",{className:"travel-item-del",onClick:N=>{N.stopPropagation(),G(R.id)},"aria-label":`删除 ${R.name}`,children:"✕"})]},R.id))})]})}const Fy="nf-garden-pass",Om="nf-garden-unlocked",L8="bloom2026",Um=8;function D8(e){const t=new Date(e),n=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${n(t.getMonth()+1)}-${n(t.getDate())} ${n(t.getHours())}:${n(t.getMinutes())}`}function M8(){const[e,t]=w.useState(()=>typeof sessionStorage<"u"&&sessionStorage.getItem(Om)==="1"),n=()=>{sessionStorage.setItem(Om,"1"),t(!0)};return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"SECRET GARDEN"}),c.jsx("h1",{className:"page-title",children:"私人花园"}),c.jsx("p",{className:"page-desc",children:"不对外公开的后花园：日志、图片与视频。媒体存放在本机浏览器（IndexedDB），不随表单上传到任何服务器。"})]}),e?c.jsx(_8,{}):c.jsx(I8,{onPass:n})]})}function I8({onPass:e}){const[t,n]=w.useState(""),[r,i]=w.useState(!1),s=()=>{const a=Bs(Fy,null)||L8;t===a?e():(i(!0),window.setTimeout(()=>i(!1),420))};return c.jsxs(he.div,{className:`garden-gate card ${r?"garden-gate-shake":""}`,initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.4},children:[c.jsx("div",{className:"garden-gate-icon",children:"✿"}),c.jsx("h2",{style:{marginBottom:8},children:"花园上锁中"}),c.jsx("p",{style:{color:"var(--text-mid)",fontSize:"0.9rem"},children:"输入口令进入。这是一道客户端门禁，用来挡住随手闯入的访客。"}),c.jsx("input",{className:"input gate-pass",type:"password",placeholder:"••••••••",value:t,onChange:a=>n(a.target.value),onKeyDown:a=>a.key==="Enter"&&s(),autoFocus:!0}),c.jsx("button",{className:"btn btn-primary",style:{width:"100%",marginTop:14,justifyContent:"center"},onClick:s,children:"进入花园"}),c.jsxs("div",{className:"garden-gate-hint",children:["演示口令 ",c.jsx("code",{children:"bloom2026"})," · 进入后可在页内修改"]})]})}function _8(){const[e,t]=w.useState([]),[n,r]=w.useState([]),[i,s]=w.useState(""),[a,o]=w.useState([]),[l,u]=w.useState(null),[d,f]=w.useState(!1),[h,v]=w.useState(""),[m,y]=Of(),g=w.useRef(null);w.useEffect(()=>{Ke.getAll("media").then(k=>t(k.sort((T,P)=>T.date<P.date?1:-1))).catch(()=>{}),Ke.getAll("entries").then(k=>r(k.sort((T,P)=>T.date<P.date?1:-1))).catch(()=>{})},[]);const p=w.useMemo(()=>Object.fromEntries(e.map(k=>[k.id,k])),[e]),b=k=>{const T=Array.from(k||[]),P=[];for(const M of T){if(M.size>Um*1024*1024){y(`「${M.name}」超过 ${Um}MB，已跳过`,"err");continue}if(!/^(image|video)\//.test(M.type)){y(`「${M.name}」不是图片或视频，已跳过`,"err");continue}P.push(M)}o(M=>[...M,...P])},x=k=>new Promise((T,P)=>{const M=new FileReader;M.onload=()=>T(M.result),M.onerror=P,M.readAsDataURL(k)}),j=async()=>{const k=i.trim();if(!(!k&&a.length===0)){f(!0);try{const T=[];for(const G of a){const $=await x(G),V={id:`m-${Date.now()}-${Math.random().toString(36).slice(2,7)}`,kind:G.type.startsWith("video")?"video":"image",name:G.name,mime:G.type,dataUrl:$,date:new Date().toISOString()};await Ke.put("media",V),T.push(V.id)}const P={id:`e-${Date.now()}`,text:k,mediaIds:T,date:new Date().toISOString()};await Ke.put("entries",P);const M=await Ke.getAll("media");t(M.sort((G,$)=>G.date<$.date?1:-1));const B=await Ke.getAll("entries");r(B.sort((G,$)=>G.date<$.date?1:-1)),s(""),o([]),y("已种进花园 🌱","ok")}catch{y("保存失败：浏览器存储可能已满或被禁用","err")}finally{f(!1)}}},S=async k=>{window.confirm(`删除「${k.name}」？引用它的日志会保留文字。`)&&(await Ke.del("media",k.id),t(T=>T.filter(P=>P.id!==k.id)),r(T=>T.map(P=>({...P,mediaIds:(P.mediaIds||[]).filter(M=>M!==k.id)}))),y("已删除","ok"))},E=async k=>{window.confirm("删除这条日志？（不会删除媒体库中的文件）")&&(await Ke.del("entries",k.id),r(T=>T.filter(P=>P.id!==k.id)))},C=()=>{const k=h.trim();if(k.length<4){y("口令至少 4 个字符","err");return}li(Fy,k),v(""),y("口令已更新（保存在本机）","ok")};return c.jsxs("div",{children:[c.jsx(ve,{children:c.jsxs("div",{className:"panel",style:{padding:"14px 20px",display:"flex",gap:12,alignItems:"center",flexWrap:"wrap",marginBottom:34},children:[c.jsx("span",{style:{fontSize:"0.85rem",color:"var(--text-mid)"},children:"🔐 修改口令"}),c.jsx("input",{className:"input",style:{maxWidth:220},type:"password",placeholder:"新口令（≥4 位）",value:h,onChange:k=>v(k.target.value),onKeyDown:k=>k.key==="Enter"&&C()}),c.jsx("button",{className:"btn btn-sm",onClick:C,children:"更新"}),c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-low)"},children:"门禁为客户端级，重启浏览器后需重新输入"})]})}),c.jsx(ve,{children:c.jsxs("section",{className:"card garden-compose",children:[c.jsx("div",{className:"card-title",children:"今天想记点什么？"}),c.jsx("textarea",{className:"textarea",placeholder:"日志、心情、灵感碎片……（可留空，只发图）",value:i,onChange:k=>s(k.target.value)}),c.jsxs("div",{className:"garden-media-slot",children:[c.jsxs("div",{style:{display:"flex",gap:10,flexWrap:"wrap",marginTop:12},children:[c.jsx("input",{ref:g,type:"file",accept:"image/*,video/*",multiple:!0,hidden:!0,onChange:k=>{b(k.target.files),k.target.value=""}}),c.jsx("button",{className:"btn btn-sm",onClick:()=>{var k;return(k=g.current)==null?void 0:k.click()},children:"＋ 添加图片 / 视频"}),c.jsx("button",{className:"btn btn-sm btn-primary",disabled:d||!i.trim()&&a.length===0,onClick:j,children:d?"种植中…":"发布到花园"})]}),a.length>0&&c.jsx("div",{className:"work-meta",style:{margin:0},children:a.map((k,T)=>c.jsxs("span",{className:"badge badge-green",children:[k.type.startsWith("video")?"▶":"▣"," ",k.name.length>22?k.name.slice(0,20)+"…":k.name]},`${k.name}-${T}`))})]})]})}),c.jsx(ve,{children:c.jsxs("section",{children:[c.jsxs("div",{className:"ws-panel-head",children:[c.jsx("span",{className:"ws-panel-title",children:"旅行足迹"}),c.jsx("span",{className:"ws-panel-sub",children:"世界地图上自由打点 · 按时间串成飞线"})]}),c.jsx(R8,{})]})}),c.jsxs("section",{style:{marginTop:40},children:[c.jsxs("div",{className:"ws-panel-head",children:[c.jsx("span",{className:"ws-panel-title",children:"媒体库"}),c.jsxs("span",{className:"ws-panel-sub",children:[e.length," 个文件 · IndexedDB 本机保存"]})]}),e.length===0?c.jsxs("div",{className:"empty",children:[c.jsx("div",{className:"empty-icon",children:"🖼"}),c.jsx("div",{className:"empty-title",children:"还没有媒体文件"}),c.jsx("div",{children:"发布日志时带上图片或视频，就会出现在这里"})]}):c.jsx("div",{className:"media-grid",children:e.map(k=>c.jsxs("div",{className:"media-item",onClick:()=>u(k),role:"button",tabIndex:0,onKeyDown:T=>T.key==="Enter"&&u(k),children:[k.kind==="video"?c.jsx("video",{src:k.dataUrl,muted:!0,preload:"metadata"}):c.jsx("img",{src:k.dataUrl,alt:k.name,loading:"lazy"}),c.jsx("button",{className:"media-del",onClick:T=>{T.stopPropagation(),S(k)},"aria-label":`删除 ${k.name}`,children:"✕"})]},k.id))})]}),c.jsxs("section",{style:{marginTop:44},children:[c.jsxs("div",{className:"ws-panel-head",children:[c.jsx("span",{className:"ws-panel-title",children:"花园日志"}),c.jsxs("span",{className:"ws-panel-sub",children:[n.length," 条 · 最新在前"]})]}),n.length===0?c.jsxs("div",{className:"empty",children:[c.jsx("div",{className:"empty-icon",children:"🌱"}),c.jsx("div",{className:"empty-title",children:"第一篇日志还没种下"}),c.jsx("div",{children:"上面写点什么，发布即可"})]}):c.jsx("div",{className:"panel",style:{padding:"8px 24px"},children:n.map(k=>c.jsxs("div",{className:"entry-item",children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:12},children:[c.jsx("span",{className:"entry-date",children:D8(k.date)}),c.jsx("button",{className:"todo-del",style:{opacity:1},onClick:()=>E(k),"aria-label":"删除日志",children:"✕"})]}),k.text&&c.jsx("div",{className:"entry-text",children:k.text}),(k.mediaIds||[]).length>0&&c.jsx("div",{className:"entry-media-strip",children:k.mediaIds.map(T=>p[T]?p[T].kind==="video"?c.jsx("video",{className:"entry-thumb",src:p[T].dataUrl,muted:!0,preload:"metadata",style:{cursor:"pointer"},onClick:()=>u(p[T])},T):c.jsx("img",{className:"entry-thumb",src:p[T].dataUrl,alt:p[T].name,style:{cursor:"pointer"},onClick:()=>u(p[T]),loading:"lazy"},T):null)})]},k.id))})]}),c.jsx(Xn,{children:l&&c.jsx(he.div,{className:"modal-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>u(null),children:c.jsxs(he.div,{initial:{scale:.94,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.96,opacity:0},transition:{duration:.24},style:{maxWidth:"min(920px, 100%)"},onClick:k=>k.stopPropagation(),role:"dialog","aria-modal":"true","aria-label":l.name,children:[l.kind==="video"?c.jsx("video",{src:l.dataUrl,controls:!0,autoPlay:!0,style:{maxWidth:"100%",maxHeight:"80vh",borderRadius:14,border:"1px solid var(--line-strong)"}}):c.jsx("img",{src:l.dataUrl,alt:l.name,style:{maxWidth:"100%",maxHeight:"80vh",borderRadius:14,border:"1px solid var(--line-strong)",display:"block"}}),c.jsx("div",{style:{textAlign:"center",color:"var(--text-low)",fontSize:"0.8rem",marginTop:10,fontFamily:"var(--font-mono)"},children:l.name})]})})}),m]})}var Wy={exports:{}},O8="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",U8=O8,V8=U8;function By(){}function Gy(){}Gy.resetWarningCache=By;var F8=function(){function e(r,i,s,a,o,l){if(l!==V8){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Gy,resetWarningCache:By};return n.PropTypes=n,n};Wy.exports=F8();var W8=Wy.exports;const le=nd(W8);function Bt(e){"@babel/helpers - typeof";return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(e)}function B8(e,t){if(Bt(e)!="object"||!e)return e;var n;if(typeof Symbol<"u"&&(n=e[Symbol.toPrimitive])!==void 0){var r=n.call(e,t);if(Bt(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Hy(e){var t=B8(e,"string");return Bt(t)=="symbol"?t:t+""}function Ae(e,t,n){return(t=Hy(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vm(e,t,n,r,i,s,a){try{var o=e[s](a),l=o.value}catch(u){return void n(u)}o.done?t(l):Promise.resolve(l).then(r,i)}function vt(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var s=e.apply(t,n);function a(l){Vm(s,r,i,a,o,"next",l)}function o(l){Vm(s,r,i,a,o,"throw",l)}a(void 0)})}}var zy={exports:{}},$y={exports:{}};(function(e){function t(n,r){this.v=n,this.k=r}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})($y);var Jy=$y.exports,qy={exports:{}},Qy={exports:{}};(function(e){function t(n,r,i,s){var a=Object.defineProperty;try{a({},"",{})}catch{a=0}e.exports=t=function(l,u,d,f){function h(v,m){t(l,v,function(y){return this._invoke(v,m,y)})}u?a?a(l,u,{value:d,enumerable:!f,configurable:!f,writable:!f}):l[u]=d:(h("next",0),h("throw",1),h("return",2))},e.exports.__esModule=!0,e.exports.default=e.exports,t(n,r,i,s)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(Qy);var Ky=Qy.exports;(function(e){var t=Ky;function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var r,i,s=typeof Symbol=="function"?Symbol:{},a=s.iterator||"@@iterator",o=s.toStringTag||"@@toStringTag";function l(g,p,b,x){var j=p&&p.prototype instanceof d?p:d,S=Object.create(j.prototype);return t(S,"_invoke",function(E,C,k){var T,P,M,B=0,G=k||[],$=!1,V={p:0,n:0,v:r,a:Z,f:Z.bind(r,4),d:function(A,I){return T=A,P=0,M=r,V.n=I,u}};function Z(_,A){for(P=_,M=A,i=0;!$&&B&&!I&&i<G.length;i++){var I,U=G[i],X=V.p,Q=U[2];_>3?(I=Q===A)&&(M=U[(P=U[4])?5:(P=3,3)],U[4]=U[5]=r):U[0]<=X&&((I=_<2&&X<U[1])?(P=0,V.v=A,V.n=U[1]):X<Q&&(I=_<3||U[0]>A||A>Q)&&(U[4]=_,U[5]=A,V.n=Q,P=0))}if(I||_>1)return u;throw $=!0,A}return function(_,A,I){if(B>1)throw TypeError("Generator is already running");for($&&A===1&&Z(A,I),P=A,M=I;(i=P<2?r:M)||!$;){T||(P?P<3?(P>1&&(V.n=-1),Z(P,M)):V.n=M:V.v=M);try{if(B=2,T){if(P||(_="next"),i=T[_]){if(!(i=i.call(T,M)))throw TypeError("iterator result is not an object");if(!i.done)return i;M=i.value,P<2&&(P=0)}else P===1&&(i=T.return)&&i.call(T),P<2&&(M=TypeError("The iterator does not provide a '"+_+"' method"),P=1);T=r}else if((i=($=V.n<0)?M:E.call(C,V))!==u)break}catch(U){T=r,P=1,M=U}finally{B=1}}return{value:i,done:$}}}(g,b,x),!0),S}var u={};function d(){}function f(){}function h(){}i=Object.getPrototypeOf;var v=[][a]?i(i([][a]())):(t(i={},a,function(){return this}),i),m=h.prototype=d.prototype=Object.create(v);function y(g){return Object.setPrototypeOf?Object.setPrototypeOf(g,h):(g.__proto__=h,t(g,o,"GeneratorFunction")),g.prototype=Object.create(m),g}return f.prototype=h,t(m,"constructor",h),t(h,"constructor",f),f.displayName="GeneratorFunction",t(h,o,"GeneratorFunction"),t(m),t(m,o,"Generator"),t(m,a,function(){return this}),t(m,"toString",function(){return"[object Generator]"}),(e.exports=n=function(){return{w:l,m:y}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(qy);var Yy=qy.exports,Xy={exports:{}},Zy={exports:{}},e2={exports:{}};(function(e){var t=Jy,n=Ky;function r(i,s){function a(l,u,d,f){try{var h=i[l](u),v=h.value;return v instanceof t?s.resolve(v.v).then(function(m){a("next",m,d,f)},function(m){a("throw",m,d,f)}):s.resolve(v).then(function(m){h.value=m,d(h)},function(m){return a("throw",m,d,f)})}catch(m){f(m)}}var o;this.next||(n(r.prototype),n(r.prototype,typeof Symbol=="function"&&Symbol.asyncIterator||"@asyncIterator",function(){return this})),n(this,"_invoke",function(l,u,d){function f(){return new s(function(h,v){a(l,d,h,v)})}return o=o?o.then(f,f):f()},!0)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(e2);var t2=e2.exports;(function(e){var t=Yy,n=t2;function r(i,s,a,o,l){return new n(t().w(i,s,a,o),l||Promise)}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(Zy);var n2=Zy.exports;(function(e){var t=n2;function n(r,i,s,a,o){var l=t(r,i,s,a,o);return l.next().then(function(u){return u.done?u.value:l.next()})}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(Xy);var G8=Xy.exports,r2={exports:{}};(function(e){function t(n){var r=Object(n),i=[];for(var s in r)i.unshift(s);return function a(){for(;i.length;)if((s=i.pop())in r)return a.value=s,a.done=!1,a;return a.done=!0,a}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(r2);var H8=r2.exports,i2={exports:{}},s2={exports:{}};(function(e){function t(n){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(s2);var z8=s2.exports;(function(e){var t=z8.default;function n(r){if(r!=null){var i=r[typeof Symbol=="function"&&Symbol.iterator||"@@iterator"],s=0;if(i)return i.call(r);if(typeof r.next=="function")return r;if(!isNaN(r.length))return{next:function(){return r&&s>=r.length&&(r=void 0),{value:r&&r[s++],done:!r}}}}throw new TypeError(t(r)+" is not iterable")}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(i2);var $8=i2.exports;(function(e){var t=Jy,n=Yy,r=G8,i=n2,s=t2,a=H8,o=$8;function l(){var u=n(),d=u.m(l),f=(Object.getPrototypeOf?Object.getPrototypeOf(d):d.__proto__).constructor;function h(y){var g=typeof y=="function"&&y.constructor;return!!g&&(g===f||(g.displayName||g.name)==="GeneratorFunction")}var v={throw:1,return:2,break:3,continue:3};function m(y){var g,p;return function(b){g||(g={stop:function(){return p(b.a,2)},catch:function(){return b.v},abrupt:function(j,S){return p(b.a,v[j],S)},delegateYield:function(j,S,E){return g.resultName=S,p(b.d,o(j),E)},finish:function(j){return p(b.f,j)}},p=function(j,S,E){b.p=g.prev,b.n=g.next;try{return j(S,E)}finally{g.next=b.n}}),g.resultName&&(g[g.resultName]=b.v,g.resultName=void 0),g.sent=b.v,g.next=b.n;try{return y.call(this,g)}finally{b.p=g.prev,b.n=g.next}}}return(e.exports=l=function(){return{wrap:function(p,b,x,j){return u.w(m(p),b,x,j&&j.reverse())},isGeneratorFunction:h,mark:u.m,awrap:function(p,b){return new t(p,b)},AsyncIterator:s,async:function(p,b,x,j,S){return(h(b)?i:r)(m(p),b,x,j,S)},keys:a,values:o}},e.exports.__esModule=!0,e.exports.default=e.exports)()}e.exports=l,e.exports.__esModule=!0,e.exports.default=e.exports})(zy);var J8=zy.exports,Ka=J8(),q8=Ka;try{regeneratorRuntime=Ka}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=Ka:Function("r","regeneratorRuntime = r")(Ka)}const ue=nd(q8);function Q8(e){if(Array.isArray(e))return e}function K8(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,s,a,o=[],l=!0,u=!1;try{if(s=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(d){u=!0,i=d}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return o}}function Vu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function a2(e,t){if(e){if(typeof e=="string")return Vu(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vu(e,t):void 0}}function Y8(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function pl(e,t){return Q8(e)||K8(e,t)||a2(e,t)||Y8()}function X8(e){if(Array.isArray(e))return Vu(e)}function Z8(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function eS(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ml(e){return X8(e)||Z8(e)||a2(e)||eS()}var Nr="data-wujie-id",Mo="data-wujie-script-id",o2="data-wujie-Flag",Fu="data-container-position-flag",Io="data-container-overflow-flag",Uf="data-loading-flag",Fm="data-wujie-attach-css-flag",Wm="data-wujie-font-style-container",tS="wujie_iframe",Pa="_wujie_all_event",nS="position: fixed; z-index: 2147483647; visibility: hidden; inset: 0px; backface-visibility: hidden;",rS="position: absolute; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; z-index:1;",iS=`<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="30px" viewBox="0 0 24 30">
<rect x="0" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="10" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
<rect x="20" y="13" width="4" height="5" fill="#909090">
  <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
  <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite"></animate>
</rect>
</svg>`,sS="url参数为空",l2="子应用调用reload无法生效",c2="此报错可以忽略，iframe主动中断主应用代码在子应用运行",aS=c2+"，详见：https://github.com/Tencent/wujie/issues/54",Bm="事件订阅数量为空",oS="window上不存在fetch属性，需要自行polyfill",lS="当前浏览器不支持无界，子应用将采用iframe方式渲染",es="脚本请求出现错误",yc="样式请求出现错误",Gm="html请求出现错误",Hm="无界组件短时间重复渲染了两次，可能存在性能问题请检查代码",cS="目标Script尚未准备好或已经被移除",uS="不支持document.getElementById()传入特殊字符，请参考document.querySelector文档";function vn(e){return typeof e=="function"}function dS(e){return(e==null?void 0:e.toUpperCase())==="LINK"||(e==null?void 0:e.toUpperCase())==="STYLE"||(e==null?void 0:e.toUpperCase())==="SCRIPT"||(e==null?void 0:e.toUpperCase())==="IFRAME"}var u2=window.Proxy&&window.CustomElementRegistry,fS=typeof document.all=="function"&&typeof document.all>"u",zm=new WeakMap,_o=function(t){if(zm.has(t))return!0;var n=fS?typeof t=="function"&&typeof t<"u":typeof t=="function";return n&&zm.set(t,n),n},bc=new WeakMap;function d2(e){if(bc.has(e))return bc.get(e);var t=e.name.indexOf("bound ")===0&&!e.hasOwnProperty("prototype");return bc.set(e,t),t}var xc=new WeakMap;function Vf(e){var t=e.prototype&&e.prototype.constructor===e&&Object.getOwnPropertyNames(e.prototype).length>1;if(t)return!0;if(xc.has(e))return xc.get(e);var n=t;if(!n){var r=e.toString(),i=/^function\b\s[A-Z].*/,s=/^class\b/;n=i.test(r)||s.test(r)}return xc.set(e,n),n}var Pt=new WeakMap;function hS(e,t){_o(t)&&!d2(t)&&!Vf(t)&&(Pt.has(e)?Pt.get(e).has(t)||Pt.get(e).set(t,t):(Pt.set(e,new WeakMap),Pt.get(e).set(t,t)))}function $i(e,t){var n=e[t];if(Pt.has(e)&&Pt.get(e).has(n))return Pt.get(e).get(n);if(_o(n)&&!d2(n)&&!Vf(n)){var r=Function.prototype.bind.call(n,e);Pt.has(e)||Pt.set(e,new WeakMap),Pt.get(e).set(n,r);for(var i in n)r[i]=n[i];return n.hasOwnProperty("prototype")&&!r.hasOwnProperty("prototype")&&Object.defineProperty(r,"prototype",{value:n.prototype,enumerable:!1,writable:!0}),r}return n}function f2(e){return window.document.querySelector("iframe[".concat(Nr,'="').concat(e,'"]'))}function gl(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function h2(e){if(!e)throw en(sS),new Error;var t=an(e),n=t.protocol+"//"+t.host,r=t.pathname+t.search+t.hash;return r.startsWith("/")||(r="/"+r),{urlElement:t,appHostPath:n,appRoutePath:r}}function an(e){var t=window.document.createElement("a");return t.href=e,t.href=t.href,t}function _i(e){var t=e.search||"";return ml(new URLSearchParams(t).entries()).reduce(function(n,r){return n[r[0]]=r[1],n},{})}function p2(e){var t=_i(an(window.location.href));return Object.keys(t).includes(e)}function Wr(e,t,n){var r=e.Element.prototype.setAttribute;t.prototype.setAttribute=function(u,d){var f=d;u===n&&(f=kn(d,this.baseURI||"",!0)),r.call(this,u,f)};var i=Object.getOwnPropertyDescriptor(t.prototype,n),s=i.enumerable,a=i.configurable,o=i.get,l=i.set;Object.defineProperty(t.prototype,n,{enumerable:s,configurable:a,get:function(){return o.call(this)},set:function(d){l.call(this,kn(d,this.baseURI,!0))}})}function vl(e){var t=e;return t.protocol+"//"+t.host+t.pathname}function kn(e,t,n){try{return e&&(n&&e.startsWith("#")?e:new URL(e,t).href)}catch{return e}}function pS(e,t){var n,r=an(window.location.href),i=_i(r);r=null;var s=i[e]||"",a=(n=s.match(/^{([^}]*)}/))===null||n===void 0?void 0:n[1];return t&&a?s.replace("{".concat(a,"}"),t[a]):s}var Ff=window.requestIdleCallback||function(e){return setTimeout(e,1)};function m2(e){return typeof e=="string"?document.querySelector(e):e}function Fe(e,t){var n;(n=console)===null||n===void 0||n.warn("[wujie warn]: ".concat(e),t)}function en(e,t){var n;(n=console)===null||n===void 0||n.error("[wujie error]: ".concat(e),t)}function Wu(e){var t=e.indexOf(">")+1,n=e.lastIndexOf("<");return e.substring(t,n)}function mS(e){if(Bt(e)==="object")return"/";try{var t=new URL(e,location.href),n=t.origin,r=t.pathname,i=r.split("/");return i.pop(),"".concat(n).concat(i.join("/"),"/")}catch(s){return console.warn(s),""}}function yl(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];return e.reduce(function(s,a){return vn(a)?a.apply(void 0,[s].concat(r)):s},t||"")}}function Aa(e){Promise.resolve().then(e)}function yt(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];try{e&&e.length>0&&e.map(function(s){return s[t]}).filter(function(s){return vn(s)}).forEach(function(s){return s.apply(void 0,r)})}catch(s){en(s)}}function bl(e){var t;return((t=e.tagName)===null||t===void 0?void 0:t.toUpperCase())==="SCRIPT"}var gS=1;function g2(e,t){if(bl(e)){var n=t||String(gS++);e.setAttribute(Mo,n)}}function v2(e){return bl(e)?e.getAttribute(Mo):null}function y2(e,t){return{name:e.name,el:e.el||(t==null?void 0:t.el),url:e.url||(t==null?void 0:t.url),html:e.html||(t==null?void 0:t.html),exec:e.exec!==void 0?e.exec:t==null?void 0:t.exec,replace:e.replace||(t==null?void 0:t.replace),fetch:e.fetch||(t==null?void 0:t.fetch),props:e.props||(t==null?void 0:t.props),sync:e.sync!==void 0?e.sync:t==null?void 0:t.sync,prefix:e.prefix||(t==null?void 0:t.prefix),loading:e.loading||(t==null?void 0:t.loading),attrs:e.attrs!==void 0?e.attrs:(t==null?void 0:t.attrs)||{},degradeAttrs:e.degradeAttrs!==void 0?e.degradeAttrs:(t==null?void 0:t.degradeAttrs)||{},fiber:e.fiber!==void 0?e.fiber:(t==null?void 0:t.fiber)!==void 0?t==null?void 0:t.fiber:!0,alive:e.alive!==void 0?e.alive:t==null?void 0:t.alive,degrade:e.degrade!==void 0?e.degrade:t==null?void 0:t.degrade,plugins:e.plugins||(t==null?void 0:t.plugins),iframeAddEventListeners:e.iframeAddEventListeners||(t==null?void 0:t.iframeAddEventListeners)||[],iframeOnEvents:e.iframeOnEvents||(t==null?void 0:t.iframeOnEvents)||[],lifecycles:{beforeLoad:e.beforeLoad||(t==null?void 0:t.beforeLoad),beforeMount:e.beforeMount||(t==null?void 0:t.beforeMount),afterMount:e.afterMount||(t==null?void 0:t.afterMount),beforeUnmount:e.beforeUnmount||(t==null?void 0:t.beforeUnmount),afterUnmount:e.afterUnmount||(t==null?void 0:t.afterUnmount),activated:e.activated||(t==null?void 0:t.activated),deactivated:e.deactivated||(t==null?void 0:t.deactivated),loadError:e.loadError||(t==null?void 0:t.loadError)}}}function Na(e,t,n){var r;typeof window.CustomEvent=="function"?r=new CustomEvent(t,{detail:n}):(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!1,n)),e.dispatchEvent(r)}function b2(){throw Fe(aS),new Error(c2)}var vS=/(<script[\s\S]*?>)[\s\S]*?<\/script>/gi,yS=/<(script)\s+((?!type=('|")text\/ng-template\3)[^])*?>[^]*?<\/\1>/i,$m=/.*\ssrc=('|")?([^>'"\s]+)/,bS=/.*\stype=('|")?([^>'"\s]+)/,xS=/.*\sentry\s*.*/,jS=/.*\sasync\s*.*/,wS=/.*\sdefer\s*.*/,SS=/.*\snomodule\s*.*/,kS=/.*\stype=('|")?module('|")?\s*.*/,ES=/<(link)\s+[^]*?>/gi,CS=/\srel=('|")?(preload|prefetch|modulepreload)\1/,Jm=/.*\shref=('|")?([^>'"\s]+)/,TS=/.*\sas=('|")?font\1.*/,PS=/<style[^>]*>[\s\S]*?<\/style>/gi,AS=/\s+rel=('|")?stylesheet\1.*/,NS=/.*\shref=('|")?([^>'"\s]+)/,RS=/<!--([\s\S]*?)-->/g,LS=/<link(\s+|\s+[^]+\s+)ignore(\s*|\s+[^]*|=[^]*)>/i,DS=/<style(\s+|\s+[^]+\s+)ignore(\s*|\s+[^]*|=[^]*)>/i,MS=/<script(\s+|\s+[^]+\s+)ignore(\s*|\s+[^]*|=[^]*)>/i,IS=/.*\scrossorigin=?('|")?(use-credentials|anonymous)?('|")?/i;function qm(e){return e.startsWith("//")||e.startsWith("http://")||e.startsWith("https://")}function Qm(e,t){return new URL(e,t).toString()}function _S(e){var t=["text/javascript","module","application/javascript","text/ecmascript","application/ecmascript","importmap"];return!e||t.indexOf(e)!==-1}function yr(e){var t=/<[-\w]+\s+([^>]*)>/i,n=t.exec(e);if(!n)return{};for(var r=n[1],i=/([^\s=]+)\s*=\s*(['"])(.*?)\2/g,s={},a;(a=i.exec(r))!==null;){var o=a[1],l=a[3];s[o]=l}return s}function OS(){var e=window.document.createElement("script");return"noModule"in e}var Bu=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return"<!-- ".concat(n?"prefetch/preload/modulepreload":""," link ").concat(t," replaced by wujie -->")},x2=function(t){return"<!-- inline-style-".concat(t," replaced by wujie -->")},US=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";return"<!-- ".concat(n," script ").concat(t," replaced by wujie -->")},VS="<!-- inline scripts replaced by wujie -->",Ra=function(t){return"<!-- ignore asset ".concat(t||"file"," replaced by wujie -->")},Km=function(t,n){return"<!-- ".concat(n?"nomodule":"module"," script ").concat(t," ignored by wujie -->")};function FS(e,t,n){var r=[],i=[],s=null,a=OS(),o=e.replace(RS,"").replace(ES,function(u){var d=!!u.match(AS);if(d){var f=u.match(NS),h=u.match(LS);if(f){var v=f&&f[2],m=v;return v&&!qm(v)&&(m=Qm(v,t)),h?Ra(m):(i.push({src:m}),Bu(m))}}var y=u.match(CS)&&u.match(Jm)&&!u.match(TS);if(y){var g=u.match(Jm),p=pl(g,3),b=p[2];return Bu(b,!0)}return u}).replace(PS,function(u){if(DS.test(u))return Ra("style file");var d=Wu(u);return i.push({src:"",content:d}),x2(i.length-1)}).replace(vS,function(u,d){var f=d.match(MS),h=!!d.match(kS),v=d.match(IS),m=(v==null?void 0:v[2])||"",y=a&&!!d.match(SS)||!a&&h,g=d.match(bS),p=g&&g[2];if(!_S(p))return u;if(yS.test(u)&&d.match($m)){var b=d.match(xS),x=d.match($m),j=x&&x[2];if(s&&b)throw new SyntaxError("You should not set multiply entry script!");if(j&&!qm(j)&&(j=Qm(j,t)),s=s||b&&j,f)return Ra(j||"js file");if(y)return Km(j||"js file",a);if(j){var S=!!d.match(jS),E=!!d.match(wS);return r.push(S||E?{async:S,defer:E,src:j,module:h,crossorigin:!!v,crossoriginType:m,attrs:yr(u)}:{src:j,module:h,crossorigin:!!v,crossoriginType:m,attrs:yr(u)}),US(j,S&&"async"||E&&"defer"||"")}return u}else{if(f)return Ra("js file");if(y)return Km("js file",a);var C=Wu(u),k=C.split(/[\r\n]+/).every(function(T){return!T.trim()||T.trim().startsWith("//")});return!k&&C&&r.push({src:"",content:C,module:h,crossorigin:!!v,crossoriginType:m,attrs:yr(u)}),VS}}),l={template:o,scripts:r,styles:i,entry:s||r[r.length-1]};return l}function Gu(e){var t=e.plugins,n=e.replace;return function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=arguments.length>2?arguments[2]:void 0;return yl(t.map(function(a){return a.cssLoader}))(n?n(r):r,i,s)}}function WS(e){var t=e.plugins,n=e.replace;return function(r){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"",s=arguments.length>2?arguments[2]:void 0;return yl(t.map(function(a){return a.jsLoader}))(n?n(r):r,i,s)}}function Oo(e,t){var n=t.map(function(i){return i[e]}).filter(function(i){return i==null?void 0:i.length}),r=n.reduce(function(i,s){return i.concat(s)},[]);return e==="cssBeforeLoaders"?r.reverse():r}function un(e,t){return t.map(function(n){return n[e]}).filter(function(n){return n==null?void 0:n.length}).reduce(function(n,r){return n.concat(r)},[])}function dn(e,t){return t.some(function(n){return typeof n=="string"?e===n:n.test(e)})}function BS(e,t,n){var r=t?kn(t,n):n,i=/url\((['"]?)((?:[^()]+|\((?:[^()]+|\([^()]*\))*\))*)(\1)\)/g;return e.replace(i,function(s,a,o,l){var u=/^data:/,d=u.test(o);return d?s:"url(".concat(a).concat(kn(o,r)).concat(l,")")})}var Ym={cssLoader:BS,cssBeforeLoaders:[{content:"html {view-transition-name: none;}"}]};function j2(e){return Array.isArray(e)?[Ym].concat(ml(e)):[Ym]}function Xm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ci(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Xm(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var GS={},jc={},wc={};if(!window.fetch)throw en(oS),new Error;var Wf=window.fetch.bind(window);function HS(e){return e}function w2(e,t,n){return Hu.apply(this,arguments)}function Hu(){return Hu=vt(ue.mark(function e(t,n,r){var i,s,a,o;return ue.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=vl(t.proxyLocation),s=yl(t.plugins.map(function(u){return u.cssLoader})),a=r().map(function(u){var d=u.src,f=u.ignore,h=u.contentPromise;return{src:d,ignore:f,contentPromise:h.then(function(v){return s(v,d,i)})}}),l.next=1,zS(n,a);case 1:return o=l.sent,l.abrupt("return",t.replace?t.replace(o):o);case 2:case"end":return l.stop()}},e)})),Hu.apply(this,arguments)}function zS(e,t){return zu.apply(this,arguments)}function zu(){return zu=vt(ue.mark(function e(t,n){var r;return ue.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return r=t,i.abrupt("return",Promise.all(n.map(function(s,a){return s.contentPromise.then(function(o){s.src?r=r.replace(Bu(s.src),s.ignore?'<link href="'.concat(s.src,'" rel="stylesheet" type="text/css">'):"<style>/* ".concat(s.src," */").concat(o,"</style>")):o&&(r=r.replace(x2(a),"<style>/* inline-style-".concat(a," */").concat(o,"</style>")))})})).then(function(){return r}));case 1:case"end":return i.stop()}},e)})),zu.apply(this,arguments)}var $S=function(t){return t.startsWith("<")},Ya=function(t,n,r,i,s){return n[t]||(n[t]=r(t).then(function(a){if(a.status>=400){if(n[t]=null,i)return en(yc,{src:t,response:a}),s==null||s(t,new Error(yc)),"";throw en(es,{src:t,response:a}),s==null||s(t,new Error(es)),new Error(es)}return a.text()}).catch(function(a){return n[t]=null,i?(en(yc,t),s==null||s(t,a),""):(en(es,t),s==null||s(t,a),"")}))};function Uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wf,n=arguments.length>2?arguments[2]:void 0;return e.map(function(r){var i=r.src,s=r.content,a=r.ignore;return s?{src:"",contentPromise:Promise.resolve(s)}:$S(i)?{src:"",contentPromise:Promise.resolve(Wu(i))}:{src:i,ignore:a,contentPromise:a?Promise.resolve(""):Ya(i,GS,t,!0,n)}})}function S2(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Wf,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;return e.map(function(i){var s=i.src,a=i.async,o=i.defer,l=i.module,u=i.ignore,d=null;return(a||o)&&s&&!l?d=new Promise(function(f,h){return r?Ff(function(){return Ya(s,jc,t,!1,n).then(f,h)}):Ya(s,jc,t,!1,n).then(f,h)}):l&&s||u?d=Promise.resolve(""):s?d=Ya(s,jc,t,!1,n):d=Promise.resolve(i.content),l&&!a&&(i.defer=!0),ci(ci({},i),{},{contentPromise:d})})}function $u(e){var t,n,r=e.url,i=e.opts,s=e.html,a=(t=i.fetch)!==null&&t!==void 0?t:Wf,o=(n=i.fiber)!==null&&n!==void 0?n:!0,l=i.plugins,u=i.loadError,d=l?yl(l.map(function(p){return p.htmlLoader})):HS,f=un("jsExcludes",l),h=un("cssExcludes",l),v=un("jsIgnores",l),m=un("cssIgnores",l),y=mS,g=function(b,x,j){return(x?Promise.resolve(x):a(b).then(function(S){return S.status>=400?(en(Gm,{url:b,response:S}),u==null||u(b,new Error(Gm)),""):S.text()}).catch(function(S){return wc[b]=null,u==null||u(b,S),Promise.reject(S)})).then(function(S){var E=y(b),C=FS(j(S),E),k=C.template,T=C.scripts,P=C.styles;return{template:k,assetPublicPath:E,getExternalScripts:function(){return S2(T.filter(function(B){return!B.src||!dn(B.src,f)}).map(function(B){return ci(ci({},B),{},{ignore:B.src&&dn(B.src,v)})}),a,u,o)},getExternalStyleSheets:function(){return Uo(P.filter(function(B){return!B.src||!dn(B.src,h)}).map(function(B){return ci(ci({},B),{},{ignore:B.src&&dn(B.src,m)})}),a,u)}}})};return i!=null&&i.plugins.some(function(p){return p.htmlLoader})?g(r,s,d):wc[r]||(wc[r]=g(r,s,d))}function JS(e){try{var t,n,r=KS(e);if(!r)return console.warn("[wujie] Cannot find iframe for app ".concat(e)),window;var i=r.contentWindow;if(!i)return console.warn("[wujie] Cannot get contentWindow for app ".concat(e)),window;var s=(t=i.__WUJIE)!==null&&t!==void 0&&t.degrade?i:(n=i.__WUJIE)===null||n===void 0?void 0:n.proxy;return QS(s)}catch(a){return console.warn("[wujie] Failed to get wujie window:",a),window}}var qS={event:!0};function QS(e){return new Proxy(e,{get:function(n,r){return r===Symbol.unscopables?qS:Reflect.get(n,r)},has:function(n,r){return Reflect.has(n,r)}})}function KS(e){for(var t='iframe[name="'.concat(e,'"]'),n=window,r=0;r<10;r++){try{var i,s=(i=n.document)===null||i===void 0?void 0:i.querySelector(t);if(s)return s}catch{break}if(!n.parent||n.parent===n)break;n=n.parent}return null}function YS(){typeof window<"u"&&!window.__getWujieWindow__&&(window.__getWujieWindow__=JS)}function xl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function XS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,Hy(r.key),r)}}function jl(e,t,n){return t&&XS(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function ZS(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function e7(e,t){if(e==null)return{};var n,r,i=ZS(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function t7(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function n7(e,t){if(t&&(Bt(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return t7(e)}function Gs(e){return Gs=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Gs(e)}function Hs(e,t){return Hs=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},Hs(e,t)}function r7(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Hs(e,t)}function i7(e){try{return Function.toString.call(e).indexOf("[native code]")!==-1}catch{return typeof e=="function"}}function k2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(k2=function(){return!!e})()}function s7(e,t,n){if(k2())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var i=new(e.bind.apply(e,r));return n&&Hs(i,n.prototype),i}function Ju(e){var t=typeof Map=="function"?new Map:void 0;return Ju=function(r){if(r===null||!i7(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(t!==void 0){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return s7(r,arguments,Gs(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Hs(i,r)},Ju(e)}function Zm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Ti(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zm(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Dt=function(e){if((e=window.__WUJIE_INJECT)!==null&&e!==void 0&&e.idToSandboxMap)return window.__WUJIE_INJECT.idToSandboxMap;var t=window.__POWERED_BY_WUJIE__?window.__WUJIE.inject.idToSandboxMap:new Map;return window.__WUJIE_INJECT=Ti(Ti({},window.__WUJIE_INJECT),{},{idToSandboxMap:t}),t}();function $t(e){var t;return((t=Dt.get(e))===null||t===void 0?void 0:t.wujie)||null}function E2(e){var t;return((t=Dt.get(e))===null||t===void 0?void 0:t.options)||null}function a7(e,t){var n=Dt.get(e);n?Dt.set(e,Ti(Ti({},n),{},{wujie:t})):Dt.set(e,{wujie:t})}function o7(e){var t=Dt.get(e);t!=null&&t.options?Dt.set(e,{options:t.options}):Dt.delete(e)}function l7(e,t){var n=Dt.get(e);n?Dt.set(e,Ti(Ti({},n),{},{options:t})):Dt.set(e,{options:t})}var Ie={modifyLocalProperties:["createElement","createTextNode","documentURI","URL","getElementsByTagName","getElementById"],modifyProperties:["createElement","createTextNode","documentURI","URL","getElementsByTagName","getElementsByClassName","getElementsByName","getElementById","querySelector","querySelectorAll","documentElement","scrollingElement","forms","images","links"],shadowProperties:["activeElement","childElementCount","children","firstElementChild","firstChild","fullscreenElement","lastElementChild","pictureInPictureElement","pointerLockElement","styleSheets"],shadowMethods:["append","contains","getSelection","elementFromPoint","elementsFromPoint","getAnimations","replaceChildren"],documentProperties:["characterSet","compatMode","contentType","designMode","dir","doctype","embeds","fullscreenEnabled","hidden","implementation","lastModified","pictureInPictureEnabled","plugins","readyState","referrer","visibilityState","fonts"],documentMethods:["execCommand","caretPositionFromPoint","createRange","exitFullscreen","exitPictureInPicture","getElementsByTagNameNS","hasFocus","prepend"],documentEvents:["onpointerlockchange","onpointerlockerror","onbeforecopy","onbeforecut","onbeforepaste","onfreeze","onresume","onsearch","onfullscreenchange","onfullscreenerror","onsecuritypolicyviolation","onvisibilitychange"],ownerProperties:["head","body"]},e0=["DOMContentLoaded","readystatechange"],c7=["onreadystatechange"],t0=["fullscreenchange","fullscreenerror","selectionchange","visibilitychange","wheel","keydown","keypress","keyup"],n0=["gotpointercapture","lostpointercapture"],r0=["hashchange","popstate","DOMContentLoaded","load","beforeunload","unload","message","error","unhandledrejection"],u7=["onload","onbeforeunload","onunload","onerror","onunhandledrejection"],d7={IMG:"src",A:"href",SOURCE:"src"},f7=["getComputedStyle","visualViewport","matchMedia","DOMParser"],h7=[/animationFrame$/i,/resizeObserver$|mutationObserver$|intersectionObserver$/i,/height$|width$|left$/i,/^screen/i,/CSSStyleSheet$/i,/X$|Y$/],C2=HTMLElement.prototype.appendChild,T2=HTMLElement.prototype.removeChild,i0=HTMLElement.prototype.contains,p7=HTMLHeadElement.prototype.insertBefore,m7=HTMLBodyElement.prototype.insertBefore,s0=HTMLStyleElement.prototype.insertAdjacentElement,Bf=Node.prototype.addEventListener,wl=Node.prototype.removeEventListener,a0=window.addEventListener,o0=window.removeEventListener,Rr=Node.prototype.appendChild,Qn=window.__POWERED_BY_WUJIE__?window.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__:Document.prototype.querySelector;function l0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Br(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?l0(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function g7(e,t){return Object.defineProperties(e,{srcElement:{get:t},target:{get:t}}),e}function ts(e,t){var n=new CustomEvent(t),r=g7(n,function(){return e});vn(e["on".concat(t)])?e["on".concat(t)](r):e.dispatchEvent(r)}function dr(e,t){if(!(!e.innerHTML||t.degrade)){var n=function(){var i=I2([e.sheet]),s=pl(i,2),a=s[0],o=s[1];if(a&&t.shadowRoot.head.appendChild(a),o){var l;(l=t.inject.fontStyleSheetContainer)===null||l===void 0||l.appendChild(o),o.setAttribute(Nr,t.id),t.fontStyleSheetElements.push(o)}e._patcher=void 0};e._patcher&&clearTimeout(e._patcher),e._patcher=setTimeout(n,50)}}function P2(e,t,n,r){var i;if(e._hasPatchStyle)return;var s=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML"),a=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerText"),o=Object.getOwnPropertyDescriptor(Node.prototype,"textContent"),l=(i=e.sheet)===null||i===void 0?void 0:i.insertRule;function u(){l&&(e.sheet.insertRule=function(d,f){return s?e.innerHTML+=d:e.innerText+=d,l.call(e.sheet,d,f)})}u(),s&&Object.defineProperties(e,{innerHTML:{get:function(){return s.get.call(e)},set:function(f){var h=this;s.set.call(e,t(f,"",r)),Aa(function(){return dr(h,n)})}}}),Object.defineProperties(e,{innerText:{get:function(){return a.get.call(e)},set:function(f){var h=this;a.set.call(e,t(f,"",r)),Aa(function(){return dr(h,n)})}},textContent:{get:function(){return o.get.call(e)},set:function(f){var h=this;o.set.call(e,t(f,"",r)),Aa(function(){return dr(h,n)})}},appendChild:{value:function(f){var h=this;if(Aa(function(){return dr(h,n)}),f.nodeType===Node.TEXT_NODE){var v=Rr.call(e,e.ownerDocument.createTextNode(t(f.textContent,"",r)));return u(),v}else return Rr(f)}},insertAdjacentElement:{value:function(f,h){if(h.nodeName==="STYLE"){var v=h,m=v.innerHTML;m&&(v.innerHTML=t(m,"",r));var y=s0.call(this,f,h);return n.styleSheetElements.push(v),P2(v,t,n,r),dr(v,n),y}else return s0.call(this,f,h)}},_hasPatchStyle:{get:function(){return!0}}})}var v7=5e3;function y7(e){var t=e.element,n=e.wujieId,r=e.iframeWindow,i=e.loadStyleSheet,s=r.MutationObserver;if(typeof s!="function")return;var a=!1,o=null,l=new s(function(){var f;if(!a){var h=(f=t)===null||f===void 0?void 0:f.getAttribute("href");if(h){var v=t.href||h,m=t;u(function(){return m&&i(v,m)})}}});function u(f){if(!a){a=!0,o!==null&&(clearTimeout(o),o=null);try{l.disconnect()}catch{}var h=$t(n),v=h==null?void 0:h.deferredStyleObservers;if(Array.isArray(v)){var m=v.indexOf(l);m!==-1&&v.splice(m,1)}h&&(f==null||f()),t=null}}var d=$t(n);!d||!Array.isArray(d.deferredStyleObservers)||(d.deferredStyleObservers.push(l),l.observe(t,{attributes:!0,attributeFilter:["href"]}),o=setTimeout(function(){var f=t;u(),f&&ts(f,"error")},v7))}var c0=Promise.resolve();function La(e){return function(n,r){var i=this,s=n,a=e.rawDOMAppendOrInsertBefore,o=e.wujieId,l=$t(o),u=l.styleSheetElements,d=l.replace,f=l.fetch,h=l.plugins,v=l.iframe,m=l.lifecycles,y=l.proxyLocation,g=l.fiber;if(!dS(s.tagName)||!o){var p=a.call(this,s,r);return yn(s,v.contentWindow),yt(h,"appendOrInsertElementHook",s,v.contentWindow),p}var b=v.contentDocument,x=vl(y);if(s.tagName){var j;switch((j=s.tagName)===null||j===void 0?void 0:j.toUpperCase()){case"LINK":{var S=s,E=S.href,C=S.rel,k=S.type,T=C==="stylesheet"||k==="text/css"||E.endsWith(".css");if(!T){var P=a.call(this,s,r);return yt(h,"appendOrInsertElementHook",s,v.contentWindow),P}var M=function(R,N){var z=N.getAttribute("href"),W=z?kn(z,y.href):R,Y=dn(W,un("cssExcludes",h));if(!(!W||Y)){var J=yr(N.outerHTML),ne=b.createElement("style");gl(ne,J),ne.setAttribute("data-wujie-css-href",W),a.call(i,ne,r),Uo([{src:W,ignore:dn(W,un("cssIgnores",h))}],f,m.loadError).forEach(function(q){var ze=q.src,et=q.ignore,se=q.contentPromise;return se.then(function(ee){if(et&&ze){var oe;(oe=ne.parentNode)===null||oe===void 0||oe.removeChild(ne),a.call(i,N,r)}else{var Se=Gu({plugins:h,replace:d});ne.innerHTML=Se(ee,ze,x),u.push(ne),dr(ne,l),ts(N,"load")}s===N&&(s=null)},function(){ts(N,"error"),s===N&&(s=null)})})}};E?dn(E,un("cssExcludes",h))||M(E,s):y7({element:s,wujieId:o,iframeWindow:v.contentWindow,loadStyleSheet:M});var B=b.createComment("dynamic link ".concat(E," replaced by wujie"));return a.call(this,B,r)}case"STYLE":{var G=n;u.push(G);var $=G.innerHTML,V=Gu({plugins:h,replace:d});$&&(G.innerHTML=V($,"",x));var Z=a.call(this,s,r);return P2(G,V,l,x),dr(G,l),yt(h,"appendOrInsertElementHook",s,v.contentWindow),Z}case"SCRIPT":{g2(s);var _=s,A=_.src,I=_.text,U=_.type,X=_.crossOrigin;if(A&&!dn(A,un("jsExcludes",h))){var Q=function(R){if(l.iframe===null)return Fe(Hm);var N=function(){ts(s,"load"),s=null};Vt(Br(Br({},R),{},{onload:N}),l.iframe.contentWindow,s)},Le={src:A,module:U==="module",crossorigin:X!==null,crossoriginType:X||"",ignore:dn(A,un("jsIgnores",h)),attrs:yr(s.outerHTML)};S2([Le],f,m.loadError,g).forEach(function(ie){c0=c0.then(function(){return ie.contentPromise.then(function(R){var N;if(l.execQueue===null)return Fe(Hm);var z=(N=l.execQueue)===null||N===void 0?void 0:N.length;l.execQueue.push(function(){return g?l.requestIdleCallback(function(){Q(Br(Br({},ie),{},{content:R}))}):Q(Br(Br({},ie),{},{content:R}))}),z||l.execQueue.shift()()},function(){ts(s,"error"),s=null})})})}else{var De,L=(De=l.execQueue)===null||De===void 0?void 0:De.length;l.execQueue.push(function(){return g?l.requestIdleCallback(function(){Vt({src:null,content:I,attrs:yr(s.outerHTML)},l.iframe.contentWindow,s)}):Vt({src:null,content:I,attrs:yr(s.outerHTML)},l.iframe.contentWindow,s)}),L||l.execQueue.shift()()}var H=b.createComment("dynamic script ".concat(A," replaced by wujie"));return a.call(this,H,r)}case"IFRAME":{if(s.getAttribute(o2)==="")return Rr.call(Qn.call(this.ownerDocument,"html"),s);var O=a.call(this,s,r);return yt(h,"appendOrInsertElementHook",s,v.contentWindow),O}}}}}function A2(e,t){var n=v2(e),r=$t(t),i=r.iframe,s=i.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.querySelector("script[".concat(Mo,"='").concat(n,"']"));return s===null&&Fe(cS,"<script ".concat(Mo,"='").concat(n,"'/>")),{targetScript:s,iframe:i}}function u0(e){return function(n){var r=n,i=e.rawElementContains,s=e.wujieId;if(r&&bl(r)){var a=A2(r,s),o=a.targetScript;return o!==null}return i(r)}}function b7(e){return function(n){var r=n,i=e.rawElementRemoveChild,s=e.wujieId;if(r&&bl(r)){var a=A2(r,s),o=a.targetScript,l=a.iframe;return o!==null?l.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.removeChild(o):null}return i(r)}}function d0(e){var t=new Map;e._cacheListeners=t,e.addEventListener=function(n,r,i){var s=t.get(n)||[];return t.set(n,[].concat(ml(s),[r])),Bf.call(e,n,r,i)},e.removeEventListener=function(n,r,i){var s=t.get(n),a=s==null?void 0:s.indexOf(r);return s!=null&&s.length&&a!==-1&&s.splice(a,1),wl.call(e,n,r,i)}}function f0(e){var t=e._cacheListeners;ml(t.entries()).forEach(function(n){var r=pl(n,2),i=r[0],s=r[1];s.forEach(function(a){return wl.call(e,i,a)})})}function N2(e,t,n){n||(d0(e.head),d0(e.body)),e.head.appendChild=La({rawDOMAppendOrInsertBefore:Rr,wujieId:t}),e.head.insertBefore=La({rawDOMAppendOrInsertBefore:p7,wujieId:t}),e.head.removeChild=b7({rawElementRemoveChild:T2.bind(e.head),wujieId:t}),e.head.contains=u0({rawElementContains:i0.bind(e.head),wujieId:t}),e.contains=u0({rawElementContains:i0.bind(e),wujieId:t}),e.body.appendChild=La({rawDOMAppendOrInsertBefore:Rr,wujieId:t}),e.body.insertBefore=La({rawDOMAppendOrInsertBefore:m7,wujieId:t})}function h0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function p0(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?h0(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function x7(e,t,n){return t=Gs(t),n7(e,R2()?Reflect.construct(t,n||[],Gs(e).constructor):t.apply(e,n))}function R2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(R2=function(){return!!e})()}var j7={":root":":host"};function w7(e){var t;if(e){var n=(t=e.iframe)===null||t===void 0?void 0:t.contentWindow,r=!e.alive&&!vn(n==null?void 0:n.__WUJIE_MOUNT);r?e.destroy().catch(function(i){return Fe("destroy error: ".concat(i))}):e.unmount().catch(function(i){return Fe("unmount error: ".concat(i))})}}function S7(){var e=window.customElements;if(e&&!(e!=null&&e.get("wujie-app"))){var t=function(n){function r(){return xl(this,r),x7(this,r,arguments)}return r7(r,n),jl(r,[{key:"connectedCallback",value:function(){if(!this.shadowRoot){var s=this.attachShadow({mode:"open"}),a=$t(this.getAttribute(Nr));yn(s,a.iframe.contentWindow),a.shadowRoot=s}}},{key:"disconnectedCallback",value:function(){var s=$t(this.getAttribute(Nr));w7(s)}}])}(Ju(HTMLElement));e==null||e.define("wujie-app",t)}}function k7(e){var t=window.document.createElement("wujie-app");return t.setAttribute(Nr,e),t.classList.add(tS),t}function Lr(e,t){var n=m2(t);return n&&!n.contains(e)&&(n.querySelector("div[".concat(Uf,"]"))||fr(n),e&&C2.call(n,e)),n}function L2(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=T7(e,n),i=Lr(r,t),s=r.contentWindow.document;return s.open(),s.write("<!DOCTYPE html><html><head></head><body></body></html>"),s.close(),{iframe:r,container:i}}function D2(e,t){return qu.apply(this,arguments)}function qu(){return qu=vt(ue.mark(function e(t,n){var r,i,s,a,o,l,u,d;return ue.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return r=t.iframe.contentDocument,i=t.plugins,s=t.replace,a=t.proxyLocation,o=Gu({plugins:i,replace:s}),l=Oo("cssBeforeLoaders",i),u=Oo("cssAfterLoaders",i),d=vl(a),f.next=1,Promise.all([Promise.all(Uo(l,t.fetch,t.lifecycles.loadError).map(function(h){var v=h.src,m=h.contentPromise;return m.then(function(y){return{src:v,content:y}})})).then(function(h){h.forEach(function(v){var m=v.src,y=v.content;if(y){var g=r.createElement("style");g.setAttribute("type","text/css"),g.appendChild(r.createTextNode(y&&o(y,m,d)));var p=n.querySelector("head"),b=n.querySelector("body");n.insertBefore(g,p||b||n.firstChild)}})}),Promise.all(Uo(u,t.fetch,t.lifecycles.loadError).map(function(h){var v=h.src,m=h.contentPromise;return m.then(function(y){return{src:v,content:y}})})).then(function(h){h.forEach(function(v){var m=v.src,y=v.content;if(y){var g=r.createElement("style");g.setAttribute("type","text/css"),g.appendChild(r.createTextNode(y&&o(y,m,d))),n.appendChild(g)}})})]).then(function(){return n},function(){return n});case 1:return f.abrupt("return",f.sent);case 2:case"end":return f.stop()}},e)})),qu.apply(this,arguments)}function E7(e,t,n){var r=e.querySelector("head"),i=e.querySelector("body");if(r){for(;r.firstChild;)Rr.call(t,r.firstChild.cloneNode(!0)),r.removeChild(r.firstChild);r.parentNode.replaceChild(t,r)}if(i){for(;i.firstChild;)Rr.call(n,i.firstChild.cloneNode(!0)),i.removeChild(i.firstChild);i.parentNode.replaceChild(n,i)}return e}function M2(e,t){var n=e.__WUJIE,r=n.head,i=n.body,s=n.alive,a=n.execFlag,o=e.document,l=new DOMParser,u=l.parseFromString(t,"text/html"),d=u.documentElement,f=d.attributes,h=o.createElement("html");h.innerHTML=t;for(var v=0;v<f.length;v++)h.setAttribute(f[v].name,f[v].value);!s&&a?h=E7(h,r,i):(n.head=h.querySelector("head"),n.body=h.querySelector("body"));for(var m=o.createTreeWalker(h,NodeFilter.SHOW_ELEMENT,null,!1),y=m.currentNode;y;){yn(y,e);var g=d7[y.tagName],p=y[g];g&&y.setAttribute(g,kn(p,y.baseURI||"")),y=m.nextNode()}if(!h.querySelector("head")){var b=o.createElement("head");h.appendChild(b)}if(!h.querySelector("body")){var x=o.createElement("body");h.appendChild(x)}return h}function C7(e,t,n){return Qu.apply(this,arguments)}function Qu(){return Qu=vt(ue.mark(function e(t,n,r){var i,s,a,o;return ue.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=M2(n,r),l.next=1,D2(n.__WUJIE,i);case 1:s=l.sent,t.appendChild(s),a=document.createElement("div"),a.setAttribute("style",nS),s.insertBefore(a,s.firstChild),t.head=t.querySelector("head"),t.body=t.querySelector("body"),o=t.firstElementChild,Object.defineProperties(o,{parentNode:{enumerable:!0,configurable:!0,get:function(){return n.document}},getBoundingClientRect:{enumerable:!0,configurable:!0,value:function(){return n.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__.call(n.document,"html").getBoundingClientRect()}}}),N2(t,n.__WUJIE.id,!1);case 2:case"end":return l.stop()}},e)})),Qu.apply(this,arguments)}function T7(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=document.createElement("iframe"),r="height:100%;width:100%";return gl(n,p0(p0({},t),{},Ae({style:[r,t.style].join(";")},Nr,e))),n}function m0(e,t,n){return Ku.apply(this,arguments)}function Ku(){return Ku=vt(ue.mark(function e(t,n,r){var i,s,a;return ue.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return i=M2(n,r),o.next=1,D2(n.__WUJIE,i);case 1:s=o.sent,t.replaceChild(s,t.documentElement),Object.defineProperty(t.documentElement,"parentNode",{enumerable:!0,configurable:!0,get:function(){return n.document}}),a=t.defaultView,a&&(O2(a,n.__WUJIE.url,""),a.__getWujieWindow__=window.__getWujieWindow__),N2(t,n.__WUJIE.id,!0);case 2:case"end":return o.stop()}},e)})),Ku.apply(this,arguments)}function fr(e){for(;e!=null&&e.firstChild;)T2.call(e,e.firstChild)}function P7(e,t){var n=m2(e);fr(n);var r=null;try{r=window.getComputedStyle(n)}catch{return}r.position==="static"?(n.setAttribute(Fu,r.position),n.setAttribute(Io,r.overflow==="visible"?"":r.overflow),n.style.setProperty("position","relative"),n.style.setProperty("overflow","hidden")):["relative","sticky"].includes(r.position)&&(n.setAttribute(Io,r.overflow==="visible"?"":r.overflow),n.style.setProperty("overflow","hidden"));var i=document.createElement("div");i.setAttribute(Uf,""),i.setAttribute("style",rS),t?i.appendChild(t):i.innerHTML=iS,n.appendChild(i)}function g0(e){var t=e.getAttribute(Fu),n=e.getAttribute(Io);t&&e.style.removeProperty("position"),n!==null&&(n?e.style.setProperty("overflow",n):e.style.removeProperty("overflow")),e.removeAttribute(Fu),e.removeAttribute(Io);var r=e.querySelector("div[".concat(Uf,"]"));r&&e.removeChild(r)}function I2(e){for(var t=[],n=[],r=/:root/g,i=0;i<e.length;i++)for(var s,a,o=(s=(a=e[i])===null||a===void 0?void 0:a.cssRules)!==null&&s!==void 0?s:[],l=0;l<o.length;l++){var u=o[l].cssText;r.test(u)&&t.push(u.replace(r,function(h){return j7[h]})),o[l].type===CSSRule.FONT_FACE_RULE&&n.push(u)}var d=null,f=null;return t.length&&(d=window.document.createElement("style"),d.innerHTML=t.join("")),n.length&&(f=window.document.createElement("style"),f.innerHTML=n.join("")),[d,f]}function Pi(e){var t=e.__WUJIE,n=t.sync,r=t.id,i=t.prefix,s=an(window.location.href),a=_i(s);if(!n&&!a[r])return s=null;var o=e.location.pathname+e.location.search+e.location.hash,l="";i&&Object.keys(i).forEach(function(d){var f=i[d];o.startsWith(f)&&(!l||f.length>i[l].length)&&(l=d)}),n?a[r]=l?o.replace(i[l],"{".concat(l,"}")):o:delete a[r];var u="?"+Object.keys(a).map(function(d){return d+"="+window.encodeURIComponent(a[d])}).join("&");s.search=u,s.href!==window.location.href&&window.history.replaceState(null,"",s.href),s=null}function A7(e){var t=e.location,n=t.pathname,r=t.search,i=t.hash,s=e.__WUJIE,a=s.id,o=s.url,l=s.sync,u=s.execFlag,d=s.prefix,f=s.inject,h=l&&!u?pS(a,d):o,v=(/^http/.test(h)?null:h)||o,m=h2(v),y=m.appRoutePath,g=n+r+i;g!==y&&e.history.replaceState(null,"",f.mainHostPath+y)}function N7(){var e=an(window.location.href),t=_i(e);Object.keys(t).forEach(function(r){var i=$t(r);i&&i.execFlag&&i.sync&&!i.hrefFlag&&!i.activeFlag&&delete t[r]});var n="?"+Object.keys(t).map(function(r){return r+"="+window.encodeURIComponent(t[r])}).join("&");e.search=n,e.href!==window.location.href&&window.history.replaceState(null,"",e.href),e=null}function R7(e,t){var n=an(window.location.href),r=_i(n);r[e]=t;var i="?"+Object.keys(r).map(function(s){return s+"="+window.encodeURIComponent(r[s])}).join("&");n.search=i,window.history.pushState(null,"",n.href),n=null}function L7(){window.addEventListener("popstate",function(){var e=an(window.location.href),t=_i(e);e=null,Object.keys(t).map(function(n){return $t(n)}).filter(function(n){return n}).forEach(function(n){var r=t[n.id],i=Qn.call(n.iframe.contentDocument,"body");if(/http/.test(r))n.degrade?(Lr(n.document.documentElement,i),Fo(window.decodeURIComponent(r),f2(n.id).parentElement,n.degradeAttrs)):Fo(window.decodeURIComponent(r),n.shadowRoot.host.parentElement,n.degradeAttrs),n.hrefFlag=!0;else if(n.hrefFlag){if(n.degrade){var s=L2(n.id,n.el,n.degradeAttrs),a=s.iframe;_2(a.contentWindow,n.iframe.contentWindow),a.contentWindow.onunload=function(){n.unmount()},a.contentDocument.appendChild(i.firstElementChild),n.document=a.contentDocument}else Lr(n.shadowRoot.host,n.el);n.hrefFlag=!1}})})}var D7=["src"];function v0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Vo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?v0(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var M7=new Set(["ClipboardEvent","CSSStyleDeclaration","DataTransfer","DOMImplementation","DOMMatrix","DOMMatrixReadOnly","DOMParser","DOMPoint","DOMPointReadOnly","DOMQuad","DOMRect","DOMRectList","DOMRectReadOnly","DOMStringList","DOMStringMap","DOMTokenList","HTMLCollection","MediaList","NamedNodeMap","Range","Selection","StyleSheet","StyleSheetList","TextDecoder","TextEncoder","TimeRanges"]);function I7(e){e.__WUJIE_EVENTLISTENER__=e.__WUJIE_EVENTLISTENER__||new Set,e.addEventListener=function(n,r,i){if(yt(e.__WUJIE.plugins,"windowAddEventListenerHook",e,n,r,i),e.__WUJIE_EVENTLISTENER__.add({type:n,listener:r,options:i}),r0.concat(e.__WUJIE.iframeAddEventListeners).includes(n)||Bt(i)==="object"&&i.targetWindow){var s=Bt(i)==="object"&&i.targetWindow?i==null?void 0:i.targetWindow:e;return a0.call(s,n,r,i)}a0.call(window.__WUJIE_RAW_WINDOW__||window,n,r,i)},e.removeEventListener=function(n,r,i){if(yt(e.__WUJIE.plugins,"windowRemoveEventListenerHook",e,n,r,i),e.__WUJIE_EVENTLISTENER__.forEach(function(a){a.listener===r&&a.type===n&&i==a.options&&e.__WUJIE_EVENTLISTENER__.delete(a)}),r0.concat(e.__WUJIE.iframeAddEventListeners).includes(n)||Bt(i)==="object"&&i.targetWindow){var s=Bt(i)==="object"&&i.targetWindow?i==null?void 0:i.targetWindow:e;return o0.call(s,n,r,i)}o0.call(window.__WUJIE_RAW_WINDOW__||window,n,r,i)}}function y0(e,t,n){e.__WUJIE=t,e.__WUJIE_PUBLIC_PATH__=n+"/",e.$wujie=t.provide,e.__WUJIE_RAW_WINDOW__=e}function _7(e,t,n){var r=e.history,i=r.pushState,s=r.replaceState;r.pushState=function(a,o,l){var u=n+e.location.pathname+e.location.search+e.location.hash,d=kn(l==null?void 0:l.replace(t,""),u),f=l===void 0;i.call(r,a,o,f?void 0:d),!f&&(b0(e,t,n),Pi(e))},r.replaceState=function(a,o,l){var u=n+e.location.pathname+e.location.search+e.location.hash,d=kn(l==null?void 0:l.replace(t,""),u),f=l===void 0;s.call(r,a,o,f?void 0:d),!f&&(b0(e,t,n),Pi(e))}}function b0(e,t,n){var r,i=new URL((r=e.location.href)===null||r===void 0?void 0:r.replace(n,""),t),s=Qn.call(e.document,"base");s&&s.setAttribute("href",t+i.pathname)}function O7(e){function t(r){var i=e[r];try{return typeof i=="function"&&!Vf(i)?e[r]=window[r].bind(window):e[r]=window[r],!0}catch(s){return Fe(s.message),!1}}Object.getOwnPropertyNames(e).forEach(function(r){if(r==="getSelection"){Object.defineProperty(e,r,{get:function(){var s=e.__WUJIE;return s!=null&&s.degrade&&s.document?s.document.getSelection.bind(s.document):e.document[r]}});return}if(f7.includes(r)){t(r);return}h7.some(function(i){return i.test(r)&&r in e.parent?t(r):!1})});var n=Object.getOwnPropertyNames(window).filter(function(r){return/^on/.test(r)}).filter(function(r){return!u7.concat(e.__WUJIE.iframeOnEvents).includes(r)});n.forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r)||{enumerable:!0,writable:!0};try{Object.defineProperty(e,r,{enumerable:i.enumerable,configurable:!0,get:function(){return window[r]},set:i.writable||i.set?function(s){var a,o=(a=e.__WUJIE)===null||a===void 0?void 0:a.eventCleanupTracker;o==null||o.trackWindowOnEvent(r,window[r],Object.prototype.hasOwnProperty.call(window,r)),window[r]=typeof s=="function"?s.bind(e):s}:void 0})}catch(s){Fe(s.message)}}),e.__WUJIE.degrade?yt(e.__WUJIE.plugins,"windowPropertyOverride",e):Yu(e)}function U7(e,t,n){var r=t.prototype;return r?t===n.EventTarget||t===n.Event||r instanceof n.EventTarget||r instanceof n.Event||/^(HTML|SVG|MathML).+Element$/.test(e)?!0:M7.has(e):!1}function Yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:window,n=Function.prototype[Symbol.hasInstance];Object.getOwnPropertyNames(e).forEach(function(i){var s,a;try{s=e[i],a=t[i]}catch{return}if(!(typeof s!="function"||typeof a!="function")&&!(s===a||Object.prototype.hasOwnProperty.call(s,"_hasPatch"))&&U7(i,a,t))try{Object.defineProperties(s,Ae(Ae({},Symbol.hasInstance,{configurable:!0,value:function(l){return n.call(this,l)?!0:n.call(a,l)}}),"_hasPatch",{value:!0}))}catch(o){console.warn(o)}});var r=e.__WUJIE;r&&yt(r.plugins,"windowPropertyOverride",e)}function V7(e,t){!t||e===t||(Yu(t,e),Yu(e,t))}function F7(e){var t=e.__WUJIE;e.Node.prototype.addEventListener=function(n,r,i){var s=t.elementEventCacheMap.get(this);return s?s.find(function(a){return a.type===n&&a.handler===r})||s.push({type:n,handler:r,options:i}):t.elementEventCacheMap.set(this,[{type:n,handler:r,options:i}]),Bf.call(this,n,r,i)},e.Node.prototype.removeEventListener=function(n,r,i){var s=t.elementEventCacheMap.get(this);if(s){var a=s==null?void 0:s.findIndex(function(o){return o.type===n&&o.handler===r});s.splice(a,1)}return s!=null&&s.length||t.elementEventCacheMap.delete(this),wl.call(this,n,r,i)}}function W7(e,t){for(var n=t.__WUJIE,r=new WeakMap,i=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,null,!1),s=i.currentNode;s;){var a=n.elementEventCacheMap.get(s);a!=null&&a.length&&(r.set(s,a),a.forEach(function(o){s.addEventListener(o.type,o.handler,o.options)})),s=i.nextNode()}n.elementEventCacheMap=r}function B7(e,t,n){var r=n.__WUJIE,i=new WeakMap,s=r.elementEventCacheMap.get(e);s!=null&&s.length&&(i.set(t,s),s.forEach(function(a){t.addEventListener(a.type,a.handler,a.options)})),r.elementEventCacheMap=i}function _2(e,t){Object.defineProperty(e.Event.prototype,"timeStamp",{get:function(){return t.document.createEvent("Event").timeStamp}})}function G7(e){var t=e.__WUJIE,n=new WeakMap,r=new WeakMap;e.Document.prototype.addEventListener=function(m,y,g){if(y){var p=n.get(y),b=r.get(y);if(p||(p=typeof y=="function"?y.bind(this):y,n.set(y,p)),b?b.includes(m)||b.push(m):r.set(y,[m]),yt(e.__WUJIE.plugins,"documentAddEventListenerHook",e,m,p,g),e0.includes(m))return Bf.call(this,m,p,g);if(t.degrade)return t.document.addEventListener(m,p,g);if(t0.includes(m)){var x;return(x=t.eventCleanupTracker)===null||x===void 0||x.trackMainDocumentListener({type:m,callback:p,options:g}),window.document.addEventListener(m,p,g)}if(n0.includes(m)){var j;(j=t.eventCleanupTracker)===null||j===void 0||j.trackMainDocumentListener({type:m,callback:p,options:g}),window.document.addEventListener(m,p,g),t.shadowRoot.addEventListener(m,p,g);return}t.shadowRoot.addEventListener(m,p,g)}},e.Document.prototype.removeEventListener=function(m,y,g){var p=n.get(y),b=r.get(y);if(p){if(b!=null&&b.includes(m)&&(b.splice(b.indexOf(m),1),b.length||(n.delete(y),r.delete(y))),yt(e.__WUJIE.plugins,"documentRemoveEventListenerHook",e,m,p,g),e0.includes(m))return wl.call(this,m,p,g);if(t.degrade)return t.document.removeEventListener(m,p,g);if(t0.includes(m)){var x;return(x=t.eventCleanupTracker)===null||x===void 0||x.untrackMainDocumentListener({type:m,callback:p,options:g}),window.document.removeEventListener(m,p,g)}if(n0.includes(m)){var j;(j=t.eventCleanupTracker)===null||j===void 0||j.untrackMainDocumentListener({type:m,callback:p,options:g}),window.document.removeEventListener(m,p,g),t.shadowRoot.removeEventListener(m,p,g);return}t.shadowRoot.removeEventListener(m,p,g)}};var i=Object.keys(e.HTMLElement.prototype).filter(function(m){return/^on/.test(m)}),s=Object.keys(e.Document.prototype).filter(function(m){return/^on/.test(m)}).filter(function(m){return!c7.includes(m)});i.filter(function(m){return s.includes(m)}).forEach(function(m){var y=Object.getOwnPropertyDescriptor(e.Document.prototype,m)||{enumerable:!0,writable:!0};try{Object.defineProperty(e.Document.prototype,m,{enumerable:y.enumerable,configurable:!0,get:function(){return t.degrade?t.document[m]:t.shadowRoot.firstElementChild[m]},set:y.writable||y.set?function(g){var p=typeof g=="function"?g.bind(e.document):g;t.degrade?t.document[m]=p:t.shadowRoot.firstElementChild[m]=p}:void 0})}catch(g){Fe(g.message)}});var a=Ie.ownerProperties,o=Ie.modifyProperties,l=Ie.shadowProperties,u=Ie.shadowMethods,d=Ie.documentProperties,f=Ie.documentMethods,h=Ie.documentEvents;o.concat(l,u,d,f).forEach(function(m){var y=Object.getOwnPropertyDescriptor(e.Document.prototype,m)||{enumerable:!0,writable:!0};try{Object.defineProperty(e.Document.prototype,m,{enumerable:y.enumerable,configurable:!0,get:function(){return t.proxyDocument[m]},set:void 0})}catch(g){Fe(g.message)}});var v=new Map;h.forEach(function(m){var y=Object.getOwnPropertyDescriptor(e.Document.prototype,m)||{enumerable:!0,writable:!0};if(y.writable||y.set){var g=m.slice(2);try{Object.defineProperty(e.Document.prototype,m,{enumerable:y.enumerable,configurable:!0,get:function(){return(t.degrade?t:window).document[m]},set:function(b){var x=(t.degrade?t:window).document,j=v.get(m);if(j){var S;x.removeEventListener(g,j),(S=t.eventCleanupTracker)===null||S===void 0||S.untrackMainDocumentListener({type:g,callback:j}),v.delete(m)}if(typeof b=="function"){var E,C=b.bind(e.document);v.set(m,C),x.addEventListener(g,C),(E=t.eventCleanupTracker)===null||E===void 0||E.trackMainDocumentListener({type:g,callback:C})}}})}catch(p){Fe(p.message)}}}),a.forEach(function(m){Object.defineProperty(e.document,m,{enumerable:!0,configurable:!0,get:function(){return t.proxyDocument[m]},set:void 0})}),yt(e.__WUJIE.plugins,"documentPropertyOverride",e)}function H7(e){var t=e.Node.prototype.getRootNode,n=e.Node.prototype.appendChild,r=e.Node.prototype.insertBefore,i=e.Node.prototype.removeChild;e.Node.prototype.getRootNode=function(s){var a=t.call(this,s);return a===e.__WUJIE.shadowRoot?e.document:a},e.Node.prototype.appendChild=function(s){var a=n.call(this,s);return yn(s,e),a},e.Node.prototype.insertBefore=function(s,a){var o=r.call(this,s,a);return yn(s,e),o},e.Node.prototype.removeChild=function(s){var a;try{a=i.call(this,s)}catch{var o;console.warn("Failed to removeChild: ".concat(s.nodeName.toLowerCase()," is not a child of ").concat(this.nodeName.toLowerCase(),", try again with parentNode attribute. ")),s.isConnected&&vn((o=s.parentNode)===null||o===void 0?void 0:o.removeChild)&&s.parentNode.removeChild(s)}return yn(s,e),a}}function z7(e){Wr(e,e.HTMLImageElement,"src"),Wr(e,e.HTMLAnchorElement,"href"),Wr(e,e.HTMLSourceElement,"src"),Wr(e,e.HTMLLinkElement,"href"),Wr(e,e.HTMLScriptElement,"src"),Wr(e,e.HTMLMediaElement,"src")}function O2(e,t,n){var r=e.document;if(!(!r.head||r.head.querySelector("base"))){var i=r.createElement("base"),s=an(e.location.href),a=an(t),o=n??s.pathname;i.setAttribute("href",a.protocol+"//"+a.host+o),r.head.insertBefore(i,r.head.firstChild)}}function $7(e,t,n,r){var i=e.document,s=window.document.implementation.createHTMLDocument(""),a=i.importNode(s.documentElement,!0);i.documentElement?i.replaceChild(a,i.documentElement):i.appendChild(a),e.__WUJIE_RAW_DOCUMENT_HEAD__=i.head,e.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__=e.Document.prototype.querySelector,e.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__=e.Document.prototype.querySelectorAll,e.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__=e.Document.prototype.createElement,e.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__=e.Document.prototype.createTextNode,O2(e,t.url),_7(e,r,n),I7(e),t.degrade&&F7(e),J7(e),O7(e),G7(e),H7(e),z7(e),K7(e)}function U2(e,t){var n=e.contentWindow;return new Promise(function(r){if(t){var i=!1,s=function(){if(!i){i=!0;var d=n.document,f=n.location.href;if(d.open(),d.close(),n.location.href!==f){r();return}Fe("wujie: srcdoc + document.open() trick failed, fallback to load ".concat(t.fallbackSrc," this time.")),e.removeAttribute("srcdoc"),e.src=t.fallbackSrc,U2(e,!1).then(r)}};e.addEventListener("load",s,{once:!0}),setTimeout(s,5e3);return}var a=n.document,o=Date.now()+5e3;function l(){setTimeout(function(){var u;try{u=n.document}catch{u=null}if((!u||u==a)&&Date.now()<o){l();return}n.stop?n.stop():u.execCommand("Stop"),r()},1)}l()})}function yn(e,t){if(!e._hasPatch){var n=typeof globalThis.WeakRef=="function",r=n?new globalThis.WeakRef(t):{deref:function(){return t}};try{Object.defineProperties(e,{baseURI:{configurable:!0,get:function(){var s,a=r.deref(),o=a==null||(s=a.__WUJIE)===null||s===void 0?void 0:s.proxyLocation;return o?o.protocol+"//"+o.host+o.pathname:window.document.baseURI},set:void 0},ownerDocument:{configurable:!0,get:function(){var s=r.deref();return!s||!s.__WUJIE?window.document:s.__WUJIE.degrade&&s.__WUJIE.document?s.__WUJIE.document:s.document}},_hasPatch:{get:function(){return!0}}})}catch(i){console.warn(i)}yt(t.__WUJIE.plugins,"patchElementHook",e,t),F2(e,t)}}function J7(e){e.addEventListener("hashchange",function(){return Pi(e)}),e.addEventListener("popstate",function(){Pi(e)})}function Vt(e,t,n){var r=e,i=r.src,s=r.module,a=r.content,o=r.crossorigin,l=r.crossoriginType,u=r.async,d=r.attrs,f=r.callback,h=r.onload,v=t.document.createElement("script"),m=t.document.createElement("script"),y=t.__WUJIE,g=y.replace,p=y.plugins,b=y.proxyLocation,x=WS({plugins:p,replace:g}),j=x(a,i,vl(b));if(d&&Object.keys(d).filter(function(M){return!Object.keys(e).includes(M)}).forEach(function(M){return v.setAttribute(M,String(d[M]))}),a){!t.__WUJIE.degrade&&!s&&(d==null?void 0:d.type)!=="importmap"&&(j=`(function(window, self, global, location) {
      `.concat(j,`
}).bind(window.__WUJIE.proxy)(
  window.__WUJIE.proxy,
  window.__WUJIE.proxy,
  window.__WUJIE.proxy,
  window.__WUJIE.proxyLocation,
);`));var S=Object.getOwnPropertyDescriptor(v,"src");if(S!=null&&S.configurable||!S)try{Object.defineProperty(v,"src",{get:function(){return i||""}})}catch(M){console.warn(M)}}else i&&v.setAttribute("src",i),o&&v.setAttribute("crossorigin",l);s&&v.setAttribute("type","module"),v.textContent=j||"",m.textContent="if(window.__WUJIE.execQueue && window.__WUJIE.execQueue.length){ window.__WUJIE.execQueue.shift()()}";var E=Qn.call(t.document,"head"),C=function(){return!u&&E.appendChild(m)},k=function(){h==null||h(),C()};if(/^<!DOCTYPE html/i.test(j))return en(es,e),C();if(n){g2(v,v2(n));var T=t.__WUJIE;T&&Array.isArray(T.dynamicScriptElements)&&T.dynamicScriptElements.push(v)}var P=!a&&i;P&&(v.onload=k,v.onerror=k),E.appendChild(v),f==null||f(t),yt(p,"appendOrInsertElementHook",v,t,n),!P&&k()}function Fo(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=window.document.createElement("iframe"),i="height:100%;width:100%";gl(r,Vo(Vo({},n),{},{src:e,style:[i,n.style].join(";")})),Lr(r,t)}var q7="<!DOCTYPE html><html><head></head><body></body></html>";function Q7(e,t,n,r,i){var s=t||{},a=s.src,o=e7(s,D7),l=a||n,u=window.document.createElement("iframe"),d=Vo(Vo({style:"display: none"},o),{},Ae(Ae({name:e.id},o2,""),"srcdoc",q7));gl(u,d),window.document.body.appendChild(u);var f=u.contentWindow;return y0(f,e,r),e.iframeReady=U2(u,{fallbackSrc:l}).then(function(){f.__WUJIE||y0(f,e,r),$7(f,e,n,r),p2(f.__WUJIE.id)||f.history.replaceState(null,"",n+i)}),u}var x0="with(window.__getWujieWindow__(";function V2(e,t){return e.startsWith(x0)?e:"".concat(x0,'"').concat(t,'")){ ').concat(e," }")}function F2(e,t){var n;if(e.nodeType===Node.ELEMENT_NODE){var r=(n=t.__WUJIE)===null||n===void 0?void 0:n.id;if(r){var i=Array.from(e.attributes);i.forEach(function(s){if(s.name.startsWith("on")&&typeof s.value=="string"){var a=V2(s.value,r);a!==s.value&&e.setAttribute(s.name,a)}}),e.children&&e.children.length>0&&Array.from(e.children).forEach(function(s){F2(s,t)})}}}function K7(e){var t=e.Element.prototype.setAttribute;e.Element.prototype.setAttribute=function(n,r){if(n.startsWith("on")&&typeof r=="string"){var i,s=(i=e.__WUJIE)===null||i===void 0?void 0:i.id;t.call(this,n,s?V2(r,s):r)}else t.call(this,n,r)}}function W2(e,t,n){var r=e.contentWindow.__WUJIE,i=r.shadowRoot,s=r.id,a=r.degrade,o=r.document,l=r.degradeAttrs,u=t;if(!/^http/.test(u)){var d=an(u);u=n+d.pathname+d.search+d.hash,d=null}if(e.contentWindow.__WUJIE.hrefFlag=!0,a){var f=Qn.call(e.contentDocument,"body");Lr(o.documentElement,f),Fo(window.decodeURIComponent(u),f2(s).parentElement,l)}else Fo(u,i.host.parentElement,l);return R7(s,u),!0}function Y7(e,t,n,r){var i=Proxy.revocable(e.contentWindow,{get:function(y,g){if(g==="location")return y.__WUJIE.proxyLocation;if(g==="self"||g==="window"&&Object.getOwnPropertyDescriptor(window,"window").get)return y.__WUJIE.proxy;if(g==="__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__"||g==="__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__")return y[g];var p=Object.getOwnPropertyDescriptor(y,g);return(p==null?void 0:p.configurable)===!1&&(p==null?void 0:p.writable)===!1?y[g]:$i(y,g)},set:function(y,g,p){return hS(y,p),y[g]=p,!0},has:function(y,g){return g in y}}),s=i.proxy,a=i.revoke,o=Proxy.revocable({},{get:function(y,g){var p=window.document,b=e.contentWindow.__WUJIE,x=b.shadowRoot,j=b.proxyLocation;x||b2();var S=e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__,E=e.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__;if(g==="createElement"||g==="createTextNode")return new Proxy(p[g],{apply:function(V,Z,_){var A=g==="createElement"?S:E,I=A.apply(e.contentDocument,_);return yn(I,e.contentWindow),I}});if(g==="documentURI"||g==="URL")return j.href;if(g==="getElementsByTagName"||g==="getElementsByClassName"||g==="getElementsByName")return new Proxy(x.querySelectorAll,{apply:function(V,Z,_){var A=_[0];if(Z!==e.contentDocument)return Z[g].apply(Z,_);if(g==="getElementsByTagName"&&A==="script")return e.contentDocument.scripts;g==="getElementsByClassName"&&(A="."+A),g==="getElementsByName"&&(A='[name="'.concat(A,'"]'));var I;try{I=V.call(x,A)}catch{I=[]}return I}});if(g==="getElementById")return new Proxy(x.querySelector,{apply:function(V,Z,_){if(Z!==e.contentDocument){var A;return(A=Z[g])===null||A===void 0?void 0:A.apply(Z,_)}try{return V.call(x,'[id="'.concat(_[0],'"]'))||e.contentWindow.__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__.call(e.contentWindow.document,"#".concat(_[0]))}catch{return Fe(uS),null}}});if(g==="querySelector"||g==="querySelectorAll"){var C={querySelector:"__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR__",querySelectorAll:"__WUJIE_RAW_DOCUMENT_QUERY_SELECTOR_ALL__"};return new Proxy(x[g],{apply:function(V,Z,_){if(Z!==e.contentDocument){var A;return(A=Z[g])===null||A===void 0?void 0:A.apply(Z,_)}return V.apply(x,_)||(_[0]==="base"?null:e.contentWindow[C[g]].call(e.contentWindow.document,_[0]))}})}if(g==="documentElement"||g==="scrollingElement")return x.firstElementChild;if(g==="forms")return x.querySelectorAll("form");if(g==="images")return x.querySelectorAll("img");if(g==="links")return x.querySelectorAll("a");var k=Ie.ownerProperties,T=Ie.shadowProperties,P=Ie.shadowMethods,M=Ie.documentProperties,B=Ie.documentMethods;if(k.concat(T).includes(g.toString()))return g==="activeElement"&&x.activeElement===null?x.body:x[g];if(P.includes(g.toString())){var G;return(G=$i(x,g))!==null&&G!==void 0?G:$i(p,g)}if(M.includes(g.toString()))return p[g];if(B.includes(g.toString()))return $i(p,g)}}),l=o.proxy,u=o.revoke,d=Proxy.revocable({},{get:function(y,g){var p=e.contentWindow.location;return g==="host"||g==="hostname"||g==="protocol"||g==="port"||g==="origin"?t[g]:g==="href"?p[g].replace(n,r):g==="reload"?(Fe(l2),function(){return null}):g==="replace"?new Proxy(p[g],{apply:function(x,j,S){var E;return x.call(p,(E=S[0])===null||E===void 0?void 0:E.replace(r,n))}}):$i(p,g)},set:function(y,g,p){return g==="href"?W2(e,p,r):(e.contentWindow.location[g]=p,!0)},ownKeys:function(){return Object.keys(e.contentWindow.location).filter(function(y){return y!=="reload"})},getOwnPropertyDescriptor:function(y,g){return{enumerable:!0,configurable:!0,value:this[g]}}}),f=d.proxy,h=d.revoke,v=function(){a(),u(),h()};return{proxyWindow:s,proxyDocument:l,proxyLocation:f,proxyRevoke:v}}function X7(e,t,n,r){var i=e,s=e.contentWindow.__WUJIE,a=e.contentWindow.location,o={};Object.defineProperties(o,{createElement:{get:function(){return function(){for(var j=arguments.length,S=new Array(j),E=0;E<j;E++)S[E]=arguments[E];var C=i.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_ELEMENT__.apply(i.contentDocument,S);return yn(C,i.contentWindow),C}}},createTextNode:{get:function(){return function(){for(var j=arguments.length,S=new Array(j),E=0;E<j;E++)S[E]=arguments[E];var C=i.contentWindow.__WUJIE_RAW_DOCUMENT_CREATE_TEXT_NODE__.apply(i.contentDocument,S);return yn(C,i.contentWindow),C}}},documentURI:{get:function(){var j;return(j=s)===null||j===void 0||(j=j.proxyLocation)===null||j===void 0?void 0:j.href}},URL:{get:function(){var j;return(j=s)===null||j===void 0||(j=j.proxyLocation)===null||j===void 0?void 0:j.href}},getElementsByTagName:{get:function(){return function(){var j=arguments.length<=0?void 0:arguments[0];return j==="script"?i.contentDocument.scripts:s.document.getElementsByTagName(j)}}},getElementById:{get:function(){return function(){var j=arguments.length<=0?void 0:arguments[0];return s.document.getElementById(j)||i.contentWindow.__WUJIE_RAW_DOCUMENT_HEAD__.querySelector("#".concat(j))}}}});var l=Ie.modifyLocalProperties,u=Ie.modifyProperties,d=Ie.ownerProperties,f=Ie.shadowProperties,h=Ie.shadowMethods,v=Ie.documentProperties,m=Ie.documentMethods;u.filter(function(x){return!l.includes(x)}).concat(d,f,h,v,m).forEach(function(x){Object.defineProperty(o,x,{get:function(){var S,E=(S=s)===null||S===void 0||(S=S.document)===null||S===void 0?void 0:S[x];return _o(E)?E.bind(s.document):E}})});var y={},g=Object.keys(a),p=["host","hostname","port","protocol","port"];p.forEach(function(x){y[x]=t[x]}),Object.defineProperties(y,{href:{get:function(){var j;return(j=a)===null||j===void 0?void 0:j.href.replace(n,r)},set:function(j){W2(i,j,r)}},reload:{get:function(){return Fe(l2),function(){return null}}}}),g.filter(function(x){return!p.concat(["href","reload"]).includes(x)}).forEach(function(x){Object.defineProperty(y,x,{get:function(){var S,E;return _o((S=a)===null||S===void 0?void 0:S[x])?a[x].bind(a):(E=a)===null||E===void 0?void 0:E[x]}})});var b=function(){i=null,s=null,a=null};return{proxyDocument:o,proxyLocation:y,proxyRevoke:b}}function j0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function w0(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?j0(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ur=function(e){if((e=window.__WUJIE_INJECT)!==null&&e!==void 0&&e.appEventObjMap)return window.__WUJIE_INJECT.appEventObjMap;var t=window.__POWERED_BY_WUJIE__?window.__WUJIE.inject.appEventObjMap:new Map;return window.__WUJIE_INJECT=w0(w0({},window.__WUJIE_INJECT),{},{appEventObjMap:t}),t}(),B2=function(){function e(t){xl(this,e),this.id=t,this.$clear(),ur.get(this.id)||ur.set(this.id,{}),this.eventObj=ur.get(this.id)}return jl(e,[{key:"$on",value:function(n,r){var i=this.eventObj[n];return i?(i.includes(r)||i.push(r),this):(this.eventObj[n]=[r],this)}},{key:"$onAll",value:function(n){return this.$on(Pa,n)}},{key:"$once",value:function(n,r){var i=(function(){this.$off(n,i),r.apply(void 0,arguments)}).bind(this);this.$on(n,i)}},{key:"$off",value:function(n,r){var i=this.eventObj[n];if(!n||!i||!i.length)return Fe("".concat(n," ").concat(Bm)),this;for(var s,a=i.length;a--;)if(s=i[a],s===r){i.splice(a,1);break}return this}},{key:"$offAll",value:function(n){return this.$off(Pa,n)}},{key:"$emit",value:function(n){var r=[],i=[];if(ur.forEach(function(m){m[n]&&(r=r.concat(m[n])),m[Pa]&&(i=i.concat(m[Pa]))}),!n||r.length===0&&i.length===0)Fe("".concat(n," ").concat(Bm));else try{for(var s=arguments.length,a=new Array(s>1?s-1:0),o=1;o<s;o++)a[o-1]=arguments[o];for(var l=0,u=r.length;l<u;l++){var d;(d=r)[l].apply(d,a)}for(var f=0,h=i.length;f<h;f++){var v;(v=i)[f].apply(v,[n].concat(a))}}catch(m){en(m)}return this}},{key:"$clear",value:function(){var n,r=(n=ur.get(this.id))!==null&&n!==void 0?n:{},i=Object.keys(r);return i.forEach(function(s){return delete r[s]}),this}},{key:"$destroy",value:function(){this.$clear(),ur.delete(this.id),this.eventObj={}}}])}();function Z7(e,t){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ek(e))||t){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(u){throw u},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var s,a=!0,o=!1;return{s:function(){n=n.call(e)},n:function(){var u=n.next();return a=u.done,u},e:function(u){o=!0,s=u},f:function(){try{a||n.return==null||n.return()}finally{if(o)throw s}}}}function ek(e,t){if(e){if(typeof e=="string")return S0(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S0(e,t):void 0}}function S0(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var tk=function(){function e(){xl(this,e),Ae(this,"mainDocumentListeners",new Set),Ae(this,"windowOnEventOverrides",new Map)}return jl(e,[{key:"trackMainDocumentListener",value:function(n){this.mainDocumentListeners.add(n)}},{key:"untrackMainDocumentListener",value:function(n){var r=Z7(this.mainDocumentListeners),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(s.type===n.type&&s.callback===n.callback&&s.options===n.options){this.mainDocumentListeners.delete(s);break}}}catch(a){r.e(a)}finally{r.f()}}},{key:"cleanupMainDocumentListeners",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.document;this.mainDocumentListeners.forEach(function(r){var i=r.type,s=r.callback,a=r.options;try{n.removeEventListener(i,s,a)}catch{}}),this.mainDocumentListeners.clear()}},{key:"trackWindowOnEvent",value:function(n,r,i){this.windowOnEventOverrides.has(n)||this.windowOnEventOverrides.set(n,{key:n,originalValue:r,hadOwnProperty:i})}},{key:"cleanupWindowOnEventOverrides",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;this.windowOnEventOverrides.forEach(function(r){var i=r.key,s=r.originalValue,a=r.hadOwnProperty;try{n[i]=s}catch{}if(!a)try{delete n[i]}catch{}}),this.windowOnEventOverrides.clear()}},{key:"cleanupAll",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;this.cleanupMainDocumentListeners(n.document),this.cleanupWindowOnEventOverrides(n)}}])}();function k0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Rn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?k0(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var G2=function(){function e(t){xl(this,e),Ae(this,"destroyed",!1),Ae(this,"fontStyleSheetElements",[]),Ae(this,"dynamicScriptElements",[]),Ae(this,"deferredStyleObservers",[]),Ae(this,"elementEventCacheMap",new WeakMap),Ae(this,"eventCleanupTracker",new tk),window.__POWERED_BY_WUJIE__?this.inject=window.__WUJIE.inject:this.inject={idToSandboxMap:Dt,appEventObjMap:ur,mainHostPath:window.location.protocol+"//"+window.location.host,fontStyleSheetContainer:this.createFontStyleSheetContainer()};var n=t.name,r=t.url,i=t.attrs,s=t.fiber,a=t.degradeAttrs,o=t.degrade,l=t.lifecycles,u=t.plugins;this.id=n,this.fiber=s,this.degrade=o||!u2,this.bus=new B2(this.id),this.url=r,this.degradeAttrs=a,this.provide={bus:this.bus},this.styleSheetElements=[],this.execQueue=[],this.lifecycles=l,this.plugins=j2(u),this.iframeAddEventListeners=t.iframeAddEventListeners,this.iframeOnEvents=t.iframeOnEvents;var d=h2(r),f=d.urlElement,h=d.appHostPath,v=d.appRoutePath,m=this.inject.mainHostPath;if(this.iframe=Q7(this,i,m,h,v),this.degrade){var y=X7(this.iframe,f,m,h),g=y.proxyDocument,p=y.proxyLocation,b=y.proxyRevoke;this.proxyDocument=g,this.proxyLocation=p,this.proxyRevoke=b}else{var x=Y7(this.iframe,f,m,h),j=x.proxyWindow,S=x.proxyDocument,E=x.proxyLocation,C=x.proxyRevoke;this.proxy=j,this.proxyDocument=S,this.proxyLocation=E,this.proxyRevoke=C}this.provide.location=this.proxyLocation,a7(this.id,this)}return jl(e,[{key:"active",value:function(){var t=vt(ue.mark(function r(i){var s=this,a,o,l,u,d,f,h,v,m,y,g,p,b,x,j,S,E;return ue.wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return a=i.sync,o=i.url,l=i.el,u=i.template,d=i.props,f=i.alive,h=i.prefix,v=i.fetch,m=i.replace,this.url=o,this.sync=a,this.alive=f,this.hrefFlag=!1,this.prefix=h??this.prefix,this.replace=m??this.replace,this.provide.props=d??this.provide.props,this.activeFlag=!0,C.next=1,this.iframeReady;case 1:if(y=this.iframe.contentWindow,g=v?function(k,T){return v(typeof k=="string"?kn(k,s.proxyLocation.href):k,T)}:this.fetch,g&&(y.fetch=g,this.fetch=g),this.execFlag&&this.alive||A7(y),Pi(y),this.template=u??this.template,!this.degrade){C.next=7;break}if(p=Qn.call(y.document,"body"),b=L2(this.id,l??p,this.degradeAttrs),x=b.iframe,j=b.container,this.el=j,l&&fr(p),_2(x.contentWindow,y),x.contentWindow.onunload=function(){s.unmount()},!this.document){C.next=5;break}if(!this.alive){C.next=2;break}x.contentDocument.replaceChild(this.document.documentElement,x.contentDocument.documentElement),W7(x.contentDocument.documentElement,y),C.next=4;break;case 2:return C.next=3,m0(x.contentDocument,this.iframe.contentWindow,this.template);case 3:B7(this.document.documentElement,x.contentDocument.documentElement,y);case 4:C.next=6;break;case 5:return C.next=6,m0(x.contentDocument,this.iframe.contentWindow,this.template);case 6:return this.document=x.contentDocument,S=this.document.defaultView,S&&V7(y,S),C.abrupt("return");case 7:if(!this.shadowRoot){C.next=9;break}if(this.el=Lr(this.shadowRoot.host,l),!this.alive){C.next=8;break}return C.abrupt("return");case 8:C.next=10;break;case 9:E=Qn.call(y.document,"body"),this.el=Lr(k7(this.id),l??E);case 10:return C.next=11,C7(this.shadowRoot,y,this.template);case 11:this.patchCssRules(),this.provide.shadowRoot=this.shadowRoot;case 12:case"end":return C.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"requestIdleCallback",value:function(n){var r=this;return Ff(function(){r.iframe&&n.apply(r)})}},{key:"start",value:function(){var t=vt(ue.mark(function r(i){var s=this,a,o,l,u,d,f,h,v,m;return ue.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return this.execFlag=!0,y.next=1,i();case 1:if(a=y.sent,this.iframe){y.next=2;break}return y.abrupt("return");case 2:return o=this.iframe.contentWindow,o.__POWERED_BY_WUJIE__=!0,l=Oo("jsBeforeLoaders",this.plugins),u=Oo("jsAfterLoaders",this.plugins),d=[],f=[],h=[],a.forEach(function(g){g.defer?h.push(g):g.async?f.push(g):d.push(g)}),l.forEach(function(g){s.execQueue.push(function(){return s.fiber?s.requestIdleCallback(function(){return Vt(g,o)}):Vt(g,o)})}),d.concat(h).forEach(function(g){s.execQueue.push(function(){return g.contentPromise.then(function(p){return s.fiber?s.requestIdleCallback(function(){return Vt(Rn(Rn({},g),{},{content:p}),o)}):Vt(Rn(Rn({},g),{},{content:p}),o)})})}),f.forEach(function(g){g.contentPromise.then(function(p){s.fiber?s.requestIdleCallback(function(){return Vt(Rn(Rn({},g),{},{content:p}),o)}):Vt(Rn(Rn({},g),{},{content:p}),o)})}),this.execQueue.push(this.fiber?function(){return s.requestIdleCallback(function(){return s.mount()})}:function(){return s.mount()}),v=function(){var p;Na(o.document,"DOMContentLoaded"),Na(o,"DOMContentLoaded"),(p=s.execQueue.shift())===null||p===void 0||p()},this.execQueue.push(this.fiber?function(){return s.requestIdleCallback(v)}:v),u.forEach(function(g){s.execQueue.push(function(){return s.fiber?s.requestIdleCallback(function(){return Vt(g,o)}):Vt(g,o)})}),m=function(){var p;Na(o.document,"readystatechange"),Na(o,"load"),(p=s.execQueue.shift())===null||p===void 0||p()},this.execQueue.push(this.fiber?function(){return s.requestIdleCallback(m)}:m),(this.alive||!vn(this.iframe.contentWindow.__WUJIE_UNMOUNT))&&g0(this.el),this.execQueue.shift()(),y.abrupt("return",new Promise(function(g){s.execQueue.push(function(){var p;g(),(p=s.execQueue.shift())===null||p===void 0||p()})}));case 3:case"end":return y.stop()}},r,this)}));function n(r){return t.apply(this,arguments)}return n}()},{key:"mount",value:function(){var n;if(!this.mountFlag){if(vn(this.iframe.contentWindow.__WUJIE_MOUNT)){var r,i,s,a;g0(this.el),(r=this.lifecycles)===null||r===void 0||(i=r.beforeMount)===null||i===void 0||i.call(r,this.iframe.contentWindow),this.iframe.contentWindow.__WUJIE_MOUNT(),(s=this.lifecycles)===null||s===void 0||(a=s.afterMount)===null||a===void 0||a.call(s,this.iframe.contentWindow),this.mountFlag=!0}if(this.alive){var o,l;(o=this.lifecycles)===null||o===void 0||(l=o.activated)===null||l===void 0||l.call(o,this.iframe.contentWindow)}(n=this.execQueue.shift())===null||n===void 0||n()}}},{key:"unmount",value:function(){var t=vt(ue.mark(function r(){var i,s,a,o,l,u,d;return ue.wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(this.clearDeferredStyleObservers(),this.activeFlag=!1,N7(),this.alive&&((i=this.lifecycles)===null||i===void 0||(s=i.deactivated)===null||s===void 0||s.call(i,this.iframe.contentWindow)),this.mountFlag){f.next=1;break}return f.abrupt("return");case 1:if(!(vn(this.iframe.contentWindow.__WUJIE_UNMOUNT)&&!this.alive&&!this.hrefFlag)){f.next=3;break}return(a=this.lifecycles)===null||a===void 0||(o=a.beforeUnmount)===null||o===void 0||o.call(a,this.iframe.contentWindow),f.next=2,this.iframe.contentWindow.__WUJIE_UNMOUNT();case 2:(l=this.lifecycles)===null||l===void 0||(u=l.afterUnmount)===null||u===void 0||u.call(l,this.iframe.contentWindow),this.mountFlag=!1,(d=this.bus)===null||d===void 0||d.$clear(),this.degrade||(fr(this.shadowRoot),f0(this.head),f0(this.body)),fr(this.head),fr(this.body);case 3:case"end":return f.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"destroy",value:function(){var t=vt(ue.mark(function r(){var i,s,a;return ue.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:if(!this.destroyed){o.next=1;break}return o.abrupt("return");case 1:return this.destroyed=!0,o7(this.id),o.next=2,this.unmount();case 2:if(this.clearStyleSheets(),this.clearDynamicScripts(),this.clearFontStyleSheets(),this.clearDeferredStyleObservers(),this.bus.$destroy(),this.shadowRoot=null,this.proxy=null,this.proxyDocument=null,this.proxyLocation=null,this.execQueue=null,this.provide=null,this.degradeAttrs=null,this.styleSheetElements=null,this.fontStyleSheetElements=null,this.dynamicScriptElements=null,this.deferredStyleObservers=null,this.bus=null,this.replace=null,this.fetch=null,this.execFlag=null,this.mountFlag=null,this.hrefFlag=null,this.document=null,this.head=null,this.body=null,this.elementEventCacheMap=null,this.lifecycles=null,this.plugins=null,this.provide=null,this.inject=null,this.execQueue=null,this.prefix=null,this.iframeAddEventListeners=null,this.iframeOnEvents=null,this.el&&(fr(this.el),this.el=null),this.iframe){if(s=this.iframe.contentWindow,s!=null&&s.__WUJIE_EVENTLISTENER__&&s.__WUJIE_EVENTLISTENER__.forEach(function(l){s.removeEventListener(l.type,l.listener,l.options)}),s)try{s.__WUJIE=null,s.$wujie=null}catch{}(i=this.iframe.parentNode)===null||i===void 0||i.removeChild(this.iframe),this.iframe=null}try{(a=this.proxyRevoke)===null||a===void 0||a.call(this)}catch{}this.proxyRevoke=null,this.eventCleanupTracker.cleanupAll();case 3:case"end":return o.stop()}},r,this)}));function n(){return t.apply(this,arguments)}return n}()},{key:"clearStyleSheets",value:function(){Array.isArray(this.styleSheetElements)&&(this.styleSheetElements.forEach(function(n){try{var r;(r=n.parentNode)===null||r===void 0||r.removeChild(n)}catch{}}),this.styleSheetElements.length=0)}},{key:"clearDynamicScripts",value:function(){Array.isArray(this.dynamicScriptElements)&&(this.dynamicScriptElements.forEach(function(n){try{var r;(r=n.parentNode)===null||r===void 0||r.removeChild(n)}catch{}}),this.dynamicScriptElements.length=0)}},{key:"clearFontStyleSheets",value:function(){Array.isArray(this.fontStyleSheetElements)&&(this.fontStyleSheetElements.forEach(function(n){try{var r;(r=n.parentNode)===null||r===void 0||r.removeChild(n)}catch{}}),this.fontStyleSheetElements.length=0)}},{key:"clearDeferredStyleObservers",value:function(){Array.isArray(this.deferredStyleObservers)&&(this.deferredStyleObservers.forEach(function(n){try{n.disconnect()}catch{}}),this.deferredStyleObservers.length=0)}},{key:"createFontStyleSheetContainer",value:function(){var n=Qn.call(document,"[".concat(Wm,"]"));if(n)return n;var r=document.createElement("style");return r.setAttribute(Wm,""),document.head.appendChild(r),r}},{key:"rebuildStyleSheets",value:function(){var n=this;this.styleSheetElements&&this.styleSheetElements.length&&this.styleSheetElements.forEach(function(r){C2.call(n.degrade?n.document.head:n.shadowRoot.head,r)}),this.patchCssRules()}},{key:"patchCssRules",value:function(){if(!this.degrade&&!this.shadowRoot.host.hasAttribute(Fm)){var n=I2(Array.from(this.iframe.contentDocument.querySelectorAll("style")).map(function(o){return o.sheet})),r=pl(n,2),i=r[0],s=r[1];if(i&&(this.shadowRoot.head.appendChild(i),this.styleSheetElements.push(i)),s){var a;(a=this.inject.fontStyleSheetContainer)===null||a===void 0||a.appendChild(s),s.setAttribute(Nr,this.id),this.fontStyleSheetElements.push(s)}(i||s)&&this.shadowRoot.host.setAttribute(Fm,"")}}}])}();function E0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nk(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?E0(Object(n),!0).forEach(function(r){Ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var rk=new B2(Date.now().toString());window.__WUJIE&&!window.__POWERED_BY_WUJIE__&&b2();L7();S7();u2||Fe(lS);function ik(e){e.name&&l7(e.name,e)}function H2(e){return Xu.apply(this,arguments)}function Xu(){return Xu=vt(ue.mark(function e(t){var n,r,i,s,a,o,l,u,d,f,h,v,m,y,g,p,b,x,j,S,E,C,k,T,P,M,B,G,$,V,Z,_,A,I,U,X,Q,Le,De,L,H;return ue.wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(YS(),i=$t(t.name),s=E2(t.name),a=y2(t,s),o=a.name,l=a.url,u=a.html,d=a.replace,f=a.fetch,h=a.props,v=a.attrs,m=a.degradeAttrs,y=a.fiber,g=a.alive,p=a.degrade,b=a.sync,x=a.prefix,j=a.el,S=a.loading,E=a.plugins,C=a.lifecycles,k=a.iframeAddEventListeners,T=a.iframeOnEvents,!i){O.next=9;break}if(i.plugins=j2(E),i.lifecycles=C,P=i.iframe.contentWindow,!i.preload){O.next=1;break}return O.next=1,i.preload;case 1:if(!g){O.next=5;break}return O.next=2,i.active({url:l,sync:b,prefix:x,el:j,props:h,alive:g,fetch:f,replace:d});case 2:if(i.execFlag){O.next=4;break}return(G=i.lifecycles)===null||G===void 0||($=G.beforeLoad)===null||$===void 0||$.call(G,i.iframe.contentWindow),O.next=3,$u({url:l,html:u,opts:{fetch:f||window.fetch,plugins:i.plugins,loadError:i.lifecycles.loadError,fiber:y}});case 3:return V=O.sent,Z=V.getExternalScripts,O.next=4,i.start(Z);case 4:return(M=i.lifecycles)===null||M===void 0||(B=M.activated)===null||B===void 0||B.call(M,i.iframe.contentWindow),O.abrupt("return",function(){return i.destroy()});case 5:if(!vn(P.__WUJIE_MOUNT)){O.next=8;break}return O.next=6,i.unmount();case 6:return O.next=7,i.active({url:l,sync:b,prefix:x,el:j,props:h,alive:g,fetch:f,replace:d});case 7:return i.rebuildStyleSheets(),(_=i.lifecycles)===null||_===void 0||(A=_.beforeMount)===null||A===void 0||A.call(_,i.iframe.contentWindow),P.__WUJIE_MOUNT(),(I=i.lifecycles)===null||I===void 0||(U=I.afterMount)===null||U===void 0||U.call(I,i.iframe.contentWindow),i.mountFlag=!0,O.abrupt("return",function(){return i.destroy()});case 8:return O.next=9,i.destroy();case 9:return P7(j,S),X=new G2({name:o,url:l,attrs:v,degradeAttrs:m,fiber:y,degrade:p,plugins:E,lifecycles:C,iframeAddEventListeners:k,iframeOnEvents:T}),(n=X.lifecycles)===null||n===void 0||(r=n.beforeLoad)===null||r===void 0||r.call(n,X.iframe.contentWindow),O.next=10,$u({url:l,html:u,opts:{fetch:f||window.fetch,plugins:X.plugins,loadError:X.lifecycles.loadError,fiber:y}});case 10:return Q=O.sent,Le=Q.template,De=Q.getExternalScripts,L=Q.getExternalStyleSheets,O.next=11,w2(X,Le,L);case 11:return H=O.sent,O.next=12,X.active({url:l,sync:b,prefix:x,template:H,el:j,props:h,alive:g,fetch:f,replace:d});case 12:return O.next=13,X.start(De);case 13:return O.abrupt("return",function(){return X.destroy()});case 14:case"end":return O.stop()}},e)})),Xu.apply(this,arguments)}function sk(e){Ff(function(){if(!($t(e.name)||p2(e.name))){var t=E2(e.name),n=y2(nk({},e),t),r=n.name,i=n.url,s=n.html,a=n.props,o=n.alive,l=n.replace,u=n.fetch,d=n.exec,f=n.attrs,h=n.degradeAttrs,v=n.fiber,m=n.degrade,y=n.prefix,g=n.plugins,p=n.lifecycles,b=n.iframeAddEventListeners,x=n.iframeOnEvents,j=new G2({name:r,url:i,attrs:f,degradeAttrs:h,fiber:v,degrade:m,plugins:g,lifecycles:p,iframeAddEventListeners:b,iframeOnEvents:x});if(j.preload)return j.preload;var S=function(){var E=vt(ue.mark(function C(){var k,T,P,M,B,G,$;return ue.wrap(function(V){for(;;)switch(V.prev=V.next){case 0:return(k=j.lifecycles)===null||k===void 0||(T=k.beforeLoad)===null||T===void 0||T.call(k,j.iframe.contentWindow),V.next=1,$u({url:i,html:s,opts:{fetch:u||window.fetch,plugins:j.plugins,loadError:j.lifecycles.loadError,fiber:v}});case 1:return P=V.sent,M=P.template,B=P.getExternalScripts,G=P.getExternalStyleSheets,V.next=2,w2(j,M,G);case 2:return $=V.sent,V.next=3,j.active({url:i,props:a,prefix:y,alive:o,template:$,fetch:u,replace:l});case 3:if(!d){V.next=5;break}return V.next=4,j.start(B);case 4:V.next=6;break;case 5:return V.next=6,B();case 6:case"end":return V.stop()}},C)}));return function(){return E.apply(this,arguments)}}();j.preload=S()}})}function Gf(e){return Zu.apply(this,arguments)}function Zu(){return Zu=vt(ue.mark(function e(t){var n;return ue.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n=$t(t),!n){r.next=1;break}return r.next=1,n.destroy();case 1:case"end":return r.stop()}},e)})),Zu.apply(this,arguments)}function ak(e){return ed.apply(this,arguments)}function ed(){return ed=vt(ue.mark(function e(t){return ue.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=1,Gf(t.name);case 1:return n.abrupt("return",H2(t));case 2:case"end":return n.stop()}},e)})),ed.apply(this,arguments)}function Ai(e){"@babel/helpers - typeof";return Ai=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ai(e)}function ns(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,t,n=typeof Symbol=="function"?Symbol:{},r=n.iterator||"@@iterator",i=n.toStringTag||"@@toStringTag";function s(v,m,y,g){var p=m&&m.prototype instanceof o?m:o,b=Object.create(p.prototype);return pt(b,"_invoke",function(x,j,S){var E,C,k,T=0,P=S||[],M=!1,B={p:0,n:0,v:e,a:G,f:G.bind(e,4),d:function(V,Z){return E=V,C=0,k=e,B.n=Z,a}};function G($,V){for(C=$,k=V,t=0;!M&&T&&!Z&&t<P.length;t++){var Z,_=P[t],A=B.p,I=_[2];$>3?(Z=I===V)&&(k=_[(C=_[4])?5:(C=3,3)],_[4]=_[5]=e):_[0]<=A&&((Z=$<2&&A<_[1])?(C=0,B.v=V,B.n=_[1]):A<I&&(Z=$<3||_[0]>V||V>I)&&(_[4]=$,_[5]=V,B.n=I,C=0))}if(Z||$>1)return a;throw M=!0,V}return function($,V,Z){if(T>1)throw TypeError("Generator is already running");for(M&&V===1&&G(V,Z),C=V,k=Z;(t=C<2?e:k)||!M;){E||(C?C<3?(C>1&&(B.n=-1),G(C,k)):B.n=k:B.v=k);try{if(T=2,E){if(C||($="next"),t=E[$]){if(!(t=t.call(E,k)))throw TypeError("iterator result is not an object");if(!t.done)return t;k=t.value,C<2&&(C=0)}else C===1&&(t=E.return)&&t.call(E),C<2&&(k=TypeError("The iterator does not provide a '"+$+"' method"),C=1);E=e}else if((t=(M=B.n<0)?k:x.call(j,B))!==a)break}catch(_){E=e,C=1,k=_}finally{T=1}}return{value:t,done:M}}}(v,y,g),!0),b}var a={};function o(){}function l(){}function u(){}t=Object.getPrototypeOf;var d=[][r]?t(t([][r]())):(pt(t={},r,function(){return this}),t),f=u.prototype=o.prototype=Object.create(d);function h(v){return Object.setPrototypeOf?Object.setPrototypeOf(v,u):(v.__proto__=u,pt(v,i,"GeneratorFunction")),v.prototype=Object.create(f),v}return l.prototype=u,pt(f,"constructor",u),pt(u,"constructor",l),l.displayName="GeneratorFunction",pt(u,i,"GeneratorFunction"),pt(f),pt(f,i,"Generator"),pt(f,r,function(){return this}),pt(f,"toString",function(){return"[object Generator]"}),(ns=function(){return{w:s,m:h}})()}function pt(e,t,n,r){var i=Object.defineProperty;try{i({},"",{})}catch{i=0}pt=function(a,o,l,u){function d(f,h){pt(a,f,function(v){return this._invoke(f,h,v)})}o?i?i(a,o,{value:l,enumerable:!u,configurable:!u,writable:!u}):a[o]=l:(d("next",0),d("throw",1),d("return",2))},pt(e,t,n,r)}function C0(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Sc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?C0(Object(n),!0).forEach(function(r){rt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C0(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T0(e,t,n,r,i,s,a){try{var o=e[s](a),l=o.value}catch(u){return void n(u)}o.done?t(l):Promise.resolve(l).then(r,i)}function P0(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var s=e.apply(t,n);function a(l){T0(s,r,i,a,o,"next",l)}function o(l){T0(s,r,i,a,o,"throw",l)}a(void 0)})}}function ok(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lk(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,$2(r.key),r)}}function ck(e,t,n){return t&&lk(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function uk(e,t,n){return t=Wo(t),dk(e,z2()?Reflect.construct(t,n||[],Wo(e).constructor):t.apply(e,n))}function dk(e,t){if(t&&(Ai(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return fk(e)}function fk(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function z2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(z2=function(){return!!e})()}function Wo(e){return Wo=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},Wo(e)}function hk(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&td(e,t)}function td(e,t){return td=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},td(e,t)}function rt(e,t,n){return(t=$2(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $2(e){var t=pk(e,"string");return Ai(t)=="symbol"?t:t+""}function pk(e,t){if(Ai(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ai(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function mk(e,t){!e||!window.__WUJIE_QUEUE||window.__WUJIE_QUEUE[e]===t&&delete window.__WUJIE_QUEUE[e]}var Or=function(e){function t(){var n;ok(this,t);for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return n=uk(this,t,[].concat(i)),rt(n,"state",{myRef:Ia.createRef()}),rt(n,"destroy",null),rt(n,"isUnmounted",!1),rt(n,"startAppQueue",Promise.resolve()),rt(n,"startApp",P0(ns().m(function a(){var o,l,u;return ns().w(function(d){for(;;)switch(d.p=d.n){case 0:if(!n.isUnmounted){d.n=1;break}return d.a(2);case 1:return d.p=1,o=n.props,l=n.state.myRef.current,d.n=2,H2(Sc(Sc({},o),{},{el:l}));case 2:n.destroy=d.v,n.isUnmounted&&typeof n.destroy=="function"&&n.destroy(),d.n=4;break;case 3:d.p=3,u=d.v,console.log(u);case 4:return d.a(2)}},a,null,[[1,3]])}))),rt(n,"execStartApp",function(){n.isUnmounted||(n.startAppQueue=n.startAppQueue.then(n.startApp),n.props.name&&window.__WUJIE_QUEUE&&(window.__WUJIE_QUEUE[n.props.name]=n.startAppQueue))}),rt(n,"refresh",P0(ns().m(function a(){return ns().w(function(o){for(;;)switch(o.n){case 0:if(!n.isUnmounted){o.n=1;break}return o.a(2);case 1:return o.n=2,Gf(n.props.name);case 2:return n.execStartApp(),o.a(2,n.startAppQueue)}},a)}))),n}return hk(t,e),ck(t,[{key:"componentDidMount",value:function(){this.props.name&&(window.__WUJIE_QUEUE?window.__WUJIE_QUEUE[this.props.name]?this.startAppQueue=window.__WUJIE_QUEUE[this.props.name]:window.__WUJIE_QUEUE[this.props.name]=this.startAppQueue:window.__WUJIE_QUEUE=rt({},this.props.name,this.startAppQueue)),this.execStartApp()}},{key:"componentDidUpdate",value:function(r){(this.props.name!==r.name||this.props.url!==r.url)&&this.execStartApp()}},{key:"componentWillUnmount",value:function(){this.isUnmounted=!0,mk(this.props.name,this.startAppQueue)}},{key:"render",value:function(){var r=this.props,i=r.width,s=r.height,a=r.style,o=this.state.myRef;return Ia.createElement("div",{style:Sc({width:i,height:s},a),ref:o})}}])}(Ia.PureComponent);rt(Or,"propTypes",gk);rt(Or,"bus",rk);rt(Or,"setupApp",ik);rt(Or,"preloadApp",sk);rt(Or,"destroyApp",Gf);rt(Or,"refreshApp",ak);var gk={height:le.string,width:le.string,name:le.string,loading:le.element,url:le.string,alive:le.bool,fetch:le.func,props:le.object,attrs:le.object,replace:le.func,sync:le.bool,prefix:le.object,fiber:le.bool,degrade:le.bool,plugins:le.array,beforeLoad:le.func,beforeMount:le.func,afterMount:le.func,beforeUnmount:le.func,afterUnmount:le.func,activated:le.func,deactivated:le.func,loadError:le.func,style:le.object,iframeAddEventListeners:le.arrayOf(le.string),iframeOnEvents:le.arrayOf(le.string)};const ce=typeof location<"u"?new URL("apps/",location.origin+location.pathname).href:"/apps/",J2=[{id:"vanilla",label:"原生",en:"Vanilla",hint:"不借框架，直接用浏览器 API：Canvas、CSS、DOM、Web Audio"},{id:"three",label:"3D 图形",en:"Three · WebGL · Cesium",hint:"三角面、着色器、地球、数字孪生大屏"},{id:"react",label:"React",en:"React",hint:"React 生态，含与 Vue 双实现的对照实验"},{id:"vue",label:"Vue",en:"Vue",hint:"Vue 3 组合式 API 相关实验"},{id:"next",label:"Next.js",en:"Next.js",hint:"App Router、RSC、SSG/ISR 相关"},{id:"nuxt",label:"Nuxt",en:"Nuxt",hint:"Nuxt 3 服务端渲染与自动导入"},{id:"node",label:"Node 服务端",en:"NestJS · Egg",hint:"NestJS、Egg 等 Node 框架的服务端能力"},{id:"python",label:"Python",en:"Python · Flask",hint:"Flask / FastAPI 等 Python 服务与算法"},{id:"fullstack",label:"全栈",en:"Fullstack · 前后端一体",hint:"前端页面 + 服务端一起做的完整应用：自带接口、数据、构建产物，整体作为一个子应用接入。前后端不拆成两条目录，也不归到语言栈里"}],q2={demo:{name:"demo-stars",title:"示例子应用 · 星尘",stack:"vanilla",tags:["Canvas","微前端管道"],url:`${ce}demo/index.html`,desc:"纯静态子应用，验证微前端管道。以后每个演示/产品都这样单独接入。"},css:{name:"css-lab",title:"CSS 动画实验室",stack:"vanilla",tags:["CSS","动画"],url:`${ce}css/index.html`,desc:"六个纯 CSS 动画实验：填充模式、缓动曲线、逐字浮现、骨架屏、光晕交互、滚动驱动。中文技术笔记的配套 demo，可重播、附代码。"},js:{name:"js-lab",title:"原生 JS 实验室",stack:"vanilla",tags:["DOM API","View Transitions"],url:`${ce}js/index.html`,desc:"四个很多人以为要装库的浏览器能力：Custom Highlight 不插标签高亮文本、@property 让 CSS 变量能被过渡、View Transitions 状态切换自带补间、60 行迷你动画库链式调用。"},canvas:{name:"canvas-lab",title:"Canvas 实验室",stack:"vanilla",tags:["Canvas 2D","粒子"],url:`${ce}canvas/index.html`,desc:"《Canvas 背景特效》三章完整落地：随机粒子骨架、鼠标距离场互动（排斥/聚拢 + 阈值连线），以及封装成带 DPR 适配、降帧、页面隐藏自动暂停的 ParticleField 类。"},widgets:{name:"widgets-lab",title:"组件交互实验室",stack:"vanilla",tags:["MutationObserver","Web Audio"],url:`${ce}widgets/index.html`,desc:"掘金《React 通关秘籍》组件实战与原理篇的 vanilla 配套，十五个按「组件 / 交互 / 动效 / 工程」分组的交互机制：组件组有防删除水印（canvas + MutationObserver 守卫）、五种 Observer、HSV 取色器、漫游引导、Web Audio 钢琴、Message 提示队列（promise 化 API 排队）、智能定位 Popover（剩余空间翻转）；交互组有拖拽上传（drop 区 + FileReader 预览）、拖拽排序（占位虚框 + FLIP 让位）、懒加载骨架屏（rootMargin 预加载距离）；动效组有无库手写弹簧（半隐式欧拉 + 速度曲线）；工程组有 15 行手写 Zustand、keepalive 页签缓存（display:none 对照销毁重建）、SVG 贝塞尔流程图连线、schema 驱动的表单校验引擎。无 React 无依赖，把框架和组件库帮你做的事拆开看。"},three:{name:"three-lab",title:"Three.js 实验室",stack:"three",tags:["Three.js","GLSL","后处理"],url:`${ce}three/index.html`,desc:"十九个能独立跑的 Three.js 实战：噪声地形、隧道循环、雨雪粒子、3D 饼图、打碎重组、精灵标注、镜面反射、描边发光、模型编辑器，加视锥剔除、WebGPU、HDR 环境光、物理引擎等进阶面板。零构建、运行时本地化，每个都拆开讲原理。"},webgl:{name:"webgl-lab",title:"WebGL 原生实验室",stack:"three",tags:["WebGL","GLSL","MVP"],url:`${ce}webgl/index.html`,desc:"不用 three，直接摸 WebGL 最底下那层：fragment shader 做的魔法火焰（噪声滚动 + 颜色梯度，速度/湍流/蓝焰可调），和手写顶点、手写 MVP 矩阵画出的立方体、球体、椎体。"},cesium:{name:"cesium-lab",title:"Cesium 三维地球实验室",stack:"three",isolate:!0,tags:["Cesium","3D Tiles","坐标"],url:`${ce}cesium/index.html`,desc:"Cesium 资料库的配套 demo：坐标转换、标绘、测地线量算、3D Tiles 解剖、天空盒、动态特效，最后一个接真 Cesium 地球。前六个零依赖，原理可验。"},dc:{name:"dc-dashboard",title:"三维机房监控大屏",stack:"three",tags:["Three.js","数字孪生","大屏"],big:!0,url:`${ce}dc/index.html`,desc:"动环监控数字孪生大屏：设备表驱动的实例化机柜阵列（60 台一次 draw call）、告警 emissive 脉冲与数据解耦、点击下钻、分区筛选、1920 基线 scale 适配含鼠标反算，外加冷通道气流粒子与 Canvas 2D 趋势图。"},wms:{name:"wms-twin",title:"智能仓储数字孪生",stack:"three",tags:["Three.js","实例化","AGV"],big:!0,url:`${ce}wms/index.html`,desc:"参数化货架 + AGV 搬运：一份数据表生成 4 排双面货架 240 货位（全实例化），AGV 沿 CatmullRom 闭环按弧长巡航、切线朝向，取货/搬运/卸货状态机驱动货箱动画，点击货位查 SKU 并派车。"},bits:{name:"bits-lab",title:"Bits 效果实验室",stack:"react",tags:["React","Vue 双实现","文字动效"],url:`${ce}bits/index.html`,desc:"React Bits / Vue Bits 的 8 个精选效果：解密文字、逐词浮现、逐字入场、流光文字、星流边框、眩光悬停、数字滚动、磁力线阵。每个效果 React 与 Vue 双实现，可切换对比。"},ssr:{name:"ssr-lab",title:"SSR 解剖台 · NestJS + React 同构",stack:"fullstack",needsService:!0,tags:["NestJS","SSR","hydration"],url:`${ce}ssr/index.html`,desc:"真搭的 NestJS + React SSR 骨架的解剖面板：拦截器四段 map（样式→脚本→SEO→renderToString）的流水线可视化、左源码右真 hydrate 的双栏对照、「关 JS / 不转义」开关直出 SEO 价值与 <\/script> 截断现场。数据全部来自真实运行的服务端。"},yolo:{name:"yolo-lab",title:"目标检测训练平台 · 解剖台",stack:"fullstack",needsService:!0,service:{dir:"services/yolo-train-lab",cmd:"python app.py",port:5001},tags:["Flask","目标检测","训练"],big:!0,url:`${ce}yolo/index.html`,desc:"一个真能跑的目标检测训练平台：画框标注、数据集划分、真训练、导出 YOLO 格式与 ONNX，每一步都可交互。前后端一体，面板由 Flask 服务托起，接口返回的都是真训练结果，不是截图。"},typewriter:{name:"typewriter-lab",title:"打字机效果实验室",stack:"vanilla",tags:["打字机","SSE","队列消费"],url:`${ce}typewriter/index.html`,desc:"ChatGPT 打字机效果的三种实现对照：逐字异步、匀速队列消费、SSE 流式输出。核心是「队列消费 + 固定频率输出 + 停止时吐完队列」，解决网络抖动导致的忽快忽慢。"},articlelab:{name:"article-lab",title:"文章配套 Demo 合集",stack:"three",tags:["万向节锁","GLSL","Three.js","多屏同步"],url:`${ce}articlelab/index.html`,desc:'周四/周五那批文章里"有具体视觉效果"的四篇配套 demo：万向节锁（欧拉角旋转到 Y90° 看自由度丢失，对比四元数）、GLSL Shader 三件套（attribute/varying/uniform 实时演示）、流体光影 HeroSection（多光源+辉光+错峰换色）、多屏幕同步（setViewOffset 视口切分）。零依赖、离线可跑、可交互调参。'},debuglab:{name:"debug-lab",title:"前端排错实验室",stack:"vanilla",tags:["性能优化","卡顿排查","HTTP 劫持","Vite"],url:`${ce}debuglab/index.html`,desc:"三批排错文章的交互演练：1.7w 点位「同步遍历卡死 vs rAF 分片渲染」真跑对照（含页面心跳计数器）+ 网卡限速模拟；HTTP 明文注入脚本过程与 HTTPS/CSP/SRI 防护；vue3+vite+pnpm 两个高频报错（Dynamic require、router-view 顺序）修复对照。零依赖、离线可跑。"},flexlab:{name:"flex-lab",title:"大屏适配实验室 · lib-flexible",stack:"vanilla",tags:["lib-flexible","rem 适配","px2rem","大屏"],url:`${ce}flexlab/index.html`,desc:"把《lib-flexible适配大屏方案》的机制做成可交互演练：750 设计稿的 px→rem 换算、自动注入的 viewport 与 font-size、540 上限为什么让大屏元素缩水、px2rem-loader(2.x) 与 postcss-pxtorem(3.x) 配置对照，以及给行内样式兜底的 calculationRem 试算。纯静态、实时计算、离线可跑。"},gisfx:{name:"gisfx-lab",title:"GIS 大屏特效实验室",stack:"three",tags:["Cesium","数字孪生","数据可视化"],url:`${ce}gisfx/index.html`,desc:"把 Cesium 案例库与 CSDN GIS 专栏里反复出现的大屏高频特效用纯 Canvas 拆开跑一遍：雷达扫描、城市飞线、建筑泛光、粒子爆炸、风场流线、热力图，外加一张可开关图层的数字孪生合成大屏。零依赖、打开即看，附 Cesium 对应实现思路。"},bookmap:{name:"bookmap-lab",title:"旅德纪事 · 地点地图与人物关系网",stack:"vanilla",tags:["数据可视化","地图","关系网"],url:`${ce}bookmap/index.html`,desc:"《死亡也并非所向披靡》配套交互：把书里的地点钉在欧洲地图上，点地点看相关的人和事、点人看生平；另有可拖动的人物关系网视图。地图底图为高德，已内置 Key，开箱即用。"},library:{name:"library-lab",title:"吾界图书馆 · 推开一扇门",stack:"three",tags:["Three.js","3D 场景","飞书书单"],url:`${ce}library/index.html`,desc:"推门进入一座 3D 图书馆：539 本书来自飞书「书籍信息总览」Base，按文学/计算机/历史/社科人文/外语/科普/生活/其他 8 大区陈列在书架上。可旋转漫游、点书脊看书名作者评分与状态、一键跳到飞书记录，底部按类别快速定位。"},history:{name:"history-lab",title:"历史长河 · 中国王朝与世界文明",stack:"vanilla",tags:["数据可视化","历史","时间轴"],url:`${ce}history/index.html`,desc:"一条黄色粒子汇成的横向时间长河：上方中国王朝（含全量帝王世系，并存朝代分上下层），下方希腊、埃及、罗马、俄罗斯、日本、伊朗、印度、美国八大文明时间条，河面漂浮可点的人物气泡。点气泡平滑聚焦其生卒年区间，生平可自行补充并本机保存。"},ftue:{name:"ftue-lab",title:"FTUE 新手引导设计实验室",stack:"vanilla",tags:["游戏设计","交互","FTUE"],url:`${ce}ftue/index.html`,desc:"游戏葡萄《前5分钟都留不住玩家》配套交互：填鸭红点引导 vs 电影式代入引导的可播放对照（含留存曲线）、FTUE 三要素 9 项自检打分、设计 4 步曲、学习留存率金字塔、斯金纳激励四象限与两种条件反射。零依赖、离线可跑。"},digitalhuman:{name:"digitalhuman-lab",title:"数字人实验室 · 会说话的卡通角色",stack:"three",tags:["数字人","Three.js","VRM"],url:`${ce}digitalhuman/index.html?v=2`,desc:"数字人最小可跑版：轻量卡通角色（零下载秒开，也可加载自制 VRM）+ 浏览器内置语音，输入文字就会开口说话（口型/眨眼/呼吸本地实时算，不上传数据）。拖拽旋转、滚轮缩放，可换音色/语速。3D 模型+骨骼动画路线第一步，下一步换云 TTS、再接大模型。"},twindemo:{name:"twin-lab",title:"数字孪生最小闭环 · 数据驱动",stack:"three",tags:["Three.js","数字孪生","Blender"],big:!0,url:`${ce}twindemo/index.html`,desc:"调研结论「实时数据→模型状态」的最小闭环：Blender 命令行造的工业风机 glb + Three.js 加载，模拟传感器每 500ms 推送转速/温度/振动 → 实时驱动叶片转速、机身青→黄→红变色发光、故障红灯脉冲。三种数据场景一键切换看模型响应。"},animlab:{name:"anim-lab",title:"前端动效实验室 · 42 篇全落地",stack:"vanilla",tags:["CSS 动画","Canvas","动效"],big:!0,url:`${ce}animlab/index.html`,desc:"掘金「前端动画/特效」收藏夹 42 篇全部落地：30+ 个可运行动效（丝滑 Tab、CSS 海浪/水波/星球环绕、@property 渐变、Apple Bubble UI、文字粒子/烟花、九宫格/大转盘抽奖、合成大西瓜、 Pixi 粒子、软渲染器等），按 CSS / Canvas / 游戏 / 动画库 / 框架 / 资源六大分类，原生零依赖、点开即玩，每篇附原文。"},webglshowcase:{name:"webgl-showcase",title:"WebGL 3D 精选实战合集",stack:"three",tags:["Three.js","GLSL","3D 场景"],big:!0,url:`${ce}webgl-showcase/index.html`,desc:"掘金「Three.js/Web3D 实战」+「Three.js 进阶 3D 页面」两收藏夹 39 篇，另加 3 个 AI Skill 复刻（MengTo/Skills）与两个建屋复刻，共 21 个可运行 3D 场景：赛博数字地球、穿越云层、3D 粒子成型、炫彩液晶球(Blob Shader)、火焰 Logo、Bloom 辉光、3D 数据地图、场景漫游、烟花绽放、卡车跑跑、太阳光阴影、Tween 编舞、下雨粒子、3D 登陆页背景、综合 3D 场景、文字粒子，以及折射液态玻璃面板、玻璃按钮按压波、百叶窗体积光书房、滚动建屋 Casa Serra、零件拼装建屋 Blueprint。共享渲染舞台、可拖拽旋转、参数实时可调，本地 three.js 零构建，每场景附原文。"},gamelab:{name:"game-lab",title:"Web 游戏实验室 · 掘金实战",stack:"vanilla",tags:["Canvas","小游戏","交互"],url:`${ce}game-lab/index.html`,desc:"掘金「Web 游戏开发」收藏夹 7 篇：5 个能玩的游戏（五子棋人机对战、2048、贪吃蛇、打砖块、心灵预测魔术）+ 3 个展示卡片（Dice Crush 48h 赛事作品、3D 火车、2D 游戏化互动入门）。原生实现零依赖，方向键/鼠标即玩，每篇附原文。"},cssarts:{name:"css-arts",title:"CSS 创意工坊 · 48 篇全落地",stack:"vanilla",tags:["CSS","动效","掘金收藏"],big:!0,url:`${ce}css-arts/index.html`,desc:"掘金「CSS」收藏夹 48 篇全部落地：32 个可运行效果（赛博朋克、霓虹灯、流光/倒影按钮、Flex 色子、conic 饼图、优惠券、CSS 3D 天空盒、转场动画、蜻蜓点水、波浪、运动路径、文字动画、回城法阵、水滴、水波纹、clamp、mask 渐变图标、贝塞尔可视化等）+ 4 个资源清单卡片，按视觉/布局/动效/技巧/资源五类。原生零依赖、点开即看，每篇附原文。"}},zs=Object.entries(q2).map(([e,t])=>({id:e,...t})),vk=Object.fromEntries(J2.map(e=>[e.id,e]));function yk(e){return e==="all"?zs:zs.filter(t=>t.stack===e)}function bk(){const e={};for(const t of zs)e[t.stack]=(e[t.stack]||0)+1;return e}function xk(e){return q2[e]||null}function jk(){const{id:e}=Qx(),t=Ys(),n=xk(e),r=w.useRef(null),[i,s]=w.useState(!1);w.useEffect(()=>{const o=()=>s(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",o),()=>document.removeEventListener("fullscreenchange",o)},[]);const a=()=>{var o,l;r.current&&(document.fullscreenElement?document.exitFullscreen():(l=(o=r.current).requestFullscreen)==null||l.call(o))};return n?c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",style:{marginBottom:16,display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:16},children:[c.jsxs("div",{style:{minWidth:0},children:[c.jsx("span",{className:"page-kicker",children:"MICRO APP"}),c.jsx("h1",{className:"page-title",style:{fontSize:"1.5rem"},children:n.title}),c.jsx("p",{className:"page-desc",children:n.desc})]}),c.jsxs("div",{style:{flex:"none",display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8},children:[c.jsx(Zt,{className:"btn btn-sm",to:"/portfolio",children:"← 返回作品集"}),c.jsx("div",{style:{display:"flex",gap:8},children:(n.big||n.isolate)&&c.jsxs(c.Fragment,{children:[c.jsx("button",{className:"btn btn-sm",onClick:a,children:i?"✕ 退出全屏":"⛶ 全屏观看"}),c.jsx("button",{className:"btn btn-sm",onClick:()=>window.open(n.url,"_blank","noopener"),children:"↗ 新窗口打开"})]})}),c.jsx("span",{className:"badge",children:n.isolate?"独立文档 · iframe 接入":n.needsService?"前后端一体 · 需本机服务":"子应用独立部署 · wujie 接入"})]})]}),n.needsService&&c.jsxs("div",{className:"svc-note",children:[c.jsx("span",{children:"全栈子应用 · 前后端一起部署"}),n.service?c.jsxs(c.Fragment,{children:[c.jsx("span",{children:"启动服务："}),c.jsxs("code",{children:["cd ",n.service.dir," && ",n.service.cmd]}),c.jsxs("span",{children:["→ 127.0.0.1:",n.service.port]})]}):c.jsx("span",{children:"面板数据来自真实服务端，服务没起时只能看静态快照"})]}),c.jsx("div",{ref:r,className:`panel wujie-stage ${n.big?"stage-big":""}`,style:{padding:0,borderRadius:"var(--radius)",overflow:"hidden"},children:n.isolate?c.jsx("iframe",{title:n.title,src:n.url,className:"stage-iframe",style:{minHeight:n.big?"60vh":"78vh"},allow:"fullscreen; webgl; xr-spatial-tracking"}):c.jsx(Or,{width:"100%",name:n.name,url:n.url,sync:!1,style:{width:"100%",height:"100%",minHeight:n.big?"60vh":"72vh"},props:{onBack:()=>t("/portfolio"),go:o=>t(o)}})})]}):c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"empty",style:{padding:60},children:[c.jsx("div",{className:"empty-icon",children:"🛰"}),c.jsx("div",{className:"empty-title",children:"没有接进来这个应用"}),c.jsx("div",{children:"去 src/data/apps.js 里注册它"})]}),c.jsx("div",{style:{textAlign:"center",marginTop:20},children:c.jsx(Zt,{className:"btn btn-sm",to:"/portfolio",children:"← 回作品页"})})]})}const A0={vanilla:"#fbbf24",three:"#22d3ee",react:"#61dafb",vue:"#3fb984",next:"#e5e7eb",nuxt:"#00dc82",node:"#5fa04e",python:"#ffd343",fullstack:"#c084fc"};function wk(){const[e,t]=w.useState("all"),n=w.useMemo(()=>bk(),[]),r=w.useMemo(()=>J2.filter(s=>n[s.id]>0),[n]),i=e==="all"?r:r.filter(s=>s.id===e);return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"LABS"}),c.jsx("h1",{className:"page-title",children:"实验室"}),c.jsxs("p",{className:"page-desc",children:[zs.length," 个子应用，按技术栈分。每个都是独立开发、独立构建、单独接入主站的， 打开即跑，不依赖主站的状态。"]})]}),c.jsxs("div",{className:"chip-row",role:"tablist","aria-label":"技术栈筛选",children:[c.jsxs("button",{role:"tab","aria-selected":e==="all",className:`chip ${e==="all"?"active":""}`,onClick:()=>t("all"),title:"按栈分组全部展开",children:[c.jsx("span",{className:"chip-dot"}),"全部",c.jsx("span",{className:"chip-count",children:zs.length})]}),r.map(s=>c.jsxs("button",{role:"tab","aria-selected":e===s.id,className:`chip ${e===s.id?"active":""}`,onClick:()=>t(s.id),title:s.hint,children:[c.jsx("span",{className:"chip-dot",style:{background:A0[s.id]}}),s.label,c.jsx("span",{className:"chip-count",children:n[s.id]})]},s.id))]}),c.jsx(Xn,{mode:"wait",children:c.jsxs(he.div,{initial:{opacity:0,y:14},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.26},children:[i.map(s=>{const a=yk(s.id),o=A0[s.id];return c.jsxs("section",{className:"stack-group",children:[c.jsxs("div",{className:"stack-group-head",children:[c.jsx("span",{className:"stack-group-dot",style:{background:o,boxShadow:`0 0 14px ${o}`}}),c.jsx("h2",{className:"stack-group-title",children:s.label}),c.jsx("span",{className:"stack-group-en",children:s.en}),c.jsx("span",{className:"stack-group-count",children:a.length})]}),c.jsx("p",{className:"stack-group-hint",children:s.hint}),c.jsx(Pr,{className:"grid-3",children:a.map(l=>{var u;return c.jsx(Ar,{children:c.jsxs(Zt,{className:"card app-card",to:`/apps/${l.id}`,style:{"--accent":o},children:[c.jsxs("div",{className:"app-card-top",children:[c.jsx("span",{className:"app-card-stack",style:{color:o,borderColor:`${o}55`,background:`${o}10`},children:((u=vk[l.stack])==null?void 0:u.label)||l.stack}),c.jsxs("span",{style:{display:"flex",gap:6},children:[l.needsService&&c.jsx("span",{className:"badge badge-svc",children:"含服务端"}),l.big&&c.jsx("span",{className:"badge badge-magenta",children:"大屏"})]})]}),c.jsx("div",{className:"card-title",children:l.title}),c.jsx("div",{className:"card-text",children:l.desc}),c.jsx("div",{className:"work-meta",children:l.tags.map(d=>c.jsx("span",{className:"badge",children:d},d))}),c.jsx("span",{className:"app-card-go",style:{color:o},children:"打开 →"})]})},l.id)})})]},s.id)}),i.length===0&&c.jsxs("div",{className:"empty",children:[c.jsx("div",{className:"empty-icon",children:"🛰"}),c.jsx("div",{className:"empty-title",children:"这个栈还没有子应用"}),c.jsx("div",{children:"去 src/data/apps.js 里加一条，指定 stack"})]})]},e)})]})}const Sk=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,kk=`
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uFlow;
uniform float uScale;
uniform float uWarp;
uniform float uGlow;
uniform vec3 uC1;
uniform vec3 uC2;
uniform vec3 uC3;

float hash(vec2 p) {
  p = fract(p * vec2(234.34, 435.345));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.55;
  mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p = rot * p * 2.02;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = (gl_FragCoord.xy * 2.0 - uRes) / min(uRes.x, uRes.y);
  uv += uMouse * 0.05;
  float t = uTime * uFlow;

  vec2 p = uv * uScale;
  float q = fbm(p + vec2(0.0, t * 0.14));
  float r = fbm(p + uWarp * vec2(q + t * 0.08, q - t * 0.1) + vec2(1.7, 9.2));
  float m = fbm(p * 1.6 - vec2(t * 0.05, 0.0));

  // 深空底色 → 紫云 → 青色光带 → 品红高光
  // （fbm 5 octave 的输出集中在 0.45~0.75，阈值要贴着这个区间定）
  vec3 col = vec3(0.012, 0.02, 0.045);
  col = mix(col, uC2 * 0.36, smoothstep(0.32, 0.8, r));
  col = mix(col, uC1 * 0.38, smoothstep(0.42, 0.82, q) * (1.0 - m * 0.75));
  col = mix(col, uC3 * 0.46, smoothstep(0.5, 0.88, r * q * 1.35));

  // 暗尘埃带，让云有层次而不是一团糊
  col *= 0.72 + 0.55 * m;
  // 左上一束冷光，呼应品牌字位置
  col += uC1 * 0.08 * (1.0 - length(uv * 0.7 + vec2(0.3, 0.4)));

  // 暗角 + 总亮度
  float vig = 1.0 - dot(uv * 0.6, uv * 0.6);
  col *= clamp(vig, 0.0, 1.0) * uGlow;

  // 抖动去色带（暗部渐变最容易 banding）
  col += (hash(gl_FragCoord.xy) - 0.5) / 255.0;

  gl_FragColor = vec4(col, 1.0);
}
`,hr=[{name:"默认 · 霓虹深空",flow:1,scale:1.35,warp:1.6,glow:1},{name:"静水 · 慢涌",flow:.5,scale:.9,warp:2.2,glow:.9},{name:"风暴 · 碎云",flow:1.8,scale:2,warp:2.8,glow:1.12},{name:"极简 · 远星",flow:.7,scale:.7,warp:1,glow:.78}],kc={c1:[.13,.83,.93],c2:[.55,.36,.96],c3:[.91,.47,.98]};function Ek(){const e=new URLSearchParams(window.location.search),t=Math.min(Math.max(parseInt(e.get("nebula")??"0",10)||0,0),hr.length-1),n={...hr[t],preset:t};for(const r of["flow","scale","warp","glow"]){const i=parseFloat(e.get(r));Number.isFinite(i)&&(n[r]=i)}return{preset:n,tune:e.get("nebula-tune")==="1"}}function Ck(e,t,n){const r=document.createElement("div");r.className="nebula-tune",r.innerHTML=`
    <div class="nebula-tune-head">星云调参 · 预设 <b class="nebula-tune-pn"></b></div>
    <label>flow  <input type="range" min="0.1" max="3"   step="0.05" data-k="flow"></label>
    <label>scale <input type="range" min="0.4" max="3.5" step="0.05" data-k="scale"></label>
    <label>warp  <input type="range" min="0"   max="4"   step="0.1"  data-k="warp"></label>
    <label>glow  <input type="range" min="0.4" max="1.6" step="0.02" data-k="glow"></label>
    <div class="nebula-tune-btns">
      <button type="button" data-act="preset">换预设</button>
      <button type="button" data-act="copy">复制参数</button>
      <button type="button" data-act="hide">收起</button>
    </div>`;const i=r.querySelector(".nebula-tune-pn"),s=()=>{i.textContent=`${t.preset} ${hr[t.preset].name}`;for(const a of r.querySelectorAll("input"))a.value=t[a.dataset.k]};return r.addEventListener("input",a=>{var l,u;const o=(u=(l=a.target)==null?void 0:l.dataset)==null?void 0:u.k;o&&(t[o]=parseFloat(a.target.value),n())}),r.addEventListener("click",a=>{var l,u,d;const o=(u=(l=a.target)==null?void 0:l.dataset)==null?void 0:u.act;if(o==="preset")t.preset=(t.preset+1)%hr.length,Object.assign(t,hr[t.preset]),t.preset=hr.indexOf(hr[t.preset]),n(),s();else if(o==="copy"){const f=new URLSearchParams({nebula:t.preset,flow:t.flow,scale:t.scale,warp:t.warp,glow:t.glow,"nebula-tune":"1"});(d=navigator.clipboard)==null||d.writeText(`${location.origin}${location.pathname}?${f}`).catch(()=>{}),a.target.textContent="已复制",setTimeout(()=>{a.target.textContent="复制参数"},1200)}else o==="hide"&&r.classList.toggle("nebula-tune-hidden")}),s(),e.parentElement.appendChild(r),r}function Tk(e){const t=e.getContext("webgl",{antialias:!1,depth:!1,powerPreference:"low-power"})||e.getContext("experimental-webgl",{antialias:!1});if(!t)return!1;const n=(k,T)=>{const P=t.createShader(k);return t.shaderSource(P,T),t.compileShader(P),t.getShaderParameter(P,t.COMPILE_STATUS)?P:(console.error("[nebula]",t.getShaderInfoLog(P)),null)},r=n(t.VERTEX_SHADER,Sk),i=n(t.FRAGMENT_SHADER,kk);if(!r||!i)return!1;const s=t.createProgram();if(t.attachShader(s,r),t.attachShader(s,i),t.linkProgram(s),!t.getProgramParameter(s,t.LINK_STATUS))return console.error("[nebula]",t.getProgramInfoLog(s)),!1;t.useProgram(s);const a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW);const o=t.getAttribLocation(s,"aPos");t.enableVertexAttribArray(o),t.vertexAttribPointer(o,2,t.FLOAT,!1,0,0);const l={};for(const k of["uRes","uTime","uMouse","uFlow","uScale","uWarp","uGlow","uC1","uC2","uC3"])l[k]=t.getUniformLocation(s,k);t.uniform3fv(l.uC1,kc.c1),t.uniform3fv(l.uC2,kc.c2),t.uniform3fv(l.uC3,kc.c3);const{preset:u,tune:d}=Ek(),f={...u},h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v={x:0,y:0,tx:0,ty:0};let m=0,y=!1;const g=performance.now(),p=()=>{const k=Math.min(window.devicePixelRatio||1,1.5)*.75,T=Math.round(e.clientWidth*k),P=Math.round(e.clientHeight*k);T&&P&&(e.width!==T||e.height!==P)&&(e.width=T,e.height=P,t.viewport(0,0,T,P))},b=()=>{t.uniform2f(l.uRes,e.width,e.height),t.uniform1f(l.uTime,h?12:(performance.now()-g)/1e3),t.uniform2f(l.uMouse,v.x,v.y),t.uniform1f(l.uFlow,f.flow),t.uniform1f(l.uScale,f.scale),t.uniform1f(l.uWarp,f.warp),t.uniform1f(l.uGlow,f.glow),t.drawArrays(t.TRIANGLES,0,3)},x=()=>{y||(v.x+=(v.tx-v.x)*.04,v.y+=(v.ty-v.y)*.04,b(),m=requestAnimationFrame(x))},j=k=>{v.tx=k.clientX/window.innerWidth*2-1,v.ty=-(k.clientY/window.innerHeight*2-1)},S=()=>{y||(document.hidden?cancelAnimationFrame(m):h||(m=requestAnimationFrame(x)))};p(),b(),h||(m=requestAnimationFrame(x),window.addEventListener("pointermove",j,{passive:!0}),document.addEventListener("visibilitychange",S));const E="ResizeObserver"in window?new ResizeObserver(()=>{p(),b()}):null;E==null||E.observe(e);let C=null;return d&&(C=Ck(e,f,b)),()=>{var k;y=!0,cancelAnimationFrame(m),E==null||E.disconnect(),window.removeEventListener("pointermove",j),document.removeEventListener("visibilitychange",S),C==null||C.remove(),(k=t.getExtension("WEBGL_lose_context"))==null||k.loseContext()}}function Pk({onPass:e}){const[t,n]=w.useState(""),[r,i]=w.useState(""),[s,a]=w.useState(!1),[o,l]=w.useState(!1),[u,d]=w.useState(!1),f=w.useRef(null),h=w.useRef(null);w.useEffect(()=>{var y;(y=f.current)==null||y.focus()},[]),w.useEffect(()=>{const y=h.current&&Tk(h.current);return y&&d(!0),y||void 0},[]);const v=y=>{i(""),l(!0);const g=iw(y);window.setTimeout(()=>e(g),420)},m=y=>{y.preventDefault();const g=t.trim().toLowerCase();if(!g){i("密令不能为空");return}if(nw.some(p=>p.toLowerCase()===g)){v("invited");return}i("密令不对。想不起来就先走游客通道。"),a(!0),window.setTimeout(()=>a(!1),460)};return c.jsxs("div",{className:`gate ${o?"gate-leaving":""} ${u?"gate-nebula-on":""}`,children:[c.jsx("canvas",{ref:h,className:"gate-nebula","aria-hidden":"true"}),c.jsx("div",{className:"gate-stars","aria-hidden":"true"}),c.jsx("div",{className:"gate-aurora","aria-hidden":"true"}),c.jsxs("div",{className:"gate-inner",children:[c.jsxs("aside",{className:"gate-brand",children:[c.jsx("p",{className:"gate-brand-kicker",children:"NEBULA · FOLIO"}),c.jsx("h1",{className:"gate-brand-title",children:"吾界"}),c.jsx("p",{className:"gate-brand-en",children:"WUJIE / PRIVATE FOLIO"}),c.jsxs("p",{className:"gate-brand-sub",children:["吾乃一奈宝器——玲珑塔，请叫我玲珑或小塔。",c.jsx("br",{}),"这里放着作品、笔记，和几座还在跑的实验台。"]}),c.jsxs("ul",{className:"gate-brand-chips",children:[c.jsx("li",{children:"作品集"}),c.jsx("li",{children:"3D 实验室"}),c.jsx("li",{children:"技术笔记"}),c.jsx("li",{children:"星尘台"})]}),c.jsx("p",{className:"gate-brand-meta",children:"密令仅在本机校验 · 不会上传任何地方"})]}),c.jsxs("form",{className:`gate-card ${s?"gate-shake":""}`,onSubmit:m,children:[c.jsxs("svg",{className:"gate-tower",viewBox:"0 0 72 72","aria-hidden":"true",children:[c.jsx("defs",{children:c.jsxs("linearGradient",{id:"gTower",x1:"0",y1:"0",x2:"1",y2:"1",children:[c.jsx("stop",{offset:"0%",stopColor:"#22d3ee"}),c.jsx("stop",{offset:"55%",stopColor:"#8b5cf6"}),c.jsx("stop",{offset:"100%",stopColor:"#e879f9"})]})}),c.jsx("circle",{cx:"36",cy:"9.5",r:"3.2",fill:"url(#gTower)"}),c.jsx("path",{d:"M36 14v6",stroke:"url(#gTower)",strokeWidth:"1.6",strokeLinecap:"round"}),c.jsx("path",{d:"M27 26h18l-3.5-6h-11z"}),c.jsx("path",{d:"M24 38h24l-4-7H28z"}),c.jsx("path",{d:"M21 51h30l-4.5-8h-21z"}),c.jsx("path",{d:"M18 60h36"}),c.jsx("path",{d:"M30 51v9M42 51v9",opacity:"0.55"}),c.jsx("path",{d:"M32 26v5M40 26v5M30 38v5M42 38v5",opacity:"0.45"})]}),c.jsx("p",{className:"gate-kicker",children:"NEBULA · FOLIO"}),c.jsx("h1",{className:"gate-title",children:"欢迎来到吾界"}),c.jsx("p",{className:"gate-intro",children:"吾乃一奈宝器——玲珑塔，请叫我玲珑或小塔。"}),c.jsx("p",{className:"gate-card-head",children:"持邀请函者入内"}),c.jsx("label",{className:"gate-label",htmlFor:"gate-code",children:"邀请函密令"}),c.jsx("input",{id:"gate-code",ref:f,className:"gate-input",value:t,onChange:y=>{n(y.target.value),r&&i("")},placeholder:"请输入邀请函密令",autoComplete:"off",spellCheck:!1}),c.jsx("p",{className:`gate-err ${r?"show":""}`,children:r||" "}),c.jsx("button",{type:"submit",className:"gate-btn gate-btn-primary",children:"拜访"}),c.jsx("button",{type:"button",className:"gate-btn gate-btn-ghost",onClick:()=>v("guest"),children:"游客模式"}),c.jsx("p",{className:"gate-hint",children:"密令仅在本机校验 · 游客可浏览公开内容"})]})]})]})}function Ak(){const[e]=ol(),t=Ys(),n=e.get("title")||"这个栏目";return c.jsxs("div",{className:"page container",children:[c.jsxs("div",{className:"page-head",children:[c.jsx("span",{className:"page-kicker",children:"COMING SOON"}),c.jsx("h1",{className:"page-title",children:n}),c.jsx("p",{className:"page-desc",children:"这个栏目已经在导航里占好位置，内容还在整理中。先把骨架搭着，学会了再往里填。"})]}),c.jsxs(he.div,{className:"card planned-card",initial:{opacity:0,y:18},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.22,1,.36,1]},children:[c.jsx("div",{className:"planned-orb"}),c.jsx("span",{className:"badge badge-violet",children:"规划中"}),c.jsx("h2",{children:n}),c.jsx("p",{children:"对应「吾界」旧站菜单里的分类，结构先迁过来，内容等你填。 读过的书、学过的知识点，成熟一篇就补一篇进来。"}),c.jsx("button",{className:"btn",onClick:()=>t(-1),children:"← 返回上一页"})]})]})}function Nk(){const e=Pn(),[t,n]=w.useState("full"),[r,i]=w.useState(()=>rw());return w.useEffect(()=>{n(lw()),window.scrollTo(0,0)},[e.pathname]),r?c.jsxs(c.Fragment,{children:[c.jsx(tw,{}),c.jsx(Xn,{mode:"wait",children:c.jsx(ow,{children:c.jsxs(f3,{location:e,children:[c.jsx(lt,{path:"/",element:c.jsx(Cm,{perfMode:t})}),c.jsx(lt,{path:"/portfolio",element:c.jsx(Uw,{})}),c.jsx(lt,{path:"/resume",element:c.jsx(zw,{})}),c.jsx(lt,{path:"/knowledge",element:c.jsx(Jw,{})}),c.jsx(lt,{path:"/links",element:c.jsx(Qw,{})}),c.jsx(lt,{path:"/graph",element:c.jsx(r8,{})}),c.jsx(lt,{path:"/workspace",element:c.jsx(u3,{to:"/studio",replace:!0})}),c.jsx(lt,{path:"/studio",element:c.jsx(b8,{})}),c.jsx(lt,{path:"/apps",element:c.jsx(wk,{})}),c.jsx(lt,{path:"/apps/:id",element:c.jsx(jk,{})}),c.jsx(lt,{path:"/garden",element:c.jsx(M8,{})}),c.jsx(lt,{path:"/planned",element:c.jsx(Ak,{})}),c.jsx(lt,{path:"*",element:c.jsx(Cm,{perfMode:t})})]})},e.pathname)}),c.jsx(aw,{}),c.jsx(uw,{mode:t})]}):c.jsx(Pk,{onPass:i})}Bg(document.getElementById("root")).render(c.jsx(j3,{children:c.jsx(Nk,{})}));export{lw as g};
