import { createRouter, createWebHistory } from 'vue-router'
import Settings from '../views/Settings.vue'
import Play from '../views/Play.vue'
import Main from '../views/Main.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [      
        { path: '/settings', name: 'settings', component: Settings },
        { path: '/play', name: 'play', component: Play },
        { path: '/:pathMatch(.*)*', name: 'main', component: Main }
    ]
});

export default router;