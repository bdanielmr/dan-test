<template>
  <div class="dan-a-poke-icon">
    <p>
      <icon-base
        :iconColor="iconColor"
        :width="width"
        :height="height"
      >
        <component :is="iconName"></component>
      </icon-base>
    </p>
  </div>
</template>
<script>
import IconBase from "./IconBase.vue";
import IconHeart from "./icons/IconHeart.vue";
import IconList from "./icons/IconList.vue";
import IconCrown from "./icons/IconCrown.vue";
export default {
  name: "Icon",
  components: {
    IconHeart,
    IconBase,
    IconList,
    IconCrown
  },
  props: {
    iconName: {
      type: String,
      default: "IconStar",
      require: false,
    },
    width: {
      type: [Number, String],
      default: 22,
      require: false,
    },
    height: {
      type: [Number, String],
      default: 22,
      require: false,
    },
    iconColor: {
      type: String,
      default: "currentColor",
      require: false,
    },
  },
};
</script>

<style scoped>
.dan-a-poke-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 3px;
}
</style>