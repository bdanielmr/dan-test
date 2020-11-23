<template>
<!-- Page render card list user 
  from array of object user module vuex-->
  <div class="dan-list">
    <div class="a-dan-list-wrapp">
      <div class="a-dan-list-container">
        <dan-card :key="use.id+use.name" v-for="use in inUser.usersApi" :user="use"/>
      </div>
      <div class="a-dan-list-container-two">
        <dan-card :key="user.id" v-for="user in inUser.users" :user="user"/>
      </div>
    </div>
  </div>
</template>

<script>
//dependecies and coomponents 
import DanCard from "@/components/DanCard.vue"
import store from '@/store/index.js'
import { mapState  } from 'vuex';
import Nprogress from 'nprogress'

export default {
  name: "DanList",
  components: {
    DanCard
  },
  //routering fetch acctions to module inUser store vuex
  beforeRouteEnter(routeTo, routeFrom, next){
    Nprogress.start()
    store.dispatch('inUser/fetchUsers').then(()=>{
      Nprogress.done()
      next()
    })
  },
  computed:{
    //mapping state from inUser module
    ...mapState(['inUser'])
  },
};
</script>
<style >

.dan-list{
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
}
.a-dan-list-wrapp{
}
.a-dan-list-container{
  height: 100%;
  margin-top: 50px ;
  padding: 0px 30px;
  background-color: transparent;
  border-radius: 2px;
  font-family: Helvetica, Arial, sans-serif;
}
.a-dan-list-container-two{
  margin: 0px 0px;
  padding: 0px 30px;
  background-color: transparent;
  border-radius: 2px;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
