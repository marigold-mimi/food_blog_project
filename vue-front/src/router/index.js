import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cookbooks from '../views/Cookbooks.vue'
import Posts from '../views/Posts.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import RecipesMoreInfo from '../views/moreInfo/RecipesMoreInfo.vue'
import PostsMoreInfo from '../views/moreInfo/PostsMoreInfo.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/recipes',
    name: 'Recipes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Recipes.vue')
  },
  {
    path: '/recipes/:recipe',
    name: 'RecipesMoreInfo',
    component: RecipesMoreInfo
  },
  {
    path: '/cookbooks',
    name: 'Cookbooks',
    component: Cookbooks
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/:post',
    name: 'PostsMoreInfo',
    component: PostsMoreInfo
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }

]

const router = new VueRouter({
  routes
})

export default router
