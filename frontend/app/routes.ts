import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home/index.tsx"),
  route("login", "routes/login/index.tsx"),
  route("register", "routes/register/index.tsx"),
  route("dashboard/client", "routes/dashboard/client.tsx"),
  route("dashboard/craftsman", "routes/dashboard/craftsman/index.tsx"),
] satisfies RouteConfig;
