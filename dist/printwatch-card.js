/**
 * PrintWatch Card 1.0.10
 * Built: 2025-01-30T22:03:21.607Z
 */
function t(t,e,n){return e=r(e),function(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,o()?Reflect.construct(e,[],r(t).constructor):e.apply(t,n))}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,d(i.key),i)}}function n(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(){return i="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var i=function(t,e){for(;!{}.hasOwnProperty.call(t,e)&&null!==(t=r(t)););return t}(t,e);if(i){var o=Object.getOwnPropertyDescriptor(i,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},i.apply(null,arguments)}function r(t){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},r(t)}function o(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(o=function(){return!!t})()}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function l(t,e){return l=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},l(t,e)}function c(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function d(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e);if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t,"string");return"symbol"==typeof e?e:e+""}const u=window,p=u.ShadowRoot&&(void 0===u.ShadyCSS||u.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,h=Symbol(),v=new WeakMap;let _=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==h)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(p&&void 0===t){const n=void 0!==e&&1===e.length;n&&(t=v.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&v.set(e,t))}return t}toString(){return this.cssText}};const f=p?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new _("string"==typeof t?t:t+"",void 0,h))(e)})(t):t;var m;const y=window,g=y.trustedTypes,b=g?g.emptyScript:"",$=y.reactiveElementPolyfillSupport,x={toAttribute(t,e){switch(e){case Boolean:t=t?b:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},w=(t,e)=>e!==t&&(e==e||t==t),A={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:w},E="finalized";let S=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Ep(n,e);void 0!==i&&(this._$Ev.set(i,n),t.push(i))})),t}static createProperty(t,e=A){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||A}static finalize(){if(this.hasOwnProperty(E))return!1;this[E]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(f(t))}else void 0!==t&&e.push(f(t));return e}static _$Ep(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{p?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),i=u.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$EO(t,e,n=A){var i;const r=this.constructor._$Ep(t,n);if(void 0!==r&&!0===n.reflect){const o=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:x).toAttribute(e,n.type);this._$El=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var n;const i=this.constructor,r=i._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=i.getPropertyOptions(r),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(n=t.converter)||void 0===n?void 0:n.fromAttribute)?t.converter:x;this._$El=r,this[r]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||w)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var C;S[E]=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},null==$||$({ReactiveElement:S}),(null!==(m=y.reactiveElementVersions)&&void 0!==m?m:y.reactiveElementVersions=[]).push("1.6.3");const P=window,k=P.trustedTypes,O=k?k.createPolicy("lit-html",{createHTML:t=>t}):void 0,U="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,j="?"+T,R=`<${j}>`,N=document,z=()=>N.createComment(""),H=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,I="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,M=/-->/g,B=/>/g,F=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),q=/'/g,V=/"/g,W=/^(?:script|style|textarea|title)$/i,J=(t=>(e,...n)=>({_$litType$:t,strings:e,values:n}))(1),K=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),G=new WeakMap,Q=N.createTreeWalker(N,129,null,!1);function X(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==O?O.createHTML(e):e}const Y=(t,e)=>{const n=t.length-1,i=[];let r,o=2===e?"<svg>":"",s=L;for(let e=0;e<n;e++){const n=t[e];let a,l,c=-1,d=0;for(;d<n.length&&(s.lastIndex=d,l=s.exec(n),null!==l);)d=s.lastIndex,s===L?"!--"===l[1]?s=M:void 0!==l[1]?s=B:void 0!==l[2]?(W.test(l[2])&&(r=RegExp("</"+l[2],"g")),s=F):void 0!==l[3]&&(s=F):s===F?">"===l[0]?(s=null!=r?r:L,c=-1):void 0===l[1]?c=-2:(c=s.lastIndex-l[2].length,a=l[1],s=void 0===l[3]?F:'"'===l[3]?V:q):s===V||s===q?s=F:s===M||s===B?s=L:(s=F,r=void 0);const u=s===F&&t[e+1].startsWith("/>")?" ":"";o+=s===L?n+R:c>=0?(i.push(a),n.slice(0,c)+U+n.slice(c)+T+u):n+T+(-2===c?(i.push(void 0),e):u)}return[X(t,o+(t[n]||"<?>")+(2===e?"</svg>":"")),i]};class tt{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let r=0,o=0;const s=t.length-1,a=this.parts,[l,c]=Y(t,e);if(this.el=tt.createElement(l,n),Q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=Q.nextNode())&&a.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith(U)||e.startsWith(T)){const n=c[o++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+U).split(T),e=/([.?@])?(.*)/.exec(n);a.push({type:1,index:r,name:e[2],strings:t,ctor:"."===e[1]?ot:"?"===e[1]?at:"@"===e[1]?lt:rt})}else a.push({type:6,index:r})}for(const e of t)i.removeAttribute(e)}if(W.test(i.tagName)){const t=i.textContent.split(T),e=t.length-1;if(e>0){i.textContent=k?k.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],z()),Q.nextNode(),a.push({type:2,index:++r});i.append(t[e],z())}}}else if(8===i.nodeType)if(i.data===j)a.push({type:2,index:r});else{let t=-1;for(;-1!==(t=i.data.indexOf(T,t+1));)a.push({type:7,index:r}),t+=T.length-1}r++}}static createElement(t,e){const n=N.createElement("template");return n.innerHTML=t,n}}function et(t,e,n=t,i){var r,o,s,a;if(e===K)return e;let l=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const c=H(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,n,i)),void 0!==i?(null!==(s=(a=n)._$Co)&&void 0!==s?s:a._$Co=[])[i]=l:n._$Cl=l),void 0!==l&&(e=et(t,l._$AS(t,e.values),l,i)),e}class nt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:n},parts:i}=this._$AD,r=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:N).importNode(n,!0);Q.currentNode=r;let o=Q.nextNode(),s=0,a=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new it(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new ct(o,this,t)),this._$AV.push(e),l=i[++a]}s!==(null==l?void 0:l.index)&&(o=Q.nextNode(),s++)}return Q.currentNode=N,r}v(t){let e=0;for(const n of this._$AV)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class it{constructor(t,e,n,i){var r;this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cp=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=et(this,t,e),H(t)?t===Z||null==t||""===t?(this._$AH!==Z&&this._$AR(),this._$AH=Z):t!==this._$AH&&t!==K&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>D(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Z&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(N.createTextNode(t)),this._$AH=t}g(t){var e;const{values:n,_$litType$:i}=t,r="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=tt.createElement(X(i.h,i.h[0]),this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===r)this._$AH.v(n);else{const t=new nt(r,this),e=t.u(this.options);t.v(n),this.$(e),this._$AH=t}}_$AC(t){let e=G.get(t.strings);return void 0===e&&G.set(t.strings,e=new tt(t)),e}T(t){D(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const r of t)i===e.length?e.push(n=new it(this.k(z()),this.k(z()),this,this.options)):n=e[i],n._$AI(r),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class rt{constructor(t,e,n,i,r){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const r=this.strings;let o=!1;if(void 0===r)t=et(this,t,e,0),o=!H(t)||t!==this._$AH&&t!==K,o&&(this._$AH=t);else{const i=t;let s,a;for(t=r[0],s=0;s<r.length-1;s++)a=et(this,i[n+s],e,s),a===K&&(a=this._$AH[s]),o||(o=!H(a)||a!==this._$AH[s]),a===Z?t=Z:t!==Z&&(t+=(null!=a?a:"")+r[s+1]),this._$AH[s]=a}o&&!i&&this.j(t)}j(t){t===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ot extends rt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Z?void 0:t}}const st=k?k.emptyScript:"";class at extends rt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==Z?this.element.setAttribute(this.name,st):this.element.removeAttribute(this.name)}}class lt extends rt{constructor(t,e,n,i,r){super(t,e,n,i,r),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=et(this,t,e,0))&&void 0!==n?n:Z)===K)return;const i=this._$AH,r=t===Z&&i!==Z||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,o=t!==Z&&(i===Z||r);r&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class ct{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const dt=P.litHtmlPolyfillSupport;null==dt||dt(tt,it),(null!==(C=P.litHtmlVersions)&&void 0!==C?C:P.litHtmlVersions=[]).push("2.8.0");var ut,pt;class ht extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,n)=>{var i,r;const o=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let s=o._$litPart$;if(void 0===s){const t=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;o._$litPart$=s=new it(e.insertBefore(z(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return K}}ht.finalized=!0,ht._$litElement$=!0,null===(ut=globalThis.litElementHydrateSupport)||void 0===ut||ut.call(globalThis,{LitElement:ht});const vt=globalThis.litElementPolyfillSupport;var _t,ft,mt,yt,gt,bt,$t,xt;null==vt||vt({LitElement:ht}),(null!==(pt=globalThis.litElementVersions)&&void 0!==pt?pt:globalThis.litElementVersions=[]).push("3.3.3");var wt,At,Et=function(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return J(_t||(_t=c(['\n  <ha-dialog \n    id="','"\n    heading="','"\n  >\n    <div>\n      ','\n    </div>\n    <mwc-button \n      slot="primaryAction" \n      dialogAction="confirm"\n      style="','"\n    >\n      ','\n    </mwc-button>\n    <mwc-button \n      slot="secondaryAction" \n      dialogAction="cancel"\n    >\n      Cancel\n    </mwc-button>\n  </ha-dialog>\n'])),t,e,n,r,i)},St=((t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new _(n,t,h)})(wt||(wt=c(["\n  .card {\n    background: var(--ha-card-background, var(--card-background-color));\n    border-radius: var(--ha-card-border-radius, 12px);\n    padding: 16px;\n    font-family: var(--primary-font-family, -apple-system, BlinkMacSystemFont, sans-serif);\n    position: relative;\n    overflow: hidden;\n  }\n\n\n\n  /* Header styles */\n  .header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 16px;\n  }\n\n  .printer-name {\n    font-size: 24px;\n    font-weight: 500;\n    color: var(--primary-text-color);\n  }\n\n  .status {\n    color: var(--state-active-color);\n    font-size: 16px;\n    font-weight: 500;\n    text-transform: capitalize; \n  }\n\n  /* Control buttons */\n  .header-controls {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n  }\n\n  .icon-button {\n    background: none;\n    border: none;\n    padding: 8px;\n    border-radius: 50%;\n    cursor: pointer;\n    color: var(--secondary-text-color);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all 0.2s ease;\n  }\n\n  .icon-button:hover {\n    background: var(--secondary-background-color);\n  }\n\n  .icon-button.active {\n    color: var(--state-active-color);\n  }\n\n  .icon-button ha-icon {\n    width: 24px;\n    height: 24px;\n  }\n\n  /* Camera feed */\n    .camera-feed {\n    width: 100%;\n    aspect-ratio: 16 / 9;\n    border-radius: 12px;\n    margin-bottom: 16px;\n    position: relative;\n    background: var(--secondary-background-color);\n    overflow: hidden;\n  }\n\n  .offline-message {\n    width: 100%;\n    aspect-ratio: 16 / 9;\n    border-radius: 12px;\n    margin-bottom: 16px;\n    background: var(--secondary-background-color);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    color: var(--secondary-text-color);\n    gap: 8px;\n  }\n\n  .offline-message ha-icon {\n    --mdc-icon-size: 48px;\n    opacity: 0.5;\n  }\n\n  .camera-label {\n    position: absolute;\n    top: 4px;\n    left: 4px;\n    color: var(--secondary-text-color);\n    padding: 4px 8px;\n    border-radius: 12px;\n    font-size: 16px;\n    background-color: color-mix(in srgb, var(--card-background-color) 80%, transparent);\n    text-transform: capitalize; \n  }\n\n  /* Print status section */\n  .print-status {\n    background: var(--ha-card-background);\n    padding: 16px;\n    margin-bottom: 16px;\n  }\n\n  .not-printing {\n    background: var(--ha-card-background);\n    padding: 24px;\n    margin-bottom: 16px;\n    text-align: center;\n    border-radius: 8px;\n  }\n\n  .not-printing .message {\n    color: var(--secondary-text-color);\n    font-size: 16px;\n    font-weight: 500;\n  }\n\n  /* Print preview */\n  .print-preview {\n    display: flex;\n    gap: 16px;\n    align-items: center;\n  }\n\n  .print-details {\n    color: var(--primary-text-color);\n    width: 100%\n  }\n\n  .print-details h3 {\n    margin: 0 0 8px 0;\n    font-size: 16px;\n    color: var(--primary-text-color);\n    overflow: new-line;\n  }\n\n  /* Time information */\n  .time-info {\n    display: flex;\n    justify-content: space-between;\n    margin: 4px 0;\n    color: var(--secondary-text-color);\n    font-size: 14px;\n  }\n\n  .time-info .remaining {\n    color: var(--primary-text-color);\n  }\n\n  .time-info .completion {\n    color: var(--secondary-text-color);\n  }\n\n  /* Progress bar */\n  .progress-bar {\n    height: 4px;\n    background: var(--secondary-background-color);\n    border-radius: 2px;\n    margin: 8px 0;\n  }\n\n  .progress-fill {\n    width: 0%;\n    height: 100%;\n    background: var(--state-active-color);\n    border-radius: 2px;\n    transition: width 0.3s;\n  }\n\n  /* Control buttons */\n  .controls {\n    display: flex;\n    gap: 8px;\n    margin-top: 8px;\n  }\n\n  .btn {\n    padding: 8px 24px;\n    border: none;\n    border-radius: 8px;\n    font-weight: 500;\n    font-size: 16px;\n    cursor: pointer;\n  }\n\n  .btn-pause {\n    background: var(--secondary-background-color);\n    color: var(--primary-text-color);\n  }\n\n  .btn-stop {\n    background: var(--error-color);\n    color: var(--text-primary-color);\n  }\n\n  /* Temperature section */\n  .temperatures {\n    display: flex;\n    justify-content: space-around;\n    width: 100%;\n    margin-bottom: 32px;\n    padding-bottom: 32px;\n    position: relative;\n  }\n\n  .temperatures::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 20%;\n    right: 20%;\n    height: 1px;\n    background-color: var(--divider-color);\n  }\n\n  .temp-item {\n    text-align: center;\n    color: var(--primary-text-color);\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .temp-value {\n    font-size: 32px;\n    font-weight: 500;\n    margin-bottom: 4px;\n  }\n\n  /* Materials section */\n  .materials {\n    display: flex;\n    justify-content: center;\n    width: calc(100% - 48px);\n    margin: 0 24px;\n    gap: 32px;\n    position: relative;\n  }\n\n  .material-slot {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 60px;\n    gap: 8px;\n    text-align: center;\n    position: relative;\n  }\n\n  .material-circle {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    border: 1px solid var(--divider-color);\n    position: relative;\n    transition: transform 0.3s ease;\n  }\n\n  .material-circle.active {\n    transform: scale(1.1);\n    box-shadow: 0 0 0 2px var(--primary-background-color),\n                0 0 0 4px var(--primary-color);\n  }\n\n  .material-type {\n    font-size: 12px;\n    color: var(--primary-text-color);\n    text-align: center;\n  }\n"]))),Ct=function(t){if(!t||t<=0)return"Complete";var e=Math.floor(t/60),n=t%60;return e>0?"".concat(e,"h ").concat(n,"m"):"".concat(n,"m")},Pt=function(t,e){if(!t||t<=0)return"---";var n=new Date(Date.now()+6e4*t),i=e.locale.hour_24?{hour:"2-digit",minute:"2-digit",hour12:!1}:{hour:"numeric",minute:"2-digit",hour12:!0};return new Intl.DateTimeFormat(e.locale.language,i).format(n).toLowerCase().replace(" ","")},kt=function(t,e){var n,i,r=null===(n=t.states[e.current_stage_entity])||void 0===n?void 0:n.state,o=null===(i=t.states[e.print_status_entity])||void 0===i?void 0:i.state;if(["printing","running","pause"].includes(o))return!0;if(["idle","offline","unknown"].includes(r))return!1;if("printing"===r||r.startsWith("paused_"))return!0;return["heatbed_preheating","heating_hotend","checking_extruder_temperature","auto_bed_leveling","scanning_bed_surface","inspecting_first_layer","calibrating_extrusion","calibrating_extrusion_flow"].includes(r)},Ot=function(t,e){var n;return"pause"===(null===(n=t.states[e.print_status_entity])||void 0===n?void 0:n.state)},Ut={printer_name:"My 3D Printer",print_status_entity:"sensor.p1s_print_status",current_stage_entity:"sensor.p1s_current_stage",task_name_entity:"sensor.p1s_task_name",progress_entity:"sensor.p1s_print_progress",current_layer_entity:"sensor.p1s_current_layer",total_layers_entity:"sensor.p1s_total_layer_count",remaining_time_entity:"sensor.p1s_remaining_time",bed_temp_entity:"sensor.p1s_bed_temperature",nozzle_temp_entity:"sensor.p1s_nozzle_temperature",speed_profile_entity:"sensor.p1s_speed_profile",active_tray_index_entity:"sensor.p1s_active_tray_index",ams_slot1_entity:"sensor.p1s_ams_tray_1",ams_slot2_entity:"sensor.p1s_ams_tray_2",ams_slot3_entity:"sensor.p1s_ams_tray_3",ams_slot4_entity:"sensor.p1s_ams_tray_4",camera_entity:"image.p1s_camera",cover_image_entity:"image.p1s_cover_image",pause_button_entity:"button.p1s_pause_printing",resume_button_entity:"button.p1s_resume_printing",stop_button_entity:"button.p1s_stop_printing",chamber_light_entity:"light.p1s_chamber_light",aux_fan_entity:"fan.p1s_aux_fan",online_entity:"binary_sensor.p1s_online"},Tt=function(){function n(){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),(e=t(this,n))._lastCameraUpdate=0,e._cameraUpdateInterval=1e3,e._cameraError=!1,e.formatters={formatDuration:Ct,formatEndTime:Pt},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),l(t,e)}(n,ht),function(t,n,i){return e(t.prototype,n),e(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}(n,[{key:"setConfig",value:function(t){if(!t.printer_name)throw new Error("Please define printer_name");this.config=a(a({},Ut),t),this._cameraUpdateInterval=t.camera_refresh_rate||1e3}},{key:"isOnline",value:function(){var t=this.hass.states[this.config.online_entity];return"on"===(null==t?void 0:t.state)}},{key:"shouldUpdateCamera",value:function(){return!!this.isOnline()&&Date.now()-this._lastCameraUpdate>this._cameraUpdateInterval}},{key:"handleImageError",value:function(){this._cameraError=!0,this.requestUpdate()}},{key:"handleImageLoad",value:function(){this._cameraError=!1}},{key:"updated",value:function(t){!function(t,e,n){var o=i(r(t.prototype),e,n);return"function"==typeof o?function(t){return o.apply(n,t)}:o}(n,"updated",this)([t]),t.has("hass")&&this.shouldUpdateCamera()&&this._updateCameraFeed()}},{key:"_updateCameraFeed",value:function(){var t,e;if(this.isOnline()){this._lastCameraUpdate=Date.now();var n=(new Date).getTime(),i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".camera-feed img");if(i){var r,o=this.hass.states[this.config.camera_entity];null!=o&&null!==(r=o.attributes)&&void 0!==r&&r.entity_picture&&(i.src="".concat(o.attributes.entity_picture,"&t=").concat(n))}var s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".preview-image img");if(s){var a,l=this.hass.states[this.config.cover_image_entity];null!=l&&null!==(a=l.attributes)&&void 0!==a&&a.entity_picture&&(s.src="".concat(l.attributes.entity_picture,"&t=").concat(n))}}}},{key:"_handlePauseDialog",value:function(t){"confirm"===t.detail.action&&this.hass.callService("button","press",{entity_id:this.config.pause_button_entity})}},{key:"_handleStopDialog",value:function(t){"confirm"===t.detail.action&&this.hass.callService("button","press",{entity_id:this.config.stop_button_entity})}},{key:"_toggleLight",value:function(){this.hass.callService("light","toggle",{entity_id:this.config.chamber_light_entity})}},{key:"_toggleFan",value:function(){this.hass.callService("fan","toggle",{entity_id:this.config.aux_fan_entity})}},{key:"firstUpdated",value:function(){var t,e,n,i,r=this,o=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#pauseDialog"),s=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#stopDialog");o&&o.addEventListener("closed",(function(t){return r._handlePauseDialog(t)})),s&&s.addEventListener("closed",(function(t){return r._handleStopDialog(t)}));var a=null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector(".btn-pause"),l=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(".btn-stop");a&&a.addEventListener("click",(function(){Ot(r.hass,r.config)?r.hass.callService("button","press",{entity_id:r.config.resume_button_entity}):null==o||o.show()})),l&&l.addEventListener("click",(function(){null==s||s.show()}))}},{key:"render",value:function(){var t=this;if(!this.hass||!this.config)return J(At||(At=c([""])));var e,n,i,r,o,s,a,l,d,u,p,h,v,_,f=(e=this.hass,{name:(n=this.config).printer_name||"Unnamed Printer",status:(null===(i=e.states[n.print_status_entity])||void 0===i?void 0:i.state)||"idle",currentStage:(null===(r=e.states[n.current_stage_entity])||void 0===r?void 0:r.state)||"unknown",taskName:(null===(o=e.states[n.task_name_entity])||void 0===o?void 0:o.state)||"No active print",progress:parseFloat((null===(s=e.states[n.progress_entity])||void 0===s?void 0:s.state)||"0"),currentLayer:parseInt((null===(a=e.states[n.current_layer_entity])||void 0===a?void 0:a.state)||"0"),totalLayers:parseInt((null===(l=e.states[n.total_layers_entity])||void 0===l?void 0:l.state)||"0"),remainingTime:parseInt((null===(d=e.states[n.remaining_time_entity])||void 0===d?void 0:d.state)||"0"),bedTemp:parseFloat((null===(u=e.states[n.bed_temp_entity])||void 0===u?void 0:u.state)||"0"),nozzleTemp:parseFloat((null===(p=e.states[n.nozzle_temp_entity])||void 0===p?void 0:p.state)||"0"),speedProfile:(null===(h=e.states[n.speed_profile_entity])||void 0===h||null===(h=h.attributes)||void 0===h?void 0:h.modifier)||100,externalSpoolType:(null===(v=e.states[n.external_spool_entity])||void 0===v?void 0:v.state)||"Unknown",externalSpoolColor:(null===(_=e.states[n.external_spool_entity])||void 0===_||null===(_=_.attributes)||void 0===_?void 0:_.color)||"#E0E0E0",isPrinting:kt(e,n),isPaused:Ot(e,n),chamber_light_entity:n.chamber_light_entity,aux_fan_entity:n.aux_fan_entity&&e.states[n.aux_fan_entity]?n.aux_fan_entity:null,camera_entity:n.camera_entity}),m=function(t,e){var n,i=[];if(e.ams_slot1_entity&&t.states[e.ams_slot1_entity]&&(null===(n=t.states[e.ams_slot1_entity].attributes)||void 0===n?void 0:n.type))[e.ams_slot1_entity,e.ams_slot2_entity,e.ams_slot3_entity,e.ams_slot4_entity].forEach((function(e){if(e&&t.states[e]){var n,r,o,s,a=t.states[e];i.push({type:a.state||"Empty",color:(null===(n=a.attributes)||void 0===n?void 0:n.color)||"#E0E0E0",empty:(null===(r=a.attributes)||void 0===r?void 0:r.empty)||!1,active:(null===(o=a.attributes)||void 0===o?void 0:o.active)||!1,name:(null===(s=a.attributes)||void 0===s?void 0:s.name)||"Unknown"})}}));else if(e.external_spool_entity&&t.states[e.external_spool_entity]){var r,o,s=t.states[e.external_spool_entity];"unknown"!==s.state&&(i=[{type:s.state,color:(null===(r=s.attributes)||void 0===r?void 0:r.color)||"#E0E0E0",empty:!1,name:(null===(o=s.attributes)||void 0===o?void 0:o.name)||"External Spool",active:null}])}return i}(this.hass,this.config);return function(t){var e,n,i,r=t.entities,o=t.hass,s=t.amsSlots,a=t.formatters;return s.find((function(t){return!0===t.active})),J(ft||(ft=c(["\n    ","\n\n    ",'\n\n    <div class="card">\n      <div class="header">\n        <div>\n          <div class="printer-name">','</div>\n          <div class="status">','</div>\n        </div>\n        <div class="header-controls">\n          <button \n            class="icon-button ','" \n            @click=','\n          >\n            <ha-icon icon="mdi:lightbulb"></ha-icon>\n          </button>\n          ',"\n        </div>\n      </div>\n      \n      ","\n      \n      ",'\n      \n      <div class="temperatures">\n        <div class="temp-item">\n          <div class="temp-value">','°</div>\n          <div>Bed</div>\n        </div>\n        <div class="temp-item">\n          <div class="temp-value">','°</div>\n          <div>Nozzle</div>\n        </div>\n        <div class="temp-item">\n          <div class="temp-value">','%</div>\n          <div>Speed</div>\n        </div>\n      </div>\n      \n      <div class="materials">\n        ',"\n      </div>\n    </div>\n  "])),Et("pauseDialog","Confirm Pause","Are you sure you want to pause the current print? This may affect print quality.","Confirm"),Et("stopDialog","Confirm Stop","Are you sure you want to stop the current print? This action cannot be undone.","Stop Print","color: rgb(229, 57, 53);"),r.name,r.status,"on"===(null===(e=o.states[r.chamber_light_entity])||void 0===e?void 0:e.state)?"active":"",t._toggleLight,r.aux_fan_entity?J(mt||(mt=c(['\n            <button \n              class="icon-button ','"\n              @click=','\n            >\n              <ha-icon icon="mdi:fan"></ha-icon>\n            </button>\n          '])),"on"===(null===(n=o.states[r.aux_fan_entity])||void 0===n?void 0:n.state)?"active":"",t._toggleFan):"",t.isOnline&&!t._cameraError?J(yt||(yt=c(['\n        <div class="camera-feed">\n          <div class="camera-label">','</div>\n          <img \n            src="','" \n            style="width: 100%; height: 100%; object-fit: cover; border-radius: 12px;"\n            alt="Camera Feed"\n            @error=',"\n            @load=","\n          />\n        </div>\n      "])),r.currentStage,(null===(i=o.states[r.camera_entity])||void 0===i||null===(i=i.attributes)||void 0===i?void 0:i.entity_picture)||"",t.handleImageError,t.handleImageLoad):J(gt||(gt=c(['\n        <div class="offline-message">\n          <ha-icon icon="mdi:printer-off"></ha-icon>\n          <span>',"</span>\n        </div>\n      "])),t.isOnline?"Camera unavailable":"Printer offline"),r.isPrinting?J(bt||(bt=c(['\n        <div class="print-status">\n          <div class="print-preview">\n            <div class="print-details">\n              <h3>',"</h3>\n              <div>Printed layers: ","/",'</div>\n              <div class="time-info">\n                <span class="remaining">\n                  Time left: ','\n                </span>\n                <span class="completion">\n                  Done at: ','\n                </span>\n              </div>\n              <div class="progress-bar">\n                <div class="progress-fill" style="width: ','%"></div>\n              </div>\n              <div class="controls">\n                <button \n                  class="btn btn-pause" \n                  data-action="','"\n                >\n                  ','\n                </button>\n                <button class="btn btn-stop">Stop</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      '])),r.taskName,r.currentLayer,r.totalLayers,a.formatDuration(r.remainingTime),a.formatEndTime(r.remainingTime,o),r.progress,r.isPaused?"resume":"pause",r.isPaused?"Resume":"Pause"):J($t||($t=c(['\n        <div class="not-printing">\n          <div class="message">Not currently printing</div>\n        </div>\n      ']))),r.bedTemp,r.nozzleTemp,r.speedProfile,s.map((function(t){return J(xt||(xt=c(['\n          <div class="material-slot">\n            <div \n              class="material-circle ','"\n              style="background-color: ','"\n            ></div>\n            <div class="material-type">',"</div>\n          </div>\n        "])),!0===t.active?"active":"",t.color||"#E0E0E0",t.type||"Empty")})))}({entities:f,hass:this.hass,amsSlots:m,formatters:this.formatters,_toggleLight:function(){return t._toggleLight()},_toggleFan:function(){return t._toggleFan()},_cameraError:this._cameraError,isOnline:this.isOnline(),handleImageError:function(){return t.handleImageError()},handleImageLoad:function(){return t.handleImageLoad()}})}},{key:"getCardSize",value:function(){return 6}}],[{key:"properties",get:function(){return{hass:{type:Object},config:{type:Object},_lastCameraUpdate:{type:Number},_cameraUpdateInterval:{type:Number},_cameraError:{type:Boolean}}}},{key:"styles",get:function(){return St}},{key:"getStubConfig",value:function(){return Ut}}])}();window.PRINTWATCH_VERSION="1.0.10",window.PRINTWATCH_BUILD_TIME=1738274601607,customElements.get("printwatch-card")||customElements.define("printwatch-card",Tt);export{Tt as PrintWatchCard};
//# sourceMappingURL=printwatch-card.js.map
