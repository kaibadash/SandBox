(function(e){function t(t){for(var n,i,u=t[0],c=t[1],s=t[2],d=0,f=[];d<u.length;d++)i=u[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,u=1;u<a.length;u++){var c=a[u];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/SandBox/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("85ec"),r=a.n(n);r.a},"0a9c":function(e,t,a){},1920:function(e,t,a){"use strict";var n=a("0a9c"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Examples")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h1",[e._v("Tuna examples")]),null!=e.errorMessage?a("div",[a("div",{staticClass:"error"},[e._v(e._s(e.errorMessage))])]):e._e(),a("h2",[e._v("Audio: "+e._s(e.audio))]),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"electric_piano",value:"electric_piano.m4a"},domProps:{checked:e._q(e.audio,"electric_piano.m4a")},on:{change:function(t){e.audio="electric_piano.m4a"}}}),a("label",{attrs:{for:"electric_piano"}},[e._v("electric_piano")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"bass",value:"bass.m4a"},domProps:{checked:e._q(e.audio,"bass.m4a")},on:{change:function(t){e.audio="bass.m4a"}}}),a("label",{attrs:{for:"bass"}},[e._v("bass")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"guitar",value:"guitar.m4a"},domProps:{checked:e._q(e.audio,"guitar.m4a")},on:{change:function(t){e.audio="guitar.m4a"}}}),a("label",{attrs:{for:"guitar"}},[e._v("guitar")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"vocaloid",value:"vocaloid.m4a"},domProps:{checked:e._q(e.audio,"vocaloid.m4a")},on:{change:function(t){e.audio="vocaloid.m4a"}}}),a("label",{attrs:{for:"vocaloid"}},[e._v("vocaloid(kiritan)")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"english",value:"english.m4a"},domProps:{checked:e._q(e.audio,"english.m4a")},on:{change:function(t){e.audio="english.m4a"}}}),a("label",{attrs:{for:"english"}},[e._v("english")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"japanese",value:"japanese.m4a"},domProps:{checked:e._q(e.audio,"japanese.m4a")},on:{change:function(t){e.audio="japanese.m4a"}}}),a("label",{attrs:{for:"japanese"}},[e._v("japanese")]),a("br"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.audio,expression:"audio"}],attrs:{type:"radio",id:"upload",value:"upload"},domProps:{checked:e._q(e.audio,"upload")},on:{change:function(t){e.audio="upload"}}}),a("label",{attrs:{for:"upload"}},[e._v("upload")]),"upload"==e.audio?a("div",[a("label",[a("input",{attrs:{type:"file",placeholder:"audio"},on:{change:e.fileUploaded}})])]):e._e()]),a("button",{on:{click:function(t){return e.play()}}},[e._v("No Effect")]),a("button",{on:{click:function(t){return e.stop()}}},[e._v("Stop")]),e._l(e.effectors,(function(t){return a("div",{key:t.name},[a("Effector",{attrs:{effector:t},on:{effectChanged:e.effectChanged}})],1)}))],2)},u=[],c=(a("4de4"),a("d81d"),a("b64b"),a("96cf"),a("1da1")),s=a("6502"),l=a.n(s),d=(a("4160"),a("b0c0"),a("159b"),a("d4ec")),f=a("bee2"),p=(a("c975"),function(){function e(t,a){var n,r,o;Object(d["a"])(this,e),this.name=t,this.value=null!==(n=a.value)&&void 0!==n?n:0,this.min=null!==(r=a.min)&&void 0!==r?r:.1,this.max=null!==(o=a.max)&&void 0!==o?o:100,this.automatable=!!a.automatable,this.type=a.type}return Object(f["a"])(e,[{key:"step",value:function(){return this.name.indexOf("Index")>0?1:0==this.min?.1:this.min}}]),e}()),m=function(){function e(t,a){Object(d["a"])(this,e),this.effectName=a,this.parameters=[];var n=t.prototype[a];this.parameters=Object.keys(n.prototype.defaults).map((function(e){return new p(e,n.prototype.defaults[e])}))}return Object(f["a"])(e,[{key:"toTunaParameters",value:function(){var e={};return this.parameters.forEach((function(t){return e[t.name]=t.value})),e}}]),e}(),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"effector"},[a("button",{staticClass:"effector_button",on:{click:function(t){return e.effectSelected()}}},[e._v(e._s(e.effector.effectName))]),e._l(e.effector.parameters,(function(t){return a("div",{key:t.name},[a("label",{attrs:{for:"parameter.name"}},[e._v(e._s(t.name))]),"boolean"!=t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"parameter.value"}],attrs:{type:"range",min:t.min,max:t.max,step:t.step()},domProps:{value:t.value},on:{__r:function(a){return e.$set(t,"value",a.target.value)}}}):e._e(),"boolean"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"parameter.value"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(a){var n=t.value,r=a.target,o=!!r.checked;if(Array.isArray(n)){var i=null,u=e._i(n,i);r.checked?u<0&&e.$set(t,"value",n.concat([i])):u>-1&&e.$set(t,"value",n.slice(0,u).concat(n.slice(u+1)))}else e.$set(t,"value",o)}}}):e._e(),e._v(" "+e._s(t.value)+"("+e._s(t.type)+") ")])}))],2)},h=[],b={name:"Effector",props:["effector"],methods:{effectSelected:function(){this.$emit("effectChanged",this.effector.effectName)}}},y=b,g=(a("1920"),a("2877")),_=Object(g["a"])(y,v,h,!1,null,"56b6c1c3",null),x=_.exports,w=(a("d3b7"),function(){function e(){Object(d["a"])(this,e)}return Object(f["a"])(e,null,[{key:"readAsArrayBufferSync",value:function(e){return new Promise((function(t,a){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){a(n.error)},n.readAsArrayBuffer(e)}))}}]),e}()),k={name:"Examples",components:{Effector:x},data:function(){return{effectors:[],audioContext:null,source:null,errorMessage:null,audio:"electric_piano.m4a",uploadedAudio:null}},mounted:function(){this.effectors=Object.keys(l.a.prototype).filter((function(e){return"toString"!=e})).map((function(e){return new m(l.a,e)})),this.audioContext=new AudioContext},methods:{play:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a,r=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("upload"!=this.audio){e.next=3;break}return this.playBuffer(this.uploadedAudio,t),e.abrupt("return");case 3:a=new XMLHttpRequest,a.open("GET",n["a"].config.publicPath+this.audio),a.responseType="arraybuffer",a.onload=function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(a){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r.audioContext.decodeAudioData(a.target.response);case 2:n=e.sent,r.playBuffer(n,t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.send(null);case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),stop:function(){if(this.source)try{this.source.stop()}catch(e){console.log(e)}},effectChanged:function(e){console.log("eventChanged",e),this.stop(),this.play(e)},fileUploaded:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.target.files||t.dataTransfer.files,e.t0=this.audioContext,e.next=4,w.readAsArrayBufferSync(a[0]);case 4:return e.t1=e.sent,e.next=7,e.t0.decodeAudioData.call(e.t0,e.t1);case 7:this.uploadedAudio=e.sent;case 8:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),playBuffer:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,a){var n,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(console.log(t),this.source=this.audioContext.createBufferSource(),this.source.buffer=t,a){e.next=7;break}return this.source.start(this.audioContext.currentTime),this.source.connect(this.audioContext.destination),e.abrupt("return");case 7:n=this.effectors.filter((function(e){return e.effectName==a}))[0],console.log(a,n.toTunaParameters());try{r=new l.a(this.audioContext),o=new r[a](n.toTunaParameters()),this.source.connect(o),o.connect(this.audioContext.destination),this.source.start(this.audioContext.currentTime)}catch(i){this.stop(),this.errorMessage=i}case 10:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}()}},j=k,O=(a("764a"),Object(g["a"])(j,i,u,!1,null,"694d58d4",null)),P=O.exports,C={name:"App",components:{Examples:P}},A=C,N=(a("034f"),Object(g["a"])(A,r,o,!1,null,null,null)),S=N.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(S)}}).$mount("#app")},"73bc":function(e,t,a){},"764a":function(e,t,a){"use strict";var n=a("73bc"),r=a.n(n);r.a},"85ec":function(e,t,a){}});
//# sourceMappingURL=app.0571d287.js.map