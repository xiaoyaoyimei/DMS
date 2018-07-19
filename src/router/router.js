import Vue from 'vue'
import Router from 'vue-router'
import Full from '@/containers/Full'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Router)
Vue.use(ElementUI)
let routes = [
    {
        path: '/login',
        component:() => import('@/views/Login.vue'),
        name: '登录页',
        hidden: true
    },
    {
        path: '/404',
        component:() => import('@/views/404.vue'),
        name: '404',
        hidden: true
    },
    {
        path: '/',
        component: Full,
        name: '系统主页',
        iconCls: 'fa fa-home',//图标样式class
        leaf: true,//只有一个节点
        children: [
            { path: '/home',  component:() => import('@/views/home.vue'), name: '主页' }
        ]
    },
       {
        path: '/',
        component: Full,
        name: '产品',
        iconCls: 'fa fa-product-hunt',//图标样式class
        leaf: true,//只有一个节点
        children: [
            { path: '/product',  component:() => import('@/views/product/Product.vue'), name: '产品中心' }
        ]
    },
    {
        path: '/',
        component: Full,
        name: '系统管理',
        iconCls: 'fa fa-folder-open-o',
        children: [
            { path: '/zygl', component:() => import('@/views/xtgl/zygl.vue'), name: '资源管理' , iconCls: 'fa fa-tree',},
            { path: '/yhgl', component:() => import('@/views/xtgl/yhgl.vue'), name: '用户管理' , iconCls: 'fa fa-user',}
        ]
    },


    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];
const router = new Router({
    routes
});
export default router;

