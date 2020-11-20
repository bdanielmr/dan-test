import Vue from "vue";
import VueRouter from "vue-router";
import DanList from "../views/DanList.vue";
import DanShow from "../views/DanShow.vue";
import DanCreate from "../views/DanCreate.vue";
import DanModal from "../components/DanModal.vue";
import PageIndex from "../views/Index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: PageIndex,
    children:[
      {
        path:'',
        name: "dan-list",
        component: DanList
      },
      {
        path: "user/",
        name:"dan-show",
        component: DanShow,
        children:[
          {
            path:':username',
            name:'dan-modal',
            component: DanModal,
          },
          {
            path:'create',
            name: 'dan-create',
            component: DanCreate
          }
        ],
        props: true
      },
    ],
    props: true
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;