import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { i18nMiddleware } from './middlewares/withI18nMiddleware';

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)", '/(fr|en)/:path*'],
};

const isProtectedRoute = createRouteMatcher(['/:api']);


export default clerkMiddleware((auth, req) => {
    if (isProtectedRoute(req)) auth().protect();

    return i18nMiddleware(req);
});
