(this["webpackJsonpmagic-converter"]=this["webpackJsonpmagic-converter"]||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),i=n.n(c),l=n(1),r=(n(9),function(e){var t=e.onClose,n=e.message,c=Object(a.useState)("popup_attention"),i=Object(l.a)(c,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){var e=setTimeout((function(){s("popup_attention popup_attention-fadein")}),100),n=setTimeout((function(){s("popup_attention")}),2e3),a=setTimeout(t,2500);return function(){clearTimeout(e),clearTimeout(n),clearTimeout(a)}}),[n]),o.a.createElement("div",{className:r},n)}),s=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),u=s[0],d=s[1],v=Object(a.useState)(""),p=Object(l.a)(v,2),m=p[0],f=p[1],E=Object(a.useState)(""),b=Object(l.a)(E,2),O=b[0],j=b[1];Object(a.useEffect)((function(){m&&j(function(e){var t,n,a,o,c,i=["photos","video","posts","videos","photo"],l="",r="";return e?-1!==e.indexOf("photos")||-1!==e.indexOf("photo")?(l=null===(t=e.split("/a.")[0])||void 0===t?void 0:t.replace(i[0],i[2]),r=null===(n=e.split("/a.")[1])||void 0===n?void 0:n.split("/")[1],"".concat(l,"/").concat(r)):-1!==e.indexOf("videos")?null===(a=l=null===e||void 0===e?void 0:e.split("?")[0])||void 0===a?void 0:a.replace("videos","posts"):-1!==e.indexOf("posts")?l=null===e||void 0===e?void 0:e.split("?")[0]:-1!==e.indexOf("video")?(l=null===(o=e.split("/a.")[0])||void 0===o?void 0:o.replace("video","posts"),r=null===(c=e.split("/a.")[1])||void 0===c?void 0:c.split("/")[1],"".concat(l,"/").concat(r)):"":""}(m))}),[m]),Object(a.useEffect)((function(){O&&(window.navigator.clipboard.writeText(O),d("\u0421\u0441\u044b\u043b\u043a\u0430 \u0441\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u043d\u0430 \u0432 \u0431\u0443\u0444\u0435\u0440"),c(!0))}),[O]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"convert"},o.a.createElement("div",{className:"convert-input"},o.a.createElement("div",null,"\u043f\u043e\u043b\u043d\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430"),o.a.createElement("input",{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c \u0441\u044e\u0434\u0430 \u043f\u043e\u043b\u043d\u0443\u044e \u0441\u0441\u044b\u043b\u043a\u0443",type:"text",onChange:function(e){c(!1),f(e.currentTarget.value)},value:m})),o.a.createElement("div",{className:"convert-input"},o.a.createElement("div",null,"\u043a\u043e\u0440\u043e\u0442\u043a\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430 ".concat(O&&"(\u043d\u0430\u0436\u043c\u0438 \u0438 \u044f \u043e\u0442\u043a\u0440\u043e\u044e\u0441\u044c \u0432 \u043d\u043e\u0432\u043e\u0439 \u0432\u043a\u043b\u0430\u0434\u043a\u0435)")),o.a.createElement("div",{className:"convert-label"},O&&o.a.createElement("span",{onClick:function(){return window.open(O)}},O),!O&&"\u0412 \u044d\u0442\u043e\u043c \u043c\u0435\u0441\u0442\u0435 \u0431\u0443\u0434\u0435\u0442 \u0433\u043e\u0442\u043e\u0432\u0430\u044f \u0441\u0441\u044b\u043b\u043a\u0430")),o.a.createElement("div",{className:"convert-input-custom"},o.a.createElement("div",{className:"convert-input-custom-btn",onClick:function(){f(""),c(!0),d("\u041f\u043e\u043b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u043e\u0447\u0438\u0449\u0435\u043d\u043e")}},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u043b\u0435"),o.a.createElement("div",{className:"convert-input-custom-btn",onClick:function(){d("\u0411\u0443\u0444\u0444\u0435\u0440 \u043e\u0447\u0438\u0449\u0435\u043d"),c(!0),window.navigator.clipboard.writeText("")}},"\u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0431\u0443\u0444\u0435\u0440"))),o.a.createElement("div",{className:"footer"},o.a.createElement("div",null,"\u041f\u043e\u0441\u043b\u0435 \u0432\u0441\u0442\u0430\u0432\u043a\u0438 \u043f\u043e\u043b\u043d\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0438, \u0433\u043e\u0442\u043e\u0432\u0430\u044f \u0441\u0441\u044b\u043a\u043b\u0430 \u043a\u043e\u043f\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0432 \u0431\u0443\u0444\u0444\u0435\u0440 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438"),o.a.createElement("a",{href:"tg://resolve?domain=codernd"},"\u0435\u0441\u0442\u044c \u0432\u043e\u043f\u0440\u043e\u0441\u044b? ",o.a.createElement("br",null),"\u0442\u0435\u043b\u0435\u0433\u0430: @codernd")),n&&o.a.createElement(r,{onClose:c,message:u}))};n(10);i.a.render(o.a.createElement(s,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.cd46a5bc.chunk.js.map