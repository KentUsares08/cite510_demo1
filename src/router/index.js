import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import StringAppView from '../views/StringAppView.vue'
import HomeView from '../views/Dashboard.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ResearchVueView from '../views/ResearchVueView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import AxiosDemoView from '../views/AxiosDemoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/stringApp',
      name: 'StringAppView',
      component: StringAppView
    },
    {
    path: '/basicMath',
    name: 'basicMath',
    component: BasicMathView
    },
    {
    path: '/aboutMe',
    name: 'aboutMe',
    component: AboutMeView
    },
    {
      path: '/rschVue',
      name: 'Research',
      component: ResearchVueView
    },
    {
      path: '/calcuView',
      name: 'Calculator',
      component: CalculatorView
    },
    {
      path: '/axiosView',
      name: 'AxiosDemo',
      component: AxiosDemoView
    },

  ]
})

export default router
