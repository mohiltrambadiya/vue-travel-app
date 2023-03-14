import { createRouter, createWebHistory } from 'vue-router'
import sourceData from "../data.json"

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/Home.vue"),
        alias: "/home"
    },
    // {
    //     path: "/home",
    //     redirect: {name: "Home"}
    // },
    {
        path: "/destination/:id/:slug",
        name: "destination-detail",
        component: () => import("../views/DestinationDetail.vue"),
        props: route => ({id: parseInt(route.params.id)}),
        beforeEnter(to, from) {
            const exist = sourceData.destinations.find(destination => destination.id === parseInt(to.params.id))
            if(!exist) return {name:"NotFound"}
        },
        children: [
            {
                path: ":experienceSlug",
                name: "experience-show",
                component: () => import("../views/ExperienceShow.vue"),
                props: route => ({...route.params, id: parseInt(route.params.id)})
            }
        ]
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue")
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if(to.name == "experience-show") {
            return savedPosition || new Promise((resolved) =>  {
                setTimeout(() => resolved({bottom: 0, behavior:"smooth"}), 300)
            })
        }
        return savedPosition || new Promise((resolved) =>  {
            setTimeout(() => resolved({top: 0, behavior:"smooth"}), 300)
        })
    }
})

export default router