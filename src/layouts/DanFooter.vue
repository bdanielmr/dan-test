<template>
  <div class="dan-footer">
     <router-link style="text-decoration: none; color: inherit;" :to="{name: 'dan-list'}"><dan-button>home</dan-button></router-link> |
     <router-link style="text-decoration: none; color: inherit;" :to="{name: 'dan-create'}"><dan-button>create</dan-button></router-link>
  </div>
</template>

<script>
import DanButton from '@/components/DanButton.vue'

export default {
  components: { DanButton },

}
</script>
ghj

<style>
.dan-footer{
  width: 100%;
  height: 55px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items:center;
  justify-content: center;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
</style>