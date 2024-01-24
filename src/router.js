import { createRouter, createWebHistory } from "vue-router";
import AppHome from "./pages/AppHome.vue";
import AppPosts from "./pages/AppPosts.vue";
import SinglePost from "./pages/SinglePost.vue";
import AppContact from "./pages/AppContact.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/posts",
      name: "posts",
      component: AppPosts
    },
    {
      path: "/posts/:slug",
      name: "single-post",
      component: SinglePost
    },
    {
      path: "/contacts",
      name: "contacts",
      component: AppContact
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFound
    } 
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../pages/AboutView.vue"),
    // },
  ]
});

export default router;
