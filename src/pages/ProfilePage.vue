<template>
  <div class="row cover-image"></div>
  <div class="row my-4">
    <div v-if="profile.id == account.id"></div>
  </div>
  <div class="row mt-4">
    <Project v-for="p in projects" :key="p.id" :project="p" />
  </div>
</template>


<script>
import { computed, watch, watchEffect } from '@vue/runtime-core';
import { useRoute } from 'vue-router'
import { profilesService } from '../services/ProfilesService.js'
import { projectsService } from '../services/ProjectsService.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      if (route.name == "Profile") {
        await profilesService.getProfile(route.params.id);
        await projectsService.getProjects("?creatorId =" + route.params.id);
      }
    });
    return {
      account: computed(() => AppState.account),
      projects: computed(() => AppState.projects),
      profile: computed(() => AppState.profile),
      coverImg: computed(() => `url(${AppState.profile.coverImg})`),
    };
  },
};
</script>


<style lang="scss" scoped>
</style>