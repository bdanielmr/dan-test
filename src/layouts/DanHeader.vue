<template>
  <header class="dan-header">
    <router-link style="text-decoration: none; color: inherit;" :to="{name: 'dan-list'}">
    <div class="a-dan-header">
      <div class="a-dan-header-logo">Heroku</div> 
      <div>User</div>
    </div>
    </router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style>
.dan-header{
    width: 100%;
    z-index: 999;
    display: flex;
    align-items: center;
    height: 55px;
    font-size: 26px;
    font-weight: 600;
    color: #f97baa;
    padding-left:150px ;
    box-shadow:0 1px 3px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1) inset;
}
.a-dan-header{
  display: flex;
  width: 100%;
  height: 55px;
  align-items: center;
}
.a-dan-header-logo{
  color:#586166;
}
@media all and (max-width:860px){
.dan-header{
  padding: 0px;
  align-items: center;
  justify-content: center;
}
}
</style>