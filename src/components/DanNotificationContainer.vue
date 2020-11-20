<template>
  <div class="notification-container">
    <dan-notificationBar
      v-for="notification in this.$store.state.notification.notifications"
      :key="notification.id"
      :notification="notification"
    />

  </div>
</template>

<script>
import DanNotificationBar from '@/components/DanNotificationBar.vue'
import { mapState } from 'vuex'

export default {
  components: {
    DanNotificationBar
  },
  computed: {
    ...mapState(['notification/notifications'])
    }
}
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
