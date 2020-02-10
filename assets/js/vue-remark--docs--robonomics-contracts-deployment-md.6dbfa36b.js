(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{248:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},299:function(e,t,o){"use strict";o.r(t);var n=o(34),r=o(248),a=o(0);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.a.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},c=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===s(i[e])&&"function"==typeof i[e].render?t[e]=i[e]:o[e]=function(){return i[e]}}))},l=a.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",d={excerpt:null,title:"Contracts deployment"};var u=function(e){e.options[p]&&(e.options[p]=d),a.a.util.defineReactive(e.options,p,d),e.options.computed=l.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},h=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("h1",{attrs:{id:"contracts-deployment"}},[o("a",{attrs:{href:"#contracts-deployment","aria-hidden":"true"}},[e._v("#")]),e._v("Contracts deployment")]),o("p",[e._v("Robonomics network works on top of the existing Ethereum network. The protocol is implemented by smart contracts. A source code is on "),o("a",{attrs:{href:"https://github.com/airalab/robonomics_contracts",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Github")]),e._v(". Airalab team deploys new version of contracts and supports a current one. ")]),o("p",[e._v("In this lesson we are going to learn more about these contracts. To do this we will deploy our test copy. Also we are going to use these contracts in the future lessons. ")]),o("p",[e._v("You need a client running Ethereum node. You can use either one of existing network (e.g. Mainnet, Ropsten, Kovan) or your local one. For testing purpose we suggest to use this "),o("a",{attrs:{href:"https://github.com/f-o-a-m/cliquebait",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("docker container")])]),o("pre",[o("code",{pre:!0},[e._v("$ docker run --rm -d -p 9545:8545 -p 9546:8546 foamspace/cliquebait:latest\n")])]),o("p",[e._v("Next step is obtain a copy of robonomics contracts source code:")]),o("pre",[o("code",{pre:!0},[e._v("$ git clone --recursive https://github.com/airalab/robonomics_contracts\n")])]),o("p",[e._v("A file truffle.js contains available networks for migration. We will work with development network. When you are in "),o("code",{pre:!0},[e._v("robonomics_contracts")]),e._v(" directory install dependencies and run a migration:")]),o("pre",[o("code",{pre:!0},[e._v("npm install // to install dependencies\ntruffle migrate --network development\n")])]),o("p",[e._v("It's time to learn how to create a new lighthouse. For more information about Robonomics network and Lighthouse in particular read "),o("a",{attrs:{href:"https://robonomics.network/robonomics_white_paper_en.pdf",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("white paper")]),e._v(". Briefly lighthouse o distributes the running time of providers. Every lighthouse serves its own broadcast channel. Ask and Bid messages come into this channel. XRT tokens are used as a payment. ")]),o("p",[e._v("When XRT contracts was deployed some tokens were issued on our account. Let's check the balance:")]),o("pre",[o("code",{pre:!0},[e._v("$ truffle --network development console\n> xrt = XRT.at(XRT.address)\n> xrt.balanceOf(web3.eth.accounts[0])\n")])]),o("p",[e._v("And that's how we create a lighthouse:")]),o("pre",[o("code",{pre:!0},[e._v('> factory = LiabilityFactory.at(LiabilityFactory.address)\n> tx = factory.createLighthouse(1000, 10, "test")\n> tx.then(x => {laddress = x.logs[0].args.lighthouse})\n> l = LighthouseLib.at(laddress)\n')])]),o("p",[e._v("Instead of deploying a lighthouse contract every time we need a new one, we ask a factory to do this job. A "),o("code",{pre:!0},[e._v("l")]),e._v(" variable contains lighthouse instance. The lighthouse should be able to spend our tokens. Let's make an approve and check everything went well:")]),o("pre",[o("code",{pre:!0},[e._v("> xrt.approve(l.address,1000)\n> xrt.allowance(web3.eth.accounts[0],l.address)\n")])]),o("p",[e._v("And a very important step is become a worker:")]),o("pre",[o("code",{pre:!0},[e._v("> l.refill(1000)\n")])]),o("p",[e._v("Each worker has to put a stake. In this case it's 1000 Wn.")]),o("p",[e._v("Below is a table of our addresses:")]),o("table",[o("thead",[o("tr",[o("th",[e._v("Contract")]),o("th",[e._v("Address")]),o("th",[e._v("ENS name")])])]),o("tbody",[o("tr",[o("td",[e._v("ENSRegistry")]),o("td",[e._v("0x80c77a7de64a15450bb8cf45ece4fbb7bae6fb49")]),o("td")]),o("tr",[o("td",[e._v("XRT")]),o("td",[e._v("0x673583a369eb3a830a5571208cf6eb7ce83987f8")]),o("td",[e._v("xrt.3.robonomics.eth")])]),o("tr",[o("td",[e._v("LiabilityFactory")]),o("td",[e._v("0x1b3190e00c1903266862af1f31714d4b81ef59b2")]),o("td",[e._v("factory.3.robonomics.eth")])]),o("tr",[o("td",[e._v("Lighthouse")]),o("td",[e._v("0xd2b78c032b6c8851a8b6cbf950caa02a77618d8e")]),o("td",[e._v("test.lighthouse.3.robonomics.eth")])])])])])}),[],!1,null,null,null);"function"==typeof c&&c(h),"function"==typeof u&&u(h);t.default=h.exports}}]);