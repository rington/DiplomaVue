<template>
  <div style="background-color:#99d6ff;min-height:100vh;font-family:cursive">
    <NavBar />
    <div class="login-basic">
        <div
          class="card-body-header"
          style="font-family: CURSIVE; justify-content:center;"
        >
            <b-avatar style="padding-right:12px;right:35px" size="72px"></b-avatar>
        </div>
        <div style="padding: 10px;">
          <form>
            <div style="display: flex; padding-left:150px">
              <p
                class="h4 text-center mb-4 padding-title"
                style="color:#3D99F5;font-weight: bold;font-size: 40px;font-family: CURSIVE;"
              >Your personal account</p>              
            </div>
            <div class="grey-text">
                <b-form-file
                    v-model="file"
                    :state="Boolean(file)"
                    placeholder="Choose your avatar"
                    drop-placeholder="Drop file here..."
                ></b-form-file>
                <div class="mt-3">Selected file: {{ file ? file.name : '' }}</div>              
              <mdb-input label="Old password" icon="lock" type="password" v-model="password" />
              <mdb-input label="New password" icon="lock" type="password" v-model="newPassword" />
              <div style="display:flex;">    
                <div style="justify-content:center; display:flex; position:relative;left:80px"> 
                    <div style="mirgin-top:0px !important; padding-left:30px;">
                  <mdb-input label="First name" icon="user" type="text" v-model="name" />
                </div>
                <div style="mirgin-top:0px !important; padding-left:30px;">
                  <mdb-input label="Last name" icon="user" type="text" v-model="name" />
                </div>
                    </div>            
                
              </div>
            </div>
            <div class="text-center">
              <mdb-btn
                style="width:150px;padding:10px;font-family: CURSIVE;"
                class="btn-default"
                @click="Update()"
              >Update</mdb-btn>
            </div>
          </form>
        </div>
      </div>
    <Footer style="bottom:0"/>
  </div>
</template>

<script>
import Vue from "vue";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { mdbInput, mdbBtn } from "mdbvue";

export default Vue.extend({
    components:{
        NavBar,
        Footer,
        mdbInput,
        mdbBtn,
    },
    data(){
        return{
            file: null,
            password: null,
            newPassword: null
        }
    },
    methods:{
        Update(){
             this.$router.push("/");
        }
    }
})
</script>

<style>
.login-basic {
  left: 32%;
  width: 750px;
  position: relative;
  top: 50px;
  background-color: #e4f2ef;
}
</style>