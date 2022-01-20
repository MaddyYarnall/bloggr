import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"

class ProjectsService {
  async getProjects(query = '') {
    const res = await api.get('api/blogs' + query)
    console.log(res.data)
    AppState.projects = res.data
  }

}

export const projectsService = new ProjectsService