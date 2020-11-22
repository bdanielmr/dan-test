<template>
  <div :style="changeClassStyle" class="dan-button">
      <button :class="['a-dan-button']" autofocus><slot /></button>
  </div>
</template>

<script>
export default {
    name: 'DanButton',
    data(){
      return{
        backgroundColorB: this.colorBackgroundB,
        backgroundB: this.bgColorB,
        colorText: this.bgColorT
      }
    },
    computed:{
      changeClassStyle(){
        return{
          '--background-bg-button': this.backgroundColorB,
          '--firs-bg-c': this.backgroundB,
          '--firs-c-text': this.colorText
        }
      }
    },
    props:{
      colorBackgroundB:{
        type: String,
        default:'rgba(249, 123, 170, 0.7)',
        required: false
      },
      bgColorB:{
        type: String,
        default:'rgba(249, 123, 170)',
        required: false
      },
      bgColorT:{
        type: String,
        default:'aliceblue',
        required: false
      }
    }
}
</script>

<style>
.dan-button{
  margin:5px
}
.a-dan-button{
 width: 275px;
 height: 44px;
 border-radius: 50px;
 border: 2px solid  rgba(249, 123, 170);
 background:  var(--firs-bg-c);
 color: var(--firs-c-text);
 font-size: 22px;
 font-weight: 600;
}
.a-dan-button:hover{
  background: var(--background-bg-button);
  color: rgb(37, 37, 37);
  border: 2px solid  rgba(249, 123, 170);
}
.a-dan-button:focus {
  outline:0;
  background: var(--background-bg-button);
  border: 2px solid  rgba(249, 123, 170);
  color: rgb(37, 37, 37);
}
@media all and (max-width:860px){
.a-dan-button{
  width: 220px;

}
}
@media all and (max-width:425px){
.a-dan-button{
  width: 150px;

}
}
</style>