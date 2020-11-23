<template>
  <!-- component base from DanNotificationContainer 
      recive a object with notification values and renderer -->
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
export default {
  name: "DanNotificationBar",
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    };
  },
  mounted() {
    //mounted a time to message notification render in the dom 
    this.timeout = setTimeout(() => this.removeNoti(this.notification), 5000);
  },
  beforeDestroy() {
    //delete message notification after mounted
    clearTimeout(this.timeout);
  },
  computed: {
    //change styles  
    notificationTypeClass() {
      return `-text-${this.notification.type}`;
    }
  },
  methods: {
    //acction from store vuex to remove notification
    removeNoti(noti) {
      this.$store.dispatch("notification/remove", noti);
    }
  }
};
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
