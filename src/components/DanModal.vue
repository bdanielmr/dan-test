<template>
  <!--
    Component modal to show data about object user
    that recived from route prop that get data from store vuex 
   -->
  <transition name="modal">
    <div v-show="modalShow" class="modal-mask">
      <div
        class="modal-wrapper"
        @click="
          modalShow = false;
          goToHome();
        "
      >
        <div class="modal-container" @click.stop>
          <!--Header Modal -->
          <div class="modal-header">
            <div class="modal-header-img">
              <div class="modal-header-img-capitalize-name">
                {{ nameReduce[0].charAt(0) | capitalize }}
              </div>
            </div>
          </div>
          <div class="modal-body">
            <!--Name User show Modal -->
            <div class="modal-body-name">
              {{ userprop.name }}
            </div>
            <!--Catagory User show Modal -->
            <div
              v-if="this.$route.params.userprop.category"
              class="modal-body-category"
            >
              {{ userprop.category }}
            </div>
            <div class="modal-body-category" v-else>
              {{ "Beginner" }}
            </div>
            <!--ranking and favorite User show Modal -->
            <div class="modal-body-icons">
              <div class="modal-body-crown-count">
                <div class="modal-body-icon-crown" @click="countRang">
                  <dan-icon
                    iconName="IconCrown"
                    :icon-color="true ? 'rgba(14, 110, 219)' : '#BFBFBF'"
                    width="23px"
                    height="23px"
                  />
                </div>
                <div
                  :style="{
                    'font-size': '26px',
                    'font-weight': 600,
                    'margin-top': '25px'
                  }"
                  class="model-body-icon-crown-count"
                >
                  <p>36%</p>
                </div>
              </div>
              <div class="modal-body-star-count">
                <div class="modal-body-icon-star" @click="countFav">
                  <dan-icon
                    iconName="IconHeart"
                    :icon-color="true ? 'rgba(137, 29, 209)' : '#BFBFBF'"
                    width="28px"
                    height="28px"
                  />
                </div>
                <div
                  :style="{
                    'font-size': '28px',
                    'font-weight': 600,
                    'margin-top': '25px'
                  }"
                  class="model-body-icon-star-count"
                >
                <!-- {{favorite.favorites}} -->
                <div v-if="userprop.fav<=1">
                    <p>0</p>
                </div>
                <div :key="fa.id" v-for="fa in favorite.favorites">
                  <p v-if="fa.id===userprop.id">{{fa.fav}}</p>
                </div>
                  <!-- 
                  <div :key="index" v-for="(favo, index) in favorite.favorites">
                    <div v-if="userprop.id == favo.id">
                      {{ favo.fav }}
                    </div>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <template>
                <div
                  @click="
                    modalShow = false;
                    goToHome();
                  "
                >
                <!--Buttom share data User show Modal -->
                  <dan-button
                    bgColorT="rgb(37, 37, 37)"
                    bgColorB="rgb(248, 93, 150,0.1)"
                  >
                    Share
                  </dan-button>
                </div>
              </template>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
//import components dependences and mapping vuex state
import DanButton from "@/components/DanButton.vue";
import DanIcon from "@/components/DanIcon/Icon.vue";
import { mapState } from "vuex";
export default {
  name: "DanModal",
  components: {
    DanButton,
    DanIcon
  },
  computed: {
    //get state from store vuex
    ...mapState(["favorite"])
  },
  //prop from vue router
  props: ["userprop"],
  data() {
    return {
      modalShow: true,
      nameReduce: this.$route.params.userprop.name.split(" ")
    };
  },
  //local filter that capitalize first letter
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }, 
  methods: {
    //function do return home page
    goToHome() {
      this.$router.push({ name: "dan-list" });
    },
    //obtain module favorite from vuex and get acctions from store
    countFav() {   
      console.log("this user router favorite UserProp", this.userprop);
      this.$store.dispatch("favorite/addFavorite", this.userprop);
    },
    removeFave() {
      this.$store.dispatch("favorite/remove", this.userprop);
    },
    countRang() {}
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
.modal-container {
  width: 370px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}
.modal-header {
  display: flex;
  justify-content: center;
}
.modal-header-img {
  width: 120px;
  height: 120px;
  display: flex;
  border: 2px solid rgb(248, 93, 150);
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgb(248, 93, 150, 0.1);
}
.modal-header-img-capitalize-name {
  font-size: 46px;
  font-weight: 600;
  color: black;
}
.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}
.modal-body {
  margin: 20px 0;
}
.modal-body-name {
  font-size: 28px;
  font-weight: 600;
}
.modal-body-icons {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 150px;
  width: 270px;
}
.modal-body-icon-crown {
  width: 50px;
  height: 50px;
  padding: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(14, 110, 219, 0.08);
  border: 2px solid rgba(14, 110, 219);
}
.modal-body-icon-crown:hover {
  border: 2px solid rgba(14, 110, 219);
  background: rgba(14, 110, 219, 0.8);
}
.modal-body-icon-star {
  width: 50px;
  height: 50px;
  display: flex;
  padding-top: 3px;
  padding-left: 3px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  border: 2px solid rgba(137, 29, 209);
  background: rgba(137, 29, 209, 0.08);
}
.modal-body-icon-star:hover {
  background: rgba(137, 29, 209, 0.8);
  border: 2px solid rgba(137, 29, 209);
}
.modal-body-category {
  margin: 10px;
  font-weight: 500;
}
.modal-default-button {
  float: right;
}
.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity: 0;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@media all and (max-width: 860px) {
  .modal-body-icons {
    width: 240px;
  }
  .modal-container {
    width: 290px;
  }
}
@media all and (max-width: 425px) {
  .modal-body {
    margin: 0px 0;
  }
  .modal-body-icons {
    height: 100px;
    width: 240px;
  }
  .modal-container {
    height: 300px;
    width: 240px;
  }
  .modal-footer {
    padding: 30px;
    margin-bottom: 40px;
  }
}
@media all and (max-width: 320px) {
  .modal-container {
  }
}
</style>
