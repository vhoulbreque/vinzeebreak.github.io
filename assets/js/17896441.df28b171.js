"use strict";(self.webpackChunkvincent_houlbreque_com=self.webpackChunkvincent_houlbreque_com||[]).push([[918],{8945:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ie});var n=a(7294),l=a(1944),o=a(902);const r=n.createContext(null);function s(e){let{children:t,content:a}=e;const l=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(a);return n.createElement(r.Provider,{value:l},t)}function c(){const e=(0,n.useContext)(r);if(null===e)throw new o.i6("DocProvider");return e}function i(){const{metadata:e,frontMatter:t,assets:a}=c();return n.createElement(l.d,{title:e.title,description:e.description,keywords:t.keywords,image:a.image??t.image})}var d=a(6010),m=a(7524),u=a(7462),b=a(5999),p=a(2244);function v(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,b.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},t&&n.createElement(p.Z,(0,u.Z)({},t,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),a&&n.createElement(p.Z,(0,u.Z)({},a,{subLabel:n.createElement(b.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}function E(){const{metadata:e}=c();return n.createElement(v,{previous:e.previous,next:e.next})}var h=a(2263),f=a(9960),g=a(143),C=a(5281),L=a(373),Z=a(4477);const N={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(b.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function _(e){const t=N[e.versionMetadata.banner];return n.createElement(t,e)}function T(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(b.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(f.Z,{to:a,onClick:l},n.createElement(b.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function k(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:l}}=(0,h.Z)(),{pluginId:o}=(0,g.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,L.J)(o),{latestDocSuggestion:s,latestVersionSuggestion:c}=(0,g.Jo)(o),i=s??(m=c).docs.find((e=>e.id===m.mainDocId));var m;return n.createElement("div",{className:(0,d.Z)(t,C.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(_,{siteTitle:l,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(T,{versionLabel:c.label,to:i.path,onClick:()=>r(c.name)})))}function U(e){let{className:t}=e;const a=(0,Z.E)();return a.banner?n.createElement(k,{className:t,versionMetadata:a}):null}function w(e){let{className:t}=e;const a=(0,Z.E)();return a.badge?n.createElement("span",{className:(0,d.Z)(t,C.k.docs.docVersionBadge,"badge badge--secondary")},n.createElement(b.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}function x(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(b.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function y(e){let{lastUpdatedBy:t}=e;return n.createElement(b.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function A(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:C.k.common.lastUpdated},n.createElement(b.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(x,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(y,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var M=a(4881),B=a(6233);const I={lastUpdated:"lastUpdated_vwxv"};function V(e){return n.createElement("div",{className:(0,d.Z)(C.k.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(B.Z,e)))}function H(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:l,formattedLastUpdatedAt:o}=e;return n.createElement("div",{className:(0,d.Z)(C.k.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(M.Z,{editUrl:t})),n.createElement("div",{className:(0,d.Z)("col",I.lastUpdated)},(a||l)&&n.createElement(A,{lastUpdatedAt:a,formattedLastUpdatedAt:o,lastUpdatedBy:l})))}function P(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:a,formattedLastUpdatedAt:l,lastUpdatedBy:o,tags:r}=e,s=r.length>0,i=!!(t||a||o);return s||i?n.createElement("footer",{className:(0,d.Z)(C.k.docs.docFooter,"docusaurus-mt-lg")},s&&n.createElement(V,{tags:r}),i&&n.createElement(H,{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:o,formattedLastUpdatedAt:l})):null}var D=a(6043),S=a(3743);const F={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function O(e){let{collapsed:t,...a}=e;return n.createElement("button",(0,u.Z)({type:"button"},a,{className:(0,d.Z)("clean-btn",F.tocCollapsibleButton,!t&&F.tocCollapsibleButtonExpanded,a.className)}),n.createElement(b.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"))}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function q(e){let{toc:t,className:a,minHeadingLevel:l,maxHeadingLevel:o}=e;const{collapsed:r,toggleCollapsed:s}=(0,D.u)({initialState:!0});return n.createElement("div",{className:(0,d.Z)(R.tocCollapsible,!r&&R.tocCollapsibleExpanded,a)},n.createElement(O,{collapsed:r,onClick:s}),n.createElement(D.z,{lazy:!0,className:R.tocCollapsibleContent,collapsed:r},n.createElement(S.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:o})))}const z={tocMobile:"tocMobile_ITEo"};function j(){const{toc:e,frontMatter:t}=c();return n.createElement(q,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,d.Z)(C.k.docs.docTocMobile,z.tocMobile)})}var G=a(9407);function J(){const{toc:e,frontMatter:t}=c();return n.createElement(G.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:C.k.docs.docTocDesktop})}var Y=a(2503),$=a(210);function K(e){let{children:t}=e;const a=function(){const{metadata:e,frontMatter:t,contentTitle:a}=c();return t.hide_title||void 0!==a?null:e.title}();return n.createElement("div",{className:(0,d.Z)(C.k.docs.docMarkdown,"markdown")},a&&n.createElement("header",null,n.createElement(Y.Z,{as:"h1"},a)),n.createElement($.Z,null,t))}var Q=a(2802),W=a(8596),X=a(4996);function ee(e){return n.createElement("svg",(0,u.Z)({viewBox:"0 0 24 24"},e),n.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const te={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function ae(){const e=(0,X.Z)("/");return n.createElement("li",{className:"breadcrumbs__item"},n.createElement(f.Z,{"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},n.createElement(ee,{className:te.breadcrumbHomeIcon})))}const ne={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function le(e){let{children:t,href:a,isLast:l}=e;const o="breadcrumbs__link";return l?n.createElement("span",{className:o,itemProp:"name"},t):a?n.createElement(f.Z,{className:o,href:a,itemProp:"item"},n.createElement("span",{itemProp:"name"},t)):n.createElement("span",{className:o},t)}function oe(e){let{children:t,active:a,index:l,addMicrodata:o}=e;return n.createElement("li",(0,u.Z)({},o&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,d.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})}),t,n.createElement("meta",{itemProp:"position",content:String(l+1)}))}function re(){const e=(0,Q.s1)(),t=(0,W.Ns)();return e?n.createElement("nav",{className:(0,d.Z)(C.k.docs.docBreadcrumbs,ne.breadcrumbsContainer),"aria-label":(0,b.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},n.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&n.createElement(ae,null),e.map(((t,a)=>{const l=a===e.length-1;return n.createElement(oe,{key:a,active:l,index:a,addMicrodata:!!t.href},n.createElement(le,{href:t.href,isLast:l},t.label))})))):null}const se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ce(e){let{children:t}=e;const a=function(){const{frontMatter:e,toc:t}=c(),a=(0,m.i)(),l=e.hide_table_of_contents,o=!l&&t.length>0;return{hidden:l,mobile:o?n.createElement(j,null):void 0,desktop:!o||"desktop"!==a&&"ssr"!==a?void 0:n.createElement(J,null)}}();return n.createElement("div",{className:"row"},n.createElement("div",{className:(0,d.Z)("col",!a.hidden&&se.docItemCol)},n.createElement(U,null),n.createElement("div",{className:se.docItemContainer},n.createElement("article",null,n.createElement(re,null),n.createElement(w,null),a.mobile,n.createElement(K,null,t),n.createElement(P,null)),n.createElement(E,null))),a.desktop&&n.createElement("div",{className:"col col--3"},a.desktop))}function ie(e){const t=`docs-doc-id-${e.content.metadata.unversionedId}`,a=e.content;return n.createElement(s,{content:e.content},n.createElement(l.FG,{className:t},n.createElement(i,null),n.createElement(ce,null,n.createElement(a,null))))}},4477:(e,t,a)=>{a.d(t,{E:()=>s,q:()=>r});var n=a(7294),l=a(902);const o=n.createContext(null);function r(e){let{children:t,version:a}=e;return n.createElement(o.Provider,{value:a},t)}function s(){const e=(0,n.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);