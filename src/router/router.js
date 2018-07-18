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
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component:() => import('@/views/404.vue'),
        name: '',
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
//export default new Router({
//routes: [
//  {
//    path: '/',
//    name: 'HelloWorld',
//    component: HelloWorld
//  },	
//  {
//			path: '/components',
//			name:'/组件',
//			redirect: '/components/elementtable',
//			component: Index,
//			children: [
//				{
//					name:'elementtable',
//					path: 'elementtable',
//					component: ElementTable
//				}
//				]
//		}
//]
//})
