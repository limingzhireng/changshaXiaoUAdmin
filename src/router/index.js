import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "/menu"
        },
        {
            path: "/home",
            component: () =>
                import ("@/pages/Home/Home")
        },
        {
            path: "/menu",
            component: () =>
                import ("@/pages/Menu/Menu")
        },
        {
            path: "/menu/add",
            component: () =>
                import ("@/pages/Menu/Menuadd")
        },
        {
            path: "/menu/edit",
            component: () =>
                import ("@/pages/Menu/Menuadd")
        }
    ]
})