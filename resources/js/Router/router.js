import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Login from '../components/login/Login';
import Signup   from  '../components/login/Signup';
import Fourm from  '../components/Fourm/Fourm';
import Read from  '../components/Fourm/Read';
import Create from  '../components/Fourm/Create';
import Logout from  '../components/login/Logout';
import CreateCategory from  '../components/Category/CreateCategory';

const routes = [
  { path: '/login', component: Login },
  { path: '/signup', component: Signup },
  { path: '/fourm', component: Fourm, name: 'fourm' },
  { path: '/category', component: CreateCategory, name: 'category' },
  { path: '/logout', component: Logout, name: 'logout' },
  { path: '/question/:slug', component: Read, name: 'read' },
  { path: '/ask', component: Create, name: 'create' }
];

const router = new VueRouter({
   routes,
    hashbang: false,
    mode: 'history'
});

export default router;
