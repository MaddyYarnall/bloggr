<template>
  <div class="row">
    <Project v-for="p in projects" :key="p.id" :project="p" />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { projectsService } from '../services/ProjectsService.js'
import { AppState } from '../AppState.js'

export default {
  name: 'Home',
  setup() {
    onMounted(async () => {
      try {
        await projectsService.getProjects()
      } catch (error) {
        logger.log(error)
        Pop.toast(error, 'theres an error')
      }
    })
    return {
      projects: computed(() => AppState.projects),


    }
  }
}
</script>

<style scoped lang="scss">
</style>

