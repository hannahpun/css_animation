webpackJsonp([3],{MB8Y:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={name:"page1",components:{Question:a("KkIS").a},data:function(){return{details:{q:"Q1",nextPage:"page2",title:"If one day you get a gift that can change the rule of the world, which ability will you choose?",note:"Choose the answer appeared in your mind instantly"},options:["Destroy all humans in the world","Make the war never happened","You won’t get old and live forever"]}},mounted:function(){var e=new TimelineMax({onComplete:this.myComplete}),t=new TimelineMax,a=new TimelineMax;e.from(".square",1.2,{top:"150%",delay:1.5}).to(".square",5,{rotation:180,delay:.3,ease:Power3.easeOut}),t.from(".triangle",1.2,{top:"150%",delay:1.5,ease:Power3.easeOut}).to(".triangle",5,{rotation:360,delay:.3}),a.from(".mainShape",1,{x:"100%",delay:.5}).from(".circle",1.2,{top:"150%",delay:1,ease:Power3.easeOut}).to(".circle",5,{scale:1.1,delay:.3})},methods:{myComplete:function(){console.log("finish2")}}},n={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page1 page"},[t("Question",{attrs:{detail:this.details,options:this.options}}),this._v(" "),this._m(0)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mainShape"},[t("div",{staticClass:"square"}),this._v(" "),t("div",{staticClass:"circle"}),this._v(" "),t("div",{staticClass:"triangle"})])}]};var o=a("VU/8")(i,n,!1,function(e){a("lVIM")},"data-v-3ebe9017",null);t.default=o.exports},lVIM:function(e,t){}});
//# sourceMappingURL=3.ac750ba2dc7870bb64fa.js.map