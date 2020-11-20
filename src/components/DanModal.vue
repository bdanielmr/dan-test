<template>
  <transition name="modal">
    <div v-show="modalShow" class="modal-mask">
      <div class="modal-wrapper" 
      @click="modalShow= false; goToHome()">
        <div class="modal-container"  @click.stop>
          <div class="modal-header">
            <slot name="header">
                          {{this.$route.params.userprop.id}}
            </slot>
          </div>
          <div class="modal-body">
            <slot name="body">
                         {{this.$route.params.userprop.name}}
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
                          {{this.$route.params.userprop.email}}
                  <template >
                    <div @click="modalShow= false; goToHome()">
                      <dan-button >
                          OK
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
import DanButton from '@/components/DanButton.vue'
    export default {
        name:'DanModal',
        components:{
          DanButton
        },
        data(){
          return{
            modalShow: true
          }
        },
        methods:{
          goToHome(){
            this.$router.push({name:'dan-list'})
          }
        }
    }
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 570px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
</style>