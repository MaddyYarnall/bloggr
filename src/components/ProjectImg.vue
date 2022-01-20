<template>
  <div class="col-md-4">
    <img :src="image" class="project-image img-fluid rounded" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {}
  }
}
</script>


<style lang="scss" scoped>
</style>