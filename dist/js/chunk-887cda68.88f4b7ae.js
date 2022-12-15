(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-887cda68","chunk-2d22fdbe"],{"8bbc":function(s,a,e){"use strict";e.r(a);var t=e("cfad"),r=e("bde14"),n=e("fbb1"),o=e("9969"),i=e("99ef"),l=function(){var s=this,a=s._self._c;s._self._setupProxy;return a(r["a"],{attrs:{fluid:""}},[a("h2",[s._v("Pengaturan")]),a(n["a"]),a(o["a"],{staticClass:"mt-2",attrs:{justify:"start"}},[a(t["a"],{attrs:{md:"2"}},[a("span",[s._v("Ubah Password")])]),a(t["a"],{attrs:{md:"4"}},[a(i["a"],{staticClass:"mb-2",attrs:{type:"password",label:"Password Baru","hide-details":"true",filled:"",dense:""},model:{value:s.password,callback:function(a){s.password=a},expression:"password"}}),a(i["a"],{staticClass:"mb-2",attrs:{type:"password",label:"Ulangi Password","hide-details":"true",filled:"",dense:""},model:{value:s.repassword,callback:function(a){s.repassword=a},expression:"repassword"}}),a("app-button",{attrs:{text:"Ubah Password",color:"primary lighten-1",valid:s.isSamePassword},on:{clicked:s.changePassword}})],1)],1),a(o["a"],{staticClass:"mt-2",attrs:{justify:"start"}},[a(t["a"],{attrs:{md:"2"}},[a("span",[s._v("Ubah Username")])]),a(t["a"],{attrs:{md:"4"}},[a(i["a"],{staticClass:"mb-2",attrs:{label:"Masukkan Username Baru","hide-details":"true",filled:"",dense:""},model:{value:s.newUsername,callback:function(a){s.newUsername=a},expression:"newUsername"}}),a("app-button",{attrs:{text:"Username Baru",color:"primary lighten-1",valid:s.isValidUsername},on:{clicked:s.changeUsername}})],1)],1),a("span",{staticClass:"text-caption"},[s._v("*Setelah mengubah username Anda akan teralihkan untuk login ulang")]),a(o["a"],{staticClass:"mt-2",attrs:{justify:"start"}},[a(t["a"],{attrs:{md:"2"}},[a("span",[s._v("Ubah Nama")])]),a(t["a"],{attrs:{md:"4"}},[a(i["a"],{staticClass:"mb-2",attrs:{label:"Ganti Nama","hide-details":"true",filled:"",dense:""},model:{value:s.name,callback:function(a){s.name=a},expression:"name"}}),a("app-button",{attrs:{text:"Ubah",color:"primary lighten-1",valid:s.isValidName},on:{clicked:s.changeName}})],1)],1),a(o["a"],{staticClass:"mt-2",attrs:{justify:"start"}},[a(t["a"],{attrs:{md:"6"}},[a("app-button",{attrs:{text:"Logout",color:"primary lighten-1"},on:{clicked:s.logout}})],1)],1)],1)},c=[],d=e("ea8d"),u=e("d797"),m=e("19d6"),h=u["a"].extend({components:{AppButton:d["default"]},data:()=>({password:"",repassword:"",newUsername:"",name:""}),computed:{isSamePassword(){return Boolean(this.password&&this.password===this.repassword)},isValidUsername(){return Boolean(this.newUsername&&this.newUsername.length>=4&&!this.newUsername.includes(" "))},isValidName(){return Boolean(this.name)}},methods:{...Object(m["c"])("snackbar",["showSnackbar"]),async changePassword(){try{await this.axios.put("/user/password",{username:this.$cookies.get("username"),new_password:this.password}),this.password="",this.repassword="",this.showSnackbar({msg:"Berhasil Ubah Password",color:"success"})}catch(s){console.log(s)}},async changeUsername(){try{await this.axios.put("user/username",{username:this.$cookies.get("username"),new_username:this.newUsername}),this.newUsername="",this.showSnackbar({msg:"Berhasil Ubah Username",color:"success"}),this.$cookies.remove("username"),this.$cookies.remove("session_id"),this.$cookies.remove("isAdmin"),this.$router.go(0)}catch(s){console.log(s)}},async changeName(){try{await this.axios.put("user/name",{username:this.$cookies.get("username"),new_name:this.name}),this.name="",this.showSnackbar({msg:"Berhasil Ganti Nama",color:"success"}),this.$router.go(0)}catch(s){console.log(s)}},async logout(){try{await this.axios.post("user/logout",{username:this.$cookies.get("username")}),this.$cookies.remove("username"),this.$cookies.remove("session_id"),this.$cookies.remove("isAdmin"),this.$router.go(0)}catch(s){console.log(s)}}}}),p=h,w=e("8619"),b=Object(w["a"])(p,l,c,!1,null,null,null);a["default"]=b.exports},ea8d:function(s,a,e){"use strict";e.r(a);var t=e("5d3f"),r=e("7dd1"),n=function(){var s=this,a=s._self._c;s._self._setupProxy;return a(t["a"],{attrs:{block:"",color:s.color,disabled:!s.valid},on:{click:s.clicked}},[s._v(s._s(s.text)+" "),s.icon?a(r["a"],{attrs:{right:""}},[s._v(s._s(s.icon))]):s._e()],1)},o=[],i=e("d797"),l=i["a"].extend({props:{valid:{default:!0,type:Boolean},text:String,color:String,icon:String},name:"AppButton",methods:{clicked(){this.$emit("clicked")}}}),c=l,d=e("8619"),u=Object(d["a"])(c,n,o,!1,null,null,null);a["default"]=u.exports}}]);
//# sourceMappingURL=chunk-887cda68.88f4b7ae.js.map