(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{553:function(e,s,t){"use strict";t.r(s);var r=t(6),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"regexp-prefer-predefined-assertion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#regexp-prefer-predefined-assertion"}},[e._v("#")]),e._v(" regexp/prefer-predefined-assertion")]),e._v(" "),t("blockquote",[t("p",[e._v("prefer predefined assertion over equivalent lookarounds")])]),e._v(" "),t("ul",[t("li",[e._v("🔧 The "),t("code",[e._v("--fix")]),e._v(" option on the "),t("a",{attrs:{href:"https://eslint.org/docs/user-guide/command-line-interface#fixing-problems",target:"_blank",rel:"noopener noreferrer"}},[e._v("command line"),t("OutboundLink")],1),e._v(" can automatically fix some of the problems reported by this rule.")])]),e._v(" "),t("h2",{attrs:{id:"rule-details"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rule-details"}},[e._v("#")]),e._v(" 📖 Rule Details")]),e._v(" "),t("p",[e._v("All predefined assertions ("),t("code",[e._v("\\b")]),e._v(", "),t("code",[e._v("\\B")]),e._v(", "),t("code",[e._v("^")]),e._v(", and "),t("code",[e._v("$")]),e._v(") can be expressed as lookaheads and lookbehinds. E.g. "),t("code",[e._v("/a$/")]),e._v(" is the same as "),t("code",[e._v("/a(?![^])/")]),e._v(".")]),e._v(" "),t("p",[e._v("In most cases, it's better to use the predefined assertions because they are better known.")]),e._v(" "),t("eslint-code-block",{attrs:{fix:""}},[t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v('/* eslint regexp/prefer-predefined-assertion: "error" */')]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✓ GOOD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?=\\W)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("/* ✗ BAD */")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?![^])")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a(?!\\w)")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("var")]),e._v(" foo "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token regex"}},[t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")]),t("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[e._v("a+(?!\\w)(?:\\s|bc+)+")]),t("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[e._v("/")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])])]),e._v(" "),t("h2",{attrs:{id:"options"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" 🔧 Options")]),e._v(" "),t("p",[e._v("Nothing.")]),e._v(" "),t("h2",{attrs:{id:"version"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[e._v("#")]),e._v(" 🚀 Version")]),e._v(" "),t("p",[e._v("This rule was introduced in eslint-plugin-regexp v0.10.0")]),e._v(" "),t("h2",{attrs:{id:"implementation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" 🔍 Implementation")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/lib/rules/prefer-predefined-assertion.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Rule source"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/ota-meshi/eslint-plugin-regexp/blob/master/tests/lib/rules/prefer-predefined-assertion.ts",target:"_blank",rel:"noopener noreferrer"}},[e._v("Test source"),t("OutboundLink")],1)])])],1)}),[],!1,null,null,null);s.default=a.exports}}]);