<template>
  <header class="dan-header">
    <router-link style="text-decoration: none; color: inherit;" :to="{name: 'dan-list'}">
    <div class="a-dan-header">
      <div :style="{color:'#586166', 'margin-left': '150px'}">Heroku</div> 
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
    box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.a-dan-header{
  display: flex;
}
</style>