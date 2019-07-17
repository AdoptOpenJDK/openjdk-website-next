(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),o=a(192),n=(a(190),a(34),a(195),function(e){var t=e.binary;return i.a.createElement("div",null,t.installer_link?i.a.createElement("div",null,i.a.createElement("a",{href:"",className:"latest-download-button a-button"},i.a.createElement("div",{className:"large-dl-text"},"Install ",t.type,i.a.createElement("div",{className:"small-dl-text"},"Installer"))),i.a.createElement("a",{href:t.link,className:"latest-download-button latest-download-button-grey a-button"},i.a.createElement("div",{className:"large-dl-text"},"Download ",t.type,i.a.createElement("div",{className:"small-dl-text"},t.extension+" - "+t.size+" MB")))):i.a.createElement("a",{href:t.link,className:"latest-download-button a-button"},i.a.createElement("div",{className:"large-dl-text"},"Download ",t.type,i.a.createElement("div",{className:"small-dl-text"},t.extension+" - "+t.size+" MB"))),i.a.createElement("div",{className:"latest-details"},i.a.createElement("p",null,i.a.createElement("a",{href:t.checksum_link,className:"dark-link",target:"_blank"},"Checksum"))))}),l=function(e){var t=e.platform;return i.a.createElement("div",null,i.a.createElement("div",{className:"latest-asset latest-grid-border",id:"latest-selector-"+t.name},i.a.createElement("img",{alt:"/"+t.official_name+" logo",src:"/"+t.logo}),i.a.createElement("h2",{className:"officialName"},t.official_name),i.a.createElement("p",{className:"releaseName"},t.release_name)),i.a.createElement("div",{id:"latest-info"},i.a.createElement("div",{id:"latest-info-"+t.name,className:"latest-info-container latest-grid-border"},i.a.createElement("div",{className:"platform-section"},i.a.createElement("img",{alt:"{platform.official_name} logo",src:t.logo}),i.a.createElement("h2",{className:"officialName"},t.official_name),i.a.createElement("p",{className:"releaseName"},i.a.createElement("a",{href:t.release_link,className:"dark-link",target:"_blank"},t.release_name)),i.a.createElement("p",{className:"releaseDateTime"},t.release_datetime,"}"),i.a.createElement("p",{className:"latest-selector-back-button"},i.a.createElement("i",{className:"fa fa-arrow-left","aria-hidden":"true"})," Back to platforms")),i.a.createElement("div",{className:"content-section"},i.a.createElement("div",{className:"latest-block"},t.binaries.map(function(e){return i.a.createElement(n,{binary:e})}))))))},s=function(e){var t=e.platforms;return i.a.createElement("div",null,i.a.createElement("h3",null,i.a.createElement("a",{href:""},"All Release Notes")),i.a.createElement("h2",{id:"latest-select-text",style:{marginBottom:"0.5rem"}},"Select a platform"),i.a.createElement("div",{id:"latest-selector"},i.a.createElement("a",{id:"docker_link",href:"",target:"_blank"},i.a.createElement("div",{className:"docker-asset latest-grid-border",id:"latest-selector-Docker"},i.a.createElement("img",{alt:"Docker logo",src:"./dist/assets/docker.png"}),i.a.createElement("h2",{className:"officialName"},"Docker"),i.a.createElement("p",{className:"releaseName"},"Official Image"))),t.map(function(e){return i.a.createElement(l,{platform:e})})))},c=a(186),d=(a(263),a(191));a.d(t,"Releases",function(){return m});var m=function(e){return i.a.createElement(o.a,null,i.a.createElement("main",{className:"grey-bg"},i.a.createElement("div",{id:"latest-page"},i.a.createElement("h1",{className:"large-title"},"Latest release"),i.a.createElement(d.a,{href:"./archive",type:"primary"},"Build archive"),i.a.createElement(d.a,{href:"./nightly",type:"secondary"},"Nightly builds"),i.a.createElement(c.a,{onVersionChange:function(e){console.log(e)},onJVMChange:function(e){console.log(e)}}),i.a.createElement("div",{id:"latest-container"},i.a.createElement(s,{platforms:[{name:"X64_LINUX",logo:"",official_name:"Linux x64",release_name:"jdk8u212-b03",release_link:"/",release_datetime:"2019-04-18 03:49:04",binaries:[{type:"JDK",link:"https://www.github.com",installer_link:"",size:"99",extension:".tar.gz"}]}]})))))};t.default=m},186:function(e,t,a){"use strict";var r=a(0),i=a.n(r),o=a(274),n=(a(34),a(180)),l=a(279),s=a(275),c=Object(s.a)({disableCaching:!0}),d=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return n.c(t,e),t.prototype.render=function(){var e=this.props,t=e.as,a=void 0===t?"label":t,i=e.children,o=e.className,s=e.disabled,d=e.styles,m=e.required,p=e.theme,h=c(d,{className:o,disabled:s,required:m,theme:p});return r.createElement(a,n.a({},Object(l.d)(this.props,l.c),{className:h.root}),i)},t}(r.Component),m=a(286),p=Object(o.a)(d,function(e){var t,a=e.theme,r=e.className,i=e.disabled,o=e.required;return{root:["ms-Label",a.fonts.medium,{color:a.semanticColors.bodyText,boxSizing:"border-box",boxShadow:"none",margin:0,display:"block",padding:"5px 0",wordWrap:"break-word",overflowWrap:"break-word"},i&&{color:a.semanticColors.disabledBodyText,selectors:(t={},t[m.f]={color:"GrayText"},t)},o&&{selectors:{"::after":{content:"' *'",color:a.semanticColors.errorText,paddingRight:12}}},r]}},void 0,{scope:"Label"}),h=a(285),u=a(293),f=a(219),g=a(265),b=a(291),y=a(280),k=Object(s.a)(),v=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._inputElement=r.createRef(),t._onRenderField=function(e){var a=e.onRenderLabel,i=void 0===a?t._onRenderLabel:a,o=e.id,l=e.imageSrc,s=e.imageAlt,c=e.selectedImageSrc,d=e.iconProps,m=e.imageSize?e.imageSize:{width:32,height:32};return r.createElement("label",{htmlFor:o,className:t._classNames.field},l&&r.createElement("div",{className:t._classNames.innerField,style:{height:m.height,width:m.width}},r.createElement("div",{className:t._classNames.imageWrapper},r.createElement(g.a,{src:l,alt:s||"",width:m.width,height:m.height})),r.createElement("div",{className:t._classNames.selectedImageWrapper},r.createElement(g.a,{src:c,alt:s||"",width:m.width,height:m.height}))),d?r.createElement("div",{className:t._classNames.innerField},r.createElement("div",{className:t._classNames.iconWrapper},r.createElement(b.a,n.a({},d)))):null,l||d?r.createElement("div",{className:t._classNames.labelWrapper,style:{maxWidth:2*m.width}},i(e)):i(e))},t._onRenderLabel=function(e){return r.createElement("span",{id:e.labelId,className:"ms-ChoiceFieldLabel"},e.text)},t}return n.c(t,e),t.prototype.render=function(){var e=this.props,t=e.ariaLabel,a=e.focused,i=e.required,o=e.theme,s=e.iconProps,c=e.imageSrc,d=e.imageSize,m=void 0===d?{width:32,height:32}:d,p=e.disabled,h=e.checked,u=e.id,f=e.styles,g=e.name,b=e.onRenderField,v=void 0===b?this._onRenderField:b,E=n.d(e,["ariaLabel","focused","required","theme","iconProps","imageSrc","imageSize","disabled","checked","id","styles","name","onRenderField"]);this._classNames=k(f,{theme:o,hasIcon:!!s,hasImage:!!c,checked:h,disabled:p,imageIsLarge:!!c&&(m.width>71||m.height>71),focused:a});var C=Object(l.d)(E,l.g),N=C.className,x=n.d(C,["className"]);return r.createElement("div",{className:this._classNames.root},r.createElement("div",{className:this._classNames.choiceFieldWrapper},r.createElement("input",n.a({"aria-label":t||void 0,ref:this._inputElement,id:u,className:Object(y.a)(this._classNames.input,N),type:"radio",name:g,disabled:p,checked:h,required:i,onChange:this._onChange.bind(this,this.props),onFocus:this._onFocus.bind(this,this.props),onBlur:this._onBlur.bind(this,this.props)},x)),v(this.props,this._onRenderField)))},t.prototype._onChange=function(e,t){var a=e.onChange;a&&a(t,e)},t.prototype._onBlur=function(e,t){var a=e.onBlur;a&&a(t,e)},t.prototype._onFocus=function(e,t){var a=e.onFocus;a&&a(t,e)},t}(r.Component),E=a(240),C={root:"ms-ChoiceField",choiceFieldWrapper:"ms-ChoiceField-wrapper",input:"ms-ChoiceField-input",field:"ms-ChoiceField-field",innerField:"ms-ChoiceField-innerField",imageWrapper:"ms-ChoiceField-imageWrapper",iconWrapper:"ms-ChoiceField-iconWrapper",labelWrapper:"ms-ChoiceField-labelWrapper",checked:"is-checked"},N="200ms";function x(e,t){return["is-inFocus",{selectors:(a={},a["."+E.a+" &"]={position:"relative",outline:"transparent",selectors:{"::-moz-focus-inner":{border:0},":after":{content:'""',top:-2,right:-2,bottom:-2,left:-2,pointerEvents:"none",border:"1px solid "+(t?e.neutralSecondary:e.neutralPrimary),position:"absolute",selectors:(r={},r[m.f]={borderColor:"WindowText",borderWidth:t?1:2},r)}}},a)}];var a,r}function _(e,t,a){return[t,{paddingBottom:2,transitionProperty:"opacity",transitionDuration:N,transitionTimingFunction:"ease",selectors:{".ms-Image":{display:"inline-block",borderStyle:"none"}}},(a?!e:e)&&["is-hidden",{position:"absolute",left:0,top:0,width:"100%",height:"100%",overflow:"hidden",opacity:0}]]}var w=Object(o.a)(v,function(e){var t,a,r,i,o,n=e.theme,l=e.hasIcon,s=e.hasImage,c=e.checked,d=e.disabled,p=e.imageIsLarge,h=e.focused,u=n.palette,f=n.semanticColors,g=Object(m.r)(C,n),b={selectors:{".ms-ChoiceFieldLabel":{color:f.bodyTextChecked},":before":{borderColor:c?f.inputBackgroundCheckedHovered:f.inputBorderHovered}}},y={borderColor:c?u.themeDark:u.neutralTertiaryAlt,selectors:{":before":{opacity:1,borderColor:c?u.themeDark:f.inputBorderHovered}}},k=[{content:'""',display:"inline-block",backgroundColor:f.bodyBackground,borderWidth:1,borderStyle:"solid",borderColor:f.smallInputBorder,width:20,height:20,fontWeight:"normal",position:"absolute",top:0,left:0,boxSizing:"border-box",transitionProperty:"border-color",transitionDuration:N,transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",borderRadius:"50%"},d&&{backgroundColor:c?f.bodyBackground:f.disabledText,borderColor:f.disabledText,selectors:(t={},t[m.f]={color:"GrayText"},t)},c&&{borderWidth:1,borderStyle:"solid",borderColor:d?f.disabledText:f.inputBackgroundChecked,selectors:(a={},a[m.f]={borderColor:"Highlight"},a)},(l||s)&&{top:3,right:3,left:"auto",opacity:!d&&c?1:0}],v=[{content:'""',width:0,height:0,borderRadius:"50%",position:"absolute",left:10,right:0,transitionProperty:"border-width",transitionDuration:N,transitionTimingFunction:"cubic-bezier(.4, 0, .23, 1)",boxSizing:"border-box"},c&&{borderWidth:5,borderStyle:"solid",borderColor:d?f.disabledText:f.inputBackgroundChecked,left:5,top:5,width:10,height:10,selectors:(r={},r[m.f]={borderColor:"Highlight"},r)},c&&(l||s)&&{top:8,right:8,left:"auto"}];return{root:[g.root,n.fonts.medium,{display:"flex",alignItems:"center",boxSizing:"border-box",color:f.bodyText,fontSize:m.d.medium,fontWeight:m.e.regular,minHeight:26,border:"none",position:"relative",marginTop:8,selectors:{".ms-ChoiceFieldLabel":{fontSize:m.d.medium,display:"inline-block"}}},!l&&!s&&{selectors:{".ms-ChoiceFieldLabel":{paddingLeft:"26px"}}},s&&"ms-ChoiceField--image",l&&"ms-ChoiceField--icon",(l||s)&&{display:"inline-flex",fontSize:0,margin:"0 4px 4px 0",paddingLeft:0,backgroundColor:u.neutralLighter,height:"100%"}],choiceFieldWrapper:[g.choiceFieldWrapper,h&&x(u,l||s)],input:[g.input,{position:"absolute",opacity:0,top:0,right:0,width:"100%",height:"100%",margin:0}],field:[g.field,c&&g.checked,{display:"inline-block",cursor:"pointer",marginTop:0,position:"relative",verticalAlign:"top",userSelect:"none",minHeight:20,selectors:{":hover":!d&&b,":focus":!d&&b,":before":k,":after":v}},l&&"ms-ChoiceField--icon",s&&"ms-ChoiceField-field--image",(l||s)&&{boxSizing:"content-box",cursor:"pointer",paddingTop:22,margin:0,textAlign:"center",transitionProperty:"all",transitionDuration:N,transitionTimingFunction:"ease",border:"2px solid transparent",justifyContent:"center",alignItems:"center",display:"flex",flexDirection:"column"},c&&{borderColor:u.themePrimary},(l||s)&&!d&&{selectors:{":hover":y,":focus":y}},d&&{cursor:"default",selectors:(i={".ms-ChoiceFieldLabel":{color:f.disabledBodyText}},i[m.f]={color:"GrayText"},i)}],innerField:[g.innerField,(l||s)&&{position:"relative",display:"inline-block",paddingLeft:30,paddingRight:30},(l||s)&&p&&{paddingLeft:24,paddingRight:24},(l||s)&&d&&{opacity:.25,selectors:(o={},o[m.f]={color:"GrayText",opacity:1},o)}],imageWrapper:_(!1,g.imageWrapper,c),selectedImageWrapper:_(!0,g.imageWrapper,c),iconWrapper:[g.iconWrapper,{fontSize:32,lineHeight:32,height:32}],labelWrapper:[g.labelWrapper,(l||s)&&{display:"block",position:"relative",margin:"4px 8px",height:30,lineHeight:15,overflow:"hidden",whiteSpace:"pre-wrap",textOverflow:"ellipsis",fontSize:m.d.medium,fontWeight:m.e.regular}]}},void 0,{scope:"ChoiceGroupOption"}),F=Object(s.a)(),S=function(e){function t(t){var a=e.call(this,t)||this;a._inputElement=r.createRef(),a.focusedVars={},a.changedVars={},a._onFocus=function(e){return a.focusedVars[e]?a.focusedVars[e]:a.focusedVars[e]=function(t,r){a.setState({keyFocused:e,keyChecked:a.state.keyChecked})}},a._onBlur=function(e,t){a.setState({keyFocused:void 0,keyChecked:a.state.keyChecked})},a._onChange=function(e){return a.changedVars[e]?a.changedVars[e]:a.changedVars[e]=function(t,r){var i=a.props,o=i.onChanged,n=i.onChange,l=i.selectedKey,s=i.options,c=void 0===s?[]:s;void 0===l&&a.setState({keyChecked:e});var d=Object(h.c)(c,function(t){return t.key===e});n?n(t,d):o&&o(d)}},Object(u.a)(a);var i=!!t.options&&t.options.some(function(e){return e.key===t.defaultSelectedKey});return a.state={keyChecked:void 0!==t.defaultSelectedKey&&i?t.defaultSelectedKey:a._getKeyChecked(t),keyFocused:void 0},a._id=Object(f.c)("ChoiceGroup"),a._labelId=Object(f.c)("ChoiceGroupLabel"),a}return n.c(t,e),Object.defineProperty(t.prototype,"checkedOption",{get:function(){var e=this.props.options,t=void 0===e?[]:e,a=this.state.keyChecked;return Object(h.c)(t,function(e){return e.key===a})},enumerable:!0,configurable:!0}),t.prototype.componentWillReceiveProps=function(e){var t=this._getKeyChecked(e);t!==this._getKeyChecked(this.props)&&this.setState({keyChecked:t})},t.prototype.render=function(){var e=this,t=this.props,a=t.className,i=t.theme,o=t.styles,s=t.options,c=t.label,d=t.required,m=t.disabled,h=t.name,u=t.role,f=this.state,g=f.keyChecked,b=f.keyFocused,y=Object(l.d)(this.props,l.c,["onChange","className","required"]),k=F(o,{theme:i,className:a,optionsContainIconOrImage:s.some(function(e){return Boolean(e.iconProps||e.imageSrc)})}),v=this.props.ariaLabelledBy?this.props.ariaLabelledBy:c?this._id+"-label":this.props["aria-labelledby"];return r.createElement("div",n.a({role:u,className:k.applicationRole},y),r.createElement("div",n.a({className:k.root,role:"radiogroup"},v&&{"aria-labelledby":v}),c&&r.createElement(p,{className:k.label,required:d,id:this._id+"-label"},c),r.createElement("div",{className:k.flexContainer},s.map(function(t){var a=n.a({},t,{focused:t.key===b,checked:t.key===g,disabled:t.disabled||m,id:e._id+"-"+t.key,labelId:e._labelId+"-"+t.key,name:h||e._id,required:d});return r.createElement(w,n.a({key:t.key,onBlur:e._onBlur,onFocus:e._onFocus(t.key),onChange:e._onChange(t.key)},a))}))))},t.prototype.focus=function(){var e=this.props.options;if(e)for(var t=0,a=e;t<a.length;t++){var r=a[t],i=document.getElementById(this._id+"-"+r.key);if(i&&"true"===i.getAttribute("data-is-focusable"))return void i.focus()}this._inputElement.current&&this._inputElement.current.focus()},t.prototype._getKeyChecked=function(e){if(void 0!==e.selectedKey)return e.selectedKey;var t=e.options,a=(void 0===t?[]:t).filter(function(e){return e.checked});return 0===a.length?void 0:a[0].key},t.defaultProps={options:[]},t}(r.Component),W={root:"ms-ChoiceFieldGroup",flexContainer:"ms-ChoiceFieldGroup-flexContainer"},O=Object(o.a)(S,function(e){var t=e.className,a=e.optionsContainIconOrImage,r=e.theme,i=Object(m.r)(W,r);return{applicationRole:t,root:[i.root,r.fonts.medium,{display:"block"}],flexContainer:[i.flexContainer,a&&{display:"flex",flexDirection:"row",flexWrap:"wrap"}]}},void 0,{scope:"ChoiceGroup"});t.a=function(e){var t=e.onVersionChange,a=e.onJVMChange;return i.a.createElement("div",{className:"btn-container"},i.a.createElement("form",{id:"jdk-selector",className:"btn-form"},i.a.createElement("h3",null,"1. Choose a Version"),i.a.createElement(O,{defaultSelectedKey:"A",onChange:t,options:[{key:"A",text:"OpenJDK 8 (LDS)"},{key:"B",text:"OpenJDK 9"},{key:"C",text:"OpenJDK 10"}]})),i.a.createElement("form",{id:"jvm-selector",className:"btn-form"},i.a.createElement("h3",null,"2. Choose a JVM",i.a.createElement("span",{className:"help-jvm"},"Help Me Choose"),i.a.createElement("div",{className:"popup-content",id:"jvm-popup"},i.a.createElement("div",{className:"popup-heading"},i.a.createElement("h4",null,"Choosing the right JVM")),i.a.createElement("div",{className:"popup-text"},i.a.createElement("p",{className:"hotspot-text"},i.a.createElement("b",null,"HotSpot")," is the VM from the OpenJDK community. It is the most widely used VM today and is used in Oracle’s JDK. It is suitable for all workloads."),i.a.createElement("p",null,"For more details see"," ",i.a.createElement("a",{rel:"noopener",target:"_blank",href:"https://openjdk.java.net/groups/hotspot/"},"OpenJDK HotSpot"),"."),i.a.createElement("p",{className:"openj9-text"},i.a.createElement("b",null,"Eclipse OpenJ9")," is the VM from the Eclipse community. It is an enterprise-grade VM designed for low memory usage and fast start-up and is used in IBM’s JDK. It is suitable for running all workloads."),i.a.createElement("p",null,"For more details see"," ",i.a.createElement("a",{rel:"noopener",target:"_blank",href:"https://www.eclipse.org/openj9/"},"Eclipse OpenJ9"),".")))),i.a.createElement(O,{defaultSelectedKey:"A",onChange:a,options:[{key:"A",text:"HotSpot"},{key:"B",text:"OpenJ9"}]})))}},190:function(e,t,a){"use strict";var r=a(0),i=a.n(r);t.a=function(){return i.a.createElement("div",{id:"loading"},i.a.createElement("img",{src:"dist/assets/loading_dots.gif",width:"40",height:"40",alt:"Content is loading."}))}},191:function(e,t,a){"use strict";var r=a(0),i=a.n(r);t.a=function(e){var t=e.href,a=e.type,r=e.children,o="primary"===a?"blue":"grey";return i.a.createElement("a",{href:t,className:o+"-button a-button"},i.a.createElement("div",null,i.a.createElement("span",null,r)," ",i.a.createElement("i",{className:"fa fa-arrow-circle-o-right","aria-hidden":"true"})))}}}]);
//# sourceMappingURL=component---src-pages-releases-tsx-d09a40b85175150e54cf.js.map