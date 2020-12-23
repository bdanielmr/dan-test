<template>
<!-- Page create an id user -->
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
        <!-- Form Page to create an id user -->
        <form @submit.prevent="createUser">
          <div class="a-dan-create-inputs">
            <dan-input
              :class="{ error: $v.user.name.$error }"
              @blur="$v.user.name.$touch()"
              @modelUser="userModel"
              placeholderInput="Name"
            />
            <template v-if="$v.user.name.$error">
              <p v-if="!$v.user.name.required" class="errorMessge">
                name is required
              </p>
            </template>
            <dan-input
              :class="{ error: $v.user.email.$error }"
              @blur="$v.user.email.$touch()"
              @modelUser="userEmail"
              placeholderInput="Email"
            />
            <template v-if="$v.user.email.$error">
              <p v-if="!$v.user.email.required" class="errorMessge">
                email is required
              </p>
            </template>
            <dan-input @emitSelect="sendSelect" :norInput="false" />
          </div>
          <!-- Sumit buttom an create an id user -->
          <div class="a-dan-create-button">
            <dan-button
              type="submit"
              :disabled="$v.$anyError"
              bgColorT="rgb(37, 37, 37)"
              bgColorB="rgb(248, 93, 150,0.1)"
            >
              Generate
            </dan-button>
            <p
              v-if="$v.$anyError"
              :style="{ 'font-size': '13px' }"
              class="errorMessge"
            >
              Please fill out the required field(s)
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import DanInput from "@/components/DanInput.vue";
//import { mapState, mapGetters} from 'vuex'
import DanButton from "../components/DanButton.vue";
import { required } from "vuelidate/lib/validators";

export default {
  name: "DanCreate",
  components: {
    DanInput,
    DanButton
  },
  data() {
    return {
      user: this.createUpdateUserObject(),
      categorie: ""
    };
  },
  //validations from vuelidate
  validations: {
    user: {
      name: { required },
      email: { required }
    }
  },
  methods: {
    userModel(e) {
      this.user.name = e;
    },
    userEmail(e) {
      this.user.email = e;
    },
    sendSelect(e) {
      this.categorie = e;
      this.$store.state.categorie = e;
    },
    createUser() {
      //Create a new user only when pass validates
      this.$v.$touch();
      if (!this.$v.$invalid) {
        //access to inUser module and use action createUser that create a new user
        this.$store.dispatch("inUser/createUser", this.user);
        this.$router.push({
          name: "dan-modal",
          params: { username: this.user.name, userprop: this.user }
        });
        //push new value to user object 
        this.user.category = this.categorie;
        console.log("this obj user event", this.user);
        //reset data user 
        this.user = this.createUpdateUserObject();
      }
    },
    //function that create a user export data
    createUpdateUserObject() {
      const name = "";
      const email = "";
      const id = Math.floor(Math.random() * 10000000);
      return {
        id: id,
        name: name,
        email: email,
        category: "",
        fav: 1
      };
    }
  }
};
</script>

<style>
.dan-create {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: table;
  transition: opacity 0.3s ease;
  color: #586166;
}
.a-dan-create-wrape {
  display: table-cell;
  vertical-align: middle;
}
.a-dan-create {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 570px;
  height: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1) inset;
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.a-dan-create-user-title {
  font-size: 36px;
  margin-top: 25px;
}
.a-dan-create-user-title {
  font-size: 28px;
  display: flex;
}
.a-dan-create-user-sub-title {
  font-size: 16px;
  display: flex;
  color: rgba(0, 0, 0, 0.3);
}
.a-dan-create-img {
  display: flex;
}
.a-dan-create-inputs {
  margin-top: 25px;
}
.errorMessge {
  padding: 0px;
  margin-top: 2px;
}
.a-dan-create-button {
  margin-top: 13px;
}
@media all and (max-width: 860px) {
  .a-dan-create {
    width: 370px;
  }
}
@media all and (max-width: 425px) {
  .a-dan-create {
    width: 300px;
  }
}
@media all and (max-width: 325px) {
  .a-dan-create {
    width: 280px;
  }
}
</style>
