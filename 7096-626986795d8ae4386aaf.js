(self.webpackChunkchart_container=self.webpackChunkchart_container||[]).push([[7096],{92488:(e,t,a)=>{"use strict";var o=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.contextShape=t.useApplicationConcept=t.default=void 0;var n=o(a(15901)),l=o(a(45697)),d=n.default.createContext({});t.useApplicationConcept=function(){return n.default.useContext(d)};var r={description:l.default.string,layoutBanner:l.default.element,modalBanner:l.default.element};t.contextShape=r;var u=d;t.default=u},17096:(e,t,a)=>{"use strict";var o=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(63038)),l=o(a(15901)),d=o(a(45697)),r=a(51051),u=o(a(87705)),i=a(14160),f=a(2768),c=a(40680),_=a(5471),s=o(a(65786)),m=o(a(68976)),h={title:d.default.string,toolbar:d.default.element,footer:d.default.element,size:d.default.oneOfType([d.default.oneOf(["tiny","small","medium","large","huge"]),d.default.shape({height:d.default.oneOf([240,420,600,870,960]),width:d.default.oneOf([320,640,960,1280,1600])})]),onRequestClose:d.default.func.isRequired,children:d.default.node,renderPage:d.default.func,dangerouslyDisableUnsavedChangesPromptHandling:d.default.bool,onInert:d.default.func},v=function(e){var t=e.title,a=e.toolbar,o=e.footer,d=e.size,h=e.onRequestClose,v=e.children,p=e.renderPage,g=e.dangerouslyDisableUnsavedChangesPromptHandling,y=e.onInert,C=l.default.useRef(),b=l.default.useRef(),w=l.default.useState(!1),E=(0,n.default)(w,2),M=E[0],O=E[1],P=l.default.useCallback((function(){g?h():C.current.resolvePrompts().then((function(){h()}))}),[g,h]);return l.default.useLayoutEffect((function(){(0,c.deferExecution)((function(){"ontouchstart"in window?b.current.querySelector("[data-terra-abstract-modal-begin]").focus():b.current.focus()}))}),[]),l.default.useEffect((function(){if(!M)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){if(e.keyCode===r.KEY_ESCAPE){var t=document.querySelector("body");(e.target===b.current||b.current.contains(e.target)||e.target===t)&&P()}}}),[P,M]),l.default.useEffect((function(){y&&y(M)}),[M,y]),l.default.createElement(m.default.Provider,{value:void 0},l.default.createElement(_.DynamicHeadingProvider,{isRoot:!0},l.default.createElement(u.default,{type:"modal",setInert:O},l.default.createElement(i.UnsavedChangesPromptCheckpoint,{ref:C},l.default.createElement(s.default,{refCallback:function(e){b.current=e},title:t,toolbar:a,footer:o,size:d,onRequestClose:P},p?l.default.createElement(f.PageContainer,null,p()):v)))))};v.propTypes=h;var p=v;t.default=p},65786:(e,t,a)=>{"use strict";var o=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(67154)),l=o(a(50008)),d=o(a(6479)),r=o(a(15901)),u=o(a(45697)),i=a(60767),f=o(a(47166)),c=o(a(50026)),_=o(a(29270)),s=o(a(55281)),m=o(a(60377)),h=o(a(85134)),v=o(a(92488)),p=o(a(68434)),g=o(a(16107)),y=o(a(34140)),C=f.default.bind(y.default),b={tiny:240,small:420,medium:600,large:870,huge:960},w={tiny:320,small:640,medium:960,large:1280,huge:1600},E={title:u.default.string,toolbar:u.default.element,footer:u.default.element,children:u.default.node,refCallback:u.default.func,onRequestClose:u.default.func.isRequired,size:u.default.oneOfType([u.default.oneOf(["tiny","small","medium","large","huge"]),u.default.shape({height:u.default.oneOf([240,420,600,870,960]),width:u.default.oneOf([320,640,960,1280,1600])})])},M=function(e){var t,a,o=e.title,u=e.toolbar,f=e.footer,y=e.size,E=e.children,M=e.onRequestClose,O=e.refCallback,P=(0,d.default)(e,["title","toolbar","footer","size","children","onRequestClose","refCallback"]),k=r.default.useContext(v.default),j=r.default.useContext(c.default),N=(0,p.default)(),A=N.NotificationBannerProvider,x=N.NotificationBanners;"string"==typeof y?(t=b[y]||420,a=w[y]||640):"object"===(0,l.default)(y)?(t=y.height||420,a=y.width||640):(t=420,a=640);var q=C("modal-container","height-".concat(t),"width-".concat(a),j.className),I=!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform);return r.default.createElement("div",(0,n.default)({},P,{tabIndex:I?"-1":"0","aria-modal":"true","aria-label":o,className:q,role:"dialog",ref:function(e){O&&O(e)}}),r.default.createElement(i.FormattedMessage,{id:"Terra.AbstractModal.BeginModalDialog"},(function(e){var t=e;return Array.isArray(e)&&(t=e.join("")),r.default.createElement(_.default,{"data-terra-abstract-modal-begin":!0,tabIndex:"-1",text:t})})),r.default.createElement("div",{className:C("modal-layout")},r.default.createElement("div",{className:C("header")},r.default.createElement(g.default,{title:o,onClose:M}),u,null==k?void 0:k.modalBanner,r.default.createElement(x,null)),r.default.createElement("div",{className:C("content")},r.default.createElement(A,null,r.default.createElement(h.default,null,E))),r.default.createElement("div",{className:C("footer")},f||r.default.createElement(m.default,{end:r.default.createElement(s.default,{text:"Close",onClick:function(){M()}})}))),r.default.createElement(i.FormattedMessage,{id:"Terra.AbstractModal.EndModalDialog"},(function(e){var t=e;return Array.isArray(e)&&(t=e.join("")),r.default.createElement(_.default,{text:t})})))};M.propTypes=E,M.defaultProps={size:"small"};var O=M;t.default=O},16107:(e,t,a)=>{"use strict";var o=a(20862),n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(15901)),d=n(a(47166)),r=o(a(55281)),u=n(a(71713)),i=n(a(57362)),f=d.default.bind(i.default),c=function(e){var t=e.title,a=e.onClose;return l.default.createElement("div",{className:f("modal-header")},l.default.createElement("div",{className:f("title-container")},t),l.default.createElement("div",{className:f("actions-container")},a?l.default.createElement(r.default,{className:f(["header-button"]),icon:l.default.createElement(u.default,null),text:"Close",onClick:a,variant:r.ButtonVariants.UTILITY}):null))};c.propTypes={};var _=c;t.default=_},34140:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});const o={"modal-container":"ModalContent-module__modal-container___2q_58","modal-layout":"ModalContent-module__modal-layout___1I2p4",header:"ModalContent-module__header___gaPLt",footer:"ModalContent-module__footer___Iz5Dn",content:"ModalContent-module__content___teooc","height-240":"ModalContent-module__height-240___1jhYS","height-420":"ModalContent-module__height-420___2D2TP","height-600":"ModalContent-module__height-600___6-UW-","height-690":"ModalContent-module__height-690___ySrk5","height-780":"ModalContent-module__height-780___37hv8","height-870":"ModalContent-module__height-870___3JRN4","height-960":"ModalContent-module__height-960___gqGXq","height-1140":"ModalContent-module__height-1140___DpUbx","width-320":"ModalContent-module__width-320___3DGkY","width-480":"ModalContent-module__width-480___1AFrB","width-560":"ModalContent-module__width-560___3SpI9","width-640":"ModalContent-module__width-640___E0aT3","width-800":"ModalContent-module__width-800___1fV62","width-960":"ModalContent-module__width-960___2SZ9h","width-1120":"ModalContent-module__width-1120___1RnX0","width-1280":"ModalContent-module__width-1280___2mcLr","width-1440":"ModalContent-module__width-1440___1INKT","width-1600":"ModalContent-module__width-1600___11G_t","width-1760":"ModalContent-module__width-1760___3YZoO","width-1920":"ModalContent-module__width-1920___3C9hl"}},57362:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});const o={"modal-header":"ModalHeader-module__modal-header___kwXWk","title-container":"ModalHeader-module__title-container___2QC9-","action-container":"ModalHeader-module__action-container___2HqfY"}},90716:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});const o={"action-footer":"ActionFooter-module__action-footer___fJyAu","action-footer-end":"ActionFooter-module__action-footer-end___130Jg","start-actions":"ActionFooter-module__start-actions___2w4-h","end-actions":"ActionFooter-module__end-actions___1G2yp"}},85687:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>o});const o={"clinical-lowlight-theme":"BlockActionFooter-module__clinical-lowlight-theme___1ij74","orion-fusion-theme":"BlockActionFooter-module__orion-fusion-theme___2_IVc","block-action-footer":"BlockActionFooter-module__block-action-footer___rD_Pi","with-actions":"BlockActionFooter-module__with-actions___3qZ3j"}},60377:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(a(15901)),n=u(a(45697)),l=u(a(47166)),d=u(a(56640)),r=u(a(90716));function u(e){return e&&e.__esModule?e:{default:e}}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function f(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=l.default.bind(r.default),_={start:n.default.node,end:n.default.node},s={start:void 0,end:void 0},m=function(e){var t=e.start,a=e.end,n=f(e,["start","end"]),l=c([{"action-footer":t},{"action-footer-end":!t},n.className]);return o.default.createElement(d.default,i({},n,{className:l}),t&&o.default.createElement("div",{className:c("start-actions")},t),a&&o.default.createElement("div",{className:c("end-actions")},a))};m.propTypes=_,m.defaultProps=s;var h=m;t.default=h},56640:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a(15901)),n=i(a(45697)),l=i(a(94184)),d=i(a(47166)),r=i(a(50026)),u=i(a(85687));function i(e){return e&&e.__esModule?e:{default:e}}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var _=d.default.bind(u.default),s={children:n.default.node},m={children:void 0},h=function(e){var t=e.children,a=c(e,["children"]),n=o.default.useContext(r.default),d=!o.default.Children.toArray(t).length,u=(0,l.default)(_(["block-action-footer",{"with-actions":!d},n.className]),a.className);return o.default.createElement("div",f({},a,{className:u}),t)};h.propTypes=s,h.defaultProps=m;var v=h;t.default=v}}]);