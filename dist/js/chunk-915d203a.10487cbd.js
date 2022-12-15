(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-915d203a","chunk-2d22fdbe","chunk-437a5b30"],{"023d":function(t,e,i){},b3ea:function(t,e,i){},b993:function(t,e,i){"use strict";i("1884"),i("b3ea");var s=i("a46a"),n=i("c253"),o=i("68d4"),a=i("c25e"),l=Object(a["a"])(s["a"],n["a"],o["a"]).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const t=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",t)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(t){const e=[this.__scrim];return this.isActive&&e.push(this.genContent()),t("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},e)}}),r=l,c=i("a52d"),d=i("d797");e["a"]=d["a"].extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(t){this.isActive&&(t?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const t=new r({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});t.$mount();const e=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");e&&e.insertBefore(t.$el,e.firstChild),this.overlay=t},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame(()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=Object(c["u"])(this.$el)),this.overlay.value=!0)}),!0},removeOverlay(t=!0){this.overlay&&(Object(c["a"])(this.overlay.$el,"transitionend",()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)}),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener(t){if("key"in t){if(["INPUT","TEXTAREA","SELECT"].includes(t.target.tagName)||t.target.isContentEditable)return;const e=[c["y"].up,c["y"].pageup],i=[c["y"].down,c["y"].pagedown];if(e.includes(t.keyCode))t.deltaY=-1;else{if(!i.includes(t.keyCode))return;t.deltaY=1}}(t.target===this.overlay||"keydown"!==t.type&&t.target===document.body||this.checkPath(t))&&t.preventDefault()},hasScrollbar(t){if(!t||t.nodeType!==Node.ELEMENT_NODE)return!1;const e=window.getComputedStyle(t);return(["auto","scroll"].includes(e.overflowY)||"SELECT"===t.tagName)&&t.scrollHeight>t.clientHeight||["auto","scroll"].includes(e.overflowX)&&t.scrollWidth>t.clientWidth},shouldScroll(t,e){if(t.hasAttribute("data-app"))return!1;const i=e.shiftKey||e.deltaX?"x":"y",s="y"===i?e.deltaY:e.deltaX||e.deltaY;let n,o;"y"===i?(n=0===t.scrollTop,o=t.scrollTop+t.clientHeight===t.scrollHeight):(n=0===t.scrollLeft,o=t.scrollLeft+t.clientWidth===t.scrollWidth);const a=s<0,l=s>0;return!(n||!a)||(!(o||!l)||!(!n&&!o)&&this.shouldScroll(t.parentNode,e))},isInside(t,e){return t===e||null!==t&&t!==document.body&&this.isInside(t.parentNode,e)},checkPath(t){const e=Object(c["g"])(t);if("keydown"===t.type&&e[0]===document.body){const e=this.$refs.dialog,i=window.getSelection().anchorNode;return!(e&&this.hasScrollbar(e)&&this.isInside(i,e))||!this.shouldScroll(e,t)}for(let i=0;i<e.length;i++){const s=e[i];if(s===document)return!0;if(s===document.documentElement)return!0;if(s===this.$refs.content)return!0;if(this.hasScrollbar(s))return!this.shouldScroll(s,t)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(c["b"])(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},c08f:function(t,e,i){"use strict";i.r(e);var s=i("e318"),n=i("fff6"),o=i("cfad"),a=i("9969"),l=function(){var t=this,e=t._self._c;t._self._setupProxy;return t.show?e("app-modal",[e(s["a"],[e(n["c"],[t._v("Delete Surat?")]),e(n["b"],[e("span",[t._v("Anda akan menghapus surat dengan Nomor Surat "),e("b",[t._v(t._s(t.nomor_surat))])])]),e(n["a"],[e(a["a"],{attrs:{"no-gutters":"",justify:"end"}},[e(o["a"],{staticClass:"mx-2",attrs:{cols:"6",md:"4"}},[e("app-button",{attrs:{text:"Delete",color:"red darken-2"},on:{clicked:t.deleteSurat}})],1),e(o["a"],{staticClass:"mx-2",attrs:{cols:"6",md:"4"}},[e("app-button",{attrs:{text:"Cancel",color:"primary lighten-2"},on:{clicked:t.hideDialog}})],1)],1)],1)],1)],1):t._e()},r=[],c=i("ea8d"),d=i("f97b"),h=i("d797"),u=i("19d6"),v=h["a"].extend({components:{AppModal:d["default"],AppButton:c["default"]},computed:Object(u["d"])("delete",["show","nomor_surat"]),methods:Object(u["b"])("delete",["hideDialog","deleteSurat"])}),m=v,y=i("8619"),p=Object(y["a"])(m,l,r,!1,null,null,null);e["default"]=p.exports},ea8d:function(t,e,i){"use strict";i.r(e);var s=i("5d3f"),n=i("7dd1"),o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(s["a"],{attrs:{block:"",color:t.color,disabled:!t.valid},on:{click:t.clicked}},[t._v(t._s(t.text)+" "),t.icon?e(n["a"],{attrs:{right:""}},[t._v(t._s(t.icon))]):t._e()],1)},a=[],l=i("d797"),r=l["a"].extend({props:{valid:{default:!0,type:Boolean},text:String,color:String,icon:String},name:"AppButton",methods:{clicked(){this.$emit("clicked")}}}),c=r,d=i("8619"),h=Object(d["a"])(c,o,a,!1,null,null,null);e["default"]=h.exports},f97b:function(t,e,i){"use strict";i.r(e);i("023d");var s=i("d009"),n=i("6b12"),o=i("7dff"),a=i("9ccc"),l=i("b993"),r=i("b7b5"),c=i("44c1"),d=i("1c38"),h=i("c25e"),u=i("caad"),v=i("a52d");const m=Object(h["a"])(o["a"],a["a"],l["a"],r["a"],c["a"],n["a"]);var y=m.extend({name:"v-dialog",directives:{ClickOutside:d["a"]},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[("v-dialog "+this.contentClass).trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(t){var e;t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(e=this.previousActiveElement)||void 0===e||e.focus())},fullscreen(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&Object(u["e"])("full-width",this)},beforeMount(){this.$nextTick(()=>{this.isBooted=this.isActive,this.isActive&&this.show()})},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick(()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout(()=>this.animate=!1,150)})},closeConditional(t){const e=t.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(e)||this.overlay&&e&&!this.overlay.$el.contains(e))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):l["a"].options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick(()=>{this.$nextTick(()=>{var t,e;(null===(t=this.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(e=this.$refs.dialog)||void 0===e||e.focus()),this.bind()})})},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(t){this.$emit("click:outside",t),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(t){if(t.keyCode===v["y"].esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const t=this.getActivator();this.$nextTick(()=>t&&t.focus())}this.$emit("keydown",t)},onFocusin(t){if(!t||!this.retainFocus)return;const e=t.target;if(e&&this.$refs.dialog&&![document,this.$refs.dialog].includes(e)&&!this.$refs.dialog.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(t=>t.contains(e))){const t=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),e=[...t].find(t=>!t.hasAttribute("disabled")&&!t.matches('[tabindex="-1"]'));e&&e.focus()}},genContent(){return this.showLazyContent(()=>[this.$createElement(s["a"],{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])])},genTransition(){const t=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[t]):t},genInnerContent(){const t={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(t.style={...t.style,maxWidth:Object(v["h"])(this.maxWidth),width:Object(v["h"])(this.width)}),this.$createElement("div",t,this.getContentSlot())}},render(t){return t("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}}),p=function(){var t=this,e=t._self._c;t._self._setupProxy;return e(y,{attrs:{"max-width":t.$vuetify.breakpoint.mdAndUp?t.width:"90%",persistent:""},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._t("default")],2)},f=[],g=i("d797"),b=i("19d6"),w=g["a"].extend({props:{width:{default:"50%"}},computed:{...Object(b["d"])({modal:"showModal"})}}),k=w,x=i("8619"),O=Object(x["a"])(k,p,f,!1,null,null,null);e["default"]=O.exports}}]);
//# sourceMappingURL=chunk-915d203a.10487cbd.js.map