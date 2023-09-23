import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView/AboutView.vue'
import Skills from '../views/Skills/Skills.vue'
import Project from '../views/Project/Project.vue'
import Blog from '../views/Blog/Blog.vue'
import Workplace from '../views/Workplace/Workplace.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/skills',
      name: 'skills',
      component: Skills
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    },
    {
      path: '/workplace',
      name: 'workplace',
      component: Workplace
    }
  ]
})

export default router
