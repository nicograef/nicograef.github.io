(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("hHhE"),n("HAE/");var a=n("q1tI"),i=r(a),o=r(n("Gytx"));function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,s=[];function f(){u=e(s.map((function(e){return e.props}))),p.canUseDOM?t(u):n&&(u=n(u))}var p=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.peek=function(){return u},a.rewind=function(){if(a.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,s=[],e};var c=a.prototype;return c.shouldComponentUpdate=function(e){return!o(e,this.props)},c.componentWillMount=function(){s.push(this),f()},c.componentDidUpdate=function(){f()},c.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},c.render=function(){return i.createElement(r,this.props)},a}(a.Component);return c(p,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),c(p,"canUseDOM",l),p}}},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"id":"Site","siteMetadata":{"title":"Nico Gräf - Software Engineer","description":"I\'m Nico Gräf, a software engineer focused on building and designing beautiful web & app experiences.","author":"Nico Gräf"}}}}')},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!c(u))return!1;var s=e[u],f=t[u];if(!1===(a=n?n.call(r,s,f,u):void 0)||void 0===a&&s!==f)return!1}return!0}},"HF/j":function(e,t,n){e.exports=n.p+"static/me-2375a3dec75b1cb79e032693587dbf08.jpg"},KNvH:function(e,t,n){e.exports=n.p+"static/freiburg-challenge-af5b1e489651f0699e61c2779e50aa8f.jpg"},LR6s:function(e,t,n){e.exports=n.p+"static/country-quiz-ab38488e6c0a48c82ca5f4fee8e4f4b6.jpg"},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),i=n("vhPU"),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),i=n("hswa").f,o=n("kJMx").f,c=n("quPj"),l=n("C/va"),u=r.RegExp,s=u,f=u.prototype,p=/a/g,d=/a/g,T=new u(p)!==p;if(n("nh4g")&&(!T||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,u(p)!=p||u(d)==d||"/a/i"!=u(p,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),i=void 0===t;return!n&&r&&e.constructor===u&&i?e:a(T?new s(r&&!i?e.source:e,t):s((r=e instanceof u)?e.source:e,r&&i?l.call(e):t),n?this:f,u)};for(var E=function(e){e in u||i(u,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},m=o(s),h=0;m.length>h;)E(m[h++]);f.constructor=u,u.prototype=f,n("KroJ")(r,"RegExp",u)}n("elZq")("RegExp")},RXBc:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("HF/j"),o=n.n(i),c=function(e){var t=e.className,n=e.maxWidth;return a.a.createElement("img",{src:o.a,alt:"Nico Graef",className:t,style:{maxWidth:n,borderRadius:"50%"}})},l=n("yhPK"),u=n.n(l),s=function(){return a.a.createElement("header",{className:"intro"},a.a.createElement("h1",null,a.a.createElement("span",{role:"img","aria-label":"waving hand",className:u.a.wave},"👋"),"Moinseeen!"),a.a.createElement("div",null,a.a.createElement(c,{className:u.a.avatar}),a.a.createElement("h2",null,"I'm ",a.a.createElement("b",null,"Nico Gräf"),", a software engineer focused on building and designing beautiful web & app experiences.")))},f=n("yOav"),p=n.n(f),d=function(e){var t=e.title,n=e.url,r=e.inline;return a.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer",key:t,className:r&&p.a.inline},t)},T=function(){return a.a.createElement("section",{className:"about"},a.a.createElement("h3",null,"About Me"),a.a.createElement("p",null,"Since I got into programming 10 years ago I worked on many different projects for fun and professionally. While studying computer science and electrical engineering at the University of Freiburg I earned my living as a freelance software developer, web designer and online marketing consultant. In 2017 I"," ",a.a.createElement(d,{inline:!0,title:"co-founded a startup",url:"https://urknall.co"})," trying to build a platform for community-driven projects. During this time I developed a native android app, a hybrid app and several features for the web backend. Recently I'm highly interested in Progressive Web Apps built with React JS."),a.a.createElement("p",null,"To free my mind from async code and linter warnings I like to cook with/for friends, listen to a podcast while having a cup of coffee or running at the Dreisam."))},E=n("H7pE"),m=n.n(E),h=function(e){var t=e.title,n=e.skills;return a.a.createElement("div",{className:m.a.skillCategory},a.a.createElement("h4",{className:m.a.skillCategoryTitle},t),a.a.createElement("ul",{className:m.a.skillList},n.map((function(e){return a.a.createElement("li",{key:e,className:m.a.skillListItem},e)}))))},A=function(){return a.a.createElement("section",{className:"skills full-width"},a.a.createElement("div",{style:{display:"flex",justifyContent:"space-between",flexWrap:"wrap",alignItems:"flex-end"}},g.map((function(e){return a.a.createElement(h,{key:e.title,title:e.title,skills:e.skills})}))))},g=[{title:"Languages",skills:["Typescript","Javascript","HTML & CSS","Java","Python","JSON"]},{title:"Frameworks",skills:["React JS","Node JS","Express JS","Gatsby","VueJS","Material UI","Progressive Web Apps","Jest JS"]},{title:"Tools",skills:["Git & Github","Bash & Linux","VS Code","Chrome DevTools","NPM","Postman","Cordova & Phonegap"]},{title:"Design",skills:["Adobe XD","Wireframing","Design Thinking","User Testing","Responsive Web Design"]},{title:"Backend",skills:["Firebase","MongoDB","Express","CouchDB"]},{title:"DevOps",skills:["Docker","Testing","Travis CI","Heroku"]}],y=n("KNvH"),b=n.n(y),S=n("tMX/"),v=n.n(S),_=n("ZnFJ"),R=n.n(_),P=n("LR6s"),w=n.n(P),M=n("dzOm"),O=n.n(M),I=function(e){var t=e.text;return a.a.createElement(a.a.Fragment,null,a.a.createElement("span",{style:{background:"#dbe2ef",padding:"3px 6px",borderRadius:3,marginRight:6,whiteSpace:"nowrap"}},a.a.createElement("small",null,t))," ")},N=function(){return C.map((function(e,t){return a.a.createElement("section",{key:e.title,className:"project big "+(t%2?"left":"right")},a.a.createElement("h3",null,e.title," ",a.a.createElement("span",{style:{fontSize:"small"}},e.links&&e.links.map((function(e){return a.a.createElement(d,{key:e.title,title:e.title,url:e.url})})))),a.a.createElement("div",null,a.a.createElement("p",null,e.tags.map((function(e){return a.a.createElement(I,{key:e,text:e})}))),a.a.createElement("p",null,e.description),a.a.createElement("img",{src:e.image,alt:e.title,title:e.title})))}))},C=[{title:"Freiburg Challenge",description:"A location-based social game for Freiburg I'm currently working on.",image:b.a,tags:["PWA","Typescript","React JS","Firebase","Material UI"]},{title:"What The Flag",description:"A Quizduell-like game with questions about countries, capitals and flags where users can challenge each other. Developed for my room mates as a Progressive Web App with the MERN Stack.",image:v.a,tags:["PWA","MongoDB","React JS","Express JS"],links:[{title:"App",url:"https://what-the-flag.herokuapp.com"},{title:"Github",url:"https://github.com/nicograef/what-the-flag"}]},{title:"Sudoku Android App",description:"A native android app to learn and play sudoku puzzles. I started this project in early 2016 'cause I wanted to know how native app developing works. After publishing the first version I made a total revamp including a new design and a Sudoku of the Week.",image:R.a,tags:["Android","Firebase","Java","Native"],links:[{title:"Play Store",url:"https://play.google.com/store/apps/details?id=de.nicograef.sudokutrainer"},{title:"Github",url:"https://github.com/nicograef/sudoku-trainer"}]},{title:"Board Games App",description:"A functional mockup for a board games community app based on Framework7 and Cordova/Phonegap I designed for a friend's student project.",image:O.a,tags:["Cordova","Phonegap","Framework7","Mockup","Prototype"],links:[{title:"Demo",url:"https://youtu.be/43I4IdAd3HA"},{title:"Github",url:"https://github.com/nicograef/board-games-community-app"}]},{title:"Country Quiz NPM Module",description:"I created this module as part of the What The Flag project and released it to NPM just out of curiosity. It lets you create questions and quizzes about countries, flags and capitals.",image:w.a,tags:["NPM","Travis CI","Documentation","Test Coverage"],links:[{title:"NPM",url:"https://www.npmjs.com/package/country-quiz"},{title:"Github",url:"https://github.com/nicograef/country-quiz"}]}],k=(n("tUrg"),n("RwA0")),L=n.n(k),G=function(){return a.a.createElement("footer",{className:L.a.footer},a.a.createElement("div",{className:L.a.links},H.map((function(e){return a.a.createElement(d,{url:e.url,title:e.title,key:e.title,className:L.a.link})}))))},H=[{title:"Email",url:"mailto:graef.nico@gmail.com"},{title:"Github",url:"https://github.com/nicograef"},{title:"Twitter",url:"https://twitter.com/nicograef"},{title:"LinkedIn",url:"https://linkedin.com/in/nicograef"},{title:"Xing",url:"https://xing.com/profile/Nico_Graef2/"}],j=n("EH9Q"),x=n("TJpk"),F=n.n(x);function B(e){var t=e.description,n=e.lang,r=e.meta,i=(e.title,j.data.site),o=t||i.siteMetadata.description;return a.a.createElement(F.a,{htmlAttributes:{lang:n},title:i.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:i.siteMetadata.title},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:i.siteMetadata.title},{name:"twitter:description",content:o}].concat(r)})}B.defaultProps={lang:"en",meta:[],description:""};var U=B;t.default=function(){return a.a.createElement("div",{id:"site"},a.a.createElement(U,null),a.a.createElement(s,null),a.a.createElement(T,null),a.a.createElement(A,null),a.a.createElement(N,null),a.a.createElement(G,null))}},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=f(n("q1tI")),o=f(n("17x9")),c=f(n("8+s/")),l=f(n("bmMU")),u=n("v1p5"),s=n("hFT/");function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function T(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,m,h,A=(0,c.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),g=(E=A,h=m=function(e){function t(){return d(this,t),T(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,l.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=c,t.titleAttributes=r({},o),t));case s.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case s.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=p(a,["children"]),c=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(i.default.Component),m.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},m.defaultProps={defer:!0,encodeSpecialCharacters:!0},m.peek=E.peek,m.rewind=function(){var e=E.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},h);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},ZnFJ:function(e,t,n){e.exports=n.p+"static/sudoku-app-e958d87911d995fa3860a26c6269b304.jpg"},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,l,u,s=r(t),f=r(n);if(s&&f){if((l=t.length)!=n.length)return!1;for(c=l;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=f)return!1;var p=t instanceof Date,d=n instanceof Date;if(p!=d)return!1;if(p&&d)return t.getTime()==n.getTime();var T=t instanceof RegExp,E=n instanceof RegExp;if(T!=E)return!1;if(T&&E)return t.toString()==n.toString();var m=a(t);if((l=m.length)!==a(n).length)return!1;for(c=l;0!=c--;)if(!i.call(n,m[c]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(c=l;0!=c--;)if(!("_owner"===(u=m[c])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},dzOm:function(e,t,n){e.exports=n.p+"static/board-games-community-app-3d532e986b6aa45c86c636378529c6b2.png"},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},"tMX/":function(e,t,n){e.exports=n.p+"static/what-the-flag-f08fc01bf0ab42cddedb30b0498473bb.jpg"},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=l(n("q1tI")),o=l(n("MgzW")),c=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}var u,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},f=function(e){var t=m(e,c.TAG_NAMES.TITLE),n=m(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=m(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return m(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},T=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var l=i[o],u=l.toLowerCase();-1===t.indexOf(u)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===c.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(l)||l!==c.TAG_PROPERTIES.INNER_HTML&&l!==c.TAG_PROPERTIES.CSS_TEXT&&l!==c.TAG_PROPERTIES.ITEM_PROP||(n=l)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),l=0;l<i.length;l++){var u=i[l],s=(0,o.default)({},a[u],r[u]);a[u]=s}return e}),[]).reverse()},m=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){h(e)}),0)}),A=function(e){return clearTimeout(e)},g="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},S=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.onChangeClientState,s=e.scriptTags,f=e.styleTags,p=e.title,d=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,a),R(p,d);var T={baseTag:w(c.TAG_NAMES.BASE,n),linkTags:w(c.TAG_NAMES.LINK,i),metaTags:w(c.TAG_NAMES.META,o),noscriptTags:w(c.TAG_NAMES.NOSCRIPT,l),scriptTags:w(c.TAG_NAMES.SCRIPT,s),styleTags:w(c.TAG_NAMES.STYLE,f)},E={},m={};Object.keys(T).forEach((function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(m[e]=T[e].oldTags)})),t&&t(),u(e,E,m)},_=function(e){return Array.isArray(e)?e.join(""):e},R=function(e,t){void 0!==e&&document.title!==e&&(document.title=_(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),l=0;l<o.length;l++){var u=o[l],s=t[u]||"";n.getAttribute(u)!==s&&n.setAttribute(u,s),-1===a.indexOf(u)&&a.push(u);var f=i.indexOf(u);-1!==f&&i.splice(f,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);a.length===i.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,o.join(","))}},w=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var l=void 0===t[r]?"":t[r];n.setAttribute(r,l)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},M=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},I=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=O(n,r),[i.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=M(n),i=_(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(i,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return O(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){S&&y(S),e.defer?S=g((function(){v(e,(function(){S=null}))})):(v(e),S=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,l=e.noscriptTags,u=e.scriptTags,s=e.styleTags,f=e.title,p=void 0===f?"":f,d=e.titleAttributes;return{base:I(c.TAG_NAMES.BASE,t,r),bodyAttributes:I(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:I(c.ATTRIBUTE_NAMES.HTML,a,r),link:I(c.TAG_NAMES.LINK,i,r),meta:I(c.TAG_NAMES.META,o,r),noscript:I(c.TAG_NAMES.NOSCRIPT,l,r),script:I(c.TAG_NAMES.SCRIPT,u,r),style:I(c.TAG_NAMES.STYLE,s,r),title:I(c.TAG_NAMES.TITLE,{title:p,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:T([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:m(e,c.HELMET_PROPS.DEFER),encode:m(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:f(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=g,t.warn=b}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=component---src-pages-index-js-c774f084cb2b566d2afa.js.map