/*! For license information please see 9220.c1de1b4d.js.LICENSE.txt */
"use strict";(self.webpackChunkgamebox=self.webpackChunkgamebox||[]).push([[9220],{54558:function(e,n,t){t.d(n,{Ee:function(){return v.Z},Eq:function(){return $.Z},FN:function(){return C.Z},GD:function(){return h.Z},GI:function(){return y.Z},HY:function(){return s.Z},II:function(){return p.Z},IQ:function(){return a.Z},Kx:function(){return E.Z},Mt:function(){return c.Z},Od:function(){return w.Z},T:function(){return x.Z},Vq:function(){return l.Z},XZ:function(){return u.Z},Y8:function(){return g.Z},iV:function(){return i.ZP},k_:function(){return f.Z},l0:function(){return d.Z},l2:function(){return b.Z},mQ:function(){return O.Z},qE:function(){return r.Z},rj:function(){return m.Z},tq:function(){return S.Z},wW:function(){return Z.Z},zx:function(){return o.Z}});t(80100);var r=t(13774),o=t(16232),a=t(67316),u=t(26700),i=t(76128),c=t(62145),l=t(94686),f=t(96227),s=t(65691),d=t(35267),m=t(89881),v=t(34725),p=t(23015),b=t(77383),h=t(38198),y=t(25597),g=t(23659),$=t(36555),w=t(4289),x=t(51753),Z=t(87785),S=t(56974),O=t(83455),E=t(92774),C=t(47412)},25750:function(e,n,t){t.d(n,{u:function(){return o}});var r="${label} is not a valid ${type}",o={locale:"en",common:{confirm:"Confirm",cancel:"Cancel",loading:"Loading"},Calendar:{markItems:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],renderYearAndMonth:function(e,n){return"".concat(e,"/").concat(n)}},Cascader:{placeholder:"Selecting"},Dialog:{ok:"OK"},ErrorBlock:{default:{title:"Oops, something went wrong",description:"Please wait a minute and try again"},busy:{title:"Oops, not loading",description:"Try to refresh the page"},disconnected:{title:"Network is busy",description:"Try to refresh the page"},empty:{title:"Hmm, couldn't find that...",description:"Want to try a new search?"}},Form:{required:"Required",optional:"Optional",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:r,method:r,array:r,object:r,number:r,date:r,boolean:r,integer:r,float:r,regexp:r,email:r,url:r,hex:r},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},ImageUploader:{uploading:"Uploading...",upload:"Upload"},InfiniteScroll:{noMore:"No more",failedToLoad:"Failed to load",retry:"Retry"},Mask:{name:"Mask"},Modal:{ok:"OK"},PullToRefresh:{pulling:"Scroll down to refresh",canRelease:"Release to refresh immediately",complete:"Refresh successful"},Slider:{name:"Slider"},Stepper:{decrease:"decrease",increase:"increase"},Switch:{name:"Switch"}}},60512:function(e,n,t){var r=t(32895),o=t(25750),a="${label}\u4e0d\u662f\u4e00\u4e2a\u6709\u6548\u7684${type}",u=(0,r.i)(o.u,{locale:"zh-CH",common:{confirm:"\u786e\u5b9a",cancel:"\u53d6\u6d88",loading:"\u52a0\u8f7d\u4e2d"},Calendar:{markItems:["\u4e00","\u4e8c","\u4e09","\u56db","\u4e94","\u516d","\u65e5"],renderYearAndMonth:function(e,n){return"".concat(e,"\u5e74").concat(n,"\u6708")}},Cascader:{placeholder:"\u8bf7\u9009\u62e9"},Dialog:{ok:"\u6211\u77e5\u9053\u4e86"},ErrorBlock:{default:{title:"\u9875\u9762\u9047\u5230\u4e00\u4e9b\u5c0f\u95ee\u9898",description:"\u5f85\u4f1a\u6765\u8bd5\u8bd5"},busy:{title:"\u524d\u65b9\u62e5\u5835",description:"\u5237\u65b0\u8bd5\u8bd5"},disconnected:{title:"\u7f51\u7edc\u6709\u70b9\u5fd9",description:"\u52a8\u52a8\u624b\u6307\u5e2e\u5fd9\u4fee\u590d"},empty:{title:"\u6ca1\u6709\u627e\u5230\u4f60\u9700\u8981\u7684\u4e1c\u897f",description:"\u627e\u627e\u5176\u4ed6\u7684\u5427"}},Form:{required:"\u5fc5\u586b",optional:"\u9009\u586b",defaultValidateMessages:{default:"\u5b57\u6bb5\u9a8c\u8bc1\u9519\u8bef${label}",required:"\u8bf7\u8f93\u5165${label}",enum:"${label}\u5fc5\u987b\u662f\u5176\u4e2d\u4e00\u4e2a[${enum}]",whitespace:"${label}\u4e0d\u80fd\u4e3a\u7a7a\u5b57\u7b26",date:{format:"${label}\u65e5\u671f\u683c\u5f0f\u65e0\u6548",parse:"${label}\u4e0d\u80fd\u8f6c\u6362\u4e3a\u65e5\u671f",invalid:"${label}\u662f\u4e00\u4e2a\u65e0\u6548\u65e5\u671f"},types:{string:a,method:a,array:a,object:a,number:a,date:a,boolean:a,integer:a,float:a,regexp:a,email:a,url:a,hex:a},string:{len:"${label}\u987b\u4e3a${len}\u4e2a\u5b57\u7b26",min:"${label}\u6700\u5c11${min}\u4e2a\u5b57\u7b26",max:"${label}\u6700\u591a${max}\u4e2a\u5b57\u7b26",range:"${label}\u987b\u5728${min}-${max}\u5b57\u7b26\u4e4b\u95f4"},number:{len:"${label}\u5fc5\u987b\u7b49\u4e8e${len}",min:"${label}\u6700\u5c0f\u503c\u4e3a${min}",max:"${label}\u6700\u5927\u503c\u4e3a${max}",range:"${label}\u987b\u5728${min}-${max}\u4e4b\u95f4"},array:{len:"\u987b\u4e3a${len}\u4e2a${label}",min:"\u6700\u5c11${min}\u4e2a${label}",max:"\u6700\u591a${max}\u4e2a${label}",range:"${label}\u6570\u91cf\u987b\u5728${min}-${max}\u4e4b\u95f4"},pattern:{mismatch:"${label}\u4e0e\u6a21\u5f0f\u4e0d\u5339\u914d${pattern}"}}},ImageUploader:{uploading:"\u4e0a\u4f20\u4e2d...",upload:"\u4e0a\u4f20"},InfiniteScroll:{noMore:"\u6ca1\u6709\u66f4\u591a\u4e86",failedToLoad:"\u52a0\u8f7d\u5931\u8d25",retry:"\u91cd\u65b0\u52a0\u8f7d"},Mask:{name:"\u906e\u7f69\u5c42"},Modal:{ok:"\u6211\u77e5\u9053\u4e86"},PullToRefresh:{pulling:"\u4e0b\u62c9\u5237\u65b0",canRelease:"\u91ca\u653e\u7acb\u5373\u5237\u65b0",complete:"\u5237\u65b0\u6210\u529f"},Slider:{name:"\u6ed1\u52a8\u8f93\u5165\u6761"},Stepper:{decrease:"\u51cf\u5c11",increase:"\u589e\u52a0"},Switch:{name:"\u5f00\u5173"}});n.Z=u},2788:function(e,n,t){function r(e,n){var t=e;for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);return t}t.d(n,{A:function(){return r}})},94871:function(e,n,t){function r(e,n,t){var r=e;return void 0!==n&&(r=Math.max(e,n)),void 0!==t&&(r=Math.min(r,t)),r}t.d(n,{J:function(){return r}})},36983:function(e,n,t){t.d(n,{J:function(){return r}});var r=!("undefined"===typeof window||"undefined"===typeof document||!window.document||!window.document.createElement)},29521:function(e,n,t){t.d(n,{E:function(){return c}});var r=t(36983),o=t(26620),a=t(5488),u=null,i=null;function c(e){return null===u||null===i||10===u.getBoundingClientRect().height?e:(i.style.setProperty("--size",e.toString()),i.getBoundingClientRect().height)}r.J&&((u=document.createElement("div")).className="adm-px-tester",u.style.setProperty("--size","10"),document.body.appendChild(u),(i=document.createElement("div")).className="adm-px-tester",document.body.appendChild(i),o.r&&"fixed"!==window.getComputedStyle(i).position&&(0,a.V)("Global","The px tester is not rendering properly. Please make sure you have imported `antd-mobile/es/global`."))},5488:function(e,n,t){t.d(n,{V:function(){return a},_:function(){return o}});var r=t(26620);function o(e,n){r.r&&console.warn("[antd-mobile: ".concat(e,"] ").concat(n))}function a(e,n){r.r&&console.error("[antd-mobile: ".concat(e,"] ").concat(n))}},79416:function(e,n,t){function r(e,n){for(var t=[],r=e;r<=n;r++)t.push(r);return t}t.d(n,{V:function(){return r}})},26620:function(e,n,t){t.d(n,{r:function(){return r}});var r=!1},28786:function(e,n,t){function r(e){return void 0!==e&&null!==e&&!1!==e}t.d(n,{b:function(){return r}})},89864:function(e,n,t){t.d(n,{U:function(){return a}});var r=t(26620),o=t(5488);function a(e){if(null===e||void 0===e||""===e)return r.r&&(0,o.V)("Global","Seems like the you will encounter a style messed problem. Please check the browser environment to make sure it supports CSS variables."),0;var n=e.trim();return n.endsWith("px")?parseFloat(n):n.endsWith("rem")?parseFloat(n)*parseFloat(window.getComputedStyle(document.documentElement).fontSize):n.endsWith("vw")?parseFloat(n)*window.innerWidth/100:(r.r&&(0,o.V)("Global","You are using a not supported CSS unit in `".concat(e,"`. Only `px` `rem` and `vw` are supported.")),0)}},32895:function(e,n,t){t.d(n,{i:function(){return i}});var r=t(38504),o=t.n(r),a=t(19118),u=t.n(a);function i(e,n){return u()(o()(e),n)}},80112:function(e,n,t){t.d(n,{r:function(){return u}});var r=t(47313),o=t(46123),a=t.n(o);function u(e,n){var t=Object.assign({},n.props);for(var o in e.className&&(t.className=a()(n.props.className,e.className)),e.style&&(t.style=Object.assign(Object.assign({},t.style),e.style)),void 0!==e.tabIndex&&(t.tabIndex=e.tabIndex),e)e.hasOwnProperty(o)&&(o.startsWith("data-")||o.startsWith("aria-"))&&(t[o]=e[o]);return r.cloneElement(n,t)}},35847:function(e,n,t){t.d(n,{se:function(){return i}});t(99091);var r=t(51239),o=!1,a=new Set;function u(){return o}function i(){return(0,r.useSyncExternalStore)((function(e){return a.add(e),function(){a.delete(e)}}),u)}},91927:function(e,n,t){t.d(n,{B:function(){return u}});var r=t(29439),o=t(47313),a=t(17105);function u(e){var n=o.forwardRef((function(n,t){var a=(0,o.useState)(!1),i=(0,r.Z)(a,2),c=i[0],l=i[1],f=(0,o.useRef)(!1),s=(0,o.useState)(e),d=(0,r.Z)(s,2),m=d[0],v=d[1],p=(0,o.useRef)(0);function b(){var e,n;f.current=!0,l(!1),null===(n=(e=m.props).onClose)||void 0===n||n.call(e)}function h(){var e,n;u(),null===(n=(e=m.props).afterClose)||void 0===n||n.call(e)}return(0,o.useEffect)((function(){f.current?h():l(!0)}),[]),(0,o.useImperativeHandle)(t,(function(){return{close:b,replace:function(e){var n,t;p.current++,null===(t=(n=m.props).afterClose)||void 0===t||t.call(n),v(e)}}})),o.cloneElement(m,Object.assign(Object.assign({},m.props),{key:p.current,visible:c,onClose:b,afterClose:h}))})),t=o.createRef(),u=(0,a.t)(o.createElement(n,{ref:t}));return{close:function(){var e;null===(e=t.current)||void 0===e||e.close()},replace:function(e){var n;null===(n=t.current)||void 0===n||n.replace(e)}}}},17105:function(e,n,t){t.d(n,{t:function(){return b}});var r,o=t(74165),a=t(54576),u=t(1168),i=t.t(u,2),c=Object.assign({},i),l=c.version,f=c.render,s=c.unmountComponentAtNode;try{Number((l||"").split(".")[0])>=18&&c.createRoot&&(r=c.createRoot)}catch(h){}function d(e){var n=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&"object"===typeof n&&(n.usingClientEntryPoint=e)}var m="__antd_mobile_root__";function v(e,n){r?function(e,n){d(!0);var t=n[m]||r(n);d(!1),t.render(e),n[m]=t}(e,n):function(e,n){f(e,n)}(e,n)}function p(e){return r?function(e){return(0,a.mG)(this,void 0,void 0,(0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.resolve().then((function(){var n;null===(n=e[m])||void 0===n||n.unmount(),delete e[m]})));case 1:case"end":return n.stop()}}),n)})))}(e):function(e){return s(e)}(e)}function b(e){var n=document.createElement("div");return document.body.appendChild(n),v(e,n),function(){p(n)&&n.parentNode&&n.parentNode.removeChild(n)}}},43953:function(e,n,t){t.d(n,{C:function(){return a}});var r=t(1168);var o=t(36983);function a(e,n){if(o.J&&e){var t=function(e){return("function"===typeof e?e():e)||document.body}(e);return(0,r.createPortal)(n,t)}return n}},60459:function(e,n,t){t.d(n,{U:function(){return a}});var r=t(94871);function o(e,n,t){return e*n*t/(n+t*e)}function a(e,n,t,a){var u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.15;return 0===u?(0,r.J)(e,n,t):e<n?-o(n-e,a,u)+n:e>t?+o(e-t,a,u)+t:e}},35148:function(e,n,t){t.d(n,{m:function(){return o},f:function(){return a}});var r=t(47313);var o=function(e){return a(e.active,e.forceRender,e.destroyOnClose)?e.children:null};function a(e,n,t){var o=function(e){var n=(0,r.useRef)(e);return e&&(n.current=!0),!!n.current}(e);return!!n||(!!e||!!o&&!t)}},87841:function(e,n,t){t.d(n,{Q:function(){return o}});var r=t(36983),o=!1;if(r.J)try{var a={};Object.defineProperty(a,"passive",{get:function(){o=!0}}),window.addEventListener("test-passive",null,a)}catch(u){}},34675:function(e,n,t){function r(e){return"number"===typeof e?"".concat(e,"px"):e}t.d(n,{D:function(){return r}})},21314:function(e,n,t){t.d(n,{k:function(){return a}});var r=t(47313),o=t(87782);function a(e,n){var t=0;!function e(a){r.Children.forEach(a,(function(r){(0,o.isFragment)(r)?e(r.props.children):(n(r,t),t+=1)}))}(e)}},18697:function(e,n,t){function r(){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];for(e=0;e<t.length&&void 0===t[e];e++);return t[e]}t.d(n,{y:function(){return r}})},76233:function(e,n,t){t.d(n,{E:function(){return u}});var r=t(29439),o=t(47313),a=t(87986);function u(e){var n=(0,o.useState)(e),t=(0,r.Z)(n,2),u=t[0],i=t[1];return(0,a.Z)((function(){i(e)}),[e]),u}},80865:function(e,n,t){t.d(n,{J:function(){return a}});var r=t(3987),o=t(87986),a=(0,r.a)(o.Z)},92912:function(e,n,t){t.d(n,{F:function(){return f}});var r=t(47313);var o=t(36983).J?window:void 0,a=["scroll","auto","overlay"];function u(e){return 1===e.nodeType}var i=t(87841),c=0,l="adm-overflow-hidden";function f(e,n){var t=function(){var e=(0,r.useRef)(0),n=(0,r.useRef)(0),t=(0,r.useRef)(0),o=(0,r.useRef)(0),a=(0,r.useRef)(0),u=(0,r.useRef)(0),i=(0,r.useRef)(""),c=function(){t.current=0,o.current=0,a.current=0,u.current=0,i.current=""};return{move:function(r){var c,l,f=r.touches[0];t.current=f.clientX<0?0:f.clientX-e.current,o.current=f.clientY-n.current,a.current=Math.abs(t.current),u.current=Math.abs(o.current),i.current||(i.current=(c=a.current)>(l=u.current)&&c>10?"horizontal":l>c&&l>10?"vertical":"")},start:function(t){c(),e.current=t.touches[0].clientX,n.current=t.touches[0].clientY},reset:c,startX:e,startY:n,deltaX:t,deltaY:o,offsetX:a,offsetY:u,direction:i,isVertical:function(){return"vertical"===i.current},isHorizontal:function(){return"horizontal"===i.current}}}(),f=function(n){t.move(n);var r=t.deltaY.current>0?"10":"01",i=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o,t=e;t&&t!==n&&u(t);){if(t===document.body)return n;var r=window.getComputedStyle(t).overflowY;if(a.includes(r)&&t.scrollHeight>t.clientHeight)return t;t=t.parentNode}return n}(n.target,e.current);if(i){var c=i.scrollHeight,l=i.offsetHeight,f=i.scrollTop,s="11";0===f?s=l>=c?"00":"01":f+l>=c&&(s="10"),"11"===s||!t.isVertical()||parseInt(s,2)&parseInt(r,2)||n.cancelable&&n.preventDefault()}};(0,r.useEffect)((function(){if(n)return document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",f,!!i.Q&&{passive:!1}),c||document.body.classList.add(l),c++,function(){c&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",f),--c||document.body.classList.remove(l))}}),[n])}},3284:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(47313),o=t(14122);function a(e,n,t){var a=(0,o.Z)(e);(0,r.useEffect)((function(){var e=new MutationObserver((function(){a()}));if(n.current)return e.observe(n.current,t),function(){e.disconnect()}}),[n])}},33716:function(e,n,t){t.d(n,{B:function(){return u}});var r=t(47313),o=t(21781),a=t(14122);function u(e){var n=e.value,t=e.defaultValue,u=e.onChange,i=(0,o.Z)(),c=(0,r.useRef)(void 0!==n?n:t);void 0!==n&&(c.current=n);var l=(0,a.Z)((function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t="function"===typeof e?e(c.current):e;(n||t!==c.current)&&(c.current=t,i(),null===u||void 0===u||u(t))}));return[c.current,l]}},60381:function(e,n,t){t.d(n,{r:function(){return a}});var r=t(29439),o=t(47313);function a(e){var n=(0,o.useState)(e),t=(0,r.Z)(n,2),a=t[0],u=t[1],i=(0,o.useRef)(a);return(0,o.useEffect)((function(){i.current=a}),[a]),[a,u,i]}},49220:function(e,n,t){t.d(n,{B:function(){return a}});var r=t(14122),o=t(87986);function a(e,n){var t=(0,r.Z)(e);(0,o.Z)((function(){var e=n.current;if(e){if(window.ResizeObserver){var r=new ResizeObserver((function(){t(e)}));return r.observe(e),function(){r.disconnect()}}t(e)}}),[n])}},10792:function(e,n,t){t.d(n,{gn:function(){return a},tI:function(){return o}});var r=t(36983);function o(e){return!!e&&"object"===typeof e&&"function"===typeof e.then}function a(){return!!r.J&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}},1435:function(e,n,t){function r(e){var n=null;return function(){return null===n&&(n=e()),n}}t.d(n,{D:function(){return r}})},1567:function(e,n,t){t.d(n,{d:function(){return l}});var r=t(51757),o=t.n(r),a=t(94573),u=t.n(a),i=t(4684),c=t.n(i);function l(){function e(e,n){return c()(n)?e:n}for(var n=o()({},arguments.length<=0?void 0:arguments[0]),t=1;t<arguments.length;t++)n=u()(n,t<0||arguments.length<=t?void 0:arguments[t],e);return n}},49392:function(e,n,t){t.d(n,{h:function(){return u}});var r=t(37762),o=t(47313),a={click:"onClick"};function u(e,n){var t,u=Object.assign({},n.props),i=(0,r.Z)(e);try{var c=function(){var e=t.value,r=a[e];u[r]=function(e){var t,o;e.stopPropagation(),null===(o=(t=n.props)[r])||void 0===o||o.call(t,e)}};for(i.s();!(t=i.n()).done;)c()}catch(l){i.e(l)}finally{i.f()}return o.cloneElement(n,u)}},11698:function(e,n){var t=60103,r=60106,o=60107,a=60108,u=60114,i=60109,c=60110,l=60112,f=60113,s=60120,d=60115,m=60116,v=60121,p=60122,b=60117,h=60129,y=60131;if("function"===typeof Symbol&&Symbol.for){var g=Symbol.for;t=g("react.element"),r=g("react.portal"),o=g("react.fragment"),a=g("react.strict_mode"),u=g("react.profiler"),i=g("react.provider"),c=g("react.context"),l=g("react.forward_ref"),f=g("react.suspense"),s=g("react.suspense_list"),d=g("react.memo"),m=g("react.lazy"),v=g("react.block"),p=g("react.server.block"),b=g("react.fundamental"),h=g("react.debug_trace_mode"),y=g("react.legacy_hidden")}function $(e){if("object"===typeof e&&null!==e){var n=e.$$typeof;switch(n){case t:switch(e=e.type){case o:case u:case a:case f:case s:return e;default:switch(e=e&&e.$$typeof){case c:case l:case m:case d:case i:return e;default:return n}}case r:return n}}}n.isFragment=function(e){return $(e)===o},n.isMemo=function(e){return $(e)===d}},87782:function(e,n,t){e.exports=t(11698)},54576:function(e,n,t){t.d(n,{_T:function(){return r},mG:function(){return o}});function r(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function o(e,n,t,r){return new(t||(t=Promise))((function(o,a){function u(e){try{c(r.next(e))}catch(n){a(n)}}function i(e){try{c(r.throw(e))}catch(n){a(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,i)}c((r=r.apply(e,n||[])).next())}))}Object.create;Object.create}}]);