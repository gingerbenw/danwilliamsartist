(self.webpackChunkjodie=self.webpackChunkjodie||[]).push([[369],{3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function c(t,r,a){return o()?(e.exports=c=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=c=function(e,t,r){var o=[null];o.push.apply(o,t);var c=new(Function.bind.apply(e,o));return r&&n(c,r.prototype),c},e.exports.__esModule=!0,e.exports.default=e.exports),c.apply(null,arguments)}e.exports=c,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),c=r(379),a=r(8206);e.exports=function(e){return n(e)||o(e)||c(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var n=r(2632);e.exports={MDXRenderer:n}},2632:function(e,t,r){var n=r(9100),o=r(319),c=r(9713),a=r(7316),u=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),l=r(4983).mdx,f=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,c=a(e,u),i=f(t),d=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:l},i),t=Object.keys(e),c=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(c)))}),[r,t]);return p.createElement(d,s({},c))}},8815:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var n=r(3366),o=r(7294),c=r(977),a=r(4123),u=r(2102),i=r(8887),s=r(7059),p=r(3726),l=r(6688),f=function(e){var t=e.data,r=t.project,n=t.images,o=e.location;return(0,c.tZ)(p.Z,{color:r.color||void 0},(0,c.tZ)(l.Z,{title:r.title,description:r.excerpt,pathname:o.pathname,image:r.cover.childImageSharp.resize.src}),(0,c.tZ)("div",{sx:{variant:"content.project"}},(0,c.tZ)("div",{sx:{fontSize:2,textTransform:"uppercase",letterSpacing:"wider",mb:2}},r.category),(0,c.tZ)(a.X6,{as:"h1",variant:"styles.h1",sx:{mt:0}},r.title),(0,c.tZ)("div",{sx:{maxWidth:"70ch",my:4}},(0,c.tZ)(u.MDXRenderer,null,r.body))),(0,c.tZ)("div",{sx:{backgroundColor:(0,i.DZ)(.9,r.color)}},(0,c.tZ)("div",{sx:{variant:"content.imageList"}},n.nodes.map((function(e){return(0,c.tZ)(s.G,{key:e.name,alt:e.name,image:e.childImageSharp.gatsbyImageData})})))))},d=["children"];var x=function(e){var t=e.children,r=(0,n.Z)(e,d);return o.createElement(f,r,t)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-jodie-core-src-templates-project-query-tsx-5c869f2e44766aae54fb.js.map