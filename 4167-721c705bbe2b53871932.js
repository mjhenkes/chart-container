(self.webpackChunkchart_container=self.webpackChunkchart_container||[]).push([[4167,74,7695,9311],{38695:(e,t,n)=>{"use strict";var r=n(95318),u=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(n(15901)),a=r(n(45697)),s=r(n(48829)),l=r(n(87373)),i=n(14160),d=n(28161),c={children:a.default.node,unsavedChangesPromptResolutionOptions:i.unsavedChangesPromptResolutionOptionsShape},f=function(e){var t=e.children,n=e.unsavedChangesPromptResolutionOptions,r=(0,o.useContext)(s.default),u=(0,o.useRef)(),a=(0,o.useRef)(),c=(0,o.useMemo)((function(){return l.default.clone(r,{registerDismissCheck:function(e){return a.current=e,Promise.resolve()}})}),[r]);return(0,o.useEffect)((function(){var e=r.goBack||r.closeDisclosure;return(0,d.addCallback)(e),function(){(0,d.removeCallback)(e)}}),[]),(0,o.useEffect)((function(){r.registerDismissCheck((function(){return a.current?a.current():new Promise((function(e,t){u.current?u.current.resolvePrompts(n).then(e,t):e()}))}))}),[r,n]),o.default.createElement(s.default.Provider,{value:c},o.default.createElement(i.UnsavedChangesPromptCheckpoint,{ref:u},t))};f.propTypes=c;var p=f;t.default=p},62842:(e,t,n)=>{"use strict";var r=n(20862),u=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.disclosureType=void 0;var o=u(n(319)),a=u(n(34575)),s=u(n(93913)),l=u(n(81506)),i=u(n(2205)),d=u(n(78585)),c=u(n(29754)),f=u(n(15901)),p=u(n(45697)),v=u(n(50026)),h=u(n(17092)),m=u(n(17096)),C=r(n(71377)),y=n(14160),P=u(n(38695));function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var u=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var R="modal";t.disclosureType=R;var b={children:p.default.node,disclosureAccessory:p.default.element,unsavedChangesPromptResolutionOptions:y.unsavedChangesPromptResolutionOptionsShape},k=function(e){(0,i.default)(n,e);var t=g(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).renderModals=r.renderModals.bind((0,l.default)(r)),r}return(0,s.default)(n,[{key:"renderModals",value:function(e){var t=this.props;t.children,t.disclosureAccessory;return f.default.createElement(f.default.Fragment,null,e.children.components,function t(n){var r,u;if(n&&n.length){var o=n.shift(),a=e.disclosureComponentData[o];return f.default.createElement(m.default,{title:null==a||null===(r=a.headerAdapterData)||void 0===r?void 0:r.title,toolbar:null!=a&&null!==(u=a.headerAdapterData)&&void 0!==u&&u.collapsibleMenuView?f.default.createElement(h.default,null,a.headerAdapterData.collapsibleMenuView):void 0,size:e.disclosure.size,onRequestClose:e.dismissPresentedComponent,dangerouslyDisableUnsavedChangesPromptHandling:!0},a.component,n.length?t(n):void 0)}}((0,o.default)(e.disclosureComponentKeys)))}},{key:"render",value:function(){var e=this.props,t=e.unsavedChangesPromptResolutionOptions,n=e.children;return f.default.createElement(C.default,{supportedDisclosureTypes:[R],render:this.renderModals,withDisclosureContainer:function(e){return f.default.createElement(P.default,{unsavedChangesPromptResolutionOptions:t},e)},trapNestedDisclosureRequests:!0},n)}}]),n}(f.default.Component);k.propTypes=b,k.contextType=v.default;var D=k;t.default=D},20331:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(62842)).default;t.default=u}}]);