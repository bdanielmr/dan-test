<template>
<!--Component child base from icon that render reactive icon svg -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 576 512"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>
<script>
export default {
  name: 'IconBase',
  //custom props to modify icons
  props: {
    iconName: {
      type: String,
      default: "box",
      require: false,
    },
    width: {
      type: [Number, String],
      default: 18,
      require: false,
    },
    height: {
      type: [Number, String],
      default: 18,
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