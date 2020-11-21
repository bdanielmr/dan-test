<template>
  <div class="notification-bar" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timeout: null
    }
  },
  mounted() {
    this.timeout = setTimeout(() => this.removeNoti(this.notification), 5000)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  computed: {
    notificationTypeClass() {
      return `-text-${this.notification.type}`
    }
  },
  methods:{
    removeNoti(noti){
            this.$store.dispatch('notification/remove',noti)
    }
  }
}
</script>

<style scoped>
.notification-bar {
  margin: 1em 0 1em;
}
</style>
