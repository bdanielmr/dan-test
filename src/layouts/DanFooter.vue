<template>
<!--Component footer that use component DanButtom 
  to routerer home and create names pages -->
  <div class="dan-footer">
    <router-link
      style="text-decoration: none; color: inherit;"
      :to="{ name: 'dan-list' }"
    >
    <!--Component custom buttom DanButtom -->
      <dan-button bgColorT="rgb(37, 37, 37)" bgColorB="rgb(248, 93, 150,0.1)">
        Home
      </dan-button>
    </router-link>
    |
    <!--Component custom buttom DanButtom -->
    <router-link
      style="text-decoration: none; color: inherit"
      :to="{ name: 'dan-create' }"
    >
      <dan-button bgColorT="rgb(37, 37, 37)" bgColorB="rgb(248, 93, 150,0.1)">
        Create
      </dan-button>
    </router-link>
  </div>
</template>

<script>
import DanButton from "@/components/DanButton.vue";

export default {
  components: { DanButton }
};
</script>

<style>
.dan-footer {
  width: 100%;
  height: 55px;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1) inset;
}
</style>
