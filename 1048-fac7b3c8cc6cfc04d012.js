(self.webpackChunkchart_container=self.webpackChunkchart_container||[]).push([[1048,8042],{42362:(e,a,r)=>{"use strict";var t=r(95318);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var d=t(r(15901)),n=t(r(45697)),l=t(r(47166)),c=r(5471),i=t(r(77894)),u=l.default.bind(i.default),o={label:n.default.string,children:n.default.node},_=function(e){var a=e.label,r=e.children,t=(0,c.useDynamicHeading)().level;return d.default.createElement("div",{className:u("card")},a&&d.default.createElement("div",{className:u("card-header")},d.default.createElement("div",{className:u("label-container"),role:"heading","aria-level":t},a)),d.default.createElement("div",{className:u("card-body")},d.default.createElement(c.DynamicHeadingProvider,null,r)))};_.propTypes=o;var s=_;a.default=s},5471:(e,a,r)=>{"use strict";var t=r(95318);Object.defineProperty(a,"__esModule",{value:!0}),a.DynamicHeading=a.DynamicHeadingProvider=a.useDynamicHeading=a.default=void 0;var d=t(r(15901)),n=d.default.createContext(1),l=function(){var e=d.default.useContext(n);return{level:Math.min(e,6)}};a.useDynamicHeading=l;a.DynamicHeading=function(e){var a=l().level,r="h".concat(a);return d.default.createElement(r,e)};a.DynamicHeadingProvider=function(e){var a=e.children,r=e.isRoot,t=d.default.useContext(n);return d.default.createElement(n.Provider,{value:r?1:t+1},a)};var c=n;a.default=c},77894:(e,a,r)=>{"use strict";r.r(a),r.d(a,{default:()=>t});const t={card:"Card-module__card___2QpCV","card-header":"Card-module__card-header___1McWq","label-container":"Card-module__label-container___2HCU-","action-container":"Card-module__action-container___1pyoz","card-body":"Card-module__card-body___2bT4O"}}}]);