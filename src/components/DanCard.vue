<template>
<!--Component custom card that render a user 
  and show some data to router to Component DanModal-->
  <router-link
    style="text-decoration: none; color: inherit;"
    :to="{ name: 'dan-modal', params: { userprop: user, username: user.name } }"
  >
    <div
      class="dan-card"
      @mouseenter="hoverCard = true"
      @mouseleave="hoverCard = false"
    >
    <!-- render name user -->
      <div class="a-dan-body-text">
        <div class="a-dan-text-name">
          {{ user.name }}
        </div>
    <!-- render email only destok user-->
        <div v-show="hoverCard" class="a-dan-text-email">
          {{ user.email }}
        </div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "DanCard",
  data() {
    return {
      hoverCard: false
    };
  },
  props: {
    user: {
      type: Object,
      default: () => {},
      required: false
    }
  }
};
</script>

<style>
router-link a {
  text-decoration: none !important;
}
.dan-card {
  margin: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 570px;
  height: 65px;
  transition: 0.5s;
  transform: scale(1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3), 0 0 3px rgba(0, 0, 0, 0.1) inset;
  border-radius: 5px;
  font-size: 22px;
  font-weight: 500;
}
.dan-card:hover {
  transform: scale(1.1);
}
.a-dan-card-body-text {
  flex-direction: column;
}
.a-dan-text-name {
}
.a-dan-text-name:hover {
}
.a-dan-text-email {
  font-size: 15px;
  font-weight: 400;
}
.a-dan-text-email:hover {
}
@media all and (max-width: 860px) {
  .dan-card {
    width: 370px;
  }
}
@media all and (max-width: 425px) {
  .dan-card {
    width: 270px;
  }
}
</style>
