import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/blog/Blog.vue"),
    children: [
      {
        path: "article",
        name: "BlogArticleEmpty",
        component: () => import("@/views/blog/BlogArticle.vue"),
      },
      {
        path: "articles/*",
        name: "BlogArticle",
        component: () => import("@/views/blog/BlogArticle.vue"),
      },
      {
        path: "articles",
        name: "BlogArticles",
        component: () => import("@/views/blog/BlogArticles.vue"),
      },
      {
        path: "archive",
        name: "BlogArchive",
        component: () => import("@/views/blog/BlogArchive.vue"),
      },
      {
        path: "projects",
        name: "BlogProjects",
        component: () => import("@/views/blog/BlogProjects.vue"),
      },
      {
        path: "about",
        name: "BlogAbout",
        component: () => import("@/views/blog/BlogAbout.vue"),
      },
    ],
    redirect: "/blog/articles",
  },
  {
    path: "/player",
    name: "MediaPlayer",
    component: () => import("@/views/app/Player.vue"),
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("@/views/app/Editor.vue"),
  },
  {
    path: "/viewer",
    name: "Viewer",
    component: () => import("@/views/app/Viewer.vue"),
  },
  {
    path: "/explorer",
    name: "Explorer",
    component: () => import("@/views/app/Explorer.vue"),
  },
  {
    path: "/browser",
    name: "Browser",
    component: () => import("@/views/app/Browser.vue"),
  },
  {
    path: "/desktop",
    name: "Desktop",
    component: () => import("@/views/desktop/Desktop.vue"),
  },
  {
    path: "/",
    redirect: "/desktop",
  },
  {
    path: "*",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
