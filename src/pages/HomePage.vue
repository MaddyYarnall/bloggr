<template>
  <div class="row">
    <Project v-for="p in project" :key="p.id" :project="p" />
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
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>

