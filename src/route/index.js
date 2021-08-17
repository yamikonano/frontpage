import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter(
    {
        history:createWebHistory(),
        routes:[

            {
                path:'/login',
                component:()=>import('../pages/Views/Login.vue')
            }
        ]
    }
)

export default router