<template>
  <div class="dan-create">
    <div class="a-dan-create-wrape">
    <div class="a-dan-create">
      <div class="a-dan-create-img">
              <img width="100" src="../assets/oldMan.png" />
      </div>
      <div class="a-dan-create-user-title">
        Welcome, Create your Heroku ID
      </div>
      <div class="a-dan-create-user-sub-title">
        Enter your name and email to generate an Id
      </div>
      <div class="a-dan-create-inputs">
            <dan-input @modelUser="userModel" placeholderInput="Name"/>
            <dan-input @modelUser="userEmail" placeholderInput="Email"/>
            <dan-input @emitSelect='sendSelect' :norInput="false" />
      </div>
    <div @click="createUser" class="a-dan-create-button">
            <dan-button  bgColorT="rgb(37, 37, 37)" bgColorB="rgb(248, 93, 150,0.1)">Generate</dan-button>
    </div>
    </div>
    </div>

  </div>
</template>

<script>
import DanInput from '@/components/DanInput.vue'
//import { mapState, mapGetters} from 'vuex'
import DanButton from '../components/DanButton.vue'

export default {
  name:'DanCreate',
  components:{
    DanInput,
    DanButton

  },
  data(){
    return{
      user: this.createUpdateUserObject(),
      categorie:''
    }
  },
  methods:{
    userModel(e){
      this.user.name=e
    },
    userEmail(e){0
      this.user.email=e
    },
    sendSelect(e){
      this.categorie = e
      this.$store.state.categorie = e
    },
    createUser(){
      this.$store.dispatch('inUser/createUser', this.user)
      this.$router.push({
        name:'dan-modal',
        params:{username: this.user.name, userprop: this.user}
      })
      this.user.category= this.categorie
      console.log('this obj user event', this.user)
      this.user = this.createUpdateUserObject()
    },
    createUpdateUserObject(){
      const name = this.$store.state.user.user.name
      const email = this.$store.state.user.user.email
      const id = Math.floor(Math.random()*10000000)
      return{
        id: id,
        name: name,
        email: email,
        category: '',
      }
    }
  }
}
</script>

<style >
.dan-create{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity .3s ease;
  color: #586166;
}
.a-dan-create-wrape {
  display: table-cell;
  vertical-align: middle;
}
.a-dan-create{
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 570px;
  height: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow:0 1px 3px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1) inset;
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.a-dan-create-user-title{
  font-size: 36px;
  margin-top: 25px
}
.a-dan-create-user-title{
  font-size: 28px;
  display: flex;
}
.a-dan-create-user-sub-title{
  font-size: 16px;
  display: flex;
  color: rgba(0, 0, 0, 0.3)
}
.a-dan-create-img{
display: flex;
}
.a-dan-create-inputs{
  margin-top: 25px
}
.a-dan-create-button{
  margin-top:30px
}
</style>