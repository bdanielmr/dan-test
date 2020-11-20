<template>
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
// @ is an alias to /src

import DanCard from "@/components/DanCard.vue"

import { mapState  } from 'vuex';

export default {
  name: "DanList",
  components: {
    DanCard
  },
  computed:{
    ...mapState(['inUser'])
  },
  created(){
    this.showUsersApi()
  },
  methods:{
    showUsersApi(){
      this.$store.dispatch('inUser/fetchUsers')
    }
  }
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

  width: 100%;
  height: 100%;
  margin-top: 20px ;
  padding: 0px 30px;
  background-color: transparent;
  border-radius: 2px;
  font-family: Helvetica, Arial, sans-serif;
}
.a-dan-list-container-two{
  width: 100%;
  margin: 0px 0px;
  padding: 0px 30px;
  background-color: transparent;
  border-radius: 2px;
  font-family: Helvetica, Arial, sans-serif;
}
</style>
