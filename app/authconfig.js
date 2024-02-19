export const authConfig = {
  providers: [],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request }) {
      // check session for user
      const isLoggedIn = auth?.user;
      // check if we are on the dashboard
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        // if logged in and on the dashboard, return true so user can stay on the dashboard
        if (isLoggedIn) return true;
        return false; // if false, user will be redirected to "/login" (defined above)
      } else if (isLoggedIn) {
        // if logged in and not of the dashboard, send user to the dashboard
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }
      return true; // if we are not on dashboard, return true so user stays where they are
    },
  },
};
