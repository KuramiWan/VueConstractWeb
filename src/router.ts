// 1.
import {createRouter, createWebHashHistory,type RouteRecordRaw } from 'vue-router'
// 2.
const routes : RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        component: () => import('./components/Layout.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('./views/Homepage.vue')
            },
            {
                path: '/contract',
                name: 'contract',
                component: () => import('./views/Contract.vue')
            },

            {
                path:'/kanban',
                name:'kanban',
                component:() => import('./views/Kanban.vue')
            },
            {
                path:'/archives',
                name:'archives',
                component:() => import('./views/Archives.vue')
            },
            {
                path:'/archives/detail/:id',
                name:'archives',
                component:() =>import('./views/ArchivesDetail.vue')
            }
        ]

    },
    {
        path:'/:pathMatch(.*)*',
        component:() =>  import("./pages/[...404].vue")
    },

    {
        path:'/admin',
        name:'admin',
        redirect:'/admin/login',
        component: () => import("./components/AdminLayout.vue"),
        children:[
            {
                path: 'login',
                name: 'login',
                component: () => import('./views/Login.vue')
            },
            {
                path: 'home',
                name: 'adminHome',
                component: () => import("./views/AdminHomepage.vue")
            }
        ]
    },


]

// 3.
const router = createRouter({
    history: createWebHashHistory(),  // 这里采用的是 hash 模式
    routes                            // 上面声明的路由规则
})

// 4.
export default router
