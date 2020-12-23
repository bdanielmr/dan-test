<template>
  <!--Component show notification module -->
  <div class="notification-container">
    <dan-notificationBar
      v-for="notification in this.$store.state.notification.notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
//import child component DanNotificationBar base to DanNotificationContainer component
import DanNotificationBar from "@/components/DanNotificationBar.vue";
//mapping state from vuex store 
import { mapState } from "vuex";
export default {
  name: "DanNotificationContainer",
  components: {
    DanNotificationBar
  },
  computed: {
    //import notifications state from module notification width namespaced notification
    ...mapState(["notification/notifications"])
  }
};
</script>

<style>
.notification-container {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 40px;
  padding-bottom: 50px;
}
</style>
