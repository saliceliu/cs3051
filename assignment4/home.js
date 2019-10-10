const Home = { template: '<div>Home</div>' }
const Menu = { template: '<div>Menu</div>' }
const routes = [
{ path: '/home', component: Home },
{ path: '/menu', component: Menu }
]
const router = new VueRouter({
routes // short for `routes: routes`
})
const app = new Vue({
el: '#app',
router
})