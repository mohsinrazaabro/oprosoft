const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Index.vue") }],
  },
  {
    path: "/services",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Services.vue") }],
  },

  {
    path: "/contact",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Contact.vue") }],
  },

  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/About.vue") }],
  },

  {
    path: "/products",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Products.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
