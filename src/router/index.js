import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Profile from '@/views/profile/Profile'
import Category from '@/views/category/Category'
import Cart from '@/views/cart/Cart'
Vue.use(Router)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err);
};
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};
const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      // component: ()=>import('@/components/Home') 懒加载的方式
      component: Home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/category',
      name: 'Category',
      component: Category,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      meta: {
        title: '个人中心'
      }
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
      meta: {
        title: '购物车'
      } 
    }
  ],
  mode:'history' 
})
// 使用路由守卫来修改标题
router.beforeEach((to,from,next) => {
  window.document.title = to.meta.title
  next()
})
export default router
