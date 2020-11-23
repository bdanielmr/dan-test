<template>
  <!--Component custom icon that render icon svg path
  from icon base child component -->
  <div class="dan-a-icon">
    <p>
      <icon-base :iconColor="iconColor" :width="width" :height="height">
        <component :is="iconName"></component>
      </icon-base>
    </p>
  </div>
</template>
<script>
//import dependeces like icons on svg and iconBase
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
    //custom props styles
    iconName: {
      type: String,
      default: "IconStar",
      require: false
    },
    width: {
      type: [Number, String],
      default: 22,
      require: false
    },
    height: {
      type: [Number, String],
      default: 22,
      require: false
    },
    iconColor: {
      type: String,
      default: "currentColor",
      require: false
    }
  }
};
</script>

<style scoped>
.dan-a-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  padding: 3px;
}
</style>
