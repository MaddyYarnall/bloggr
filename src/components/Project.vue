<template>
  <div class="component">
    <img :src="project.coverImg" alt="" />
  </div>
</template>


<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
.cover-image {
  background-image: v-bind(coverImg);
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
}
</style>
