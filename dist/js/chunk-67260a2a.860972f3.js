(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67260a2a","chunk-2d0c5768","chunk-2d0ba2fa"],{"1ca1":function(t,e,a){"use strict";a.r(e);var s=a("cfad"),i=a("9e39"),n=a("9969"),l=a("d478"),r=a("99ef"),o=a("efed"),u=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e(n["a"],[e(s["a"],{attrs:{cols:"12",md:"6"}},[e(l["a"],{attrs:{label:"Jenis BA",dense:"",items:t.listBA,rules:t.baRule,disabled:t.show},model:{value:t.surat.jenis,callback:function(e){t.$set(t.surat,"jenis",e)},expression:"surat.jenis"}})],1),e(s["a"],{attrs:{cols:"12",md:"6"}},[e("date-picker",{attrs:{label:"Tanggal BA"},model:{value:t.surat.tanggal_surat,callback:function(e){t.$set(t.surat,"tanggal_surat",e)},expression:"surat.tanggal_surat"}})],1)],1),e(n["a"],[e(s["a"],{attrs:{cols:"12",md:"6"}},[e(r["a"],{attrs:{label:"Nama WP",dense:"",rules:t.rules},model:{value:t.surat.nama_wp,callback:function(e){t.$set(t.surat,"nama_wp",e)},expression:"surat.nama_wp"}})],1),e(s["a"],{attrs:{cols:"12",md:"6"}},[e(r["a"],{attrs:{label:"NPWP",dense:"",rules:t.rules},model:{value:t.surat.npwp,callback:function(e){t.$set(t.surat,"npwp",e)},expression:"surat.npwp"}})],1)],1),e(n["a"],[e(s["a"],{attrs:{cols:"12",md:"6"}},[e(l["a"],{attrs:{label:"Nama AR",dense:"",multiple:"",items:t.listAR,rules:t.arRule},model:{value:t.surat.nama_ar,callback:function(e){t.$set(t.surat,"nama_ar",e)},expression:"surat.nama_ar"}})],1),e(s["a"],{attrs:{cols:"12",md:"6"}},[e(i["a"],{attrs:{accept:"application/pdf",label:"File Surat",dense:"",rules:t.fileRule},model:{value:t.surat.file_surat,callback:function(e){t.$set(t.surat,"file_surat",e)},expression:"surat.file_surat"}})],1)],1),e(n["a"],[e(s["a"],{attrs:{cols:"12",md:"6"}},[e(o["a"],{attrs:{label:"Keterangan",dense:"","no-resize":"",rows:"2"},model:{value:t.surat.keterangan,callback:function(e){t.$set(t.surat,"keterangan",e)},expression:"surat.keterangan"}})],1)],1)],1)},c=[],h=a("3ecc"),p=a("35ac"),d=a("d797"),f=a("19d6");const g=()=>a.e("chunk-2e493f59").then(a.bind(null,"9c51"));var m=d["a"].extend({components:{DatePicker:g},data(){return{listAR:p["LIST_AR"],listBA:["BA","BAP2DK"],rules:[t=>!!t||"Mohon untuk diisi"],baRule:[t=>t.length>0||"Mohon untuk diisi"],arRule:[t=>t.length>0||"Mohon untuk diisi"]}},computed:{fileRule(){return[t=>Object(h["checkExtensions"])(t)||"File tidak valid!"]},...Object(f["d"])(["surat"]),...Object(f["d"])("edit",["show"])}}),y=m,b=a("8619"),v=Object(b["a"])(y,u,c,!1,null,null,null);e["default"]=v.exports},"35ac":function(t,e,a){"use strict";a.r(e),a.d(e,"LIST_AR",(function(){return s}));const s=["Eko Adi Nugroho","Suwarti","Irhamni","Supriadi","Dian Juwita Sari","Yoshia Samosir"]},"399f":function(t,e,a){"use strict";var s=a("99ef");e["a"]=s["a"]},"3ecc":function(t,e,a){"use strict";a.r(e),a.d(e,"checkExtensions",(function(){return i}));const s=["application/pdf"];function i(t){return!t||s.includes(t.type)}},"47f1":function(t,e,a){},9549:function(t,e,a){},"9e39":function(t,e,a){"use strict";a("c44b"),a("1884"),a("47f1");var s=a("399f"),i=a("889a"),n=a("a52d"),l=a("caad"),r=a("9f5d");e["a"]=s["a"].extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:t=>"boolean"===typeof t||[1e3,1024].includes(t)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:t=>Object(n["H"])(t).every(t=>null!=t&&"object"===typeof t)}},computed:{classes(){return{...s["a"].options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const t=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,t);const e=this.internalArrayValue.reduce((t,{size:e=0})=>t+e,0);return this.$vuetify.lang.t(this.counterSizeString,t,Object(n["w"])(e,1024===this.base))},internalArrayValue(){return Object(n["H"])(this.internalValue)},internalValue:{get(){return this.lazyValue},set(t){this.lazyValue=t,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map(t=>{const{name:e="",size:a=0}=t,s=this.truncateText(e);return this.showSize?`${s} (${Object(n["w"])(a,1024===this.base)})`:s}):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(t){!0===t&&Object(l["b"])("readonly is not supported on <v-file-input>",this)},immediate:!0},value(t){const e=this.multiple?t:t?[t]:[];Object(n["k"])(e,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map((t,e)=>this.$createElement(i["a"],{props:{small:this.smallChips},on:{"click:close":()=>{const t=this.internalValue;t.splice(e,1),this.internalValue=t}}},[t])):[]},genControl(){const t=s["a"].options.methods.genControl.call(this);return this.hideInput&&(t.data.style=Object(r["d"])(t.data.style,{display:"none"})),t},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.data.attrs.multiple=this.multiple,delete t.data.domProps.value,delete t.data.on.input,t.data.on.change=this.onInput,[this.genSelections(),t]},genPrependSlot(){if(!this.prependIcon)return null;const t=this.genIcon("prepend",()=>{this.$refs.input.click()});return this.genSlot("prepend","outer",[t])},genSelectionText(){const t=this.text.length;return t<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,t)]},genSelections(){const t=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach((e,a)=>{this.$scopedSlots.selection&&t.push(this.$scopedSlots.selection({text:this.text[a],file:e,index:a}))}):t.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},t)},genTextFieldSlot(){const t=s["a"].options.methods.genTextFieldSlot.call(this);return t.data.on={...t.data.on||{},click:t=>{t.target&&"LABEL"===t.target.nodeName||this.$refs.input.click()}},t},onInput(t){const e=[...t.target.files||[]];this.internalValue=this.multiple?e:e[0],this.initialValue=this.internalValue},onKeyDown(t){this.$emit("keydown",t)},truncateText(t){if(t.length<Number(this.truncateLength))return t;const e=Math.floor((Number(this.truncateLength)-1)/2);return`${t.slice(0,e)}…${t.slice(t.length-e)}`}}})},efed:function(t,e,a){"use strict";a("9549");var s=a("99ef"),i=a("c25e");const n=Object(i["a"])(s["a"]);e["a"]=n.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s["a"].options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick(()=>{var e;t?this.calculateInputHeight():null===(e=this.$refs.input)||void 0===e||e.style.removeProperty("height")})},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout(()=>{this.autoGrow&&this.calculateInputHeight()},0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,a=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(a,e)+"px"},genInput(){const t=s["a"].options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){s["a"].options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})}}]);
//# sourceMappingURL=chunk-67260a2a.860972f3.js.map