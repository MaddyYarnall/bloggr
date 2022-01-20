import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjects() {
    const res = await api.get('api/blogs')
    console.log(res.data)
    AppState.projects = res.data
  }

}

export const projectsService = new ProjectsService