import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import hyFd from "../components/pages/hyFd.vue";
import qsLife from "../components/pages/qsLife.vue";
import lifeAll from "../components/pages/lifeAll.vue"
import lifeChannel from "../components/pages/lifeChannel.vue";
import lifeDetails from "../components/pages/lifeDetails.vue";
import lifeNews from "../components/pages/lifeNews.vue";
import qsDetails from "../components/pages/qsDetails.vue";
import qsVideoDetails from "../components/pages/qsVideoDetails.vue";
import qsSearch from "../components/pages/qsSearch.vue";
export default new Router({
    routes: [{
            path: "/hyFd",
            component: hyFd
        }, {
            path: "/qsLife",
            component: qsLife,
            children: [{
                    path: "lifeAll",
                    component: lifeAll
                }, {
                    path: "lifeChannel",
                    component: lifeChannel
                }, {
                    path: "lifeDetails",
                    component: lifeDetails
                }, {
                    path: "lifeNews",
                    component: lifeNews
                },
                {
                    path: "",
                    redirect: "lifeAll"
                }
            ]
        },
        {
            path: "/qsDetails/:id",
            component: qsDetails
        },
        {
            path: "/qsVideoDetails",
            component: qsVideoDetails
        }, {
            path: "/qsSearch",
            component: qsSearch
        },
        {
            path: "/",
            redirect: "/qsLife"
        }
    ]
})