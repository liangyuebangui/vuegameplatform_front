import Vue from 'vue'
import VueRouter from 'vue-router'
import GameDetail from "@/views/GameDetail.vue";
import GameRoom from "@/views/GameRoom.vue";
import MainGame from "@/views/MainGame.vue";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GameDetail',
    component: GameDetail
  },
  {
    path: '/gameRoom',
    name: 'GameRoom',
    component: GameRoom
  },
  {
    path: '/mainGame',
    name: 'MainGame',
    component: MainGame
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
