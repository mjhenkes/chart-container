(self.webpackChunkchart_container=self.webpackChunkchart_container||[]).push([[502],{22379:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>w});var r=n(15901),a=n.n(r),l=n(45697),o=n.n(l),u=n(35029),c=n.n(u),i=n(19714),s=n(7471),f=n(52227),m=n(38099),y=n(79446),p=n(15200),d=n(56299),g=n(25354);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,l=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var E={label:o().string,pageKey:o().string,onRequestClose:o().func},b=function(e){var t=e.label,n=e.pageKey,r=e.onRequestClose,l=v(a().useState(!1),2),o=l[0],h=l[1],E=v(a().useState({update_timestamp:Date.now()}),2),b=E[0],w=E[1];return a().useEffect((function(){var e=setInterval((function(){w({update_timestamp:Date.now()})}),1e3);return function(){clearInterval(e)}}),[]),a().createElement(c(),{pageKey:n,label:t,metaData:b,onRequestClose:r,activityOverlay:o?a().createElement(u.PageActivityOverlay,{variant:"loading"}):void 0},a().createElement(u.CardLayout,null,a().createElement(u.Card,{label:"".concat(t," Details")},a().createElement("p",null,"Page 1 demonstrates the following features:"),a().createElement("ul",null,a().createElement("li",null,"Page header action that presents a modal workflow"),a().createElement("li",null,"Content that triggers Page APIs"))),a().createElement(g.Z,null),a().createElement(d.Z,null),a().createElement(i.Z,null),a().createElement(s.Z,null),a().createElement(p.Z,null),a().createElement(y.Z,{onSetLoading:h}),a().createElement(f.Z,{pageTitle:t}),a().createElement(m.Z,null)))};b.propTypes=E;const w=b}}]);