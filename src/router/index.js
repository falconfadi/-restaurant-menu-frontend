import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import EditCategoryView from '../views/EditCategoryView.vue'
import AddCategoryView from '../views/AddCategoryView.vue'
import store from '../store';
const routes = [
  {
    path: '/:id?',
    name: 'home',
    props:true,
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/edit-category/:id',
    name: 'edit_category',
    props:true,
    component: EditCategoryView
  },
  {
    path: '/add-category/:id',
    name: 'add_category',
    props:true,
    component: AddCategoryView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {

  if (to.meta.requiresAuth && !store.state.authToken) {
    next('/login');
  } else if (to.name=='login' && store.state.authToken) {
    next('/');
  } else {
    next();
  }
});
export default router
