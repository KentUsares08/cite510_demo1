import { createRouter, createWebHistory } from 'vue-router'
import BasicMathView from '../views/BasicMathView.vue'
import HomeView from '../views/Dashboard.vue'
import AboutMeView from '../views/AboutMeView.vue'
import ResearchVueView from '../views/ResearchVueView.vue'
import CalculatorView from '../views/CalculatorView.vue'
import AxiosDemoView from '../views/AxiosDemoView.vue'
import QuestionView from '../views/QuestionView.vue'
import RegisterView from '../views/RegisterView.vue'
import SignInView from '../views/SignInView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
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
      component: ResearchVueView,
      meta: {
        requiresAuth: true,
      },
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
    {
      path: '/questionView',
      name: 'Question',
      component: QuestionView
    },
    {
      path: '/registerView',
      name: 'Register',
      component: RegisterView
    },
    {
      path: '/signinView',
      name: 'SignIn',
      component: SignInView
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record)=> record.meta.requiresAuth)) {
    if (getAuth().currentUser) {
      next();
    } else {
      alert("You don't have access from here!");
      next("/");
    }
  } else {
    next();
  }
});

export default router
