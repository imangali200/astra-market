export default defineNuxtRouteMiddleware(() => {
  const router = useRouter();
  const token = useCookie("token");
  if (!token) {
    return router.push({
      path: "/login",
    });
  }
});
