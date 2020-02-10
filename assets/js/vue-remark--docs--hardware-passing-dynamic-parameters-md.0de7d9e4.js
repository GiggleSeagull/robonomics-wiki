(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{248:function(s,t,a){"use strict";t.a={name:"VueRemarkRoot",render:function(s){return s("div",null,this.$slots.default)}}},324:function(s,t,a){"use strict";a.r(t);var e=a(34),r=a(248),n=a(0);function l(s){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(s){return typeof s}:function(s){return s&&"function"==typeof Symbol&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s})(s)}n.a.config.optionMergeStrategies;var p={VueRemarkRoot:r.a},i=function(s){var t=s.options.components=s.options.components||{},a=s.options.computed=s.options.computed||{};Object.keys(p).forEach((function(s){"object"===l(p[s])&&"function"==typeof p[s].render?t[s]=p[s]:a[s]=function(){return p[s]}}))},o=n.a.config.optionMergeStrategies,_="__vueRemarkFrontMatter",v={excerpt:null,title:"Passing dynamic parameters"};var c=function(s){s.options[_]&&(s.options[_]=v),n.a.util.defineReactive(s.options,_,v),s.options.computed=o.computed({$frontmatter:function(){return s.options[_]}},s.options.computed)},d=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("VueRemarkRoot",[a("h1",{attrs:{id:"passing-dynamic-parameters"}},[a("a",{attrs:{href:"#passing-dynamic-parameters","aria-hidden":"true"}},[s._v("#")]),s._v("Passing dynamic parameters")]),a("p",[s._v("In "),a("a",{attrs:{href:"/docs/connect-simple-cps/"}},[s._v("previous")]),s._v(" example we discussed how to create a simple CPS with Arduino. Our first CPS is able to do only one task: to blink a led. We suggest you to get through the first lesson. Now let's expand the example and teach our board to blink blue or red led depending on objective parameter.")]),a("blockquote",[a("p",[s._v("The source code of this lesson is "),a("a",{attrs:{href:"https://github.com/airalab/robonomics_tutorials/tree/master/arduino_with_args",target:"_blank",rel:"nofollow noopener noreferrer"}},[s._v("here")]),s._v(".")])]),a("h2",{attrs:{id:"arduino"}},[a("a",{attrs:{href:"#arduino","aria-hidden":"true"}},[s._v("#")]),s._v("Arduino")]),a("p",[s._v("The only difference in Arduino source code is instead of subscribing to one topic now we subscribe to "),a("code",{pre:!0},[s._v("/blink_red")]),s._v(" and "),a("code",{pre:!0},[s._v("/blink_blue")]),s._v(" topics")]),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-c"}},[s._v("  "),a("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-meta-string"}},[s._v("<ros.h>")])]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-meta"}},[s._v("#"),a("span",{pre:!0,attrs:{class:"hljs-meta-keyword"}},[s._v("include")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-meta-string"}},[s._v("<std_msgs/Empty.h>")])]),s._v("\n\n  ros::NodeHandle nh;\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blink")]),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("int")]),s._v(" led, "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("int")]),s._v(" mil)")]),s._v(" ")]),s._v("{\n\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("digitalWrite")]),s._v("(led, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("HIGH")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("delay")]),s._v("(mil);\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("digitalWrite")]),s._v("(led, "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("LOW")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("delay")]),s._v("(mil);\n\n  }\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blinkRedCb")]),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" std_msgs::Empty& msg)")]),s._v(" ")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("blink")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("blink")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("blink")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n  }\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blinkBlueCb")]),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("("),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("const")]),s._v(" std_msgs::Empty& msg)")]),s._v(" ")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("blink")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("blink")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("blink")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("500")]),s._v(");\n  }\n\n  ros::Subscriber<std_msgs::Empty> subRed("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blink_red"')]),s._v(", &blinkRedCb);\n  ros::Subscriber<std_msgs::Empty> subBlue("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blink_blue"')]),s._v(", &blinkBlueCb);\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("setup")]),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("\n  ")]),s._v("{\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("pinMode")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("13")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("OUTPUT")]),s._v(");\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("pinMode")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("12")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("OUTPUT")]),s._v(");\n\n    nh.initNode();\n    nh.subscribe(subRed);\n    nh.subscribe(subBlue);\n  }\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("void")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("loop")]),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("()")]),s._v("\n  ")]),s._v("{\n    nh.spinOnce();\n    "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("delay")]),s._v("("),a("span",{pre:!0,attrs:{class:"hljs-number"}},[s._v("1")]),s._v(");\n  }")])]),a("h2",{attrs:{id:"ros"}},[a("a",{attrs:{href:"#ros","aria-hidden":"true"}},[s._v("#")]),s._v("ROS")]),a("p",[s._v("We can pass arguments via objective which points to rosbag file. Have a look at "),a("code",{pre:!0},[s._v("blink.py")]),s._v(" script. The main difference is "),a("code",{pre:!0},[s._v("blink()")]),s._v(" method:")]),a("pre",[a("code",{pre:!0,attrs:{class:"hljs language-python"}},[a("span",{pre:!0,attrs:{class:"hljs-function"}},[a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-title"}},[s._v("blink")]),a("span",{pre:!0,attrs:{class:"hljs-params"}},[s._v("(self, data)")]),s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" data.data == "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"blue"')]),s._v(":\n      rospy.loginfo("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Blinking blue..."')]),s._v(")\n      self.blink_blue.publish(Empty())\n\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("if")]),s._v(" data.data == "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"red"')]),s._v(":\n      rospy.loginfo("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Blinking red..."')]),s._v(")\n      self.blink_red.publish(Empty())\n\n  rospy.wait_for_service("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/liability/finish'")]),s._v(")\n  fin = rospy.ServiceProxy("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v("'/liability/finish'")]),s._v(", FinishLiability)\n  fin(FinishLiabilityRequest(address=self.liability, success="),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("True")]),s._v("))\n  rospy.loginfo("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"Finished"')]),s._v(")")])]),a("p",[s._v("Now "),a("code",{pre:!0},[s._v("/blink")]),s._v(" topic has a "),a("code",{pre:!0},[s._v("String")]),s._v(" type. You can find prepared rosbags in "),a("code",{pre:!0},[s._v("rosbag")]),s._v(" folder.")]),a("h2",{attrs:{id:"aira"}},[a("a",{attrs:{href:"#aira","aria-hidden":"true"}},[s._v("#")]),s._v("AIRA")]),a("p",[s._v("Connect to AIRA client via SSH as described "),a("a",{attrs:{href:"/docs/aira-connecting-via-ssh/"}},[s._v("here")]),s._v(". Do not forget to add "),a("code",{pre:!0},[s._v("COM1")]),s._v(" port in settings. Run the following command:")]),a("pre",[a("code",{pre:!0},[s._v("$ rosrun arduino_with_args blink.py\n")])]),a("p",[s._v("Also we need to add rosbag files to IPFS:")]),a("pre",[a("code",{pre:!0},[s._v("$ ipfs add rosbag/blink_blue.bag\n$ ipfs add rosbag/blink_red.bag\n")])]),a("p",[a("strong",[s._v("Before the next step you should approve XRT tokens on the Factory.")])]),a("p",[s._v("The last step is to build Dapp and launch. Take a look at the previous "),a("a",{attrs:{href:"/docs/connect-simple-cps/"}},[s._v("lesson")]),s._v(". To make Arduino blink the blue led send blue demand and blue offer messages. For the red one send corresponding messages.")]),a("p",[s._v("That's it! Now you are able to pass dynamic parameters to your cyber-physical system agent!")])])}),[],!1,null,null,null);"function"==typeof i&&i(d),"function"==typeof c&&c(d);t.default=d.exports}}]);