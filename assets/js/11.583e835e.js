(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{380:function(t,e,n){"use strict";n.r(e);var a=n(11),s=Object(a.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"accessing-accounts"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#accessing-accounts"}},[t._v("#")]),t._v(" Accessing Accounts")]),t._v(" "),n("p",[t._v("User accounts are used in a variety of contexts in Ethereum, including as identifiers and for signing transactions. In order to request a signature from the user or have the user approve a transaction, one must be able to access the user's accounts. The "),n("code",[t._v("wallet methods")]),t._v(" below involve a signature or transaction approval and all require the sending account as a function parameter.")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("eth_sendTransaction")])]),t._v(" "),n("li",[n("code",[t._v("eth_sign")]),t._v(" (insecure and unadvised to use)")]),t._v(" "),n("li",[n("code",[t._v("eth_personalSign")])]),t._v(" "),n("li",[n("code",[t._v("eth_signTypedData")])])]),t._v(" "),n("p",[t._v("Once you've "),n("RouterLink",{attrs:{to:"/guide/getting-started.html"}},[t._v("connected to a user")]),t._v(", you can always re-check the current account by checking "),n("code",[t._v("ethereum.selectedAddress")]),t._v(".")],1),t._v(" "),n("p",[n("strong",[t._v("Example:")]),t._v(" "),n("ChangeAccount")],1),t._v(" "),n("p",[t._v("If you'd like to be notified when the address changes, we have an event you can subscribe to:")]),t._v(" "),n("div",{staticClass:"language-javascript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[t._v("ethereum"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'accountsChanged'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("accounts")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Time to reload your interface with accounts[0]!")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),n("p",[t._v("If the first account in the returned array isn't the account you expected, you should notify the user!\nIn the future, the accounts array may contain more than one account.\nHowever, the first account in the array will continue to be considered as the user's \"selected\" account.")])])}),[],!1,null,null,null);e.default=s.exports}}]);