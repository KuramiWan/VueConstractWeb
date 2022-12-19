// 1.
import {createRouter, createWebHashHistory,type RouteRecordRaw } from 'vue-router'
// 2.
const routes : RouteRecordRaw[] = [
    {
        path: '/',
        name: 'layout',
        redirect: '/home',
        meta:{
            title: '用户'
        },
        component: () => import('./components/Layout.vue'),
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('./views/Homepage.vue'),
                meta:{
                    title: '首页'
                }
            },
            {
                path: '/contract',
                name: 'contract',
                component: () => import('./views/Contract.vue'),
                meta:{
                    title:'预约界面'
                }
            },

            {
                path:'/kanban',
                name:'kanban',
                component:() => import('./views/Kanban.vue'),
                meta:{
                    title: '看板界面'
                }
            },
            {
                path:'/archives',
                name:'archives',
                component:() => import('./views/Archives.vue'),
                meta:{
                    title: '归档页面'
                }
            },
            {
                path:'/announcement/:id',
                name: 'Announcement',
                component:() => import('./views/Announcement.vue'),
                meta:{
                    title: '公告页'
                }
            },
            {
                path:'/archives/detail/:id',
                name:'archives',
                component:() =>import('./views/ArchivesDetail.vue'),
                meta:{
                    title: '详情页'
                }
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
        redirect:'/login',
        component: () => import("./components/AdminLayout.vue"),
        meta:{
            requiresAuth: true,
            title: '管理员'
        },
        children:[
            {
                path: '/admin/ticketManagementHome',
                name: 'ticketManagementHome',
                component: () => import("./views/TicketManagement.vue"),
                meta: {
                    title: '预约管理'
                },
            },
            {
                path: '/admin/ticketManagement/:id',
                name:'ticketManagement',
                component: () => import("./views/AlterTicket.vue"),
                meta:{
                    title: '修改预约单'
                }
            }

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('./views/Login.vue'),
        meta: {
            title: '登录页面'
        }
    }
]

// 3.
const router = createRouter({
    history: createWebHashHistory(),  // 这里采用的是 hash 模式
    routes                            // 上面声明的路由规则
})
router.beforeEach(async (to,from) =>{
    if (to.matched.some((record) =>{
        return record.meta.requiresAuth
    })&&!isAuthenticated()&&to.name !== "Login")
    {
        return {name :"Login"}
    }
})
const isAuthenticated = () =>{
    let item = localStorage.getItem("Authenticate");
    return item != null;
}
// 4.
export default router
