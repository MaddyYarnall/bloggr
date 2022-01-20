<template>
  <div class="col-6">
    <div class="border rounded shadow m-2">
      <img
        :src="project.imgUrl"
        :data-bs-target="'#project-' + project.id"
        data-bs-toggle="modal"
        class="rounded selectable project-image"
        alt=""
      />
    </div>
  </div>

  <Modal :id="'project-' + project.id">
    <template #modal-title>
      <h4>{{ project.title }}</h4>
    </template>
    <template #modal-body>
      <div class="row imgUrl"></div>
      <div class="row justify-content-center">
        <h4 class="text-center my-2">Blog Post</h4>
        <ProjectImg v-for="p in project.projectImgs" :key="p.id" :image="p" />
      </div>
      <div class="row my-3">
        <div class="col-12">
          <div
            class="d-flex align-items-center selectable"
            @click="goToProfile()"
          >
            <img
              :src="project.creator.picture"
              class="creator-image rounded-circle"
              alt=""
            />
          </div>
          <div v-if="project.creator">
            <h4 class="ms-4">{{ project.creator?.name }}</h4>
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useRouter } from "vue-router"
import { Modal } from 'bootstrap';

export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      async goToProfile() {
        Modal.getOrCreateInstance(document.getElementById("project-" + props.project.id)).toggle();
        router.push({
          name: "Profile",
          params: { id: props.project.creatorId },
        });
      },
      router,
      imgUrl: computed(() => `url(${props.project.imgUrl})`)
    };
  },
};
</script>


<style lang="scss" scoped>
.imgUrl {
  background-image: v-bind(imgUrl);
  background-size: cover;
  object-fit: contain;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  margin: 0;
}

.project-image {
  background-size: cover;
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.creator-image {
  height: 3rem;
  width: 3rem;
}
</style>
