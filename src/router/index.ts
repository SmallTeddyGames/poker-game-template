const router = createRouter({
    history: createWebHistory('/poker-game-template/'),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/Game/Home.vue')
        }
    ]
})

export default router
