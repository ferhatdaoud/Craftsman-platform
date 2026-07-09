import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("dashboard", "routes/dashboard/index.tsx"),
  route("login", "routes/login/index.tsx"),
  route("register", "routes/register/index.tsx"),
] satisfies RouteConfig;
