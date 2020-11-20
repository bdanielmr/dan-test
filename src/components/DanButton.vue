<template>
  <div class="dan-button">
      <button class="a-dan-button"><slot /></button>
  </div>
</template>

<script>
export default {
    name: 'DanButton',

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
 background: rgb(249, 123, 170);
 color: aliceblue;
 border:#F22539;
 font-size: 22px;
 font-weight: 600;
}
.a-dan-button:focus {
  outline:0;
  background: rgb(248, 93, 150);}

</style>