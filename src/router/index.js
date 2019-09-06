import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import hyFd from "../components/pages/hyFd.vue";
import qsLife from "../components/pages/qsLife.vue";
import lifeAll from "../components/pages/lifeAll.vue"
import lifeChannel from "../components/pages/lifeChannel.vue";
import lifeDetails from "../components/pages/lifeDetails.vue";
import lifeNews from "../components/pages/lifeNews.vue";

export default new Router({
    routes: [{
            path: "/",
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
                    path: "/",
                    redirect: "lifeAll"
                }
            ]
        },
        {
            path: "/",
            redirect: "/hyFd"
        }
    ]
})